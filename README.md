# Tacos UI

An UI library which used Ark-ui & Panda CSS

## What's inside?

This repository uses :

- [pnpm](https://pnpm.io) as a package manager.
- [Ark-ui](https://ark-ui.com/) as headless ui components library.
- [Panda-css](https://panda-css.com/) as CSS-in-JS library.
- [Tsup](https://tsup.egoist.dev/) as build tool
- [TypeScript](https://www.typescriptlang.org/) for static type checking.
- [ESLint](https://eslint.org/) for code linting.
- [Prettier](https://prettier.io) for code formatting.
- [Storybook](https://storybook.js.org/) for visual testing

This repository contains :

- a package named components
- a package named panda-preset
- a package named styled-system
- an app named website
- an app named playground

### Usage

First, you must install dependencies, so run :

```
pnpm install
```

Second, you can run packages

- For all packages

```
pnpm dev
```

- For components only

```
pnpm dev:components
```

- For preset only

```
pnpm dev:panda-preset
```

- For website

```
pnpm run:website
```
