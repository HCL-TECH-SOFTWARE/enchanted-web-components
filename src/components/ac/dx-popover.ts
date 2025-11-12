/*
 ********************************************************************
 * Licensed Materials - Property of HCL                             *
 *                                                                  *
 * Copyright HCL Technologies Ltd. 2025. All Rights Reserved.       *
 *                                                                  *
 * Note to US Government Users Restricted Rights:                   *
 *                                                                  *
 * Use, duplication or disclosure restricted by GSA ADP Schedule    *
 ********************************************************************
 */

// External imports
import { html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/close';

//helper import
import { DxAcBaseElement } from "./dx-ac-base-element";
import { LOCALE_DIRECTIONS } from '../constants.js';
import { getCurrentDirection } from '../localization.js';
import  { DxPopoverArrowPosition } from '../../types/dx-popover.js';
import { POPOVER_PARTS } from "../../types/cssClassEnums";


@customElement('dx-popover')
export class DxPopover extends DxAcBaseElement {
  
  @property({ type: Boolean, reflect: true }) open = false;

  @property({ type: String }) label = "Label";

  @property({ type: String }) text = "Text";

  @property({ type: Boolean }) showLabel = false;

  @property({ type: Boolean }) showText = false;

  @property({ type: Boolean }) showCloseIcon = false;

  @property({ type: String }) theme: 'light' | 'dark' = 'light';

  @property({ type: String, reflect: true }) arrow?: DxPopoverArrowPosition;

  @property({ type: Boolean }) withpadding = false;

  @state()
  private isLTR: boolean = getCurrentDirection() === LOCALE_DIRECTIONS.LTR;
  
  private _showPopover = () => { this.open = true; };

  private _hidePopover = () => { this.open = false; };

  private _onCloseClick = (e: Event) => {
    e.stopPropagation();
    this.open = false;
  };

  render() {
    return html`
    <div id="target" part="${POPOVER_PARTS.POPOVER_TARGET}" aria-label=${this.label}>
      <slot
        name="target"
        @pointerenter=${this._showPopover}
        @pointerleave=${this._hidePopover}
      ></slot>
    </div>
    <div part="${POPOVER_PARTS.POPOVER_WRAPPER}" theme=${this.theme} aria-label=${this.label}>
      ${this.arrow ? html`
      <div part="${POPOVER_PARTS.POPOVER_ARROW}"></div>`: nothing}
        <div part=${this.isLTR ? POPOVER_PARTS.POPOVER_CONTAINER : POPOVER_PARTS.POPOVER_CONTAINER_RTL}>
          <div part="${POPOVER_PARTS.POPOVER_CONTENT}">
            ${this.showLabel ? html`<div part="${POPOVER_PARTS.POPOVER_LABEL}"><slot name="label">${this.label}</slot></div>` : nothing}
            ${this.showText ? html`<div part="${POPOVER_PARTS.POPOVER_TEXT}"><slot name="text">${this.text}</slot></div>` : nothing}
            
          </div>
          ${this.showCloseIcon ? html`<button part=${this.isLTR ? POPOVER_PARTS.POPOVER_CLOSE_ICON : POPOVER_PARTS.POPOVER_CLOSE_ICON_RTL} 
            @click="${this._onCloseClick}" aria-label="Close popover">
            <icon-close size="16" color="currentColor"></icon-close>
          </button>` : nothing}
        </div>
      </div>
    </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dx-popover': DxPopover;
  }
}
