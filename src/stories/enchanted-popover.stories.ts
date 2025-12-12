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
import '../components/atomic-component/enchanted-popover';
import '../components/atomic-component/enchanted-button';
import { EnchantedPopoverArrowPosition } from '../types/enchanted-popover';

/**
 * @interface EnchantedPopoverProps
 * Props for the enchanted-popover web component.
 *
 * @property open - Controls the popover visibility (shown/hidden)
 * @property label - Popover title/header text
 * @property text - Popover description/body text
 * @property showLabel - Show or hide the label section
 * @property showText - Show or hide the text section
 * @property showCloseIcon - Show close button inside popover
 * @property inverse - Dark theme when true, light theme when false
 * @property arrow - Position of the arrow pointing to the target
 * @property withpadding - Applies internal padding to the popover content
 * @property disableHover - Disables hover-based show/hide behavior
 * @property buttontext - Button text for the target element
 */
export interface EnchantedPopoverProps {
  open?: boolean;
  label?: string;
  text?: string;
  showLabel?: boolean;
  showText?: boolean;
  showCloseIcon?: boolean;
  inverse?: boolean;
  arrow?: EnchantedPopoverArrowPosition;
  withpadding?: boolean;
  disableHover?: boolean;
  buttontext?: string;
}

const meta: Meta<EnchantedPopoverProps> = {
  title: 'Display/enchanted-popover',
  component: 'enchanted-popover',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Popover component displays contextual content in a floating panel anchored to a target element. It supports 13 arrow positions, hover and click ' +
          'interactions, dark/light themes, and optional close buttons. Use popovers for additional information, help text, or contextual actions without leaving the current ' +
          'page context. Full RTL support included.',
      },
    },
  },
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'Controls popover visibility. When true, popover is displayed. Can be controlled programmatically or through user interaction (hover/click).',
      table: { category: 'State', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    label: {
      control: { type: 'text' },
      description: 'Title text displayed at the top of the popover. Provides a header or summary for the popover content. Only visible when showLabel is true.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: 'Label' } },
    },
    text: {
      control: { type: 'text' },
      description: 'Description text displayed in the popover body. Main content area for detailed information. Only visible when showText is true.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: 'Text' } },
    },
    showLabel: {
      control: { type: 'boolean' },
      description: 'Shows or hides the label section. When false, the header area is not rendered, providing more space for the text content.',
      table: { category: 'Display', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    showText: {
      control: { type: 'boolean' },
      description: 'Shows or hides the text section. When false, only the label (if showLabel is true) or custom content is displayed.',
      table: { category: 'Display', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    showCloseIcon: {
      control: { type: 'boolean' },
      description: 'Displays a close button inside the popover. Allows users to explicitly dismiss the popover. Useful when disableHover is true.',
      table: { category: 'Display', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    inverse: {
      control: { type: 'boolean' },
      description: 'Applies dark theme styling when true, light theme when false. Dark theme features white text on dark background for high contrast scenarios.',
      table: { category: 'Styling', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    arrow: {
      control: { type: 'radio' },
      options: [
        EnchantedPopoverArrowPosition.TOP,
        EnchantedPopoverArrowPosition.BOTTOM,
        EnchantedPopoverArrowPosition.LEFT,
        EnchantedPopoverArrowPosition.RIGHT,
        EnchantedPopoverArrowPosition.BOTTOM_LEFT,
        EnchantedPopoverArrowPosition.BOTTOM_RIGHT,
        EnchantedPopoverArrowPosition.LEFT_BOTTOM,
        EnchantedPopoverArrowPosition.LEFT_TOP,
        EnchantedPopoverArrowPosition.RIGHT_BOTTOM,
        EnchantedPopoverArrowPosition.RIGHT_TOP,
        EnchantedPopoverArrowPosition.TOP_LEFT,
        EnchantedPopoverArrowPosition.TOP_RIGHT,
        EnchantedPopoverArrowPosition.NONE,
      ],
      description: 'Position of the arrow pointing to the target element. Supports 12 clock positions plus NONE. Affects popover placement relative to target.',
      table: { category: 'Layout', type: { summary: 'EnchantedPopoverArrowPosition' }, defaultValue: { summary:  EnchantedPopoverArrowPosition.NONE } },
    },
    withpadding: {
      control: { type: 'boolean' },
      description: 'Applies internal padding to the popover content. When true, adds spacing around label and text for better readability.',
      table: { category: 'Layout', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    disableHover: {
      control: { type: 'boolean' },
      description: 'Disables hover-based show/hide behavior. When true, popover must be controlled via the open property or click events. Prevents accidental dismissal.',
      table: { category: 'Behavior', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    buttontext: {
      control: { type: 'text' },
      description: 'Text displayed on the target button. Used for demonstration purposes in the story. The popover can be anchored to any element via the target slot.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
  },
  args: {
    open: false,
    label: 'Popover Title',
    text: 'This is a sample popover description.',
    showLabel: true,
    showText: true,
    showCloseIcon: true,
    inverse: true,
    arrow: EnchantedPopoverArrowPosition.RIGHT,
    withpadding: true,
    disableHover: false,
    buttontext: 'Hover on Me',
  },
};

export default meta;

type Story = StoryObj<EnchantedPopoverProps>;

export const EnchantedPopoverStory: Story = {
  name: 'Default',
  render: (args) => {
    return html`
    <enchanted-popover
      ?open=${args.open}
      label=${args.label}
      text=${args.text}
      ?showLabel=${args.showLabel}
      ?showText=${args.showText}
      ?showCloseIcon=${args.showCloseIcon}
      ?inverse=${args.inverse}
      .arrow=${args.arrow}
      ?withpadding=${args.withpadding}
      ?disableHover=${args.disableHover}
      style="position: absolute; top: 50%; left: 45%;"
    >
      <enchanted-button slot="target" buttontext="${args.buttontext}"></enchanted-button>
    </enchanted-popover>
  `;
  },
};

/**
 * Comprehensive showcase of all popover states and arrow positions.
 * This story demonstrates:
 * - All 13 arrow positions (12 clock positions + NONE)
 * - Light and dark themes (inverse property)
 * - With/without padding
 * - With/without close icon
 * - Label and text visibility combinations
 */
export const AllStates: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    return html`
    <style>
      .popover-container {
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding: 40px;
      }
      .popover-section {
        display: flex;
        flex-direction: column;
        gap: 100px;
      }
      .popover-section h3 {
        margin: 0 0 10px 0;
        font-size: 16px;
        font-weight: 600;
      }
      .popover-row {
        display: flex;
        flex-wrap: wrap;
        gap: 150px;
        align-items: center;
      }
      .popover-item {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .popover-label {
        font-size: 12px;
        color: #666;
        margin-top: 5px;
        text-align: center;
      }
    </style>

    <div class="popover-container">
      <!-- Arrow Positions Section -->
      <div class="popover-section">
        <h3>Arrow Positions (Light Theme)</h3>
        <div class="popover-row">
          <div class="popover-item">
            <enchanted-popover
              ?open=${true}
              label="Top"
              text="Arrow at top"
              ?showLabel=${true}
              ?showText=${true}
              .arrow=${EnchantedPopoverArrowPosition.TOP}
              ?withpadding=${true}
            >
              <enchanted-button slot="target" buttontext="Top"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${true}
              label="Top Left"
              text="Arrow at top-left"
              ?showLabel=${true}
              ?showText=${true}
              .arrow=${EnchantedPopoverArrowPosition.TOP_LEFT}
              ?withpadding=${true}
            >
              <enchanted-button slot="target" buttontext="Top Left"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${true}
              label="Top Right"
              text="Arrow at top-right"
              ?showLabel=${true}
              ?showText=${true}
              .arrow=${EnchantedPopoverArrowPosition.TOP_RIGHT}
              ?withpadding=${true}
            >
              <enchanted-button slot="target" buttontext="Top Right"></enchanted-button>
            </enchanted-popover>
          </div>
        </div>
        <div class="popover-row">
          <div class="popover-item">
            <enchanted-popover
              ?open=${true}
              label="Bottom"
              text="Arrow at bottom"
              ?showLabel=${true}
              ?showText=${true}
              .arrow=${EnchantedPopoverArrowPosition.BOTTOM}
              ?withpadding=${true}
            >
              <enchanted-button slot="target" buttontext="Bottom"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${true}
              label="Bottom Left"
              text="Arrow at bottom-left"
              ?showLabel=${true}
              ?showText=${true}
              .arrow=${EnchantedPopoverArrowPosition.BOTTOM_LEFT}
              ?withpadding=${true}
            >
              <enchanted-button slot="target" buttontext="Bottom Left"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${true}
              label="Bottom Right"
              text="Arrow at bottom-right"
              ?showLabel=${true}
              ?showText=${true}
              .arrow=${EnchantedPopoverArrowPosition.BOTTOM_RIGHT}
              ?withpadding=${true}
            >
              <enchanted-button slot="target" buttontext="Bottom Right"></enchanted-button>
            </enchanted-popover>
          </div>
        </div>
        <div class="popover-row">
          <div class="popover-item">
            <enchanted-popover
              ?open=${true}
              label="Left"
              text="Arrow at left"
              ?showLabel=${true}
              ?showText=${true}
              .arrow=${EnchantedPopoverArrowPosition.LEFT}
              ?withpadding=${true}
            >
              <enchanted-button slot="target" buttontext="Left"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${true}
              label="Left Top"
              text="Arrow at left-top"
              ?showLabel=${true}
              ?showText=${true}
              .arrow=${EnchantedPopoverArrowPosition.LEFT_TOP}
              ?withpadding=${true}
            >
              <enchanted-button slot="target" buttontext="Left Top"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${true}
              label="Left Bottom"
              text="Arrow at left-bottom"
              ?showLabel=${true}
              ?showText=${true}
              .arrow=${EnchantedPopoverArrowPosition.LEFT_BOTTOM}
              ?withpadding=${true}
            >
              <enchanted-button slot="target" buttontext="Left Bottom"></enchanted-button>
            </enchanted-popover>
          </div>
        </div>
        <div class="popover-row">
          <div class="popover-item">
            <enchanted-popover
              ?open=${true}
              label="Right"
              text="Arrow at right"
              ?showLabel=${true}
              ?showText=${true}
              .arrow=${EnchantedPopoverArrowPosition.RIGHT}
              ?withpadding=${true}
            >
              <enchanted-button slot="target" buttontext="Right"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${true}
              label="Right Top"
              text="Arrow at right-top"
              ?showLabel=${true}
              ?showText=${true}
              .arrow=${EnchantedPopoverArrowPosition.RIGHT_TOP}
              ?withpadding=${true}
            >
              <enchanted-button slot="target" buttontext="Right Top"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${true}
              label="Right Bottom"
              text="Arrow at right-bottom"
              ?showLabel=${true}
              ?showText=${true}
              .arrow=${EnchantedPopoverArrowPosition.RIGHT_BOTTOM}
              ?withpadding=${true}
            >
              <enchanted-button slot="target" buttontext="Right Bottom"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${true}
              label="No Arrow"
              text="Arrow set to NONE"
              ?showLabel=${true}
              ?showText=${true}
              .arrow=${EnchantedPopoverArrowPosition.NONE}
              ?withpadding=${true}
            >
              <enchanted-button slot="target" buttontext="No Arrow"></enchanted-button>
            </enchanted-popover>
          </div>
        </div>
      </div>

      <!-- Dark Theme Section -->
      <div class="popover-section">
        <h3>Dark Theme (Inverse)</h3>
        <div class="popover-row">
          <div class="popover-item">
            <enchanted-popover
              ?open=${true}
              label="Dark Theme"
              text="Popover with inverse styling"
              ?showLabel=${true}
              ?showText=${true}
              ?inverse=${true}
              .arrow=${EnchantedPopoverArrowPosition.TOP}
              ?withpadding=${true}
            >
              <enchanted-button slot="target" buttontext="Dark Top"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${true}
              label="Dark Right"
              text="Dark theme with right arrow"
              ?showLabel=${true}
              ?showText=${true}
              ?inverse=${true}
              .arrow=${EnchantedPopoverArrowPosition.RIGHT}
              ?withpadding=${true}
            >
              <enchanted-button slot="target" buttontext="Dark Right"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${true}
              label="Dark Bottom"
              text="Dark theme with bottom arrow"
              ?showLabel=${true}
              ?showText=${true}
              ?inverse=${true}
              .arrow=${EnchantedPopoverArrowPosition.BOTTOM}
              ?withpadding=${true}
            >
              <enchanted-button slot="target" buttontext="Dark Bottom"></enchanted-button>
            </enchanted-popover>
          </div>
        </div>
      </div>

      <!-- Content Variations Section -->
      <div class="popover-section">
        <h3>Content Variations</h3>
        <div class="popover-row">
          <div class="popover-item">
            <enchanted-popover
              ?open=${true}
              label="Label Only"
              ?showLabel=${true}
              ?showText=${false}
              .arrow=${EnchantedPopoverArrowPosition.TOP}
              ?withpadding=${true}
            >
              <enchanted-button slot="target" buttontext="Label Only"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${true}
              text="Text only, no label shown"
              ?showLabel=${false}
              ?showText=${true}
              .arrow=${EnchantedPopoverArrowPosition.TOP}
              ?withpadding=${true}
            >
              <enchanted-button slot="target" buttontext="Text Only"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${true}
              label="With Close"
              text="Popover with close button"
              ?showLabel=${true}
              ?showText=${true}
              ?showCloseIcon=${true}
              .arrow=${EnchantedPopoverArrowPosition.TOP}
              ?withpadding=${true}
            >
              <enchanted-button slot="target" buttontext="With Close"></enchanted-button>
            </enchanted-popover>
          </div>
        </div>
      </div>

      <!-- Layout Options Section -->
      <div class="popover-section">
        <h3>Layout Options</h3>
        <div class="popover-row">
          <div class="popover-item">
            <enchanted-popover
              ?open=${true}
              label="No Padding"
              text="Content without internal padding"
              ?showLabel=${true}
              ?showText=${true}
              .arrow=${EnchantedPopoverArrowPosition.TOP}
              ?withpadding=${false}
            >
              <enchanted-button slot="target" buttontext="No Padding"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${true}
              label="With Padding"
              text="Content with internal padding"
              ?showLabel=${true}
              ?showText=${true}
              .arrow=${EnchantedPopoverArrowPosition.TOP}
              ?withpadding=${true}
            >
              <enchanted-button slot="target" buttontext="With Padding"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${true}
              label="Hover Disabled"
              text="Must be controlled via open property"
              ?showLabel=${true}
              ?showText=${true}
              ?showCloseIcon=${true}
              .arrow=${EnchantedPopoverArrowPosition.TOP}
              ?withpadding=${true}
              ?disableHover=${true}
            >
              <enchanted-button slot="target" buttontext="No Hover"></enchanted-button>
            </enchanted-popover>
          </div>
        </div>
      </div>

      <!-- Combined States Section -->
      <div class="popover-section">
        <h3>Combined States</h3>
        <div class="popover-row">
          <div class="popover-item">
            <enchanted-popover
              ?open=${true}
              label="Full Featured"
              text="Dark theme with close icon, padding, and custom arrow"
              ?showLabel=${true}
              ?showText=${true}
              ?showCloseIcon=${true}
              ?inverse=${true}
              .arrow=${EnchantedPopoverArrowPosition.RIGHT_TOP}
              ?withpadding=${true}
            >
              <enchanted-button slot="target" buttontext="Full Featured"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${true}
              text="Minimal popover with no arrow or padding"
              ?showLabel=${false}
              ?showText=${true}
              .arrow=${EnchantedPopoverArrowPosition.NONE}
              ?withpadding=${false}
            >
              <enchanted-button slot="target" buttontext="Minimal"></enchanted-button>
            </enchanted-popover>
          </div>
        </div>
      </div>
    </div>
  `;
  },
};
