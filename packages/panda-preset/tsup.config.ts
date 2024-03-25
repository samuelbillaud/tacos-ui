import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts"],
  tsconfig: 'tsconfig.build.json',
  format: ["cjs", "esm"],
  splitting: true,
  dts: true,
  minify: true,
  clean: true,
  sourcemap: true,
  external: ["@pandacss/dev"],
});