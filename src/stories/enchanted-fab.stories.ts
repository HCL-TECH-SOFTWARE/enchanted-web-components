import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, TemplateResult } from 'lit';
// Component imports
import '../components/atomic-component/enchanted-fab';
import '../components/atomic-component/enchanted-badge';

// Helper imports
import { EnchantedFabType } from '../types/cssClassEnums';

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
 * @property type - The type of the FAB (contained, outlined).
 * @property extended - Whether the FAB is extended.
 * @property disabled - Whether the FAB is disabled.
 * @property label - The label for the FAB.
 * @property icon - The icon to display in the FAB. Pass any icon name from the enchanted-icon repository.
 */
export interface EnchantedFabProps {
  badge?: boolean;
  type?: EnchantedFabType;
  extended?: boolean;
  disabled?: boolean;
  label?: string;
  icon?: TemplateResult;
}

const meta: Meta<EnchantedFabProps> = {
  title: 'Inputs/enchanted-fab',
  tags: ['autodocs'],
  argTypes: {
    badge: {
      control: { type: 'boolean' },
      description: 'Whether to show the badge.',
      table: { category: 'Appearance', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
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
        defaultValue: { summary: 'ai-sparkle' },
      },
    },
  },
  args: {
    badge: true,
    type: EnchantedFabType.CONTAINED,
    extended: false,
    disabled: false,
    label: 'Default FAB',
    icon: html`<icon-ai-sparkle></icon-ai-sparkle>`,
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
      ? iconMap[args.icon]
      : args.icon || html``;

    return html`
      <enchanted-fab
        .badge=${args.badge}
        .type=${args.type}
        .extended=${args.extended}
        .disabled=${args.disabled}
        .label=${args.label}
        .icon=${selectedIcon}
      ></enchanted-fab>
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
        style="position: absolute; top: 30px; left: 20px;"
        .type=${EnchantedFabType.CONTAINED}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
    <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 150px;">[Extended]</div>
      <enchanted-fab
        style="position: absolute; top: 30px; left: 150px;"
        .type=${EnchantedFabType.CONTAINED}
        .extended=${true}
        .label=${'Extended'}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 350px;">[Badge]</div>
      <enchanted-fab
        style="position: absolute; top: 30px; left: 350px;"
        .type=${EnchantedFabType.CONTAINED}
        .badge=${true}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 450px;">[Extended + Badge]</div>
      <enchanted-fab
        style="position: absolute; top: 30px; left: 450px;"
        .type=${EnchantedFabType.CONTAINED}
        .extended=${true}
        .badge=${true}
        .label=${'Extended Badge'}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 680px;">[Disabled]</div>
      <enchanted-fab
        style="position: absolute; top: 30px; left: 680px;"
        .type=${EnchantedFabType.CONTAINED}
        .disabled=${true}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 800px;">[Extended + Disabled]</div>
      <enchanted-fab
        style="position: absolute; top: 30px; left: 800px;"
        .type=${EnchantedFabType.CONTAINED}
        .extended=${true}
        .disabled=${true}
        .label=${'Disabled'}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      
      <!-- Outlined Type -->
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 90px; left: 0px;">Outlined Type</div>
      <enchanted-fab
        style="position: absolute; top: 120px; left: 20px;"
        .type=${EnchantedFabType.OUTLINED}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 90px; left: 150px;">[Extended]</div>
      <enchanted-fab
        style="position: absolute; top: 120px; left: 150px;"
        .type=${EnchantedFabType.OUTLINED}
        .extended=${true}
        .label=${'Extended'}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 90px; left: 350px;">[Badge]</div>
      <enchanted-fab
        style="position: absolute; top: 120px; left: 350px;"
        .type=${EnchantedFabType.OUTLINED}
        .badge=${true}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 90px; left: 450px;">[Extended + Badge]</div>
      <enchanted-fab
        style="position: absolute; top: 120px; left: 450px;"
        .type=${EnchantedFabType.OUTLINED}
        .extended=${true}
        .badge=${true}
        .label=${'Extended Badge'}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 90px; left: 680px;">[Disabled]</div>
      <enchanted-fab
        style="position: absolute; top: 120px; left: 680px;"
        .type=${EnchantedFabType.OUTLINED}
        .disabled=${true}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 90px; left: 800px;">[Extended + Disabled]</div>
      <enchanted-fab
        style="position: absolute; top: 120px; left: 800px;"
        .type=${EnchantedFabType.OUTLINED}
        .extended=${true}
        .disabled=${true}
        .label=${'Disabled'}
        .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
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
