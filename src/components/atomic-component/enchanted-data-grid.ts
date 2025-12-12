// eslint-why - data passed in component has to be generic
/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { html, LitElement, nothing } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';
import { consume } from '@lit/context';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import createDebug from 'debug';

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';
import './enchanted-icon-button';
import './enchanted-item-type-avatar';
import './enchanted-menu';
import './enchanted-menu-item';
import './enchanted-svg-icon';
import './enchanted-circular-progress';
import '../atomic-component/enchanted-tooltip';

// Helper imports
import { ChangeFocusValue, EnchantedDataGridColDef, OverflowList, SortOrder } from '../../types/enchanted-data-grid';
import { getMenuItemCount, getObjectValue, getOverflowItemProperty, getActionLink, getFilteredOverflowList } from '../../utils/commonUtils';
import { isLTR, getFormattedString } from '../localization';
import { LIST_ITEM_PARTS, LIST_PARTS, MENU_ITEM_PARTS, MENU_PARTS, DATA_GRID_PARTS } from '../../types/cssClassEnums';
import { ICON_BUTTON_EXPORT_PARTS, ITEM_TYPE_AVATAR_EXPORT_PARTS } from '../exportParts';
import { enchantedDataGridContext, EnchantedDataGridContextType } from './contexts/enchanted-data-grid-context';
import { EnchantedInputFieldType } from '../../types/enchanted-select';
import { TOOLTIP_EXPORT_PARTS } from '../exportParts';
import { TOOLTIP_PLACEMENT } from '../../types/cssClassEnums';

// Icon imports
import '@hcl-software/enchanted-icons-web-component/dist/apps/es/items--search--empty';
import '@hcl-software/enchanted-icons-web-component/dist/apps/es/items--search--initial';

import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/arrow--up';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/arrow--down';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/edit';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/overflow-menu--horizontal';

import { KeyboardInputKeys } from '../../utils/keyboardEventKeys';

const debug = createDebug('enchanted-web-components:components:ac:enchanted-data-grid.ts');

@customElement('enchanted-data-grid')
export class EnchantedDataGrid extends EnchantedAcBaseElement {

	@property()
  private isLoading: string = 'false';

	@state()
	private invalidColDef: boolean = false;

	@state()
	private onHover: boolean = true;

	@state()
	private onRowHover: boolean = false;

	@consume({ context: enchantedDataGridContext, subscribe: true })
	@state()
	public enchantedDataGridContext?: EnchantedDataGridContextType;

	@property({ type: String })
	colDef = '';

	@property()
	private hasMiddlewareError: string = 'false';

	@property()
	private hasContentSourceAvailable: string = 'false';

	@property()
	private checkboxSelection: string = 'false';

	@property()
	customTableHeaderPart: string = '';

	@property()
  customTableCellPart: string = '';

	@property()
	private isFeatureTagCloudEnabled: boolean = false; // isFeatureEnabled(EnumFeatures.TAG_CLOUD)

  @property()
	private specialFields: string[] = [];

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
	private lastFocusedRow: string = '';

	@property({ type: Boolean }) 
	customRowNavigation = false;

	connectedCallback(): void {
	  super.connectedCallback();
	  try {
			JSON.parse(this.colDef) as EnchantedDataGridColDef[];
	  } catch {
	    this.invalidColDef = true;
	  }
	}

	disconnectedCallback(): void {
	  super.disconnectedCallback();
	}

	handleHeaderOnMouseOver(event: MouseEvent, currentHoverField: string) {
	  event.stopPropagation();
	  this.onHover = true;
	  this.currentHoverField = currentHoverField;
	}

	handleHeaderOnMouseOut(event: MouseEvent) {
	  event.stopPropagation();
	  this.onHover = true;
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

	handleRowOnMouseOut(event: MouseEvent) {
	  event.stopPropagation();
	  this.onRowHover = false;
	  const leftRow = this.renderRoot.querySelector(`#table-row-${this.currentHoverRow}`) as HTMLElement;
	  if (leftRow) {
	    leftRow.removeAttribute('part');
	    leftRow.setAttribute('part', DATA_GRID_PARTS.TABLE_ROW_BODY_CONTAINER);
	  }
	}

	handleCellTooltip(e: MouseEvent, cellValue: string, tooltip: string) {
	  const cell = e.currentTarget as HTMLTableCellElement;
	  if (cell.offsetWidth < cell.scrollWidth && cell.firstElementChild) {
	    cell.firstElementChild.setAttribute('title', cellValue || '');
	    cell.firstElementChild.innerHTML = tooltip;
	  }
	}

	getPartHeaderSort(headerField: string, sortDirection: SortOrder) {
	  if (sortDirection === SortOrder.ASC) {
	    if (this.enchantedDataGridContext?.sortDirection === SortOrder.DESC && this.enchantedDataGridContext?.sortAttribute === headerField) {
	      return DATA_GRID_PARTS.TABLE_HEADER_ASC_SORT_BUTTON_HIDDEN;
	    }
	    if (this.onHover && headerField === this.currentHoverField || (
	      this.enchantedDataGridContext?.sortAttribute === headerField
				&& this.enchantedDataGridContext?.sortDirection === SortOrder.ASC)
	    ) {
	      return DATA_GRID_PARTS.TABLE_HEADER_SORT_BUTTON;
	    }
	    return DATA_GRID_PARTS.TABLE_HEADER_ASC_SORT_BUTTON_HIDDEN;
	  }
	  if (sortDirection === SortOrder.DESC) {
	    if (this.enchantedDataGridContext?.sortDirection === SortOrder.ASC
				|| this.enchantedDataGridContext?.sortDirection === undefined
				|| (this.enchantedDataGridContext?.sortAttribute !== headerField
					&& this.enchantedDataGridContext?.sortDirection === SortOrder.DESC)
	    ) {
	      return DATA_GRID_PARTS.TABLE_HEADER_DESC_SORT_BUTTON_HIDDEN;
	    }
	    if ((this.onHover && headerField === this.currentHoverField && this.enchantedDataGridContext?.sortDirection)
				|| (this.enchantedDataGridContext?.sortAttribute === headerField
					&& this.enchantedDataGridContext?.sortDirection === SortOrder.DESC)
	    ) {
	      return DATA_GRID_PARTS.TABLE_HEADER_SORT_BUTTON;
	    }
	    return DATA_GRID_PARTS.TABLE_HEADER_DESC_SORT_BUTTON_HIDDEN;
	  }
	}

	private async handleSort(evt: Event, field: string, sort: string) {
	  evt.stopPropagation();
	  evt.preventDefault();
	  let sortDirection = sort;
	  if (this.enchantedDataGridContext?.sortAttribute === field &&
			this.enchantedDataGridContext?.sortDirection === SortOrder.ASC) {
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
	      value: this.enchantedDataGridContext?.searchItems && this.enchantedDataGridContext?.searchItems[index],
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
	  if (this.enchantedDataGridContext?.selectedSearchItems && this.enchantedDataGridContext?.searchItems) {
	    return this.enchantedDataGridContext?.selectedSearchItems.some(selectedId => {
	      if (this.enchantedDataGridContext?.searchItems && this.enchantedDataGridContext?.searchItems[index]) {
	        return selectedId._id === this.enchantedDataGridContext?.searchItems[index]?._id;
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
			(this.enchantedDataGridContext?.selectedSearchItems && this.enchantedDataGridContext?.searchItems &&
				this.enchantedDataGridContext?.selectedSearchItems.includes(this.enchantedDataGridContext?.searchItems[index]))
			|| (this.isItemSelected(index))
	  ) {
	    return '';
	  }
	  return DATA_GRID_PARTS.TABLE_SELECT_CHECKBOX;
	}

	getPartActionButton(index: number) {
	  if ((this.onRowHover || this.tableHover === 'true') && this.currentHoverRow === index) {
	    return '';
	  }
	  return DATA_GRID_PARTS.TABLE_ACTION_ICON_BUTTON;
	}

	// ignoring this function from test coverage as it will break the wdio test since this changes the window location
	/* istanbul ignore next */
	handleOverFlowMenu(evt: CustomEvent) {
	  const query = `${window.location.href.split('query')[1]}`;
	  if (evt.detail.value && evt.detail.text === `${this.getMessage('authoring.datagrid.overflow.list.read')}`) {
	    window.location.href = `${evt.detail.value}&query${query}`;
	  }
	  if (evt.detail.value && evt.detail.text === `${this.getMessage('authoring.datagrid.overflow.list.preview')}`) {
	    window.open(evt.detail.value, '_blank')?.focus();
	  }
	  if (evt.detail.value && evt.detail.text === `${this.getMessage('authoring.datagrid.overflow.list.delete')}`) {
	    this.dispatchEvent(new CustomEvent('delete', {
	      bubbles: true,
	      composed: true,
	      detail: {
	        value: evt.detail.menuObject,
	      }
	    }));
	  }
	}

	// ignoring this function from test coverage as it will break the wdio test since this changes the window location
	/* istanbul ignore next */
	handleSingleMenuAction(evt: MouseEvent, data: any, header: EnchantedDataGridColDef, actionName: String): void {
	  evt.stopPropagation();
	  evt.preventDefault();
	  const actionLink = getActionLink(this.specialFields, data, header);
	  if (actionLink) {
	    const query = `${window.location.href.split('query')[1]}`;
	    if (actionName && actionName === `${this.getMessage('authoring.datagrid.overflow.list.read')}`) {
	      window.location.href = `${actionLink}&query${query}`;
	    } else if (actionName && actionName === `${this.getMessage('authoring.datagrid.overflow.list.preview')}`) {
	      window.open(actionLink, '_blank')?.focus();
	    }
	  }
	  if (actionName && actionName === `${this.getMessage('authoring.datagrid.overflow.list.delete')}`) {
	    this.dispatchEvent(new CustomEvent('delete', {
	      bubbles: true,
	      composed: true,
	      detail: {
	        value: data,
	      }
	    }));
	  }
	}

	// ignoring this function from test coverage as it will break the wdio test since this changes the window location
	/* istanbul ignore next */
	handleSingleMenuKeydown(evt: KeyboardEvent, index: number) {
	  evt.stopPropagation();
	  evt.preventDefault();
	  const singleActionButton = evt.target as HTMLElement;
	  const itemsLength = this.enchantedDataGridContext?.searchItems?.length;
	  const moveToEditIcon = isLTR() ? KeyboardInputKeys.ARROW_LEFT : KeyboardInputKeys.ARROW_RIGHT;
	  if (evt.key === KeyboardInputKeys.ENTER) {
	    singleActionButton.click();
	  }
	  if (evt.key === moveToEditIcon || (evt.shiftKey && evt.key === KeyboardInputKeys.TAB	)) {
	    const editIcon = this.renderRoot.querySelector(`#enchanted-data-grid-edit-button-${index}`) as HTMLElement;
	    editIcon?.focus();
	    return;
	  }
	  if (evt.key === KeyboardInputKeys.ARROW_DOWN || (evt.key === KeyboardInputKeys.TAB && !evt.shiftKey)) {
	    if (index + 1 === itemsLength) {
	      this.dispatchEvent(new CustomEvent('change-focus', {
	        bubbles: true,
	        composed: true,
	        detail: {
	          value: ChangeFocusValue.PAGINATION,
	        }
	      }));
	      this.onRowHover = false;
	  		this.currentHoverRow = NaN;
	    } else {
	      (this.renderRoot.querySelector(`#table-row-${index + 1}`) as HTMLElement).focus();
	    }
	  }
	}

	// ignoring this function from test coverage as it will break the wdio test since this changes the window location
	/* istanbul ignore next */
	handleItemEdit(evt: MouseEvent, editLink: string) {
	  evt.stopPropagation();
	  evt.preventDefault();
	  const query = `${window.location.href.split('query')[1]}`;
	  if (editLink) {
	    window.location.href = `${editLink}&query${query}`;
	  }
	}

	// ignoring this function from test coverage as it will break the wdio test since this changes the window location
	/* istanbul ignore next */
	handleItemEditKeydown(evt: KeyboardEvent, editLink: string, index: number) {
	  evt.stopPropagation();
	  evt.preventDefault();
	  const moveToOverflowIcon = isLTR() ? KeyboardInputKeys.ARROW_RIGHT : KeyboardInputKeys.ARROW_LEFT;
	  const moveToRow = isLTR() ? KeyboardInputKeys.ARROW_LEFT : KeyboardInputKeys.ARROW_RIGHT;
	  if (evt.key === KeyboardInputKeys.ENTER) {
	    const query = `${window.location.href.split('query')[1]}`;
	    if (editLink) {
	      window.location.href = `${editLink}&query${query}`;
	    }
	  }
	  if (evt.key === moveToOverflowIcon || (evt.key === KeyboardInputKeys.TAB && !evt.shiftKey)) {
	    const menuIcon = this.renderRoot.querySelector(`#enchanted-data-grid-overflow-button-${index}`) as HTMLElement;
	    if (menuIcon) {
	      menuIcon?.focus();
	    }
	    const actionIcon = this.renderRoot.querySelector(`#enchanted-data-grid-action-button-${index}`) as HTMLElement;
	    if (actionIcon) {
	      actionIcon?.focus();
	    }
	  }
	  if (evt.key === moveToRow || (evt.shiftKey && evt.key === KeyboardInputKeys.TAB)) {
	    const row = this.renderRoot.querySelector(`#table-row-${index}`) as HTMLElement;
	    row?.focus();
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
	  // const button = evt.target as HTMLElement;
	  // button.removeAttribute('autofocus');
	}

	// this throw error on testing environment
	/* istanbul ignore next */
	handleItemMenuKeydown(evt: KeyboardEvent, index: number) {
	  evt.stopPropagation();
	  evt.preventDefault();
	  const moreMenuIcon = evt.target as HTMLElement;
	  let menu = undefined;
	  let visibility = '';
	  const itemsLength = this.enchantedDataGridContext?.searchItems?.length;
	  const presentationMenu = (moreMenuIcon.parentElement?.parentElement as LitElement)?.renderRoot?.lastElementChild as HTMLElement;
	  menu = presentationMenu.getAttribute('role') === 'presentation' ? presentationMenu.lastElementChild : undefined;
	  const moveToEditIcon = isLTR() ? KeyboardInputKeys.ARROW_LEFT : KeyboardInputKeys.ARROW_RIGHT	;
	  if (menu) {
	    const style = window.getComputedStyle(menu);
	    visibility = style.getPropertyValue('visibility');
	  }
	  if (evt.key === KeyboardInputKeys.ENTER) {
	    this.programmaticClick = true;
	    moreMenuIcon.click();
	  }
	  if (evt.key === moveToEditIcon || (evt.shiftKey && evt.key === KeyboardInputKeys.TAB)) {
	    if (visibility === 'visible') {
	      this.programmaticClick = true;
	      moreMenuIcon.click();
	    }
	    const editIcon = this.renderRoot.querySelector(`#enchanted-data-grid-edit-button-${index}`) as HTMLElement;
	    editIcon?.focus();
	    return;
	  }
	  if (evt.key === KeyboardInputKeys.ARROW_DOWN || (evt.key === KeyboardInputKeys.TAB && !evt.shiftKey)) {
	    if (visibility === 'visible') {
	      const menuList = this.renderRoot.querySelector(`#enchanted-data-grid-menu-item-0-${index}`) as HTMLElement;
	      menuList?.focus();
	    } else {
	      if (index + 1 === itemsLength) {
	        this.dispatchEvent(new CustomEvent('change-focus', {
	          bubbles: true,
	          composed: true,
	          detail: {
	            value: ChangeFocusValue.PAGINATION,
	          }
	      	}));
	        this.onRowHover = false;
	  			this.currentHoverRow = NaN;
	      } else {
	        (this.renderRoot.querySelector(`#table-row-${index + 1}`) as HTMLElement).focus();
	      }
	    }
	  }
	}

	// this code is unreachable since handleItemMenuKeydown throws error on testing environment
	/* istanbul ignore next */
	handleMenuItemKeydown(evt: KeyboardEvent, index: number, rowIndex: number) {
	  evt.stopPropagation();
	  evt.preventDefault();
	  const menuItem = evt.target as HTMLElement;
	  if (evt.key === KeyboardInputKeys.ENTER) {
	    const listMenu = (menuItem as LitElement)?.renderRoot?.querySelector('enchanted-list-item') as HTMLElement;
	    listMenu.click();
	  }
	  if (evt.key === KeyboardInputKeys.ARROW_DOWN || (evt.key === KeyboardInputKeys.TAB && !evt.shiftKey)) {
	    const belowMenu = this.renderRoot.querySelector(`#enchanted-data-grid-menu-item-${index + 1}-${rowIndex}`) as HTMLElement;
	    belowMenu?.focus();
	  }
	  if (evt.key === KeyboardInputKeys.ARROW_UP || (evt.shiftKey && evt.key === KeyboardInputKeys.TAB)) {
	    if (index === 0) {
	      const menuIcon = this.renderRoot.querySelector(`#enchanted-data-grid-overflow-button-${rowIndex}`) as HTMLElement;
	      menuIcon.focus();
	    } else {
	      const aboveMenu = this.renderRoot.querySelector(`#enchanted-data-grid-menu-item-${index - 1}-${rowIndex}`) as HTMLElement;
	      aboveMenu?.focus();
	    }

	  }
	}

	handleCellHeaderSortAscKeydown(evt: KeyboardEvent, field: string, sort: string, index: number) {
	  evt.stopPropagation();
	  evt.preventDefault();
	  const columnsObj = JSON.parse(this.colDef) as EnchantedDataGridColDef[];
	  const moveToNextHeader = isLTR() ? KeyboardInputKeys.ARROW_RIGHT : KeyboardInputKeys.ARROW_LEFT;
	  const moveToPreviousHeader = isLTR() ? KeyboardInputKeys.ARROW_LEFT : KeyboardInputKeys.ARROW_RIGHT;
	  if ((evt.key === KeyboardInputKeys.TAB && !evt.shiftKey) || evt.key === moveToNextHeader) {
	    if (columnsObj.length === (index + 1)) {
	      const firstRow = this.renderRoot.querySelector(`#table-row-0`) as HTMLElement;
	      firstRow.focus();
	    }
	    const nextHeader = this.renderRoot.querySelector(`#enchanted-table-header-${index + 1}`) as HTMLElement;
	    if (nextHeader) {
	      nextHeader.focus();
	    }
	  }
	  if (evt.key === moveToPreviousHeader || (evt.shiftKey && evt.key === KeyboardInputKeys.TAB)) {
	    if (index === 0) {
	      const query = document.querySelector(`#enchanted-authoring-search-input-query`) as HTMLElement;
	      const input = (query.firstElementChild as LitElement)?.renderRoot?.querySelector(`#input-queryString`) as HTMLElement;
	      if (input) {
	        input.focus();
	        this.currentHoverField = '';
	      }
	    }
	    const nextHeader = this.renderRoot.querySelector(`#enchanted-table-header-${index - 1}`) as HTMLElement;
	    if (nextHeader) {
	      nextHeader.focus();
	    }
	  }
	  if (evt.key === KeyboardInputKeys.ARROW_DOWN) {
	    const nextRow = this.renderRoot.querySelector(`#table-row-0`) as HTMLElement;
	    if (nextRow) {
	      nextRow.focus();
	      this.currentHoverField = '';
	    }
	  }
	  if (evt.key === KeyboardInputKeys.ENTER) {
	    this.handleSort(evt, field, sort);
	  }
	}

	handleCellHeaderSortDescKeydown(evt: KeyboardEvent, field: string, sort: string, index: number) {
	  evt.stopPropagation();
	  evt.preventDefault();
	  const columnsObj = JSON.parse(this.colDef) as EnchantedDataGridColDef[];
	  const moveToNextHeader = isLTR() ? KeyboardInputKeys.ARROW_RIGHT : KeyboardInputKeys.ARROW_LEFT;
	  const moveToPreviousHeader = isLTR() ? KeyboardInputKeys.ARROW_LEFT : KeyboardInputKeys.ARROW_RIGHT;
	  if ((evt.key === KeyboardInputKeys.TAB && !evt.shiftKey) || evt.key === moveToNextHeader) {
	    if (columnsObj.length === (index + 1)) {
	      const firstRow = this.renderRoot.querySelector(`#table-row-0`) as HTMLElement;
	      firstRow?.focus();
	    }
	    const nextHeader = this.renderRoot.querySelector(`#enchanted-table-header-${index + 1}`) as HTMLElement;
	    if (nextHeader) {
	      nextHeader.focus();
	    }
	  }
	  if (evt.key === moveToPreviousHeader || (evt.shiftKey && evt.key === KeyboardInputKeys.TAB)) {
	    const nextHeader = this.renderRoot.querySelector(`#enchanted-table-header-${index - 1}`) as HTMLElement;
	    if (nextHeader) {
	      nextHeader.focus();
	    }
	  }
	  if (evt.key === KeyboardInputKeys.ARROW_DOWN) {
	    const nextRow = this.renderRoot.querySelector(`#table-row-0`) as HTMLElement;
	    if (nextRow) {
	      nextRow.focus();
	      this.currentHoverField = '';
	    }
	  }
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
	  evt.preventDefault();
	  const moveToEdit = isLTR() ? KeyboardInputKeys.ARROW_RIGHT : KeyboardInputKeys.ARROW_LEFT;
	  const itemsLength = this.enchantedDataGridContext?.searchItems?.length;
	  if (evt.key === KeyboardInputKeys.ARROW_DOWN) {
	    if (index + 1 === itemsLength) {
	      this.dispatchEvent(new CustomEvent('change-focus', {
	        bubbles: true,
	        composed: true,
	        detail: {
	          value: `${this.customRowNavigation ? ChangeFocusValue.PANEL : ChangeFocusValue.PAGINATION}`,
	        }
	      }));
	      this.onRowHover = false;
	      this.currentHoverRow = NaN;
	    }
	    const nextRow = this.renderRoot.querySelector(`#table-row-${index + 1}`) as HTMLElement;
	    if (nextRow) {
	      nextRow.focus();
	    }
	  }
	  if (this.customRowNavigation) {
	    if (evt.key === moveToEdit) {
	      this.dispatchEvent(new CustomEvent('change-focus', {
	        bubbles: true,
	        composed: true,
	        detail: {
	          value: ChangeFocusValue.PANEL,
	        }
	      }));
	      this.lastFocusedRow = `#table-row-${index}`;
	    }
	    if (evt.key === KeyboardInputKeys.TAB && !evt.shiftKey) {
	      const editIcon = this.renderRoot.querySelector(`#enchanted-data-grid-edit-button-${index}`) as HTMLElement;
	      if (editIcon) {
	        editIcon.focus();
	      }
	    }
	  } else {
	    if (evt.key === moveToEdit || (evt.key === KeyboardInputKeys.TAB && !evt.shiftKey)) {
	      const editIcon = this.renderRoot.querySelector(`#enchanted-data-grid-edit-button-${index}`) as HTMLElement;
	      if (editIcon) {
	        editIcon.focus();
	      }
	    }
	  }
	  if (evt.key === KeyboardInputKeys.ARROW_UP || (evt.shiftKey && evt.key === KeyboardInputKeys.TAB)) {
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

	handleTableFocus(evt: FocusEvent) {
	  evt.stopPropagation();
	  evt.preventDefault();
	  if (this.customRowNavigation) {
	    if (this.lastFocusedRow !== '') {
	      const rowFocus = this.renderRoot.querySelector(this.lastFocusedRow) as HTMLElement;
	      if (rowFocus) {
	        rowFocus.focus();
	      }
	    } else {
	      const header = this.renderRoot.querySelector('#enchanted-table-header-0') as HTMLElement;
	      header?.focus();
	    }
	    (evt.currentTarget as HTMLElement)?.blur();
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
	    if (this.enchantedDataGridContext?.sortDirection === SortOrder.DESC && this.enchantedDataGridContext?.sortAttribute === currentHoverField) {
	      const sortIcon = this.renderRoot.querySelector(`#enchanted-data-grid-sort-button-${SortOrder.DESC}-${index}`) as HTMLElement;
	      sortIcon.setAttribute('autofocus', 'true');
	      sortIcon?.focus();
	      header.blur();
	    } else {
	      const sortIcon = this.renderRoot.querySelector(`#enchanted-data-grid-sort-button-${SortOrder.ASC}-${index}`) as HTMLElement;
	      sortIcon.setAttribute('autofocus', 'true');
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

	renderTableHeader() {
	  try {
	    const columnsObj = JSON.parse(this.colDef) as EnchantedDataGridColDef[];
	    const columnsObjLength = columnsObj.length;
	    if (this.enchantedDataGridContext && this.enchantedDataGridContext?.searchItems
				&& this.enchantedDataGridContext?.searchItems.length > 0
				&& this.isLoading === 'false') {
	      return html`
					<tr
						part="${DATA_GRID_PARTS.TABLE_ROW_HEADER_CONTAINER}"
						role="row"
						aria-rowindex="1"
					>
					${this.checkboxSelection === 'true' ? html`
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
							role="columnheader"
							aria-colindex="${index + 1}"
							id="enchanted-table-header-${index}"
              aria-label="${header.headerName}"
							part="${DATA_GRID_PARTS.TABLE_HEADER_CONTAINER} ${this.customTableHeaderPart.replace('{index}', index.toString())}"
						>
							<div part="${DATA_GRID_PARTS.TABLE_HEADER_CONTAINER_CHILD}">
								<div
									part="${DATA_GRID_PARTS.TABLE_HEADER_TEXT_PARENT}"
									@mouseenter=${(evt: MouseEvent) => { return this.handleTableHeaderTextEnter(evt, header.headerName); }}
								>
									<span part="${DATA_GRID_PARTS.TABLE_HEADER_TEXT}">${header.headerName}</span>
								</div>
								<div part="${DATA_GRID_PARTS.TABLE_SORT_BUTTON_CONTAINER}">
									<enchanted-icon-button
										data-testid="enchanted-data-grid-sort-button-${SortOrder.ASC}-${index}"
										.icon="${html`<icon-arrow-up></icon-arrow-up>`}"
										id="enchanted-data-grid-sort-button-${SortOrder.ASC}-${index}"
										tabindex=0
										part="${this.getPartHeaderSort(sortHeaderField, SortOrder.ASC)} ${DATA_GRID_PARTS.TABLE_HEADER_ICON_BUTTON}"
										exportparts="${ICON_BUTTON_EXPORT_PARTS}"
										@click=${(evt: MouseEvent) => { return this.handleSort(evt, sortHeaderField, SortOrder.ASC); }}
										@keydown=${(evt: KeyboardEvent) => { return this.handleCellHeaderSortAscKeydown(evt, sortHeaderField, SortOrder.ASC, index); }}
										@blur=${(evt: KeyboardEvent) => { return this.handleSortButtonBlur(evt); }}
                    aria-label=${this.getMessage('authoring.datagrid.column.header.sort.ascending', [{ '{column}': String(header.headerName) }])}
									>
									</enchanted-icon-button>
									<enchanted-icon-button
										data-testid="enchanted-data-grid-sort-button-${SortOrder.DESC}-${index}"
										.icon="${html`<icon-arrow-down></icon-arrow-down>`}"
										tabindex=0
										id="enchanted-data-grid-sort-button-${SortOrder.DESC}-${index}"
										part="${this.getPartHeaderSort(sortHeaderField, SortOrder.DESC)} ${DATA_GRID_PARTS.TABLE_HEADER_ICON_BUTTON}"
										exportparts="${ICON_BUTTON_EXPORT_PARTS}"
										@click=${(evt: MouseEvent) => { return this.handleSort(evt, sortHeaderField, SortOrder.DESC); }}
										@keydown=${(evt: KeyboardEvent) => { return this.handleCellHeaderSortDescKeydown(evt, sortHeaderField, SortOrder.ASC, index); }}
										@blur=${(evt: KeyboardEvent) => { return this.handleSortButtonBlur(evt); }}
                    aria-label=${this.getMessage('authoring.datagrid.column.header.sort.descending', [{ '{column}': String(header.headerName) }])}
									>
									</enchanted-icon-button>
								</div>    
							</div>
							${this.onHover && (index !== columnsObjLength - 1) ? (
									html`
									<div part=${DATA_GRID_PARTS.TABLE_COLUMN_SEPARATOR}>
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

	renderOverflowMenuItems(header: EnchantedDataGridColDef, data: any, rowIndex: number) {
	  const overflowList = getFilteredOverflowList(this.specialFields, data, header);
	  if (!overflowList?.length) return [];

	  return overflowList
	    .map((item: OverflowList, menuIndex: number) => {
	      const value = getObjectValue(this.specialFields, data, item.field);
	      if (!value) return nothing;
	      if (item.hide) return nothing; 
	      return html`
                <enchanted-menu-item 
                    text="${item.name}" 
                    tabindex=0
                    id="enchanted-data-grid-menu-item-${menuIndex}-${rowIndex}"
                    exportparts="${Object.values(MENU_ITEM_PARTS).join(',')},
                        ${Object.values(LIST_ITEM_PARTS).join(',')}" 
                    value=${value}
                    .menuObject=${data}
                    @keydown=${(evt: KeyboardEvent) => { return this.handleMenuItemKeydown(evt, menuIndex, rowIndex); }}
                    part=${DATA_GRID_PARTS.TABLE_HEADER_MENU_ITEM}
                >
                </enchanted-menu-item>
            `;
	    })
	    .filter(Boolean);
	}

	renderTableBody() {
	  try {
	    const columnsObj = JSON.parse(this.colDef) as EnchantedDataGridColDef[];
	    if (this.isLoading === 'true') {
	      return html`
					<div part="${DATA_GRID_PARTS.TABLE_BODY_CONTAINER}">
						<enchanted-circular-progress></enchanted-circular-progress>
						<p data-testid="table-loading-text" part="${DATA_GRID_PARTS.TABLE_LOADING_TEXT}">${this.getMessage('output.message.loading.search.results')}</p>
					</div>
				`;
	    }
	    else if (this.enchantedDataGridContext && this.enchantedDataGridContext?.searchItems && this.enchantedDataGridContext?.searchItems.length > 0) {
	      const tableBody = html`
					${this.enchantedDataGridContext.searchItems.map((data: any, index: number) => {
					const rowContent = columnsObj
					  .map((header: EnchantedDataGridColDef) => { return getObjectValue(this.specialFields, data, header.field, header.keyForStringify); })
					  .join(', ');
					return html`
						<tr
							tabindex=0
							id="table-row-${index}"
							role="row"
							aria-rowindex="${index + 2}"
							aria-label="${rowContent}"
							data-testid="enchanted-table-row-${index}"
							data-itemid="${data._id}"
							part="${DATA_GRID_PARTS.TABLE_ROW_BODY_CONTAINER}"
							@mouseenter=${(evt: MouseEvent) => { return this.handleRowOnMouseOver(evt, index); }} 
							@mouseleave=${(evt: MouseEvent) => { return this.handleRowOnMouseOut(evt); }} 
							@focus=${(evt: FocusEvent) => { return this.handleRowFocus(evt, index); }}
							@blur=${(evt: FocusEvent) => { return this.handleRowBlur(evt, index); }}
							@keydown=${(evt: KeyboardEvent) => { return this.handleBodyRowKeydown(evt, index); }}
						>
							${this.checkboxSelection === 'true' ? html`
							<td part="${DATA_GRID_PARTS.TABLE_SELECT_CHECKBOX_CONTAINER}">
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
						let tooltip = getObjectValue(this.specialFields, data, header.tooltip, header.keyForStringify);
						return html`
							<td 
								role="cell"
								aria-colindex="${ind + 1}"
								part="${DATA_GRID_PARTS.TABLE_CELL_CONTAINER} ${this.customTableCellPart.replace('{index}', ind.toString())}"
							>
								<div part="${DATA_GRID_PARTS.TABLE_COLUMN_AUTHORING_DIV.replace('{index}', ind.toString())}">
									<div part="${DATA_GRID_PARTS.TABLE_COLUMN_AUTHORING_DIV_0.replace('{index}', ind.toString())}">
										${header.avatar ? html`
											<enchanted-tooltip
                        tooltiptext=${getFormattedString(getObjectValue(this.specialFields, data, header.iconTypeTooltip))}
                        placement=${isLTR() ? TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START : TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END}
                        exportparts="${TOOLTIP_EXPORT_PARTS}"
                      >
                        <enchanted-item-type-avatar
                          slot="target"
                          itemType=${getObjectValue(this.specialFields, data, header.avatarType, header.keyForStringify)}
                          exportparts="${ITEM_TYPE_AVATAR_EXPORT_PARTS}"
                        />
                      </enchanted-tooltip>`
								: ''}
									</div>
									<div
											part="${DATA_GRID_PARTS.TABLE_COLUMN_AUTHORING_DIV_1.replace('{index}', ind.toString())}"
											@mouseenter=${(evt: MouseEvent) => { return this.handleTableCellTextEnter(evt, tooltip); }}
									>
											<p part="${DATA_GRID_PARTS.TABLE_CELL_TEXT}">${cellValue}</p>
									</div>
									<div part="${DATA_GRID_PARTS.TABLE_COLUMN_AUTHORING_DIV_2.replace('{index}', ind.toString())}">
											<div part="${DATA_GRID_PARTS.TABLE_COLUMN_AUTHORING_DIV_3.replace('{index}', ind.toString())}">
													<div part=${this.getPartActionButton(index)} >
															${header.editIcon ? html`
																	<enchanted-icon-button 
																			title=${this.getMessage('datagrid.tooltip.edit')}
                                      aria-label=${this.getMessage('authoring.datagrid.action.aria.label.edit')}
																			data-testid="enchanted-data-grid-edit-button-${index}"
																			id="enchanted-data-grid-edit-button-${index}"
                                      role="button"
																			.icon="${html`<icon-edit></icon-edit>`}"
																			tabindex=0
																			exportparts="${ICON_BUTTON_EXPORT_PARTS}"
																			@click=${(evt: MouseEvent) => { 
																				return this.handleItemEdit(evt, 
																				  getObjectValue(this.specialFields, data, header.editLink, header.keyForStringify));
																			}}
																			@keydown=${(evt: KeyboardEvent) => {
																				return this.handleItemEditKeydown(evt, 
																				  getObjectValue(this.specialFields, data, header.editLink, header.keyForStringify), index);
																			}}
																			@focus=${(evt: FocusEvent) => { return this.handleButtonFocus(evt); }}
																			@blur=${(evt: FocusEvent) => { return this.handleButtonBlur(evt); }}
																			part=${DATA_GRID_PARTS.TABLE_CELL_ICON_BUTTON}
																	>
																	</div>
															`: ''}
													</div>
											</div>
											<div part="${DATA_GRID_PARTS.TABLE_COLUMN_AUTHORING_DIV_4.replace('{index}', ind.toString())}">
												<div part=${this.getPartActionButton(index)} >
													${header.overflowIcon && getMenuItemCount(this.specialFields, header.overflowList, data).count > 1 ? html`
													<enchanted-menu 
														exportparts="
														${Object.values(MENU_PARTS).join(',')},
														${Object.values(MENU_ITEM_PARTS).join(',')},
														${Object.values(LIST_PARTS).join(',')},
														${Object.values(LIST_ITEM_PARTS).join(',')}
														" 
														@change="${this.handleOverFlowMenu}"
														menuDelay=0
														style="--dropdown-menu-min-width: 100px;"
													>
														<div slot="target-anchor">
															<enchanted-icon-button
																title=${this.getMessage('datagrid.tooltip.more')}
                                aria-label=${this.getMessage('datagrid.tooltip.more')}
																@keydown=${(evt: KeyboardEvent) => { return this.handleItemMenuKeydown(evt, index); }}
																tabindex=0
                                role="button"
																data-testid="enchanted-data-grid-overflow-button-${index}"
																id="enchanted-data-grid-overflow-button-${index}"
																.icon="${html`<icon-overflow-menu-horizontal></icon-overflow-menu-horizontal>`}"
																exportparts="${ICON_BUTTON_EXPORT_PARTS}"
																@focus=${(evt: FocusEvent) => { return this.handleButtonFocus(evt); }}
																@blur=${(evt: FocusEvent) => { return this.handleButtonBlur(evt); }}
																part=${DATA_GRID_PARTS.TABLE_CELL_ICON_BUTTON}
															>
														</div>
														<div slot="menu-items">
															${this.renderOverflowMenuItems(header, data, index)}
														</div>
													</enchanted-menu>
													`:
													getMenuItemCount(this.specialFields, header.overflowList, data).count === 1 ? html`
													<div part=${this.getPartActionButton(index)}>
														<enchanted-icon-button
															aria-label=${getOverflowItemProperty(this.specialFields, header, data, 'name')}
															data-testid="enchanted-data-grid-action-button-${index}"
															id="enchanted-data-grid-action-button-${index}"
															role="button"
															imgurl="${getOverflowItemProperty(this.specialFields, header, data, 'icon')}"
															title=${getOverflowItemProperty(this.specialFields, header, data, 'name')}
															tabindex="0"
															exportparts="${Object.values(ICON_BUTTON_EXPORT_PARTS).join(',')}"
															@click=${(evt: MouseEvent) => {
																return this.handleSingleMenuAction(evt, data, header, getOverflowItemProperty(this.specialFields, header, data, 'name'));
															}}
															@keydown=${(evt: KeyboardEvent) => {
																return this.handleSingleMenuKeydown(evt, index);
															}}
															@focus=${(evt: FocusEvent) => { return this.handleButtonFocus(evt); }}
															@blur=${(evt: FocusEvent) => { return this.handleButtonBlur(evt); }}
															part=${DATA_GRID_PARTS.TABLE_CELL_ICON_BUTTON}
														></enchanted-icon-button>
													</div>
												` : ''}
											</div>
										</div>
									</div>
								</div>
						</td>
					`;})}
					</tr>`;})}`;
	      return tableBody;
	    }
	    else if (this.enchantedDataGridContext?.total === 0) {
	      return html`
					<div part="${DATA_GRID_PARTS.TABLE_BODY_CONTAINER}">         
						<icon-items-search-empty size="128" color="rgba(0, 0, 0, 0.38)"></icon-items-search-empty>
						<p data-testid="table-result-label" part="${DATA_GRID_PARTS.TABLE_RESULT_LABEL}">${this.getMessage('output.message.no.results.found')}</p>
						<p part="${DATA_GRID_PARTS.TABLE_RESULT_DESCRIPTION}">
						${unsafeHTML(this.getMessage('output.message.no.match.found', [{ '{search_term}': String(this.enchantedDataGridContext?.searchValue) }]))}
						</p>
					</div>
				`;
	    } else if (this.hasMiddlewareError === 'true') {
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
	    } else if (this.hasContentSourceAvailable === 'true') {
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
	    ? html`<p data-testid="enchanted-invalid-coldef-label">${this.getMessage('data.grid.invalid.column.definition')}</p>`
	    : html`
				<table 
					role="table"
					part="${DATA_GRID_PARTS.TABLE_CONTAINER}"
					@focus=${(evt: FocusEvent) => { return this.handleTableFocus(evt); }}
					tabindex=${this.customRowNavigation && (this.enchantedDataGridContext?.searchItems?.length ?? 0) > 0 ? '0' : undefined}
				>
					${this.renderTableHeader()}
					${this.renderTableBody()}
				</table>
			`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'enchanted-data-grid': EnchantedDataGrid
	}
}

