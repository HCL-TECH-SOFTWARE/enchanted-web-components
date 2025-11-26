import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-menu';
import '../components/ac/dx-menu-item';

/**
 * @typedef DxMenuProps
 * Props for the dx-menu web component.
 *
 * @property items - The menu items as an array of objects with label.
 * @property role - The ARIA role for the menu.
 */
export interface DxMenuProps {
  items?: { label: string }[];
  role?: string;
}

const meta: Meta<DxMenuProps> = {
  title: 'Navigation/dx-menu',
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object', description: 'The menu items as an array of objects with label.', table: { defaultValue: { summary: '[]' } } },
    role: { control: 'text', description: 'The ARIA role for the menu.', table: { defaultValue: { summary: '' } } },
  },
  args: {
    items: [
      { label: 'Menu 1' },
      { label: 'Menu 2' },
      { label: 'Menu 3' },
    ],
    role: '',
  },
  render: (args) => {
    return html`
      <dx-menu role="${args.role}">
        ${args.items && args.items.map(item => {return html`<dx-menu-item label="${item.label}"></dx-menu-item>`;})}
      </dx-menu>
    `;
  },
};

export default meta;
type Story = StoryObj<DxMenuProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {
    return html`
      <div style="display: flex; gap: 40px; flex-wrap: wrap; align-items: flex-start; justify-content: flex-start; padding: 32px; background: #f7f9fa;">
        <div style="padding: 24px; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px #0001; min-width: 220px; margin: 12px;">
          <div style="margin-bottom: 12px; font-weight: 500;">Default</div>
          <dx-menu>
            <button slot="target-anchor" style="padding: 10px 24px; border-radius: 6px; border: 1px solid #b0bec5; background: #e3f2fd;">Anchor</button>
            <dx-menu-item slot="menu-items" text="Menu 1" value="1"></dx-menu-item>
            <dx-menu-item slot="menu-items" text="Menu 2" value="2"></dx-menu-item>
          </dx-menu>
        </div>
        <div style="padding: 24px; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px #0001; min-width: 220px; margin: 12px;">
          <div style="margin-bottom: 12px; font-weight: 500;">Open by default</div>
          <dx-menu open>
            <button slot="target-anchor" style="padding: 10px 24px; border-radius: 6px; border: 1px solid #b0bec5; background: #e3f2fd;">Anchor</button>
            <dx-menu-item slot="menu-items" text="Open 1" value="a"></dx-menu-item>
            <dx-menu-item slot="menu-items" text="Open 2" value="b"></dx-menu-item>
          </dx-menu>
        </div>
        <div style="padding: 24px; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px #0001; min-width: 220px; margin: 12px;">
          <div style="margin-bottom: 12px; font-weight: 500;">Placement: bottom-end</div>
          <div style="width: 100px; border: 1px dashed #aaa; padding: 8px; position: relative; background: #fafbfc; border-radius: 8px;">
            <dx-menu placement="bottom-end">
              <button slot="target-anchor" style="width: 100%; background: #e3f2fd; border-radius: 6px; border: 1px solid #b0bec5; padding: 10px 0;">Anchor</button>
              <dx-menu-item slot="menu-items" text="End 1" value="x"></dx-menu-item>
              <dx-menu-item slot="menu-items" text="End 2" value="y"></dx-menu-item>
            </dx-menu>
          </div>
        </div>
        <div style="padding: 24px; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px #0001; min-width: 220px; margin: 12px;">
          <div style="margin-bottom: 12px; font-weight: 500;">Size: sm</div>
          <dx-menu size="sm">
            <button slot="target-anchor" style="padding: 10px 24px; border-radius: 6px; border: 1px solid #b0bec5; background: #e3f2fd;">Anchor</button>
            <dx-menu-item slot="menu-items" text="Small 1" value="s1"></dx-menu-item>
            <dx-menu-item slot="menu-items" text="Small 2" value="s2"></dx-menu-item>
          </dx-menu>
        </div>
        <div style="padding: 24px; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px #0001; min-width: 220px; margin: 12px;">
          <div style="margin-bottom: 12px; font-weight: 500;">Empty Menu</div>
          <dx-menu>
            <button slot="target-anchor" style="padding: 10px 24px; border-radius: 6px; border: 1px solid #b0bec5; background: #e3f2fd;">Anchor</button>
          </dx-menu>
        </div>
      </div>
    `;
  },
};
