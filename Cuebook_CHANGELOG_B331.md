# Cuebook Build 331 / v14.21.00

Emergency Safari boot fix after Build 330 diagnostics.

## Fixed

- Declared `castListRow` before the runtime renderer patch assigns to it.
- This resolves Safari strict-mode failure: `ReferenceError: Can't find variable: castListRow`.
- Updated cache/build token to `json-b331`.

## Validation

- JSON parse checks passed.
- Inline JavaScript syntax checks passed.
- Browser boot smoke test passed locally.
- ZIP integrity passed.
