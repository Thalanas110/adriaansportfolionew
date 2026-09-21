import assert from "node:assert/strict";
import test from "node:test";
import { featuredQAProjects } from "../src/data/featured-qa.ts";
import { featuredSEProjects } from "../src/data/featured-se.ts";
import { projectDumpQAProjects } from "../src/data/project-dump-qa.ts";
import { projectDumpSEProjects } from "../src/data/project-dump-se.ts";
import { archivedProjects, projects } from "../src/data/portfolio.ts";

test("project data is split into the four focused datasets", () => {
  assert.equal(featuredQAProjects.length, 5);
  assert.equal(featuredSEProjects.length, 6);
  assert.equal(projectDumpQAProjects.length, 7);
  assert.equal(projectDumpSEProjects.length, 25);
  assert.equal(archivedProjects.length, 32);
  assert.equal(
    new Set(archivedProjects.map(({ category, id }) => `${category}-${id}`)).size,
    archivedProjects.length,
  );

  assert.deepEqual(
    featuredSEProjects.map(({ title }) => title),
    [
      "MeatLens - Freshness Inspector",
      "Jazrielle",
      "Tahanan",
      "SnapBooth",
      "ExamHub",
      "MyLightDrugstore",
    ],
  );
  assert.deepEqual(
    featuredSEProjects.map(({ github }) => github),
    [
      "https://github.com/MeatLens-Freshness-Inspector/botchabuster",
      "https://github.com/Thalanas110/Jazrielle",
      "https://github.com/Thalanas110/tahanan",
      "https://github.com/Thalanas110/snapbooth",
      "https://github.com/Thalanas110/ExamHub",
      "https://github.com/Thalanas110/MyLightDrugstore",
    ],
  );
  assert.deepEqual(
    featuredQAProjects.map(({ title }) => title),
    ["MeatLens - Freshness Inspector", "MyLightDrugstore", "ExamHub", "new-pdc-2", "SnapBooth"],
  );
  assert.deepEqual(
    featuredQAProjects.map(({ github }) => github),
    [
      "https://github.com/MeatLens-Freshness-Inspector/botchabuster",
      "https://github.com/Thalanas110/MyLightDrugstore",
      "https://github.com/Thalanas110/ExamHub",
      "https://github.com/Thalanas110/new-pdc-2",
      "https://github.com/Thalanas110/snapbooth",
    ],
  );

  assert.deepEqual(
    projectDumpQAProjects.map(({ title }) => title),
    [...featuredQAProjects, { title: "War of Dots" }, { title: "ExamHub - Exam system" }].map(
      ({ title }) => title,
    ),
  );
  assert.deepEqual(
    projectDumpSEProjects.slice(0, featuredSEProjects.length).map(({ title }) => title),
    featuredSEProjects.map(({ title }) => title),
  );
  assert.ok(projectDumpSEProjects.some(({ title }) => title === "Zippo"));
  assert.ok(!projectDumpQAProjects.some(({ title }) => title === "I Care Center Church Website"));
  assert.ok(!projectDumpQAProjects.some(({ title }) => title === "Media Remote Tool"));
  assert.ok(!projectDumpSEProjects.some(({ title }) => title === "Media Remote Tool"));

  for (const title of [
    "MeatLens - Freshness Inspector",
    "MyLightDrugstore",
    "ExamHub",
    "SnapBooth",
  ]) {
    assert.equal(
      projectDumpQAProjects.find((project) => project.title === title)?.category,
      "QA TESTING",
    );
    assert.equal(
      projectDumpSEProjects.find((project) => project.title === title)?.category,
      "SOFTWARE ENG.",
    );
  }

  assert.deepEqual(
    projects.map(({ title }) => title),
    [...featuredQAProjects, ...featuredSEProjects].map(({ title }) => title),
  );
  assert.deepEqual(
    archivedProjects.map(({ title }) => title),
    [...projectDumpQAProjects, ...projectDumpSEProjects].map(({ title }) => title),
  );
});
