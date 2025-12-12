import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-datepicker';
import { DEFAULT_CALENDAR_LOCALE } from '../types/enchanted-datepicker';

const meta: Meta = {
  title: 'Input/enchanted-datepicker',
  component: 'enchanted-datepicker',
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'text' },
      description: 'Name of the datepicker input field. Used for form submission and identification. Associates the datepicker with form data when submitted.',
      table: { category: 'Form', type: { summary: 'string' }, defaultValue: { summary: 'datepicker' } },
    },
    label: {
      control: { type: 'text' },
      description: 'Label text displayed above the datepicker input field. Provides context and identifies the purpose of the date input.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: 'Label' } },
    },
    field: {
      control: { type: 'text' },
      description: 'Field identifier for the datepicker. Can be used for tracking, validation, or form field mapping purposes.',
      table: { category: 'Form', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
    helperIconTooltip: {
      control: { type: 'text' },
      description: 'Tooltip text shown when hovering over the helper icon next to the label. Provides additional context or instructions for using the datepicker.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: 'Label helper tooltip' } },
    },
    locale: {
      control: { type: 'radio' },
      options: ['en', 'fr', 'de', 'es', 'it', 'zh', 'ja'],
      description: 'Calendar locale setting for date formatting and localized month/day names. Supports English, French, German, Spanish, Italian, Chinese, and Japanese.',
      table: { category: 'Localization', type: { summary: 'string' }, defaultValue: { summary: DEFAULT_CALENDAR_LOCALE } },
    },
    value: {
      control: { type: 'number' },
      description: 'Unix timestamp in milliseconds representing the selected date. Use 0 for no selection. Allows programmatic control of the selected date value.',
      table: { category: 'State', type: { summary: 'number' }, defaultValue: { summary: '0' } },
    },
    showInputAction: {
      control: { type: 'boolean' },
      description: 'Shows or hides the input action element associated with the label. When enabled, displays additional action UI near the label area.',
      table: { category: 'Display', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    requiredField: {
      control: { type: 'boolean' },
      description: 'Marks the datepicker as a required form field. When enabled, displays a required asterisk indicator next to the label.',
      table: { category: 'Validation', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    open: {
      control: { type: 'boolean' },
      description: 'Controls initial open state of the calendar popup. When true, calendar displays on mount. Useful for programmatic control or default-open behavior.',
      table: { category: 'State', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    hideHelperText: {
      control: { type: 'boolean' },
      description: 'Hides the helper text area below the input field. When enabled, removes space reserved for validation messages and helper text.',
      table: { category: 'Display', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    showRemoveLabel: {
      control: { type: 'boolean' },
      description: 'Shows or hides the remove/clear button for the selected date. When enabled, displays a close icon to clear the current date selection.',
      table: { category: 'Display', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the datepicker input and calendar interaction. When disabled, prevents user input and applies disabled styling to indicate non-interactive state.',
      table: { category: 'State', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
  args: {
    name: 'datepicker',
    label: 'Label',
    field: '',
    helperIconTooltip: 'Label helper tooltip',
    locale: DEFAULT_CALENDAR_LOCALE,
    value: 0,
    showInputAction: false,
    requiredField: false,
    open: false,
    hideHelperText: false,
    showRemoveLabel: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        component: 'Datepicker component for selecting dates with a calendar popup interface. ' +
          'Features localized calendar views, date formatting, keyboard navigation, and form integration. ' +
          'Supports multiple locales, required field validation, helper text, and programmatic date control via Unix timestamps. ' +
          'Includes accessibility features and customizable display options.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<{
  name: string;
  label: string;
  field: string;
  helperIconTooltip: string;
  locale: string;
  value: number;
  showInputAction: boolean;
  requiredField: boolean;
  open: boolean;
  hideHelperText: boolean;
  showRemoveLabel: boolean;
  disabled: boolean;
}>;

export const EnchantedDatepicker: Story = {
  render: (args) => {
    return html`
      <enchanted-datepicker
        .name=${args.name}
        .label=${args.label}
        .field=${args.field}
        .helperIconTooltip=${args.helperIconTooltip}
        .locale=${args.locale}
        .value=${args.value}
        ?showInputAction=${args.showInputAction}
        ?requiredField=${args.requiredField}
        ?open=${args.open}
        ?hideHelperText=${args.hideHelperText}
        ?showRemoveLabel=${args.showRemoveLabel}
        ?disabled=${args.disabled}
      ></enchanted-datepicker>
    `;
  },
  name: 'Default'
};

export const AllStates: StoryObj = {
  render: () => {
    // Pre-selected date: January 15, 2025
    const selectedDate = new Date(2025, 0, 15).getTime();
    
    return html`
      <div style="display: flex; flex-direction: column; gap: 40px; padding: 20px;">
        <div>
          <h3 style="margin-top: 0;">Basic States</h3>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
            <enchanted-datepicker .label=${'Default Datepicker'} .name=${'datepicker-1'}></enchanted-datepicker>
            <enchanted-datepicker .label=${'With Selected Date'} .name=${'datepicker-2'} .value=${selectedDate}></enchanted-datepicker>
            <enchanted-datepicker .label=${'Required Field'} .name=${'datepicker-3'} ?requiredField=${true}></enchanted-datepicker>
            <enchanted-datepicker .label=${'With Remove Button'} .name=${'datepicker-4'} .value=${selectedDate} ?showRemoveLabel=${true}></enchanted-datepicker>
          </div>
        </div>

        <div>
          <h3 style="margin-top: 0;">Display Variations</h3>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
            <enchanted-datepicker .label=${'With Input Action'} .name=${'datepicker-5'} ?showInputAction=${true}></enchanted-datepicker>
            <enchanted-datepicker .label=${'Hidden Helper Text'} .name=${'datepicker-6'} ?hideHelperText=${true}></enchanted-datepicker>
            <enchanted-datepicker .label=${'With Tooltip'} .name=${'datepicker-7'} .helperIconTooltip=${'This is a helpful tooltip message'}></enchanted-datepicker>
            <enchanted-datepicker .label=${'Custom Field ID'} .name=${'datepicker-8'} .field=${'custom-field-id'}></enchanted-datepicker>
          </div>
        </div>

        <div>
          <h3 style="margin-top: 0;">Disabled State</h3>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
            <enchanted-datepicker .label=${'Disabled Empty'} .name=${'datepicker-9'} ?disabled=${true}></enchanted-datepicker>
            <enchanted-datepicker .label=${'Disabled with Date'} .name=${'datepicker-10'} .value=${selectedDate} ?disabled=${true}></enchanted-datepicker>
          </div>
        </div>

        <div>
          <h3 style="margin-top: 0;">Locales</h3>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
            <enchanted-datepicker .label=${'English (en)'} .name=${'datepicker-11'} .locale=${'en'} .value=${selectedDate}></enchanted-datepicker>
            <enchanted-datepicker .label=${'French (fr)'} .name=${'datepicker-12'} .locale=${'fr'} .value=${selectedDate}></enchanted-datepicker>
            <enchanted-datepicker .label=${'German (de)'} .name=${'datepicker-13'} .locale=${'de'} .value=${selectedDate}></enchanted-datepicker>
            <enchanted-datepicker .label=${'Spanish (es)'} .name=${'datepicker-14'} .locale=${'es'} .value=${selectedDate}></enchanted-datepicker>
            <enchanted-datepicker .label=${'Italian (it)'} .name=${'datepicker-15'} .locale=${'it'} .value=${selectedDate}></enchanted-datepicker>
            <enchanted-datepicker .label=${'Chinese (zh)'} .name=${'datepicker-16'} .locale=${'zh'} .value=${selectedDate}></enchanted-datepicker>
            <enchanted-datepicker .label=${'Japanese (ja)'} .name=${'datepicker-17'} .locale=${'ja'} .value=${selectedDate}></enchanted-datepicker>
          </div>
        </div>

        <div>
          <h3 style="margin-top: 0;">Combined Features</h3>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
            <enchanted-datepicker
              .label=${'Full Featured'}
              .name=${'datepicker-18'}
              .value=${selectedDate}
              ?requiredField=${true}
              ?showInputAction=${true}
              ?showRemoveLabel=${true}
            ></enchanted-datepicker>
            <enchanted-datepicker
              .label=${'Minimal Display'}
              .name=${'datepicker-19'}
              ?hideHelperText=${true}
            ></enchanted-datepicker>
          </div>
        </div>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all datepicker states and configurations. Demonstrates basic states (default, selected, required), ' +
          'display variations (input action, hidden helper text, tooltips), disabled states, all 7 supported locales (en, fr, de, es, it, zh, ja), ' +
          'and combined feature scenarios. Total of 19 datepicker configurations showing the full range of component capabilities.'
      }
    },
    controls: { disable: true },
  },
};
