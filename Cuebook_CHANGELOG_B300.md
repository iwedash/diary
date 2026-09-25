# Cuebook Build 300

Baseline: `json-b299` / `v13.89.00`
New build: `json-b300` / `v13.90.00`

## TodayTix receipt implementation
- Implemented all nine Isaac-confirmed TodayTix receipt matches from the held receipt queue.
- **Ticket-price rule enforced:** top-level `ticketPrice` is the amount paid **per ticket** only. Multi-ticket order totals are supporting metadata and never replace per-ticket price.
- RENT 2021-11-11: $35 each; Tier 3 · DCA 305/306.
- Wicked 2022-06-30: $91.50 each; Side Orchestra (Partial View).
- A Strange Loop 2022-07-02: Balcony; $56.50 actually paid after USHER20.
- SIX 2022-07-02: Side Rear Mezzanine; $91.50 actually paid after QUEENS20.
- Wicked 2022-09-16: Orchestra B 9/11; $139.99 each.
- Into the Woods 2022-09-17: Rear Mezzanine L 6/8; $153.99 each.
- Into the Woods 2023-03-07: TR1 F 118/120; $60 each.

## Missing attendances added
- Dear Evan Hansen 2022-09-22 2:00 PM at the Kennedy Center/Eisenhower Theater: Orchestra W 110/111; $49 each; regular 2022–2023 tour principal company stored as a production-roster baseline because no performance-specific substitution notice was supplied.
- Sweeney Todd 2023-05-16 7:30 PM at Signature Theatre/The MAX: Orchestra North B 112; $45; marked First Preview; documented regular company added from the May 16 production announcement.

## Guardrails
- No personal seat is inferred from multi-ticket orders.
- Order totals, confirmation numbers, purchase dates, and promo codes remain metadata; they do not alter the per-ticket price rule.
- The new Dear Evan Hansen cast is explicitly source-qualified as a regular-company baseline, not claimed as exact ATP evidence.
- Sweeney Todd 2023-05-16 remains a distinct attendance from the existing 2023-05-24 performance.
