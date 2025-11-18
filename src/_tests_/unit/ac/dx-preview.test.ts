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
import { html, nothing, render, TemplateResult } from 'lit';
import { $, browser, expect } from '@wdio/globals';
import { fn } from '@wdio/browser-runner';
import fetchMock from 'fetch-mock';

import { initSessionStorage } from '../../utils';
import { AssetRendition, DxPreview, PreviewItem } from '../../../components/ac/dx-preview';
import { PREVIEW_PARTS } from '../../../types/cssClassEnums';
import { ItemTypes, ValidationStatus } from '../../../types/dx-preview';
import { OptionData } from '../../../types/dx-input-select';
import '../../../components/ac/dx-preview';
import { KeyboardInputKeys } from '../../../utils/keyboardEventKeys';

const dxLocalization: Map<string, string> = new Map<string, string>();
dxLocalization.set('preview.item.unsupported.title', 'Unable to preview');
dxLocalization.set('preview.rendition.label', 'Rendition:');
dxLocalization.set('preview.item.unsupported.description', 'Preview of collection item type is not currently supported.');
dxLocalization.set('preview.rendition.metadata.unknown', 'unknown');
dxLocalization.set('select', 'Select');
dxLocalization.set('preview.tooltip.back.button', 'Go back to previous page');
dxLocalization.set('preview.tooltip.download.button', 'Download asset');
dxLocalization.set('preview.tooltip.previous.asset.button', 'Previous asset');
dxLocalization.set('preview.tooltip.next.asset.button', 'Next asset');
dxLocalization.set('preview.tooltip.zoom.out.button', 'Zoom out');
dxLocalization.set('preview.tooltip.zoom.in.button', 'Zoom in');

// mock image for a 50% zoom to fit value (so we have a defined value)
const base64PngCalibratedFor50Percent = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAABNJREFUaEPMZgAEMAABA+D/n05lAQCz8QGjLz3YGAAAAABJRU5ErkJggg==';
const mockImageRenditions: AssetRendition[] = [
  { id: 'rend1', type: 'Original', source: base64PngCalibratedFor50Percent, dimension: '1024x768' },
  { id: 'rend2', type: 'Desktop', source: base64PngCalibratedFor50Percent, dimension: '640 x 426' },
];

const mockVideoRenditions: AssetRendition[] = [
  { id: 'vidRend1', type: 'Original', source: '/src/_tests_/assets/test-video.mp4' },
  { id: 'vidRend2', type: 'Original', source: 'mock-video-2.mp4' },
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

describe('DxPreview component testing', () => {
  const cleanup = () => {
    // Use Lit's render with nothing to properly clean up
    render(nothing, document.body);
    fetchMock.restore();
  };

  before(async () => {
    await browser.setWindowSize(1600, 1200);
    await initSessionStorage();
    fetchMock.restore();
  });

  beforeEach(cleanup);
  afterEach(cleanup);

  it('DxPreview - should render without crashing', async () => {
    let component = document.createElement('dx-preview');
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('DxPreview - removes component from document body and validates removal', async () => {
    let component = document.createElement('dx-preview');
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('DxPreview - should be hidden by default (open=false)', async () => {
    render(html`<dx-preview></dx-preview>`, document.body);
    const component = await $('dx-preview').getElement();

    const container = await component.$(`>>>[part=${PREVIEW_PARTS.PREVIEW_BACKDROP}]`).getElement();
    await expect(component).not.toHaveAttribute('open');
    await expect(container).not.toHaveAttribute('open');
  });

  it('DxPreview - should be visible when open attribute is present', async () => {
    render(html`<dx-preview open></dx-preview>`, document.body);
    const component = await $('dx-preview').getElement();

    const container = await component.$(`>>>[part=${PREVIEW_PARTS.PREVIEW_BACKDROP}]`).getElement();
    await expect(component).toHaveAttribute('open');
    await expect(container).toHaveAttribute('open');
  });

  it('DxPreview - should render nothing in preview area if items array is empty and no component prop', async () => {
    render(
      html`
        <dx-preview open .items=${[]}></dx-preview>
      `,
      document.body
    );
    const component = await $('dx-preview').getElement();

    const previewItemContainer = await component.$(`>>>[part=${PREVIEW_PARTS.PREVIEW_ITEM_CONTAINER}]`).getElement();
    const img = await previewItemContainer.$('img');
    const video = await previewItemContainer.$('video');
    const unsupportedContainer = await previewItemContainer.$(`[part=${PREVIEW_PARTS.PREVIEW_ITEM_UNSUPPORTED_CONTAINER}]`);

    await expect(img).not.toBeExisting();
    await expect(video).not.toBeExisting();
    await expect(unsupportedContainer).not.toBeExisting();
  });

  it('DxPreview - should render image correctly from the first rendition by default', async () => {
    render(
      html`
        <dx-preview open .items=${[mockImageItem]}></dx-preview>
      `,
      document.body
    );
    const component = await $('dx-preview').getElement();

    const img = await component.$(`>>>[part=${PREVIEW_PARTS.PREVIEW_ITEM_IMAGE}]`).getElement();
    await expect(img).toBeDisplayed();
    await expect(img).toHaveAttribute('src', mockImageItem.renditions![0].source);
    await expect(img).toHaveAttribute('alt', mockImageItem.title);
  });

  it('DxPreview - should render video correctly from the first rendition by default', async () => {
    render(
      html`
        <dx-preview open .items=${[mockVideoItem]}></dx-preview>
      `,
      document.body
    );
    const component = await $('dx-preview').getElement();
    const mockStyle = [
      'visibility',
      'height',
      'width',
    ];

    const video = await component.$(`>>>[part=${PREVIEW_PARTS.PREVIEW_ITEM_VIDEO}]`).getElement();
    await expect(video).toBeDisplayed();
    await expect(video).toHaveAttribute('controls');
    await expect(await video.getProperty('src')).toContain(mockVideoItem.renditions![0].source);
    await expect(await video.getProperty('style')).toEqual(mockStyle);
  });

  it('DxPreview - should render unsupported message for other item types', async () => {
    render(
      html`
        <dx-preview open .items=${[mockUnsupportedItem]} .localization=${dxLocalization}></dx-preview>
      `,
      document.body
    );
    const component = await $('dx-preview').getElement();

    const unsupportedContainer = await component.$(`>>>[part=${PREVIEW_PARTS.PREVIEW_ITEM_UNSUPPORTED_CONTAINER}]`).getElement();
    await expect(unsupportedContainer).toBeDisplayed();

    const avatar = await unsupportedContainer.$('dx-item-type-avatar').getElement();
    await expect(avatar).toBeDisplayed();
    await expect(avatar).toHaveAttribute('itemtype', mockUnsupportedItem.type);

    const title = await component.$(`>>>[part=${PREVIEW_PARTS.PREVIEW_ITEM_UNSUPPORTED_MESSAGE_TITLE}]`).getElement();
    await expect(title).toHaveText(dxLocalization.get('preview.item.unsupported.title'));

    const description = await component.$(`>>>[part=${PREVIEW_PARTS.PREVIEW_ITEM_UNSUPPORTED_MESSAGE_DESCRIPTION}]`).getElement();
    const expectedDesc = dxLocalization.get('preview.item.unsupported.description');
    await expect(description).toHaveText(expectedDesc);
  });

  it('DxPreview - should render custom component when component prop is provided, overriding item display', async () => {
    render(
      html`
        <dx-preview open .component=${mockCustomComponent} .items=${[mockImageItem]}></dx-preview>
      `,
      document.body
    );
    const component = await $('dx-preview').getElement();

    const customContent = await component.$('>>>[data-testid="custom-component"]').getElement();
    await expect(customContent).toBeDisplayed();
    await expect(customContent).toHaveText('Custom Component Content');

    const previewItemContainer = await component.$(`>>>[part=${PREVIEW_PARTS.PREVIEW_ITEM_CONTAINER}]`).getElement();
    const img = await previewItemContainer.$('img');
    const video = await previewItemContainer.$('video');
    const unsupportedContainer = await previewItemContainer.$(`[part=${PREVIEW_PARTS.PREVIEW_ITEM_UNSUPPORTED_CONTAINER}]`);

    await expect(img).not.toBeExisting();
    await expect(video).not.toBeExisting();
    await expect(unsupportedContainer).not.toBeExisting();
  });

  it('DxPreview - should display customHeaderTitle in header when provided', async () => {
    const customTitle = 'Custom Title';
    render(
      html`
        <dx-preview open .items=${[mockImageItem]} customHeaderTitle=${customTitle}></dx-preview>
      `,
      document.body
    );
    const component = await $('dx-preview').getElement();

    const headerTitle = await component.$(`>>>span[part=${PREVIEW_PARTS.PREVIEW_HEADER_TITLE}]`).getElement();
    await expect(headerTitle).toHaveText(customTitle);
  });

  it('DxPreview - should dispatch "preview-back" event when back button is clicked', async () => {
    const previewBack = fn();
    render(
      html`
        <dx-preview open .items=${[mockImageItem]} @preview-back=${previewBack}></dx-preview>
      `,
      document.body
    );

    const component = await $('dx-preview').getElement();

    let backButton = await component.$(`>>>[data-testid="dx-preview-back-button"]`).getElement();
    await backButton.waitForClickable();
    await backButton.moveTo();
    backButton = await component.$(`>>>[data-testid="dx-preview-back-button"]`).getElement();
    await backButton.click();

    await expect(previewBack).toHaveBeenCalled();
  });

  it('DxPreview - should dispatch "preview-download" event with selectedRenditionId when download button is clicked', async () => {
    const previewDownload = fn();
    render(
      html`
        <dx-preview open .items=${[mockImageItem]} @preview-download=${previewDownload}></dx-preview>
      `,
      document.body
    );
    const expectedId = mockImageItem.id;
    const expectedTitle = mockImageItem.title;
    const expectedRenditionId = mockImageItem.renditions![0].id;
    const expectedSource = mockImageItem.renditions![0].source;

    let downloadButton = await $('dx-preview').$(`>>>[data-testid="dx-preview-download-button"]`).getElement();
    await downloadButton.waitForClickable();
    await downloadButton.moveTo();
    downloadButton = await $('dx-preview').$(`>>>[data-testid="dx-preview-download-button"]`).getElement();
    await downloadButton.click();

    await expect(previewDownload).toHaveBeenCalled();
    await expect(previewDownload.mock.calls[0][0].detail).toEqual({
      id: expectedId,
      title: expectedTitle, 
      selectedRenditionId: expectedRenditionId, 
      source: expectedSource,
    });
  });

  it('DxPreview - should dispatch "preview-select" event with selectedRenditionId when select button is clicked', async () => {
    const previewSelect = fn();
    render(
      html`
        <dx-preview open .items=${[mockImageItem]} @preview-select=${previewSelect}></dx-preview>
      `,
      document.body
    );
    const expectedId = mockImageItem.id;
    const expectedTitle = mockImageItem.title;
    const expectedRenditionId = mockImageItem.renditions![0].id;
    const expectedSource = mockImageItem.renditions![0].source;

    const selectButton = await $('dx-preview').$(`>>>[data-testid="dx-preview-select-button"]`).getElement();
    await selectButton.click();

    await expect(previewSelect).toHaveBeenCalled();
    await expect(previewSelect.mock.calls[0][0].detail).toEqual({
      id: expectedId,
      title: expectedTitle, 
      selectedRenditionId: expectedRenditionId, 
      source: expectedSource,
    });
  });

  it('DxPreview - should display custom select button title', async () => {
    const customSelectButtonTitle = 'Custom Select';
    render(
      html`
        <dx-preview open .items=${[mockImageItem]} .localization=${dxLocalization} selectButtonTitle=${customSelectButtonTitle}></dx-preview>
      `,
      document.body
    );

    const selectButton = await $('dx-preview').$(`>>>[data-testid="dx-preview-select-button"]`).getElement();
    await expect(selectButton).toHaveAttribute('buttontext', customSelectButtonTitle);
    await expect(selectButton).toHaveText(customSelectButtonTitle);
  });

  it('DxPreview - should not display download button if items length is 0', async () => {
    render(
      html`
        <dx-preview open .items=${[]}></dx-preview>
      `,
      document.body
    );
    const downloadButton = await $('dx-preview').$(`>>>[data-testid="dx-preview-download-button"]`).getElement();
    await expect(downloadButton).not.toBeExisting();
  });

  it('DxPreview - should navigate to the next item when next button is clicked and dispatch "preview-next" event', async () => {
    const previewNext = fn();
    render(
      html`
        <dx-preview open .items=${mockItems} @preview-next=${previewNext}></dx-preview>
      `,
      document.body
    );
    const component = await $('dx-preview').getElement();

    let headerTitle = await component.$(`>>>span[part=${PREVIEW_PARTS.PREVIEW_HEADER_TITLE}]`).getElement();
    await expect(headerTitle).toHaveText(mockItems[0].title);

    let nextButton = await component.$(`>>>[data-testid="dx-preview-next-button"]`).getElement();
    await nextButton.waitForClickable();
    await nextButton.moveTo();
    nextButton = await component.$(`>>>[data-testid="dx-preview-next-button"]`).getElement();
    await nextButton.click();

    await expect(previewNext).toHaveBeenCalled();
    headerTitle = await component.$(`>>>span[part=${PREVIEW_PARTS.PREVIEW_HEADER_TITLE}]`).getElement();
    await expect(headerTitle).toHaveText(mockItems[1].title);

    const video = await component.$(`>>>[part=${PREVIEW_PARTS.PREVIEW_ITEM_VIDEO}]`).getElement();
    await expect(video).toBeDisplayed();
    await expect(await video.getProperty('src')).toContain(mockItems[1].renditions![0].source);
  });

  it('DxPreview - should navigate to the previous item when previous button is clicked and dispatch "preview-previous" event', async () => {
    const previewPrevious = fn();
    render(
      html`
        <dx-preview open .items=${mockItems} @preview-previous=${previewPrevious} .currentItemIndex=${1}></dx-preview>
      `,
      document.body
    );
    const component = await $('dx-preview').getElement();

    let headerTitle = await component.$(`>>>span[part=${PREVIEW_PARTS.PREVIEW_HEADER_TITLE}]`).getElement();
    await expect(headerTitle).toHaveText(mockItems[1].title);

    let previousButton = await component.$(`>>>[data-testid="dx-preview-previous-button"]`).getElement();
    await previousButton.waitForClickable();
    await previousButton.moveTo();
    previousButton = await component.$(`>>>[data-testid="dx-preview-previous-button"]`).getElement();
    await previousButton.click();

    await expect(previewPrevious).toHaveBeenCalled();
    headerTitle = await component.$(`>>>span[part=${PREVIEW_PARTS.PREVIEW_HEADER_TITLE}]`).getElement();
    await expect(headerTitle).toHaveText(mockItems[0].title);
    
    const img = await component.$(`>>>img[part=${PREVIEW_PARTS.PREVIEW_ITEM_IMAGE}]`).getElement();
    await expect(img).toBeDisplayed();
    await expect(img).toHaveAttribute('src', mockItems[0].renditions![0].source);
  });

  it('DxPreview - should disable next/previous buttons at the ends of item list', async () => {
    render(
      html`
        <dx-preview open .items=${mockItems}></dx-preview>
      `,
      document.body
    );

    const component = await $('dx-preview').getElement();
    let nextButton = await component.$(`>>>dx-icon-button[data-testid="dx-preview-next-button"]`).getElement();
    await nextButton.waitForClickable();
    const previousButton = await component.$(`>>>dx-icon-button[data-testid="dx-preview-previous-button"]`).getElement();

    await expect(previousButton).toHaveAttribute('disabled');
    await expect(nextButton).not.toHaveAttribute('disabled');

    await nextButton.moveTo();
    nextButton = await component.$(`>>>dx-icon-button[data-testid="dx-preview-next-button"]`).getElement();
    await nextButton.click();
    await expect(previousButton).not.toHaveAttribute('disabled');
    await expect(nextButton).not.toHaveAttribute('disabled');

    await nextButton.moveTo();
    nextButton = await component.$(`>>>dx-icon-button[data-testid="dx-preview-next-button"]`).getElement();
    await nextButton.click();
    await expect(previousButton).not.toHaveAttribute('disabled');
    await expect(nextButton).toHaveAttribute('disabled');
  });
  
  it('DxPreview - should disable next/previous buttons using isPreviousButtonDisabled/isNextButtonDisabled props', async () => {
    render(
      html`
        <dx-preview open .items=${mockItems} isPreviousButtonDisabled isNextButtonDisabled></dx-preview>
      `,
      document.body
    );

    const component = await $('dx-preview').getElement();
    const nextButton = await component.$(`>>>dx-icon-button[data-testid="dx-preview-next-button"]`).getElement();
    const previousButton = await component.$(`>>>dx-icon-button[data-testid="dx-preview-previous-button"]`).getElement();

    await expect(previousButton).toHaveAttribute('disabled');
    await expect(nextButton).toHaveAttribute('disabled');
  });

  it('DxPreview - should display rendition selector for image item with renditions', async  () => {
    render(
      html`
        <dx-preview open .items=${[mockImageItem]} .localization=${dxLocalization}></dx-preview>
      `,
      document.body
    );

    const component = await $('dx-preview').getElement();
    const renditionSelect = await component.$(`>>>[data-testid="dx-preview-rendition-select"]`).getElement();

    await expect(renditionSelect).toBeDisplayed();

    const renditionLabel = await component.$(`>>>span[part=${PREVIEW_PARTS.PREVIEW_HEADER_RENDITION_LABEL}]`).getElement();
    await expect(renditionLabel).toHaveText(dxLocalization.get('preview.rendition.label'));

    const options = await renditionSelect.getProperty('options');
    const retrievedOptions = options as unknown as OptionData[];

    await expect(retrievedOptions.length).toBe(mockImageItem.renditions!.length);
    await expect(retrievedOptions[0].name).toBe(`${mockImageItem.renditions![0].type} (${mockImageItem.renditions![0].dimension})`);
    await expect(retrievedOptions[0].id).toBe(mockImageItem.renditions![0].id);
  });

  it('DxPreview - should not display rendition selector for unsupported items', async () => {
    render(
      html`
        <dx-preview open .items=${[mockUnsupportedItem]} ></dx-preview>
      `,
      document.body
    );

    const component = await $('dx-preview').getElement();
    const renditionSelect = await component.$(`>>>[data-testid="dx-preview-rendition-select"]`).getElement();
    await expect(renditionSelect).not.toBeExisting();
  });

  it('DxPreview - should update image source and dispatch "preview-rendition-change" when rendition is changed', async () => {
    const renditionChange = fn();

    render(
      html`
        <dx-preview open .items=${[mockImageItem]} @preview-rendition-change=${renditionChange}></dx-preview>
      `,
      document.body
    );

    const component = await $('dx-preview').getElement();
    let img = await component.$(`>>>img[part=${PREVIEW_PARTS.PREVIEW_ITEM_IMAGE}]`).getElement();
    await expect(img).toHaveAttribute('src', mockImageItem.renditions![0].source);

    const renditionSelect = await component.$(`>>>[data-testid="dx-preview-rendition-select"]`).getElement();
    const renditionSelectButton = await renditionSelect.$(`>>>[data-testid="dx-input-select-button"]`).getElement();
    await renditionSelectButton.click();

    const renditionList = await renditionSelect.$(`>>>dx-list[data-testid="dx-input-select-list"]`).getElement();
    const renditionListItems = await renditionList.$$(`>>>dx-list-item`).getElements();

    const secondRenditionListItem = renditionListItems[1];
    await secondRenditionListItem.click();
    await expect(renditionChange).toHaveBeenCalled();
    const secondRendition = mockImageItem.renditions![1];
    await expect(renditionChange.mock.calls[0][0].detail).toEqual({
      id: mockImageItem.id,
      title: mockImageItem.title,
      selectedRenditionId: secondRendition.id,
      source: secondRendition.source
    });

    img = await component.$(`>>>img[part=${PREVIEW_PARTS.PREVIEW_ITEM_IMAGE}]`).getElement();
    await expect(img).toHaveAttribute('src', secondRendition.source);
    await expect(await renditionSelect.getProperty('selectedValue')).toBe(`${secondRendition.type} (${secondRendition.dimension})`);
  });

  it('DxPreview - should display zoom controls for image items without a custom component', async () => {
    render(
      html`
        <dx-preview open .items=${[mockImageItem]}></dx-preview>
      `,
      document.body
    );

    const component = await $('dx-preview').getElement();
    const zoomContainer = await component.$(`>>>div[part=${PREVIEW_PARTS.PREVIEW_ZOOM_CONTAINER}]`);
    await expect(zoomContainer).toBeExisting();
  });

  it('DxPreview - should not display zoom controls for image items with a custom component', async () => {
    render(
      html`
        <dx-preview open .items=${[mockImageItem]} .component=${mockCustomComponent}></dx-preview>
      `,
      document.body
    );
    const component = await $('dx-preview').getElement();
    const zoomContainer = await component.$(`>>>div[part=${PREVIEW_PARTS.PREVIEW_ZOOM_CONTAINER}]`);
    await expect(zoomContainer).not.toBeExisting();
  });

  it('DxPreview - should not display zoom controls for non-image items', async () => {
    render(
      html`
        <dx-preview open .items=${[mockVideoItem]} ></dx-preview>
      `,
      document.body
    );
    const component = await $('dx-preview').getElement();
    const zoomContainer = await component.$(`>>>div[part=${PREVIEW_PARTS.PREVIEW_ZOOM_CONTAINER}]`);
    await expect(zoomContainer).not.toBeExisting();
  });

  it('DxPreview - should increase zoom scale and display correct zoom percentage if zoom in button is clicked', async () => {
    render(
      html`
        <dx-preview open .items=${[mockImageItem]} ></dx-preview>
      `,
      document.body
    );
    const component = await $('dx-preview').getElement();
    
    const img = await component.$(`>>>img[part=${PREVIEW_PARTS.PREVIEW_ITEM_IMAGE}]`);
    let zoomInButton = await component.$(`>>>dx-icon-button[data-testid="dx-preview-zoom-in-button"]`);
    await zoomInButton.waitForClickable();
    const zoomPercentageButton = await component.$(`>>>dx-button[data-testid="dx-preview-zoom-percentage-button"]`);
    let style = await img.getAttribute('style');
    await expect(style.replace(/\s+/g, '')).toContain('--zoom-scale-factor:0.5');
    await expect(zoomPercentageButton).toHaveText('50%');

    await zoomInButton.moveTo();
    zoomInButton = await component.$(`>>>dx-icon-button[data-testid="dx-preview-zoom-in-button"]`);
    await zoomInButton.click();
    style = await img.getAttribute('style');
    await expect(style.replace(/\s+/g, '')).toContain('--zoom-scale-factor:0.75');
    await expect(zoomPercentageButton).toHaveText('75%');
  });

  it('DxPreview - should decrease zoom scale and display correct zoom percentage if zoom out button is clicked', async () => {
    render(
      html`
        <dx-preview open .items=${[mockImageItem]} ></dx-preview>
      `,
      document.body
    );
    const component = await $('dx-preview').getElement();
    
    const img = await component.$(`>>>img[part=${PREVIEW_PARTS.PREVIEW_ITEM_IMAGE}]`);
    let zoomOutButton = await component.$(`>>>dx-icon-button[data-testid="dx-preview-zoom-out-button"]`);
    await zoomOutButton.waitForClickable();
    const zoomPercentageButton = await component.$(`>>>dx-button[data-testid="dx-preview-zoom-percentage-button"]`);
    let style = await img.getAttribute('style');
    await expect(style.replace(/\s+/g, '')).toContain('--zoom-scale-factor:0.5');
    await expect(zoomPercentageButton).toHaveText('50%');

    await zoomOutButton.moveTo();
    zoomOutButton = await component.$(`>>>dx-icon-button[data-testid="dx-preview-zoom-out-button"]`);
    await zoomOutButton.click();
    style = await img.getAttribute('style');
    await expect(style.replace(/\s+/g, '')).toContain('--zoom-scale-factor:0.25');
    await expect(zoomPercentageButton).toHaveText('25%');
  });

  it('DxPreview - should toggle between 100% and fit-to-screen-percentage', async () => {
    render(
      html`
        <dx-preview open .items=${[mockImageItem]} ></dx-preview>
      `,
      document.body
    );
    const component = await $('dx-preview').getElement();
    const getZoomPercentageButton = () => {
      return component.$(`>>>dx-button[data-testid="dx-preview-zoom-percentage-button"]`);
    };
    let zoomPercentageButton = await getZoomPercentageButton();
    await zoomPercentageButton.waitForClickable();

    const initialZoomText = await zoomPercentageButton.getText();
    await expect(initialZoomText).not.toBe('100%');

    zoomPercentageButton = await getZoomPercentageButton();
    await zoomPercentageButton.moveTo();
    await zoomPercentageButton.click();

    await browser.waitUntil(
      async () => {
        const btn = await getZoomPercentageButton();
        return (await btn.getText() === '100%');
      }, {
        timeout: 5000,
        timeoutMsg: `Expected zoom to become '100%' after first click (was: ${initialZoomText})`,
      }
    );

    zoomPercentageButton = await getZoomPercentageButton();
    await zoomPercentageButton.moveTo();
    await zoomPercentageButton.click();

    await browser.waitUntil(
      async () => {
        const btn = await getZoomPercentageButton();
        return (await btn.getText() === initialZoomText);
      }, {
        timeout: 5000,
        timeoutMsg: `Expected zoom to return to '${initialZoomText}' after second click`,
      }
    );
  }); 

  it('DxPreview - should disable zoom-out buttons at min zoom level', async () => {
    render(
      html`
        <dx-preview open .items=${[mockImageItem]} ></dx-preview>
      `,
      document.body
    );
    const component = await $('dx-preview').getElement();
    let zoomOutButton = await component.$(`>>>dx-icon-button[data-testid="dx-preview-zoom-out-button"]`);
    await zoomOutButton.waitForClickable();

    // Set to 10% (from 50%)
    await zoomOutButton.moveTo();
    zoomOutButton = await component.$(`>>>dx-icon-button[data-testid="dx-preview-zoom-out-button"]`);
    await zoomOutButton.click();
    await zoomOutButton.moveTo();
    zoomOutButton = await component.$(`>>>dx-icon-button[data-testid="dx-preview-zoom-out-button"]`);
    await zoomOutButton.click();
    await zoomOutButton.moveTo();
    zoomOutButton = await component.$(`>>>dx-icon-button[data-testid="dx-preview-zoom-out-button"]`);
    await zoomOutButton.click();
    await zoomOutButton.moveTo();
    zoomOutButton = await component.$(`>>>dx-icon-button[data-testid="dx-preview-zoom-out-button"]`);
    await zoomOutButton.click();
    await expect(zoomOutButton).toHaveAttribute('disabled');
  });

  it('DxPreview - should disable zoom-in buttons at max zoom level', async () => {
    render(
      html`
        <dx-preview open .items=${[mockImageItem]} ></dx-preview>
      `,
      document.body
    );
    const component = await $('dx-preview').getElement();
    let zoomInButton = await component.$(`>>>dx-icon-button[data-testid="dx-preview-zoom-in-button"]`);
    await zoomInButton.waitForClickable();

    // Set to 400% (from 50%)
    await zoomInButton.moveTo();
    zoomInButton = await component.$(`>>>dx-icon-button[data-testid="dx-preview-zoom-in-button"]`);
    await zoomInButton.click();
    await zoomInButton.moveTo();
    zoomInButton = await component.$(`>>>dx-icon-button[data-testid="dx-preview-zoom-in-button"]`);
    await zoomInButton.click();
    await zoomInButton.moveTo();
    zoomInButton = await component.$(`>>>dx-icon-button[data-testid="dx-preview-zoom-in-button"]`);
    await zoomInButton.click();
    await zoomInButton.moveTo();
    zoomInButton = await component.$(`>>>dx-icon-button[data-testid="dx-preview-zoom-in-button"]`);
    await zoomInButton.click();
    await zoomInButton.moveTo();
    zoomInButton = await component.$(`>>>dx-icon-button[data-testid="dx-preview-zoom-in-button"]`);
    await zoomInButton.click();
    await zoomInButton.moveTo();
    zoomInButton = await component.$(`>>>dx-icon-button[data-testid="dx-preview-zoom-in-button"]`);
    await zoomInButton.click();
    await expect(zoomInButton).toHaveAttribute('disabled');
  });

  it('DxPreview - should display nothing if image fetch returns 404', async() => {
    const previewError = fn();
    const source = 'invalid-image.png';
    const mockBrokenImageItem: PreviewItem = { ...mockImageItem, renditions: [{ id: 'broken', type: 'Original', source }] };
    fetchMock.mock(source, { status: 404 });
    render(
      html`
        <dx-preview open .items=${[mockBrokenImageItem]} @preview-error=${previewError} .localization=${dxLocalization}></dx-preview>
      `,
      document.body
    );

    const component = await $('dx-preview').getElement();
    const img = await component.$(`>>>img[part=${PREVIEW_PARTS.PREVIEW_ITEM_IMAGE}]`);
    await expect(img).not.toBeExisting();
    await expect(previewError).toHaveBeenCalled();
  });

  it('DxPreview - should display nothing if fetch returns non-404, non-ok response', async() => {
    const previewError = fn();
    const source = 'invalid-image.png';
    const mockBrokenImageItem: PreviewItem = { ...mockImageItem, renditions: [{ id: 'broken', type: 'Original', source }] };
    fetchMock.mock(source, { status: 500 });
    render(
      html`
        <dx-preview open .items=${[mockBrokenImageItem]} @preview-error=${previewError} .localization=${dxLocalization}></dx-preview>
      `,
      document.body
    );

    const component = await $('dx-preview').getElement();
    const img = await component.$(`>>>img[part=${PREVIEW_PARTS.PREVIEW_ITEM_IMAGE}]`);
    await expect(img).not.toBeExisting();
    await expect(previewError).toHaveBeenCalled();
  });

  it('DxPreview - should display nothing if image mimeType does not match header\'s Content-Type', async() => {
    const previewError = fn();
    const source = 'invalid-image.png';
    const mockBrokenImageItem: PreviewItem = { ...mockImageItem, renditions: [{ id: 'broken', type: 'Original', source }] };
    fetchMock.mock(source, { headers: { 'Content-Type': ItemTypes.DAM_JPEG } });
    render(
      html`
        <dx-preview open .items=${[mockBrokenImageItem]} @preview-error=${previewError} .localization=${dxLocalization}></dx-preview>
      `,
      document.body
    );

    const component = await $('dx-preview').getElement();
    const img = await component.$(`>>>img[part=${PREVIEW_PARTS.PREVIEW_ITEM_IMAGE}]`);
    await expect(img).not.toBeExisting();
    await expect(previewError).toHaveBeenCalled();
  });

  it('DxPreview - should display nothing if video fetch returns 404', async() => {
    const previewError = fn();
    const source = 'invalid-video.mp4';
    const mockBrokenVideoItem: PreviewItem = { ...mockImageItem, renditions: [{ id: 'broken', type: 'Original', source }] };
    fetchMock.mock(source, { status: 404 });
    render(
      html`
        <dx-preview open .items=${[mockBrokenVideoItem]} @preview-error=${previewError} .localization=${dxLocalization}></dx-preview>
      `,
      document.body
    );

    const component = await $('dx-preview').getElement();
    const video = await component.$(`>>>img[part=${PREVIEW_PARTS.PREVIEW_ITEM_VIDEO}]`);
    await expect(video).not.toBeExisting();
    await expect(previewError).toHaveBeenCalled();
  });

  it('DxPreview - should not render a rendition select and should not have a rendition source when rendition list is empty', async() => {
    const mockImageItemNoRenditions: PreviewItem = { 
      id: 99,
      title: 'Test Image No Renditions',
      type: ItemTypes.DAM_IMAGE,
      renditions: []
    };

    render(
      html`
        <dx-preview open .items=${[mockImageItemNoRenditions]}></dx-preview>
      `,
      document.body
    );

    const component = await $('dx-preview').getElement();
    const renditionSelect = await component.$(`>>>[data-testid="dx-preview-rendition-select"]`);
    await expect(renditionSelect).not.toBeExisting();

    const img = await component.$(`>>>img[part=${PREVIEW_PARTS.PREVIEW_ITEM_IMAGE}]`);
    await expect(img).not.toBeExisting();
  });

  it('DxPreview - should reset loading and error state when the back button is clicked', async() => {
    const previewBack = fn();
    const mockImageItemNoRenditions: PreviewItem = { 
      id: 99,
      title: 'Test Image No Renditions',
      type: ItemTypes.DAM_IMAGE,
      renditions: []
    };
    
    // initialize with an error to set initial values for hasError and isLoading
    render(
      html`
        <dx-preview open .items=${[mockImageItemNoRenditions]} @preview-back=${previewBack}></dx-preview>
      `,
      document.body
    );

    const component = await $('dx-preview').getElement();

    await expect(await component.getProperty('hasError')).toBeTruthy();
    await expect(await component.getProperty('isLoading')).toBeFalsy();

    let backButton = await component.$(`>>>[data-testid="dx-preview-back-button"]`).getElement();
    await backButton.waitForClickable();
    await backButton.moveTo();
    backButton = await component.$(`>>>[data-testid="dx-preview-back-button"]`).getElement();
    await backButton.click();

    await expect(previewBack).toHaveBeenCalled();
    await expect(await component.getProperty('hasError')).toBeFalsy();
    await expect(await component.getProperty('isLoading')).toBeTruthy();
  });
  
  it('DxPreview - should correctly select a rendition with a null dimension', async () => {
    const mockRenditionNoDimension: AssetRendition[] = [
      { id: 'rend3', type: 'Small', source: 'small.png' },
    ];
    const mockItemNoDimension: PreviewItem = { ...mockImageItem, renditions: mockRenditionNoDimension };
    render(
      html`
        <dx-preview open .items=${[mockItemNoDimension]} .localization=${dxLocalization}></dx-preview>
      `,
      document.body
    );
    
    const component = await $('dx-preview').getElement();
    const renditionSelect = await component.$(`>>>[data-testid="dx-preview-rendition-select"]`);
    await expect(renditionSelect).toBeExisting();

    const expectedValue = `Small (unknown)`;
    await expect(await renditionSelect.getProperty('selectedValue')).toBe(expectedValue);
  });

  it('DxPreview - should handle a rendition with an empty type', async () => {
    const mockImageItemEmptyRenditionType: PreviewItem = {
      id: 100,
      title: 'Empty Type',
      type: ItemTypes.DAM_IMAGE,
      renditions: [{ id: 'rend4', type: '', source: 'empty.png', dimension: '100x100' }],
    };

    render(
      html`
        <dx-preview open .items=${[mockImageItemEmptyRenditionType]} .localization=${dxLocalization}></dx-preview>
      `,
      document.body
    );
    
    const component = await $('dx-preview').getElement();
    const renditionSelect = await component.$(`>>>[data-testid="dx-preview-rendition-select"]`);
    
    // The expected value should be an empty string
    const expectedValue = '';
    await expect(await renditionSelect.getProperty('selectedValue')).toBe(expectedValue);
  });

  it('DxPreview - should display tooltips when hover', async () => {
    render(
      html`
        <dx-preview open .items=${[mockImageItem]} .localization=${dxLocalization}></dx-preview>
      `,
      document.body
    );

    const component = await $('dx-preview').getElement();

    const backButton = await component.$(`>>>[data-testid="dx-preview-back-button"]`);
    await backButton.moveTo();
    const backTooltip = await component.$(`>>>dx-tooltip:has([data-testid="dx-preview-back-button"])`);
    await expect(backTooltip).toBeDisplayed();
    await expect(await backTooltip.getAttribute('tooltiptext')).toEqual(dxLocalization.get('preview.tooltip.back.button'));

    const downloadButton = await component.$(`>>>[data-testid="dx-preview-download-button"]`);
    await downloadButton.moveTo();
    const downloadTooltip = await component.$(`>>>dx-tooltip:has([data-testid="dx-preview-download-button"])`);
    await expect(downloadTooltip).toBeDisplayed();
    await expect(await downloadTooltip.getAttribute('tooltiptext')).toEqual(dxLocalization.get('preview.tooltip.download.button'));

    const previousButton = await component.$(`>>>[data-testid="dx-preview-previous-button"]`);
    await previousButton.moveTo();
    const previousTooltip = await component.$(`>>>dx-tooltip:has([data-testid="dx-preview-previous-button"])`);
    await expect(previousTooltip).toBeDisplayed();
    await expect(await previousTooltip.getAttribute('tooltiptext')).toEqual(dxLocalization.get('preview.tooltip.previous.asset.button'));

    const nextButton = await component.$(`>>>[data-testid="dx-preview-next-button"]`);
    await nextButton.moveTo();
    const nextTooltip = await component.$(`>>>dx-tooltip:has([data-testid="dx-preview-next-button"])`);
    await expect(nextTooltip).toBeDisplayed();
    await expect(await nextTooltip.getAttribute('tooltiptext')).toEqual(dxLocalization.get('preview.tooltip.next.asset.button'));

    const zoomOutButton = await component.$(`>>>[data-testid="dx-preview-zoom-out-button"]`);
    await zoomOutButton.moveTo();
    const zoomOutTooltip = await component.$(`>>>dx-tooltip:has([data-testid="dx-preview-zoom-out-button"])`);
    await expect(zoomOutTooltip).toBeDisplayed();
    await expect(await zoomOutTooltip.getAttribute('tooltiptext')).toEqual(dxLocalization.get('preview.tooltip.zoom.out.button'));

    const zoomInButton = await component.$(`>>>[data-testid="dx-preview-zoom-in-button"]`);
    await zoomInButton.moveTo();
    const zoomInTooltip = await component.$(`>>>dx-tooltip:has([data-testid="dx-preview-zoom-in-button"])`);
    await expect(zoomInTooltip).toBeDisplayed();
    await expect(await zoomInTooltip.getAttribute('tooltiptext')).toEqual(dxLocalization.get('preview.tooltip.zoom.in.button'));
  });

  it('DxPreview - should bypass validation and render initially when skipSourceValidation is true', async () => {
    const previewError = fn();
    render(
      html`
        <dx-preview
          open
          .items=${[mockImageItem]}
          @preview-error=${previewError}
          .skipSourceValidation=${true}
        ></dx-preview>
      `,
      document.body
    );

    const component = await $('dx-preview').getElement();
    const img = await component.$(`>>>img[part=${PREVIEW_PARTS.PREVIEW_ITEM_IMAGE}]`);

    await expect(img).toBeExisting();
    await expect(img).toHaveAttribute('src', mockImageRenditions[0].source);

    await expect(await component.getProperty('isLoading')).toBeFalsy();
    await expect(await component.getProperty('hasError')).toBeFalsy();

    await expect(previewError).not.toHaveBeenCalled();
  });

  it('DxPreview - should enter error state if fetch returns 403 Forbidden', async () => {
    const previewError = fn();
    const forbiddenSource = 'forbidden-image.png';
    const mockForbiddenItem: PreviewItem = {
      ...mockImageItem,
      renditions: [{ id: 'forbidden-rend', type: 'Original', source: forbiddenSource }],
    };

    fetchMock.mock(forbiddenSource, { status: 403 });

    render(
      html`
        <dx-preview
          open
          .items=${[mockForbiddenItem]}
          @preview-error=${previewError}
        ></dx-preview>
      `,
      document.body
    );

    const component = await $('dx-preview').getElement();
    const img = await component.$(`>>>img[part=${PREVIEW_PARTS.PREVIEW_ITEM_IMAGE}]`);

    await expect(img).not.toBeExisting();
    await expect(previewError).toHaveBeenCalled();

    const eventDetail = previewError.mock.calls[0][0].detail;
    await expect(eventDetail.errorType).toEqual(ValidationStatus.ERROR_FORBIDDEN);

    await expect(await component.getProperty('hasError')).toBeTruthy();
    await expect(await component.getProperty('errorType')).toEqual(ValidationStatus.ERROR_FORBIDDEN);
  });

  it('DxPreview - should enter error state if fetch returns 400 Bad Request', async () => {
    const previewError = fn();
    const badRequestSource = 'bad-request-image.png';
    const mockBadRequestItem: PreviewItem = {
      ...mockImageItem,
      renditions: [{ id: 'bad-req-rend', type: 'Original', source: badRequestSource }],
    };

    fetchMock.mock(badRequestSource, { status: 400 });

    render(
      html`
        <dx-preview
          open
          .items=${[mockBadRequestItem]}
          @preview-error=${previewError}
        ></dx-preview>
      `,
      document.body
    );

    const component = await $('dx-preview').getElement();
    const img = await component.$(`>>>img[part=${PREVIEW_PARTS.PREVIEW_ITEM_IMAGE}]`);

    await expect(img).not.toBeExisting();
    await expect(previewError).toHaveBeenCalled();

    const eventDetail = previewError.mock.calls[0][0].detail;
    await expect(eventDetail.errorType).toEqual(ValidationStatus.ERROR_BAD_REQUEST);

    await expect(await component.getProperty('hasError')).toBeTruthy();
    await expect(await component.getProperty('errorType')).toEqual(ValidationStatus.ERROR_BAD_REQUEST);
  });

  it('DxPreview - should trap focus within the component when open', async () => {
    render(
      html`
        <div>
          <dx-preview open .items=${[mockImageItem]}></dx-preview>
        </div>
      `,
      document.body
    );

    const dxPreview = document.querySelector('dx-preview') as DxPreview;
    if (!dxPreview) {
      throw new Error('DxPreview component not found');
    }
    
    // Wait for the component to be fully rendered
    await dxPreview.updateComplete;
    
    // Wait a bit for the image to load and zoom controls to appear
    await browser.pause(500);
    
    const component = await $('dx-preview').getElement();
    const zoomInButton = await component.$('>>>[data-testid="dx-preview-zoom-in-button"]').getElement();
    await expect(zoomInButton).toBeDisplayed();
    
    // Get all focusable elements in the preview
    const focusableInfo = await browser.execute(
      `const preview = document.querySelector('dx-preview');
       const focusableElements = preview?.shadowRoot?.querySelectorAll('dx-icon-button:not([disabled]), dx-button:not([disabled]), dx-input-select:not([disabled])');
       const elementsArray = Array.from(focusableElements || []);
       return {
         count: elementsArray.length,
         testIds: elementsArray.map(el => el.getAttribute('data-testid'))
       };`
    ) as {count: number, testIds: string[]};
    
    await expect(focusableInfo.count).toBeGreaterThan(0);
    
    // Helper function to get the currently focused element's test ID
    const getActiveElementTestId = async () => {
      return await browser.execute(
        `const preview = document.querySelector('dx-preview');
         // Check which component in the preview shadow root is currently the activeElement
         const activeInPreview = preview?.shadowRoot?.activeElement;
         return activeInPreview?.getAttribute('data-testid');`
      ) as string;
    };
    
    // Focus the first element (back button) using _focusButton
    await browser.execute(
      `const preview = document.querySelector('dx-preview');
       const backBtn = preview?.shadowRoot?.querySelector('[data-testid="dx-preview-back-button"]');
       if (backBtn && typeof backBtn._focusButton === 'function') {
         backBtn._focusButton();
       }`
    );
    await browser.pause(100);
    
    let activeTestId = await getActiveElementTestId();
    await expect(activeTestId).toBe('dx-preview-back-button');
    
    // Simulate Tab key press to move to next element
    await browser.keys([KeyboardInputKeys.TAB]);
    await browser.pause(100);
    
    activeTestId = await getActiveElementTestId();
    await expect(activeTestId).toBe(focusableInfo.testIds[1]);
    
    // Tab through all elements until we reach the last one
    for (let i = 2; i < focusableInfo.count; i++) {
      await browser.keys([KeyboardInputKeys.TAB]);
      await browser.pause(50);
      activeTestId = await getActiveElementTestId();
    }
    
    // Verify we're at the last element
    activeTestId = await getActiveElementTestId();
    const lastElementTestId = focusableInfo.testIds[focusableInfo.count - 1];
    await expect(activeTestId).toBe(lastElementTestId);
    
    // Now press Tab again - should wrap to first element due to focus trap
    await browser.keys([KeyboardInputKeys.TAB]);
    await browser.pause(100);
    
    activeTestId = await getActiveElementTestId();
    await expect(activeTestId).toBe(focusableInfo.testIds[0]);
    
    // Test Shift+Tab to go backwards - should wrap to last element
    await browser.keys([KeyboardInputKeys.SHIFT, KeyboardInputKeys.TAB]);
    await browser.pause(100);
    
    activeTestId = await getActiveElementTestId();
    await expect(activeTestId).toBe(lastElementTestId);
  });
});