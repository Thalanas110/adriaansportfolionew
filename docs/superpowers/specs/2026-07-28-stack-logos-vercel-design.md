# Stack Logos And Vercel Config Design

Date: 2026-07-28

## Goal

Add logos to the main `TECH STACK` section in the dossier and prepare the project for deployment on Vercel with an explicit `vercel.json` preset.

## Confirmed Scope

- Add logos only in the main `TECH STACK` section rendered by `src/components/vault/Dossier.tsx`
- Reuse and complete the logo metadata already added in `src/data/portfolio.ts`
- Add a minimal `vercel.json` for Vercel framework detection

## Out Of Scope

- Do not add logos to project cards or archived project tech tags
- Do not redesign unrelated dossier sections
- Do not add Vercel-specific runtime overrides unless deployment requires them later

## Current State

- `src/data/portfolio.ts` already contains:
  - `STACK_LOGOS` for `simple-icons` based entries
  - `STACK_LOGO_IMAGES` for tools that need external image assets
- `src/components/vault/Dossier.tsx` still renders stack items as plain text rows
- `vite.config.ts` already includes `nitro()` alongside `tanstackStart(...)`, which matches current TanStack Start deployment guidance for Vercel

## Design

### 1. Logo Source Of Truth

Keep `stack` as string arrays and use the existing label strings as lookup keys into exported logo registries from `portfolio.ts`.

This is the recommended approach because it:

- minimizes churn in portfolio data
- preserves the current content structure
- keeps display metadata close to the stack data

### 2. Rendering Strategy

Update the stack list UI in `Dossier.tsx` so each item renders as:

- a left icon cell
- a text label
- a fallback marker when no logo is defined

Logo behavior:

- If the item exists in `STACK_LOGOS`, render the `simple-icons` SVG inline
- If the item exists in `STACK_LOGO_IMAGES`, render an `<img>` using the configured URL
- If the item has no configured logo yet, render a small neutral square marker instead of failing

This preserves the current military-terminal aesthetic while improving scanability.

### 3. Type Shape

Export a small typed helper surface from `portfolio.ts` so `Dossier.tsx` can safely consume:

- the stack data
- the `simple-icons` map
- the image-logo map

If needed, add the `SimpleIcon` type import so the logo map is type-safe and the file compiles cleanly.

### 4. Vercel Configuration

Add a root `vercel.json` with:

```json
{
  "framework": "tanstack-start"
}
```

Reasoning:

- current Vercel guidance indicates Nitro is the main runtime requirement
- this repository already has Nitro configured in `vite.config.ts`
- the JSON file is therefore used only to make framework detection explicit and stable

## Testing And Verification

Implementation should verify:

- the dossier tech stack renders without crashing when an item lacks a logo
- known icon entries render correctly for both `simple-icons` and image URL fallbacks
- `npm run build` succeeds after the UI and config changes

## Risks

- Some entries in `stack` currently have no logo mapping, such as `ExpressJS` and `Jest`
- External image URLs may change over time; these should be isolated to the image-logo registry for easy replacement

## Acceptance Criteria

- Main `TECH STACK` section shows logos beside stack items
- Project and archive tech labels remain unchanged
- Missing logo mappings degrade gracefully
- `vercel.json` exists at the repo root with the TanStack Start framework preset
