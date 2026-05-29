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
import '../components/atomic-component/enchanted-accordion';
import { ENCHANTED_ACCORDION_SUMMARY_TAG, ENCHANTED_ACCORDION_TAG } from '../components/tags';

const meta: Meta = {
  title: 'Navigation/enchanted-accordion',
  component: 'enchanted-accordion',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['outlined', 'no-outline'],
      description: 'Defines the accordion style type',
      table: {
        type: { summary: 'outlined | no-outline' },
        defaultValue: { summary: 'outlined' },
      },
    },
    showCheckbox: {
      control: { type: 'boolean' },
      description: 'Controls the visibility of a checkbox in the accordion header',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the accordion, preventing user interaction',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showSecondaryText: {
      control: { type: 'boolean' },
      description: 'Controls the visibility of secondary text below the label',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    open: {
      control: { type: 'boolean' },
      description: 'Controls whether the accordion is expanded or collapsed',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: { type: 'text' },
      description: 'Main label text displayed in the accordion header',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    secondaryText: {
      control: { type: 'text' },
      description: 'Secondary text displayed below the label (when showSecondaryText is true)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    type: 'outlined',
    showCheckbox: false,
    disabled: false,
    showSecondaryText: false,
    open: false,
    label: 'Accordion label',
    secondaryText: 'Secondary text',
  },
  parameters: {
    docs: {
      description: {
        component: 'An accordion component that allows collapsible content sections with support for '
          + 'checkboxes, secondary text, and multiple visual styles. Supports both LTR and RTL layouts. '
          + 'The accordion can be toggled by clicking on the label area or the arrow icon.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<{
  type: 'outlined' | 'no-outline';
  showCheckbox: boolean;
  disabled: boolean;
  showSecondaryText: boolean;
  open: boolean;
  label: string;
  secondaryText: string;
}>;

export const EnchantedAccordion: Story = {
  render: (args) => {
    return html`
      <${ENCHANTED_ACCORDION_TAG}
        type=${args.type}
        ?showCheckbox=${args.showCheckbox}
        ?disabled=${args.disabled}
        ?showSecondaryText=${args.showSecondaryText}
        ?open=${args.open}
        .label=${args.label}
        .secondaryText=${args.secondaryText}
      >
        <div slot="accordion-items">Accordion content goes here.</div>
        <${ENCHANTED_ACCORDION_SUMMARY_TAG}
          slot="accordion-items"
          label="security settings"
          secondaryText="Security settings description"
        ></${ENCHANTED_ACCORDION_SUMMARY_TAG}>
      </${ENCHANTED_ACCORDION_TAG}>
      <${ENCHANTED_ACCORDION_TAG}
        type=${args.type}
        ?showCheckbox=${args.showCheckbox}
        ?disabled=${args.disabled}
        ?showSecondaryText=${args.showSecondaryText}
        ?open=${args.open}
        .label=${args.label}
        .secondaryText=${args.secondaryText}
      >
        <div slot="accordion-items">Accordion content goes here.</div>
      </${ENCHANTED_ACCORDION_TAG}>
      <${ENCHANTED_ACCORDION_TAG}
        type=${args.type}
        ?showCheckbox=${args.showCheckbox}
        ?disabled=${args.disabled}
        ?showSecondaryText=${args.showSecondaryText}
        ?open=${args.open}
        .label=${args.label}
        .secondaryText=${args.secondaryText}
      >
        <div slot="accordion-items">Accordion content goes here.</div>
      </${ENCHANTED_ACCORDION_TAG}>
    `;
  },
  name: 'Default',
  parameters: {
    docs: {
      description: {
        story: 'Default accordion with customizable properties. Toggle open/closed state, add checkboxes, '
          + 'and display secondary text. Try different combinations of the controls to see how the component behaves.',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => {
    return html`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div><strong>Outlined Type</strong></div>
        <${ENCHANTED_ACCORDION_TAG}
          type="outlined"
          label="Outlined - Closed"
          ?open=${false}
        >
          <div slot="accordion-items">Content for outlined accordion.</div>
        </${ENCHANTED_ACCORDION_TAG}>
        <${ENCHANTED_ACCORDION_TAG}
          type="outlined"
          label="Outlined - Open"
          ?open=${true}
        >
          <div slot="accordion-items">Content for outlined accordion.</div>
        </${ENCHANTED_ACCORDION_TAG}>
        <${ENCHANTED_ACCORDION_TAG}
          type="outlined"
          label="Outlined - With Checkbox"
          ?showCheckbox=${true}
        >
          <div slot="accordion-items">Content with checkbox.</div>
        </${ENCHANTED_ACCORDION_TAG}>
        <${ENCHANTED_ACCORDION_TAG}
          type="outlined"
          label="Outlined - With Secondary Text"
          secondaryText="This is secondary text"
          ?showSecondaryText=${true}
        >
          <div slot="accordion-items">Content with secondary text.</div>
        </${ENCHANTED_ACCORDION_TAG}>
        <${ENCHANTED_ACCORDION_TAG}
          type="outlined"
          label="Outlined - Disabled"
          ?disabled=${true}
        >
          <div slot="accordion-items">Disabled accordion content.</div>
        </${ENCHANTED_ACCORDION_TAG}>

        <div style="margin-top: 24px;"><strong>No-Outline Type</strong></div>
        <${ENCHANTED_ACCORDION_TAG}
          type="no-outline"
          label="No-Outline - Closed"
          ?open=${false}
        >
          <div slot="accordion-items">Content for no-outline accordion.</div>
        </${ENCHANTED_ACCORDION_TAG}>
        <${ENCHANTED_ACCORDION_TAG}
          type="no-outline"
          label="No-Outline - Open"
          ?open=${true}
        >
          <div slot="accordion-items">Content for no-outline accordion.</div>
        </${ENCHANTED_ACCORDION_TAG}>
        <${ENCHANTED_ACCORDION_TAG}
          type="no-outline"
          label="No-Outline - With Checkbox"
          ?showCheckbox=${true}
        >
          <div slot="accordion-items">Content with checkbox.</div>
        </${ENCHANTED_ACCORDION_TAG}>
        <${ENCHANTED_ACCORDION_TAG}
          type="no-outline"
          label="No-Outline - With Secondary Text"
          secondaryText="This is secondary text"
          ?showSecondaryText=${true}
        >
          <div slot="accordion-items">Content with secondary text.</div>
        </${ENCHANTED_ACCORDION_TAG}>
        <${ENCHANTED_ACCORDION_TAG}
          type="no-outline"
          label="No-Outline - Disabled"
          ?disabled=${true}
        >
          <div slot="accordion-items">Disabled accordion content.</div>
        </${ENCHANTED_ACCORDION_TAG}>

        <div style="margin-top: 24px;"><strong>Combined Features</strong></div>
        <${ENCHANTED_ACCORDION_TAG}
          type="outlined"
          label="All Features Combined"
          secondaryText="With checkbox and secondary text"
          ?showCheckbox=${true}
          ?showSecondaryText=${true}
          ?open=${true}
        >
          <div slot="accordion-items">
            This accordion demonstrates all features: outlined type, checkbox, secondary text, and open state.
          </div>
        </${ENCHANTED_ACCORDION_TAG}>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all accordion states and variations including both types (outlined and no-outline), '
          + 'open/closed states, with checkboxes, secondary text, disabled state, and combined features. '
          + 'This demonstrates the complete range of accordion configurations available.',
      },
    },
  },
};
