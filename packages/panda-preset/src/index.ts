import type { Preset } from '@pandacss/types'

import { conditions } from './conditions'
import { globalCss } from './global-css'
import { tokens } from './theme/tokens'
import { breakpoints } from './theme/breakpoints'
import { semanticTokens } from './theme/semantic-tokens'

const definePreset = <T extends Preset>(preset: T) => preset

export const preset = definePreset({
  theme: {
    extend: {
      tokens,
      breakpoints,
      semanticTokens,
    },
  },
  conditions,
  globalCss,
})
