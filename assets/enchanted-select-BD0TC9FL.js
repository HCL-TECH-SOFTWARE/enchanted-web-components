import{E as c}from"./iframe-C32rrkgB.js";import{c as T,a9 as m,E as w,Z as g,J as b,u as d,a1 as I,s as E,g as y,Y as D,n as l,l as $}from"./tags-xkLHt5Ez.js";import{r as f}from"./state-BMB52Uli.js";import{l as L}from"./lodash-DfIfhbli.js";import"./enchanted-list-item-DOwADzBf.js";import"./enchanted-button-CPwlhnNb.js";import{l as _,G as n,k as v,L as O}from"./cssClassEnums-WDBe4U61.js";import{E as h}from"./enchanted-select-Ge91KUgI.js";import"./index-BXDeOjP2.js";import{K as A}from"./keyboardEventKeys-BnoN8uA3.js";var C=Object.defineProperty,N=Object.getOwnPropertyDescriptor,r=(e,t,s,o)=>{for(var i=o>1?void 0:o?N(t,s):t,u=e.length-1,p;u>=0;u--)(p=e[u])&&(i=(o?p(t,s,i):p(i))||i);return o&&i&&C(t,s,i),i};const S=T("enchanted-web-components:components:atomic-component:enchanted-select.ts");let a=class extends w{constructor(){super(...arguments),this.toggleDropDown=!1,this.currentFocusedItem=void 0,this.label="",this.disabled=!1,this.alwaysShowPlaceholder=!1,this.options=[],this.field="",this.hiddenLabel=!1,this.hiddenIcon=!1,this.showRemoveLabel=!1,this.ariaLabel="",this.ignoreNextFocusOut=!1}connectedCallback(){super.connectedCallback(),this.parseOptions(),this.addEventListener("keydown",this.handleDropdownNav)}parseOptions(){let e=[];if(typeof this.options=="string")try{const t=JSON.parse(this.options);Array.isArray(t)?e=t:e=[]}catch{e=[]}else e=this.options;if(this.selectedValue&&e.length>0){const{selectedValue:t}=this,s=e.reduce((o,i)=>(typeof i=="string"&&i===t?o.push(i):typeof i=="object"&&[i.value,i.name].includes(t)&&o.push(i.id),o),[]);this.selectedId=s.length>0?s[0]:void 0}return e}handleListItemClick(e){var i;e.stopPropagation();const t=e.currentTarget,s=(i=t==null?void 0:t.textContent)==null?void 0:i.trim(),o=t.getAttribute("id");this.selectedValue=s,this.selectedId=o||s,this.currentFocusedItem=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.selectedId,type:this.field,name:this.selectedValue}})),this.toggleDropDown=!this.toggleDropDown}getSelectedOption(e){return d`
      <${g}
        @pointerdown=${this.handleListItemClick}
        exportparts="${Object.values(_).join(",")}" 
        tabindex=0
        data-testid="enchanted-select-listitem"
        .isSelected=${typeof e=="string"?this.selectedValue===e:this.selectedId===(e==null?void 0:e.id)}
        key="${b()}"
        role="option"
        aria-selected="${(typeof e=="string"?this.selectedValue===e:this.selectedId===(e==null?void 0:e.id))?"true":"false"}"
        id="${typeof e=="string"?b():e.id||e}">
        ${typeof e=="string"?e:e.name||e}
      </${g}>
    `}async handleButtonClick(e){e.stopPropagation(),this.toggleDropDown=!this.toggleDropDown,await this.updateComplete&&this.toggleDropDown&&(this.listItems=Array.from(this.renderRoot.querySelectorAll(I)))}handleFocusOut(e){if(this.ignoreNextFocusOut){this.ignoreNextFocusOut=!1;return}const t=e.relatedTarget;t&&this.contains(t)||(this.toggleDropDown=!1)}handleRemoveLabelClick(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("remove",{bubbles:!0,detail:{type:this.field}}))}handleRemoveLabelClickByEnterKey(e){(e.key===A.ENTER||e.key===A.SPACE)&&(e.stopPropagation(),this.handleRemoveLabelClick(e))}async handleDropdownNav(e){var t;if(!(!this.toggleDropDown||!this.listItems))switch(this.currentFocusedItem&&this.currentFocusedItem.focus(),e.key){case"ArrowDown":{e.preventDefault(),this.currentFocusedItem&&this.currentFocusedItem.focus();const s=this.currentFocusedItem?Array.from(this.listItems).indexOf(this.currentFocusedItem):-1;s<this.listItems.length-1&&(this.currentFocusedItem=Array.from(this.listItems)[s+1],this.currentFocusedItem.focus(),this.toggleDropDown=!0);break}case"ArrowUp":{e.preventDefault(),this.currentFocusedItem&&this.currentFocusedItem.focus();const s=this.currentFocusedItem?Array.from(this.listItems).indexOf(this.currentFocusedItem):-1;s>0&&(this.currentFocusedItem=Array.from(this.listItems)[s-1],this.currentFocusedItem.focus(),this.toggleDropDown=!0);break}case"Enter":if(e.preventDefault(),await this.updateComplete&&(this.listItems=Array.from(this.renderRoot.querySelectorAll(I))),this.currentFocusedItem){this.currentFocusedItem.click();const s=this.currentFocusedItem&&((t=this.currentFocusedItem.textContent)==null?void 0:t.trim()),o=this.currentFocusedItem.getAttribute("id");this.selectedValue=s,this.selectedId=o||s;const i=new CustomEvent("change",{detail:{value:this.selectedId,type:this.field,name:this.selectedValue}});this.dispatchEvent(i),this.toggleDropDown=!1,this.selectedValue=s}break}}render(){const e=this.parseOptions();let t=this.label;if(!t)switch(this.field){case h.DOCUMENT_OBJECT_TYPE:t=this.getMessage("input.select.placeholder.select.attribute");break;case h.ADD_SEARCH_FILTER:t=this.getMessage("input.select.placeholder.select.filter");break;case h.ADD_STATUS_FILTER:t=this.getMessage("input.select.placeholder.select.status");break;case h.CONTENT_SOURCE:t=this.getMessage("input.select.placeholder.select.content.source");break;case h.PAGINATION_ROWS:t=this.getMessage("output.table.footer.show.rows");break;case h.PAGINATION_PAGE:t=this.getMessage("output.table.footer.page");break;default:t=this.label}const s=this.alwaysShowPlaceholder?this.placeholder||"":this.selectedValue||this.placeholder||"";return d`
      <div part=${n.DIV} @focusout=${this.handleFocusOut} tabindex=-1>
        <div part=${n.DIV_LABEL}>
          ${this.hiddenLabel?c:d`
            <label data-testid="enchanted-select-label" 
              part=${this.disabled?`${n.LABEL} ${n.LABEL_DISABLED}`:n.LABEL} 
              tabindex="-1"
              id="label-${this.field}"
            >
              ${t}
            </label>
          `}
          ${this.showRemoveLabel?d`
            <label data-testid="enchanted-select-remove-label"
              part=${this.disabled?`${n.REMOVE_LABEL} ${n.REMOVE_LABEL_DISABLED}`:n.REMOVE_LABEL}
              tabindex=${this.disabled?"-1":"0"}
              @click=${this.disabled?c:this.handleRemoveLabelClick}
              @keydown=${this.disabled?c:this.handleRemoveLabelClickByEnterKey}
            >
              ${this.getMessage("advanced.search.remove")}
            </label>
          `:c}
        </div>
        <${E} 
          buttontext=${s}
          @click=${L.debounce(this.handleButtonClick,300)}
          exportparts="${Object.values(v).join(",")}"
          data-testid="enchanted-select-button"
          variant="button"
          .icon="${this.hiddenIcon?c:d`<${y("icon-caret-down")} size="16" color="rgba(0, 0, 0, 0.60)"></${y("icon-caret-down")}>`}"
          ?endicon="${!0}"
          ?disabled=${this.disabled}
          id="button-${this.field}"
          ariaHaspopup="listbox"
          ariaExpanded="${this.toggleDropDown?"true":"false"}"
          ariaLabel="${this.ariaLabel}"
        >
        </${E}>
        ${!this.disabled&&this.toggleDropDown?d`
          <${D} exportparts=${O.UNORDERED_LIST} tabindex=0 data-testid="enchanted-select-list" id="list-${this.field}" role="listbox"
            @mousedown=${()=>{this.ignoreNextFocusOut=!0}}>
            ${e.map(o=>this.getSelectedOption(o))}
          </${D}>
        `:c}
      </div>
    `}};r([f()],a.prototype,"toggleDropDown",2);r([f()],a.prototype,"listItems",2);r([f()],a.prototype,"currentFocusedItem",2);r([l({type:String})],a.prototype,"label",2);r([l({type:Boolean,reflect:!0})],a.prototype,"disabled",2);r([l()],a.prototype,"selectedValue",2);r([l()],a.prototype,"placeholder",2);r([l({type:Boolean})],a.prototype,"alwaysShowPlaceholder",2);r([l()],a.prototype,"selectedId",2);r([l()],a.prototype,"options",2);r([l()],a.prototype,"field",2);r([l({type:Boolean})],a.prototype,"hiddenLabel",2);r([l({type:Boolean})],a.prototype,"hiddenIcon",2);r([l({type:Boolean})],a.prototype,"showRemoveLabel",2);r([l({type:String})],a.prototype,"ariaLabel",2);a=r([$()],a);customElements.get(m)?S("Component (%s) is currently registered and not possible to registrate again.",m):customElements.define(m,a);
