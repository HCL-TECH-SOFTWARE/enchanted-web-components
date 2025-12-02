import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-menu';
import '../components/ac/dx-menu-item';
import '../components/ac/dx-button';
import { DxMenuPlacement, DxMenuSize } from '../types/dx-menu';

// Styling constants to avoid overly long inline style lines and satisfy max-len lint rule
const containerStyle = [
  'display: flex',
  'justify-content: center',
  'align-items: center',
  'min-height: 400px',
  'padding: 40px'
].join('; ') + ';';

/**
 * @typedef DxMenuProps
 * Props for the dx-menu web component.
 *
 * @property items - The menu items as an array of objects with text and value.
 * @property menuDelay - Delay in ms before opening the menu.
 * @property placement - Menu placement relative to anchor: 'bottom-start' or 'bottom-end'.
 * @property size - Menu size: 'sm' or 'md'.
 */
export interface DxMenuProps {
  items?: { text: string; value: string }[];
  menuDelay?: number;
  placement?: DxMenuPlacement;
  size?: DxMenuSize;
  dropdownMinWidth?: string;
}

const meta: Meta<DxMenuProps> = {
  title: 'Navigation/dx-menu',
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object', description: 'The menu items as an array of objects with text and value.', table: { defaultValue: { summary: '[]' } } },
    menuDelay: { control: 'number', description: 'Delay in ms before opening the menu.', table: { defaultValue: { summary: '300' } } },
    placement: { control: 'select', options: Object.values(DxMenuPlacement), description: 'Menu placement relative to anchor.', table: { defaultValue: { summary: DxMenuPlacement.BOTTOM_START } } },
    size: { control: 'select', options: Object.values(DxMenuSize), description: 'Menu size.', table: { defaultValue: { summary: DxMenuSize.MEDIUM } } },
    dropdownMinWidth: { control: 'text', description: 'CSS var --dropdown-menu-min-width (e.g., 240px).', table: { defaultValue: { summary: '' } } },
  },
  args: {
    items: [
      { text: 'Menu Item 1', value: '1' },
      { text: 'Menu Item 2', value: '2' },
      { text: 'Menu Item 3', value: '3' },
    ],
    menuDelay: 300,
    placement: DxMenuPlacement.BOTTOM_START,
    size: DxMenuSize.MEDIUM,
    dropdownMinWidth: '240px',
  },
  render: (args) => {
    return html`
      <div style="${containerStyle}">
        <dx-menu 
          style=${args.dropdownMinWidth ? `--dropdown-menu-min-width: ${args.dropdownMinWidth};` : ''}
          menuDelay=${args.menuDelay}
          placement=${args.placement}
          size=${args.size}
        >
          <dx-button slot="target-anchor" variant="contained" size="large" buttontext="Menu"></dx-button>
          ${args.items && args.items.map((item) => { return html`
            <dx-menu-item slot="menu-items" text="${item.text}" value="${item.value}"></dx-menu-item>
          `; })}
        </dx-menu>
      </div>
    `;
  },  
};

export default meta;
type Story = StoryObj<DxMenuProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {
    const items = [
      { text: 'Option 1', value: '1' },
      { text: 'Option 2', value: '2' },
      { text: 'Option 3', value: '3' },
      { text: 'Option 4', value: '4' },
    ];

    const gridStyle = [
      'display: grid',
      'grid-template-columns: repeat(2, 1fr)',
      'gap: 60px',
      'padding: 40px',
      'min-height: 600px'
    ].join('; ') + ';';

    const itemContainerStyle = [
      'display: flex',
      'flex-direction: column',
      'align-items: center',
      'gap: 20px'
    ].join('; ') + ';';

    const labelStyle = [
      'font-weight: 600',
      'font-size: 14px',
      'color: #333'
    ].join('; ') + ';';

    // Open all menus after they are rendered and prevent them from closing
    setTimeout(() => {
      const menus = document.querySelectorAll('dx-menu');
      menus.forEach((menu) => {
        // eslint-why: Need to access internal menu properties (openMenu, toggleMenuOpen, anchorMenuToTarget) not in public type
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const menuElement = menu as any;
        
        // Override the toggleMenuOpen method to keep menus always open
        const originalToggle = menuElement.toggleMenuOpen;
        menuElement.toggleMenuOpen = function(evt: MouseEvent | KeyboardEvent) {
          if (!menuElement.openMenu) {
            originalToggle.call(menuElement, evt);
          }
          // Prevent closing - do nothing if already open
        };
        
        // Open the menu
        menuElement.openMenu = true;
        if (menuElement.requestUpdate) {
          menuElement.requestUpdate();
        }
        setTimeout(() => {
          menuElement.anchorMenuToTarget();
        }, 350);
      });
    }, 200);

    return html`
      <div style="${gridStyle}">
        <!-- Small size, Bottom Start -->
        <div style="${itemContainerStyle}">
          <span style="${labelStyle}">Size: Small, Placement: Bottom Start</span>
          <dx-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${DxMenuPlacement.BOTTOM_START}"
            size="${DxMenuSize.SMALL}"
          >
            <dx-button slot="target-anchor" variant="contained" size="large" buttontext="Small - Bottom Start"></dx-button>
            ${items.map((item) => { return html`
              <dx-menu-item slot="menu-items" text="${item.text}" value="${item.value}"></dx-menu-item>
            `; })}
          </dx-menu>
        </div>

        <!-- Small size, Bottom End -->
        <div style="${itemContainerStyle}">
          <span style="${labelStyle}">Size: Small, Placement: Bottom End</span>
          <dx-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${DxMenuPlacement.BOTTOM_END}"
            size="${DxMenuSize.SMALL}"
          >
            <dx-button slot="target-anchor" variant="contained" size="large" buttontext="Small - Bottom End"></dx-button>
            ${items.map((item) => { return html`
              <dx-menu-item slot="menu-items" text="${item.text}" value="${item.value}"></dx-menu-item>
            `; })}
          </dx-menu>
        </div>

        <!-- Medium size, Bottom Start -->
        <div style="${itemContainerStyle}">
          <span style="${labelStyle}">Size: Medium, Placement: Bottom Start</span>
          <dx-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${DxMenuPlacement.BOTTOM_START}"
            size="${DxMenuSize.MEDIUM}"
          >
            <dx-button slot="target-anchor" variant="contained" size="large" buttontext="Medium - Bottom Start"></dx-button>
            ${items.map((item) => { return html`
              <dx-menu-item slot="menu-items" text="${item.text}" value="${item.value}"></dx-menu-item>
            `; })}
          </dx-menu>
        </div>

        <!-- Medium size, Bottom End -->
        <div style="${itemContainerStyle}">
          <span style="${labelStyle}">Size: Medium, Placement: Bottom End</span>
          <dx-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${DxMenuPlacement.BOTTOM_END}"
            size="${DxMenuSize.MEDIUM}"
          >
            <dx-button slot="target-anchor" variant="contained" size="large" buttontext="Medium - Bottom End"></dx-button>
            ${items.map((item) => { return html`
              <dx-menu-item slot="menu-items" text="${item.text}" value="${item.value}"></dx-menu-item>
            `; })}
          </dx-menu>
        </div>
      </div>
    `;
  },
};
