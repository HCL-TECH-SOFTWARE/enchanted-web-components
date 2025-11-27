import{x as e,E as y}from"./iframe-BabVupQu.js";import{n as d,t as M,D as L,L as D}from"./dx-ac-base-element-CMZo8k64.js";import{r as p}from"./state-ByhEXiYs.js";import{l as g}from"./lodash-B-0SAclH.js";import"./dx-input-select-C4xEIAKH.js";import"./dx-button-BmdWVcw5.js";import{u as n,g as h,j as P}from"./cssClassEnums-ChRP0d8n.js";import{g as V,i as S}from"./localization-2aoGzCSL.js";import{D as s}from"./dx-input-select-DRXt9p_b.js";import{e as A}from"./exportParts-BXxV9uDV.js";import{c as O,B as G,t as R}from"./index-B_E2F3xT.js";import"./index-CWQBWjj8.js";import"./index-pNlEUqhb.js";import"./preload-helper-C1FmrZbK.js";import"./dx-list-item-BicByrRC.js";import"./index-CybqXGk4.js";import"./keyboardEventKeys-BnoN8uA3.js";const B=[10,25,50,100],U=50;var i=(t=>(t.NEXT_PAGE="nextPage",t.PREVIOUS_PAGE="previousPage",t.FIRST_PAGE="firstPage",t.LAST_PAGE="lastPage",t))(i||{}),x={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M14 16L24 6 25.4 7.4 16.8 16 25.4 24.6 24 26zM8 4H10V28H8z"}}],name:"page--first",size:32};const f="icon-page-first";let j=class extends G{render(){return e`${R({...x,attrs:{...x.attrs,preserveAspectRatio:"xMidYMid"}})}`}};O&&!customElements.get(f)&&customElements.define(f,j);var T={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M18 16L8 26 6.6 24.6 15.2 16 6.6 7.4 8 6zM22 4H24V28H22z"}}],name:"page--last",size:32};const _="icon-page-last";class k extends G{render(){return e`${R({...T,attrs:{...T.attrs,preserveAspectRatio:"xMidYMid"}})}`}}O&&!customElements.get(_)&&customElements.define(_,k);var F=Object.defineProperty,W=Object.getOwnPropertyDescriptor,o=(t,r,l,u)=>{for(var c=u>1?void 0:u?W(r,l):r,m=t.length-1,$;m>=0;m--)($=t[m])&&(c=(u?$(r,l,c):$(c))||c);return u&&c&&F(r,l,c),c};let a=class extends L{constructor(){super(...arguments),this.disabled=!1,this.currentPage=1,this.totalCount=0,this.rowSize=void 0,this.options=B.map(t=>t.toString()),this.pagesCount=this.totalCount&&this.rowSize?Math.ceil(this.totalCount/this.rowSize):0,this.currentPageState=this.currentPage||1,this.rowSizeState=this.rowSize||U,this.rowMessage="",this.hasPreviousPage=!0,this.hasNextPage=!0,this.isRTL=V()===D.RTL}connectedCallback(){super.connectedCallback(),this.rowSize&&(this.rowSizeState=this.rowSize),this.currentPageState=this.currentPage||1,this.handleGetRowsDescription()}async handleGetRowsDescription(){if(this.totalCount!==void 0&&this.rowSize){this.pagesCount=Math.ceil(this.totalCount/this.rowSizeState);const t=(this.currentPageState-1)*this.rowSizeState+1,r=this.currentPageState*this.rowSizeState>this.totalCount?this.totalCount:this.currentPageState*this.rowSizeState;this.rowMessage=this.getMessage("output.table.footer.current.pages",[{"{current_page_start}":t.toString()},{"{current_page_end}":r.toString()},{"{total_count}":this.totalCount.toString()}]),t===1?this.hasPreviousPage=!1:this.hasPreviousPage=!0,r===this.totalCount?this.hasNextPage=!1:this.hasNextPage=!0}}async handleChange(t){const{type:r,name:l}=t.detail;[s.PAGINATION_ROWS,s.PAGINATION_PAGE].includes(r)&&(this.dispatchEvent(new CustomEvent("change",{detail:{value:l,type:r}})),r===s.PAGINATION_ROWS?(this.rowSizeState=Number(l),this.pagesCount=this.totalCount?Math.ceil(this.totalCount/this.rowSizeState):0,this.currentPageState=1,this.handleGetRowsDescription()):r===s.PAGINATION_PAGE&&(this.currentPageState=Number(l),this.handleGetRowsDescription()))}async handleClick(t){switch(t){case i.FIRST_PAGE:this.dispatchEvent(new CustomEvent("change",{detail:{value:1,type:s.PAGINATION_PAGE}})),this.currentPageState=1;break;case i.PREVIOUS_PAGE:this.dispatchEvent(new CustomEvent("change",{detail:{value:this.currentPageState-1,type:s.PAGINATION_PAGE}})),this.currentPageState>1&&(this.currentPageState=this.currentPageState-1);break;case i.NEXT_PAGE:this.dispatchEvent(new CustomEvent("change",{detail:{value:this.currentPageState+1,type:s.PAGINATION_PAGE}})),this.currentPageState<this.pagesCount&&(this.currentPageState=this.currentPageState+1);break;case i.LAST_PAGE:this.dispatchEvent(new CustomEvent("change",{detail:{value:this.pagesCount,type:s.PAGINATION_PAGE}})),this.currentPageState=this.pagesCount;break}this.handleGetRowsDescription()}renderSlash(){return this.isRTL?"\\":"/"}render(){return this.currentPageState&&this.totalCount&&this.rowSizeState&&this.pagesCount?e`
        <div part=${n.CONTAINER}>
          <div part=${n.ROWS_SECTION}>
            <dx-input-select
              .localization=${this.localization}
              exportparts="${A}"
              field=${s.PAGINATION_ROWS}
              selectedId=${this.rowSizeState}
              selectedValue=${this.rowSizeState}
              .options=${this.options}
              @change=${this.handleChange}
              ?disabled=${this.disabled}
              ariaLabel=${this.getMessage("output.pagination.rows.per.page.aria.label",[{"{rows_per_page}":this.rowSizeState.toString()}])}
            ></dx-input-select>
            <span part=${n.ROWS_DESCRIPTION}>
              ${this.rowMessage}
            </span>
          </div>
          <div part=${n.PAGES_SECTION}>
            <dx-button
              part=${n.PAGES_NAV_BUTTON}
              exportparts="${Object.values(P).join(",")}"
              buttontext=''
              ?outlined="${!1}"
              ?disabled="${!this.hasPreviousPage}"         
              .icon="${S()?this.hasPreviousPage?e`<icon-page-first size="16" color="rgba(0, 0, 0, 0.60)"></icon-page-first>`:e`<icon-page-first size="16" color="rgba(0, 0, 0, 0.38)"></icon-page-first>`:this.hasPreviousPage?e`<icon-page-last size="16" color="rgba(0, 0, 0, 0.60)"></icon-page-last>`:e`<icon-page-last size="16" color="rgba(0, 0, 0, 0.38)"></icon-page-last>`}"
              data-testid="${i.FIRST_PAGE}"
              @click=${g.debounce(()=>{this.handleClick(i.FIRST_PAGE)},300)}
              variant=${h.BUTTON_TEXT_VAR}
              ariaLabel=${this.getMessage("output.pagination.first.page.aria.label")}
            >
            </dx-button>
            <dx-button
              part=${n.PAGES_NAV_BUTTON}
              exportparts="${Object.values(P).join(",")}"
              buttontext=''
              ?outlined="${!1}"
              ?disabled="${!this.hasPreviousPage}"
              .icon="${S()?this.hasPreviousPage?e`<icon-chevron-left size="16" color="rgba(0, 0, 0, 0.60)"></icon-chevron-left>`:e`<icon-chevron-left size="16" color="rgba(0, 0, 0, 0.38)"></icon-chevron-left>`:this.hasPreviousPage?e`<icon-chevron-right size="16" color="rgba(0, 0, 0, 0.60)"></icon-chevron-right>`:e`<icon-chevron-right size="16" color="rgba(0, 0, 0, 0.38)"></icon-chevron-right>`}"
              data-testid="${i.PREVIOUS_PAGE}"
              @click=${g.debounce(()=>{this.handleClick(i.PREVIOUS_PAGE)},300)}
              variant=${h.BUTTON_TEXT_VAR}
              ariaLabel=${this.getMessage("output.pagination.previous.page.aria.label")}
            >
            </dx-button>
            <dx-input-select
              .localization=${this.localization}
              exportparts="${A}"
              field=${s.PAGINATION_PAGE}
              selectedId=${this.currentPageState}
              selectedValue=${this.currentPageState}
              .options=${Array.from(Array(this.pagesCount).keys()).map(t=>(t+1).toString())}
              @change=${this.handleChange}
              ?disabled=${this.disabled}
              hiddenIcon=${!0}
              ariaLabel=${this.getMessage("output.pagination.current.page.aria.label",[{"{current_page}":this.currentPageState.toString()},{"{total_pages}":this.pagesCount.toString()}])}
            ></dx-input-select>
            <span part=${n.PAGES_DESCRIPTION}>
              &nbsp; ${this.renderSlash()} ${this.pagesCount} &nbsp;
            </span>
            <dx-button
              part=${n.PAGES_NAV_BUTTON}
              exportparts="${Object.values(P).join(",")}"
              buttontext=''
              ?outlined="${!1}"
              ?disabled="${!this.hasNextPage}"
              .icon="${S()?this.hasNextPage?e`<icon-chevron-right size="16" color="rgba(0, 0, 0, 0.60)"></icon-chevron-right>`:e`<icon-chevron-right size="16" color="rgba(0, 0, 0, 0.38)"></icon-chevron-right>`:this.hasNextPage?e`<icon-chevron-left size="16" color="rgba(0, 0, 0, 0.60)"></icon-chevron-left>`:e`<icon-chevron-left size="16" color="rgba(0, 0, 0, 0.38)"></icon-chevron-left>`}"
              data-testid="${i.NEXT_PAGE}"
              @click=${g.debounce(()=>{this.handleClick(i.NEXT_PAGE)},300)}
              variant=${h.BUTTON_TEXT_VAR}
              ariaLabel=${this.getMessage("output.pagination.next.page.aria.label")}
            >
            </dx-button>
            <dx-button
              part=${n.PAGES_NAV_BUTTON}
              exportparts="${Object.values(P).join(",")}"
              buttontext=''
              ?outlined="${!1}"
              ?disabled="${!this.hasNextPage}"
              .icon="${S()?this.hasNextPage?e`<icon-page-last size="16" color="rgba(0, 0, 0, 0.60)"></icon-page-last>`:e`<icon-page-last size="16" color="rgba(0, 0, 0, 0.38)"></icon-page-last>`:this.hasNextPage?e`<icon-page-first size="16" color="rgba(0, 0, 0, 0.60)"></icon-page-first>`:e`<icon-page-first size="16" color="rgba(0, 0, 0, 0.38)"></icon-page-first>`}"
              data-testid="${i.LAST_PAGE}"
              @click=${g.debounce(()=>{this.handleClick(i.LAST_PAGE)},300)}
              variant=${h.BUTTON_TEXT_VAR}
              ariaLabel=${this.getMessage("output.pagination.last.page.aria.label")}
            >
            </dx-button>
          </div>
        </div>
      `:y}};o([d({type:Boolean})],a.prototype,"disabled",2);o([d({type:Number})],a.prototype,"currentPage",2);o([d({type:Number})],a.prototype,"totalCount",2);o([d({type:Number})],a.prototype,"rowSize",2);o([d({type:String})],a.prototype,"options",2);o([p()],a.prototype,"pagesCount",2);o([p()],a.prototype,"currentPageState",2);o([p()],a.prototype,"rowSizeState",2);o([p()],a.prototype,"rowMessage",2);o([p()],a.prototype,"hasPreviousPage",2);o([p()],a.prototype,"hasNextPage",2);o([p()],a.prototype,"isRTL",2);a=o([M("dx-table-pagination")],a);const pt={title:"Table/dx-table-pagination",tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"Disabled",table:{defaultValue:{summary:"false"}}},currentPage:{control:"number",description:"Current page",table:{defaultValue:{summary:'"1"'}}},totalCount:{control:"number",description:"Total count",table:{defaultValue:{summary:'"100"'}}},rowSize:{control:"number",description:"Rows per page",table:{defaultValue:{summary:'"10"'}}},options:{control:"object",description:"Row size options",table:{defaultValue:{summary:'["10","20","50"]'}}}},args:{disabled:!1,currentPage:1,totalCount:100,rowSize:10,options:["10","20","50"]},render:t=>e`
      <dx-table-pagination
        ?disabled=${t.disabled}
        .currentPage=${t.currentPage}
        .totalCount=${t.totalCount}
        .rowSize=${t.rowSize}
        .options=${t.options}
      ></dx-table-pagination>
    `},b={},v={render:()=>e`
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 600px;">
        <div>
          <div>Default</div>
          <dx-table-pagination currentPage="1" totalCount="100" rowSize="10" .options=${["10","20","50"]}></dx-table-pagination>
        </div>
        <div>
          <div>Disabled</div>
          <dx-table-pagination disabled currentPage="1" totalCount="100" rowSize="10" .options=${["10","20","50"]}></dx-table-pagination>
        </div>
        <div>
          <div>Custom Row Size</div>
          <dx-table-pagination currentPage="1" totalCount="100" rowSize="20" .options=${["10","20","50"]}></dx-table-pagination>
        </div>
        <div>
          <div>Few Pages</div>
          <dx-table-pagination currentPage="1" totalCount="15" rowSize="10" .options=${["10","20","50"]}></dx-table-pagination>
        </div>
        <div>
          <div>Many Pages</div>
          <dx-table-pagination currentPage="1" totalCount="1000" rowSize="10" .options=${["10","20","50","100"]}></dx-table-pagination>
        </div>
      </div>
    `};var E,w,C;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(C=(w=b.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var N,z,I;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 600px;">
        <div>
          <div>Default</div>
          <dx-table-pagination currentPage="1" totalCount="100" rowSize="10" .options=\${['10', '20', '50']}></dx-table-pagination>
        </div>
        <div>
          <div>Disabled</div>
          <dx-table-pagination disabled currentPage="1" totalCount="100" rowSize="10" .options=\${['10', '20', '50']}></dx-table-pagination>
        </div>
        <div>
          <div>Custom Row Size</div>
          <dx-table-pagination currentPage="1" totalCount="100" rowSize="20" .options=\${['10', '20', '50']}></dx-table-pagination>
        </div>
        <div>
          <div>Few Pages</div>
          <dx-table-pagination currentPage="1" totalCount="15" rowSize="10" .options=\${['10', '20', '50']}></dx-table-pagination>
        </div>
        <div>
          <div>Many Pages</div>
          <dx-table-pagination currentPage="1" totalCount="1000" rowSize="10" .options=\${['10', '20', '50', '100']}></dx-table-pagination>
        </div>
      </div>
    \`;
  }
}`,...(I=(z=v.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};const dt=["Default","AllStates"];export{v as AllStates,b as Default,dt as __namedExportsOrder,pt as default};
