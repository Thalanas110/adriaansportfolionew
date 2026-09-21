# Portfolio Data Refactor Design

## Goal

Reduce the responsibility of `src/data/portfolio.ts` by moving project datasets into the project-data files that already exist in `src/data`, while preserving the portfolio's current rendered content and public data exports.

## Structure

- `featured-qa.ts` owns the featured QA projects and the shared `Project` shape.
- `featured-se.ts` owns the featured software-engineering projects.
- `project-dump-qa.ts` owns the complete QA project dump, including featured QA projects.
- `project-dump-se.ts` owns the complete software-engineering project dump, including featured SE projects.
- `portfolio.ts` owns non-project portfolio data: profile, stack/icon metadata, operations, and contact channels. It also composes and re-exports `projects` and `archivedProjects` as a compatibility barrel.

Project lists are composed in category order so the home archive continues to show featured QA projects followed by featured software-engineering projects, while the full projects route renders every project-dump record with QA projects before software-engineering projects. Featured projects are a subset of their corresponding project dump, not an alternative to it.

## Data flow

The project files export typed arrays. The composition layer combines the featured arrays into `projects` and the complete project-dump arrays into `archivedProjects`. Components that need only project data may import the focused project modules or composition exports; existing consumers of `portfolio.ts` remain valid during the refactor.

## Compatibility and behavior

- Existing project content, IDs, categories, links, and ordering remain unchanged.
- `featured-se.ts` is the corrected filename for the existing typo `features-se.ts` and remains ready for future pinned-GitHub project updates.
- The `/projects` route continues to render the complete inventory, now including featured projects as required by the project-dump contract.

## Verification

Run the repository's available quality gates after implementation:

1. `npm run lint`
2. `npm run build`
3. `node --test tests/*.test.mjs tests/trace-cleanup/*.test.mjs`

Also inspect the final diff to confirm the four project modules contain the expected data and that no project records were lost or duplicated.
