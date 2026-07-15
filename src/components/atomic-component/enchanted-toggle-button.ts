/* ======================================================================== *
 * Copyright 2025, 2026 HCL America Inc.                                    *
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
import { property } from 'lit/decorators.js';
import { nothing } from 'lit';
import { html } from 'lit/static-html.js';
import createDebug from 'debug';

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';
import './enchanted-badge';
// import './enchanted-icon-button';
import './enchanted-tooltip';

// Helper imports
import { TOGGLE_BUTTON_PARTS, TOOLTIP_PLACEMENT, TOGGLE_BUTTON_SLOTS } from '../../types/cssClassEnums';
import { TOOLTIP_EXPORT_PARTS } from '../exportParts';
import { ENCHANTED_TOGGLE_BUTTON_TAG_NAME, ENCHANTED_TOOLTIP_TAG } from '../tags';

const debug = createDebug('enchanted-web-components:components:atomic-component:enchanted-toggle-button.ts');

export class EnchantedToggleButton extends EnchantedAcBaseElement {

  @property({ type: Boolean, reflect: true })
  toggleOn = false;

  @property({ type: Boolean })
  showBadge = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  padding = false;

  @property({ type: String })
  iconSize: 'small' | 'large' = 'small';

  @property({ type: String })
  tooltipText = '';

  @property({ type: Boolean, reflect: true })
  firstType = false;

  @property({ type: Boolean, reflect: true })
  lastType = false;

  @property({ type: String })
  ariaLabel = '';

  private handleClick(event: Event) {
    event.stopPropagation();
    if (this.disabled) return;
    this.toggleOn = !this.toggleOn;
    this.dispatchEvent(new CustomEvent('toggle-change',  {
      detail: { toggleOn: this.toggleOn },
      bubbles: true,
      composed: true
    }));
  }
  
  protected updated(changedProperties: Map<string, unknown>): void {
    if (!changedProperties.has('iconSize')) return;
    const iconSlot = this.renderRoot.querySelector('slot[name="icon"]') as HTMLSlotElement | null;
    const assignedIcon = iconSlot ? iconSlot.assignedElements()[0] as HTMLElement | undefined : undefined;
    const iconElement = assignedIcon?.matches('[slot="icon"]')
      ? assignedIcon
      : assignedIcon?.querySelector('*') as HTMLElement | null;
    const iconWithSize = iconElement as (HTMLElement & { size?: string }) | null;
    if (iconWithSize) {
      const resolvedIconSize = this.iconSize === 'large' ? '20' : '16';
      iconWithSize.size = resolvedIconSize;
    }
  }

  // private getButtonStatePart(): string {
  //   return this.toggleOn ? TOGGLE_BUTTON_PARTS.TOGGLE_ON_SINGLE_BUTTON : TOGGLE_BUTTON_PARTS.TOGGLE_OFF_SINGLE_BUTTON;
  // }

  private getSizepart(): string {
    return this.iconSize === 'small' ? TOGGLE_BUTTON_PARTS.TOGGLE_BUTTON_SMALL : TOGGLE_BUTTON_PARTS.TOGGLE_BUTTON_LARGE;
  }

  private getPaddingPart(): string {
    return this.padding ? TOGGLE_BUTTON_PARTS.TOGGLE_BUTTON_WITH_PADDING : '';
  }

  private renderBadge() {
    return this.showBadge ? html`
    <div part="${TOGGLE_BUTTON_PARTS.TOGGLE_BUTTON_BADGE_WRAPPER}">
      <slot name="${TOGGLE_BUTTON_SLOTS.BADGE}"></slot>
    </div>
    ` : nothing;
  }

  render() {
    const tooltipText = typeof this.tooltipText === 'string' ? this.tooltipText.trim() : '';
    const hasTooltipText = Boolean(tooltipText);
    const buttonTemplate = html`
      <button
        type="button"
        slot="target"
        aria-label=${this.ariaLabel}
        ?disabled=${this.disabled}
        @click=${this.handleClick}
        tabindex='0'
        part="${TOGGLE_BUTTON_PARTS.TOGGLE_SINGLE_BUTTON} ${this.getSizepart()} ${this.getPaddingPart()}"
        data-testid="enchanted-toggle-single-button"
      >
        <span part=${TOGGLE_BUTTON_PARTS.TOGGLE_BUTTON_FOCUS_RING}></span>
        <slot name="${TOGGLE_BUTTON_SLOTS.ICON}"
        part="${TOGGLE_BUTTON_PARTS.TOGGLE_BUTTON_ICON}"></slot>
      </button>
    `;

    if (!hasTooltipText) {
      return html`
        <div data-testid="enchanted-toggle-button-div" part=${TOGGLE_BUTTON_PARTS.TOGGLE_BUTTON_DIV}>
          ${this.renderBadge()}
          ${buttonTemplate}
        </div>
      `;
    }

    return html`
      <div data-testid="enchanted-toggle-button-div" part=${TOGGLE_BUTTON_PARTS.TOGGLE_BUTTON_DIV}>
        ${this.renderBadge()}
        <${ENCHANTED_TOOLTIP_TAG} tooltiptext=${tooltipText} placement="${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" exportparts=${TOOLTIP_EXPORT_PARTS}>
          ${buttonTemplate}
        </${ENCHANTED_TOOLTIP_TAG}>
      </div>
        `;
  }
}

/* istanbul ignore else -- module registration is single-pass in test/runtime */
if (!customElements.get(ENCHANTED_TOGGLE_BUTTON_TAG_NAME)) {
  customElements.define(ENCHANTED_TOGGLE_BUTTON_TAG_NAME, EnchantedToggleButton);
} else {
  /* istanbul ignore next -- else path not reachable in module-based tests */
  debug('Component (%s) is currently registered and not possible to registrate again.', ENCHANTED_TOGGLE_BUTTON_TAG_NAME);
}
