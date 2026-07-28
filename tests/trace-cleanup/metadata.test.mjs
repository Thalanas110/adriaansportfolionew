import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import test from "node:test";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const vendorBrand = ["Lo", "vable"].join("");
const vendorHost = [vendorBrand.toLowerCase(), ".dev"].join("");
const vendorScope = `@${vendorHost}`;
const vendorDir = `.${vendorBrand.toLowerCase()}`;
const forbiddenValues = [vendorBrand, vendorHost, vendorScope];

function read(relativePath) {
  return readFileSync(resolve(repoRoot, relativePath), "utf8");
}

function assertNoVendorText(content) {
  for (const value of forbiddenValues) {
    assert.ok(!content.includes(value));
  }
}

test("README describes the portfolio project instead of the removed platform", () => {
  const readme = read("README.md");

  assert.ok(readme.includes("# Adriaan M. Dimate Portfolio"));
  assertNoVendorText(readme);
});

test("bunfig.toml no longer exempts removed platform packages", () => {
  const bunfig = read("bunfig.toml");

  assert.ok(bunfig.includes("minimumReleaseAge = 86400"));
  assertNoVendorText(bunfig);
});

test("AGENTS.md no longer carries platform-specific instructions", () => {
  const agents = read("AGENTS.md");

  assertNoVendorText(agents);
});

test("the platform metadata directory is removed", () => {
  assert.equal(existsSync(resolve(repoRoot, vendorDir)), false);
});
