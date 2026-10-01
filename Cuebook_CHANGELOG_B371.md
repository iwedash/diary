# Cuebook Build 371

Build/version: `json-b371` / `v14.60.01`

## Purpose

Compact mobile **At This Performance** cleanup built from Build 370. No attendance, cast, person, show, venue, credit, source, or Wicked records were changed.

## Changes

- Replaced the oversized stacked mobile substitution cards with a compact four-column table.
- Reduced ATP card padding, heading size, column-label size, and row height on narrow screens.
- Kept verbose explanatory copy out of the compact ATP presentation.
- Kept role, performer, status, and on-for information visible without horizontal scrolling.

## Validation

- Aladdin performance `#1206` checked at 390 px and desktop widths.
- Mobile document width checked against viewport width.
- JSON, JavaScript, manifest, ZIP, and Build 370 data invariants checked before delivery.
