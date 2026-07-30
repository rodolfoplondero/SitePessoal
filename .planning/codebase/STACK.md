# Technology Stack

**Analysis Date:** 2026-07-30

## Languages

**Primary:**
- JavaScript (ES2020+, JSX) - all of `src/`

**Secondary:**
- CSS (custom properties, media queries) - `src/index.css`
- HTML - `index.html`

No TypeScript in source (`.jsx`/`.js` only), though `@types/react` and `@types/react-dom` are present as devDependencies for editor tooling (`package.json`).

## Runtime

**Environment:**
- Browser (client-side only, no server runtime). Built as a static site.
- CI uses Node 22 (`.github/workflows/deploy.yml`: `actions/setup-node@v4`, `node-version: 22`). No `.nvmrc` present in repo root.

**Package Manager:**
- npm (lockfile: `package-lock.json` present). CI runs `npm ci`.

## Frameworks

**Core:**
- React 18.3.1 (`react`, `react-dom`) - UI rendering, `src/main.jsx` mounts `<App />` via `ReactDOM.createRoot` in `React.StrictMode`.

**Testing:**
- None. No test runner configured (`package.json` has no test script; CLAUDE.md confirms "There is no test suite configured in this repo").

**Build/Dev:**
- Vite 5.4.1 (`vite.config.js` - `@vitejs/plugin-react` only, no `base` override since this is a user-page GitHub Pages repo).
- ESLint 9.9.0, flat config (`eslint.config.js`) with `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`. `dist` is excluded from linting.

## Key Dependencies

**Critical:**
- `react` ^18.3.1 / `react-dom` ^18.3.1 - only runtime dependencies declared in `package.json`. No routing, state-management, or UI-component libraries.

**Infrastructure:**
- None (no HTTP client, no data-fetching library — site is fully static, content sourced from `src/data.js`).

## Configuration

**Environment:**
- No `.env` files present in repo.
- Vite's built-in `import.meta.env.BASE_URL` is used for asset paths (e.g. `profile.resumeFile` in `src/data.js`) rather than hard-coded absolute paths.

**Build:**
- `vite.config.js` - minimal, React plugin only.
- `eslint.config.js` - flat config, see above.
- No `tsconfig.json` (plain JS project; `@types/*` packages exist only for IDE IntelliSense).

## Platform Requirements

**Development:**
- Node.js (version aligned with CI's Node 22; no explicit minimum pinned in `package.json` `engines`).
- `npm install` then `npm run dev` (Vite dev server).

**Production:**
- Static hosting: GitHub Pages, served from the repo root domain `https://rodolfoplondero.github.io/` (user-page, not project-page — repo name is `rodolfoplondero.github.io`).
- Build output: `dist/` (Vite default), published via `actions/upload-pages-artifact@v3` + `actions/deploy-pages@v4` in `.github/workflows/deploy.yml`.
- Repo Pages source must be set to "GitHub Actions" (not "Deploy from a branch") to avoid a race with the legacy branch-based Pages build — noted in root `CLAUDE.md`.

---

*Stack analysis: 2026-07-30*
