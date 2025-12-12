import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/atomic-component/enchanted-table-pagination';

/**
 * @typedef EnchantedTablePaginationProps
 * Props for the enchanted-table-pagination web component.
 *
 * @property disabled - Disables all pagination controls
 * @property currentPage - The current active page number
 * @property totalCount - Total number of items across all pages
 * @property rowSize - Number of rows displayed per page
 * @property options - Available row size options for selection
 */
export interface EnchantedTablePaginationProps {
  disabled?: boolean;
  currentPage?: number;
  totalCount?: number;
  rowSize?: number;
  options?: string[];
}

const meta: Meta<EnchantedTablePaginationProps> = {
  title: 'Table/enchanted-table-pagination',
  component: 'enchanted-table-pagination',  
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Table Pagination component provides navigation controls for paginated data tables. It includes first/last page buttons, previous/next navigation, ' +
          'current page display, and a dropdown to adjust rows per page. Supports disabled states and customizable row size options. Use this component to implement ' +
          'efficient data browsing in tables with large datasets.',
      },
    },
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables all pagination controls including navigation buttons and row size selector. Use when data is loading or pagination is temporarily unavailable.',
      table: { category: 'State', type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    currentPage: {
      control: { type: 'number' },
      description: 'Current active page number (1-based index). Updates when users navigate between pages. Used to track and display the current position in the dataset.',
      table: { category: 'State', type: { summary: 'number' }, defaultValue: { summary: '1' } },
    },
    totalCount: {
      control: { type: 'number' },
      description: 'Total number of items across all pages. Used to calculate total pages and display range information (e.g., "1-10 of 100"). Required for proper pagination.',
      table: { category: 'Content', type: { summary: 'number' }, defaultValue: { summary: '0' } },
    },
    rowSize: {
      control: { type: 'number' },
      description: 'Number of rows displayed per page. Determines how many items are shown at once. Must match one of the values in the options array for proper display.',
      table: { category: 'Layout', type: { summary: 'number' }, defaultValue: { summary: undefined } },
    },
    options: {
      control: { type: 'object' },
      description: 'Array of available row size options shown in the dropdown. Users can select from these values to change rows per page. Example: ["10", "20", "50", "100"].',
      table: { category: 'Content', type: { summary: 'string[]' }, defaultValue: { summary: '["10","20","50"]' } },
    },
  },
  args: {
    disabled: false,
    currentPage: 1,
    totalCount: 100,
    rowSize: 10,
    options: ['10', '20', '50'],
  },
};

export default meta;

type Story = StoryObj<EnchantedTablePaginationProps>;

export const EnchantedTablePaginationStory: Story = {
  name: 'enchanted-table-pagination',
  render: (args) => {
    return html`
      <enchanted-table-pagination
        ?disabled=${args.disabled}
        .currentPage=${args.currentPage}
        .totalCount=${args.totalCount}
        .rowSize=${args.rowSize}
        .options=${args.options}
      ></enchanted-table-pagination>
    `;
  },
};

/**
 * Comprehensive showcase of all table pagination states and configurations.
 * Demonstrates various page counts, row sizes, disabled states, and different data scenarios.
 */
export const AllStates: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    return html`
      <style>
        .pagination-container {
          display: flex;
          flex-direction: column;
          gap: 32px;
          padding: 20px;
          max-width: 800px;
        }
        .pagination-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .pagination-section h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
        }
        .pagination-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .pagination-label {
          font-size: 12px;
          color: #666;
        }
      </style>

      <div class="pagination-container">
        <!-- Default States -->
        <div class="pagination-section">
          <h3>Default States</h3>
          <div class="pagination-item">
            <span class="pagination-label">Default - First Page (1-10 of 100)</span>
            <enchanted-table-pagination .currentPage=${1} .totalCount=${100} .rowSize=${10} .options=${['10', '20', '50']}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Middle Page (21-30 of 100)</span>
            <enchanted-table-pagination .currentPage=${3} .totalCount=${100} .rowSize=${10} .options=${['10', '20', '50']}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Last Page (91-100 of 100)</span>
            <enchanted-table-pagination .currentPage=${10} .totalCount=${100} .rowSize=${10} .options=${['10', '20', '50']}></enchanted-table-pagination>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="pagination-section">
          <h3>Disabled State</h3>
          <div class="pagination-item">
            <span class="pagination-label">All controls disabled</span>
            <enchanted-table-pagination ?disabled=${true} .currentPage=${5} .totalCount=${100} .rowSize=${10} .options=${['10', '20', '50']}></enchanted-table-pagination>
          </div>
        </div>

        <!-- Different Row Sizes -->
        <div class="pagination-section">
          <h3>Different Row Sizes</h3>
          <div class="pagination-item">
            <span class="pagination-label">10 rows per page (1-10 of 100)</span>
            <enchanted-table-pagination .currentPage=${1} .totalCount=${100} .rowSize=${10} .options=${['10', '20', '50']}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">20 rows per page (1-20 of 100)</span>
            <enchanted-table-pagination .currentPage=${1} .totalCount=${100} .rowSize=${20} .options=${['10', '20', '50']}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">50 rows per page (1-50 of 100)</span>
            <enchanted-table-pagination .currentPage=${1} .totalCount=${100} .rowSize=${50} .options=${['10', '20', '50']}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">100 rows per page (1-100 of 250)</span>
            <enchanted-table-pagination .currentPage=${1} .totalCount=${250} .rowSize=${100} .options=${['10', '20', '50', '100']}></enchanted-table-pagination>
          </div>
        </div>

        <!-- Different Data Sizes -->
        <div class="pagination-section">
          <h3>Different Data Sizes</h3>
          <div class="pagination-item">
            <span class="pagination-label">Small dataset - Single page (1-5 of 5)</span>
            <enchanted-table-pagination .currentPage=${1} .totalCount=${5} .rowSize=${10} .options=${['10', '20', '50']}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Few items (1-10 of 15, 2 pages)</span>
            <enchanted-table-pagination .currentPage=${1} .totalCount=${15} .rowSize=${10} .options=${['10', '20', '50']}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Medium dataset (1-10 of 250, 25 pages)</span>
            <enchanted-table-pagination .currentPage=${1} .totalCount=${250} .rowSize=${10} .options=${['10', '20', '50']}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Large dataset (1-10 of 1000, 100 pages)</span>
            <enchanted-table-pagination .currentPage=${1} .totalCount=${1000} .rowSize=${10} .options=${['10', '20', '50', '100']}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Very large dataset (501-510 of 5000, 500 pages)</span>
            <enchanted-table-pagination .currentPage=${51} .totalCount=${5000} .rowSize=${10} .options=${['10', '20', '50', '100']}></enchanted-table-pagination>
          </div>
        </div>

        <!-- Custom Options -->
        <div class="pagination-section">
          <h3>Custom Row Size Options</h3>
          <div class="pagination-item">
            <span class="pagination-label">Standard options: 10, 20, 50</span>
            <enchanted-table-pagination .currentPage=${1} .totalCount=${100} .rowSize=${10} .options=${['10', '20', '50']}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Extended options: 10, 20, 50, 100</span>
            <enchanted-table-pagination .currentPage=${1} .totalCount=${500} .rowSize=${10} .options=${['10', '20', '50', '100']}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Custom options: 5, 15, 25, 50</span>
            <enchanted-table-pagination .currentPage=${1} .totalCount=${100} .rowSize=${15} .options=${['5', '15', '25', '50']}></enchanted-table-pagination>
          </div>
        </div>

        <!-- Edge Cases -->
        <div class="pagination-section">
          <h3>Edge Cases</h3>
          <div class="pagination-item">
            <span class="pagination-label">Empty dataset (0 items)</span>
            <enchanted-table-pagination .currentPage=${1} .totalCount=${0} .rowSize=${10} .options=${['10', '20', '50']}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Exactly one page (1-10 of 10)</span>
            <enchanted-table-pagination .currentPage=${1} .totalCount=${10} .rowSize=${10} .options=${['10', '20', '50']}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Last page with fewer items (96-100 of 100)</span>
            <enchanted-table-pagination .currentPage=${10} .totalCount=${100} .rowSize=${10} .options=${['10', '20', '50']}></enchanted-table-pagination>
          </div>
        </div>
      </div>
    `;
  },
};
