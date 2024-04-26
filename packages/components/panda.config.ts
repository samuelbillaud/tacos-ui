import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,

  presets: ['@pandacss/preset-base', '@tacos-ui/panda-preset'],

  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  jsxFramework: 'react',

  outdir: 'styled-system',

  staticCss: {
    recipes: '*',
  },
});
