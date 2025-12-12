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
import { customElement, property } from 'lit/decorators.js';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/close';

//helper import
import { EnchantedAcBaseElement } from "./enchanted-ac-base-element";
import { LOCALE_DIRECTIONS } from '../constants.js';
import { getCurrentDirection } from '../localization.js';
import  { EnchantedPopoverArrowPosition } from '../../types/enchanted-popover.js';
import { POPOVER_PARTS } from "../../types/cssClassEnums";


@customElement('enchanted-popover')
export class EnchantedPopover extends EnchantedAcBaseElement {
  
  @property({ type: Boolean, reflect: true }) open = false;

  @property({ type: String }) label = "Label";

  @property({ type: String }) text = "Text";

  @property({ type: Boolean }) showLabel = false;

  @property({ type: Boolean }) showText = false;

  @property({ type: Boolean }) showCloseIcon = false;

  @property({ type: Boolean, reflect: true }) inverse = false;

  @property({ type: String, reflect: true }) arrow?: EnchantedPopoverArrowPosition;

  @property({ type: Boolean }) withpadding = false;

  @property({ type: Boolean }) disableHover = false;

  // Used getter to make sure if the direction changes should update
  private get isLTR(): boolean {
    return getCurrentDirection() === LOCALE_DIRECTIONS.LTR;
  }
  
  private _showPopover = () => { 
    if (this.disableHover) return; // <-- Block hover
    this.open = true;
  };

  private _hidePopover = () => {
    if (this.disableHover) return;
    this.open = false;
  };

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
    <div part="${POPOVER_PARTS.POPOVER_WRAPPER}" ?inverse=${this.inverse} aria-label=${this.label}>
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
    'enchanted-popover': EnchantedPopover;
  }
}
