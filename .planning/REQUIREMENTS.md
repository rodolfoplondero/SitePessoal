# Requirements: rodolfoplondero.github.io

**Defined:** 2026-07-30
**Core Value:** The site presents Rodolfo's profile, skills, projects, and résumé clearly and correctly to visitors — content accuracy and a working deploy matter more than any single feature.

## v1 Requirements

### Theme

- [x] **THEME-01**: User can manually toggle light/dark theme via Navbar control
- [x] **THEME-02**: Manual theme choice persists across page reloads
- [x] **THEME-03**: Site still respects OS `prefers-color-scheme` when no manual override is set

### Content

- [x] **CONT-01**: `ProcessFlow` component replaces `Avatar` and is wired into `App.jsx`'s composition
- [x] **CONT-02**: All sections render correctly in both light and dark themes (no unreadable text/contrast issues)

### Immersion

- [x] **IMM-01**: Site has a subtle CRT scanline overlay, disabled under `prefers-reduced-motion`
- [x] **IMM-02**: Hero eyebrow/boot line plays a typewriter reveal on load
- [x] **IMM-03**: Process-ID chip shows a real, ticking local clock (Alegrete timezone)
- [ ] **IMM-04**: A live page-view count (GoatCounter) renders on the site (ships inert as of 02-02 — activation pending GoatCounter site code, see 02-03)
- [x] **IMM-05**: Nav/section-index hover states show console-style `$` affordances

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Maintenance

- **MAINT-01**: Add a minimal automated test/visual-regression check
- **MAINT-02**: Periodic content refresh (projects, résumé) as career progresses

## Out of Scope

| Feature | Reason |
|---------|--------|
| Backend/API | Static site, no server-side needs |
| CMS/dynamic content | Content changes infrequent; editing `data.js` is adequate |
| Automated test suite (v1) | Small static site; lint + manual check sufficient for now |
| Mobile app | Web-first, out of scope entirely |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| THEME-01 | Phase 1 | Complete |
| THEME-02 | Phase 1 | Complete |
| THEME-03 | Phase 1 | Complete |
| CONT-01 | Phase 1 | Complete |
| CONT-02 | Phase 1 | Complete |
| IMM-01 | Phase 2 | Complete |
| IMM-02 | Phase 2 | Complete |
| IMM-03 | Phase 2 | Complete |
| IMM-04 | Phase 2 | Pending (inert, needs GoatCounter code — 02-03) |
| IMM-05 | Phase 2 | Complete |

**Coverage:**

- v1 requirements: 10 total
- Mapped to phases: 10
- Unmapped: 0 ✓

---
*Requirements defined: 2026-07-30*
*Last updated: 2026-07-30 after initial definition*
