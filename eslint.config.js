import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import stylisticPlugin from '@stylistic/eslint-plugin';
import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-config-prettier';
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';

const compat = new FlatCompat();

const thirdPartyRules = {
  ...tsEslint.configs.recommended.rules,
};

const config = {
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      project: [
        'tsconfig.json',
        'packages/components/tsconfig.json',
        'packages/panda-preset/tsconfig.json',
      ],
    },
    globals: globals.browser,
  },
  plugins: {
    '@typescript-eslint': tsEslint,
    'eslint-plugin-react': reactPlugin,
    'eslint-plugin-react-hooks': reactHooksPlugin,
    '@stylistic': stylisticPlugin,
  },
  rules: {
    ...thirdPartyRules,
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
    ],
    'perfectionist/sort-objects': 'off',
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'natural',
        order: 'asc',
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
        'custom-groups': {
          value: {
            react: ['react', 'react-*', 'react-*/**'],
            panda: '@pandacss/**',
            styledSystem: 'styled-system/**',
          },
        },
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

const globalIgnores = {
  ignores: [
    '**/postcss.config.cjs',
    '**/.storybook/**',
    '**/node_modules',
    '**/dist',
    '**/build',
    '**/styled-system',
  ],
};

const globalFiles = {
  files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
};

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...compat.config(reactPlugin.configs.recommended),
  ...compat.config(reactPlugin.configs['jsx-runtime']),
  ...compat.config(reactHooksPlugin.configs.recommended),
  js.configs.recommended,
  perfectionistNatural,
  prettierPlugin,
  config,
  globalIgnores,
  globalFiles,
];
