import type { Assign } from '@ark-ui/react';
import type { JsxStyleProps } from '@tacos-ui/styled-system/types';

import { forwardRef } from 'react';

import { TreeView as ArkTreeView, type TreeViewRootProps } from '@ark-ui/react/tree-view';

import { css, cx } from '@tacos-ui/styled-system/css';
import { splitCssProps } from '@tacos-ui/styled-system/jsx';
import { type TreeViewRecipeVariantProps, treeViewRecipe } from '@tacos-ui/styled-system/recipes';

interface Child {
  children?: Child[];
  name: string;
  value: string;
}

export interface TreeViewData {
  children: Child[];
  label: string;
}

export interface TreeViewProps
  extends Assign<JsxStyleProps, TreeViewRootProps>,
    TreeViewRecipeVariantProps {
  data: TreeViewData;
}

export const TreeView = forwardRef<HTMLDivElement, TreeViewProps>((props, ref) => {
  const [cssProps, localProps] = splitCssProps(props);
  const { data, className, ...rootProps } = localProps;
  const styles = treeViewRecipe();

  const renderChild = (child: Child) => (
    <ArkTreeView.Branch className={styles.branch} key={child.value} value={child.value}>
      <ArkTreeView.BranchControl className={styles.branchControl}>
        <ArkTreeView.BranchIndicator className={styles.branchIndicator}>
          <ChevronRightIcon />
        </ArkTreeView.BranchIndicator>
        <ArkTreeView.BranchText className={styles.branchText}>{child.name}</ArkTreeView.BranchText>
      </ArkTreeView.BranchControl>
      <ArkTreeView.BranchContent className={styles.branchContent}>
        {child.children?.map((child) =>
          child.children ? (
            renderChild(child)
          ) : (
            <ArkTreeView.Item className={styles.item} key={child.value} value={child.value}>
              <ArkTreeView.ItemText className={styles.itemText}>{child.name}</ArkTreeView.ItemText>
            </ArkTreeView.Item>
          ),
        )}
      </ArkTreeView.BranchContent>
    </ArkTreeView.Branch>
  );

  return (
    <ArkTreeView.Root
      aria-label={data.label}
      className={cx(styles.root, css(cssProps), className)}
      ref={ref}
      {...rootProps}
    >
      <ArkTreeView.Tree className={styles.tree}>{data.children.map(renderChild)}</ArkTreeView.Tree>
    </ArkTreeView.Root>
  );
});

TreeView.displayName = 'TreeView';

const ChevronRightIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Chevron Right Icon</title>
    <path
      d="m9 18l6-6l-6-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);
