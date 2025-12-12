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
import { html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';
import './enchanted-svg-icon';

// Helper imports
import { BREADCRUMBS_PART } from '../../types/cssClassEnums';
import { BREADCRUMBS_ICON_TYPE } from '../../types/enchanted-breadcrumbs';

// Icon imports
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/home';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/information';

export interface PathType {
  title?: string,
  parentId?: string,
  link?: string,
  icon?: TemplateResult,
  iconName?: string,
  disabled?: boolean
}
/**
 * Breadcrumb item component.
 */
@customElement('enchanted-breadcrumbs-item')
export class EnchantedBreadcrumbsItem extends EnchantedAcBaseElement {
  @property({ type: Object }) path?: PathType;
  @property({ type: String }) partProp?: String;

  @property({ type: String })
  key = '';

  isDisabled = (): boolean => {
    if (this.path && this.path.disabled) {
      return this.path.disabled === true;
    }
    return false;
  };

  getPartValue() {
    if (this.partProp && this.isDisabled()) {
      return `${this.partProp} ${BREADCRUMBS_PART.BREADCRUMBS_DISABLED}`;
    } else if (this.partProp) {
      return this.partProp;
    }
    return `${BREADCRUMBS_PART.BREADCRUMBS_ITEM} ${this.isDisabled() ? BREADCRUMBS_PART.BREADCRUMBS_DISABLED : ''}`;
  }

  renderIcon() {
    // Check if icon is provided, then render it
    if (this.path?.icon) {
      return html`<enchanted-svg-icon .icon=${this.path.icon} part=${BREADCRUMBS_PART.BREADCRUMBS_ICON} color="#00000099" data-testid="breadcrumbs-item-icon"/>`;
    }

    // If iconName is provided, render the corresponding icon
    if (this.path?.iconName) {
      let part;

      // check if item is last
      if (this.partProp === BREADCRUMBS_PART.BREADCRUMBS_ITEM_LAST) {
        part = BREADCRUMBS_PART.BREADCRUMBS_ITEM_LAST_ICON;
      } else {
        part = BREADCRUMBS_PART.BREADCRUMBS_ICON;
      }

      switch (this.path.iconName) {
        case BREADCRUMBS_ICON_TYPE.HOME:
          return html`<icon-home size="16" part=${part}></icon-home>`;

        case BREADCRUMBS_ICON_TYPE.INFORMATION:
          return html`<icon-information size="16" part=${part}></icon-information>`;

        default:
          // Return nothing for other icons
          return html``;
      }
    }

    // Return empty, if both icon and iconName is not provided
    return '';
  }

  render() {
    return html`
      <div part="${this.getPartValue()}" key=${this.key} title=${this.path?.title}>
        <a href="#" part="${this.partProp ? BREADCRUMBS_PART.BREADCRUMBS_LINK_LAST: BREADCRUMBS_PART.BREADCRUMBS_LINK}" tabindex="${this.isDisabled() ? '-1' : '0'}">
          <div part="${BREADCRUMBS_PART.BREADCRUMBS_CONTENT}">
            ${this.renderIcon()}
            ${this.path?.title && html`<span part="${BREADCRUMBS_PART.BREADCRUMBS_TEXT}" data-testid="breadcrumbs-title">${this.path.title}</span>`}
          </div>
        </a>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'enchanted-breadcrumbs-item': EnchantedBreadcrumbsItem
  }
}
