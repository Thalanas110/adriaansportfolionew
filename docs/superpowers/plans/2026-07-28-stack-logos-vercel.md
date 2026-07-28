# Stack Logos And Vercel Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add logos to the main dossier tech stack and add explicit Vercel framework configuration for this TanStack Start app.

**Architecture:** Keep `src/data/portfolio.ts` as the source of truth for stack labels and logo metadata, then teach `src/components/vault/Dossier.tsx` to render icon-backed stack rows with a safe fallback for unmapped items. Use the already-approved minimal `vercel.json` preset because Nitro is already configured in `vite.config.ts`.

**Tech Stack:** TanStack Start, React 19, TypeScript, Tailwind CSS 4, Vite, Nitro, simple-icons

## Global Constraints

- Add logos only in the main `TECH STACK` section rendered by `src/components/vault/Dossier.tsx`.
- Do not add logos to project cards or archived project tech tags.
- Reuse and complete the logo metadata already added in `src/data/portfolio.ts`.
- Add a root `vercel.json` with the TanStack Start framework preset.
- Implement inline in this session.
- Do not use test-driven development for this task per explicit user instruction.

---

### Task 1: Stabilize Stack Logo Data

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `src/data/portfolio.ts`

**Interfaces:**
- Consumes: Existing `stack` data with `group` and `items` string arrays.
- Produces: `STACK_LOGOS`, `STACK_LOGO_IMAGES`, and typed logo exports that `src/components/vault/Dossier.tsx` can consume by stack item label.

- [ ] **Step 1: Add the missing icon dependency**

Run: `npm install simple-icons`

Expected: `package.json` and `package-lock.json` include `simple-icons`.

- [ ] **Step 2: Normalize `portfolio.ts` logo exports**

Update `src/data/portfolio.ts` to:

- import `type { SimpleIcon }` from `simple-icons`
- import icon constants from `simple-icons`
- export `STACK_LOGOS`
- export `STACK_LOGO_IMAGES`
- preserve the existing `stack` data shape

- [ ] **Step 3: Include safe coverage for currently unmapped items**

Keep the existing user-provided mappings and allow items without a logo mapping, such as `ExpressJS` and `Jest`, to fall through to UI fallback rendering instead of forcing placeholder asset entries into the data file.

- [ ] **Step 4: Sanity-check the data file**

Run: `npx tsc --noEmit`

Expected: no TypeScript errors caused by `src/data/portfolio.ts`.

### Task 2: Render Logos In The Main Tech Stack Section

**Files:**
- Modify: `src/components/vault/Dossier.tsx`

**Interfaces:**
- Consumes: `stack`, `STACK_LOGOS`, and `STACK_LOGO_IMAGES` from `src/data/portfolio.ts`.
- Produces: Main dossier stack rows that render a logo when available and a fallback marker when unavailable.

- [ ] **Step 1: Import the new logo registries**

Update `Dossier.tsx` imports so the component reads:

```tsx
import { profile, stack, STACK_LOGOS, STACK_LOGO_IMAGES } from "@/data/portfolio";
```

- [ ] **Step 2: Add a small local renderer for stack logos**

Inside `Dossier.tsx`, add a helper component that:

- receives an `item: string`
- renders an inline SVG using `STACK_LOGOS[item]` when present
- renders an `<img>` using `STACK_LOGO_IMAGES[item]` when present
- otherwise renders the existing bunker-style square marker

The helper should keep icon sizing compact and visually aligned with the current panel typography.

- [ ] **Step 3: Replace plain list markers with the helper**

Update the `group.items.map(...)` block so each row renders the helper plus the item label, while keeping the current spacing, hover tone, and small-text terminal style.

- [ ] **Step 4: Keep the change scoped**

Verify only the main `TECH STACK` section in `Dossier.tsx` uses the new logo renderer. Do not touch project card tech lists.

### Task 3: Add Vercel Config And Verify Build

**Files:**
- Create: `vercel.json`

**Interfaces:**
- Consumes: Existing TanStack Start + Nitro Vite setup.
- Produces: Explicit Vercel framework detection via `vercel.json`.

- [ ] **Step 1: Add the root config file**

Create `vercel.json` with:

```json
{
  "framework": "tanstack-start"
}
```

- [ ] **Step 2: Verify the app still builds**

Run: `npm run build`

Expected: build exits successfully and picks up the current TanStack Start + Nitro configuration.

- [ ] **Step 3: Review the final diff**

Run: `git diff -- src/data/portfolio.ts src/components/vault/Dossier.tsx package.json package-lock.json vercel.json`

Expected: diff only shows the stack logo implementation and the new Vercel config.
