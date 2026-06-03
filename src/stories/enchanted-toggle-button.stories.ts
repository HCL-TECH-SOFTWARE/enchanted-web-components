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
import '../components/atomic-component/enchanted-icon-button';
// Icon imports
import tagUrl from '../_tests_/assets/tag.svg';
import listUrl from '../_tests_/assets/list.svg';
import { svgClose } from '../_tests_/assets/svg-close';
import { ENCHANTED_TOGGLE_BUTTON_TAG } from '../components/tags';

/**
 * @typedef EnchantedToggleButtonProps
 * Props for the enchanted-toggle-button web component.
 *
 * @property singleButton - Single button mode
 * @property toggleOn - Toggle state for single button
 * @property showBadge - Show badge on single button
 * @property disabled - Disabled state
 * @property outlined - Outlined style
 * @property selectedValue - Selected value for two-button mode
 * @property iconUrls - Icon URLs for two-button mode
 * @property values - Values for two-button mode
 * @property singleButtonTitle - Title for single button
 * @property singleButtonAria - Aria label for single button
 * @property icon - Icon template for single button
 */
export interface EnchantedToggleButtonProps {
  singleButton?: boolean;
  toggleOn?: boolean;
  showBadge?: boolean;
  disabled?: boolean;
  outlined?: boolean;
  selectedValue?: string;
  iconUrls?: string[];
  values?: string[];
  singleButtonTitle?: string;
  singleButtonAria?: string;
  icon?: unknown;
}


const meta: Meta<EnchantedToggleButtonProps> = {
  title: 'Input/enchanted-toggle-button',
  tags: ['autodocs'],
  argTypes: {
    singleButton: { control: 'boolean', description: 'Single button mode', table: { defaultValue: { summary: 'false' } } },
    toggleOn: { control: 'boolean', description: 'Toggle state (single button)', table: { defaultValue: { summary: 'false' } } },
    showBadge: { control: 'boolean', description: 'Show badge (single button)', table: { defaultValue: { summary: 'false' } } },
    disabled: { control: 'boolean', description: 'Disabled', table: { defaultValue: { summary: 'false' } } },
    outlined: { control: 'boolean', description: 'Outlined', table: { defaultValue: { summary: 'false' } } },
    selectedValue: { control: 'text', description: 'Selected value (two-button mode)', table: { defaultValue: { summary: '' } } },
    iconUrls: { control: 'object', description: 'Icon URLs (two-button mode)', table: { defaultValue: { summary: '[...]' } } },
    values: { control: 'object', description: 'Values (two-button mode)', table: { defaultValue: { summary: '[...]' } } },
    singleButtonTitle: { control: 'text', description: 'Single button title', table: { defaultValue: { summary: '' } } },
    singleButtonAria: { control: 'text', description: 'Single button aria-label', table: { defaultValue: { summary: '' } } },
    icon: { control: false, description: 'Icon template (single button)', table: { defaultValue: { summary: 'svg' } } },
  },
  args: {
    singleButton: false,
    toggleOn: false,
    showBadge: false,
    disabled: false,
    outlined: false,
    selectedValue: '',
    iconUrls: [],
    values: ['on', 'off'],
    singleButtonTitle: 'Toggle',
    singleButtonAria: 'Toggle',
    icon: '',
  },
  render: (args) => {
    return html`
      <${ENCHANTED_TOGGLE_BUTTON_TAG}
        ?toggleOn=${args.toggleOn}
        ?disabled=${args.disabled}
        ?outlined=${args.outlined}
        .selectedValue=${args.selectedValue}
        .iconUrls=${[tagUrl, listUrl]}
        .values=${args.values}
      ></${ENCHANTED_TOGGLE_BUTTON_TAG}>
    `;
  },
};

export default meta;
type Story = StoryObj<EnchantedToggleButtonProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {
    return html`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end;">
        <div>
          <div>Two Button (Off)</div>
          <${ENCHANTED_TOGGLE_BUTTON_TAG} .iconUrls=${[tagUrl, listUrl]} .values=${['on', 'off']} selectedValue="off"></${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </div>
        <div>
          <div>Two Button (On)</div>
          <${ENCHANTED_TOGGLE_BUTTON_TAG} .iconUrls=${[tagUrl, listUrl]} .values=${['on', 'off']} selectedValue="on"></${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </div>
        <div>
          <div>Single Button (Off)</div>
          <${ENCHANTED_TOGGLE_BUTTON_TAG} singleButton .icon=${svgClose} singleButtonTitle="Power" singleButtonAria="Power off" toggleOn="false"></${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </div>
        <div>
          <div>Single Button (On)</div>
          <${ENCHANTED_TOGGLE_BUTTON_TAG} singleButton .icon=${svgClose} singleButtonTitle="Power" singleButtonAria="Power on" toggleOn></${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </div>
        <div>
          <div>Single Button with Badge</div>
          <${ENCHANTED_TOGGLE_BUTTON_TAG} singleButton .icon=${svgClose} singleButtonTitle="Badge" showBadge toggleOn></${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </div>
        <div>
          <div>Disabled</div>
          <${ENCHANTED_TOGGLE_BUTTON_TAG} .iconUrls=${[tagUrl, listUrl]} .values=${['on', 'off']} selectedValue="off" disabled></${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </div>
      </div>
    `;
  },
};
