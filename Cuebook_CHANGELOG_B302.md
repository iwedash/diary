# Cuebook Build 302 — Released held queue + September verification

Baseline: Build 301 / v13.91.00  
Build: json-b302 / v13.92.00  
Date: 2026-09-25

## Implemented

- Applied Isaac's released held queue covering May–August 2017 historical audit corrections.
- Added and corrected ticket metadata, companions, event markers, venues, and performance-specific role/name fixes from the queue.
- Applied historical ticket-price corrections for Annie 2006, Phantom 2007, Hairspray 2008, Wicked 2008, and Wicked Birmingham 2009.
- Added & Juliet — September 24, 2026 evening Fan Night attendance at Stephen Sondheim Theatre, Orchestra M 2, Comp.
- Entered the & Juliet 9/24/2026 actual cast and performance-specific coverage using Isaac/ATP coverage as authoritative.
- Archived the & Juliet 9/24/2026 printed program pages as a contemporaneous snapshot with the guardrail that static printed cast does not override performance-specific coverage.
- Verified the recovered September queue items already present in Build 301, including Magic School Bus 9/3/2026 and Titanique 9/20/2026, without duplicating them.

## Guardrails preserved

- Unknown ticket amounts remain blank.
- Approximate recollections are stored as approximate metadata, not receipt-backed exact ticketPrice values.
- Principal covers do not need `on for`; ensemble-track coverage retains track-owner metadata for copy/export contexts.
- Existing blocked/unresolved audit conflicts remain untouched.
