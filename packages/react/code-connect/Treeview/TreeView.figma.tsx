/**
 * Copyright IBM Corp. 2016, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @ts-nocheck
import React from 'react';
import { TreeView } from '@carbon/react';
import figma from '@figma/code-connect';

figma.connect(
  TreeView,
  'https://www.figma.com/design/YAnB1jKx0yCUL29j6uSLpg/(v11)-All-themes---Carbon-Design-System?node-id=11948-286738&t=aG4cJRjteQHcd71k-4',
  {
    props: {
      treeNode: figma.nestedProps('Branch node item', {
        size: figma.enum('Size', {
          Small: 'sm',
          'Extra small': 'xs',
        }),
      }),
      children: figma.children(['Branch node item']),
    },
    example: ({ children, treeNode }) => (
    <TreeView size={"sm"}>
      <TreeNode label={"Root Node"} isExpanded={true}>
        <TreeNode label={"Child Node 1"} isExpanded={true}>
          <TreeNode label={"Grandchild Node 1"} />
          <TreeNode label={"Grandchild Node 2"} />
        </TreeNode>
        <TreeNode label={"Child Node 2"} />
      </TreeNode>
    </TreeView>
    ),
  }
);