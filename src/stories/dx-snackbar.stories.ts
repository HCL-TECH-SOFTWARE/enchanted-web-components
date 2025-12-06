import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-snackbar';
import '../components/ac/dx-button';
import { SNACKBAR_TYPE } from '../types/cssClassEnums';

/**
 * @typedef DxSnackbarProps
 * Props for the dx-snackbar web component.
 *
 * @property message - The snackbar message text (supports HTML)
 * @property type - The snackbar visual type (info, success, warning, error, progress)
 */
export interface DxSnackbarProps {
  message?: string;
  type?: SNACKBAR_TYPE;
}

const meta: Meta<DxSnackbarProps> = {
  title: 'Feedback/dx-snackbar',
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
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: "''" } },
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
      <dx-snackbar
        message="${args.message}"
        .type="${args.type}"
      >
        <div slot="snackbar-buttons">
          <dx-button buttontext="Action" variant="text"></dx-button>
        </div>
      </dx-snackbar>
    `;
  },
};

export default meta;
type Story = StoryObj<DxSnackbarProps>;

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
          <dx-snackbar message="This is an informational message" type="${SNACKBAR_TYPE.SNACKBAR_INFO}"></dx-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Success Type</div>
          <dx-snackbar message="Operation completed successfully!" type="${SNACKBAR_TYPE.SNACKBAR_SUCCESS}"></dx-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Warning Type</div>
          <dx-snackbar message="Warning: Please review before proceeding" type="${SNACKBAR_TYPE.SNACKBAR_WARNING}"></dx-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Error Type</div>
          <dx-snackbar message="Error: Unable to complete the operation" type="${SNACKBAR_TYPE.SNACKBAR_ERROR}"></dx-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Progress Type</div>
          <dx-snackbar message="Processing your request..." type="${SNACKBAR_TYPE.SNACKBAR_PROGRESS}"></dx-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With Action Button</div>
          <dx-snackbar message="File deleted" type="${SNACKBAR_TYPE.SNACKBAR_INFO}">
            <div slot="snackbar-buttons">
              <dx-button buttontext="Undo" variant="text"></dx-button>
            </div>
          </dx-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With Multiple Buttons</div>
          <dx-snackbar message="Connection lost" type="${SNACKBAR_TYPE.SNACKBAR_ERROR}">
            <div slot="snackbar-buttons">
              <dx-button buttontext="Retry" variant="text"></dx-button>
              <dx-button buttontext="Dismiss" variant="text"></dx-button>
            </div>
          </dx-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With HTML Content</div>
          <dx-snackbar message="This is a <strong>bold</strong> message with <em>emphasis</em>.<br>It spans multiple lines." type="${SNACKBAR_TYPE.SNACKBAR_INFO}"></dx-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Long Message</div>
          <dx-snackbar message="This is a longer message that demonstrates how the snackbar handles extended text content. The component will wrap the text appropriately." 
            type="${SNACKBAR_TYPE.SNACKBAR_WARNING}"></dx-snackbar>
        </div>
      </div>
    `;
  },
};
