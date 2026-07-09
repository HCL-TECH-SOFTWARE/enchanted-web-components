import{E as d}from"./iframe-q8uLr7wl.js";import{c as A,v as m,a as w,r as b,w as I,u as h,x as E,f as y,g as D,q as L,n as l,y as T}from"./tags-CoVdckeD.js";import{r as g}from"./state-HmA1gIuo.js";import{l as $}from"./lodash-CdDiHlzQ.js";import"./enchanted-list-item-4M1fmflT.js";import"./enchanted-button-D143v6g8.js";import{g as _,k as n,c as v,L as C}from"./cssClassEnums-B0FxBdGx.js";import{E as u}from"./enchanted-select-Ge91KUgI.js";import"./index-DSw0ACRs.js";import{K as c}from"./keyboardEventKeys-BnoN8uA3.js";var S=Object.defineProperty,N=Object.getOwnPropertyDescriptor,o=(e,t,a,r)=>{for(var s=r>1?void 0:r?N(t,a):t,p=e.length-1,f;p>=0;p--)(f=e[p])&&(s=(r?f(t,a,s):f(s))||s);return r&&s&&S(t,a,s),s};const O=A("enchanted-web-components:components:atomic-component:enchanted-select.ts");let i=class extends w{constructor(){super(...arguments),this.toggleDropDown=!1,this.currentFocusedItem=void 0,this.label="",this.disabled=!1,this.alwaysShowPlaceholder=!1,this.options=[],this.field="",this.hiddenLabel=!1,this.hiddenIcon=!1,this.showRemoveLabel=!1,this.ariaLabel="",this.ignoreNextFocusOut=!1}focusListItem(e){if(!e)return;const t=e;if(typeof t.focusListItem=="function"){t.focusListItem();return}t.focus()}focusSelectButton(){const e=this.renderRoot.querySelector('[data-testid="enchanted-select-button"]');if(e){if(typeof e._focusButton=="function"){e._focusButton();return}e.focus()}}getCurrentFocusedIndex(){return this.currentFocusedItem?Array.from(this.listItems||[]).indexOf(this.currentFocusedItem):-1}focusNextListItem(){const e=this.getCurrentFocusedIndex();!this.listItems||e>=this.listItems.length-1||(this.currentFocusedItem=this.listItems[e+1],this.focusListItem(this.currentFocusedItem),this.toggleDropDown=!0)}focusPreviousListItem(){const e=this.getCurrentFocusedIndex();if(e>0&&this.listItems){this.currentFocusedItem=this.listItems[e-1],this.focusListItem(this.currentFocusedItem),this.toggleDropDown=!0;return}e===0&&this.focusSelectButton()}connectedCallback(){super.connectedCallback(),this.parseOptions(),this.addEventListener("keydown",this.handleDropdownNav)}parseOptions(){let e=[];if(typeof this.options=="string")try{const t=JSON.parse(this.options);Array.isArray(t)?e=t:e=[]}catch{e=[]}else e=this.options;if(this.selectedValue&&e.length>0){const{selectedValue:t}=this,a=e.reduce((r,s)=>(typeof s=="string"&&s===t?r.push(s):typeof s=="object"&&[s.value,s.name].includes(t)&&r.push(s.id),r),[]);this.selectedId=a.length>0?a[0]:void 0}return e}handleListItemClick(e){var s;e.stopPropagation();const t=e.currentTarget,a=(s=t==null?void 0:t.textContent)==null?void 0:s.trim(),r=t.getAttribute("id");this.selectedValue=a,this.selectedId=r||a,this.currentFocusedItem=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.selectedId,type:this.field,name:this.selectedValue}})),this.toggleDropDown=!this.toggleDropDown}getSelectedOption(e){return h`
      <${b}
        @pointerdown=${this.handleListItemClick}
        exportparts="${Object.values(_).join(",")}" 
        data-testid="enchanted-select-listitem"
        .isSelected=${typeof e=="string"?this.selectedValue===e:this.selectedId===(e==null?void 0:e.id)}
        key="${I()}"
        role="option"
        aria-selected="${(typeof e=="string"?this.selectedValue===e:this.selectedId===(e==null?void 0:e.id))?"true":"false"}"
        id="${typeof e=="string"?I():e.id||e}">
        ${typeof e=="string"?e:e.name||e}
      </${b}>
    `}async handleButtonClick(e){e.stopPropagation(),this.toggleDropDown=!this.toggleDropDown,await this.updateComplete&&this.toggleDropDown&&(this.listItems=Array.from(this.renderRoot.querySelectorAll(E)))}async handleButtonKeyDown(e){e.key===c.ESCAPE&&(e.preventDefault(),this.toggleDropDown=!1)}handleFocusOut(e){if(this.ignoreNextFocusOut){this.ignoreNextFocusOut=!1;return}const t=e.relatedTarget;t&&this.contains(t)||(this.toggleDropDown=!1)}handleRemoveLabelClick(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("remove",{bubbles:!0,detail:{type:this.field}}))}handleRemoveLabelClickByEnterKey(e){(e.key===c.ENTER||e.key===c.SPACE)&&(e.stopPropagation(),this.handleRemoveLabelClick(e))}async handleDropdownNav(e){var t;if(!(!this.toggleDropDown||!this.listItems))switch(this.focusListItem(this.currentFocusedItem),e.key){case c.ESCAPE:{e.preventDefault(),this.focusSelectButton(),this.toggleDropDown=!1;break}case c.TAB:{if(e.shiftKey){e.preventDefault(),this.focusPreviousListItem();break}else e.preventDefault(),this.focusNextListItem();break}case c.ARROW_DOWN:{e.preventDefault(),this.focusNextListItem();break}case c.ARROW_UP:{e.preventDefault(),this.focusPreviousListItem();break}case c.ENTER:if(e.preventDefault(),await this.updateComplete&&(this.listItems=Array.from(this.renderRoot.querySelectorAll(E))),this.currentFocusedItem){this.currentFocusedItem.click();const a=this.currentFocusedItem&&((t=this.currentFocusedItem.textContent)==null?void 0:t.trim()),r=this.currentFocusedItem.getAttribute("id");this.selectedValue=a,this.selectedId=r||a;const s=new CustomEvent("change",{detail:{value:this.selectedId,type:this.field,name:this.selectedValue}});this.dispatchEvent(s),this.toggleDropDown=!1,this.selectedValue=a}break}}render(){const e=this.parseOptions();let t=this.label;if(!t)switch(this.field){case u.DOCUMENT_OBJECT_TYPE:t=this.getMessage("input.select.placeholder.select.attribute");break;case u.ADD_SEARCH_FILTER:t=this.getMessage("input.select.placeholder.select.filter");break;case u.ADD_STATUS_FILTER:t=this.getMessage("input.select.placeholder.select.status");break;case u.CONTENT_SOURCE:t=this.getMessage("input.select.placeholder.select.content.source");break;case u.PAGINATION_ROWS:t=this.getMessage("output.table.footer.show.rows");break;case u.PAGINATION_PAGE:t=this.getMessage("output.table.footer.page");break;default:t=this.label}const a=this.alwaysShowPlaceholder?this.placeholder||"":this.selectedValue||this.placeholder||"";return h`
      <div part=${n.DIV} @focusout=${this.handleFocusOut} tabindex=-1>
        <div part=${n.DIV_LABEL}>
          ${this.hiddenLabel?d:h`
            <label data-testid="enchanted-select-label" 
              part=${this.disabled?`${n.LABEL} ${n.LABEL_DISABLED}`:n.LABEL} 
              tabindex="-1"
              id="label-${this.field}"
            >
              ${t}
            </label>
          `}
          ${this.showRemoveLabel?h`
            <label data-testid="enchanted-select-remove-label"
              part=${this.disabled?`${n.REMOVE_LABEL} ${n.REMOVE_LABEL_DISABLED}`:n.REMOVE_LABEL}
              tabindex=${this.disabled?"-1":"0"}
              @click=${this.disabled?d:this.handleRemoveLabelClick}
              @keydown=${this.disabled?d:this.handleRemoveLabelClickByEnterKey}
            >
              ${this.getMessage("advanced.search.remove")}
            </label>
          `:d}
        </div>
        <${y} 
          buttontext=${a}
          @click=${$.debounce(this.handleButtonClick,300)}
          @keydown=${this.handleButtonKeyDown}
          exportparts="${Object.values(v).join(",")}"
          data-testid="enchanted-select-button"
          variant="button"
          .icon="${this.hiddenIcon?d:h`<${D("icon-caret-down")} size="16" color="rgba(0, 0, 0, 0.60)"></${D("icon-caret-down")}>`}"
          ?endicon="${!0}"
          ?disabled=${this.disabled}
          id="button-${this.field}"
          ariaHaspopup="listbox"
          ariaExpanded="${this.toggleDropDown?"true":"false"}"
          ariaLabel="${this.ariaLabel}"
        >
        </${y}>
        ${!this.disabled&&this.toggleDropDown?h`
          <${L} exportparts=${C.UNORDERED_LIST} data-testid="enchanted-select-list" id="list-${this.field}" role="listbox"
            @mousedown=${()=>{this.ignoreNextFocusOut=!0}}
            >
            ${e.map(r=>this.getSelectedOption(r))}
          </${L}>
        `:d}
      </div>
    `}};o([g()],i.prototype,"toggleDropDown",2);o([g()],i.prototype,"listItems",2);o([g()],i.prototype,"currentFocusedItem",2);o([l({type:String})],i.prototype,"label",2);o([l({type:Boolean,reflect:!0})],i.prototype,"disabled",2);o([l()],i.prototype,"selectedValue",2);o([l()],i.prototype,"placeholder",2);o([l({type:Boolean})],i.prototype,"alwaysShowPlaceholder",2);o([l()],i.prototype,"selectedId",2);o([l()],i.prototype,"options",2);o([l()],i.prototype,"field",2);o([l({type:Boolean})],i.prototype,"hiddenLabel",2);o([l({type:Boolean})],i.prototype,"hiddenIcon",2);o([l({type:Boolean})],i.prototype,"showRemoveLabel",2);o([l({type:String})],i.prototype,"ariaLabel",2);i=o([T()],i);customElements.get(m)?O("Component (%s) is currently registered and not possible to registrate again.",m):customElements.define(m,i);
