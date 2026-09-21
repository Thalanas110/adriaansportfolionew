# Add Laravel To Main Tech Stack

Date: 2026-09-21

## Goal

Add Laravel to the portfolio's main `TECH STACK` section as a backend technology, with the same logo treatment used by the existing stack entries.

## Confirmed Scope

- Add `Laravel` to the `BACKEND` group in `src/data/portfolio.ts`.
- Register Laravel's Simple Icon in `STACK_LOGOS`.
- Keep project and archived-project technology tags unchanged.
- Do not add a separate project entry or alter project metadata.

## Design

The existing stack UI reads backend item labels from the shared `stack` data array and looks up matching icons in `STACK_LOGOS`. Laravel will follow that established path:

1. Import `siLaravel` from `simple-icons/icons`.
2. Add `Laravel: siLaravel` to the `STACK_LOGOS` registry.
3. Add `Laravel` to the backend stack items after `PHP`.

No component changes are required because the current main stack renderer already supports registered Simple Icons.

## Testing And Verification

- Run `npm run lint` to verify the TypeScript/React source remains lint-clean.
- Run `npm run build` to verify the production build succeeds.
- Review the final diff to confirm only the Laravel stack data and this design document changed.

## Acceptance Criteria

- The main `TECH STACK` section displays Laravel under `BACKEND`.
- Laravel uses its registered Simple Icon rather than the fallback marker.
- Project and archived-project technology tags are unchanged.
- Lint and production build complete successfully.
