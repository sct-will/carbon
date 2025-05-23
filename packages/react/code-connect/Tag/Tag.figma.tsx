/**
 * Copyright IBM Corp. 2016, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @ts-nocheck
import React from 'react';
import {
  Tag,
  DismissibleTag,
  OperationalTag,
  SelectableTag,
  TagSkeleton,
} from '@carbon/react';
import figma from '@figma/code-connect';

figma.connect(
  Tag,
  'https://www.figma.com/design/YAnB1jKx0yCUL29j6uSLpg/(v11)-All-themes---Carbon-Design-System?node-id=16031-269750&t=RuAO38H8L12JZXpK-4',
  {
    props: {
      renderIcon: figma.boolean('Icon', {
        true: figma.instance('Swap icon'),
      }),
      text: figma.string('Tag text'),
      size: figma.enum('Size', {
        Large: 'lg',
        Small: 'sm',
      }),
      type: figma.enum('Color', {
        Blue: 'blue',
        Cyan: 'cyan',
        Teal: 'teal',
        Green: 'green',
        Purple: 'purple',
        Magenta: 'magenta',
        Red: 'red',
        Gray: 'gray',
        'Cool gray': 'cool-gray',
        'Warm gray': 'warm-gray',
        'High contrast': 'high-contrast',
        Outline: 'outline',
      }),
      disabled: figma.enum('State', {
        Disabled: true,
      }),
    },
    example: ({ text, ...props }) => <Tag {...props}>{text}</Tag>,
  }
);

