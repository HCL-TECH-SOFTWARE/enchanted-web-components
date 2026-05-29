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
import { expect } from '@wdio/globals';

// Helper imports
import * as dateUtils from '../../../utils/dateUtils';

describe('dateUtils', () => {
  it('should map zh_TW to zh-tw', () => {
    expect(dateUtils.mappingLocaleFromCoreToDayJs('zh_TW')).toBe('zh-tw');
  });
  it('should map pt_BR to pt-br', () => {
    expect(dateUtils.mappingLocaleFromCoreToDayJs('pt_BR')).toBe('pt-br');
  });
  it('should map iw to he', () => {
    expect(dateUtils.mappingLocaleFromCoreToDayJs('iw')).toBe('he');
  });
  it('should map no to nb', () => {
    expect(dateUtils.mappingLocaleFromCoreToDayJs('no')).toBe('nb');
  });
  it('should default to en for undefined', () => {
    expect(dateUtils.mappingLocaleFromCoreToDayJs(undefined)).toBe('en');
  });
  it('should return input if not mapped', () => {
    expect(dateUtils.mappingLocaleFromCoreToDayJs('fr')).toBe('fr');
  });

  it('should format a valid date', () => {
    const result = dateUtils.formatDateTime(1733616000000, 'en'); // 2024-12-08
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });
  it('should return empty string for undefined', () => {
    expect(dateUtils.formatDateTime(undefined)).toBe('');
  });
  it('should format with different locale', () => {
    const result = dateUtils.formatDateTime(1733616000000, 'fr');
    expect(typeof result).toBe('string');
  });

  it('should return 12 months for en', () => {
    expect(dateUtils.getLocalizedMonths('en')).toHaveLength(12);
  });
  it('should return 12 months for fr', () => {
    expect(dateUtils.getLocalizedMonths('fr')).toHaveLength(12);
  });

  it('should return 7 days for en', () => {
    expect(dateUtils.getLocalizedDays('en')).toHaveLength(7);
  });
  it('should start with Monday (not Sunday)', () => {
    const days = dateUtils.getLocalizedDays('en');
    expect(days[0]).not.toMatch(/Sun/i);
  });
  it('should return 7 days for fr', () => {
    expect(dateUtils.getLocalizedDays('fr')).toHaveLength(7);
  });

  it('should format a valid date', () => {
    const date = new Date(2024, 11, 8).getTime();
    expect(dateUtils.formatDate(date, 'YYYY-MM-DD')).toBe('2024-12-08');
  });
  it('should return empty string for invalid date', () => {
    expect(dateUtils.formatDate(undefined, 'YYYY-MM-DD')).toBe('');
  });
  it('should return empty string for missing format', () => {
    const date = new Date(2024, 11, 8).getTime();
    expect(dateUtils.formatDate(date, undefined)).toBe('');
  });
  it('should return empty string for invalid date and format', () => {
    expect(dateUtils.formatDate(undefined, undefined)).toBe('');
  });

  it('should return a string format for en', () => {
    expect(typeof dateUtils.getAcceptedDateFormat('en')).toBe('string');
  });
  it('should return default format for unknown locale', () => {
    expect(dateUtils.getAcceptedDateFormat('xx')).toBe('MM/DD/YYYY');
  });

  it('should return an array of formats', () => {
    const formats = dateUtils.getAllAcceptedDateFormats();
    expect(Array.isArray(formats)).toBe(true);
    expect(formats.length).toBe(8); // 8 unique formats
  });
  it('should contain YYYY-MM-DD', () => {
    const formats = dateUtils.getAllAcceptedDateFormats();
    expect(formats).toContain('YYYY-MM-DD');
  });

  // formatPartialDateInputWithAcceptedFormat for all unique formats
  it('should format D/M/YYYY from near complete input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('8122024', 'D/M/YYYY')).toMatch('8/12/2024');
  });
  it('should format DD/MM/YYYY from near complete input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('08122024', 'DD/MM/YYYY')).toBe('08/12/2024');
  });
  it('should format MM/DD/YYYY from near complete input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('12082024', 'MM/DD/YYYY')).toBe('12/08/2024');
  });
  it('should format YYYY-MM-DD from near complete input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('20241208', 'YYYY-MM-DD')).toBe('2024-12-08');
  });
  it('should format DD.MM.YYYY from near complete input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('08122024', 'DD.MM.YYYY')).toBe('08.12.2024');
  });
  it('should format YYYY.MM.DD. from near complete input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('20241208', 'YYYY.MM.DD.')).toBe('2024.12.08.');
  });
  it('should format DD-MM-YYYY from near complete input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('08122024', 'DD-MM-YYYY')).toBe('08-12-2024');
  });
  it('should format YYYY/MM/DD from near complete input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('20241208', 'YYYY/MM/DD')).toBe('2024/12/08');
  });
  it('should handle empty input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('', 'YYYY-MM-DD')).toBe('');
  });
  it('should return original for unknown format', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('08122024', 'UNKNOWN')).toBe('08122024');
  });
  it('should trim unnecessary long input and format YYYY/MM/DD partial input ', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('202412081111', 'YYYY/MM/DD')).toBe('2024/12/08');
  });

  // formatPartialDateInputWithAcceptedFormat for all unique formats with real partial input
  it('should format D/M/YYYY from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('8122', 'D/M/YYYY')).toMatch('8/12/2');
  });
  it('should format D/M/YYYY from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('812', 'D/M/YYYY')).toMatch('8/12/');
  });
  it('should format D/M/YYYY from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('81', 'D/M/YYYY')).toMatch('8/1');
  });
  it('should format D/M/YYYY from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('8', 'D/M/YYYY')).toMatch('8');
  });
  it('should format DD/MM/YYYY from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('0812', 'DD/MM/YYYY')).toBe('08/12/');
  });
  it('should format DD/MM/YYYY from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('081', 'DD/MM/YYYY')).toBe('08/1');
  });
  it('should format DD/MM/YYYY from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('08', 'DD/MM/YYYY')).toBe('08/');
  });
  it('should format DD/MM/YYYY from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('0', 'DD/MM/YYYY')).toBe('0');
  });
  it('should format MM/DD/YYYY from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('1208', 'MM/DD/YYYY')).toBe('12/08/');
  });
  it('should format MM/DD/YYYY from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('120', 'MM/DD/YYYY')).toBe('12/0');
  });
  it('should format MM/DD/YYYY from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('12', 'MM/DD/YYYY')).toBe('12/');
  });
  it('should format MM/DD/YYYY from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('1', 'MM/DD/YYYY')).toBe('1');
  });
  it('should format YYYY-MM-DD from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('202412', 'YYYY-MM-DD')).toBe('2024-12-');
  });
  it('should format YYYY-MM-DD from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('20241', 'YYYY-MM-DD')).toBe('2024-1');
  });
  it('should format YYYY-MM-DD from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('2024', 'YYYY-MM-DD')).toBe('2024-');
  });
  it('should format YYYY-MM-DD from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('202', 'YYYY-MM-DD')).toBe('202');
  });
  it('should format DD.MM.YYYY from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('0812', 'DD.MM.YYYY')).toBe('08.12.');
  });
  it('should format DD.MM.YYYY from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('081', 'DD.MM.YYYY')).toBe('08.1');
  });
  it('should format DD.MM.YYYY from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('08', 'DD.MM.YYYY')).toBe('08.');
  });
  it('should format DD.MM.YYYY from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('0', 'DD.MM.YYYY')).toBe('0');
  });
  it('should format YYYY.MM.DD. from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('202412', 'YYYY.MM.DD.')).toBe('2024.12.');
  });
  it('should format YYYY.MM.DD. from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('20241', 'YYYY.MM.DD.')).toBe('2024.1');
  });
  it('should format YYYY.MM.DD. from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('2024', 'YYYY.MM.DD.')).toBe('2024.');
  });
  it('should format YYYY.MM.DD. from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('202', 'YYYY.MM.DD.')).toBe('202');
  });
  it('should format DD-MM-YYYY from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('0812', 'DD-MM-YYYY')).toBe('08-12-');
  });
  it('should format DD-MM-YYYY from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('081', 'DD-MM-YYYY')).toBe('08-1');
  });
  it('should format DD-MM-YYYY from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('08', 'DD-MM-YYYY')).toBe('08-');
  });
  it('should format DD-MM-YYYY from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('0', 'DD-MM-YYYY')).toBe('0');
  });
  it('should format YYYY/MM/DD from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('202412', 'YYYY/MM/DD')).toBe('2024/12/');
  });
  it('should format YYYY/MM/DD from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('20241', 'YYYY/MM/DD')).toBe('2024/1');
  });
  it('should format YYYY/MM/DD from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('2024', 'YYYY/MM/DD')).toBe('2024/');
  });
  it('should format YYYY/MM/DD from real partial input', () => {
    expect(dateUtils.formatPartialDateInputWithAcceptedFormat('202', 'YYYY/MM/DD')).toBe('202');
  });

  // getRegexForAcceptedDateFormat for all unique formats
  it('should return correct regex for D/M/YYYY', () => {
    const regex = new RegExp(dateUtils.getRegexForAcceptedDateFormat('D/M/YYYY'));
    expect(regex.test('8/12/2024')).toBe(true);
  });
  it('should return correct regex for DD/MM/YYYY', () => {
    const regex = new RegExp(dateUtils.getRegexForAcceptedDateFormat('DD/MM/YYYY'));
    expect(regex.test('08/12/2024')).toBe(true);
  });
  it('should return correct regex for MM/DD/YYYY', () => {
    const regex = new RegExp(dateUtils.getRegexForAcceptedDateFormat('MM/DD/YYYY'));
    expect(regex.test('12/08/2024')).toBe(true);
  });
  it('should return correct regex for YYYY/MM/DD', () => {
    const regex = new RegExp(dateUtils.getRegexForAcceptedDateFormat('YYYY/MM/DD'));
    expect(regex.test('2024/12/08')).toBe(true);
  });
  it('should return correct regex for DD.MM.YYYY', () => {
    const regex = new RegExp(dateUtils.getRegexForAcceptedDateFormat('DD.MM.YYYY'));
    expect(regex.test('08.12.2024')).toBe(true);
  });
  it('should return correct regex for YYYY.MM.DD.', () => {
    const regex = new RegExp(dateUtils.getRegexForAcceptedDateFormat('YYYY.MM.DD.'));
    expect(regex.test('2024.12.08.')).toBe(true);
  });
  it('should return correct regex for DD-MM-YYYY', () => {
    const regex = new RegExp(dateUtils.getRegexForAcceptedDateFormat('DD-MM-YYYY'));
    expect(regex.test('08-12-2024')).toBe(true);
  });
  it('should return correct regex for YYYY-MM-DD', () => {
    const regex = new RegExp(dateUtils.getRegexForAcceptedDateFormat('YYYY-MM-DD'));
    expect(regex.test('2024-12-08')).toBe(true);
  });
  it('should return fallback regex for unknown format', () => {
    const regex = new RegExp(dateUtils.getRegexForAcceptedDateFormat('UNKNOWN'));
    expect(regex.test('12/08/2024')).toBe(true);
  });

  // parseDateFromAcceptedFormat for all unique formats
  it('should parse D/M/YYYY', () => {
    expect(dateUtils.parseDateFromAcceptedFormat('8/12/2024', 'D/M/YYYY')).toEqual({ dd: 8, mm: 12, yr: 2024, delimiter: '/' });
  });
  it('should parse DD/MM/YYYY', () => {
    expect(dateUtils.parseDateFromAcceptedFormat('08/12/2024', 'DD/MM/YYYY')).toEqual({ dd: 8, mm: 12, yr: 2024, delimiter: '/' });
  });
  it('should parse MM/DD/YYYY', () => {
    expect(dateUtils.parseDateFromAcceptedFormat('12/08/2024', 'MM/DD/YYYY')).toEqual({ dd: 8, mm: 12, yr: 2024, delimiter: '/' });
  });
  it('should parse YYYY/MM/DD', () => {
    expect(dateUtils.parseDateFromAcceptedFormat('2024/12/08', 'YYYY/MM/DD')).toEqual({ dd: 8, mm: 12, yr: 2024, delimiter: '/' });
  });
  it('should parse DD.MM.YYYY', () => {
    expect(dateUtils.parseDateFromAcceptedFormat('08.12.2024', 'DD.MM.YYYY')).toEqual({ dd: 8, mm: 12, yr: 2024, delimiter: '.' });
  });
  it('should parse YYYY.MM.DD.', () => {
    expect(dateUtils.parseDateFromAcceptedFormat('2024.12.08', 'YYYY.MM.DD.')).toEqual({ dd: 8, mm: 12, yr: 2024, delimiter: '.' });
  });
  it('should parse DD-MM-YYYY', () => {
    expect(dateUtils.parseDateFromAcceptedFormat('08-12-2024', 'DD-MM-YYYY')).toEqual({ dd: 8, mm: 12, yr: 2024, delimiter: '-' });
  });
  it('should parse YYYY-MM-DD', () => {
    expect(dateUtils.parseDateFromAcceptedFormat('2024-12-08', 'YYYY-MM-DD')).toEqual({ dd: 8, mm: 12, yr: 2024, delimiter: '-' });
  });
  it('should return zeros for unknown format', () => {
    expect(dateUtils.parseDateFromAcceptedFormat('2024/12/08', 'UNKNOWN')).toEqual({ dd: 0, mm: 0, yr: 0, delimiter: '' });
  });
  it('should return NaN for empty string', () => {
    expect(dateUtils.parseDateFromAcceptedFormat('', 'YYYY-MM-DD')).toEqual({ dd: undefined, mm: undefined, yr: 0, delimiter: '-' });
  });

  // getUnixTimestampMilliseconds for invalid dates
  it('should return 0 for invalid date', () => {
    expect(dateUtils.getUnixTimestampMilliseconds('invalid')).toBe(0);
  });
  it('should return 0 for empty string', () => {
    expect(dateUtils.getUnixTimestampMilliseconds('')).toBe(0);
  });

  // getUnixTimestampMilliseconds for all unique formats
  it('should return correct timestamp for D/M/YYYY', () => {
    expect(dateUtils.getUnixTimestampMilliseconds('8/12/2024')).toBeGreaterThan(0);
  });
  it('should return correct timestamp for DD/MM/YYYY', () => {
    expect(dateUtils.getUnixTimestampMilliseconds('08/12/2024')).toBeGreaterThan(0);
  });
  it('should return correct timestamp for MM/DD/YYYY', () => {
    expect(dateUtils.getUnixTimestampMilliseconds('12/08/2024')).toBeGreaterThan(0);
  });
  it('should return correct timestamp for YYYY/MM/DD', () => {
    expect(dateUtils.getUnixTimestampMilliseconds('2024/12/08')).toBeGreaterThan(0);
  });
  it('should return correct timestamp for DD.MM.YYYY', () => {
    expect(dateUtils.getUnixTimestampMilliseconds('08.12.2024')).toBeGreaterThan(0);
  });
  it('should return correct timestamp for YYYY.MM.DD.', () => {
    expect(dateUtils.getUnixTimestampMilliseconds('2024.12.08')).toBeGreaterThan(0);
  });
  it('should return correct timestamp for DD-MM-YYYY', () => {
    expect(dateUtils.getUnixTimestampMilliseconds('08-12-2024')).toBeGreaterThan(0);
  });
  it('should return correct timestamp for YYYY-MM-DD', () => {
    expect(dateUtils.getUnixTimestampMilliseconds('2024-12-08')).toBeGreaterThan(0);
  });

  // formatDate for all unique formats
  it('should format date as D/M/YYYY', () => {
    const date = new Date(2024, 11, 8).getTime();
    expect(dateUtils.formatDate(date, 'D/M/YYYY')).toBe('8/12/2024');
  });
  it('should format date as DD/MM/YYYY', () => {
    const date = new Date(2024, 11, 8).getTime();
    expect(dateUtils.formatDate(date, 'DD/MM/YYYY')).toBe('08/12/2024');
  });
  it('should format date as MM/DD/YYYY', () => {
    const date = new Date(2024, 11, 8).getTime();
    expect(dateUtils.formatDate(date, 'MM/DD/YYYY')).toBe('12/08/2024');
  });
  it('should format date as YYYY/MM/DD', () => {
    const date = new Date(2024, 11, 8).getTime();
    expect(dateUtils.formatDate(date, 'YYYY/MM/DD')).toBe('2024/12/08');
  });
  it('should format date as DD.MM.YYYY', () => {
    const date = new Date(2024, 11, 8).getTime();
    expect(dateUtils.formatDate(date, 'DD.MM.YYYY')).toBe('08.12.2024');
  });
  it('should format date as YYYY.MM.DD.', () => {
    const date = new Date(2024, 11, 8).getTime();
    expect(dateUtils.formatDate(date, 'YYYY.MM.DD.')).toBe('2024.12.08.');
  });
  it('should format date as DD-MM-YYYY', () => {
    const date = new Date(2024, 11, 8).getTime();
    expect(dateUtils.formatDate(date, 'DD-MM-YYYY')).toBe('08-12-2024');
  });
  it('should format date as YYYY-MM-DD', () => {
    const date = new Date(2024, 11, 8).getTime();
    expect(dateUtils.formatDate(date, 'YYYY-MM-DD')).toBe('2024-12-08');
  });

  // correctDateEndForDatePickerFilter tests
  it('should add one day when end date is at mid-month', () => {
    // Dec 15, 2024 as timestamp
    const timestamp = new Date(2024, 11, 15).getTime().toString();
    
    const result = dateUtils.correctDateEndForDatePickerFilter(timestamp);
    
    // Format both dates to check the difference
    const endDate = dateUtils.formatDate(Number(result), 'YYYY-MM-DD');
    
    // Verify endDate is one day later than startDate
    expect(endDate).toBe('2024-12-16');
  });

  it('should move to next month when end date is at month end', () => {
    // Nov 30, 2024 as timestamp
    const timestamp = new Date(2024, 10, 30).getTime().toString();
    
    const result = dateUtils.correctDateEndForDatePickerFilter(timestamp);
    
    // Format both dates to check the difference
    const endDate = dateUtils.formatDate(Number(result), 'YYYY-MM-DD');
    
    // Verify endDate is first day of next month
    expect(endDate).toBe('2024-12-01');
  });

  it('should move to next year when end date is at year end', () => {
    // Dec 31, 2024 as timestamp
    const timestamp = new Date(2024, 11, 31).getTime().toString();
    
    const result = dateUtils.correctDateEndForDatePickerFilter(timestamp);
    
    // Format both dates to check the difference
    const endDate = dateUtils.formatDate(Number(result), 'YYYY-MM-DD');
    
    // Verify endDate is first day of next year
    expect(endDate).toBe('2025-01-01');
  });

  it('should return the original end date when end date is not a valid number', () => {
    // Dec 15, 2024 as timestamp
    const endTimestamp = 'not-a-number';
    
    const result = dateUtils.correctDateEndForDatePickerFilter(endTimestamp);
    
    // Verify result is the same as endTimestamp
    expect(result).toBe(endTimestamp);
  });
});
