# Roadmap: rodolfoplondero.github.io

## Overview

Finish and ship the in-flight theme-toggle work (PR #8), then keep the site in a maintained, working state.

## Phases

- [ ] **Phase 1: Ship theme toggle** - Finish wiring `ProcessFlow`, verify theme toggle works in both directions, merge PR #8

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
- [ ] 01-01: Wire ProcessFlow into App.jsx, verify theme toggle end-to-end, merge PR #8

## Progress

**Execution Order:**
Phase 1 only (single-phase milestone)

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Ship theme toggle | 0/1 | Not started | - |
