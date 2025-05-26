/**
 * Copyright IBM Corp. 2016, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { ContentSwitcher, Switch } from '@carbon/react';
import figma from '@figma/code-connect';

figma.connect(
  ContentSwitcher,
  'https://www.figma.com/design/YAnB1jKx0yCUL29j6uSLpg/(v11)-All-themes---Carbon-Design-System?node-id=10151-402486&t=LoXqbMLZkoMgbrAS-4',
  {
    props: {
      children: figma.children(['_Content switcher text item']),
      size: figma.enum('Size', {
        Large: 'lg',
        Medium: 'md',
        Small: 'sm',
      }),
    },
    example: ({ size, children }) => (
    <ContentSwitcher onChange={() => {}} size={"md"}>
      <Switch name="option-1" text="Option 1" />
      <Switch name="option-2" text="Option 2" />
      <Switch name="option-3" text="Option 3" />
    </ContentSwitcher>
    ),
  }
);

figma.connect(
  ContentSwitcher,
  'https://www.figma.com/design/YAnB1jKx0yCUL29j6uSLpg/(v11)-All-themes---Carbon-Design-System?node-id=10151-402486&t=LoXqbMLZkoMgbrAS-4',
  {
    variant: { Type: 'Icon only' },
    props: {
      children: figma.children(['_Content switcher icon item']),
      size: figma.enum('Size', {
        Large: 'lg',
        Medium: 'md',
        Small: 'sm',
      }),
    },
    example: ({ size, children }) => (
      <ContentSwitcher onChange={function noRefCheck() {}} size={size}>
        {children}
      </ContentSwitcher>
    ),
  }
);
