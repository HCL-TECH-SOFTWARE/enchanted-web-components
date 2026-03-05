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
import '../components/atomic-component/enchanted-avatar';
import { AVATAR_VARIANT, AVATAR_TYPE, AVATAR_COLOR } from '../types/cssClassEnums';

import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/link';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/template';
import testAvatarImageUrl from '../_tests_/assets/test-avatar-image.jpg';
import { createIconTagName, ENCHANTED_AVATAR_TAG } from '../components/tags';

const meta: Meta = {
  title: 'Data display/enchanted-avatar',
  component: 'enchanted-avatar',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        AVATAR_VARIANT.AVATAR_LETTER,
        AVATAR_VARIANT.AVATAR_ICON,
        AVATAR_VARIANT.AVATAR_ICON_TEMPLATE,
        AVATAR_VARIANT.AVATAR_IMG,
      ],
      description: 'Defines the content type displayed in the avatar (letter, icon, icon template, or image)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: AVATAR_VARIANT.AVATAR_LETTER },
      },
    },
    type: {
      control: { type: 'radio' },
      options: [
        AVATAR_TYPE.AVATAR_ROUNDED,
        AVATAR_TYPE.AVATAR_CIRCULAR,
      ],
      description: 'Defines the shape of the avatar (rounded corners or fully circular)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: AVATAR_TYPE.AVATAR_ROUNDED },
      },
    },
    color: {
      control: { type: 'radio' },
      options: [
        AVATAR_COLOR.AVATAR_DEFAULT_COLOR,
        AVATAR_COLOR.AVATAR_RED,
        AVATAR_COLOR.AVATAR_ORANGE,
        AVATAR_COLOR.AVATAR_YELLOW,
        AVATAR_COLOR.AVATAR_LIME,
        AVATAR_COLOR.AVATAR_GREEN,
        AVATAR_COLOR.AVATAR_TEAL,
        AVATAR_COLOR.AVATAR_BLUE,
        AVATAR_COLOR.AVATAR_INDIGO,
        AVATAR_COLOR.AVATAR_PURPLE,
        AVATAR_COLOR.AVATAR_PINK,
      ],
      description: 'Defines the background color of the avatar',
      table: {
        type: { summary: 'AVATAR_COLOR' },
        defaultValue: { summary: AVATAR_COLOR.AVATAR_DEFAULT_COLOR },
      },
    },
    imgUrl: {
      control: { type: 'text' },
      description: 'URL of the image to display when variant is set to AVATAR_IMG',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    iconUrl: {
      control: { type: 'object' },
      description: 'Icon component to display when variant is set to AVATAR_ICON (Lit TemplateResult)',
    },
    avatarText: {
      control: { type: 'text' },
      description: 'Text to display when variant is set to AVATAR_LETTER (max 2 characters)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    iconTemplate: {
      control: { type: 'object' },
      description: 'Icon template to display when variant is set to AVATAR_ICON_TEMPLATE (Lit TemplateResult)',
    },
  },
  args: {
    variant: AVATAR_VARIANT.AVATAR_LETTER,
    type: AVATAR_TYPE.AVATAR_ROUNDED,
    color: AVATAR_COLOR.AVATAR_DEFAULT_COLOR,
    imgUrl: testAvatarImageUrl,
    iconUrl: html`<${createIconTagName('icon-link')}></${createIconTagName('icon-link')}>`,
    avatarText: 'AB',
    iconTemplate: html`<${createIconTagName('icon-template')}></${createIconTagName('icon-template')}>`,
  },
  parameters: {
    docs: {
      description: {
        component: 'Avatar component for displaying user profile pictures, initials, or icons. '
          + 'Supports multiple variants (letter, icon, icon template, image), shapes (rounded, circular), '
          + 'and a variety of color options. Letter avatars automatically truncate text to 2 characters.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<{
  variant: string;
  type: string;
  color: string;
  imgUrl: string;
  iconUrl: string;
  avatarText: string;
  iconTemplate: string;
}>;

export const EnchantedAvatar: Story = {
  render: (args) => {
    return html`
      <${ENCHANTED_AVATAR_TAG}
        .variant=${args.variant}
        .type=${args.type}
        .color=${args.color}
        .imgUrl=${args.imgUrl}
        .iconUrl=${args.iconUrl}
        .avatarText=${args.avatarText}
        .iconTemplate=${args.iconTemplate}
      ></${ENCHANTED_AVATAR_TAG}>
    `;
  },
  name: 'Default',
  parameters: {
    docs: {
      description: {
        story: 'Default avatar with customizable variant, type, color, and content. '
          + 'Switch between variants to see letters, icons, or images. '
          + 'Try different colors and shapes to match your design requirements.',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => {
    return html`
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h3>Letter Avatars - Rounded</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'AB'}></${ENCHANTED_AVATAR_TAG}>
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'CD'} .color=${AVATAR_COLOR.AVATAR_RED}></${ENCHANTED_AVATAR_TAG}>
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'EF'} .color=${AVATAR_COLOR.AVATAR_ORANGE}></${ENCHANTED_AVATAR_TAG}>
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'GH'} .color=${AVATAR_COLOR.AVATAR_YELLOW}></${ENCHANTED_AVATAR_TAG}>
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'IJ'} .color=${AVATAR_COLOR.AVATAR_LIME}></${ENCHANTED_AVATAR_TAG}>
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'KL'} .color=${AVATAR_COLOR.AVATAR_GREEN}></${ENCHANTED_AVATAR_TAG}>
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'MN'} .color=${AVATAR_COLOR.AVATAR_TEAL}></${ENCHANTED_AVATAR_TAG}>
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'OP'} .color=${AVATAR_COLOR.AVATAR_BLUE}></${ENCHANTED_AVATAR_TAG}>
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'QR'} .color=${AVATAR_COLOR.AVATAR_INDIGO}></${ENCHANTED_AVATAR_TAG}>
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'ST'} .color=${AVATAR_COLOR.AVATAR_PURPLE}></${ENCHANTED_AVATAR_TAG}>
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'UV'} .color=${AVATAR_COLOR.AVATAR_PINK}></${ENCHANTED_AVATAR_TAG}>
          </div>
        </div>

        <div>
          <h3>Letter Avatars - Circular</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'AB'}></${ENCHANTED_AVATAR_TAG}>
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'CD'} .color=${AVATAR_COLOR.AVATAR_RED}></${ENCHANTED_AVATAR_TAG}>
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'EF'} .color=${AVATAR_COLOR.AVATAR_ORANGE}></${ENCHANTED_AVATAR_TAG}>
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'GH'} .color=${AVATAR_COLOR.AVATAR_YELLOW}></${ENCHANTED_AVATAR_TAG}>
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'IJ'} .color=${AVATAR_COLOR.AVATAR_LIME}></${ENCHANTED_AVATAR_TAG}>
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'KL'} .color=${AVATAR_COLOR.AVATAR_GREEN}></${ENCHANTED_AVATAR_TAG}>
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'MN'} .color=${AVATAR_COLOR.AVATAR_TEAL}></${ENCHANTED_AVATAR_TAG}>
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'OP'} .color=${AVATAR_COLOR.AVATAR_BLUE}></${ENCHANTED_AVATAR_TAG}>
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'QR'} .color=${AVATAR_COLOR.AVATAR_INDIGO}></${ENCHANTED_AVATAR_TAG}>
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'ST'} .color=${AVATAR_COLOR.AVATAR_PURPLE}></${ENCHANTED_AVATAR_TAG}>
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'UV'} .color=${AVATAR_COLOR.AVATAR_PINK}></${ENCHANTED_AVATAR_TAG}>
          </div>
        </div>

        <div>
          <h3>Icon Avatars</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_ICON} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .iconUrl=${html`<${createIconTagName('icon-link')}></${createIconTagName('icon-link')}>`}></${ENCHANTED_AVATAR_TAG}>
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_ICON} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .iconUrl=${html`<${createIconTagName('icon-link')}></${createIconTagName('icon-link')}>`}></${ENCHANTED_AVATAR_TAG}>
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_ICON} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .iconUrl=${html`<${createIconTagName('icon-link')}></${createIconTagName('icon-link')}>`} .color=${AVATAR_COLOR.AVATAR_BLUE}>
            </${ENCHANTED_AVATAR_TAG}>
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_ICON} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .iconUrl=${html`<${createIconTagName('icon-link')}></${createIconTagName('icon-link')}>`} .color=${AVATAR_COLOR.AVATAR_BLUE}>
            </${ENCHANTED_AVATAR_TAG}>
          </div>
        </div>

        <div>
          <h3>Icon Template Avatars</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .iconTemplate=${html`<${createIconTagName('icon-template')}></${createIconTagName('icon-template')}>`}>
            </${ENCHANTED_AVATAR_TAG}>
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .iconTemplate=${html`<${createIconTagName('icon-template')}></${createIconTagName('icon-template')}>`}>
            </${ENCHANTED_AVATAR_TAG}>
            <${ENCHANTED_AVATAR_TAG}
              .variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE}
              .type=${AVATAR_TYPE.AVATAR_ROUNDED}
              .iconTemplate=${html`<${createIconTagName('icon-template')}></${createIconTagName('icon-template')}>`}
              .color=${AVATAR_COLOR.AVATAR_GREEN}
            ></${ENCHANTED_AVATAR_TAG}>
            <${ENCHANTED_AVATAR_TAG}
              .variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE}
              .type=${AVATAR_TYPE.AVATAR_CIRCULAR}
              .iconTemplate=${html`<${createIconTagName('icon-template')}></${createIconTagName('icon-template')}>`}
              .color=${AVATAR_COLOR.AVATAR_GREEN}
            ></${ENCHANTED_AVATAR_TAG}>
          </div>
        </div>

        <div>
          <h3>Image Avatars</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_IMG} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .imgUrl=${testAvatarImageUrl}></${ENCHANTED_AVATAR_TAG}>
            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_IMG} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .imgUrl=${testAvatarImageUrl}></${ENCHANTED_AVATAR_TAG}>
          </div>
        </div>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all avatar variants, types, and colors. '
          + 'Demonstrates letter avatars in all 11 colors with both rounded and circular shapes, '
          + 'icon avatars, icon template avatars, and image avatars. '
          + 'This provides a complete reference for all available avatar configurations.',
      },
    },
  },
};
