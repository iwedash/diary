# Cuebook Build 306

Baseline: json-b305 / v13.95.00
Output: json-b306 / v13.96.00

## Money loader fix

- Fixed the Money page data-load failure where the split-data loader tried to parse the markdown changelog listed in the manifest as JSON.
- The loader now only fetches JSON/data/source manifest entries and skips text/markdown support files.
- Updated cache/build labels to json-b306 / v13.96.00.

## December 2017 audit advancement

- Applied the standing Studio Theatre/Arena Stage historical audit rule to December 2017 Arena Stage entries: 413, 414, 417.
- November 2017 unresolved solo/companion blanks were advanced without blocking the month.
- No cast, role, venue, seat, or companion facts were changed from Build 305.
