import{c as M,a0 as C,E as R,a1 as f,Z as _,J as k,g as u,u as d,t as L,s as y,z as S,Y as g,n as p,l as G,a2 as i}from"./tags-xkLHt5Ez.js";import{x as W,E}from"./iframe-C32rrkgB.js";import{r as T}from"./state-BMB52Uli.js";import{l as B}from"./lodash-DfIfhbli.js";import"./index-C1VNAMok.js";import"./enchanted-button-CPwlhnNb.js";import{r as l,l as q,C as z,k as j,L as K}from"./cssClassEnums-WDBe4U61.js";import{I as X}from"./exportParts-B-kKZm-x.js";import{K as n}from"./keyboardEventKeys-BnoN8uA3.js";import"./index-BXDeOjP2.js";import"./index-B9i2sBsz.js";import"./index-DwWyfVsa.js";import{t as Y}from"./index-CuTRIAwF.js";import{c as J,I as Z,B as Q}from"./tags-DNNghoUc.js";import"./preload-helper-C1FmrZbK.js";import"./enchanted-avatar-DEfUp3hY.js";import"./localization-BszdroIW.js";var N={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M16,2C8.2,2,2,8.2,2,16s6.2,14,14,14s14-6.2,14-14S23.8,2,16,2z M21.4,23L16,17.6L10.6,23L9,21.4l5.4-5.4L9,10.6L10.6,9	l5.4,5.4L21.4,9l1.6,1.6L17.6,16l5.4,5.4L21.4,23z"}},{elem:"path",attrs:{d:"M14.4 16L9 10.6 10.6 9 16 14.4 21.4 9 23 10.6 17.6 16 23 21.4 21.4 23 16 17.6 10.6 23 9 21.4 14.4 16","data-icon-path":"inner-path",opacity:"0"}}],name:"close--filled",size:32};const D=`${Z}icon-close-filled`;class ee extends Q{render(){return W`${Y({...N,attrs:{...N.attrs,preserveAspectRatio:"xMidYMid"}})}`}}J&&!customElements.get(D)&&customElements.define(D,ee);var te=Object.defineProperty,se=Object.getOwnPropertyDescriptor,r=(e,t,a,c)=>{for(var h=c>1?void 0:c?se(t,a):t,$=e.length-1,I;$>=0;$--)(I=e[$])&&(h=(c?I(t,a,h):I(h))||h);return c&&h&&te(t,a,h),h};const le=M("enchanted-web-components:components:atomic-component:enchanted-multiple-select-chip.ts");let o=class extends R{constructor(){super(...arguments),this.toggleDropDown=!1,this.currentFocusedItem=void 0,this.inputValue="",this.onInputHover=!1,this.isInputFocused=!1,this.isClearAllIconFocused=!1,this.disabled=!1,this.showHelperText=!1,this.helperText="",this.name="multiple-select",this.selectedValues=[],this.options=[],this.field="",this.showRemoveLabel=!1,this.emptyOptions=!1,this.clearIcon=!0,this.placeholder=this.getMessage("authoring.multi.select.placeholder"),this.label=this.getMessage("authoring.multi.select.label"),this.handleOutsideClick=e=>{const t=e.target;!this.contains(t)&&this.toggleDropDown&&(this.toggleDropDown=!1,this.inputValue="",this.requestUpdate())}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.handleDropdownNav),document.addEventListener("click",this.handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.handleDropdownNav),document.removeEventListener("click",this.handleOutsideClick)}handleListItemClick(e){var I;e.stopPropagation();const t=e.currentTarget,a=(I=t.textContent)==null?void 0:I.trim(),c=t.getAttribute("id")||a;if(!c||!a)return;if(this.selectedValues.find(m=>m.id===c))this.selectedValues=this.selectedValues.filter(m=>m.id!==c);else{const m=this.options.find(U=>U.id===c);m&&(this.selectedValues=[...this.selectedValues,{id:m.id,name:m.name,value:m.value}])}this.inputValue="",this.toggleDropDown=!0;const $=this.renderRoot.querySelector(`#${l.INPUT_FIELD}`);$&&$.focus(),this.currentFocusedItem=t,this.dispatchChangeEvent(),this.requestUpdate()}handleChipRemove(e,t){e.stopPropagation(),this.selectedValues=this.selectedValues.filter(c=>c.id!==t),this.dispatchChangeEvent(),this.requestUpdate();const a=this.renderRoot.querySelector(`#${l.INPUT_FIELD}`);a&&a.focus()}handleClearAll(){const e=this.toggleDropDown;this.selectedValues=[],this.inputValue="",this.dispatchChangeEvent(),this.toggleDropDown=e,this.requestUpdate();const t=this.renderRoot.querySelector(`#${l.INPUT_FIELD}`);t&&t.focus()}handleInput(e){e.stopPropagation();const t=e.target;this.inputValue=t.value,this.toggleDropDown||(this.toggleDropDown=!0),this.dispatchEvent(new CustomEvent("input",{detail:{value:this.inputValue,type:this.field},bubbles:!0,composed:!0}))}getDivInputParts(){let e=l.INPUT_CONTAINER;return this.disabled&&(e=`${e} ${l.INPUT_CONTAINER_DISABLED}`),e}handleInputKeyDown(e){e.stopPropagation(),e.key===n.ENTER||e.key===n.SPACE?(e.preventDefault(),this.disabled||(this.emptyOptions&&this.inputValue&&e.key===n.ENTER?(this.selectedValues=[...this.selectedValues,{id:this.inputValue,name:this.inputValue,value:this.inputValue}],this.inputValue="",this.dispatchChangeEvent(),this.requestUpdate()):(this.toggleDropDown=!this.toggleDropDown,this.toggleDropDown&&(this.listItems=Array.from(this.renderRoot.querySelectorAll(f)),this.listItems.length>0&&(this.currentFocusedItem=this.listItems[0],this.currentFocusedItem.focus())),this.requestUpdate()))):(e.key===n.BACKSPACE||e.key===n.DELETE)&&!this.inputValue&&this.selectedValues.length>0?(this.selectedValues=this.selectedValues.slice(0,-1),this.dispatchChangeEvent(),this.requestUpdate()):e.key===n.ARROW_DOWN&&this.toggleDropDown?(e.preventDefault(),this.listItems=Array.from(this.renderRoot.querySelectorAll(f)),this.listItems.length>0&&(this.currentFocusedItem=this.listItems[0],this.currentFocusedItem.focus())):e.key===n.ESCAPE&&this.toggleDropDown&&(e.preventDefault(),this.toggleDropDown=!1)}dispatchChangeEvent(){const e=this.selectedValues.map(t=>({id:t.id,name:t.name||t.id,value:t.value||t.id}));this.dispatchEvent(new CustomEvent("change",{detail:{value:e,type:this.field}})),this.toggleDropDown=!1}async handleButtonClick(e){e.stopPropagation(),!this.disabled&&(this.toggleDropDown=!this.toggleDropDown,await this.updateComplete&&this.toggleDropDown&&(this.listItems=Array.from(this.renderRoot.querySelectorAll(f)),this.listItems.length>0&&(this.currentFocusedItem=this.listItems[0],this.currentFocusedItem.focus())))}handleInputContainerClick(e){e.stopPropagation();const t=this.renderRoot.querySelector(`#${l.INPUT_FIELD}`);t&&!this.disabled&&e.target!==this.renderRoot.querySelector(`#${l.CLEAR}`)&&(t.focus(),this.toggleDropDown=!this.toggleDropDown,this.requestUpdate())}async handleDropdownNav(e){if(e.key===n.ESCAPE&&this.toggleDropDown){e.preventDefault(),this.toggleDropDown=!1,this.requestUpdate();const t=this.renderRoot.querySelector(`#${l.INPUT_FIELD}`);t&&t.focus();return}if(!(!this.toggleDropDown||!this.listItems))switch(e.key){case n.ARROW_DOWN:{e.preventDefault(),this.listItems=Array.from(this.renderRoot.querySelectorAll(f));const t=this.currentFocusedItem?this.listItems.indexOf(this.currentFocusedItem):-1;t<this.listItems.length-1&&(this.currentFocusedItem=this.listItems[t+1],this.currentFocusedItem.focus(),this.toggleDropDown=!0);break}case n.ARROW_UP:{e.preventDefault();const t=this.currentFocusedItem?this.listItems.indexOf(this.currentFocusedItem):-1;t>0&&(this.currentFocusedItem=this.listItems[t-1],this.currentFocusedItem.focus(),this.toggleDropDown=!0);break}case n.ENTER:{e.preventDefault(),await this.updateComplete&&(this.listItems=Array.from(this.renderRoot.querySelectorAll(f))),this.currentFocusedItem&&this.currentFocusedItem.click();break}}}handleRemoveLabelClick(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("remove",{bubbles:!0,detail:{name:this.name,type:this.field}}))}getOptionName(e){return typeof e=="string"?e:e.name||e.id}handleOnMouseOver(e){e.stopPropagation(),e.preventDefault(),this.onInputHover=!0,this.requestUpdate()}handleOnMouseOut(e){e.stopPropagation(),this.onInputHover=!1,this.requestUpdate()}getPartClearAllIcon(){return(this.onInputHover||this.isInputFocused||this.isClearAllIconFocused)&&this.selectedValues.length>0?l.CLEAR_ALL_ICON:l.CLEAR_ALL_ICON_HIDDEN}getSelectedOption(e){const t=typeof e=="string"?e:e.id||e.name;return d`
    <${_}
      @pointerdown=${this.handleListItemClick}
      @keydown=${a=>{(a.key===n.ENTER||a.key===n.SPACE)&&(a.preventDefault(),this.handleListItemClick(a))}}
      exportparts="${Object.values(q).join(",")}"
      tabindex="0"
      data-testid="enchanted-multi-select-listitem"
      role="option"
      aria-selected="${this.selectedValues.some(a=>a.id===t)}"
      key="${k()}"
      id="${t}"
      class="${this.selectedValues.some(a=>a.id===t)?"selected":""}"
    >
      <div part="${l.LIST_ITEM_CONTENT}">
        <div
          class="${this.selectedValues.some(a=>a.id===t)?l.CHECKMARK:l.CHECKMARK_PLACEHOLDER}"
          part="${this.selectedValues.some(a=>a.id===t)?l.CHECKMARK:l.CHECKMARK_PLACEHOLDER}"
        >
          ${this.selectedValues.some(a=>a.id===t)?d`<${u("icon-checkmark")} size="16" alt="Selected" color="rgba(0, 0, 0, 0.60)"></${u("icon-checkmark")}>`:E}
        </div>
        <div part="${l.LIST_ITEMS}">
          ${this.getOptionName(e)}
        </div>
      </div>
    </${_}>
  `}renderChips(){return d`
    ${this.selectedValues.map(e=>{const{id:t,name:a=""}=e;return d`
        <${L}
          name="${a}"
          ?clearIcon=${this.clearIcon}
          data-testid="enchanted-multiple-select-chip"
          exportparts="${Object.values(z).join(",")}"
          title="${a}"
          ?disabled=${this.disabled}
        >
          ${this.clearIcon?d`
                <span
                  slot="${l.CLEAR_ICON}"
                  part="${this.disabled?`${l.CLEAR_ICON_DISABLED} ${l.CLEAR_ICON}`:l.CLEAR_ICON}"
                  data-testid="clear-icon"
                  tabindex=${this.disabled?"-1":"0"}
                  @keydown=${c=>{(c.key===n.ENTER||c.key===n.SPACE)&&(c.preventDefault(),this.handleChipRemove(c,t))}}
                  @click=${c=>this.handleChipRemove(c,t)}
                >
                  <${u("icon-close")} size="16" alt="Clear icon" color="rgba(0, 0, 0, 0.60)"></${u("icon-close")}>
                </span>
              `:E}
        </${L}>
      `})}
  `}render(){const e=this.inputValue?this.options.filter(t=>this.getOptionName(t).toLowerCase().includes(this.inputValue.toLowerCase())):this.options;return d`
    <div
      part="${l.TOP_CONTAINER_DIV}"
      tabindex="-1"
      style=${this.customWidth?`width: ${this.customWidth}px;`:"width:100%"}
    > <div part="${l.MULTIPLE_SELECT_DIV_LABEL_AND_REMOVE}">
        <label
          data-testid="enchanted-multi-select-label"
          part="${[l.LABEL,this.disabled?l.MULTIPLE_SELECT_LABEL_DISABLED:"",this.isInputFocused?l.LABEL_FOCUS:""].filter(Boolean).join(" ")}"
          for="${l.INPUT_FIELD}"
        >${this.label}</label>
        ${this.showRemoveLabel?d`
          <label data-testid="multiple-select-remove-label"
            tabindex=${this.disabled?"-1":"0"}
            aria-disabled=${this.disabled}
            part="${this.disabled?`${l.MULTIPLE_SELECT_REMOVE_LABEL} ${l.MULTIPLE_SELECT_REMOVE_LABEL_DISABLED}`:l.MULTIPLE_SELECT_REMOVE_LABEL}"
            @click=${this.disabled?E:this.handleRemoveLabelClick}
            @keydown=${t=>{this.disabled||(t.key===n.ENTER||t.key===n.SPACE)&&(t.preventDefault(),this.handleRemoveLabelClick(t))}}
          >
            ${this.getMessage("advanced.search.remove")}
          </label>
         `:E}

      </div>
      <div
        id="${this.getDivInputParts()}"
        part="${this.getDivInputParts()}"
        ?disabled=${this.disabled}
        role="combobox"
        aria-expanded="${this.toggleDropDown}"
        aria-controls="enchanted-multi-select-list"
        @mouseenter=${this.handleOnMouseOver} 
				@mouseleave=${this.handleOnMouseOut} 
        @click=${t=>{document.querySelectorAll(C).forEach(a=>{a!==this&&a.toggleDropDown&&(a.toggleDropDown=!1)}),this.handleInputContainerClick(t)}}
        @keydown=${t=>{if((t.key===n.ENTER||t.key===n.SPACE)&&!this.disabled){t.preventDefault(),this.toggleDropDown=!this.toggleDropDown,this.toggleDropDown&&(this.listItems=Array.from(this.renderRoot.querySelectorAll("enchanted-list-item")),this.listItems.length>0&&(this.currentFocusedItem=this.listItems[0],this.currentFocusedItem.focus()));const a=this.renderRoot.querySelector(`#${l.INPUT_FIELD}`);a&&a.focus(),this.requestUpdate()}}}
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
            aria-controls="enchanted-multi-select-list"
            part=${this.inputValue?`${l.INPUT_TEXT} ${l.MULTIPLE_SELECT_INPUT_DEFAULT}`:l.INPUT_TEXT}
          />
        </div>
        <div part="${l.CLEAR_AND_ICON_CONTAINER}">
          ${this.selectedValues.length>0?d`
              <${S}
                part="${this.getPartClearAllIcon()}"
                .icon="${d`<${u("icon-close-filled")} size="16" color="rgba(0, 0, 0, 0.60)"></${u("icon-close-filled")}>`}"
                title="${l.CLEAR}"
                id="${l.CLEAR}"
                data-testid="enchanted-multi-select-clear-all-button"
                role="button"
                aria-label=${this.getMessage("authoring.multi.select.clear.chip")}
                tabindex="0"
                ?disabled="${this.disabled}"
                @click=${t=>{t.stopPropagation(),B.debounce(this.handleClearAll.bind(this),300)()}}
                @keydown=${t=>{(t.key===n.ENTER||t.key===n.SPACE)&&(t.preventDefault(),t.stopPropagation(),this.handleClearAll())}}
                @focus=${()=>{this.isClearAllIconFocused=!0,this.requestUpdate()}}
                @blur=${()=>{this.isClearAllIconFocused=!1,this.requestUpdate()}}
                exportparts="${Object.values(X).join(",")}"
              >
              </${S}>
            `:E}
          <${y}
            @click=${t=>{document.querySelectorAll(C).forEach(a=>{a!==this&&a.toggleDropDown&&(a.toggleDropDown=!1)}),this.handleButtonClick(t)}}
          
            @keydown=${t=>{if((t.key===n.ENTER||t.key===n.SPACE)&&(t.preventDefault(),this.handleButtonClick(t)),t.key===n.TAB&&this.toggleDropDown){this.toggleDropDown=!1;return}}}
            exportparts="${Object.values(j).join(",")}"
            data-testid="enchanted-multi-select-button"
            variant="button"
            .icon="${this.toggleDropDown?d`<${u("icon-caret-up")} size="16" color="rgba(0, 0, 0, 0.60)"></${u("icon-caret-up")}>`:d`<${u("icon-caret-down")} size="16" color="rgba(0, 0, 0, 0.60)"></${u("icon-caret-down")}>`}" 
            ?endicon="${!0}"
            ?disabled="${this.disabled}"
            aria-label=${this.getMessage("authoring.multi.select.toggle.dropdown")}
            role="button"
          ></${y}>
        </div>
      </div>
      ${this.toggleDropDown?d`
            <${g}
              exportparts="${K.UNORDERED_LIST}"
              style=${this.customWidth?`width: ${this.customWidth}px;`:E}
              id="enchanted-multi-select-list"
              role="listbox"
              aria-multiselectable="true"
              tabindex="-1"
              data-testid="enchanted-multi-select-list"
              @click=${t=>t.stopPropagation()}
            >
              ${e.length>0?e.map(t=>this.getSelectedOption(t)):d`
                <${_}
                  part="${l.NO_LIST_ITEM}"
                  data-testid="enchanted-multi-select-listitem-no-options"
                  role="option"
                  aria-disabled="true"
                >
                  <div part="${l.LIST_ITEM_NO_CONTENT}">
                    No options
                  </div>
                </${_}>
              `}
            </${g}>
          `:E}
        ${this.showHelperText?d`<div part="${l.HELPER_TEXT}" aria-label="${this.helperText}">${this.helperText}</div>`:E}
    </div>
  `}};r([T()],o.prototype,"toggleDropDown",2);r([T()],o.prototype,"listItems",2);r([T()],o.prototype,"currentFocusedItem",2);r([T()],o.prototype,"inputValue",2);r([T()],o.prototype,"onInputHover",2);r([T()],o.prototype,"isInputFocused",2);r([T()],o.prototype,"isClearAllIconFocused",2);r([p({type:Boolean})],o.prototype,"disabled",2);r([p({type:Boolean})],o.prototype,"showHelperText",2);r([p({type:String})],o.prototype,"helperText",2);r([p({type:String})],o.prototype,"name",2);r([p({type:Array})],o.prototype,"selectedValues",2);r([p({type:Array})],o.prototype,"options",2);r([p({type:String})],o.prototype,"field",2);r([p({type:Boolean})],o.prototype,"showRemoveLabel",2);r([p({type:Boolean})],o.prototype,"emptyOptions",2);r([p({type:Boolean})],o.prototype,"clearIcon",2);r([p({type:String})],o.prototype,"customWidth",2);r([p({type:String})],o.prototype,"placeholder",2);r([p({type:String})],o.prototype,"label",2);o=r([G()],o);customElements.get(C)?le("Component (%s) is currently registered and not possible to registrate again.",C):customElements.define(C,o);const s=[{id:"apple",name:"Apple",value:"apple"},{id:"banana",name:"Banana",value:"banana"},{id:"cherry",name:"Cherry",value:"cherry"},{id:"date",name:"Date",value:"date"}],Ce={title:"Input/enchanted-multiple-select-chip",component:"enchanted-multiple-select-chip",tags:["autodocs"],parameters:{docs:{description:{component:"The Multiple Select Chip component allows users to select multiple options from a dropdown menu, displaying selections as removable chips. Features include search/filter, clear all functionality, helper text, error states, and custom styling. Use this component for multi-selection scenarios like tags, categories, or filtering where visual representation of selections is important."}}},argTypes:{options:{control:{type:"object"},description:"Array of available options for selection. Each option should have id, name, and value properties. Options populate the dropdown menu.",table:{category:"Content",type:{summary:"OptionData[]"},defaultValue:{summary:"[]"}}},selectedValues:{control:{type:"object"},description:"Array of currently selected options displayed as chips. Each selection appears as a removable chip above the input field.",table:{category:"State",type:{summary:"OptionData[]"},defaultValue:{summary:"[]"}}},label:{control:{type:"text"},description:"Label text displayed above the input field. Provides context for what users are selecting. Uses localized default if not specified.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:"localized"}}},placeholder:{control:{type:"text"},description:"Placeholder text shown in the input when empty. Guides users on what to select. Uses localized default if not specified.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:"localized"}}},disabled:{control:{type:"boolean"},description:"Disables the entire component including input field, chips, and all interactions. Visual styling indicates disabled state.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},showHelperText:{control:{type:"boolean"},description:"Shows helper text below the input field. Must be true for helperText to display. Used for instructions or error messages.",table:{category:"Display",type:{summary:"boolean"},defaultValue:{summary:"false"}}},helperText:{control:{type:"text"},description:"Helper text content displayed below input when showHelperText is true. Provides guidance, hints, or validation feedback.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},showRemoveLabel:{control:{type:"boolean"},description:"Shows accessible remove label on chip close buttons. Improves accessibility by providing text description for screen readers.",table:{category:"Accessibility",type:{summary:"boolean"},defaultValue:{summary:"false"}}},emptyOptions:{control:{type:"boolean"},description:"Indicates empty options state. When true, displays appropriate empty state messaging instead of the dropdown list.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},clearIcon:{control:{type:"boolean"},description:"Shows clear all icon button when selections exist. Allows users to quickly remove all selected chips with one click.",table:{category:"Display",type:{summary:"boolean"},defaultValue:{summary:"true"}}},customWidth:{control:{type:"number"},description:"Custom width value for the component. Can be specified in pixels or other CSS units. Overrides default width behavior.",table:{category:"Styling",type:{summary:"number"},defaultValue:{summary:"240"}}},name:{control:{type:"text"},description:'Form field name attribute. Used for form submission and identification. Defaults to "multiple-select" if not specified.',table:{category:"Form",type:{summary:"string"},defaultValue:{summary:"multiple-select"}}},field:{control:{type:"text"},description:"Field type configuration string. Used for specialized field behavior or styling based on usage context.",table:{category:"Form",type:{summary:"string"},defaultValue:{summary:""}}}},args:{options:s,selectedValues:[],label:"Fruits",placeholder:"Select fruits",disabled:!1,showHelperText:!1,helperText:"",showRemoveLabel:!1,emptyOptions:!1,clearIcon:!0,customWidth:"",name:"multiple-select",field:""}},v={name:"Default",render:e=>d`
      <${i}
        .options=${e.options}
        .selectedValues=${e.selectedValues}
        label="${e.label}"
        placeholder="${e.placeholder}"
        ?disabled=${e.disabled}
        ?showHelperText=${e.showHelperText}
        helperText="${e.helperText}"
        ?showRemoveLabel=${e.showRemoveLabel}
        ?emptyOptions=${e.emptyOptions}
        ?clearIcon=${e.clearIcon}
        customWidth="${e.customWidth}"
        name="${e.name}"
        field="${e.field}"
      ></${i}>
    `},b={parameters:{controls:{disable:!0}},render:()=>d`
      <style>
        .select-container {
          display: flex;
          flex-direction: column;
          gap: 32px;
          padding: 20px;
          max-width: 600px;
        }
        .select-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .select-section h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
        }
        .select-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .select-label {
          font-size: 12px;
          color: #666;
        }
      </style>

      <div class="select-container">
        <!-- Default States -->
        <div class="select-section">
          <h3>Default States</h3>
          <div class="select-item">
            <span class="select-label">No selections</span>
            <${i}
              .options=${s}
              .selectedValues=${[]}
              label="Fruits"
              placeholder="Select fruits"
            ></${i}>
          </div>
          <div class="select-item">
            <span class="select-label">Single selection</span>
            <${i}
              .options=${s}
              .selectedValues=${[s[0]]}
              label="Fruits"
              placeholder="Select fruits"
            ></${i}>
          </div>
          <div class="select-item">
            <span class="select-label">Multiple selections (2 chips)</span>
            <${i}
              .options=${s}
              .selectedValues=${[s[0],s[1]]}
              label="Fruits"
              placeholder="Select fruits"
            ></${i}>
          </div>
          <div class="select-item">
            <span class="select-label">All items selected (4 chips)</span>
            <${i}
              .options=${s}
              .selectedValues=${s}
              label="Fruits"
              placeholder="Select fruits"
            ></${i}>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="select-section">
          <h3>Disabled State</h3>
          <div class="select-item">
            <span class="select-label">Disabled with selections</span>
            <${i}
              .options=${s}
              .selectedValues=${[s[0],s[2]]}
              label="Fruits (Disabled)"
              placeholder="Select fruits"
              ?disabled=${!0}
            ></${i}>
          </div>
          <div class="select-item">
            <span class="select-label">Disabled without selections</span>
            <${i}
              .options=${s}
              .selectedValues=${[]}
              label="Fruits (Disabled)"
              placeholder="Select fruits"
              ?disabled=${!0}
            ></${i}>
          </div>
        </div>

        <!-- Helper Text -->
        <div class="select-section">
          <h3>Helper Text</h3>
          <div class="select-item">
            <span class="select-label">With informational helper text</span>
            <${i}
              .options=${s}
              .selectedValues=${[s[0]]}
              label="Fruits"
              placeholder="Select fruits"
              ?showHelperText=${!0}
              helperText="You can select multiple fruits from the list"
            ></${i}>
          </div>
          <div class="select-item">
            <span class="select-label">With instructional helper text</span>
            <${i}
              .options=${s}
              .selectedValues=${[s[1],s[2]]}
              label="Fruits"
              placeholder="Select fruits"
              ?showHelperText=${!0}
              helperText="Selected fruits will be used for the recipe"
            ></${i}>
          </div>
        </div>

        <!-- Clear Icon -->
        <div class="select-section">
          <h3>Clear Icon Options</h3>
          <div class="select-item">
            <span class="select-label">With clear icon (default)</span>
            <${i}
              .options=${s}
              .selectedValues=${[s[0],s[1],s[2]]}
              label="Fruits"
              placeholder="Select fruits"
              ?clearIcon=${!0}
            ></${i}>
          </div>
          <div class="select-item">
            <span class="select-label">Without clear icon</span>
            <${i}
              .options=${s}
              .selectedValues=${[s[0],s[1]]}
              label="Fruits"
              placeholder="Select fruits"
              ?clearIcon=${!1}
            ></${i}>
          </div>
        </div>

        <!-- Remove Label -->
        <div class="select-section">
          <h3>Remove Label (Accessibility)</h3>
          <div class="select-item">
            <span class="select-label">With remove label for screen readers</span>
            <${i}
              .options=${s}
              .selectedValues=${[s[0],s[2]]}
              label="Fruits"
              placeholder="Select fruits"
              ?showRemoveLabel=${!0}
            ></${i}>
          </div>
        </div>

        <!-- Empty Options -->
        <div class="select-section">
          <h3>Empty Options State</h3>
          <div class="select-item">
            <span class="select-label">No options available</span>
            <${i}
              .options=${[]}
              .selectedValues=${[]}
              label="Fruits"
              placeholder="No options available"
              ?emptyOptions=${!0}
            ></${i}>
          </div>
        </div>

        <!-- Custom Width -->
        <div class="select-section">
          <h3>Custom Width</h3>
          <div class="select-item">
            <span class="select-label">Width: 200px</span>
            <${i}
              .options=${s}
              .selectedValues=${[s[1]]}
              label="Fruits"
              placeholder="Select fruits"
              customWidth="200"
            ></${i}>
          </div>
          <div class="select-item">
            <span class="select-label">Width: 400px</span>
            <${i}
              .options=${s}
              .selectedValues=${[s[0],s[2]]}
              label="Fruits"
              placeholder="Select fruits"
              customWidth="400"
            ></${i}>
          </div>
          <div class="select-item">
            <span class="select-label">Width: 500px</span>
            <${i}
              .options=${s}
              .selectedValues=${[s[1],s[3]]}
              label="Fruits"
              placeholder="Select fruits"
              customWidth="500"
            ></${i}>
          </div>
        </div>

        <!-- Form Fields -->
        <div class="select-section">
          <h3>Form Field Configuration</h3>
          <div class="select-item">
            <span class="select-label">Custom name attribute</span>
            <${i}
              .options=${s}
              .selectedValues=${[s[0]]}
              label="Fruits"
              placeholder="Select fruits"
              name="fruit-selection"
            ></${i}>
          </div>
          <div class="select-item">
            <span class="select-label">With field type configuration</span>
            <${i}
              .options=${s}
              .selectedValues=${[s[1],s[2]]}
              label="Fruits"
              placeholder="Select fruits"
              name="fruits"
              field="tags"
            ></${i}>
          </div>
        </div>

        <!-- Combined States -->
        <div class="select-section">
          <h3>Combined States</h3>
          <div class="select-item">
            <span class="select-label">Error with multiple selections and helper text</span>
            <${i}
              .options=${s}
              .selectedValues=${[s[0],s[1],s[2],s[3]]}
              label="Fruits"
              placeholder="Select fruits"
              ?error=${!0}
              ?showHelperText=${!0}
              helperText="Too many fruits selected. Maximum is 3."
              customWidth="350"
            ></${i}>
          </div>
          <div class="select-item">
            <span class="select-label">Full-featured: custom width, helper text, remove label, clear icon</span>
            <${i}
              .options=${s}
              .selectedValues=${[s[1],s[3]]}
              label="Favorite Fruits"
              placeholder="Choose your favorites"
              ?showHelperText=${!0}
              helperText="Select fruits you enjoy eating"
              ?showRemoveLabel=${!0}
              ?clearIcon=${!0}
              customWidth="380"
              name="favorite-fruits"
            ></${i}>
          </div>
        </div>
      </div>
    `};var P,A,O;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Default',
  render: args => {
    return html\`
      <\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
        .options=\${args.options}
        .selectedValues=\${args.selectedValues}
        label="\${args.label}"
        placeholder="\${args.placeholder}"
        ?disabled=\${args.disabled}
        ?showHelperText=\${args.showHelperText}
        helperText="\${args.helperText}"
        ?showRemoveLabel=\${args.showRemoveLabel}
        ?emptyOptions=\${args.emptyOptions}
        ?clearIcon=\${args.clearIcon}
        customWidth="\${args.customWidth}"
        name="\${args.name}"
        field="\${args.field}"
      ></\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
    \`;
  }
}`,...(O=(A=v.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var w,x,H,V,F;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    return html\`
      <style>
        .select-container {
          display: flex;
          flex-direction: column;
          gap: 32px;
          padding: 20px;
          max-width: 600px;
        }
        .select-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .select-section h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
        }
        .select-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .select-label {
          font-size: 12px;
          color: #666;
        }
      </style>

      <div class="select-container">
        <!-- Default States -->
        <div class="select-section">
          <h3>Default States</h3>
          <div class="select-item">
            <span class="select-label">No selections</span>
            <\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=\${OPTIONS}
              .selectedValues=\${[]}
              label="Fruits"
              placeholder="Select fruits"
            ></\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
          <div class="select-item">
            <span class="select-label">Single selection</span>
            <\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[0]]}
              label="Fruits"
              placeholder="Select fruits"
            ></\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
          <div class="select-item">
            <span class="select-label">Multiple selections (2 chips)</span>
            <\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[0], OPTIONS[1]]}
              label="Fruits"
              placeholder="Select fruits"
            ></\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
          <div class="select-item">
            <span class="select-label">All items selected (4 chips)</span>
            <\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=\${OPTIONS}
              .selectedValues=\${OPTIONS}
              label="Fruits"
              placeholder="Select fruits"
            ></\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="select-section">
          <h3>Disabled State</h3>
          <div class="select-item">
            <span class="select-label">Disabled with selections</span>
            <\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[0], OPTIONS[2]]}
              label="Fruits (Disabled)"
              placeholder="Select fruits"
              ?disabled=\${true}
            ></\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
          <div class="select-item">
            <span class="select-label">Disabled without selections</span>
            <\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=\${OPTIONS}
              .selectedValues=\${[]}
              label="Fruits (Disabled)"
              placeholder="Select fruits"
              ?disabled=\${true}
            ></\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
        </div>

        <!-- Helper Text -->
        <div class="select-section">
          <h3>Helper Text</h3>
          <div class="select-item">
            <span class="select-label">With informational helper text</span>
            <\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[0]]}
              label="Fruits"
              placeholder="Select fruits"
              ?showHelperText=\${true}
              helperText="You can select multiple fruits from the list"
            ></\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
          <div class="select-item">
            <span class="select-label">With instructional helper text</span>
            <\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[1], OPTIONS[2]]}
              label="Fruits"
              placeholder="Select fruits"
              ?showHelperText=\${true}
              helperText="Selected fruits will be used for the recipe"
            ></\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
        </div>

        <!-- Clear Icon -->
        <div class="select-section">
          <h3>Clear Icon Options</h3>
          <div class="select-item">
            <span class="select-label">With clear icon (default)</span>
            <\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[0], OPTIONS[1], OPTIONS[2]]}
              label="Fruits"
              placeholder="Select fruits"
              ?clearIcon=\${true}
            ></\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
          <div class="select-item">
            <span class="select-label">Without clear icon</span>
            <\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[0], OPTIONS[1]]}
              label="Fruits"
              placeholder="Select fruits"
              ?clearIcon=\${false}
            ></\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
        </div>

        <!-- Remove Label -->
        <div class="select-section">
          <h3>Remove Label (Accessibility)</h3>
          <div class="select-item">
            <span class="select-label">With remove label for screen readers</span>
            <\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[0], OPTIONS[2]]}
              label="Fruits"
              placeholder="Select fruits"
              ?showRemoveLabel=\${true}
            ></\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
        </div>

        <!-- Empty Options -->
        <div class="select-section">
          <h3>Empty Options State</h3>
          <div class="select-item">
            <span class="select-label">No options available</span>
            <\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=\${[]}
              .selectedValues=\${[]}
              label="Fruits"
              placeholder="No options available"
              ?emptyOptions=\${true}
            ></\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
        </div>

        <!-- Custom Width -->
        <div class="select-section">
          <h3>Custom Width</h3>
          <div class="select-item">
            <span class="select-label">Width: 200px</span>
            <\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[1]]}
              label="Fruits"
              placeholder="Select fruits"
              customWidth="200"
            ></\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
          <div class="select-item">
            <span class="select-label">Width: 400px</span>
            <\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[0], OPTIONS[2]]}
              label="Fruits"
              placeholder="Select fruits"
              customWidth="400"
            ></\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
          <div class="select-item">
            <span class="select-label">Width: 500px</span>
            <\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[1], OPTIONS[3]]}
              label="Fruits"
              placeholder="Select fruits"
              customWidth="500"
            ></\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
        </div>

        <!-- Form Fields -->
        <div class="select-section">
          <h3>Form Field Configuration</h3>
          <div class="select-item">
            <span class="select-label">Custom name attribute</span>
            <\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[0]]}
              label="Fruits"
              placeholder="Select fruits"
              name="fruit-selection"
            ></\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
          <div class="select-item">
            <span class="select-label">With field type configuration</span>
            <\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[1], OPTIONS[2]]}
              label="Fruits"
              placeholder="Select fruits"
              name="fruits"
              field="tags"
            ></\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
        </div>

        <!-- Combined States -->
        <div class="select-section">
          <h3>Combined States</h3>
          <div class="select-item">
            <span class="select-label">Error with multiple selections and helper text</span>
            <\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[0], OPTIONS[1], OPTIONS[2], OPTIONS[3]]}
              label="Fruits"
              placeholder="Select fruits"
              ?error=\${true}
              ?showHelperText=\${true}
              helperText="Too many fruits selected. Maximum is 3."
              customWidth="350"
            ></\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
          <div class="select-item">
            <span class="select-label">Full-featured: custom width, helper text, remove label, clear icon</span>
            <\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[1], OPTIONS[3]]}
              label="Favorite Fruits"
              placeholder="Choose your favorites"
              ?showHelperText=\${true}
              helperText="Select fruits you enjoy eating"
              ?showRemoveLabel=\${true}
              ?clearIcon=\${true}
              customWidth="380"
              name="favorite-fruits"
            ></\${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
          </div>
        </div>
      </div>
    \`;
  }
}`,...(H=(x=b.parameters)==null?void 0:x.docs)==null?void 0:H.source},description:{story:`Comprehensive showcase of all multiple-select-chip states and configurations.
Demonstrates various selection states, validation, helper text, and customization options.`,...(F=(V=b.parameters)==null?void 0:V.docs)==null?void 0:F.description}}};const _e=["EnchantedMultipleSelectChipStory","AllStates"];export{b as AllStates,v as EnchantedMultipleSelectChipStory,_e as __namedExportsOrder,Ce as default};
