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

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';
import './enchanted-textfield';
import './enchanted-button';
import './enchanted-badge';

// Helper imports
import { BUTTON_PARTS, HEADER_VARIANT, HEADER_PARTS } from '../../types/cssClassEnums';

// Icon imports
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/chevron--left';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/filter';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/search';

@customElement('enchanted-header')
@localized()
export class EnchantedHeader extends EnchantedAcBaseElement {
  @property({ type: String }) headerTitle = '';
  @property({ type: Boolean }) showBackIcon = false;
  @property({ type: Boolean }) isSideNavOpen = false;
  @property({ type: Boolean }) disabled = false;
  @property() variant: HEADER_VARIANT | undefined = undefined;

  connectedCallback(): void {
    super.connectedCallback();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  renderTitle(variant?: HEADER_VARIANT) {
    switch (variant) {
      case HEADER_VARIANT.HEADER_AUTHORING:
        return  html`${this.getMessage('header.authoring.search')}`;
      case HEADER_VARIANT.HEADER_AUTHORING_MODAL_CLOSE:
        return  html`${this.getMessage('header.authoring.search')}`;
      case HEADER_VARIANT.HEADER_ENDUSER:
        return  html`${this.getMessage('header.enduser.search.center.title')}`;
      default:
        return  html`${this.headerTitle}`;
    }
  }

  renderEndSection(variant?: HEADER_VARIANT) {
    switch (variant) {
      case HEADER_VARIANT.HEADER_AUTHORING:
        return html`
          <enchanted-textfield label=""
            ?disabled="${this.disabled}"
            exportparts=${HEADER_PARTS.INPUT} 
            placeholder="${this.getMessage('header.enduser.search.placeholder')}"
          >
          </enchanted-textfield>
          <div part=${HEADER_PARTS.HEADER_SPACING_END}>
            <enchanted-button
              ?disabled="${this.disabled}"
              buttontext=''
              ?outlined="${false}"
              data-testid="enchanted-filter-button"
              .icon="${html`<icon-filter size="16" color="currentColor"></icon-filter>`}"
            >
            </enchanted-button>
            <enchanted-badge part=${HEADER_PARTS.BADGE_DOT}/>
          </div>`;
      case HEADER_VARIANT.HEADER_AUTHORING_MODAL_CLOSE:
        return html`
          <div part=${HEADER_PARTS.HEADER_SPACING_END}>
            <enchanted-button
              ?disabled="${this.disabled}"
              .icon="${html`<icon-search size="16" color="currentColor"></icon-search>`}"
              buttontext="${this.getMessage('header.enduser.search')}"
              exportparts="${Object.values(BUTTON_PARTS).join(',')}"
              ?outlined="${true}"
            >
            </enchanted-button>
          </div>`;
      case HEADER_VARIANT.HEADER_ENDUSER:
        return html`
          <div part=${HEADER_PARTS.HEADER_SPACING_END}></div>`;
      default:
        return null;
    }
  }
  render() {
    return html`
      <div part=${HEADER_PARTS.HEADER}>
        <div part=${HEADER_PARTS.SUB_HEADER_START}>
          <div part=${this.isSideNavOpen ? HEADER_PARTS.HEADER_SPACING_START_HAMBURGER : HEADER_PARTS.HEADER_SPACING_START} >
            ${this.showBackIcon
              ? html`
              <enchanted-button
              ?disabled="${this.disabled}"
              buttontext=''
              ?outlined="${false}"
              data-testid="enchanted-back-button"
              .icon="${html`<icon-chevron-left size="16" color="rgba(0, 0, 0, 0.60)"></icon-chevron-left>`}"
            >
            </enchanted-button>`
              : nothing
            }
          </div>
          <div part=${HEADER_PARTS.H6}>
            ${this.renderTitle(this.variant)}
          </div>
        </div>
        <div part=${HEADER_PARTS.SUB_HEADER_END}>
          ${this.renderEndSection(this.variant)}
        </div>
      </div>
      <hr part=${HEADER_PARTS.HR_PART}>
    `;
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'enchanted-header': EnchantedHeader
  }
}
