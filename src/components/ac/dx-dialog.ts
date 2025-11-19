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
import { customElement, property, query } from 'lit/decorators.js';
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

  @query('div[role="dialog"]')
  private _dialogElement!: HTMLDivElement;

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
      this.focusDialog();
    }
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

  public focusDialog() {
    this._dialogElement?.focus();
  }

  render() {
    const isChatMode = this.size === DialogSizes.CHAT;
    if (this.open) {
      return html`
        <div role="presentation" part=${isChatMode ? DIALOG_PARTS.DIALOG_ROOT_CHAT : DIALOG_PARTS.DIALOG_ROOT}>
          ${isChatMode ? nothing : html`<div aria-hidden="true" part=${DIALOG_PARTS.BACKDROP} @click=${debounce(this.handleClose, 300)}></div>`}
          <div tabindex="-1" role="presentation" part=${this.getContainerPart()}>
            <div role="dialog" part=${this.getPaperPart()} tabindex="0" aria-modal="true">
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
