# JSON Project Data Refactor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace hardcoded TypeScript project constants with two Vite-imported JSON files (`se-projects.json`, `qa-projects.json`).

**Architecture:** Static JSON files in `src/data/` are imported directly by components at build time (Vite native JSON import). A `featured` boolean field distinguishes homepage projects from full-archive projects. Projects that appear in both SE and QA context (Media Remote Tool, War of Dots, I Care Center, ExamHub) are duplicated intentionally across the two files with different descriptions.

**Tech Stack:** TypeScript, Vite (native JSON imports), TanStack Start, React 19

---

### Task 1: Create `src/data/se-projects.json`

**Files:**
- Create: `src/data/se-projects.json`

- [ ] **Step 1: Create directory and file**

Create directory `src/data/` and write `se-projects.json` with all 23 SE projects merged from SE_PROJECTS (6 items, `featured: true`) + SOME_MORE_PROJECTS (17 items, `featured: false`), with sequential IDs 1–23.

Source data from:
- `src/components/portfolio/portfolio-constants/projects-constants.tsx` lines 14–81 (SE_PROJECTS)
- `src/components/portfolio/portfolio-constants/somemore-constants.ts` lines 3–214 (SOME_MORE_PROJECTS)

Each entry uses the `PortfolioProject` shape with an added `featured` boolean:

```json
{
  "id": 1,
  "featured": true,
  "name": "...",
  "subtitle": "...",
  "description": "...",
  "tech": ["..."],
  "highlights": ["..."],
  "github": "...",
  "demo": "..."
}
```

First 6 entries (original SE_PROJECTS): `featured: true`
Remaining 17 entries (from SOME_MORE_PROJECTS): `featured: false`

- [ ] **Step 2: Verify file is valid JSON**

Run: `node -e "JSON.parse(require('fs').readFileSync('src/data/se-projects.json','utf8'))"`

Expected: no error, exits cleanly.

---

### Task 2: Create `src/data/qa-projects.json`

**Files:**
- Create: `src/data/qa-projects.json`

- [ ] **Step 1: Create file**

Write `qa-projects.json` with all 4 QA projects from QA_PROJECTS (source: `projects-constants.tsx` lines 83–149), each with `featured: true`.

```json
{
  "id": 1,
  "featured": true,
  "name": "...",
  "subtitle": "...",
  "description": "...",
  "tech": ["..."],
  "highlights": ["..."],
  "github": "...",
  "demo": "..."
}
```

IDs 1–4, all `featured: true`.

- [ ] **Step 2: Verify file is valid JSON**

Run: `node -e "JSON.parse(require('fs').readFileSync('src/data/qa-projects.json','utf8'))"`

Expected: no error, exits cleanly.

---

### Task 3: Strip project data from `projects-constants.tsx`

**Files:**
- Modify: `src/components/portfolio/portfolio-constants/projects-constants.tsx`

- [ ] **Step 1: Remove `SE_PROJECTS` and `QA_PROJECTS` arrays**

Delete:
- Lines 14–81: entire `SE_PROJECTS` constant
- Lines 83–149: entire `QA_PROJECTS` constant

Keep everything else: `Tab` type, `PortfolioProject` type, `ALL_PROJECTS_URL`, `TABS`.

Resulting file should only contain:
- `export type Tab = 'SE' | 'QA' | 'AVIATION'`
- `export type PortfolioProject = { id: number; name: string; subtitle: string; description: string; tech: string[]; highlights: string[]; github: string; demo: string; featured: boolean }`
- `export const ALL_PROJECTS_URL = '/all-projects'`
- `export const TABS = [...]`

---

### Task 4: Delete `somemore-constants.ts`

**Files:**
- Delete: `src/components/portfolio/portfolio-constants/somemore-constants.ts`

- [ ] **Step 1: Delete the file**

Delete `src/components/portfolio/portfolio-constants/somemore-constants.ts`.

- [ ] **Step 2: Remove stale reference (if any)**

Verify no other files import from `somemore-constants`. Currently only `all-projects.tsx` does — that import will be removed in Task 6.

---

### Task 5: Update `projects.tsx` — homepage project section

**Files:**
- Modify: `src/components/portfolio/projects.tsx`

- [ ] **Step 1: Replace imports**

Remove:
```typescript
import {
  type PortfolioProject,
  type Tab,
  QA_PROJECTS,
  SE_PROJECTS,
  ALL_PROJECTS_URL,
  TABS,
} from './portfolio-constants/projects-constants'
```

Replace with:
```typescript
import {
  type PortfolioProject,
  type Tab,
  ALL_PROJECTS_URL,
  TABS,
} from './portfolio-constants/projects-constants'
import seProjectsData from '@/data/se-projects.json'
import qaProjectsData from '@/data/qa-projects.json'
```

- [ ] **Step 2: Add filtered constants**

After imports, add:
```typescript
const SE_PROJECTS: PortfolioProject[] = (seProjectsData as PortfolioProject[]).filter(p => p.featured)
const QA_PROJECTS: PortfolioProject[] = (qaProjectsData as PortfolioProject[]).filter(p => p.featured)
```

These replace the old hardcoded arrays and keep the rest of the component unchanged (the JSX references `SE_PROJECTS` and `QA_PROJECTS`).

---

### Task 6: Update `all-projects.tsx` — full archive page

**Files:**
- Modify: `src/components/portfolio/all-projects.tsx`

- [ ] **Step 1: Replace imports**

Remove:
```typescript
import {
  type PortfolioProject,
  QA_PROJECTS,
  SE_PROJECTS,
} from './portfolio-constants/projects-constants'
import { SOME_MORE_PROJECTS } from './portfolio-constants/somemore-constants'
```

Replace with:
```typescript
import {
  type PortfolioProject,
} from './portfolio-constants/projects-constants'
import seProjectsData from '@/data/se-projects.json'
import qaProjectsData from '@/data/qa-projects.json'
```

- [ ] **Step 2: Update source mapping**

Change:
```typescript
const seEntries: ListedProject[] = SE_PROJECTS.map((project) => ({
  ...project,
  source: 'SE',
}))

const qaEntries: ListedProject[] = QA_PROJECTS.map((project) => ({
  ...project,
  source: 'QA',
}))

const moreEntries: ListedProject[] = SOME_MORE_PROJECTS.map((project) => ({
  ...project,
  source: 'DUMP',
}))
```

To:
```typescript
const seEntries: ListedProject[] = (seProjectsData as PortfolioProject[]).map((project) => ({
  ...project,
  source: 'SE' as const,
}))

const qaEntries: ListedProject[] = (qaProjectsData as PortfolioProject[]).map((project) => ({
  ...project,
  source: 'QA' as const,
}))
```

- [ ] **Step 3: Update merge and dedup**

Change:
```typescript
const mergedEntries: ListedProject[] = [...seEntries, ...moreEntries, ...qaEntries]
```

To:
```typescript
const mergedEntries: ListedProject[] = [...seEntries, ...qaEntries]
```

The rest of the file (dedup via `canonicalName`, `pickByNames`, `SECTIONS`, rendering) stays the same.

---

### Task 7: Build and verify

- [ ] **Step 1: Run TypeScript check**

Run: `cd C:\Users\Adriaan M. Dimate\Desktop\adriaansportfolionew && npx tsc --noEmit`

Expected: no type errors. If `resolveJsonModule` errors occur, add `"resolveJsonModule": true` to `tsconfig.json` compilerOptions.

- [ ] **Step 2: Run lint**

Run: `npm run lint`

Expected: no lint errors.

- [ ] **Step 3: Run build**

Run: `npm run build`

Expected: build succeeds with no errors.
