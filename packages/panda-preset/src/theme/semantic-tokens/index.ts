import { defineSemanticTokens } from '@pandacss/dev';

import { colors } from './colors';
import { shadows } from './shadows';

export const semanticTokens = defineSemanticTokens({
  colors: {
    ...colors,
    gray: colors['slate'],
    accent: colors['sky'],
    bg: {
      canvas: { value: '{colors.gray.1}' },
      default: { value: { base: '{colors.white.DEFAULT}', _dark: '{colors.gray.2}' } },
      subtle: { value: { base: '{colors.gray.2}', _dark: '{colors.gray.3}' } },
      muted: { value: { base: '{colors.gray.3}', _dark: '{colors.gray.4}' } },
      emphasized: { value: { base: '{colors.gray.4}', _dark: '{colors.gray.5}' } },
      disabled: { value: { base: '{colors.gray.3}', _dark: '{colors.gray.4}' } },
    },
    fg: {
      default: { value: '{colors.gray.12}' },
      muted: { value: '{colors.gray.11}' },
      subtle: { value: '{colors.gray.10}' },
      disabled: { value: '{colors.gray.7}' },
    },
    border: {
      default: { value: '{colors.gray.7}' },
      muted: { value: '{colors.gray.6}' },
      subtle: { value: '{colors.gray.4}' },
      disabled: { value: '{colors.gray.5}' },
      outline: { value: '{colors.gray.a9}' },
    },
  },
  shadows,
});
