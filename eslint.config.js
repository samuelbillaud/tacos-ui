import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import prettierPlugin from 'eslint-config-prettier';
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural';
import eslintPluginReactConfigRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';
import path from 'path';
import tseslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

export default [
  {
    ignores: [
      '**/postcss.config.cjs',
      '**/.storybook/**',
      '**/node_modules',
      '**/dist',
      '**/build',
      '**/styled-system',
      '*.d.ts',
    ],
  },
  perfectionistNatural,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', next: 'return', prev: '*' },
        { blankLine: 'always', next: '*', prev: ['const', 'let'] },
        { blankLine: 'any', next: ['const', 'let'], prev: ['const', 'let'] },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          'custom-groups': {
            value: {
              panda: '@pandacss/**',
              react: ['react', 'react-*', 'react-*/**'],
              styledSystem: '@tacos-ui/styled-system/**',
            },
          },
          groups: [
            'type',
            'react',
            'panda',
            ['builtin', 'external'],
            'styledSystem',
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'side-effect',
            'style',
            'object',
            'unknown',
          ],
          'newlines-between': 'always',
          order: 'asc',
          type: 'natural',
        },
      ],
      'perfectionist/sort-objects': 'off',
    },
  },
  ...tseslint.configs.recommended,
  {
    files: ['packages/components/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      eslintPluginReactConfigRecommended,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  ...compat.config(reactHooksPlugin.configs.recommended),
  prettierPlugin,
];
