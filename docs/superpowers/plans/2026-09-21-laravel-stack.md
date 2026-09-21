# Laravel Main Stack Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Laravel to the portfolio's main `TECH STACK` section under `BACKEND` with its registered Simple Icon.

**Architecture:** Keep `src/data/portfolio.ts` as the source of truth for stack labels and logo metadata. The existing `Dossier` renderer already consumes those registries, so implementation requires only one data-file change; project and archived-project metadata remain untouched.

**Tech Stack:** React 19, TypeScript, TanStack Start, `simple-icons`, ESLint, Vite/Nitro

## Global Constraints

- Add `Laravel` to the `BACKEND` group in `src/data/portfolio.ts`.
- Register Laravel's Simple Icon in `STACK_LOGOS`.
- Keep project and archived-project technology tags unchanged.
- Do not add a separate project entry or alter project metadata.
- Verify with `npm run lint` and `npm run build`.

---

### Task 1: Register Laravel In The Shared Stack Data

**Files:**
- Modify: `src/data/portfolio.ts` import list, `STACK_LOGOS`, and `BACKEND` items
- Include with implementation commit: `docs/superpowers/specs/2026-09-21-laravel-stack-design.md` and `docs/superpowers/plans/2026-09-21-laravel-stack.md`

**Interfaces:**
- Consumes: The existing `simple-icons/icons` exports and `stack` data structure.
- Produces: A `Laravel` key in `STACK_LOGOS` and a `Laravel` item in the `BACKEND` group for the existing main stack renderer.

- [x] **Step 1: Add the Laravel icon import**

In the existing `simple-icons/icons` import block, add:

```ts
siLaravel,
```

- [x] **Step 2: Register the Laravel logo**

In `STACK_LOGOS`, add:

```ts
Laravel: siLaravel,
```

- [x] **Step 3: Add Laravel to the backend group**

Update the backend group to:

```ts
{ group: "BACKEND", items: ["PHP", "Laravel", "Node.js", "Supabase", "Appwrite", "ExpressJS"] },
```

Keep every project and archived-project `tech` array unchanged.

- [x] **Step 4: Run the lint gate**

Run:

```sh
npm run lint
```

Observed: the repository-wide command exits 1 because ESLint traverses the unignored `.kilo/worktrees/candle-iron` directory and reports thousands of pre-existing CRLF/Prettier errors, plus 16 pre-existing formatting errors in `src/data/portfolio.ts`; none are caused by the Laravel lines.

- [x] **Step 5: Run the production build gate**

Run:

```sh
npm run build
```

Observed: Vite/TanStack Start and Nitro complete the production build with exit code 0. Vite emits the existing large-chunk warning.

- [x] **Step 6: Review the scoped diff**

Run:

```sh
git diff --check
git diff -- src/data/portfolio.ts docs/superpowers/specs/2026-09-21-laravel-stack-design.md docs/superpowers/plans/2026-09-21-laravel-stack.md
```

Observed: the source diff contains only the Laravel icon import, logo registry entry, and backend item; no project technology tags or UI components changed.

- [x] **Step 7: Commit the coherent documentation and implementation change**

Run:

```sh
git add src/data/portfolio.ts docs/superpowers/specs/2026-09-21-laravel-stack-design.md docs/superpowers/plans/2026-09-21-laravel-stack.md
git commit -m "feat: add Laravel to portfolio stack"
```

Expected: one non-empty commit records the scoped feature and its design/implementation documentation.
