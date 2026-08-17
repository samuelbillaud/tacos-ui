import type { Meta } from '@storybook/react';
import { ChevronRightIcon } from 'lucide-react';

import { TreeView } from '~/components';

const meta: Meta = {
  title: 'Components/Tree View',
};

export default meta;

interface Node {
  children?: Node[];
  name: string;
  value: string;
}

export const Base = () => {
  return (
    <TreeView.Root collection={collection} maxW="2xs">
      <TreeView.Tree>
        {collection.rootNode.children?.map((node, index) => (
          <TreeNode indexPath={[index]} key={node.value} node={node} />
        ))}
      </TreeView.Tree>
    </TreeView.Root>
  );
};

const TreeNode = (props: { indexPath: number[]; node: Node }) => {
  const { indexPath, node } = props;

  return (
    <TreeView.NodeProvider indexPath={indexPath} node={node}>
      {node.children ? (
        <TreeView.Branch>
          <TreeView.BranchControl>
            <TreeView.BranchIndicator>
              <ChevronRightIcon />
            </TreeView.BranchIndicator>
            <TreeView.BranchText>{node.name}</TreeView.BranchText>
          </TreeView.BranchControl>
          <TreeView.BranchContent>
            {node.children.map((child, index) => (
              <TreeNode indexPath={[...indexPath, index]} key={child.value} node={child} />
            ))}
          </TreeView.BranchContent>
        </TreeView.Branch>
      ) : (
        <TreeView.Item>
          <TreeView.ItemText>{node.name}</TreeView.ItemText>
        </TreeView.Item>
      )}
    </TreeView.NodeProvider>
  );
};

const collection = TreeView.createTreeCollection<Node>({
  nodeToString: (node) => node.name,
  nodeToValue: (node) => node.value,
  rootNode: {
    name: 'Root',
    value: 'ROOT',
    children: [
      {
        value: '1',
        name: 'Item 1',
        children: [
          { value: '1.1', name: 'Item 1.1' },
          {
            value: '1.2',
            name: 'Item 1.2',
            children: [
              { value: '1.2.1', name: 'Item 1.2.1' },
              { value: '1.2.2', name: 'Item 1.2.2' },
            ],
          },
        ],
      },
      {
        value: '2',
        name: 'Item 2',
        children: [
          { value: '2.1', name: 'Item 2.1' },
          { value: '2.2', name: 'Item 2.2' },
        ],
      },
      { value: '3', name: 'Item 3' },
    ],
  },
});
