import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-input-textfield';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/close';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/search';

/**
 * @interface DxInputTextfieldProps
 * Props for the dx-input-textfield web component.
 *
 * @property value - The value of the textfield.
 * @property type - The input type (e.g., 'text', 'password', 'email', 'number').
 * @property label - The label for the textfield.
 * @property placeholder - The placeholder text for the textfield.
 * @property disabled - If true, disables the textfield.
 * @property clearIcon - The TemplateResult for the clear icon.
 * @property actionIcon - The TemplateResult for the action icon.
 * @property field - Field type or name for the input textfield.
 * @property hassearchedbefore - If true, indicates a search has been performed.
 * @property autocomplete - Autocomplete attribute value ('on' or 'off').
 * @property ariaLabel - ARIA label for accessibility.
 */
export interface DxInputTextfieldProps {
  value?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  clearIcon?: unknown;
  actionIcon?: unknown;
  field?: string;
  hassearchedbefore?: boolean;
  autocomplete?: string;
  ariaLabel?: string;
}

const meta: Meta<DxInputTextfieldProps> = {
  title: 'Input/dx-input-textfield',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Input Textfield component provides a standard text input with label, placeholder, and optional clear/action icons. It supports various HTML5 input ' +
          'types (text, password, email, number), autocomplete behavior, and RTL text direction. Use for single-line text entry in forms, search fields, and data input ' +
          'interfaces.',
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'text' },
      description: 'Current value of the textfield. Can be set programmatically or updated by user input. Binds to the underlying input element value.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
    label: {
      control: { type: 'text' },
      description: 'Label text displayed above the textfield. Provides context about the expected input. Properly associated with the input for accessibility.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: undefined } },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text shown when the field is empty. Provides hints about the expected format or example input. Disappears when user starts typing.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
    type: {
      control: { type: 'text' },
      description: 'HTML5 input type attribute. Common values: text, password, email, number, tel, url. Controls input validation and mobile keyboard display.',
      table: { category: 'Form', type: { summary: 'string' }, defaultValue: { summary: 'text' } },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the textfield, preventing user input and interaction. The field appears grayed out and does not accept focus or keyboard input.',
      table: { category: 'State', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    clearIcon: {
      control: { type: 'object' },
      description: 'The TemplateResult for the clear icon.',
      table: { defaultValue: { summary: 'TemplateResult' } } },
    },
    actionIcon: {
      control: { type: 'object' },
      description: 'The TemplateResult for the action icon.',
      table: { defaultValue: { summary: 'TemplateResult' } } },
    },
    field: {
      control: { type: 'text' },
      description: 'Field type or name identifier for the input textfield. Used for form processing, validation, or programmatic field identification.',
      table: { category: 'Form', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
    hassearchedbefore: {
      control: { type: 'boolean' },
      description: 'Indicates whether a search has been performed before. Used to track search state in search field implementations.',
      table: { category: 'State', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    autocomplete: {
      control: { type: 'text' },
      description: 'HTML autocomplete attribute. Controls browser autocomplete behavior. Common values: "on", "off", "email", "username", "new-password".',
      table: { category: 'Form', type: { summary: 'string' }, defaultValue: { summary: 'on' } },
    },
    ariaLabel: {
      control: { type: 'text' },
      description: 'ARIA label for accessibility. Provides descriptive text for screen readers when the visible label is insufficient or needs clarification.',
      table: { category: 'Accessibility', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
  },
  args: {
    value: '',
    type: 'text',
    label: 'Text Field',
    placeholder: 'Enter text',
    disabled: false,
    clearIcon: html`<icon-close size="16" color="black"></icon-close>`,
    actionIcon: html`<icon-search size="16" color="black"></icon-search>`,
    field: '',
    hassearchedbefore: false,
    autocomplete: 'on',
    ariaLabel: '',
  },
  render: (args) => {return html`
    <dx-input-textfield
      .value=${args.value}
      type="${args.type}"
      label="${args.label}"
      placeholder="${args.placeholder}"
      ?disabled=${args.disabled}
      .clearIcon=${args.clearIconUrl}
      .actionIcon=${args.actionIconUrl}
      field="${args.field}"
      ?hassearchedbefore=${args.hassearchedbefore}
      autocomplete="${args.autocomplete}"
      aria-label="${args.ariaLabel}"
    ></dx-input-textfield>
  `;},
};

export default meta;
type Story = StoryObj<DxInputTextfieldProps>;

export const Default: Story = {};

export const AllStates: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Comprehensive showcase of all input textfield states and variations:\n\n' +
          '**Input Types:** Supports HTML5 types like text, password, email, and number with appropriate validation and mobile keyboard optimization.\n\n' +
          '**Icons:** Optional clear icon for quick value clearing and action icon for operations like search or submit.\n\n' +
          '**States:** Includes empty, filled, disabled, and various placeholder configurations.\n\n' +
          '**Features:** Autocomplete control, RTL support, and full accessibility with ARIA labels.',
      },
    },
  },
  render: () => {
    return html`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Default (Empty)</div>
          <dx-input-textfield
            label="Text Field"
            placeholder="Enter text"
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Value</div>
          <dx-input-textfield
            label="Text Field"
            .value=${'Sample text'}
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Placeholder</div>
          <dx-input-textfield
            label="Username"
            placeholder="Enter your username"
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Password Type</div>
          <dx-input-textfield
            label="Password"
            type="password"
            placeholder="Enter password"
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Email Type</div>
          <dx-input-textfield
            label="Email"
            type="email"
            placeholder="name@example.com"
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Number Type</div>
          <dx-input-textfield
            label="Age"
            type="number"
            placeholder="Enter age"
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Clear Icon</div>
          <dx-input-textfield
            label="Search"
            .value=${'Search query'}
            .clearIcon=${html`<icon-close size="16" color="black"></icon-close>`}
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Action Icon</div>
          <dx-input-textfield
            label="Search"
            placeholder="Search..."
            .actionIcon=${html`<icon-search size="16" color="black"></icon-search>`}
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Both Icons</div>
          <dx-input-textfield
            label="Search Field"
            .value=${'Search term'}
            .clearIcon=${html`<icon-close size="16" color="black"></icon-close>`}
            .actionIcon=${html`<icon-search size="16" color="black"></icon-search>`}
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled (Empty)</div>
          <dx-input-textfield
            label="Text Field"
            placeholder="Disabled"
            ?disabled=${true}
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled (Filled)</div>
          <dx-input-textfield
            label="Text Field"
            .value=${'Disabled value'}
            ?disabled=${true}
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Autocomplete Off</div>
          <dx-input-textfield
            label="Credit Card"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            autocomplete="off"
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With ARIA Label</div>
          <dx-input-textfield
            label="Search"
            placeholder="Type to search"
            aria-label="Search products in catalog"
            .actionIconUrl=${html`<icon-search size="16" color="black"></icon-search>`}
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Long Placeholder</div>
          <dx-input-textfield
            label="Description"
            placeholder="Enter a detailed description of your item"
          ></dx-input-textfield>
        </div>
      </div>
    `;
  },
};
