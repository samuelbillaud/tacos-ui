import type { Tokens } from '@pandacss/types'

import { spacing } from './spacing'
import { fontSizes, fontWeights, fonts, letterSpacings, lineHeights } from './typography'

const defineTokens = <T extends Tokens>(v: T) => v

export const tokens = defineTokens({
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  spacing,
})