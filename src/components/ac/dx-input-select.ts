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
import { debounce } from 'lodash';
import { v4 as uuid } from 'uuid';
import { localized } from '@lit/localize';

// Component imports
import { DxAcBaseElement } from './dx-ac-base-element';
import './dx-list';
import './dx-list-item';
import './dx-button';

// Helper imports
import { BUTTON_PARTS, INPUT_SELECT_PARTS, LIST_ITEM_PARTS, LIST_PARTS } from '../../types/cssClassEnums';
import { DxInputFieldType, OptionData } from '../../types/dx-input-select';

// Icon imports
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/caret--down';
import { KeyboardInputKeys } from '../../utils/keyboardEventKeys';

/**
 * Select component.
 */
@customElement('dx-input-select')
@localized()
export class DxInputSelect extends DxAcBaseElement {

  @state()
  private toggleDropDown = false;
  
  @state()
  private listItems: HTMLElement[] | undefined;

  @state()
  private currentFocusedItem: HTMLElement | undefined = undefined;
  
  @property({ type: String })
  label = '';

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property()
  selectedValue: string | undefined;

  @property()
  placeholder: string | undefined;

  @property({ type: Boolean })
  alwaysShowPlaceholder = false;

  @property()
  selectedId: string | undefined;

  @property()
  options: string | string[] | OptionData[] = [];

  @property()
  field: DxInputFieldType | string = '';

  @property({ type: Boolean })
  hiddenLabel = false;

  @property({ type: Boolean })
  hiddenIcon = false;

  @property({ type: Boolean })
  showRemoveLabel = false;
  
  @property({ type: String })
  ariaLabel = '';
  
  connectedCallback(): void {
    super.connectedCallback();
    this.parseOptions();
    this.addEventListener('keydown', this.handleDropdownNav);
  }

  private parseOptions(): string[] | OptionData[] {
    let parsedOptions = [];
    if (typeof this.options === 'string') {
      try {
        const transformedOptions = JSON.parse(this.options);
        if (Array.isArray(transformedOptions)) {
          parsedOptions = transformedOptions;
        } else {
          parsedOptions = [];
        }
      } catch {
        parsedOptions = [];
      }
    } else {
      parsedOptions = this.options;
    }

    if (this.selectedValue && parsedOptions.length > 0) {
      const { selectedValue } = this;
      const selectedIdArr = parsedOptions.reduce((acc, option: string | OptionData) => {
        if (typeof option === 'string' && option === selectedValue) {
          acc.push(option);
        } else if (typeof option === 'object' && [option.value, option.name].includes(selectedValue)) {
          acc.push(option.id);
        } else {
          // do nothing
        }
        return acc;
      }, []);

      this.selectedId = selectedIdArr.length > 0 ? selectedIdArr[0] : undefined;
    }

    return parsedOptions;
  }

  private handleListItemClick(event: Event) {
    event.stopPropagation();
    const clickedItem = event.currentTarget as HTMLElement;
    const value = clickedItem?.textContent?.trim();
    const id = clickedItem.getAttribute('id');
    this.selectedValue = value;
    this.selectedId = id || value;
    this.currentFocusedItem = clickedItem;

    this.dispatchEvent(new CustomEvent('change', {
      detail: {
        // For OptionData type of options, id is used as value
        value: this.selectedId,
        type: this.field,
        // For string type of options, id can be random uuid and we pass along the displayed option name as the real value
        name: this.selectedValue,
      }
    }));
    this.toggleDropDown = !this.toggleDropDown;
  }
  
  private getSelectedOption(option: string | OptionData) {
    return html`
      <dx-list-item
        @pointerdown=${this.handleListItemClick}
        exportparts="${Object.values(LIST_ITEM_PARTS).join(',')}" 
        tabindex=0
        data-testid="dx-input-select-listitem"
        .isSelected=${typeof option === 'string' ? this.selectedValue === option : this.selectedId === (option as OptionData)?.id}
        key="${uuid()}"
        role="option"
        aria-selected="${(typeof option === 'string' ? this.selectedValue === option : this.selectedId === (option as OptionData)?.id) ? 'true' : 'false'}"
        id="${typeof option === 'string' ? uuid() : (option as OptionData).id || option}">
        ${typeof option === 'string' ? option : (option as OptionData).name || option}
      </dx-list-item>
    `;
  }

  private async handleButtonClick(event:Event) {
    event.stopPropagation();
    this.toggleDropDown = !this.toggleDropDown;
    if (await this.updateComplete && this.toggleDropDown) {
      this.listItems = Array.from(this.renderRoot.querySelectorAll('dx-list-item'));
    }
  }

  private handleFocusOut(event: FocusEvent) {
    if (!this.contains(event.relatedTarget as Node)) {
      this.toggleDropDown = false;
    }
  }

  /**
   * Handles the click event on the remove label.
   * Dispatches a 'remove' event with the field information.
   * @param {Event} event - The click event.
   */
  private handleRemoveLabelClick(event: Event) {
    event.stopPropagation();
    this.dispatchEvent(new CustomEvent('remove', {
      bubbles: true, // Allow the event to bubble up
      detail: {
        type: this.field
      }
    }));
  }

  private handleRemoveLabelClickByEnterKey(event: KeyboardEvent) {
    if (event.key === KeyboardInputKeys.ENTER || event.key === KeyboardInputKeys.SPACE) {
      event.stopPropagation();
      this.handleRemoveLabelClick(event as unknown as MouseEvent);
    }
  }

  private async handleDropdownNav(event: KeyboardEvent) {
    if (!this.toggleDropDown || !this.listItems) return;
    if (this.currentFocusedItem) this.currentFocusedItem.focus();
  
    switch (event.key) {
      case 'ArrowDown':{
        event.preventDefault(); 
        if (this.currentFocusedItem) this.currentFocusedItem.focus();
        const currentIndex = this.currentFocusedItem ? Array.from(this.listItems).indexOf(this.currentFocusedItem) : -1;
        if (currentIndex < this.listItems.length - 1) {
          this.currentFocusedItem =  Array.from(this.listItems)[currentIndex + 1];
          this.currentFocusedItem.focus();
          this.toggleDropDown = true;
        }
        break;
      }
      case 'ArrowUp': {
        event.preventDefault(); 
        if (this.currentFocusedItem) this.currentFocusedItem.focus();
        const currentIndex = this.currentFocusedItem ? Array.from(this.listItems).indexOf(this.currentFocusedItem) : -1;
        if (currentIndex > 0) {
          this.currentFocusedItem =  Array.from(this.listItems)[currentIndex - 1];
          this.currentFocusedItem.focus();
          this.toggleDropDown = true;
        }
        break;
      }
      case 'Enter':
        event.preventDefault(); 
        if (await this.updateComplete) {
          this.listItems = Array.from(this.renderRoot.querySelectorAll('dx-list-item'));
        }
        if (this.currentFocusedItem) {
          this.currentFocusedItem.click();
          const value = this.currentFocusedItem && this.currentFocusedItem.textContent?.trim();
          const id = this.currentFocusedItem.getAttribute('id');
          this.selectedValue = value;
          this.selectedId = id || value;
          const stateChange = new CustomEvent('change', { 
            detail: {
              // For OptionData type of options, id is used as value
              value: this.selectedId,
              type: this.field,
              // For string type of options, id can be random uuid and we pass along the displayed option name as the real value
              name: this.selectedValue,
            }
          });
          this.dispatchEvent(stateChange);
          this.toggleDropDown = false;
          this.selectedValue = value;
        }
        break;

      default:
        break;
    }
  }

  render() {
    const options = this.parseOptions();
    let label = this.label;

    if (!label) {
      switch (this.field) {
        case DxInputFieldType.DOCUMENT_OBJECT_TYPE:
          label = this.getMessage('input.select.placeholder.select.attribute');
          break;
        case DxInputFieldType.ADD_SEARCH_FILTER:
          label = this.getMessage('input.select.placeholder.select.filter');
          break;
        case DxInputFieldType.ADD_STATUS_FILTER:
          label = this.getMessage('input.select.placeholder.select.status');
          break;
        case DxInputFieldType.CONTENT_SOURCE:
          label = this.getMessage('input.select.placeholder.select.content.source');
          break;
        case DxInputFieldType.PAGINATION_ROWS:
          label = this.getMessage('output.table.footer.show.rows');
          break;
        case DxInputFieldType.PAGINATION_PAGE:
          label = this.getMessage('output.table.footer.page');
          break;
        default:
          label = this.label;
      }
    }
  
    // Determine button text based on flag
    const buttonText = this.alwaysShowPlaceholder
      ? this.placeholder || ''
      : this.selectedValue || this.placeholder || '';

    return html`
      <div part=${INPUT_SELECT_PARTS.DIV} @focusout=${this.handleFocusOut} tabindex=-1>
        <div part=${INPUT_SELECT_PARTS.DIV_LABEL}>
          ${!this.hiddenLabel ? html`
            <label data-testid="dx-input-select-label" 
              part=${
                (this.disabled) ? 
                `${INPUT_SELECT_PARTS.LABEL} ${INPUT_SELECT_PARTS.LABEL_DISABLED}` :
                INPUT_SELECT_PARTS.LABEL
              } 
              tabindex="-1"
              id="label-${this.field}"
            >
              ${label}
            </label>
          ` : nothing}
          ${this.showRemoveLabel ? html`
            <label data-testid="dx-input-select-remove-label"
              part=${(this.disabled) ? `${INPUT_SELECT_PARTS.REMOVE_LABEL} ${INPUT_SELECT_PARTS.REMOVE_LABEL_DISABLED}` : INPUT_SELECT_PARTS.REMOVE_LABEL}
              tabindex=${(this.disabled) ? "-1" : "0"}
              @click=${(this.disabled) ? nothing : this.handleRemoveLabelClick}
              @keydown=${(this.disabled) ? nothing : this.handleRemoveLabelClickByEnterKey}
            >
              ${this.getMessage('advanced.search.remove')}
            </label>
          ` : nothing}
        </div>
        <dx-button 
          buttontext=${buttonText}
          @click=${debounce(this.handleButtonClick, 300)}
          exportparts="${Object.values(BUTTON_PARTS).join(',')}"
          data-testid="dx-input-select-button"
          variant="button"
          .icon="${!this.hiddenIcon ? html`<icon-caret-down size="16" color="rgba(0, 0, 0, 0.60)"></icon-caret-down>` : nothing}"
          ?endicon="${true}"
          ?disabled=${this.disabled}
          id="button-${this.field}"
          ariaHaspopup="listbox"
          ariaExpanded="${this.toggleDropDown ? 'true' : 'false'}"
          ariaLabel="${this.ariaLabel}"
        >
        </dx-button>
        ${!this.disabled && this.toggleDropDown ? html `
          <dx-list exportparts=${LIST_PARTS.UNORDERED_LIST} tabindex=0 data-testid="dx-input-select-list" id="list-${this.field}" role="listbox">
            ${options.map((option: string | OptionData) => {return this.getSelectedOption(option);})}
          </dx-list>
        ` : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dx-input-select': DxInputSelect
  }
}
