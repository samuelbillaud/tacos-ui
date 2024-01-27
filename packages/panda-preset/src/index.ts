import type { Preset } from '@pandacss/types'

import { conditions } from './conditions'
import { tokens } from './theme/tokens'
import { breakpoints } from './theme/breakpoints'

const definePreset = <T extends Preset>(preset: T) => preset

export const preset = definePreset({
  theme: {
    extend: {
      tokens,
      breakpoints,
    },
  },
  conditions,
})
