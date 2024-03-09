import { defineConfig } from '@pandacss/dev';

import { preset as tacosPreset } from '@tacos-ui/panda-preset';

export default defineConfig({
  preflight: true,
  presets: ['@pandacss/preset-base', tacosPreset],
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  jsxFramework: 'react',
  outdir: 'styled-system',
  staticCss: {
    recipes: '*',
  },
});
