# @tacos-ui/react

## 1.0.0

### Major Changes

- [`88e68d0`](https://github.com/samuelbillaud/tacos-ui/commit/88e68d0b85175e1cad07cfa8d27be015f0cba029) Thanks [@sbillaud-valwin](https://github.com/sbillaud-valwin)! - Modernise the stack: Ark UI 5, React 19, Panda CSS 1, Astro 7, Storybook 10.

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

### Minor Changes

- [#98](https://github.com/samuelbillaud/tacos-ui/pull/98) [`bb44347`](https://github.com/samuelbillaud/tacos-ui/commit/bb44347e85467afdebf4f5829dd1e1b926c0eeb0) Thanks [@samuelbillaud](https://github.com/samuelbillaud)! - - Export ButtonProps & IconButtonProps
  - Add Stepper & Slider components
  - Fix fg colors (delete useless DEFAULT)
  - Change accent color to mint

### Patch Changes

- Updated dependencies [[`88e68d0`](https://github.com/samuelbillaud/tacos-ui/commit/88e68d0b85175e1cad07cfa8d27be015f0cba029), [`bb44347`](https://github.com/samuelbillaud/tacos-ui/commit/bb44347e85467afdebf4f5829dd1e1b926c0eeb0)]:
  - @tacos-ui/panda-preset@1.0.0
  - @tacos-ui/styled-system@1.0.0

## 0.4.0

### Minor Changes

- This is the first component batch published thanks to Changesets.

  The components are : Accordion, Alert, Avatar, Badge, Button, Card, Checkbox, Clipboard, Code, Collapsible, Combobox, Dialog, Drawer, Editable, FormLabel, Heading, HoverCard, Icon, IconButton, Input, Kbd, Link, Menu, Popover, RadioButtonGroup, RadioGroup, Select, Skeleton, Switch, Tabs, TagsInput, Text, Textarea, Toast, ToggleGroup, Tooltip, TreeView

### Patch Changes

- Updated dependencies []:
  - @tacos-ui/panda-preset@0.4.0
  - @tacos-ui/styled-system@0.4.0
