import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, type TemplateResult } from 'lit';
import '../components/atomic-component/enchanted-button';
import { BUTTON_VARIANT, ICON_BUTTON_SIZES } from '../types/cssClassEnums';

import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/search';
import testImageUrl from '../_tests_/assets/test-avatar-image.jpg';

/**
 * @interface EnchantedButtonProps
 * Props for the enchanted-button web component.
 *
 * @property variant - Visual style variant of the button (contained, text, or outlined)
 * @property size - Size of the button (small, medium, or FAB for floating action button)
 * @property disabled - Disables the button, preventing interaction and showing disabled styling
 * @property endicon - Positions icon at the end of the button text instead of the start
 * @property withPadding - Adds additional padding around the button content
 * @property inverseColor - Applies inverse color scheme suitable for dark backgrounds
 * @property buttontext - Text label displayed on the button
 * @property imgurl - URL of an image to display as the button icon
 * @property icon - Template result containing an icon element to display on the button
 * @property ariaLabel - Accessible label for screen readers when button text is insufficient
 * @property ariaHasPopup - ARIA attribute indicating the button opens a popup element
 * @property ariaExpanded - ARIA attribute indicating the expanded state of associated content
 */
export interface EnchantedButtonProps {
  variant?: string;
  size?: string;
  disabled?: boolean;
  endicon?: boolean;
  withPadding?: boolean;
  inverseColor?: boolean;
  buttontext?: string;
  imgurl?: string;
  icon?: TemplateResult;
  ariaLabel?: string;
  ariaHasPopup?: string;
  ariaExpanded?: string;
}

const meta: Meta<EnchantedButtonProps> = {
  title: 'Input/enchanted-button',
  component: 'enchanted-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        BUTTON_VARIANT.BUTTON_CONTAINED_VAR,
        BUTTON_VARIANT.BUTTON_TEXT_VAR,
        BUTTON_VARIANT.BUTTON_OUTLINED_VAR,
      ],
      description: 'Visual style variant of the button (contained, text, or outlined). Contained buttons have solid background, text buttons are transparent, outlined have border.',
      table: { category: 'Display', type: { summary: 'string' }, defaultValue: { summary: BUTTON_VARIANT.BUTTON_CONTAINED_VAR } },
    },
    size: {
      control: { type: 'radio' },
      options: [
        ICON_BUTTON_SIZES.SMALL,
        ICON_BUTTON_SIZES.MEDIUM,
        ICON_BUTTON_SIZES.FAB,
      ],
      description: 'Size of the button (small, medium, or FAB for floating action button). Affects padding, font size, and icon dimensions.',
      table: { category: 'Layout', type: { summary: 'ICON_BUTTON_SIZES' }, defaultValue: { summary: ICON_BUTTON_SIZES.SMALL } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button, preventing interaction and showing disabled styling with reduced opacity.',
      table: { category: 'State', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    endicon: {
      control: 'boolean',
      description: 'Positions icon at the end of the button text instead of the start. Works with both icon and imgurl properties.',
      table: { category: 'Layout', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    withPadding: {
      control: 'boolean',
      description: 'Adds additional padding around the button content, particularly useful for icon-only buttons without text.',
      table: { category: 'Styling', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    inverseColor: {
      control: 'boolean',
      description: 'Applies inverse color scheme suitable for dark backgrounds, inverting text and icon colors for better contrast.',
      table: { category: 'Styling', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    buttontext: {
      control: 'text',
      description: 'Text label displayed on the button. Can be omitted for icon-only buttons.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    imgurl: {
      control: 'text',
      description: 'URL of an image to display as the button icon. Alternative to using the icon property with template results.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    icon: {
      control: { type: 'object' },
      description: 'Template result containing an icon element to display on the button. Supports both enchanted icons (<icon-*>) and SVG elements.',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for screen readers when button text is insufficient to describe the action, particularly important for icon-only buttons.',
      table: { category: 'Accessibility', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
    ariaHasPopup: {
      control: 'text',
      description: 'ARIA attribute indicating the button opens a popup element (menu, dialog, listbox, etc.). Helps screen readers announce popup behavior.',
      table: { category: 'Accessibility', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
    ariaExpanded: {
      control: 'text',
      description: 'ARIA attribute indicating the expanded state of associated content. Use "true" or "false" to indicate whether controlled content is visible.',
      table: { category: 'Accessibility', type: { summary: 'string' }, defaultValue: { summary: 'false' } },
    },
  },
  args: {
    variant: BUTTON_VARIANT.BUTTON_CONTAINED_VAR,
    size: ICON_BUTTON_SIZES.SMALL,
    disabled: false,
    endicon: false,
    withPadding: false,
    inverseColor: false,
    buttontext: 'Button',
    imgurl: testImageUrl,
    icon: html`<icon-search size='16' color='#FFFFFF'></icon-search>`,
    ariaLabel: '',
    ariaHasPopup: '',
    ariaExpanded: 'false',
  },
  parameters: {
    docs: {
      description: {
        component: 'Button component with controls for variant, size, and boolean properties. Supports text, icons, images, and accessibility features with ARIA attributes.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<EnchantedButtonProps>;

export const EnchantedButton: Story = {
  render: (args) => {
    return html`
      <enchanted-button
        .variant=${args.variant}
        .size=${args.size}
        ?disabled=${args.disabled}
        ?endicon=${args.endicon}
        ?withPadding=${args.withPadding}
        ?inverseColor=${args.inverseColor}
        .buttontext=${args.buttontext}
        .imgurl=${args.imgurl}
        .icon=${args.icon}
        .ariaLabel=${args.ariaLabel}
        .ariaHasPopup=${args.ariaHasPopup}
        .ariaExpanded=${args.ariaExpanded}
      ></enchanted-button>
    `;
  },
  name: 'Default',
};

export const AllStates: Story = {
  render: () => {
    const variants = [BUTTON_VARIANT.BUTTON_CONTAINED_VAR, BUTTON_VARIANT.BUTTON_TEXT_VAR, BUTTON_VARIANT.BUTTON_OUTLINED_VAR];
    const sizes = [ICON_BUTTON_SIZES.SMALL, ICON_BUTTON_SIZES.MEDIUM, ICON_BUTTON_SIZES.FAB];

    return html`
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <!-- Variants x Sizes with Text + Icon -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Text + Icon Combinations</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            ${variants.map((variant) => {
              return sizes.map((size) => {
                return html`
                  <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
                    <enchanted-button .variant=${variant} .size=${size} .buttontext=${'Button'} .icon=${html`<icon-search size='16'></icon-search>`}></enchanted-button>
                    <span style="font-size: 11px; color: #666;">${variant} / ${size}</span>
                  </div>
                `;
              });
            })}
          </div>
        </div>

        <!-- Icon at End -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Icon at End (endicon)</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            ${variants.map((variant) => {
              return html`
                <enchanted-button 
                  .variant=${variant}
                  .size=${ICON_BUTTON_SIZES.MEDIUM}
                  .buttontext=${'Button'}
                  .icon=${html`<icon-search size='16'></icon-search>`}
                  ?endicon=${true}>
                </enchanted-button>
              `;
            })}
          </div>
        </div>

        <!-- Image URL -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Image URL (imgurl)</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            ${variants.map((variant) => {
              return html`
                <enchanted-button .variant=${variant} .size=${ICON_BUTTON_SIZES.MEDIUM} .buttontext=${'Avatar'} .imgurl=${testImageUrl}></enchanted-button>
              `;
            })}
          </div>
        </div>

        <!-- Icon Only (no text) -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Icon Only (no text)</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            ${variants.map((variant) => {
              return html`
                <enchanted-button .variant=${variant} .size=${ICON_BUTTON_SIZES.MEDIUM} .icon=${html`<icon-search size='16'></icon-search>`} .ariaLabel=${'Search'}></enchanted-button>
              `;
            })}
          </div>
        </div>

        <!-- With Padding -->
        <div>
          <h3 style="margin: 0 0 16px 0;">With Padding</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            ${variants.map((variant) => {
              return html`
                <enchanted-button
                  .variant=${variant}
                  .size=${ICON_BUTTON_SIZES.MEDIUM}
                  .icon=${html`<icon-search size='16'></icon-search>`}
                  ?withPadding=${true}
                  .ariaLabel=${'Search'}>
                </enchanted-button>
              `;
            })}
          </div>
        </div>

        <!-- Inverse Color (on dark background) -->
        <div style="background-color: #1a1a1a; padding: 16px; border-radius: 4px;">
          <h3 style="margin: 0 0 16px 0; color: white;">Inverse Color (dark background)</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            ${variants.map((variant) => {
              return html`
                <enchanted-button
                  .variant=${variant}
                  .size=${ICON_BUTTON_SIZES.MEDIUM}
                  .buttontext=${'Button'}
                  .icon=${html`<icon-search size='16'></icon-search>`}
                  ?inverseColor=${true}>
                </enchanted-button>
              `;
            })}
          </div>
        </div>

        <!-- Disabled State -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Disabled State</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            ${variants.map((variant) => {
              return html`
                <enchanted-button
                  .variant=${variant}
                  .size=${ICON_BUTTON_SIZES.MEDIUM}
                  .buttontext=${'Button'}
                  .icon=${html`<icon-search size='16'></icon-search>`}
                  ?disabled=${true}>
                </enchanted-button>
              `;
            })}
          </div>
        </div>

        <!-- Text Only (no icon) -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Text Only (no icon)</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            ${variants.map((variant) => {
              return html`
                <enchanted-button .variant=${variant} .size=${ICON_BUTTON_SIZES.MEDIUM} .buttontext=${'Button'}></enchanted-button>
              `;
            })}
          </div>
        </div>

        <!-- Accessibility Props -->
        <div>
          <h3 style="margin: 0 0 16px 0;">With ARIA Attributes</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            <enchanted-button
              .variant=${BUTTON_VARIANT.BUTTON_CONTAINED_VAR}
              .size=${ICON_BUTTON_SIZES.MEDIUM}
              .buttontext=${'Menu'}
              .icon=${html`<icon-search size='16'></icon-search>`}
              .ariaLabel=${'Open menu'}
              .ariaHasPopup=${'menu'}
              .ariaExpanded=${'false'}
            ></enchanted-button>
            <enchanted-button
              .variant=${BUTTON_VARIANT.BUTTON_OUTLINED_VAR}
              .size=${ICON_BUTTON_SIZES.MEDIUM}
              .buttontext=${'Expand'}
              .ariaLabel=${'Expand section'}
              .ariaExpanded=${'true'}
            ></enchanted-button>
          </div>
        </div>
      </div>
    `;
  },
  name: 'AllStates',
  parameters: {
    controls: { disabled: true },
    docs: {
      description: {
        story: 'Comprehensive showcase of all button states, variants, sizes, and configurations including text, icons, images, padding, inverse colors, disabled state, and ARIA attributes.'
      }
    }
  },
};
