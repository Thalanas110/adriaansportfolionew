# Portfolio Data Refactor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Split project records out of `src/data/portfolio.ts` into the four existing category files while preserving all current project content, ordering, exports, and UI behavior.

**Architecture:** `featured-qa.ts` owns the shared `Project` type and featured QA records. `featured-se.ts` owns featured SE records. The two `project-dump-*` modules own the complete inventories, each including its featured records plus any additional projects. `portfolio.ts` retains profile/stack/operations/contact data and composes `projects` and `archivedProjects` from those focused modules as a compatibility barrel.

**Tech Stack:** TypeScript, React, TanStack Start, ESLint, Vite, Node test runner.

## Global Constraints

- Featured and dump datasets are sourced from the current pinned GitHub project lists; displaced older records remain in the complete dump, and dump IDs are unique within each category so rendered card keys do not collide.
- `featured-se.ts` is the corrected filename for the existing typo `features-se.ts`.
- No UI behavior, routes, or external URLs change as part of this refactor.
- Preserve all existing test coverage and run the repository's lint, build, and test gates.

---

### Task 1: Move project datasets into focused modules

**Files:**

- Create: `src/data/featured-se.ts`
- Modify: `src/data/featured-qa.ts`
- Modify: `src/data/project-dump-qa.ts`
- Modify: `src/data/project-dump-se.ts`
- Delete: `src/data/features-se.ts`

**Interfaces:**

- Produces `Project`, `featuredQAProjects`, `featuredSEProjects`, `projectDumpQAProjects`, and `projectDumpSEProjects` for the composition step.

- [ ] **Step 1: Define the shared project type and featured QA data**

  Keep the existing optional-link shape and category union in `src/data/featured-qa.ts`, then export the first four records from `portfolio.ts` as `featuredQAProjects: Project[]` in their current order: I Care Center Church Website, War of Dots, Media Remote Tool, and ExamHub - Exam system.

- [ ] **Step 2: Create the corrected featured SE module**

  Create `src/data/featured-se.ts` with `import type { Project } from "./featured-qa.ts";` and export `featuredSEProjects: Project[]`. Move the current featured SE records into it in order: Meatlens - Freshness Inspector, SnapBooth, Tahanan, ExamHub - Exam system, Zippo, and Media Remote Tool.

- [ ] **Step 3: Create the archived project modules**

  In `src/data/project-dump-qa.ts`, import `featuredQAProjects` and export `projectDumpQAProjects: Project[] = [...featuredQAProjects]` so every featured QA record is present in the complete QA dump.

  In `src/data/project-dump-se.ts`, import `featuredSEProjects`, prepend `...featuredSEProjects`, and export `projectDumpSEProjects: Project[]`, followed by Zippo, Media Remote Tool, and the 18 older SE records. Keep the older records in order and use IDs `11`–`30` for all 20 non-featured SE records to avoid duplicate keys.

- [ ] **Step 4: Remove the typo-named file**

  Delete `src/data/features-se.ts` after the new `featured-se.ts` exists. Confirm no source import refers to the old name.

- [ ] **Step 5: Inspect the moved data before composition**

  Run:

  ```powershell
  rg -n "export (const|type)|title:" src/data/featured-qa.ts src/data/featured-se.ts src/data/project-dump-qa.ts src/data/project-dump-se.ts
  ```

  Expected: five featured QA titles, six featured SE titles, four displaced QA literal titles in `project-dump-qa.ts` plus five featured records from its spread, and 20 non-featured SE literal titles in `project-dump-se.ts` plus six featured records from its spread.

### Task 2: Compose the focused modules through `portfolio.ts`

**Files:**

- Modify: `src/data/portfolio.ts`
- Modify: `src/components/vault/ProjectCard.tsx`

**Interfaces:**

- Consumes `featuredQAProjects`, `featuredSEProjects`, `projectDumpQAProjects`, and `projectDumpSEProjects` from the four focused modules.
- Produces compatibility exports `Project`, `projects`, and `archivedProjects` from `src/data/portfolio.ts`.

- [ ] **Step 1: Replace the project block in `portfolio.ts` with imports and composition**

  Add these imports near the top of `src/data/portfolio.ts`:

  ```ts
  import type { Project } from "./featured-qa.ts";
  import { featuredQAProjects } from "./featured-qa.ts";
  import { featuredSEProjects } from "./featured-se.ts";
  import { projectDumpQAProjects } from "./project-dump-qa.ts";
  import { projectDumpSEProjects } from "./project-dump-se.ts";
  export type { Project } from "./featured-qa.ts";
  ```

  Remove the local `Project` type and both large project arrays. Replace them with:

  ```ts
  export const projects: Project[] = [...featuredQAProjects, ...featuredSEProjects];

  export const archivedProjects: Project[] = [...projectDumpQAProjects, ...projectDumpSEProjects];
  ```

  Keep profile, stack/icon metadata, operations, and channels in `portfolio.ts` unchanged.

- [ ] **Step 2: Point the card type at the focused project module**

  Change the type-only import in `src/components/vault/ProjectCard.tsx` to:

  ```ts
  import type { Project } from "@/data/featured-qa";
  ```

  Leave rendering logic unchanged.

- [ ] **Step 3: Verify project references and compatibility exports**

  Run:

  ```powershell
  rg -n "features-se|featured-se|featuredQAProjects|featuredSEProjects|projectDumpQAProjects|projectDumpSEProjects|export const projects|export const archivedProjects" src
  ```

  Expected: no `features-se` reference; each focused export is imported by the correct composition module; both composed arrays remain exported; `Archive`, `/projects`, and `ProjectCard` resolve through valid imports.

### Task 3: Run the repository quality gates

**Files:**

- Verify: `src/data/featured-qa.ts`
- Verify: `src/data/featured-se.ts`
- Verify: `src/data/project-dump-qa.ts`
- Verify: `src/data/project-dump-se.ts`
- Verify: `src/data/portfolio.ts`
- Verify: `src/components/vault/ProjectCard.tsx`

- [ ] **Step 1: Run lint**

  Run `npm run lint`.

  Expected: exit code 0 with no ESLint errors.

- [ ] **Step 2: Run the production build**

  Run `npm run build`.

  Expected: exit code 0 and a completed Vite/TanStack Start production build.

- [ ] **Step 3: Run the existing tests**

  Run `node --test tests/*.test.mjs tests/trace-cleanup/*.test.mjs`.

  Expected: exit code 0 with all existing tests passing.

- [ ] **Step 4: Check the final diff and record counts**

  Run:

  ```powershell
  git diff --check
  git status --short
  (rg '^    title:' src/data/featured-qa.ts | Measure-Object -Line).Lines
  (rg '^    title:' src/data/featured-se.ts | Measure-Object -Line).Lines
  (rg '^    title:' src/data/project-dump-qa.ts | Measure-Object -Line).Lines
  (rg '^    title:' src/data/project-dump-se.ts | Measure-Object -Line).Lines
  ```

  Expected: no whitespace errors; the intended files are the only task changes; literal title counts are 5 in `featured-qa.ts`, 6 in `featured-se.ts`, 4 in `project-dump-qa.ts` plus five featured records from its spread, and 20 in `project-dump-se.ts` plus six featured records from its spread.
