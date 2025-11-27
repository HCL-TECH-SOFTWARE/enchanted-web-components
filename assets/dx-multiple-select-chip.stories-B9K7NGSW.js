import{x as n,E as h}from"./iframe-BabVupQu.js";import{n as d,t as N,l as P,D as R,v as V}from"./dx-ac-base-element-CMZo8k64.js";import{r as m}from"./state-ByhEXiYs.js";import{l as k}from"./lodash-B-0SAclH.js";import"./dx-chip-C3T44FAl.js";import"./dx-button-BmdWVcw5.js";import{n as l,m as F,C as U,j as M,L as B}from"./cssClassEnums-ChRP0d8n.js";import{I as q}from"./exportParts-BXxV9uDV.js";import{K as i}from"./keyboardEventKeys-BnoN8uA3.js";import"./index-CybqXGk4.js";import"./index-QhWu6i7R.js";import"./index-5-7qAOYB.js";import{c as O,B as S,t as A}from"./index-B_E2F3xT.js";import"./preload-helper-C1FmrZbK.js";import"./localization-2aoGzCSL.js";var g={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M16,2C8.2,2,2,8.2,2,16s6.2,14,14,14s14-6.2,14-14S23.8,2,16,2z M21.4,23L16,17.6L10.6,23L9,21.4l5.4-5.4L9,10.6L10.6,9	l5.4,5.4L21.4,9l1.6,1.6L17.6,16l5.4,5.4L21.4,23z"}},{elem:"path",attrs:{d:"M14.4 16L9 10.6 10.6 9 16 14.4 21.4 9 23 10.6 17.6 16 23 21.4 21.4 23 16 17.6 10.6 23 9 21.4 14.4 16","data-icon-path":"inner-path",opacity:"0"}}],name:"close--filled",size:32};const E="icon-close-filled";let H=class extends S{render(){return n`${A({...g,attrs:{...g.attrs,preserveAspectRatio:"xMidYMid"}})}`}};O&&!customElements.get(E)&&customElements.define(E,H);var D={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"}}],name:"checkmark",size:32};const x="icon-checkmark";class W extends S{render(){return n`${A({...D,attrs:{...D.attrs,preserveAspectRatio:"xMidYMid"}})}`}}O&&!customElements.get(x)&&customElements.define(x,W);var j=Object.defineProperty,K=Object.getOwnPropertyDescriptor,r=(e,t,s,a)=>{for(var p=a>1?void 0:a?K(t,s):t,f=e.length-1,I;f>=0;f--)(I=e[f])&&(p=(a?I(t,s,p):I(p))||p);return a&&p&&j(t,s,p),p};let o=class extends R{constructor(){super(...arguments),this.toggleDropDown=!1,this.currentFocusedItem=void 0,this.inputValue="",this.onInputHover=!1,this.isInputFocused=!1,this.isClearAllIconFocused=!1,this.disabled=!1,this.showHelperText=!1,this.helperText="",this.name="multiple-select",this.selectedValues=[],this.options=[],this.field="",this.showRemoveLabel=!1,this.emptyOptions=!1,this.clearIcon=!0,this.error=!1,this.placeholder=this.getMessage("authoring.multi.select.placeholder"),this.label=this.getMessage("authoring.multi.select.label"),this.handleOutsideClick=e=>{const t=e.target;!this.contains(t)&&this.toggleDropDown&&(this.toggleDropDown=!1,this.inputValue="",this.requestUpdate())}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.handleDropdownNav),document.addEventListener("click",this.handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.handleDropdownNav),document.removeEventListener("click",this.handleOutsideClick)}handleListItemClick(e){var I;e.stopPropagation();const t=e.currentTarget,s=(I=t.textContent)==null?void 0:I.trim(),a=t.getAttribute("id")||s;if(!a||!s)return;if(this.selectedValues.find(u=>u.id===a))this.selectedValues=this.selectedValues.filter(u=>u.id!==a);else{const u=this.options.find(_=>_.id===a);u&&(this.selectedValues=[...this.selectedValues,{id:u.id,name:u.name,value:u.value}])}this.inputValue="",this.toggleDropDown=!0;const f=this.renderRoot.querySelector(`#${l.INPUT_FIELD}`);f&&f.focus(),this.currentFocusedItem=t,this.dispatchChangeEvent(),this.requestUpdate()}handleChipRemove(e,t){e.stopPropagation(),this.selectedValues=this.selectedValues.filter(a=>a.id!==t),this.dispatchChangeEvent(),this.requestUpdate();const s=this.renderRoot.querySelector(`#${l.INPUT_FIELD}`);s&&s.focus()}handleClearAll(){const e=this.toggleDropDown;this.selectedValues=[],this.inputValue="",this.dispatchChangeEvent(),this.toggleDropDown=e,this.requestUpdate();const t=this.renderRoot.querySelector(`#${l.INPUT_FIELD}`);t&&t.focus()}handleInput(e){e.stopPropagation();const t=e.target;this.inputValue=t.value,this.toggleDropDown||(this.toggleDropDown=!0),this.dispatchEvent(new CustomEvent("input",{detail:{value:this.inputValue,type:this.field},bubbles:!0,composed:!0}))}getDivInputParts(){let e=l.INPUT_CONTAINER;return this.disabled&&(e=`${e} ${l.INPUT_CONTAINER_DISABLED}`),e}handleInputKeyDown(e){e.stopPropagation(),e.key===i.ENTER||e.key===i.SPACE?(e.preventDefault(),this.disabled||(this.emptyOptions&&this.inputValue&&e.key===i.ENTER?(this.selectedValues=[...this.selectedValues,{id:this.inputValue,name:this.inputValue,value:this.inputValue}],this.inputValue="",this.dispatchChangeEvent(),this.requestUpdate()):(this.toggleDropDown=!this.toggleDropDown,this.toggleDropDown&&(this.listItems=Array.from(this.renderRoot.querySelectorAll("dx-list-item")),this.listItems.length>0&&(this.currentFocusedItem=this.listItems[0],this.currentFocusedItem.focus())),this.requestUpdate()))):(e.key===i.BACKSPACE||e.key===i.DELETE)&&!this.inputValue&&this.selectedValues.length>0?(this.selectedValues=this.selectedValues.slice(0,-1),this.dispatchChangeEvent(),this.requestUpdate()):e.key===i.ARROW_DOWN&&this.toggleDropDown?(e.preventDefault(),this.listItems=Array.from(this.renderRoot.querySelectorAll("dx-list-item")),this.listItems.length>0&&(this.currentFocusedItem=this.listItems[0],this.currentFocusedItem.focus())):e.key===i.ESCAPE&&this.toggleDropDown&&(e.preventDefault(),this.toggleDropDown=!1)}dispatchChangeEvent(){const e=this.selectedValues.map(t=>({id:t.id,name:t.name||t.id,value:t.value||t.id}));this.dispatchEvent(new CustomEvent("change",{detail:{value:e,type:this.field}})),this.toggleDropDown=!1}async handleButtonClick(e){e.stopPropagation(),!this.disabled&&(this.toggleDropDown=!this.toggleDropDown,await this.updateComplete&&this.toggleDropDown&&(this.listItems=Array.from(this.renderRoot.querySelectorAll("dx-list-item")),this.listItems.length>0&&(this.currentFocusedItem=this.listItems[0],this.currentFocusedItem.focus())))}handleInputContainerClick(e){e.stopPropagation();const t=this.renderRoot.querySelector(`#${l.INPUT_FIELD}`);t&&!this.disabled&&e.target!==this.renderRoot.querySelector(`#${l.CLEAR}`)&&(t.focus(),this.toggleDropDown=!this.toggleDropDown,this.requestUpdate())}async handleDropdownNav(e){if(e.key===i.ESCAPE&&this.toggleDropDown){e.preventDefault(),this.toggleDropDown=!1,this.requestUpdate();const t=this.renderRoot.querySelector(`#${l.INPUT_FIELD}`);t&&t.focus();return}if(!(!this.toggleDropDown||!this.listItems))switch(e.key){case i.ARROW_DOWN:{e.preventDefault(),this.listItems=Array.from(this.renderRoot.querySelectorAll("dx-list-item"));const t=this.currentFocusedItem?this.listItems.indexOf(this.currentFocusedItem):-1;t<this.listItems.length-1&&(this.currentFocusedItem=this.listItems[t+1],this.currentFocusedItem.focus(),this.toggleDropDown=!0);break}case i.ARROW_UP:{e.preventDefault();const t=this.currentFocusedItem?this.listItems.indexOf(this.currentFocusedItem):-1;t>0&&(this.currentFocusedItem=this.listItems[t-1],this.currentFocusedItem.focus(),this.toggleDropDown=!0);break}case i.ENTER:{e.preventDefault(),await this.updateComplete&&(this.listItems=Array.from(this.renderRoot.querySelectorAll("dx-list-item"))),this.currentFocusedItem&&this.currentFocusedItem.click();break}}}handleRemoveLabelClick(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("remove",{bubbles:!0,detail:{name:this.name,type:this.field}}))}getOptionName(e){return typeof e=="string"?e:e.name||e.id}handleOnMouseOver(e){e.stopPropagation(),e.preventDefault(),this.onInputHover=!0,this.requestUpdate()}handleOnMouseOut(e){e.stopPropagation(),this.onInputHover=!1,this.requestUpdate()}getPartClearAllIcon(){return(this.onInputHover||this.isInputFocused||this.isClearAllIconFocused)&&this.selectedValues.length>0?l.CLEAR_ALL_ICON:l.CLEAR_ALL_ICON_HIDDEN}getSelectedOption(e){const t=typeof e=="string"?e:e.id||e.name;return n`
    <dx-list-item
      @pointerdown=${this.handleListItemClick}
      @keydown=${s=>{(s.key===i.ENTER||s.key===i.SPACE)&&(s.preventDefault(),this.handleListItemClick(s))}}
      exportparts="${Object.values(F).join(",")}"
      tabindex="0"
      data-testid="dx-multi-select-listitem"
      role="option"
      aria-selected="${this.selectedValues.some(s=>s.id===t)}"
      key="${V()}"
      id="${t}"
      class="${this.selectedValues.some(s=>s.id===t)?"selected":""}"
    >
      <div part="${l.LIST_ITEM_CONTENT}">
        <div
          class="${this.selectedValues.some(s=>s.id===t)?l.CHECKMARK:l.CHECKMARK_PLACEHOLDER}"
          part="${this.selectedValues.some(s=>s.id===t)?l.CHECKMARK:l.CHECKMARK_PLACEHOLDER}"
        >
          ${this.selectedValues.some(s=>s.id===t)?n`<icon-checkmark size="16" alt="Selected" color="rgba(0, 0, 0, 0.60)"></icon-checkmark>`:h}
        </div>
        <div part="${l.LIST_ITEMS}">
          ${this.getOptionName(e)}
        </div>
      </div>
    </dx-list-item>
  `}renderChips(){return n`
    ${this.selectedValues.map(e=>{const{id:t,name:s=""}=e;return n`
        <dx-chip
          name="${s}"
          ?clearIcon=${this.clearIcon}
          data-testid="dx-multiple-select-chip"
          exportparts="${Object.values(U).join(",")}"
          title="${s}"
          ?disabled=${this.disabled}
        >
          ${this.clearIcon?n`
                <span
                  slot="${l.CLEAR_ICON}"
                  part="${this.disabled?`${l.CLEAR_ICON_DISABLED} ${l.CLEAR_ICON}`:l.CLEAR_ICON}"
                  data-testid="clear-icon"
                  tabindex=${this.disabled?"-1":"0"}
                  @keydown=${a=>{(a.key===i.ENTER||a.key===i.SPACE)&&(a.preventDefault(),this.handleChipRemove(a,t))}}
                  @click=${a=>this.handleChipRemove(a,t)}
                >
                  <icon-close size="16" alt="Clear icon" color="rgba(0, 0, 0, 0.60)"></icon-close>
                </span>
              `:h}
        </dx-chip>
      `})}
  `}render(){const e=this.inputValue?this.options.filter(t=>this.getOptionName(t).toLowerCase().includes(this.inputValue.toLowerCase())):this.options;return n`
    <div
      part="${l.TOP_CONTAINER_DIV}"
      tabindex="-1"
      style=${this.customWidth?`width: ${this.customWidth}px;`:"width:100%"}
    > <div part="${l.MULTIPLE_SELECT_DIV_LABEL_AND_REMOVE}">
        <label
          data-testid="dx-multi-select-label"
          part="${[l.LABEL,this.disabled?l.MULTIPLE_SELECT_LABEL_DISABLED:"",this.isInputFocused?l.LABEL_FOCUS:""].filter(Boolean).join(" ")}"
          for="${l.INPUT_FIELD}"
        >${this.label}</label>
        ${this.showRemoveLabel?n`
          <label data-testid="multiple-select-remove-label"
            tabindex=${this.disabled?"-1":"0"}
            aria-disabled=${this.disabled}
            part="${this.disabled?`${l.MULTIPLE_SELECT_REMOVE_LABEL} ${l.MULTIPLE_SELECT_REMOVE_LABEL_DISABLED}`:l.MULTIPLE_SELECT_REMOVE_LABEL}"
            @click=${this.disabled?h:this.handleRemoveLabelClick}
            @keydown=${t=>{this.disabled||(t.key===i.ENTER||t.key===i.SPACE)&&(t.preventDefault(),this.handleRemoveLabelClick(t))}}
          >
            ${this.getMessage("advanced.search.remove")}
          </label>
         `:h}

      </div>
      <div
        id="${this.getDivInputParts()}"
        part="${this.getDivInputParts()}"
        ?disabled=${this.disabled}
        role="combobox"
        aria-expanded="${this.toggleDropDown}"
        aria-controls="dx-multi-select-list"
        @mouseenter=${this.handleOnMouseOver} 
				@mouseleave=${this.handleOnMouseOut} 
        @click=${t=>{document.querySelectorAll("dx-multiple-select-chip").forEach(s=>{s!==this&&s.toggleDropDown&&(s.toggleDropDown=!1)}),this.handleInputContainerClick(t)}}
        @keydown=${t=>{if((t.key===i.ENTER||t.key===i.SPACE)&&!this.disabled){t.preventDefault(),this.toggleDropDown=!this.toggleDropDown,this.toggleDropDown&&(this.listItems=Array.from(this.renderRoot.querySelectorAll("dx-list-item")),this.listItems.length>0&&(this.currentFocusedItem=this.listItems[0],this.currentFocusedItem.focus()));const s=this.renderRoot.querySelector(`#${l.INPUT_FIELD}`);s&&s.focus(),this.requestUpdate()}}}
      >
        <div
          part="${l.CHIP_AND_INPUT_CONTAINER}"
        >
          ${this.renderChips()}
          <input
            id="${l.INPUT_FIELD}"
            type="text"
            .value=${this.inputValue}
            @input=${this.handleInput}
            @keydown=${this.handleInputKeyDown}
            @focus=${()=>{this.isInputFocused=!0}}
            @blur=${()=>{this.isInputFocused=!1}}
            ?disabled=${this.disabled}
            placeholder=${this.placeholder}
            aria-autocomplete="list"
            aria-controls="dx-multi-select-list"
            part=${this.inputValue?`${l.INPUT_TEXT} ${l.MULTIPLE_SELECT_INPUT_DEFAULT}`:l.INPUT_TEXT}
          />
        </div>
        <div part="${l.CLEAR_AND_ICON_CONTAINER}">
          ${this.selectedValues.length>0?n`
              <dx-icon-button
                part="${this.getPartClearAllIcon()}"
                .icon="${n`<icon-close-filled size="16" color="rgba(0, 0, 0, 0.60)"></icon-close-filled>`}"
                title="${l.CLEAR}"
                id="${l.CLEAR}"
                data-testid="dx-multi-select-clear-all-button"
                role="button"
                aria-label=${this.getMessage("authoring.multi.select.clear.chip")}
                tabindex="0"
                ?disabled="${this.disabled}"
                @click=${t=>{t.stopPropagation(),k.debounce(this.handleClearAll.bind(this),300)()}}
                @keydown=${t=>{(t.key===i.ENTER||t.key===i.SPACE)&&(t.preventDefault(),t.stopPropagation(),this.handleClearAll())}}
                @focus=${()=>{this.isClearAllIconFocused=!0,this.requestUpdate()}}
                @blur=${()=>{this.isClearAllIconFocused=!1,this.requestUpdate()}}
                exportparts="${Object.values(q).join(",")}"
              >
              </dx-icon-button>
            `:h}
          <dx-button
            @click=${t=>{document.querySelectorAll("dx-multiple-select-chip").forEach(s=>{s!==this&&s.toggleDropDown&&(s.toggleDropDown=!1)}),this.handleButtonClick(t)}}
          
            @keydown=${t=>{if((t.key===i.ENTER||t.key===i.SPACE)&&(t.preventDefault(),this.handleButtonClick(t)),t.key===i.TAB&&this.toggleDropDown){this.toggleDropDown=!1;return}}}
            exportparts="${Object.values(M).join(",")}"
            data-testid="dx-multi-select-button"
            variant="button"
            .icon="${this.toggleDropDown?n`<icon-caret-up size="16" color="rgba(0, 0, 0, 0.60)"></icon-caret-up>`:n`<icon-caret-down size="16" color="rgba(0, 0, 0, 0.60)"></icon-caret-down>`}" 
            ?endicon="${!0}"
            ?disabled="${this.disabled}"
            aria-label=${this.getMessage("authoring.multi.select.toggle.dropdown")}
            role="button"
          ></dx-button>
        </div>
      </div>
      ${this.toggleDropDown?n`
            <dx-list
              exportparts="${B.UNORDERED_LIST}"
              style=${this.customWidth?`width: ${this.customWidth}px;`:h}
              id="dx-multi-select-list"
              role="listbox"
              aria-multiselectable="true"
              tabindex="-1"
              data-testid="dx-multi-select-list"
              @click=${t=>t.stopPropagation()}
            >
              ${e.length>0?e.map(t=>this.getSelectedOption(t)):n`
                <dx-list-item
                  part="${l.NO_LIST_ITEM}"
                  data-testid="dx-multi-select-listitem-no-options"
                  role="option"
                  aria-disabled="true"
                >
                  <div part="${l.LIST_ITEM_NO_CONTENT}">
                    No options
                  </div>
                </dx-list-item>
              `}
            </dx-list>
          `:h}
        ${this.showHelperText?n`<div part="${l.HELPER_TEXT}" aria-label="${this.helperText}">${this.helperText}</div>`:h}
    </div>
  `}};r([m()],o.prototype,"toggleDropDown",2);r([m()],o.prototype,"listItems",2);r([m()],o.prototype,"currentFocusedItem",2);r([m()],o.prototype,"inputValue",2);r([m()],o.prototype,"onInputHover",2);r([m()],o.prototype,"isInputFocused",2);r([m()],o.prototype,"isClearAllIconFocused",2);r([d({type:Boolean})],o.prototype,"disabled",2);r([d({type:Boolean})],o.prototype,"showHelperText",2);r([d({type:String})],o.prototype,"helperText",2);r([d({type:String})],o.prototype,"name",2);r([d({type:Array})],o.prototype,"selectedValues",2);r([d({type:Array})],o.prototype,"options",2);r([d({type:String})],o.prototype,"field",2);r([d({type:Boolean})],o.prototype,"showRemoveLabel",2);r([d({type:Boolean})],o.prototype,"emptyOptions",2);r([d({type:Boolean})],o.prototype,"clearIcon",2);r([d({type:Boolean})],o.prototype,"error",2);r([d({type:String})],o.prototype,"customWidth",2);r([d({type:String})],o.prototype,"placeholder",2);r([d({type:String})],o.prototype,"label",2);o=r([N("dx-multiple-select-chip"),P()],o);const c=[{id:"apple",name:"Apple",value:"apple"},{id:"banana",name:"Banana",value:"banana"},{id:"cherry",name:"Cherry",value:"cherry"},{id:"date",name:"Date",value:"date"}],ce={title:"Input/dx-multiple-select-chip",tags:["autodocs"],argTypes:{options:{control:"object",description:"Selectable options",table:{defaultValue:{summary:"[]"}}},selectedValues:{control:"object",description:"Selected options",table:{defaultValue:{summary:"[]"}}},label:{control:"text",description:"Input label",table:{defaultValue:{summary:""}}},placeholder:{control:"text",description:"Input placeholder",table:{defaultValue:{summary:""}}},disabled:{control:"boolean",description:"Disabled",table:{defaultValue:{summary:"false"}}},error:{control:"boolean",description:"Error",table:{defaultValue:{summary:"false"}}},showHelperText:{control:"boolean",description:"Show helper text",table:{defaultValue:{summary:"false"}}},helperText:{control:"text",description:"Helper text",table:{defaultValue:{summary:""}}},showRemoveLabel:{control:"boolean",description:"Show remove label",table:{defaultValue:{summary:"false"}}},emptyOptions:{control:"boolean",description:"Show as empty",table:{defaultValue:{summary:"false"}}},clearIcon:{control:"boolean",description:"Show clear icon",table:{defaultValue:{summary:"true"}}},customWidth:{control:"text",description:"Custom width",table:{defaultValue:{summary:""}}}},args:{options:c,selectedValues:[],label:"Fruits",placeholder:"Select fruits",disabled:!1,error:!1,showHelperText:!1,helperText:"",showRemoveLabel:!1,emptyOptions:!1,clearIcon:!0,customWidth:""},render:e=>n`
      <dx-multiple-select-chip
        .options=${e.options}
        .selectedValues=${e.selectedValues}
        label="${e.label}"
        placeholder="${e.placeholder}"
        ?disabled=${e.disabled}
        ?error=${e.error}
        ?showHelperText=${e.showHelperText}
        helperText="${e.helperText}"
        ?showRemoveLabel=${e.showRemoveLabel}
        ?emptyOptions=${e.emptyOptions}
        ?clearIcon=${e.clearIcon}
        customWidth="${e.customWidth}"
      ></dx-multiple-select-chip>
    `},$={},b={render:()=>n`
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 600px;">
        <dx-multiple-select-chip
          .options=${c}
          .selectedValues=${[c[0],c[1]]}
          label="Default (with chips)"
          placeholder="Select fruits"
        ></dx-multiple-select-chip>
        <dx-multiple-select-chip
          .options=${c}
          .selectedValues=${[]}
          label="Default (no chips)"
          placeholder="Select fruits"
        ></dx-multiple-select-chip>
        <dx-multiple-select-chip
          .options=${c}
          .selectedValues=${[c[2]]}
          label="Disabled"
          ?disabled=${!0}
          placeholder="Select fruits"
        ></dx-multiple-select-chip>
        <dx-multiple-select-chip
          .options=${c}
          .selectedValues=${[c[3]]}
          label="Error"
          ?error=${!0}
          placeholder="Select fruits"
        ></dx-multiple-select-chip>
        <dx-multiple-select-chip
          .options=${c}
          .selectedValues=${[c[0]]}
          label="With Helper Text"
          ?showHelperText=${!0}
          helperText="You can select multiple fruits."
          placeholder="Select fruits"
        ></dx-multiple-select-chip>
        <dx-multiple-select-chip
          .options=${[]}
          .selectedValues=${[]}
          label="Empty Options"
          ?emptyOptions=${!0}
          placeholder="No options available"
        ></dx-multiple-select-chip>
        <dx-multiple-select-chip
          .options=${c}
          .selectedValues=${[c[1]]}
          label="Custom Width"
          customWidth="300"
          placeholder="Select fruits"
        ></dx-multiple-select-chip>
        <dx-multiple-select-chip
          .options=${c}
          .selectedValues=${[c[0]]}
          label="With Remove Label"
          ?showRemoveLabel=${!0}
          placeholder="Select fruits"
        ></dx-multiple-select-chip>
      </div>
    `};var y,C,T;$.parameters={...$.parameters,docs:{...(y=$.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(T=(C=$.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var v,w,L;b.parameters={...b.parameters,docs:{...(v=b.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 600px;">
        <dx-multiple-select-chip
          .options=\${OPTIONS}
          .selectedValues=\${[OPTIONS[0], OPTIONS[1]]}
          label="Default (with chips)"
          placeholder="Select fruits"
        ></dx-multiple-select-chip>
        <dx-multiple-select-chip
          .options=\${OPTIONS}
          .selectedValues=\${[]}
          label="Default (no chips)"
          placeholder="Select fruits"
        ></dx-multiple-select-chip>
        <dx-multiple-select-chip
          .options=\${OPTIONS}
          .selectedValues=\${[OPTIONS[2]]}
          label="Disabled"
          ?disabled=\${true}
          placeholder="Select fruits"
        ></dx-multiple-select-chip>
        <dx-multiple-select-chip
          .options=\${OPTIONS}
          .selectedValues=\${[OPTIONS[3]]}
          label="Error"
          ?error=\${true}
          placeholder="Select fruits"
        ></dx-multiple-select-chip>
        <dx-multiple-select-chip
          .options=\${OPTIONS}
          .selectedValues=\${[OPTIONS[0]]}
          label="With Helper Text"
          ?showHelperText=\${true}
          helperText="You can select multiple fruits."
          placeholder="Select fruits"
        ></dx-multiple-select-chip>
        <dx-multiple-select-chip
          .options=\${[]}
          .selectedValues=\${[]}
          label="Empty Options"
          ?emptyOptions=\${true}
          placeholder="No options available"
        ></dx-multiple-select-chip>
        <dx-multiple-select-chip
          .options=\${OPTIONS}
          .selectedValues=\${[OPTIONS[1]]}
          label="Custom Width"
          customWidth="300"
          placeholder="Select fruits"
        ></dx-multiple-select-chip>
        <dx-multiple-select-chip
          .options=\${OPTIONS}
          .selectedValues=\${[OPTIONS[0]]}
          label="With Remove Label"
          ?showRemoveLabel=\${true}
          placeholder="Select fruits"
        ></dx-multiple-select-chip>
      </div>
    \`;
  }
}`,...(L=(w=b.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};const de=["Default","AllStates"];export{b as AllStates,$ as Default,de as __namedExportsOrder,ce as default};
