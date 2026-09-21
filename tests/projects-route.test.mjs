import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { resolve } from "node:path";

const routeSource = readFileSync(resolve("src/routes/projects.tsx"), "utf8");

test("projects route separates QA and software engineering project dumps", () => {
  assert.match(routeSource, /<section aria-label="QA projects">/);
  assert.match(routeSource, /<section aria-label="Software engineering projects">/);
  assert.match(routeSource, /<SectionHeader code="DB:\/\/QA"/);
  assert.match(routeSource, /<SectionHeader code="DB:\/\/SE"/);
});
