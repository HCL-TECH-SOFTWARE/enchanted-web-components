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

// Component imports
import '../components/atomic-component/enchanted-badge';

// Helper imports
import { EnchantedBadgeColor, EnchantedBadgeBorder, EnchantedBadgeType } from '../types/cssClassEnums';
import { ENCHANTED_BADGE_TAG } from '../components/tags';

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
        <${ENCHANTED_BADGE_TAG} badge="${badge}" text="${text}" color="${color}" border="${border}">
        </${ENCHANTED_BADGE_TAG}>
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
                <${ENCHANTED_BADGE_TAG} badge="${EnchantedBadgeType.TEXT}" text="12" color="${color}" border="${EnchantedBadgeBorder.DEFAULT}"></${ENCHANTED_BADGE_TAG}>
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
                <${ENCHANTED_BADGE_TAG} badge="${EnchantedBadgeType.DOT}" color="${color}" border="${EnchantedBadgeBorder.DEFAULT}"></${ENCHANTED_BADGE_TAG}>
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
                <${ENCHANTED_BADGE_TAG} badge="${EnchantedBadgeType.TEXT}" text="B" color="${EnchantedBadgeColor.PRIMARY}" border="${border}"></${ENCHANTED_BADGE_TAG}>
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