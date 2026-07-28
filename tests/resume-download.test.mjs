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
