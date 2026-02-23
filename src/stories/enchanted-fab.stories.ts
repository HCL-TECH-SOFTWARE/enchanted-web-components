/* ======================================================================== *
 * Copyright 2026 HCL America Inc.                                          *
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
import { html, TemplateResult } from 'lit';
// Component imports
import '../components/atomic-component/enchanted-fab';
import '../components/atomic-component/enchanted-badge';

// Helper imports
import { EnchantedFabType, EnchantedBadgeType, EnchantedBadgeColor, EnchantedBadgeBorder } from '../types/cssClassEnums';

// Icon imports
import '@hcl-software/enchanted-icons-web-component/dist/apps/es/ai--sparkle';
import '@hcl-software/enchanted-icons-web-component/dist/apps/es/arrows';
import '@hcl-software/enchanted-icons-web-component/dist/apps/es/circle';
import '@hcl-software/enchanted-icons-web-component/dist/apps/es/images';

/**
 * @typedef EnchantedFabProps
 * Props for the enchanted-fab web component.
 *
 * @property badge - Whether to show the badge.
 * @property badgeType - The type of badge (text or dot).
 * @property badgeText - The text to display in the badge.
 * @property badgeColor - The color of the badge.
 * @property badgeBorder - The border style of the badge.
 * @property type - The type of the FAB (contained, outlined).
 * @property extended - Whether the FAB is extended.
 * @property disabled - Whether the FAB is disabled.
 * @property label - The label for the FAB.
 * @property icon - The icon to display in the FAB. Pass any icon name from the enchanted-icon repository.
 */
export interface EnchantedFabProps {
  badge?: boolean;
  badgeType?: EnchantedBadgeType;
  badgeText?: string;
  badgeColor?: EnchantedBadgeColor;
  badgeBorder?: EnchantedBadgeBorder;
  type?: EnchantedFabType;
  extended?: boolean;
  disabled?: boolean;
  label?: string;
  icon?: TemplateResult;
}

const meta: Meta<EnchantedFabProps> = {
  title: 'Input/enchanted-fab',
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
    type: {
      control: { type: 'select' },
      options: Object.values(EnchantedFabType),
      description: 'The type of the FAB.',
      table: { category: 'Appearance', type: { summary: Object.values(EnchantedFabType).join(' | ') }, defaultValue: { summary: EnchantedFabType.CONTAINED } },
    },
    extended: {
      control: { type: 'boolean' },
      description: 'Whether the FAB is extended.',
      table: { category: 'Behavior', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the FAB is disabled.',
      table: { category: 'State', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    label: {
      control: { type: 'text' },
      description: 'The label for the FAB.',
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
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    badge: true,
    badgeType: EnchantedBadgeType.TEXT,
    badgeText: '5',
    badgeColor: EnchantedBadgeColor.PRIMARY,
    badgeBorder: EnchantedBadgeBorder.NONE,
    type: EnchantedFabType.CONTAINED,
    extended: false,
    disabled: false,
    label: 'Label',
    icon: undefined,
  },
  parameters: {
    docs: {
      description: {
        component: 'Floating Action Button (FAB) component with support for badges, multiple types, and extended mode. ' +
          'Customizable via properties and slots for flexible usage in various contexts.'
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
      ? iconMap[args.icon as keyof typeof iconMap]
      : args.icon;

    return html`
      <enchanted-fab
        .badge=${args.badge}
        .type=${args.type}
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
      </enchanted-fab>
    `;
  },
};

export default meta;

type Story = StoryObj<EnchantedFabProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {
    return html`
    <div style="position: relative; display: flex; flex-wrap: wrap; gap: 10px; padding: 20px;">
      <!-- Contained Type -->
      <div style="font-weight: bold; font-size:14px; position: absolute; top: 0; left: 0px;">Contained Type</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 10px;"
        .type=${EnchantedFabType.CONTAINED}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
    <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 150px;">[Extended]</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 50px;"
        .type=${EnchantedFabType.CONTAINED}
        .extended=${true}
        .label=${'Extended'}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 350px;">[Badge]</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 150px;"
        .type=${EnchantedFabType.CONTAINED}
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
      </enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 450px;">[Extended + Badge]</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 200px;"
        .type=${EnchantedFabType.CONTAINED}
        .extended=${true}
        .badge=${true}
        .label=${'Extended Badge'}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      >
        <enchanted-badge
          slot="badge"
          badge="text"
          text="5"
          border="none"
          color="error"
        ></enchanted-badge>
      </enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 680px;">[Disabled]</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 270px;"
        .type=${EnchantedFabType.CONTAINED}
        .disabled=${true}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 800px;">[Extended + Disabled]</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 340px;"
        .type=${EnchantedFabType.CONTAINED}
        .extended=${true}
        .disabled=${true}
        .label=${'Disabled'}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 1000px;">[No Icon]</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 440px;"
        .type=${EnchantedFabType.CONTAINED}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 1100px;">[Extended + No Icon]</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 500px;"
        .type=${EnchantedFabType.CONTAINED}
        .extended=${true}
        .label=${'No Icon'}
      ></enchanted-fab>
      </div>
    <div style="position: relative; display: flex; flex-wrap: wrap; gap: 10px; padding: 20px;">
      <!-- Outlined Type -->
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 0px;">Outlined Type</div>
      <enchanted-fab
        style="position: relative; top: 140px; left: 10px;"
        .type=${EnchantedFabType.OUTLINED}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 150px;">[Extended]</div>
      <enchanted-fab
        style="position: relative; top: 140px; left: 50px;"
        .type=${EnchantedFabType.OUTLINED}
        .extended=${true}
        .label=${'Extended'}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 350px;">[Badge]</div>
      <enchanted-fab
        style="position: relative; top: 140px; left: 150px;"
        .type=${EnchantedFabType.OUTLINED}
        .badge=${true}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      >
        <enchanted-badge
          slot="badge"
          badge="dot"
          border="none"
          color="primary"
        ></enchanted-badge>
      </enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 450px;">[Extended + Badge]</div>
      <enchanted-fab
        style="position: relative; top: 140px; left: 200px;"
        .type=${EnchantedFabType.OUTLINED}
        .extended=${true}
        .badge=${true}
        .label=${'Extended Badge'}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      >
        <enchanted-badge
          slot="badge"
          badge="text"
          text="9"
          border="none"
          color="primary"
        ></enchanted-badge>
      </enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 680px;">[Disabled]</div>
      <enchanted-fab
        style="position: relative; top: 140px; left: 270px;"
        .type=${EnchantedFabType.OUTLINED}
        .disabled=${true}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 800px;">[Extended + Disabled]</div>
      <enchanted-fab
        style="position: relative; top: 140px; left: 340px;"
        .type=${EnchantedFabType.OUTLINED}
        .extended=${true}
        .disabled=${true}
        .label=${'Disabled'}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 1000px;">[No Icon]</div>
      <enchanted-fab
        style="position: relative; top: 140px; left: 450px;"
        .type=${EnchantedFabType.OUTLINED}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 1100px;">[Extended + No Icon]</div>
      <enchanted-fab
        style="position: relative; top: 140px; left: 500px;"
        .type=${EnchantedFabType.OUTLINED}
        .extended=${true}
        .label=${'No Icon'}
      ></enchanted-fab>
      
      <!-- Removed AI Type examples -->
      </div>
    </div>
  `;
  },
  parameters: {
    controls: { disable: true },
  },
};
