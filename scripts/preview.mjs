import { spawn } from 'node:child_process';
import {
  createReadStream,
  existsSync,
  mkdirSync,
  openSync,
  closeSync,
  writeFileSync,
  statSync,
} from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const outDir = resolve(root, 'out');
const defaultPort = 4173;
const lifetime = 60 * 60 * 1000;
const TITLE_MARK = 'ODE · Open Data Ensemble';

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.otf': 'font/otf',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
};

function portFromArgs() {
  const flag = process.argv.find((arg) => arg.startsWith('--port='));
  if (flag) return Number(flag.slice('--port='.length));
  const index = process.argv.indexOf('--port');
  if (index !== -1 && process.argv[index + 1])
    return Number(process.argv[index + 1]);
  return defaultPort;
}

function urlFor(port) {
  return `http://127.0.0.1:${port}`;
}

function isInside(directory, file) {
  const rel = relative(directory, file);
  return rel !== '' && !rel.startsWith('..') && !rel.startsWith(`..${sep}`);
}

function fileForRequest(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0]);
  const normalized = normalize(decoded).replace(/^[\\/]+/, '');
  const candidates = [];

  if (!normalized || normalized === '.') {
    candidates.push(join(outDir, 'index.html'));
  } else {
    const direct = join(outDir, normalized);
    candidates.push(direct, join(direct, 'index.html'));
    if (!extname(normalized)) candidates.push(`${direct}.html`);
  }

  for (const candidate of candidates) {
    if (
      !isInside(outDir, candidate) &&
      candidate !== join(outDir, 'index.html')
    )
      continue;
    if (existsSync(candidate) && statSync(candidate).isFile()) return candidate;
  }
  return join(outDir, '404.html');
}

function startStaticServer(port) {
  if (!existsSync(join(outDir, 'index.html'))) {
    console.error(
      'No static build found in out/. Run pnpm build before starting the preview.',
    );
    process.exit(1);
  }

  const server = createServer((request, response) => {
    const file = fileForRequest(request.url ?? '/');
    const type =
      mimeTypes[extname(file).toLowerCase()] ?? 'application/octet-stream';
    const missing =
      file.endsWith(`${sep}404.html`) && !request.url?.startsWith('/404');
    response.writeHead(missing ? 404 : 200, {
      'Content-Type': type,
      'Cache-Control': 'no-cache',
    });
    createReadStream(file)
      .on('error', () => {
        if (!response.headersSent) response.writeHead(500);
        response.end('Preview server error');
      })
      .pipe(response);
  });

  server.listen(port, '127.0.0.1');
  return server;
}

function stop(child) {
  if (!child.pid) return;
  if (process.platform === 'win32') {
    spawn('taskkill', ['/pid', String(child.pid), '/t', '/f'], {
      stdio: 'ignore',
    });
    return;
  }
  child.kill('SIGTERM');
}

const port = portFromArgs();
const url = urlFor(port);

if (process.argv.includes('--serve')) {
  const server = startStaticServer(port);
  console.log(`ODE preview: ${url}`);

  const shutdown = () => {
    server.close(() => process.exit(0));
    setTimeout(() => process.exit(0), 300);
  };
  if (process.argv.includes('--ttl')) {
    console.log(
      `Automatically stops at ${new Date(Date.now() + lifetime).toLocaleTimeString()}.`,
    );
    setTimeout(shutdown, lifetime);
  }
  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
} else {
  try {
    const existing = await fetch(url, { signal: AbortSignal.timeout(1000) });
    if (existing.ok) {
      const body = await existing.text();
      if (body.includes(TITLE_MARK)) {
        console.log(`ODE preview is already running: ${url}`);
        process.exit(0);
      }
    }
    throw new Error(
      `Port ${port} is already in use by another service. Stop it before starting the ODE preview.`,
    );
  } catch (error) {
    if (error instanceof Error && error.message.startsWith(`Port ${port}`))
      throw error;
  }

  const logDirectory = resolve(root, '.preview');
  mkdirSync(logDirectory, { recursive: true });
  const logFile = openSync(resolve(logDirectory, 'server.log'), 'a');
  const child = spawn(
    process.execPath,
    [
      fileURLToPath(import.meta.url),
      '--serve',
      '--port',
      String(port),
      '--ttl',
    ],
    {
      cwd: root,
      detached: true,
      stdio: ['ignore', logFile, logFile],
    },
  );
  closeSync(logFile);
  child.on('error', (error) => {
    console.error(`Could not start the preview: ${error.message}`);
    process.exit(1);
  });
  child.unref();
  writeFileSync(resolve(logDirectory, 'server.pid'), `${child.pid}\n`);

  for (let attempt = 0; attempt < 40; attempt += 1) {
    await new Promise((done) => setTimeout(done, 250));
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(500) });
      if (response.ok && (await response.text()).includes(TITLE_MARK)) {
        console.log(`\nODE is ready at ${url}\n`);
        console.log('This preview automatically stops after one hour.');
        console.log(`To stop it sooner: kill ${child.pid}`);
        console.log('To restart: pnpm start:preview');
        process.exit(0);
      }
    } catch {
      // The static server may still be binding its socket.
    }
  }
  stop(child);
  console.error(
    'Preview did not become ready. Check .preview/server.log for details.',
  );
  process.exit(1);
}
