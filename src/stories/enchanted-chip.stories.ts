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
import '../components/atomic-component/enchanted-chip';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/checkmark';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/close';
import { createIconTagName, ENCHANTED_CHIP_TAG } from '../components/tags';

const meta: Meta = {
  title: 'Data display/enchanted-chip',
  component: 'enchanted-chip',
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'text' },
      description: 'The text label displayed on the chip. This is the primary content that identifies the chip.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
    count: {
      control: { type: 'number', min: 0, max: 99, step: 1 },
      description: 'The numeric count displayed on the chip when showChipCount is enabled. Useful for showing quantities, notifications, or item counts. Limited to 0-99.',
      table: { category: 'Content', type: { summary: 'number' }, defaultValue: { summary: '0' } },
    },
    showChipCount: {
      control: { type: 'boolean' },
      description: 'Controls visibility of the count badge. When enabled, displays the count value in a badge next to the chip name. RTL-aware positioning.',
      table: { category: 'Display', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    showAvatar: {
      control: { type: 'boolean' },
      description: 'Controls visibility of an avatar icon at the start of the chip. When enabled, displays a enchanted-avatar component with "avatar-icon" variant.',
      table: { category: 'Display', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    clearIcon: {
      control: { type: 'boolean' },
      description: 'Controls visibility of a clear/remove icon. When enabled, displays a slotted clear icon that can be used to remove or dismiss the chip.',
      table: { category: 'Display', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the chip, applying disabled styling and preventing interaction. Sets tabindex to -1 when true, making it non-focusable.',
      table: { category: 'State', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
  args: {
    name: 'Chip Name',
    count: 0,
    showChipCount: false,
    showAvatar: false,
    clearIcon: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        component: 'Chip component for displaying compact elements with optional avatar, count badge, and clear icon. ' +
          'Supports disabled state and RTL text direction. Commonly used for tags, filters, or selected items.'
      }
    }
  }
};export default meta;

type Story = StoryObj<{
  name: string;
  count: number;
  showChipCount: boolean;
  showAvatar: boolean;
  clearIcon: boolean;
  disabled: boolean;
}>;

export const EnchantedChip: Story = {
  render: (args) => {
    return html`
      <${ENCHANTED_CHIP_TAG}
        .name=${args.name}
        .count=${args.count}
        .icon=${html`<${createIconTagName('icon-checkmark')} size='16'></${createIconTagName('icon-checkmark')}>`}
        ?showChipCount=${args.showChipCount}
        ?showAvatar=${args.showAvatar}
        ?clearIcon=${args.clearIcon}
        ?disabled=${args.disabled}
      >
        <div slot="clear-icon">
          <${createIconTagName('icon-close')} size='16'></${createIconTagName('icon-close')}>
        </div>
      </${ENCHANTED_CHIP_TAG}>
    `;
  },
  name: 'Default',
};

export const AllStates: StoryObj = {
  render: () => {
    return html`
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div>
          <h3>Basic Chips</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <${ENCHANTED_CHIP_TAG} .name=${'Basic Chip'}></${ENCHANTED_CHIP_TAG}>
            <${ENCHANTED_CHIP_TAG} .name=${'With Count'} .count=${5} ?showChipCount=${true}></${ENCHANTED_CHIP_TAG}>
            <${ENCHANTED_CHIP_TAG} .name=${'High Count'} .count=${99} ?showChipCount=${true}></${ENCHANTED_CHIP_TAG}>
          </div>
        </div>

        <div>
          <h3>Chips with Avatar</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <${ENCHANTED_CHIP_TAG} .name=${'Avatar Chip'} .icon=${html`<${createIconTagName('icon-checkmark')} size='16'></${createIconTagName('icon-checkmark')}>`} ?showAvatar=${true}></${ENCHANTED_CHIP_TAG}>
            <${ENCHANTED_CHIP_TAG} .name=${'Avatar + Count'} .count=${12} .icon=${html`<${createIconTagName('icon-checkmark')} size='16'></${createIconTagName('icon-checkmark')}>`} ?showAvatar=${true} ?showChipCount=${true}></${ENCHANTED_CHIP_TAG}>
          </div>
        </div>

        <div>
          <h3>Chips with Clear Icon</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <${ENCHANTED_CHIP_TAG} .name=${'Clearable Chip'} ?clearIcon=${true}>
              <div slot="clear-icon"><${createIconTagName('icon-close')} size='16'></${createIconTagName('icon-close')}></div>
            </${ENCHANTED_CHIP_TAG}>
            <${ENCHANTED_CHIP_TAG} .name=${'Clear + Count'} .count=${8} ?clearIcon=${true} ?showChipCount=${true}>
              <div slot="clear-icon"><${createIconTagName('icon-close')} size='16'></${createIconTagName('icon-close')}></div>
            </${ENCHANTED_CHIP_TAG}>
            <${ENCHANTED_CHIP_TAG} .name=${'Clear + Avatar'} ?clearIcon=${true} .icon=${html`<${createIconTagName('icon-checkmark')} size='16'></${createIconTagName('icon-checkmark')}>`} ?showAvatar=${true}>
              <div slot="clear-icon"><${createIconTagName('icon-close')} size='16'></${createIconTagName('icon-close')}></div>
            </${ENCHANTED_CHIP_TAG}>
          </div>
        </div>

        <div>
          <h3>All Features Combined</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <${ENCHANTED_CHIP_TAG} .name=${'Full Featured'} .count=${25} .icon=${html`<${createIconTagName('icon-checkmark')} size='16'></${createIconTagName('icon-checkmark')}>`} ?showAvatar=${true} ?showChipCount=${true} ?clearIcon=${true}>
              <div slot="clear-icon"><${createIconTagName('icon-close')} size='16'></${createIconTagName('icon-close')}></div>
            </${ENCHANTED_CHIP_TAG}>
          </div>
        </div>

        <div>
          <h3>Disabled States</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <${ENCHANTED_CHIP_TAG} .name=${'Disabled Basic'} ?disabled=${true}></${ENCHANTED_CHIP_TAG}>
            <${ENCHANTED_CHIP_TAG} .name=${'Disabled + Count'} .count=${7} ?disabled=${true} ?showChipCount=${true}></${ENCHANTED_CHIP_TAG}>
            <${ENCHANTED_CHIP_TAG} .name=${'Disabled + Avatar'} .icon=${html`<${createIconTagName('icon-checkmark')} size='16'></${createIconTagName('icon-checkmark')}>`} ?disabled=${true} ?showAvatar=${true}></${ENCHANTED_CHIP_TAG}>
            <${ENCHANTED_CHIP_TAG} .name=${'Disabled + Clear'} ?disabled=${true} ?clearIcon=${true}>
              <div slot="clear-icon"><${createIconTagName('icon-close')} size='16'></${createIconTagName('icon-close')}></div>
            </${ENCHANTED_CHIP_TAG}>
            <${ENCHANTED_CHIP_TAG}
              .name=${'Disabled Full'}
              .count=${42}
              .icon=${html`<${createIconTagName('icon-checkmark')} size='16'></${createIconTagName('icon-checkmark')}>`}
              ?disabled=${true}
              ?showAvatar=${true}
              ?showChipCount=${true}
              ?clearIcon=${true}
            >
              <div slot="clear-icon"><${createIconTagName('icon-close')} size='16'></${createIconTagName('icon-close')}></div>
            </${ENCHANTED_CHIP_TAG}>
          </div>
        </div>

        <div>
          <h3>Long Text Handling</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <${ENCHANTED_CHIP_TAG} .name=${'This is a chip with a very long name that might need handling'}></${ENCHANTED_CHIP_TAG}>
            <${ENCHANTED_CHIP_TAG}
              .name=${'Long Name with Features'}
              .count=${99}
              .icon=${html`<${createIconTagName('icon-checkmark')} size='16'></${createIconTagName('icon-checkmark')}>`}
              ?showAvatar=${true}
              ?showChipCount=${true}
              ?clearIcon=${true}
            >
              <div slot="clear-icon"><${createIconTagName('icon-close')} size='16'></${createIconTagName('icon-close')}></div>
            </${ENCHANTED_CHIP_TAG}>
          </div>
        </div>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all chip states and feature combinations. Demonstrates basic chips, chips with counts, ' +
          'avatars, clear icons, disabled states, and combinations of all features. Includes edge cases like high counts (99) and long text.'
      }
    },
    controls: { disable: true },
  },
};
