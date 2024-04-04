import type { Token } from '@pandacss/types';

import { defineTokens } from '@pandacss/dev';

import * as radixColors from '@radix-ui/colors';

export const defineColorPalettes = () => {
  const excludedColors = ['gray', 'mauve', 'sage', 'olive', 'sand'];

  return Object.fromEntries(
    Object.keys(radixColors)
      .filter((color) => !/[A-Z]/.test(color))
      .filter((color) => !excludedColors.includes(color))
      .map((color) => [color, defineColorPalette(color)]),
  );
};

const defineColorPalette = (color: string) => {
  const colorObj = Object.fromEntries(
    Object.keys(radixColors)
      .filter((key) => key.startsWith(color))
      .filter((key) => !/\d/.test(key))
      .map((key) => {
        // @ts-expect-error types for radixColors are not available
        const tokens = toColorTokens(color, radixColors[key]);

        return [key, tokens];
      }),
  );

  return defineTokens.colors(
    Object.keys(colorObj).reduce(
      (acc, key) => {
        const target = key.includes('Dark') ? 'dark' : 'light';

        acc[target] = { ...acc[target], ...colorObj[key] };

        return acc;
      },
      { light: {}, dark: {} },
    ),
  );
};

const toColorTokens = (
  color: string,
  scale: Record<string, string>,
): Record<string, Token<string>> => {
  return Object.fromEntries(
    Object.keys(scale).map((key) => {
      const value = scale[key];
      const name = key.replace(color, '').toLowerCase();

      return [name, { value }];
    }),
  );
};
