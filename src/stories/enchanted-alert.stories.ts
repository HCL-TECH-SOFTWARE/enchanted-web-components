import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-alert';
import { ALERT_SEVERITY, ALERT_VARIANTS } from '../types/cssClassEnums';

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

type Story = StoryObj<{ message: string; severity: string; variant: string; width: number }>;

export const EnchantedAlert: Story = {
  render: (args) => {
    return html`
      <enchanted-alert 
        .message=${args.message} 
        .severity=${args.severity} 
        .variant=${args.variant}
        .width=${args.width}
      ></enchanted-alert>
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
      <enchanted-alert message="Info alert (contained)" severity="${ALERT_SEVERITY.ALERT_INFO}" variant="${ALERT_VARIANTS.ALERT_CONTAINED}"></enchanted-alert>
      <enchanted-alert message="Success alert (contained)" severity="${ALERT_SEVERITY.ALERT_SUCCESS}" variant="${ALERT_VARIANTS.ALERT_CONTAINED}"></enchanted-alert>
      <enchanted-alert message="Warning alert (contained)" severity="${ALERT_SEVERITY.ALERT_WARNING}" variant="${ALERT_VARIANTS.ALERT_CONTAINED}"></enchanted-alert>
      <enchanted-alert message="Error alert (contained)" severity="${ALERT_SEVERITY.ALERT_ERROR}" variant="${ALERT_VARIANTS.ALERT_CONTAINED}"></enchanted-alert>
      <div style="margin-top: 24px;"><strong>Outlined Variant</strong></div>
      <enchanted-alert message="Info alert (outlined)" severity="${ALERT_SEVERITY.ALERT_INFO}" variant="${ALERT_VARIANTS.ALERT_OUTLINED}"></enchanted-alert>
      <enchanted-alert message="Success alert (outlined)" severity="${ALERT_SEVERITY.ALERT_SUCCESS}" variant="${ALERT_VARIANTS.ALERT_OUTLINED}"></enchanted-alert>
      <enchanted-alert message="Warning alert (outlined)" severity="${ALERT_SEVERITY.ALERT_WARNING}" variant="${ALERT_VARIANTS.ALERT_OUTLINED}"></enchanted-alert>
      <enchanted-alert message="Error alert (outlined)" severity="${ALERT_SEVERITY.ALERT_ERROR}" variant="${ALERT_VARIANTS.ALERT_OUTLINED}"></enchanted-alert>
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
