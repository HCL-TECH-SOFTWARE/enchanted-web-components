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
import { EnchantedDataGridColDef } from '../../../types/enchanted-data-grid';
import { getActionLink, getFilteredOverflowList, getMenuItemCount, getObjectValue, getOverflowItemProperty, isValidJsonObject } from '../../../utils/commonUtils';
import { isLTR, setCurrentDirection } from '../../../components/localization';

export const DOCUMENT_OBJECT_AUTHOR_FIELD = '_source.documentObject.author';
export const DOCUMENT_OBJECT_OWNER_FIELD = '_source.documentObject.owner';

export const specialFields = [DOCUMENT_OBJECT_AUTHOR_FIELD, DOCUMENT_OBJECT_OWNER_FIELD];

describe('Common Utils', () => {

  const _source = {
    _source: {
      documentObject: {
        author: {
          name: 'testname',
          value: 'testvalue'
        },
        owner: {
          name: 'testname',
          value: 'testvalue'
        },
      }
    }
  };

  const _sourceWithArray = {
    _source: {
      documentObject: {
        author: [
          {
            name: 'testname',
            value: 'testvalue'
          },
          {
            name: 'testname2',
            value: 'testvalue2'
          }
        ],
        owner: [
          {
            name: 'testname',
            value: 'testvalue'
          },
          {
            name: 'testname2',
            value: 'testvalue2'
          }
        ]
      }
    }
  };

  const testMenuItemData = {
    field1: 'value1',
    field2: '',
    nested: { field3: 'value3' },
    arr: [{ name: 'foo' }, { name: 'bar' }],
    special: { key: 'specialValue' }
  };

  it('should get object value for author', async () => {
    await expect(getObjectValue(specialFields, _source, DOCUMENT_OBJECT_AUTHOR_FIELD, 'name')).toBe('testname');
  });

  it('should get object value with nested property in an array of authors', async () => {
    await expect(getObjectValue(specialFields, _sourceWithArray, DOCUMENT_OBJECT_AUTHOR_FIELD, 'name')).toBe('testname, testname2');
  });

  it('should handle when object is null for author', async () => {
    await expect(getObjectValue(specialFields, null, DOCUMENT_OBJECT_AUTHOR_FIELD)).toBe(null);
  });

  it('should get object value for owner', async () => {
    await expect(getObjectValue(specialFields, _source, DOCUMENT_OBJECT_OWNER_FIELD, 'name')).toBe('testname');
  });

  it('should get object value with nested property in an array of owners', async () => {
    await expect(getObjectValue(specialFields, _sourceWithArray, DOCUMENT_OBJECT_OWNER_FIELD, 'name')).toBe('testname, testname2');
  });

  it('should handle when object is null for owner', async () => {
    await expect(getObjectValue(specialFields, null, DOCUMENT_OBJECT_OWNER_FIELD)).toBe(null);
  });

  it('should handle when string is empty', async () => {
    await expect(getObjectValue(specialFields, _source, '')).toBe('');
  });

  it('should return true for a valid JSON object string', () => {
    const jsonString = '{"field1": "value1", "field2": "value2"}';
    expect(isValidJsonObject(jsonString)).toBe(true);
  });

  it('should return false for an invalid JSON string', () => {
    const invalidString = 'invalid json';
    expect(isValidJsonObject(invalidString)).toBe(false);
  });

  it('should return true for a valid JSON array string', () => {
    const jsonArrayString = '["value1", "value2"]';
    expect(isValidJsonObject(jsonArrayString)).toBe(true);
  });

  it('should return false for a non-JSON string', () => {
    const nonJsonString = 'Hello, World!';
    expect(isValidJsonObject(nonJsonString)).toBe(false);
  });

  it('should return false for null', () => {
    const nullString = 'null';
    expect(isValidJsonObject(nullString)).toBe(false);
  });

  it('should return false for an empty string', () => {
    const emptyString = '';
    expect(isValidJsonObject(emptyString)).toBe(false);
  });

  it('getMenuItemCount - should return count 0 when overflowList is undefined', () => {
    const result = getMenuItemCount(specialFields, undefined, {});
    expect(result).toEqual({ count: 0 });
  });

  it('getMenuItemCount - should return count 0 when overflowList is empty', () => {
    const result = getMenuItemCount(specialFields, [], {});
    expect(result).toEqual({ count: 0 });
  });

  it('getMenuItemCount - should return count 1 and index when there is one valid item', () => {
    const overflowList = [
      { name: 'Item1', field: 'field1', hide: false },
      { name: 'Item2', field: 'field2', hide: false },
    ];
    const data = { field1: 'value1' };
    const result = getMenuItemCount(specialFields, overflowList, data);
    expect(result).toEqual({ count: 1, index: 0 });
  });

  it('getMenuItemCount - should return count only when there are multiple valid items', () => {
    const overflowList = [
      { name: 'Item1', field: 'field1', hide: false },
      { name: 'Item2', field: 'field2', hide: false },
    ];
    const data = { field1: 'value1', field2: 'value2' };
    const result = getMenuItemCount(specialFields, overflowList, data);
    expect(result).toEqual({ count: 2 });
  });

  it('getMenuItemCount - should return count 0 when no valid items are found', () => {
    const overflowList = [
      { name: 'Item1', field: 'field1', hide: false },
      { name: 'Item2', field: 'field2', hide: false },
    ];
    const data = { field3: 'value3' };
    const result = getMenuItemCount(specialFields, overflowList, data);
    expect(result).toEqual({ count: 0 });
  });

  it('getMenuItemCount - should handle overflowList with missing name or field attributes', () => {
    const overflowList = [
      { name: 'Item1', field: 'field1', hide: false },
      { name: 'Item2', field: 'field2', hide: false },
      { name: 'Item3', field: 'field3', hide: false },
    ];
    const data = { field3: 'value3' };
    const result = getMenuItemCount(specialFields, overflowList, data);
    expect(result).toEqual({ count: 1, index: 2 });
  });

  it('getOverflowItemProperty - should return an empty string when overflowList is undefined', () => {
    const header = { overflowList: undefined } as EnchantedDataGridColDef;
    const data = {};
    const property = 'name';
    const result = getOverflowItemProperty(specialFields, header, data, property);
    expect(result).toBe('');
  });

  it('getOverflowItemProperty - should return an empty string when overflowList is empty', () => {
    const header = { overflowList: [] } as unknown as EnchantedDataGridColDef;
    const data = {};
    const property = 'name';
    const result = getOverflowItemProperty(specialFields, header, data, property);
    expect(result).toBe('');
  });

  it('getOverflowItemProperty - should return the property value when a valid item exists', () => {
    const header = {
      overflowList: [
        { name: 'Item1', field: 'field1' },
        { name: 'Item2', field: 'field2' },
      ],
    } as EnchantedDataGridColDef;
    const data = { field1: 'value1' };
    const property = 'name';
    const result = getOverflowItemProperty(specialFields, header, data, property);
    expect(result).toBe('Item1');
  });

  it('getOverflowItemProperty - should return an empty string when no valid item is found', () => {
    const header = {
      overflowList: [
        { name: 'Item1', field: 'field1' },
        { name: 'Item2', field: 'field2' },
      ],
    } as EnchantedDataGridColDef;
    const data = { field3: 'value3' };
    const property = 'name';
    const result = getOverflowItemProperty(specialFields, header, data, property);
    expect(result).toBe('');
  });

  it('getOverflowItemProperty - should return an empty string when the property does not exist in the valid item', () => {
    const header = {
      overflowList: [
        { name: 'Item1', field: 'field1' },
        { name: 'Item2', field: 'field2' },
      ],
    } as EnchantedDataGridColDef;
    const data = { field1: 'value1' };
    const property = 'nonExistentProperty';
    const result = getOverflowItemProperty(specialFields, header, data, property);
    expect(result).toBe('');
  });

  it('should return undefined when overflowList is undefined', () => {
    const header = { overflowList: undefined } as EnchantedDataGridColDef;
    const data = {};
    const result = getActionLink(specialFields, data, header);
    expect(result).toBeUndefined();
  });

  it('should return undefined when overflowList is empty', () => {
    const header = { overflowList: [] } as unknown as EnchantedDataGridColDef;
    const data = {};
    const result = getActionLink(specialFields, data, header);
    expect(result).toBeUndefined();
  });

  it('should return the action link when a valid item exists in overflowList', () => {
    const header = {
      overflowList: [
        { name: 'Item1', field: 'field1' },
        { name: 'Item2', field: 'field2' },
      ],
      keyForStringify: 'key',
    } as EnchantedDataGridColDef;
    const data = { field1: 'value1' };
    const result = getActionLink(specialFields, data, header);
    expect(result).toBe('value1');
  });

  it('should return undefined when no valid item exists in overflowList', () => {
    const header = {
      overflowList: [
        { name: 'Item1', field: 'field1' },
        { name: 'Item2', field: 'field2' },
      ],
    } as EnchantedDataGridColDef;
    const data = { field3: 'value3' };
    const result = getActionLink(specialFields, data, header);
    expect(result).toBeUndefined();
  });

  it('should return the correct value when getObjectValue returns a valid value', () => {
    const header = {
      overflowList: [
        { name: 'Item1', field: 'field1' },
        { name: 'Item2', field: 'field2' },
      ],
      keyForStringify: 'key',
    } as EnchantedDataGridColDef;
    const data = { field2: 'value2' };
    const result = getActionLink(specialFields, data, header);
    expect(result).toBe('value2');
  });

  it('should return true for left to right locale', () => {
    expect(isLTR()).toBe(true);
  });

  it('should return false for right to left locale', () => {
    setCurrentDirection('ar');
    expect(isLTR()).toBe(false);
  });

  it('should return empty array if overflowList is empty', () => {
    const emptyHeader = {
      overflowList: [],
      keyForStringify: 'key',
    } as unknown as EnchantedDataGridColDef;
    expect(getFilteredOverflowList(specialFields, testMenuItemData, emptyHeader)).toEqual([]);
  });

  it('should filter overflowList items where getObjectValue returns truthy', () => {
    const header = {
      overflowList: [
        { field: 'field1', name: 'A' },
        { field: 'field2', name: 'B' },
        { field: 'nested.field3', name: 'C' }
      ],
      keyForStringify: 'key',
    } as EnchantedDataGridColDef;
    const result = getFilteredOverflowList(specialFields, testMenuItemData, header);
    expect(result).toEqual([
      { field: 'field1', name: 'A' },
      { field: 'nested.field3', name: 'C' }
    ]);
  });

  it('should handle specialFields and nested values', () => {
    const header = {
      overflowList: [
        { field: 'special', name: 'Special' },
        { field: 'arr', name: 'Array' }
      ],
      keyForStringify: 'key',
    } as EnchantedDataGridColDef;
    const result = getFilteredOverflowList(['special'], testMenuItemData, header);
    expect(result).toEqual([
      { field: 'special', name: 'Special' },
      { field: 'arr', name: 'Array' }
    ]);
  });

  it('should return empty array if all items are filtered out', () => {
    const header = {
      overflowList: [
        { field: 'missing', name: 'Missing' },
        { field: 'field2', name: 'Empty' }
      ],
      keyForStringify: 'key',
    } as EnchantedDataGridColDef;
    expect(getFilteredOverflowList(specialFields, testMenuItemData, header)).toEqual([]);
  });

  it('should return all items if all have truthy values', () => {
    const header = {
      overflowList: [
        { field: 'field1', name: 'A' },
        { field: 'nested.field3', name: 'B' }
      ],
      keyForStringify: 'key',
    } as EnchantedDataGridColDef;
    expect(getFilteredOverflowList(specialFields, testMenuItemData, header)).toEqual(header.overflowList);
  });
});
