import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['./src/components/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  minify: true,
  clean: true,
  deps: {
    neverBundle: ['@tacos-ui/panda-preset', '@tacos-ui/styled-system', 'react', 'react-dom'],
  },
});
