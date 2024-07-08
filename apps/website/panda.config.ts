import { defineConfig } from '@pandacss/dev';

import typographyPreset from 'pandacss-preset-typography';

export default defineConfig({
  preflight: true,
  lightningcss: true,
  presets: [
    '@pandacss/preset-base',
    '@tacos-ui/panda-preset',
    typographyPreset({
      recipe: {
        sizes: ['base'],
        notProse: true,
      },
    }),
  ],
  validation: 'none',
  include: ['./node_modules/@tacos-ui/react/src/**/*.tsx', './src/**/*.{ts,tsx,js,jsx,astro}'],
  exclude: [],
  jsxFramework: 'react',
  outdir: 'styled-system',
  importMap: '@tacos-ui/styled-system',
  staticCss: {
    recipes: '*',
  },
  globalCss: {
    extend: {
      html: {
        scrollPaddingTop: '6rem',
        minHeight: '100%',
        scrollBehavior: 'smooth',
      },
      'html, body': {
        display: 'flex',
        flexDirection: 'column',
        height: 'unset',
        fontFamily: 'body',
      },
      'body, main': {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
      },
      '&:root': {
        '--font-roboto-mono': 'Roboto Mono Variable',
        '--font-outfit': 'Outfit Variable',
      },
      article: {
        '--colors-prose-body': 'colors.fg.muted',
        '--colors-prose-heading': 'colors.fg.default',
        '--colors-prose-bold': 'colors.fg.default',
        '--colors-prose-link': 'colors.fg.default',
        '--colors-prose-code': 'colors.fg.default',
        '--colors-prose-td-border': 'colors.border.subtle',
        '--colors-prose-th-border': 'colors.border.subtle',
      },
      'pre, code': {
        fontFamily: 'robotoMono',
      },
      pre: {
        fontSize: '14px',
        padding: '4',
        '& code': {
          fontFamily: 'inherit',
        },
      },
    },
  },
  theme: {
    extend: {
      tokens: {
        fonts: {
          body: { value: 'var(--font-outfit), sans-serif' },
          code: { value: 'var(--font-roboto-mono), monospace' },

          outfit: { value: 'var(--font-outfit), sans-serif' },
          robotoMono: { value: 'var(--font-roboto-mono), monospace' },
        },
      },
      semanticTokens: {
        fonts: {
          body: { value: { base: '{fonts.outfit}' } },
        },
        colors: {
          bg: {
            surface: { value: { base: '{colors.white}', _dark: '{colors.gray.1}' } },
          },
        },
      },
    },
  },
});
