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
import { customElement, property, state } from 'lit/decorators.js';
import { localized } from '@lit/localize';
import { debounce } from 'lodash';
import { v4 as uuid } from 'uuid';

// Component imports
import { DxAcBaseElement } from './dx-ac-base-element';
import './dx-list';

// Helper imports
import { BUTTON_PARTS, LIST_PARTS, MENU_PARTS } from '../../types/cssClassEnums';
import { isLTR } from '../localization';
import { DxMenuPlacement, DxMenuSize } from '../../types/dx-menu';

@customElement('dx-menu')
@localized()
export class DxMenu extends DxAcBaseElement {
  @property({ type: Number })
  menuDelay = 300;

  @property({ type: String, reflect: true })
  placement: DxMenuPlacement = DxMenuPlacement.BOTTOM_START;

  @property({ type: String, reflect: true })
  size: DxMenuSize = DxMenuSize.MEDIUM;

  @state() componentId = uuid();
  @state() openMenu = false;

  private scrollParent: HTMLElement | null = null;

  private OnViewportChange = debounce(() => {
    if (this.openMenu) {
      this.anchorMenuToTarget();
    }
  }, 100);

  connectedCallback(): void {
    super.connectedCallback();
    // binding event in this function because we need to access slot elements
    // https://lit.dev/docs/components/events/#adding-event-listeners-to-the-component-or-its-shadow-root
    this.addEventListener('click',
      (e: Event) => { this.handleMenuItemClick(e); } );
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.scrollParent) {
      this.scrollParent.style.overflow = '';
    }
    // Clean listeners
    window.removeEventListener('resize', this.OnViewportChange);
  }

  private getScrollableParent(element: HTMLElement | null): HTMLElement | null {
    if (!element) return null;
    let el: HTMLElement | null = element;
    while (el && el !== document.body) {
      const style = window.getComputedStyle(el);
      const overflowY = style.overflowY;

      if (overflowY === 'auto' || overflowY === 'scroll') {
        return el;
      }
      el = el.parentElement;
    }
    return document.body;
    
  }
  anchorMenuToTarget() {
    const target: HTMLElement | null = this.renderRoot.querySelector(`#target${this.componentId}`);
    const menu: HTMLElement | null = this.renderRoot.querySelector(`#menu${this.componentId}`);

    if (menu && target) {
      const targetPosition = target.getBoundingClientRect();
      const targetLeft = targetPosition.left;
      const targetRight = targetPosition.right;
      const targetTop = targetPosition.top + targetPosition.height;
      const menuWidth = menu.offsetWidth;
      menu.style.position = 'absolute';
      menu.style.top = `${targetTop}px`;
      menu.style.visibility = 'visible';

      switch (this.placement) {
        case DxMenuPlacement.BOTTOM_START:
          menu.style.left = `${isLTR() ? targetLeft : targetRight - menuWidth}px`;
          break;
        case DxMenuPlacement.BOTTOM_END:
          menu.style.left = `${targetRight - menuWidth}px`;
          break;
        default:
          menu.style.left = `${isLTR() ? targetLeft : targetRight - menuWidth}px`;   
      }  
    }
  }

  toggleMenuOpen(evt: MouseEvent | KeyboardEvent) {
    evt.stopPropagation();
    evt.preventDefault();
    this.openMenu = !this.openMenu;
    if (this.openMenu) {
      this.scrollParent = this.getScrollableParent(this);
      if (this.scrollParent) {
        this.scrollParent.style.overflow = 'hidden';
      }
      // Listen for window resize to keep dropdown aligned
      window.addEventListener('resize', this.OnViewportChange);
    } else {
      if (this.scrollParent) {
        this.scrollParent.style.overflow = '';
      }
      window.removeEventListener('resize', this.OnViewportChange);
    }

    // timeout is necessary to wait for the menu to be rendered
    setTimeout(() => {
      this.anchorMenuToTarget();
    }, 300);
  }

  handleMenuItemClick(event: Event) {
    const evt = event as unknown as CustomEvent;
    event.preventDefault();
    event.stopPropagation();
    const target = event.target as HTMLElement;
    const menuItem = target.closest('dx-menu-item');
    if (evt.detail && menuItem) {
      this.dispatchEvent(new CustomEvent('change', {
        bubbles: true, composed: true, detail: { 
          text: evt.detail.text,
          value: evt.detail.value,
          menuObject: evt.detail.menuObject
        }
      }));
      this.toggleMenuOpen(event as unknown as MouseEvent);  
    } else if (menuItem) {
      const text = menuItem.getAttribute('text');
      const value = menuItem.getAttribute('value');
      const menuObject = menuItem.getAttribute('menuObject');
      this.dispatchEvent(new CustomEvent('change', {
        bubbles: true, composed: true, detail: { text, value, menuObject }
      }));
      this.toggleMenuOpen(event as unknown as MouseEvent);  
    }
  }

  renderMenu() {    
    if (this.openMenu) {
      return html`
        <div
          role="presentation"
          part=${MENU_PARTS.MENU_ROOT}
          aria-expanded="${this.openMenu}"
        >
          <div data-testid="menu-backdrop" aria-hidden="true" part=${MENU_PARTS.BACKDROP} @click=${debounce(this.toggleMenuOpen, 300)}></div>
          <div part=${MENU_PARTS.PAPER_ROOT} id="menu${this.componentId}" style="visibility: hidden;">
            <dx-list
              role="menu"
              exportparts="${Object.values(LIST_PARTS).join(',')}"
              @menuItemClick=${this.handleMenuItemClick}
            >
              <slot name="menu-items"></slot>
            </dx-list>
          </div>
        </div>
      `;
    }

    return nothing;
  }

  render() {
    return html`
      <div
        id="target${this.componentId}"
        @click=${debounce(this.toggleMenuOpen, this.menuDelay)}
        exportparts="${Object.values(BUTTON_PARTS).join(',')}"

      >
        <slot name="target-anchor">
        </slot>
      </div>
      ${this.renderMenu()}
    `;
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'dx-menu': DxMenu
  }
}
