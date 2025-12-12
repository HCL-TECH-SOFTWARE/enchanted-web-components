/*
 ********************************************************************
 * Licensed Materials - Property of HCL                             *
 *                                                                  *
 * Copyright HCL Technologies Ltd. 2025. All Rights Reserved.       *
 *                                                                  *
 * Note to US Government Users Restricted Rights:                   *
 *                                                                  *
 * Use, duplication or disclosure restricted by GSA ADP Schedule    *
 ********************************************************************
 */

import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-data-grid-generic';
import { EnchantedDataGridColDef } from '../types/enchanted-data-grid';
import { EnchantedDataGridContextType } from '../components/atomic-component/contexts/enchanted-data-grid-context';

/**
 * @interface EnchantedDataGridGenericProps
 * Props for the enchanted-data-grid-generic web component.
 *
 * @property isLoading - Indicates if the data grid is in a loading state, showing a loading spinner
 * @property data - The data context containing rows to display in the grid
 * @property columns - Column definitions specifying field names, headers, and behavior
 * @property hasMiddlewareError - Indicates if there's a middleware error preventing data loading
 * @property hasContentSourceAvailable - Indicates if content source is available for the grid
 * @property checkboxSelection - Enables checkbox selection for rows
 * @property isFeatureTagCloudEnabled - Enables tag cloud feature for special fields
 * @property specialFields - Array of field names that require special rendering or behavior
 * @property isRowClickable - Makes rows clickable, enabling row click interactions
 * @property customTableHeaderPart - Custom CSS part name for table header styling
 * @property customeTableCellPart - Custom CSS part name for table cell styling
 * @property tableHover - Enables hover effects on table rows
 */
export interface EnchantedDataGridGenericProps {
  isLoading?: boolean;
  data?: EnchantedDataGridContextType;
  columns?: EnchantedDataGridColDef[];
  hasMiddlewareError?: boolean;
  hasContentSourceAvailable?: boolean;
  checkboxSelection?: boolean;
  isFeatureTagCloudEnabled?: boolean;
  specialFields?: string[];
  isRowClickable?: boolean;
  customTableHeaderPart?: string;
  customeTableCellPart?: string;
  tableHover?: string;
}

// Sample data for stories
const sampleColumns: EnchantedDataGridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
  },
  {
    field: 'name',
    headerName: 'Name',
  },
  {
    field: 'email',
    headerName: 'Email',
  },
  {
    field: 'role',
    headerName: 'Role',
  },
  {
    field: 'status',
    headerName: 'Status',
  },
];

const sampleData: EnchantedDataGridContextType = {
  searchItems: [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', role: 'Editor', status: 'Inactive' },
    { id: 4, name: 'Alice Williams', email: 'alice.williams@example.com', role: 'User', status: 'Active' },
    { id: 5, name: 'Charlie Brown', email: 'charlie.brown@example.com', role: 'Viewer', status: 'Active' },
  ],
  total: 5,
  page: 1,
  pageSize: 10,
};

const meta: Meta<EnchantedDataGridGenericProps> = {
  title: 'Data display/enchanted-data-grid-generic',
  component: 'enchanted-data-grid-generic',
  tags: ['autodocs'],
  argTypes: {
    isLoading: {
      control: { type: 'boolean' },
      description: 'Indicates if the data grid is in a loading state, showing a loading spinner.',
      table: { category: 'State', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    data: {
      control: { type: 'object' },
      description: 'The data context containing search items to display in the grid. Should be an object with searchItems array, total count, page, pageSize, and sorting info.',
      table: { category: 'Content', type: { summary: 'EnchantedDataGridContextType' }, defaultValue: { summary: '{}' } },
    },
    columns: {
      control: { type: 'object' },
      description: 'Column definitions specifying field names, headers, sorting, actions, and rendering behavior. Each column must have a field property.',
      table: { category: 'Content', type: { summary: 'EnchantedDataGridColDef[]' }, defaultValue: { summary: '[]' } },
    },
    hasMiddlewareError: {
      control: { type: 'boolean' },
      description: 'Indicates if there\'s a middleware error preventing data loading. When true, shows error state UI instead of data.',
      table: { category: 'State', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    hasContentSourceAvailable: {
      control: { type: 'boolean' },
      description: 'Indicates if content source is available for the grid. When false, may show empty state or limited functionality.',
      table: { category: 'State', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    checkboxSelection: {
      control: { type: 'boolean' },
      description: 'Enables checkbox selection for rows. When true, adds checkboxes to each row for multi-selection capabilities.',
      table: { category: 'Behavior', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    isFeatureTagCloudEnabled: {
      control: { type: 'boolean' },
      description: 'Enables tag cloud feature for special fields. When true, renders specified fields as tag clouds instead of standard text.',
      table: { category: 'Display', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    specialFields: {
      control: { type: 'object' },
      description: 'Array of field names that require special rendering or behavior. Used in conjunction with isFeatureTagCloudEnabled.',
      table: { category: 'Content', type: { summary: 'string[]' }, defaultValue: { summary: '[]' } },
    },
    isRowClickable: {
      control: { type: 'boolean' },
      description: 'Makes rows clickable, enabling row click interactions. When true, rows become interactive and can trigger click handlers.',
      table: { category: 'Behavior', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    customTableHeaderPart: {
      control: { type: 'text' },
      description: 'Custom CSS part name for table header styling. Allows external styling of header elements through CSS shadow parts.',
      table: { category: 'Styling', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
    customeTableCellPart: {
      control: { type: 'text' },
      description: 'Custom CSS part name for table cell styling. Allows external styling of cell elements through CSS shadow parts.',
      table: { category: 'Styling', type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
    tableHover: {
      control: { type: 'radio' },
      options: ['true', 'false'],
      description: 'Enables hover effects on table rows. When true, rows highlight on mouse hover for better visual feedback.',
      table: { category: 'Display', type: { summary: 'string' }, defaultValue: { summary: 'false' } },
    },
  },
  args: {
    isLoading: false,
    data: sampleData,
    columns: sampleColumns,
    hasMiddlewareError: false,
    hasContentSourceAvailable: false,
    checkboxSelection: false,
    isFeatureTagCloudEnabled: false,
    specialFields: [],
    isRowClickable: false,
    customTableHeaderPart: '',
    customeTableCellPart: '',
    tableHover: 'false',
  },
  parameters: {
    docs: {
      description: {
        component: 'Data grid component for displaying tabular data with sorting, actions, selection, and custom rendering. Supports loading states, error handling, and extensive customization.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<EnchantedDataGridGenericProps>;

export const EnchantedDataGridGeneric: Story = {
  render: (args) => {
    return html`
      <enchanted-data-grid-generic
        .isLoading=${args.isLoading}
        .data=${args.data}
        .columns=${args.columns}
        .hasMiddlewareError=${args.hasMiddlewareError}
        .hasContentSourceAvailable=${args.hasContentSourceAvailable}
        .checkboxSelection=${args.checkboxSelection}
        .isFeatureTagCloudEnabled=${args.isFeatureTagCloudEnabled}
        .specialFields=${args.specialFields}
        .isRowClickable=${args.isRowClickable}
        .customTableHeaderPart=${args.customTableHeaderPart}
        .customeTableCellPart=${args.customeTableCellPart}
        .tableHover=${args.tableHover}
      ></enchanted-data-grid-generic>
    `;
  },
  name: 'Default',
};

export const AllStates: Story = {
  render: () => {
    const columnsWithActions: EnchantedDataGridColDef[] = [
      {
        field: 'id',
        headerName: 'ID',
      },
      {
        field: 'name',
        headerName: 'Name',
      },
      {
        field: 'email',
        headerName: 'Email',
      },
      {
        field: 'actions',
        headerName: 'Actions',
        actions: [
          {
            text: 'Edit',
            click: () => { /* Edit action */ },
          },
          {
            text: 'Delete',
            click: () => { /* Delete action */ },
          },
        ],
      },
    ];

    return html`
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <!-- Basic Grid -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Basic Data Grid</h3>
          <enchanted-data-grid-generic
            ?isLoading=${false}
            .data=${sampleData}
            .columns=${sampleColumns}
          ></enchanted-data-grid-generic>
        </div>

        <!-- With Checkbox Selection -->
        <div>
          <h3 style="margin: 0 0 16px 0;">With Checkbox Selection</h3>
          <enchanted-data-grid-generic
            ?isLoading=${false}
            .data=${sampleData}
            .columns=${sampleColumns}
            ?checkboxSelection=${true}
          ></enchanted-data-grid-generic>
        </div>

        <!-- With Table Hover -->
        <div>
          <h3 style="margin: 0 0 16px 0;">With Table Hover</h3>
          <enchanted-data-grid-generic
            ?isLoading=${false}
            .data=${sampleData}
            .columns=${sampleColumns}
            .tableHover=${'true'}
          ></enchanted-data-grid-generic>
        </div>

        <!-- Clickable Rows -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Clickable Rows</h3>
          <enchanted-data-grid-generic
            ?isLoading=${false}
            .data=${sampleData}
            .columns=${sampleColumns}
            ?isRowClickable=${true}
            .tableHover=${'true'}
          ></enchanted-data-grid-generic>
        </div>

        <!-- With Actions -->
        <div>
          <h3 style="margin: 0 0 16px 0;">With Action Columns</h3>
          <enchanted-data-grid-generic
            ?isLoading=${false}
            .data=${sampleData}
            .columns=${columnsWithActions}
          ></enchanted-data-grid-generic>
        </div>

        <!-- Loading State -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Loading State</h3>
          <enchanted-data-grid-generic
            ?isLoading=${true}
            .data=${sampleData}
            .columns=${sampleColumns}
          ></enchanted-data-grid-generic>
        </div>

        <!-- Empty State -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Empty State (No Data)</h3>
          <enchanted-data-grid-generic
            ?isLoading=${false}
            .data=${{ searchItems: [] }}
            .columns=${sampleColumns}
          ></enchanted-data-grid-generic>
        </div>

        <!-- Error State -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Error State (Middleware Error)</h3>
          <enchanted-data-grid-generic
            ?isLoading=${false}
            .data=${sampleData}
            .columns=${sampleColumns}
            ?hasMiddlewareError=${true}
          ></enchanted-data-grid-generic>
        </div>
      </div>
    `;
  },
  parameters: {
    controls: { disabled: true },
    docs: {
      description: {
        story: 'Comprehensive showcase of all data grid states including basic display, checkbox selection, hover effects, clickable rows, actions, loading, empty, and error states.'
      }
    }
  },
};
