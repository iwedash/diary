# Cuebook Build 332 / v14.22.00

- Fixed the post-boot cast/person regression where cast grids displayed `Person ####` and person pages returned Not found.
- Root cause: optional `pruned-records-b284.json` was being merged with `Object.assign`, overwriting canonical `people` and `roles` after the optional archive load finished.
- Optional sidecar JSON can no longer replace canonical core dictionaries such as people, roles, performances, shows, venues, appearances, entities, or credits.
- Pruned records are now stored under `prunedRecords` for diagnostic use only.
- Updated cache token to json-b332.
