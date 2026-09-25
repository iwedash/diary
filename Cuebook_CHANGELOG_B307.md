# Cuebook Build 307 — early ticket prices + Recently Seen row polish

Baseline: Build 306 / json-b306
Output: Build 307 / json-b307 / v13.97.00

## Implemented

- Applied Isaac-supplied early ticket price table for performance IDs 2–82, through Wicked at Belk Theatre on March 31, 2013.
- Preserved existing cast, roles, venues, attendance, and companion links.
- Preserved existing ticket type/source where already present; applied ticket type/source only when included in the pasted table, including Box Office, Lottery Win / Lottery, Rush, and Comp.
- Updated homepage Recently Seen rows:
  - show title now appears in the visible Date / Show cell,
  - Open button removed,
  - each Recently Seen row is clickable and opens the performance.

## Guardrails

- The companion names in the pasted table were treated as current context, not a fresh instruction to create or remove companion links.
- No cast, coverage, creative-credit, venue, or performance-date facts changed.
