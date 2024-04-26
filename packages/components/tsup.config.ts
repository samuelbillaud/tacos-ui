import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/components/ui/index.ts'],
  format: ['cjs', 'esm'],
  splitting: true,
  dts: true,
  minify: true,
  clean: true,
  external: ['@tacos-ui/panda-preset', 'react', 'react-dom'],
});
