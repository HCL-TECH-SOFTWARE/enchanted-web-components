import{x as n,E as c}from"./iframe-g_dBLWCH.js";import{n as a,t as g,l as I,D as y,v as f}from"./dx-ac-base-element-Ba1nuzGa.js";import{r as m}from"./state-BrHRPonU.js";import{l as D}from"./lodash-CR4q0RmQ.js";import"./dx-list-item-YCtqzfuC.js";import"./dx-button-rc8nG4sK.js";import{m as E,v as d,j as w,L as v}from"./cssClassEnums-DKCjOuJT.js";import{D as h}from"./dx-input-select-DRXt9p_b.js";import"./index-C9ebTOpn.js";import{K as b}from"./keyboardEventKeys-BnoN8uA3.js";var A=Object.defineProperty,L=Object.getOwnPropertyDescriptor,o=(e,t,s,l)=>{for(var i=l>1?void 0:l?L(t,s):t,u=e.length-1,p;u>=0;u--)(p=e[u])&&(i=(l?p(t,s,i):p(i))||i);return l&&i&&A(t,s,i),i};let r=class extends y{constructor(){super(...arguments),this.toggleDropDown=!1,this.currentFocusedItem=void 0,this.label="",this.disabled=!1,this.alwaysShowPlaceholder=!1,this.options=[],this.field="",this.hiddenLabel=!1,this.hiddenIcon=!1,this.showRemoveLabel=!1}connectedCallback(){super.connectedCallback(),this.parseOptions(),this.addEventListener("keydown",this.handleDropdownNav)}parseOptions(){let e=[];if(typeof this.options=="string")try{const t=JSON.parse(this.options);Array.isArray(t)?e=t:e=[]}catch{e=[]}else e=this.options;if(this.selectedValue&&e.length>0){const{selectedValue:t}=this,s=e.reduce((l,i)=>(typeof i=="string"&&i===t?l.push(i):typeof i=="object"&&[i.value,i.name].includes(t)&&l.push(i.id),l),[]);this.selectedId=s.length>0?s[0]:void 0}return e}handleListItemClick(e){var i;e.stopPropagation();const t=e.currentTarget,s=(i=t==null?void 0:t.textContent)==null?void 0:i.trim(),l=t.getAttribute("id");this.selectedValue=s,this.selectedId=l||s,this.currentFocusedItem=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.selectedId,type:this.field,name:this.selectedValue}})),this.toggleDropDown=!this.toggleDropDown}getSelectedOption(e){return n`
      <dx-list-item
        @pointerdown=${this.handleListItemClick}
        exportparts="${Object.values(E).join(",")}" 
        tabindex=0
        data-testid="dx-input-select-listitem"
        .isSelected=${typeof e=="string"?this.selectedValue===e:this.selectedId===(e==null?void 0:e.id)}
        key="${f()}"
        id="${typeof e=="string"?f():e.id||e}">
        ${typeof e=="string"?e:e.name||e}
      </dx-list-item>
    `}async handleButtonClick(e){e.stopPropagation(),this.toggleDropDown=!this.toggleDropDown,await this.updateComplete&&this.toggleDropDown&&(this.listItems=Array.from(this.renderRoot.querySelectorAll("dx-list-item")))}handleFocusOut(e){this.contains(e.relatedTarget)||(this.toggleDropDown=!1)}handleRemoveLabelClick(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("remove",{bubbles:!0,detail:{type:this.field}}))}handleRemoveLabelClickByEnterKey(e){(e.key===b.ENTER||e.key===b.SPACE)&&(e.stopPropagation(),this.handleRemoveLabelClick(e))}async handleDropdownNav(e){var t;if(!(!this.toggleDropDown||!this.listItems))switch(this.currentFocusedItem&&this.currentFocusedItem.focus(),e.key){case"ArrowDown":{e.preventDefault(),this.currentFocusedItem&&this.currentFocusedItem.focus();const s=this.currentFocusedItem?Array.from(this.listItems).indexOf(this.currentFocusedItem):-1;s<this.listItems.length-1&&(this.currentFocusedItem=Array.from(this.listItems)[s+1],this.currentFocusedItem.focus(),this.toggleDropDown=!0);break}case"ArrowUp":{e.preventDefault(),this.currentFocusedItem&&this.currentFocusedItem.focus();const s=this.currentFocusedItem?Array.from(this.listItems).indexOf(this.currentFocusedItem):-1;s>0&&(this.currentFocusedItem=Array.from(this.listItems)[s-1],this.currentFocusedItem.focus(),this.toggleDropDown=!0);break}case"Enter":if(e.preventDefault(),await this.updateComplete&&(this.listItems=Array.from(this.renderRoot.querySelectorAll("dx-list-item"))),this.currentFocusedItem){this.currentFocusedItem.click();const s=this.currentFocusedItem&&((t=this.currentFocusedItem.textContent)==null?void 0:t.trim()),l=this.currentFocusedItem.getAttribute("id");this.selectedValue=s,this.selectedId=l||s;const i=new CustomEvent("change",{detail:{value:this.selectedId,type:this.field,name:this.selectedValue}});this.dispatchEvent(i),this.toggleDropDown=!1,this.selectedValue=s}break}}render(){const e=this.parseOptions();let t=this.label;if(!t)switch(this.field){case h.DOCUMENT_OBJECT_TYPE:t=this.getMessage("input.select.placeholder.select.attribute");break;case h.ADD_SEARCH_FILTER:t=this.getMessage("input.select.placeholder.select.filter");break;case h.ADD_STATUS_FILTER:t=this.getMessage("input.select.placeholder.select.status");break;case h.CONTENT_SOURCE:t=this.getMessage("input.select.placeholder.select.content.source");break;case h.PAGINATION_ROWS:t=this.getMessage("output.table.footer.show.rows");break;case h.PAGINATION_PAGE:t=this.getMessage("output.table.footer.page");break;default:t=this.label}const s=this.alwaysShowPlaceholder?this.placeholder||"":this.selectedValue||this.placeholder||"";return n`
      <div part=${d.DIV} @focusout=${this.handleFocusOut} tabindex=-1>
        <div part=${d.DIV_LABEL}>
          ${this.hiddenLabel?c:n`
            <label data-testid="dx-input-select-label" part=${this.disabled?`${d.LABEL} ${d.LABEL_DISABLED}`:d.LABEL} tabindex=-1">
              ${t}
            </label>
          `}
          ${this.showRemoveLabel?n`
            <label data-testid="dx-input-select-remove-label"
              part=${this.disabled?`${d.REMOVE_LABEL} ${d.REMOVE_LABEL_DISABLED}`:d.REMOVE_LABEL}
              tabindex=${this.disabled?"-1":"0"}
              @click=${this.disabled?c:this.handleRemoveLabelClick}
              @keydown=${this.disabled?c:this.handleRemoveLabelClickByEnterKey}
            >
              ${this.getMessage("advanced.search.remove")}
            </label>
          `:c}
        </div>
        <dx-button 
          buttontext=${s}
          @click=${D.debounce(this.handleButtonClick,300)}
          exportparts="${Object.values(w).join(",")}"
          data-testid="dx-input-select-button"
          variant="button"
          .icon="${this.hiddenIcon?c:n`<icon-caret-down size="16" color="rgba(0, 0, 0, 0.60)"></icon-caret-down>`}"
          ?endicon="${!0}"
          ?disabled=${this.disabled}
        >
        </dx-button>
        ${!this.disabled&&this.toggleDropDown?n`
          <dx-list exportparts=${v.UNORDERED_LIST} tabindex=0 data-testid="dx-input-select-list">
            ${e.map(l=>this.getSelectedOption(l))}
          </dx-list>
        `:c}
      </div>
    `}};o([m()],r.prototype,"toggleDropDown",2);o([m()],r.prototype,"listItems",2);o([m()],r.prototype,"currentFocusedItem",2);o([a({type:String})],r.prototype,"label",2);o([a({type:Boolean,reflect:!0})],r.prototype,"disabled",2);o([a()],r.prototype,"selectedValue",2);o([a()],r.prototype,"placeholder",2);o([a({type:Boolean})],r.prototype,"alwaysShowPlaceholder",2);o([a()],r.prototype,"selectedId",2);o([a()],r.prototype,"options",2);o([a()],r.prototype,"field",2);o([a({type:Boolean})],r.prototype,"hiddenLabel",2);o([a({type:Boolean})],r.prototype,"hiddenIcon",2);o([a({type:Boolean})],r.prototype,"showRemoveLabel",2);r=o([g("dx-input-select"),I()],r);
