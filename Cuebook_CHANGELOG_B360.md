# Cuebook Build 360 — Queue Implementation Bundle

Baseline: Build 359 (`json-b359` / `v14.49.00`)  
New build: `json-b360` / `v14.50.00`  
Date: 2026-09-29

## Implemented

- Applied the queued October–December 2023 audit corrections, including comps, companions, The Wiz seat/transfer, and Ragtime ticket details.
- Applied January 2024 comps and the July 2, 2024 Wicked Audience Rewards redemption correction.
- Applied the receipt-backed 2023 corrections, including Sweeney Todd July 9 price, Kimberly Akimbo correction, and added The Play That Goes Wrong / Bridges of Madison County attendance shells.
- Applied Heathers, Wicked, Death Becomes Her, SIX, & Juliet, Titanique, and Annie ticket-cost cleanup rules supplied by Isaac.
- Applied the 2019 receipt table where matching shells existed; added attended Kings and Bianca Del Rio shells; held Katya as not attended.

## Held / unresolved

- Sweeney Todd May 16, 2023 was canceled; the $35 voucher is documented in the source record but no attended performance was added.
- Wicked display/sequence references “perf 288” and “perf 392” did not map to raw DB performance IDs in Build 359, so they were not applied.
- Annie Baltimore 2025 rush amount could not be recovered from available public search; Jan. 8, Jan. 9, and Jan. 11 Baltimore entries are marked Rush with amount blank.
- Katya: Help Me I’m Dying was explicitly marked not attended and was not added.

## Guardrails

- No cast, cover, conductor, orchestra, creative-credit, or production-archive facts changed.
- Existing program/cast `sourceRef` values were preserved where present; ticket-audit provenance was added in `performanceMetadata`.
