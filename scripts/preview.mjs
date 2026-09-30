import { spawn } from 'node:child_process';
import { mkdirSync, openSync, closeSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const url = 'http://127.0.0.1:4173';
const lifetime = 60 * 60 * 1000;
const nextBin = resolve(root, 'node_modules/next/dist/bin/next');

function startNext() {
  return spawn(
    process.execPath,
    [nextBin, 'start', '--hostname', '127.0.0.1', '--port', '4173'],
    { cwd: root, stdio: 'inherit' },
  );
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

if (process.argv.includes('--serve')) {
  const child = startNext();
  console.log(`ODE preview: ${url}`);
  console.log(
    `Automatically stops at ${new Date(Date.now() + lifetime).toLocaleTimeString()}.`,
  );

  const shutdown = () => {
    stop(child);
    setTimeout(() => process.exit(0), 300);
  };
  setTimeout(shutdown, lifetime);
  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
  child.on('exit', (code) => process.exit(code ?? 0));
} else {
  try {
    const existing = await fetch(url, { signal: AbortSignal.timeout(1000) });
    if (existing.ok) {
      const body = await existing.text();
      if (body.includes('ODE — Good data. Real impact. Anywhere.')) {
        console.log(`ODE preview is already running: ${url}`);
        process.exit(0);
      }
    }
    throw new Error(
      `Port 4173 is already in use by another service. Stop it before starting the ODE preview.`,
    );
  } catch (error) {
    if (error instanceof Error && error.message.startsWith('Port 4173'))
      throw error;
  }

  const logDirectory = resolve(root, '.preview');
  mkdirSync(logDirectory, { recursive: true });
  const logFile = openSync(resolve(logDirectory, 'server.log'), 'a');
  const child = spawn(
    process.execPath,
    [fileURLToPath(import.meta.url), '--serve'],
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
      if (
        response.ok &&
        (await response.text()).includes(
          'ODE — Good data. Real impact. Anywhere.',
        )
      ) {
        console.log(`\nODE is ready at ${url}\n`);
        console.log('This preview automatically stops after one hour.');
        console.log(`To stop it sooner: kill ${child.pid}`);
        console.log('To restart: pnpm start:preview');
        process.exit(0);
      }
    } catch {
      // Next may still be binding its socket during the first readiness checks.
    }
  }
  stop(child);
  console.error(
    'Preview did not become ready. Check .preview/server.log for details.',
  );
  process.exit(1);
}
