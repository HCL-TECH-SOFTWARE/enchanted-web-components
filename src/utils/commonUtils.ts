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
import { EnchantedDataGridColDef, OverflowList } from '../types/enchanted-data-grid';

/**
 * @param {string[]} specialFields: ...
 * @param {any} obj: object to search for the value
 * @param {string | undefined} path: path to the value in the object
 * @param {string | undefined} keyForStringify: nested property to be stringified
 * 
 * @returns The value of the object at the given path
 */
// eslint-why: The function needs to accept any object structure for generic value extraction.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getObjectValue = (specialFields: string[], obj: any, path?: string, keyForStringify?: string): any => {
  if (!path) {
    return '';
  }
  const keys = path.split('.');
  const result = keys.reduce((acc, key) => {
    return acc && acc[key];
  }, obj);

  if (Array.isArray(result) && keyForStringify) {
    return result.map(item => {
      return item[keyForStringify];
    }).join(', ');
  } else if (specialFields.includes(path) && keyForStringify && result) {
    return result[keyForStringify] ?? '';
  }
  
  return result;
};

/**
 * Counts the number of valid items in the `OverflowList` that have both a `name` and `field` attribute,
 * and ensures the value retrieved using `getObjectValue` is valid.
 *
 * If there is only one valid item, the function returns an object containing the count and the index of that item.
 * If there are multiple valid items, it returns the count only.
 *
 * @param {string[]} specialFields: ...
 * @param {OverflowList[] | undefined} overflowList - The list of `OverflowList` items to evaluate.
 * @param {any} data - The data object used to retrieve values for the `OverflowList` fields.
 * @returns {{ count: number, index?: number }} - An object containing the count of valid items, and the index if there is only one valid item.
 */
// eslint-why: The function needs to accept any object structure for generic menu item counting.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getMenuItemCount = (specialFields: string[], overflowList: OverflowList[] | undefined, data: any): { count: number, index?: number } => {
  if (!overflowList?.length) {
    return { count: 0 };
  }
  let validItemIndex: number | undefined = undefined;
  let count = 0;
  for (let index = 0; index < overflowList.length; index++) {
    const item = overflowList[index];
    if (item.name && item.field && getObjectValue(specialFields, data, item.field)) {
      count++;
      if (count === 1) {
        validItemIndex = index; // Store the index of the first valid item
      } else {
        return { count }; // Exit early if more than one valid item is found
      }
    }
  }
  return count === 1 ? { count, index: validItemIndex } : { count };
};

/**
 * Retrieves the action link from the `overflowList` of a given header.
 * The function checks if the `overflowList` exists and contains valid items. It uses the 
 * `getMenuItemCount` function to determine the index of the valid item in the list. If a valid 
 * item is found, the action link is returned; otherwise, `undefined` is returned.
 *
 * @param {string[]} specialFields: ...
 * @param {any} data - The data object used to evaluate the validity of items in the `overflowList`.
 * @param {EnchantedDataGridColDef} header - The header object containing the `overflowList`.
 * @returns {string | undefined} - The action link from the valid item, or `undefined` if no valid item is found.
 */
// eslint-why: The function needs to accept any object structure for generic action link extraction.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getActionLink = (specialFields: string[], data: any, header: EnchantedDataGridColDef): string | undefined => {
  const overflowList = header.overflowList;
  if (!overflowList || overflowList.length === 0) {
    return undefined;
  }
  const menuItemIndex = getMenuItemCount(specialFields, overflowList, data).index || 0;
  const menuItemField = overflowList[menuItemIndex]?.field;
  return getObjectValue(specialFields, data, menuItemField, header.keyForStringify);
};

/**
 * Checks if a given string is a valid JSON object.
 *
 * @param {string} str - The string to be checked.
 * @returns {boolean} - Returns true if the string is a valid JSON object, otherwise false.
 */
export function isValidJsonObject(str: string): boolean {
  try {
    const parsed = JSON.parse(str);
    return typeof parsed === 'object' && parsed !== null;
  } catch {
    return false;
  }
}

/**
 * Retrieves a specific property value from an item in the `overflowList` of a given header.
 *
 * The function checks if the `overflowList` exists and contains valid items. It uses the 
 * `getMenuItemCount` function to determine the index of the valid item in the list. If a valid 
 * item is found, the specified property value is returned; otherwise, an empty string is returned.
 *
 * @param specialFields: ...
 * @param {EnchantedDataGridColDef} header - The header object containing the `overflowList`.
 * @param {any} data - The data object used to evaluate the validity of items in the `overflowList`.
 * @param {string} property - The property name to retrieve from the valid item.
 * @returns {string} - The value of the specified property from the valid item, or an empty string if no valid item is found.
 */
// eslint-why: The function needs to accept any object structure for generic overflow item property extraction.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getOverflowItemProperty = (specialFields: string[], header: EnchantedDataGridColDef, data: any, property: string): string => {
  if (!header.overflowList?.length) {
    return '';
  }
  const { index } = getMenuItemCount(specialFields, header.overflowList, data);
  const item = index !== undefined ? header.overflowList[index] : undefined;
  return item?.[property as keyof OverflowList] as string || '';
};

// Utility function to filter overflowList items where value exists
export const getFilteredOverflowList = (
  specialFields: string[],
  data: unknown,
  header: EnchantedDataGridColDef
): OverflowList[] => {
  if (!header.overflowList?.length) return [];
  return header.overflowList.filter((item: OverflowList) => { return Boolean(getObjectValue(specialFields, data, item.field)); }
  );
};
