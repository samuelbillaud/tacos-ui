import { defineConfig } from '@pandacss/dev';

import preset from './src';

export default defineConfig({
  // Use preset-base & panda-preset
  presets: ['@pandacss/preset-base', preset],

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  importMap: '@tacos-ui/panda-preset',

  // The JSX framework to use
  jsxFramework: 'react',
});
