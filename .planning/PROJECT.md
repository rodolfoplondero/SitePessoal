# rodolfoplondero.github.io

## What This Is

Rodolfo Londero's personal résumé/portfolio site — a single-page static React app built with Vite, deployed to GitHub Pages at the repo's user-page domain. No backend; all content lives in `src/data.js`.

## Core Value

The site presents Rodolfo's profile, skills, projects, and résumé clearly and correctly to visitors (recruiters, collaborators) — content accuracy and a working deploy matter more than any single feature.

## Requirements

### Validated

- ✓ Static single-page site with Navbar/Hero/About/Skills/Projects/Resume/Contact/Footer sections — `src/App.jsx`
- ✓ Content centralized in `src/data.js`, components are pure presentational mappers
- ✓ Scroll-reveal animation via `useInView` hook, respects `prefers-reduced-motion`
- ✓ Dark/light theming via CSS custom properties, `prefers-color-scheme` fallback
- ✓ Automated GitHub Pages deploy on push to `master` (`.github/workflows/deploy.yml`)

### Active

- [ ] Manual light/dark theme toggle (`useTheme` hook + Navbar UI) — in flight on branch `theme-toggle`, PR #8
- [ ] Replace `Avatar` component with `ProcessFlow` component — same PR, not yet wired into `App.jsx`
- [ ] General content/polish upkeep as needed

### Out of Scope

- Backend/API — site is intentionally static, no server-side needs identified
- Automated test suite — small static site, manual verification (lint + visual check) has been sufficient so far
- CMS/dynamic content — content changes are infrequent, editing `data.js` directly is adequate

## Context

- Solo personal project, single maintainer (Rodolfo).
- Repo name `rodolfoplondero.github.io` makes this a GitHub *user* Pages site (served from domain root) — renaming the repo would require re-adding a `base` path.
- Deploy workflow requires repo Pages source set to "GitHub Actions" in Settings → Pages, or it races with the legacy branch-based Pages build.
- No test suite; verification is `npm run lint` + manual browser check.
- Full stack/architecture detail: `.planning/codebase/STACK.md`, `.planning/codebase/ARCHITECTURE.md`.

## Constraints

- **Tech stack**: React 18 + Vite 5, plain JS/JSX (no TypeScript compilation) — keep additions dependency-light, this site has only `react`/`react-dom` as runtime deps.
- **Hosting**: GitHub Pages static hosting only — no server-side runtime available.
- **Motion**: All animation must be CSS-driven and covered by the global `prefers-reduced-motion` block in `src/index.css`, not JS-driven motion.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Content-in-data.js pattern | Keeps components pure/presentational, single edit point for copy changes | ✓ Good |
| No test suite | Small static site, low risk, lint + manual check sufficient | — Pending |
| Manual theme toggle added on top of `prefers-color-scheme` | User wants explicit control, not just OS-driven default | — Pending (PR #8 unmerged) |

---
*Last updated: 2026-07-30 after onboarding*
