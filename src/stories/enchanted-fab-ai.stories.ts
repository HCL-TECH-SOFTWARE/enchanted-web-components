import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, TemplateResult } from 'lit';
// Component imports
import '../components/atomic-component/enchanted-fab-ai';
import '../components/atomic-component/enchanted-badge';

// Helper imports
import { EnchantedBadgeType, EnchantedBadgeColor, EnchantedBadgeBorder } from '../types/cssClassEnums';

// Icon imports
import '@hcl-software/enchanted-icons-web-component/dist/apps/es/ai--sparkle';
import '@hcl-software/enchanted-icons-web-component/dist/apps/es/arrows';
import '@hcl-software/enchanted-icons-web-component/dist/apps/es/circle';
import '@hcl-software/enchanted-icons-web-component/dist/apps/es/images';

/**
 * @typedef EnchantedFabAiProps
 * Props for the enchanted-fab-ai web component (extends EnchantedFab).
 *
 * @property badge - Whether to show the badge.
 * @property badgeType - The type of badge (text or dot).
 * @property badgeText - The text to display in the badge.
 * @property badgeColor - The color of the badge.
 * @property badgeBorder - The border style of the badge.
 * @property extended - Whether the button is extended.
 * @property disabled - Whether the button is disabled.
 * @property label - The label for the button.
 * @property icon - The icon to display in the button. Pass any icon name from the enchanted-icon repository.
 */
export interface EnchantedFabAiProps {
  badge?: boolean;
  badgeType?: EnchantedBadgeType;
  badgeText?: string;
  badgeColor?: EnchantedBadgeColor;
  badgeBorder?: EnchantedBadgeBorder;
  extended?: boolean;
  disabled?: boolean;
  label?: string;
  icon?: TemplateResult;
}

const meta: Meta<EnchantedFabAiProps> = {
  title: 'Input/enchanted-fab-ai',
  tags: ['autodocs'],
  argTypes: {
    badge: {
      control: { type: 'boolean' },
      description: 'Whether to show the badge.',
      table: { category: 'Badge', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    badgeType: {
      control: { type: 'select' },
      options: Object.values(EnchantedBadgeType),
      description: 'The type of badge to display.',
      table: { category: 'Badge', type: { summary: Object.values(EnchantedBadgeType).join(' | ') }, defaultValue: { summary: EnchantedBadgeType.TEXT } },
      if: { arg: 'badge', truthy: true },
    },
    badgeText: {
      control: { type: 'text' },
      description: 'Text to display in the badge (when badgeType is text).',
      table: { category: 'Badge', type: { summary: 'string' }, defaultValue: { summary: '5' } },
      if: { arg: 'badge', truthy: true },
    },
    badgeColor: {
      control: { type: 'select' },
      options: Object.values(EnchantedBadgeColor),
      description: 'Color of the badge.',
      table: { category: 'Badge', type: { summary: Object.values(EnchantedBadgeColor).join(' | ') }, defaultValue: { summary: EnchantedBadgeColor.PRIMARY } },
      if: { arg: 'badge', truthy: true },
    },
    badgeBorder: {
      control: { type: 'select' },
      options: Object.values(EnchantedBadgeBorder),
      description: 'Border style of the badge.',
      table: { category: 'Badge', type: { summary: Object.values(EnchantedBadgeBorder).join(' | ') }, defaultValue: { summary: EnchantedBadgeBorder.NONE } },
      if: { arg: 'badge', truthy: true },
    },
    extended: {
      control: { type: 'boolean' },
      description: 'Whether the button is extended.',
      table: { category: 'Behavior', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled.',
      table: { category: 'State', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    label: {
      control: { type: 'text' },
      description: 'The label for the button.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
    icon: {
      control: { type: 'select' },
      options: [
        'ai-sparkle',
        'arrows',
        'circle',
        'images'
      ],
      description: 'Select an icon from the enchanted-icon repository.',
      table: {
        category: 'Content',
        type: { summary: 'TemplateResult' },
        defaultValue: { summary: 'ai-sparkle' },
      },
    },
  },
  args: {
    badge: true,
    badgeType: EnchantedBadgeType.TEXT,
    badgeText: '5',
    badgeColor: EnchantedBadgeColor.ERROR,
    badgeBorder: EnchantedBadgeBorder.NONE,
    extended: false,
    disabled: false,
    label: 'Text',
    icon: html`<icon-ai-sparkle></icon-ai-sparkle>`,
  },
  parameters: {
    docs: {
      description: {
        component: 'AI Button component that extends EnchantedFab using inheritance. ' +
          'Demonstrates code reuse through class inheritance while maintaining AI-specific styling. ' +
          'Inherits all properties and methods from enchanted-fab (type, extended, disabled, icon, label, badge) ' +
          'but uses AI-specific CSS parts for custom theming.'
      }
    }
  },
  render: (args) => {
    const iconMap = {
      'ai-sparkle': html`<icon-ai-sparkle></icon-ai-sparkle>`,
      'arrows': html`<icon-arrows></icon-arrows>`,
      'circle': html`<icon-circle></icon-circle>`,
      'images': html`<icon-images></icon-images>`,
    };

    const selectedIcon = typeof args.icon === 'string' && Object.prototype.hasOwnProperty.call(iconMap, args.icon)
      ? iconMap[args.icon]
      : args.icon || html``;

    return html`
      <enchanted-fab-ai
        .badge=${args.badge}
        .extended=${args.extended}
        .disabled=${args.disabled}
        .label=${args.label}
        .icon=${selectedIcon}
      >
        <enchanted-badge
          slot="badge"
          badge="${args.badgeType}"
          text="${args.badgeText}"
          border="${args.badgeBorder}"
          color="${args.badgeColor}"
        ></enchanted-badge>
      </enchanted-fab-ai>
    `;
  },
};

export default meta;

type Story = StoryObj<EnchantedFabAiProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {
    return html`
    <div style="position: relative; display: flex; flex-wrap: wrap; gap: 10px; padding: 20px;">
      <!-- AI Button States (Extended EnchantedFab) -->
      <div style="font-weight: bold; font-size:14px; position: absolute; top: 0; left: 20px;">Default</div>
      <enchanted-fab-ai
        style="position: relative; top: 10px; left: 5px;"
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab-ai>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 150px;">[Extended]</div>
      <enchanted-fab-ai
        style="position: relative; top: 10px; left: 70px;"
        .extended=${true}
        .label=${'Text'}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab-ai>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 320px;">[Badge]</div>
      <enchanted-fab-ai
        style="position: relative; top: 10px; left: 150px;"
        .badge=${true}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      >
        <enchanted-badge
          slot="badge"
          badge="dot"
          text="3"
          border="none"
          color="primary"
        ></enchanted-badge>
      </enchanted-fab-ai>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 430px;">[Extended + Badge]</div>
      <enchanted-fab-ai
        style="position: relative; top: 10px; left: 230px;"
        .extended=${true}
        .badge=${true}
        .label=${'Text'}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      >
        <enchanted-badge
          slot="badge"
          badge="text"
          text="5"
          border="none"
          color="error"
        ></enchanted-badge>
      </enchanted-fab-ai>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 620px;">[Disabled]</div>
      <enchanted-fab-ai
        style="position: relative; top: 10px; left: 320px;"
        .disabled=${true}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab-ai>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 750px;">[Extended + Disabled]</div>
      <enchanted-fab-ai
        style="position: relative; top: 10px; left: 400px;"
        .extended=${true}
        .disabled=${true}
        .label=${'Text'}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab-ai>
    </div>
  `;
  },
  parameters: {
    controls: { disable: true },
  },
};