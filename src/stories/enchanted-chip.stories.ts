import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-chip';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/checkmark';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/close';

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
      <enchanted-chip
        .name=${args.name}
        .count=${args.count}
        .icon=${html`<icon-checkmark size='16'></icon-checkmark>`}
        ?showChipCount=${args.showChipCount}
        ?showAvatar=${args.showAvatar}
        ?clearIcon=${args.clearIcon}
        ?disabled=${args.disabled}
      >
        <div slot="clear-icon">
          <icon-close size='16'></icon-close>
        </div>
      </enchanted-chip>
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
            <enchanted-chip .name=${'Basic Chip'}></enchanted-chip>
            <enchanted-chip .name=${'With Count'} .count=${5} ?showChipCount=${true}></enchanted-chip>
            <enchanted-chip .name=${'High Count'} .count=${99} ?showChipCount=${true}></enchanted-chip>
          </div>
        </div>

        <div>
          <h3>Chips with Avatar</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <enchanted-chip .name=${'Avatar Chip'} .icon=${html`<icon-checkmark size='16'></icon-checkmark>`} ?showAvatar=${true}></enchanted-chip>
            <enchanted-chip .name=${'Avatar + Count'} .count=${12} .icon=${html`<icon-checkmark size='16'></icon-checkmark>`} ?showAvatar=${true} ?showChipCount=${true}></enchanted-chip>
          </div>
        </div>

        <div>
          <h3>Chips with Clear Icon</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <enchanted-chip .name=${'Clearable Chip'} ?clearIcon=${true}>
              <div slot="clear-icon"><icon-close size='16'></icon-close></div>
            </enchanted-chip>
            <enchanted-chip .name=${'Clear + Count'} .count=${8} ?clearIcon=${true} ?showChipCount=${true}>
              <div slot="clear-icon"><icon-close size='16'></icon-close></div>
            </enchanted-chip>
            <enchanted-chip .name=${'Clear + Avatar'} ?clearIcon=${true} .icon=${html`<icon-checkmark size='16'></icon-checkmark>`} ?showAvatar=${true}>
              <div slot="clear-icon"><icon-close size='16'></icon-close></div>
            </enchanted-chip>
          </div>
        </div>

        <div>
          <h3>All Features Combined</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <enchanted-chip .name=${'Full Featured'} .count=${25} .icon=${html`<icon-checkmark size='16'></icon-checkmark>`} ?showAvatar=${true} ?showChipCount=${true} ?clearIcon=${true}>
              <div slot="clear-icon"><icon-close size='16'></icon-close></div>
            </enchanted-chip>
          </div>
        </div>

        <div>
          <h3>Disabled States</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <enchanted-chip .name=${'Disabled Basic'} ?disabled=${true}></enchanted-chip>
            <enchanted-chip .name=${'Disabled + Count'} .count=${7} ?disabled=${true} ?showChipCount=${true}></enchanted-chip>
            <enchanted-chip .name=${'Disabled + Avatar'} .icon=${html`<icon-checkmark size='16'></icon-checkmark>`} ?disabled=${true} ?showAvatar=${true}></enchanted-chip>
            <enchanted-chip .name=${'Disabled + Clear'} ?disabled=${true} ?clearIcon=${true}>
              <div slot="clear-icon"><icon-close size='16'></icon-close></div>
            </enchanted-chip>
            <enchanted-chip
              .name=${'Disabled Full'}
              .count=${42}
              .icon=${html`<icon-checkmark size='16'></icon-checkmark>`}
              ?disabled=${true}
              ?showAvatar=${true}
              ?showChipCount=${true}
              ?clearIcon=${true}
            >
              <div slot="clear-icon"><icon-close size='16'></icon-close></div>
            </enchanted-chip>
          </div>
        </div>

        <div>
          <h3>Long Text Handling</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <enchanted-chip .name=${'This is a chip with a very long name that might need handling'}></enchanted-chip>
            <enchanted-chip
              .name=${'Long Name with Features'}
              .count=${99}
              .icon=${html`<icon-checkmark size='16'></icon-checkmark>`}
              ?showAvatar=${true}
              ?showChipCount=${true}
              ?clearIcon=${true}
            >
              <div slot="clear-icon"><icon-close size='16'></icon-close></div>
            </enchanted-chip>
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
