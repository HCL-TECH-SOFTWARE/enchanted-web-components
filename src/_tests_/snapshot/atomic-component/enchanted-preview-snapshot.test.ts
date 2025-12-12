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
import { html, render, TemplateResult } from 'lit';
import { $, browser } from '@wdio/globals';

import { AssetRendition, PreviewItem } from '../../../components/atomic-component/enchanted-preview';

import '../../../components/atomic-component/enchanted-preview';
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';
import { ItemTypes } from '../../../types/enchanted-preview';
import { initSessionStorage } from '../../utils';

const localization: Map<string, string> = new Map<string, string>();
localization.set('preview.item.unsupported.title', 'Unable to preview');
localization.set('preview.rendition.label', 'Rendition:');
localization.set('preview.item.unsupported.description', 'Preview of {itemType} item type is not currently supported.');
localization.set('select', 'Select');

const base64PngCalibratedFor50Percent = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAABNJREFUaEPMZgAEMAABA+D/n05lAQCz8QGjLz3YGAAAAABJRU5ErkJggg==';
const mockImageRenditions: AssetRendition[] = [
  { id: 'rend1', type: 'Original', source: base64PngCalibratedFor50Percent, dimension: '1024x768' },
  { id: 'rend2', type: 'Desktop', source: 'mock-image.jpg', dimension: '640x426' },
];

const mockVideoRenditions: AssetRendition[] = [
  { id: 'vidRend1', type: 'Original', source: '/src/_tests_/assets/test-video.mp4' }
];

const mockImageItem: PreviewItem = {
  id: 1,
  title: 'Test Image 1',
  type: ItemTypes.DAM_PNG,
  renditions: mockImageRenditions,
};

const mockImageItem2: PreviewItem = {
  id: 2,
  title: 'Test Image 2',
  type: ItemTypes.DAM_PNG,
  renditions: [{ id: 'img2rend1', type: 'Original', source: 'image2.png', dimension: '800x600' }],
};

const mockVideoItem: PreviewItem = {
  id: 3,
  title: 'Test Video',
  type: ItemTypes.DAM_MP4,
  renditions: mockVideoRenditions,
};

const mockUnsupportedItem: PreviewItem = {
  id: 4,
  title: 'Test Collection',
  type: ItemTypes.DAM_COLLECTION, 
};

const mockCustomComponent: TemplateResult = html`<p data-testid="custom-component">Custom Component Content</p>`;

const mockItems = [mockImageItem, mockVideoItem, mockImageItem2];

describe('EnchantedPreview - Snapshot testing', () => {
  before(async () => {
    await initSessionStorage();
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
    appendEnchantedStylingLink();
  });

  it('EnchantedPreview - should capture with Image item and display zoom controls - Authoring', async () => {
    render(
      html`
        <div data-testid="enchanted-preview-layout" style=${`width: ${SNAPSHOT_WINDOW_WIDTH}px; height: 1600px;`}>
          <enchanted-preview open .items=${[mockImageItem]} .localization=${localization}></enchanted-preview>
        </div>
      `,
      document.body
    );

    const enchantedPreviewLayout = await $('>>>div[data-testid="enchanted-preview-layout"]');
    // This timeout is needed, that all CSS effects (like transitions) are completely done before the snapshot will taken.
    await browser.pause(2000);
    await browser.checkElement(enchantedPreviewLayout, 'enchanted-preview-open-image-item-authoring-1');
  });

  it('EnchantedPreview - should capture with Video item - Authoring', async () => {
    render(
      html`
        <div data-testid="enchanted-preview-layout" style=${`width: ${SNAPSHOT_WINDOW_WIDTH}px; height: 1600px;`}>
          <enchanted-preview open .items=${[mockVideoItem]} .localization=${localization}></enchanted-preview>
        </div>
      `,
      document.body
    );

    const enchantedPreviewLayout = await $('>>>div[data-testid="enchanted-preview-layout"]');
    // This timeout is needed, that all CSS effects (like transitions) are completely done before the snapshot will taken.
    await browser.pause(2000);
    await browser.checkElement(enchantedPreviewLayout, 'enchanted-preview-open-video-item-authoring-1');
  });

  it('EnchantedPreview - should capture with Unsupported item - Authoring', async () => {
    render(
      html`
        <div data-testid="enchanted-preview-layout" style=${`width: ${SNAPSHOT_WINDOW_WIDTH}px; height: 1600px;`}>
          <enchanted-preview open .items=${[mockUnsupportedItem]} .localization=${localization}></enchanted-preview>
        </div>
      `,
      document.body
    );

    const enchantedPreviewLayout = await $('>>>div[data-testid="enchanted-preview-layout"]');
    // This timeout is needed, that all CSS effects (like transitions) are completely done before the snapshot will taken.
    await browser.pause(2000);
    await browser.checkElement(enchantedPreviewLayout, 'enchanted-preview-open-unsupported-item-authoring-1');
  });

  it('EnchantedPreview - should capture with custom component - Authoring', async () => {
    render(
      html`
        <div data-testid="enchanted-preview-layout" style=${`width: ${SNAPSHOT_WINDOW_WIDTH}px; height: 1600px;`}>
          <enchanted-preview open .component=${mockCustomComponent} .localization=${localization}></enchanted-preview>
        </div>
      `,
      document.body
    );

    const enchantedPreviewLayout = await $('>>>div[data-testid="enchanted-preview-layout"]');
    // This timeout is needed, that all CSS effects (like transitions) are completely done before the snapshot will taken.
    await browser.pause(2000);
    await browser.checkElement(enchantedPreviewLayout, 'enchanted-preview-open-custom-component-item-authoring-1');
  });

  it('EnchantedPreview - should capture with custom header title - Authoring', async () => {
    render(
      html`
        <div data-testid="enchanted-preview-layout" style=${`width: ${SNAPSHOT_WINDOW_WIDTH}px; height: 1600px;`}>
          <enchanted-preview 
            open 
            .items=${[mockImageItem]} 
            .localization=${localization}
            customHeaderTitle="My Custom Title Snapshot"
          ></enchanted-preview>
        </div>
      `,
      document.body
    );

    const enchantedPreviewLayout = await $('>>>div[data-testid="enchanted-preview-layout"]');
    // This timeout is needed, that all CSS effects (like transitions) are completely done before the snapshot will taken.
    await browser.pause(2000);
    await browser.checkElement(enchantedPreviewLayout, 'enchanted-preview-open-with-custom-header-title-authoring-1');
  });

  it('EnchantedPreview - should capture empty items - Authoring', async () => {
    render(
      html`
        <div data-testid="enchanted-preview-layout" style=${`width: ${SNAPSHOT_WINDOW_WIDTH}px; height: 1600px;`}>
          <enchanted-preview 
            open 
            .items=${[]} 
            .localization=${localization}
          ></enchanted-preview>
        </div>
      `,
      document.body
    );

    const enchantedPreviewLayout = await $('>>>div[data-testid="enchanted-preview-layout"]');
    // This timeout is needed, that all CSS effects (like transitions) are completely done before the snapshot will taken.
    await browser.pause(2000);
    await browser.checkElement(enchantedPreviewLayout, 'enchanted-preview-open-with-empty-items-authoring-1');
  });

  it('EnchantedPreview - should capture Image with multiple renditions (show select dropdown) - Authoring', async () => {
    render(
      html`
        <div data-testid="enchanted-preview-layout" style=${`width: ${SNAPSHOT_WINDOW_WIDTH}px; height: 1600px;`}>
          <enchanted-preview open .items=${[mockImageItem]} .localization=${localization}></enchanted-preview>
        </div>
      `,
      document.body
    );

    const enchantedPreviewLayout = await $('>>>div[data-testid="enchanted-preview-layout"]');
    const renditionSelect = await enchantedPreviewLayout.$('>>>enchanted-select[data-testid="enchanted-preview-rendition-select"]');
    const renditionSelectButton = await renditionSelect.$('>>>enchanted-button[data-testid="enchanted-select-button"]');
    await renditionSelectButton.click();
    // This timeout is needed, that all CSS effects (like transitions) are completely done before the snapshot will taken.
    await browser.pause(2000);
    await browser.checkElement(enchantedPreviewLayout, 'enchanted-preview-open-image-renditions-select-authoring-1');
  });

  it('EnchantedPreview - should capture with custom rendition label - Authoring', async () => {
    render(
      html`
        <div data-testid="enchanted-preview-layout" style=${`width: ${SNAPSHOT_WINDOW_WIDTH}px; height: 1600px;`}>
          <enchanted-preview 
            open 
            .items=${[mockImageItem]} 
            .localization=${localization}
            renditionLabel="My Custom Rendition Label"
          ></enchanted-preview>
        </div>
      `,
      document.body
    );

    const enchantedPreviewLayout = await $('>>>div[data-testid="enchanted-preview-layout"]');
    // This timeout is needed, that all CSS effects (like transitions) are completely done before the snapshot will taken.
    await browser.pause(2000);
    await browser.checkElement(enchantedPreviewLayout, 'enchanted-preview-open-custom-rendition-label-authoring-1');
  });

  it('EnchantedPreview - should capture with custom select button title - Authoring', async () => {
    render(
      html`
        <div data-testid="enchanted-preview-layout" style=${`width: ${SNAPSHOT_WINDOW_WIDTH}px; height: 1600px;`}>
          <enchanted-preview 
            open 
            .items=${[mockImageItem]} 
            .localization=${localization}
            selectButtonTitle="My Custom Select Button Title"
          ></enchanted-preview>
        </div>
      `,
      document.body
    );

    const enchantedPreviewLayout = await $('>>>div[data-testid="enchanted-preview-layout"]');
    // This timeout is needed, that all CSS effects (like transitions) are completely done before the snapshot will taken.
    await browser.pause(2000);
    await browser.checkElement(enchantedPreviewLayout, 'enchanted-preview-open-custom-select-button-title-authoring-1');
  });

  it('EnchantedPreview - should capture with both previous and next buttons enabled - Authoring', async () => {
    render(
      html`
        <div data-testid="enchanted-preview-layout" style=${`width: ${SNAPSHOT_WINDOW_WIDTH}px; height: 1600px;`}>
          <enchanted-preview 
            open 
            .items=${mockItems} 
            .localization=${localization}
          ></enchanted-preview>
        </div>
      `,
      document.body
    );

    const enchantedPreviewLayout = await $('>>>div[data-testid="enchanted-preview-layout"]');
    const enchantedPreviewNextButton = await enchantedPreviewLayout.$('>>>enchanted-icon-button[data-testid="enchanted-preview-next-button"]');
    
    await enchantedPreviewNextButton.moveTo();
    await enchantedPreviewNextButton.click();
    // This timeout is needed, that all CSS effects (like transitions) are completely done before the snapshot will taken.
    await browser.pause(2000);
    await browser.checkElement(enchantedPreviewLayout, 'enchanted-preview-open-previous-next-buttons-enabled-authoring-1');
  });

  it('EnchantedPreview - should capture with next button disabled - Authoring', async () => {
    render(
      html`
        <div data-testid="enchanted-preview-layout" style=${`width: ${SNAPSHOT_WINDOW_WIDTH}px; height: 1600px;`}>
          <enchanted-preview 
            open 
            .items=${[mockImageItem, mockImageItem2]} 
            .localization=${localization}
          ></enchanted-preview>
        </div>
      `,
      document.body
    );

    const enchantedPreviewLayout = await $('>>>div[data-testid="enchanted-preview-layout"]');
    const enchantedPreviewNextButton = await enchantedPreviewLayout.$('>>>enchanted-icon-button[data-testid="enchanted-preview-next-button"]');

    await enchantedPreviewNextButton.click();
    // This timeout is needed, that all CSS effects (like transitions) are completely done before the snapshot will taken.
    await browser.pause(2000);
    await browser.checkElement(enchantedPreviewLayout, 'enchanted-preview-open-next-button-disabled-authoring-1');
  });
  
  it('EnchantedPreview - should capture zoom in - Authoring', async () => {
    render(
      html`
        <div data-testid="enchanted-preview-layout" style=${`width: ${SNAPSHOT_WINDOW_WIDTH}px; height: 1600px;`}>
          <enchanted-preview 
            open 
            .items=${[mockImageItem]} 
            .localization=${localization}
          ></enchanted-preview>
        </div>
      `,
      document.body
    );

    const enchantedPreviewLayout = await $('>>>div[data-testid="enchanted-preview-layout"]');
    const enchantedPreviewZoomInButton = await enchantedPreviewLayout.$('>>>enchanted-icon-button[data-testid="enchanted-preview-zoom-in-button"]');

    await enchantedPreviewZoomInButton.click();
    // This timeout is needed, that all CSS effects (like transitions) are completely done before the snapshot will taken.
    await browser.pause(2000);
    await browser.checkElement(enchantedPreviewLayout, 'enchanted-preview-open-zoom-in-authoring-1');
  });

  it('EnchantedPreview - should capture zoom out - Authoring', async () => {
    render(
      html`
        <div data-testid="enchanted-preview-layout" style=${`width: ${SNAPSHOT_WINDOW_WIDTH}px; height: 1600px;`}>
          <enchanted-preview 
            open 
            .items=${[mockImageItem]} 
            .localization=${localization}
          ></enchanted-preview>
        </div>
      `,
      document.body
    );

    const enchantedPreviewLayout = await $('>>>div[data-testid="enchanted-preview-layout"]');
    const enchantedPreviewZoomOutButton = await enchantedPreviewLayout.$('>>>enchanted-icon-button[data-testid="enchanted-preview-zoom-out-button"]');

    await enchantedPreviewZoomOutButton.click();
    // This timeout is needed, that all CSS effects (like transitions) are completely done before the snapshot will taken.
    await browser.pause(2000);
    await browser.checkElement(enchantedPreviewLayout, 'enchanted-preview-open-zoom-out-authoring-1');
  });

  it('EnchantedPreview - should capture disabled zoom in button - Authoring', async () => {
    render(
      html`
        <div data-testid="enchanted-preview-layout" style=${`width: ${SNAPSHOT_WINDOW_WIDTH}px; height: 1600px;`}>
          <enchanted-preview 
            open 
            .items=${[mockImageItem]} 
            .localization=${localization}
          ></enchanted-preview>
        </div>
      `,
      document.body
    );

    const enchantedPreviewLayout = await $('>>>div[data-testid="enchanted-preview-layout"]');
    const enchantedPreviewZoomInButton = await enchantedPreviewLayout.$('>>>enchanted-icon-button[data-testid="enchanted-preview-zoom-in-button"]');

    await enchantedPreviewZoomInButton.moveTo();
    await enchantedPreviewZoomInButton.click();
    await enchantedPreviewZoomInButton.click();
    await enchantedPreviewZoomInButton.click();
    await enchantedPreviewZoomInButton.click();
    await enchantedPreviewZoomInButton.click();
    await enchantedPreviewZoomInButton.click();
    await enchantedPreviewLayout.moveTo();
    // This timeout is needed, that all CSS effects (like transitions) are completely done before the snapshot will taken.
    await browser.pause(2000);
    await browser.checkElement(enchantedPreviewLayout, 'enchanted-preview-open-zoom-in-disabled-authoring-1');
  });

  it('EnchantedPreview - should capture zoom out disabled - Authoring', async () => {
    render(
      html`
        <div data-testid="enchanted-preview-layout" style=${`width: ${SNAPSHOT_WINDOW_WIDTH}px; height: 1600px;`}>
          <enchanted-preview 
            open 
            .items=${[mockImageItem]} 
            .localization=${localization}
          ></enchanted-preview>
        </div>
      `,
      document.body
    );

    const enchantedPreviewLayout = await $('>>>div[data-testid="enchanted-preview-layout"]');
    const enchantedPreviewZoomOutButton = await enchantedPreviewLayout.$('>>>enchanted-icon-button[data-testid="enchanted-preview-zoom-out-button"]');

    await enchantedPreviewZoomOutButton.click();
    await enchantedPreviewZoomOutButton.click();
    await enchantedPreviewZoomOutButton.click();
    await enchantedPreviewZoomOutButton.click();
    // This timeout is needed, that all CSS effects (like transitions) are completely done before the snapshot will taken.
    await browser.pause(2000);
    await browser.checkElement(enchantedPreviewLayout, 'enchanted-preview-open-zoom-out-disabled-authoring-1');
  });
});
