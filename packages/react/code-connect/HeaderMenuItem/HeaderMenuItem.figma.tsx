/**
 * Copyright IBM Corp. 2016, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @ts-nocheck
import React from 'react';
import { HeaderMenu, HeaderMenuItem } from '@carbon/react';

figma.connect(
  HeaderMenuItem,
  'https://www.figma.com/design/YAnB1jKx0yCUL29j6uSLpg/(v11)-All-themes---Carbon-Design-System?node-id=2133-9531&t=A3oys5odsvKkcDFA-4',
  {
    variant: { Type: 'Sub-menu' },
    props: {
      linkText: figma.string('Link text'),
      isActive: figma.boolean('Selected'),
    },
    example: ({ linkText, isActive }) => (
      <HeaderMenu aria-label={linkText} menuLinkName={linkText}>
        <HeaderMenuItem isActive={isActive} href="#">
          {linkText}
        </HeaderMenuItem>
      </HeaderMenu>
    ),
  }
);
