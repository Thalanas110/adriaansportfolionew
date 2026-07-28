# Resume Download Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a dedicated resume download panel to the dossier that downloads the PDF stored in `public/`.

**Architecture:** Keep resume download metadata in `src/data/portfolio.ts`, then render a focused panel in `src/components/vault/Dossier.tsx` using that data. Cover the asset wiring with a small Node test that confirms the public file path and download filename remain valid.

**Tech Stack:** React 19, TanStack Start, TypeScript, Node `node:test`

## Global Constraints

- Keep the resume action in the dossier right column above `Connect`
- Use a same-origin anchor with the `download` attribute
- Do not add new dependencies for this feature
- Verify with `node --test` and `npm run build`

---

### Task 1: Resume Download Wiring

**Files:**
- Modify: `src/data/portfolio.ts`
- Modify: `src/components/vault/Dossier.tsx`
- Create: `tests/resume-download.test.mjs`

**Interfaces:**
- Consumes: existing `profile` object in `src/data/portfolio.ts`
- Produces: `profile.resume` with `{ href: string; download: string; note: string }`

- [ ] **Step 1: Write the failing test**

```js
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import { profile } from "../src/data/portfolio.ts";

test("resume download config points to an existing public pdf", () => {
  assert.ok(profile.resume);
  assert.match(profile.resume.href, /^\/.+\.pdf$/);
  assert.match(profile.resume.download, /\.pdf$/i);

  const assetName = decodeURIComponent(profile.resume.href.slice(1));
  assert.equal(existsSync(resolve("public", assetName)), true);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/resume-download.test.mjs`
Expected: FAIL because `profile.resume` is not defined yet

- [ ] **Step 3: Write minimal implementation**

```ts
export const profile = {
  // existing fields...
  resume: {
    href: "/final%20adriaan%20resume.pdf",
    download: "Adriaan-M-Dimate-Resume.pdf",
    note: "Direct PDF download for recruiters and collaborators.",
  },
};
```

```tsx
<div className="panel corner-marks p-6">
  <span className="tick-label text-rad">Resume</span>
  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{profile.resume.note}</p>
  <a
    href={profile.resume.href}
    download={profile.resume.download}
    className="corner-marks mt-5 inline-flex w-full items-center justify-center border border-rad bg-rad/10 px-4 py-3 text-xs tracking-[0.24em] text-rad transition-all hover:bg-rad hover:text-primary-foreground hover:shadow-[0_0_28px_-6px_var(--rad)]"
  >
    DOWNLOAD RESUME
  </a>
</div>
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/resume-download.test.mjs`
Expected: PASS

- [ ] **Step 5: Run full verification**

Run: `npm run build`
Expected: exit code 0 with successful production build output
