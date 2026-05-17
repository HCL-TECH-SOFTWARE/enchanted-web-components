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
import '../components/atomic-component/enchanted-list';
import '../components/atomic-component/enchanted-list-item';
import { ENCHANTED_LIST_ITEM_TAG, ENCHANTED_LIST_TAG } from '../components/tags';

/**
 * @typedef EnchantedListProps
 * Props for the enchanted-list web component.
 *
 * @property role - The ARIA role for the list.
 */
export interface EnchantedListProps {
  role?: string;
}

const meta: Meta<EnchantedListProps> = {
  title: 'Data Display/enchanted-list',
  tags: ['autodocs'],
  argTypes: {
    role: {
      control: { type: 'text' },
      description: 'ARIA role attribute for the list element. Common values include "listbox", "menu", or empty string for default list semantics. ' +
        'Enhances accessibility by defining the semantic purpose of the list.',
      table: { category: 'Accessibility', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
  },
  args: {
    role: '',
  },
  parameters: {
    docs: {
      description: {
        component: 'List container component that renders an unordered list element with support for ARIA roles. ' +
          'Works with enchanted-list-item components to create accessible list structures. Supports custom styling via CSS parts and flexible content via slots.'
      }
    }
  },
  render: (args) => {
    return html`
      <${ENCHANTED_LIST_TAG} role="${args.role}">
        <${ENCHANTED_LIST_ITEM_TAG}>Item 1</${ENCHANTED_LIST_ITEM_TAG}>
        <${ENCHANTED_LIST_ITEM_TAG}>Item 2</${ENCHANTED_LIST_ITEM_TAG}>
        <${ENCHANTED_LIST_ITEM_TAG}>Item 3</${ENCHANTED_LIST_ITEM_TAG}>
      </${ENCHANTED_LIST_TAG}>
    `;
  },
};

export default meta;
type Story = StoryObj<EnchantedListProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {
    return html`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div>
          <h3 style="margin-top: 0;">Default List</h3>
          <${ENCHANTED_LIST_TAG}>
            <${ENCHANTED_LIST_ITEM_TAG}>Item 1</${ENCHANTED_LIST_ITEM_TAG}>
            <${ENCHANTED_LIST_ITEM_TAG}>Item 2</${ENCHANTED_LIST_ITEM_TAG}>
            <${ENCHANTED_LIST_ITEM_TAG}>Item 3</${ENCHANTED_LIST_ITEM_TAG}>
          </${ENCHANTED_LIST_TAG}>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with role="listbox"</h3>
          <${ENCHANTED_LIST_TAG} role="listbox">
            <${ENCHANTED_LIST_ITEM_TAG} role="option">Option A</${ENCHANTED_LIST_ITEM_TAG}>
            <${ENCHANTED_LIST_ITEM_TAG} role="option">Option B</${ENCHANTED_LIST_ITEM_TAG}>
            <${ENCHANTED_LIST_ITEM_TAG} role="option">Option C</${ENCHANTED_LIST_ITEM_TAG}>
          </${ENCHANTED_LIST_TAG}>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with role="menu"</h3>
          <${ENCHANTED_LIST_TAG} role="menu">
            <${ENCHANTED_LIST_ITEM_TAG} role="menuitem">Menu Item 1</${ENCHANTED_LIST_ITEM_TAG}>
            <${ENCHANTED_LIST_ITEM_TAG} role="menuitem">Menu Item 2</${ENCHANTED_LIST_ITEM_TAG}>
            <${ENCHANTED_LIST_ITEM_TAG} role="menuitem">Menu Item 3</${ENCHANTED_LIST_ITEM_TAG}>
          </${ENCHANTED_LIST_TAG}>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with Selected Items</h3>
          <${ENCHANTED_LIST_TAG}>
            <${ENCHANTED_LIST_ITEM_TAG}>Regular Item</${ENCHANTED_LIST_ITEM_TAG}>
            <${ENCHANTED_LIST_ITEM_TAG} ?isSelected=${true}>Selected Item 1</${ENCHANTED_LIST_ITEM_TAG}>
            <${ENCHANTED_LIST_ITEM_TAG}>Regular Item</${ENCHANTED_LIST_ITEM_TAG}>
            <${ENCHANTED_LIST_ITEM_TAG} ?isSelected=${true}>Selected Item 2</${ENCHANTED_LIST_ITEM_TAG}>
          </${ENCHANTED_LIST_TAG}>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with Keys</h3>
          <${ENCHANTED_LIST_TAG}>
            <${ENCHANTED_LIST_ITEM_TAG} .key=${'item-1'}>Item with key "item-1"</${ENCHANTED_LIST_ITEM_TAG}>
            <${ENCHANTED_LIST_ITEM_TAG} .key=${'item-2'}>Item with key "item-2"</${ENCHANTED_LIST_ITEM_TAG}>
            <${ENCHANTED_LIST_ITEM_TAG} .key=${'item-3'}>Item with key "item-3"</${ENCHANTED_LIST_ITEM_TAG}>
          </${ENCHANTED_LIST_TAG}>
        </div>

        <div>
          <h3 style="margin-top: 0;">Empty List</h3>
          <${ENCHANTED_LIST_TAG}></${ENCHANTED_LIST_TAG}>
        </div>

        <div>
          <h3 style="margin-top: 0;">Long List</h3>
          <${ENCHANTED_LIST_TAG} style="max-height: 200px; overflow-y: auto;">
            <${ENCHANTED_LIST_ITEM_TAG}>Item 1</${ENCHANTED_LIST_ITEM_TAG}>
            <${ENCHANTED_LIST_ITEM_TAG}>Item 2</${ENCHANTED_LIST_ITEM_TAG}>
            <${ENCHANTED_LIST_ITEM_TAG}>Item 3</${ENCHANTED_LIST_ITEM_TAG}>
            <${ENCHANTED_LIST_ITEM_TAG}>Item 4</${ENCHANTED_LIST_ITEM_TAG}>
            <${ENCHANTED_LIST_ITEM_TAG}>Item 5</${ENCHANTED_LIST_ITEM_TAG}>
            <${ENCHANTED_LIST_ITEM_TAG}>Item 6</${ENCHANTED_LIST_ITEM_TAG}>
            <${ENCHANTED_LIST_ITEM_TAG}>Item 7</${ENCHANTED_LIST_ITEM_TAG}>
            <${ENCHANTED_LIST_ITEM_TAG}>Item 8</${ENCHANTED_LIST_ITEM_TAG}>
          </${ENCHANTED_LIST_TAG}>
        </div>

        <div>
          <h3 style="margin-top: 0;">Mixed Content</h3>
          <${ENCHANTED_LIST_TAG}>
            <${ENCHANTED_LIST_ITEM_TAG} ?isSelected=${true}>Selected with long text that wraps to multiple lines to show layout</${ENCHANTED_LIST_ITEM_TAG}>
            <${ENCHANTED_LIST_ITEM_TAG}>Short item</${ENCHANTED_LIST_ITEM_TAG}>
            <${ENCHANTED_LIST_ITEM_TAG} .key=${'custom-key'}>Item with custom key</${ENCHANTED_LIST_ITEM_TAG}>
          </${ENCHANTED_LIST_TAG}>
        </div>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all list configurations and list-item states. Demonstrates default lists, ARIA roles (listbox, menu), ' +
          'selected items (isSelected), keyed items, empty lists, scrollable long lists, and mixed content scenarios. ' +
          'Shows 8 different list configurations highlighting various use cases and features.'
      }
    },
    controls: { disable: true },
  },
};
