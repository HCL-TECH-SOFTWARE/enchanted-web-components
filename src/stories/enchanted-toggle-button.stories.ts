import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-toggle-button';
import '../components/atomic-component/enchanted-badge';
import '../components/atomic-component/enchanted-icon-button';
// Icon imports
import tagUrl from '../_tests_/assets/tag.svg';
import listUrl from '../_tests_/assets/list.svg';
import { svgClose } from '../_tests_/assets/svg-close';

/**
 * @typedef EnchantedToggleButtonProps
 * Props for the enchanted-toggle-button web component.
 *
 * @property singleButton - Single button mode
 * @property toggleOn - Toggle state for single button
 * @property showBadge - Show badge on single button
 * @property disabled - Disabled state
 * @property outlined - Outlined style
 * @property selectedValue - Selected value for two-button mode
 * @property iconUrls - Icon URLs for two-button mode
 * @property values - Values for two-button mode
 * @property singleButtonTitle - Title for single button
 * @property singleButtonAria - Aria label for single button
 * @property icon - Icon template for single button
 */
export interface EnchantedToggleButtonProps {
  singleButton?: boolean;
  toggleOn?: boolean;
  showBadge?: boolean;
  disabled?: boolean;
  outlined?: boolean;
  selectedValue?: string;
  iconUrls?: string[];
  values?: string[];
  singleButtonTitle?: string;
  singleButtonAria?: string;
  icon?: unknown;
}


const meta: Meta<EnchantedToggleButtonProps> = {
  title: 'Input/enchanted-toggle-button',
  tags: ['autodocs'],
  argTypes: {
    singleButton: { control: 'boolean', description: 'Single button mode', table: { defaultValue: { summary: 'false' } } },
    toggleOn: { control: 'boolean', description: 'Toggle state (single button)', table: { defaultValue: { summary: 'false' } } },
    showBadge: { control: 'boolean', description: 'Show badge (single button)', table: { defaultValue: { summary: 'false' } } },
    disabled: { control: 'boolean', description: 'Disabled', table: { defaultValue: { summary: 'false' } } },
    outlined: { control: 'boolean', description: 'Outlined', table: { defaultValue: { summary: 'false' } } },
    selectedValue: { control: 'text', description: 'Selected value (two-button mode)', table: { defaultValue: { summary: '' } } },
    iconUrls: { control: 'object', description: 'Icon URLs (two-button mode)', table: { defaultValue: { summary: '[...]' } } },
    values: { control: 'object', description: 'Values (two-button mode)', table: { defaultValue: { summary: '[...]' } } },
    singleButtonTitle: { control: 'text', description: 'Single button title', table: { defaultValue: { summary: '' } } },
    singleButtonAria: { control: 'text', description: 'Single button aria-label', table: { defaultValue: { summary: '' } } },
    icon: { control: false, description: 'Icon template (single button)', table: { defaultValue: { summary: 'svg' } } },
  },
  args: {
    singleButton: false,
    toggleOn: false,
    showBadge: false,
    disabled: false,
    outlined: false,
    selectedValue: '',
    iconUrls: [],
    values: ['on', 'off'],
    singleButtonTitle: 'Toggle',
    singleButtonAria: 'Toggle',
    icon: '',
  },
  render: (args) => {
    return html`
      <enchanted-toggle-button
        ?toggleOn=${args.toggleOn}
        ?disabled=${args.disabled}
        ?outlined=${args.outlined}
        .selectedValue=${args.selectedValue}
        .iconUrls=${[tagUrl, listUrl]}
        .values=${args.values}
      ></enchanted-toggle-button>
    `;
  },
};

export default meta;
type Story = StoryObj<EnchantedToggleButtonProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {
    return html`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end;">
        <div>
          <div>Two Button (Off)</div>
          <enchanted-toggle-button .iconUrls=${[tagUrl, listUrl]} .values=${['on', 'off']} selectedValue="off"></enchanted-toggle-button>
        </div>
        <div>
          <div>Two Button (On)</div>
          <enchanted-toggle-button .iconUrls=${[tagUrl, listUrl]} .values=${['on', 'off']} selectedValue="on"></enchanted-toggle-button>
        </div>
        <div>
          <div>Single Button (Off)</div>
          <enchanted-toggle-button singleButton .icon=${svgClose} singleButtonTitle="Power" singleButtonAria="Power off" toggleOn="false"></enchanted-toggle-button>
        </div>
        <div>
          <div>Single Button (On)</div>
          <enchanted-toggle-button singleButton .icon=${svgClose} singleButtonTitle="Power" singleButtonAria="Power on" toggleOn></enchanted-toggle-button>
        </div>
        <div>
          <div>Single Button with Badge</div>
          <enchanted-toggle-button singleButton .icon=${svgClose} singleButtonTitle="Badge" showBadge toggleOn></enchanted-toggle-button>
        </div>
        <div>
          <div>Disabled</div>
          <enchanted-toggle-button .iconUrls=${[tagUrl, listUrl]} .values=${['on', 'off']} selectedValue="off" disabled></enchanted-toggle-button>
        </div>
      </div>
    `;
  },
};
