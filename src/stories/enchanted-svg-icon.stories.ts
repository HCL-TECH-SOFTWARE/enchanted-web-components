import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-svg-icon';
import { svgIconEnd } from '../_tests_/assets/svg-input-end-icon';

/**
 * @typedef EnchantedSvgIconProps
 * Props for the enchanted-svg-icon web component.
 *
 * @property icon - The SVG icon template to be rendered
 * @property color - The icon color override
 * @property size - The icon size (width and height)
 * @property useCurrentColor - Inherit color from parent element
 */
export interface EnchantedSvgIconProps {
  icon?: unknown;
  color?: string;
  size?: string;
  useCurrentColor?: boolean;
}

const meta: Meta<EnchantedSvgIconProps> = {
  title: 'Icon/enchanted-svg-icon',
  component: 'enchanted-svg-icon',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The SVG Icon component renders SVG templates with customizable color and size properties. It supports parent color inheritance via useCurrentColor for ' +
          'seamless integration with text and UI elements. Use this component for consistent icon rendering across your application with flexible styling options.',
      },
    },
  },
  argTypes: {
    icon: {
      control: { type: 'object' },
      description: 'SVG icon template (TemplateResult) to be rendered. Pass a Lit template containing the SVG markup. Required for the icon to display.',
    },
    color: {
      control: { type: 'color' },
      description: 'Custom color for the icon. Overrides default styling. Ignored when useCurrentColor is true. Accepts any valid CSS color value (hex, rgb, named colors).',
      table: { category: 'Styling', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
    size: {
      control: { type: 'text' },
      description: 'Icon size applied to both width and height. Accepts CSS size values (px, em, rem, %). Example: "24px", "2rem". Ensures consistent aspect ratio.',
      table: { category: 'Layout', type: { summary: 'string' }, defaultValue: { summary: '16px' } },
    },
    useCurrentColor: {
      control: { type: 'boolean' },
      description: 'When true, icon inherits color from parent element. Useful for matching icon color with surrounding text or UI components. Overrides color property.',
      table: { category: 'Styling', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
  args: {
    icon: svgIconEnd,
    color: '',
    size: '16px',
    useCurrentColor: false,
  },
};

export default meta;

type Story = StoryObj<EnchantedSvgIconProps>;

export const EnchantedSvgIconStory: Story = {
  name: 'enchanted-svg-icon',
  render: (args) => {
    return html`
      <enchanted-svg-icon
        .icon=${args.icon}
        color="${args.color}"
        size="${args.size}"
        ?useCurrentColor=${args.useCurrentColor}
      ></enchanted-svg-icon>
    `;
  },
};

/**
 * Comprehensive showcase of all svg-icon states and styling options.
 * Demonstrates default rendering, custom colors, various sizes, and parent color inheritance.
 */
export const AllStates: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    return html`
      <style>
        .icon-container {
          display: flex;
          flex-direction: column;
          gap: 32px;
          padding: 20px;
        }
        .icon-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .icon-section h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
        }
        .icon-row {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
          align-items: flex-end;
        }
        .icon-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }
        .icon-label {
          font-size: 12px;
          color: #666;
        }
      </style>

      <div class="icon-container">
        <!-- Default State -->
        <div class="icon-section">
          <h3>Default State</h3>
          <div class="icon-row">
            <div class="icon-item">
              <enchanted-svg-icon .icon=${svgIconEnd}></enchanted-svg-icon>
              <span class="icon-label">Default (16px)</span>
            </div>
          </div>
        </div>

        <!-- Custom Colors -->
        <div class="icon-section">
          <h3>Custom Colors</h3>
          <div class="icon-row">
            <div class="icon-item">
              <enchanted-svg-icon .icon=${svgIconEnd} color="red"></enchanted-svg-icon>
              <span class="icon-label">Red</span>
            </div>
            <div class="icon-item">
              <enchanted-svg-icon .icon=${svgIconEnd} color="blue"></enchanted-svg-icon>
              <span class="icon-label">Blue</span>
            </div>
            <div class="icon-item">
              <enchanted-svg-icon .icon=${svgIconEnd} color="green"></enchanted-svg-icon>
              <span class="icon-label">Green</span>
            </div>
            <div class="icon-item">
              <enchanted-svg-icon .icon=${svgIconEnd} color="#FF6B35"></enchanted-svg-icon>
              <span class="icon-label">Hex Color</span>
            </div>
            <div class="icon-item">
              <enchanted-svg-icon .icon=${svgIconEnd} color="rgb(138, 43, 226)"></enchanted-svg-icon>
              <span class="icon-label">RGB Color</span>
            </div>
            <div class="icon-item">
              <enchanted-svg-icon .icon=${svgIconEnd} color="rgba(255, 99, 71, 0.6)"></enchanted-svg-icon>
              <span class="icon-label">RGBA (transparent)</span>
            </div>
          </div>
        </div>

        <!-- Different Sizes -->
        <div class="icon-section">
          <h3>Sizes</h3>
          <div class="icon-row">
            <div class="icon-item">
              <enchanted-svg-icon .icon=${svgIconEnd} size="12px"></enchanted-svg-icon>
              <span class="icon-label">12px (small)</span>
            </div>
            <div class="icon-item">
              <enchanted-svg-icon .icon=${svgIconEnd} size="16px"></enchanted-svg-icon>
              <span class="icon-label">16px (default)</span>
            </div>
            <div class="icon-item">
              <enchanted-svg-icon .icon=${svgIconEnd} size="24px"></enchanted-svg-icon>
              <span class="icon-label">24px</span>
            </div>
            <div class="icon-item">
              <enchanted-svg-icon .icon=${svgIconEnd} size="32px"></enchanted-svg-icon>
              <span class="icon-label">32px</span>
            </div>
            <div class="icon-item">
              <enchanted-svg-icon .icon=${svgIconEnd} size="48px"></enchanted-svg-icon>
              <span class="icon-label">48px</span>
            </div>
            <div class="icon-item">
              <enchanted-svg-icon .icon=${svgIconEnd} size="64px"></enchanted-svg-icon>
              <span class="icon-label">64px (large)</span>
            </div>
            <div class="icon-item">
              <enchanted-svg-icon .icon=${svgIconEnd} size="2rem"></enchanted-svg-icon>
              <span class="icon-label">2rem</span>
            </div>
            <div class="icon-item">
              <enchanted-svg-icon .icon=${svgIconEnd} size="3em"></enchanted-svg-icon>
              <span class="icon-label">3em</span>
            </div>
          </div>
        </div>

        <!-- UseCurrentColor -->
        <div class="icon-section">
          <h3>Inherit Parent Color (useCurrentColor)</h3>
          <div class="icon-row">
            <div class="icon-item">
              <span style="color: green; font-size: 24px;">
                <enchanted-svg-icon .icon=${svgIconEnd} ?useCurrentColor=${true}></enchanted-svg-icon>
              </span>
              <span class="icon-label">Green parent</span>
            </div>
            <div class="icon-item">
              <span style="color: purple; font-size: 24px;">
                <enchanted-svg-icon .icon=${svgIconEnd} ?useCurrentColor=${true}></enchanted-svg-icon>
              </span>
              <span class="icon-label">Purple parent</span>
            </div>
            <div class="icon-item">
              <span style="color: orange; font-size: 32px;">
                <enchanted-svg-icon .icon=${svgIconEnd} ?useCurrentColor=${true}></enchanted-svg-icon>
              </span>
              <span class="icon-label">Orange + 32px</span>
            </div>
            <div class="icon-item">
              <span style="color: #E91E63; font-size: 40px;">
                <enchanted-svg-icon .icon=${svgIconEnd} ?useCurrentColor=${true}></enchanted-svg-icon>
              </span>
              <span class="icon-label">Pink + 40px</span>
            </div>
            <div class="icon-item">
              <span style="color: navy; font-size: 48px;">
                <enchanted-svg-icon .icon=${svgIconEnd} ?useCurrentColor=${true}></enchanted-svg-icon>
              </span>
              <span class="icon-label">Navy + 48px</span>
            </div>
          </div>
        </div>

        <!-- Combined States -->
        <div class="icon-section">
          <h3>Combined States</h3>
          <div class="icon-row">
            <div class="icon-item">
              <enchanted-svg-icon .icon=${svgIconEnd} color="crimson" size="32px"></enchanted-svg-icon>
              <span class="icon-label">Color + Size</span>
            </div>
            <div class="icon-item">
              <enchanted-svg-icon .icon=${svgIconEnd} color="teal" size="48px"></enchanted-svg-icon>
              <span class="icon-label">Teal + 48px</span>
            </div>
            <div class="icon-item">
              <enchanted-svg-icon .icon=${svgIconEnd} color="#4CAF50" size="24px"></enchanted-svg-icon>
              <span class="icon-label">Hex + 24px</span>
            </div>
            <div class="icon-item">
              <span style="color: indigo; font-size: 48px;">
                <enchanted-svg-icon .icon=${svgIconEnd} size="48px" ?useCurrentColor=${true}></enchanted-svg-icon>
              </span>
              <span class="icon-label">Parent color + size</span>
            </div>
            <div class="icon-item">
              <span style="color: darkorange; font-size: 64px;">
                <enchanted-svg-icon .icon=${svgIconEnd} ?useCurrentColor=${true}></enchanted-svg-icon>
              </span>
              <span class="icon-label">Large inherited</span>
            </div>
          </div>
        </div>
      </div>
    `;
  },
};
