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
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';
import { HEADER_LAYOUT_PARTS } from '../../types/cssClassEnums';
 
/**
 * Search Header template.
 */
@customElement('enchanted-header-layout')
export class EnchantedHeaderLayout extends EnchantedAcBaseElement {

  @property({ type: Boolean }) isTagsAvailable = false;
  @property({ type: Boolean }) isChatHeader = false;

  render() {
    return html`
      <div part="${this.isChatHeader ? HEADER_LAYOUT_PARTS.CHAT_MAIN_HEADER : HEADER_LAYOUT_PARTS.MAIN_HEADER}">
        <div part="${HEADER_LAYOUT_PARTS.HEADER_START_CONTAINER}">
          <div part="${HEADER_LAYOUT_PARTS.HEADER_START}"><slot name="header-start"></slot></div>
        </div>
        <div part="${HEADER_LAYOUT_PARTS.HEADER_START_CONTAINER_LABEL}">
          <div part="${HEADER_LAYOUT_PARTS.HEADER_START_LABEL}"><slot name="header-start-label"></slot></div>
        </div>
        <div part="${HEADER_LAYOUT_PARTS.HEADER_MIDDLE_CONTAINER}">
          <div part="${HEADER_LAYOUT_PARTS.HEADER_MIDDLE}"><slot name="header-middle"></slot></div>
        </div>
        <div part="${HEADER_LAYOUT_PARTS.HEADER_END_CONTAINER}">
          <div part="${HEADER_LAYOUT_PARTS.HEADER_END}"><slot name="header-end"></slot></div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'enchanted-header-layout': EnchantedHeaderLayout
  }
}
  