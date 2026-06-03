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
import { nothing } from 'lit';
import { html } from 'lit/static-html.js';
import { property, state } from 'lit/decorators.js';
import { debounce } from 'lodash';
import { v4 as uuid } from 'uuid';
import { localized } from '@lit/localize';
import createDebug from 'debug';

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';
import './enchanted-chip';
import './enchanted-button';

// Helper imports
import { EnchantedMultiSelectInputFieldType, OptionData } from '../../types/enchanted-multiple-select-chip';
import { BUTTON_PARTS, CHIP_PARTS, INPUT_MULTI_SELECT_PARTS, LIST_ITEM_PARTS, LIST_PARTS } from '../../types/cssClassEnums';
import { ICON_BUTTON_EXPORT_PARTS } from '../exportParts';
import { KeyboardInputKeys } from '../../utils/keyboardEventKeys';

// Icon imports
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/caret--down';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/caret--up';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/close';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/close--filled';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/checkmark';
import {
  generateIconTagName,
  ENCHANTED_BUTTON_TAG, ENCHANTED_CHIP_TAG, ENCHANTED_ICON_BUTTON_TAG, ENCHANTED_LIST_ITEM_TAG,
  ENCHANTED_LIST_ITEM_TAG_NAME, ENCHANTED_LIST_TAG, ENCHANTED_MULTIPLE_SELECT_CHIP_TAG_NAME
} from '../tags';

const debug = createDebug('enchanted-web-components:components:atomic-component:enchanted-multiple-select-chip.ts');

@localized()
export class EnchantedMultipleSelectChip extends EnchantedAcBaseElement {
  @state()
  private toggleDropDown = false;

  @state()
  private listItems: HTMLElement[] | undefined;

  @state()
  private currentFocusedItem: HTMLElement | undefined = undefined;

  @state()
  private inputValue = '';

  @state()
  private onInputHover: boolean = false;

  @state()
  private isInputFocused = false;

  @state()
  private isClearAllIconFocused = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean }) showHelperText = false;

  @property({ type: String })
  helperText = '';

  @property({ type: String }) name = 'multiple-select';

  @property({ type: Array })
  selectedValues: OptionData[] = [];

  @property({ type: Array })
  options: OptionData[] = [];

  @property({ type: String })
  field: EnchantedMultiSelectInputFieldType | string = '';

  @property({ type: Boolean })
  showRemoveLabel = false;

  @property({ type: Boolean })
  emptyOptions = false;

  @property({ type: Boolean })
  clearIcon = true;

  @property({ type: String })
  customWidth: string | undefined;

  @property({ type: String })
  placeholder = this.getMessage('authoring.multi.select.placeholder');

  @property({ type: String })
  label = this.getMessage('authoring.multi.select.label');

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('keydown', this.handleDropdownNav);
    document.addEventListener('click', this.handleOutsideClick);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this.handleDropdownNav);
    document.removeEventListener('click', this.handleOutsideClick);
  }

  private handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as Node;
    if (!this.contains(target) && this.toggleDropDown) {
      this.toggleDropDown = false;
      this.inputValue = '';
      this.requestUpdate();
    }
  };

  private handleListItemClick(event: Event) {
    event.stopPropagation();
    const clickedItem = event.currentTarget as HTMLElement;
    const value = clickedItem.textContent?.trim();
    const id = clickedItem.getAttribute('id') || value;

    if (!id || !value) return;

    const foundSelected = this.selectedValues.find((v) => { return v.id === id; });

    if (!foundSelected) {
      const foundOption = this.options.find((v) => {return v.id === id;});
      if (foundOption) this.selectedValues = [...this.selectedValues, { id: foundOption.id, name: foundOption.name, value: foundOption.value }];
    } else {
      this.selectedValues = this.selectedValues.filter((v) => {
        return v.id !== id;
      });
    }

    this.inputValue = '';
    this.toggleDropDown = true;

    const inputField = this.renderRoot.querySelector(`#${INPUT_MULTI_SELECT_PARTS.INPUT_FIELD}`) as HTMLInputElement;
    if (inputField) {
      inputField.focus();
    }
    this.currentFocusedItem = clickedItem;
    this.dispatchChangeEvent();
    this.requestUpdate();
  }


  private handleChipRemove(event: Event, id: string) {
    event.stopPropagation();
    this.selectedValues = this.selectedValues.filter((v) => {
      return v.id !== id;
    });
    this.dispatchChangeEvent();
    this.requestUpdate();
    const inputField = this.renderRoot.querySelector(`#${INPUT_MULTI_SELECT_PARTS.INPUT_FIELD}`) as HTMLInputElement;
    if (inputField) {
      inputField.focus();
    }
  }
  private handleClearAll() {
    const wasDropDownOpen = this.toggleDropDown;
    this.selectedValues = [];
    this.inputValue = '';
    this.dispatchChangeEvent();
    this.toggleDropDown = wasDropDownOpen;
    this.requestUpdate();
    const inputField = this.renderRoot.querySelector(`#${INPUT_MULTI_SELECT_PARTS.INPUT_FIELD}`) as HTMLInputElement;
    if (inputField) {
      inputField.focus();
    }
  }

  private handleInput(event: Event) {
    event.stopPropagation();
    const input = event.target as HTMLInputElement;
    this.inputValue = input.value;
    if (!this.toggleDropDown) {
      this.toggleDropDown = true;
    }
    this.dispatchEvent(
      new CustomEvent('input', {
        detail: { value: this.inputValue, type: this.field },
        bubbles: true,
        composed: true,
      })
    );
  }
  getDivInputParts(): string {
    let divInputParts: string = INPUT_MULTI_SELECT_PARTS.INPUT_CONTAINER;
    if (this.disabled) divInputParts = `${divInputParts} ${INPUT_MULTI_SELECT_PARTS.INPUT_CONTAINER_DISABLED}`;
    return divInputParts;
  }

  private handleInputKeyDown(event: KeyboardEvent) {
    event.stopPropagation();
    if (event.key === KeyboardInputKeys.ENTER || event.key === KeyboardInputKeys.SPACE) {
      event.preventDefault();
      if (!this.disabled) {
        if (this.emptyOptions && this.inputValue && event.key === KeyboardInputKeys.ENTER) {
          this.selectedValues = [...this.selectedValues, { id: this.inputValue, name: this.inputValue, value: this.inputValue }];
          this.inputValue = '';
          this.dispatchChangeEvent();
          this.requestUpdate();
        } else {
          this.toggleDropDown = !this.toggleDropDown;
          if (this.toggleDropDown) {
            this.listItems = Array.from(this.renderRoot.querySelectorAll(ENCHANTED_LIST_ITEM_TAG_NAME));
            if (this.listItems.length > 0) {
              this.currentFocusedItem = this.listItems[0];
              this.currentFocusedItem.focus();
            }
          }
          this.requestUpdate();
        }
      }
    } else if ((event.key === KeyboardInputKeys.BACKSPACE || event.key === KeyboardInputKeys.DELETE) && !this.inputValue && this.selectedValues.length > 0) {
      this.selectedValues = this.selectedValues.slice(0, -1);
      this.dispatchChangeEvent();
      this.requestUpdate();
    } else if (event.key === KeyboardInputKeys.ARROW_DOWN && this.toggleDropDown) {
      event.preventDefault();
      this.listItems = Array.from(this.renderRoot.querySelectorAll(ENCHANTED_LIST_ITEM_TAG_NAME));
      if (this.listItems.length > 0) {
        this.currentFocusedItem = this.listItems[0];
        this.currentFocusedItem.focus();
      }
    } else if (event.key === KeyboardInputKeys.ESCAPE && this.toggleDropDown) {
      event.preventDefault();
      this.toggleDropDown = false;
    }
  }

  private dispatchChangeEvent() {
    const selectedDetails: OptionData[] = this.selectedValues.map((value) => {
      return {
        id: value.id,
        name: value.name || value.id,
        value: value.value || value.id,
      };
    });

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: {
          value: selectedDetails,
          type: this.field,
        }
      })
    );
    this.toggleDropDown = false;
  }

  private async handleButtonClick(event: Event) {
    event.stopPropagation();
    if (this.disabled) return;
    this.toggleDropDown = !this.toggleDropDown;
    if (await this.updateComplete && this.toggleDropDown) {
      this.listItems = Array.from(this.renderRoot.querySelectorAll(ENCHANTED_LIST_ITEM_TAG_NAME));
      if (this.listItems.length > 0) {
        this.currentFocusedItem = this.listItems[0];
        this.currentFocusedItem.focus();
      }
    }
  }
  private handleInputContainerClick(event: Event) {
    event.stopPropagation();
    const inputField = this.renderRoot.querySelector(`#${INPUT_MULTI_SELECT_PARTS.INPUT_FIELD}`) as HTMLInputElement;
    if (inputField && !this.disabled && event.target !== this.renderRoot.querySelector(`#${INPUT_MULTI_SELECT_PARTS.CLEAR}`)) {
      inputField.focus();
      this.toggleDropDown = !this.toggleDropDown;
      this.requestUpdate();
    }
  }

  private async handleDropdownNav(event: KeyboardEvent) {
    if (event.key === KeyboardInputKeys.ESCAPE && this.toggleDropDown) {
      event.preventDefault();
      this.toggleDropDown = false;
      this.requestUpdate();
      const inputField = this.renderRoot.querySelector(`#${INPUT_MULTI_SELECT_PARTS.INPUT_FIELD}`) as HTMLInputElement;
      if (inputField) {
        inputField.focus();
      }
      return;
    }

    if (!this.toggleDropDown || !this.listItems) return;
    switch (event.key) {
      case KeyboardInputKeys.ARROW_DOWN: {
        event.preventDefault();
        this.listItems = Array.from(this.renderRoot.querySelectorAll(ENCHANTED_LIST_ITEM_TAG_NAME));
        const currentIndex = this.currentFocusedItem
          ? this.listItems.indexOf(this.currentFocusedItem)
          : -1;
        if (currentIndex < this.listItems.length - 1) {
          this.currentFocusedItem = this.listItems[currentIndex + 1];
          this.currentFocusedItem.focus();
          this.toggleDropDown = true;
        }
        break;
      }
      case KeyboardInputKeys.ARROW_UP: {
        event.preventDefault();
        const currentIndex = this.currentFocusedItem
          ? this.listItems.indexOf(this.currentFocusedItem)
          : -1;
        if (currentIndex > 0) {
          this.currentFocusedItem = this.listItems[currentIndex - 1];
          this.currentFocusedItem.focus();
          this.toggleDropDown = true;
        }
        break;
      }
      case KeyboardInputKeys.ENTER: {
        event.preventDefault();
        if (await this.updateComplete) {
          this.listItems = Array.from(this.renderRoot.querySelectorAll(ENCHANTED_LIST_ITEM_TAG_NAME));
        }
        if (this.currentFocusedItem) {
          this.currentFocusedItem.click();
        }
        break;
      }
      default:
        break;
    }
  }
  handleRemoveLabelClick(event: Event) {
    event.stopPropagation();
    this.dispatchEvent(new CustomEvent('remove', {
      bubbles: true, 
      detail: {
        name: this.name,
        type: this.field,
      }
    }));
  }

  private getOptionName(option: string | OptionData): string {
    return typeof option === 'string' ? option : option.name || option.id;
  }

  private handleOnMouseOver(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    this.onInputHover = true;
    this.requestUpdate();
  }

  private handleOnMouseOut(event: MouseEvent) {
    event.stopPropagation();
    this.onInputHover = false;
    this.requestUpdate();
  }
  private getPartClearAllIcon() {
    if ((this.onInputHover || this.isInputFocused || this.isClearAllIconFocused) && this.selectedValues.length > 0) {
      return INPUT_MULTI_SELECT_PARTS.CLEAR_ALL_ICON;
    }
    return INPUT_MULTI_SELECT_PARTS.CLEAR_ALL_ICON_HIDDEN;
  }

  private getSelectedOption(option: string | OptionData) {
    const id = typeof option === 'string' ? option : option.id || option.name;
    return html`
    <${ENCHANTED_LIST_ITEM_TAG}
      @pointerdown=${this.handleListItemClick}
      @keydown=${(e: KeyboardEvent) => {
        if (e.key === KeyboardInputKeys.ENTER || e.key === KeyboardInputKeys.SPACE) {
          e.preventDefault();
          this.handleListItemClick(e);
        }
      }}
      exportparts="${Object.values(LIST_ITEM_PARTS).join(',')}"
      tabindex="0"
      data-testid="enchanted-multi-select-listitem"
      role="option"
      aria-selected="${this.selectedValues.some((v) => { return v.id === id; })}"
      key="${uuid()}"
      id="${id}"
      class="${this.selectedValues.some((v) => { return v.id === id; }) ? 'selected' : ''}"
    >
      <div part="${INPUT_MULTI_SELECT_PARTS.LIST_ITEM_CONTENT}">
        <div
          class="${this.selectedValues.some((v) => { return v.id === id; })
        ? INPUT_MULTI_SELECT_PARTS.CHECKMARK
        : INPUT_MULTI_SELECT_PARTS.CHECKMARK_PLACEHOLDER}"
          part="${this.selectedValues.some((v) => { return v.id === id; })
        ? INPUT_MULTI_SELECT_PARTS.CHECKMARK
        : INPUT_MULTI_SELECT_PARTS.CHECKMARK_PLACEHOLDER}"
        >
          ${this.selectedValues.some((v) => { return v.id === id; })
        ? html`<${generateIconTagName('icon-checkmark')} size="16" alt="Selected" color="rgba(0, 0, 0, 0.60)"></${generateIconTagName('icon-checkmark')}>`
        : nothing}
        </div>
        <div part="${INPUT_MULTI_SELECT_PARTS.LIST_ITEMS}">
          ${this.getOptionName(option)}
        </div>
      </div>
    </${ENCHANTED_LIST_ITEM_TAG}>
  `;
  }

  private renderChips() {
    return html`
    ${this.selectedValues.map((value) => {
      const { id, name  = '' } = value;
      return html`
        <${ENCHANTED_CHIP_TAG}
          name="${name}"
          ?clearIcon=${this.clearIcon}
          data-testid="enchanted-multiple-select-chip"
          exportparts="${Object.values(CHIP_PARTS).join(',')}"
          title="${name}"
          ?disabled=${this.disabled}
        >
          ${this.clearIcon
          ? html`
                <span
                  slot="${INPUT_MULTI_SELECT_PARTS.CLEAR_ICON}"
                  part="${this.disabled ? `${INPUT_MULTI_SELECT_PARTS.CLEAR_ICON_DISABLED} ${INPUT_MULTI_SELECT_PARTS.CLEAR_ICON}` : INPUT_MULTI_SELECT_PARTS.CLEAR_ICON}"
                  data-testid="clear-icon"
                  tabindex=${this.disabled ? '-1' : '0'}
                  @keydown=${(e: KeyboardEvent) => {
              if (e.key === KeyboardInputKeys.ENTER || e.key === KeyboardInputKeys.SPACE) {
                e.preventDefault();
                this.handleChipRemove(e, id);
              }
            }}
                  @click=${(e: Event) => {
              return this.handleChipRemove(e, id);
            }}
                >
                  <${generateIconTagName('icon-close')} size="16" alt="Clear icon" color="rgba(0, 0, 0, 0.60)"></${generateIconTagName('icon-close')}>
                </span>
              `
          : nothing}
        </${ENCHANTED_CHIP_TAG}>
      `;
    })}
  `;
  }

  render() {

    const filteredOptions = this.inputValue
      ? this.options.filter((option) => {
        const optionName = this.getOptionName(option).toLowerCase();
        return optionName.includes(this.inputValue.toLowerCase());
      })
      : this.options;

    return html`
    <div
      part="${INPUT_MULTI_SELECT_PARTS.TOP_CONTAINER_DIV}"
      tabindex="-1"
      style=${this.customWidth ? `width: ${this.customWidth}px;` : 'width:100%'}
    > <div part="${INPUT_MULTI_SELECT_PARTS.MULTIPLE_SELECT_DIV_LABEL_AND_REMOVE}">
        <label
          data-testid="enchanted-multi-select-label"
          part="${[
      INPUT_MULTI_SELECT_PARTS.LABEL,
      this.disabled ? INPUT_MULTI_SELECT_PARTS.MULTIPLE_SELECT_LABEL_DISABLED : '',
      this.isInputFocused ? INPUT_MULTI_SELECT_PARTS.LABEL_FOCUS : ''
    ].filter(Boolean).join(' ')}"
          for="${INPUT_MULTI_SELECT_PARTS.INPUT_FIELD}"
        >${this.label}</label>
        ${this.showRemoveLabel ? html`
          <label data-testid="multiple-select-remove-label"
            tabindex=${this.disabled ? '-1' : '0'}
            aria-disabled=${this.disabled}
            part="${(this.disabled)
          ? `${INPUT_MULTI_SELECT_PARTS.MULTIPLE_SELECT_REMOVE_LABEL} ${INPUT_MULTI_SELECT_PARTS.MULTIPLE_SELECT_REMOVE_LABEL_DISABLED}`
          : INPUT_MULTI_SELECT_PARTS.MULTIPLE_SELECT_REMOVE_LABEL}"
            @click=${(this.disabled) ? nothing : this.handleRemoveLabelClick}
            @keydown=${(e: KeyboardEvent) => {
          if (this.disabled) return;
          if (e.key === KeyboardInputKeys.ENTER || e.key === KeyboardInputKeys.SPACE) {
            e.preventDefault();
            this.handleRemoveLabelClick(e);
          }
        }}
          >
            ${this.getMessage('advanced.search.remove')}
          </label>
         ` : nothing}

      </div>
      <div
        id="${this.getDivInputParts()}"
        part="${this.getDivInputParts()}"
        ?disabled=${this.disabled}
        role="combobox"
        aria-expanded="${this.toggleDropDown}"
        aria-controls="enchanted-multi-select-list"
        @mouseenter=${this.handleOnMouseOver} 
				@mouseleave=${this.handleOnMouseOut} 
        @click=${(event: Event) => {
          // Close other open enchanted-multiple-select-chip dropdowns when this one is clicked.
          document.querySelectorAll(ENCHANTED_MULTIPLE_SELECT_CHIP_TAG_NAME).forEach((el) => {
            if (el !== this && (el as EnchantedMultipleSelectChip).toggleDropDown) {
              (el as EnchantedMultipleSelectChip).toggleDropDown = false;
            }
          });
          this.handleInputContainerClick(event); 
        }}
        @keydown=${(e: KeyboardEvent) => {
        if ((e.key === KeyboardInputKeys.ENTER || e.key === KeyboardInputKeys.SPACE) && !this.disabled) {
          e.preventDefault();
          this.toggleDropDown = !this.toggleDropDown;
          if (this.toggleDropDown) {
            this.listItems = Array.from(this.renderRoot.querySelectorAll('enchanted-list-item'));
            if (this.listItems.length > 0) {
              this.currentFocusedItem = this.listItems[0];
              this.currentFocusedItem.focus();
            }
          }
          const inputField = this.renderRoot.querySelector(`#${INPUT_MULTI_SELECT_PARTS.INPUT_FIELD}`) as HTMLInputElement;
          if (inputField) {
            inputField.focus();
          }
          this.requestUpdate();
        }
      }}
      >
        <div
          part="${INPUT_MULTI_SELECT_PARTS.CHIP_AND_INPUT_CONTAINER}"
        >
          ${this.renderChips()}
          <input
            id="${INPUT_MULTI_SELECT_PARTS.INPUT_FIELD}"
            type="text"
            .value=${this.inputValue}
            @input=${this.handleInput}
            @keydown=${this.handleInputKeyDown}
            @focus=${() => {
              this.isInputFocused = true;
            }}
            @blur=${() => {
              this.isInputFocused = false;
            }}
            ?disabled=${this.disabled}
            placeholder=${this.placeholder}
            aria-autocomplete="list"
            aria-controls="enchanted-multi-select-list"
            part=${!this.inputValue ? INPUT_MULTI_SELECT_PARTS.INPUT_TEXT : `${INPUT_MULTI_SELECT_PARTS.INPUT_TEXT} ${INPUT_MULTI_SELECT_PARTS.MULTIPLE_SELECT_INPUT_DEFAULT}`}
          />
        </div>
        <div part="${INPUT_MULTI_SELECT_PARTS.CLEAR_AND_ICON_CONTAINER}">
          ${this.selectedValues.length > 0
        ? html`
              <${ENCHANTED_ICON_BUTTON_TAG}
                part="${this.getPartClearAllIcon()}"
                .icon="${html`<${generateIconTagName('icon-close-filled')} size="16" color="rgba(0, 0, 0, 0.60)"></${generateIconTagName('icon-close-filled')}>`}"
                title="${INPUT_MULTI_SELECT_PARTS.CLEAR}"
                id="${INPUT_MULTI_SELECT_PARTS.CLEAR}"
                data-testid="enchanted-multi-select-clear-all-button"
                role="button"
                aria-label=${this.getMessage('authoring.multi.select.clear.chip')}
                tabindex="0"
                ?disabled="${this.disabled}"
                @click=${(e: Event) => {
                  e.stopPropagation();
                  debounce(this.handleClearAll.bind(this), 300)();
                }}
                @keydown=${(e: KeyboardEvent) => {
                  if (e.key === KeyboardInputKeys.ENTER || e.key === KeyboardInputKeys.SPACE) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.handleClearAll();
                  }
                }}
                @focus=${() => {
                  this.isClearAllIconFocused = true;
                  this.requestUpdate();
                }}
                @blur=${() => {
                  this.isClearAllIconFocused = false;
                  this.requestUpdate();
                }}
                exportparts="${Object.values(ICON_BUTTON_EXPORT_PARTS).join(',')}"
              >
              </${ENCHANTED_ICON_BUTTON_TAG}>
            `
        : nothing}
          <${ENCHANTED_BUTTON_TAG}
            @click=${(event: Event) => {
              // Close other open enchanted-multiple-select-chip dropdowns when this one is clicked.
              document.querySelectorAll(ENCHANTED_MULTIPLE_SELECT_CHIP_TAG_NAME).forEach((el) => {
                if (el !== this && (el as EnchantedMultipleSelectChip).toggleDropDown) {
                  (el as EnchantedMultipleSelectChip).toggleDropDown = false;
                }
              });
              this.handleButtonClick(event);
            }}
          
            @keydown=${(e: KeyboardEvent) => {
              if (e.key === KeyboardInputKeys.ENTER || e.key === KeyboardInputKeys.SPACE) {
                e.preventDefault();
                this.handleButtonClick(e);
              }
              if (e.key === KeyboardInputKeys.TAB && this.toggleDropDown) {
                this.toggleDropDown = false;
                return;
              }
            }}
            exportparts="${Object.values(BUTTON_PARTS).join(',')}"
            data-testid="enchanted-multi-select-button"
            variant="button"
            .icon="${this.toggleDropDown
              ? html`<${generateIconTagName('icon-caret-up')} size="16" color="rgba(0, 0, 0, 0.60)"></${generateIconTagName('icon-caret-up')}>`
              : html`<${generateIconTagName('icon-caret-down')} size="16" color="rgba(0, 0, 0, 0.60)"></${generateIconTagName('icon-caret-down')}>`
            }" 
            ?endicon="${true}"
            ?disabled="${this.disabled}"
            aria-label=${this.getMessage('authoring.multi.select.toggle.dropdown')}
            role="button"
          ></${ENCHANTED_BUTTON_TAG}>
        </div>
      </div>
      ${this.toggleDropDown
        ? html`
            <${ENCHANTED_LIST_TAG}
              exportparts="${LIST_PARTS.UNORDERED_LIST}"
              style=${this.customWidth ? `width: ${this.customWidth}px;` : nothing}
              id="enchanted-multi-select-list"
              role="listbox"
              aria-multiselectable="true"
              tabindex="-1"
              data-testid="enchanted-multi-select-list"
              @click=${(e: Event) => {
                return e.stopPropagation();
              }}
            >
              ${filteredOptions.length > 0
              ? filteredOptions.map((option: string | OptionData) => {
                return this.getSelectedOption(option);
              })
              : html`
                <${ENCHANTED_LIST_ITEM_TAG}
                  part="${INPUT_MULTI_SELECT_PARTS.NO_LIST_ITEM}"
                  data-testid="enchanted-multi-select-listitem-no-options"
                  role="option"
                  aria-disabled="true"
                >
                  <div part="${INPUT_MULTI_SELECT_PARTS.LIST_ITEM_NO_CONTENT}">
                    No options
                  </div>
                </${ENCHANTED_LIST_ITEM_TAG}>
              `}
            </${ENCHANTED_LIST_TAG}>
          `
        : nothing}
        ${this.showHelperText ? html`<div part="${INPUT_MULTI_SELECT_PARTS.HELPER_TEXT}" aria-label="${this.helperText}">${this.helperText}</div>` : nothing}
    </div>
  `;
  }
}

if (!customElements.get(ENCHANTED_MULTIPLE_SELECT_CHIP_TAG_NAME)) {
  customElements.define(ENCHANTED_MULTIPLE_SELECT_CHIP_TAG_NAME, EnchantedMultipleSelectChip);
} else {
  debug('Component (%s) is currently registered and not possible to registrate again.', ENCHANTED_MULTIPLE_SELECT_CHIP_TAG_NAME);
}
