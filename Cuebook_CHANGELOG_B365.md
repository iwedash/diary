# Cuebook Build 365 Changelog

Built from Build 364.

## Stats page rebuild
- Gutted the prior stats-page layout and rebuilt it as table-first rankings.
- Kept year statistics at the top.
- Removed day-of-week statistics.
- Added/cleaned top-20 tables for:
  - most-seen shows
  - most-seen productions, with show name included
  - most-seen performers, using unique performances rather than noisy raw rows
  - most-seen cover performers
  - most covers in one performance
  - venues
  - roles with the most interpretations
  - directors
  - largest casts and orchestras
  - designers by discipline

## Spreadsheet
- Created `cuebook_missing_cost_companion_cleanup_b365.xlsx` containing performances with no numeric cost recorded, with blank columns for Isaac to fill Cost and Companions.

## Guardrails
- No attendance, cast, cover, conductor, orchestra, creative-credit, companion, ticket, or source facts changed in the JSON data.
- This build changes `index.html`, build metadata, manifest/checksums, and adds the external spreadsheet artifact only.
