import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-item-type-avatar';
import { ICON_ITEM_TYPE } from '../types/enchanted-svg-icon';

/**
 * @interface EnchantedItemTypeAvatarProps
 * Props for the enchanted-item-type-avatar web component.
 *
 * @property itemType - The type of the item (icon type).
 * @property imageUrl - The image URL for the avatar.
 */
export interface EnchantedItemTypeAvatarProps {
  itemType?: ICON_ITEM_TYPE | string;
  imageUrl?: string;
}

const meta: Meta<EnchantedItemTypeAvatarProps> = {
  title: 'Data Display/enchanted-item-type-avatar',
  tags: ['autodocs'],
  argTypes: {
    itemType: {
      control: { type: 'select' },
      options: Object.values(ICON_ITEM_TYPE),
      description: 'The type of the item (icon type).',
      table: { defaultValue: { summary: '' } },
    },
    imageUrl: { control: 'text', description: 'The image URL for the avatar.', table: { defaultValue: { summary: '' } } },
  },
  args: {
    itemType: ICON_ITEM_TYPE.APPLICATION,
    imageUrl: '',
  },
  render: (args) => {return html`
    <enchanted-item-type-avatar
      .itemType=${args.itemType}
    ></enchanted-item-type-avatar>
  `;},
};

export default meta;
type Story = StoryObj<EnchantedItemTypeAvatarProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {return html`
    <div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: center;">
      <div>
        <div>Application</div>
        <enchanted-item-type-avatar itemType="${ICON_ITEM_TYPE.APPLICATION}"></enchanted-item-type-avatar>
      </div>
      <div>
        <div>Blog</div>
        <enchanted-item-type-avatar itemType="${ICON_ITEM_TYPE.BLOG}"></enchanted-item-type-avatar>
      </div>
      <div>
        <div>Catalog</div>
        <enchanted-item-type-avatar itemType="${ICON_ITEM_TYPE.CATALOG}"></enchanted-item-type-avatar>
      </div>
      <div>
        <div>PDF</div>
        <enchanted-item-type-avatar itemType="${ICON_ITEM_TYPE.PDF}"></enchanted-item-type-avatar>
      </div>
      <div>
        <div>User Profile</div>
        <enchanted-item-type-avatar itemType="${ICON_ITEM_TYPE.USER_PROFILE}"></enchanted-item-type-avatar>
      </div>
      <div>
        <div>Default (no type)</div>
        <enchanted-item-type-avatar></enchanted-item-type-avatar>
      </div>
    </div>
  `;},
};
