import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-avatar';
import { AVATAR_VARIANT, AVATAR_TYPE, AVATAR_COLOR } from '../types/cssClassEnums';

import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/link';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/template';
import testAvatarImageUrl from '../_tests_/assets/test-avatar-image.jpg';

const meta: Meta = {
  title: 'Data display/dx-avatar',
  component: 'dx-avatar',
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
      description: 'Avatar variant',
      defaultValue: AVATAR_VARIANT.AVATAR_LETTER,
    },
    type: {
      control: { type: 'radio' },
      options: [
        AVATAR_TYPE.AVATAR_ROUNDED,
        AVATAR_TYPE.AVATAR_CIRCULAR,
      ],
      description: 'Avatar type',
      defaultValue: AVATAR_TYPE.AVATAR_ROUNDED,
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
      description: 'Avatar color',
      defaultValue: AVATAR_COLOR.AVATAR_DEFAULT_COLOR,
    },
    imgUrl: {
      control: 'text',
      description: 'Image URL',
    },
    iconUrl: {
      control: 'object',
      description: 'Icon URL',
    },
    avatarText: {
      control: 'text',
      description: 'Avatar text',
    },
    iconTemplate: {
      control: 'object',
      description: 'Icon template (SVG string)',
    },
  },
  args: {
    variant: AVATAR_VARIANT.AVATAR_LETTER,
    type: AVATAR_TYPE.AVATAR_ROUNDED,
    color: AVATAR_COLOR.AVATAR_DEFAULT_COLOR,
    imgUrl: testAvatarImageUrl,
    iconUrl: html`<icon-link></icon-link>`,
    avatarText: 'AB',
    iconTemplate: html`<icon-template></icon-template>`,
  },
  parameters: {
    docs: {
      description: {
        component: 'Avatar component with controls for type, variant, color, and content.'
      }
    }
  }
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

export const DxAvatar: Story = {
  render: (args) => {
    return html`
      <dx-avatar
        .variant=${args.variant}
        .type=${args.type}
        .color=${args.color}
        .imgUrl=${args.imgUrl}
        .iconUrl=${args.iconUrl}
        .avatarText=${args.avatarText}
        .iconTemplate=${args.iconTemplate}
      ></dx-avatar>
    `;
  },
  name: 'DxAvatar',
};
