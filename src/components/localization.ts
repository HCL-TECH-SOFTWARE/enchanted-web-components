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

import { DEFAULT_LOCALE, LOCALE_DIRECTIONS, RTL_LOCALES } from './constants';

export type Templates = { [key: string]: string };
export type Replacement = { [key: string]: string };

export const getCurrentDirection = (): string => {
  const currentDir = document.documentElement.dir;
  return currentDir ? currentDir : LOCALE_DIRECTIONS.LTR;
};

/**
 * Returns current direction of the page
*/
export const isLTR = (): boolean => {
  const currentDirection = getCurrentDirection();
  return currentDirection === LOCALE_DIRECTIONS.LTR;
};

/**
 * Returns String separated with strings
*/
export const getFormattedString = (value: string | undefined): string => {
  if (value === undefined) {
    return '';
  } else {
    return value.replace(/([A-Z])/g, ' $1').trim();
  }
};

export const setCurrentDirection = (locale: string): void => {
  if (RTL_LOCALES.includes(locale)) {
    document.documentElement.setAttribute('dir', LOCALE_DIRECTIONS.RTL);
  } else {
    document.documentElement.setAttribute('dir', LOCALE_DIRECTIONS.LTR);
  }
};

export const getCurrentLocale = (element: HTMLElement = document.body): string => {
  const closestElement = element.closest('[lang]') as HTMLElement;
  return closestElement ? closestElement.lang : DEFAULT_LOCALE;
};

