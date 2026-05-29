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
/* eslint-why better safe than sorry */
/* eslint-disable no-useless-escape */

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import localeData from 'dayjs/plugin/localeData';
import utc from 'dayjs/plugin/utc';
import createDebug from 'debug';

const debug = createDebug('enchanted-web-components:utils:dateUtils.ts');

dayjs.extend(localizedFormat);
dayjs.extend(localeData);
dayjs.extend(utc);

import 'dayjs/locale/ar';
import 'dayjs/locale/ca';
import 'dayjs/locale/cs';
import 'dayjs/locale/da';
import 'dayjs/locale/de';
import 'dayjs/locale/el';
import 'dayjs/locale/en';
import 'dayjs/locale/es';
import 'dayjs/locale/fi';
import 'dayjs/locale/fr';
import 'dayjs/locale/hr';
import 'dayjs/locale/hu';
import 'dayjs/locale/it';
import 'dayjs/locale/he';
import 'dayjs/locale/ja';
import 'dayjs/locale/kk';
import 'dayjs/locale/ko';
import 'dayjs/locale/nl';
import 'dayjs/locale/nb';
import 'dayjs/locale/pl';
import 'dayjs/locale/pt';
import 'dayjs/locale/pt-br';
import 'dayjs/locale/ro';
import 'dayjs/locale/ru';
import 'dayjs/locale/sk';
import 'dayjs/locale/sl';
import 'dayjs/locale/sv';
import 'dayjs/locale/th';
import 'dayjs/locale/tr';
import 'dayjs/locale/uk';
import 'dayjs/locale/zh';
import 'dayjs/locale/zh-tw';
import { DEFAULT_DATE_FORMAT, DEFAULT_CALENDAR_LOCALE, FORMAT_FOR_CONVERTING_TO_UNIX_TIMESTAMP } from '../types/enchanted-datepicker';
import { SUPPORTED_LOCALES } from '../components/constants';


/**
 * Ensure that the locale is the correct DayJs locale.
 * @param locale string representing the locale coming from DX Core
 * @returns string that can be used with DayJs
 */
export const mappingLocaleFromCoreToDayJs = (locale?: string): string => {
  locale = locale === 'zh_TW' ? 'zh-tw' : locale;
  locale = locale === 'pt_BR' ? 'pt-br' : locale;
  locale = locale === 'iw' ? 'he' : locale;
  locale = locale === 'no' ? 'nb' : locale;
  return locale || 'en'; // Default to English if no locale is provided
};


/**
 * Date utility to format date from a Unix timestamp
 *
 * @param date Unix timestamp in milliseconds
 * @param locale string representing the locale (default is 'en')
 * @returns formatted date string using dayjs
 */
export const formatDateTime = (date?: number | string | undefined, locale: string = DEFAULT_CALENDAR_LOCALE): string => {
  if (date !== undefined) {
    let dateTime: dayjs.Dayjs | undefined;
    dateTime = dayjs(date).locale(locale);
    return dateTime.format('lll');
  }
  return '';
};

/**
 * 
 * @param locale string representing the locale
 * @returns Array<string> of localized month names
 */
export const getLocalizedMonths = (locale: string = DEFAULT_CALENDAR_LOCALE): string[] => {
  const dayJSLocale = mappingLocaleFromCoreToDayJs(locale);
  dayjs.locale(dayJSLocale);
  const localizedMonths: string[] = dayjs.months();
  return localizedMonths;
};

/**
 * 
 * @param locale string representing the locale
 * @returns Array<string> of localized days of the week
 */
export const getLocalizedDays = (locale: string = DEFAULT_CALENDAR_LOCALE): string[] => {
  const dayJSLocale = mappingLocaleFromCoreToDayJs(locale);
  dayjs.locale(dayJSLocale);
  let localizedDays: string[] = dayjs.weekdaysShort();
  // Ensure the first day of the week is Monday
  if (localizedDays.length > 0) {
    const sunday = localizedDays.shift(); // Remove the first element
    if (sunday) {
      localizedDays.push(sunday); // Add it to the end
    }

    if (locale !== 'ar' && locale !== 'iw') {
      localizedDays = localizedDays.map((day) => {
        return day.slice(0, 2); // Align with Enchanted React DatePicker implementation
      });
    } else if (locale === 'iw') {
      localizedDays = localizedDays.map((day) => {
        return day.slice(0, 1); // Align with Enchanted React DatePicker implementation
      });
    } else if (locale === 'ar') {
      localizedDays = localizedDays.map((day, index) => {
        debug('Mapping day string: %s, with index: %d', day, index);
        if (index === 0) {
          return day.slice(4, 5); // For Monday: Align with Enchanted React DatePicker implementation
        }
        if ([2, 6].includes(index)) {
          return day.slice(1, 2); // For Wednesday and Sunday: Align with Enchanted React DatePicker implementation
        }
        return day.slice(0, 1); // Align with Enchanted React DatePicker implementation
      });
    }
  }
  return localizedDays;
};

/**
 * Date utility to format date from an MM/DD/YYYY format to its localized format
 *
 * @param date string in MM/DD/YYYY format
 * @param locale string representing the locale (default is 'en')
 * @returns formatted date string using dayjs
 */
export const formatDate = (date?: number, format?: string): string => {
  if (date !== undefined && format !== undefined) {
    let formattedDateStr: string | undefined;
    const formattedDateInDayJs = dayjs(date, format); // Get the unix date in specific format
    if (formattedDateInDayJs.isValid()) {
      formattedDateStr = formattedDateInDayJs.format(format); // Get the formatted date string
      return formattedDateStr;
    }
  }
  return '';
};

/**
 * Date utility to get the accepted date format for a given locale.
 * 
 * @param locale string representing the locale
 * @returns string representing the accepted date format for the given locale
 */
export const getAcceptedDateFormat = (locale: string = DEFAULT_CALENDAR_LOCALE): string => {
  const defaultFormat = DEFAULT_DATE_FORMAT;
  let foundFormat = '';
  if (dayjs.Ls[locale]) {
    foundFormat = dayjs.Ls[locale].formats.L || defaultFormat; // Return the localized format or default if not found
    /* eslint-why better For Arabic especially, DayJS format seem to append some invisible characters in the ASCII range that throw off the matching */
    /* eslint-disable-next-line no-control-regex */
    foundFormat = foundFormat.replace(/[^\x00-\x7F]/g, ''); // Remove any non-ASCII characters somehow found in Arabic localedata
  }
  return foundFormat || defaultFormat; // Default format if locale not found
};

/**
 * Date utility to get all accepted date formats for all supported locales.
 * 
 * @returns Array<string> of accepted date formats for all supported locales
 */
export const getAllAcceptedDateFormats = (): string[] => {
  const formats: string[] = [];
  Object.values(SUPPORTED_LOCALES).forEach(locale => {
    const mappedLocale = mappingLocaleFromCoreToDayJs(locale);
    const format = getAcceptedDateFormat(mappedLocale);
    if (!formats.includes(format)) {
      formats.push(format);
    }
  });
  return formats;
};

export const UNIQUE_SUPPORTED_DATE_FORMATS = getAllAcceptedDateFormats();

/**
 * Date utility to format a partial date input based on the accepted format.
 * 
 * @param date string representing the date input
 * @param format string representing the accepted format
 * @returns formatted date string based on the accepted format
 */
export const formatPartialDateInputWithAcceptedFormat = (date: string, format: string): string => {
  let formattedDate = date.replace(/\.|\/|\-/g, ''); // Remove any existing delimiters

  // If the format is D/M/YYYY, we allow single digit day/month and 4 digit year
  if (format === 'D/M/YYYY' && formattedDate.length > (format.length - 2)) { // Detect anything longer than 6 characters
    formattedDate = formattedDate.slice(0, format.length); // Ensure the formatted date does not exceed the expected length 6-8 characters
  } else if (UNIQUE_SUPPORTED_DATE_FORMATS.includes(format) && formattedDate.length > (format.length - 2)) {
    // For all other formats, ensure the formatted date does not exceed the expected length
    formattedDate = formattedDate.slice(0, format.length - 2);
  }

  switch (format) {
    case 'D/M/YYYY': {
      // For D/M/YYYY, we allow single digit day/month and 4 digit year
      const dd = formattedDate.length === 8
        ? formattedDate.slice(0, 2)
        : (formattedDate.length === 6
          ? formattedDate.slice(0, 1)
          : formattedDate.slice(0, 1) // Fallback slice
        );
      const mm = formattedDate.length === 8
        ? formattedDate.slice(2, 4)
        : (formattedDate.length === 6
          ? formattedDate.slice(1, 2)
          : formattedDate.slice(1, 3)  // Fallback slice 
        );
      const yr = formattedDate.length === 8
        ? formattedDate.slice(4, 8)
        : (formattedDate.length === 6
          ? formattedDate.slice(2, 6)
          : formattedDate.slice(3, 7) // Fallback slice
        );
      
      const day = dd ? `${dd.padStart(dd.length, '0')}/` : '';
      const month = mm ? `${mm.padStart(mm.length, '0')}/` : '';
      const year = yr ? `${yr.padStart(yr.length, '0')}` : '';
      
      formattedDate = `${day}${month}${year}`;
    }
      break;
    case 'DD/MM/YYYY': {
      const dd = formattedDate.slice(0, 2);
      const mm = formattedDate.slice(2, 4);
      const yr = formattedDate.slice(4, 8);

      const day = dd ? `${dd.padStart(dd.length, '0')}${dd.length === 2 ? '/' : ''}` : '';
      const month = mm ? `${mm.padStart(mm.length, '0')}${mm.length === 2 ? '/' : ''}` : '';
      const year = yr ? `${yr.padStart(yr.length, '0')}` : '';

      formattedDate = `${day}${month}${year}`;
    }
      break;
    case 'MM/DD/YYYY': {
      const mm = formattedDate.slice(0, 2);
      const dd = formattedDate.slice(2, 4);
      const yr = formattedDate.slice(4, 8);

      const month = mm ? `${mm.padStart(mm.length, '0')}${mm.length === 2 ? '/' : ''}` : '';
      const day = dd ? `${dd.padStart(dd.length, '0')}${dd.length === 2 ? '/' : ''}` : '';
      const year = yr ? `${yr.padStart(yr.length, '0')}` : '';

      formattedDate = `${month}${day}${year}`;
    }
      break;
    case 'YYYY/MM/DD': {
      const yr = formattedDate.slice(0, 4);
      const mm = formattedDate.slice(4, 6);
      const dd = formattedDate.slice(6, 8);

      const year = yr ? `${yr.padStart(yr.length, '0')}${yr.length === 4 ? '/' : ''}` : '';
      const month = mm ? `${mm.padStart(mm.length, '0')}${mm.length === 2 ? '/' : ''}` : '';
      const day = dd ? `${dd.padStart(dd.length, '0')}` : '';
      
      formattedDate = `${year}${month}${day}`;
    }
      break;
    case 'DD.MM.YYYY': {
      const dd = formattedDate.slice(0, 2);
      const mm = formattedDate.slice(2, 4);
      const yr = formattedDate.slice(4, 8);

      const day = dd ? `${dd.padStart(dd.length, '0')}${dd.length === 2 ? '.' : ''}` : '';
      const month = mm ? `${mm.padStart(mm.length, '0')}${mm.length === 2 ? '.' : ''}` : '';
      const year = yr ? `${yr.padStart(yr.length, '0')}` : '';

      formattedDate = `${day}${month}${year}`;
    }
      break;
    case 'YYYY.MM.DD.': {
      const yr = formattedDate.slice(0, 4);
      const mm = formattedDate.slice(4, 6);
      const dd = formattedDate.slice(6, 8);

      const year = yr ? `${yr.padStart(yr.length, '0')}${yr.length === 4 ? '.' : ''}` : '';
      const month = mm ? `${mm.padStart(mm.length, '0')}${mm.length === 2 ? '.' : ''}` : '';
      const day = dd ? `${dd.padStart(dd.length, '0')}${dd.length === 2 ? '.' : ''}` : '';
      
      formattedDate = `${year}${month}${day}`;
    }
      break;
    case 'DD-MM-YYYY': {
      const dd = formattedDate.slice(0, 2);
      const mm = formattedDate.slice(2, 4);
      const yr = formattedDate.slice(4, 8);

      const day = dd ? `${dd.padStart(dd.length, '0')}${dd.length === 2 ? '-' : ''}` : '';
      const month = mm ? `${mm.padStart(mm.length, '0')}${mm.length === 2 ? '-' : ''}` : '';
      const year = yr ? `${yr.padStart(yr.length, '0')}` : '';

      formattedDate = `${day}${month}${year}`;
    }
      break;
    case 'YYYY-MM-DD': {
      const yr = formattedDate.slice(0, 4);
      const mm = formattedDate.slice(4, 6);
      const dd = formattedDate.slice(6, 8);

      const year = yr ? `${yr.padStart(yr.length, '0')}${yr.length === 4 ? '-' : ''}` : '';
      const month = mm ? `${mm.padStart(mm.length, '0')}${mm.length === 2 ? '-' : ''}` : '';
      const day = dd ? `${dd.padStart(dd.length, '0')}` : '';
      
      formattedDate = `${year}${month}${day}`;
    }
      break;
    default:
      break; // If no format matches, do nothing and return the original date below
  }

  return formattedDate;
};

/**
 * Date utility to get the regex for an accepted date format.
 * 
 * @param format string representing the accepted date format
 * @returns string representing the regex for the accepted date format
 */
export const getRegexForAcceptedDateFormat = (format: string): string => {
  switch (format) {
    case 'D/M/YYYY':
      return `^(\\d{1,2})\/(\\d{1,2})\/(\\d{4})$`;
    case 'DD/MM/YYYY':
      return `^(\\d{2})\/(\\d{2})\/(\\d{4})$`;
    case 'MM/DD/YYYY':
      return `^(\\d{2})\/(\\d{2})\/(\\d{4})$`;
    case 'YYYY/MM/DD':
      return `^(\\d{4})\/(\\d{2})\/(\\d{2})$`;
    case 'DD.MM.YYYY':
      return `^(\\d{2})\.(\\d{2})\.(\\d{4})$`;
    case 'YYYY.MM.DD.':
      return `^(\\d{4})\.(\\d{2})\.(\\d{2}).$`;
    case 'DD-MM-YYYY':
      return `^(\\d{2})-(\\d{2})-(\\d{4})$`;
    case 'YYYY-MM-DD':
      return `^(\\d{4})-(\\d{2})-(\\d{2})$`;
    default:
      // If no format matches, return a default regex
      return `^(\\d{2})\/(\\d{2})\/(\\d{4})$`; // Fallback to MM/DD/YYYY format
  }
};

/**
 * Date utility to get the Unix timestamp in milliseconds from a date string.
 * 
 * @param date string representing the date
 * @returns number representing the Unix timestamp in milliseconds or an empty string if the date is invalid
 */
export const getUnixTimestampMilliseconds = (date: string): number => {
  const dayJSDate = dayjs.utc(date);
  if (dayJSDate.isValid()) {
    return dayJSDate.valueOf(); // Returns the timestamp in milliseconds
  }
  return 0; // Return 0 if the date is invalid
};

/**
 * Date utility to parse a date string from an accepted format.
 * 
 * @param date string representing the date
 * @param format string representing the accepted format
 * @returns object containing day, month, year, and delimiter
 */
export const parseDateFromAcceptedFormat = (date: string, format: string): {
  dd: number,
  mm: number,
  yr: number,
  delimiter: string,
}  => {
  let dd = 0, mm = 0, yr = 0, delimiter = '';
  
  switch (format) {
    case 'D/M/YYYY':
      [dd, mm, yr] = date.split('/').map(Number);
      delimiter = '/';
      break;
    case 'DD/MM/YYYY':
      [dd, mm, yr] = date.split('/').map(Number);
      delimiter = '/';
      break;
    case 'MM/DD/YYYY':
      [mm, dd, yr] = date.split('/').map(Number);
      delimiter = '/';
      break;
    case 'YYYY/MM/DD':
      [yr, mm, dd] = date.split('/').map(Number);
      delimiter = '/';
      break;
    case 'DD.MM.YYYY':
      [dd, mm, yr] = date.split('.').map(Number);
      delimiter = '.';
      break;
    case 'YYYY.MM.DD.':
      [yr, mm, dd] = date.split('.').map(Number);
      delimiter = '.';
      break;
    case 'DD-MM-YYYY':
      [dd, mm, yr] = date.split('-').map(Number);
      delimiter = '-';
      break;
    case 'YYYY-MM-DD':
      [yr, mm, dd] = date.split('-').map(Number);
      delimiter = '-';
      break;
    default:
      return { dd: 0, mm: 0, yr: 0, delimiter: '' }; // Return empty if format is not recognized
  }

  return { dd, mm, yr, delimiter };
};
/* eslint-enable no-useless-escape */


/**
 * Date utility to correct the end date for the same date filter.
 * 
 * @param dateEnd string representing the end date
 * @returns string representing the corrected end date
 */
export const correctDateEndForDatePickerFilter = (dateEnd: string): string => {
  let newDateEnd = dateEnd;
  if (dateEnd.length > 0 && !Number.isNaN(Number(dateEnd))) {
    // If the start and end dates are the same and the end date is a valid number
    const dateEndString = formatDate(Number(dateEnd), FORMAT_FOR_CONVERTING_TO_UNIX_TIMESTAMP);
    const [ year, mm, dd ] = dateEndString.split('-');
    const daysInMonth = new Date(Number(year), Number(mm), 0).getDate();

    // If dd is less than the days in month
    if (!Number.isNaN(Number(dd)) && Number(dd) < daysInMonth) {
      newDateEnd = getUnixTimestampMilliseconds(`${year}-${mm}-${String(Number(dd) + 1).padStart(2, '0')}`).toString();
    } else if (!Number.isNaN(Number(mm)) && Number(mm) < 12) {
      newDateEnd = getUnixTimestampMilliseconds(`${year}-${String(Number(mm) + 1).padStart(2, '0')}-01`).toString();
    } else if (!Number.isNaN(Number(year))) {
      newDateEnd = getUnixTimestampMilliseconds(`${String(Number(year) + 1).padStart(4, '0')}-01-01`).toString();
    }

    debug('The dateEnd passed to the util is: %s', formatDate(Number(dateEnd), FORMAT_FOR_CONVERTING_TO_UNIX_TIMESTAMP));
    debug('The newDateEnd calculated is: %s', formatDate(Number(newDateEnd), FORMAT_FOR_CONVERTING_TO_UNIX_TIMESTAMP));
  }

  return newDateEnd;
};
