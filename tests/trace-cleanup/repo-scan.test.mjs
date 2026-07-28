import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve, relative } from "node:path";
import test from "node:test";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const vendorBrand = ["Lo", "vable"].join("");
const vendorHost = [vendorBrand.toLowerCase(), ".dev"].join("");
const vendorScope = `@${vendorHost}`;
const vendorRegistry = [vendorBrand.toLowerCase(), "-core-prod"].join("");
const forbiddenValues = [vendorBrand, vendorHost, vendorScope, vendorRegistry];
const ignoredDirs = new Set([".git", "node_modules", ".output", "dist", "dist-ssr"]);

function collectFiles(currentDir, files = []) {
  for (const entry of readdirSync(currentDir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!ignoredDirs.has(entry.name)) {
        collectFiles(join(currentDir, entry.name), files);
      }
      continue;
    }

    if (entry.isFile()) {
      files.push(join(currentDir, entry.name));
    }
  }

  return files;
}

test("repository no longer contains removed platform traces", () => {
  const matches = [];

  for (const filePath of collectFiles(repoRoot)) {
    const relativePath = relative(repoRoot, filePath);

    for (const value of forbiddenValues) {
      if (relativePath.includes(value)) {
        matches.push(`path:${relativePath}`);
      }
    }

    if (!statSync(filePath).isFile()) {
      continue;
    }

    const content = readFileSync(filePath, "utf8");
    for (const value of forbiddenValues) {
      if (content.includes(value)) {
        matches.push(`content:${relativePath}`);
        break;
      }
    }
  }

  assert.deepEqual(matches, []);
});

test("legacy bun lockfile is absent after cleanup", () => {
  assert.equal(existsSync(resolve(repoRoot, "bun.lock")), false);
});
