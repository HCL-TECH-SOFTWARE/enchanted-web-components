import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-badge';

const meta: Meta = {
  title: 'Components/EnchantedBadge',
  component: 'enchanted-badge',
  tags: ['autodocs'],
  argTypes: {
    badge: {
      control: { type: 'select' },
      options: ['text', 'dot'],
      description: 'Type of badge to display.',
      table: { category: 'Appearance', type: { summary: 'text | dot' }, defaultValue: { summary: 'text' } },
    },
    text: {
      control: { type: 'text' },
      description: 'Text to display inside the badge when badge type is text.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'error', 'error-inverse', 'primary-inverse'],
      description: 'Color of the badge.',
      table: { category: 'Appearance', type: { summary: 'primary | error | error-inverse | primary-inverse' }, defaultValue: { summary: 'primary' } },
    },
    border: {
      control: { type: 'select' },
      options: ['paper', 'default', 'secondary', 'tertiary', 'dark', 'darker', 'none'],
      description: 'Border style of the badge.',
      table: { category: 'Appearance', type: { summary: 'paper | default | secondary | tertiary | dark | darker | none' }, defaultValue: { summary: 'none' } },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    badge: 'text',
    text: '12',
    color: 'primary',
    border: 'none',
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
          ${['primary', 'error', 'error-inverse', 'primary-inverse'].map((color) => {
            return html`
              <div style="position: relative; width: 50px; height: 50px; text-align: center;">
                <button style="width: 100%; height: 100%; position: absolute; border: none; background: none;"></button>
                <enchanted-badge badge="text" text="12" color="${color}" border="default"></enchanted-badge>
                <div style="margin-top: 8px; font-size: 12px;">Color: ${color}</div>
              </div>
            `;
          })}
        </div>
      </div>

      <div>
        <h3>Badge Variants - Dot</h3>
        <div style="display: flex; gap: 18px; flex-wrap: wrap; align-items: center;">
          ${['primary', 'error', 'error-inverse', 'primary-inverse'].map((color) => {
            return html`
              <div style="position: relative; width: 50px; height: 50px; text-align: center;">
                <button style="width: 100%; height: 100%; position: absolute; border: none; background: none;"></button>
                <enchanted-badge badge="dot" color="${color}" border="default"></enchanted-badge>
                <div style="margin-top: 8px; font-size: 12px;">Color: ${color}</div>
              </div>
            `;
          })}
        </div>
      </div>

      <div>
        <h3>Badge Borders</h3>
        <div style="display: flex; gap: 18px; flex-wrap: wrap; align-items: center;">
          ${['paper', 'default', 'secondary', 'tertiary', 'dark', 'darker', 'none'].map((border) => {
            return html`
              <div style="position: relative; width: 50px; height: 50px; text-align: center;">
                <button style="width: 100%; height: 100%; position: absolute; border: none; background: none;"></button>
                <enchanted-badge badge="text" text="B" color="primary" border="${border}"></enchanted-badge>
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