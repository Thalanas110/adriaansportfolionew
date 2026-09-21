import assert from "node:assert/strict";
import test from "node:test";
import { featuredQAProjects } from "../src/data/featured-qa.ts";
import { featuredSEProjects } from "../src/data/featured-se.ts";
import { projectDumpQAProjects } from "../src/data/project-dump-qa.ts";
import { projectDumpSEProjects } from "../src/data/project-dump-se.ts";
import { archivedProjects, projects } from "../src/data/portfolio.ts";

test("project data is split into the four focused datasets", () => {
  assert.equal(featuredQAProjects.length, 4);
  assert.equal(featuredSEProjects.length, 6);
  assert.equal(projectDumpQAProjects.length, 4);
  assert.equal(projectDumpSEProjects.length, 24);
  assert.equal(archivedProjects.length, 28);

  assert.deepEqual(
    projectDumpQAProjects.map(({ title }) => title),
    featuredQAProjects.map(({ title }) => title),
  );
  assert.deepEqual(
    projectDumpSEProjects.slice(0, featuredSEProjects.length).map(({ title }) => title),
    featuredSEProjects.map(({ title }) => title),
  );

  assert.deepEqual(
    projects.map(({ title }) => title),
    [...featuredQAProjects, ...featuredSEProjects].map(({ title }) => title),
  );
  assert.deepEqual(
    archivedProjects.map(({ title }) => title),
    [...projectDumpQAProjects, ...projectDumpSEProjects].map(({ title }) => title),
  );
});
