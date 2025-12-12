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
import { customElement, state, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import createDebug from 'debug';

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';
import { EnchantedIconButton } from './enchanted-icon-button';
import { EnchantedMenu } from './enchanted-menu';
import './enchanted-item-type-avatar';
import './enchanted-menu';
import './enchanted-menu-item';
import './enchanted-svg-icon';
import './enchanted-circular-progress';
import './enchanted-tooltip';
import './enchanted-icon-button';

// Helper imports
import { ActionColumn, ActionMenu, EnchantedDataGridColDef, HandleItemClickHandler, SortOrder } from '../../types/enchanted-data-grid';
import { getObjectValue } from '../../utils/commonUtils';
import { isLTR, getFormattedString } from '../localization';
import { BUTTON_PARTS, LIST_ITEM_PARTS, LIST_PARTS, MENU_ITEM_PARTS, MENU_PARTS, DATA_GRID_PARTS } from '../../types/cssClassEnums';
import { EnchantedDataGridContextType } from './contexts/enchanted-data-grid-context';
import { ICON_BUTTON_EXPORT_PARTS, ITEM_TYPE_AVATAR_EXPORT_PARTS, TOOLTIP_EXPORT_PARTS } from '../exportParts';
import { EnchantedInputFieldType } from '../../types/enchanted-select';
import { KeyboardInputKeys } from '../../utils/keyboardEventKeys';


// Icon imports
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/arrow--up';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/arrow--down';
import '@hcl-software/enchanted-icons-web-component/dist/apps/es/items--search--empty';
import '@hcl-software/enchanted-icons-web-component/dist/apps/es/items--search--initial';

const debug = createDebug('enchanted-web-components:components:ac:enchanted-data-grid-generic.ts');

@customElement('enchanted-data-grid-generic')
export class EnchantedDataGridGeneric extends EnchantedAcBaseElement {
  @property()
  private isLoading: boolean = false;

  @state()
  private invalidColDef: boolean = false;

  @state()
  private onHover: boolean = true;

  @state()
  private onRowHover: boolean = false;

  @property()
  data: EnchantedDataGridContextType = {};

  @property()
  columns: EnchantedDataGridColDef[] = [];

  @property()
  private hasMiddlewareError: boolean = false;

  @property()
  private hasContentSourceAvailable: boolean = false;

  @property()
  private checkboxSelection: boolean = false;

  @property()
  private isFeatureTagCloudEnabled: boolean = false;

  @property()
  private specialFields: string[] = [];

  @property({ type: Boolean })
  private isRowClickable = false;

  @property()
  customTableHeaderPart: string = '';

  @property()
  customeTableCellPart: string = '';
  
  @state()
  private currentHoverField: string = '';

  @state()
  private currentHoverRow: number = NaN;

  @state()
  private selectAll: boolean = false;

  @property()
  private tableHover: string = 'false';

  @state()
  private programmaticClick: boolean = false;

  @state()
  private actionCount: number = 0;

  @state()
  private actions: Array<string> = [];

  @state()
  private focused: number = 0;

  @state()
  private selectedIndex?: number;

  @state()
  private focusedRowActionButtons: EnchantedIconButton[] = [];

  connectedCallback(): void {
    super.connectedCallback();
    const isValidColDef = this.columns && this.columns.length ? this.columns.every((col) =>  { return 'field' in col; } ) : false;
    this.columns?.forEach((col, index) => {
      this.actionCount += col.actions ? col.actions.length : 0;
      if (col.actions) {
        col.actions.forEach((_action, i) => {
          this.actions.push(`${index}-${i}`);
        });
      }
    });
    if (!isValidColDef) {
      this.invalidColDef = true;
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  getVisibleMenuItems(menu: ActionMenu[] | undefined, data: unknown, header: EnchantedDataGridColDef): ActionMenu[] {
    if (!menu) {
      return [];
    }
    return menu.filter(menuItem => {return menuItem.isVisible?.(data, header) ?? true;});
  }

  handleHeaderOnMouseOver(event: MouseEvent, currentHoverField: string) {
    event.stopPropagation();
    this.onHover = true;
    this.currentHoverField = currentHoverField;
  }

  handleHeaderOnMouseOut(event: MouseEvent) {
    event.stopPropagation();
    this.onHover = false;
    this.currentHoverField = '';
  }

  handleRowOnMouseOver(event: MouseEvent, currentHoverIndex: number) {
    if (this.programmaticClick) {
      // Reset the flag and ignore this event
      this.programmaticClick = false;
      return;
    }
    event.stopPropagation();
    event.preventDefault();
    this.onRowHover = true;

    // Remove hover from previous row if any
    if (currentHoverIndex !== this.currentHoverRow) {
      const previouslyHoveredRow = this.renderRoot.querySelector(`#table-row-${this.currentHoverRow}`) as HTMLElement;
      if (previouslyHoveredRow
        && previouslyHoveredRow.hasAttribute('part')
        && previouslyHoveredRow.getAttribute('part') === DATA_GRID_PARTS.TABLE_ROW_BODY_CONTAINER_HOVERED
      ) {
        previouslyHoveredRow.blur();
        previouslyHoveredRow.removeAttribute('part');
        previouslyHoveredRow.setAttribute('part', DATA_GRID_PARTS.TABLE_ROW_BODY_CONTAINER);
      }
    }

    this.currentHoverRow = currentHoverIndex;
    const enteredRow = this.renderRoot.querySelector(`#table-row-${currentHoverIndex}`) as HTMLElement;
    if (enteredRow) {
      enteredRow.removeAttribute('part');
      enteredRow.setAttribute('part', DATA_GRID_PARTS.TABLE_ROW_BODY_CONTAINER_HOVERED);
    }
  }

  handleRowOnMouseOut(event: MouseEvent, index: number) {
    event.stopPropagation();
    this.onRowHover = false;
    this.currentHoverRow = NaN;
    const leftRow = this.renderRoot.querySelector(`#table-row-${index}`) as HTMLElement;
    if (leftRow) {
      leftRow.removeAttribute('part');
      leftRow.setAttribute('part', this.selectedIndex === index ? DATA_GRID_PARTS.TABLE_ROW_BODY_CONTAINER_SELECTED : DATA_GRID_PARTS.TABLE_ROW_BODY_CONTAINER);
    }
  }

  getPartHeaderSort(headerField: string, sortDirection: SortOrder) {
    if (sortDirection === SortOrder.ASC) {
      if (this.data?.sortDirection === SortOrder.DESC && this.data?.sortAttribute === headerField) {
        return DATA_GRID_PARTS.TABLE_HEADER_ASC_SORT_BUTTON_HIDDEN;
      }
      if (this.onHover && headerField === this.currentHoverField || (
        this.data?.sortAttribute === headerField
        && this.data?.sortDirection === SortOrder.ASC)
      ) {
        return DATA_GRID_PARTS.TABLE_HEADER_SORT_BUTTON;
      }
      return DATA_GRID_PARTS.TABLE_HEADER_ASC_SORT_BUTTON_HIDDEN;
    }
    if (sortDirection === SortOrder.DESC) {
      if (this.data?.sortDirection === SortOrder.ASC
        || this.data?.sortDirection === undefined
        || (this.data?.sortAttribute !== headerField
          && this.data?.sortDirection === SortOrder.DESC)
      ) {
        return DATA_GRID_PARTS.TABLE_HEADER_DESC_SORT_BUTTON_HIDDEN;
      }
      if ((this.onHover && headerField === this.currentHoverField && this.data?.sortDirection)
        || (this.data?.sortAttribute === headerField
          && this.data?.sortDirection === SortOrder.DESC)
      ) {
        return DATA_GRID_PARTS.TABLE_HEADER_SORT_BUTTON;
      }
      return DATA_GRID_PARTS.TABLE_HEADER_DESC_SORT_BUTTON_HIDDEN;
    }
  }

  async handleSort(evt: Event, field: string, sort: string) {
    evt.stopPropagation();
    evt.preventDefault();
    let sortDirection = sort;
    if (this.data?.sortAttribute === field &&
      this.data?.sortDirection === SortOrder.ASC) {
      sortDirection = SortOrder.DESC;
    } else {
      sortDirection = SortOrder.ASC;
    }
    this.dispatchEvent(new CustomEvent('change', {
      detail: {
        value: { field: field, sort: sortDirection },
        type: EnchantedInputFieldType.SORT
      }
    }));
  }

  // this cannot be tested stand alone need authoring to use this.
  /* istanbul ignore next */
  private async handleSelection(evt: MouseEvent, index: number) {
    evt.stopPropagation();
    evt.preventDefault();
    this.dispatchEvent(new CustomEvent('change', {
      detail: {
        value: this.data?.searchItems && this.data?.searchItems[index],
        type: EnchantedInputFieldType.SELECTION
      }
    }));
  }

  // this cannot be tested stand alone need authoring to use this.
  /* istanbul ignore next */
  private async handleSelectAll(evt: MouseEvent) {
    evt.stopPropagation();
    evt.preventDefault();
    this.selectAll = !this.selectAll;
    this.dispatchEvent(new CustomEvent('change', {
      detail: {
        value: this.selectAll,
        type: EnchantedInputFieldType.SELECT_ALL
      }
    }));
  }

  // this cannot be tested stand alone need authoring to use this.
  /* istanbul ignore next */
  isItemSelected(index: number): boolean {
    if (this.data?.selectedSearchItems && this.data?.searchItems) {
      return this.data?.selectedSearchItems.some(selectedId => {
        if (this.data?.searchItems && this.data?.searchItems[index]) {
          return selectedId._id === this.data?.searchItems[index]?._id;
        }
        return false;
      });
    }
    return false;
  }

  // this cannot be tested stand alone need authoring to use this.
  /* istanbul ignore next */
  getPartRowCheckbox(index: number) {
    if (this.onRowHover && this.currentHoverRow === index ||
      (this.data?.selectedSearchItems && this.data?.searchItems &&
        this.data?.selectedSearchItems.includes(this.data?.searchItems[index]))
      || (this.isItemSelected(index))
    ) {
      return '';
    }
    return DATA_GRID_PARTS.TABLE_SELECT_CHECKBOX;
  }

  getPartActionButton(index: number) {
    if ((this.onRowHover || this.tableHover === 'true') && this.currentHoverRow === index) {
      return DATA_GRID_PARTS.TABLE_ACTION_ICON_BUTTON;
    }
    return DATA_GRID_PARTS.TABLE_ACTION_ICON_BUTTON_HIDDEN;
  }

  handleOverFlowMenu(
    evt: CustomEvent,
    menu: ActionMenu[],
    { data, column }: {	data: unknown, column: ActionColumn }
  ) {
    const lists = menu?.filter(list => { return list.click; });
    const execute = lists?.find(list => { return list.text === evt.detail.text; });
    if (execute?.click) {
      execute?.click(evt, {
        data,
        column,
      });
    }
  }

  handleActionItemKeydown(
    evt: KeyboardEvent,
    index: number,
    headerIndex: number,
    itemIndex: number,
    isMenu: boolean = false
  ) {
    evt.stopPropagation();
    const actionButtonElement = evt.target as EnchantedIconButton;
    const actionButtonId = actionButtonElement.id;
    const actionButtonIndex = this.focusedRowActionButtons.findIndex((button) => {return button.id === actionButtonId;});
    const isRightDirection = evt.key === KeyboardInputKeys.TAB && !evt.shiftKey;
    const isLeftDirection = evt.key === KeyboardInputKeys.TAB && evt.shiftKey;
    const isItemStart = actionButtonIndex === 0 && isLeftDirection;
    const isItemEnd = actionButtonIndex === this.focusedRowActionButtons.length - 1;
    const nextItemIndex = this.focused + 1;
    const prevItemIndex = this.focused - 1;
    const itemsLength = this.data?.searchItems?.length;
    if (evt.key === KeyboardInputKeys.ENTER && !isMenu) {
      evt.preventDefault();
      const currentSelectedAction = this.renderRoot.querySelector(`#enchanted-data-grid-action-item-button-${index}-${this.actions[this.focused]}`) as HTMLElement;
      currentSelectedAction.click();
    }

    if (isMenu) {
      const moreMenuIcon = evt.target as HTMLElement;
      const isOpen = this.renderRoot.querySelector('enchanted-menu')?.openMenu;

      const closeMenu = (targetIndex: number) => {
        if (isOpen) {
          this.programmaticClick = true;
          moreMenuIcon.click();
        }
        const item = this.renderRoot.querySelector(`#enchanted-data-grid-action-item-button-${index}-${this.actions[targetIndex]}`) as HTMLElement;
        return item?.focus();
      };

      if (isLeftDirection && isOpen) {
        evt.preventDefault();
        this.focused -= 1;
        closeMenu(prevItemIndex);
      }

      if (isRightDirection && !isItemEnd && isOpen) {
        evt.preventDefault();
        this.focused += 1;
        closeMenu(nextItemIndex);
      }

      if (evt.key === KeyboardInputKeys.ENTER) {
        evt.preventDefault();
        this.programmaticClick = true;
        moreMenuIcon.click();
        const menuList = this.renderRoot.querySelector(`#enchanted-data-grid-menu-item-${index}-${headerIndex}-${itemIndex}-${0}`) as HTMLElement;
        setTimeout(() => {
          menuList?.focus();
        }, 350);
      }

      if (evt.key === KeyboardInputKeys.ARROW_DOWN || (evt.key === KeyboardInputKeys.TAB && !evt.shiftKey)) {
        if (isOpen) {
          evt.preventDefault();
          const menuList = this.renderRoot.querySelector(`#enchanted-data-grid-menu-item-${index}-${headerIndex}-${itemIndex}-${0}`) as HTMLElement;
          menuList?.focus();
        } else if (isItemEnd) {
          if (index + 1 === itemsLength) {
            this.focusNextElement(evt);
            return;
          } else {
            evt.preventDefault();
            (this.renderRoot.querySelector(`#table-row-${index + 1}`) as HTMLElement).focus();
          }
        }
      }	
      
      if (isOpen) {
        return;
      }
    }

    if (isItemStart) {
      evt.preventDefault();
      const row = this.renderRoot.querySelector(`#table-row-${index}`) as HTMLElement;
      row?.focus();
    }

    if ((isItemEnd && evt.key === KeyboardInputKeys.TAB && !evt.shiftKey) || (isItemEnd && evt.key === KeyboardInputKeys.ARROW_DOWN)) {
      if (index + 1 === itemsLength) {
        this.focusNextElement(evt);
      } else {
        evt.preventDefault();
        const nextRow = this.renderRoot.querySelector(`#table-row-${index + 1}`) as HTMLElement;
        nextRow.focus();
      }
    }
    if (isRightDirection && !isItemEnd) {
      evt.preventDefault();
      const nextActionButtonIndex = actionButtonIndex + 1 < this.focusedRowActionButtons.length ? actionButtonIndex + 1 : 0;
      const nextItem = this.focusedRowActionButtons[nextActionButtonIndex];
      this.currentHoverRow = index;
      this.requestUpdate();
      nextItem?.focus();
      this.focused += 1;
    }

    if (!isItemStart && isLeftDirection) {
      evt.preventDefault();
      const prevActionButtonIndex = actionButtonIndex - 1 >= 0 ? actionButtonIndex - 1 : 0;
      const prevItem = this.focusedRowActionButtons[prevActionButtonIndex];
      prevItem?.focus();
      this.focused -= 1;
    }
  }

  handleButtonFocus(evt: FocusEvent) {
    evt.stopPropagation();
    evt.preventDefault();
    const button = evt.target as HTMLElement;
    button.setAttribute('autofocus', 'true');
  }

  handleButtonBlur(evt: FocusEvent) {
    evt.stopPropagation();
    evt.preventDefault();
    const button = evt.target as HTMLElement;
    button.removeAttribute('autofocus');
  }

  handleMenuItemKeydown(evt: KeyboardEvent, index: number, headerIndex: number, menuIndex: number, itemIndex: number, length: number) {
    evt.stopPropagation();
    evt.preventDefault();
    const menuItem = evt.target as HTMLElement;
    if (evt.key === KeyboardInputKeys.ENTER) {
      menuItem.click();
    }
    if (evt.key === KeyboardInputKeys.ARROW_DOWN) {
      const belowMenu = this.renderRoot.querySelector(`#enchanted-data-grid-menu-item-${index}-${headerIndex}-${itemIndex}-${menuIndex + 1}`) as HTMLElement;
      if (belowMenu) {
        belowMenu.focus();
      } else {
        const nextRow = this.renderRoot.querySelector(`#enchanted-data-grid-menu-item-${index}-${headerIndex}-${itemIndex}-${0}`) as HTMLElement;
        if (nextRow) {
          nextRow.focus();
        }
      }
    }
    if ((!evt.shiftKey && evt.key === KeyboardInputKeys.TAB) || evt.key === KeyboardInputKeys.ESCAPE) {
      const menuIcon = this.renderRoot.querySelector(`#enchanted-data-grid-action-item-button-${index}-${this.actions[this.focused]}`);
      if (menuIcon instanceof HTMLElement) {
        menuIcon.focus();
      }
      (menuIcon?.parentElement?.parentElement?.parentElement as EnchantedMenu).openMenu = false;
    }
    if (evt.key === KeyboardInputKeys.ARROW_UP) {
      if (menuIndex === 0) {
        const lastMenu = this.renderRoot.querySelector(`#enchanted-data-grid-menu-item-${index}-${headerIndex}-${itemIndex}-${length-1}`) as HTMLElement;
        lastMenu.focus();
      } else {
        const aboveMenu = this.renderRoot.querySelector(`#enchanted-data-grid-menu-item-${index}-${headerIndex}-${itemIndex}-${menuIndex - 1}`) as HTMLElement;
        aboveMenu?.focus();
      }

    }
  }

  handleCellHeaderKeydown(evt: KeyboardEvent, sort: string, index: number) {
    evt.stopPropagation();
    const columnsObj = this.columns as EnchantedDataGridColDef[];
    const moveToNextHeader = isLTR() ? KeyboardInputKeys.ARROW_RIGHT : KeyboardInputKeys.ARROW_LEFT;
    const moveToPreviousHeader = isLTR() ? KeyboardInputKeys.ARROW_LEFT : KeyboardInputKeys.ARROW_RIGHT;
    const isMovingRight = (evt.key === KeyboardInputKeys.TAB && !evt.shiftKey) || evt.key === moveToNextHeader;
    const isMovingLeft = evt.key === moveToPreviousHeader || (evt.shiftKey && evt.key === KeyboardInputKeys.TAB);
    let targetIndex: number | null = null;

    // Find sortable header
    if (isMovingRight) {
      for (let i = index + 1; i < columnsObj.length; i++) {
        if (columnsObj[i].sortEnable) {
          targetIndex = i;
          break;
        }
      }
    } else if (isMovingLeft) {
      for (let i = index - 1; i >= 0; i--) {
        if (columnsObj[i].sortEnable) {
          targetIndex = i;
          break;
        }
      }
    }

    if (targetIndex !== null) {
      evt.preventDefault();
      const targetHeader = this.renderRoot.querySelector(`#enchanted-table-header-${targetIndex}`) as HTMLElement;
      if (targetHeader) {
        targetHeader.focus();
      }
    } else {
      if (isMovingRight) {
        evt.preventDefault();
        const firstRow = this.renderRoot.querySelector(`#table-row-0`) as HTMLElement;
        firstRow?.focus();
        this.currentHoverField = '';
      } else if (isMovingLeft) {
        this.focusPreviousElement(evt);
      }
    }

    if (evt.key === KeyboardInputKeys.ARROW_DOWN) {
      evt.preventDefault();
      const firstRow = this.renderRoot.querySelector(`#table-row-0`) as HTMLElement;
      if (firstRow) {
        firstRow.focus();
        this.currentHoverField = '';
      }
    }

    if (evt.key === KeyboardInputKeys.ENTER) {
      evt.preventDefault();
      const sortButton = this.renderRoot.querySelector(`#enchanted-data-grid-sort-button-${sort}-${index}`) as HTMLElement;
      if (sortButton) {
        sortButton.click();
      }
    }
  }

  handleSortButtonKeydown(evt: KeyboardEvent, field: string, sort: string) {
    evt.stopPropagation();
    evt.preventDefault();
    if (evt.key === KeyboardInputKeys.ENTER) {
      this.handleSort(evt, field, sort);
    }
  }

  handleSortButtonBlur(evt: Event) {
    const sortButton = evt.target as HTMLElement;
    sortButton.removeAttribute('autofocus');
  }

  handleBodyRowKeydown(evt: KeyboardEvent, index: number) {
    evt.stopPropagation();
    const itemsLength = this.data?.searchItems?.length;
    const rowElement = evt.target as HTMLTableRowElement;

    if (evt.key === KeyboardInputKeys.ENTER || evt.key === KeyboardInputKeys.SPACE) {
      evt.preventDefault();

      // Get the data for the current row
      const data = this.data?.searchItems?.[index];

      if (data) {
        this.handleRowClick(evt, { data, index });
      }
    }
    
    if (evt.key === KeyboardInputKeys.ARROW_DOWN) {
      if (index + 1 === itemsLength) {
        this.focusNextElement(evt);
      }
      const nextRow = this.renderRoot.querySelector(`#table-row-${index + 1}`) as HTMLElement;
      if (nextRow) {
        evt.preventDefault();
        nextRow.focus();
      }
    }

    if (isLTR() ? evt.key === KeyboardInputKeys.ARROW_RIGHT : evt.key === KeyboardInputKeys.ARROW_LEFT) {
      this.focused = 0;
      const firstActionButtonDiv = rowElement?.querySelector(`[part~="${DATA_GRID_PARTS.TABLE_ACTION_ICON_BUTTON}"]`) as HTMLDivElement;
     
      if (firstActionButtonDiv) {
        const firstActionButton = firstActionButtonDiv.querySelector('enchanted-icon-button') as EnchantedIconButton;
        if (firstActionButton) {
          evt.preventDefault();
          this.currentHoverRow = index;
          this.requestUpdate();
          firstActionButton.focus();
        }
      }
    }

    if (evt.key === KeyboardInputKeys.TAB && !evt.shiftKey) {
      const nextRow = this.renderRoot.querySelector(`#table-row-${index + 1}`) as HTMLElement;
      if (nextRow) {
        evt.preventDefault();
        nextRow.focus();
      } else {
        this.focusNextElement(evt);
      }
    }

    if (evt.key === KeyboardInputKeys.ARROW_UP || (evt.shiftKey && evt.key === KeyboardInputKeys.TAB)) {
      evt.preventDefault();
      const previousRow = this.renderRoot.querySelector(`#table-row-${index - 1}`) as HTMLElement;
      if (index === 0) {
        this.currentHoverRow = NaN;
        const header = this.renderRoot.querySelector('#enchanted-table-header-0') as HTMLElement;
        header?.focus();
      } else if (previousRow) {
        previousRow.focus();
      }
    }
  }

  focusNextElement(event: KeyboardEvent) {
    this.onRowHover = false;
    this.currentHoverRow = NaN;
    this.dispatchEvent(new CustomEvent('data-grid-focus-next', {
      detail: { keyboardEvent: event, source: 'enchanted-data-grid' },
      bubbles: true,
      composed: true,
    }));
  }

  focusPreviousElement(event: KeyboardEvent) {
    this.dispatchEvent(new CustomEvent('data-grid-focus-previous', {
      detail: { keyboardEvent: event, source: 'enchanted-data-grid' },
      bubbles: true,
      composed: true,
    }));
    this.currentHoverField = '';
  }

  public async focusOnRow(index: number) {
    await this.updateComplete;
    const row = this.renderRoot.querySelector(`#table-row-${index}`) as HTMLElement;
    if (row) {
      row.focus();
    }
  }

  public async focusOnLoadingContainer() {
    await this.updateComplete;
    const loadingContainer = this.renderRoot.querySelector('#table-loading-container') as HTMLDivElement;
    if (loadingContainer) {
      loadingContainer.focus();
    }
  }

  handleCellHeaderFocus(evt: FocusEvent, currentHoverField: string, index: number) {
    evt.stopPropagation();
    evt.preventDefault();
    this.onHover = true;
    this.currentHoverField = currentHoverField;
    const header = evt.target as HTMLElement;

    // timeout is necessary to wait for icon to show first
    setTimeout(() => {
      if (this.data?.sortDirection === SortOrder.DESC && this.data?.sortAttribute === currentHoverField) {
        const sortIcon = this.renderRoot.querySelector(`#enchanted-data-grid-sort-button-${SortOrder.DESC}-${index}`) as HTMLElement;
        sortIcon.setAttribute('autofocus', 'true');
        sortIcon?.focus();
        header.blur();
      } else {
        const sortIcon = this.renderRoot.querySelector(`#enchanted-data-grid-sort-button-${SortOrder.ASC}-${index}`) as HTMLElement;
        sortIcon?.setAttribute('autofocus', 'true');
        sortIcon?.focus();
        header.blur();
      }
    });
  }

  handleRowFocus(event: FocusEvent, currentHoverIndex: number) {
    event.stopPropagation();
    event.preventDefault();
    this.onRowHover = true;
    this.currentHoverRow = currentHoverIndex;
    this.currentHoverField = '';
    const row = event.target as HTMLElement;
    row.setAttribute('autofocus', 'true');
    const actionButtons = row.querySelectorAll('enchanted-icon-button');
    this.focusedRowActionButtons = Array.from(actionButtons) as EnchantedIconButton[];
  }

  handleRowBlur(event: FocusEvent, index: number) {
    event.stopPropagation();
    event.preventDefault();
    if (index !== this.currentHoverRow) {
      this.onRowHover = false;
      this.currentHoverRow = NaN;
    }
    const row = event.target as HTMLElement;
    row.removeAttribute('autofocus');
  }

  handleTableHeaderTextEnter(e: MouseEvent, tooltip?: string) {
    const textRoot = e.currentTarget as HTMLDivElement;
    // Note: 18 is the width of the sort icon
    if (tooltip && textRoot.parentElement && (textRoot.offsetWidth + 18) >= textRoot.parentElement.scrollWidth) {
      textRoot.setAttribute('title', tooltip || '');
    }
  }

  protected updated(changedProperties: Map<string, unknown>): void {
    super.updated(changedProperties);
    if (changedProperties.has('data')) {
      this.selectedIndex = undefined;
      this.onRowHover = false;
      this.currentHoverRow = NaN;
      this.dispatchEvent(new CustomEvent('enchanted-data-grid-row-click', { // to deselect previous item
        detail: {
          data: undefined
        },
        composed: true,
        bubbles:true 
      }));
    }
  }

  renderTableHeader() {
    try {
      const columnsObj = this.columns as EnchantedDataGridColDef[];
      const columnsObjLength = columnsObj.length;
      if (this.data && this.data?.searchItems
        && this.data?.searchItems.length > 0
        && this.isLoading === false) {
        return html`
          <tr part="${DATA_GRID_PARTS.TABLE_ROW_HEADER_CONTAINER}" role="row" aria-rowindex="1">
          ${this.checkboxSelection === true ? html`
            <th part="${DATA_GRID_PARTS.TABLE_SELECT_ALL_CHECKBOX}">
              <input data-testid="enchanted-data-grid-select-all-checkbox" ?checked=${this.selectAll} @click=${this.handleSelectAll} type="checkbox">
            </th>`
          : ''}
          ${columnsObj.map((header: EnchantedDataGridColDef, index) => {
          let sortHeaderField = header.field.replace('_source.', '');
          const keyForStringify = header.keyForStringify;
          if (keyForStringify) {
            sortHeaderField = `${sortHeaderField}.${keyForStringify}`;
          }
          return html`
            <th
              @mouseenter=${(evt: MouseEvent) => { return this.handleHeaderOnMouseOver(evt, sortHeaderField); }} 
              @mouseleave=${(evt: MouseEvent) => { return this.handleHeaderOnMouseOut(evt); }}
              @focus=${(evt: FocusEvent) => { return this.handleCellHeaderFocus(evt, sortHeaderField, index); }}
              tabindex="0"
              id="enchanted-table-header-${index}"
              part="${DATA_GRID_PARTS.TABLE_HEADER_CONTAINER} ${this.customTableHeaderPart.replace('{index}', index.toString())}"
              @keydown=${(evt: KeyboardEvent) => { return this.handleCellHeaderKeydown(evt, this.data?.sortDirection || SortOrder.ASC, index); }}
              role="columnheader"
              aria-colindex="${this.checkboxSelection === true ? index + 2 : index + 1}"
              aria-label="${header.headerName}">
              <div part="${DATA_GRID_PARTS.TABLE_HEADER_CONTAINER_CHILD}">
                <div
                  part="${DATA_GRID_PARTS.TABLE_HEADER_TEXT_PARENT}"
                  @mouseenter=${(evt: MouseEvent) => { return this.handleTableHeaderTextEnter(evt, header.headerName); }}
                >
                  <span part="${DATA_GRID_PARTS.TABLE_HEADER_TEXT}">${header.headerName}</span>
                </div>
                ${ header.sortEnable ?
                  html`
                    <div part="${DATA_GRID_PARTS.TABLE_SORT_BUTTON_CONTAINER}">
                      <enchanted-icon-button
                        data-testid="enchanted-data-grid-sort-button-${SortOrder.ASC}-${index}"
                        .icon=${html`<icon-arrow-up></icon-arrow-up>`}
                        id="enchanted-data-grid-sort-button-${SortOrder.ASC}-${index}"
                        tabindex=0
                        part="${this.getPartHeaderSort(sortHeaderField, SortOrder.ASC)} ${DATA_GRID_PARTS.TABLE_HEADER_ICON_BUTTON}"
                        exportparts="${ICON_BUTTON_EXPORT_PARTS}"
                        @click=${(evt: MouseEvent) => { return this.handleSort(evt, sortHeaderField, SortOrder.ASC); }}
                        @blur=${(evt: KeyboardEvent) => { return this.handleSortButtonBlur(evt); }}
                        ?disabled=${header.sortEnable === undefined ? false : !header.sortEnable}
                        ariaLabel=${this.getMessage('datagrid.column.sort.asc', [{ '{columnName}': String(header.headerName) }])}
                      >
                      </enchanted-icon-button>
                      <enchanted-icon-button
                        data-testid="enchanted-data-grid-sort-button-${SortOrder.DESC}-${index}"
                        .icon=${html`<icon-arrow-down></icon-arrow-down>`}
                        tabindex=0
                        id="enchanted-data-grid-sort-button-${SortOrder.DESC}-${index}"
                        part="${this.getPartHeaderSort(sortHeaderField, SortOrder.DESC)} ${DATA_GRID_PARTS.TABLE_HEADER_ICON_BUTTON}"
                        exportparts="${ICON_BUTTON_EXPORT_PARTS}"
                        @click=${(evt: MouseEvent) => { return this.handleSort(evt, sortHeaderField, SortOrder.DESC); }}
                        @blur=${(evt: KeyboardEvent) => { return this.handleSortButtonBlur(evt); }}
                        ?disabled=${header.sortEnable === undefined ? false : !header.sortEnable}
                        ariaLabel=${this.getMessage('datagrid.column.sort.desc', [{ '{columnName}': String(header.headerName) }])}
                      >
                      </enchanted-icon-button>
                    </div>`
                : nothing }
              </div>
              ${this.onHover && (index !== columnsObjLength - 1) ? (
                html`
                  <div part=${DATA_GRID_PARTS.TABLE_COLUMN_SEPARATOR} tabindex="-1" aria-hidden="true">
                    <hr part="${DATA_GRID_PARTS.TABLE_COLUMN_SEPARATOR_HR}" />
                  </div>`
              ) : ''}
            </th>
          `;})}
          </tr>
        `;
      }
    } catch {
      this.invalidColDef = true;
    }
  }

  handleTableCellTextEnter(e: MouseEvent, tooltip?: string) {
    const textRoot = e.currentTarget as HTMLTableCellElement;
    if (tooltip && textRoot.offsetWidth < textRoot.scrollWidth) {
      textRoot.setAttribute('title', tooltip || '');
    }
  }

  handleRowClick: HandleItemClickHandler = (_evt, itemData) => {
    const { data, index } = itemData;
    this.selectedIndex = index;
    this.dispatchEvent(new CustomEvent('enchanted-data-grid-row-click', {
      detail: {
        data,
        isKeyboard: _evt instanceof KeyboardEvent,
      },
      bubbles: true,
      composed: true
    }));
  };

  getRowPart(index: number): string {
    return this.selectedIndex === index ? DATA_GRID_PARTS.TABLE_ROW_BODY_CONTAINER_SELECTED : DATA_GRID_PARTS.TABLE_ROW_BODY_CONTAINER;
  }

  renderTableBody() {
    try {
      const columnsObj = this.columns as EnchantedDataGridColDef[];
      if (this.isLoading === true) {
        return html`
          <div
            id="table-loading-container"
            part="${DATA_GRID_PARTS.TABLE_BODY_CONTAINER}" 
            role="status"  d
            tabindex="-1"
            aria-label="${this.getMessage('output.message.loading.search.results')}"
          >
            <enchanted-circular-progress></enchanted-circular-progress>
            <p data-testid="table-loading-text" part="${DATA_GRID_PARTS.TABLE_LOADING_TEXT}">${this.getMessage('output.message.loading.search.results')}</p>
          </div>
        `;
      }
      else if (this.data && this.data?.searchItems && this.data?.searchItems.length > 0) {
        const tableBody = html`
          ${this.data.searchItems.map((data: Record<string, unknown>, index: number) => {
          const rowContent = columnsObj
            .map((header: EnchantedDataGridColDef) => {
              const rowValues = [getObjectValue(this.specialFields, data, header.field, header.keyForStringify)];
              const subtitle = header.subtitle?.(data, header); 

              if (subtitle) rowValues.push(subtitle);
              
              return rowValues.join(', ');
            }).join(', ');

          return html`
            <tr
              role="row"
              tabindex=0
              id="table-row-${index}"
              data-testid="enchanted-table-row-${index}"
              aria-label="${rowContent}"
              part="${this.getRowPart(index)}"
              @mouseenter=${(evt: MouseEvent) => { return this.handleRowOnMouseOver(evt, index); }} 
              @mouseleave=${(evt: MouseEvent) => { return this.handleRowOnMouseOut(evt, index); }} 
              @focus=${(evt: FocusEvent) => { return this.handleRowFocus(evt, index); }}
              @blur=${(evt: FocusEvent) => { return this.handleRowBlur(evt, index); }}
              @keydown=${(evt: KeyboardEvent) => { return this.handleBodyRowKeydown(evt, index); }}
              @click=${this.isRowClickable ? (evt: MouseEvent) => {
                return this.handleRowClick(evt, { data, index });
                } : nothing
              }
              aria-rowindex="${index + 2}"
            >
              ${this.checkboxSelection === true ? html`
              <td part="${DATA_GRID_PARTS.TABLE_SELECT_CHECKBOX_CONTAINER}" role="gridcell">
                <input
                  @click=${(evt: MouseEvent) => { return this.handleSelection(evt, index); }}
                  part=${this.getPartRowCheckbox(index)} 
                  type="checkbox"
                  data-testid="enchanted-data-grid-select-checkbox-${index}"
                  ?checked=${this.isItemSelected(index) || this.selectAll}
                >
              </td>`: ''}
              ${columnsObj.map((header: EnchantedDataGridColDef, ind: number) => {
              let cellValue = getObjectValue(this.specialFields, data, header.field, header.keyForStringify);
              let tooltip: string;
                if (header.tooltip) {
                  tooltip	= header.tooltip;
                } else {
                  tooltip =  getObjectValue(this.specialFields, data, header.field, header.keyForStringify);
                }
              const avatarName = getFormattedString(getObjectValue(this.specialFields, data, header.iconTypeTooltip));
              return html`
              <td 
                part="${
                  header.subtitle && header.subtitle(data, header)
                  ? DATA_GRID_PARTS.TABLE_CELL_CONTAINER_MULTI_LINES
                  : DATA_GRID_PARTS.TABLE_CELL_CONTAINER
                } ${this.customeTableCellPart.replace('{index}', ind.toString())}"
                role="gridcell"
              >
                <div part="${DATA_GRID_PARTS.TABLE_COLUMN_AUTHORING_DIV.replace('{index}', ind.toString())}">
                  <div part="${DATA_GRID_PARTS.TABLE_COLUMN_AUTHORING_DIV_0.replace('{index}', ind.toString())}">
                    ${header.avatar ? html`
                      <enchanted-item-type-avatar
                        title=${avatarName}
                        itemType=${getObjectValue(this.specialFields, data, header.avatarType, header.keyForStringify)}
                        imageUrl=${getObjectValue(this.specialFields, data, header.thumbnailUrl)}
                        exportparts="${ITEM_TYPE_AVATAR_EXPORT_PARTS}"
                        aria-label=${avatarName}
                      />` 
                      : ''}
                  </div>
                  <div
                    part="${DATA_GRID_PARTS.TABLE_COLUMN_AUTHORING_DIV_1.replace('{index}', ind.toString())}"
                    @mouseenter=${(evt: MouseEvent) => { return this.handleTableCellTextEnter(evt, tooltip); }}
                    data-testid=${getObjectValue(this.specialFields, data, header.field, header.keyForStringify)}
                  >
                    ${
                      header.isLink && header.isLink(data, header)
                      ? html`
                        <a
                          href="#"
                          @click=${(evt: MouseEvent) => { return header.click && header.click(evt, { data, column: header }); }}
                          part="${DATA_GRID_PARTS.TABLE_CELL_LINK}"
                          tabindex="-1"
                        >
                          <span part="${DATA_GRID_PARTS.TABLE_CELL_TEXT}">${cellValue}</span>
                        </a>
                        ${
                          header.subtitle && header.subtitle(data, header)
                          ? html`
                            <p part="${DATA_GRID_PARTS.TABLE_CELL_SUBTITLE}">${header.subtitle(data, header)}</p>
                          ` 
                          : nothing
                        }
                      `
                      : html`
                        <span
                          @click=${(evt: MouseEvent) => { return header.click && header.click(evt, { data, column: header }); }}
                          part="${DATA_GRID_PARTS.TABLE_CELL_TEXT}"
                          data-testid="enchanted-data-grid-cell-text-${header.headerName?.replace(' ', '_')}-${index}"
                        >${cellValue}
                        </span>
                      `
                    }
                  </div>
                  <div 
                    part="${
                      (header.actions && header.actions.length > 0) 
                        ? DATA_GRID_PARTS.TABLE_ACTION_BUTTONS_CONTAINER 
                        : ''
                    } ${
                      DATA_GRID_PARTS.TABLE_COLUMN_AUTHORING_DIV_2.replace('{index}', ind.toString())
                    }"
                  >
                      ${header.actions?.length ? header.actions?.map((item, itemIndex) => {
                          item.isVisible = item.isVisible ?? (() => { return true; });

                          const isActionItemVisible = item.isVisible(data, header);
                          if (!isActionItemVisible) {
                            return nothing;
                          }

                          if (item.menu && item.menu.length > 0) {
                            const visibleMenuItems = this.getVisibleMenuItems(item.menu, data, header);

                            if (visibleMenuItems.length > 1) {
                              return html`
                                <div part="${DATA_GRID_PARTS.TABLE_COLUMN_AUTHORING_DIV_3.replace('{index}', ind.toString())}">
                                  <div part=${`${this.getPartActionButton(index)} ${DATA_GRID_PARTS.TABLE_ACTION_ICON_BUTTON_MENU}`} >
                                      <enchanted-menu 
                                        data-testid="enchanted-data-grid-menu-${index}-${ind}-${itemIndex}"
                                        exportparts="
                                        ${Object.values(MENU_PARTS).join(',')},
                                        ${Object.values(MENU_ITEM_PARTS).join(',')},
                                        ${Object.values(LIST_PARTS).join(',')},
                                        ${Object.values(BUTTON_PARTS).join(',')},
                                        ${Object.values(LIST_ITEM_PARTS).join(',')}
                                        "
                                        @change=${(evt: CustomEvent) => { return this.handleOverFlowMenu(evt, item.menu || [], { data, column: header }); }}
                                        menuDelay=0
                                      >
                                        <div slot="target-anchor">
                                        ${item.icon ? html`
                                            <enchanted-tooltip tooltiptext=${item.text} exportparts=${TOOLTIP_EXPORT_PARTS}>
                                              <enchanted-icon-button
                                                slot="target"
                                                @keydown=${(evt: KeyboardEvent) => {
                                                  return this.handleActionItemKeydown(evt, index, ind, itemIndex, true);
                                                }}
                                                tabindex=0
                                                data-testid="enchanted-data-grid-action-item-button-${index}-${ind}-${itemIndex}"
                                                id="enchanted-data-grid-action-item-button-${index}-${ind}-${itemIndex}"
                                                imgurl="${item.icon}"
                                                exportparts="${ICON_BUTTON_EXPORT_PARTS}"
                                                @focus=${(evt: FocusEvent) => { return this.handleButtonFocus(evt); }}
                                                @blur=${(evt: FocusEvent) => { return this.handleButtonBlur(evt); }}
                                                part=${DATA_GRID_PARTS.TABLE_CELL_ICON_BUTTON}
                                                ariaLabel=${item.text}
                                              >
                                              </enchanted-icon-button>
                                            </enchanted-tooltip>
                                          ` : html`
                                              <div
                                                title=${item.text}
                                                @keydown=${(evt: KeyboardEvent) => {
                                                  return this.handleActionItemKeydown(evt, index, ind, itemIndex, true);
                                                }}
                                                tabindex=0
                                                data-testid="enchanted-data-grid-action-item-button-${index}-${ind}-${itemIndex}"
                                                id="enchanted-data-grid-action-item-button-${index}-${ind}-${itemIndex}"
                                                @focus=${(evt: FocusEvent) => { return this.handleButtonFocus(evt); }}
                                                @blur=${(evt: FocusEvent) => { return this.handleButtonBlur(evt); }}
                                                part=${DATA_GRID_PARTS.TABLE_CELL_TEXT_ACTION}
                                              >
                                                ${item.text}
                                              </div>
                                            `
                                          }
                                        </div>
                                        <div slot="menu-items">
                                          ${visibleMenuItems.map((menuItem: ActionMenu, menuIndex: number) => {
                                            return html`
                                              <enchanted-menu-item 
                                                text="${menuItem.text}" 
                                                tabindex=0
                                                data-testid="enchanted-data-grid-menu-item-${index}-${ind}-${itemIndex}-${menuIndex}"
                                                id="enchanted-data-grid-menu-item-${index}-${ind}-${itemIndex}-${menuIndex}"
                                                exportparts="${
                                                  Object.values(MENU_ITEM_PARTS).join(',')},
                                                  ${Object.values(LIST_ITEM_PARTS).join(',')
                                                }" 
                                                value=${menuItem.text}
                                                @keydown=${(evt: KeyboardEvent) => { return this.handleMenuItemKeydown(evt, index, ind, menuIndex, itemIndex, item.menu ? item.menu.length : 0); }}
                                                part=${DATA_GRID_PARTS.TABLE_HEADER_MENU_ITEM}
                                              >
                                              </enchanted-menu-item>
                                            `;
                                          })}
                                        </div>
                                    </enchanted-menu>
                                  </div>
                                </div>
                              `;
                            } else if (visibleMenuItems.length === 1) {
                              // Render as a single action button if only one menu item is visible
                              const singleActionItem = visibleMenuItems[0];
                              return html`
                                <div part="${DATA_GRID_PARTS.TABLE_COLUMN_AUTHORING_DIV_3.replace('{index}', ind.toString())}">
                                  <div part=${this.getPartActionButton(index)} >
                                    ${singleActionItem.icon ? html`
                                        <enchanted-tooltip tooltiptext=${singleActionItem.text} exportparts=${TOOLTIP_EXPORT_PARTS}>
                                          <enchanted-icon-button 
                                            slot="target"
                                            data-testid="enchanted-data-grid-action-item-button-${index}-${ind}-${itemIndex}"
                                            id="enchanted-data-grid-action-item-button-${index}-${ind}-${itemIndex}"
                                            imgurl="${singleActionItem.icon}"
                                            tabindex=0
                                            exportparts="${ICON_BUTTON_EXPORT_PARTS}"
                                            @click=${(evt: MouseEvent) => { 
                                              evt.stopPropagation();
                                              return singleActionItem.click && singleActionItem.click(evt, { data, column: header }); 
                                            }}
                                            @keydown=${(evt: KeyboardEvent) => {
                                              return this.handleActionItemKeydown(evt, index, ind, itemIndex);
                                            }}
                                            @focus=${(evt: FocusEvent) => { return this.handleButtonFocus(evt); }}
                                            @blur=${(evt: FocusEvent) => { return this.handleButtonBlur(evt); }}
                                            part=${DATA_GRID_PARTS.TABLE_CELL_ICON_BUTTON}
                                            ariaLabel=${singleActionItem.text}>
                                          </enchanted-icon-button>
                                        </enchanted-tooltip>  
                                        ` 
                                        : html`<div
                                            title=${singleActionItem.text}
                                            tabindex=0
                                            data-testid="enchanted-data-grid-action-item-button-${index}-${ind}-${itemIndex}"
                                            id="enchanted-data-grid-action-item-button-${index}-${ind}-${itemIndex}"
                                            @click=${(evt: MouseEvent) => { 
                                              evt.stopPropagation();
                                              return singleActionItem.click && singleActionItem.click(evt, { data, column: header }); 
                                            }}
                                            @keydown=${(evt: KeyboardEvent) => {
                                              return this.handleActionItemKeydown(evt, index, ind, itemIndex);
                                            }}
                                            @focus=${(evt: FocusEvent) => { return this.handleButtonFocus(evt); }}
                                            @blur=${(evt: FocusEvent) => { return this.handleButtonBlur(evt); }}
                                            part=${DATA_GRID_PARTS.TABLE_CELL_TEXT_ACTION}
                                          >
                                            ${singleActionItem.text}
                                          </div>
                                        `}
                                  </div>
                                </div>
                              `;
                            } else {
                              return nothing;
                            }

                          } else {
                            // Rendering for columns without menu
                            return html`
                              <div part="${DATA_GRID_PARTS.TABLE_COLUMN_AUTHORING_DIV_3.replace('{index}', ind.toString())}">
                                  <div part=${this.getPartActionButton(index)} >
                                      ${item.icon ? html`
                                        <enchanted-tooltip tooltiptext=${item.text} exportparts=${TOOLTIP_EXPORT_PARTS}>
                                          <enchanted-icon-button 
                                            slot="target"
                                            data-testid="enchanted-data-grid-action-item-button-${index}-${ind}-${itemIndex}"
                                            id="enchanted-data-grid-action-item-button-${index}-${ind}-${itemIndex}"
                                            imgurl="${item.icon}"
                                            tabindex=0
                                            exportparts="${ICON_BUTTON_EXPORT_PARTS}"
                                            @click=${(evt: PointerEvent) => { 
                                              evt.stopPropagation();
                                              data.isMouseEvent = evt.pointerType === 'mouse';
                                              return item.click && item.click(evt, { data, column: header }); 
                                            }}
                                            @keydown=${(evt: KeyboardEvent) => {
                                              return this.handleActionItemKeydown(evt, index, ind, itemIndex);
                                            }}
                                            @focus=${(evt: FocusEvent) => { return this.handleButtonFocus(evt); }}
                                            @blur=${(evt: FocusEvent) => { return this.handleButtonBlur(evt); }}
                                            part=${DATA_GRID_PARTS.TABLE_CELL_ICON_BUTTON}
                                            ariaLabel=${item.text}>
                                          </enchanted-icon-button>
                                        </enchanted-tooltip>
                                        ` 
                                          : html`<div
                                              title=${item.text}
                                              tabindex=0
                                              data-testid="enchanted-data-grid-action-item-button-${index}-${ind}-${itemIndex}"
                                              id="enchanted-data-grid-action-item-button-${index}-${ind}-${itemIndex}"
                                              @click=${(evt: MouseEvent) => { 
                                                evt.stopPropagation();
                                                return item.click && item.click(evt, { data, column: header }); 
                                              }}
                                              @keydown=${(evt: KeyboardEvent) => {
                                                return this.handleActionItemKeydown(evt, index, ind, itemIndex);
                                              }}
                                              @focus=${(evt: FocusEvent) => { return this.handleButtonFocus(evt); }}
                                              @blur=${(evt: FocusEvent) => { return this.handleButtonBlur(evt); }}
                                              part=${DATA_GRID_PARTS.TABLE_CELL_TEXT_ACTION}
                                            >
                                              ${item.text}
                                            </div>
                                          `}
                                  </div>
                              </div>
                            `;
                          }
                      }) : ''}
                  </div>
                </div>
            </td>
          `;})}
          </tr>`;})}`;
        return tableBody;
      }
      else if (this.data?.total === 0) {
        return html`
          <div part="${DATA_GRID_PARTS.TABLE_BODY_CONTAINER}">         
            <icon-items-search-empty size="128" color="rgba(0, 0, 0, 0.38)"></icon-items-search-empty>
            <p data-testid="table-result-label" part="${DATA_GRID_PARTS.TABLE_RESULT_LABEL}">${this.getMessage('output.message.no.results.found')}</p>
            <p part="${DATA_GRID_PARTS.TABLE_RESULT_DESCRIPTION}">
            ${unsafeHTML(this.getMessage('output.message.no.match.found', [{ '{search_term}': String(this.data?.searchValue) }]))}
            </p>
          </div>
        `;
      } else if (this.hasMiddlewareError === true) {
        debug('%s, %s', this.getMessage('output.message.no.engine.found'), this.getMessage('output.message.contact.admin'));
        return html`
          <div part="${DATA_GRID_PARTS.TABLE_BODY_CONTAINER}">
            <icon-items-search-empty size="128" color="rgba(0, 0, 0, 0.38)"></icon-items-search-empty>
            <p data-testid="table-result-label" part="${DATA_GRID_PARTS.TABLE_RESULT_LABEL}">${this.getMessage('output.message.no.engine.found')}</p>
            <p part="${DATA_GRID_PARTS.TABLE_RESULT_DESCRIPTION}">
            ${this.getMessage('output.message.contact.admin')}
            </p>
          </div>
        `;
      } else if (this.hasContentSourceAvailable === true) {
        debug('%s, %s', this.getMessage('output.message.no.content.sources.found'), this.getMessage('output.message.contact.admin'));
        return html`
          <div part="${DATA_GRID_PARTS.TABLE_BODY_CONTAINER}"> 
            <icon-items-search-empty size="128" color="rgba(0, 0, 0, 0.38)"></icon-items-search-empty>
            <p data-testid="table-result-label" part="${DATA_GRID_PARTS.TABLE_RESULT_LABEL}">${this.getMessage('output.message.no.content.sources.found')}</p>
            <p part="${DATA_GRID_PARTS.TABLE_RESULT_DESCRIPTION}">
            ${this.getMessage('output.message.contact.admin')}
            </p>
          </div>
        `;
      } else {
        return html`
          <div part="${DATA_GRID_PARTS.TABLE_BODY_CONTAINER}">
            <icon-items-search-initial size="128" color="rgba(0, 0, 0, 0.38)"></icon-items-search-initial>
            <p data-testid="table-result-label" part="${DATA_GRID_PARTS.TABLE_RESULT_LABEL}">${this.getMessage('authoring.data.grid.initial.message')}</p>
            <p part="${DATA_GRID_PARTS.TABLE_RESULT_DESCRIPTION}">
                ${this.isFeatureTagCloudEnabled
                  ? this.getMessage('output.message.looking.for.something')
                  : this.getMessage('authoring.data.grid.message.looking.for.something')}
            </p>
          </div>
        `;
      }
    } catch {
      this.invalidColDef = true;
    }
  }

  render() {
    return this.invalidColDef
      ? html`<p data-testid="enchanted-invalid-columns-label">${this.getMessage('data.grid.invalid.column.definition')}</p>`
      : html`
        <table 
          part="${DATA_GRID_PARTS.TABLE_CONTAINER}" 
          role="grid" 
          tabindex="-1" 
          aria-colcount="${this.columns ? this.columns.length + (this.checkboxSelection === true ? 1 : 0) : 1}"
          aria-rowcount="${this.data?.searchItems ? this.data.searchItems.length + 1 : 2}"
          aria-busy="${this.isLoading === true}"
        >
          <thead>
            ${this.renderTableHeader()}
          </thead>
          <tbody>
            ${this.renderTableBody()}
          </tbody>
        </table>
      `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'enchanted-data-grid-generic': EnchantedDataGridGeneric
  }
}
