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
import { customElement, property, state } from 'lit/decorators.js';
import { html, nothing } from 'lit';
import { debounce } from 'lodash';

// Component imports
import { DxAcBaseElement } from './dx-ac-base-element';
import './dx-input-select';
import './dx-button';

// Helper imports
import { BUTTON_PARTS, BUTTON_VARIANT, TABLE_PAGINATION_PARTS } from '../../types/cssClassEnums';
import { getCurrentDirection, isLTR } from '../localization';
import { DxInputFieldType } from '../../types/dx-input-select';
import { DEFAULT_PAGESIZE, DEFAULT_ROWS_OPTIONS, DxPaginationActions } from '../../types/dx-table-pagination';
import { PAGINATION_SELECT_EXPORT_PARTS } from '../exportParts';

// Icon imports
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/page--first';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/page--last';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/chevron--left';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/chevron--right';

import { LOCALE_DIRECTIONS } from '../constants';

@customElement('dx-table-pagination')
export class DxTablePagination extends DxAcBaseElement {
  @property({ type: Boolean })
  disabled = false;

  @property({ type: Number })
  currentPage: number | undefined = 1;

  @property({ type: Number })
  totalCount: number | undefined = 0;

  @property({ type: Number })
  rowSize: number | undefined = undefined;

  @property({ type: String })
  options: string[] = DEFAULT_ROWS_OPTIONS.map((value) => { return value.toString();});

  @state()
  private pagesCount: number = (this.totalCount && this.rowSize) ? Math.ceil(this.totalCount / this.rowSize) : 0;

  @state()
  private currentPageState: number = this.currentPage || 1;

  @state()
  private rowSizeState: number = this.rowSize || DEFAULT_PAGESIZE;

  @state()
  private rowMessage: string = '';

  @state()
  hasPreviousPage: boolean = true;

  @state()
  hasNextPage: boolean = true;

  @state()
  private isRTL = getCurrentDirection()  === LOCALE_DIRECTIONS.RTL;

  connectedCallback(): void {
    super.connectedCallback();
    if (this.rowSize) {
      this.rowSizeState = this.rowSize;
    }
    
    this.currentPageState = this.currentPage || 1; 
    this.handleGetRowsDescription();
  }

  private async handleGetRowsDescription() {
    if (this.totalCount !== undefined && this.rowSize) {
      this.pagesCount = Math.ceil(this.totalCount / this.rowSizeState);
      
      const currentPageStart = ((this.currentPageState - 1) * this.rowSizeState) + 1;
      const currentPageEnd = this.currentPageState * this.rowSizeState > this.totalCount ? this.totalCount : (this.currentPageState * this.rowSizeState);
      this.rowMessage = this.getMessage('output.table.footer.current.pages', [
        { '{current_page_start}' : currentPageStart.toString() },
        { '{current_page_end}' : currentPageEnd.toString() },
        { '{total_count}': this.totalCount.toString() },
      ]);
  
      if (currentPageStart === 1) {
        this.hasPreviousPage = false;
      } else {
        this.hasPreviousPage = true;
      }
  
      if (currentPageEnd === this.totalCount) {
        this.hasNextPage = false;
      } else {
        this.hasNextPage = true;
      }
    }
  }

  private async handleChange(event: CustomEvent) {
    const { type, name } = event.detail;

    if ([DxInputFieldType.PAGINATION_ROWS, DxInputFieldType.PAGINATION_PAGE].includes(type)) {
      this.dispatchEvent(new CustomEvent('change', {
        detail: {
          value: name,
          type: type
        }
      }));

      if (type === DxInputFieldType.PAGINATION_ROWS) {
        this.rowSizeState = Number(name);
        this.pagesCount = this.totalCount ? Math.ceil(this.totalCount / this.rowSizeState) : 0;
        this.currentPageState = 1;
        this.handleGetRowsDescription();
      } else if (type === DxInputFieldType.PAGINATION_PAGE) {
        this.currentPageState = Number(name);
        this.handleGetRowsDescription();
      }
    }
  }

  private async handleClick(actionButton: string) {
    switch (actionButton) {
      case DxPaginationActions.FIRST_PAGE:
        this.dispatchEvent(new CustomEvent('change', {
          detail: {
            value: 1,
            type: DxInputFieldType.PAGINATION_PAGE
          }
        }));
        this.currentPageState = 1;
        break;
      case DxPaginationActions.PREVIOUS_PAGE:
        this.dispatchEvent(new CustomEvent('change', {
          detail: {
            value: this.currentPageState - 1,
            type: DxInputFieldType.PAGINATION_PAGE
          }
        }));
        if (this.currentPageState > 1) {
          this.currentPageState = this.currentPageState - 1;
        }
        break;
      case DxPaginationActions.NEXT_PAGE:
        this.dispatchEvent(new CustomEvent('change', {
          detail: {
            value: this.currentPageState + 1,
            type: DxInputFieldType.PAGINATION_PAGE
          }
        }));
        if (this.currentPageState < this.pagesCount) {
          this.currentPageState = this.currentPageState + 1;
        }
        break;
      case DxPaginationActions.LAST_PAGE:
        this.dispatchEvent(new CustomEvent('change', {
          detail: {
            value: this.pagesCount,
            type: DxInputFieldType.PAGINATION_PAGE
          }
        }));
        this.currentPageState = this.pagesCount;
        break;
      default:
        break;
    }
    this.handleGetRowsDescription();
  }

  renderSlash() {
    return this.isRTL ? "\\" : "/";
  }

  render() {
    if (this.currentPageState && this.totalCount && this.rowSizeState && this.pagesCount
    ) {
      return html`
        <div part=${TABLE_PAGINATION_PARTS.CONTAINER}>
          <div part=${TABLE_PAGINATION_PARTS.ROWS_SECTION}>
            <dx-input-select
              .localization=${this.localization}
              exportparts="${PAGINATION_SELECT_EXPORT_PARTS}"
              field=${DxInputFieldType.PAGINATION_ROWS}
              selectedId=${this.rowSizeState}
              selectedValue=${this.rowSizeState}
              .options=${this.options}
              @change=${this.handleChange}
              ?disabled=${this.disabled}
              ariaLabel=${
                this.getMessage('output.pagination.rows.per.page.aria.label', [
                  { '{rows_per_page}': this.rowSizeState.toString() }
                ])
              }
            ></dx-input-select>
            <span part=${TABLE_PAGINATION_PARTS.ROWS_DESCRIPTION}>
              ${this.rowMessage}
            </span>
          </div>
          <div part=${TABLE_PAGINATION_PARTS.PAGES_SECTION}>
            <dx-button
              part=${TABLE_PAGINATION_PARTS.PAGES_NAV_BUTTON}
              exportparts="${Object.values(BUTTON_PARTS).join(',')}"
              buttontext=''
              ?outlined="${false}"
              ?disabled="${!this.hasPreviousPage}"         
              .icon="${
                isLTR() ? (
                  this.hasPreviousPage 
                    ? html`<icon-page-first size="16" color="rgba(0, 0, 0, 0.60)"></icon-page-first>`
                    : html`<icon-page-first size="16" color="rgba(0, 0, 0, 0.38)"></icon-page-first>`
                ) : (
                  this.hasPreviousPage 
                    ? html`<icon-page-last size="16" color="rgba(0, 0, 0, 0.60)"></icon-page-last>`
                    : html`<icon-page-last size="16" color="rgba(0, 0, 0, 0.38)"></icon-page-last>`
                )
              }"
              data-testid="${DxPaginationActions.FIRST_PAGE}"
              @click=${debounce(() => { this.handleClick(DxPaginationActions.FIRST_PAGE); }, 300)}
              variant=${BUTTON_VARIANT.BUTTON_TEXT_VAR}
              ariaLabel=${this.getMessage('output.pagination.first.page.aria.label')}
            >
            </dx-button>
            <dx-button
              part=${TABLE_PAGINATION_PARTS.PAGES_NAV_BUTTON}
              exportparts="${Object.values(BUTTON_PARTS).join(',')}"
              buttontext=''
              ?outlined="${false}"
              ?disabled="${!this.hasPreviousPage}"
              .icon="${
                isLTR() ? (
                  this.hasPreviousPage 
                    ? html`<icon-chevron-left size="16" color="rgba(0, 0, 0, 0.60)"></icon-chevron-left>`
                    : html`<icon-chevron-left size="16" color="rgba(0, 0, 0, 0.38)"></icon-chevron-left>`
                ) : (
                  this.hasPreviousPage
                    ? html`<icon-chevron-right size="16" color="rgba(0, 0, 0, 0.60)"></icon-chevron-right>`
                    : html`<icon-chevron-right size="16" color="rgba(0, 0, 0, 0.38)"></icon-chevron-right>`
                )
              }"
              data-testid="${DxPaginationActions.PREVIOUS_PAGE}"
              @click=${debounce(() => { this.handleClick(DxPaginationActions.PREVIOUS_PAGE); }, 300)}
              variant=${BUTTON_VARIANT.BUTTON_TEXT_VAR}
              ariaLabel=${this.getMessage('output.pagination.previous.page.aria.label')}
            >
            </dx-button>
            <dx-input-select
              .localization=${this.localization}
              exportparts="${PAGINATION_SELECT_EXPORT_PARTS}"
              field=${DxInputFieldType.PAGINATION_PAGE}
              selectedId=${this.currentPageState}
              selectedValue=${this.currentPageState}
              .options=${Array.from(Array(this.pagesCount).keys()).map((value) => {return (value + 1).toString();})}
              @change=${this.handleChange}
              ?disabled=${this.disabled}
              hiddenIcon=${true}
              ariaLabel=${this.getMessage('output.pagination.current.page.aria.label', [
                { '{current_page}': this.currentPageState.toString() },
                { '{total_pages}': this.pagesCount.toString() }
              ])}
            ></dx-input-select>
            <span part=${TABLE_PAGINATION_PARTS.PAGES_DESCRIPTION}>
              &nbsp; ${this.renderSlash()} ${this.pagesCount} &nbsp;
            </span>
            <dx-button
              part=${TABLE_PAGINATION_PARTS.PAGES_NAV_BUTTON}
              exportparts="${Object.values(BUTTON_PARTS).join(',')}"
              buttontext=''
              ?outlined="${false}"
              ?disabled="${!this.hasNextPage}"
              .icon="${
                isLTR() ? (
                  this.hasNextPage
                    ? html`<icon-chevron-right size="16" color="rgba(0, 0, 0, 0.60)"></icon-chevron-right>`
                    : html`<icon-chevron-right size="16" color="rgba(0, 0, 0, 0.38)"></icon-chevron-right>`
                ) : (
                  this.hasNextPage
                    ? html`<icon-chevron-left size="16" color="rgba(0, 0, 0, 0.60)"></icon-chevron-left>`
                    : html`<icon-chevron-left size="16" color="rgba(0, 0, 0, 0.38)"></icon-chevron-left>`
                )
              }"
              data-testid="${DxPaginationActions.NEXT_PAGE}"
              @click=${debounce(() => { this.handleClick(DxPaginationActions.NEXT_PAGE); }, 300)}
              variant=${BUTTON_VARIANT.BUTTON_TEXT_VAR}
              ariaLabel=${this.getMessage('output.pagination.next.page.aria.label')}
            >
            </dx-button>
            <dx-button
              part=${TABLE_PAGINATION_PARTS.PAGES_NAV_BUTTON}
              exportparts="${Object.values(BUTTON_PARTS).join(',')}"
              buttontext=''
              ?outlined="${false}"
              ?disabled="${!this.hasNextPage}"
              .icon="${
                isLTR() ? (
                  this.hasNextPage
                    ? html`<icon-page-last size="16" color="rgba(0, 0, 0, 0.60)"></icon-page-last>`
                    : html`<icon-page-last size="16" color="rgba(0, 0, 0, 0.38)"></icon-page-last>`
                ) : (
                  this.hasNextPage
                    ? html`<icon-page-first size="16" color="rgba(0, 0, 0, 0.60)"></icon-page-first>`
                    : html`<icon-page-first size="16" color="rgba(0, 0, 0, 0.38)"></icon-page-first>`
                )
              }"
              data-testid="${DxPaginationActions.LAST_PAGE}"
              @click=${debounce(() => { this.handleClick(DxPaginationActions.LAST_PAGE); }, 300)}
              variant=${BUTTON_VARIANT.BUTTON_TEXT_VAR}
              ariaLabel=${this.getMessage('output.pagination.last.page.aria.label')}
            >
            </dx-button>
          </div>
        </div>
      `;
    }

    return nothing;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dx-table-pagination': DxTablePagination;
  }
}
