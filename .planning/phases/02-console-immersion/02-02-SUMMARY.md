---
phase: 02-console-immersion
plan: 02
subsystem: ui
tags: [react, hooks, intl-datetimeformat, goatcounter, fetch, abortcontroller]

# Dependency graph
requires:
  - phase: 02-console-immersion (plan 02-01)
    provides: "Empty .navbar__brand-clock DOM contract in Navbar.jsx for this plan's useClock hook to fill"
provides:
  - "Live ticking Alegrete-timezone clock in the RL-01 process chip (IMM-03)"
  - "Complete, inert-by-design GoatCounter view-count code path (IMM-04), gated on a site code plan 02-03 supplies"
affects: [02-03-goatcounter-activation]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "useClock/useViewCount hooks follow the useTheme.js convention: default export, useState + useEffect, no semicolons, single quotes"
    - "Zero-config-by-default degrade pattern: an empty analytics.goatCounterCode makes the entire view-count path a silent no-op (no fetch, no DOM element) until configured"

key-files:
  created:
    - src/hooks/useClock.js
    - src/hooks/useViewCount.js
  modified:
    - src/data.js
    - src/components/Navbar.jsx
    - src/components/Footer.jsx
    - src/index.css
    - index.html

key-decisions:
  - "useClock builds its Intl.DateTimeFormat with useMemo keyed on [timeZone, locale], with a try/catch fallback to a zone-less formatter if the runtime rejects the IANA zone string"
  - "useViewCount early-returns on falsy code before constructing AbortController/fetch, which is what keeps the site console-clean and network-silent pre-configuration"
  - "GoatCounter count.js snippet shipped as an HTML comment in index.html rather than an active tag, so no visitor sees a failed request to a nonexistent subdomain before plan 02-03 sets the real site code"
  - "No Subresource Integrity hash added to the commented count.js snippet — GoatCounter serves it from a versionless rolling URL (per plan's own threat register T-02-04), so a pinned hash would break on GoatCounter's next release; the tag is also inert (commented out) in this plan"

patterns-established:
  - "Live-data hooks (useClock, useViewCount) sit in src/hooks/ alongside useTheme.js and useInView.js, matching the existing convention rather than a new folder"

requirements-completed: [IMM-03, IMM-04]

coverage:
  - id: D1
    description: "RL-01 process chip shows a real, ticking Intl.DateTimeFormat clock for America/Sao_Paulo, sourced from profile.timezone/profile.locale in data.js"
    requirement: "IMM-03"
    verification:
      - kind: unit
        ref: "npm run lint && npm run build (clean); grep checks confirming Intl.DateTimeFormat, clearInterval cleanup, America/Sao_Paulo, and useClock wired into Navbar.jsx"
        status: pass
    human_judgment: true
    rationale: "Confirming the displayed time actually tracks Alegrete (not the visitor's machine timezone) and that no interval leaks across theme toggles/navigation requires a live browser session with DevTools — not reproducible from a headless grep/build check alone."
  - id: D2
    description: "useViewCount + footer queue-tag--views code path is complete, and with an empty analytics.goatCounterCode the DOM has no view-count element and no goatcounter.com network request fires"
    requirement: "IMM-04"
    verification:
      - kind: unit
        ref: "npm run lint && npm run build (clean); grep checks confirming analytics export, AbortController, goatcounter.com/counter URL construction, queue-tag--views markup, commented count.js snippet in index.html, and no dangerouslySetInnerHTML anywhere in src/"
        status: pass
    human_judgment: true
    rationale: "Confirming zero network requests and a clean console with an empty site code, and correct visual rendering of the view-count chip once plan 02-03 supplies a real code, both require live browser/DevTools inspection — not reproducible from static grep/build checks alone."

# Metrics
duration: 5min
completed: 2026-07-30
status: complete
---

# Phase 2 Plan 2: Live clock and inert view-count code path Summary

**Alegrete-timezone live clock in the RL-01 chip via a memoized Intl.DateTimeFormat hook, plus a complete GoatCounter view-count path that stays network-silent until plan 02-03 supplies a site code.**

## Performance

- **Duration:** ~5 min (based on commit timestamps)
- **Started:** 2026-07-30T16:55:41-03:00
- **Completed:** 2026-07-30T16:57:05-03:00
- **Tasks:** 2
- **Files modified:** 7 (2 created, 5 modified)

## Accomplishments
- `useClock(timeZone, locale)` hook renders a ticking `America/Sao_Paulo` time in the navbar's `.navbar__brand-clock` slot, with a lazy-initialized first paint (no dash filler) and `clearInterval` cleanup on unmount
- `useViewCount(code, path)` hook fetches GoatCounter's public JSON counter endpoint with `AbortController` cleanup, resolving every failure path (non-ok response, abort, malformed JSON, ad-block) to `null` rather than a stuck or broken UI state
- Footer conditionally renders a `.queue-tag--views` chip (only when a count resolves), reusing the site's existing `.queue-tag` visual language rather than inventing new styling
- `index.html` carries a commented, ready-to-activate GoatCounter `count.js` snippet for plan 02-03 to uncomment
- Verified: with `analytics.goatCounterCode` empty, `useViewCount` early-returns before any `fetch`/`AbortController` construction — zero network calls, zero console noise

## Task Commits

Each task was committed atomically:

1. **Task 1: Live Alegrete clock in the process chip, end to end (IMM-03)** - `a2ea74c` (feat)
2. **Task 2: GoatCounter page-view count, inert until configured (IMM-04)** - `dc93517` (feat)

**Plan metadata:** (this commit, following SUMMARY/STATE/ROADMAP updates)

## Files Created/Modified
- `src/hooks/useClock.js` - New hook: memoized `Intl.DateTimeFormat` formatter with zone-fallback try/catch, 1s `setInterval` tick, `clearInterval` cleanup
- `src/hooks/useViewCount.js` - New hook: `AbortController`-backed fetch of GoatCounter's counter JSON, all failure paths resolve to `null`
- `src/data.js` - Added `profile.timezone` (`America/Sao_Paulo`), `profile.locale` (`pt-BR`), and `export const analytics = { goatCounterCode: '', countPath: 'TOTAL' }`
- `src/components/Navbar.jsx` - Imports `useClock`, renders `{clock}` inside the existing `.navbar__brand-clock` span (sibling of `.navbar__brand-id`, not nested inside it)
- `src/components/Footer.jsx` - Imports `analytics` + `useViewCount`, conditionally renders the `.queue-tag--views` chip as a plain React text child
- `src/index.css` - Added `font-variant-numeric: tabular-nums` to `.navbar__brand-clock`; added `.queue-tag--views` (center-justified, since base `.queue-tag` is `display: flex`) and `.queue-tag__count` (muted, normal weight/spacing) per Sketch B
- `index.html` - Inserted a commented GoatCounter `count.js` snippet immediately before `</body>`, marked for plan 02-03 to activate

## Decisions Made
- `useClock`'s formatter is keyed on `[timeZone, locale]` via `useMemo`, matching the plan's spec, with a try/catch fallback to a zone-less formatter so a rejected IANA string can never blank the whole navbar
- `useViewCount`'s early return on falsy `code` happens before any `AbortController`/`fetch` construction — this is the exact mechanism keeping the unconfigured site silent, per the plan's must-haves
- Split what the plan wrote as two `src/data.js` edits into two separate, correctly-scoped commits (profile fields in Task 1, `analytics` export in Task 2) so each task's commit only contains its own files, per the atomic-commit protocol
- No Subresource Integrity hash added to the commented `count.js` tag — the plan's own threat register (T-02-04) already reasons through this: GoatCounter serves a versionless rolling URL, so SRI is not applicable, and the tag is inert (commented out) in this plan regardless

## Deviations from Plan

None - plan executed exactly as written. (One clarification: `src/data.js` required two separate edits across the two tasks rather than one combined edit, to keep each task's git commit scoped to only its own changes — this is a mechanical execution detail, not a deviation from the plan's intent.)

## Issues Encountered
None.

## User Setup Required
None for this plan. The GoatCounter account itself (per `user_setup` in the plan frontmatter) is a separate, already-communicated action for the user to complete in parallel — plan 02-03 is what wires the resulting site code into `src/data.js` and uncomments the `index.html` snippet.

## Next Phase Readiness
- Plan 02-03 can proceed as soon as a GoatCounter site code is available: it needs to set `analytics.goatCounterCode` in `src/data.js` and uncomment/fill the `index.html` snippet at the marked insertion point — both are ready and documented in place.
- No blockers. `npm run lint` and `npm run build` both pass cleanly after each task.

---
*Phase: 02-console-immersion*
*Completed: 2026-07-30*

## Self-Check: PASSED

All 7 modified/created source files and the SUMMARY.md itself exist on disk. Both task commits (`a2ea74c`, `dc93517`) are present in git history.
