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
import { Key } from 'webdriverio';
import { $, browser, expect } from '@wdio/globals';
import { html, render } from 'lit';

// Component imports
import '../../../components/atomic-component/enchanted-datepicker';

// Helper imports
import { initSessionStorage } from '../../utils';
import { DATEPICKER_PARTS } from '../../../types/cssClassEnums';
import { FORMAT_FOR_CONVERTING_TO_UNIX_TIMESTAMP, MAX_YEAR_BUFFER, MIN_YEAR } from '../../../types/enchanted-datepicker';
import { formatDate, getLocalizedMonths } from '../../../utils/dateUtils';

describe('EnchantedDatepicker component testing', () => {
  const monthsEn = getLocalizedMonths();

  // Constants during test run date
  let monthNow: number;
  let yearNow: number;
  let dayNow: number;
  let daysInMonth: number;

  before(async () => {
    await browser.setTimeZone('America/New_York');
    await initSessionStorage();

    // Constants during test run date
    monthNow = new Date().getMonth();
    yearNow = new Date().getFullYear();
    dayNow = new Date().getDate();
    daysInMonth = new Date(yearNow, monthNow + 1, 0).getDate();

    if (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  beforeEach(async () => {
    await initSessionStorage();
    if (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  afterEach(() => {
    if (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  after(async () => {
    await browser.setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  });

  it('EnchantedDatepicker - should render datepicker web component without crashing', async () => {
    let component = document.createElement('enchanted-datepicker');
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    component.remove();
  });

  it('EnchantedDatepicker - should remove web component from document body and validates removal', async () => {
    let component = document.createElement('enchanted-datepicker');
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('EnchantedDatepicker - should validate default values of attributes', async () => {
    let component = document.createElement('enchanted-datepicker');
    document.body.appendChild(component);
    await expect(component).toHaveElementProperty('label', 'Label');
    await expect(component).toHaveElementProperty('name', 'datepicker');
    await expect(component).toHaveElementProperty('requiredField', false);
    component.remove();
  });

  it('EnchantedDatepicker - should validate custom values of attributes', async () => {
    render(
      html`
        <enchanted-datepicker
          label="Sample label"
          name="Sample form name"
          helpericontooltip="Sample helper tooltip"
          requiredField
        ></enchanted-datepicker>
      `,
      document.body
    );

    const component = await $('enchanted-datepicker').getElement();
    await expect(component).toBeDisplayed();

    const label = await component.shadow$('label').getElement();
    await expect(label).toBeDisplayed();
    await expect(label).toHaveText('Sample label');
    await expect(label).toHaveAttribute('for', 'Sample form name');  

    const requiredAsterisk = await component.shadow$('span[part=datepicker-label-required]').getElement();
    await expect(requiredAsterisk).toBeDisplayed();
    await expect(requiredAsterisk).toHaveText('*');
    
    const tooltip = await component.shadow$('[data-testid=tooltip-text]').getElement();
    await expect(tooltip).toBeTruthy();

    const input = await component.shadow$('input').getElement();
    await expect(input).toBeDisplayed();
    await expect(input).toHaveAttribute('type', 'tel');
    await expect(await input.getValue()).toEqual('');
    await expect(input).toHaveAttribute('placeholder', 'MM/DD/YYYY');
    await expect(input).toHaveAttribute('name', 'Sample form name');
  });

  it('EnchantedDatepicker - should be able to open calendar and select a date', async () => {
    render(
      html`
        <enchanted-datepicker></enchanted-datepicker>
      `,
      document.body
    );

    const component = await $('enchanted-datepicker').getElement();
    await expect(component).toBeDisplayed();

    const calendarBtn = await component.shadow$(`button[part=${DATEPICKER_PARTS.DATEPICKER_DIV_CALENDAR_BUTTON}]`).getElement();
    let calendarDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR}]`).getElement();
    await expect(calendarBtn).toBeDisplayed();
    await expect(calendarDiv).not.toBeDisplayed();
    await calendarBtn.click();
    await browser.pause(400);

    calendarDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR}]`).getElement();
    await expect(calendarDiv).toBeDisplayed();

    const calendarYearSpan = await calendarDiv.shadow$(`span[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR_DIV_YEAR_SPAN}]`).getElement();

    await expect(calendarYearSpan).toBeDisplayed();
    await expect(calendarYearSpan).toHaveText(`${monthsEn[monthNow]} ${yearNow}`);

    const calendarDays = await calendarDiv.shadow$$(`button[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR_DATES_BUTTON}]`).getElements();
    expect(calendarDays.length).toBe(daysInMonth);

    await calendarDays[Math.floor(daysInMonth / 2)].click();
    await browser.pause(400);

    const input = await component.shadow$('input').getElement();
    await expect(input).toBeDisplayed();
    const selectedDate = new Date();
    selectedDate.setDate(Math.floor(daysInMonth / 2));
    await expect(await input.getValue()).toEqual(new Intl.DateTimeFormat("en-US", {
      month: '2-digit', day: '2-digit', year: 'numeric'
    }).format(selectedDate));
  });

  it('EnchantedDatepicker - should be able to open calendar and select Today', async () => {
    render(
      html`
        <enchanted-datepicker></enchanted-datepicker>
      `,
      document.body
    );

    const component = await $('enchanted-datepicker').getElement();
    await expect(component).toBeDisplayed();

    const calendarBtn = await component.shadow$(`button[part=${DATEPICKER_PARTS.DATEPICKER_DIV_CALENDAR_BUTTON}]`).getElement();
    let calendarDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR}]`).getElement();
    await expect(calendarBtn).toBeDisplayed();
    await expect(calendarDiv).not.toBeDisplayed();
    await calendarBtn.click();
    await browser.pause(400);

    calendarDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR}]`).getElement();
    await expect(calendarDiv).toBeDisplayed();

    const todayBtn = await calendarDiv.shadow$(`button[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR_FOOTER_BUTTON}]`).getElement();   
    await expect(todayBtn).toBeDisplayed();
    
    await todayBtn.click();
    await browser.pause(400);

    const input = await component.shadow$('input').getElement();
    await expect(input).toBeDisplayed();
    const selectedDate = new Date(Date.UTC(yearNow, monthNow, dayNow));
    await expect(await input.getValue()).toEqual(new Intl.DateTimeFormat("en-US", {
      month: '2-digit', day: '2-digit', year: 'numeric'
    }).format(selectedDate));
  });

  it('EnchantedDatepicker - should be able to open calendar and change Year and reopen calendar and year view again', async () => {
    render(
      html`
        <enchanted-datepicker></enchanted-datepicker>
      `,
      document.body
    );

    let component = await $('enchanted-datepicker').getElement();
    await expect(component).toBeDisplayed();

    const calendarBtn = await component.shadow$(`button[part=${DATEPICKER_PARTS.DATEPICKER_DIV_CALENDAR_BUTTON}]`).getElement();
    let calendarDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR}]`).getElement();
    await expect(calendarBtn).toBeDisplayed();
    await expect(calendarDiv).not.toBeDisplayed();
    await calendarBtn.click();
    await browser.pause(400);

    calendarDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR}]`).getElement();
    await expect(calendarDiv).toBeDisplayed();

    let yearViewBtn = await component.shadow$(`button[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR_YEAR_VIEW_BUTTON}]`).getElement();
    await expect(yearViewBtn).toBeDisplayed();
    await yearViewBtn.click();
    await browser.pause(400);

    component = await $('enchanted-datepicker').getElement();
    let yearDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_YEAR_SELECTION_YEAR_DIV}]`).getElement();
    await expect(yearDiv).toBeDisplayed();

    const yearBtns = await yearDiv.shadow$$(`button[part=${DATEPICKER_PARTS.DATEPICKER_YEAR_SELECTION_YEAR_BUTTON}]`).getElements();
    expect(yearBtns.length).toBe((yearNow + 100) - MIN_YEAR); // Assuming the year buttons are from 1900 to current year + 100
    const toBeSelectedYearString = Number(await yearBtns[Math.floor(yearBtns.length / 2)].getText());
    await yearBtns[Math.floor(yearBtns.length / 2)].click();
    await browser.pause(400);

    calendarDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR}]`).getElement();
    await expect(calendarDiv).toBeDisplayed();

    const calendarYearSpan = await calendarDiv.shadow$(`span[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR_DIV_YEAR_SPAN}]`).getElement();
    await expect(calendarYearSpan).toBeDisplayed();
    await expect(calendarYearSpan).toHaveText(`${monthsEn[monthNow]} ${toBeSelectedYearString}`);

    calendarDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR}]`).getElement();
    await expect(calendarDiv).toBeDisplayed();

    const daysInToBeSelectedMonth = new Date(toBeSelectedYearString, monthNow + 1, 0).getDate();
    const calendarDays = await calendarDiv.shadow$$(`button[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR_DATES_BUTTON}]`).getElements();
    const calendarBtnId = await calendarDays[0].getAttribute('data-testid');
    const dateToSelect = Math.floor(daysInToBeSelectedMonth / 2);
    const calendarBtnSelectedId = calendarBtnId.replace(/-[^-]+$/, `-${dateToSelect}`);
    const calendarBtnSelected = await calendarDiv.shadow$(`button[data-testid=${calendarBtnSelectedId}]`).getElement();
    await calendarBtnSelected.click();
    await browser.pause(400);

    const input = await component.shadow$('input').getElement();
    await expect(input).toBeDisplayed();
    const selectedDate = new Date(Date.UTC(
      toBeSelectedYearString,
      monthNow,
      dateToSelect
    ));
    
    await expect(await input.getValue()).toEqual(new Intl.DateTimeFormat("en-US", {
      month: '2-digit', day: '2-digit', year: 'numeric',
    }).format(selectedDate));

    await calendarBtn.click();
    await browser.pause(400);

    yearViewBtn = await component.shadow$(`button[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR_YEAR_VIEW_BUTTON}]`).getElement();
    await expect(yearViewBtn).toBeDisplayed();
    await yearViewBtn.click();
    await browser.pause(400);

    calendarDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR}]`).getElement();
    await expect(calendarDiv).toBeDisplayed();
  });


  it('EnchantedDatepicker - should be able to open calendar and change to Next Month', async () => {
    render(
      html`
        <enchanted-datepicker></enchanted-datepicker>
      `,
      document.body
    );

    const component = await $('enchanted-datepicker').getElement();
    await expect(component).toBeDisplayed();

    const calendarBtn = await component.shadow$(`button[part=${DATEPICKER_PARTS.DATEPICKER_DIV_CALENDAR_BUTTON}]`).getElement();
    let calendarDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR}]`).getElement();
    await expect(calendarBtn).toBeDisplayed();
    await expect(calendarDiv).not.toBeDisplayed();
    await calendarBtn.click();
    await browser.pause(400);

    calendarDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR}]`).getElement();
    await expect(calendarDiv).toBeDisplayed();

    // Change month
    const nextMonthBtn = await component.shadow$(`button[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR_MONTH_NEXT}]`).getElement();
    await expect(nextMonthBtn).toBeDisplayed();

    await nextMonthBtn.click();
    await browser.pause(400);

    const calendarDays = await calendarDiv.shadow$$(`button[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR_DATES_BUTTON}]`).getElements();
    await calendarDays[Math.floor(calendarDays.length / 2)].click();
    await browser.pause(400);

    const input = await component.shadow$('input').getElement();
    await expect(input).toBeDisplayed();
    // Always construct the selectedDate using the exact year, month, and day you expect, 
    // rather than mutating a new Date() object. For example:
    // If current month is December (11), next month is January (0) of next year
    // If current month is not December, next month is current month + 1 of current year
    // In both cases, select the middle day of that month for consistency
    // This ensures the date is always correct regardless of the current time or timezone.
    const selectedDate = new Date(
      monthNow === 11 ? yearNow + 1 : yearNow,
      monthNow < 11 ? monthNow + 1 : 0,
      Math.floor(calendarDays.length / 2)
    );
    await expect(await input.getValue()).toEqual(new Intl.DateTimeFormat("en-US", {
      month: '2-digit', day: '2-digit', year: 'numeric'
    }).format(selectedDate));
  });

  it('EnchantedDatepicker - should be able to open calendar and change Prev Month', async () => {
    render(
      html`
        <enchanted-datepicker></enchanted-datepicker>
      `,
      document.body
    );

    const component = await $('enchanted-datepicker').getElement();
    await expect(component).toBeDisplayed();

    const calendarBtn = await component.shadow$(`button[part=${DATEPICKER_PARTS.DATEPICKER_DIV_CALENDAR_BUTTON}]`).getElement();
    let calendarDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR}]`).getElement();
    await expect(calendarBtn).toBeDisplayed();
    await expect(calendarDiv).not.toBeDisplayed();
    await calendarBtn.click();
    await browser.pause(400);

    calendarDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR}]`).getElement();
    await expect(calendarDiv).toBeDisplayed();

    // Change month
    const prevMonthBtn = await component.shadow$(`button[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR_MONTH_PREV}]`).getElement();
    await expect(prevMonthBtn).toBeDisplayed();

    await prevMonthBtn.click();
    await browser.pause(400);

    const calendarDays = await calendarDiv.shadow$$(`button[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR_DATES_BUTTON}]`).getElements();
    await calendarDays[Math.floor(calendarDays.length / 2)].click();
    await browser.pause(400);

    const input = await component.shadow$('input').getElement();
    await expect(input).toBeDisplayed();
    // Always construct the selectedDate using the exact year, month, and day you expect, that is first day
    // rather than mutating a new Date() object. For example:
    // If current month is January (0), previous month is December (11) of last year
    // If current month is not January, previous month is current month - 1 of current year
    // In both cases, select the middle day of that month for consistency
    // And remember to add 1 to the day since getDate() is 1-based
    // This ensures the date is always correct regardless of the current time or timezone.
    const selectedDate = new Date(yearNow, monthNow, 1);
    selectedDate.setFullYear(monthNow === 0 ? yearNow - 1 : yearNow); // Previous year if January
    selectedDate.setMonth(monthNow === 0 ? 11 : monthNow - 1); // Previous month
    selectedDate.setDate(Math.floor(calendarDays.length / 2));
    await expect(await input.getValue()).toEqual(new Intl.DateTimeFormat("en-US", {
      month: '2-digit', day: '2-digit', year: 'numeric'
    }).format(selectedDate));
  });

  it('EnchantedDatepicker - should validate that the component calendar buttons are accessible via Tab and Shift + Tab', async () => {
    render(
      html`
        <enchanted-datepicker></enchanted-datepicker>
      `,
      document.body
    );

    let component = await $('enchanted-datepicker').getElement();
    await expect(component).toBeDisplayed();

    const calendarBtn = await component.shadow$(`button[part=${DATEPICKER_PARTS.DATEPICKER_DIV_CALENDAR_BUTTON}]`).getElement();
    let calendarDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR}]`).getElement();
    await expect(calendarBtn).toBeDisplayed();
    await expect(calendarDiv).not.toBeDisplayed();
    await calendarBtn.click();
    await browser.pause(400);

    await browser.action('key')
      .down(Key.Tab)
      .down(Key.Tab)
      .down(Key.Tab)
      .down(Key.Tab)
      .down(Key.Tab)
      .down(Key.Enter)
      .perform();

    await browser.pause(400);
    component = await $('enchanted-datepicker').getElement();

    const input = await component.shadow$('input').getElement();
    await expect(input).toBeDisplayed();
    const selectedDate = new Date(Date.UTC(yearNow, monthNow, dayNow));
    await expect(await input.getValue()).toEqual(new Intl.DateTimeFormat("en-US", {
      month: '2-digit', day: '2-digit', year: 'numeric'
    }).format(selectedDate));

    calendarDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR}]`).getElement();
    await expect(calendarDiv).not.toBeDisplayed();

    await calendarBtn.click();
    await browser.pause(400);

    calendarDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR}]`).getElement();
    await expect(calendarDiv).toBeDisplayed();

    await browser.action('key')
      .down(Key.Tab)
      .down(Key.Tab)
      .down(Key.Tab)
      .down(Key.Tab)
      .down(Key.Tab)
      .down(Key.Enter)
      .perform();

    await browser.action('key')
      .down(Key.Shift)
      .down(Key.Tab)
      .down(Key.Shift)
      .down(Key.Tab)
      .down(Key.Shift)
      .down(Key.Tab)
      .down(Key.Shift)
      .down(Key.Tab)
      .down(Key.Shift)
      .down(Key.Tab)
      .down(Key.Enter)
      .perform();

    await browser.pause(400);

    expect(calendarDiv).not.toBeDisplayed();
  });

  it('EnchantedDatepicker - should be able to open calendar, change month, navigate to first day of month and select it', async () => {
    render(
      html`
        <enchanted-datepicker></enchanted-datepicker>
      `,
      document.body
    );

    const component = await $('enchanted-datepicker').getElement();
    await expect(component).toBeDisplayed();

    const calendarBtn = await component.shadow$(`button[part=${DATEPICKER_PARTS.DATEPICKER_DIV_CALENDAR_BUTTON}]`).getElement();
    let calendarDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR}]`).getElement();
    await expect(calendarBtn).toBeDisplayed();
    await expect(calendarDiv).not.toBeDisplayed();
    await calendarBtn.click();
    await browser.pause(400);

    calendarDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR}]`).getElement();
    await expect(calendarDiv).toBeDisplayed();

    // Change month - because if today's month, tab will go to today's date but we want to go to Date 1
    const nextMonth = await component.shadow$(`button[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR_MONTH_NEXT}]`).getElement();
    await expect(nextMonth).toBeDisplayed();

    await nextMonth.click();
    await browser.pause(400);

    await browser.action('key')
      .down(Key.Tab)
      .down(Key.Tab)
      .down(Key.Tab)
      .down(Key.Tab)
      .down(Key.Enter)
      .perform();

    const input = await component.shadow$('input').getElement();
    await expect(input).toBeDisplayed();
    // To ensure your date comparison does not fail due to timezone issues,
    // you should always construct and format dates using UTC, This avoids local timezone offsets affecting the formatted string.
    const selectedDate = new Date(Date.UTC(
      monthNow === 11 ? yearNow + 1 : yearNow,
      monthNow < 11 ? monthNow + 1 : 0,
      1
    ));
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: '2-digit', day: '2-digit', year: 'numeric',
    }).format(selectedDate);
    await expect(await input.getValue()).toEqual(formattedDate);
  });

  it('EnchantedDatepicker - should be able to keyboard navigate and select date', async () => {
    render(
      html`
        <enchanted-datepicker></enchanted-datepicker>
      `,
      document.body
    );

    const component = await $('enchanted-datepicker').getElement();
    await expect(component).toBeDisplayed();

    const calendarBtn = await component.shadow$(`button[part=${DATEPICKER_PARTS.DATEPICKER_DIV_CALENDAR_BUTTON}]`).getElement();
    let calendarDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR}]`).getElement();
    await expect(calendarBtn).toBeDisplayed();
    await expect(calendarDiv).not.toBeDisplayed();
    await calendarBtn.click();
    await browser.pause(400);

    calendarDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR}]`).getElement();
    await expect(calendarDiv).toBeDisplayed();

    // Change month - because if today's month, tab will go to today's date but we want to go to Date 1
    const nextMonth = await component.shadow$(`button[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR_MONTH_NEXT}]`).getElement();
    await expect(nextMonth).toBeDisplayed();

    await nextMonth.click();
    await browser.pause(400);

    await browser.action('key')
      .down(Key.Tab)
      .down(Key.Tab)
      .down(Key.Tab)
      .down(Key.Tab)
      .down(Key.Enter)
      .perform();

    let input = await component.shadow$('input').getElement();
    await expect(input).toBeDisplayed();
    // To ensure your date comparison does not fail due to timezone issues,
    // you should always construct and format dates using UTC, This avoids local timezone offsets affecting the formatted string.
    let updatedMonthNow = monthNow < 11 ? monthNow + 1 : 0;
    let updatedYearNow = monthNow === 11 ? yearNow + 1 : yearNow;
    let selectedDate = new Date(Date.UTC(
      updatedYearNow,
      updatedMonthNow,
      1
    ));
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: '2-digit', day: '2-digit', year: 'numeric',
    }).format(selectedDate);
    await expect(await input.getValue()).toEqual(formattedDate);

    await calendarBtn.click();
    await browser.pause(400);

    calendarDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR}]`).getElement();
    await expect(calendarDiv).toBeDisplayed();

    // Go to first day of month
    await browser.action('key')
      .down(Key.Tab)
      .down(Key.Tab)
      .down(Key.Tab)
      .down(Key.Tab)
      .perform();

    await browser.pause(400);

    // Go to next month
    await browser.action('key')
      .down(Key.Shift)
      .down(Key.Tab)
      .down(Key.Enter)
      .perform();

    await browser.pause(500);

    // Go to first day of next month
    await browser.action('key')
      .down(Key.Tab)
      .down(Key.Enter)
      .perform();

    await browser.pause(400);

    input = await component.shadow$('input').getElement();
    await expect(input).toBeDisplayed();
    // To ensure your date comparison does not fail due to timezone issues,
    // you should always construct and format dates using UTC, This avoids local timezone offsets affecting the formatted string.
    // Since we are already in next month, just add 1 to month and set date to 1
    selectedDate = new Date(Date.UTC(
      updatedMonthNow === 11 ? updatedYearNow + 1 : updatedYearNow,
      updatedMonthNow < 11 ? updatedMonthNow + 1 : 0,
      1
    ));
    const formattedDate1 = new Intl.DateTimeFormat("en-US", {
      month: '2-digit', day: '2-digit', year: 'numeric',
    }).format(selectedDate);
    await expect(await input.getValue()).toEqual(formattedDate1);
  });

  it('EnchantedDatepicker - should be able to open calendar and close it via Escape key', async () => {
    render(
      html`
        <enchanted-datepicker></enchanted-datepicker>
      `,
      document.body
    );

    const component = await $('enchanted-datepicker').getElement();
    await expect(component).toBeDisplayed();

    const calendarBtn = await component.shadow$(`button[part=${DATEPICKER_PARTS.DATEPICKER_DIV_CALENDAR_BUTTON}]`).getElement();
    let calendarDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR}]`).getElement();
    await expect(calendarBtn).toBeDisplayed();
    await expect(calendarDiv).not.toBeDisplayed();
    await calendarBtn.click();
    await browser.pause(400);

    calendarDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR}]`).getElement();
    await expect(calendarDiv).toBeDisplayed();

    await browser.action('key')
      .down(Key.Escape)
      .perform();

    await browser.pause(400);

    calendarDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR}]`).getElement();
    await expect(calendarDiv).not.toBeDisplayed();
  });

  it('EnchantedDatepicker - should be able to go to last supported month and check that next month is disabled', async () => {
    render(
      html`
        <enchanted-datepicker></enchanted-datepicker>
      `,
      document.body
    );

    const component = await $('enchanted-datepicker').getElement();
    await expect(component).toBeDisplayed();

    let calendarBtn = await component.shadow$(`button[part=${DATEPICKER_PARTS.DATEPICKER_DIV_CALENDAR_BUTTON}]`).getElement();
    let calendarDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR}]`).getElement();
    await expect(calendarBtn).toBeDisplayed();
    await expect(calendarDiv).not.toBeDisplayed();
    await calendarBtn.click();
    await browser.pause(400);

    calendarDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR}]`).getElement();
    await expect(calendarDiv).toBeDisplayed();

    let input = await component.shadow$('input').getElement();
    await expect(input).toBeDisplayed();

    await input.setValue(`12/01/${yearNow + 100}`);
    
    await browser.action('key')
      .down(Key.Escape)
      .perform();

    await browser.pause(400);
    
    calendarDiv = await component.shadow$(`div[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR}]`).getElement();
    await expect(calendarDiv).not.toBeDisplayed();

    input = await component.shadow$('input').getElement();
    let selectedDate = new Date(Date.UTC(
      yearNow + MAX_YEAR_BUFFER,
      11,
      1
    ));
    await expect(await input.getValue()).toEqual(new Intl.DateTimeFormat("en-US", {
      month: '2-digit', day: '2-digit', year: 'numeric'
    }).format(selectedDate));

    await calendarBtn.click();
    await browser.pause(400);

    const nextMonthBtn = await component.shadow$(`button[part=${DATEPICKER_PARTS.DATEPICKER_CALENDAR_MONTH_NEXT}]`).getElement();
    await expect(nextMonthBtn).toBeDisplayed();
    await expect(nextMonthBtn).toHaveAttribute('disabled', 'true');

    await browser.action('key')
      .down(Key.Escape)
      .perform();

    await browser.pause(400);
  });

  it('EnchantedDatepicker - should be able to type a full valid date', async () => {
    let changeEventDetail = '';
    render(
      html`
        <enchanted-datepicker @date-change=${(e: CustomEvent) => {return changeEventDetail = e.detail.value;} }></enchanted-datepicker>
      `,
      document.body
    );

    const component = await $('enchanted-datepicker').getElement();
    await expect(component).toBeDisplayed();

    const calendarInput = await component.shadow$('input').getElement();
    await expect(calendarInput).toBeDisplayed();
    await calendarInput.click();
    await browser.pause(400);

    await browser.action('key')
      .down('0')
      .down('1')
      .down('0')
      .down('2')
      .down('2')
      .down('0')
      .down('2')
      .down('5')
      .perform();

    await browser.pause(400);

    const input = await component.shadow$('input').getElement();
    await expect(input).toBeDisplayed();
    const expectedDate = new Date(Date.UTC(2025, 0, 2));
    await expect(await input.getValue()).toEqual(new Intl.DateTimeFormat("en-US", {
      month: '2-digit', day: '2-digit', year: 'numeric',
    }).format(expectedDate));

    // UTC difference
    expect('2025-01-01').toEqual(formatDate(Number(changeEventDetail), FORMAT_FOR_CONVERTING_TO_UNIX_TIMESTAMP));
  });

  it('EnchantedDatepicker - should be able to type a partial date and expect invalid hint', async () => {
    let changeEventDetail = '';
    render(
      html`
        <enchanted-datepicker @date-change=${(e: CustomEvent) => {return changeEventDetail = e.detail.value;} }></enchanted-datepicker>
      `,
      document.body
    );

    const component = await $('enchanted-datepicker').getElement();
    await expect(component).toBeDisplayed();

    const calendarInput = await component.shadow$('input').getElement();
    await expect(calendarInput).toBeDisplayed();
    await calendarInput.click();
    await browser.pause(400);

    await browser.action('key')
      .down('0')
      .down('1')
      .down('0')
      .down('2')
      .perform();

    await browser.pause(400);

    const input = await component.shadow$('input').getElement();
    await expect(input).toBeDisplayed();
    await expect(await input.getValue()).toEqual('01/02/');

    const invalidHint = await component.shadow$(`p[part=${DATEPICKER_PARTS.DATEPICKER_INVALID_TEXT}]`).getElement();
    await expect(invalidHint).toBeDisplayed();

    expect(changeEventDetail).toEqual(''); // empty string for invalid date
  });
});
