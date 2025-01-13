import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/**/index.ts"],
  format: ["esm", "cjs"],
  treeshake: false,
  splitting: true,
  dts: true,
  minify: false,
  clean: true,
  sourcemap: true,
  compilerOptions: {
    baseUrl: ".",
    outDir: "dist",
    paths: {
      "@zitadel/client/*": ["./src/*"],
    },
  },
  ...options,
}));
