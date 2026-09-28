# Cuebook Build 347 Changelog

Baseline: `json-b346` / `v14.36.00`  
New build: `json-b347` / `v14.37.00`

## Implemented

### September 2022 audit
- `Dear Evan Hansen` — 2022-09-15 — set to approximate remembered cost of `$90.00`.
- `Songs for a New World` — 2022-09-23 — marked `Comp`; existing Marsha Kangas companion data preserved.
- `No Place to Go` — 2022-09-24 — marked `Comp`.
- `The Color Purple` — 2022-09-24 — marked `Comp`.
- Existing receipt-backed September 2022 `Wicked` and `Into the Woods` ticket data was left unchanged.

### March 2026 ticket-cost table
- `Wicked` — 2026-03-03 — `$89.10`.
- `BIGFOOT!` — 2026-03-05 — `$78.00` total for 2, stored as `$39.00` per ticket plus order-total metadata.
- `Wicked` — 2026-03-07 — lottery, `$130.00` total for 2, stored as `$65.00` per ticket plus order-total metadata.
- `Mexodus` — 2026-03-10 — `$0.00`, 2 invited tickets; exact time remains unset because the supplied table said time not found.
- `Public Charge` — 2026-03-15 — 7:00 PM, `$6.51`.
- `Heathers The Musical` — 2026-03-20 — rush, `$38.00`.
- `Andrea McArdle's Broadway On Demand` — 2026-03-21 — 7:00 PM, `$0.00` reservation for 2.
- `The Wild Party (LaChiusa)` — 2026-03-22 — 2:00 PM, `$56.00` total for 2, stored as `$28.00` per ticket plus order-total metadata.
- `Trash` — 2026-03-25 — 7:00 PM, `$0.00` comp for 2.
- `Titanique` — 2026-03-26 — 7:30 PM, `$49.00`.
- `Body Count` — corrected from 2026-03-29 to 2026-03-28 at 3:00 PM; `$0.00` reservation for 2.
- `Titanique` — 2026-03-29 — 2:00 PM, `$66.50`.
- `The Balusters` — 2026-03-31 — 7:00 PM, `$49.00`.

## Held
- `The Song Inside of Me` — 2026-03-01 9:30 PM — `$36.87`; no matching performance shell found in Build 346.
- `Heathers The Musical` — 2026-03-15 2:00 PM — `$38.00` rush; no matching performance shell found in Build 346.

## Guardrails
- No cast, cover, conductor, orchestra, creative-credit, or production-archive facts changed.
- Missing March 2026 rows were held rather than silently added.
- Multi-ticket totals are stored in performance metadata while `ticketPrice` remains the per-ticket paid amount.
