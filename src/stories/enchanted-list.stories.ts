import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-list';
import '../components/atomic-component/enchanted-list-item';

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
      <enchanted-list role="${args.role}">
        <enchanted-list-item>Item 1</enchanted-list-item>
        <enchanted-list-item>Item 2</enchanted-list-item>
        <enchanted-list-item>Item 3</enchanted-list-item>
      </enchanted-list>
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
          <enchanted-list>
            <enchanted-list-item>Item 1</enchanted-list-item>
            <enchanted-list-item>Item 2</enchanted-list-item>
            <enchanted-list-item>Item 3</enchanted-list-item>
          </enchanted-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with role="listbox"</h3>
          <enchanted-list role="listbox">
            <enchanted-list-item role="option">Option A</enchanted-list-item>
            <enchanted-list-item role="option">Option B</enchanted-list-item>
            <enchanted-list-item role="option">Option C</enchanted-list-item>
          </enchanted-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with role="menu"</h3>
          <enchanted-list role="menu">
            <enchanted-list-item role="menuitem">Menu Item 1</enchanted-list-item>
            <enchanted-list-item role="menuitem">Menu Item 2</enchanted-list-item>
            <enchanted-list-item role="menuitem">Menu Item 3</enchanted-list-item>
          </enchanted-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with Selected Items</h3>
          <enchanted-list>
            <enchanted-list-item>Regular Item</enchanted-list-item>
            <enchanted-list-item ?isSelected=${true}>Selected Item 1</enchanted-list-item>
            <enchanted-list-item>Regular Item</enchanted-list-item>
            <enchanted-list-item ?isSelected=${true}>Selected Item 2</enchanted-list-item>
          </enchanted-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with Keys</h3>
          <enchanted-list>
            <enchanted-list-item .key=${'item-1'}>Item with key "item-1"</enchanted-list-item>
            <enchanted-list-item .key=${'item-2'}>Item with key "item-2"</enchanted-list-item>
            <enchanted-list-item .key=${'item-3'}>Item with key "item-3"</enchanted-list-item>
          </enchanted-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">Empty List</h3>
          <enchanted-list></enchanted-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">Long List</h3>
          <enchanted-list style="max-height: 200px; overflow-y: auto;">
            <enchanted-list-item>Item 1</enchanted-list-item>
            <enchanted-list-item>Item 2</enchanted-list-item>
            <enchanted-list-item>Item 3</enchanted-list-item>
            <enchanted-list-item>Item 4</enchanted-list-item>
            <enchanted-list-item>Item 5</enchanted-list-item>
            <enchanted-list-item>Item 6</enchanted-list-item>
            <enchanted-list-item>Item 7</enchanted-list-item>
            <enchanted-list-item>Item 8</enchanted-list-item>
          </enchanted-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">Mixed Content</h3>
          <enchanted-list>
            <enchanted-list-item ?isSelected=${true}>Selected with long text that wraps to multiple lines to show layout</enchanted-list-item>
            <enchanted-list-item>Short item</enchanted-list-item>
            <enchanted-list-item .key=${'custom-key'}>Item with custom key</enchanted-list-item>
          </enchanted-list>
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
