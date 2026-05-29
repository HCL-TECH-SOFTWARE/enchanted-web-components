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
import { html } from 'lit/static-html.js';
import '../components/atomic-component/enchanted-breadcrumbs';
import { ENCHANTED_BREADCRUMBS_TAG } from '../components/tags';

const meta: Meta = {
  title: 'Navigation/enchanted-breadcrumbs',
  component: 'enchanted-breadcrumbs',
  tags: ['autodocs'],
  argTypes: {
    paths: {
      control: 'object',
      description: 'Breadcrumb paths',
      defaultValue: [
        { name: 'Search', icon: 'search', disabled: false },
        { name: 'Content', icon: 'content', disabled: false },
        { name: 'Elements', icon: 'elements', disabled: false },
      ],
    },
  },
  args: {
    paths: [
      { name: 'Search', icon: 'search', disabled: false },
      { name: 'Content', icon: 'content', disabled: false },
      { name: 'Elements', icon: 'elements', disabled: false },
    ],
  },
  parameters: {
    docs: {
      description: {
        component: 'Breadcrumbs component with example paths: Search, Content, Elements.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<{ paths: Array<{ name: string; icon?: string; disabled?: boolean }> }>;

export const EnchantedBreadcrumbs: Story = {
  render: (args) => {
    return html`
      <${ENCHANTED_BREADCRUMBS_TAG} .paths=${args.paths}></${ENCHANTED_BREADCRUMBS_TAG}>
    `;
  },
  name: 'EnchantedBreadcrumbs',
};
