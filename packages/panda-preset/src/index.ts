import type { Preset } from '@pandacss/types';

import { conditions } from './conditions';
import { globalCss } from './global-css';
import { breakpoints } from './theme/breakpoints';
import { keyframes } from './theme/keyframes';
import { recipes, slotRecipes } from './theme/recipes';
import { semanticTokens } from './theme/semantic-tokens';
import { textStyles } from './theme/text-styles';
import { tokens } from './theme/tokens';

const definePreset = <T extends Preset>(preset: T) => preset;

export const preset: Preset = definePreset({
  theme: {
    extend: {
      breakpoints,
      keyframes,
      semanticTokens,
      recipes,
      slotRecipes,
      textStyles,
      tokens,
    },
  },
  conditions,
  globalCss,
});
