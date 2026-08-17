import type { Assign } from '@ark-ui/react';
import { type TreeNode, TreeView } from '@ark-ui/react/tree-view';

import { type TreeViewRecipeVariantProps, treeViewRecipe } from '@tacos-ui/styled-system/recipes';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

import { createStyleContext } from '~/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(treeViewRecipe);

export interface RootProps
  extends Assign<JsxStyleProps, TreeView.RootProps<TreeNode>>, TreeViewRecipeVariantProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(TreeView.Root, 'root');

export const Branch = withContext<HTMLDivElement, Assign<JsxStyleProps, TreeView.BranchProps>>(
  TreeView.Branch,
  'branch'
);

export const BranchContent = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, TreeView.BranchContentProps>
>(TreeView.BranchContent, 'branchContent');

export const BranchControl = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, TreeView.BranchControlProps>
>(TreeView.BranchControl, 'branchControl');

export const BranchIndicator = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, TreeView.BranchIndicatorProps>
>(TreeView.BranchIndicator, 'branchIndicator');

export const BranchText = withContext<
  HTMLSpanElement,
  Assign<JsxStyleProps, TreeView.BranchTextProps>
>(TreeView.BranchText, 'branchText');

export const BranchTrigger = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, TreeView.BranchTriggerProps>
>(TreeView.BranchTrigger, 'branchTrigger');

export const Item = withContext<HTMLDivElement, Assign<JsxStyleProps, TreeView.ItemProps>>(
  TreeView.Item,
  'item'
);

export const ItemIndicator = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, TreeView.ItemIndicatorProps>
>(TreeView.ItemIndicator, 'itemIndicator');

export const ItemText = withContext<HTMLSpanElement, Assign<JsxStyleProps, TreeView.ItemTextProps>>(
  TreeView.ItemText,
  'itemText'
);

export const Label = withContext<HTMLLabelElement, Assign<JsxStyleProps, TreeView.LabelProps>>(
  TreeView.Label,
  'label'
);

export const Tree = withContext<HTMLDivElement, Assign<JsxStyleProps, TreeView.TreeProps>>(
  TreeView.Tree,
  'tree'
);

export {
  TreeViewContext as Context,
  type TreeViewContextProps as ContextProps,
  createTreeCollection,
  TreeViewNodeProvider as NodeProvider,
  type TreeViewNodeProviderProps as NodeProviderProps,
  type TreeNode,
} from '@ark-ui/react/tree-view';
