<!-- refreshed: 2026-07-30 -->
# Architecture

**Analysis Date:** 2026-07-30

## System Overview

```text
┌─────────────────────────────────────────────────────────────┐
│                    src/main.jsx (entry)                      │
│   ReactDOM.createRoot -> <StrictMode><App /></StrictMode>    │
└───────────────────────────┬───────────────────────────────────┘
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                        src/App.jsx                            │
│  Navbar -> main(Hero, About, Skills, Projects, Resume,       │
│                 Contact) -> Footer                            │
│  `src/App.jsx`                                                │
└───────┬───────────────────────────────────────────┬───────────┘
        │                                            │
        ▼                                            ▼
┌───────────────────────────┐          ┌─────────────────────────┐
│  Section components        │          │  src/data.js (content)  │
│  `src/components/*.jsx`    │◄─────────┤  profile, about, skills,│
│  pure, map over data       │  imports │  projects, experience,  │
└───────┬─────────────┬──────┘          │  education              │
        │             │                 └─────────────────────────┘
        ▼             ▼
┌───────────────┐ ┌───────────────────────┐
│ Reveal.jsx +   │ │ useTheme.js            │
│ useInView.js   │ │ (light/dark toggle,    │
│ (scroll reveal │ │  localStorage + prefers│
│  animation)    │ │  -color-scheme)        │
└───────────────┘ └───────────────────────┘
        │
        ▼
┌─────────────────────────────────────────────────────────────┐
│  src/index.css - CSS custom properties (:root tokens),       │
│  dark theme via prefers-color-scheme and [data-theme]        │
└─────────────────────────────────────────────────────────────┘
```

## Component Responsibilities

| Component | Responsibility | File |
|-----------|----------------|------|
| App | Composes page top-to-bottom, no logic | `src/App.jsx` |
| Navbar | Nav links, scroll-spy (IntersectionObserver), mobile menu toggle, theme switch button | `src/components/Navbar.jsx` |
| Hero | Landing/intro section, entrance + blob animation | `src/components/Hero.jsx` |
| About | About-me text section, wraps `about` string from data.js | `src/components/About.jsx` |
| Skills | Renders `skills` category/items list | `src/components/Skills.jsx` |
| Projects | Renders `projects` list | `src/components/Projects.jsx` |
| Resume | Renders `experience`/`education`, links to `profile.resumeFile` PDF | `src/components/Resume.jsx` |
| Contact | Contact links/info from `profile` | `src/components/Contact.jsx` |
| Footer | Static footer | `src/components/Footer.jsx` |
| ProcessFlow | New/uncommitted component (untracked in git status) — process/step visualization, not yet wired into `App.jsx` | `src/components/ProcessFlow.jsx` |
| Reveal | Thin wrapper applying `reveal`/`is-visible` classes via `useInView` | `src/components/Reveal.jsx` |
| data.js | Single source of truth for all page copy | `src/data.js` |
| icons.jsx | Hand-rolled SVG icon components (24x24, `currentColor`), no icon library dependency | `src/icons.jsx` |

## Pattern Overview

**Overall:** Static single-page React app; content/presentation split, section-per-component composition, no routing, no backend.

**Key Characteristics:**
- All copy lives in one file (`src/data.js`); components are pure and presentational, mapping over exported data structures.
- Section components each render a single `<section id="...">` whose `id` must match the `href` anchors in `Navbar.jsx`'s `links` array (both scroll-spy and smooth-scroll depend on this match) — see `src/components/Navbar.jsx:4-10`.
- No client-side router; navigation is same-page anchor scrolling via `element.scrollIntoView` + `history.pushState` (`src/components/Navbar.jsx:50-58`).
- No global state management library; state is local to components via `useState`/`useEffect` (e.g. `Navbar`'s `open`/`scrolled`/`active`, `useTheme`'s `theme`).

## Layers

**Entry/Bootstrap:**
- Purpose: mount the React tree
- Location: `src/main.jsx`
- Contains: `ReactDOM.createRoot(...).render(<StrictMode><App/></StrictMode>)`
- Depends on: `src/App.jsx`, `src/index.css`
- Used by: browser (via `index.html`'s script tag)

**Composition:**
- Purpose: page layout/ordering
- Location: `src/App.jsx`
- Contains: import + render of all section components in order
- Depends on: `src/components/*`
- Used by: `src/main.jsx`

**Presentation (sections):**
- Purpose: render each page section from data
- Location: `src/components/*.jsx`
- Contains: JSX, no business logic, wraps content in `<Reveal>` for scroll animation
- Depends on: `src/data.js`, `src/components/Reveal.jsx`, `src/icons.jsx`
- Used by: `src/App.jsx`

**Content:**
- Purpose: single editable source of all site copy
- Location: `src/data.js`
- Contains: `profile`, `about`, `skills`, `projects`, `experience`, `education` exports
- Depends on: `import.meta.env.BASE_URL` (Vite env) for asset paths
- Used by: all section components

**Hooks:**
- Purpose: reusable stateful browser-API logic
- Location: `src/hooks/useInView.js`, `src/hooks/useTheme.js`
- Contains: `useInView` (IntersectionObserver wrapper), `useTheme` (light/dark state + localStorage persistence + `document.documentElement.dataset.theme`)
- Depends on: browser `IntersectionObserver`, `localStorage`, `window.matchMedia`
- Used by: `Reveal.jsx` (useInView), `Navbar.jsx` (useTheme)

**Styling:**
- Purpose: visual design, theming, motion, responsive layout
- Location: `src/index.css`
- Contains: CSS custom-property tokens on `:root`, dark-mode overrides (`@media (prefers-color-scheme: dark)` and `:root[data-theme="dark|light"]`), `@media (prefers-reduced-motion: reduce)` block neutralizing all animation
- Depends on: nothing (plain CSS, no preprocessor/CSS-in-JS)
- Used by: all components via className / global cascade

## Data Flow

### Primary Render Path

1. Browser loads `index.html`, which loads `src/main.jsx` as a module entry (`index.html`)
2. `src/main.jsx:6-10` mounts `<App />` into `#root`
3. `src/App.jsx` renders `Navbar`, then `main > Hero, About, Skills, Projects, Resume, Contact`, then `Footer`
4. Each section component reads its slice of `src/data.js` at module/render time and maps it into JSX (e.g. `Skills.jsx` maps `skills` array, `Projects.jsx` maps `projects` array)

### Scroll-Reveal Flow

1. Section component wraps content in `<Reveal as="h2" delay={100}>` (`src/components/Reveal.jsx`)
2. `Reveal` calls `useInView` (`src/hooks/useInView.js:3-25`), attaching a `ref` and observing intersection with `threshold: 0.15`, `rootMargin: '0px 0px -80px 0px'`
3. When `inView` becomes true, `Reveal` applies `is-visible` class (added to base `reveal` class), CSS transition animates it in
4. All such motion is neutralized under `@media (prefers-reduced-motion: reduce)` in `src/index.css` — any new animation must be added as CSS to stay covered by that block, not JS-driven motion

### Nav Scroll-Spy / Theme Toggle Flow

1. `Navbar.jsx:22-48` builds an `IntersectionObserver` over the DOM nodes matching each `links[].href`, updates `active` state to the currently-intersecting section's `#id`
2. `Navbar.jsx:29-58` `handleNavClick` intercepts anchor clicks, does smooth `scrollIntoView` + `history.pushState` instead of default jump navigation
3. `useTheme.js` (`src/hooks/useTheme.js`) initializes theme from `localStorage` or `prefers-color-scheme`, and on every change sets `document.documentElement.dataset.theme` (driving the `:root[data-theme="..."]` CSS override) and persists to `localStorage`
4. Theme toggle button lives in `Navbar.jsx:80-92`, calling `toggleTheme` from `useTheme`

**State Management:**
- No global store. Each interactive concern (nav scroll state, active section, theme, per-section in-view state) is local component state via `useState`, synchronized to the DOM/`localStorage` via `useEffect`.

## Key Abstractions

**Reveal wrapper:**
- Purpose: apply scroll-triggered entrance animation without each section reimplementing IntersectionObserver logic
- Examples: `src/components/Reveal.jsx`, consumed by `About.jsx`, `Skills.jsx`, `Projects.jsx`, `Resume.jsx`, `Contact.jsx`, `Hero.jsx`
- Pattern: hook (`useInView`) + presentational wrapper component taking `as`/`delay` props

**Data-driven sections:**
- Purpose: keep all copy in one editable module, keep components as pure templates
- Examples: `src/data.js` exports consumed by every `src/components/*.jsx` except `Navbar.jsx`/`Footer.jsx`/`Reveal.jsx`
- Pattern: named exports of plain arrays/objects/strings, no transformation layer between data and JSX

**Custom theme hook:**
- Purpose: encapsulate theme detection/persistence/DOM-sync as a single reusable hook instead of scattering `localStorage`/`matchMedia` calls
- Examples: `src/hooks/useTheme.js`, consumed only by `src/components/Navbar.jsx`
- Pattern: `[state, toggleFn]` tuple return, mirrors `useState` convention

## Entry Points

**Web (production/dev):**
- Location: `index.html` → `src/main.jsx`
- Triggers: page load in browser
- Responsibilities: mount React app into `#root`

**Build:**
- Location: `vite.config.js`, invoked via `npm run build`
- Triggers: `npm run build` locally, or CI step `run: npm run build` in `.github/workflows/deploy.yml`
- Responsibilities: bundle `src/` into `dist/` for static hosting

**Deploy:**
- Location: `.github/workflows/deploy.yml`
- Triggers: push to `master`, or manual `workflow_dispatch`
- Responsibilities: `npm ci` → `npm run build` → upload `dist/` as Pages artifact → `actions/deploy-pages@v4` deploy. Requires repo Pages source = "GitHub Actions" to avoid racing the legacy branch-based Pages build.

## Architectural Constraints

- **Threading:** Single-threaded, standard browser main-thread React rendering; no web workers.
- **Global state:** None beyond `document.documentElement.dataset.theme` and `localStorage['theme']` set by `useTheme.js` — the only piece of state that escapes React's component tree into global DOM/storage.
- **Circular imports:** None observed; dependency direction is strictly `main.jsx → App.jsx → components → (data.js | hooks | icons.jsx)`.
- **No routing:** All navigation is same-page anchor scroll; adding real routes would require introducing a router (not currently a dependency).
- **No backend/API layer:** All content is static and bundled at build time via `src/data.js`; there is no fetch/data-loading layer to extend.

## Anti-Patterns

### Section id / Navbar link mismatch risk

**What happens:** Each section component hardcodes its own `<section id="...">`, and `src/components/Navbar.jsx`'s `links` array hardcodes matching `href` strings independently, in a separate file.
**Why it's wrong:** Nothing enforces the two lists stay in sync; renaming or adding a section's id without updating `Navbar.jsx` silently breaks scroll-spy and smooth-scroll for that section.
**Do this instead:** When adding/renaming a section, update `src/components/Navbar.jsx`'s `links` array (`src/components/Navbar.jsx:4-10`) in the same change, and grep for the old id string across `src/components/*.jsx` before renaming.

### Untracked component not yet wired into composition

**What happens:** `src/components/ProcessFlow.jsx` exists on disk (untracked per `git status`) but is not imported/rendered anywhere in `src/App.jsx`.
**Why it's wrong:** A dangling component invites confusion about whether it's live; ESLint's `eslint-plugin-react` recommended rules exist specifically to catch unused-import cases like this once it is wired in incorrectly.
**Do this instead:** Either finish wiring `ProcessFlow` into `App.jsx`'s composition and add a matching `Navbar.jsx` link if it's a new section, or remove it if abandoned.

## Error Handling

**Strategy:** None implemented. No error boundaries, no try/catch around rendering, no fallback UI.

**Patterns:**
- No `ErrorBoundary` component present anywhere in `src/`.
- Site has no async data fetching, so there is no network-error surface to handle client-side.

## Cross-Cutting Concerns

**Logging:** None — no logging library or `console.*` calls found in component source during exploration.
**Validation:** None — `src/data.js` is static, trusted, hand-authored content; no runtime schema validation.
**Authentication:** Not applicable — fully static public site, no auth.
**Theming:** Centralized in `src/index.css` via CSS custom properties, toggled by `src/hooks/useTheme.js` + `Navbar.jsx`'s theme-switch button; components must consume `var(--color-*)` tokens rather than hard-coded colors (per root `CLAUDE.md`), noting `--color-on-accent` exists because the dark-theme accent color needs dark (not white) text for contrast.
**Reduced motion:** Centralized under one `@media (prefers-reduced-motion: reduce)` block in `src/index.css`; new animations must be CSS-based to be covered by it (per root `CLAUDE.md`).

---

*Architecture analysis: 2026-07-30*
