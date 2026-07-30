# Requirements: rodolfoplondero.github.io

**Defined:** 2026-07-30
**Core Value:** The site presents Rodolfo's profile, skills, projects, and résumé clearly and correctly to visitors — content accuracy and a working deploy matter more than any single feature.

## v1 Requirements

### Theme

- [ ] **THEME-01**: User can manually toggle light/dark theme via Navbar control
- [ ] **THEME-02**: Manual theme choice persists across page reloads
- [ ] **THEME-03**: Site still respects OS `prefers-color-scheme` when no manual override is set

### Content

- [ ] **CONT-01**: `ProcessFlow` component replaces `Avatar` and is wired into `App.jsx`'s composition
- [ ] **CONT-02**: All sections render correctly in both light and dark themes (no unreadable text/contrast issues)

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
| THEME-01 | Phase 1 | In Progress |
| THEME-02 | Phase 1 | In Progress |
| THEME-03 | Phase 1 | In Progress |
| CONT-01 | Phase 1 | In Progress |
| CONT-02 | Phase 1 | In Progress |

**Coverage:**
- v1 requirements: 5 total
- Mapped to phases: 5
- Unmapped: 0 ✓

---
*Requirements defined: 2026-07-30*
*Last updated: 2026-07-30 after initial definition*
