import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-switch';

/**
 * @typedef EnchantedSwitchProps
 * Props for the enchanted-switch web component.
 *
 * @property isChecked - Whether the switch is in the checked/on state
 * @property isDisabled - Whether the switch is disabled (non-interactive)
 */
export interface EnchantedSwitchProps {
  isChecked?: boolean;
  isDisabled?: boolean;
}

const meta: Meta<EnchantedSwitchProps> = {
  title: 'Input/enchanted-switch',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Switch component provides a toggle control for binary on/off or true/false states. It supports keyboard navigation (Enter/Space keys), dispatches ' +
          'change events with the checked state, and includes disabled styling. Use switches for immediate actions like enabling/disabling features, where the change takes ' +
          'effect instantly without requiring a save or submit action.',
      },
    },
  },
  argTypes: {
    isChecked: {
      control: { type: 'boolean' },
      description: 'Controls the checked/on state of the switch. When true, the switch is in the on position. Dispatches a change event when toggled.',
      table: { category: 'State', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    isDisabled: {
      control: { type: 'boolean' },
      description: 'Disables the switch, preventing user interaction. The switch cannot be toggled and appears grayed out. Does not respond to clicks or keyboard input.',
      table: { category: 'State', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
  args: {
    isChecked: false,
    isDisabled: false,
  },
  render: (args) => {
    return html`
      <enchanted-switch
        ?isChecked=${args.isChecked}
        ?isDisabled=${args.isDisabled}
      ></enchanted-switch>
    `;
  },
};

export default meta;
type Story = StoryObj<EnchantedSwitchProps>;

export const Default: Story = {};

export const AllStates: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Comprehensive showcase of all switch states and variations:\n\n' +
          '**States:** Demonstrates all four possible state combinations - unchecked, checked, disabled unchecked, and disabled checked.\n\n' +
          '**Interaction:** Active switches respond to clicks and keyboard input (Enter/Space keys). Disabled switches show non-interactive visual styling.\n\n' +
          '**Events:** Toggleable switches dispatch change events with the new isChecked state, enabling reactive behavior in applications.',
      },
    },
  },
  render: () => {
    return html`
      <div style="display: flex; gap: 48px; flex-wrap: wrap; align-items: center;">
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Unchecked (Off)</div>
          <enchanted-switch></enchanted-switch>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Checked (On)</div>
          <enchanted-switch ?isChecked=${true}></enchanted-switch>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled (Off)</div>
          <enchanted-switch ?isDisabled=${true}></enchanted-switch>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled (On)</div>
          <enchanted-switch ?isChecked=${true} ?isDisabled=${true}></enchanted-switch>
        </div>
      </div>
    `;
  },
};
