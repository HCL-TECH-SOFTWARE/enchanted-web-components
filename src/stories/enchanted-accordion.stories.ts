import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-accordion';

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
      <enchanted-accordion
        type=${args.type}
        ?showCheckbox=${args.showCheckbox}
        ?disabled=${args.disabled}
        ?showSecondaryText=${args.showSecondaryText}
        ?open=${args.open}
        .label=${args.label}
        .secondaryText=${args.secondaryText}
      >
        <div slot="accordion-items">Accordion content goes here.</div>
      </enchanted-accordion>
      <enchanted-accordion
        type=${args.type}
        ?showCheckbox=${args.showCheckbox}
        ?disabled=${args.disabled}
        ?showSecondaryText=${args.showSecondaryText}
        ?open=${args.open}
        .label=${args.label}
        .secondaryText=${args.secondaryText}
      >
        <div slot="accordion-items">Accordion content goes here.</div>
      </enchanted-accordion>
      <enchanted-accordion
        type=${args.type}
        ?showCheckbox=${args.showCheckbox}
        ?disabled=${args.disabled}
        ?showSecondaryText=${args.showSecondaryText}
        ?open=${args.open}
        .label=${args.label}
        .secondaryText=${args.secondaryText}
      >
        <div slot="accordion-items">Accordion content goes here.</div>
      </enchanted-accordion>
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
        <enchanted-accordion
          type="outlined"
          label="Outlined - Closed"
          ?open=${false}
        >
          <div slot="accordion-items">Content for outlined accordion.</div>
        </enchanted-accordion>
        <enchanted-accordion
          type="outlined"
          label="Outlined - Open"
          ?open=${true}
        >
          <div slot="accordion-items">Content for outlined accordion.</div>
        </enchanted-accordion>
        <enchanted-accordion
          type="outlined"
          label="Outlined - With Checkbox"
          ?showCheckbox=${true}
        >
          <div slot="accordion-items">Content with checkbox.</div>
        </enchanted-accordion>
        <enchanted-accordion
          type="outlined"
          label="Outlined - With Secondary Text"
          secondaryText="This is secondary text"
          ?showSecondaryText=${true}
        >
          <div slot="accordion-items">Content with secondary text.</div>
        </enchanted-accordion>
        <enchanted-accordion
          type="outlined"
          label="Outlined - Disabled"
          ?disabled=${true}
        >
          <div slot="accordion-items">Disabled accordion content.</div>
        </enchanted-accordion>

        <div style="margin-top: 24px;"><strong>No-Outline Type</strong></div>
        <enchanted-accordion
          type="no-outline"
          label="No-Outline - Closed"
          ?open=${false}
        >
          <div slot="accordion-items">Content for no-outline accordion.</div>
        </enchanted-accordion>
        <enchanted-accordion
          type="no-outline"
          label="No-Outline - Open"
          ?open=${true}
        >
          <div slot="accordion-items">Content for no-outline accordion.</div>
        </enchanted-accordion>
        <enchanted-accordion
          type="no-outline"
          label="No-Outline - With Checkbox"
          ?showCheckbox=${true}
        >
          <div slot="accordion-items">Content with checkbox.</div>
        </enchanted-accordion>
        <enchanted-accordion
          type="no-outline"
          label="No-Outline - With Secondary Text"
          secondaryText="This is secondary text"
          ?showSecondaryText=${true}
        >
          <div slot="accordion-items">Content with secondary text.</div>
        </enchanted-accordion>
        <enchanted-accordion
          type="no-outline"
          label="No-Outline - Disabled"
          ?disabled=${true}
        >
          <div slot="accordion-items">Disabled accordion content.</div>
        </enchanted-accordion>

        <div style="margin-top: 24px;"><strong>Combined Features</strong></div>
        <enchanted-accordion
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
        </enchanted-accordion>
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
