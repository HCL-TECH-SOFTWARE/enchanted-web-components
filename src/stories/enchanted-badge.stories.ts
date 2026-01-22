import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

// Component imports
import '../components/atomic-component/enchanted-badge';

// Helper imports
import { EnchantedBadgeColor, EnchantedBadgeBorder, EnchantedBadgeType } from '../types/cssClassEnums';

const meta: Meta = {
  title: 'Data display/enchanted-badge',
  component: 'enchanted-badge',
  tags: ['autodocs'],
  argTypes: {
    badge: {
      control: { type: 'select' },
      options: Object.values(EnchantedBadgeType),
      description: 'Type of badge to display.',
      table: { category: 'Appearance', type: { summary: Object.values(EnchantedBadgeType).join(' | ') }, defaultValue: { summary: EnchantedBadgeType.TEXT } },
    },
    text: {
      control: { type: 'text' },
      description: 'Text to display inside the badge when badge type is text.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
    color: {
      control: { type: 'select' },
      options: Object.values(EnchantedBadgeColor),
      description: 'Color of the badge.',
      table: { category: 'Appearance', type: { summary: Object.values(EnchantedBadgeColor).join(' | ') }, defaultValue: { summary: EnchantedBadgeColor.PRIMARY } },
    },
    border: {
      control: { type: 'select' },
      options: Object.values(EnchantedBadgeBorder),
      description: 'Border style of the badge.',
      table: { category: 'Appearance', type: { summary: Object.values(EnchantedBadgeBorder).join(' | ') }, defaultValue: { summary: EnchantedBadgeBorder.DEFAULT } },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    badge: EnchantedBadgeType.TEXT,
    text: '12',
    color: EnchantedBadgeColor.PRIMARY,
    border: EnchantedBadgeBorder.NONE,
  },
  render: ({ badge, text, color, border }) => {
    return html`
      <div style=" position: absolute;display: flex; justify-content: center; align-items: center; width: 20px; height: 20px; top: 50px; left: 50px;">
        <enchanted-badge badge="${badge}" text="${text}" color="${color}" border="${border}">
        </enchanted-badge>
      </div>
    </div>
    `;
  },
};

export const AllVariants: Story = {
  render: () => {
    return html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h3>Badge Variants - Text</h3>
        <div style="display: flex; gap: 18px; flex-wrap: wrap; align-items: center;">
          ${Object.values(EnchantedBadgeColor).map((color) => {
            return html`
              <div style="position: relative; width: 50px; height: 50px; text-align: center;">
                <button style="width: 100%; height: 100%; position: absolute; border: none; background: none;"></button>
                <enchanted-badge badge="${EnchantedBadgeType.TEXT}" text="12" color="${color}" border="${EnchantedBadgeBorder.DEFAULT}"></enchanted-badge>
                <div style="margin-top: 8px; font-size: 12px;">Color: ${color}</div>
              </div>
            `;
          })}
        </div>
      </div>

      <div>
        <h3>Badge Variants - Dot</h3>
        <div style="display: flex; gap: 18px; flex-wrap: wrap; align-items: center;">
          ${Object.values(EnchantedBadgeColor).map((color) => {
            return html`
              <div style="position: relative; width: 50px; height: 50px; text-align: center;">
                <button style="width: 100%; height: 100%; position: absolute; border: none; background: none;"></button>
                <enchanted-badge badge="${EnchantedBadgeType.DOT}" color="${color}" border="${EnchantedBadgeBorder.DEFAULT}"></enchanted-badge>
                <div style="margin-top: 8px; font-size: 12px;">Color: ${color}</div>
              </div>
            `;
          })}
        </div>
      </div>

      <div>
        <h3>Badge Borders</h3>
        <div style="display: flex; gap: 18px; flex-wrap: wrap; align-items: center;">
          ${Object.values(EnchantedBadgeBorder).map((border) => {
            return html`
              <div style="position: relative; width: 50px; height: 50px; text-align: center;">
                <button style="width: 100%; height: 100%; position: absolute; border: none; background: none;"></button>
                <enchanted-badge badge="${EnchantedBadgeType.TEXT}" text="B" color="${EnchantedBadgeColor.PRIMARY}" border="${border}"></enchanted-badge>
                <div style="margin-top: 8px; font-size: 12px;">Border: ${border}</div>
              </div>
            `;
          })}
        </div>
      </div>
    </div>
  `;
  },
};