import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-icon-button';
import { ICON_BUTTON_SIZES } from '../types/cssClassEnums';
import { svgIconSearch } from '../_tests_/assets/svg-search';

/**
 * @interface DxIconButtonProps
 * Props for the dx-icon-button web component.
 *
 * @property size - The size of the icon button: 'SMALL' and 'MEDIUM'.
 * @property withPadding - If true, adds padding to the button.
 * @property imgurl - The image URL for the icon.
 * @property disabled - If true, disables the button.
 * @property inverseColor - If true, uses the inverse color scheme.
 */
export interface DxIconButtonProps {
  size?: ICON_BUTTON_SIZES;
  withPadding?: boolean;
  imgurl?: string;
  disabled?: boolean;
  inverseColor?: boolean;
}

const meta: Meta<DxIconButtonProps> = {
  title: 'Input/dx-icon-button',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['SMALL', 'MEDIUM', 'LARGE'],
      description: 'The size of the icon button.',
      table: { defaultValue: { summary: 'SMALL' } },
    },
    withPadding: { control: 'boolean', description: 'If true, adds padding to the button.', table: { defaultValue: { summary: 'false' } } },
    imgurl: { control: 'text', description: 'The image URL for the icon.', table: { defaultValue: { summary: '' } } },
    disabled: { control: 'boolean', description: 'If true, disables the button.', table: { defaultValue: { summary: 'false' } } },
    inverseColor: { control: 'boolean', description: 'If true, uses the inverse color scheme.', table: { defaultValue: { summary: 'false' } } },
  },
  args: {
    size: ICON_BUTTON_SIZES.SMALL,
    withPadding: false,
    imgurl: 'https://cdn-icons-png.flaticon.com/512/61/61456.png',
    disabled: false,
    inverseColor: false,
  },
  render: (args) => {return html`
    <dx-icon-button
      size="${args.size}"
      ?withPadding=${args.withPadding}
      ?disabled=${args.disabled}
      .icon=${
        html`
          ${svgIconSearch}
        `
      }
      ?inverseColor=${args.inverseColor}
    ></dx-icon-button>
  `;},
};

export default meta;
type Story = StoryObj<DxIconButtonProps>;

export const Default: Story = {
  args: {
    imgurl: '',
  },
};

export const AllStates: Story = {
  render: () => {return html`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
      <div>
        <div>Default</div>
        <dx-icon-button
          size="${ICON_BUTTON_SIZES.SMALL}"
          .icon=${html`${svgIconSearch}`}
        ></dx-icon-button>
      </div>
      <div>
        <div>Disabled</div>
        <dx-icon-button
          size="${ICON_BUTTON_SIZES.SMALL}"
          .icon=${html`${svgIconSearch}`}
          ?disabled=${true}
        ></dx-icon-button>
      </div>
      <div>
        <div>With Padding</div>
        <dx-icon-button
          size="${ICON_BUTTON_SIZES.SMALL}"
          .icon=${html`${svgIconSearch}`}
          ?withPadding=${true}
        ></dx-icon-button>
      </div>
      <div>
        <div>Inverse Color</div>
        <dx-icon-button
          size="${ICON_BUTTON_SIZES.SMALL}"
          .icon=${html`${svgIconSearch}`}
          ?inverseColor=${true}
        ></dx-icon-button>
      </div>
      <div>
        <div>Medium Size</div>
        <dx-icon-button
          size="${ICON_BUTTON_SIZES.MEDIUM}"
          .icon=${html`${svgIconSearch}`}
        ></dx-icon-button>
      </div>
      <div>
        <div>Image Icon</div>
        <dx-icon-button
          size="${ICON_BUTTON_SIZES.SMALL}"
          imgurl="https://cdn-icons-png.flaticon.com/512/61/61456.png"
        ></dx-icon-button>
      </div>
      <div>
        <div>No Icon</div>
        <dx-icon-button
          size="${ICON_BUTTON_SIZES.SMALL}"
        ></dx-icon-button>
      </div>
    </div>
  `;},
};

