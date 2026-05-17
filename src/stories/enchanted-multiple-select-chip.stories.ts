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
import '../components/atomic-component/enchanted-multiple-select-chip';
import { ENCHANTED_MULTIPLE_SELECT_CHIP_TAG } from '../components/tags';

/**
 * @typedef OptionData
 * @property id - Unique id for the option
 * @property name - Display name
 * @property value - Value
 */
export interface OptionData {
  id: string;
  name: string;
  value: string;
}

/**
 * @interface EnchantedMultipleSelectChipProps
 * Props for the enchanted-multiple-select-chip web component.
 *
 * @property options - Available selectable options
 * @property selectedValues - Currently selected options
 * @property label - Label text for the input field
 * @property placeholder - Placeholder text when empty
 * @property disabled - Disables the entire component
 * @property showHelperText - Shows the helper text below input
 * @property helperText - Helper text content
 * @property showRemoveLabel - Shows remove label on chips
 * @property emptyOptions - Indicates empty options state
 * @property clearIcon - Shows clear all icon
 * @property customWidth - Custom width value
 * @property name - Form field name attribute
 * @property field - Field type configuration
 */
export interface EnchantedMultipleSelectChipProps {
  options?: OptionData[];
  selectedValues?: OptionData[];
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  showHelperText?: boolean;
  helperText?: string;
  showRemoveLabel?: boolean;
  emptyOptions?: boolean;
  clearIcon?: boolean;
  customWidth?: string;
  name?: string;
  field?: string;
}

const OPTIONS: OptionData[] = [
  { id: 'apple', name: 'Apple', value: 'apple' },
  { id: 'banana', name: 'Banana', value: 'banana' },
  { id: 'cherry', name: 'Cherry', value: 'cherry' },
  { id: 'date', name: 'Date', value: 'date' },
];

const meta: Meta<EnchantedMultipleSelectChipProps> = {
  title: 'Input/enchanted-multiple-select-chip',
  component: 'enchanted-multiple-select-chip',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Multiple Select Chip component allows users to select multiple options from a dropdown menu, displaying selections as removable chips. Features ' +
          'include search/filter, clear all functionality, helper text, error states, and custom styling. Use this component for multi-selection scenarios like tags, ' +
          'categories, or filtering where visual representation of selections is important.',
      },
    },
  },
  argTypes: {
    options: {
      control: { type: 'object' },
      description: 'Array of available options for selection. Each option should have id, name, and value properties. Options populate the dropdown menu.',
      table: { category: 'Content', type: { summary: 'OptionData[]' }, defaultValue: { summary: '[]' } },
    },
    selectedValues: {
      control: { type: 'object' },
      description: 'Array of currently selected options displayed as chips. Each selection appears as a removable chip above the input field.',
      table: { category: 'State', type: { summary: 'OptionData[]' }, defaultValue: { summary: '[]' } },
    },
    label: {
      control: { type: 'text' },
      description: 'Label text displayed above the input field. Provides context for what users are selecting. Uses localized default if not specified.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: 'localized' } },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text shown in the input when empty. Guides users on what to select. Uses localized default if not specified.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: 'localized' } },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the entire component including input field, chips, and all interactions. Visual styling indicates disabled state.',
      table: { category: 'State', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    showHelperText: {
      control: { type: 'boolean' },
      description: 'Shows helper text below the input field. Must be true for helperText to display. Used for instructions or error messages.',
      table: { category: 'Display', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text content displayed below input when showHelperText is true. Provides guidance, hints, or validation feedback.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
    showRemoveLabel: {
      control: { type: 'boolean' },
      description: 'Shows accessible remove label on chip close buttons. Improves accessibility by providing text description for screen readers.',
      table: { category: 'Accessibility', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    emptyOptions: {
      control: { type: 'boolean' },
      description: 'Indicates empty options state. When true, displays appropriate empty state messaging instead of the dropdown list.',
      table: { category: 'State', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    clearIcon: {
      control: { type: 'boolean' },
      description: 'Shows clear all icon button when selections exist. Allows users to quickly remove all selected chips with one click.',
      table: { category: 'Display', type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    customWidth: {
      control: { type: 'number' },
      description: 'Custom width value for the component. Can be specified in pixels or other CSS units. Overrides default width behavior.',
      table: { category: 'Styling', type: { summary: 'number' }, defaultValue: { summary: '240' } },
    },
    name: {
      control: { type: 'text' },
      description: 'Form field name attribute. Used for form submission and identification. Defaults to "multiple-select" if not specified.',
      table: { category: 'Form', type: { summary: 'string' }, defaultValue: { summary: 'multiple-select' } },
    },
    field: {
      control: { type: 'text' },
      description: 'Field type configuration string. Used for specialized field behavior or styling based on usage context.',
      table: { category: 'Form', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
  },
  args: {
    options: OPTIONS,
    selectedValues: [],
    label: 'Fruits',
    placeholder: 'Select fruits',
    disabled: false,
    showHelperText: false,
    helperText: '',
    showRemoveLabel: false,
    emptyOptions: false,
    clearIcon: true,
    customWidth: '',
    name: 'multiple-select',
    field: '',
  },
};

export default meta;

type Story = StoryObj<EnchantedMultipleSelectChipProps>;

export const EnchantedMultipleSelectChipStory: Story = {
  name: 'Default',
  render: (args) => {
    return html`
      <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
        .options=${args.options}
        .selectedValues=${args.selectedValues}
        label="${args.label}"
        placeholder="${args.placeholder}"
        ?disabled=${args.disabled}
        ?showHelperText=${args.showHelperText}
        helperText="${args.helperText}"
        ?showRemoveLabel=${args.showRemoveLabel}
        ?emptyOptions=${args.emptyOptions}
        ?clearIcon=${args.clearIcon}
        customWidth="${args.customWidth}"
        name="${args.name}"
        field="${args.field}"
      ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
    `;
  },
};

/**
 * Comprehensive showcase of all multiple-select-chip states and configurations.
 * Demonstrates various selection states, validation, helper text, and customization options.
 */
export const AllStates: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    return html`
      <style>
        .select-container {
          display: flex;
          flex-direction: column;
          gap: 32px;
          padding: 20px;
          max-width: 600px;
        }
        .select-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .select-section h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
        }
        .select-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .select-label {
          font-size: 12px;
          color: #666;
        }
      </style>

      <div class="select-container">
        <!-- Default States -->
        <div class="select-section">
          <h3>Default States</h3>
          <div class="select-item">
            <span class="select-label">No selections</span>
            <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=${OPTIONS}
              .selectedValues=${[]}
              label="Fruits"
              placeholder="Select fruits"
            ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
          <div class="select-item">
            <span class="select-label">Single selection</span>
            <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=${OPTIONS}
              .selectedValues=${[OPTIONS[0]]}
              label="Fruits"
              placeholder="Select fruits"
            ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
          <div class="select-item">
            <span class="select-label">Multiple selections (2 chips)</span>
            <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=${OPTIONS}
              .selectedValues=${[OPTIONS[0], OPTIONS[1]]}
              label="Fruits"
              placeholder="Select fruits"
            ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
          <div class="select-item">
            <span class="select-label">All items selected (4 chips)</span>
            <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=${OPTIONS}
              .selectedValues=${OPTIONS}
              label="Fruits"
              placeholder="Select fruits"
            ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="select-section">
          <h3>Disabled State</h3>
          <div class="select-item">
            <span class="select-label">Disabled with selections</span>
            <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=${OPTIONS}
              .selectedValues=${[OPTIONS[0], OPTIONS[2]]}
              label="Fruits (Disabled)"
              placeholder="Select fruits"
              ?disabled=${true}
            ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
          <div class="select-item">
            <span class="select-label">Disabled without selections</span>
            <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=${OPTIONS}
              .selectedValues=${[]}
              label="Fruits (Disabled)"
              placeholder="Select fruits"
              ?disabled=${true}
            ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
        </div>

        <!-- Helper Text -->
        <div class="select-section">
          <h3>Helper Text</h3>
          <div class="select-item">
            <span class="select-label">With informational helper text</span>
            <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=${OPTIONS}
              .selectedValues=${[OPTIONS[0]]}
              label="Fruits"
              placeholder="Select fruits"
              ?showHelperText=${true}
              helperText="You can select multiple fruits from the list"
            ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
          <div class="select-item">
            <span class="select-label">With instructional helper text</span>
            <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=${OPTIONS}
              .selectedValues=${[OPTIONS[1], OPTIONS[2]]}
              label="Fruits"
              placeholder="Select fruits"
              ?showHelperText=${true}
              helperText="Selected fruits will be used for the recipe"
            ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
        </div>

        <!-- Clear Icon -->
        <div class="select-section">
          <h3>Clear Icon Options</h3>
          <div class="select-item">
            <span class="select-label">With clear icon (default)</span>
            <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=${OPTIONS}
              .selectedValues=${[OPTIONS[0], OPTIONS[1], OPTIONS[2]]}
              label="Fruits"
              placeholder="Select fruits"
              ?clearIcon=${true}
            ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
          <div class="select-item">
            <span class="select-label">Without clear icon</span>
            <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=${OPTIONS}
              .selectedValues=${[OPTIONS[0], OPTIONS[1]]}
              label="Fruits"
              placeholder="Select fruits"
              ?clearIcon=${false}
            ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
        </div>

        <!-- Remove Label -->
        <div class="select-section">
          <h3>Remove Label (Accessibility)</h3>
          <div class="select-item">
            <span class="select-label">With remove label for screen readers</span>
            <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=${OPTIONS}
              .selectedValues=${[OPTIONS[0], OPTIONS[2]]}
              label="Fruits"
              placeholder="Select fruits"
              ?showRemoveLabel=${true}
            ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
        </div>

        <!-- Empty Options -->
        <div class="select-section">
          <h3>Empty Options State</h3>
          <div class="select-item">
            <span class="select-label">No options available</span>
            <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=${[]}
              .selectedValues=${[]}
              label="Fruits"
              placeholder="No options available"
              ?emptyOptions=${true}
            ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
        </div>

        <!-- Custom Width -->
        <div class="select-section">
          <h3>Custom Width</h3>
          <div class="select-item">
            <span class="select-label">Width: 200px</span>
            <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=${OPTIONS}
              .selectedValues=${[OPTIONS[1]]}
              label="Fruits"
              placeholder="Select fruits"
              customWidth="200"
            ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
          <div class="select-item">
            <span class="select-label">Width: 400px</span>
            <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=${OPTIONS}
              .selectedValues=${[OPTIONS[0], OPTIONS[2]]}
              label="Fruits"
              placeholder="Select fruits"
              customWidth="400"
            ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
          <div class="select-item">
            <span class="select-label">Width: 500px</span>
            <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=${OPTIONS}
              .selectedValues=${[OPTIONS[1], OPTIONS[3]]}
              label="Fruits"
              placeholder="Select fruits"
              customWidth="500"
            ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
        </div>

        <!-- Form Fields -->
        <div class="select-section">
          <h3>Form Field Configuration</h3>
          <div class="select-item">
            <span class="select-label">Custom name attribute</span>
            <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=${OPTIONS}
              .selectedValues=${[OPTIONS[0]]}
              label="Fruits"
              placeholder="Select fruits"
              name="fruit-selection"
            ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
          <div class="select-item">
            <span class="select-label">With field type configuration</span>
            <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=${OPTIONS}
              .selectedValues=${[OPTIONS[1], OPTIONS[2]]}
              label="Fruits"
              placeholder="Select fruits"
              name="fruits"
              field="tags"
            ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
        </div>

        <!-- Combined States -->
        <div class="select-section">
          <h3>Combined States</h3>
          <div class="select-item">
            <span class="select-label">Error with multiple selections and helper text</span>
            <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=${OPTIONS}
              .selectedValues=${[OPTIONS[0], OPTIONS[1], OPTIONS[2], OPTIONS[3]]}
              label="Fruits"
              placeholder="Select fruits"
              ?error=${true}
              ?showHelperText=${true}
              helperText="Too many fruits selected. Maximum is 3."
              customWidth="350"
            ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
          <div class="select-item">
            <span class="select-label">Full-featured: custom width, helper text, remove label, clear icon</span>
            <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=${OPTIONS}
              .selectedValues=${[OPTIONS[1], OPTIONS[3]]}
              label="Favorite Fruits"
              placeholder="Choose your favorites"
              ?showHelperText=${true}
              helperText="Select fruits you enjoy eating"
              ?showRemoveLabel=${true}
              ?clearIcon=${true}
              customWidth="380"
              name="favorite-fruits"
            ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
        </div>
      </div>
    `;
  },
};
