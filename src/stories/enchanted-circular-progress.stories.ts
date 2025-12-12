import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-circular-progress';

const meta: Meta = {
  title: 'Feedback/enchanted-circular-progress',
  component: 'enchanted-circular-progress',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'primary', 'secondary'],
      description: 'Progress variant',
      defaultValue: 'default',
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value',
      defaultValue: 50,
    },
    size: {
      control: { type: 'number', min: 20, max: 200, step: 1 },
      description: 'Size (px)',
      defaultValue: 100,
    },
    strokewidth: {
      control: { type: 'number', min: 1, max: 20, step: 1 },
      description: 'Stroke width',
      defaultValue: 4,
    },
    trailcolor: {
      control: { type: 'color' },
      description: 'Trail color',
      defaultValue: '#D6D6D6',
    },
    valuecolor: {
      control: { type: 'color' },
      description: 'Value color',
      defaultValue: '#0550DC',
    },
    animated: {
      control: 'boolean',
      description: 'Animated',
      defaultValue: true,
    },
    showLabel: {
      control: 'boolean',
      description: 'Show label',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled',
      defaultValue: false,
    },
  },
  args: {
    variant: 'default',
    value: 50,
    size: 100,
    strokewidth: 4,
    trailcolor: '#D6D6D6',
    valuecolor: '#0550DC',
    animated: true,
    showLabel: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        component: 'Circular progress component with controls for variant, value, and boolean properties.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<{
  variant: string;
  value: number;
  size: number;
  strokewidth: number;
  trailcolor: string;
  valuecolor: string;
  animated: boolean;
  showLabel: boolean;
  disabled: boolean;
}>;

export const EnchantedCircularProgress: Story = {
  render: (args) => {
    return html`
      <enchanted-circular-progress
        .size=${args.size}
        .strokewidth=${args.strokewidth}
        .trailcolor=${args.trailcolor}
        .valuecolor=${args.valuecolor}
        ?disabled=${args.disabled}
      ></enchanted-circular-progress>
      ${args.showLabel ? html`<div>${args.value}%</div>` : ''}
    `;
  },
  name: 'EnchantedCircularProgress',
};
