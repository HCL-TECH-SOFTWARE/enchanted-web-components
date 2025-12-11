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
// External imports
import { html, nothing, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

// Component imports
import { DxAcBaseElement } from './dx-ac-base-element';
import './dx-circular-progress';
import './dx-icon-button';
import './dx-input-select';
import './dx-item-type-avatar';
import './dx-tooltip';

// Helper imports
import { BUTTON_PARTS, BUTTON_VARIANT, ICON_BUTTON_SIZES, PREVIEW_PARTS, TOOLTIP_PLACEMENT } from '../../types/cssClassEnums';
import { ItemTypes, DX_PREVIEW_DEFAULT_ZOOM_OPTIONS, itemTypeIconMapping, ValidationStatus } from '../../types/dx-preview';
import { 
  ICON_BUTTON_EXPORT_PARTS, 
  ITEM_TYPE_AVATAR_EXPORT_PARTS, 
  PREVIEW_NAV_BUTTONS_EXPORT_PARTS, 
  PREVIEW_RENDITION_SELECT_EXPORT_PARTS, 
  PREVIEW_ZOOM_BUTTONS_EXPORT_PARTS, 
  PREVIEW_ZOOM_PERCENT_BUTTON_EXPORT_PARTS, 
  TOOLTIP_EXPORT_PARTS
} from '../exportParts';
import { isLTR } from '../localization';
import { validateSource } from '../../utils/previewUtils';

// Icon imports
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/chevron--left';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/chevron--right';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/zoom--out';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/zoom--in';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/download';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/arrow--left';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/arrow--right';
import { KeyboardInputKeys } from '../../utils/keyboardEventKeys';
import { DxButton } from './dx-button';
import { DxIconButton } from './dx-icon-button';

export interface AssetRendition {
  id: string;
  type: string;
  source: string;
  dimension?: string;
}
export interface PreviewItem {
  id: string | number,
  title: string;
  type: ItemTypes;
  renditions?: AssetRendition[];
  fileExtension?: string;
}

@customElement('dx-preview')
export class DxPreview extends DxAcBaseElement {
  private _ZOOM_OPTIONS = DX_PREVIEW_DEFAULT_ZOOM_OPTIONS;
  private _ZOOM_BUTTON_MARGIN = 12;
  private _ZOOM_DEFAULT = 100;

  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: Array })
  items: PreviewItem[] = [];

  @property({ type: String })
  customHeaderTitle: string | null = null;

  @property()
  component: TemplateResult | string = '';

  @property({ type: Boolean, reflect: true })
  isPreviousButtonDisabled?: boolean;

  @property({ type: Boolean, reflect: true })
  isNextButtonDisabled?: boolean;

  @property({ type: String })
  renditionLabel = '';

  @property({ type: String })
  selectButtonTitle = '';

  @property()
  currentItemIndex = 0;

  @property()
  selectedRenditionId: string | null = null;

  @property({ type: Boolean })
  skipSourceValidation = false;
  
  @state()
  zoomPercentage = this._ZOOM_DEFAULT;

  @state()
  zoomOutDisable = false;

  @state()
  zoomInDisable = false;

  @state()
  zoomToFitPercentage = this._ZOOM_DEFAULT;

  @state()
  currentDisplaySource: string | null = null;

  @state()
  isLoading = true;

  @state()
  hasError = false;
  
  @state()
  errorType: ValidationStatus | null = null;
  
  @state()
  isMediaReady = false;

  @state()
  isZoomedIn = false;

  private _activeRequestToken = 0;

  protected willUpdate(changedProperties: Map<string | symbol, unknown>) {
    if (this.open && (changedProperties.has('currentItemIndex') || changedProperties.has('items') || changedProperties.has('selectedRenditionId'))) {
      this._updateCurrentItemAndRendition();
    }

    // Update isZoomedIn state when zoom, items, or currentItemIndex changes
    if (changedProperties.has('zoomPercentage') || changedProperties.has('items') || changedProperties.has('currentItemIndex')) {
      const currentItem = this.items[this.currentItemIndex ?? 0];
      const isImageType = currentItem?.type.split('/')[0] === ItemTypes.DAM_IMAGE;
      this.isZoomedIn = isImageType && this.zoomPercentage > 100;
    }

    // Apply zoomed class to host element immediately
    if (this.isZoomedIn) {
      this.classList.add('zoomed');
    } else {
      this.classList.remove('zoomed');
    }

    // Update CSS custom properties
    if (changedProperties.has('zoomPercentage')) {
      this.style.setProperty('--zoom-scale-factor', `${this.zoomPercentage / 100}`);
      this._updateImageDimensions();
    }
    if (changedProperties.has('isMediaReady')) {
      this.style.setProperty('--media-visibility', this.isMediaReady ? 'visible' : 'hidden');
    }
  }

  private _updateImageDimensions() {
    requestAnimationFrame(() => {
      const wrapper = this.renderRoot?.querySelector('#preview-item-image-wrapper') as HTMLElement | null;
      const img = this.renderRoot?.querySelector('#preview-item-image') as HTMLImageElement | null;

      if (wrapper && img && img.naturalWidth && img.naturalHeight) {
        const scale = this.zoomPercentage / 100;
        // Set image dimensions directly to scaled size
        const scaledWidth = img.naturalWidth * scale;
        const scaledHeight = img.naturalHeight * scale;

        // Set both image and wrapper to the same scaled dimensions
        img.style.width = `${scaledWidth}px`;
        img.style.height = `${scaledHeight}px`;
        wrapper.style.width = `${scaledWidth}px`;
        wrapper.style.height = `${scaledHeight}px`;

        // Clear transform as we're using direct dimensions
        img.style.transform = '';
        img.style.transformOrigin = '';
      }
    });
  }

  @state()
  isLtr: boolean = isLTR();

  protected updated(changedProperties: Map<string | symbol, unknown>): void {
    super.updated(changedProperties);

    if (changedProperties.has('open') && this.open) {
      requestAnimationFrame(() => {
        const previewDialog = this.renderRoot?.querySelector('[role="dialog"]') as HTMLElement;
        if (previewDialog) {
          previewDialog.focus();
        }
      });
    }

    if (
      this.open &&
      this.items[this.currentItemIndex]?.type.split('/')[0] === ItemTypes.DAM_VIDEO &&
      (changedProperties.has('open') || changedProperties.has('currentItemIndex') || changedProperties.has('items'))
    ) {
      requestAnimationFrame(() => { this._handleResize(); });
    }
  }

  private async _updateCurrentItemAndRendition() {
    this._activeRequestToken++;
    const currentToken = this._activeRequestToken;

    this.isLoading = true;
    this.isMediaReady = false;
    this.hasError = false;
    this.errorType = null;
    this.currentDisplaySource = null;

    if (this.items.length === 0 || this.currentItemIndex < 0 || this.currentItemIndex >= this.items.length) {
      if (currentToken === this._activeRequestToken) this.isLoading = false;
      return;
    }

    const currentItem = this.items[this.currentItemIndex];
    const itemType = currentItem.type.split('/')[0];
    if ((itemType === ItemTypes.DAM_IMAGE || itemType === ItemTypes.DAM_VIDEO) && currentItem.renditions && currentItem.renditions.length > 0) {
      let renditionToSelect = currentItem.renditions.find(rendition => {return rendition.id === this.selectedRenditionId;});

      if (!renditionToSelect) {
        renditionToSelect = currentItem.renditions[0];
      }
      this.selectedRenditionId = renditionToSelect.id;

      if (this.skipSourceValidation) {
        if (currentToken === this._activeRequestToken) {
          this.currentDisplaySource = renditionToSelect.source;
          this.isLoading = false;
        }
        return;
      }

      try {
        const status = await validateSource(renditionToSelect.source);
        if (currentToken !== this._activeRequestToken) {
          // Stale request
          return;
        }

        if (status === ValidationStatus.SUCCESS) {
          this.currentDisplaySource = renditionToSelect.source;
        } else {
          this.hasError = true;
          this.errorType = status;
          this.dispatchEvent(new CustomEvent('preview-error', {
            detail: {
              item: currentItem,
              errorType: this.errorType
            },
            bubbles: true,
            composed: true
          }));
        }
      } finally {
        if (currentToken === this._activeRequestToken) {
          this.isLoading = false;
        }
      }
    } else {
      if (currentToken === this._activeRequestToken) {
        this.isLoading = false;
        this.hasError = true;
      }
    }

  }
  
  private _resetState() {
    this.open = false;
    this.isLoading = true;
    this.hasError = false;
    this.isMediaReady = false;
    this.errorType = null;
    this.selectedRenditionId = null;
    this.currentDisplaySource = null;
    this.zoomPercentage = this._ZOOM_DEFAULT;
    this._activeRequestToken = 0;
  }

  private _handleBack() {
    this._resetState();
    this.dispatchEvent(
      new CustomEvent('preview-back', {
        detail: { open: this.open },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _handlePreviousButtonClick() {
    const event = new CustomEvent('preview-previous', {
      bubbles: true,
      composed: true,
      detail: {
        previousIndex: this.currentItemIndex - 1
      },
      cancelable: true
    });

    this.dispatchEvent(event);

    if (!event.defaultPrevented) {
      this.currentItemIndex -= 1;
    }
  }

  private _handleNextButtonClick() {
    const event = new CustomEvent('preview-next', {
      bubbles: true,
      composed: true,
      detail: {
        nextIndex: this.currentItemIndex + 1
      },
      cancelable: true
    });

    this.dispatchEvent(event);

    if (!event.defaultPrevented) {
      this.currentItemIndex += 1;
    }
  }

  private _handleZoomOutButtonClick() {
    const reversed = [...this._ZOOM_OPTIONS].reverse();

    const zoomOutNumber = reversed.find((element) => {
      return this.zoomPercentage > element;
    });

    if (zoomOutNumber === 10) {
      this.zoomOutDisable = true;
    }

    if (zoomOutNumber) {
      this.zoomPercentage = zoomOutNumber;
    }

    this.zoomInDisable = false;
  }

  private _handleZoomInButtonClick() {
    const zoomInNumber = this._ZOOM_OPTIONS.find((element) => {
      return element > this.zoomPercentage;
    });

    if (zoomInNumber === 400) {
      this.zoomInDisable = true;
    }

    if (zoomInNumber) {
      this.zoomPercentage = zoomInNumber;
    }

    this.zoomOutDisable = false;
  }

  private _calculateImagePercentage() {
    const imgElement = this.renderRoot?.querySelector('#preview-item-image') as HTMLImageElement;
    const imgHeight = imgElement?.height ?? 0;
    const imgContainerHeight = imgElement.clientHeight ?? 0;

    if (imgHeight === imgContainerHeight) {
      const calculatedPercentage = Math.round(
        ((imgContainerHeight - this._ZOOM_BUTTON_MARGIN * 2) / imgContainerHeight) * 100
      );
      this.zoomToFitPercentage = calculatedPercentage;
      return calculatedPercentage;
    }

    const calculatedImageHeight = Math.round(
      ((imgContainerHeight - this._ZOOM_BUTTON_MARGIN * 2) / imgHeight) * 100
    );
    const imageContainerWidth = imgElement.clientWidth ?? 0;
    const imageWidth = imgElement.width ?? 0;
    const calculatedImageWidth = Math.round(
      ((imageContainerWidth - this._ZOOM_BUTTON_MARGIN * 2) / imageWidth) * 100
    );

    this.zoomToFitPercentage = Math.min(calculatedImageHeight, calculatedImageWidth);

    return this._ZOOM_DEFAULT;
  }

  private _handleZoomPercentageFitClick() {
    if (this.zoomPercentage !== this._ZOOM_DEFAULT) {
      this.zoomPercentage = this._ZOOM_DEFAULT;
    } else {
      this.zoomPercentage = this.zoomToFitPercentage;
    }

    this.zoomInDisable = false;
    this.zoomOutDisable = false;
  }

  private _handlePreviewError() {
    this.isLoading = false;
    this.hasError = true;
    this.isMediaReady = false;
    this.errorType = ValidationStatus.ERROR_FORMAT_UNSUPPORTED;
    const currentItem = this.items[this.currentItemIndex];
    this.dispatchEvent(
      new CustomEvent('preview-error', {
        detail: { 
          item: currentItem,
          errorType: this.errorType
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  private getUnsupportedFileComponent(itemType: ItemTypes, extension = '') {
    return html`
      <div part=${PREVIEW_PARTS.PREVIEW_ITEM_CONTENT}>
        <div part=${PREVIEW_PARTS.PREVIEW_ITEM_UNSUPPORTED_CONTAINER}>
          <dx-item-type-avatar
            itemtype=${itemTypeIconMapping[itemType as keyof typeof itemTypeIconMapping] ?? itemType}
            exportparts=${ITEM_TYPE_AVATAR_EXPORT_PARTS}
          >
          </dx-item-type-avatar>
          <div part=${PREVIEW_PARTS.PREVIEW_ITEM_UNSUPPORTED_MESSAGE_CONTAINER}>
            <p part=${PREVIEW_PARTS.PREVIEW_ITEM_UNSUPPORTED_MESSAGE_TITLE}>
              ${this.getMessage('preview.item.unsupported.title')}
            </p>
            <span part=${PREVIEW_PARTS.PREVIEW_ITEM_UNSUPPORTED_MESSAGE_DESCRIPTION}>
              ${this.getMessage('preview.item.unsupported.description', [{ '{itemType}': extension?.toUpperCase() || itemType?.toUpperCase() }])}
            </span>
          </div>
        </div>
      </div>
    `;
  }

  private _renderPreviewItem() {
    if (this.component) {
      return html`
        <div part=${PREVIEW_PARTS.PREVIEW_ITEM_CONTENT}>
          ${this.component}
        </div>
      `;
    }

    if (!this.items || this.items.length === 0) {
      return nothing;
    }

    if (this.hasError) {
      const currentItem = this.items[this.currentItemIndex];
      return this.getUnsupportedFileComponent(currentItem?.type, currentItem?.fileExtension);
    }

    if (this.isLoading) {
      return nothing;
    }

    const currentItem = this.items[this.currentItemIndex];
    if (!this.currentDisplaySource) {
      return this.getUnsupportedFileComponent(currentItem?.type, currentItem?.fileExtension);
    }
    const itemType = currentItem.type.split('/')[0];
    switch (itemType) {
      case ItemTypes.DAM_IMAGE: {
        return html`
          <div id="preview-item-image-wrapper" part=${PREVIEW_PARTS.PREVIEW_ITEM_IMAGE_WRAPPER}>
            <img
              id="preview-item-image"
              part=${PREVIEW_PARTS.PREVIEW_ITEM_IMAGE}
              src=${this.currentDisplaySource}
              alt=${currentItem.title}
              @load=${this._handleMediaReady}
              @error=${this._handlePreviewError}
            />
          </div>
        `;
      }
      case ItemTypes.DAM_VIDEO:
        return html`
          <div part=${PREVIEW_PARTS.PREVIEW_ITEM_VIDEO_CONTAINER}>
            <video 
              controls 
              part=${PREVIEW_PARTS.PREVIEW_ITEM_VIDEO}
              @loadeddata=${this._handleMediaReady}
              @error=${this._handlePreviewError}
              .src=${this.currentDisplaySource}
            >
            </video>
          </div>
        `;
      default:
        return this.getUnsupportedFileComponent(currentItem.type, currentItem?.fileExtension);
    }
  }

  private _getRenditionOptionValue(rendition: AssetRendition): string {
    if (rendition.type) {
      return `${rendition.type} (${rendition.dimension ?? this.getMessage('preview.rendition.metadata.unknown')})`;
    }
    return '';
  }

  private _getDefaultSelectedRenditionValue() {
    if (this.currentItemIndex === null || this.currentItemIndex < 0 || this.currentItemIndex >= this.items.length) {
      return '';
    }
    const currentItem = this.items[this.currentItemIndex];
    if (currentItem && (currentItem.type.split('/')[0] === ItemTypes.DAM_IMAGE) && currentItem.renditions && currentItem.renditions.length > 0) {
      const activeRendition = currentItem.renditions.find(rendition => {return rendition.id === this.selectedRenditionId;});

      if (activeRendition) {
        return this._getRenditionOptionValue(activeRendition);
      }

      if (currentItem.renditions.length > 0) {
        return this._getRenditionOptionValue(currentItem.renditions[0]);
      }
    }
    return '';
  }

  private _handleRenditionSelectChange(event: CustomEvent) {
    const selectedValueString = event.detail?.value as string | undefined;

    if (selectedValueString === undefined || this.currentItemIndex === null) return;

    const currentItem = this.items[this.currentItemIndex];

    if (currentItem && currentItem.type.split('/')[0] === ItemTypes.DAM_IMAGE && currentItem.renditions) {
      const foundRendition = currentItem.renditions.find(rendition => {
        return rendition.id === selectedValueString;
      });
      
      if (foundRendition) {
        const changeEvent = new CustomEvent('preview-rendition-change', {
          bubbles: true,
          composed: true,
          detail: { 
            id: this.items[this.currentItemIndex].id,
            title: this.items[this.currentItemIndex].title, 
            selectedRenditionId: foundRendition.id, 
            source: this.currentDisplaySource 
          },
          cancelable: true
        });

        this.dispatchEvent(changeEvent);
        if (!changeEvent.defaultPrevented) {
          this.selectedRenditionId = foundRendition.id;
        }
      }
    }
  }

  private _handleResize = () => {
    const currentItem = this.items[this.currentItemIndex];
    if (!this.open || !currentItem || currentItem.type.split('/')[0] !== ItemTypes.DAM_VIDEO) {
      return;
    }

    const videoElement = this.renderRoot?.querySelector('video[part="preview-item-video"]') as HTMLVideoElement | null;
    const previewAreaContainerElement = this.renderRoot?.querySelector('div[part="preview-item-container"]') as HTMLDivElement | null;
    if (videoElement && previewAreaContainerElement) {

      if (!this.currentDisplaySource) {
        videoElement.removeAttribute('style');
        return;
      }

      const videoWidth = videoElement.videoWidth ?? 0;
      const videoHeight = videoElement.videoHeight ?? 0;
      const aspectRatio = videoHeight / videoWidth;

      const containerWidth = previewAreaContainerElement.offsetWidth;
      const calculatedHeight = containerWidth * aspectRatio;

      if (calculatedHeight < previewAreaContainerElement.clientHeight) {
        videoElement.style.width = `${containerWidth}px`;
        videoElement.style.height = `${calculatedHeight}px`;
      } else {
        videoElement.style.setProperty(
          'height',
          `${previewAreaContainerElement.clientHeight}px`,
          'important'
        );
        videoElement.style.width = '100%';
      }
    } 

  };

  private _handleMediaReady() {
    this.isLoading = false;
    this.isMediaReady = true;
    this.hasError = false;

    const currentItem = this.items[this.currentItemIndex];
    if (!currentItem) return;

    const itemType = currentItem.type.split('/')[0];
    if (itemType === ItemTypes.DAM_IMAGE) {
      requestAnimationFrame(() => {
        // Calculate and apply fit-to-screen zoom
        this.zoomPercentage = this._calculateImagePercentage();
        this._updateImageDimensions();
      });
    } else if (itemType === ItemTypes.DAM_VIDEO) {
      requestAnimationFrame(() => {return this._handleResize();});
    }
  }

  private _handleDownloadButtonClick() {
    this.dispatchEvent(
      new CustomEvent('preview-download', {
        bubbles: true,
        composed: true,
        detail: {
          id: this.items[this.currentItemIndex].id,
          title: this.items[this.currentItemIndex].title, 
          selectedRenditionId: this.selectedRenditionId, 
          source: this.currentDisplaySource 
        }
      })
    );
  }

  private _handleSelectButtonClick() {
    this.dispatchEvent(
      new CustomEvent('preview-select', {
        bubbles: true,
        composed: true,
        detail: {
          id: this.items[this.currentItemIndex].id,
          title: this.items[this.currentItemIndex].title, 
          selectedRenditionId: this.selectedRenditionId, 
          source: this.currentDisplaySource
        }
      })
    );
  }

  private _handleTrapFocus(event: KeyboardEvent) {
    const focusableElements = this.renderRoot?.querySelectorAll('dx-icon-button:not([disabled]), dx-button:not([disabled]), dx-input-select:not([disabled])');
    const firstElement = focusableElements?.[0] as DxIconButton | DxButton;
    const lastElement = focusableElements?.[focusableElements.length - 1] as DxIconButton | DxButton;
    const activeElement = this.renderRoot && (this.renderRoot as ShadowRoot).activeElement;

    if (event.shiftKey) {
      if (activeElement === firstElement) {
        lastElement?._focusButton();
        event.preventDefault();
      }
    } else {
      if (activeElement === lastElement) {
        firstElement?._focusButton();
        event.preventDefault(); // Stop the default Tab action
      }
    }
  }

  private _handleKeydown = (event: KeyboardEvent) => {
    if (!this.open) return;

    if (event.key === KeyboardInputKeys.TAB) {
      this._handleTrapFocus(event);
    }
  };

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this._handleResize);
    window.addEventListener('keydown', this._handleKeydown);

    if (this.renditionLabel == '') this.renditionLabel = this.getMessage('preview.rendition.label');
    if (this.selectButtonTitle == '') this.selectButtonTitle = this.getMessage('select');
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this._handleResize);
    window.removeEventListener('keydown', this._handleKeydown);
    super.disconnectedCallback();
  }
  
  render() {
    const isPreviousDisabled =
      (this.isLoading || (this.currentDisplaySource && !this.isMediaReady && !this.hasError)) || (this.isPreviousButtonDisabled !== undefined
        ? this.isPreviousButtonDisabled
        : this.currentItemIndex <= 0);
    const isNextDisabled =
      (this.isLoading || (this.currentDisplaySource && !this.isMediaReady && !this.hasError)) || (this.isNextButtonDisabled !== undefined
        ? this.isNextButtonDisabled
        : this.currentItemIndex === this.items.length - 1);  
        
    const currentItem = this.items[this.currentItemIndex ?? 0];
    const isImageType = currentItem?.type.split('/')[0] === ItemTypes.DAM_IMAGE;
    const currentItemRenditions = currentItem?.renditions;

    if (!this.open) return nothing;
    const downloadLabel = this.getMessage('preview.tooltip.download.button');
    const nextLabel = this.getMessage('preview.tooltip.next.asset.button');
    const previousLabel = this.getMessage('preview.tooltip.previous.asset.button');
    const zoomOutLabel = this.getMessage('preview.tooltip.zoom.out.button');
    const zoomInLabel = this.getMessage('preview.tooltip.zoom.in.button');
    const percentageLabel = this.getMessage(this.zoomPercentage === 100 ? 'preview.tooltip.zoom.to.fit' : 'preview.tooltip.view.actual.size');
    const titleHeader = this.customHeaderTitle ?? this.items[this.currentItemIndex]?.title ?? this.getMessage('preview.header.title');
    return html`
    <div part=${PREVIEW_PARTS.PREVIEW_BACKDROP}
      ?open=${this.open} 
      tabindex="-1"
      role="presentation"
    >
      <div part=${PREVIEW_PARTS.PREVIEW_CONTAINER} role="dialog" aria-modal="true" tabindex="-1" aria-label=${titleHeader} aria-modal="true">
        <div part=${PREVIEW_PARTS.PREVIEW_HEADER} data-testid="dx-preview-header">
          <div part=${PREVIEW_PARTS.PREVIEW_HEADER_START_ACTIONS}>
            <dx-tooltip tooltiptext=${this.getMessage('preview.tooltip.back.button')} exportparts=${TOOLTIP_EXPORT_PARTS}>
              <dx-icon-button
                slot="target"
                .icon=${ this.isLtr
                  ? html`<icon-arrow-left></icon-arrow-left>`
                  : html`<icon-arrow-right></icon-arrow-right>`
                }
                exportparts="${ICON_BUTTON_EXPORT_PARTS}"
                @click=${this._handleBack}
                data-testid="dx-preview-back-button"
                size=${ICON_BUTTON_SIZES.MEDIUM}
                ariaLabel=${this.getMessage('preview.tooltip.back.button')}
                aria-hidden="true"
              >
              </dx-icon-button>
            </dx-tooltip>
            <span part=${PREVIEW_PARTS.PREVIEW_HEADER_TITLE}>
              ${titleHeader}
            </span>
          </div>
          ${ (isImageType && currentItemRenditions && currentItemRenditions.length > 0) ? html`<div part=${PREVIEW_PARTS.PREVIEW_HEADER_MIDDLE_ACTIONS}>
              <span part=${PREVIEW_PARTS.PREVIEW_HEADER_RENDITION_LABEL} id="dx-preview-rendition-select-label" aria-hidden="true">
                ${this.renditionLabel}
              </span>
              <dx-input-select
                aria-labelledby="dx-preview-rendition-select-label"
                hiddenLabel
                .options=${this.items[this.currentItemIndex ?? 0]?.renditions?.map((rendition) => {
                  return {
                    id: rendition.id,
                    name: this._getRenditionOptionValue(rendition),
                    value: rendition.type ?? ''
                  };
                }) ?? []}
                selectedValue=${this._getDefaultSelectedRenditionValue()}
                exportparts=${PREVIEW_RENDITION_SELECT_EXPORT_PARTS}
                @change=${this._handleRenditionSelectChange}
                data-testid="dx-preview-rendition-select"
                part=${PREVIEW_PARTS.PREVIEW_HEADER_RENDITION_INPUT_SELECT}
                aria-hidden="true"
              >
              </dx-input-select>
            </div>` : nothing}
          <div part=${PREVIEW_PARTS.PREVIEW_HEADER_END_ACTIONS}>
            ${ this.items.length > 0 ?
              html`
                <dx-tooltip tooltiptext=${downloadLabel} exportparts=${TOOLTIP_EXPORT_PARTS}>
                  <dx-icon-button
                    slot="target"
                    .icon=${html`<icon-download color="currentColor"></icon-download>`}
                    exportparts="${ICON_BUTTON_EXPORT_PARTS}"
                    @click=${this._handleDownloadButtonClick}
                    data-testid="dx-preview-download-button"
                    size=${ICON_BUTTON_SIZES.MEDIUM}
                    ariaLabel=${downloadLabel}
                    aria-hidden="true"
                  >
                  </dx-icon-button>
                </dx-tooltip>
                <dx-button
                  part=${PREVIEW_PARTS.PREVIEW_HEADER_SELECT_BUTTON}
                  buttontext=${this.selectButtonTitle}
                  exportparts="${Object.values(BUTTON_PARTS).join(',')}"
                  variant=${BUTTON_VARIANT.BUTTON_CONTAINED_VAR}
                  @click=${this._handleSelectButtonClick}
                  data-testid="dx-preview-select-button"
                  aria-hidden="true"
                  >
                </dx-button>
             ` : nothing }
          </div>
        </div>
        <hr part=${PREVIEW_PARTS.PREVIEW_HEADER_DIVIDER} />
        <div part=${PREVIEW_PARTS.PREVIEW_ITEM_CONTAINER}>
          ${this.items.length > 0 ? html`
            <div part=${PREVIEW_PARTS.PREVIEW_ITEM_PREVIOUS_BUTTON_CONTAINER}>
              <dx-tooltip 
                tooltiptext=${previousLabel}
                exportparts=${TOOLTIP_EXPORT_PARTS}
                placement=${this.isLtr ? TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START : TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END}
              >
                <dx-icon-button
                  slot="target"
                  part=${PREVIEW_PARTS.PREVIEW_ITEM_PREVIOUS_BUTTON}
                  .icon=${ this.isLtr
                    ? html`<icon-chevron-left></icon-chevron-left>`
                    : html`<icon-chevron-right></icon-chevron-right>`
                  }
                  exportparts="${PREVIEW_NAV_BUTTONS_EXPORT_PARTS}"
                  @click=${this._handlePreviousButtonClick}
                  ?disabled=${isPreviousDisabled}
                  data-testid="dx-preview-previous-button"
                  size=${ICON_BUTTON_SIZES.MEDIUM}
                  inversecolor
                  ariaLabel=${previousLabel}
                >
                </dx-icon-button>
              </dx-tooltip>
            </div>
          ` : nothing }
          <div id="preview-item-content-container" part=${PREVIEW_PARTS.PREVIEW_ITEM_CONTENT_CONTAINER}>
            ${this._renderPreviewItem()}
            ${
              this.isLoading || (this.currentDisplaySource && !this.isMediaReady && !this.hasError)
                ? html`
                <div part=${PREVIEW_PARTS.PREVIEW_ITEM_SPINNER_CONTAINER}>
                  <dx-circular-progress></dx-circular-progress>
                </div>
                `
                : nothing
            }
          </div>
          ${this.items.length > 0 ? html`
            <div part=${PREVIEW_PARTS.PREVIEW_ITEM_NEXT_BUTTON_CONTAINER}>
              <dx-tooltip 
                tooltiptext=${nextLabel}
                exportparts=${TOOLTIP_EXPORT_PARTS}
                placement=${this.isLtr ? TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END : TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START}
              >
                <dx-icon-button
                  slot="target"
                  part=${PREVIEW_PARTS.PREVIEW_ITEM_NEXT_BUTTON}
                  .icon=${ this.isLtr
                    ? html`<icon-chevron-right></icon-chevron-right>`
                    : html`<icon-chevron-left></icon-chevron-left>`
                  }
                  exportparts="${PREVIEW_NAV_BUTTONS_EXPORT_PARTS}"
                  @click=${this._handleNextButtonClick}
                  ?disabled=${isNextDisabled}
                  data-testid="dx-preview-next-button"
                  size=${ICON_BUTTON_SIZES.MEDIUM}
                  inversecolor
                  ariaLabel=${nextLabel}
                >
                </dx-icon-button>
              </dx-tooltip>
            </div>
          ` : nothing }
        </div>
        ${!this.isLoading && this.isMediaReady && !this.hasError && isImageType && !this.component
          ? html`
              <div part=${PREVIEW_PARTS.PREVIEW_ZOOM_CONTAINER}>
                <div part=${PREVIEW_PARTS.PREVIEW_ZOOM_CONTROLS}>
                  <dx-tooltip 
                    tooltiptext=${zoomOutLabel}
                    exportparts=${TOOLTIP_EXPORT_PARTS}
                    placement=${TOOLTIP_PLACEMENT.TOOLTIP_TOP}
                  >
                    <dx-icon-button
                      slot="target"
                      .icon=${html`<icon-zoom-out></icon-zoom-out>`}
                      exportparts="${PREVIEW_ZOOM_BUTTONS_EXPORT_PARTS}"
                      @click=${this._handleZoomOutButtonClick}
                      ?disabled=${this.zoomOutDisable}
                      data-testid="dx-preview-zoom-out-button"
                      size=${ICON_BUTTON_SIZES.MEDIUM}
                      inversecolor
                      ariaLabel=${zoomOutLabel}
                    >
                    </dx-icon-button>
                  </dx-tooltip>
                  <dx-tooltip 
                    tooltiptext=${percentageLabel}
                    exportparts=${TOOLTIP_EXPORT_PARTS}
                    placement=${TOOLTIP_PLACEMENT.TOOLTIP_TOP}
                  >
                    <dx-button
                      slot="target"
                      buttontext=${`${this.zoomPercentage}%`}
                      exportparts="${PREVIEW_ZOOM_PERCENT_BUTTON_EXPORT_PARTS}"
                      @click=${this._handleZoomPercentageFitClick}
                      data-testid="dx-preview-zoom-percentage-button"
                      inversecolor
                      ariaLabel=${percentageLabel}
                    >
                    </dx-button>
                  </dx-tooltip>
                  <dx-tooltip 
                    tooltiptext=${zoomInLabel}
                    exportparts=${TOOLTIP_EXPORT_PARTS}
                    placement=${TOOLTIP_PLACEMENT.TOOLTIP_TOP}
                  >
                    <dx-icon-button
                      slot="target"
                      .icon=${html`<icon-zoom-in></icon-zoom-in>`}
                      exportparts="${PREVIEW_ZOOM_BUTTONS_EXPORT_PARTS}"
                      @click=${this._handleZoomInButtonClick}
                      ?disabled=${this.zoomInDisable}
                      data-testid="dx-preview-zoom-in-button"
                      size=${ICON_BUTTON_SIZES.MEDIUM}
                      inversecolor
                      ariaLabel=${zoomInLabel}
                    >
                    </dx-icon-button>
                  </dx-tooltip>
                </div>
              </div>
            `
          : nothing}
      </div>
        </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dx-preview': DxPreview;
  }
}
