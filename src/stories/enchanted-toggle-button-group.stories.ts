/* ======================================================================== *
 * Copyright 2026 HCL America Inc.                                          *
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
import '../components/atomic-component/enchanted-toggle-button-group';
import '../components/atomic-component/enchanted-badge';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/add';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/edit';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/delete';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/copy';

import { ENCHANTED_TOGGLE_BUTTON_GROUP_TAG, ENCHANTED_TOGGLE_BUTTON_TAG, generateIconTagName } from '../components/tags';

/**
 * Args that drive the Controls panel — kept JSON-serialisable (no TemplateResult).
 * Icons and items are built inside the render function so they are never serialised.
 */
interface EnchantedToggleButtonGroupStoryArgs {
  // Group-level props
  orientation: 'horizontal' | 'vertical';
  size: 'small' | 'large';
  disabled: boolean;
  selectedIndex: number;

  // Button 1 (Add) props
  button1AriaLabel: string;
  button1TooltipText: string;
  button1ShowBadge: boolean;
  button1Padding: boolean;
  button1IconSize: '16' | '20';

  // Button 2 (Edit) props
  button2AriaLabel: string;
  button2TooltipText: string;
  button2ShowBadge: boolean;
  button2Padding: boolean;
  button2IconSize: '16' | '20';

  // Button 3 (Delete) props
  button3AriaLabel: string;
  button3TooltipText: string;
  button3ShowBadge: boolean;
  button3Padding: boolean;
  button3IconSize: '16' | '20';
}

const meta: Meta<EnchantedToggleButtonGroupStoryArgs> = {
  title: 'Input/enchanted-toggle-button-group',
  tags: ['autodocs'],
  argTypes: {
    // ── Group ─────────────────────────────────────────────────
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Layout direction of the button group',
      table: { category: 'Group', defaultValue: { summary: 'horizontal' } },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
      description: 'Size applied to every button in the group',
      table: { category: 'Group', defaultValue: { summary: 'large' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable all buttons in the group',
      table: { category: 'Group', defaultValue: { summary: 'false' } },
    },
    selectedIndex: {
      control: 'number',
      description: 'Index of the currently selected button (0-based)',
      table: { category: 'Group', defaultValue: { summary: '0' } },
    },

    // ── Button 1 ──────────────────────────────────────────────
    button1AriaLabel: {
      control: 'text',
      description: 'Aria label for Button 1',
      table: { category: 'Button 1 (Add)', defaultValue: { summary: 'Add' } },
    },
    button1TooltipText: {
      control: 'text',
      description: 'Tooltip text for Button 1',
      table: { category: 'Button 1 (Add)', defaultValue: { summary: 'Add' } },
    },
    button1ShowBadge: {
      control: 'boolean',
      description: 'Show badge on Button 1',
      table: { category: 'Button 1 (Add)', defaultValue: { summary: 'false' } },
    },
    button1Padding: {
      control: 'boolean',
      description: 'Add extra padding inside Button 1',
      table: { category: 'Button 1 (Add)', defaultValue: { summary: 'false' } },
    },
    button1IconSize: {
      control: { type: 'select' },
      options: ['16', '20'],
      description: 'Icon size for Button 1',
      table: { category: 'Button 1 (Add)', defaultValue: { summary: '20' } },
    },

    // ── Button 2 ──────────────────────────────────────────────
    button2AriaLabel: {
      control: 'text',
      description: 'Aria label for Button 2',
      table: { category: 'Button 2 (Edit)', defaultValue: { summary: 'Edit' } },
    },
    button2TooltipText: {
      control: 'text',
      description: 'Tooltip text for Button 2',
      table: { category: 'Button 2 (Edit)', defaultValue: { summary: 'Edit' } },
    },
    button2ShowBadge: {
      control: 'boolean',
      description: 'Show badge on Button 2',
      table: { category: 'Button 2 (Edit)', defaultValue: { summary: 'false' } },
    },
    button2Padding: {
      control: 'boolean',
      description: 'Add extra padding inside Button 2',
      table: { category: 'Button 2 (Edit)', defaultValue: { summary: 'false' } },
    },
    button2IconSize: {
      control: { type: 'select' },
      options: ['16', '20'],
      description: 'Icon size for Button 2',
      table: { category: 'Button 2 (Edit)', defaultValue: { summary: '20' } },
    },

    // ── Button 3 ──────────────────────────────────────────────
    button3AriaLabel: {
      control: 'text',
      description: 'Aria label for Button 3',
      table: { category: 'Button 3 (Delete)', defaultValue: { summary: 'Delete' } },
    },
    button3TooltipText: {
      control: 'text',
      description: 'Tooltip text for Button 3',
      table: { category: 'Button 3 (Delete)', defaultValue: { summary: 'Delete' } },
    },
    button3ShowBadge: {
      control: 'boolean',
      description: 'Show badge on Button 3',
      table: { category: 'Button 3 (Delete)', defaultValue: { summary: 'true' } },
    },
    button3Padding: {
      control: 'boolean',
      description: 'Add extra padding inside Button 3',
      table: { category: 'Button 3 (Delete)', defaultValue: { summary: 'false' } },
    },
    button3IconSize: {
      control: { type: 'select' },
      options: ['16', '20'],
      description: 'Icon size for Button 3',
      table: { category: 'Button 3 (Delete)', defaultValue: { summary: '20' } },
    },
  },
  args: {
    orientation: 'horizontal',
    size: 'large',
    disabled: false,
    selectedIndex: 0,

    button1AriaLabel: 'Add',
    button1TooltipText: 'Add',
    button1ShowBadge: false,
    button1Padding: false,
    button1IconSize: '20',

    button2AriaLabel: 'Edit',
    button2TooltipText: 'Edit',
    button2ShowBadge: false,
    button2Padding: false,
    button2IconSize: '20',

    button3AriaLabel: 'Delete',
    button3TooltipText: 'Delete',
    button3ShowBadge: true,
    button3Padding: false,
    button3IconSize: '20',
  },

  render: (args) => {
    return html` 
        <${ENCHANTED_TOGGLE_BUTTON_GROUP_TAG}
          orientation=${args.orientation}
          size=${args.size}
          ?disabled=${args.disabled}
          .selectedIndex=${args.selectedIndex}
        >
          <${ENCHANTED_TOGGLE_BUTTON_TAG}
            .ariaLabel=${args.button1AriaLabel}
            tooltipText=${args.button1TooltipText}
            ?showBadge=${args.button1ShowBadge}
            ?padding=${args.button1Padding}
            .iconSize=${args.button1IconSize}
          >
            <${generateIconTagName('icon-add')} slot="icon"></${generateIconTagName('icon-add')}>
            ${args.button1ShowBadge ? html`<enchanted-badge slot="badge" badge="dot"></enchanted-badge>` : ''}
          </${ENCHANTED_TOGGLE_BUTTON_TAG}>
          <${ENCHANTED_TOGGLE_BUTTON_TAG}
            .ariaLabel=${args.button2AriaLabel}
            tooltipText=${args.button2TooltipText}
            ?showBadge=${args.button2ShowBadge}
            ?padding=${args.button2Padding}
            .iconSize=${args.button2IconSize}
          >
            <${generateIconTagName('icon-edit')} slot="icon"></${generateIconTagName('icon-edit')}>
            ${args.button2ShowBadge ? html`<enchanted-badge slot="badge" badge="dot"></enchanted-badge>` : ''}
          </${ENCHANTED_TOGGLE_BUTTON_TAG}>
          <${ENCHANTED_TOGGLE_BUTTON_TAG}
            .ariaLabel=${args.button3AriaLabel}
            tooltipText=${args.button3TooltipText}
            ?showBadge=${args.button3ShowBadge}
            ?padding=${args.button3Padding}
            .iconSize=${args.button3IconSize}
          >
            <${generateIconTagName('icon-delete')} slot="icon"></${generateIconTagName('icon-delete')}>
            ${args.button3ShowBadge ? html`<enchanted-badge slot="badge" badge="dot"></enchanted-badge>` : ''}
          </${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </${ENCHANTED_TOGGLE_BUTTON_GROUP_TAG}>
        `;
  },
};
export default meta;
type Story = StoryObj<EnchantedToggleButtonGroupStoryArgs>;

export const Default: Story = {};
export const AllStates: Story = {
  render: () => {
    return html`
        <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end; padding: 20px 24px 24px;">
          <${ENCHANTED_TOGGLE_BUTTON_GROUP_TAG} orientation="horizontal" size="large">
            <${ENCHANTED_TOGGLE_BUTTON_TAG} .ariaLabel=${"Add"} tooltipText="Add">
              <${generateIconTagName('icon-add')} slot="icon"></${generateIconTagName('icon-add')}>
            </${ENCHANTED_TOGGLE_BUTTON_TAG}>
            <${ENCHANTED_TOGGLE_BUTTON_TAG} .ariaLabel=${"Edit"} tooltipText="Edit">
              <${generateIconTagName('icon-edit')} slot="icon"></${generateIconTagName('icon-edit')}>
            </${ENCHANTED_TOGGLE_BUTTON_TAG}>
            <${ENCHANTED_TOGGLE_BUTTON_TAG} .ariaLabel=${"Delete"} tooltipText="Delete" showBadge>
              <${generateIconTagName('icon-delete')} slot="icon"></${generateIconTagName('icon-delete')}>
              <enchanted-badge slot="badge" badge="dot"></enchanted-badge>
            </${ENCHANTED_TOGGLE_BUTTON_TAG}>
          </${ENCHANTED_TOGGLE_BUTTON_GROUP_TAG}>

          <${ENCHANTED_TOGGLE_BUTTON_GROUP_TAG} orientation="horizontal" size="small" .selectedIndex=${1}>
            <${ENCHANTED_TOGGLE_BUTTON_TAG} .ariaLabel=${"Add"} tooltipText="Add">
              <${generateIconTagName('icon-add')} slot="icon"></${generateIconTagName('icon-add')}>
            </${ENCHANTED_TOGGLE_BUTTON_TAG}>
            <${ENCHANTED_TOGGLE_BUTTON_TAG} .ariaLabel=${"Edit"} tooltipText="Edit">
              <${generateIconTagName('icon-edit')} slot="icon"></${generateIconTagName('icon-edit')}>
            </${ENCHANTED_TOGGLE_BUTTON_TAG}>
            <${ENCHANTED_TOGGLE_BUTTON_TAG} .ariaLabel=${"Delete"} tooltipText="Delete" showBadge>
              <${generateIconTagName('icon-delete')} slot="icon"></${generateIconTagName('icon-delete')}>
              <enchanted-badge slot="badge" badge="dot"></enchanted-badge>
            </${ENCHANTED_TOGGLE_BUTTON_TAG}>
          </${ENCHANTED_TOGGLE_BUTTON_GROUP_TAG}>

          <${ENCHANTED_TOGGLE_BUTTON_GROUP_TAG} orientation="vertical" size="large" ?disabled=${true}>
            <${ENCHANTED_TOGGLE_BUTTON_TAG} .ariaLabel=${"Add"} tooltipText="Add">
              <${generateIconTagName('icon-add')} slot="icon"></${generateIconTagName('icon-add')}>
            </${ENCHANTED_TOGGLE_BUTTON_TAG}>
            <${ENCHANTED_TOGGLE_BUTTON_TAG} .ariaLabel=${"Edit"} tooltipText="Edit">
              <${generateIconTagName('icon-edit')} slot="icon"></${generateIconTagName('icon-edit')}>
            </${ENCHANTED_TOGGLE_BUTTON_TAG}>
            <${ENCHANTED_TOGGLE_BUTTON_TAG} .ariaLabel=${"Delete"} tooltipText="Delete" showBadge>
              <${generateIconTagName('icon-delete')} slot="icon"></${generateIconTagName('icon-delete')}>
              <enchanted-badge slot="badge" badge="dot"></enchanted-badge>
            </${ENCHANTED_TOGGLE_BUTTON_TAG}>
          </${ENCHANTED_TOGGLE_BUTTON_GROUP_TAG}>
        </div>
      `;
  },
};

