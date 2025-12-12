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
import { BADGE_PARTS } from '../../types/cssClassEnums';
import { isLTR } from '../localization';
 
@customElement('enchanted-badge')
export class EnchantedBadge extends EnchantedAcBaseElement {

  @property({ type: String }) badge = '';
  
  render() {
    return html`<div part=${isLTR() ? BADGE_PARTS.BADGE_TEXT : BADGE_PARTS.BADGE_TEXT_RTL} data-testid="enchanted-badge">${this.badge}</div>`;
  }
}
 
declare global {
  interface HTMLElementTagNameMap {
    'enchanted-badge': EnchantedBadge
  }
}
 