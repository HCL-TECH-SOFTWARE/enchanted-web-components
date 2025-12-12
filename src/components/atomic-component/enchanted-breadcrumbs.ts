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
import { customElement, property, state } from 'lit/decorators.js';

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';
import './enchanted-breadcrumbs-item';
import './enchanted-svg-icon';
// Helper imports
import { BREADCRUMBS_PART } from '../../types/cssClassEnums';
import { PathType } from './enchanted-breadcrumbs-item'; 
import { isLTR } from '../localization';
// Icon imports
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/chevron--right';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/chevron--left';

/**
 * Breadcrumb component.
 */
@customElement('enchanted-breadcrumbs')
export class EnchantedBreadcrumbs extends EnchantedAcBaseElement {
  static override shadowRootOptions = {
    ...EnchantedAcBaseElement.shadowRootOptions,
    delegatesFocus: true
  };
  
  @property({ type: Array<PathType> })
  paths = [];
  
  @property({ type: Function })
  handleBreadcrumbClick?: (_event: Event, _path: PathType) => void;

  @state()
  exportParts = Object.values(BREADCRUMBS_PART).join(',');

  @state()
  isLtr: boolean = isLTR();

  render() {
    return html`
      <nav
        part="${BREADCRUMBS_PART.BREADCRUMBS_CONTAINER}"
        role="presentation"
      >
        <div role="group">
          <ul part="${BREADCRUMBS_PART.BREADCRUMBS_LIST}" role="presentation">
          ${ 
            this.paths?.map((path: PathType, index) => {
              return html`
                ${
                  index < this.paths.length-1 ? 
                    html`
                      <li part="${BREADCRUMBS_PART.BREADCRUMBS_ITEM_LIST}" key="breadcrumb-${index}">
                        <enchanted-breadcrumbs-item
                          @click="${(event: Event) => {
                            if (this.handleBreadcrumbClick && !path.disabled) this.handleBreadcrumbClick(event, path);
                          }}"
                          .path="${path}"
                          key="breadcrumb-${index}"
                          exportparts="${this.exportParts}"
                          data-testid="breadcrumbs-item"
                        >
                        </enchanted-breadcrumbs-item>
                      </li>
                        <li part="${BREADCRUMBS_PART.BREADCRUMBS_SEPARATOR}" aria-hidden="true">
                          <enchanted-svg-icon .icon=${ this.isLtr
                            ? html`<icon-chevron-right size="16"></icon-chevron-right>`
                            : html`<icon-chevron-left size="16"></icon-chevron-left>`
                          } ?useCurrentColor=${true}></enchanted-svg-icon>
                        </li>` :
                    html`
                      <li part="${BREADCRUMBS_PART.BREADCRUMBS_ITEM_LIST}" key="breadcrumb-${index}">
                        <enchanted-breadcrumbs-item
                          .path="${path}"
                          key="breadcrumb-${index}"
                          exportparts="${this.exportParts}"
                          partProp="${BREADCRUMBS_PART.BREADCRUMBS_ITEM_LAST}"
                          data-testid="breadcrumbs-item"
                          aria-current="page"
                        />
                      </li>`
                }
              `;
            })
          }
          </ul>
        </div>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'enchanted-breadcrumbs': EnchantedBreadcrumbs
  }
}
