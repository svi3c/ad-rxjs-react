import { defineConfig } from "vitest/config.js";

export default defineConfig({
  test: {
    include: ["src/**/*.vspec.ts"],
  },
});
