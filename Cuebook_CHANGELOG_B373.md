# Cuebook Build 373

Build 373 is a mobile cleanup pass focused on reducing height, visual noise, and repeated explanation.

## Interface changes

- Compressed the mobile header into one row with search integrated into the field and an icon-only menu control.
- Replaced the performance-page button grid with a single horizontally scrolling section strip that only lists sections present on the page.
- Removed the redundant Top jump and renamed Changes to ATP.
- Softened performer names and history counts, removed persistent underlines, and removed duplicated “on for” lines from the full cast list.
- Collapsed large Ensemble rosters by default on phones while keeping Principals open.
- Collapsed Covers, Company & Credits, Songs, and Source / Archive by default on phones.
- Reduced Recently Seen to eight entries and the mobile weekly graph to sixteen weeks, with View all links.
- Fixed clipped mobile statistics labels.
- Added a reliable post-render scroll reset so newly opened pages begin at their title.
- Removed decorative subtitles and helper copy from dashboard, performance, cast, credit, archive, and person-section headers.

## Validation

- Reviewed at a 390 × 844 mobile viewport and compared with the deployed dashboard.
- Confirmed the compact ATP table, horizontal section strip, collapsed mobile sections, route scroll reset, and lack of horizontal overflow.
- Confirmed zero visible helper subtitles in the representative performance page.
- Browser console reported no warnings or errors.
- JSON parsing, JavaScript syntax, manifest hashes, ZIP integrity, and data-preservation checks completed before delivery.
- No attendance, cast, person, show, venue, credit, source, or Wicked records were changed.
