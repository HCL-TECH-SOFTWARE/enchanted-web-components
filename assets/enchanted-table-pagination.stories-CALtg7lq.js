import{c as F,ak as S,E as j,L as X,aa as T,s as g,g as a,u as e,n as A,al as t}from"./tags-Dua8CojJ.js";import{r as d}from"./state-fRMCsTN1.js";import{x as R,E as W}from"./iframe-DNG6NGwD.js";import{l as N}from"./lodash-CNEZJmwz.js";import"./enchanted-select-bwKEZOvd.js";import"./enchanted-button-C1t71ouV.js";import{z as c,i as E,k as P}from"./cssClassEnums-mKa0OyBd.js";import{g as Y,i as _}from"./localization-Pwna_gtP.js";import{E as p}from"./enchanted-select-Ge91KUgI.js";import{e as f}from"./exportParts-cEl5bd2S.js";import{t as M}from"./index-CuTRIAwF.js";import{c as V,I as U,B as k}from"./tags-BViZhp05.js";import"./index-BBUPjF_O.js";import"./index-vUzmpDF-.js";import"./preload-helper-C1FmrZbK.js";import"./enchanted-list-item-D9x5tp98.js";import"./index-KnCr6GGA.js";import"./keyboardEventKeys-BnoN8uA3.js";const q=[10,25,50,100],Z=50;var s=(n=>(n.NEXT_PAGE="nextPage",n.PREVIOUS_PAGE="previousPage",n.FIRST_PAGE="firstPage",n.LAST_PAGE="lastPage",n))(s||{}),C={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M14 16L24 6 25.4 7.4 16.8 16 25.4 24.6 24 26zM8 4H10V28H8z"}}],name:"page--first",size:32};const I=`${U}icon-page-first`;let J=class extends k{render(){return R`${M({...C,attrs:{...C.attrs,preserveAspectRatio:"xMidYMid"}})}`}};V&&!customElements.get(I)&&customElements.define(I,J);var w={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M18 16L8 26 6.6 24.6 15.2 16 6.6 7.4 8 6zM22 4H24V28H22z"}}],name:"page--last",size:32};const G=`${U}icon-page-last`;class K extends k{render(){return R`${M({...w,attrs:{...w.attrs,preserveAspectRatio:"xMidYMid"}})}`}}V&&!customElements.get(G)&&customElements.define(G,K);var Q=Object.defineProperty,r=(n,i,l,h)=>{for(var $=void 0,v=n.length-1,b;v>=0;v--)(b=n[v])&&($=b(i,l,$)||$);return $&&Q(i,l,$),$};const tt=F("enchanted-web-components:components:atomic-component:enchanted-table-pagination.ts");class o extends j{constructor(){super(...arguments),this.disabled=!1,this.currentPage=1,this.totalCount=0,this.rowSize=void 0,this.options=q.map(i=>i.toString()),this.pagesCount=this.totalCount&&this.rowSize?Math.ceil(this.totalCount/this.rowSize):0,this.currentPageState=this.currentPage||1,this.rowSizeState=this.rowSize||Z,this.rowMessage="",this.hasPreviousPage=!0,this.hasNextPage=!0,this.isRTL=Y()===X.RTL}connectedCallback(){super.connectedCallback(),this.rowSize&&(this.rowSizeState=this.rowSize),this.currentPageState=this.currentPage||1,this.handleGetRowsDescription()}async handleGetRowsDescription(){if(this.totalCount!==void 0&&this.rowSize){this.pagesCount=Math.ceil(this.totalCount/this.rowSizeState);const i=(this.currentPageState-1)*this.rowSizeState+1,l=this.currentPageState*this.rowSizeState>this.totalCount?this.totalCount:this.currentPageState*this.rowSizeState;this.rowMessage=this.getMessage("output.table.footer.current.pages",[{"{current_page_start}":i.toString()},{"{current_page_end}":l.toString()},{"{total_count}":this.totalCount.toString()}]),i===1?this.hasPreviousPage=!1:this.hasPreviousPage=!0,l===this.totalCount?this.hasNextPage=!1:this.hasNextPage=!0}}async handleChange(i){const{type:l,name:h}=i.detail;[p.PAGINATION_ROWS,p.PAGINATION_PAGE].includes(l)&&(this.dispatchEvent(new CustomEvent("change",{detail:{value:h,type:l}})),l===p.PAGINATION_ROWS?(this.rowSizeState=Number(h),this.pagesCount=this.totalCount?Math.ceil(this.totalCount/this.rowSizeState):0,this.currentPageState=1,this.handleGetRowsDescription()):l===p.PAGINATION_PAGE&&(this.currentPageState=Number(h),this.handleGetRowsDescription()))}async handleClick(i){switch(i){case s.FIRST_PAGE:this.dispatchEvent(new CustomEvent("change",{detail:{value:1,type:p.PAGINATION_PAGE}})),this.currentPageState=1;break;case s.PREVIOUS_PAGE:this.dispatchEvent(new CustomEvent("change",{detail:{value:this.currentPageState-1,type:p.PAGINATION_PAGE}})),this.currentPageState>1&&(this.currentPageState=this.currentPageState-1);break;case s.NEXT_PAGE:this.dispatchEvent(new CustomEvent("change",{detail:{value:this.currentPageState+1,type:p.PAGINATION_PAGE}})),this.currentPageState<this.pagesCount&&(this.currentPageState=this.currentPageState+1);break;case s.LAST_PAGE:this.dispatchEvent(new CustomEvent("change",{detail:{value:this.pagesCount,type:p.PAGINATION_PAGE}})),this.currentPageState=this.pagesCount;break}this.handleGetRowsDescription()}renderSlash(){return this.isRTL?"\\":"/"}render(){return this.currentPageState&&this.totalCount&&this.rowSizeState&&this.pagesCount?e`
        <div part=${c.CONTAINER}>
          <div part=${c.ROWS_SECTION}>
            <${T}
              .localization=${this.localization}
              exportparts="${f}"
              field=${p.PAGINATION_ROWS}
              selectedId=${this.rowSizeState}
              selectedValue=${this.rowSizeState}
              .options=${this.options}
              @change=${this.handleChange}
              ?disabled=${this.disabled}
              ariaLabel=${this.getMessage("output.pagination.rows.per.page.aria.label",[{"{rows_per_page}":this.rowSizeState.toString()}])}
            ></${T}>
            <span part=${c.ROWS_DESCRIPTION}>
              ${this.rowMessage}
            </span>
          </div>
          <div part=${c.PAGES_SECTION}>
            <${g}
              part=${c.PAGES_NAV_BUTTON}
              exportparts="${Object.values(P).join(",")}"
              buttontext=''
              ?outlined="${!1}"
              ?disabled="${!this.hasPreviousPage}"         
              .icon="${_()?this.hasPreviousPage?e`<${a("icon-page-first")} size="16" color="rgba(0, 0, 0, 0.60)"></${a("icon-page-first")}>`:e`<${a("icon-page-first")} size="16" color="rgba(0, 0, 0, 0.38)"></${a("icon-page-first")}>`:this.hasPreviousPage?e`<${a("icon-page-last")} size="16" color="rgba(0, 0, 0, 0.60)"></${a("icon-page-last")}>`:e`<${a("icon-page-last")} size="16" color="rgba(0, 0, 0, 0.38)"></${a("icon-page-last")}>`}"
              data-testid="${s.FIRST_PAGE}"
              @click=${N.debounce(()=>{this.handleClick(s.FIRST_PAGE)},300)}
              variant=${E.BUTTON_TEXT_VAR}
              ariaLabel=${this.getMessage("output.pagination.first.page.aria.label")}
            >
            </${g}>
            <${g}
              part=${c.PAGES_NAV_BUTTON}
              exportparts="${Object.values(P).join(",")}"
              buttontext=''
              ?outlined="${!1}"
              ?disabled="${!this.hasPreviousPage}"
              .icon="${_()?this.hasPreviousPage?e`<${a("icon-chevron-left")} size="16" color="rgba(0, 0, 0, 0.60)"></${a("icon-chevron-left")}>`:e`<${a("icon-chevron-left")} size="16" color="rgba(0, 0, 0, 0.38)"></${a("icon-chevron-left")}>`:this.hasPreviousPage?e`<${a("icon-chevron-right")} size="16" color="rgba(0, 0, 0, 0.60)"></${a("icon-chevron-right")}>`:e`<${a("icon-chevron-right")} size="16" color="rgba(0, 0, 0, 0.38)"></${a("icon-chevron-right")}>`}"
              data-testid="${s.PREVIOUS_PAGE}"
              @click=${N.debounce(()=>{this.handleClick(s.PREVIOUS_PAGE)},300)}
              variant=${E.BUTTON_TEXT_VAR}
              ariaLabel=${this.getMessage("output.pagination.previous.page.aria.label")}
            >
            </${g}>
            <${T}
              .localization=${this.localization}
              exportparts="${f}"
              field=${p.PAGINATION_PAGE}
              selectedId=${this.currentPageState}
              selectedValue=${this.currentPageState}
              .options=${Array.from(Array(this.pagesCount).keys()).map(i=>(i+1).toString())}
              @change=${this.handleChange}
              ?disabled=${this.disabled}
              hiddenIcon=${!0}
              ariaLabel=${this.getMessage("output.pagination.current.page.aria.label",[{"{current_page}":this.currentPageState.toString()},{"{total_pages}":this.pagesCount.toString()}])}
            ></${T}>
            <span part=${c.PAGES_DESCRIPTION}>
              &nbsp; ${this.renderSlash()} ${this.pagesCount} &nbsp;
            </span>
            <${g}
              part=${c.PAGES_NAV_BUTTON}
              exportparts="${Object.values(P).join(",")}"
              buttontext=''
              ?outlined="${!1}"
              ?disabled="${!this.hasNextPage}"
              .icon="${_()?this.hasNextPage?e`<${a("icon-chevron-right")} size="16" color="rgba(0, 0, 0, 0.60)"></${a("icon-chevron-right")}>`:e`<${a("icon-chevron-right")} size="16" color="rgba(0, 0, 0, 0.38)"></${a("icon-chevron-right")}>`:this.hasNextPage?e`<${a("icon-chevron-left")} size="16" color="rgba(0, 0, 0, 0.60)"></${a("icon-chevron-left")}>`:e`<${a("icon-chevron-left")} size="16" color="rgba(0, 0, 0, 0.38)"></${a("icon-chevron-left")}>`}"
              data-testid="${s.NEXT_PAGE}"
              @click=${N.debounce(()=>{this.handleClick(s.NEXT_PAGE)},300)}
              variant=${E.BUTTON_TEXT_VAR}
              ariaLabel=${this.getMessage("output.pagination.next.page.aria.label")}
            >
            </${g}>
            <${g}
              part=${c.PAGES_NAV_BUTTON}
              exportparts="${Object.values(P).join(",")}"
              buttontext=''
              ?outlined="${!1}"
              ?disabled="${!this.hasNextPage}"
              .icon="${_()?this.hasNextPage?e`<${a("icon-page-last")} size="16" color="rgba(0, 0, 0, 0.60)"></${a("icon-page-last")}>`:e`<${a("icon-page-last")} size="16" color="rgba(0, 0, 0, 0.38)"></${a("icon-page-last")}>`:this.hasNextPage?e`<${a("icon-page-first")} size="16" color="rgba(0, 0, 0, 0.60)"></${a("icon-page-first")}>`:e`<${a("icon-page-first")} size="16" color="rgba(0, 0, 0, 0.38)"></${a("icon-page-first")}>`}"
              data-testid="${s.LAST_PAGE}"
              @click=${N.debounce(()=>{this.handleClick(s.LAST_PAGE)},300)}
              variant=${E.BUTTON_TEXT_VAR}
              ariaLabel=${this.getMessage("output.pagination.last.page.aria.label")}
            >
            </${g}>
          </div>
        </div>
      `:W}}r([A({type:Boolean})],o.prototype,"disabled");r([A({type:Number})],o.prototype,"currentPage");r([A({type:Number})],o.prototype,"totalCount");r([A({type:Number})],o.prototype,"rowSize");r([A({type:String})],o.prototype,"options");r([d()],o.prototype,"pagesCount");r([d()],o.prototype,"currentPageState");r([d()],o.prototype,"rowSizeState");r([d()],o.prototype,"rowMessage");r([d()],o.prototype,"hasPreviousPage");r([d()],o.prototype,"hasNextPage");r([d()],o.prototype,"isRTL");customElements.get(S)?tt("Component (%s) is currently registered and not possible to registrate again.",S):customElements.define(S,o);const Pt={title:"Table/enchanted-table-pagination",component:"enchanted-table-pagination",tags:["autodocs"],parameters:{docs:{description:{component:"The Table Pagination component provides navigation controls for paginated data tables. It includes first/last page buttons, previous/next navigation, current page display, and a dropdown to adjust rows per page. Supports disabled states and customizable row size options. Use this component to implement efficient data browsing in tables with large datasets."}}},argTypes:{disabled:{control:{type:"boolean"},description:"Disables all pagination controls including navigation buttons and row size selector. Use when data is loading or pagination is temporarily unavailable.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},currentPage:{control:{type:"number"},description:"Current active page number (1-based index). Updates when users navigate between pages. Used to track and display the current position in the dataset.",table:{category:"State",type:{summary:"number"},defaultValue:{summary:"1"}}},totalCount:{control:{type:"number"},description:'Total number of items across all pages. Used to calculate total pages and display range information (e.g., "1-10 of 100"). Required for proper pagination.',table:{category:"Content",type:{summary:"number"},defaultValue:{summary:"0"}}},rowSize:{control:{type:"number"},description:"Number of rows displayed per page. Determines how many items are shown at once. Must match one of the values in the options array for proper display.",table:{category:"Layout",type:{summary:"number"},defaultValue:{summary:void 0}}},options:{control:{type:"object"},description:'Array of available row size options shown in the dropdown. Users can select from these values to change rows per page. Example: ["10", "20", "50", "100"].',table:{category:"Content",type:{summary:"string[]"},defaultValue:{summary:'["10","20","50"]'}}}},args:{disabled:!1,currentPage:1,totalCount:100,rowSize:10,options:["10","20","50"]}},m={render:n=>e`
      <${t}
        ?disabled=${n.disabled}
        .currentPage=${n.currentPage}
        .totalCount=${n.totalCount}
        .rowSize=${n.rowSize}
        .options=${n.options}
      ></${t}>
    `},u={parameters:{controls:{disable:!0}},render:()=>e`
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
            <${t} .currentPage=${1} .totalCount=${100} .rowSize=${10} .options=${["10","20","50"]}></${t}>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Middle Page (21-30 of 100)</span>
            <${t} .currentPage=${3} .totalCount=${100} .rowSize=${10} .options=${["10","20","50"]}></${t}>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Last Page (91-100 of 100)</span>
            <${t} .currentPage=${10} .totalCount=${100} .rowSize=${10} .options=${["10","20","50"]}></${t}>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="pagination-section">
          <h3>Disabled State</h3>
          <div class="pagination-item">
            <span class="pagination-label">All controls disabled</span>
            <${t} ?disabled=${!0} .currentPage=${5} .totalCount=${100} .rowSize=${10} .options=${["10","20","50"]}></${t}>
          </div>
        </div>

        <!-- Different Row Sizes -->
        <div class="pagination-section">
          <h3>Different Row Sizes</h3>
          <div class="pagination-item">
            <span class="pagination-label">10 rows per page (1-10 of 100)</span>
            <${t} .currentPage=${1} .totalCount=${100} .rowSize=${10} .options=${["10","20","50"]}></${t}>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">20 rows per page (1-20 of 100)</span>
            <${t} .currentPage=${1} .totalCount=${100} .rowSize=${20} .options=${["10","20","50"]}></${t}>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">50 rows per page (1-50 of 100)</span>
            <${t} .currentPage=${1} .totalCount=${100} .rowSize=${50} .options=${["10","20","50"]}></${t}>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">100 rows per page (1-100 of 250)</span>
            <${t} .currentPage=${1} .totalCount=${250} .rowSize=${100} .options=${["10","20","50","100"]}></${t}>
          </div>
        </div>

        <!-- Different Data Sizes -->
        <div class="pagination-section">
          <h3>Different Data Sizes</h3>
          <div class="pagination-item">
            <span class="pagination-label">Small dataset - Single page (1-5 of 5)</span>
            <${t} .currentPage=${1} .totalCount=${5} .rowSize=${10} .options=${["10","20","50"]}></${t}>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Few items (1-10 of 15, 2 pages)</span>
            <${t} .currentPage=${1} .totalCount=${15} .rowSize=${10} .options=${["10","20","50"]}></${t}>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Medium dataset (1-10 of 250, 25 pages)</span>
            <${t} .currentPage=${1} .totalCount=${250} .rowSize=${10} .options=${["10","20","50"]}></${t}>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Large dataset (1-10 of 1000, 100 pages)</span>
            <${t} .currentPage=${1} .totalCount=${1e3} .rowSize=${10} .options=${["10","20","50","100"]}></${t}>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Very large dataset (501-510 of 5000, 500 pages)</span>
            <${t} .currentPage=${51} .totalCount=${5e3} .rowSize=${10} .options=${["10","20","50","100"]}></${t}>
          </div>
        </div>

        <!-- Custom Options -->
        <div class="pagination-section">
          <h3>Custom Row Size Options</h3>
          <div class="pagination-item">
            <span class="pagination-label">Standard options: 10, 20, 50</span>
            <${t} .currentPage=${1} .totalCount=${100} .rowSize=${10} .options=${["10","20","50"]}></${t}>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Extended options: 10, 20, 50, 100</span>
            <${t} .currentPage=${1} .totalCount=${500} .rowSize=${10} .options=${["10","20","50","100"]}></${t}>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Custom options: 5, 15, 25, 50</span>
            <${t} .currentPage=${1} .totalCount=${100} .rowSize=${15} .options=${["5","15","25","50"]}></${t}>
          </div>
        </div>

        <!-- Edge Cases -->
        <div class="pagination-section">
          <h3>Edge Cases</h3>
          <div class="pagination-item">
            <span class="pagination-label">Empty dataset (0 items)</span>
            <${t} .currentPage=${1} .totalCount=${0} .rowSize=${10} .options=${["10","20","50"]}></${t}>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Exactly one page (1-10 of 10)</span>
            <${t} .currentPage=${1} .totalCount=${10} .rowSize=${10} .options=${["10","20","50"]}></${t}>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Last page with fewer items (96-100 of 100)</span>
            <${t} .currentPage=${10} .totalCount=${100} .rowSize=${10} .options=${["10","20","50"]}></${t}>
          </div>
        </div>
      </div>
    `};var z,O,D;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <\${ENCHANTED_TABLE_PAGINATION_TAG}
        ?disabled=\${args.disabled}
        .currentPage=\${args.currentPage}
        .totalCount=\${args.totalCount}
        .rowSize=\${args.rowSize}
        .options=\${args.options}
      ></\${ENCHANTED_TABLE_PAGINATION_TAG}>
    \`;
  }
}`,...(D=(O=m.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var y,L,x,B,H;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
            <\${ENCHANTED_TABLE_PAGINATION_TAG} .currentPage=\${1} .totalCount=\${100} .rowSize=\${10} .options=\${['10', '20', '50']}></\${ENCHANTED_TABLE_PAGINATION_TAG}>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Middle Page (21-30 of 100)</span>
            <\${ENCHANTED_TABLE_PAGINATION_TAG} .currentPage=\${3} .totalCount=\${100} .rowSize=\${10} .options=\${['10', '20', '50']}></\${ENCHANTED_TABLE_PAGINATION_TAG}>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Last Page (91-100 of 100)</span>
            <\${ENCHANTED_TABLE_PAGINATION_TAG} .currentPage=\${10} .totalCount=\${100} .rowSize=\${10} .options=\${['10', '20', '50']}></\${ENCHANTED_TABLE_PAGINATION_TAG}>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="pagination-section">
          <h3>Disabled State</h3>
          <div class="pagination-item">
            <span class="pagination-label">All controls disabled</span>
            <\${ENCHANTED_TABLE_PAGINATION_TAG} ?disabled=\${true} .currentPage=\${5} .totalCount=\${100} .rowSize=\${10} .options=\${['10', '20', '50']}></\${ENCHANTED_TABLE_PAGINATION_TAG}>
          </div>
        </div>

        <!-- Different Row Sizes -->
        <div class="pagination-section">
          <h3>Different Row Sizes</h3>
          <div class="pagination-item">
            <span class="pagination-label">10 rows per page (1-10 of 100)</span>
            <\${ENCHANTED_TABLE_PAGINATION_TAG} .currentPage=\${1} .totalCount=\${100} .rowSize=\${10} .options=\${['10', '20', '50']}></\${ENCHANTED_TABLE_PAGINATION_TAG}>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">20 rows per page (1-20 of 100)</span>
            <\${ENCHANTED_TABLE_PAGINATION_TAG} .currentPage=\${1} .totalCount=\${100} .rowSize=\${20} .options=\${['10', '20', '50']}></\${ENCHANTED_TABLE_PAGINATION_TAG}>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">50 rows per page (1-50 of 100)</span>
            <\${ENCHANTED_TABLE_PAGINATION_TAG} .currentPage=\${1} .totalCount=\${100} .rowSize=\${50} .options=\${['10', '20', '50']}></\${ENCHANTED_TABLE_PAGINATION_TAG}>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">100 rows per page (1-100 of 250)</span>
            <\${ENCHANTED_TABLE_PAGINATION_TAG} .currentPage=\${1} .totalCount=\${250} .rowSize=\${100} .options=\${['10', '20', '50', '100']}></\${ENCHANTED_TABLE_PAGINATION_TAG}>
          </div>
        </div>

        <!-- Different Data Sizes -->
        <div class="pagination-section">
          <h3>Different Data Sizes</h3>
          <div class="pagination-item">
            <span class="pagination-label">Small dataset - Single page (1-5 of 5)</span>
            <\${ENCHANTED_TABLE_PAGINATION_TAG} .currentPage=\${1} .totalCount=\${5} .rowSize=\${10} .options=\${['10', '20', '50']}></\${ENCHANTED_TABLE_PAGINATION_TAG}>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Few items (1-10 of 15, 2 pages)</span>
            <\${ENCHANTED_TABLE_PAGINATION_TAG} .currentPage=\${1} .totalCount=\${15} .rowSize=\${10} .options=\${['10', '20', '50']}></\${ENCHANTED_TABLE_PAGINATION_TAG}>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Medium dataset (1-10 of 250, 25 pages)</span>
            <\${ENCHANTED_TABLE_PAGINATION_TAG} .currentPage=\${1} .totalCount=\${250} .rowSize=\${10} .options=\${['10', '20', '50']}></\${ENCHANTED_TABLE_PAGINATION_TAG}>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Large dataset (1-10 of 1000, 100 pages)</span>
            <\${ENCHANTED_TABLE_PAGINATION_TAG} .currentPage=\${1} .totalCount=\${1000} .rowSize=\${10} .options=\${['10', '20', '50', '100']}></\${ENCHANTED_TABLE_PAGINATION_TAG}>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Very large dataset (501-510 of 5000, 500 pages)</span>
            <\${ENCHANTED_TABLE_PAGINATION_TAG} .currentPage=\${51} .totalCount=\${5000} .rowSize=\${10} .options=\${['10', '20', '50', '100']}></\${ENCHANTED_TABLE_PAGINATION_TAG}>
          </div>
        </div>

        <!-- Custom Options -->
        <div class="pagination-section">
          <h3>Custom Row Size Options</h3>
          <div class="pagination-item">
            <span class="pagination-label">Standard options: 10, 20, 50</span>
            <\${ENCHANTED_TABLE_PAGINATION_TAG} .currentPage=\${1} .totalCount=\${100} .rowSize=\${10} .options=\${['10', '20', '50']}></\${ENCHANTED_TABLE_PAGINATION_TAG}>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Extended options: 10, 20, 50, 100</span>
            <\${ENCHANTED_TABLE_PAGINATION_TAG} .currentPage=\${1} .totalCount=\${500} .rowSize=\${10} .options=\${['10', '20', '50', '100']}></\${ENCHANTED_TABLE_PAGINATION_TAG}>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Custom options: 5, 15, 25, 50</span>
            <\${ENCHANTED_TABLE_PAGINATION_TAG} .currentPage=\${1} .totalCount=\${100} .rowSize=\${15} .options=\${['5', '15', '25', '50']}></\${ENCHANTED_TABLE_PAGINATION_TAG}>
          </div>
        </div>

        <!-- Edge Cases -->
        <div class="pagination-section">
          <h3>Edge Cases</h3>
          <div class="pagination-item">
            <span class="pagination-label">Empty dataset (0 items)</span>
            <\${ENCHANTED_TABLE_PAGINATION_TAG} .currentPage=\${1} .totalCount=\${0} .rowSize=\${10} .options=\${['10', '20', '50']}></\${ENCHANTED_TABLE_PAGINATION_TAG}>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Exactly one page (1-10 of 10)</span>
            <\${ENCHANTED_TABLE_PAGINATION_TAG} .currentPage=\${1} .totalCount=\${10} .rowSize=\${10} .options=\${['10', '20', '50']}></\${ENCHANTED_TABLE_PAGINATION_TAG}>
          </div>
          <div class="pagination-item">
            <span class="pagination-label">Last page with fewer items (96-100 of 100)</span>
            <\${ENCHANTED_TABLE_PAGINATION_TAG} .currentPage=\${10} .totalCount=\${100} .rowSize=\${10} .options=\${['10', '20', '50']}></\${ENCHANTED_TABLE_PAGINATION_TAG}>
          </div>
        </div>
      </div>
    \`;
  }
}`,...(x=(L=u.parameters)==null?void 0:L.docs)==null?void 0:x.source},description:{story:`Comprehensive showcase of all table pagination states and configurations.
Demonstrates various page counts, row sizes, disabled states, and different data scenarios.`,...(H=(B=u.parameters)==null?void 0:B.docs)==null?void 0:H.description}}};const _t=["Default","AllStates"];export{u as AllStates,m as Default,_t as __namedExportsOrder,Pt as default};
