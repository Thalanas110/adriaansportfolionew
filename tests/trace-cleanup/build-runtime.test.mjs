import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import test from "node:test";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const vendorBrand = ["Lo", "vable"].join("");
const vendorHost = [vendorBrand.toLowerCase(), ".dev"].join("");
const vendorScope = `@${vendorHost}`;
const runtimeReporter = ["report", vendorBrand, "Error"].join("");
const runtimeModule = [vendorBrand.toLowerCase(), "-error-reporting"].join("");

function read(relativePath) {
  return readFileSync(resolve(repoRoot, relativePath), "utf8");
}

test("vite config uses the standard TanStack Start plugin stack", () => {
  const viteConfig = read("vite.config.ts");

  assert.ok(!viteConfig.includes(vendorScope));
  assert.ok(viteConfig.includes("@tanstack/react-start/plugin/vite"));
  assert.ok(viteConfig.includes("nitro/vite"));
  assert.ok(viteConfig.includes("@vitejs/plugin-react"));
  assert.ok(viteConfig.includes("@tailwindcss/vite"));
  assert.ok(viteConfig.includes("vite-tsconfig-paths"));
});

test("package.json no longer lists removed platform packages", () => {
  const packageJson = read("package.json");

  assert.ok(!packageJson.includes(vendorScope));
});

test("root route no longer imports or calls removed platform runtime reporting", () => {
  const rootRoute = read("src/routes/__root.tsx");

  assert.ok(!rootRoute.includes(runtimeReporter));
  assert.ok(!rootRoute.includes(runtimeModule));
});

test("the removed platform runtime helper file is absent", () => {
  assert.equal(existsSync(resolve(repoRoot, `src/lib/${runtimeModule}.ts`)), false);
});
