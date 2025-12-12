import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-dialog';
import { DialogSizes } from '../types/enchanted-dialog';

const meta: Meta = {
  title: 'Feedback/enchanted-dialog',
  component: 'enchanted-dialog',
  tags: ['autodocs'],
  argTypes: {
    dialogTitle: {
      control: { type: 'text' },
      description: 'Title text displayed in the dialog header. Provides context about the dialog purpose. Used for accessibility (aria-label) and screen reader announcements.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
    size: {
      control: { type: 'radio' },
      options: [DialogSizes.XL, DialogSizes.LG, DialogSizes.MD, DialogSizes.SM, DialogSizes.XS],
      description: 'Dialog size variant controlling width and layout. Options: xl (extra large), lg (large), md (medium), sm (small), xs (extra small). ' +
        'Affects dialog dimensions and responsive behavior.',
      table: { category: 'Layout', type: { summary: 'DialogSizes' }, defaultValue: { summary: DialogSizes.XL } },
    },
    open: {
      control: { type: 'boolean' },
      description: 'Controls dialog visibility and open state. When true, dialog displays with backdrop overlay. Reflects to DOM attribute for CSS styling. Manages focus and ARIA announcements.',
      table: { category: 'State', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    overrideTitle: {
      control: { type: 'boolean' },
      description: 'Enables custom title content via slot. When true, uses the "title" slot instead of dialogTitle property. Allows complex title layouts with icons, badges, or custom styling.',
      table: { category: 'Display', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    removeBorder: {
      control: { type: 'boolean' },
      description: 'Removes the border from the dialog container. When true, displays dialog without border styling. Useful for custom styling or seamless integration with page design.',
      table: { category: 'Styling', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
  args: {
    dialogTitle: 'Dialog Title',
    size: DialogSizes.XL,
    open: true,
    overrideTitle: false,
    removeBorder: false,
  },
  parameters: {
    docs: {
      description: {
        component: 'Dialog component for displaying modal content with backdrop overlay. Features multiple size variants (xl to xs), customizable title, ' +
          'slotted content areas (title, content, footer), and accessibility support with focus management and ARIA announcements. ' +
          'Supports keyboard navigation (Escape to close) and automatic screen reader notifications.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<{
  dialogTitle: string;
  size: string;
  open: boolean;
  overrideTitle: boolean;
  removeBorder: boolean;
}>;

export const EnchantedDialog: Story = {
  render: (args) => {
    return html`
      <enchanted-dialog
        .dialogTitle=${args.dialogTitle}
        .size=${args.size}
        ?open=${args.open}
        ?overrideTitle=${args.overrideTitle}
        ?removeBorder=${args.removeBorder}
      >
        <span slot="title">Custom Title Slot</span>
        <div slot="content">Dialog content goes here.</div>
        <div slot="footer">Footer actions here.</div>
      </enchanted-dialog>
    `;
  },
  name: 'Default'
};

export const AllStates: StoryObj = {
  render: () => {
    return html`
      <div style="display: flex; flex-direction: column; gap: 40px; padding: 20px;">
        <div>
          <h3 style="margin-top: 0;">Dialog Sizes</h3>
          <p style="margin: 10px 0; color: #666;">All dialogs shown with open=true for visualization. In production, only one dialog would be open at a time.</p>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <enchanted-dialog .dialogTitle=${'Extra Large Dialog (XL)'} .size=${DialogSizes.XL} ?open=${true}>
              <div slot="content">
                <p>This is an extra large (XL) dialog. It provides the most space for content and is suitable for complex forms or detailed information displays.</p>
                <p>Content can include multiple paragraphs, forms, tables, or any other HTML elements.</p>
              </div>
              <div slot="footer">
                <button>Cancel</button>
                <button>Confirm</button>
              </div>
            </enchanted-dialog>

            <enchanted-dialog .dialogTitle=${'Large Dialog (LG)'} .size=${DialogSizes.LG} ?open=${true}>
              <div slot="content">
                <p>This is a large (LG) dialog. It provides ample space for most use cases including forms with multiple fields.</p>
              </div>
              <div slot="footer">
                <button>Cancel</button>
                <button>Save</button>
              </div>
            </enchanted-dialog>

            <enchanted-dialog .dialogTitle=${'Medium Dialog (MD)'} .size=${DialogSizes.MD} ?open=${true}>
              <div slot="content">
                <p>This is a medium (MD) dialog. A balanced size suitable for most standard dialogs with moderate content.</p>
              </div>
              <div slot="footer">
                <button>OK</button>
              </div>
            </enchanted-dialog>

            <enchanted-dialog .dialogTitle=${'Small Dialog (SM)'} .size=${DialogSizes.SM} ?open=${true}>
              <div slot="content">
                <p>This is a small (SM) dialog. Compact size for simple messages or quick confirmations.</p>
              </div>
              <div slot="footer">
                <button>Close</button>
              </div>
            </enchanted-dialog>

            <enchanted-dialog .dialogTitle=${'Extra Small Dialog (XS)'} .size=${DialogSizes.XS} ?open=${true}>
              <div slot="content">
                <p>Extra small (XS) dialog for minimal content or quick alerts.</p>
              </div>
              <div slot="footer">
                <button>OK</button>
              </div>
            </enchanted-dialog>
          </div>
        </div>

        <div style="margin-top: 40px;">
          <h3 style="margin-top: 0;">Dialog Variations</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <enchanted-dialog .dialogTitle=${'Dialog with Custom Title Slot'} .size=${DialogSizes.MD} ?open=${true} ?overrideTitle=${true}>
              <span slot="title" style="display: flex; align-items: center; gap: 8px; color: #1976d2;">
                <span>🔔</span>
                <strong>Custom Styled Title with Icon</strong>
              </span>
              <div slot="content">
                <p>This dialog uses the overrideTitle property to display custom content in the title slot.</p>
                <p>The title can include icons, badges, or any custom HTML/styling.</p>
              </div>
              <div slot="footer">
                <button>Dismiss</button>
              </div>
            </enchanted-dialog>

            <enchanted-dialog .dialogTitle=${'Dialog without Border'} .size=${DialogSizes.MD} ?open=${true} ?removeBorder=${true}>
              <div slot="content">
                <p>This dialog has removeBorder set to true, removing the border styling from the dialog container.</p>
                <p>Useful for custom styling or seamless integration with specific design requirements.</p>
              </div>
              <div slot="footer">
                <button>Close</button>
              </div>
            </enchanted-dialog>

            <enchanted-dialog .dialogTitle=${'Dialog with Rich Content'} .size=${DialogSizes.LG} ?open=${true}>
              <div slot="content">
                <h4 style="margin-top: 0;">Form Example</h4>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                  <div>
                    <label style="display: block; margin-bottom: 4px; font-weight: 500;">Name:</label>
                    <input type="text" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" placeholder="Enter your name"/>
                  </div>
                  <div>
                    <label style="display: block; margin-bottom: 4px; font-weight: 500;">Email:</label>
                    <input type="email" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" placeholder="Enter your email"/>
                  </div>
                  <div>
                    <label style="display: block; margin-bottom: 4px; font-weight: 500;">Message:</label>
                    <textarea style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; min-height: 80px;" placeholder="Enter your message"></textarea>
                  </div>
                </div>
              </div>
              <div slot="footer">
                <button>Cancel</button>
                <button style="background: #1976d2; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Submit</button>
              </div>
            </enchanted-dialog>

            <enchanted-dialog .dialogTitle=${'Confirmation Dialog'} .size=${DialogSizes.SM} ?open=${true}>
              <div slot="content">
                <p style="margin: 0;">Are you sure you want to delete this item? This action cannot be undone.</p>
              </div>
              <div slot="footer" style="display: flex; gap: 8px; justify-content: flex-end;">
                <button style="padding: 8px 16px; border: 1px solid #ccc; background: white; border-radius: 4px; cursor: pointer;">Cancel</button>
                <button style="padding: 8px 16px; background: #d32f2f; color: white; border: none; border-radius: 4px; cursor: pointer;">Delete</button>
              </div>
            </enchanted-dialog>
          </div>
        </div>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all dialog sizes and variations. Demonstrates 5 size variants (xl, lg, md, sm, xs) and various configurations including ' +
          'custom title slots with overrideTitle, borderless dialogs with removeBorder, rich content forms, and confirmation dialogs. ' +
          'Note: All dialogs shown as open for visualization purposes. In production, typically only one dialog is open at a time with backdrop overlay.'
      }
    },
    controls: { disable: true },
  },
};
