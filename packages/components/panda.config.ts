import { defineConfig, defineRecipe } from '@pandacss/dev';

import tacosPreset  from '@tacos-ui/panda-preset';

import {  buttonRecipe } from '@tacos-ui/styled-system/recipes';

// export const buttonRecipe = defineRecipe({
//   className: 'button',
//   description: 'The styles for the Button component',
//   base: {
//     display: 'flex'
//   },
//   variants: {
//     visual: {
//       funky: { bg: 'red.200', color: 'white' },
//       edgy: { border: '1px solid {colors.red.500}' }
//     },
//     size: {
//       sm: { padding: '4', fontSize: '12px' },
//       lg: { padding: '8', fontSize: '40px' }
//     },
//     shape: {
//       square: { borderRadius: '0' },
//       circle: { borderRadius: 'full' }
//     }
//   },
//   defaultVariants: {
//     visual: 'funky',
//     size: 'sm',
//     shape: 'circle'
//   }
// });

export default defineConfig({
  preflight: true,

  presets: ['@pandacss/preset-base', tacosPreset],

  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  jsxFramework: 'react',

  importMap: '@tacos-ui/styled-system',

  outdir: 'styled-system',

  staticCss: {
    recipes: '*',
  },

  theme: {
    extend: {
      // recipes: {
      //   button: buttonRecipe,
      // },
      slotRecipes: {
        button: buttonRecipe,
      }
    }
  }
});
