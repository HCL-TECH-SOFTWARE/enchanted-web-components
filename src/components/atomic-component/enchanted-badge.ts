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

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';

// Helper imports
import { getCurrentDirection } from "../localization";
import { LOCALE_DIRECTIONS } from "../constants";
import { EnchantedBadgeColor, EnchantedBadgeBorder, EnchantedBadgeType, EnchantedBadgeParts } from '../../types/cssClassEnums';
 
@customElement('enchanted-badge')
export class EnchantedBadge extends EnchantedAcBaseElement {


  @property({ reflect: true }) color: EnchantedBadgeColor = EnchantedBadgeColor.PRIMARY;

  @property({ reflect: true }) border: EnchantedBadgeBorder = EnchantedBadgeBorder.DEFAULT;

  @property({ reflect: true }) badge: EnchantedBadgeType = EnchantedBadgeType.TEXT;

  @property() text: string = ''; // Added property to allow user to pass any string for badge:text


  render() {
    const isDirectionLTR = getCurrentDirection() === LOCALE_DIRECTIONS.LTR;
    const partName = this.badge === EnchantedBadgeType.DOT
      ? EnchantedBadgeParts.BADGE_DOT
      : isDirectionLTR
        ? EnchantedBadgeParts.BADGE_TEXT
        : EnchantedBadgeParts.BADGE_TEXT_RTL;

    return html`
      <div
        part="${partName}"
        data-testid="enchanted-badge"
      >
        ${this.badge === EnchantedBadgeType.TEXT ? this.text : ''}
      </div>
    `;
  }
}
 
declare global {
  interface HTMLElementTagNameMap {
    'enchanted-badge': EnchantedBadge
  }
}
