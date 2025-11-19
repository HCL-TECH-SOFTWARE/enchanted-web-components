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
      await this._performDialogFocusSequence();
    }
  }

  /**
   * Private method that handles the dialog focus and announcement sequence
   * Used by both initial open and refocus scenarios
   */
  private async _performDialogFocusSequence() {
    await this.updateComplete;

    // Use part selector for refocus scenarios
    const dialogElement = this.renderRoot.querySelector(`[part*="${this.getPaperPart()}"]`) as HTMLElement;
    const contentWrapper = dialogElement?.querySelector('div[role="presentation"]') as HTMLElement;

    if (!dialogElement) return;

    // For NVDA: Create a live region to announce the dialog opening
    // This ensures NVDA announces the dialog even before focus moves
    let liveRegion = this.renderRoot.querySelector('#dialog-announce') as HTMLElement;
    if (!liveRegion) {
      liveRegion = document.createElement('div');
      liveRegion.id = 'dialog-announce';
      liveRegion.className = 'dx-dialog-live-region';
      liveRegion.setAttribute('role', 'status');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      dialogElement.parentElement?.appendChild(liveRegion);
    }
    // Announce for NVDA
    liveRegion.textContent = `${this.dialogTitle}, dialog`;

    // Set role="dialog" and aria-label for VoiceOver announcement
    dialogElement.setAttribute('role', 'dialog');
    dialogElement.setAttribute('aria-label', this.dialogTitle);
    dialogElement.setAttribute('aria-modal', 'true');

    // Make content hidden temporarily for clean announcement
    if (contentWrapper) {
      contentWrapper.setAttribute('aria-hidden', 'true');
    }

    // Temporarily make dialog focusable and focus it for announcement
    dialogElement.setAttribute('tabindex', '-1');
    dialogElement.focus();

    // CRITICAL: Remove role and aria-label BEFORE moving focus to prevent VoiceOver from including dialog context
    // This is the key - cleanup happens BEFORE focus moves, not after
    setTimeout(() => {
      this._cleanupDialogAttributes(dialogElement, contentWrapper, liveRegion);
      // Move focus after a tiny additional delay to ensure cleanup is complete
      setTimeout(() => {
        this._focusFirstElement();
      }, 20);
    }, 100); // Allow screen readers to announce dialog first
  }

  /**
   * Helper to clean up dialog attributes after announcement
   */
  private _cleanupDialogAttributes(dialogElement: HTMLElement, contentWrapper: HTMLElement | undefined, liveRegion?: HTMLElement) {
    dialogElement.removeAttribute('tabindex');

    // CRITICAL: Remove aria-label to prevent it from being announced with child elements
    dialogElement.removeAttribute('aria-label');

    // CRITICAL: Remove role="dialog" to prevent VoiceOver from announcing dialog context with children
    // VoiceOver includes "dialog" and counts items when this role is present during child focus
    // We remove it entirely - the modal behavior is maintained by aria-modal on the container
    dialogElement.removeAttribute('role');

    // Remove aria-hidden from content so child elements are properly accessible
    if (contentWrapper) {
      contentWrapper.removeAttribute('aria-hidden');
    }

    // Clear the live region after announcement
    if (liveRegion) {
      liveRegion.textContent = '';
    }
  }

  /**
   * Helper to find and focus the first focusable element
   */
  private _focusFirstElement() {
    const firstFocusable = this.renderRoot.querySelector(
      'dx-input-textfield, dx-button, button, input, [tabindex]:not([tabindex="-1"])'
    ) as HTMLElement;

    if (!firstFocusable) return;

    // For web components with shadow DOM, access the actual focusable element
    if ('shadowRoot' in firstFocusable && firstFocusable.shadowRoot) {
      const shadowInput = firstFocusable.shadowRoot.querySelector(
        'input, button, [tabindex]:not([tabindex="-1"])'
      ) as HTMLElement;

      (shadowInput || firstFocusable).focus();
    } else {
      firstFocusable.focus();
    }

    // role="dialog" has been removed before this function is called to prevent VoiceOver context announcements
  }

  /**
   * Public method to re-focus and re-announce the dialog
   * Useful when returning to the dialog from a different view (e.g., search results)
   */
  async refocusDialog() {
    if (!this.open) return;
    await this._performDialogFocusSequence();
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
              aria-modal="true"
            >
              <div role="presentation" aria-hidden="true">
                <div role="presentation">
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
