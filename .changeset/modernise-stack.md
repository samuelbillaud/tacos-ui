---
'@tacos-ui/panda-preset': major
'@tacos-ui/react': major
'@tacos-ui/styled-system': major
---

Modernise the stack: Ark UI 5, React 19, Panda CSS 1, Astro 7, Storybook 10.

Breaking changes:

- `Select.Root` and `Combobox.Root` take a `collection` built with
  `createListCollection` instead of an `items` array. Both helpers are
  re-exported, so you do not need to depend on Ark UI directly.
- `TreeView` is a set of composable primitives (`Root`, `Tree`, `Branch`,
  `NodeProvider`) following Ark UI's API, rather than one component taking a
  `data` prop. Build the tree with `createTreeCollection`.
- React 19 is a required peer dependency of `@tacos-ui/react`, and
  `@tacos-ui/styled-system` now declares React as a peer as well: its generated
  jsx always imported React without listing it.

Fixes:

- `@tacos-ui/react` pointed its `source` export at a directory that does not
  exist and misspelled its import types entry, so neither resolved.
- `@tacos-ui/panda-preset` resolves through `src/index.ts`, which was not part
  of the published files.
