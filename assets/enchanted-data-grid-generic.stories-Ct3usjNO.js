import{c as Tt,w as K,E as _t,x as bt,y as Q,u as $,z as S,g as N,v as tt,A as Ct,B as et,C as I,D as at,n as D,F as C}from"./tags-Dua8CojJ.js";import{E as H,T as yt,x as W}from"./iframe-DNG6NGwD.js";import{r as v}from"./state-fRMCsTN1.js";import"./enchanted-item-type-avatar-D2peJAeZ.js";import"./enchanted-menu-item-CUnmKxn-.js";import"./enchanted-svg-icon-BFXDvOnm.js";import"./enchanted-circular-progress-y6PrdFnV.js";import"./enchanted-tooltip-CYBrcBvz.js";import"./enchanted-icon-button-BTwTJ2mi.js";import{i as z,a as Rt}from"./localization-Pwna_gtP.js";import{D as r,M as Nt,j as ot,L as Dt,k as vt,l as st}from"./cssClassEnums-mKa0OyBd.js";import{I as P,a as wt,T as Y}from"./exportParts-cEl5bd2S.js";import{E as X}from"./enchanted-select-Ge91KUgI.js";import{K as f}from"./keyboardEventKeys-BnoN8uA3.js";import{t as ft}from"./index-CuTRIAwF.js";import{c as F,I as q,B as j,a as At}from"./tags-BViZhp05.js";import"./preload-helper-C1FmrZbK.js";import"./enchanted-avatar-BUo04uat.js";import"./index-BE6mPLxg.js";import"./lodash-CNEZJmwz.js";import"./enchanted-list-item-D9x5tp98.js";import"./enchanted-button-C1t71ouV.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const St={CHILD:2},Lt=E=>(...t)=>({_$litDirective$:E,values:t});class Bt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,a,o){this._$Ct=t,this._$AM=a,this._$Ci=o}_$AS(t,a){return this.update(t,a)}update(t,a){return this.render(...a)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Z extends Bt{constructor(t){if(super(t),this.it=H,t.type!==St.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===H||t==null)return this._t=void 0,this.it=t;if(t===yt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const a=[t];return a.raw=a,this._t={_$litType$:this.constructor.resultType,strings:a,values:[]}}}Z.directiveName="unsafeHTML",Z.resultType=1;const Ot=Lt(Z);var b=(E=>(E.ASC="asc",E.DESC="desc",E))(b||{});const O=(E,t,a,o)=>{if(!a)return"";const l=a.split(".").reduce((u,s)=>u&&u[s],t);return Array.isArray(l)&&o?l.map(u=>u[o]).join(", "):E.includes(a)&&o&&l?l[o]??"":l};var rt={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M16 4L6 14 7.41 15.41 15 7.83 15 28 17 28 17 7.83 24.59 15.41 26 14 16 4z"}}],name:"arrow--up",size:32};const nt=`${q}icon-arrow-up`;let Ht=class extends j{render(){return W`${ft({...rt,attrs:{...rt.attrs,preserveAspectRatio:"xMidYMid"}})}`}};F&&!customElements.get(nt)&&customElements.define(nt,Ht);var it={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M24.59 16.59L17 24.17 17 4 15 4 15 24.17 7.41 16.59 6 18 16 28 26 18 24.59 16.59z"}}],name:"arrow--down",size:32};const lt=`${q}icon-arrow-down`;let It=class extends j{render(){return W`${ft({...it,attrs:{...it.attrs,preserveAspectRatio:"xMidYMid"}})}`}};F&&!customElements.get(lt)&&customElements.define(lt,It);const kt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:32,height:32},Mt=[{elem:"path",attrs:{d:"M13.3597 0.720002H11.7197V2.36H10.9997V0.36C10.9997 0.161 11.1607 0 11.3597 0H13.3597V0.720002ZM16.0067 0H19.5367V0.720002H16.0067V0ZM25.7117 0H22.1827V0.720002H25.7117V0ZM28.3597 0H30.3597C30.5587 0 30.7197 0.161 30.7207 0.36V2.36H29.9997V0.720002H28.3597V0ZM30.7207 12.948H29.9997V17.183H30.7207V12.948ZM29.9997 5.53594H30.7207V9.77095H29.9997V5.53594ZM29.9997 22.0001H28.3597V22.7211H30.3597C30.5587 22.7211 30.7197 22.5601 30.7197 22.3611V20.3611H29.9997V22.0001ZM23.4607 22H26.2607V22.721H23.4607V22ZM11.7197 8.29958V6.36006H10.9997V8.14393C10.4616 8.04947 9.90745 8.00035 9.34147 8.00035C4.17643 8.00035 0 12.1961 0 17.3849C0 22.5737 4.17643 26.7694 9.34147 26.7694C11.7526 26.7694 14.0737 25.8633 15.723 24.2291L22.4633 31.0004L23 30.4611L16.2494 23.6794C17.7208 22.0531 18.683 19.8643 18.683 17.3849C18.683 12.9307 15.7286 9.33251 11.7197 8.29958ZM21.3597 22.7201H18.36V22.0001H21.3597V22.7201ZM9.34147 8.76297C4.59569 8.76297 0.759122 12.6173 0.759122 17.3849C0.759122 22.1525 4.59569 26.0068 9.34147 26.0068C11.6704 26.0068 13.8867 25.0908 15.3907 23.4793L15.399 23.4703C16.9153 21.947 17.9239 19.8176 17.9239 17.3849C17.9239 12.5143 14.0902 8.76297 9.34147 8.76297ZM12.2357 13.8308L9.34147 16.7383L6.44624 13.8308L5.90958 14.371L8.80375 17.2785L5.90958 20.186L6.44624 20.7261L9.34147 17.8186L12.2357 20.7261L12.7734 20.186L9.87915 17.2785L12.7734 14.371L12.2357 13.8308Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}}],ct=`${q}icon-items-search-empty`;let Gt=class extends j{render(){return W`${At(Mt,kt)}`}};F&&!customElements.get(ct)&&customElements.define(ct,Gt);const Pt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:32,height:32},Ut=[{elem:"path",attrs:{d:"M27.5 5a0.5 0.5 0 0 1 -1 0 0.5 0.5 0 0 1 1 0m1.5 -2.5c-0.275 0 -0.5 0.224 -0.5 0.5s0.225 0.5 0.5 0.5a0.5 0.5 0 0 0 0 -1m-4 4c-0.275 0 -0.5 0.224 -0.5 0.5s0.225 0.5 0.5 0.5a0.5 0.5 0 0 0 0 -1M7 24.5c-0.275 0 -0.5 0.224 -0.5 0.5s0.225 0.5 0.5 0.5a0.5 0.5 0 0 0 0 -1m-2 2c-0.275 0 -0.5 0.224 -0.5 0.5s0.225 0.5 0.5 0.5a0.5 0.5 0 0 0 0 -1m-2 2c-0.275 0 -0.5 0.224 -0.5 0.5s0.225 0.5 0.5 0.5a0.5 0.5 0 0 0 0 -1m26.255 0.245L23.575 23.066c1.799 -1.925 2.785 -4.42 2.785 -7.066 0 -5.712 -4.647 -10.36 -10.36 -10.36 -5.712 0 -10.36 4.648 -10.36 10.36 0 5.713 4.647 10.36 10.36 10.36 2.646 0 5.142 -0.986 7.066 -2.785l5.679 5.68zM25.64 16c0 2.574 -1.003 4.994 -2.824 6.815S18.574 25.64 16 25.64c-5.315 0 -9.64 -4.324 -9.64 -9.64S10.685 6.36 16 6.36s9.64 4.325 9.64 9.64M13.36 21v-2A0.36 0.36 0 0 0 13 18.64h-2A0.36 0.36 0 0 0 10.64 19v2c0 0.199 0.161 0.36 0.36 0.36h2A0.36 0.36 0 0 0 13.36 21m-2 -1.64h1.28v1.279h-1.28zm6 -2.36v-2A0.36 0.36 0 0 0 17 14.64h-2A0.36 0.36 0 0 0 14.64 15v2c0 0.199 0.161 0.36 0.36 0.36h2A0.36 0.36 0 0 0 17.36 17m-2 -1.64h1.28v1.28h-1.28zm6 -2.36v-2A0.36 0.36 0 0 0 21 10.64h-2A0.36 0.36 0 0 0 18.64 11v2c0 0.199 0.161 0.36 0.36 0.36h2A0.36 0.36 0 0 0 21.36 13m-2 -1.64h1.279v1.28H19.36z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}}],ut=`${q}icon-items-search-initial`;class xt extends j{render(){return W`${At(Ut,Pt)}`}}F&&!customElements.get(ut)&&customElements.define(ut,xt);var Vt=Object.defineProperty,_=(E,t,a,o)=>{for(var n=void 0,l=E.length-1,u;l>=0;l--)(u=E[l])&&(n=u(t,a,n)||n);return n&&Vt(t,a,n),n};const J=Tt("enchanted-web-components:components:atomic-component:enchanted-data-grid-generic.ts");let T=class extends _t{constructor(){super(...arguments),this.isLoading=!1,this.invalidColDef=!1,this.onHover=!0,this.onRowHover=!1,this.data={},this.columns=[],this.hasMiddlewareError=!1,this.hasContentSourceAvailable=!1,this.checkboxSelection=!1,this.isFeatureTagCloudEnabled=!1,this.specialFields=[],this.isRowClickable=!1,this.customTableHeaderPart="",this.customeTableCellPart="",this.currentHoverField="",this.currentHoverRow=NaN,this.selectAll=!1,this.tableHover="false",this.programmaticClick=!1,this.actionCount=0,this.actions=[],this.focused=0,this.focusedRowActionButtons=[],this.handleRowClick=(t,a)=>{const{data:o,index:n}=a;this.selectedIndex=n,this.dispatchEvent(new CustomEvent("enchanted-data-grid-row-click",{detail:{data:o,isKeyboard:t instanceof KeyboardEvent},bubbles:!0,composed:!0}))}}connectedCallback(){var a;super.connectedCallback();const t=this.columns&&this.columns.length?this.columns.every(o=>"field"in o):!1;(a=this.columns)==null||a.forEach((o,n)=>{this.actionCount+=o.actions?o.actions.length:0,o.actions&&o.actions.forEach((l,u)=>{this.actions.push(`${n}-${u}`)})}),t||(this.invalidColDef=!0)}disconnectedCallback(){super.disconnectedCallback()}getVisibleMenuItems(t,a,o){return t?t.filter(n=>{var l;return((l=n.isVisible)==null?void 0:l.call(n,a,o))??!0}):[]}handleHeaderOnMouseOver(t,a){t.stopPropagation(),this.onHover=!0,this.currentHoverField=a}handleHeaderOnMouseOut(t){t.stopPropagation(),this.onHover=!1,this.currentHoverField=""}handleRowOnMouseOver(t,a){if(this.programmaticClick){this.programmaticClick=!1;return}if(t.stopPropagation(),t.preventDefault(),this.onRowHover=!0,a!==this.currentHoverRow){const n=this.renderRoot.querySelector(`#table-row-${this.currentHoverRow}`);n&&n.hasAttribute("part")&&n.getAttribute("part")===r.TABLE_ROW_BODY_CONTAINER_HOVERED&&(n.blur(),n.removeAttribute("part"),n.setAttribute("part",r.TABLE_ROW_BODY_CONTAINER))}this.currentHoverRow=a;const o=this.renderRoot.querySelector(`#table-row-${a}`);o&&(o.removeAttribute("part"),o.setAttribute("part",r.TABLE_ROW_BODY_CONTAINER_HOVERED))}handleRowOnMouseOut(t,a){t.stopPropagation(),this.onRowHover=!1,this.currentHoverRow=NaN;const o=this.renderRoot.querySelector(`#table-row-${a}`);o&&(o.removeAttribute("part"),o.setAttribute("part",this.selectedIndex===a?r.TABLE_ROW_BODY_CONTAINER_SELECTED:r.TABLE_ROW_BODY_CONTAINER))}getPartHeaderSort(t,a){var o,n,l,u,s,i,c,e,d,y,w;if(a===b.ASC)return((o=this.data)==null?void 0:o.sortDirection)===b.DESC&&((n=this.data)==null?void 0:n.sortAttribute)===t?r.TABLE_HEADER_ASC_SORT_BUTTON_HIDDEN:this.onHover&&t===this.currentHoverField||((l=this.data)==null?void 0:l.sortAttribute)===t&&((u=this.data)==null?void 0:u.sortDirection)===b.ASC?r.TABLE_HEADER_SORT_BUTTON:r.TABLE_HEADER_ASC_SORT_BUTTON_HIDDEN;if(a===b.DESC)return((s=this.data)==null?void 0:s.sortDirection)===b.ASC||((i=this.data)==null?void 0:i.sortDirection)===void 0||((c=this.data)==null?void 0:c.sortAttribute)!==t&&((e=this.data)==null?void 0:e.sortDirection)===b.DESC?r.TABLE_HEADER_DESC_SORT_BUTTON_HIDDEN:this.onHover&&t===this.currentHoverField&&((d=this.data)!=null&&d.sortDirection)||((y=this.data)==null?void 0:y.sortAttribute)===t&&((w=this.data)==null?void 0:w.sortDirection)===b.DESC?r.TABLE_HEADER_SORT_BUTTON:r.TABLE_HEADER_DESC_SORT_BUTTON_HIDDEN}async handleSort(t,a,o){var l,u;t.stopPropagation(),t.preventDefault();let n=o;((l=this.data)==null?void 0:l.sortAttribute)===a&&((u=this.data)==null?void 0:u.sortDirection)===b.ASC?n=b.DESC:n=b.ASC,this.dispatchEvent(new CustomEvent("change",{detail:{value:{field:a,sort:n},type:X.SORT}}))}async handleSelection(t,a){var o,n;t.stopPropagation(),t.preventDefault(),this.dispatchEvent(new CustomEvent("change",{detail:{value:((o=this.data)==null?void 0:o.searchItems)&&((n=this.data)==null?void 0:n.searchItems[a]),type:X.SELECTION}}))}async handleSelectAll(t){t.stopPropagation(),t.preventDefault(),this.selectAll=!this.selectAll,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.selectAll,type:X.SELECT_ALL}}))}isItemSelected(t){var a,o,n;return(a=this.data)!=null&&a.selectedSearchItems&&((o=this.data)!=null&&o.searchItems)?(n=this.data)==null?void 0:n.selectedSearchItems.some(l=>{var u,s,i,c;return(u=this.data)!=null&&u.searchItems&&((s=this.data)!=null&&s.searchItems[t])?l._id===((c=(i=this.data)==null?void 0:i.searchItems[t])==null?void 0:c._id):!1}):!1}getPartRowCheckbox(t){var a,o,n,l;return this.onRowHover&&this.currentHoverRow===t||(a=this.data)!=null&&a.selectedSearchItems&&((o=this.data)!=null&&o.searchItems)&&((l=this.data)!=null&&l.selectedSearchItems.includes((n=this.data)==null?void 0:n.searchItems[t]))||this.isItemSelected(t)?"":r.TABLE_SELECT_CHECKBOX}getPartActionButton(t){return(this.onRowHover||this.tableHover==="true")&&this.currentHoverRow===t?r.TABLE_ACTION_ICON_BUTTON:r.TABLE_ACTION_ICON_BUTTON_HIDDEN}handleOverFlowMenu(t,a,{data:o,column:n}){const l=a==null?void 0:a.filter(s=>s.click),u=l==null?void 0:l.find(s=>s.text===t.detail.text);u!=null&&u.click&&(u==null||u.click(t,{data:o,column:n}))}handleActionItemKeydown(t,a,o,n,l=!1){var M,G,m;t.stopPropagation();const s=t.target.id,i=this.focusedRowActionButtons.findIndex(h=>h.id===s),c=t.key===f.TAB&&!t.shiftKey,e=t.key===f.TAB&&t.shiftKey,d=i===0&&e,y=i===this.focusedRowActionButtons.length-1,w=this.focused+1,U=this.focused-1,k=(G=(M=this.data)==null?void 0:M.searchItems)==null?void 0:G.length;if(t.key===f.ENTER&&!l&&(t.preventDefault(),this.renderRoot.querySelector(`#enchanted-data-grid-action-item-button-${a}-${this.actions[this.focused]}`).click()),l){const h=t.target,R=(m=this.renderRoot.querySelector(bt))==null?void 0:m.openMenu,A=p=>{R&&(this.programmaticClick=!0,h.click());const g=this.renderRoot.querySelector(`#enchanted-data-grid-action-item-button-${a}-${this.actions[p]}`);return g==null?void 0:g.focus()};if(e&&R&&(t.preventDefault(),this.focused-=1,A(U)),c&&!y&&R&&(t.preventDefault(),this.focused+=1,A(w)),t.key===f.ENTER){t.preventDefault(),this.programmaticClick=!0,h.click();const p=this.renderRoot.querySelector(`#enchanted-data-grid-menu-item-${a}-${o}-${n}-0`);setTimeout(()=>{p==null||p.focus()},350)}if(t.key===f.ARROW_DOWN||t.key===f.TAB&&!t.shiftKey){if(R){t.preventDefault();const p=this.renderRoot.querySelector(`#enchanted-data-grid-menu-item-${a}-${o}-${n}-0`);p==null||p.focus()}else if(y)if(a+1===k){this.focusNextElement(t);return}else t.preventDefault(),this.renderRoot.querySelector(`#table-row-${a+1}`).focus()}if(R)return}if(d){t.preventDefault();const h=this.renderRoot.querySelector(`#table-row-${a}`);h==null||h.focus()}if((y&&t.key===f.TAB&&!t.shiftKey||y&&t.key===f.ARROW_DOWN)&&(a+1===k?this.focusNextElement(t):(t.preventDefault(),this.renderRoot.querySelector(`#table-row-${a+1}`).focus())),c&&!y){t.preventDefault();const h=i+1<this.focusedRowActionButtons.length?i+1:0,R=this.focusedRowActionButtons[h];this.currentHoverRow=a,this.requestUpdate(),R==null||R.focus(),this.focused+=1}if(!d&&e){t.preventDefault();const h=i-1>=0?i-1:0,R=this.focusedRowActionButtons[h];R==null||R.focus(),this.focused-=1}}handleButtonFocus(t){t.stopPropagation(),t.preventDefault(),t.target.setAttribute("autofocus","true")}handleButtonBlur(t){t.stopPropagation(),t.preventDefault(),t.target.removeAttribute("autofocus")}handleMenuItemKeydown(t,a,o,n,l,u){var i,c;t.stopPropagation(),t.preventDefault();const s=t.target;if(t.key===f.ENTER&&s.click(),t.key===f.ARROW_DOWN){const e=this.renderRoot.querySelector(`#enchanted-data-grid-menu-item-${a}-${o}-${l}-${n+1}`);if(e)e.focus();else{const d=this.renderRoot.querySelector(`#enchanted-data-grid-menu-item-${a}-${o}-${l}-0`);d&&d.focus()}}if(!t.shiftKey&&t.key===f.TAB||t.key===f.ESCAPE){const e=this.renderRoot.querySelector(`#enchanted-data-grid-action-item-button-${a}-${this.actions[this.focused]}`);e instanceof HTMLElement&&e.focus(),((c=(i=e==null?void 0:e.parentElement)==null?void 0:i.parentElement)==null?void 0:c.parentElement).openMenu=!1}if(t.key===f.ARROW_UP)if(n===0)this.renderRoot.querySelector(`#enchanted-data-grid-menu-item-${a}-${o}-${l}-${u-1}`).focus();else{const e=this.renderRoot.querySelector(`#enchanted-data-grid-menu-item-${a}-${o}-${l}-${n-1}`);e==null||e.focus()}}handleCellHeaderKeydown(t,a,o){t.stopPropagation();const n=this.columns,l=z()?f.ARROW_RIGHT:f.ARROW_LEFT,u=z()?f.ARROW_LEFT:f.ARROW_RIGHT,s=t.key===f.TAB&&!t.shiftKey||t.key===l,i=t.key===u||t.shiftKey&&t.key===f.TAB;let c=null;if(s){for(let e=o+1;e<n.length;e++)if(n[e].sortEnable){c=e;break}}else if(i){for(let e=o-1;e>=0;e--)if(n[e].sortEnable){c=e;break}}if(c!==null){t.preventDefault();const e=this.renderRoot.querySelector(`#enchanted-table-header-${c}`);e&&e.focus()}else if(s){t.preventDefault();const e=this.renderRoot.querySelector("#table-row-0");e==null||e.focus(),this.currentHoverField=""}else i&&this.focusPreviousElement(t);if(t.key===f.ARROW_DOWN){t.preventDefault();const e=this.renderRoot.querySelector("#table-row-0");e&&(e.focus(),this.currentHoverField="")}if(t.key===f.ENTER){t.preventDefault();const e=this.renderRoot.querySelector(`#enchanted-data-grid-sort-button-${a}-${o}`);e&&e.click()}}handleSortButtonKeydown(t,a,o){t.stopPropagation(),t.preventDefault(),t.key===f.ENTER&&this.handleSort(t,a,o)}handleSortButtonBlur(t){t.target.removeAttribute("autofocus")}handleBodyRowKeydown(t,a){var l,u,s,i;t.stopPropagation();const o=(u=(l=this.data)==null?void 0:l.searchItems)==null?void 0:u.length,n=t.target;if(t.key===f.ENTER||t.key===f.SPACE){t.preventDefault();const c=(i=(s=this.data)==null?void 0:s.searchItems)==null?void 0:i[a];c&&this.handleRowClick(t,{data:c,index:a})}if(t.key===f.ARROW_DOWN){a+1===o&&this.focusNextElement(t);const c=this.renderRoot.querySelector(`#table-row-${a+1}`);c&&(t.preventDefault(),c.focus())}if(z()?t.key===f.ARROW_RIGHT:t.key===f.ARROW_LEFT){this.focused=0;const c=n==null?void 0:n.querySelector(`[part~="${r.TABLE_ACTION_ICON_BUTTON}"]`);if(c){const e=c.querySelector(Q);e&&(t.preventDefault(),this.currentHoverRow=a,this.requestUpdate(),e.focus())}}if(t.key===f.TAB&&!t.shiftKey){const c=this.renderRoot.querySelector(`#table-row-${a+1}`);c?(t.preventDefault(),c.focus()):this.focusNextElement(t)}if(t.key===f.ARROW_UP||t.shiftKey&&t.key===f.TAB){t.preventDefault();const c=this.renderRoot.querySelector(`#table-row-${a-1}`);if(a===0){this.currentHoverRow=NaN;const e=this.renderRoot.querySelector("#enchanted-table-header-0");e==null||e.focus()}else c&&c.focus()}}focusNextElement(t){this.onRowHover=!1,this.currentHoverRow=NaN,this.dispatchEvent(new CustomEvent("data-grid-focus-next",{detail:{keyboardEvent:t,source:"enchanted-data-grid"},bubbles:!0,composed:!0}))}focusPreviousElement(t){this.dispatchEvent(new CustomEvent("data-grid-focus-previous",{detail:{keyboardEvent:t,source:"enchanted-data-grid"},bubbles:!0,composed:!0})),this.currentHoverField=""}async focusOnRow(t){await this.updateComplete;const a=this.renderRoot.querySelector(`#table-row-${t}`);a&&a.focus()}async focusOnLoadingContainer(){await this.updateComplete;const t=this.renderRoot.querySelector("#table-loading-container");t&&t.focus()}handleCellHeaderFocus(t,a,o){t.stopPropagation(),t.preventDefault(),this.onHover=!0,this.currentHoverField=a;const n=t.target;setTimeout(()=>{var l,u;if(((l=this.data)==null?void 0:l.sortDirection)===b.DESC&&((u=this.data)==null?void 0:u.sortAttribute)===a){const s=this.renderRoot.querySelector(`#enchanted-data-grid-sort-button-${b.DESC}-${o}`);s.setAttribute("autofocus","true"),s==null||s.focus(),n.blur()}else{const s=this.renderRoot.querySelector(`#enchanted-data-grid-sort-button-${b.ASC}-${o}`);s==null||s.setAttribute("autofocus","true"),s==null||s.focus(),n.blur()}})}handleRowFocus(t,a){t.stopPropagation(),t.preventDefault(),this.onRowHover=!0,this.currentHoverRow=a,this.currentHoverField="";const o=t.target;o.setAttribute("autofocus","true");const n=o.querySelectorAll(Q);this.focusedRowActionButtons=Array.from(n)}handleRowBlur(t,a){t.stopPropagation(),t.preventDefault(),a!==this.currentHoverRow&&(this.onRowHover=!1,this.currentHoverRow=NaN),t.target.removeAttribute("autofocus")}handleTableHeaderTextEnter(t,a){const o=t.currentTarget;a&&o.parentElement&&o.offsetWidth+18>=o.parentElement.scrollWidth&&o.setAttribute("title",a||"")}updated(t){super.updated(t),t.has("data")&&(this.selectedIndex=void 0,this.onRowHover=!1,this.currentHoverRow=NaN,this.dispatchEvent(new CustomEvent("enchanted-data-grid-row-click",{detail:{data:void 0},composed:!0,bubbles:!0})))}renderTableHeader(){var t,a;try{const o=this.columns,n=o.length;if(this.data&&((t=this.data)!=null&&t.searchItems)&&((a=this.data)==null?void 0:a.searchItems.length)>0&&this.isLoading===!1)return $`
          <tr part="${r.TABLE_ROW_HEADER_CONTAINER}" role="row" aria-rowindex="1">
          ${this.checkboxSelection===!0?$`
            <th part="${r.TABLE_SELECT_ALL_CHECKBOX}">
              <input data-testid="enchanted-data-grid-select-all-checkbox" ?checked=${this.selectAll} @click=${this.handleSelectAll} type="checkbox">
            </th>`:""}
          ${o.map((l,u)=>{let s=l.field.replace("_source.","");const i=l.keyForStringify;return i&&(s=`${s}.${i}`),$`
            <th
              @mouseenter=${c=>this.handleHeaderOnMouseOver(c,s)} 
              @mouseleave=${c=>this.handleHeaderOnMouseOut(c)}
              @focus=${c=>this.handleCellHeaderFocus(c,s,u)}
              tabindex="0"
              id="enchanted-table-header-${u}"
              part="${r.TABLE_HEADER_CONTAINER} ${this.customTableHeaderPart.replace("{index}",u.toString())}"
              @keydown=${c=>{var e;return this.handleCellHeaderKeydown(c,((e=this.data)==null?void 0:e.sortDirection)||b.ASC,u)}}
              role="columnheader"
              aria-colindex="${this.checkboxSelection===!0?u+2:u+1}"
              aria-label="${l.headerName}">
              <div part="${r.TABLE_HEADER_CONTAINER_CHILD}">
                <div
                  part="${r.TABLE_HEADER_TEXT_PARENT}"
                  @mouseenter=${c=>this.handleTableHeaderTextEnter(c,l.headerName)}
                >
                  <span part="${r.TABLE_HEADER_TEXT}">${l.headerName}</span>
                </div>
                ${l.sortEnable?$`
                    <div part="${r.TABLE_SORT_BUTTON_CONTAINER}">
                      <${S}
                        data-testid="enchanted-data-grid-sort-button-${b.ASC}-${u}"
                        .icon=${$`<${N("icon-arrow-up")}></${N("icon-arrow-up")}>`}
                        id="enchanted-data-grid-sort-button-${b.ASC}-${u}"
                        tabindex=0
                        part="${this.getPartHeaderSort(s,b.ASC)} ${r.TABLE_HEADER_ICON_BUTTON}"
                        exportparts="${P}"
                        @click=${c=>this.handleSort(c,s,b.ASC)}
                        @blur=${c=>this.handleSortButtonBlur(c)}
                        ?disabled=${l.sortEnable===void 0?!1:!l.sortEnable}
                        ariaLabel=${this.getMessage("datagrid.column.sort.asc",[{"{columnName}":String(l.headerName)}])}
                      >
                      </${S}>
                      <${S}
                        data-testid="enchanted-data-grid-sort-button-${b.DESC}-${u}"
                        .icon=${$`<${N("icon-arrow-down")}></${N("icon-arrow-down")}>`}
                        tabindex=0
                        id="enchanted-data-grid-sort-button-${b.DESC}-${u}"
                        part="${this.getPartHeaderSort(s,b.DESC)} ${r.TABLE_HEADER_ICON_BUTTON}"
                        exportparts="${P}"
                        @click=${c=>this.handleSort(c,s,b.DESC)}
                        @blur=${c=>this.handleSortButtonBlur(c)}
                        ?disabled=${l.sortEnable===void 0?!1:!l.sortEnable}
                        ariaLabel=${this.getMessage("datagrid.column.sort.desc",[{"{columnName}":String(l.headerName)}])}
                      >
                      </${S}>
                    </div>`:H}
              </div>
              ${this.onHover&&u!==n-1?$`
                  <div part=${r.TABLE_COLUMN_SEPARATOR} tabindex="-1" aria-hidden="true">
                    <hr part="${r.TABLE_COLUMN_SEPARATOR_HR}" />
                  </div>`:""}
            </th>
          `})}
          </tr>
        `}catch{this.invalidColDef=!0}}handleTableCellTextEnter(t,a){const o=t.currentTarget;a&&o.offsetWidth<o.scrollWidth&&o.setAttribute("title",a||"")}getRowPart(t){return this.selectedIndex===t?r.TABLE_ROW_BODY_CONTAINER_SELECTED:r.TABLE_ROW_BODY_CONTAINER}renderTableBody(){var t,a,o,n;try{const l=this.columns;return this.isLoading===!0?$`
          <div
            id="table-loading-container"
            part="${r.TABLE_BODY_CONTAINER}" 
            role="status"  d
            tabindex="-1"
            aria-label="${this.getMessage("output.message.loading.search.results")}"
          >
            <${tt}></${tt}>
            <p data-testid="table-loading-text" part="${r.TABLE_LOADING_TEXT}">${this.getMessage("output.message.loading.search.results")}</p>
          </div>
        `:this.data&&((t=this.data)!=null&&t.searchItems)&&((a=this.data)==null?void 0:a.searchItems.length)>0?$`
          ${this.data.searchItems.map((s,i)=>{const c=l.map(e=>{var w;const d=[O(this.specialFields,s,e.field,e.keyForStringify)],y=(w=e.subtitle)==null?void 0:w.call(e,s,e);return y&&d.push(y),d.join(", ")}).join(", ");return $`
            <tr
              role="row"
              tabindex=0
              id="table-row-${i}"
              data-testid="enchanted-table-row-${i}"
              aria-label="${c}"
              part="${this.getRowPart(i)}"
              @mouseenter=${e=>this.handleRowOnMouseOver(e,i)} 
              @mouseleave=${e=>this.handleRowOnMouseOut(e,i)} 
              @focus=${e=>this.handleRowFocus(e,i)}
              @blur=${e=>this.handleRowBlur(e,i)}
              @keydown=${e=>this.handleBodyRowKeydown(e,i)}
              @click=${this.isRowClickable?e=>this.handleRowClick(e,{data:s,index:i}):H}
              aria-rowindex="${i+2}"
            >
              ${this.checkboxSelection===!0?$`
              <td part="${r.TABLE_SELECT_CHECKBOX_CONTAINER}" role="gridcell">
                <input
                  @click=${e=>this.handleSelection(e,i)}
                  part=${this.getPartRowCheckbox(i)} 
                  type="checkbox"
                  data-testid="enchanted-data-grid-select-checkbox-${i}"
                  ?checked=${this.isItemSelected(i)||this.selectAll}
                >
              </td>`:""}
              ${l.map((e,d)=>{var k,M,G;let y=O(this.specialFields,s,e.field,e.keyForStringify),w;e.tooltip?w=e.tooltip:w=O(this.specialFields,s,e.field,e.keyForStringify);const U=Rt(O(this.specialFields,s,e.iconTypeTooltip));return $`
              <td 
                part="${e.subtitle&&e.subtitle(s,e)?r.TABLE_CELL_CONTAINER_MULTI_LINES:r.TABLE_CELL_CONTAINER} ${this.customeTableCellPart.replace("{index}",d.toString())}"
                role="gridcell"
              >
                <div part="${r.TABLE_COLUMN_AUTHORING_DIV.replace("{index}",d.toString())}">
                  <div part="${r.TABLE_COLUMN_AUTHORING_DIV_0.replace("{index}",d.toString())}">
                    ${e.avatar?$`
                      <${Ct}
                        title=${U}
                        itemType=${O(this.specialFields,s,e.avatarType,e.keyForStringify)}
                        imageUrl=${O(this.specialFields,s,e.thumbnailUrl)}
                        exportparts="${wt}"
                        aria-label=${U}
                      />`:""}
                  </div>
                  <div
                    part="${r.TABLE_COLUMN_AUTHORING_DIV_1.replace("{index}",d.toString())}"
                    @mouseenter=${m=>this.handleTableCellTextEnter(m,w)}
                    data-testid=${O(this.specialFields,s,e.field,e.keyForStringify)}
                  >
                    ${e.isLink&&e.isLink(s,e)?$`
                        <a
                          href="#"
                          @click=${m=>e.click&&e.click(m,{data:s,column:e})}
                          part="${r.TABLE_CELL_LINK}"
                          tabindex="-1"
                        >
                          <span part="${r.TABLE_CELL_TEXT}">${y}</span>
                        </a>
                        ${e.subtitle&&e.subtitle(s,e)?$`
                            <p part="${r.TABLE_CELL_SUBTITLE}">${e.subtitle(s,e)}</p>
                          `:H}
                      `:$`
                        <span
                          @click=${m=>e.click&&e.click(m,{data:s,column:e})}
                          part="${r.TABLE_CELL_TEXT}"
                          data-testid="enchanted-data-grid-cell-text-${(k=e.headerName)==null?void 0:k.replace(" ","_")}-${i}"
                        >${y}
                        </span>
                      `}
                  </div>
                  <div 
                    part="${e.actions&&e.actions.length>0?r.TABLE_ACTION_BUTTONS_CONTAINER:""} ${r.TABLE_COLUMN_AUTHORING_DIV_2.replace("{index}",d.toString())}"
                  >
                      ${(M=e.actions)!=null&&M.length?(G=e.actions)==null?void 0:G.map((m,h)=>{if(m.isVisible=m.isVisible??(()=>!0),!m.isVisible(s,e))return H;if(m.menu&&m.menu.length>0){const A=this.getVisibleMenuItems(m.menu,s,e);if(A.length>1)return $`
                                <div part="${r.TABLE_COLUMN_AUTHORING_DIV_3.replace("{index}",d.toString())}">
                                  <div part=${`${this.getPartActionButton(i)} ${r.TABLE_ACTION_ICON_BUTTON_MENU}`} >
                                      <${et} 
                                        data-testid="enchanted-data-grid-menu-${i}-${d}-${h}"
                                        exportparts="
                                        ${Object.values(Nt).join(",")},
                                        ${Object.values(ot).join(",")},
                                        ${Object.values(Dt).join(",")},
                                        ${Object.values(vt).join(",")},
                                        ${Object.values(st).join(",")}
                                        "
                                        @change=${p=>this.handleOverFlowMenu(p,m.menu||[],{data:s,column:e})}
                                        menuDelay=0
                                      >
                                        <div slot="target-anchor">
                                        ${m.icon?$`
                                            <${I} tooltiptext=${m.text} exportparts=${Y}>
                                              <${S}
                                                slot="target"
                                                @keydown=${p=>this.handleActionItemKeydown(p,i,d,h,!0)}
                                                tabindex=0
                                                data-testid="enchanted-data-grid-action-item-button-${i}-${d}-${h}"
                                                id="enchanted-data-grid-action-item-button-${i}-${d}-${h}"
                                                imgurl="${m.icon}"
                                                exportparts="${P}"
                                                @focus=${p=>this.handleButtonFocus(p)}
                                                @blur=${p=>this.handleButtonBlur(p)}
                                                part=${r.TABLE_CELL_ICON_BUTTON}
                                                ariaLabel=${m.text}
                                              >
                                              </${S}>
                                            </${I}>
                                          `:$`
                                              <div
                                                title=${m.text}
                                                @keydown=${p=>this.handleActionItemKeydown(p,i,d,h,!0)}
                                                tabindex=0
                                                data-testid="enchanted-data-grid-action-item-button-${i}-${d}-${h}"
                                                id="enchanted-data-grid-action-item-button-${i}-${d}-${h}"
                                                @focus=${p=>this.handleButtonFocus(p)}
                                                @blur=${p=>this.handleButtonBlur(p)}
                                                part=${r.TABLE_CELL_TEXT_ACTION}
                                              >
                                                ${m.text}
                                              </div>
                                            `}
                                        </div>
                                        <div slot="menu-items">
                                          ${A.map((p,g)=>$`
                                              <${at} 
                                                text="${p.text}" 
                                                tabindex=0
                                                data-testid="enchanted-data-grid-menu-item-${i}-${d}-${h}-${g}"
                                                id="enchanted-data-grid-menu-item-${i}-${d}-${h}-${g}"
                                                exportparts="${Object.values(ot).join(",")},
                                                  ${Object.values(st).join(",")}" 
                                                value=${p.text}
                                                @keydown=${gt=>this.handleMenuItemKeydown(gt,i,d,g,h,m.menu?m.menu.length:0)}
                                                part=${r.TABLE_HEADER_MENU_ITEM}
                                              >
                                              </${at}>
                                            `)}
                                        </div>
                                    </${et}>
                                  </div>
                                </div>
                              `;if(A.length===1){const p=A[0];return $`
                                <div part="${r.TABLE_COLUMN_AUTHORING_DIV_3.replace("{index}",d.toString())}">
                                  <div part=${this.getPartActionButton(i)} >
                                    ${p.icon?$`
                                        <${I} tooltiptext=${p.text} exportparts=${Y}>
                                          <${S} 
                                            slot="target"
                                            data-testid="enchanted-data-grid-action-item-button-${i}-${d}-${h}"
                                            id="enchanted-data-grid-action-item-button-${i}-${d}-${h}"
                                            imgurl="${p.icon}"
                                            tabindex=0
                                            exportparts="${P}"
                                            @click=${g=>(g.stopPropagation(),p.click&&p.click(g,{data:s,column:e}))}
                                            @keydown=${g=>this.handleActionItemKeydown(g,i,d,h)}
                                            @focus=${g=>this.handleButtonFocus(g)}
                                            @blur=${g=>this.handleButtonBlur(g)}
                                            part=${r.TABLE_CELL_ICON_BUTTON}
                                            ariaLabel=${p.text}>
                                          </${S}>
                                        </${I}>  
                                        `:$`<div
                                            title=${p.text}
                                            tabindex=0
                                            data-testid="enchanted-data-grid-action-item-button-${i}-${d}-${h}"
                                            id="enchanted-data-grid-action-item-button-${i}-${d}-${h}"
                                            @click=${g=>(g.stopPropagation(),p.click&&p.click(g,{data:s,column:e}))}
                                            @keydown=${g=>this.handleActionItemKeydown(g,i,d,h)}
                                            @focus=${g=>this.handleButtonFocus(g)}
                                            @blur=${g=>this.handleButtonBlur(g)}
                                            part=${r.TABLE_CELL_TEXT_ACTION}
                                          >
                                            ${p.text}
                                          </div>
                                        `}
                                  </div>
                                </div>
                              `}else return H}else return $`
                              <div part="${r.TABLE_COLUMN_AUTHORING_DIV_3.replace("{index}",d.toString())}">
                                  <div part=${this.getPartActionButton(i)} >
                                      ${m.icon?$`
                                        <${I} tooltiptext=${m.text} exportparts=${Y}>
                                          <${S} 
                                            slot="target"
                                            data-testid="enchanted-data-grid-action-item-button-${i}-${d}-${h}"
                                            id="enchanted-data-grid-action-item-button-${i}-${d}-${h}"
                                            imgurl="${m.icon}"
                                            tabindex=0
                                            exportparts="${P}"
                                            @click=${A=>(A.stopPropagation(),s.isMouseEvent=A.pointerType==="mouse",m.click&&m.click(A,{data:s,column:e}))}
                                            @keydown=${A=>this.handleActionItemKeydown(A,i,d,h)}
                                            @focus=${A=>this.handleButtonFocus(A)}
                                            @blur=${A=>this.handleButtonBlur(A)}
                                            part=${r.TABLE_CELL_ICON_BUTTON}
                                            ariaLabel=${m.text}>
                                          </${S}>
                                        </${I}>
                                        `:$`<div
                                              title=${m.text}
                                              tabindex=0
                                              data-testid="enchanted-data-grid-action-item-button-${i}-${d}-${h}"
                                              id="enchanted-data-grid-action-item-button-${i}-${d}-${h}"
                                              @click=${A=>(A.stopPropagation(),m.click&&m.click(A,{data:s,column:e}))}
                                              @keydown=${A=>this.handleActionItemKeydown(A,i,d,h)}
                                              @focus=${A=>this.handleButtonFocus(A)}
                                              @blur=${A=>this.handleButtonBlur(A)}
                                              part=${r.TABLE_CELL_TEXT_ACTION}
                                            >
                                              ${m.text}
                                            </div>
                                          `}
                                  </div>
                              </div>
                            `}):""}
                  </div>
                </div>
            </td>
          `})}
          </tr>`})}`:((o=this.data)==null?void 0:o.total)===0?$`
          <div part="${r.TABLE_BODY_CONTAINER}">         
            <${N("icon-items-search-empty")} size="128" color="rgba(0, 0, 0, 0.38)"></${N("icon-items-search-empty")}>
            <p data-testid="table-result-label" part="${r.TABLE_RESULT_LABEL}">${this.getMessage("output.message.no.results.found")}</p>
            <p part="${r.TABLE_RESULT_DESCRIPTION}">
            ${Ot(this.getMessage("output.message.no.match.found",[{"{search_term}":String((n=this.data)==null?void 0:n.searchValue)}]))}
            </p>
          </div>
        `:this.hasMiddlewareError===!0?(J("%s, %s",this.getMessage("output.message.no.engine.found"),this.getMessage("output.message.contact.admin")),$`
          <div part="${r.TABLE_BODY_CONTAINER}">
            <${N("icon-items-search-empty")} size="128" color="rgba(0, 0, 0, 0.38)"></${N("icon-items-search-empty")}>
            <p data-testid="table-result-label" part="${r.TABLE_RESULT_LABEL}">${this.getMessage("output.message.no.engine.found")}</p>
            <p part="${r.TABLE_RESULT_DESCRIPTION}">
            ${this.getMessage("output.message.contact.admin")}
            </p>
          </div>
        `):this.hasContentSourceAvailable===!0?(J("%s, %s",this.getMessage("output.message.no.content.sources.found"),this.getMessage("output.message.contact.admin")),$`
          <div part="${r.TABLE_BODY_CONTAINER}"> 
            <${N("icon-items-search-empty")} size="128" color="rgba(0, 0, 0, 0.38)"></${N("icon-items-search-empty")}>
            <p data-testid="table-result-label" part="${r.TABLE_RESULT_LABEL}">${this.getMessage("output.message.no.content.sources.found")}</p>
            <p part="${r.TABLE_RESULT_DESCRIPTION}">
            ${this.getMessage("output.message.contact.admin")}
            </p>
          </div>
        `):$`
          <div part="${r.TABLE_BODY_CONTAINER}">
            <${N("icon-items-search-initial")} size="128" color="rgba(0, 0, 0, 0.38)"></${N("icon-items-search-initial")}>
            <p data-testid="table-result-label" part="${r.TABLE_RESULT_LABEL}">${this.getMessage("authoring.data.grid.initial.message")}</p>
            <p part="${r.TABLE_RESULT_DESCRIPTION}">
                ${this.isFeatureTagCloudEnabled?this.getMessage("output.message.looking.for.something"):this.getMessage("authoring.data.grid.message.looking.for.something")}
            </p>
          </div>
        `}catch{this.invalidColDef=!0}}render(){var t;return this.invalidColDef?$`<p data-testid="enchanted-invalid-columns-label">${this.getMessage("data.grid.invalid.column.definition")}</p>`:$`
        <table 
          part="${r.TABLE_CONTAINER}" 
          role="grid" 
          tabindex="-1" 
          aria-colcount="${this.columns?this.columns.length+(this.checkboxSelection===!0?1:0):1}"
          aria-rowcount="${(t=this.data)!=null&&t.searchItems?this.data.searchItems.length+1:2}"
          aria-busy="${this.isLoading===!0}"
        >
          <thead>
            ${this.renderTableHeader()}
          </thead>
          <tbody>
            ${this.renderTableBody()}
          </tbody>
        </table>
      `}};_([D()],T.prototype,"isLoading");_([v()],T.prototype,"invalidColDef");_([v()],T.prototype,"onHover");_([v()],T.prototype,"onRowHover");_([D()],T.prototype,"data");_([D()],T.prototype,"columns");_([D()],T.prototype,"hasMiddlewareError");_([D()],T.prototype,"hasContentSourceAvailable");_([D()],T.prototype,"checkboxSelection");_([D()],T.prototype,"isFeatureTagCloudEnabled");_([D()],T.prototype,"specialFields");_([D({type:Boolean})],T.prototype,"isRowClickable");_([D()],T.prototype,"customTableHeaderPart");_([D()],T.prototype,"customeTableCellPart");_([v()],T.prototype,"currentHoverField");_([v()],T.prototype,"currentHoverRow");_([v()],T.prototype,"selectAll");_([D()],T.prototype,"tableHover");_([v()],T.prototype,"programmaticClick");_([v()],T.prototype,"actionCount");_([v()],T.prototype,"actions");_([v()],T.prototype,"focused");_([v()],T.prototype,"selectedIndex");_([v()],T.prototype,"focusedRowActionButtons");customElements.get(K)?J("Component (%s) is currently registered and not possible to registrate again.",K):customElements.define(K,T);const L=[{field:"id",headerName:"ID"},{field:"name",headerName:"Name"},{field:"email",headerName:"Email"},{field:"role",headerName:"Role"},{field:"status",headerName:"Status"}],B={searchItems:[{id:1,name:"John Doe",email:"john.doe@example.com",role:"Admin",status:"Active"},{id:2,name:"Jane Smith",email:"jane.smith@example.com",role:"User",status:"Active"},{id:3,name:"Bob Johnson",email:"bob.johnson@example.com",role:"Editor",status:"Inactive"},{id:4,name:"Alice Williams",email:"alice.williams@example.com",role:"User",status:"Active"},{id:5,name:"Charlie Brown",email:"charlie.brown@example.com",role:"Viewer",status:"Active"}],total:5,page:1,pageSize:10},$e={title:"Data display/enchanted-data-grid-generic",component:"enchanted-data-grid-generic",tags:["autodocs"],argTypes:{isLoading:{control:{type:"boolean"},description:"Indicates if the data grid is in a loading state, showing a loading spinner.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},data:{control:{type:"object"},description:"The data context containing search items to display in the grid. Should be an object with searchItems array, total count, page, pageSize, and sorting info.",table:{category:"Content",type:{summary:"EnchantedDataGridContextType"},defaultValue:{summary:"{}"}}},columns:{control:{type:"object"},description:"Column definitions specifying field names, headers, sorting, actions, and rendering behavior. Each column must have a field property.",table:{category:"Content",type:{summary:"EnchantedDataGridColDef[]"},defaultValue:{summary:"[]"}}},hasMiddlewareError:{control:{type:"boolean"},description:"Indicates if there's a middleware error preventing data loading. When true, shows error state UI instead of data.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},hasContentSourceAvailable:{control:{type:"boolean"},description:"Indicates if content source is available for the grid. When false, may show empty state or limited functionality.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},checkboxSelection:{control:{type:"boolean"},description:"Enables checkbox selection for rows. When true, adds checkboxes to each row for multi-selection capabilities.",table:{category:"Behavior",type:{summary:"boolean"},defaultValue:{summary:"false"}}},isFeatureTagCloudEnabled:{control:{type:"boolean"},description:"Enables tag cloud feature for special fields. When true, renders specified fields as tag clouds instead of standard text.",table:{category:"Display",type:{summary:"boolean"},defaultValue:{summary:"false"}}},specialFields:{control:{type:"object"},description:"Array of field names that require special rendering or behavior. Used in conjunction with isFeatureTagCloudEnabled.",table:{category:"Content",type:{summary:"string[]"},defaultValue:{summary:"[]"}}},isRowClickable:{control:{type:"boolean"},description:"Makes rows clickable, enabling row click interactions. When true, rows become interactive and can trigger click handlers.",table:{category:"Behavior",type:{summary:"boolean"},defaultValue:{summary:"false"}}},customTableHeaderPart:{control:{type:"text"},description:"Custom CSS part name for table header styling. Allows external styling of header elements through CSS shadow parts.",table:{category:"Styling",type:{summary:"string"},defaultValue:{summary:""}}},customeTableCellPart:{control:{type:"text"},description:"Custom CSS part name for table cell styling. Allows external styling of cell elements through CSS shadow parts.",table:{category:"Styling",type:{summary:"string"},defaultValue:{summary:""}}},tableHover:{control:{type:"radio"},options:["true","false"],description:"Enables hover effects on table rows. When true, rows highlight on mouse hover for better visual feedback.",table:{category:"Display",type:{summary:"string"},defaultValue:{summary:"false"}}}},args:{isLoading:!1,data:B,columns:L,hasMiddlewareError:!1,hasContentSourceAvailable:!1,checkboxSelection:!1,isFeatureTagCloudEnabled:!1,specialFields:[],isRowClickable:!1,customTableHeaderPart:"",customeTableCellPart:"",tableHover:"false"},parameters:{docs:{description:{component:"Data grid component for displaying tabular data with sorting, actions, selection, and custom rendering. Supports loading states, error handling, and extensive customization."}}}},x={render:E=>$`
      <${C}
        .isLoading=${E.isLoading}
        .data=${E.data}
        .columns=${E.columns}
        .hasMiddlewareError=${E.hasMiddlewareError}
        .hasContentSourceAvailable=${E.hasContentSourceAvailable}
        .checkboxSelection=${E.checkboxSelection}
        .isFeatureTagCloudEnabled=${E.isFeatureTagCloudEnabled}
        .specialFields=${E.specialFields}
        .isRowClickable=${E.isRowClickable}
        .customTableHeaderPart=${E.customTableHeaderPart}
        .customeTableCellPart=${E.customeTableCellPart}
        .tableHover=${E.tableHover}
      ></${C}>
    `,name:"Default"},V={render:()=>$`
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <!-- Basic Grid -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Basic Data Grid</h3>
          <${C}
            ?isLoading=${!1}
            .data=${B}
            .columns=${L}
          ></${C}>
        </div>

        <!-- With Checkbox Selection -->
        <div>
          <h3 style="margin: 0 0 16px 0;">With Checkbox Selection</h3>
          <${C}
            ?isLoading=${!1}
            .data=${B}
            .columns=${L}
            ?checkboxSelection=${!0}
          ></${C}>
        </div>

        <!-- With Table Hover -->
        <div>
          <h3 style="margin: 0 0 16px 0;">With Table Hover</h3>
          <${C}
            ?isLoading=${!1}
            .data=${B}
            .columns=${L}
            .tableHover=${"true"}
          ></${C}>
        </div>

        <!-- Clickable Rows -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Clickable Rows</h3>
          <${C}
            ?isLoading=${!1}
            .data=${B}
            .columns=${L}
            ?isRowClickable=${!0}
            .tableHover=${"true"}
          ></${C}>
        </div>

        <!-- With Actions -->
        <div>
          <h3 style="margin: 0 0 16px 0;">With Action Columns</h3>
          <${C}
            ?isLoading=${!1}
            .data=${B}
            .columns=${[{field:"id",headerName:"ID"},{field:"name",headerName:"Name"},{field:"email",headerName:"Email"},{field:"actions",headerName:"Actions",actions:[{text:"Edit",click:()=>{}},{text:"Delete",click:()=>{}}]}]}
          ></${C}>
        </div>

        <!-- Loading State -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Loading State</h3>
          <${C}
            ?isLoading=${!0}
            .data=${B}
            .columns=${L}
          ></${C}>
        </div>

        <!-- Empty State -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Empty State (No Data)</h3>
          <${C}
            ?isLoading=${!1}
            .data=${{searchItems:[]}}
            .columns=${L}
          ></${C}>
        </div>

        <!-- Error State -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Error State (Middleware Error)</h3>
          <${C}
            ?isLoading=${!1}
            .data=${B}
            .columns=${L}
            ?hasMiddlewareError=${!0}
          ></${C}>
        </div>
      </div>
    `,parameters:{controls:{disabled:!0},docs:{description:{story:"Comprehensive showcase of all data grid states including basic display, checkbox selection, hover effects, clickable rows, actions, loading, empty, and error states."}}}};var dt,ht,pt;x.parameters={...x.parameters,docs:{...(dt=x.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <\${ENCHANTED_DATA_GRID_GENERIC_TAG}
        .isLoading=\${args.isLoading}
        .data=\${args.data}
        .columns=\${args.columns}
        .hasMiddlewareError=\${args.hasMiddlewareError}
        .hasContentSourceAvailable=\${args.hasContentSourceAvailable}
        .checkboxSelection=\${args.checkboxSelection}
        .isFeatureTagCloudEnabled=\${args.isFeatureTagCloudEnabled}
        .specialFields=\${args.specialFields}
        .isRowClickable=\${args.isRowClickable}
        .customTableHeaderPart=\${args.customTableHeaderPart}
        .customeTableCellPart=\${args.customeTableCellPart}
        .tableHover=\${args.tableHover}
      ></\${ENCHANTED_DATA_GRID_GENERIC_TAG}>
    \`;
  },
  name: 'Default'
}`,...(pt=(ht=x.parameters)==null?void 0:ht.docs)==null?void 0:pt.source}}};var mt,$t,Et;V.parameters={...V.parameters,docs:{...(mt=V.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  render: () => {
    const columnsWithActions: EnchantedDataGridColDef[] = [{
      field: 'id',
      headerName: 'ID'
    }, {
      field: 'name',
      headerName: 'Name'
    }, {
      field: 'email',
      headerName: 'Email'
    }, {
      field: 'actions',
      headerName: 'Actions',
      actions: [{
        text: 'Edit',
        click: () => {/* Edit action */}
      }, {
        text: 'Delete',
        click: () => {/* Delete action */}
      }]
    }];
    return html\`
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <!-- Basic Grid -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Basic Data Grid</h3>
          <\${ENCHANTED_DATA_GRID_GENERIC_TAG}
            ?isLoading=\${false}
            .data=\${sampleData}
            .columns=\${sampleColumns}
          ></\${ENCHANTED_DATA_GRID_GENERIC_TAG}>
        </div>

        <!-- With Checkbox Selection -->
        <div>
          <h3 style="margin: 0 0 16px 0;">With Checkbox Selection</h3>
          <\${ENCHANTED_DATA_GRID_GENERIC_TAG}
            ?isLoading=\${false}
            .data=\${sampleData}
            .columns=\${sampleColumns}
            ?checkboxSelection=\${true}
          ></\${ENCHANTED_DATA_GRID_GENERIC_TAG}>
        </div>

        <!-- With Table Hover -->
        <div>
          <h3 style="margin: 0 0 16px 0;">With Table Hover</h3>
          <\${ENCHANTED_DATA_GRID_GENERIC_TAG}
            ?isLoading=\${false}
            .data=\${sampleData}
            .columns=\${sampleColumns}
            .tableHover=\${'true'}
          ></\${ENCHANTED_DATA_GRID_GENERIC_TAG}>
        </div>

        <!-- Clickable Rows -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Clickable Rows</h3>
          <\${ENCHANTED_DATA_GRID_GENERIC_TAG}
            ?isLoading=\${false}
            .data=\${sampleData}
            .columns=\${sampleColumns}
            ?isRowClickable=\${true}
            .tableHover=\${'true'}
          ></\${ENCHANTED_DATA_GRID_GENERIC_TAG}>
        </div>

        <!-- With Actions -->
        <div>
          <h3 style="margin: 0 0 16px 0;">With Action Columns</h3>
          <\${ENCHANTED_DATA_GRID_GENERIC_TAG}
            ?isLoading=\${false}
            .data=\${sampleData}
            .columns=\${columnsWithActions}
          ></\${ENCHANTED_DATA_GRID_GENERIC_TAG}>
        </div>

        <!-- Loading State -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Loading State</h3>
          <\${ENCHANTED_DATA_GRID_GENERIC_TAG}
            ?isLoading=\${true}
            .data=\${sampleData}
            .columns=\${sampleColumns}
          ></\${ENCHANTED_DATA_GRID_GENERIC_TAG}>
        </div>

        <!-- Empty State -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Empty State (No Data)</h3>
          <\${ENCHANTED_DATA_GRID_GENERIC_TAG}
            ?isLoading=\${false}
            .data=\${{
      searchItems: []
    }}
            .columns=\${sampleColumns}
          ></\${ENCHANTED_DATA_GRID_GENERIC_TAG}>
        </div>

        <!-- Error State -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Error State (Middleware Error)</h3>
          <\${ENCHANTED_DATA_GRID_GENERIC_TAG}
            ?isLoading=\${false}
            .data=\${sampleData}
            .columns=\${sampleColumns}
            ?hasMiddlewareError=\${true}
          ></\${ENCHANTED_DATA_GRID_GENERIC_TAG}>
        </div>
      </div>
    \`;
  },
  parameters: {
    controls: {
      disabled: true
    },
    docs: {
      description: {
        story: 'Comprehensive showcase of all data grid states including basic display, checkbox selection, hover effects, clickable rows, actions, loading, empty, and error states.'
      }
    }
  }
}`,...(Et=($t=V.parameters)==null?void 0:$t.docs)==null?void 0:Et.source}}};const Ee=["EnchantedDataGridGeneric","AllStates"];export{V as AllStates,x as EnchantedDataGridGeneric,Ee as __namedExportsOrder,$e as default};
