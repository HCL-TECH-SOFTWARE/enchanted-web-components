import{x as a,E as L}from"./iframe-BY3ui3w0.js";import{n as d,t as M,E as V,L as U}from"./enchanted-ac-base-element-CBHL5x_U.js";import{r as c}from"./state-B3qr-gd1.js";import{l as u}from"./lodash-DGpKHPGy.js";import"./enchanted-select-CfudIoYJ.js";import"./enchanted-button-DEmrPq5W.js";import{u as r,g as b,i as $}from"./cssClassEnums-D4dgqifY.js";import{g as B,i as m}from"./localization-rBpmtxQQ.js";import{E as s}from"./enchanted-select-Ge91KUgI.js";import{e as f}from"./exportParts-lw5uKHST.js";import{c as G,B as R,t as D}from"./index-F6NVQYd9.js";import"./index-K2DsxZIL.js";import"./index-D3cyZXuO.js";import"./preload-helper-C1FmrZbK.js";import"./enchanted-list-item-BT4xU11a.js";import"./index-cajtVWi3.js";import"./keyboardEventKeys-BnoN8uA3.js";const j=[10,25,50,100],k=50;var n=(t=>(t.NEXT_PAGE="nextPage",t.PREVIOUS_PAGE="previousPage",t.FIRST_PAGE="firstPage",t.LAST_PAGE="lastPage",t))(n||{}),w={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M14 16L24 6 25.4 7.4 16.8 16 25.4 24.6 24 26zM8 4H10V28H8z"}}],name:"page--first",size:32};const C="icon-page-first";let F=class extends R{render(){return a`${D({...w,attrs:{...w.attrs,preserveAspectRatio:"xMidYMid"}})}`}};G&&!customElements.get(C)&&customElements.define(C,F);var z={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M18 16L8 26 6.6 24.6 15.2 16 6.6 7.4 8 6zM22 4H24V28H22z"}}],name:"page--last",size:32};const E="icon-page-last";class W extends R{render(){return a`${D({...z,attrs:{...z.attrs,preserveAspectRatio:"xMidYMid"}})}`}}G&&!customElements.get(E)&&customElements.define(E,W);var X=Object.defineProperty,H=Object.getOwnPropertyDescriptor,i=(t,o,l,h)=>{for(var p=h>1?void 0:h?H(o,l):o,S=t.length-1,P;S>=0;S--)(P=t[S])&&(p=(h?P(o,l,p):P(p))||p);return h&&p&&X(o,l,p),p};let e=class extends V{constructor(){super(...arguments),this.disabled=!1,this.currentPage=1,this.totalCount=0,this.rowSize=void 0,this.options=j.map(t=>t.toString()),this.pagesCount=this.totalCount&&this.rowSize?Math.ceil(this.totalCount/this.rowSize):0,this.currentPageState=this.currentPage||1,this.rowSizeState=this.rowSize||k,this.rowMessage="",this.hasPreviousPage=!0,this.hasNextPage=!0,this.isRTL=B()===U.RTL}connectedCallback(){super.connectedCallback(),this.rowSize&&(this.rowSizeState=this.rowSize),this.currentPageState=this.currentPage||1,this.handleGetRowsDescription()}async handleGetRowsDescription(){if(this.totalCount!==void 0&&this.rowSize){this.pagesCount=Math.ceil(this.totalCount/this.rowSizeState);const t=(this.currentPageState-1)*this.rowSizeState+1,o=this.currentPageState*this.rowSizeState>this.totalCount?this.totalCount:this.currentPageState*this.rowSizeState;this.rowMessage=this.getMessage("output.table.footer.current.pages",[{"{current_page_start}":t.toString()},{"{current_page_end}":o.toString()},{"{total_count}":this.totalCount.toString()}]),t===1?this.hasPreviousPage=!1:this.hasPreviousPage=!0,o===this.totalCount?this.hasNextPage=!1:this.hasNextPage=!0}}async handleChange(t){const{type:o,name:l}=t.detail;[s.PAGINATION_ROWS,s.PAGINATION_PAGE].includes(o)&&(this.dispatchEvent(new CustomEvent("change",{detail:{value:l,type:o}})),o===s.PAGINATION_ROWS?(this.rowSizeState=Number(l),this.pagesCount=this.totalCount?Math.ceil(this.totalCount/this.rowSizeState):0,this.currentPageState=1,this.handleGetRowsDescription()):o===s.PAGINATION_PAGE&&(this.currentPageState=Number(l),this.handleGetRowsDescription()))}async handleClick(t){switch(t){case n.FIRST_PAGE:this.dispatchEvent(new CustomEvent("change",{detail:{value:1,type:s.PAGINATION_PAGE}})),this.currentPageState=1;break;case n.PREVIOUS_PAGE:this.dispatchEvent(new CustomEvent("change",{detail:{value:this.currentPageState-1,type:s.PAGINATION_PAGE}})),this.currentPageState>1&&(this.currentPageState=this.currentPageState-1);break;case n.NEXT_PAGE:this.dispatchEvent(new CustomEvent("change",{detail:{value:this.currentPageState+1,type:s.PAGINATION_PAGE}})),this.currentPageState<this.pagesCount&&(this.currentPageState=this.currentPageState+1);break;case n.LAST_PAGE:this.dispatchEvent(new CustomEvent("change",{detail:{value:this.pagesCount,type:s.PAGINATION_PAGE}})),this.currentPageState=this.pagesCount;break}this.handleGetRowsDescription()}renderSlash(){return this.isRTL?"\\":"/"}render(){return this.currentPageState&&this.totalCount&&this.rowSizeState&&this.pagesCount?a`
        <div part=${r.CONTAINER}>
          <div part=${r.ROWS_SECTION}>
            <enchanted-select
              .localization=${this.localization}
              exportparts="${f}"
              field=${s.PAGINATION_ROWS}
              selectedId=${this.rowSizeState}
              selectedValue=${this.rowSizeState}
              .options=${this.options}
              @change=${this.handleChange}
              ?disabled=${this.disabled}
              ariaLabel=${this.getMessage("output.pagination.rows.per.page.aria.label",[{"{rows_per_page}":this.rowSizeState.toString()}])}
            ></enchanted-select>
            <span part=${r.ROWS_DESCRIPTION}>
              ${this.rowMessage}
            </span>
          </div>
          <div part=${r.PAGES_SECTION}>
            <enchanted-button
              part=${r.PAGES_NAV_BUTTON}
              exportparts="${Object.values($).join(",")}"
              buttontext=''
              ?outlined="${!1}"
              ?disabled="${!this.hasPreviousPage}"         
              .icon="${m()?this.hasPreviousPage?a`<icon-page-first size="16" color="rgba(0, 0, 0, 0.60)"></icon-page-first>`:a`<icon-page-first size="16" color="rgba(0, 0, 0, 0.38)"></icon-page-first>`:this.hasPreviousPage?a`<icon-page-last size="16" color="rgba(0, 0, 0, 0.60)"></icon-page-last>`:a`<icon-page-last size="16" color="rgba(0, 0, 0, 0.38)"></icon-page-last>`}"
              data-testid="${n.FIRST_PAGE}"
              @click=${u.debounce(()=>{this.handleClick(n.FIRST_PAGE)},300)}
              variant=${b.BUTTON_TEXT_VAR}
              ariaLabel=${this.getMessage("output.pagination.first.page.aria.label")}
            >
            </enchanted-button>
            <enchanted-button
              part=${r.PAGES_NAV_BUTTON}
              exportparts="${Object.values($).join(",")}"
              buttontext=''
              ?outlined="${!1}"
              ?disabled="${!this.hasPreviousPage}"
              .icon="${m()?this.hasPreviousPage?a`<icon-chevron-left size="16" color="rgba(0, 0, 0, 0.60)"></icon-chevron-left>`:a`<icon-chevron-left size="16" color="rgba(0, 0, 0, 0.38)"></icon-chevron-left>`:this.hasPreviousPage?a`<icon-chevron-right size="16" color="rgba(0, 0, 0, 0.60)"></icon-chevron-right>`:a`<icon-chevron-right size="16" color="rgba(0, 0, 0, 0.38)"></icon-chevron-right>`}"
              data-testid="${n.PREVIOUS_PAGE}"
              @click=${u.debounce(()=>{this.handleClick(n.PREVIOUS_PAGE)},300)}
              variant=${b.BUTTON_TEXT_VAR}
              ariaLabel=${this.getMessage("output.pagination.previous.page.aria.label")}
            >
            </enchanted-button>
            <enchanted-select
              .localization=${this.localization}
              exportparts="${f}"
              field=${s.PAGINATION_PAGE}
              selectedId=${this.currentPageState}
              selectedValue=${this.currentPageState}
              .options=${Array.from(Array(this.pagesCount).keys()).map(t=>(t+1).toString())}
              @change=${this.handleChange}
              ?disabled=${this.disabled}
              hiddenIcon=${!0}
              ariaLabel=${this.getMessage("output.pagination.current.page.aria.label",[{"{current_page}":this.currentPageState.toString()},{"{total_pages}":this.pagesCount.toString()}])}
            ></enchanted-select>
            <span part=${r.PAGES_DESCRIPTION}>
              &nbsp; ${this.renderSlash()} ${this.pagesCount} &nbsp;
            </span>
            <enchanted-button
              part=${r.PAGES_NAV_BUTTON}
              exportparts="${Object.values($).join(",")}"
              buttontext=''
              ?outlined="${!1}"
              ?disabled="${!this.hasNextPage}"
              .icon="${m()?this.hasNextPage?a`<icon-chevron-right size="16" color="rgba(0, 0, 0, 0.60)"></icon-chevron-right>`:a`<icon-chevron-right size="16" color="rgba(0, 0, 0, 0.38)"></icon-chevron-right>`:this.hasNextPage?a`<icon-chevron-left size="16" color="rgba(0, 0, 0, 0.60)"></icon-chevron-left>`:a`<icon-chevron-left size="16" color="rgba(0, 0, 0, 0.38)"></icon-chevron-left>`}"
              data-testid="${n.NEXT_PAGE}"
              @click=${u.debounce(()=>{this.handleClick(n.NEXT_PAGE)},300)}
              variant=${b.BUTTON_TEXT_VAR}
              ariaLabel=${this.getMessage("output.pagination.next.page.aria.label")}
            >
            </enchanted-button>
            <enchanted-button
              part=${r.PAGES_NAV_BUTTON}
              exportparts="${Object.values($).join(",")}"
              buttontext=''
              ?outlined="${!1}"
              ?disabled="${!this.hasNextPage}"
              .icon="${m()?this.hasNextPage?a`<icon-page-last size="16" color="rgba(0, 0, 0, 0.60)"></icon-page-last>`:a`<icon-page-last size="16" color="rgba(0, 0, 0, 0.38)"></icon-page-last>`:this.hasNextPage?a`<icon-page-first size="16" color="rgba(0, 0, 0, 0.60)"></icon-page-first>`:a`<icon-page-first size="16" color="rgba(0, 0, 0, 0.38)"></icon-page-first>`}"
              data-testid="${n.LAST_PAGE}"
              @click=${u.debounce(()=>{this.handleClick(n.LAST_PAGE)},300)}
              variant=${b.BUTTON_TEXT_VAR}
              ariaLabel=${this.getMessage("output.pagination.last.page.aria.label")}
            >
            </enchanted-button>
          </div>
        </div>
      `:L}};i([d({type:Boolean})],e.prototype,"disabled",2);i([d({type:Number})],e.prototype,"currentPage",2);i([d({type:Number})],e.prototype,"totalCount",2);i([d({type:Number})],e.prototype,"rowSize",2);i([d({type:String})],e.prototype,"options",2);i([c()],e.prototype,"pagesCount",2);i([c()],e.prototype,"currentPageState",2);i([c()],e.prototype,"rowSizeState",2);i([c()],e.prototype,"rowMessage",2);i([c()],e.prototype,"hasPreviousPage",2);i([c()],e.prototype,"hasNextPage",2);i([c()],e.prototype,"isRTL",2);e=i([M("enchanted-table-pagination")],e);const dt={title:"Table/enchanted-table-pagination",component:"enchanted-table-pagination",tags:["autodocs"],parameters:{docs:{description:{component:"The Table Pagination component provides navigation controls for paginated data tables. It includes first/last page buttons, previous/next navigation, current page display, and a dropdown to adjust rows per page. Supports disabled states and customizable row size options. Use this component to implement efficient data browsing in tables with large datasets."}}},argTypes:{disabled:{control:{type:"boolean"},description:"Disables all pagination controls including navigation buttons and row size selector. Use when data is loading or pagination is temporarily unavailable.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},currentPage:{control:{type:"number"},description:"Current active page number (1-based index). Updates when users navigate between pages. Used to track and display the current position in the dataset.",table:{category:"State",type:{summary:"number"},defaultValue:{summary:"1"}}},totalCount:{control:{type:"number"},description:'Total number of items across all pages. Used to calculate total pages and display range information (e.g., "1-10 of 100"). Required for proper pagination.',table:{category:"Content",type:{summary:"number"},defaultValue:{summary:"0"}}},rowSize:{control:{type:"number"},description:"Number of rows displayed per page. Determines how many items are shown at once. Must match one of the values in the options array for proper display.",table:{category:"Layout",type:{summary:"number"},defaultValue:{summary:void 0}}},options:{control:{type:"object"},description:'Array of available row size options shown in the dropdown. Users can select from these values to change rows per page. Example: ["10", "20", "50", "100"].',table:{category:"Content",type:{summary:"string[]"},defaultValue:{summary:'["10","20","50"]'}}}},args:{disabled:!1,currentPage:1,totalCount:100,rowSize:10,options:["10","20","50"]}},v={name:"enchanted-table-pagination",render:t=>a`
      <enchanted-table-pagination
        ?disabled=${t.disabled}
        .currentPage=${t.currentPage}
        .totalCount=${t.totalCount}
        .rowSize=${t.rowSize}
        .options=${t.options}
      ></enchanted-table-pagination>
    `},g={parameters:{controls:{disable:!0}},render:()=>a`
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
            <enchanted-table-pagination .currentPage=${1} .totalCount=${100} .rowSize=${10} .options=${["10","20","50"]}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Middle Page (21-30 of 100)</span>
            <enchanted-table-pagination .currentPage=${3} .totalCount=${100} .rowSize=${10} .options=${["10","20","50"]}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Last Page (91-100 of 100)</span>
            <enchanted-table-pagination .currentPage=${10} .totalCount=${100} .rowSize=${10} .options=${["10","20","50"]}></enchanted-table-pagination>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="pagination-section">
          <h3>Disabled State</h3>
          <div class="pagination-item">
            <span class="pagination-label">All controls disabled</span>
            <enchanted-table-pagination ?disabled=${!0} .currentPage=${5} .totalCount=${100} .rowSize=${10} .options=${["10","20","50"]}></enchanted-table-pagination>
          </div>
        </div>

        <!-- Different Row Sizes -->
        <div class="pagination-section">
          <h3>Different Row Sizes</h3>
          <div class="pagination-item">
            <span class="pagination-label">10 rows per page (1-10 of 100)</span>
            <enchanted-table-pagination .currentPage=${1} .totalCount=${100} .rowSize=${10} .options=${["10","20","50"]}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">20 rows per page (1-20 of 100)</span>
            <enchanted-table-pagination .currentPage=${1} .totalCount=${100} .rowSize=${20} .options=${["10","20","50"]}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">50 rows per page (1-50 of 100)</span>
            <enchanted-table-pagination .currentPage=${1} .totalCount=${100} .rowSize=${50} .options=${["10","20","50"]}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">100 rows per page (1-100 of 250)</span>
            <enchanted-table-pagination .currentPage=${1} .totalCount=${250} .rowSize=${100} .options=${["10","20","50","100"]}></enchanted-table-pagination>
          </div>
        </div>

        <!-- Different Data Sizes -->
        <div class="pagination-section">
          <h3>Different Data Sizes</h3>
          <div class="pagination-item">
            <span class="pagination-label">Small dataset - Single page (1-5 of 5)</span>
            <enchanted-table-pagination .currentPage=${1} .totalCount=${5} .rowSize=${10} .options=${["10","20","50"]}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Few items (1-10 of 15, 2 pages)</span>
            <enchanted-table-pagination .currentPage=${1} .totalCount=${15} .rowSize=${10} .options=${["10","20","50"]}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Medium dataset (1-10 of 250, 25 pages)</span>
            <enchanted-table-pagination .currentPage=${1} .totalCount=${250} .rowSize=${10} .options=${["10","20","50"]}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Large dataset (1-10 of 1000, 100 pages)</span>
            <enchanted-table-pagination .currentPage=${1} .totalCount=${1e3} .rowSize=${10} .options=${["10","20","50","100"]}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Very large dataset (501-510 of 5000, 500 pages)</span>
            <enchanted-table-pagination .currentPage=${51} .totalCount=${5e3} .rowSize=${10} .options=${["10","20","50","100"]}></enchanted-table-pagination>
          </div>
        </div>

        <!-- Custom Options -->
        <div class="pagination-section">
          <h3>Custom Row Size Options</h3>
          <div class="pagination-item">
            <span class="pagination-label">Standard options: 10, 20, 50</span>
            <enchanted-table-pagination .currentPage=${1} .totalCount=${100} .rowSize=${10} .options=${["10","20","50"]}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Extended options: 10, 20, 50, 100</span>
            <enchanted-table-pagination .currentPage=${1} .totalCount=${500} .rowSize=${10} .options=${["10","20","50","100"]}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Custom options: 5, 15, 25, 50</span>
            <enchanted-table-pagination .currentPage=${1} .totalCount=${100} .rowSize=${15} .options=${["5","15","25","50"]}></enchanted-table-pagination>
          </div>
        </div>

        <!-- Edge Cases -->
        <div class="pagination-section">
          <h3>Edge Cases</h3>
          <div class="pagination-item">
            <span class="pagination-label">Empty dataset (0 items)</span>
            <enchanted-table-pagination .currentPage=${1} .totalCount=${0} .rowSize=${10} .options=${["10","20","50"]}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Exactly one page (1-10 of 10)</span>
            <enchanted-table-pagination .currentPage=${1} .totalCount=${10} .rowSize=${10} .options=${["10","20","50"]}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Last page with fewer items (96-100 of 100)</span>
            <enchanted-table-pagination .currentPage=${10} .totalCount=${100} .rowSize=${10} .options=${["10","20","50"]}></enchanted-table-pagination>
          </div>
        </div>
      </div>
    `};var A,y,T;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'enchanted-table-pagination',
  render: args => {
    return html\`
      <enchanted-table-pagination
        ?disabled=\${args.disabled}
        .currentPage=\${args.currentPage}
        .totalCount=\${args.totalCount}
        .rowSize=\${args.rowSize}
        .options=\${args.options}
      ></enchanted-table-pagination>
    \`;
  }
}`,...(T=(y=v.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var _,N,x,O,I;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
            <enchanted-table-pagination .currentPage=\${1} .totalCount=\${100} .rowSize=\${10} .options=\${['10', '20', '50']}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Middle Page (21-30 of 100)</span>
            <enchanted-table-pagination .currentPage=\${3} .totalCount=\${100} .rowSize=\${10} .options=\${['10', '20', '50']}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Last Page (91-100 of 100)</span>
            <enchanted-table-pagination .currentPage=\${10} .totalCount=\${100} .rowSize=\${10} .options=\${['10', '20', '50']}></enchanted-table-pagination>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="pagination-section">
          <h3>Disabled State</h3>
          <div class="pagination-item">
            <span class="pagination-label">All controls disabled</span>
            <enchanted-table-pagination ?disabled=\${true} .currentPage=\${5} .totalCount=\${100} .rowSize=\${10} .options=\${['10', '20', '50']}></enchanted-table-pagination>
          </div>
        </div>

        <!-- Different Row Sizes -->
        <div class="pagination-section">
          <h3>Different Row Sizes</h3>
          <div class="pagination-item">
            <span class="pagination-label">10 rows per page (1-10 of 100)</span>
            <enchanted-table-pagination .currentPage=\${1} .totalCount=\${100} .rowSize=\${10} .options=\${['10', '20', '50']}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">20 rows per page (1-20 of 100)</span>
            <enchanted-table-pagination .currentPage=\${1} .totalCount=\${100} .rowSize=\${20} .options=\${['10', '20', '50']}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">50 rows per page (1-50 of 100)</span>
            <enchanted-table-pagination .currentPage=\${1} .totalCount=\${100} .rowSize=\${50} .options=\${['10', '20', '50']}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">100 rows per page (1-100 of 250)</span>
            <enchanted-table-pagination .currentPage=\${1} .totalCount=\${250} .rowSize=\${100} .options=\${['10', '20', '50', '100']}></enchanted-table-pagination>
          </div>
        </div>

        <!-- Different Data Sizes -->
        <div class="pagination-section">
          <h3>Different Data Sizes</h3>
          <div class="pagination-item">
            <span class="pagination-label">Small dataset - Single page (1-5 of 5)</span>
            <enchanted-table-pagination .currentPage=\${1} .totalCount=\${5} .rowSize=\${10} .options=\${['10', '20', '50']}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Few items (1-10 of 15, 2 pages)</span>
            <enchanted-table-pagination .currentPage=\${1} .totalCount=\${15} .rowSize=\${10} .options=\${['10', '20', '50']}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Medium dataset (1-10 of 250, 25 pages)</span>
            <enchanted-table-pagination .currentPage=\${1} .totalCount=\${250} .rowSize=\${10} .options=\${['10', '20', '50']}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Large dataset (1-10 of 1000, 100 pages)</span>
            <enchanted-table-pagination .currentPage=\${1} .totalCount=\${1000} .rowSize=\${10} .options=\${['10', '20', '50', '100']}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Very large dataset (501-510 of 5000, 500 pages)</span>
            <enchanted-table-pagination .currentPage=\${51} .totalCount=\${5000} .rowSize=\${10} .options=\${['10', '20', '50', '100']}></enchanted-table-pagination>
          </div>
        </div>

        <!-- Custom Options -->
        <div class="pagination-section">
          <h3>Custom Row Size Options</h3>
          <div class="pagination-item">
            <span class="pagination-label">Standard options: 10, 20, 50</span>
            <enchanted-table-pagination .currentPage=\${1} .totalCount=\${100} .rowSize=\${10} .options=\${['10', '20', '50']}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Extended options: 10, 20, 50, 100</span>
            <enchanted-table-pagination .currentPage=\${1} .totalCount=\${500} .rowSize=\${10} .options=\${['10', '20', '50', '100']}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Custom options: 5, 15, 25, 50</span>
            <enchanted-table-pagination .currentPage=\${1} .totalCount=\${100} .rowSize=\${15} .options=\${['5', '15', '25', '50']}></enchanted-table-pagination>
          </div>
        </div>

        <!-- Edge Cases -->
        <div class="pagination-section">
          <h3>Edge Cases</h3>
          <div class="pagination-item">
            <span class="pagination-label">Empty dataset (0 items)</span>
            <enchanted-table-pagination .currentPage=\${1} .totalCount=\${0} .rowSize=\${10} .options=\${['10', '20', '50']}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Exactly one page (1-10 of 10)</span>
            <enchanted-table-pagination .currentPage=\${1} .totalCount=\${10} .rowSize=\${10} .options=\${['10', '20', '50']}></enchanted-table-pagination>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Last page with fewer items (96-100 of 100)</span>
            <enchanted-table-pagination .currentPage=\${10} .totalCount=\${100} .rowSize=\${10} .options=\${['10', '20', '50']}></enchanted-table-pagination>
          </div>
        </div>
      </div>
    \`;
  }
}`,...(x=(N=g.parameters)==null?void 0:N.docs)==null?void 0:x.source},description:{story:`Comprehensive showcase of all table pagination states and configurations.
Demonstrates various page counts, row sizes, disabled states, and different data scenarios.`,...(I=(O=g.parameters)==null?void 0:O.docs)==null?void 0:I.description}}};const ht=["EnchantedTablePaginationStory","AllStates"];export{g as AllStates,v as EnchantedTablePaginationStory,ht as __namedExportsOrder,dt as default};
