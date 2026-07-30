# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page personal landing page (résumé + portfolio) for Rodolfo Londero, built with React + Vite and deployed to GitHub Pages. There is no backend — it's a static site.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start the Vite dev server
npm run build     # production build to dist/
npm run preview   # serve the production build locally
npm run lint      # eslint .
```

There is no test suite configured in this repo.

## Architecture

**Content lives in one place.** `src/data.js` exports the entire editable content of the site — `profile`, `about`, `skills`, `projects`, `experience`, `education`. Every section component (`src/components/*.jsx`) is a pure presentational component that maps over this data; it holds no copy of its own. Adding a project, job, or skill means editing `src/data.js`, not the components.

**Single page, section-per-component.** `src/App.jsx` composes the page top to bottom: `Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Resume`, `Contact`, `Footer`. Each section component renders a `<section id="...">` whose `id` must match the corresponding anchor in the `links` array at the top of `src/components/Navbar.jsx` — the navbar's scroll-spy (`IntersectionObserver` over those same ids) and the smooth-scroll anchors both depend on that match.

**Scroll-reveal animation pattern.** `src/hooks/useInView.js` wraps `IntersectionObserver` in a hook; `src/components/Reveal.jsx` is a thin wrapper (`<Reveal as="h2" delay={100}>`) that applies the `reveal`/`is-visible` CSS classes once its target scrolls into view. Section components wrap their content in `<Reveal>` rather than reimplementing observer logic. All motion (this, the hero's entrance/blob animations, the avatar ring spin) is neutralized globally under `@media (prefers-reduced-motion: reduce)` in `src/index.css` — new animations should be added as CSS so they're covered by that same block, not as JS-driven motion that bypasses it.

**Theming via CSS custom properties.** `src/index.css` defines color tokens on `:root`, overridden both by `@media (prefers-color-scheme: dark)` and by `:root[data-theme="dark"]` / `:root[data-theme="light"]` (for a possible future manual toggle — there's no toggle UI yet). Components should consume `var(--color-*)` tokens rather than hard-coding colors. Note `--color-on-accent` exists specifically because the dark-theme accent is light (`#35d0b8`) and needs dark text for contrast — don't put `color: #fff` on an accent-colored background without checking both themes.

**Icons are hand-rolled, not a library.** `src/icons.jsx` exports all SVG icon components used across the site (brand marks for GitHub/LinkedIn, plus a small set of line icons). There's no icon package dependency — add new icons here in the same style (24x24 viewBox, `currentColor`) rather than pulling in a library.

**GitHub Pages base path.** The repo is named `rodolfoplondero.github.io`, so GitHub treats it as a *user* Pages site served from the domain root (`https://rodolfoplondero.github.io/`) rather than a project subpath — `vite.config.js` has no `base` override. Assets are still referenced relative to `import.meta.env.BASE_URL` (e.g. `profile.resumeFile` in `data.js`) rather than hard-coded absolute paths, so the site would keep working unmodified if the repo were ever renamed back to a project-page name.

**Deployment.** `.github/workflows/deploy.yml` builds and publishes to GitHub Pages via `actions/deploy-pages` on push to `master` (or manual `workflow_dispatch`). The repo's Pages source **must** be set to "GitHub Actions" in Settings → Pages — if it's left on the legacy "Deploy from a branch" setting, GitHub's built-in branch-based Pages build also fires on the same push and races with this workflow, non-deterministically serving the raw unbuilt `index.html` instead of the compiled app.

**ESLint flat config gotcha.** `eslint.config.js` includes `eslint-plugin-react`'s recommended rules (not just `react-hooks`/`react-refresh`) specifically because plain `no-unused-vars` does not recognize a component as "used" when it only appears as a JSX tag (`<Foo />`) — without `eslint-plugin-react`, every imported component gets flagged as unused. `dist` is excluded from linting.
