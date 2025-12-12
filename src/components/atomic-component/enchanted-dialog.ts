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
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';
import './enchanted-svg-icon';
import './enchanted-button';

// Helper imports
import { DIALOG_PARTS } from '../../types/cssClassEnums';
import { DialogSizes } from '../../types/enchanted-dialog';
import { isLTR } from '../localization';
import { KeyboardInputKeys } from '../../utils/keyboardEventKeys';

// Icon imports
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/close';

@customElement('enchanted-dialog')
@localized()
export class EnchantedDialog extends EnchantedAcBaseElement {
  private static readonly FOCUSABLE_SELECTOR = 'enchanted-textfield, enchanted-button, enchanted-icon-button, button, input, [tabindex]:not([tabindex="-1"])';
  private static readonly MAX_FOCUS_DEPTH = 10;

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
    const slots = this.renderRoot.querySelectorAll('slot');
    for (const slot of Array.from(slots)) {
      const assignedElements = slot.assignedElements({ flatten: true });
      for (const element of assignedElements) {
        if (element.matches(EnchantedDialog.FOCUSABLE_SELECTOR)) {
          this._focusElement(element as HTMLElement);
          return;
        }

        const focusableChild = element.querySelector(EnchantedDialog.FOCUSABLE_SELECTOR) as HTMLElement;
        if (focusableChild) {
          this._focusElement(focusableChild);
          return;
        }
      }
    }

    const firstFocusable = this.renderRoot.querySelector(EnchantedDialog.FOCUSABLE_SELECTOR) as HTMLElement;
    if (firstFocusable) {
      this._focusElement(firstFocusable);
      return;
    }

    const dialogElement = this.renderRoot.querySelector(`[part*="${this.getPaperPart()}"]`) as HTMLElement;
    dialogElement?.focus();
  }

  /**
   * Type guard to check if an element has a shadowRoot property.
   * @param element - The element to check
   * @returns true if the element has a valid shadowRoot
   */
  private _hasShadowRoot(element: HTMLElement): element is HTMLElement & { shadowRoot: ShadowRoot } {
    return 'shadowRoot' in element && element.shadowRoot instanceof ShadowRoot;
  }

  /**
   * Type guard to check if an element has a renderRoot property (Lit components).
   * @param element - The element to check
   * @returns true if the element has a valid renderRoot
   */
  private _hasRenderRoot(element: HTMLElement): element is HTMLElement & { renderRoot: ShadowRoot } {
    return 'renderRoot' in element && (element as unknown as { renderRoot: unknown }).renderRoot instanceof ShadowRoot;
  }

  /**
   * Recursively searches through web component shadow DOMs to find the deepest focusable element.
   * @param element - The element to start searching from
   * @param depth - Current depth in the shadow DOM tree (used internally for recursion limiting)
   */
  private _focusElement(element: HTMLElement, depth: number = 0) {
    if (depth >= EnchantedDialog.MAX_FOCUS_DEPTH) {
      (element).focus();
      return;
    }

    let currentElement: HTMLElement | null = element;
    let foundFocusable: HTMLElement | null = null;
    let currentDepth = depth;

    while (currentElement && currentDepth < EnchantedDialog.MAX_FOCUS_DEPTH) {
      if (this._hasShadowRoot(currentElement)) {
        const shadowFocusable = currentElement.shadowRoot.querySelector(EnchantedDialog.FOCUSABLE_SELECTOR) as HTMLElement;
        if (shadowFocusable) {
          currentElement = shadowFocusable;
          foundFocusable = shadowFocusable;
          currentDepth++;
          continue;
        }
      } else if (this._hasRenderRoot(currentElement)) {
        const renderRootFocusable = currentElement.renderRoot.querySelector(EnchantedDialog.FOCUSABLE_SELECTOR) as HTMLElement;
        if (renderRootFocusable) {
          currentElement = renderRootFocusable;
          foundFocusable = renderRootFocusable;
          currentDepth++;
          continue;
        }
      }

      break;
    }

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
      new CustomEvent('enchanted-dialog-close', {
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
      case DialogSizes.XS:
        return DIALOG_PARTS.CONTAINER_XS;
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
      case DialogSizes.XS:
        return DIALOG_PARTS.PAPER_XS;
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
      case DialogSizes.XS:
        return DIALOG_PARTS.CONTENT_XS;
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
      case DialogSizes.XS:
        return DIALOG_PARTS.PAGINATION_XS;
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
              <div part="${!this.overrideTitle ? DIALOG_PARTS.TITLE : nothing}">
                ${this.overrideTitle
                  ? html`<slot name="title"></slot>`
                  : html`
                    <div part=${isLTR() ? DIALOG_PARTS.TITLE_ROOT : DIALOG_PARTS.TITLE_ROOT_RTL}>
                      <p part=${isLTR() ? DIALOG_PARTS.TITLE_TEXT : DIALOG_PARTS.TITLE_TEXT_RTL}>
                        ${this.dialogTitle}
                      </p>
                      <div part=${DIALOG_PARTS.ICON_ROOT}>
                        <icon-close
                          part=${DIALOG_PARTS.ICON_CLOSE}
                          color="rgba(0, 0, 0, 0.60)"
                          size="20"
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
    'enchanted-dialog': EnchantedDialog
  }
}
