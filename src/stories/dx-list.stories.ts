import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-list';
import '../components/ac/dx-list-item';

/**
 * @typedef DxListProps
 * Props for the dx-list web component.
 *
 * @property role - The ARIA role for the list.
 */
export interface DxListProps {
  role?: string;
}

const meta: Meta<DxListProps> = {
  title: 'Data Display/dx-list',
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
          'Works with dx-list-item components to create accessible list structures. Supports custom styling via CSS parts and flexible content via slots.'
      }
    }
  },
  render: (args) => {
    return html`
      <dx-list role="${args.role}">
        <dx-list-item>Item 1</dx-list-item>
        <dx-list-item>Item 2</dx-list-item>
        <dx-list-item>Item 3</dx-list-item>
      </dx-list>
    `;
  },
};

export default meta;
type Story = StoryObj<DxListProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {
    return html`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div>
          <h3 style="margin-top: 0;">Default List</h3>
          <dx-list>
            <dx-list-item>Item 1</dx-list-item>
            <dx-list-item>Item 2</dx-list-item>
            <dx-list-item>Item 3</dx-list-item>
          </dx-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with role="listbox"</h3>
          <dx-list role="listbox">
            <dx-list-item role="option">Option A</dx-list-item>
            <dx-list-item role="option">Option B</dx-list-item>
            <dx-list-item role="option">Option C</dx-list-item>
          </dx-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with role="menu"</h3>
          <dx-list role="menu">
            <dx-list-item role="menuitem">Menu Item 1</dx-list-item>
            <dx-list-item role="menuitem">Menu Item 2</dx-list-item>
            <dx-list-item role="menuitem">Menu Item 3</dx-list-item>
          </dx-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with Selected Items</h3>
          <dx-list>
            <dx-list-item>Regular Item</dx-list-item>
            <dx-list-item ?isSelected=${true}>Selected Item 1</dx-list-item>
            <dx-list-item>Regular Item</dx-list-item>
            <dx-list-item ?isSelected=${true}>Selected Item 2</dx-list-item>
          </dx-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with Keys</h3>
          <dx-list>
            <dx-list-item .key=${'item-1'}>Item with key "item-1"</dx-list-item>
            <dx-list-item .key=${'item-2'}>Item with key "item-2"</dx-list-item>
            <dx-list-item .key=${'item-3'}>Item with key "item-3"</dx-list-item>
          </dx-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">Empty List</h3>
          <dx-list></dx-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">Long List</h3>
          <dx-list style="max-height: 200px; overflow-y: auto;">
            <dx-list-item>Item 1</dx-list-item>
            <dx-list-item>Item 2</dx-list-item>
            <dx-list-item>Item 3</dx-list-item>
            <dx-list-item>Item 4</dx-list-item>
            <dx-list-item>Item 5</dx-list-item>
            <dx-list-item>Item 6</dx-list-item>
            <dx-list-item>Item 7</dx-list-item>
            <dx-list-item>Item 8</dx-list-item>
          </dx-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">Mixed Content</h3>
          <dx-list>
            <dx-list-item ?isSelected=${true}>Selected with long text that wraps to multiple lines to show layout</dx-list-item>
            <dx-list-item>Short item</dx-list-item>
            <dx-list-item .key=${'custom-key'}>Item with custom key</dx-list-item>
          </dx-list>
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
