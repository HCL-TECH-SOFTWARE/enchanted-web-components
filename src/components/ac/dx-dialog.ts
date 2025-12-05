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
import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { localized } from '@lit/localize';
import { debounce } from 'lodash';

// Component imports
import { DxAcBaseElement } from './dx-ac-base-element';
import './dx-svg-icon';
import './dx-button';

// Helper imports
import { DIALOG_PARTS } from '../../types/cssClassEnums';
import { DialogSizes } from '../../types/dx-dialog';
import { isLTR } from '../localization';
import { KeyboardInputKeys } from '../../utils/keyboardEventKeys';

// Icon imports
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/close';

@customElement('dx-dialog')
@localized()
export class DxDialog extends DxAcBaseElement {
  private static readonly FOCUSABLE_SELECTOR = 'dx-input-textfield, dx-button, dx-icon-button, button, input, [tabindex]:not([tabindex="-1"])';

  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: String })
  size = DialogSizes.XL;

  @property({ type: String })
  dialogTitle = '';

  @property({ type: Boolean })
  overrideTitle = false;

  @property({ type: Boolean })
  removeBorder = false;

  connectedCallback(): void {
    super.connectedCallback();
    if (this.dialogTitle === '') {
      this.dialogTitle = this.getMessage('generic.label');
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  async updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('open') && this.open) {
      await this.updateComplete;
      this._focusFirstElement();
    }
  }

  /**
   * Finds and focuses the first focusable element in the dialog.
   * Searches slotted content first, then falls back to shadow DOM.
   */
  private _focusFirstElement() {
    // First, try to find focusable elements in slotted content (light DOM)
    const slots = this.renderRoot.querySelectorAll('slot');
    for (const slot of Array.from(slots)) {
      const assignedElements = slot.assignedElements({ flatten: true });
      for (const element of assignedElements) {
        // Check if the element itself is focusable
        if (element.matches(DxDialog.FOCUSABLE_SELECTOR)) {
          this._focusElement(element as HTMLElement);
          return;
        }

        // Check for focusable elements within the slotted element
        const focusableChild = element.querySelector(DxDialog.FOCUSABLE_SELECTOR) as HTMLElement;
        if (focusableChild) {
          this._focusElement(focusableChild);
          return;
        }
      }
    }

    // If no slotted focusable element found, search in shadow DOM
    const firstFocusable = this.renderRoot.querySelector(DxDialog.FOCUSABLE_SELECTOR) as HTMLElement;
    if (firstFocusable) {
      this._focusElement(firstFocusable);
      return;
    }

    // Fallback: focus the dialog container itself
    const dialogElement = this.renderRoot.querySelector(`[part*="${this.getPaperPart()}"]`) as HTMLElement;
    dialogElement?.focus();
  }

  /**
   * Recursively searches through web component shadow DOMs to find the deepest focusable element.
   * @param element - The element to start searching from
   */
  private _focusElement(element: HTMLElement) {
    // Recursively search for the deepest focusable element in nested web components
    let currentElement: HTMLElement | null = element;
    let foundFocusable: HTMLElement | null = null;

    while (currentElement) {
      // Check if current element has shadowRoot
      if ('shadowRoot' in currentElement && currentElement.shadowRoot) {
        const shadowFocusable = currentElement.shadowRoot.querySelector(DxDialog.FOCUSABLE_SELECTOR) as HTMLElement;
        if (shadowFocusable) {
          currentElement = shadowFocusable;
          foundFocusable = shadowFocusable;
          continue; // Keep going deeper if this element also has shadow DOM
        }
      }
      // Check renderRoot if shadowRoot doesn't exist (for Lit components)
      else if ('renderRoot' in currentElement && (currentElement as unknown as { renderRoot: ShadowRoot }).renderRoot) {
        const renderRootFocusable = (currentElement as unknown as { renderRoot: ShadowRoot }).renderRoot.querySelector(DxDialog.FOCUSABLE_SELECTOR) as HTMLElement;
        if (renderRootFocusable) {
          currentElement = renderRootFocusable;
          foundFocusable = renderRootFocusable;
          continue; // Keep going deeper if this element also has renderRoot
        }
      }

      // No deeper shadow DOM/renderRoot found, use current element
      break;
    }

    // Focus the deepest focusable element found, or the original element
    (foundFocusable || element).focus();
  }

  /**
   * Public method to re-focus the dialog.
   * Useful when returning to the dialog from a different view (e.g., search results).
   */
  async refocusDialog() {
    if (!this.open) return;
    await this.updateComplete;
    this._focusFirstElement();
  }

  handleClose(event: Event) {
    event.stopPropagation();
    this.open = false;
    this.dispatchEvent(
      new CustomEvent('dx-dialog-close', {
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleCloseByEnterKey(event: KeyboardEvent) {
    if (event.key === KeyboardInputKeys.ENTER || event.key === KeyboardInputKeys.SPACE) {
      event.stopPropagation();
      this.handleClose(event as unknown as MouseEvent);
    }
  }

  private getContainerPart(): string {
    switch (this.size) {
      case DialogSizes.XL:
        return DIALOG_PARTS.CONTAINER_XL;
      case DialogSizes.SM:
        return DIALOG_PARTS.CONTAINER_SM;
      case DialogSizes.MD:
        return DIALOG_PARTS.CONTAINER_MD;
      case DialogSizes.LG:
        return DIALOG_PARTS.CONTAINER_LG;
      case DialogSizes.CHAT:
        return DIALOG_PARTS.CONTAINER_CHAT;
      default:
        return DIALOG_PARTS.CONTAINER_XL;
    }
  }

  private getPaperPart(): string {
    switch (this.size) {
      case DialogSizes.XL:
        return DIALOG_PARTS.PAPER_XL;
      case DialogSizes.SM:
        return DIALOG_PARTS.PAPER_SM;
      case DialogSizes.MD:
        return DIALOG_PARTS.PAPER_MD;
      case DialogSizes.LG:
        return DIALOG_PARTS.PAPER_LG;
      case DialogSizes.CHAT:
        return DIALOG_PARTS.PAPER_CHAT;
      default:
        return DIALOG_PARTS.PAPER_XL;
    }
  }

  private getContentPart(): string {
    switch (this.size) {
      case DialogSizes.XL:
        if (this.removeBorder) {
          return DIALOG_PARTS.CONTENT_XL_NO_BORDER;
        }
        return DIALOG_PARTS.CONTENT_XL;
      case DialogSizes.SM:
        return DIALOG_PARTS.CONTENT_SM;
      case DialogSizes.MD:
        return DIALOG_PARTS.CONTENT_MD;
      case DialogSizes.LG:
        return DIALOG_PARTS.CONTENT_LG;
      case DialogSizes.CHAT:
        return DIALOG_PARTS.CONTENT_CHAT;
      default:
        return DIALOG_PARTS.CONTENT_XL;
    }
  }

  private getPaginationPart(): string {
    switch (this.size) {
      case DialogSizes.SM:
        return DIALOG_PARTS.PAGINATION_SM;
      case DialogSizes.MD:
        return DIALOG_PARTS.PAGINATION_MD;
      case DialogSizes.LG:
        return DIALOG_PARTS.PAGINATION_LG;
      case DialogSizes.XL:
      default:
        return DIALOG_PARTS.PAGINATION_XL;
    }
  }

  private getActionPart(): string {
    if (this.removeBorder) {
      return DIALOG_PARTS.ACTION_NO_BORDER;
    }
    if (this.size === DialogSizes.CHAT) {
      return DIALOG_PARTS.CHAT_ACTION;
    }
    return DIALOG_PARTS.ACTION;
  }

  render() {
    const isChatMode = this.size === DialogSizes.CHAT;
    if (this.open) {
      return html`
        <div role="presentation" part=${isChatMode ? DIALOG_PARTS.DIALOG_ROOT_CHAT : DIALOG_PARTS.DIALOG_ROOT}>
          ${isChatMode ? nothing : html`<div aria-hidden="true" part=${DIALOG_PARTS.BACKDROP} @click=${debounce(this.handleClose, 300)}></div>`}
          <div tabindex="-1" role="presentation" part=${this.getContainerPart()}>
            <div
              part=${this.getPaperPart()}
              role="dialog"
              aria-label=${this.dialogTitle}
              tabindex="-1"
              aria-modal="true"
            >
              <div ?part=${this.overrideTitle ? DIALOG_PARTS.TITLE : ""}>
                ${this.overrideTitle
                  ? html`<slot name="title"></slot>`
                  : html`
                    <div part=${DIALOG_PARTS.TITLE_ROOT}>
                      <p part=${isLTR() ? DIALOG_PARTS.TITLE_TEXT : DIALOG_PARTS.TITLE_TEXT_RTL}>
                        ${this.dialogTitle}
                      </p>
                      <div part=${DIALOG_PARTS.ICON_ROOT}>
                        <icon-close
                          part=${DIALOG_PARTS.ICON_CLOSE}
                          color="rgba(0, 0, 0, 0.60)"
                          size="16"
                          @click=${debounce(this.handleClose, 300)}
                          @keydown=${this.handleCloseByEnterKey}
                          tabindex="0"
                        >
                        </icon-close>
                      </div>
                    </div>`}
              </div>
              <div part=${this.getContentPart()}>
                <slot name="content"></slot>
              </div>
              <div part=${this.getPaginationPart()}>
                <slot name="pagination"></slot>
              </div>
              <div part=${this.getActionPart()}>
                <slot name="footer"></slot>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    return nothing;
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'dx-dialog': DxDialog
  }
}
