# Roadmap: rodolfoplondero.github.io

## Overview

Finish and ship the in-flight theme-toggle work (PR #8), then keep the site in a maintained, working state.

## Phases

- [x] **Phase 1: Ship theme toggle** - Finish wiring `ProcessFlow`, verify theme toggle works in both directions, merge PR #8
- [ ] **Phase 2: Console immersion** - Add console/terminal micro-interactions (scanline, typewriter, hover reveals) plus real live data (local clock, GoatCounter page views)

## Phase Details

### Phase 1: Ship theme toggle

**Goal**: Manual light/dark toggle and Avatar→ProcessFlow swap are complete, verified, and merged to `master`
**Depends on**: Nothing (first phase)
**Requirements**: THEME-01, THEME-02, THEME-03, CONT-01, CONT-02
**Success Criteria** (what must be TRUE):

  1. User can toggle theme via Navbar and see immediate light/dark switch
  2. Theme choice persists across a page reload
  3. With no manual choice made, OS `prefers-color-scheme` still drives the theme
  4. `ProcessFlow` renders in `App.jsx` where `Avatar` used to
  5. All sections are readable (no contrast issues) in both themes

**Plans**: TBD

Plans:

- [x] 01-01: Wire ProcessFlow into App.jsx, verify theme toggle end-to-end, merge PR #8

### Phase 2: Console immersion

**Goal**: Site feels like a live terminal — CSS/JS micro-interactions from Sketch A applied, plus real local-time clock and a live page-view counter via GoatCounter
**Depends on**: Phase 1
**Requirements**: IMM-01, IMM-02, IMM-03, IMM-04, IMM-05
**Success Criteria** (what must be TRUE):

  1. Subtle CRT scanline overlay is visible site-wide, disabled under `prefers-reduced-motion`
  2. Hero eyebrow/boot line types out on load (typewriter effect)
  3. Navbar/hero process-ID chip shows a real, ticking local clock (Alegrete time)
  4. A live page-view count (via GoatCounter) renders somewhere visible (navbar status or queue tag)
  5. Hover states on nav/section-index elements reveal console-style `$` affordances, matching Sketch A

**Plans**: 1/3 plans executed

Plans:

- [x] 02-01-PLAN.md
- [ ] 02-02-PLAN.md
- [ ] 02-03-PLAN.md
- [x] 02-01: Console aesthetic — CRT scanline overlay, hero typewriter boot line, `$` hover affordances, hover-reveal process chip (IMM-01, IMM-02, IMM-05)
- [ ] 02-02: Live data — `useClock` Alegrete clock in the process chip, `useViewCount` GoatCounter counter in the footer (IMM-03, IMM-04)
- [ ] 02-03: GoatCounter activation with the user's site code, plus full visual sweep in both themes (IMM-01..IMM-05)

## Progress

**Execution Order:**
Phase 1 → Phase 2

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Ship theme toggle | 1/1 | Complete | 2026-07-30 |
| 2. Console immersion | 1/3 | In Progress|  |
