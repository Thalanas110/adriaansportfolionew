# JSON Project Data Refactor

## Summary
Externalize all portfolio project data from hardcoded TypeScript constants into two static JSON files (`se-projects.json`, `qa-projects.json`), imported at build time via Vite.

## Motivation
- Decouple data from code — edit projects without touching components
- Eliminate duplicate data definitions across `projects-constants.tsx` and `somemore-constants.ts`
- Single source of truth per category (SE / QA)

## Data Schema

```typescript
type PortfolioProject = {
  id: number
  featured: boolean    // ← new field; shown on homepage tabs
  name: string
  subtitle: string
  description: string
  tech: string[]
  highlights: string[]
  github: string
  demo: string
}
```

## Files

### Created
| File | Purpose |
|---|---|
| `src/data/se-projects.json` | 23 SE projects (6 original + 17 from somemore-constants) |
| `src/data/qa-projects.json` | 4 QA projects |

### Modified
| File | Change |
|---|---|
| `projects-constants.tsx` | Remove `SE_PROJECTS`, `QA_PROJECTS` arrays; keep `PortfolioProject` type, `TABS`, `ALL_PROJECTS_URL` |
| `projects.tsx` | Import JSON files directly; filter by `featured: true` |
| `all-projects.tsx` | Import JSON files; merge + source-tag + categorize (same logic) |

### Deleted
| File | Reason |
|---|---|
| `somemore-constants.ts` | Contents merged into `se-projects.json` |

## Dedup Strategy
- Within each JSON file: no duplicates
- Cross-file (Media Remote Tool, War of Dots, etc.): kept in both with SE vs QA context — intentional
- `all-projects.tsx`: existing `canonicalName` dedup at merge time; SE entries take priority by order

## Homepage Tab Behavior
- SE tab: `seProjects.filter(p => p.featured)` → same 6 projects as before
- QA tab: `qaProjects.filter(p => p.featured)` → same 4 projects as before
- `featured: false` projects only appear in `/all-projects`

## Categorization in /all-projects
Preserved exactly as-is (Serious, Minor, QA, Client, Backend & APIs, Aviation, Playground).
Projects are merged from both JSONs, source-tagged `'SE'` / `'QA'`, and categorized by name via `pickByNames`.
