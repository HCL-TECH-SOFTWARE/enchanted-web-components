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
import '../components/atomic-component/enchanted-toggle-button';
import '../components/atomic-component/enchanted-badge';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/add';
import {
  EnchantedBadgeBorder,
  EnchantedBadgeColor,
  EnchantedBadgeType,
} from '../types/cssClassEnums';
import { ENCHANTED_TOGGLE_BUTTON_TAG, generateIconTagName } from '../components/tags';

/**
 * @typedef EnchantedToggleButtonProps
 * Props for the enchanted-toggle-button web component.
 *
 * @property toggleOn - Toggle state
 * @property showBadge - Show badge slot
 * @property disabled - Disabled state
 * @property padding - Adds icon button padding
 * @property size - Icon button size
 * @property singleButtonTitle - Title used to render tooltip slot
 * @property singleButtonAria - Aria label for the button
 * @property tooltiptext - Tooltip text
 * @property tooltipPlacement - Tooltip placement
 * @property badgeText - Badge text
 * @property icon - Icon template
 * @property firstType - Whether this button is the first in a group (for styling)
 * @property lastType - Whether this button is the last in a group (for styling)
 */
export interface EnchantedToggleButtonProps {
  toggleOn?: boolean;
  showBadge?: boolean;
  disabled?: boolean;
  padding?: boolean;
  size?: 'small' | 'large';
  iconSize?: '16' | '20';
  tooltipText?: string;
  ariaLabel?: string;
  firstType?: boolean;
  lastType?: boolean;
}


const meta: Meta<EnchantedToggleButtonProps> = {
  title: 'Input/enchanted-toggle-button',
  tags: ['autodocs', 'a11y-addon'],
  argTypes: {
    toggleOn: { control: 'boolean', description: 'Toggle state', table: { defaultValue: { summary: 'false' } } },
    showBadge: { control: 'boolean', description: 'Show badge slot', table: { defaultValue: { summary: 'false' } } },
    disabled: { control: 'boolean', description: 'Disabled', table: { defaultValue: { summary: 'false' } } },
    padding: { control: 'boolean', description: 'Adds icon button padding', table: { defaultValue: { summary: 'false' } } },
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
      description: 'Icon button size',
      table: { defaultValue: { summary: 'small' } },
    },
    tooltipText: { control: 'text', description: 'Tooltip text', table: { defaultValue: { summary: '' } } },
    ariaLabel: { control: 'text', description: 'Aria label for the button', table: { defaultValue: { summary: '' } } },
    iconSize: {
      control: { type: 'select' },
      options: ['16', '20'],
      description: 'Icon size, 16 or 20',
      table: { defaultValue: { summary: '20' } },
    },
    firstType: { control: 'boolean', description: 'Whether this button is the first in a group (for styling)', table: { defaultValue: { summary: 'true' } } },
    lastType: { control: 'boolean', description: 'Whether this button is the last in a group (for styling)', table: { defaultValue: { summary: 'true' } } },
  },
  args: {
    toggleOn: false,
    showBadge: false,
    disabled: false,
    padding: false,
    size: 'small',
    iconSize: '16',
    tooltipText: '',
    ariaLabel: 'Toggle',
    firstType: false,
    lastType: false,
  },

  render: (args) => {
    const handleToggleChange = (event: CustomEvent) => {
      const { toggleOn } = event.detail;
      args.toggleOn = toggleOn;
    };

    return html`
    <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end; padding: 20px 24px 24px;">
      <${ENCHANTED_TOGGLE_BUTTON_TAG}
        ?toggleOn=${args.toggleOn}
        ?showBadge=${args.showBadge}
        ?disabled=${args.disabled}
        tooltipText=${args.tooltipText}
        ?padding=${args.padding}
        size=${args.size}
        ?firstType=${args.firstType}
        ?lastType=${args.lastType}
        iconSize=${args.iconSize}
        ariaLabel=${args.ariaLabel}
        @toggle-change=${handleToggleChange}
      >
        <enchanted-badge
          slot="badge"
          badge=${EnchantedBadgeType.DOT}
          color=${EnchantedBadgeColor.PRIMARY}
          border=${EnchantedBadgeBorder.NONE}
        ></enchanted-badge>
        <${generateIconTagName('icon-add')} slot="icon"></${generateIconTagName('icon-add')}>

      </${ENCHANTED_TOGGLE_BUTTON_TAG}>
    </div>
    `;
  },
};

export default meta;
type Story = StoryObj<EnchantedToggleButtonProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {
    return html`
      ${(() => {
        const iconTag = generateIconTagName('icon-add');
        return html`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end;">
        <div>
          <div>Default</div>
          <${ENCHANTED_TOGGLE_BUTTON_TAG} ariaLabel="Default">
            <${iconTag} slot="icon"></${iconTag}>
          </${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </div>
        <div>
          <div>Toggle On</div>
          <${ENCHANTED_TOGGLE_BUTTON_TAG} ariaLabel="On" toggleOn>
            <${iconTag} slot="icon"></${iconTag}>
          </${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </div>
        <div>
          <div>With Tooltip Text</div>
          <${ENCHANTED_TOGGLE_BUTTON_TAG}
            ariaLabel="Tooltip"
            tooltipText="Toggle tooltip"
          >
            <${iconTag} slot="icon"></${iconTag}>
          </${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </div>
        <div>
          <div>With Badge Slot</div>
          <${ENCHANTED_TOGGLE_BUTTON_TAG} ariaLabel="Badge" showBadge>
            <${iconTag} slot="icon"></${iconTag}>
            <enchanted-badge
              slot="badge"
              badge=${EnchantedBadgeType.TEXT}
              text="5"
              color=${EnchantedBadgeColor.PRIMARY}
              border=${EnchantedBadgeBorder.NONE}
            ></enchanted-badge>
          </${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </div>
        <div>
          <div>Disabled</div>
          <${ENCHANTED_TOGGLE_BUTTON_TAG} ariaLabel="Disabled" disabled>
            <${iconTag} slot="icon"></${iconTag}>
          </${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </div>
      </div>
      `;
      })()}
    `;
  },
};
