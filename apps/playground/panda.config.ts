import { defineConfig } from '@pandacss/dev';

import { preset as tacosPreset } from '@tacos-ui/panda-preset';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Use lignthingcss instead of postcss for style generation
  // https://www.adebayosegun.com/blog/panda-v1-roadmap
  lightningcss: true,

  // presets
  presets: ['@pandacss/preset-base', tacosPreset],

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: 'styled-system',
});
