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
import '../components/atomic-component/enchanted-snackbar';
import '../components/atomic-component/enchanted-button';
import { SNACKBAR_TYPE } from '../types/cssClassEnums';
import { ENCHANTED_BUTTON_TAG, ENCHANTED_SNACKBAR_TAG } from '../components/tags';

/**
 * @typedef EnchantedSnackbarProps
 * Props for the enchanted-snackbar web component.
 *
 * @property message - The snackbar message text (supports HTML)
 * @property type - The snackbar visual type (info, success, warning, error, progress)
 */
export interface EnchantedSnackbarProps {
  message?: string;
  type?: SNACKBAR_TYPE;
}

const meta: Meta<EnchantedSnackbarProps> = {
  title: 'Feedback/enchanted-snackbar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Snackbar component displays brief, temporary messages or notifications at the bottom of the screen. It supports five visual types (info, success, ' +
          'warning, error, progress) with corresponding icons, accepts HTML content in messages, and can include action buttons via slots. Use snackbars for non-critical ' +
          'feedback that doesn\'t require immediate user action.',
      },
    },
  },
  argTypes: {
    message: {
      control: { type: 'text' },
      description: 'Message text displayed in the snackbar. Supports HTML formatting including bold text, line breaks, and other inline elements for rich content display.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
    type: {
      control: { type: 'select' },
      options: [
        SNACKBAR_TYPE.SNACKBAR_INFO,
        SNACKBAR_TYPE.SNACKBAR_SUCCESS,
        SNACKBAR_TYPE.SNACKBAR_WARNING,
        SNACKBAR_TYPE.SNACKBAR_ERROR,
        SNACKBAR_TYPE.SNACKBAR_PROGRESS,
      ],
      description: 'Visual type of the snackbar. Determines the icon and color scheme: info (information), success (checkmark), warning (alert), error (warning), or ' +
        'progress (circular spinner).',
      table: { category: 'Display', type: { summary: 'SNACKBAR_TYPE' }, defaultValue: { summary: SNACKBAR_TYPE.SNACKBAR_INFO } },
    },
  },
  args: {
    message: 'Sample snackbar message',
    type: SNACKBAR_TYPE.SNACKBAR_INFO,
  },
  render: (args) => {
    return html`
      <${ENCHANTED_SNACKBAR_TAG}
        message="${args.message}"
        .type="${args.type}"
      >
        <div slot="snackbar-buttons">
          <${ENCHANTED_BUTTON_TAG} buttontext="Action" variant="text"></${ENCHANTED_BUTTON_TAG}>
        </div>
      </${ENCHANTED_SNACKBAR_TAG}>
    `;
  },
};

export default meta;
type Story = StoryObj<EnchantedSnackbarProps>;

export const Default: Story = {};

export const AllStates: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Comprehensive showcase of all snackbar types and variations:\n\n' +
          '**Visual Types:** Five distinct types with corresponding icons - info (information icon), success (checkmark), warning (alert icon), error (warning icon), and ' +
          'progress (circular spinner).\n\n' +
          '**Action Buttons:** Snackbars can include action buttons using the snackbar-buttons slot for interactions like "Undo" or "Retry".\n\n' +
          '**HTML Content:** Messages support HTML formatting for rich content including bold text, links, and line breaks.',
      },
    },
  },
  render: () => {
    return html`
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Info Type</div>
          <${ENCHANTED_SNACKBAR_TAG} message="This is an informational message" type="${SNACKBAR_TYPE.SNACKBAR_INFO}"></${ENCHANTED_SNACKBAR_TAG}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Success Type</div>
          <${ENCHANTED_SNACKBAR_TAG} message="Operation completed successfully!" type="${SNACKBAR_TYPE.SNACKBAR_SUCCESS}"></${ENCHANTED_SNACKBAR_TAG}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Warning Type</div>
          <${ENCHANTED_SNACKBAR_TAG} message="Warning: Please review before proceeding" type="${SNACKBAR_TYPE.SNACKBAR_WARNING}"></${ENCHANTED_SNACKBAR_TAG}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Error Type</div>
          <${ENCHANTED_SNACKBAR_TAG} message="Error: Unable to complete the operation" type="${SNACKBAR_TYPE.SNACKBAR_ERROR}"></${ENCHANTED_SNACKBAR_TAG}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Progress Type</div>
          <${ENCHANTED_SNACKBAR_TAG} message="Processing your request..." type="${SNACKBAR_TYPE.SNACKBAR_PROGRESS}"></${ENCHANTED_SNACKBAR_TAG}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With Action Button</div>
          <${ENCHANTED_SNACKBAR_TAG} message="File deleted" type="${SNACKBAR_TYPE.SNACKBAR_INFO}">
            <div slot="snackbar-buttons">
              <${ENCHANTED_BUTTON_TAG} buttontext="Undo" variant="text"></${ENCHANTED_BUTTON_TAG}>
            </div>
          </${ENCHANTED_SNACKBAR_TAG}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With Multiple Buttons</div>
          <${ENCHANTED_SNACKBAR_TAG} message="Connection lost" type="${SNACKBAR_TYPE.SNACKBAR_ERROR}">
            <div slot="snackbar-buttons">
              <${ENCHANTED_BUTTON_TAG} buttontext="Retry" variant="text"></${ENCHANTED_BUTTON_TAG}>
              <${ENCHANTED_BUTTON_TAG} buttontext="Dismiss" variant="text"></${ENCHANTED_BUTTON_TAG}>
            </div>
          </${ENCHANTED_SNACKBAR_TAG}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With HTML Content</div>
          <${ENCHANTED_SNACKBAR_TAG} message="This is a <strong>bold</strong> message with <em>emphasis</em>.<br>It spans multiple lines." type="${SNACKBAR_TYPE.SNACKBAR_INFO}">
          </${ENCHANTED_SNACKBAR_TAG}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Long Message</div>
          <${ENCHANTED_SNACKBAR_TAG} message="This is a longer message that demonstrates how the snackbar handles extended text content. The component will wrap the text appropriately." 
            type="${SNACKBAR_TYPE.SNACKBAR_WARNING}"></${ENCHANTED_SNACKBAR_TAG}>
        </div>
      </div>
    `;
  },
};
