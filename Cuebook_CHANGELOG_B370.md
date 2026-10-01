# Cuebook Build 370

Build/version: `json-b370` / `v14.60.00`

## Purpose

Mobile-first performance-page experience pass built from Build 369. No attendance, cast, person, show, venue, credit, source, or Wicked records were added, removed, or changed.

## Changes

- Moved **Program JSON**, **Copy Cast**, and **Copy DC** into a compact, collapsed **Tools / Export** control.
- Rebuilt performance-page jump links as a wrapping mobile grid with only the sections actually available on that performance.
- Reworked **At This Performance** into responsive cards on narrow screens, removing its horizontal-scroll requirement.
- Collapsed **Source / Archive** by default so full captured Playbill text remains available without duplicating Covers, Credits, and Songs during normal browsing.
- Preserved the full desktop table presentation and print behavior.

## Validation

- Aladdin performance `#1206` passed desktop and 390 px mobile browser review.
- Mobile page width matched the viewport with no horizontal overflow.
- Tools disclosure, responsive substitution cards, section jumps, and collapsed/expanded archive states were exercised successfully.
- A second performance was checked to confirm unavailable section links are omitted.
- Browser console remained free of warnings and errors.
- All eight JSON files parse, all 19 manifest hashes match, and external plus inline JavaScript syntax checks pass.
- Fourteen unchanged package files match Build 369 byte-for-byte; `core.json` data outside `meta` is unchanged.
