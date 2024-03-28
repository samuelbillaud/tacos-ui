import { defineConfig } from '@pandacss/dev';

import { preset as tacosPreset } from '@tacos-ui/panda-preset';

export default defineConfig({
  preflight: true,
  presets: ['@pandacss/preset-base', tacosPreset],
  include: ['./node_modules/@tacos-ui/panda-preset/**/*.js', './src/**/*.{js,jsx,ts,tsx}'],
  jsxFramework: 'react',
  outdir: '@tacos-ui/styled-system',
  emitPackage: true,
  staticCss: {
    recipes: '*',
  },
});
