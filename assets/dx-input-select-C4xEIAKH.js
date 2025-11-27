import{x as c,E as n}from"./iframe-BabVupQu.js";import{n as o,t as g,l as I,D as y,v as b}from"./dx-ac-base-element-CMZo8k64.js";import{r as m}from"./state-ByhEXiYs.js";import{l as D}from"./lodash-B-0SAclH.js";import"./dx-list-item-BicByrRC.js";import"./dx-button-BmdWVcw5.js";import{m as E,v as d,j as w,L}from"./cssClassEnums-ChRP0d8n.js";import{D as h}from"./dx-input-select-DRXt9p_b.js";import"./index-CybqXGk4.js";import{K as f}from"./keyboardEventKeys-BnoN8uA3.js";var v=Object.defineProperty,x=Object.getOwnPropertyDescriptor,l=(e,t,s,a)=>{for(var i=a>1?void 0:a?x(t,s):t,u=e.length-1,p;u>=0;u--)(p=e[u])&&(i=(a?p(t,s,i):p(i))||i);return a&&i&&v(t,s,i),i};let r=class extends y{constructor(){super(...arguments),this.toggleDropDown=!1,this.currentFocusedItem=void 0,this.label="",this.disabled=!1,this.alwaysShowPlaceholder=!1,this.options=[],this.field="",this.hiddenLabel=!1,this.hiddenIcon=!1,this.showRemoveLabel=!1,this.ariaLabel=""}connectedCallback(){super.connectedCallback(),this.parseOptions(),this.addEventListener("keydown",this.handleDropdownNav)}parseOptions(){let e=[];if(typeof this.options=="string")try{const t=JSON.parse(this.options);Array.isArray(t)?e=t:e=[]}catch{e=[]}else e=this.options;if(this.selectedValue&&e.length>0){const{selectedValue:t}=this,s=e.reduce((a,i)=>(typeof i=="string"&&i===t?a.push(i):typeof i=="object"&&[i.value,i.name].includes(t)&&a.push(i.id),a),[]);this.selectedId=s.length>0?s[0]:void 0}return e}handleListItemClick(e){var i;e.stopPropagation();const t=e.currentTarget,s=(i=t==null?void 0:t.textContent)==null?void 0:i.trim(),a=t.getAttribute("id");this.selectedValue=s,this.selectedId=a||s,this.currentFocusedItem=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.selectedId,type:this.field,name:this.selectedValue}})),this.toggleDropDown=!this.toggleDropDown}getSelectedOption(e){return c`
      <dx-list-item
        @pointerdown=${this.handleListItemClick}
        exportparts="${Object.values(E).join(",")}" 
        tabindex=0
        data-testid="dx-input-select-listitem"
        .isSelected=${typeof e=="string"?this.selectedValue===e:this.selectedId===(e==null?void 0:e.id)}
        key="${b()}"
        role="option"
        aria-selected="${(typeof e=="string"?this.selectedValue===e:this.selectedId===(e==null?void 0:e.id))?"true":"false"}"
        id="${typeof e=="string"?b():e.id||e}">
        ${typeof e=="string"?e:e.name||e}
      </dx-list-item>
    `}async handleButtonClick(e){e.stopPropagation(),this.toggleDropDown=!this.toggleDropDown,await this.updateComplete&&this.toggleDropDown&&(this.listItems=Array.from(this.renderRoot.querySelectorAll("dx-list-item")))}handleFocusOut(e){this.contains(e.relatedTarget)||(this.toggleDropDown=!1)}handleRemoveLabelClick(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("remove",{bubbles:!0,detail:{type:this.field}}))}handleRemoveLabelClickByEnterKey(e){(e.key===f.ENTER||e.key===f.SPACE)&&(e.stopPropagation(),this.handleRemoveLabelClick(e))}async handleDropdownNav(e){var t;if(!(!this.toggleDropDown||!this.listItems))switch(this.currentFocusedItem&&this.currentFocusedItem.focus(),e.key){case"ArrowDown":{e.preventDefault(),this.currentFocusedItem&&this.currentFocusedItem.focus();const s=this.currentFocusedItem?Array.from(this.listItems).indexOf(this.currentFocusedItem):-1;s<this.listItems.length-1&&(this.currentFocusedItem=Array.from(this.listItems)[s+1],this.currentFocusedItem.focus(),this.toggleDropDown=!0);break}case"ArrowUp":{e.preventDefault(),this.currentFocusedItem&&this.currentFocusedItem.focus();const s=this.currentFocusedItem?Array.from(this.listItems).indexOf(this.currentFocusedItem):-1;s>0&&(this.currentFocusedItem=Array.from(this.listItems)[s-1],this.currentFocusedItem.focus(),this.toggleDropDown=!0);break}case"Enter":if(e.preventDefault(),await this.updateComplete&&(this.listItems=Array.from(this.renderRoot.querySelectorAll("dx-list-item"))),this.currentFocusedItem){this.currentFocusedItem.click();const s=this.currentFocusedItem&&((t=this.currentFocusedItem.textContent)==null?void 0:t.trim()),a=this.currentFocusedItem.getAttribute("id");this.selectedValue=s,this.selectedId=a||s;const i=new CustomEvent("change",{detail:{value:this.selectedId,type:this.field,name:this.selectedValue}});this.dispatchEvent(i),this.toggleDropDown=!1,this.selectedValue=s}break}}render(){const e=this.parseOptions();let t=this.label;if(!t)switch(this.field){case h.DOCUMENT_OBJECT_TYPE:t=this.getMessage("input.select.placeholder.select.attribute");break;case h.ADD_SEARCH_FILTER:t=this.getMessage("input.select.placeholder.select.filter");break;case h.ADD_STATUS_FILTER:t=this.getMessage("input.select.placeholder.select.status");break;case h.CONTENT_SOURCE:t=this.getMessage("input.select.placeholder.select.content.source");break;case h.PAGINATION_ROWS:t=this.getMessage("output.table.footer.show.rows");break;case h.PAGINATION_PAGE:t=this.getMessage("output.table.footer.page");break;default:t=this.label}const s=this.alwaysShowPlaceholder?this.placeholder||"":this.selectedValue||this.placeholder||"";return c`
      <div part=${d.DIV} @focusout=${this.handleFocusOut} tabindex=-1>
        <div part=${d.DIV_LABEL}>
          ${this.hiddenLabel?n:c`
            <label data-testid="dx-input-select-label" 
              part=${this.disabled?`${d.LABEL} ${d.LABEL_DISABLED}`:d.LABEL} 
              tabindex="-1"
              id="label-${this.field}"
            >
              ${t}
            </label>
          `}
          ${this.showRemoveLabel?c`
            <label data-testid="dx-input-select-remove-label"
              part=${this.disabled?`${d.REMOVE_LABEL} ${d.REMOVE_LABEL_DISABLED}`:d.REMOVE_LABEL}
              tabindex=${this.disabled?"-1":"0"}
              @click=${this.disabled?n:this.handleRemoveLabelClick}
              @keydown=${this.disabled?n:this.handleRemoveLabelClickByEnterKey}
            >
              ${this.getMessage("advanced.search.remove")}
            </label>
          `:n}
        </div>
        <dx-button 
          buttontext=${s}
          @click=${D.debounce(this.handleButtonClick,300)}
          exportparts="${Object.values(w).join(",")}"
          data-testid="dx-input-select-button"
          variant="button"
          .icon="${this.hiddenIcon?n:c`<icon-caret-down size="16" color="rgba(0, 0, 0, 0.60)"></icon-caret-down>`}"
          ?endicon="${!0}"
          ?disabled=${this.disabled}
          id="button-${this.field}"
          ariaHaspopup="listbox"
          ariaExpanded="${this.toggleDropDown?"true":"false"}"
          ariaLabel="${this.ariaLabel}"
        >
        </dx-button>
        ${!this.disabled&&this.toggleDropDown?c`
          <dx-list exportparts=${L.UNORDERED_LIST} tabindex=0 data-testid="dx-input-select-list" id="list-${this.field}" role="listbox">
            ${e.map(a=>this.getSelectedOption(a))}
          </dx-list>
        `:n}
      </div>
    `}};l([m()],r.prototype,"toggleDropDown",2);l([m()],r.prototype,"listItems",2);l([m()],r.prototype,"currentFocusedItem",2);l([o({type:String})],r.prototype,"label",2);l([o({type:Boolean,reflect:!0})],r.prototype,"disabled",2);l([o()],r.prototype,"selectedValue",2);l([o()],r.prototype,"placeholder",2);l([o({type:Boolean})],r.prototype,"alwaysShowPlaceholder",2);l([o()],r.prototype,"selectedId",2);l([o()],r.prototype,"options",2);l([o()],r.prototype,"field",2);l([o({type:Boolean})],r.prototype,"hiddenLabel",2);l([o({type:Boolean})],r.prototype,"hiddenIcon",2);l([o({type:Boolean})],r.prototype,"showRemoveLabel",2);l([o({type:String})],r.prototype,"ariaLabel",2);r=l([g("dx-input-select"),I()],r);
