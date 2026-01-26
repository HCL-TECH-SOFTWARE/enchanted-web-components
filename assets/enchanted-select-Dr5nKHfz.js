import{x as d,E as c}from"./iframe-Bl462ZXk.js";import{n as o,t as g,l as I,E as y,v as f}from"./enchanted-ac-base-element-D6hCixC-.js";import{r as m}from"./state-BWRILggY.js";import{l as E}from"./lodash-DkmKKxq-.js";import"./enchanted-list-item-CnYnccbC.js";import"./enchanted-button-CJx4Ai-m.js";import{l as D,y as n,k as w,L}from"./cssClassEnums-DRCAaF3v.js";import{E as h}from"./enchanted-select-Ge91KUgI.js";import"./index-BAo8ZX5T.js";import{K as b}from"./keyboardEventKeys-BnoN8uA3.js";var v=Object.defineProperty,A=Object.getOwnPropertyDescriptor,a=(e,t,s,l)=>{for(var i=l>1?void 0:l?A(t,s):t,u=e.length-1,p;u>=0;u--)(p=e[u])&&(i=(l?p(t,s,i):p(i))||i);return l&&i&&v(t,s,i),i};let r=class extends y{constructor(){super(...arguments),this.toggleDropDown=!1,this.currentFocusedItem=void 0,this.label="",this.disabled=!1,this.alwaysShowPlaceholder=!1,this.options=[],this.field="",this.hiddenLabel=!1,this.hiddenIcon=!1,this.showRemoveLabel=!1,this.ariaLabel="",this.ignoreNextFocusOut=!1}connectedCallback(){super.connectedCallback(),this.parseOptions(),this.addEventListener("keydown",this.handleDropdownNav)}parseOptions(){let e=[];if(typeof this.options=="string")try{const t=JSON.parse(this.options);Array.isArray(t)?e=t:e=[]}catch{e=[]}else e=this.options;if(this.selectedValue&&e.length>0){const{selectedValue:t}=this,s=e.reduce((l,i)=>(typeof i=="string"&&i===t?l.push(i):typeof i=="object"&&[i.value,i.name].includes(t)&&l.push(i.id),l),[]);this.selectedId=s.length>0?s[0]:void 0}return e}handleListItemClick(e){var i;e.stopPropagation();const t=e.currentTarget,s=(i=t==null?void 0:t.textContent)==null?void 0:i.trim(),l=t.getAttribute("id");this.selectedValue=s,this.selectedId=l||s,this.currentFocusedItem=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.selectedId,type:this.field,name:this.selectedValue}})),this.toggleDropDown=!this.toggleDropDown}getSelectedOption(e){return d`
      <enchanted-list-item
        @pointerdown=${this.handleListItemClick}
        exportparts="${Object.values(D).join(",")}" 
        tabindex=0
        data-testid="enchanted-select-listitem"
        .isSelected=${typeof e=="string"?this.selectedValue===e:this.selectedId===(e==null?void 0:e.id)}
        key="${f()}"
        role="option"
        aria-selected="${(typeof e=="string"?this.selectedValue===e:this.selectedId===(e==null?void 0:e.id))?"true":"false"}"
        id="${typeof e=="string"?f():e.id||e}">
        ${typeof e=="string"?e:e.name||e}
      </enchanted-list-item>
    `}async handleButtonClick(e){e.stopPropagation(),this.toggleDropDown=!this.toggleDropDown,await this.updateComplete&&this.toggleDropDown&&(this.listItems=Array.from(this.renderRoot.querySelectorAll("enchanted-list-item")))}handleFocusOut(e){if(this.ignoreNextFocusOut){this.ignoreNextFocusOut=!1;return}const t=e.relatedTarget;t&&this.contains(t)||(this.toggleDropDown=!1)}handleRemoveLabelClick(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("remove",{bubbles:!0,detail:{type:this.field}}))}handleRemoveLabelClickByEnterKey(e){(e.key===b.ENTER||e.key===b.SPACE)&&(e.stopPropagation(),this.handleRemoveLabelClick(e))}async handleDropdownNav(e){var t;if(!(!this.toggleDropDown||!this.listItems))switch(this.currentFocusedItem&&this.currentFocusedItem.focus(),e.key){case"ArrowDown":{e.preventDefault(),this.currentFocusedItem&&this.currentFocusedItem.focus();const s=this.currentFocusedItem?Array.from(this.listItems).indexOf(this.currentFocusedItem):-1;s<this.listItems.length-1&&(this.currentFocusedItem=Array.from(this.listItems)[s+1],this.currentFocusedItem.focus(),this.toggleDropDown=!0);break}case"ArrowUp":{e.preventDefault(),this.currentFocusedItem&&this.currentFocusedItem.focus();const s=this.currentFocusedItem?Array.from(this.listItems).indexOf(this.currentFocusedItem):-1;s>0&&(this.currentFocusedItem=Array.from(this.listItems)[s-1],this.currentFocusedItem.focus(),this.toggleDropDown=!0);break}case"Enter":if(e.preventDefault(),await this.updateComplete&&(this.listItems=Array.from(this.renderRoot.querySelectorAll("enchanted-list-item"))),this.currentFocusedItem){this.currentFocusedItem.click();const s=this.currentFocusedItem&&((t=this.currentFocusedItem.textContent)==null?void 0:t.trim()),l=this.currentFocusedItem.getAttribute("id");this.selectedValue=s,this.selectedId=l||s;const i=new CustomEvent("change",{detail:{value:this.selectedId,type:this.field,name:this.selectedValue}});this.dispatchEvent(i),this.toggleDropDown=!1,this.selectedValue=s}break}}render(){const e=this.parseOptions();let t=this.label;if(!t)switch(this.field){case h.DOCUMENT_OBJECT_TYPE:t=this.getMessage("input.select.placeholder.select.attribute");break;case h.ADD_SEARCH_FILTER:t=this.getMessage("input.select.placeholder.select.filter");break;case h.ADD_STATUS_FILTER:t=this.getMessage("input.select.placeholder.select.status");break;case h.CONTENT_SOURCE:t=this.getMessage("input.select.placeholder.select.content.source");break;case h.PAGINATION_ROWS:t=this.getMessage("output.table.footer.show.rows");break;case h.PAGINATION_PAGE:t=this.getMessage("output.table.footer.page");break;default:t=this.label}const s=this.alwaysShowPlaceholder?this.placeholder||"":this.selectedValue||this.placeholder||"";return d`
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
        <enchanted-button 
          buttontext=${s}
          @click=${E.debounce(this.handleButtonClick,300)}
          exportparts="${Object.values(w).join(",")}"
          data-testid="enchanted-select-button"
          variant="button"
          .icon="${this.hiddenIcon?c:d`<icon-caret-down size="16" color="rgba(0, 0, 0, 0.60)"></icon-caret-down>`}"
          ?endicon="${!0}"
          ?disabled=${this.disabled}
          id="button-${this.field}"
          ariaHaspopup="listbox"
          ariaExpanded="${this.toggleDropDown?"true":"false"}"
          ariaLabel="${this.ariaLabel}"
        >
        </enchanted-button>
        ${!this.disabled&&this.toggleDropDown?d`
          <enchanted-list exportparts=${L.UNORDERED_LIST} tabindex=0 data-testid="enchanted-select-list" id="list-${this.field}" role="listbox"
            @mousedown=${()=>{this.ignoreNextFocusOut=!0}}>
            ${e.map(l=>this.getSelectedOption(l))}
          </enchanted-list>
        `:c}
      </div>
    `}};a([m()],r.prototype,"toggleDropDown",2);a([m()],r.prototype,"listItems",2);a([m()],r.prototype,"currentFocusedItem",2);a([o({type:String})],r.prototype,"label",2);a([o({type:Boolean,reflect:!0})],r.prototype,"disabled",2);a([o()],r.prototype,"selectedValue",2);a([o()],r.prototype,"placeholder",2);a([o({type:Boolean})],r.prototype,"alwaysShowPlaceholder",2);a([o()],r.prototype,"selectedId",2);a([o()],r.prototype,"options",2);a([o()],r.prototype,"field",2);a([o({type:Boolean})],r.prototype,"hiddenLabel",2);a([o({type:Boolean})],r.prototype,"hiddenIcon",2);a([o({type:Boolean})],r.prototype,"showRemoveLabel",2);a([o({type:String})],r.prototype,"ariaLabel",2);r=a([g("enchanted-select"),I()],r);
