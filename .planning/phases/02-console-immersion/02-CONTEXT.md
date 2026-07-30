# Phase 2: Console immersion - Context

**Gathered:** 2026-07-30
**Status:** Ready for planning

<domain>
## Phase Boundary

Add console/terminal micro-interactions to the existing process-ID/QUEUE aesthetic, plus two real (non-decorative) live data points: local clock and page-view count. This phase does not add a full activity feed, GitHub API integration, or a backend — those were explored in Sketch B and explicitly not chosen.

</domain>

<decisions>
## Implementation Decisions

### Direction chosen
- User compared two throwaway sketches (`.planning/sketches/01-console-micro-interactions.html`, `.planning/sketches/02-live-data-feed.html`) and chose **Sketch A's aesthetic** (console/terminal micro-interactions) as the base.
- From Sketch B, only two elements are pulled in: **live local clock** and **live page-view count**. GitHub activity feed and other Sketch B elements are explicitly deferred/out of scope.

### Console micro-interactions (from Sketch A)
- CRT scanline overlay: subtle, full-viewport, `mix-blend-mode: overlay`, low opacity (~0.5) — must be `pointer-events: none` and disabled entirely under `prefers-reduced-motion: reduce` (site-wide convention already established in `src/index.css`).
- Typewriter effect: hero eyebrow/boot-line style reveal on load, CSS `steps()` animation + blinking caret (`border-right` trick), not JS-driven typing (per this site's existing motion convention: CSS animations covered by the reduced-motion block, not custom JS).
- Hover-reveal on the process-ID chip (`RL-01` in `Navbar.jsx`): hover shows extra info via `::after` content or a sibling span; must be pure CSS/JS non-blocking hover, not a tooltip library.
- Console-style hover list: nav/section-index items get a `$` prefix that fades in on hover, left-border color shifts to accent, matches `.consolelist` pattern in Sketch A.

### Live clock
- Real local time (Alegrete, Rio Grande do Sul, Brazil timezone), ticking every second via `setInterval`, client-side only (`Intl.DateTimeFormat` or plain `Date` — Alegrete is UTC-3, no DST in Brazil currently).
- Placement: replaces/extends the static navbar `online` status or the process-ID chip clock, per Sketch A's `#clock` element pattern.

### Live page-view count
- Use **GoatCounter** (free, privacy-friendly, no cookies) — decided over Cloudflare Web Analytics (no public read API) and over skipping entirely.
- Requires: (1) sign up for a GoatCounter site — **user must create the account**, this phase cannot provision it; (2) embed GoatCounter's count script; (3) fetch the public count via GoatCounter's JSON endpoint (`https://{code}.goatcounter.com/counter/{path}.json`) client-side and render it styled to match the queue-tag aesthetic from Sketch A, not GoatCounter's default badge image.
- Placement: queue-tag style element, per Sketch A's `.queue-tag` pattern (e.g., `VIEWS: 1,042`).

### Claude's Discretion
- Exact placement (navbar vs hero vs footer) for clock and view count, as long as it reads as part of the existing process-ID/QUEUE visual language.
- Scanline opacity/blend fine-tuning for contrast in both light and dark themes (Sketch A only mocked dark theme — must verify light theme too, given this site supports both).
- Whether typewriter runs once per session or replays on nav.

</decisions>

<specifics>
## Specific Ideas

- User liked Sketch A overall (console/terminal aesthetic) but wanted "some live data such as time and views" pulled in from Sketch B — not the full Sketch B direction (no GitHub feed).
- Sketches live at `.planning/sketches/01-console-micro-interactions.html` and `.planning/sketches/02-live-data-feed.html` — read both directly, they're small self-contained HTML files with inline CSS matching this repo's real `--color-*` tokens.

</specifics>

<canonical_refs>
## Canonical References

### Sketches (primary spec for this phase)
- `.planning/sketches/01-console-micro-interactions.html` — CRT overlay, typewriter, hover-reveal chip, console hover list — the chosen base aesthetic
- `.planning/sketches/02-live-data-feed.html` §1 (metrics strip) and §3 (queue-tag view count) — only the clock and view-count patterns from this file are in scope

### Site conventions (must follow)
- `CLAUDE.md` §"Scroll-reveal animation pattern" — all motion must be covered by the `@media (prefers-reduced-motion: reduce)` block in `src/index.css`, CSS-driven not JS-driven where possible
- `CLAUDE.md` §"Theming via CSS custom properties" — consume `var(--color-*)` tokens, verify contrast in both light and dark themes (`--color-on-accent` gotcha noted there)
- `CLAUDE.md` §"Content lives in one place" — if the process-ID/clock/views become configurable, values belong in `src/data.js`, not hard-coded in components

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/hooks/useTheme.js` — existing theme hook (from Phase 1), relevant if scanline/typewriter need theme-aware tuning
- `.queue-tag`, `.status-pill`, `.navbar__status`, `.navbar__brand` (chip) classes already exist in `src/index.css` — extend these rather than inventing new class names
- `src/components/Navbar.jsx` — houses the `RL-01` chip (`navbar__brand`) and `online` status dot (`navbar__status`) that the clock/hover-reveal decisions target

### Established Patterns
- All animations are pure CSS with `@keyframes`, gated by the global reduced-motion block — do not introduce a JS animation library
- `useInView` + `Reveal` wrapper handles scroll-reveal; unrelated to this phase's on-load/hover interactions but should not be duplicated

### Integration Points
- Clock and view-count are new small client-side effects (`useEffect` + `setInterval`) — likely new hooks (e.g. `useClock`, `useViewCount`) following the existing `useTheme.js` hook style
- GoatCounter script tag goes in `index.html`; the JSON count fetch happens in a component/hook

</code_context>

<deferred>
## Deferred Ideas

- Full GitHub activity feed (Sketch B §2) — not chosen, no phase currently planned for it
- Metrics strip with "last commit" / "public repos" (Sketch B §1, partial) — deferred, only the clock metric was kept
- Cloudflare Web Analytics — considered, rejected (no public read API for on-page display)

</deferred>

---

*Phase: 02-console-immersion*
*Context gathered: 2026-07-30*
