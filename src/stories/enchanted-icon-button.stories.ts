import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-icon-button';
import { ICON_BUTTON_SIZES } from '../types/cssClassEnums';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/search';

/**
 * @interface EnchantedIconButtonProps
 * Props for the enchanted-icon-button web component.
 *
 * @property size - The size of the icon button: 'SMALL', 'MEDIUM', and 'FAB'.
 * @property withPadding - If true, adds padding to the button.
 * @property imgurl - The image URL for the icon.
 * @property icon - Icon template (Lit TemplateResult) for the button.
 * @property disabled - If true, disables the button.
 * @property inverseColor - If true, uses the inverse color scheme.
 * @property ariaLabel - ARIA label for accessibility.
 */
export interface EnchantedIconButtonProps {
  size?: ICON_BUTTON_SIZES;
  withPadding?: boolean;
  imgurl?: string;
  icon?: unknown;
  disabled?: boolean;
  inverseColor?: boolean;
  ariaLabel?: string;
}

const meta: Meta<EnchantedIconButtonProps> = {
  title: 'Input/enchanted-icon-button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Icon Button component provides a compact, icon-only button for common actions. It supports three sizes (small, medium, FAB), can display icons via ' +
          'templates or image URLs, and offers optional padding for increased touch targets. Use icon buttons for toolbar actions, quick access features, or floating action ' +
          'buttons (FAB) with inverse color schemes for high contrast.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [ICON_BUTTON_SIZES.SMALL, ICON_BUTTON_SIZES.MEDIUM, ICON_BUTTON_SIZES.FAB],
      description: 'Size of the icon button. SMALL for compact toolbars, MEDIUM for standard actions, FAB (Floating Action Button) for prominent primary actions.',
      table: { category: 'Layout', type: { summary: 'ICON_BUTTON_SIZES' }, defaultValue: { summary: ICON_BUTTON_SIZES.SMALL } },
    },
    withPadding: {
      control: { type: 'boolean' },
      description: 'Adds padding around the icon button to increase the touch target area. Recommended for touch interfaces and improved accessibility.',
      table: { category: 'Layout', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    icon: {
      control: false,
      description: 'Icon template (Lit TemplateResult) for the button. Accepts SVG templates or icon component templates. Use this for inline SVG icons.',
      table: { category: 'Content', type: { summary: 'TemplateResult' }, defaultValue: { summary: 'undefined' } },
    },
    imgurl: {
      control: { type: 'text' },
      description: 'Image URL for the icon. Alternative to the icon template property. Use this for external image files or icon URLs.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the icon button, preventing user interaction. The button appears grayed out and click events are blocked.',
      table: { category: 'State', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    inverseColor: {
      control: { type: 'boolean' },
      description: 'Uses inverse color scheme for high contrast scenarios. Typically white icon on dark background, useful for FAB buttons or dark themed toolbars.',
      table: { category: 'Styling', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    ariaLabel: {
      control: { type: 'text' },
      description: 'ARIA label for accessibility. Provides descriptive text for screen readers since icon buttons lack visible text labels. Required for accessibility.',
      table: { category: 'Accessibility', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
  },
  args: {
    size: ICON_BUTTON_SIZES.SMALL,
    withPadding: false,
    imgurl: 'https://cdn-icons-png.flaticon.com/512/61/61456.png',
    icon: html`<icon-search></icon-search>`,
    disabled: false,
    inverseColor: false,
    ariaLabel: 'Search',
  },
  render: (args) => {return html`
    <enchanted-icon-button
      .size="${args.size}"
      ?withPadding=${args.withPadding}
      ?disabled=${args.disabled}
      imgurl="${args.imgurl}"
      .icon=${args.icon}
      ?inverseColor=${args.inverseColor}
      ariaLabel="${args.ariaLabel}"
    ></enchanted-icon-button>
  `;},
};

export default meta;
type Story = StoryObj<EnchantedIconButtonProps>;

export const Default: Story = {
  args: {
    imgurl: '',
  },
};

export const AllStates: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Comprehensive showcase of all icon button states and variations:\n\n' +
          '**Sizes:** Three size options - SMALL for compact toolbars, MEDIUM for standard actions, and FAB (Floating Action Button) for prominent primary actions.\n\n' +
          '**Icon Sources:** Supports both inline SVG templates (via icon property) and external image URLs (via imgurl property).\n\n' +
          '**States:** Includes disabled state, padding variations for improved touch targets, and inverse color scheme for dark backgrounds.\n\n' +
          '**Accessibility:** All buttons include ariaLabel for screen reader support.',
      },
    },
  },
  render: () => {
    return html`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Small Size (Default)</div>
          <enchanted-icon-button
            size="${ICON_BUTTON_SIZES.SMALL}"
            .icon=${html`<icon-search></icon-search>`}
            ariaLabel="Search"
          ></enchanted-icon-button>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Medium Size</div>
          <enchanted-icon-button
            size="${ICON_BUTTON_SIZES.MEDIUM}"
            .icon=${html`<icon-search></icon-search>`}
            ariaLabel="Search"
          ></enchanted-icon-button>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">FAB Size</div>
          <enchanted-icon-button
            size="${ICON_BUTTON_SIZES.FAB}"
            .icon=${html`<icon-search></icon-search>`}
            ariaLabel="Search"
          ></enchanted-icon-button>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With Padding</div>
          <enchanted-icon-button
            size="${ICON_BUTTON_SIZES.SMALL}"
            .icon=${html`<icon-search></icon-search>`}
            ?withPadding=${true}
            ariaLabel="Search with padding"
          ></enchanted-icon-button>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled</div>
          <enchanted-icon-button
            size="${ICON_BUTTON_SIZES.SMALL}"
            .icon=${html`<icon-search></icon-search>`}
            ?disabled=${true}
            ariaLabel="Search disabled"
          ></enchanted-icon-button>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Inverse Color</div>
          <div style="background-color: #333; padding: 12px; border-radius: 4px;">
            <enchanted-icon-button
              size="${ICON_BUTTON_SIZES.SMALL}"
              .icon=${html`<icon-search></icon-search>`}
              ?inverseColor=${true}
              ariaLabel="Search inverse"
            ></enchanted-icon-button>
          </div>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">FAB Inverse Color</div>
          <div style="background-color: #333; padding: 12px; border-radius: 4px;">
            <enchanted-icon-button
              size="${ICON_BUTTON_SIZES.FAB}"
              .icon=${html`<icon-search></icon-search>`}
              ?inverseColor=${true}
              ariaLabel="Primary action"
            ></enchanted-icon-button>
          </div>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Image URL Icon</div>
          <enchanted-icon-button
            size="${ICON_BUTTON_SIZES.SMALL}"
            imgurl="https://cdn-icons-png.flaticon.com/512/61/61456.png"
            ariaLabel="Settings"
          ></enchanted-icon-button>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Medium with Padding</div>
          <enchanted-icon-button
            size="${ICON_BUTTON_SIZES.MEDIUM}"
            .icon=${html`<icon-search></icon-search>`}
            ?withPadding=${true}
            ariaLabel="Search medium"
          ></enchanted-icon-button>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Medium Disabled</div>
          <enchanted-icon-button
            size="${ICON_BUTTON_SIZES.MEDIUM}"
            .icon=${html`<icon-search></icon-search>`}
            ?disabled=${true}
            ariaLabel="Search disabled"
          ></enchanted-icon-button>
        </div>
      </div>
    `;
  },
};
