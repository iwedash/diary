# Cuebook Build 369

Build/version: `json-b369` / `v14.59.00`

## Purpose

Performance-page visual/system pass built from Build 368. No attendance, cast, source, or Wicked records were added or removed.

## Changes

- Reworked web typography for cast/credit rows so performer and character names are lighter and less condensed.
- Removed default all-caps treatment from performer/entity names.
- Tightened performance cast/cover/credit row height and padding.
- Hid DB/source micro metadata from the performance header.
- Added an **At This Performance** table for actual substitutions/covers.
- Suppressed visible `on for` notes for principal covers in cast/grid displays while retaining the data underneath.
- Updated Source / Archive rendering so sectioned `programArchiveText` objects display as labeled sections instead of `[object Object]`.
- Added archive-text fallback displays for Songs, Company & Credits, and Understudies / Covers when a performance has captured Playbill text but no structured rows yet.

## Validation

- ZIP opens.
- JSON parses.
- Manifest hashes refreshed.
- JavaScript syntax check passed after extracting inline scripts.
- No new Wicked performances added.
