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
import '../components/atomic-component/enchanted-tooltip';
import '../components/atomic-component/enchanted-button';
import { TOOLTIP_PLACEMENT, TOOLTIP_VARIANT, TOOLTIP_TYPE } from '../types/cssClassEnums';
import { ENCHANTED_BUTTON_TAG, ENCHANTED_TOOLTIP_TAG } from '../components/tags';

/**
 * @typedef EnchantedTooltipProps
 * Props for the enchanted-tooltip web component.
 *
 * @property tooltiptext - The tooltip text
 * @property placement - The tooltip placement
 * @property show - If true, tooltip is always visible
 * @property tooltipSize - The tooltip size variant
 * @property tooltipType - The tooltip type (single-line or multi-line)
 * @property gap - Gap between tooltip and target
 * @property multiLineMaxWidth - Maximum width for multi-line tooltips
 * @property viewportPadding - Padding from viewport edges
 * @property minimumWidth - Minimum width for the tooltip
 * @property isRTL - Right-to-left text direction
 */
export interface EnchantedTooltipProps {
  tooltiptext?: string;
  placement?: TOOLTIP_PLACEMENT;
  show?: boolean;
  tooltipSize?: string;
  tooltipType?: string;
  gap?: number;
  multiLineMaxWidth?: number;
  viewportPadding?: number;
  minimumWidth?: number;
  isRTL?: boolean;
}

const meta: Meta<EnchantedTooltipProps> = {
  title: 'Feedback/enchanted-tooltip',
  tags: ['autodocs'],
  argTypes: {
    tooltiptext: {
      control: { type: 'text' },
      description: 'Text content displayed in the tooltip. Provides contextual information or help text when hovering over the target element.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
    placement: {
      control: { type: 'select' },
      options: [
        TOOLTIP_PLACEMENT.TOOLTIP_TOP,
        TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM,
        TOOLTIP_PLACEMENT.TOOLTIP_LEFT,
        TOOLTIP_PLACEMENT.TOOLTIP_RIGHT,
        TOOLTIP_PLACEMENT.TOOLTIP_TOP_START,
        TOOLTIP_PLACEMENT.TOOLTIP_TOP_END,
        TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START,
        TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END,
        TOOLTIP_PLACEMENT.TOOLTIP_LEFT_START,
        TOOLTIP_PLACEMENT.TOOLTIP_LEFT_END,
        TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_START,
        TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_END,
      ],
      description: 'Tooltip placement relative to target element. Supports 12 positions: top, bottom, left, right, and start/end variants for each. ' +
        'Automatically adjusts if constrained by viewport.',
      table: { category: 'Layout', type: { summary: 'TOOLTIP_PLACEMENT' }, defaultValue: { summary: TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM } },
    },
    tooltipSize: {
      control: { type: 'radio' },
      options: [TOOLTIP_VARIANT.TOOLTIP_SMALL, TOOLTIP_VARIANT.TOOLTIP_MEDIUM],
      description: 'Size variant of the tooltip. Options: tooltip-small (compact) or tooltip-medium (larger padding and text). Affects tooltip dimensions and padding.',
      table: { category: 'Layout', type: { summary: 'TOOLTIP_VARIANT' }, defaultValue: { summary: TOOLTIP_VARIANT.TOOLTIP_SMALL } },
    },
    tooltipType: {
      control: { type: 'radio' },
      options: [TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE, TOOLTIP_TYPE.TOOLTIP_MULTI_LINE],
      description: 'Tooltip type controlling text wrapping. Single-line keeps text on one line; multi-line allows wrapping with configurable max width.',
      table: { category: 'Layout', type: { summary: 'TOOLTIP_TYPE' }, defaultValue: { summary: TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE } },
    },
    show: {
      control: { type: 'boolean' },
      description: 'Controls tooltip visibility state. When true, tooltip is always visible (useful for testing/debugging). When false, shows on hover/focus.',
      table: { category: 'State', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    gap: {
      control: { type: 'number' },
      description: 'Gap in pixels between tooltip and target element. Provides visual separation. Default is 4px.',
      table: { category: 'Styling', type: { summary: 'number' }, defaultValue: { summary: '4' } },
    },
    multiLineMaxWidth: {
      control: { type: 'number' },
      description: 'Maximum width in pixels for multi-line tooltips. Controls where text wraps. Only applies when tooltipType is TOOLTIP_MULTI_LINE. Default is 300px.',
      table: { category: 'Styling', type: { summary: 'number' }, defaultValue: { summary: '300' } },
    },
    viewportPadding: {
      control: { type: 'number' },
      description: 'Padding in pixels from viewport edges. Ensures tooltip stays within viewport bounds with spacing. Default is 4px.',
      table: { category: 'Styling', type: { summary: 'number' }, defaultValue: { summary: '4' } },
    },
    minimumWidth: {
      control: { type: 'number' },
      description: 'Minimum width in pixels for the tooltip. Ensures tooltip meets minimum size requirements. Default is 0 (no minimum).',
      table: { category: 'Styling', type: { summary: 'number' }, defaultValue: { summary: '0' } },
    },
    isRTL: {
      control: { type: 'boolean' },
      description: 'Enables right-to-left text direction for the tooltip content. Affects text alignment and layout for RTL languages.',
      table: { category: 'Localization', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
  args: {
    tooltiptext: 'Tooltip text',
    placement: TOOLTIP_PLACEMENT.TOOLTIP_TOP,
    tooltipSize: TOOLTIP_VARIANT.TOOLTIP_SMALL,
    tooltipType: TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE,
    show: false,
    gap: 4,
    multiLineMaxWidth: 300,
    viewportPadding: 4,
    minimumWidth: 0,
    isRTL: false,
  },
  parameters: {
    docs: {
      description: {
        component: 'Tooltip component for displaying contextual information on hover or focus. Features 12 placement options with automatic viewport adjustment, ' +
          'two size variants (small, medium), single-line and multi-line text support, and customizable styling. ' +
          'Supports RTL text direction, configurable gaps and widths, and keyboard accessibility. ' +
          'Uses slots for flexible target elements and automatically positions based on available viewport space.'
      }
    }
  },
  render: (args) => {
    return html`
      <${ENCHANTED_TOOLTIP_TAG}
        tooltiptext="${args.tooltiptext}"
        placement="${args.placement}"
        tooltipSize="${args.tooltipSize}"
        tooltipType="${args.tooltipType}"
        ?show=${args.show}
        .gap=${args.gap}
        .multiLineMaxWidth=${args.multiLineMaxWidth}
        .viewportPadding=${args.viewportPadding}
        .minimumWidth=${args.minimumWidth}
        ?isRTL=${args.isRTL}
      >
        <${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Show Tooltip"></${ENCHANTED_BUTTON_TAG}>
      </${ENCHANTED_TOOLTIP_TAG}>
    `;
  },
};

export default meta;
type Story = StoryObj<EnchantedTooltipProps>;

export const Default: Story = {};

export const AllStates: StoryObj = {
  render: () => {
    return html`
      <div style="display: flex; flex-direction: column; gap: 60px; padding: 40px;">
        <div>
          <h3 style="margin: 0 0 20px 0;">Tooltip Placements (12 Positions)</h3>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; place-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Top</p>
              <${ENCHANTED_TOOLTIP_TAG} tooltiptext="Top placement" placement="${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" show>
                <${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Top"></${ENCHANTED_BUTTON_TAG}>
              </${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Top Start</p>
              <${ENCHANTED_TOOLTIP_TAG} tooltiptext="Top start placement" placement="${TOOLTIP_PLACEMENT.TOOLTIP_TOP_START}" show>
                <${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Top Start"></${ENCHANTED_BUTTON_TAG}>
              </${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Top End</p>
              <${ENCHANTED_TOOLTIP_TAG} tooltiptext="Top end placement" placement="${TOOLTIP_PLACEMENT.TOOLTIP_TOP_END}" show>
                <${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Top End"></${ENCHANTED_BUTTON_TAG}>
              </${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Bottom</p>
              <${ENCHANTED_TOOLTIP_TAG} tooltiptext="Bottom placement" placement="${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM}" show>
                <${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Bottom"></${ENCHANTED_BUTTON_TAG}>
              </${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Bottom Start</p>
              <${ENCHANTED_TOOLTIP_TAG} tooltiptext="Bottom start placement" placement="${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START}" show>
                <${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Bottom Start"></${ENCHANTED_BUTTON_TAG}>
              </${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Bottom End</p>
              <${ENCHANTED_TOOLTIP_TAG} tooltiptext="Bottom end placement" placement="${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END}" show>
                <${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Bottom End"></${ENCHANTED_BUTTON_TAG}>
              </${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Left</p>
              <${ENCHANTED_TOOLTIP_TAG} tooltiptext="Left placement" placement="${TOOLTIP_PLACEMENT.TOOLTIP_LEFT}" show>
                <${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Left"></${ENCHANTED_BUTTON_TAG}>
              </${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Left Start</p>
              <${ENCHANTED_TOOLTIP_TAG} tooltiptext="Left start placement" placement="${TOOLTIP_PLACEMENT.TOOLTIP_LEFT_START}" show>
                <${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Left Start"></${ENCHANTED_BUTTON_TAG}>
              </${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Left End</p>
              <${ENCHANTED_TOOLTIP_TAG} tooltiptext="Left end placement" placement="${TOOLTIP_PLACEMENT.TOOLTIP_LEFT_END}" show>
                <${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Left End"></${ENCHANTED_BUTTON_TAG}>
              </${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Right</p>
              <${ENCHANTED_TOOLTIP_TAG} tooltiptext="Right placement" placement="${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT}" show>
                <${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Right"></${ENCHANTED_BUTTON_TAG}>
              </${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Right Start</p>
              <${ENCHANTED_TOOLTIP_TAG} tooltiptext="Right start placement" placement="${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_START}" show>
                <${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Right Start"></${ENCHANTED_BUTTON_TAG}>
              </${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Right End</p>
              <${ENCHANTED_TOOLTIP_TAG} tooltiptext="Right end placement" placement="${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_END}" show>
                <${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Right End"></${ENCHANTED_BUTTON_TAG}>
              </${ENCHANTED_TOOLTIP_TAG}>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Tooltip Sizes</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Small (Default)</p>
              <${ENCHANTED_TOOLTIP_TAG} tooltiptext="Small tooltip size" placement="${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" tooltipSize="${TOOLTIP_VARIANT.TOOLTIP_SMALL}" show>
                <${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Small Tooltip"></${ENCHANTED_BUTTON_TAG}>
              </${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Medium</p>
              <${ENCHANTED_TOOLTIP_TAG} tooltiptext="Medium tooltip size" placement="${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" tooltipSize="${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}" show>
                <${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Medium Tooltip"></${ENCHANTED_BUTTON_TAG}>
              </${ENCHANTED_TOOLTIP_TAG}>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Tooltip Types</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Single Line</p>
              <${ENCHANTED_TOOLTIP_TAG} tooltiptext="This is a single line tooltip that stays on one line" placement="${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" 
                tooltipType="${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}" show>
                <${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Single Line"></${ENCHANTED_BUTTON_TAG}>
              </${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Multi Line</p>
              <${ENCHANTED_TOOLTIP_TAG}
                tooltiptext="This is a multi-line tooltip that can wrap text across multiple lines when it exceeds the maximum width"
                placement="${TOOLTIP_PLACEMENT.TOOLTIP_TOP}"
                tooltipType="${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}"
                show
              >
                <${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Multi Line"></${ENCHANTED_BUTTON_TAG}>
              </${ENCHANTED_TOOLTIP_TAG}>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Custom Styling</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Custom Gap (20px)</p>
              <${ENCHANTED_TOOLTIP_TAG} tooltiptext="Tooltip with 20px gap" placement="${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" .gap=${20} show>
                <${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Large Gap"></${ENCHANTED_BUTTON_TAG}>
              </${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Minimum Width (200px)</p>
              <${ENCHANTED_TOOLTIP_TAG} tooltiptext="Wide tooltip" placement="${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" .minimumWidth=${200} show>
                <${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Wide Tooltip"></${ENCHANTED_BUTTON_TAG}>
              </${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Multi-line Max Width (150px)</p>
              <${ENCHANTED_TOOLTIP_TAG}
                tooltiptext="This tooltip has a narrow max width so it wraps sooner"
                placement="${TOOLTIP_PLACEMENT.TOOLTIP_TOP}"
                tooltipType="${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}"
                .multiLineMaxWidth=${150}
                show
              >
                <${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Narrow Wrap"></${ENCHANTED_BUTTON_TAG}>
              </${ENCHANTED_TOOLTIP_TAG}>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">RTL Support</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">LTR (Default)</p>
              <${ENCHANTED_TOOLTIP_TAG} tooltiptext="Left to right text direction" placement="${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" show>
                <${ENCHANTED_BUTTON_TAG} slot="target" buttontext="LTR Tooltip"></${ENCHANTED_BUTTON_TAG}>
              </${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">RTL</p>
              <${ENCHANTED_TOOLTIP_TAG} tooltiptext="مرحبا بك في التلميح" placement="${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" ?isRTL=${true} show>
                <${ENCHANTED_BUTTON_TAG} slot="target" buttontext="RTL Tooltip"></${ENCHANTED_BUTTON_TAG}>
              </${ENCHANTED_TOOLTIP_TAG}>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Interactive (Hover to Show)</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <${ENCHANTED_TOOLTIP_TAG} tooltiptext="Hover over me to see the tooltip" placement="${TOOLTIP_PLACEMENT.TOOLTIP_TOP}">
              <${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Hover Me"></${ENCHANTED_BUTTON_TAG}>
            </${ENCHANTED_TOOLTIP_TAG}>
            
            <${ENCHANTED_TOOLTIP_TAG} tooltiptext="This tooltip appears on hover" placement="${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT}">
              <button slot="target" style="padding: 8px 16px; cursor: pointer;">Custom Target</button>
            </${ENCHANTED_TOOLTIP_TAG}>
            
            <${ENCHANTED_TOOLTIP_TAG} tooltiptext="Works with any element" placement="${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM}">
              <span slot="target" style="padding: 8px; border: 1px solid #ccc; cursor: help;">ⓘ Info Icon</span>
            </${ENCHANTED_TOOLTIP_TAG}>
          </div>
        </div>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all tooltip configurations and features. Demonstrates all 12 placement positions (top, bottom, left, right with start/end variants), ' +
          '2 size variants (small, medium), 2 text types (single-line, multi-line), custom styling options (gap, minimum width, max width for wrapping), ' +
          'RTL text direction support, and interactive hover behavior with various target elements. ' +
          'Most tooltips shown with show=true for visualization; interactive section demonstrates hover behavior. ' +
          'Total of 25+ tooltip configurations highlighting the complete feature set.'
      }
    },
    controls: { disable: true },
  },
};
