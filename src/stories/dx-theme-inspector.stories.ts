/* ======================================================================== *
 * Copyright 2025 HCL America Inc.                                          *
 * Licensed under the Apache License, Version 2.0 (the "License");          *
 * you may not use this file except in compliance with the License.         *
 * You may obtain a copy of the License at                                  *
 *                                                                          *
 * http://www.apache.org/licenses/LICENSE-2.0                               *
 *                                                                          *
 * Unless required by applicable law or agreed to in writing, software      *
 * distributed under the License is distributed on an "AS IS" BASIS,        *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
 * See the License for the specific language governing permissions and      *
 * limitations under the License.                                           *
 * ======================================================================== */

import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-theme-inspector';

const meta: Meta = {
  title: 'Utilities/enchanted-theme-inspector',
  component: 'enchanted-theme-inspector',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          `A utility component that displays all color palettes and theme values from the Enchanted design system. 
            Use this to inspect available colors, shades, and theme tokens for both light and dark modes.`
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const ColorInspector: Story = {
  name: 'Color Palette & Theme Inspector',
  render: () => {
    return html`
      <div style="width: 100%; overflow-x: auto;">
        <enchanted-theme-inspector></enchanted-theme-inspector>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story:
          `This inspector displays all available color palettes (including BLUE, GREEN, RED, ORANGE, etc.) with their various shades,
            as well as theme tokens for light and dark modes. Use this as a reference when styling components or selecting colors.`,
      },
    },
  },
};
