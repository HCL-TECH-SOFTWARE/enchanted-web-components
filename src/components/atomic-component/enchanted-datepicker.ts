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

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';

// Helper imports
import { DATEPICKER_PARTS } from '../../types/cssClassEnums';
import { isLTR } from '../localization';
import { DEFAULT_DATE_FORMAT, MIN_YEAR, MAX_YEAR_BUFFER, CHANGE_CALENDAR_LAYOUT_TIMEOUT, DEFAULT_CALENDAR_LOCALE } from '../../types/enchanted-datepicker';
import {
  getLocalizedDays, getLocalizedMonths, formatDate, getAcceptedDateFormat,
  formatPartialDateInputWithAcceptedFormat, getUnixTimestampMilliseconds,
  getRegexForAcceptedDateFormat, parseDateFromAcceptedFormat,
} from '../../utils/dateUtils';

// Icon imports
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/calendar';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/caret--down';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/caret--up';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/chevron--left';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/chevron--right';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/help';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/close';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/circle--solid';
import { KeyboardInputKeys } from '../../utils/keyboardEventKeys';

@customElement('enchanted-datepicker')
export class EnchantedDatePicker extends EnchantedAcBaseElement {
  @property({ type: String }) name = 'datepicker'; // Name of the datepicker, can be used for form submission
  @property({ type: String }) label = 'Label'; // Label for the datepicker, displayed above the input
  @property({ type: Boolean }) showInputAction = false; // Toggle to show or hide input label action
  @property({ type: String }) helperIconTooltip = 'Label helper tooltip'; // Tooltip text for the helper icon next to the label
  @property({ type: Boolean }) requiredField = false; // Toggle to show or hide the required field asterisk next to the label
  @property({ type: Boolean }) open = false; // Initial state of the datepicker, can be used to open the datepicker on page load
  @property({ type: String }) locale = DEFAULT_CALENDAR_LOCALE; // Can be set from parent element FCC
  @property({ type: Boolean }) hideHelperText = false; // The helpertext can be hidden
  @property({ type: Boolean }) showRemoveLabel = false;
  @property({ type: Number }) value = 0;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String }) field = '';

  @state()
  private _value: number | string = 0;

  @state()
  private _month: number = new Date().getMonth();

  @state()
  private _year: number = new Date().getFullYear();

  @state()
  private _datePickerId: string = uuid();

  @state()
  private _today: number = new Date().getDate(); // For one-time computation of today's date for selection & styling purposes

  @state()
  private _todayMonth: number = new Date().getMonth(); // For one-time computation of today's month for selection & styling purposes

  @state()
  private _todayYear: number = new Date().getFullYear(); // For one-time computation of today's year for selection & styling purposes

  @state()
  private _selectedDate: number = 0; // To track and maintain the same selected date in the calendar after year selection

  @state()
  private _selectedMonth: number = this._month; // To track the currently selected month for comparison during keyboard navigation

  @state()
  private _selectedYear: number = this._year; // To track the currently selected year for comparison during keyboard navigation

  @state()
  private _minYear: number = MIN_YEAR;

  @state()
  private _maxYear: number = this._year + MAX_YEAR_BUFFER; // Allow for future years, e.g., 100 years from the current year

  @state()
  private _invalidHint: string = '';

  @state()
  private _showCalendar: boolean = false; // Toggle to show or hide the calendar view

  @state()
  private _showYearSelection: boolean = false; // Toggle to show or hide the year selection view

  @state()
  private _daysInMonth: number | undefined; // To store the number of days in the month, used for calculating the calendar layout

  @state()
  private _dates: Array<number|string> = []; // To store the dates of the month, used for keyboard navigation

  @state()
  private _localizedMonths: Array<string> = [];

  @state()
  private _localizedDays: Array<string> = [];

  @state()
  private _acceptedDateFormat: string = DEFAULT_DATE_FORMAT;

  @state()
  private _acceptedDateFormatRegex: RegExp = new RegExp(getRegexForAcceptedDateFormat(DEFAULT_DATE_FORMAT));

  connectedCallback(): void {
    super.connectedCallback();
    this._value = this.value;
    this._datePickerId = `enchanted-datepicker-${uuid()}`;
    this._localizedMonths = getLocalizedMonths(this.locale);
    this._localizedDays = getLocalizedDays(this.locale);
    this._acceptedDateFormat = getAcceptedDateFormat(this.locale);
    this._acceptedDateFormatRegex = new RegExp(getRegexForAcceptedDateFormat(this._acceptedDateFormat));

    if (this.open) {
      this._toggleCalendar(); // Open the calendar on page load if open is true
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  /**
   * Handles the click event on the remove label.
   * Dispatches a 'remove' event with the field information.
   * @param {Event} event - The click event.
   */
  handleRemoveLabelClick(event: Event) {
    event.stopPropagation();
    this.dispatchEvent(new CustomEvent('remove', {
      bubbles: true, // Allow the event to bubble up
      detail: {
        name: this.name,
        type: this.field
      }
    }));
  }

  handleRemoveLabelClickByEnterKey(event: KeyboardEvent) {
    if (event.key === KeyboardInputKeys.ENTER || event.key === KeyboardInputKeys.SPACE) {
      event.stopPropagation();
      this.handleRemoveLabelClick(event as unknown as MouseEvent);
    }
  }

  getDivInputParts(): string {
    let divInputParts: string = DATEPICKER_PARTS.DATEPICKER_DIV_INPUT;
    if (this._invalidHint) divInputParts = `${divInputParts} ${DATEPICKER_PARTS.DATEPICKER_DIV_INPUT_INVALID}`;
    if (this.disabled) divInputParts = `${divInputParts} ${DATEPICKER_PARTS.DATEPICKER_DIV_INPUT_DISABLED}`;
    return divInputParts;
  }

  render() {
    return html`
      <div part="${DATEPICKER_PARTS.DATEPICKER_ROOT}">
        <div part="${DATEPICKER_PARTS.DATEPICKER_DIV_LABEL_AND_ACTION}">
          <div part="${DATEPICKER_PARTS.DATEPICKER_DIV_LABEL}">
            <label
              part="${this._invalidHint
                ? `${DATEPICKER_PARTS.DATEPICKER_LABEL_TEXT} ${DATEPICKER_PARTS.DATEPICKER_LABEL_TEXT_INVALID}`
                : (this.disabled) ? `${DATEPICKER_PARTS.DATEPICKER_LABEL_TEXT} ${DATEPICKER_PARTS.DATEPICKER_LABEL_TEXT_DISABLED}` : DATEPICKER_PARTS.DATEPICKER_LABEL_TEXT
              }"
              for="${this.name}"
            >${this.label}</label>
            ${
              this.requiredField
              ? html`
                  <span
                    aria-label="${this.getMessage('datepicker.aria.label.required.field')}"
                    part="${DATEPICKER_PARTS.DATEPICKER_LABEL_REQUIRED}"
                  >*</span>`
              : nothing}
          </div>
          ${ this.showInputAction // If the user has defined an action to be shown next to the input
            ? html`
              <div>
                <span>Action</span>
              </div>
            `
            : nothing
          }
          ${this.showRemoveLabel ? html`
            <label data-testid="${this._datePickerId}-remove-label"
              tabindex=${(this.disabled) ? "-1" : "0"}
              part="${(this.disabled) ? `${DATEPICKER_PARTS.DATEPICKER_REMOVE_LABEL} ${DATEPICKER_PARTS.DATEPICKER_REMOVE_LABEL_DISABLED}` : DATEPICKER_PARTS.DATEPICKER_REMOVE_LABEL}"
              @click=${(this.disabled) ? nothing : this.handleRemoveLabelClick}
              @keydown=${(this.disabled) ? nothing : this.handleRemoveLabelClickByEnterKey}
            >
              ${this.getMessage('datepicker.aria.label.remove')}
            </label>
          ` : nothing}
        </div>
        <div part="${DATEPICKER_PARTS.DATEPICKER_DIV_FORM}">
          <div
            part="${this.getDivInputParts()}">
            <input
              data-testid="${this._datePickerId}-input"
              part="${
                isLTR()
                  ? DATEPICKER_PARTS.DATEPICKER_INPUT
                  : `${DATEPICKER_PARTS.DATEPICKER_INPUT} ${DATEPICKER_PARTS.DATEPICKER_INPUT_RTL}`
              }"
              name="${this.name}"
              .value=${this._value && typeof this._value === 'number' ? formatDate(this._value, this._acceptedDateFormat) : (this._value || '')}
              @input=${this._handleInput}
              placeholder="${this._acceptedDateFormat}"
              type="tel"
              ?invalid=${!!this._invalidHint}
              ?disabled=${this.disabled}
            />
            <div part="${DATEPICKER_PARTS.DATEPICKER_DIV_ICON}">
              <button
                data-testid="${this._datePickerId}-calendar-button"
                @click=${debounce(this._toggleCalendar, 300)}
                part="${DATEPICKER_PARTS.DATEPICKER_DIV_CALENDAR_BUTTON}"
                aria-label="${!this._showCalendar
                  ? this.getMessage('datepicker.aria.label.open.calendar')
                  : this.getMessage('datepicker.aria.label.close.calendar')
                }"
                ?disabled=${this.disabled}
              >
                <icon-calendar color="currentColor"></icon-calendar>
              </button>
            </div>
          </div>
          ${ this._invalidHint
            ? html`<p part="${isLTR()
              ? DATEPICKER_PARTS.DATEPICKER_INVALID_TEXT
              : `${DATEPICKER_PARTS.DATEPICKER_INVALID_TEXT} ${DATEPICKER_PARTS.DATEPICKER_INVALID_TEXT_RTL}`
            }">${this._invalidHint}</p>`
            : nothing
          }
          ${ !this._invalidHint
            ? html`
              <p part="${isLTR()
                ? DATEPICKER_PARTS.DATEPICKER_HELP_TEXT
                : `${DATEPICKER_PARTS.DATEPICKER_HELP_TEXT} ${DATEPICKER_PARTS.DATEPICKER_HELP_TEXT_RTL}`
              }">
                ${ !this.hideHelperText
                  ? this.getMessage('datepicker.help.text', [ { '{date_format}': this._acceptedDateFormat } ])
                  : nothing
                }
              </p>`
            : nothing
          }
        </div>
      </div>
      ${this._showCalendar ? this._renderCalendar() : ''}
    `;
  }

  _renderCalendar() {
    return html`
      <div
        part="${DATEPICKER_PARTS.DATEPICKER_CALENDAR}"
        @mousedown=${(e: Event) => {return e.preventDefault();}}
      >
        <div part="${DATEPICKER_PARTS.DATEPICKER_CALENDAR_HEADER}">
          <div part="${DATEPICKER_PARTS.DATEPICKER_CALENDAR_DIV_YEAR}">
            <span
              aria-label="${this.getMessage('datepicker.aria.label.current.month.and.year')}"
              part="${DATEPICKER_PARTS.DATEPICKER_CALENDAR_DIV_YEAR_SPAN}"
            >
              ${this._monthName(this._month)} ${this._year}
            </span>
            <button
              data-testid="${this._datePickerId}-year-view-button"
              aria-label="${!this._showYearSelection
                ? this.getMessage('datepicker.aria.label.open.year.selection.view')
                : this.getMessage('datepicker.aria.label.close.year.selection.view')
              }"
              @click=${debounce(this._toggleYearSelection, 300)}
              part="${isLTR()
                ? DATEPICKER_PARTS.DATEPICKER_CALENDAR_YEAR_VIEW_BUTTON
                : `${DATEPICKER_PARTS.DATEPICKER_CALENDAR_YEAR_VIEW_BUTTON} ${DATEPICKER_PARTS.DATEPICKER_CALENDAR_YEAR_VIEW_BUTTON_RTL}`
              }"
              @keydown=${(e: KeyboardEvent) => {
                if (!this._showYearSelection) return; // If year selection is closed, do not handle key events here
                e.preventDefault();
                e.stopPropagation();
                if (e.key === KeyboardInputKeys.TAB && !e.shiftKey) { // Go from Year View button to the year selected or today year button
                  this._focusOnSelectedOrTodayYearButton();
                } else if (e.key === KeyboardInputKeys.ENTER || e.key === KeyboardInputKeys.SPACE) {
                  this._toggleYearSelection();
                } else if (e.key === KeyboardInputKeys.ESCAPE) {
                  this._onEscapeKey(e);
                }
              }}
            >
              ${
                !this._showYearSelection
                ? html`<icon-caret-down color="currentColor"></icon-caret-down>`
                : html`<icon-caret-up color="currentColor"></icon-caret-up>`
              }
            </button>
          </div>
          ${this._showYearSelection
            ? nothing
            : html`
              <div part="${DATEPICKER_PARTS.DATEPICKER_CALENDAR_DIV_MONTH}">
                <button
                  data-testid="${this._datePickerId}-month-prev-button"
                  aria-label="${this.getMessage('datepicker.aria.label.go.to.previous.month')}"
                  @click=${debounce(this._prevMonth, 300)}
                  ?disabled=${this._year === this._minYear && this._month === 0}
                  part="${isLTR()
                    ? DATEPICKER_PARTS.DATEPICKER_CALENDAR_MONTH_PREV
                    : `${DATEPICKER_PARTS.DATEPICKER_CALENDAR_MONTH_PREV} ${DATEPICKER_PARTS.DATEPICKER_CALENDAR_MONTH_PREV_RTL}`
                  }"
                  @keydown=${(e: KeyboardEvent) => {
                    const onLastSupportedMonth = this._year === this._maxYear && this._month === 11;
                    if (onLastSupportedMonth) {
                      e.preventDefault();
                      e.stopPropagation();
                      this._focusOnSelectedOrTodayDateButton();
                    }  
                  }}
                >
                  ${isLTR()
                    ? html`<icon-chevron-left color="currentColor"></icon-chevron-left>`
                    : html`<icon-chevron-right color="currentColor"></icon-chevron-right>`
                  }
                </button>
                <button
                  data-testid="${this._datePickerId}-month-next-button"
                  aria-label="${this.getMessage('datepicker.aria.label.go.to.next.month')}"
                  @click=${debounce(this._nextMonth, 300)}
                  @keydown=${(e: KeyboardEvent) => {
                    // Go from the Next Month button to the date today or date selected date button
                    if ((e.key === KeyboardInputKeys.TAB || e.key === KeyboardInputKeys.ARROW_DOWN) && !e.shiftKey) {
                      e.preventDefault();
                      e.stopPropagation();
                      this._focusOnSelectedOrTodayDateButton();
                    }
                  }}
                  ?disabled=${this._year === this._maxYear && this._month === 11}
                  part="${isLTR()
                    ? DATEPICKER_PARTS.DATEPICKER_CALENDAR_MONTH_NEXT
                    : `${DATEPICKER_PARTS.DATEPICKER_CALENDAR_MONTH_NEXT} ${DATEPICKER_PARTS.DATEPICKER_CALENDAR_MONTH_NEXT_RTL}`
                  }"
                >
                  ${isLTR()
                    ? html`<icon-chevron-right color="currentColor"></icon-chevron-right>`
                    : html`<icon-chevron-left color="currentColor"></icon-chevron-left>`
                  }
                </button>
              </div>
          `}
        </div>
        ${this._showYearSelection ? this._renderYearSelection() : this._renderCalendarBody()}
        <div part="${DATEPICKER_PARTS.DATEPICKER_CALENDAR_FOOTER}">
          <button
            aria-label="${this.getMessage('datepicker.aria.label.select.date.for.today')}"
            @click=${() => {return this._selectDate(this._today, true);}}
            part="${DATEPICKER_PARTS.DATEPICKER_CALENDAR_FOOTER_BUTTON}"
            data-testid="${this._datePickerId}-today-button"
            @keydown=${(e: KeyboardEvent) => {
              e.preventDefault();
              e.stopPropagation();
              if (e.key === KeyboardInputKeys.TAB && !e.shiftKey) { // Go from Today button to the Year Selection Caret
                const yearViewBtn = this.renderRoot.querySelector(`button[data-testid=${this._datePickerId}-year-view-button]`);
                if (yearViewBtn) {
                  (yearViewBtn as HTMLButtonElement).focus();
                }
              } else if (e.key === KeyboardInputKeys.TAB && e.shiftKey) { // Go from Today button to the date selected or today date button
                if (this._showYearSelection) {
                  this._focusOnSelectedOrTodayYearButton();
                } else {
                  this._focusOnSelectedOrTodayDateButton();
                }
              } else if (e.key === KeyboardInputKeys.ENTER || e.key === KeyboardInputKeys.SPACE) {
                this._selectDate(this._today, true);
              } else if (e.key === KeyboardInputKeys.ESCAPE) {
                this._onEscapeKey(e);
              }
            }}
          >
            ${this.getMessage('datepicker.today.button.text')}
          </button>
        </div>
      </div>
    `;
  }

  _renderCalendarBody() {
    const days = this._localizedDays; // Get localized days of the week based on the current locale
    const firstDay = new Date(this._year, this._month, 1).getDay();
    const daysInMonth = new Date(this._year, this._month + 1, 0).getDate();

    const dates: Array<number|string> = [];
    // Date API gives us 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    // Match the index of days array (0 for Monday, 6 for Sunday)
    if (firstDay >= 1) { // If the first day is Monday or later, we need to fill the first (firstDay - 1) days with empty strings
      for (let i = 0; i < firstDay - 1; i++) dates.push('');
    } else if (firstDay === 0) { // If the first day is Sunday, we need to fill the first 6 days with empty strings
      for (let i = 0; i < 6; i++) dates.push('');
    }

    // Fill the rest of the dates in the month
    for (let d = 1; d <= daysInMonth; d++) dates.push(d);

    // // Store the dates, firstDay, and daysInMonth for later use in keyboard navigation
    this._dates = dates; 
    this._daysInMonth = daysInMonth;

    return html`
      <div part="${DATEPICKER_PARTS.DATEPICKER_CALENDAR_DAYS}">
        ${days.map(day => {return html`<span part="${DATEPICKER_PARTS.DATEPICKER_CALENDAR_DAY_LABEL}">${day}</span>`;})}
      </div>
      <div part="${DATEPICKER_PARTS.DATEPICKER_CALENDAR_DATES}">
        ${dates.map((date, index) => {
          if (date) {
            const isToday = `${this._month + 1}/${date}/${this._year}` === `${this._todayMonth + 1}/${this._today}/${this._todayYear}`;
            return html`
              <span part="${DATEPICKER_PARTS.DATEPICKER_CALENDAR_DATE_SPAN}">
                <button
                  aria-label="${this._isSelected(date as unknown as number)
                    ? this.getMessage('datepicker.aria.label.selected.date', [ { 'date': date.toString() } ])
                    : (isToday ? this.getMessage('datepicker.aria.label.date.today', [ { 'date': date.toString() } ]) : nothing)
                  }"
                  part=${this._isSelected(date as unknown as number)
                    ? `${DATEPICKER_PARTS.DATEPICKER_CALENDAR_DATES_BUTTON} ${DATEPICKER_PARTS.DATEPICKER_CALENDAR_DATES_BUTTON_SELECTED}`
                    : DATEPICKER_PARTS.DATEPICKER_CALENDAR_DATES_BUTTON}
                  @click=${() => {return this._selectDate(date as unknown as number, isToday);}}
                  @keydown=${(e: KeyboardEvent) => {
                    return this._handleDateButtonKeydown(
                      e,
                      date as unknown as number,
                      index,
                      isToday,
                    );
                  }}
                  data-testid="${this._datePickerId}-date-${date}"
                >${date}</button>
                ${ isToday
                  ? html`
                    <span
                      part="${isLTR()
                        ? DATEPICKER_PARTS.DATEPICKER_CALENDAR_DATES_TODAY_SPAN
                        : `${DATEPICKER_PARTS.DATEPICKER_CALENDAR_DATES_TODAY_SPAN} ${DATEPICKER_PARTS.DATEPICKER_CALENDAR_DATES_TODAY_SPAN_RTL}`
                      }"
                    >
                      <icon-circle-solid 
                        color="currentColor"
                        ?useCurrentColor=${false}
                        color="none"
                        size="1"
                      ></icon-circle-solid>
                    </span>`
                  : nothing
                }
              </span>
            `;
          } else {
            return html`
              <span part="${DATEPICKER_PARTS.DATEPICKER_CALENDAR_DATE_SPAN}">
                <div part="${DATEPICKER_PARTS.DATEPICKER_CALENDAR_DATES_EMPTY_DIV}">
                </part>
              </span>
            `;
          }
        })}
      </div>
    `;
  }

  _renderYearSelection() {
    setTimeout(() => {
      const yearSelectionDiv = this.renderRoot.querySelector(`#enchanted-datepicker-year-selection-${this._datePickerId}`);
      if (yearSelectionDiv) {
        (yearSelectionDiv as HTMLDivElement).style.visibility = 'visible'; // Make the year selection visible
        this._scrollToSelectedOrTodayYearButton(); // Scroll to the selected or today's year button
      }
    }, CHANGE_CALENDAR_LAYOUT_TIMEOUT); // Use setTimeout to ensure the DOM is updated before focusing

    return html`
      <div id="enchanted-datepicker-year-selection-${this._datePickerId}" part="${DATEPICKER_PARTS.DATEPICKER_YEAR_SELECTION}" style="visibility: hidden;">
        <div part="${DATEPICKER_PARTS.DATEPICKER_YEAR_SELECTION_YEARS}">
          <div part="${DATEPICKER_PARTS.DATEPICKER_YEAR_SELECTION_YEAR_DIV}">
            ${Array.from({ length: this._maxYear - this._minYear + 1 }, (_, i) => {return i + this._minYear;}).map(year => {return html`
            <button
              part="${this._year === year
                ? `${DATEPICKER_PARTS.DATEPICKER_YEAR_SELECTION_YEAR_BUTTON} ${DATEPICKER_PARTS.DATEPICKER_YEAR_SELECTION_YEAR_BUTTON_SELECTED}`
                : DATEPICKER_PARTS.DATEPICKER_YEAR_SELECTION_YEAR_BUTTON
              }"
              @click=${() => {return this._selectYear(year);}}
              @keydown=${(e: KeyboardEvent) => {
                return this._handleYearButtonKeydown(e, year);
              }}
              data-testid="${this._datePickerId}-year-${year}"
            >${year}</button>
          `;})}
          </div>
        </div>
      </div>
    `;
  }

  _toggleCalendar(_evt?: MouseEvent | KeyboardEvent, keepCalendarClosed?: boolean) {
    if (this._showCalendar) {
      this._showCalendar = false;
      this._showYearSelection = false; // Hide year selection when toggling calendar
      window.removeEventListener('mousedown', this._onOutsideClick);
      window.removeEventListener('keydown', this._onEscapeKey);

      this._resetCalendarViewToSelectedOrToday();
    } else if (!keepCalendarClosed) {
      this._showCalendar = true;
      window.addEventListener('mousedown', this._onOutsideClick);
      window.addEventListener('keydown', this._onEscapeKey);
    }
  }

  _toggleYearSelection() {
    this._showYearSelection = !this._showYearSelection;
  }

  _resetCalendarViewToSelectedOrToday() {
    // If the input is empty, reset the month and year to today's values especially after user did some navigation
    if (this._value === 0) {
      this._year = new Date().getFullYear();
      this._month = new Date().getMonth();
    // } else if (this._selectedDate && this._selectedMonth !== undefined && this._selectedYear !== undefined) {
    } else if (this._selectedMonth !== undefined && this._selectedYear !== undefined) {
      this._month = this._selectedMonth;
      this._year = this._selectedYear;
    }
  }

  _onOutsideClick = (e: MouseEvent) => {
    if (!this.contains(e.target as Node)) {
      this._toggleCalendar();
    }
  };

  _onEscapeKey = (e: KeyboardEvent) => {
    if (e.key === KeyboardInputKeys.ESCAPE) {
      this._toggleCalendar();
    }
  };

  _monthName(month: number) {
    return this._localizedMonths[month] || '';
  }

  _prevMonth() {
    if (this._month === 0) {
      this._month = 11;
      this._year--;
    } else {
      this._month--;
    }
  }

  _nextMonth() {
    if (this._month === 11) {
      this._month = 0;
      this._year++;
    } else {
      this._month++;
    }
  }

  _selectYear(year: number) {
    const month = this._selectedMonth ?? this._month; // If no month is selected, default to today's month number, 0 for January
    const date = this._selectedDate || this._today; // If no date is selected, default to today's date number

    this._year = year;
    this._month = month; // Set the month to the currently selected month or today's month

    this._selectedDate = date;
    this._selectedMonth = month;
    this._selectedYear = year; // Store the selected year for comparison during keyboard navigation

    this._showYearSelection = false;
    this._showCalendar = true; // Show calendar body after selecting year
    
    const mm = String(month + 1).padStart(2, '0'); // Maintain the same month in the new year selected
    const dd = String(date).padStart(2, '0'); // Maintain the same selected date in the new year selected
    this._value = getUnixTimestampMilliseconds(`${year}-${mm}-${dd}`);
  }

  _selectDate(date: number, isToday: boolean = false) {
    const month = isToday ? this._todayMonth : this._month;
    const year = isToday ? this._todayYear : this._year;

    // For rendering in calendar and input
    this._month = month;
    this._year = year;
    const mm = String(month + 1).padStart(2, '0');
    const dd = String(date).padStart(2, '0');
    this._value = getUnixTimestampMilliseconds(`${year}-${mm}-${dd}`);
    
    // For comparison during keyboard navigation - rendered calendar vs selected date, month, year
    this._selectedDate = date; // Store the selected date to maintain it after year selection
    this._selectedMonth = month; // Store the selected month for comparison during keyboard navigation
    this._selectedYear = year; // Store the selected year for comparison during keyboard navigation
    
    // Reset invalid hint and hide calendar
    this._invalidHint = '';
    this._toggleCalendar();
    this.dispatchEvent(new CustomEvent('date-change', {
      detail: {
        value: this._value,
        type: this.field
      },
      bubbles: true,
      composed: true,
    }));
  }

  _isSelected(date: number) {
    const mm = String(this._month + 1).padStart(2, '0');
    const dd = String(date).padStart(2, '0');
    return this._value === getUnixTimestampMilliseconds(`${this._year}-${mm}-${dd}`);;
  }

  private async _handleInput(event?: InputEvent, readyValue?: string) {
    const message = await this._handleValidity(event, readyValue);
    if (typeof message === 'string') {
      this._handleInvalidHint(message);
    }
  }

  private async _handleValidity(event?: InputEvent, readyValue?: string): Promise<string | boolean> {
    let value = readyValue || '';
    let invalidMessage = '';

    if (event !== undefined) {
      const input = event.target as HTMLInputElement;
      value = input.value;
      // Allow only numbers, dashes, slashes, and dots
      /* eslint-why better safe than sorry */
      /* eslint-disable no-useless-escape */
      input.value = value.replace(/[^0-9\-\/\.]/g, '');
      value = value.replace(/[^0-9\-\/\.]/g, '');
      /* eslint-enable no-useless-escape */

      // Prevent typing after reaching max length for accepted date format
      const maxLength = this._acceptedDateFormat !== 'D/M/YYYY'
        ? this._acceptedDateFormat.length
        : this._acceptedDateFormat.length + 2; // +2 for the leading zeroes in D/M/YYYY format

      if (value.length > maxLength) {
        input.value = value.slice(0, maxLength);
        value = value.slice(0, maxLength);
      }
    }

    if (value === '') {
      // Handle empty input
      invalidMessage = '';
      this._value = 0;
      this._toggleCalendar(undefined, true);
      this.dispatchEvent(new CustomEvent('date-change', { detail: { value: '', type: this.field } }));
    } else if (this._acceptedDateFormatRegex.test(value)) {
      // Handle regex-matching date input
      const parsedDate = parseDateFromAcceptedFormat(
        formatPartialDateInputWithAcceptedFormat(value, this._acceptedDateFormat), this._acceptedDateFormat
      );

      if (parsedDate) {
        const { dd, mm, yr } = parsedDate;
        let daysInMonthInParsedDate = 0;
        if ((yr >= this._minYear && yr <= this._maxYear) && (mm >= 1 && mm <= 12)) {
          // no need to plus 1 on month here since month number came from user input
          daysInMonthInParsedDate = new Date(yr, mm, 0).getDate(); // Get the number of days in the month of the parsed datex
        }
        
        if (yr < this._minYear || yr > this._maxYear) {
          // If the year is out of range, set the value to the input and show an invalid message
          this._value = value;
          invalidMessage = this.getMessage('datepicker.invalid.year.text', [
            { '{min_year}': this._minYear.toString() },
            { '{max_year}': this._maxYear.toString() }
          ]);
        } else if (mm < 1 || mm > 12) {
          // If the month is out of range, set the value to the input and show an invalid message
          this._value = value;
          invalidMessage = this.getMessage('datepicker.invalid.month.text');
        } else if (daysInMonthInParsedDate !== 0 && (dd < 1 || dd > daysInMonthInParsedDate)) {
          // If the day is out of range for the month, set the value to the input and show an invalid message
          this._value = value;
          invalidMessage = this.getMessage('datepicker.invalid.datenumber.text', [
            { '{days_in_month}': daysInMonthInParsedDate.toString() }
          ]);
        } else {
          // If the date is valid, set the value and update the selected date, month, and year
          this._year = yr;
          this._month = mm - 1;
          this._selectedDate = dd;
          this._selectedMonth = mm - 1;
          this._selectedYear = yr;
          this._value = getUnixTimestampMilliseconds(`${yr}-${String(mm).padStart(2, '0')}-${String(dd).padStart(2, '0')}`);
          invalidMessage = '';
          this._toggleCalendar(undefined, true);
          this.dispatchEvent(new CustomEvent('date-change', { detail: { value: this._value, type: this.field } }));
        }
      } else {
        // Unlikely to fall here but if the date could not be parsed, set the value to the input and show an invalid message
        invalidMessage = this.getMessage('datepicker.invalid.date.text', [
          { '{date_format}': this._acceptedDateFormat }
        ]);
      }
    /* eslint-why better safe than sorry */
    /* eslint-disable no-useless-escape */
    } else if (!Number.isNaN(Number(value.replace(/\.|\/|\-/g, '')))) {
    /* eslint-enable no-useless-escape */
      // Handle and process partial date input that is not in the accepted date format but is a valid number
      if (!readyValue) {
        const preppedValue = formatPartialDateInputWithAcceptedFormat(value, this._acceptedDateFormat);
        this._handleInput(undefined, preppedValue);
        return true; // Return early to avoid further processing
      } else {
        this._value = readyValue;
        if (!this._acceptedDateFormatRegex.test(readyValue)) {
          invalidMessage = this.getMessage('datepicker.invalid.date.text', [
            { '{date_format}': this._acceptedDateFormat }
          ]);
        }
      }
    } else {
      // Input neither matches the accepted date format regex nor is it a partial date input
      this._value = 0;
      invalidMessage = this.getMessage('datepicker.invalid.date.text', [
        { '{date_format}': this._acceptedDateFormat }
      ]);
    }

    return invalidMessage;
  }

  _handleInvalidHint(invalidMessage?: string) {
    if (invalidMessage) {
      // If there is an invalid message, set the invalid hint and make sure the calendar is closed
      this._invalidHint = invalidMessage;
      this._toggleCalendar(undefined, true);
      this.dispatchEvent(new CustomEvent('date-change', { detail: { value: '', type: this.field } }));
    } else {
      // If there is no invalid message, reset the invalid hint
      this._invalidHint = '';
    }
  }

  _focusOnSelectedOrTodayDateButton() {
    if (this._selectedDate && this._month === this._selectedMonth && this._year === this._selectedYear) {
      const selectedDateBtn = this.renderRoot.querySelector(`button[data-testid=${this._datePickerId}-date-${this._selectedDate}]`);
      if (selectedDateBtn) {
        (selectedDateBtn as HTMLButtonElement).focus();
      }
    } else if (!this._selectedDate && this._month === this._todayMonth && this._year === this._todayYear) {
      const todayDateBtn = this.renderRoot.querySelector(`button[data-testid=${this._datePickerId}-date-${this._today}]`);
      if (todayDateBtn) {
        (todayDateBtn as HTMLButtonElement).focus();
      }
    } else {
      const firstDayBtn = this.renderRoot.querySelector(`button[data-testid=${this._datePickerId}-date-1]`);
      if (firstDayBtn) {
        (firstDayBtn as HTMLButtonElement).focus();
      }
    }
  }

  _focusOnSelectedOrTodayYearButton() {
    const selectedYearBtn = this.renderRoot.querySelector(`button[data-testid=${this._datePickerId}-year-${this._year}]`);
    if (selectedYearBtn) {
      (selectedYearBtn as HTMLButtonElement).focus();
      selectedYearBtn.scrollIntoView(true);
    } else {
      const todayYearBtn = this.renderRoot.querySelector(`button[data-testid=${this._datePickerId}-year-${this._todayYear}]`);
      if (todayYearBtn) {
        (todayYearBtn as HTMLButtonElement).focus();
        todayYearBtn.scrollIntoView(true);
      }
    }
  }

  _scrollToSelectedOrTodayYearButton() {
    const selectedYearBtn = this.renderRoot.querySelector(`button[data-testid=${this._datePickerId}-year-${this._year}]`);
    if (selectedYearBtn) {
      (selectedYearBtn as HTMLButtonElement).scrollIntoView(true);
    } else {
      const todayYearBtn = this.renderRoot.querySelector(`button[data-testid=${this._datePickerId}-year-${this._todayYear}]`);
      if (todayYearBtn) {
        (todayYearBtn as HTMLButtonElement).scrollIntoView(true);
      }
    }
  }

  _handleYearButtonKeydown(e: KeyboardEvent, year: number) {
    e.preventDefault();
    e.stopPropagation();

    // Handle Tab and Ctrl + Tab navigation
    if (e.key === KeyboardInputKeys.TAB && !e.shiftKey) { // Go from Year button to the Today button
      const todayBtn = this.renderRoot.querySelector(`button[data-testid=${this._datePickerId}-today-button]`);
      if (todayBtn) {
        (todayBtn as HTMLButtonElement).focus();
      }
    } else if (e.key === KeyboardInputKeys.TAB && e.shiftKey) { // Go from Year button to the Year View button
      const yearViewBtn = this.renderRoot.querySelector(`button[data-testid=${this._datePickerId}-year-view-button]`);
      if (yearViewBtn) {
        (yearViewBtn as HTMLButtonElement).focus();
      }
    }
    
    // Handle ArrowLeft and ArrowRight navigation
    else if (e.key === KeyboardInputKeys.ARROW_LEFT) {
      const prevYearBtn = this.renderRoot.querySelector(`button[data-testid=${this._datePickerId}-year-${year - 1}]`);
      if (prevYearBtn) {
        (prevYearBtn as HTMLButtonElement).focus();
      }
    } else if (e.key === KeyboardInputKeys.ARROW_RIGHT) {
      const nextYearBtn = this.renderRoot.querySelector(`button[data-testid=${this._datePickerId}-year-${year + 1}]`);
      if (nextYearBtn) {
        (nextYearBtn as HTMLButtonElement).focus();
      }
    }
    
    // Handle Arrow Up and Arrow Down navigation
    else if (e.key === KeyboardInputKeys.ARROW_UP) {
      const has3YearsBefore = year - 3 >= this._minYear;
      if (has3YearsBefore) {
        const prevYearBtn = this.renderRoot.querySelector(`button[data-testid=${this._datePickerId}-year-${year - 3}]`);
        if (prevYearBtn) {
          (prevYearBtn as HTMLButtonElement).focus();
        }
      }
    } else if (e.key === KeyboardInputKeys.ARROW_DOWN) {
      const has3YearsAfter = year + 3 <= this._maxYear;
      if (has3YearsAfter) {
        const nextYearBtn = this.renderRoot.querySelector(`button[data-testid=${this._datePickerId}-year-${year + 3}]`);
        if (nextYearBtn) {
          (nextYearBtn as HTMLButtonElement).focus();
        }
      }
    }

    // Handle Enter and Space key selection
    else if (e.key === KeyboardInputKeys.ENTER || e.key === KeyboardInputKeys.SPACE) {
      this._selectYear(year);
    }

    // Handle Escape key to close the calendar
    else if (e.key === KeyboardInputKeys.ESCAPE) {
      this._onEscapeKey(e);
    }
  }

  _handleDateButtonKeydown(
    e: KeyboardEvent,
    date: number,
    index: number,
    isToday: boolean = false
  ) {
    e.preventDefault();                    
    e.stopPropagation();

    // Handle Tab and Ctrl + Tab navigation
    if (e.key === KeyboardInputKeys.TAB && !e.shiftKey) { // Go from the date button to the Today button
      const todayBtn = this.renderRoot.querySelector(`button[data-testid=${this._datePickerId}-today-button]`);
      if (todayBtn) {
        (todayBtn as HTMLButtonElement).focus();
      }
    } else if (e.key === KeyboardInputKeys.TAB && e.shiftKey) {
      const onLastSupportedMonth = this._year === this._maxYear && this._month === 11;
      if (!onLastSupportedMonth) {
        // Go from the date button to the Next Month button
        const nextMonthBtn = this.renderRoot.querySelector(`button[data-testid=${this._datePickerId}-month-next-button]`);
        if (nextMonthBtn) {
          (nextMonthBtn as HTMLButtonElement).focus();
        }
      } else {
        // Go from the date button to the Prev Month button
        const prevMonthBtn = this.renderRoot.querySelector(`button[data-testid=${this._datePickerId}-month-prev-button]`);
        if (prevMonthBtn) {
          (prevMonthBtn as HTMLButtonElement).focus();
        }
      }
    }
    
    // Handle Arrow Left and Arrow Right navigation
    else if (e.key === KeyboardInputKeys.ARROW_LEFT && date !== 1) { // Go to the previous date in the same month
      const prevDateBtn = this.renderRoot.querySelector(`button[data-testid=${this._datePickerId}-date-${this._dates[index - 1]}]`);
      if (prevDateBtn) {
        (prevDateBtn as HTMLButtonElement).focus();
      }
    } else if (e.key === KeyboardInputKeys.ARROW_RIGHT && date !== this._daysInMonth) { // Go to the next date in the same month
      const nextDateBtn = this.renderRoot.querySelector(`button[data-testid=${this._datePickerId}-date-${this._dates[index + 1]}]`);
      if (nextDateBtn) {
        (nextDateBtn as HTMLButtonElement).focus();
      }
    } else if (e.key === KeyboardInputKeys.ARROW_LEFT && date === 1) { // Go to the last date of the previous month
      const onFirstSupportedDate = this._year === this._minYear && this._month === 0 && date === 1;
      if (onFirstSupportedDate) {
        return; // Do not allow going to the last date of the previous month if already on the first supported date (e.g., January 1st of the minimum year)
      }

      // Go to the last date of the previous month
      this._prevMonth();
      // Wait for the month to change
      setTimeout(() => {
        if (this._daysInMonth) {
          const prevDateBtn = this.renderRoot.querySelector(`button[data-testid=${this._datePickerId}-date-${this._daysInMonth}]`);
          if (prevDateBtn) {
            (prevDateBtn as HTMLButtonElement).focus();
          }
        }
      }, CHANGE_CALENDAR_LAYOUT_TIMEOUT);
    } else if (e.key === KeyboardInputKeys.ARROW_RIGHT && date === this._daysInMonth) { // Go to the first date of the next month
      const onLastSupportedDate = this._year === this._maxYear && this._month === 11 && date === this._daysInMonth;
      if (onLastSupportedDate) {
        return; // Do not allow going to the first date of the next month if already on the last supported date (e.g., December 31st of the maximum year)
      }

      // Go to the first date of the next month
      this._nextMonth();
      // Wait for the month to change
      setTimeout(() => {
        const nextDateBtn = this.renderRoot.querySelector(`button[data-testid=${this._datePickerId}-date-1]`);
        if (nextDateBtn) {
          (nextDateBtn as HTMLButtonElement).focus();
        }
      }, CHANGE_CALENDAR_LAYOUT_TIMEOUT);
    }

    // Handle Arrow Up and Arrow Down navigation
    else if (e.key === KeyboardInputKeys.ARROW_UP) {
      const deficit = date - 7; // Calculate the lacking days in current month to reach 7 days before the current date
      const has7DaysBefore = deficit >= 1; // Check if 7 days before the current date is still in the same month
      if (has7DaysBefore) {
        const prevDateBtn = this.renderRoot.querySelector(`button[data-testid=${this._datePickerId}-date-${date - 7}]`);
        if (prevDateBtn) {
          (prevDateBtn as HTMLButtonElement).focus();
        }
      } else {
        const firstSupportedMonth = this._year === this._minYear && this._month === 0;
        if (firstSupportedMonth && date - 7 < 1) {
          // If we are on the first supported month and the date - 7 goes below 1, do not allow going to the previous month
          return;
        }

        this._prevMonth();
        // Wait for the month to change
        setTimeout(() => {
          if (this._daysInMonth) {
            const prevDateBtn = this.renderRoot.querySelector(`button[data-testid=${this._datePickerId}-date-${this._daysInMonth - Math.abs(deficit)}]`);
            if (prevDateBtn) {
              (prevDateBtn as HTMLButtonElement).focus();
            }
          }
        }, CHANGE_CALENDAR_LAYOUT_TIMEOUT);
      }
    } else if (e.key === KeyboardInputKeys.ARROW_DOWN && this._daysInMonth !== undefined) {
      const has7DaysAfter = this._daysInMonth >= date + 7; // Check if 7 days after the current date is still in the same month
      if (has7DaysAfter) {
        const nextDateBtn = this.renderRoot.querySelector(`button[data-testid=${this._datePickerId}-date-${date + 7}]`);
        if (nextDateBtn) {
          (nextDateBtn as HTMLButtonElement).focus();
        }
      } else {
        const onLastSupportedMonth = this._year === this._maxYear && this._month === 11;
        if (onLastSupportedMonth && date + 7 > this._daysInMonth) {
          // If we are on the last supported month and the date + 7 exceeds the days in the month, do not allow going to the next month
          return;
        }
        
        const deficit = (date + 7) - this._daysInMonth; // Calculate the lacking days in current month to reach 7 days after the current date
        this._nextMonth();
        // Wait for the month to change
        setTimeout(() => {
          const nextDateBtn = this.renderRoot.querySelector(`button[data-testid=${this._datePickerId}-date-${Math.abs(deficit)}]`);
          if (nextDateBtn) {
            (nextDateBtn as HTMLButtonElement).focus();
          }
        }, CHANGE_CALENDAR_LAYOUT_TIMEOUT);
      }
    }
    
    // Handle Enter and Space key selection
    else if (e.key === KeyboardInputKeys.ENTER || e.key === KeyboardInputKeys.SPACE) {
      this._selectDate(date as unknown as number, isToday);
    }

    // Handle Escape key to close the calendar
    else if (e.key === KeyboardInputKeys.ESCAPE) {
      this._onEscapeKey(e);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'enchanted-datepicker': EnchantedDatePicker
  }
}
