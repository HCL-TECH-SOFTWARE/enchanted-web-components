import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-select';

/**
 * @interface EnchantedInputSelectProps
 * Props for the enchanted-select web component.
 *
 * @property label - The label for the select input.
 * @property disabled - If true, disables the select input.
 * @property selectedValue - The selected value.
 * @property selectedId - The selected option ID.
 * @property placeholder - The placeholder text for the select input.
 * @property alwaysShowPlaceholder - If true, always show the placeholder.
 * @property options - The select options as an array of OptionData or strings.
 * @property field - Field type or name for the input select.
 * @property hiddenLabel - If true, hides the label visually but keeps it for accessibility.
 * @property hiddenIcon - If true, hides the dropdown icon.
 * @property showRemoveLabel - If true, shows a remove/clear label.
 * @property ariaLabel - ARIA label for accessibility.
 */
export interface EnchantedInputSelectProps {
  label?: string;
  disabled?: boolean;
  selectedValue?: string;
  selectedId?: string;
  placeholder?: string;
  alwaysShowPlaceholder?: boolean;
  options?: string[] | { id?: string; name?: string; value?: string }[];
  field?: string;
  hiddenLabel?: boolean;
  hiddenIcon?: boolean;
  showRemoveLabel?: boolean;
  ariaLabel?: string;
}

const meta: Meta<EnchantedInputSelectProps> = {
  title: 'Input/enchanted-select',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Input Select component provides a dropdown selection interface with keyboard navigation and accessibility support. It accepts options as strings or ' +
          'structured objects with id/name/value properties, supports placeholder text, and offers customization through hidden labels and icons. Use for single-choice ' +
          'selections in forms or filter interfaces.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label text displayed above the select input. Provides context about the selection purpose. Can be visually hidden while maintaining accessibility.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text shown when no option is selected. Use alwaysShowPlaceholder to keep it visible even after selection for additional context.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    options: {
      control: { type: 'object' },
      description: 'Array of selectable options. Can be simple strings or objects with id, name, and value properties. Objects provide better control for complex selections.',
      table: { category: 'Content', type: { summary: 'string[] | OptionData[]' }, defaultValue: { summary: '[]' } },
    },
    selectedValue: {
      control: { type: 'text' },
      description: 'Currently selected value. Matches against option value or name in object arrays, or directly against string options. Controls the selected state.',
      table: { category: 'State', type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    selectedId: {
      control: { type: 'text' },
      description: 'ID of the currently selected option. Automatically set when using object-based options with id properties. Alternative to selectedValue.',
      table: { category: 'State', type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the select input, preventing user interaction. The dropdown cannot be opened and the selection cannot be changed.',
      table: { category: 'State', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    alwaysShowPlaceholder: {
      control: { type: 'boolean' },
      description: 'Keeps placeholder visible even after selection. Useful for showing additional context or instructions alongside the selected value.',
      table: { category: 'Display', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    hiddenLabel: {
      control: { type: 'boolean' },
      description: 'Visually hides the label while maintaining it for screen readers. Use when the select purpose is clear from surrounding context.',
      table: { category: 'Display', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    hiddenIcon: {
      control: { type: 'boolean' },
      description: 'Hides the dropdown caret icon. Use for custom styling or when the dropdown affordance is provided through other visual means.',
      table: { category: 'Display', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    showRemoveLabel: {
      control: { type: 'boolean' },
      description: 'Shows a remove/clear option in the dropdown. Allows users to deselect the current choice and return to the empty state.',
      table: { category: 'Display', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    field: {
      control: { type: 'text' },
      description: 'Field type or name identifier for the input select. Used for form processing or programmatic field identification.',
      table: { category: 'Form', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
    ariaLabel: {
      control: { type: 'text' },
      description: 'ARIA label for accessibility. Provides descriptive text for screen readers when the visible label is insufficient or hidden.',
      table: { category: 'Accessibility', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
  },
  args: {
    label: 'Select an option',
    disabled: false,
    selectedValue: '',
    selectedId: undefined,
    placeholder: 'Choose...',
    alwaysShowPlaceholder: false,
    options: [
      { id: '1', name: 'Option 1', value: '1' },
      { id: '2', name: 'Option 2', value: '2' },
      { id: '3', name: 'Option 3', value: '3' },
    ],
    field: '',
    hiddenLabel: false,
    hiddenIcon: false,
    showRemoveLabel: false,
    ariaLabel: '',
  },
  render: (args) => {return html`
    <enchanted-select
      label="${args.label}"
      ?disabled=${args.disabled}
      .selectedValue=${args.selectedValue}
      .selectedId=${args.selectedId}
      placeholder="${args.placeholder}"
      ?alwaysShowPlaceholder=${args.alwaysShowPlaceholder}
      .options=${args.options}
      field="${args.field}"
      ?hiddenLabel=${args.hiddenLabel}
      ?hiddenIcon=${args.hiddenIcon}
      ?showRemoveLabel=${args.showRemoveLabel}
      ariaLabel="${args.ariaLabel}"
    ></enchanted-select>
  `;},
};

export default meta;
type Story = StoryObj<EnchantedInputSelectProps>;

export const Default: Story = {};

export const AllStates: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Comprehensive showcase of all input select states and variations:\n\n' +
          '**Options:** Supports both string arrays and structured objects with id/name/value properties for flexible data handling.\n\n' +
          '**States:** Includes default, disabled, selected, and placeholder states with various display configurations.\n\n' +
          '**Customization:** Hidden labels and icons for compact layouts, persistent placeholders, and optional remove/clear functionality.\n\n' +
          '**Accessibility:** Full keyboard navigation support with proper ARIA labels and hidden label options.',
      },
    },
  },
  render: () => {
    return html`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Default</div>
          <enchanted-select
            label="Select an option"
            .options=${[
              { id: '1', name: 'Option 1', value: '1' },
              { id: '2', name: 'Option 2', value: '2' },
              { id: '3', name: 'Option 3', value: '3' },
            ]}
          ></enchanted-select>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Placeholder</div>
          <enchanted-select
            label="Select an option"
            placeholder="Pick one..."
            .options=${[
              { id: '1', name: 'Option 1', value: '1' },
              { id: '2', name: 'Option 2', value: '2' },
              { id: '3', name: 'Option 3', value: '3' },
            ]}
          ></enchanted-select>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Selected Value</div>
          <enchanted-select
            label="Select an option"
            .selectedValue="2"
            .options=${[
              { id: '1', name: 'Option 1', value: '1' },
              { id: '2', name: 'Option 2', value: '2' },
              { id: '3', name: 'Option 3', value: '3' },
            ]}
          ></enchanted-select>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Always Show Placeholder</div>
          <enchanted-select
            label="Select an option"
            placeholder="Choose one"
            .selectedValue="2"
            ?alwaysShowPlaceholder=${true}
            .options=${[
              { id: '1', name: 'Option 1', value: '1' },
              { id: '2', name: 'Option 2', value: '2' },
              { id: '3', name: 'Option 3', value: '3' },
            ]}
          ></enchanted-select>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled</div>
          <enchanted-select
            label="Select an option"
            .options=${[
              { id: '1', name: 'Option 1', value: '1' },
              { id: '2', name: 'Option 2', value: '2' },
              { id: '3', name: 'Option 3', value: '3' },
            ]}
            ?disabled=${true}
          ></enchanted-select>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled with Value</div>
          <enchanted-select
            label="Select an option"
            .selectedValue="2"
            .options=${[
              { id: '1', name: 'Option 1', value: '1' },
              { id: '2', name: 'Option 2', value: '2' },
              { id: '3', name: 'Option 3', value: '3' },
            ]}
            ?disabled=${true}
          ></enchanted-select>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Hidden Label</div>
          <enchanted-select
            label="Select an option"
            ?hiddenLabel=${true}
            placeholder="Hidden label example"
            .options=${[
              { id: '1', name: 'Option 1', value: '1' },
              { id: '2', name: 'Option 2', value: '2' },
              { id: '3', name: 'Option 3', value: '3' },
            ]}
          ></enchanted-select>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Hidden Icon</div>
          <enchanted-select
            label="Select an option"
            ?hiddenIcon=${true}
            .options=${[
              { id: '1', name: 'Option 1', value: '1' },
              { id: '2', name: 'Option 2', value: '2' },
              { id: '3', name: 'Option 3', value: '3' },
            ]}
          ></enchanted-select>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Remove Label</div>
          <enchanted-select
            label="Select an option"
            .selectedValue="2"
            ?showRemoveLabel=${true}
            .options=${[
              { id: '1', name: 'Option 1', value: '1' },
              { id: '2', name: 'Option 2', value: '2' },
              { id: '3', name: 'Option 3', value: '3' },
            ]}
          ></enchanted-select>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">String Options</div>
          <enchanted-select
            label="Select a fruit"
            .options=${['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']}
          ></enchanted-select>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With ARIA Label</div>
          <enchanted-select
            label="Select country"
            ariaLabel="Country selection dropdown"
            .options=${[
              { id: 'us', name: 'United States', value: 'us' },
              { id: 'ca', name: 'Canada', value: 'ca' },
              { id: 'mx', name: 'Mexico', value: 'mx' },
            ]}
          ></enchanted-select>
        </div>
      </div>
    `;
  },
};
