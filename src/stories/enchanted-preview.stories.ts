import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-preview';

/**
 * @typedef AssetRendition
 * @property id - Rendition id
 * @property type - Rendition type
 * @property source - Source URL
 * @property dimension - Optional dimension
 */
export interface AssetRendition {
  id: string;
  type: string;
  source: string;
  dimension?: string;
}

/**
 * @typedef PreviewItem
 * @property id - Item id
 * @property title - Item title
 * @property type - Item type (e.g. 'image', 'video', 'pdf')
 * @property renditions - Optional renditions
 * @property fileExtension - Optional file extension
 */
export interface PreviewItem {
  id: number | string;
  title: string;
  type: string;
  renditions?: AssetRendition[];
  fileExtension?: string;
}

/**
 * @typedef EnchantedPreviewProps
 * Props for the enchanted-preview web component.
 *
 * @property open - Whether the preview is open
 * @property items - The preview items array
 * @property customHeaderTitle - Custom header title text
 * @property component - Custom component or template
 * @property isPreviousButtonDisabled - Disables the previous button
 * @property isNextButtonDisabled - Disables the next button
 * @property renditionLabel - Label for the rendition selector dropdown
 * @property selectButtonTitle - Title for select button
 * @property currentItemIndex - Current item index being displayed
 * @property selectedRenditionId - ID of the currently selected rendition
 * @property skipSourceValidation - Skip source URL validation
 */
export interface EnchantedPreviewProps {
  open?: boolean;
  items?: PreviewItem[];
  customHeaderTitle?: string;
  component?: unknown;
  isPreviousButtonDisabled?: boolean;
  isNextButtonDisabled?: boolean;
  renditionLabel?: string;
  selectButtonTitle?: string;
  currentItemIndex?: number;
  selectedRenditionId?: string | null;
  skipSourceValidation?: boolean;
}

const IMAGE_RENDITIONS: AssetRendition[] = [
  { id: 'original', type: 'Original', source: new URL('../_tests_/assets/test-image.jpg', import.meta.url).href, dimension: '600x400' },
  { id: 'thumb', type: 'Thumbnail', source: new URL('../_tests_/assets/test-image.jpg', import.meta.url).href, dimension: '150x100' },
];

const PREVIEW_ITEMS: PreviewItem[] = [
  { id: 1, title: 'Sample Image', type: 'image', renditions: IMAGE_RENDITIONS, fileExtension: 'jpg' },
  { id: 2, title: 'Sample Video', type: 'video', fileExtension: 'mp4' },
  { id: 3, title: 'Unsupported File', type: 'pdf', fileExtension: 'pdf' },
];

const meta: Meta<EnchantedPreviewProps> = {
  title: 'Overlay/enchanted-preview',
  component: 'enchanted-preview',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Preview component displays media items in a full-screen overlay with navigation controls. Supports images, videos, and documents with multiple ' +
          'renditions. Features include zoom controls, previous/next navigation, rendition selection, and custom header titles. Use this component for viewing and ' +
          'selecting media assets from collections or galleries.',
      },
    },
  },
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'Controls preview visibility. When true, displays the preview overlay in full-screen mode. Close with the close button or ESC key.',
      table: { category: 'State', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    items: {
      control: { type: 'object' },
      description: 'Array of preview items to display. Each item should include id, title, type, optional renditions, and fileExtension. Supports images, videos, PDFs, etc.',
      table: { category: 'Content', type: { summary: 'PreviewItem[]' }, defaultValue: { summary: '[]' } },
    },
    customHeaderTitle: {
      control: { type: 'text' },
      description: 'Custom text displayed in the preview header. Overrides the default item title. Use for contextual information or custom naming.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
    component: {
      control: { type: 'object' },
      description: 'Custom component or template to render in the preview area. Allows full customization of the preview content beyond standard media types.',
      table: { category: 'Content', type: { summary: 'TemplateResult | string' }, defaultValue: { summary: '' } },
    },
    isPreviousButtonDisabled: {
      control: { type: 'boolean' },
      description: 'Disables the previous navigation button. Automatically set to true when viewing the first item. Can be manually controlled.',
      table: { category: 'State', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    isNextButtonDisabled: {
      control: { type: 'boolean' },
      description: 'Disables the next navigation button. Automatically set to true when viewing the last item. Can be manually controlled.',
      table: { category: 'State', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    renditionLabel: {
      control: { type: 'text' },
      description: 'Label text for the rendition selector dropdown. Appears next to the rendition selection control when multiple renditions are available.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
    selectButtonTitle: {
      control: { type: 'text' },
      description: 'Title text for the select button in the toolbar. Used when preview is in selection mode to choose items.',
      table: { category: 'Content', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
    currentItemIndex: {
      control: { type: 'number', min: 0, max: PREVIEW_ITEMS.length },
      description: 'Zero-based index of the currently displayed item. Updates as users navigate through items. Used to track position in the items array.',
      table: { category: 'State', type: { summary: 'number' }, defaultValue: { summary: '0' } },
    },
    selectedRenditionId: {
      control: { type: 'text' },
      description: 'ID of the currently selected rendition. Used to control which rendition is displayed when an item has multiple renditions available.',
      table: { category: 'State', type: { summary: 'string' }, defaultValue: { summary: 'null' } },
    },
    skipSourceValidation: {
      control: { type: 'boolean' },
      description: 'Skips validation of source URLs when true. Useful for development or when using custom source handlers that may not be standard URLs.',
      table: { category: 'Behavior', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
  args: {
    open: true,
    items: PREVIEW_ITEMS,
    customHeaderTitle: '',
    component: '',
    isPreviousButtonDisabled: false,
    isNextButtonDisabled: false,
    renditionLabel: 'Rendition',
    selectButtonTitle: '',
    currentItemIndex: 0,
    selectedRenditionId: null,
    skipSourceValidation: false,
  },
};

export default meta;

type Story = StoryObj<EnchantedPreviewProps>;

export const EnchantedPreviewStory: Story = {
  name: 'Default',
  render: (args) => {
    return html`
      <enchanted-preview
        ?open=${args.open}
        .items=${args.items}
        customHeaderTitle="${args.customHeaderTitle}"
        .component=${args.component}
        ?isPreviousButtonDisabled=${args.isPreviousButtonDisabled}
        ?isNextButtonDisabled=${args.isNextButtonDisabled}
        renditionLabel="${args.renditionLabel}"
        selectButtonTitle="${args.selectButtonTitle}"
        .currentItemIndex=${args.currentItemIndex}
        selectedRenditionId="${args.selectedRenditionId}"
        ?skipSourceValidation=${args.skipSourceValidation}
      ></enchanted-preview>
    `;
  },
};
