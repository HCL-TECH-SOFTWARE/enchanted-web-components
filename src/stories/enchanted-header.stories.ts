import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-header';
import { HEADER_VARIANT } from '../types/cssClassEnums';

const meta: Meta = {
  title: 'Navigation/enchanted-header',
  component: 'enchanted-header',
  tags: ['autodocs'],
  argTypes: {
    headerTitle: {
      control: { type: 'text' },
      description: 'Title text displayed in the header. Used when variant is undefined or for custom header titles. Overridden by localized messages in specific variants.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
    variant: {
      control: { type: 'radio' },
      options: [HEADER_VARIANT.HEADER_AUTHORING, HEADER_VARIANT.HEADER_AUTHORING_MODAL_CLOSE, HEADER_VARIANT.HEADER_ENDUSER],
      description: 'Header variant controlling layout and content. Options: HEADER_AUTHORING (with search input and filter), ' +
        'HEADER_AUTHORING_MODAL_CLOSE (with search button), HEADER_ENDUSER (end-user interface). Each variant has specific UI patterns.',
      table: { category: 'Layout', type: { summary: 'HEADER_VARIANT' }, defaultValue: { summary: HEADER_VARIANT.HEADER_AUTHORING } },
    },
    showBackIcon: {
      control: { type: 'boolean' },
      description: 'Shows or hides the back/chevron-left icon at the start of the header. When enabled, displays a navigation back button for hierarchical navigation.',
      table: { category: 'Display', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    isSideNavOpen: {
      control: { type: 'boolean' },
      description: 'Indicates whether the side navigation is open. Controls related header styling and layout adjustments when side navigation panel is visible.',
      table: { category: 'State', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables interactive elements within the header. When true, header actions and buttons are disabled and non-interactive.',
      table: { category: 'State', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
  args: {
    headerTitle: 'Header Title',
    variant: HEADER_VARIANT.HEADER_AUTHORING,
    showBackIcon: false,
    isSideNavOpen: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        component: 'Header component for application navigation and branding. Features multiple variants (authoring, authoring modal, end-user), ' +
          'customizable color, optional back navigation icon, and side navigation integration. ' +
          'Each variant provides specific UI patterns including search inputs, filter buttons, and localized content. ' +
          'Supports disabled states and responsive layout adjustments.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<{
  headerTitle: string;
  variant: string;
  showBackIcon: boolean;
  isSideNavOpen: boolean;
  disabled: boolean;
}>;

export const EnchantedHeader: Story = {
  render: (args) => {
    return html`
      <enchanted-header
        .headerTitle=${args.headerTitle}
        .variant=${args.variant}
        ?showBackIcon=${args.showBackIcon}
        ?isSideNavOpen=${args.isSideNavOpen}
        ?disabled=${args.disabled}
      ></enchanted-header>
    `;
  },
  name: 'Default',
};

export const AllStates: StoryObj = {
  render: () => {
    return html`
      <div style="display: flex; flex-direction: column; gap: 40px;">
        <div>
          <h3 style="margin: 0 0 20px 0;">Header Variants</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Authoring Variant (with search input and filter)</p>
              <enchanted-header .variant=${HEADER_VARIANT.HEADER_AUTHORING}></enchanted-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Authoring Modal Close Variant (with search button)</p>
              <enchanted-header .variant=${HEADER_VARIANT.HEADER_AUTHORING_MODAL_CLOSE}></enchanted-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">End-User Variant</p>
              <enchanted-header .variant=${HEADER_VARIANT.HEADER_ENDUSER}></enchanted-header>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Custom Titles (No Variant)</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Default Custom Title</p>
              <enchanted-header .headerTitle=${'Custom Application Header'}></enchanted-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Custom Title with Back Icon</p>
              <enchanted-header .headerTitle=${'Settings'} ?showBackIcon=${true}></enchanted-header>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">State Variations</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">With Side Nav Open</p>
              <enchanted-header .headerTitle=${'Side Nav Open'} ?isSideNavOpen=${true}></enchanted-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Disabled State (Authoring Modal Close)</p>
              <enchanted-header .variant=${HEADER_VARIANT.HEADER_AUTHORING_MODAL_CLOSE} ?disabled=${true}></enchanted-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Back Icon + Side Nav Open</p>
              <enchanted-header .headerTitle=${'Dashboard'} ?showBackIcon=${true} ?isSideNavOpen=${true}></enchanted-header>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Combined Features</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Authoring Variant + Disabled</p>
              <enchanted-header .variant=${HEADER_VARIANT.HEADER_AUTHORING} ?disabled=${true}></enchanted-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Custom Title + All States Active</p>
              <enchanted-header .headerTitle=${'Profile Settings'} ?showBackIcon=${true} ?isSideNavOpen=${true}></enchanted-header>
            </div>
          </div>
        </div>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all header variants, configurations, and states. Demonstrates 3 header variants (authoring, authoring modal close, end-user), ' +
          'custom titles with optional back icons, state changes (side nav open, disabled), and combined feature scenarios. ' +
          'Shows 11 different header configurations highlighting the full range of customization options including variant-specific UI patterns, ' +
          'navigation states, and accessibility features.'
      }
    },
    controls: { disable: true },
  },
};
