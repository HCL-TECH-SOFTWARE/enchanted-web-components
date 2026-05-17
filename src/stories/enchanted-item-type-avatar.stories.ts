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
import '../components/atomic-component/enchanted-item-type-avatar';
import { ICON_ITEM_TYPE } from '../types/enchanted-svg-icon';
import { ENCHANTED_ITEM_TYPE_AVATAR_TAG } from '../components/tags';

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
    <${ENCHANTED_ITEM_TYPE_AVATAR_TAG}
      .itemType=${args.itemType}
    ></${ENCHANTED_ITEM_TYPE_AVATAR_TAG}>
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
        <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType="${ICON_ITEM_TYPE.APPLICATION}"></${ENCHANTED_ITEM_TYPE_AVATAR_TAG}>
      </div>
      <div>
        <div>Blog</div>
        <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType="${ICON_ITEM_TYPE.BLOG}"></${ENCHANTED_ITEM_TYPE_AVATAR_TAG}>
      </div>
      <div>
        <div>Catalog</div>
        <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType="${ICON_ITEM_TYPE.CATALOG}"></${ENCHANTED_ITEM_TYPE_AVATAR_TAG}>
      </div>
      <div>
        <div>PDF</div>
        <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType="${ICON_ITEM_TYPE.PDF}"></${ENCHANTED_ITEM_TYPE_AVATAR_TAG}>
      </div>
      <div>
        <div>User Profile</div>
        <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType="${ICON_ITEM_TYPE.USER_PROFILE}"></${ENCHANTED_ITEM_TYPE_AVATAR_TAG}>
      </div>
      <div>
        <div>Default (no type)</div>
        <${ENCHANTED_ITEM_TYPE_AVATAR_TAG}></${ENCHANTED_ITEM_TYPE_AVATAR_TAG}>
      </div>
    </div>
  `;},
};
