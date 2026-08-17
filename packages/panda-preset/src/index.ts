import { type Preset, definePreset } from '@pandacss/dev';

import { conditions } from './conditions';
import { globalCss } from './global-css';
import { breakpoints } from './theme/breakpoints';
import { keyframes } from './theme/keyframes';
import { recipes, slotRecipes } from './theme/recipes';
import { semanticTokens } from './theme/semantic-tokens';
import { textStyles } from './theme/text-styles';
import { tokens } from './theme/tokens';

const createPreset = (): Preset => {
  return definePreset({
    name: '@tacos-ui/panda-preset',
    theme: {
      extend: {
        breakpoints,
        keyframes,
        recipes,
        semanticTokens,
        slotRecipes,
        textStyles,
        tokens,
      },
    },
    conditions,
    globalCss,
    // Panda 1 ships a `d` utility for the SVG path property, which turns every
    // `<path d="M11.6 3.5..." />` into a CSS class. Costs ~35kB of dead CSS.
    utilities: {
      extend: {
        // oxlint-disable-next-line unicorn/no-useless-undefined -- transform returns undefined to emit nothing
        d: { transform: () => undefined },
      },
    },
  });
};

const defaultPreset = createPreset();

export { createPreset, defaultPreset as default };
