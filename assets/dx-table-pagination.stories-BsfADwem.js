import{x as a,E as L}from"./iframe-Dsd1MpWQ.js";import{n as c,t as M,D as V,L as U}from"./dx-ac-base-element-C9dhstFR.js";import{r as g}from"./state-DQlunuPl.js";import{l as h}from"./lodash-BXdGFY-L.js";import"./dx-input-select-32Rx-ZfG.js";import"./dx-button-gwJQrlvi.js";import{v as r,g as b,i as $}from"./cssClassEnums-v1h5zF5X.js";import{g as B,i as v}from"./localization-DmqTGOFp.js";import{D as s}from"./dx-input-select-DRXt9p_b.js";import{e as x}from"./exportParts-CtUt9Lva.js";import{c as G,B as R,t as D}from"./index-BPZZDKKN.js";import"./index-DGHtdGDl.js";import"./index-HHRpnDFu.js";import"./preload-helper-C1FmrZbK.js";import"./dx-list-item-OcRTzvHV.js";import"./index-DzNqIDb7.js";import"./keyboardEventKeys-BnoN8uA3.js";const j=[10,25,50,100],k=50;var i=(t=>(t.NEXT_PAGE="nextPage",t.PREVIOUS_PAGE="previousPage",t.FIRST_PAGE="firstPage",t.LAST_PAGE="lastPage",t))(i||{}),f={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M14 16L24 6 25.4 7.4 16.8 16 25.4 24.6 24 26zM8 4H10V28H8z"}}],name:"page--first",size:32};const w="icon-page-first";let F=class extends R{render(){return a`${D({...f,attrs:{...f.attrs,preserveAspectRatio:"xMidYMid"}})}`}};G&&!customElements.get(w)&&customElements.define(w,F);var C={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M18 16L8 26 6.6 24.6 15.2 16 6.6 7.4 8 6zM22 4H24V28H22z"}}],name:"page--last",size:32};const z="icon-page-last";class W extends R{render(){return a`${D({...C,attrs:{...C.attrs,preserveAspectRatio:"xMidYMid"}})}`}}G&&!customElements.get(z)&&customElements.define(z,W);var X=Object.defineProperty,H=Object.getOwnPropertyDescriptor,n=(t,o,l,u)=>{for(var p=u>1?void 0:u?H(o,l):o,S=t.length-1,P;S>=0;S--)(P=t[S])&&(p=(u?P(o,l,p):P(p))||p);return u&&p&&X(o,l,p),p};let e=class extends V{constructor(){super(...arguments),this.disabled=!1,this.currentPage=1,this.totalCount=0,this.rowSize=void 0,this.options=j.map(t=>t.toString()),this.pagesCount=this.totalCount&&this.rowSize?Math.ceil(this.totalCount/this.rowSize):0,this.currentPageState=this.currentPage||1,this.rowSizeState=this.rowSize||k,this.rowMessage="",this.hasPreviousPage=!0,this.hasNextPage=!0,this.isRTL=B()===U.RTL}connectedCallback(){super.connectedCallback(),this.rowSize&&(this.rowSizeState=this.rowSize),this.currentPageState=this.currentPage||1,this.handleGetRowsDescription()}async handleGetRowsDescription(){if(this.totalCount!==void 0&&this.rowSize){this.pagesCount=Math.ceil(this.totalCount/this.rowSizeState);const t=(this.currentPageState-1)*this.rowSizeState+1,o=this.currentPageState*this.rowSizeState>this.totalCount?this.totalCount:this.currentPageState*this.rowSizeState;this.rowMessage=this.getMessage("output.table.footer.current.pages",[{"{current_page_start}":t.toString()},{"{current_page_end}":o.toString()},{"{total_count}":this.totalCount.toString()}]),t===1?this.hasPreviousPage=!1:this.hasPreviousPage=!0,o===this.totalCount?this.hasNextPage=!1:this.hasNextPage=!0}}async handleChange(t){const{type:o,name:l}=t.detail;[s.PAGINATION_ROWS,s.PAGINATION_PAGE].includes(o)&&(this.dispatchEvent(new CustomEvent("change",{detail:{value:l,type:o}})),o===s.PAGINATION_ROWS?(this.rowSizeState=Number(l),this.pagesCount=this.totalCount?Math.ceil(this.totalCount/this.rowSizeState):0,this.currentPageState=1,this.handleGetRowsDescription()):o===s.PAGINATION_PAGE&&(this.currentPageState=Number(l),this.handleGetRowsDescription()))}async handleClick(t){switch(t){case i.FIRST_PAGE:this.dispatchEvent(new CustomEvent("change",{detail:{value:1,type:s.PAGINATION_PAGE}})),this.currentPageState=1;break;case i.PREVIOUS_PAGE:this.dispatchEvent(new CustomEvent("change",{detail:{value:this.currentPageState-1,type:s.PAGINATION_PAGE}})),this.currentPageState>1&&(this.currentPageState=this.currentPageState-1);break;case i.NEXT_PAGE:this.dispatchEvent(new CustomEvent("change",{detail:{value:this.currentPageState+1,type:s.PAGINATION_PAGE}})),this.currentPageState<this.pagesCount&&(this.currentPageState=this.currentPageState+1);break;case i.LAST_PAGE:this.dispatchEvent(new CustomEvent("change",{detail:{value:this.pagesCount,type:s.PAGINATION_PAGE}})),this.currentPageState=this.pagesCount;break}this.handleGetRowsDescription()}renderSlash(){return this.isRTL?"\\":"/"}render(){return this.currentPageState&&this.totalCount&&this.rowSizeState&&this.pagesCount?a`
        <div part=${r.CONTAINER}>
          <div part=${r.ROWS_SECTION}>
            <dx-input-select
              .localization=${this.localization}
              exportparts="${x}"
              field=${s.PAGINATION_ROWS}
              selectedId=${this.rowSizeState}
              selectedValue=${this.rowSizeState}
              .options=${this.options}
              @change=${this.handleChange}
              ?disabled=${this.disabled}
              ariaLabel=${this.getMessage("output.pagination.rows.per.page.aria.label",[{"{rows_per_page}":this.rowSizeState.toString()}])}
            ></dx-input-select>
            <span part=${r.ROWS_DESCRIPTION}>
              ${this.rowMessage}
            </span>
          </div>
          <div part=${r.PAGES_SECTION}>
            <dx-button
              part=${r.PAGES_NAV_BUTTON}
              exportparts="${Object.values($).join(",")}"
              buttontext=''
              ?outlined="${!1}"
              ?disabled="${!this.hasPreviousPage}"         
              .icon="${v()?this.hasPreviousPage?a`<icon-page-first size="16" color="rgba(0, 0, 0, 0.60)"></icon-page-first>`:a`<icon-page-first size="16" color="rgba(0, 0, 0, 0.38)"></icon-page-first>`:this.hasPreviousPage?a`<icon-page-last size="16" color="rgba(0, 0, 0, 0.60)"></icon-page-last>`:a`<icon-page-last size="16" color="rgba(0, 0, 0, 0.38)"></icon-page-last>`}"
              data-testid="${i.FIRST_PAGE}"
              @click=${h.debounce(()=>{this.handleClick(i.FIRST_PAGE)},300)}
              variant=${b.BUTTON_TEXT_VAR}
              ariaLabel=${this.getMessage("output.pagination.first.page.aria.label")}
            >
            </dx-button>
            <dx-button
              part=${r.PAGES_NAV_BUTTON}
              exportparts="${Object.values($).join(",")}"
              buttontext=''
              ?outlined="${!1}"
              ?disabled="${!this.hasPreviousPage}"
              .icon="${v()?this.hasPreviousPage?a`<icon-chevron-left size="16" color="rgba(0, 0, 0, 0.60)"></icon-chevron-left>`:a`<icon-chevron-left size="16" color="rgba(0, 0, 0, 0.38)"></icon-chevron-left>`:this.hasPreviousPage?a`<icon-chevron-right size="16" color="rgba(0, 0, 0, 0.60)"></icon-chevron-right>`:a`<icon-chevron-right size="16" color="rgba(0, 0, 0, 0.38)"></icon-chevron-right>`}"
              data-testid="${i.PREVIOUS_PAGE}"
              @click=${h.debounce(()=>{this.handleClick(i.PREVIOUS_PAGE)},300)}
              variant=${b.BUTTON_TEXT_VAR}
              ariaLabel=${this.getMessage("output.pagination.previous.page.aria.label")}
            >
            </dx-button>
            <dx-input-select
              .localization=${this.localization}
              exportparts="${x}"
              field=${s.PAGINATION_PAGE}
              selectedId=${this.currentPageState}
              selectedValue=${this.currentPageState}
              .options=${Array.from(Array(this.pagesCount).keys()).map(t=>(t+1).toString())}
              @change=${this.handleChange}
              ?disabled=${this.disabled}
              hiddenIcon=${!0}
              ariaLabel=${this.getMessage("output.pagination.current.page.aria.label",[{"{current_page}":this.currentPageState.toString()},{"{total_pages}":this.pagesCount.toString()}])}
            ></dx-input-select>
            <span part=${r.PAGES_DESCRIPTION}>
              &nbsp; ${this.renderSlash()} ${this.pagesCount} &nbsp;
            </span>
            <dx-button
              part=${r.PAGES_NAV_BUTTON}
              exportparts="${Object.values($).join(",")}"
              buttontext=''
              ?outlined="${!1}"
              ?disabled="${!this.hasNextPage}"
              .icon="${v()?this.hasNextPage?a`<icon-chevron-right size="16" color="rgba(0, 0, 0, 0.60)"></icon-chevron-right>`:a`<icon-chevron-right size="16" color="rgba(0, 0, 0, 0.38)"></icon-chevron-right>`:this.hasNextPage?a`<icon-chevron-left size="16" color="rgba(0, 0, 0, 0.60)"></icon-chevron-left>`:a`<icon-chevron-left size="16" color="rgba(0, 0, 0, 0.38)"></icon-chevron-left>`}"
              data-testid="${i.NEXT_PAGE}"
              @click=${h.debounce(()=>{this.handleClick(i.NEXT_PAGE)},300)}
              variant=${b.BUTTON_TEXT_VAR}
              ariaLabel=${this.getMessage("output.pagination.next.page.aria.label")}
            >
            </dx-button>
            <dx-button
              part=${r.PAGES_NAV_BUTTON}
              exportparts="${Object.values($).join(",")}"
              buttontext=''
              ?outlined="${!1}"
              ?disabled="${!this.hasNextPage}"
              .icon="${v()?this.hasNextPage?a`<icon-page-last size="16" color="rgba(0, 0, 0, 0.60)"></icon-page-last>`:a`<icon-page-last size="16" color="rgba(0, 0, 0, 0.38)"></icon-page-last>`:this.hasNextPage?a`<icon-page-first size="16" color="rgba(0, 0, 0, 0.60)"></icon-page-first>`:a`<icon-page-first size="16" color="rgba(0, 0, 0, 0.38)"></icon-page-first>`}"
              data-testid="${i.LAST_PAGE}"
              @click=${h.debounce(()=>{this.handleClick(i.LAST_PAGE)},300)}
              variant=${b.BUTTON_TEXT_VAR}
              ariaLabel=${this.getMessage("output.pagination.last.page.aria.label")}
            >
            </dx-button>
          </div>
        </div>
      `:L}};n([c({type:Boolean})],e.prototype,"disabled",2);n([c({type:Number})],e.prototype,"currentPage",2);n([c({type:Number})],e.prototype,"totalCount",2);n([c({type:Number})],e.prototype,"rowSize",2);n([c({type:String})],e.prototype,"options",2);n([g()],e.prototype,"pagesCount",2);n([g()],e.prototype,"currentPageState",2);n([g()],e.prototype,"rowSizeState",2);n([g()],e.prototype,"rowMessage",2);n([g()],e.prototype,"hasPreviousPage",2);n([g()],e.prototype,"hasNextPage",2);n([g()],e.prototype,"isRTL",2);e=n([M("dx-table-pagination")],e);const ct={title:"Table/dx-table-pagination",component:"dx-table-pagination",tags:["autodocs"],parameters:{docs:{description:{component:"The Table Pagination component provides navigation controls for paginated data tables. It includes first/last page buttons, previous/next navigation, current page display, and a dropdown to adjust rows per page. Supports disabled states and customizable row size options. Use this component to implement efficient data browsing in tables with large datasets."}}},argTypes:{disabled:{control:{type:"boolean"},description:"Disables all pagination controls including navigation buttons and row size selector. Use when data is loading or pagination is temporarily unavailable.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},currentPage:{control:{type:"number"},description:"Current active page number (1-based index). Updates when users navigate between pages. Used to track and display the current position in the dataset.",table:{category:"State",type:{summary:"number"},defaultValue:{summary:"1"}}},totalCount:{control:{type:"number"},description:'Total number of items across all pages. Used to calculate total pages and display range information (e.g., "1-10 of 100"). Required for proper pagination.',table:{category:"Content",type:{summary:"number"},defaultValue:{summary:"0"}}},rowSize:{control:{type:"number"},description:"Number of rows displayed per page. Determines how many items are shown at once. Must match one of the values in the options array for proper display.",table:{category:"Layout",type:{summary:"number"},defaultValue:{summary:void 0}}},options:{control:{type:"object"},description:'Array of available row size options shown in the dropdown. Users can select from these values to change rows per page. Example: ["10", "20", "50", "100"].',table:{category:"Content",type:{summary:"string[]"},defaultValue:{summary:'["10","20","50"]'}}}},args:{disabled:!1,currentPage:1,totalCount:100,rowSize:10,options:["10","20","50"]}},m={name:"dx-table-pagination",render:t=>a`
      <dx-table-pagination
        ?disabled=${t.disabled}
        .currentPage=${t.currentPage}
        .totalCount=${t.totalCount}
        .rowSize=${t.rowSize}
        .options=${t.options}
      ></dx-table-pagination>
    `},d={parameters:{controls:{disable:!0}},render:()=>a`
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
            <dx-table-pagination .currentPage=${1} .totalCount=${100} .rowSize=${10} .options=${["10","20","50"]}></dx-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Middle Page (21-30 of 100)</span>
            <dx-table-pagination .currentPage=${3} .totalCount=${100} .rowSize=${10} .options=${["10","20","50"]}></dx-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Last Page (91-100 of 100)</span>
            <dx-table-pagination .currentPage=${10} .totalCount=${100} .rowSize=${10} .options=${["10","20","50"]}></dx-table-pagination>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="pagination-section">
          <h3>Disabled State</h3>
          <div class="pagination-item">
            <span class="pagination-label">All controls disabled</span>
            <dx-table-pagination ?disabled=${!0} .currentPage=${5} .totalCount=${100} .rowSize=${10} .options=${["10","20","50"]}></dx-table-pagination>
          </div>
        </div>

        <!-- Different Row Sizes -->
        <div class="pagination-section">
          <h3>Different Row Sizes</h3>
          <div class="pagination-item">
            <span class="pagination-label">10 rows per page (1-10 of 100)</span>
            <dx-table-pagination .currentPage=${1} .totalCount=${100} .rowSize=${10} .options=${["10","20","50"]}></dx-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">20 rows per page (1-20 of 100)</span>
            <dx-table-pagination .currentPage=${1} .totalCount=${100} .rowSize=${20} .options=${["10","20","50"]}></dx-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">50 rows per page (1-50 of 100)</span>
            <dx-table-pagination .currentPage=${1} .totalCount=${100} .rowSize=${50} .options=${["10","20","50"]}></dx-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">100 rows per page (1-100 of 250)</span>
            <dx-table-pagination .currentPage=${1} .totalCount=${250} .rowSize=${100} .options=${["10","20","50","100"]}></dx-table-pagination>
          </div>
        </div>

        <!-- Different Data Sizes -->
        <div class="pagination-section">
          <h3>Different Data Sizes</h3>
          <div class="pagination-item">
            <span class="pagination-label">Small dataset - Single page (1-5 of 5)</span>
            <dx-table-pagination .currentPage=${1} .totalCount=${5} .rowSize=${10} .options=${["10","20","50"]}></dx-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Few items (1-10 of 15, 2 pages)</span>
            <dx-table-pagination .currentPage=${1} .totalCount=${15} .rowSize=${10} .options=${["10","20","50"]}></dx-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Medium dataset (1-10 of 250, 25 pages)</span>
            <dx-table-pagination .currentPage=${1} .totalCount=${250} .rowSize=${10} .options=${["10","20","50"]}></dx-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Large dataset (1-10 of 1000, 100 pages)</span>
            <dx-table-pagination .currentPage=${1} .totalCount=${1e3} .rowSize=${10} .options=${["10","20","50","100"]}></dx-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Very large dataset (501-510 of 5000, 500 pages)</span>
            <dx-table-pagination .currentPage=${51} .totalCount=${5e3} .rowSize=${10} .options=${["10","20","50","100"]}></dx-table-pagination>
          </div>
        </div>

        <!-- Custom Options -->
        <div class="pagination-section">
          <h3>Custom Row Size Options</h3>
          <div class="pagination-item">
            <span class="pagination-label">Standard options: 10, 20, 50</span>
            <dx-table-pagination .currentPage=${1} .totalCount=${100} .rowSize=${10} .options=${["10","20","50"]}></dx-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Extended options: 10, 20, 50, 100</span>
            <dx-table-pagination .currentPage=${1} .totalCount=${500} .rowSize=${10} .options=${["10","20","50","100"]}></dx-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Custom options: 5, 15, 25, 50</span>
            <dx-table-pagination .currentPage=${1} .totalCount=${100} .rowSize=${15} .options=${["5","15","25","50"]}></dx-table-pagination>
          </div>
        </div>

        <!-- Edge Cases -->
        <div class="pagination-section">
          <h3>Edge Cases</h3>
          <div class="pagination-item">
            <span class="pagination-label">Empty dataset (0 items)</span>
            <dx-table-pagination .currentPage=${1} .totalCount=${0} .rowSize=${10} .options=${["10","20","50"]}></dx-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Exactly one page (1-10 of 10)</span>
            <dx-table-pagination .currentPage=${1} .totalCount=${10} .rowSize=${10} .options=${["10","20","50"]}></dx-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Last page with fewer items (96-100 of 100)</span>
            <dx-table-pagination .currentPage=${10} .totalCount=${100} .rowSize=${10} .options=${["10","20","50"]}></dx-table-pagination>
          </div>
        </div>
      </div>
    `};var E,A,y;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'dx-table-pagination',
  render: args => {
    return html\`
      <dx-table-pagination
        ?disabled=\${args.disabled}
        .currentPage=\${args.currentPage}
        .totalCount=\${args.totalCount}
        .rowSize=\${args.rowSize}
        .options=\${args.options}
      ></dx-table-pagination>
    \`;
  }
}`,...(y=(A=m.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var T,_,N,O,I;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    return html\`
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
            <dx-table-pagination .currentPage=\${1} .totalCount=\${100} .rowSize=\${10} .options=\${['10', '20', '50']}></dx-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Middle Page (21-30 of 100)</span>
            <dx-table-pagination .currentPage=\${3} .totalCount=\${100} .rowSize=\${10} .options=\${['10', '20', '50']}></dx-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Last Page (91-100 of 100)</span>
            <dx-table-pagination .currentPage=\${10} .totalCount=\${100} .rowSize=\${10} .options=\${['10', '20', '50']}></dx-table-pagination>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="pagination-section">
          <h3>Disabled State</h3>
          <div class="pagination-item">
            <span class="pagination-label">All controls disabled</span>
            <dx-table-pagination ?disabled=\${true} .currentPage=\${5} .totalCount=\${100} .rowSize=\${10} .options=\${['10', '20', '50']}></dx-table-pagination>
          </div>
        </div>

        <!-- Different Row Sizes -->
        <div class="pagination-section">
          <h3>Different Row Sizes</h3>
          <div class="pagination-item">
            <span class="pagination-label">10 rows per page (1-10 of 100)</span>
            <dx-table-pagination .currentPage=\${1} .totalCount=\${100} .rowSize=\${10} .options=\${['10', '20', '50']}></dx-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">20 rows per page (1-20 of 100)</span>
            <dx-table-pagination .currentPage=\${1} .totalCount=\${100} .rowSize=\${20} .options=\${['10', '20', '50']}></dx-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">50 rows per page (1-50 of 100)</span>
            <dx-table-pagination .currentPage=\${1} .totalCount=\${100} .rowSize=\${50} .options=\${['10', '20', '50']}></dx-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">100 rows per page (1-100 of 250)</span>
            <dx-table-pagination .currentPage=\${1} .totalCount=\${250} .rowSize=\${100} .options=\${['10', '20', '50', '100']}></dx-table-pagination>
          </div>
        </div>

        <!-- Different Data Sizes -->
        <div class="pagination-section">
          <h3>Different Data Sizes</h3>
          <div class="pagination-item">
            <span class="pagination-label">Small dataset - Single page (1-5 of 5)</span>
            <dx-table-pagination .currentPage=\${1} .totalCount=\${5} .rowSize=\${10} .options=\${['10', '20', '50']}></dx-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Few items (1-10 of 15, 2 pages)</span>
            <dx-table-pagination .currentPage=\${1} .totalCount=\${15} .rowSize=\${10} .options=\${['10', '20', '50']}></dx-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Medium dataset (1-10 of 250, 25 pages)</span>
            <dx-table-pagination .currentPage=\${1} .totalCount=\${250} .rowSize=\${10} .options=\${['10', '20', '50']}></dx-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Large dataset (1-10 of 1000, 100 pages)</span>
            <dx-table-pagination .currentPage=\${1} .totalCount=\${1000} .rowSize=\${10} .options=\${['10', '20', '50', '100']}></dx-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Very large dataset (501-510 of 5000, 500 pages)</span>
            <dx-table-pagination .currentPage=\${51} .totalCount=\${5000} .rowSize=\${10} .options=\${['10', '20', '50', '100']}></dx-table-pagination>
          </div>
        </div>

        <!-- Custom Options -->
        <div class="pagination-section">
          <h3>Custom Row Size Options</h3>
          <div class="pagination-item">
            <span class="pagination-label">Standard options: 10, 20, 50</span>
            <dx-table-pagination .currentPage=\${1} .totalCount=\${100} .rowSize=\${10} .options=\${['10', '20', '50']}></dx-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Extended options: 10, 20, 50, 100</span>
            <dx-table-pagination .currentPage=\${1} .totalCount=\${500} .rowSize=\${10} .options=\${['10', '20', '50', '100']}></dx-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Custom options: 5, 15, 25, 50</span>
            <dx-table-pagination .currentPage=\${1} .totalCount=\${100} .rowSize=\${15} .options=\${['5', '15', '25', '50']}></dx-table-pagination>
          </div>
        </div>

        <!-- Edge Cases -->
        <div class="pagination-section">
          <h3>Edge Cases</h3>
          <div class="pagination-item">
            <span class="pagination-label">Empty dataset (0 items)</span>
            <dx-table-pagination .currentPage=\${1} .totalCount=\${0} .rowSize=\${10} .options=\${['10', '20', '50']}></dx-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Exactly one page (1-10 of 10)</span>
            <dx-table-pagination .currentPage=\${1} .totalCount=\${10} .rowSize=\${10} .options=\${['10', '20', '50']}></dx-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Last page with fewer items (96-100 of 100)</span>
            <dx-table-pagination .currentPage=\${10} .totalCount=\${100} .rowSize=\${10} .options=\${['10', '20', '50']}></dx-table-pagination>
          </div>
        </div>
      </div>
    \`;
  }
}`,...(N=(_=d.parameters)==null?void 0:_.docs)==null?void 0:N.source},description:{story:`Comprehensive showcase of all table pagination states and configurations.
Demonstrates various page counts, row sizes, disabled states, and different data scenarios.`,...(I=(O=d.parameters)==null?void 0:O.docs)==null?void 0:I.description}}};const ut=["DxTablePaginationStory","AllStates"];export{d as AllStates,m as DxTablePaginationStory,ut as __namedExportsOrder,ct as default};
