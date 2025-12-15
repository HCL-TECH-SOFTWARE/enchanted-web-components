import{x as r,E as u}from"./iframe-DHDpWj8R.js";import{n as p,t as N,l as P,E as L,v as V}from"./enchanted-ac-base-element-DiERHT3A.js";import{r as m}from"./state-CAzxSWuk.js";import{l as F}from"./lodash-CoWAiiJq.js";import"./index-EDzcglRn.js";import"./enchanted-button-CLWRKz3u.js";import{n as l,j as A,C as _,i as R,L as k}from"./cssClassEnums-D4dgqifY.js";import{I as W}from"./exportParts-lw5uKHST.js";import{K as n}from"./keyboardEventKeys-BnoN8uA3.js";import"./index-D5GA8BzZ.js";import"./index-CyT5Y3h-.js";import"./index-CBZgaqBm.js";import{c as U,B as M,t as H}from"./index-BdjfDspd.js";import"./preload-helper-C1FmrZbK.js";import"./enchanted-avatar-CS0Brxsm.js";import"./localization-Dlp2bMpu.js";var $={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M16,2C8.2,2,2,8.2,2,16s6.2,14,14,14s14-6.2,14-14S23.8,2,16,2z M21.4,23L16,17.6L10.6,23L9,21.4l5.4-5.4L9,10.6L10.6,9	l5.4,5.4L21.4,9l1.6,1.6L17.6,16l5.4,5.4L21.4,23z"}},{elem:"path",attrs:{d:"M14.4 16L9 10.6 10.6 9 16 14.4 21.4 9 23 10.6 17.6 16 23 21.4 21.4 23 16 17.6 10.6 23 9 21.4 14.4 16","data-icon-path":"inner-path",opacity:"0"}}],name:"close--filled",size:32};const g="icon-close-filled";class q extends M{render(){return r`${H({...$,attrs:{...$.attrs,preserveAspectRatio:"xMidYMid"}})}`}}U&&!customElements.get(g)&&customElements.define(g,q);var B=Object.defineProperty,z=Object.getOwnPropertyDescriptor,c=(e,t,i,o)=>{for(var d=o>1?void 0:o?z(t,i):t,f=e.length-1,b;f>=0;f--)(b=e[f])&&(d=(o?b(t,i,d):b(d))||d);return o&&d&&B(t,i,d),d};let a=class extends L{constructor(){super(...arguments),this.toggleDropDown=!1,this.currentFocusedItem=void 0,this.inputValue="",this.onInputHover=!1,this.isInputFocused=!1,this.isClearAllIconFocused=!1,this.disabled=!1,this.showHelperText=!1,this.helperText="",this.name="multiple-select",this.selectedValues=[],this.options=[],this.field="",this.showRemoveLabel=!1,this.emptyOptions=!1,this.clearIcon=!0,this.placeholder=this.getMessage("authoring.multi.select.placeholder"),this.label=this.getMessage("authoring.multi.select.label"),this.handleOutsideClick=e=>{const t=e.target;!this.contains(t)&&this.toggleDropDown&&(this.toggleDropDown=!1,this.inputValue="",this.requestUpdate())}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.handleDropdownNav),document.addEventListener("click",this.handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.handleDropdownNav),document.removeEventListener("click",this.handleOutsideClick)}handleListItemClick(e){var b;e.stopPropagation();const t=e.currentTarget,i=(b=t.textContent)==null?void 0:b.trim(),o=t.getAttribute("id")||i;if(!o||!i)return;if(this.selectedValues.find(h=>h.id===o))this.selectedValues=this.selectedValues.filter(h=>h.id!==o);else{const h=this.options.find(x=>x.id===o);h&&(this.selectedValues=[...this.selectedValues,{id:h.id,name:h.name,value:h.value}])}this.inputValue="",this.toggleDropDown=!0;const f=this.renderRoot.querySelector(`#${l.INPUT_FIELD}`);f&&f.focus(),this.currentFocusedItem=t,this.dispatchChangeEvent(),this.requestUpdate()}handleChipRemove(e,t){e.stopPropagation(),this.selectedValues=this.selectedValues.filter(o=>o.id!==t),this.dispatchChangeEvent(),this.requestUpdate();const i=this.renderRoot.querySelector(`#${l.INPUT_FIELD}`);i&&i.focus()}handleClearAll(){const e=this.toggleDropDown;this.selectedValues=[],this.inputValue="",this.dispatchChangeEvent(),this.toggleDropDown=e,this.requestUpdate();const t=this.renderRoot.querySelector(`#${l.INPUT_FIELD}`);t&&t.focus()}handleInput(e){e.stopPropagation();const t=e.target;this.inputValue=t.value,this.toggleDropDown||(this.toggleDropDown=!0),this.dispatchEvent(new CustomEvent("input",{detail:{value:this.inputValue,type:this.field},bubbles:!0,composed:!0}))}getDivInputParts(){let e=l.INPUT_CONTAINER;return this.disabled&&(e=`${e} ${l.INPUT_CONTAINER_DISABLED}`),e}handleInputKeyDown(e){e.stopPropagation(),e.key===n.ENTER||e.key===n.SPACE?(e.preventDefault(),this.disabled||(this.emptyOptions&&this.inputValue&&e.key===n.ENTER?(this.selectedValues=[...this.selectedValues,{id:this.inputValue,name:this.inputValue,value:this.inputValue}],this.inputValue="",this.dispatchChangeEvent(),this.requestUpdate()):(this.toggleDropDown=!this.toggleDropDown,this.toggleDropDown&&(this.listItems=Array.from(this.renderRoot.querySelectorAll("enchanted-list-item")),this.listItems.length>0&&(this.currentFocusedItem=this.listItems[0],this.currentFocusedItem.focus())),this.requestUpdate()))):(e.key===n.BACKSPACE||e.key===n.DELETE)&&!this.inputValue&&this.selectedValues.length>0?(this.selectedValues=this.selectedValues.slice(0,-1),this.dispatchChangeEvent(),this.requestUpdate()):e.key===n.ARROW_DOWN&&this.toggleDropDown?(e.preventDefault(),this.listItems=Array.from(this.renderRoot.querySelectorAll("enchanted-list-item")),this.listItems.length>0&&(this.currentFocusedItem=this.listItems[0],this.currentFocusedItem.focus())):e.key===n.ESCAPE&&this.toggleDropDown&&(e.preventDefault(),this.toggleDropDown=!1)}dispatchChangeEvent(){const e=this.selectedValues.map(t=>({id:t.id,name:t.name||t.id,value:t.value||t.id}));this.dispatchEvent(new CustomEvent("change",{detail:{value:e,type:this.field}})),this.toggleDropDown=!1}async handleButtonClick(e){e.stopPropagation(),!this.disabled&&(this.toggleDropDown=!this.toggleDropDown,await this.updateComplete&&this.toggleDropDown&&(this.listItems=Array.from(this.renderRoot.querySelectorAll("enchanted-list-item")),this.listItems.length>0&&(this.currentFocusedItem=this.listItems[0],this.currentFocusedItem.focus())))}handleInputContainerClick(e){e.stopPropagation();const t=this.renderRoot.querySelector(`#${l.INPUT_FIELD}`);t&&!this.disabled&&e.target!==this.renderRoot.querySelector(`#${l.CLEAR}`)&&(t.focus(),this.toggleDropDown=!this.toggleDropDown,this.requestUpdate())}async handleDropdownNav(e){if(e.key===n.ESCAPE&&this.toggleDropDown){e.preventDefault(),this.toggleDropDown=!1,this.requestUpdate();const t=this.renderRoot.querySelector(`#${l.INPUT_FIELD}`);t&&t.focus();return}if(!(!this.toggleDropDown||!this.listItems))switch(e.key){case n.ARROW_DOWN:{e.preventDefault(),this.listItems=Array.from(this.renderRoot.querySelectorAll("enchanted-list-item"));const t=this.currentFocusedItem?this.listItems.indexOf(this.currentFocusedItem):-1;t<this.listItems.length-1&&(this.currentFocusedItem=this.listItems[t+1],this.currentFocusedItem.focus(),this.toggleDropDown=!0);break}case n.ARROW_UP:{e.preventDefault();const t=this.currentFocusedItem?this.listItems.indexOf(this.currentFocusedItem):-1;t>0&&(this.currentFocusedItem=this.listItems[t-1],this.currentFocusedItem.focus(),this.toggleDropDown=!0);break}case n.ENTER:{e.preventDefault(),await this.updateComplete&&(this.listItems=Array.from(this.renderRoot.querySelectorAll("enchanted-list-item"))),this.currentFocusedItem&&this.currentFocusedItem.click();break}}}handleRemoveLabelClick(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("remove",{bubbles:!0,detail:{name:this.name,type:this.field}}))}getOptionName(e){return typeof e=="string"?e:e.name||e.id}handleOnMouseOver(e){e.stopPropagation(),e.preventDefault(),this.onInputHover=!0,this.requestUpdate()}handleOnMouseOut(e){e.stopPropagation(),this.onInputHover=!1,this.requestUpdate()}getPartClearAllIcon(){return(this.onInputHover||this.isInputFocused||this.isClearAllIconFocused)&&this.selectedValues.length>0?l.CLEAR_ALL_ICON:l.CLEAR_ALL_ICON_HIDDEN}getSelectedOption(e){const t=typeof e=="string"?e:e.id||e.name;return r`
    <enchanted-list-item
      @pointerdown=${this.handleListItemClick}
      @keydown=${i=>{(i.key===n.ENTER||i.key===n.SPACE)&&(i.preventDefault(),this.handleListItemClick(i))}}
      exportparts="${Object.values(A).join(",")}"
      tabindex="0"
      data-testid="enchanted-multi-select-listitem"
      role="option"
      aria-selected="${this.selectedValues.some(i=>i.id===t)}"
      key="${V()}"
      id="${t}"
      class="${this.selectedValues.some(i=>i.id===t)?"selected":""}"
    >
      <div part="${l.LIST_ITEM_CONTENT}">
        <div
          class="${this.selectedValues.some(i=>i.id===t)?l.CHECKMARK:l.CHECKMARK_PLACEHOLDER}"
          part="${this.selectedValues.some(i=>i.id===t)?l.CHECKMARK:l.CHECKMARK_PLACEHOLDER}"
        >
          ${this.selectedValues.some(i=>i.id===t)?r`<icon-checkmark size="16" alt="Selected" color="rgba(0, 0, 0, 0.60)"></icon-checkmark>`:u}
        </div>
        <div part="${l.LIST_ITEMS}">
          ${this.getOptionName(e)}
        </div>
      </div>
    </enchanted-list-item>
  `}renderChips(){return r`
    ${this.selectedValues.map(e=>{const{id:t,name:i=""}=e;return r`
        <enchanted-chip
          name="${i}"
          ?clearIcon=${this.clearIcon}
          data-testid="enchanted-multiple-select-chip"
          exportparts="${Object.values(_).join(",")}"
          title="${i}"
          ?disabled=${this.disabled}
        >
          ${this.clearIcon?r`
                <span
                  slot="${l.CLEAR_ICON}"
                  part="${this.disabled?`${l.CLEAR_ICON_DISABLED} ${l.CLEAR_ICON}`:l.CLEAR_ICON}"
                  data-testid="clear-icon"
                  tabindex=${this.disabled?"-1":"0"}
                  @keydown=${o=>{(o.key===n.ENTER||o.key===n.SPACE)&&(o.preventDefault(),this.handleChipRemove(o,t))}}
                  @click=${o=>this.handleChipRemove(o,t)}
                >
                  <icon-close size="16" alt="Clear icon" color="rgba(0, 0, 0, 0.60)"></icon-close>
                </span>
              `:u}
        </enchanted-chip>
      `})}
  `}render(){const e=this.inputValue?this.options.filter(t=>this.getOptionName(t).toLowerCase().includes(this.inputValue.toLowerCase())):this.options;return r`
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
        ${this.showRemoveLabel?r`
          <label data-testid="multiple-select-remove-label"
            tabindex=${this.disabled?"-1":"0"}
            aria-disabled=${this.disabled}
            part="${this.disabled?`${l.MULTIPLE_SELECT_REMOVE_LABEL} ${l.MULTIPLE_SELECT_REMOVE_LABEL_DISABLED}`:l.MULTIPLE_SELECT_REMOVE_LABEL}"
            @click=${this.disabled?u:this.handleRemoveLabelClick}
            @keydown=${t=>{this.disabled||(t.key===n.ENTER||t.key===n.SPACE)&&(t.preventDefault(),this.handleRemoveLabelClick(t))}}
          >
            ${this.getMessage("advanced.search.remove")}
          </label>
         `:u}

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
        @click=${t=>{document.querySelectorAll("enchanted-multiple-select-chip").forEach(i=>{i!==this&&i.toggleDropDown&&(i.toggleDropDown=!1)}),this.handleInputContainerClick(t)}}
        @keydown=${t=>{if((t.key===n.ENTER||t.key===n.SPACE)&&!this.disabled){t.preventDefault(),this.toggleDropDown=!this.toggleDropDown,this.toggleDropDown&&(this.listItems=Array.from(this.renderRoot.querySelectorAll("enchanted-list-item")),this.listItems.length>0&&(this.currentFocusedItem=this.listItems[0],this.currentFocusedItem.focus()));const i=this.renderRoot.querySelector(`#${l.INPUT_FIELD}`);i&&i.focus(),this.requestUpdate()}}}
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
          ${this.selectedValues.length>0?r`
              <enchanted-icon-button
                part="${this.getPartClearAllIcon()}"
                .icon="${r`<icon-close-filled size="16" color="rgba(0, 0, 0, 0.60)"></icon-close-filled>`}"
                title="${l.CLEAR}"
                id="${l.CLEAR}"
                data-testid="enchanted-multi-select-clear-all-button"
                role="button"
                aria-label=${this.getMessage("authoring.multi.select.clear.chip")}
                tabindex="0"
                ?disabled="${this.disabled}"
                @click=${t=>{t.stopPropagation(),F.debounce(this.handleClearAll.bind(this),300)()}}
                @keydown=${t=>{(t.key===n.ENTER||t.key===n.SPACE)&&(t.preventDefault(),t.stopPropagation(),this.handleClearAll())}}
                @focus=${()=>{this.isClearAllIconFocused=!0,this.requestUpdate()}}
                @blur=${()=>{this.isClearAllIconFocused=!1,this.requestUpdate()}}
                exportparts="${Object.values(W).join(",")}"
              >
              </enchanted-icon-button>
            `:u}
          <enchanted-button
            @click=${t=>{document.querySelectorAll("enchanted-multiple-select-chip").forEach(i=>{i!==this&&i.toggleDropDown&&(i.toggleDropDown=!1)}),this.handleButtonClick(t)}}
          
            @keydown=${t=>{if((t.key===n.ENTER||t.key===n.SPACE)&&(t.preventDefault(),this.handleButtonClick(t)),t.key===n.TAB&&this.toggleDropDown){this.toggleDropDown=!1;return}}}
            exportparts="${Object.values(R).join(",")}"
            data-testid="enchanted-multi-select-button"
            variant="button"
            .icon="${this.toggleDropDown?r`<icon-caret-up size="16" color="rgba(0, 0, 0, 0.60)"></icon-caret-up>`:r`<icon-caret-down size="16" color="rgba(0, 0, 0, 0.60)"></icon-caret-down>`}" 
            ?endicon="${!0}"
            ?disabled="${this.disabled}"
            aria-label=${this.getMessage("authoring.multi.select.toggle.dropdown")}
            role="button"
          ></enchanted-button>
        </div>
      </div>
      ${this.toggleDropDown?r`
            <enchanted-list
              exportparts="${k.UNORDERED_LIST}"
              style=${this.customWidth?`width: ${this.customWidth}px;`:u}
              id="enchanted-multi-select-list"
              role="listbox"
              aria-multiselectable="true"
              tabindex="-1"
              data-testid="enchanted-multi-select-list"
              @click=${t=>t.stopPropagation()}
            >
              ${e.length>0?e.map(t=>this.getSelectedOption(t)):r`
                <enchanted-list-item
                  part="${l.NO_LIST_ITEM}"
                  data-testid="enchanted-multi-select-listitem-no-options"
                  role="option"
                  aria-disabled="true"
                >
                  <div part="${l.LIST_ITEM_NO_CONTENT}">
                    No options
                  </div>
                </enchanted-list-item>
              `}
            </enchanted-list>
          `:u}
        ${this.showHelperText?r`<div part="${l.HELPER_TEXT}" aria-label="${this.helperText}">${this.helperText}</div>`:u}
    </div>
  `}};c([m()],a.prototype,"toggleDropDown",2);c([m()],a.prototype,"listItems",2);c([m()],a.prototype,"currentFocusedItem",2);c([m()],a.prototype,"inputValue",2);c([m()],a.prototype,"onInputHover",2);c([m()],a.prototype,"isInputFocused",2);c([m()],a.prototype,"isClearAllIconFocused",2);c([p({type:Boolean})],a.prototype,"disabled",2);c([p({type:Boolean})],a.prototype,"showHelperText",2);c([p({type:String})],a.prototype,"helperText",2);c([p({type:String})],a.prototype,"name",2);c([p({type:Array})],a.prototype,"selectedValues",2);c([p({type:Array})],a.prototype,"options",2);c([p({type:String})],a.prototype,"field",2);c([p({type:Boolean})],a.prototype,"showRemoveLabel",2);c([p({type:Boolean})],a.prototype,"emptyOptions",2);c([p({type:Boolean})],a.prototype,"clearIcon",2);c([p({type:String})],a.prototype,"customWidth",2);c([p({type:String})],a.prototype,"placeholder",2);c([p({type:String})],a.prototype,"label",2);a=c([N("enchanted-multiple-select-chip"),P()],a);const s=[{id:"apple",name:"Apple",value:"apple"},{id:"banana",name:"Banana",value:"banana"},{id:"cherry",name:"Cherry",value:"cherry"},{id:"date",name:"Date",value:"date"}],oe={title:"Input/enchanted-multiple-select-chip",component:"enchanted-multiple-select-chip",tags:["autodocs"],parameters:{docs:{description:{component:"The Multiple Select Chip component allows users to select multiple options from a dropdown menu, displaying selections as removable chips. Features include search/filter, clear all functionality, helper text, error states, and custom styling. Use this component for multi-selection scenarios like tags, categories, or filtering where visual representation of selections is important."}}},argTypes:{options:{control:{type:"object"},description:"Array of available options for selection. Each option should have id, name, and value properties. Options populate the dropdown menu.",table:{category:"Content",type:{summary:"OptionData[]"},defaultValue:{summary:"[]"}}},selectedValues:{control:{type:"object"},description:"Array of currently selected options displayed as chips. Each selection appears as a removable chip above the input field.",table:{category:"State",type:{summary:"OptionData[]"},defaultValue:{summary:"[]"}}},label:{control:{type:"text"},description:"Label text displayed above the input field. Provides context for what users are selecting. Uses localized default if not specified.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:"localized"}}},placeholder:{control:{type:"text"},description:"Placeholder text shown in the input when empty. Guides users on what to select. Uses localized default if not specified.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:"localized"}}},disabled:{control:{type:"boolean"},description:"Disables the entire component including input field, chips, and all interactions. Visual styling indicates disabled state.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},showHelperText:{control:{type:"boolean"},description:"Shows helper text below the input field. Must be true for helperText to display. Used for instructions or error messages.",table:{category:"Display",type:{summary:"boolean"},defaultValue:{summary:"false"}}},helperText:{control:{type:"text"},description:"Helper text content displayed below input when showHelperText is true. Provides guidance, hints, or validation feedback.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},showRemoveLabel:{control:{type:"boolean"},description:"Shows accessible remove label on chip close buttons. Improves accessibility by providing text description for screen readers.",table:{category:"Accessibility",type:{summary:"boolean"},defaultValue:{summary:"false"}}},emptyOptions:{control:{type:"boolean"},description:"Indicates empty options state. When true, displays appropriate empty state messaging instead of the dropdown list.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},clearIcon:{control:{type:"boolean"},description:"Shows clear all icon button when selections exist. Allows users to quickly remove all selected chips with one click.",table:{category:"Display",type:{summary:"boolean"},defaultValue:{summary:"true"}}},customWidth:{control:{type:"number"},description:"Custom width value for the component. Can be specified in pixels or other CSS units. Overrides default width behavior.",table:{category:"Styling",type:{summary:"number"},defaultValue:{summary:"240"}}},name:{control:{type:"text"},description:'Form field name attribute. Used for form submission and identification. Defaults to "multiple-select" if not specified.',table:{category:"Form",type:{summary:"string"},defaultValue:{summary:"multiple-select"}}},field:{control:{type:"text"},description:"Field type configuration string. Used for specialized field behavior or styling based on usage context.",table:{category:"Form",type:{summary:"string"},defaultValue:{summary:""}}}},args:{options:s,selectedValues:[],label:"Fruits",placeholder:"Select fruits",disabled:!1,showHelperText:!1,helperText:"",showRemoveLabel:!1,emptyOptions:!1,clearIcon:!0,customWidth:"",name:"multiple-select",field:""}},y={name:"Default",render:e=>r`
      <enchanted-multiple-select-chip
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
      ></enchanted-multiple-select-chip>
    `},v={parameters:{controls:{disable:!0}},render:()=>r`
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
            <enchanted-multiple-select-chip
              .options=${s}
              .selectedValues=${[]}
              label="Fruits"
              placeholder="Select fruits"
            ></enchanted-multiple-select-chip>
          </div>
          <div class="select-item">
            <span class="select-label">Single selection</span>
            <enchanted-multiple-select-chip
              .options=${s}
              .selectedValues=${[s[0]]}
              label="Fruits"
              placeholder="Select fruits"
            ></enchanted-multiple-select-chip>
          </div>
          <div class="select-item">
            <span class="select-label">Multiple selections (2 chips)</span>
            <enchanted-multiple-select-chip
              .options=${s}
              .selectedValues=${[s[0],s[1]]}
              label="Fruits"
              placeholder="Select fruits"
            ></enchanted-multiple-select-chip>
          </div>
          <div class="select-item">
            <span class="select-label">All items selected (4 chips)</span>
            <enchanted-multiple-select-chip
              .options=${s}
              .selectedValues=${s}
              label="Fruits"
              placeholder="Select fruits"
            ></enchanted-multiple-select-chip>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="select-section">
          <h3>Disabled State</h3>
          <div class="select-item">
            <span class="select-label">Disabled with selections</span>
            <enchanted-multiple-select-chip
              .options=${s}
              .selectedValues=${[s[0],s[2]]}
              label="Fruits (Disabled)"
              placeholder="Select fruits"
              ?disabled=${!0}
            ></enchanted-multiple-select-chip>
          </div>
          <div class="select-item">
            <span class="select-label">Disabled without selections</span>
            <enchanted-multiple-select-chip
              .options=${s}
              .selectedValues=${[]}
              label="Fruits (Disabled)"
              placeholder="Select fruits"
              ?disabled=${!0}
            ></enchanted-multiple-select-chip>
          </div>
        </div>

        <!-- Helper Text -->
        <div class="select-section">
          <h3>Helper Text</h3>
          <div class="select-item">
            <span class="select-label">With informational helper text</span>
            <enchanted-multiple-select-chip
              .options=${s}
              .selectedValues=${[s[0]]}
              label="Fruits"
              placeholder="Select fruits"
              ?showHelperText=${!0}
              helperText="You can select multiple fruits from the list"
            ></enchanted-multiple-select-chip>
          </div>
          <div class="select-item">
            <span class="select-label">With instructional helper text</span>
            <enchanted-multiple-select-chip
              .options=${s}
              .selectedValues=${[s[1],s[2]]}
              label="Fruits"
              placeholder="Select fruits"
              ?showHelperText=${!0}
              helperText="Selected fruits will be used for the recipe"
            ></enchanted-multiple-select-chip>
          </div>
        </div>

        <!-- Clear Icon -->
        <div class="select-section">
          <h3>Clear Icon Options</h3>
          <div class="select-item">
            <span class="select-label">With clear icon (default)</span>
            <enchanted-multiple-select-chip
              .options=${s}
              .selectedValues=${[s[0],s[1],s[2]]}
              label="Fruits"
              placeholder="Select fruits"
              ?clearIcon=${!0}
            ></enchanted-multiple-select-chip>
          </div>
          <div class="select-item">
            <span class="select-label">Without clear icon</span>
            <enchanted-multiple-select-chip
              .options=${s}
              .selectedValues=${[s[0],s[1]]}
              label="Fruits"
              placeholder="Select fruits"
              ?clearIcon=${!1}
            ></enchanted-multiple-select-chip>
          </div>
        </div>

        <!-- Remove Label -->
        <div class="select-section">
          <h3>Remove Label (Accessibility)</h3>
          <div class="select-item">
            <span class="select-label">With remove label for screen readers</span>
            <enchanted-multiple-select-chip
              .options=${s}
              .selectedValues=${[s[0],s[2]]}
              label="Fruits"
              placeholder="Select fruits"
              ?showRemoveLabel=${!0}
            ></enchanted-multiple-select-chip>
          </div>
        </div>

        <!-- Empty Options -->
        <div class="select-section">
          <h3>Empty Options State</h3>
          <div class="select-item">
            <span class="select-label">No options available</span>
            <enchanted-multiple-select-chip
              .options=${[]}
              .selectedValues=${[]}
              label="Fruits"
              placeholder="No options available"
              ?emptyOptions=${!0}
            ></enchanted-multiple-select-chip>
          </div>
        </div>

        <!-- Custom Width -->
        <div class="select-section">
          <h3>Custom Width</h3>
          <div class="select-item">
            <span class="select-label">Width: 200px</span>
            <enchanted-multiple-select-chip
              .options=${s}
              .selectedValues=${[s[1]]}
              label="Fruits"
              placeholder="Select fruits"
              customWidth="200"
            ></enchanted-multiple-select-chip>
          </div>
          <div class="select-item">
            <span class="select-label">Width: 400px</span>
            <enchanted-multiple-select-chip
              .options=${s}
              .selectedValues=${[s[0],s[2]]}
              label="Fruits"
              placeholder="Select fruits"
              customWidth="400"
            ></enchanted-multiple-select-chip>
          </div>
          <div class="select-item">
            <span class="select-label">Width: 500px</span>
            <enchanted-multiple-select-chip
              .options=${s}
              .selectedValues=${[s[1],s[3]]}
              label="Fruits"
              placeholder="Select fruits"
              customWidth="500"
            ></enchanted-multiple-select-chip>
          </div>
        </div>

        <!-- Form Fields -->
        <div class="select-section">
          <h3>Form Field Configuration</h3>
          <div class="select-item">
            <span class="select-label">Custom name attribute</span>
            <enchanted-multiple-select-chip
              .options=${s}
              .selectedValues=${[s[0]]}
              label="Fruits"
              placeholder="Select fruits"
              name="fruit-selection"
            ></enchanted-multiple-select-chip>
          </div>
          <div class="select-item">
            <span class="select-label">With field type configuration</span>
            <enchanted-multiple-select-chip
              .options=${s}
              .selectedValues=${[s[1],s[2]]}
              label="Fruits"
              placeholder="Select fruits"
              name="fruits"
              field="tags"
            ></enchanted-multiple-select-chip>
          </div>
        </div>

        <!-- Combined States -->
        <div class="select-section">
          <h3>Combined States</h3>
          <div class="select-item">
            <span class="select-label">Error with multiple selections and helper text</span>
            <enchanted-multiple-select-chip
              .options=${s}
              .selectedValues=${[s[0],s[1],s[2],s[3]]}
              label="Fruits"
              placeholder="Select fruits"
              ?error=${!0}
              ?showHelperText=${!0}
              helperText="Too many fruits selected. Maximum is 3."
              customWidth="350"
            ></enchanted-multiple-select-chip>
          </div>
          <div class="select-item">
            <span class="select-label">Full-featured: custom width, helper text, remove label, clear icon</span>
            <enchanted-multiple-select-chip
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
            ></enchanted-multiple-select-chip>
          </div>
        </div>
      </div>
    `};var I,S,O;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Default',
  render: args => {
    return html\`
      <enchanted-multiple-select-chip
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
      ></enchanted-multiple-select-chip>
    \`;
  }
}`,...(O=(S=y.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var T,D,E,w,C;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
            <enchanted-multiple-select-chip
              .options=\${OPTIONS}
              .selectedValues=\${[]}
              label="Fruits"
              placeholder="Select fruits"
            ></enchanted-multiple-select-chip>
          </div>
          <div class="select-item">
            <span class="select-label">Single selection</span>
            <enchanted-multiple-select-chip
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[0]]}
              label="Fruits"
              placeholder="Select fruits"
            ></enchanted-multiple-select-chip>
          </div>
          <div class="select-item">
            <span class="select-label">Multiple selections (2 chips)</span>
            <enchanted-multiple-select-chip
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[0], OPTIONS[1]]}
              label="Fruits"
              placeholder="Select fruits"
            ></enchanted-multiple-select-chip>
          </div>
          <div class="select-item">
            <span class="select-label">All items selected (4 chips)</span>
            <enchanted-multiple-select-chip
              .options=\${OPTIONS}
              .selectedValues=\${OPTIONS}
              label="Fruits"
              placeholder="Select fruits"
            ></enchanted-multiple-select-chip>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="select-section">
          <h3>Disabled State</h3>
          <div class="select-item">
            <span class="select-label">Disabled with selections</span>
            <enchanted-multiple-select-chip
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[0], OPTIONS[2]]}
              label="Fruits (Disabled)"
              placeholder="Select fruits"
              ?disabled=\${true}
            ></enchanted-multiple-select-chip>
          </div>
          <div class="select-item">
            <span class="select-label">Disabled without selections</span>
            <enchanted-multiple-select-chip
              .options=\${OPTIONS}
              .selectedValues=\${[]}
              label="Fruits (Disabled)"
              placeholder="Select fruits"
              ?disabled=\${true}
            ></enchanted-multiple-select-chip>
          </div>
        </div>

        <!-- Helper Text -->
        <div class="select-section">
          <h3>Helper Text</h3>
          <div class="select-item">
            <span class="select-label">With informational helper text</span>
            <enchanted-multiple-select-chip
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[0]]}
              label="Fruits"
              placeholder="Select fruits"
              ?showHelperText=\${true}
              helperText="You can select multiple fruits from the list"
            ></enchanted-multiple-select-chip>
          </div>
          <div class="select-item">
            <span class="select-label">With instructional helper text</span>
            <enchanted-multiple-select-chip
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[1], OPTIONS[2]]}
              label="Fruits"
              placeholder="Select fruits"
              ?showHelperText=\${true}
              helperText="Selected fruits will be used for the recipe"
            ></enchanted-multiple-select-chip>
          </div>
        </div>

        <!-- Clear Icon -->
        <div class="select-section">
          <h3>Clear Icon Options</h3>
          <div class="select-item">
            <span class="select-label">With clear icon (default)</span>
            <enchanted-multiple-select-chip
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[0], OPTIONS[1], OPTIONS[2]]}
              label="Fruits"
              placeholder="Select fruits"
              ?clearIcon=\${true}
            ></enchanted-multiple-select-chip>
          </div>
          <div class="select-item">
            <span class="select-label">Without clear icon</span>
            <enchanted-multiple-select-chip
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[0], OPTIONS[1]]}
              label="Fruits"
              placeholder="Select fruits"
              ?clearIcon=\${false}
            ></enchanted-multiple-select-chip>
          </div>
        </div>

        <!-- Remove Label -->
        <div class="select-section">
          <h3>Remove Label (Accessibility)</h3>
          <div class="select-item">
            <span class="select-label">With remove label for screen readers</span>
            <enchanted-multiple-select-chip
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[0], OPTIONS[2]]}
              label="Fruits"
              placeholder="Select fruits"
              ?showRemoveLabel=\${true}
            ></enchanted-multiple-select-chip>
          </div>
        </div>

        <!-- Empty Options -->
        <div class="select-section">
          <h3>Empty Options State</h3>
          <div class="select-item">
            <span class="select-label">No options available</span>
            <enchanted-multiple-select-chip
              .options=\${[]}
              .selectedValues=\${[]}
              label="Fruits"
              placeholder="No options available"
              ?emptyOptions=\${true}
            ></enchanted-multiple-select-chip>
          </div>
        </div>

        <!-- Custom Width -->
        <div class="select-section">
          <h3>Custom Width</h3>
          <div class="select-item">
            <span class="select-label">Width: 200px</span>
            <enchanted-multiple-select-chip
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[1]]}
              label="Fruits"
              placeholder="Select fruits"
              customWidth="200"
            ></enchanted-multiple-select-chip>
          </div>
          <div class="select-item">
            <span class="select-label">Width: 400px</span>
            <enchanted-multiple-select-chip
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[0], OPTIONS[2]]}
              label="Fruits"
              placeholder="Select fruits"
              customWidth="400"
            ></enchanted-multiple-select-chip>
          </div>
          <div class="select-item">
            <span class="select-label">Width: 500px</span>
            <enchanted-multiple-select-chip
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[1], OPTIONS[3]]}
              label="Fruits"
              placeholder="Select fruits"
              customWidth="500"
            ></enchanted-multiple-select-chip>
          </div>
        </div>

        <!-- Form Fields -->
        <div class="select-section">
          <h3>Form Field Configuration</h3>
          <div class="select-item">
            <span class="select-label">Custom name attribute</span>
            <enchanted-multiple-select-chip
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[0]]}
              label="Fruits"
              placeholder="Select fruits"
              name="fruit-selection"
            ></enchanted-multiple-select-chip>
          </div>
          <div class="select-item">
            <span class="select-label">With field type configuration</span>
            <enchanted-multiple-select-chip
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[1], OPTIONS[2]]}
              label="Fruits"
              placeholder="Select fruits"
              name="fruits"
              field="tags"
            ></enchanted-multiple-select-chip>
          </div>
        </div>

        <!-- Combined States -->
        <div class="select-section">
          <h3>Combined States</h3>
          <div class="select-item">
            <span class="select-label">Error with multiple selections and helper text</span>
            <enchanted-multiple-select-chip
              .options=\${OPTIONS}
              .selectedValues=\${[OPTIONS[0], OPTIONS[1], OPTIONS[2], OPTIONS[3]]}
              label="Fruits"
              placeholder="Select fruits"
              ?error=\${true}
              ?showHelperText=\${true}
              helperText="Too many fruits selected. Maximum is 3."
              customWidth="350"
            ></enchanted-multiple-select-chip>
          </div>
          <div class="select-item">
            <span class="select-label">Full-featured: custom width, helper text, remove label, clear icon</span>
            <enchanted-multiple-select-chip
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
            ></enchanted-multiple-select-chip>
          </div>
        </div>
      </div>
    \`;
  }
}`,...(E=(D=v.parameters)==null?void 0:D.docs)==null?void 0:E.source},description:{story:`Comprehensive showcase of all multiple-select-chip states and configurations.
Demonstrates various selection states, validation, helper text, and customization options.`,...(C=(w=v.parameters)==null?void 0:w.docs)==null?void 0:C.description}}};const re=["EnchantedMultipleSelectChipStory","AllStates"];export{v as AllStates,y as EnchantedMultipleSelectChipStory,re as __namedExportsOrder,oe as default};
