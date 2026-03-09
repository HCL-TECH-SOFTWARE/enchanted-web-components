/* ======================================================================== *
 * Copyright 2025, 2026 HCL America Inc.                                          *
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
import { property, query, state } from 'lit/decorators.js';
import { html, nothing, TemplateResult } from 'lit';
import createDebug from 'debug';

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';

// Helper imports
import { BUTTON_PARTS, BUTTON_VARIANT, ICON_BUTTON_SIZES, ARIA_ROLES } from '../../types/cssClassEnums';
import { getCurrentDirection } from '../localization';
import { LOCALE_DIRECTIONS } from '../constants';
import { KeyboardInputKeys } from '../../utils/keyboardEventKeys';
import { COMPONENT_PREFIX, ENCHANTED_BUTTON_TAG_NAME } from '../tags';

const debug = createDebug('enchanted-web-components:components:atomic-component:enchanted-button.ts');

export class EnchantedButton extends EnchantedAcBaseElement {
  static override shadowRootOptions = {
    ...EnchantedAcBaseElement.shadowRootOptions,
    delegatesFocus: true
  };
  
  @state()
  focused = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property()
  imgurl: string | undefined;

  @property()
  icon: TemplateResult | undefined;

  @property()
  buttontext: string | undefined;

  @property({ type:Boolean })
  endicon = false;

  @property({ type: String })
  variant: BUTTON_VARIANT.BUTTON_CONTAINED_VAR | BUTTON_VARIANT.BUTTON_TEXT_VAR | BUTTON_VARIANT.BUTTON_OUTLINED_VAR = BUTTON_VARIANT.BUTTON_CONTAINED_VAR;

  @property({ type: Boolean })
  withPadding = false;

  @property({ type: Boolean })
  inverseColor = false;

  @property({ type: String })
  size: ICON_BUTTON_SIZES = ICON_BUTTON_SIZES.SMALL;

  @property({ type: String })
  ariaLabel: string = '';

  @property({ type: String })
  ariaHasPopup: string = '';

  @property({ type: String })
  ariaExpanded: string = 'false';

  @query('svg')
  private _svgIcon!: SVGElement;

  private getButtonPart(): string {
    if (this.disabled) {
      switch (this.variant) {
        case BUTTON_VARIANT.BUTTON_TEXT_VAR:
          return !this.inverseColor ? BUTTON_PARTS.BUTTON_ENCHANTED_TEXT_DISABLED : BUTTON_PARTS.BUTTON_ENCHANTED_TEXT_DISABLED_INVERSE;
        case BUTTON_VARIANT.BUTTON_OUTLINED_VAR:
          return BUTTON_PARTS.BUTTON_ENCHANTED_OUTLINED_DISABLED;
        default:
          return !this.inverseColor ? BUTTON_PARTS.BUTTON_CONTAINED_DISABLED : BUTTON_PARTS.BUTTON_CONTAINED_DISABLED_INVERSE;
      }
    }

    if (this.focused) {
      switch (this.variant) {
        case BUTTON_VARIANT.BUTTON_TEXT_VAR:
          return !this.inverseColor ? BUTTON_PARTS.BUTTON_ENCHANTED_TEXT_FOCUSED : BUTTON_PARTS.BUTTON_ENCHANTED_TEXT_FOCUSED_INVERSE;
        case BUTTON_VARIANT.BUTTON_OUTLINED_VAR:
          return BUTTON_PARTS.BUTTON_ENCHANTED_OUTLINED_FOCUSED;
        default:
          return !this.inverseColor ? BUTTON_PARTS.BUTTON_CONTAINED_FOCUSED : BUTTON_PARTS.BUTTON_CONTAINED_FOCUSED_INVERSE;
      }
    }

    switch (this.variant) {
      case BUTTON_VARIANT.BUTTON_TEXT_VAR:
        return !this.inverseColor ? BUTTON_PARTS.BUTTON_ENCHANTED_TEXT : BUTTON_PARTS.BUTTON_ENCHANTED_TEXT_INVERSE;
      case BUTTON_VARIANT.BUTTON_OUTLINED_VAR:
        return BUTTON_PARTS.BUTTON_ENCHANTED_OUTLINED;
      case BUTTON_VARIANT.BUTTON_CONTAINED_VAR:
        return !this.inverseColor ? BUTTON_PARTS.BUTTON_CONTAINED : BUTTON_PARTS.BUTTON_CONTAINED_INVERSE;
      default:
        return BUTTON_PARTS.BUTTON;
    }

  }

  private getStartIconPart(): string {
    if (!this.buttontext) {
      if (this.size === ICON_BUTTON_SIZES.MEDIUM) {
        return this.withPadding ? BUTTON_PARTS.BUTTON_START_ICON_MEDIUM_WITH_PADDING : BUTTON_PARTS.BUTTON_START_ICON_MEDIUM_WITHOUT_PADDING;
      }
      if (this.size === ICON_BUTTON_SIZES.FAB) {
        return BUTTON_PARTS.BUTTON_START_ICON_FAB;
      }
      return this.withPadding ? BUTTON_PARTS.BUTTON_START_ICON_SMALL_WITH_PADDING : BUTTON_PARTS.BUTTON_START_ICON_SMALL_WITHOUT_PADDING;
    }

    return getCurrentDirection() === LOCALE_DIRECTIONS.RTL
      ? BUTTON_PARTS.BUTTON_START_ICON_RTL_MARGIN
      : BUTTON_PARTS.BUTTON_START_ICON;
  }

  private partAttributeDecider(part: string): string {
    switch (part) {
      case BUTTON_PARTS.BUTTON:
        return this.getButtonPart();
      case BUTTON_PARTS.BUTTON_START_ICON:
        return this.getStartIconPart();
      case BUTTON_PARTS.BUTTON_TEXT:
        return BUTTON_PARTS.BUTTON_TEXT;
      default:
        return part;
    }
  }

  updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);
    if (this.icon) {
      if (this._svgIcon) {
        this._svgIcon.setAttribute('part', this.partAttributeDecider( this.endicon ? BUTTON_PARTS.BUTTON_END_ICON : BUTTON_PARTS.BUTTON_START_ICON));
      } 
    }
  }

  private renderIcon(isEnd: boolean): TemplateResult | typeof nothing {
    if (this.icon) {
      const { strings } = this.icon;
      if (strings.length > 0) {
        // Check if icon is an enchanted icon with the <icon-*> tag
        const match = strings[0].match(new RegExp(`^\\s*<${COMPONENT_PREFIX}icon-[a-zA-Z0-9\\-_]+`));
        if (match) {
          return html`
            <span part=${this.partAttributeDecider( this.endicon ? BUTTON_PARTS.BUTTON_END_ICON : BUTTON_PARTS.BUTTON_START_ICON)} aria-hidden="true">
            ${this.icon}
            </span>
          `;
        }
      };
      return html`
          ${this.icon}
        `;
    }
    else if (this.imgurl) {
      return html`
        <img
          src="${this.imgurl}"
          alt="${this.imgurl}"
          part=${this.partAttributeDecider( isEnd ? BUTTON_PARTS.BUTTON_END_ICON : BUTTON_PARTS.BUTTON_START_ICON)}
          data-testid="${isEnd ? 'enchanted-button-endicon-img' : 'enchanted-button-img'}"
          aria-hidden="true"
        />
      `;
    }
    return nothing;
  }

  public _focusButton() {
    const button = this.renderRoot.querySelector('button');
    button?.focus();
  }

  render() {
    return html`
      <button
        id="enchanted-button-${this.id}"
        data-testid="enchanted-button"
        part=${this.partAttributeDecider(BUTTON_PARTS.BUTTON)}
        ?disabled=${this.disabled || nothing}
        @focus=${() => {return this.focused = true;}}
        @blur=${() => {return this.focused = false;}}
        @keydown=${this.handleKeyDown}
        aria-label=${this.ariaLabel || 'Button'}
        aria-haspopup=${this.ariaHasPopup || nothing}
        aria-expanded=${this.ariaExpanded || nothing}
        aria-disabled=${this.disabled ? 'true' : 'false'}
        role=${ARIA_ROLES.BUTTON}
        tabindex="0"
      >
        ${this.endicon ? nothing : this.renderIcon(this.endicon)}
        ${
          this.buttontext === undefined ? nothing : html`
            <span part=${this.partAttributeDecider(BUTTON_PARTS.BUTTON_TEXT)}>${this.buttontext}</span>
          ` 
        }
        ${this.endicon ? this.renderIcon(this.endicon) : nothing}
      </button>
    `;
  }

  private handleKeyDown(event: KeyboardEvent) {
    if ((event.key === KeyboardInputKeys.ENTER || event.key === KeyboardInputKeys.SPACE) && !this.disabled) {
      event.preventDefault();
      this._focusButton();
      this.dispatchEvent(new Event('click', { bubbles: true, composed: true }));
    }
  }
}

if (!customElements.get(ENCHANTED_BUTTON_TAG_NAME)) {
  customElements.define(ENCHANTED_BUTTON_TAG_NAME, EnchantedButton);
} else {
  debug('Component (%s) is currently registered and not possible to registrate again.', ENCHANTED_BUTTON_TAG_NAME);
}
