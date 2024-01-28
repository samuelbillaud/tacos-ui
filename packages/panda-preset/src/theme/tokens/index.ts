import type { Tokens } from '@pandacss/types'

import { spacing } from './spacing'
import { fontSizes, fontWeights, fonts, letterSpacings, lineHeights } from './typography'
import { defineColorTokens } from './colors'
import { radii } from './radii'

const defineTokens = <T extends Tokens>(v: T) => v

export const tokens = defineTokens({
  colors: defineColorTokens(),
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  spacing,
})