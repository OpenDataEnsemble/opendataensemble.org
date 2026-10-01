# ODE website

A standalone marketing website for Open Data Ensemble. Built with React, TypeScript, Next.js, and pnpm; independent of the mobile, desktop, and portal applications.

## Run locally

Use Node.js 22.13+ and pnpm 11.1.2 (the package declares its pnpm version).

```sh
pnpm install
pnpm dev
```

Open <http://127.0.0.1:3000>. The development server supports hot reload; stop it with Ctrl+C.

### One-hour background preview

```sh
pnpm build
pnpm start:preview
```

Open <http://127.0.0.1:4173>. This serves the production build on loopback only and automatically stops after one hour. The command prints its PID and a command to stop it sooner. Logs and the PID are in the ignored `.preview/` directory. Run `pnpm start:preview` again after the preview expires. Rebuild after editing source files, or use `pnpm dev` for live development. `pnpm start` serves the same production build on port 3000.

## Validate

```sh
pnpm lint
pnpm format:check
pnpm typecheck
pnpm build
pnpm exec playwright install chromium
pnpm test
```

If Google Chrome is already installed, skip the browser download:

```sh
PLAYWRIGHT_CHROMIUM_CHANNEL=chrome pnpm test
```

Tests automatically start and stop a local preview if one isn't already running. Browser tests cover desktop and mobile rendering, runtime errors, tabs and keyboard navigation, the offline/sync demo, dialog dismissal and focus restoration, FAQs, internal link targets, and horizontal overflow at seven viewport widths. Screenshots are written to `.preview/`; failure traces are under `test-results/`.

## Content and behavior

- Product copy follows this repository's offline-first, clearinghouse architecture. Documentation and community links use the public ODE website and GitHub.
- The interactive demo is explicitly a **simulation**, not a Formulus session. Sample observations live in React state only. Closing the dialog discards them; no observations are persisted or transmitted.
- Brand treatment and globe artwork are custom SVGs. MuseoModerno is stored in `app/fonts` and served by this site; there are no runtime font services, trackers, API keys, or analytics.
- Native dialogs and disclosure elements, accessible tabs, visible focus states, mobile navigation, a skip link, and reduced-motion styles are included.
- `pnpm build` produces a Next.js production build. Serve it with `pnpm start`, or deploy the project to a Next.js host.

## Main files

- `app/layout.tsx`: document metadata, fonts, and global styles
- `app/page.tsx`: home route
- `src/App.tsx`: page content, navigation, product tabs, FAQ, and calls to action
- `src/styles.css`: design system, layouts, responsive styles, and demo styling
- `src/FieldGlobe.tsx` / `src/FieldGlobe.css`: hero artwork and motion
- `src/Demo.tsx`: sample collection and simulated synchronization
- `src/Icons.tsx`: local SVG iconography and the website's ODE wordmark symbol
- `scripts/preview.mjs`: time-limited local preview launcher
- `tests/website.spec.ts`: browser smoke and interaction tests
