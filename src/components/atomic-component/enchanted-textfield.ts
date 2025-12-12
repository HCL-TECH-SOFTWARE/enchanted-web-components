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
import { html, nothing, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { localized } from '@lit/localize';
import { debounce } from 'lodash';
import createDebug from 'debug';

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';

// Helper imports
import { getCurrentDirection } from '../localization';
import { LOCALE_DIRECTIONS } from '../constants';
import { EnchantedInputFieldType } from '../../types/enchanted-select';
import { INPUT_TEXTFIELD_PARTS } from '../../types/cssClassEnums';
import { AutoCompleteTextfieldEnum } from '../../types/enchanted-textfield';
import { KeyboardInputKeys } from '../../utils/keyboardEventKeys';

const debug = createDebug('enchanted-web-components:components:ac:enchanted-textfield.ts');

/**
 * Textfield component.
 */
@customElement('enchanted-textfield')
@localized()
export class EnchantedInputTextfield extends EnchantedAcBaseElement {
  static override shadowRootOptions = {
    ...EnchantedAcBaseElement.shadowRootOptions,
    delegatesFocus: true
  };
  
  @property({ type: String })
  value = '';

  @property({ type: String })
  type = 'text';

  @property({ type: String })
  label: string | undefined;

  @property({ type: String })
  placeholder = '';

  @property({ type: Boolean })
  disabled = false;

  @property()
  clearIcon?: TemplateResult;

  @property()
  actionIcon?: TemplateResult;

  @property()
  field: EnchantedInputFieldType | string = '';

  @property({ type: Boolean })
  hassearchedbefore = false;

  @property({ type: String })
  autocomplete: AutoCompleteTextfieldEnum = AutoCompleteTextfieldEnum.ON;

  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  @state()
  private tempValueHolder: string = '';

  @state()
  private isRTL = getCurrentDirection() === LOCALE_DIRECTIONS.RTL;

  private get hasClear(): boolean {
    return !!this.clearIcon;
  }

  private get hasAction(): boolean {
    return !!this.actionIcon;
  }
  
  connectedCallback(): void {
    super.connectedCallback();
  }

  private handleInput(event: KeyboardEvent) {
    event.stopPropagation();
    debug('Input event in %s: %s', this.tagName, (event.target as HTMLInputElement).value);
    // this condition used to copy the current working search value to tempValueHolder
    // used to save value when user starts to edit queryString but later leaves it empty (handleBlur event)
    if (this.value !== this.tempValueHolder && this.tempValueHolder === '' && this.hassearchedbefore) {
      // string interpolation used to prevent flicker on the input
      this.tempValueHolder = `${this.value}`;
    }

    this.value = (event.target as HTMLInputElement).value;

    const stateChange = new CustomEvent('change', { 
      detail: {
        value: this.value,
        type: this.field,
        triggerSearch: false,
      }
    });
    this.dispatchEvent(stateChange);
  }

  private handleEnter(event: KeyboardEvent) {
    event.stopPropagation();
    debug('Enter event in %s: %s', this.tagName, this.value);
    if (event.key === KeyboardInputKeys.ENTER) {
      const stateChange = new CustomEvent('change', { 
        detail: {
          value: this.value,
          type: this.field,
          triggerSearch: true,
        }
      });
      this.dispatchEvent(stateChange);
      this.tempValueHolder = this.value;
      this.hassearchedbefore = true;
    }
  }

  private handleClear(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    debug('Clear event in %s: %s', this.tagName, this.value);
    // this condition used to copy the current search value to tempValueHolder
    if (this.value !== this.tempValueHolder && this.tempValueHolder === '' && this.hassearchedbefore) {
      // string interpolation used to prevent flicker on the input
      this.tempValueHolder = `${this.value}`;
    }
    this.value = '';
    const input = this.renderRoot.querySelector(`#${`input-${this.field}`}`) as HTMLInputElement;
    if (input) {
      input.focus();
    }
    const stateChange = new CustomEvent('change', { 
      detail: {
        type: EnchantedInputFieldType.CLEAR_QUERY,
      }
    });
    this.dispatchEvent(stateChange);
  }

  private handleClearEnter(event: KeyboardEvent) {
    event.stopPropagation();
    debug('Clear Enter event in %s: %s', this.tagName, this.value);
    if (event.key === KeyboardInputKeys.ENTER || event.key === KeyboardInputKeys.SPACE) {
      this.handleClear(event as unknown as MouseEvent);
    }
  }

  private handleBlur(event: FocusEvent) {
    event.stopPropagation();
    event.preventDefault();
    debug('Blur event in %s: %s', this.tagName, this.value);
    // if the input is empty or the clear icon is clicked, but user blurred away, then the value will be set back to tempValueHolder
    if (this.value === '') {
      this.value = this.tempValueHolder;
      const stateChange = new CustomEvent('change', {
        detail: {
          value: this.tempValueHolder,
          type: this.field,
        }
      });
      this.dispatchEvent(stateChange);
      this.tempValueHolder = '';
    }
  }

  private handleEnterSearch(event: KeyboardEvent) {
    event.stopPropagation();
    debug('Search by Enter Key event in %s: %s', this.tagName, this.value);
    if (event.key === KeyboardInputKeys.ENTER) {
      event.stopPropagation();
      this.handleSearch(event as unknown as MouseEvent);
    }
  }

  private handleSearch(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    debug('Search by Mouse Click event in %s: %s', this.tagName, this.value);
    const stateChange = new CustomEvent('change', {
      detail: {
        value: this.value,
        type: this.field,
        triggerSearch: true,
      }
    });
    this.dispatchEvent(stateChange);
    this.tempValueHolder = this.value;
    this.hassearchedbefore = true;
  }

  private handleFocus(event: FocusEvent) {
    event.stopPropagation();
    event.preventDefault();
    debug('Focus event in %s: %s', this.tagName, this.value);
    // this condition used to copy the current search value to tempValueHolder
    if (this.value !== this.tempValueHolder && this.tempValueHolder === '' && this.hassearchedbefore) {
      // string interpolation used to prevent flicker on the input
      this.tempValueHolder = `${this.value}`;
    }
  }

  private getInputParts(type: string) {
    let part = '';
    switch (type) {
      case INPUT_TEXTFIELD_PARTS.INPUT: {
        part = INPUT_TEXTFIELD_PARTS.INPUT;
        if (this.disabled) part = `${INPUT_TEXTFIELD_PARTS.INPUT} ${INPUT_TEXTFIELD_PARTS.INPUT_DISABLED}`;
        if (this.hasClear || this.hasAction) part = `${part} ${this.isRTL
          ? INPUT_TEXTFIELD_PARTS.INPUT_ICON_CLEAR_RTL
          : INPUT_TEXTFIELD_PARTS.INPUT_ICON_CLEAR}`;
        if (this.hasClear && this.hasAction) part = `${part} ${this.isRTL
          ? INPUT_TEXTFIELD_PARTS.INPUT_ICON_BOTH_RTL
          : INPUT_TEXTFIELD_PARTS.INPUT_ICON_BOTH}`;
      }
        break;
      case INPUT_TEXTFIELD_PARTS.ICON_CLEAR:
        part = `${this.isRTL ? INPUT_TEXTFIELD_PARTS.ICON_CLEAR_RTL : INPUT_TEXTFIELD_PARTS.ICON_CLEAR}${
          this.label ? ` ${INPUT_TEXTFIELD_PARTS.ICON_CLEAR_WITH_LABEL}` : ''}`;
        break;
      case INPUT_TEXTFIELD_PARTS.ICON_ACTION:
        part = `${this.isRTL ? INPUT_TEXTFIELD_PARTS.ICON_ACTION_RTL : INPUT_TEXTFIELD_PARTS.ICON_ACTION}${
          this.label ? ` ${INPUT_TEXTFIELD_PARTS.ICON_ACTION_WITH_LABEL}` : ''}`;

        if (this.disabled) part = `${part} ${INPUT_TEXTFIELD_PARTS.ICON_ACTION_DISABLED}`;
        break;
      case INPUT_TEXTFIELD_PARTS.LABEL:
        part = this.disabled ? `${INPUT_TEXTFIELD_PARTS.LABEL} ${INPUT_TEXTFIELD_PARTS.LABEL_DISABLED}` : INPUT_TEXTFIELD_PARTS.LABEL;
        break;
      default:
        break;
    }    
    return part;
  }

  setTempValueHolder(value: string) {
    this.tempValueHolder = value;
  }

  render() {
    debug('Rendering %s: value - %s, disabled - %s, has searched before - %s', this.tagName, this.value, this.disabled, this.hassearchedbefore);
    return html`
      <div part="div">
        ${this.label
          ? html`<label data-testid="enchanted-textfield-label" for=${`input-${this.field}`} part="${this.getInputParts(INPUT_TEXTFIELD_PARTS.LABEL)}">${this.label}</label>`
          : nothing }
        <input
          tabIndex=1
          data-testid="enchanted-textfield-input"
          type="${this.type}"
          part="${this.getInputParts(INPUT_TEXTFIELD_PARTS.INPUT)}"
          part-attributes="selected"
          placeholder="${this.placeholder || this.getMessage('input.textfield.placeholder.type.to.search')}"
          @input=${this.handleInput}
          @keydown=${debounce(this.handleEnter, 500)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          id=${`input-${this.field}`}
          .value=${this.value}
          ?disabled=${this.disabled}
          autocomplete=${this.autocomplete}
          aria-label=${this.ariaLabel || this.placeholder || this.getMessage('input.textfield.placeholder.type.to.search')}
        />
        <!-- This icon will take color from the parent component as useCurrentColor set to true -->
        ${this.hasClear
          ? html`
          <div
            tabIndex=2
            @click=${this.handleClear}
            @keydown=${this.handleClearEnter}
            data-testid="enchanted-clear-icon"
            aria-label=${this.getMessage('input.textfield.clear')}
            part="${this.getInputParts(INPUT_TEXTFIELD_PARTS.ICON_CLEAR)}"
            role="button"
          >
            ${this.clearIcon }
          </div>`
          : nothing}
        ${this.hasAction
          ? html`
          <div
            @click=${this.handleSearch}
            @keydown=${this.handleEnterSearch}
            data-testid="enchanted-action-icon"
            aria-label=${this.getMessage('input.textfield.action')}
            part="${this.getInputParts(INPUT_TEXTFIELD_PARTS.ICON_ACTION)}"
            role="button"
            tabindex=${this.disabled ? -1 : 3}
          >
            ${this.actionIcon}
          </div>`
          : nothing}
      </div>
    `;    
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'enchanted-textfield': EnchantedInputTextfield
  }
} 