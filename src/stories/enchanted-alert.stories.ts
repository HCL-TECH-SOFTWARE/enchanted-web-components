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
import '../components/atomic-component/enchanted-alert';
import { ALERT_SEVERITY, ALERT_VARIANTS } from '../types/cssClassEnums';
import { ENCHANTED_ALERT_TAG } from '../components/tags';

const meta: Meta = {
  title: 'Feedback/enchanted-alert',
  component: 'enchanted-alert',
  tags: ['autodocs'],
  argTypes: {
    severity: {
      control: { type: 'radio' },
      options: [
        ALERT_SEVERITY.ALERT_INFO,
        ALERT_SEVERITY.ALERT_SUCCESS,
        ALERT_SEVERITY.ALERT_WARNING,
        ALERT_SEVERITY.ALERT_ERROR,
      ],
      description: 'Defines the severity level of the alert (info, success, warning, error)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ALERT_SEVERITY.ALERT_INFO },
      },
    },
    variant: {
      control: { type: 'radio' },
      options: [
        ALERT_VARIANTS.ALERT_CONTAINED,
        ALERT_VARIANTS.ALERT_OUTLINED,
      ],
      description: 'Defines the visual style variant (contained with background, or outlined)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ALERT_VARIANTS.ALERT_CONTAINED },
      },
    },
    message: {
      control: { type: 'text' },
      description: 'The message text to display in the alert',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    alertTitle: {
      control: { type: 'text' },
      description: 'Optional title text to display above the message',
      table: {
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    width: {
      control: { type: 'number', min: 100, max: 1000, step: 10 },
      description: 'Width of the alert in pixels',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '240' },
      },
    },
  },
  args: {
    severity: ALERT_SEVERITY.ALERT_INFO,
    variant: ALERT_VARIANTS.ALERT_CONTAINED,
    message: 'This is a enchanted-alert!',
    width: 240,
  },
  parameters: {
    docs: {
      description: {
        component: 'Alert component for displaying important messages to users with various severity levels. '
          + 'Supports two visual variants (contained and outlined) and four severity types (info, success, warning, error). '
          + 'Each severity level has a corresponding icon and color scheme.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<{ message: string; severity: string; variant: string; width: number; alertTitle?: string }>;

export const EnchantedAlert: Story = {
  render: (args) => {
    return html`
      <${ENCHANTED_ALERT_TAG}
        .message=${args.message} 
        .severity=${args.severity} 
        .variant=${args.variant}
        .width=${args.width}
        .alertTitle=${args.alertTitle}
      ></${ENCHANTED_ALERT_TAG}>
    `;
  },
  name: 'Default',
  parameters: {
    docs: {
      description: {
        story: 'Default alert with customizable severity, variant, message, and width. '
          + 'Try different severity levels to see the color schemes and icons change.',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => {return html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div><strong>Contained Variant</strong></div>
      <${ENCHANTED_ALERT_TAG} message="Info alert (contained)" severity="${ALERT_SEVERITY.ALERT_INFO}" variant="${ALERT_VARIANTS.ALERT_CONTAINED}"></${ENCHANTED_ALERT_TAG}>
      <${ENCHANTED_ALERT_TAG} message="Success alert (contained)" severity="${ALERT_SEVERITY.ALERT_SUCCESS}" variant="${ALERT_VARIANTS.ALERT_CONTAINED}"></${ENCHANTED_ALERT_TAG}>
      <${ENCHANTED_ALERT_TAG} message="Warning alert (contained)" severity="${ALERT_SEVERITY.ALERT_WARNING}" variant="${ALERT_VARIANTS.ALERT_CONTAINED}"></${ENCHANTED_ALERT_TAG}>
      <${ENCHANTED_ALERT_TAG} message="Error alert (contained)" severity="${ALERT_SEVERITY.ALERT_ERROR}" variant="${ALERT_VARIANTS.ALERT_CONTAINED}"></${ENCHANTED_ALERT_TAG}>
      <div style="margin-top: 24px;"><strong>Outlined Variant</strong></div>
      <${ENCHANTED_ALERT_TAG} message="Info alert (outlined)" severity="${ALERT_SEVERITY.ALERT_INFO}" variant="${ALERT_VARIANTS.ALERT_OUTLINED}"></${ENCHANTED_ALERT_TAG}>
      <${ENCHANTED_ALERT_TAG} message="Success alert (outlined)" severity="${ALERT_SEVERITY.ALERT_SUCCESS}" variant="${ALERT_VARIANTS.ALERT_OUTLINED}"></${ENCHANTED_ALERT_TAG}>
      <${ENCHANTED_ALERT_TAG} message="Warning alert (outlined)" severity="${ALERT_SEVERITY.ALERT_WARNING}" variant="${ALERT_VARIANTS.ALERT_OUTLINED}"></${ENCHANTED_ALERT_TAG}>
      <${ENCHANTED_ALERT_TAG} message="Error alert (outlined)" severity="${ALERT_SEVERITY.ALERT_ERROR}" variant="${ALERT_VARIANTS.ALERT_OUTLINED}"></${ENCHANTED_ALERT_TAG}>
      <div style="margin-top: 24px;"><strong>Alerts with Titles</strong></div>
      <${ENCHANTED_ALERT_TAG} 
        alertTitle="Information" 
        message="This alert includes a title to provide additional context" 
        severity="${ALERT_SEVERITY.ALERT_INFO}" 
        variant="${ALERT_VARIANTS.ALERT_CONTAINED}"
        width="400">
      </${ENCHANTED_ALERT_TAG}>
      <${ENCHANTED_ALERT_TAG} 
        alertTitle="Success" 
        message="Your changes have been saved successfully" 
        severity="${ALERT_SEVERITY.ALERT_SUCCESS}" 
        variant="${ALERT_VARIANTS.ALERT_CONTAINED}"
        width="400">
      </${ENCHANTED_ALERT_TAG}>
      <${ENCHANTED_ALERT_TAG} 
        alertTitle="Warning" 
        message="Please review your input before proceeding" 
        severity="${ALERT_SEVERITY.ALERT_WARNING}" 
        variant="${ALERT_VARIANTS.ALERT_OUTLINED}"
        width="400">
      </${ENCHANTED_ALERT_TAG}>
      <${ENCHANTED_ALERT_TAG} 
        alertTitle="Error" 
        message="An error occurred while processing your request" 
        severity="${ALERT_SEVERITY.ALERT_ERROR}" 
        variant="${ALERT_VARIANTS.ALERT_CONTAINED}"
        width="400">
      </${ENCHANTED_ALERT_TAG}>
    </div>
  `;},
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all severity levels (info, success, warning, error) in both contained and outlined variants. '
          + 'This demonstrates the complete range of alert styles available.',
      },
    },
  },
};
