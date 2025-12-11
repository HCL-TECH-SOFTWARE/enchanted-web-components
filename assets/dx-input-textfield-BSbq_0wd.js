import{E as f,x as p}from"./iframe-Dsd1MpWQ.js";import{c as b,D as g,n as l,L as v,t as m,l as $}from"./dx-ac-base-element-C9dhstFR.js";import{r as C}from"./state-DQlunuPl.js";import{l as E}from"./lodash-BXdGFY-L.js";import{g as y}from"./localization-DmqTGOFp.js";import{D as N}from"./dx-input-select-DRXt9p_b.js";import{n as a}from"./cssClassEnums-v1h5zF5X.js";import{K as d}from"./keyboardEventKeys-BnoN8uA3.js";var I=(e=>(e.ON="on",e.OFF="off",e))(I||{}),L=Object.defineProperty,T=Object.getOwnPropertyDescriptor,i=(e,t,o,n)=>{for(var h=n>1?void 0:n?T(t,o):t,u=e.length-1,c;u>=0;u--)(c=e[u])&&(h=(n?c(t,o,h):c(h))||h);return n&&h&&L(t,o,h),h};const r=b("enchanted-web-components:components:ac:dx-input-textfield.ts");let s=class extends g{constructor(){super(...arguments),this.value="",this.type="text",this.placeholder="",this.disabled=!1,this.field="",this.hassearchedbefore=!1,this.autocomplete=I.ON,this.ariaLabel=null,this.tempValueHolder="",this.isRTL=y()===v.RTL}get hasClear(){return!!this.clearIcon}get hasAction(){return!!this.actionIcon}connectedCallback(){super.connectedCallback()}handleInput(e){e.stopPropagation(),r("Input event in %s: %s",this.tagName,e.target.value),this.value!==this.tempValueHolder&&this.tempValueHolder===""&&this.hassearchedbefore&&(this.tempValueHolder=`${this.value}`),this.value=e.target.value;const t=new CustomEvent("change",{detail:{value:this.value,type:this.field,triggerSearch:!1}});this.dispatchEvent(t)}handleEnter(e){if(e.stopPropagation(),r("Enter event in %s: %s",this.tagName,this.value),e.key===d.ENTER){const t=new CustomEvent("change",{detail:{value:this.value,type:this.field,triggerSearch:!0}});this.dispatchEvent(t),this.tempValueHolder=this.value,this.hassearchedbefore=!0}}handleClear(e){e.stopPropagation(),e.preventDefault(),r("Clear event in %s: %s",this.tagName,this.value),this.value!==this.tempValueHolder&&this.tempValueHolder===""&&this.hassearchedbefore&&(this.tempValueHolder=`${this.value}`),this.value="";const t=this.renderRoot.querySelector(`#${`input-${this.field}`}`);t&&t.focus();const o=new CustomEvent("change",{detail:{type:N.CLEAR_QUERY}});this.dispatchEvent(o)}handleClearEnter(e){e.stopPropagation(),r("Clear Enter event in %s: %s",this.tagName,this.value),(e.key===d.ENTER||e.key===d.SPACE)&&this.handleClear(e)}handleBlur(e){if(e.stopPropagation(),e.preventDefault(),r("Blur event in %s: %s",this.tagName,this.value),this.value===""){this.value=this.tempValueHolder;const t=new CustomEvent("change",{detail:{value:this.tempValueHolder,type:this.field}});this.dispatchEvent(t),this.tempValueHolder=""}}handleEnterSearch(e){e.stopPropagation(),r("Search by Enter Key event in %s: %s",this.tagName,this.value),e.key===d.ENTER&&(e.stopPropagation(),this.handleSearch(e))}handleSearch(e){e.stopPropagation(),e.preventDefault(),r("Search by Mouse Click event in %s: %s",this.tagName,this.value);const t=new CustomEvent("change",{detail:{value:this.value,type:this.field,triggerSearch:!0}});this.dispatchEvent(t),this.tempValueHolder=this.value,this.hassearchedbefore=!0}handleFocus(e){e.stopPropagation(),e.preventDefault(),r("Focus event in %s: %s",this.tagName,this.value),this.value!==this.tempValueHolder&&this.tempValueHolder===""&&this.hassearchedbefore&&(this.tempValueHolder=`${this.value}`)}getInputParts(e){let t="";switch(e){case a.INPUT:t=a.INPUT,this.disabled&&(t=`${a.INPUT} ${a.INPUT_DISABLED}`),(this.hasClear||this.hasAction)&&(t=`${t} ${this.isRTL?a.INPUT_ICON_CLEAR_RTL:a.INPUT_ICON_CLEAR}`),this.hasClear&&this.hasAction&&(t=`${t} ${this.isRTL?a.INPUT_ICON_BOTH_RTL:a.INPUT_ICON_BOTH}`);break;case a.ICON_CLEAR:t=`${this.isRTL?a.ICON_CLEAR_RTL:a.ICON_CLEAR}${this.label?` ${a.ICON_CLEAR_WITH_LABEL}`:""}`;break;case a.ICON_ACTION:t=`${this.isRTL?a.ICON_ACTION_RTL:a.ICON_ACTION}${this.label?` ${a.ICON_ACTION_WITH_LABEL}`:""}`,this.disabled&&(t=`${t} ${a.ICON_ACTION_DISABLED}`);break;case a.LABEL:t=this.disabled?`${a.LABEL} ${a.LABEL_DISABLED}`:a.LABEL;break}return t}setTempValueHolder(e){this.tempValueHolder=e}render(){return r("Rendering %s: value - %s, disabled - %s, has searched before - %s",this.tagName,this.value,this.disabled,this.hassearchedbefore),p`
      <div part="div">
        ${this.label?p`<label data-testid="dx-input-textfield-label" for=${`input-${this.field}`} part="${this.getInputParts(a.LABEL)}">${this.label}</label>`:f}
        <input
          tabIndex=1
          data-testid="dx-input-textfield-input"
          type="${this.type}"
          part="${this.getInputParts(a.INPUT)}"
          part-attributes="selected"
          placeholder="${this.placeholder||this.getMessage("input.textfield.placeholder.type.to.search")}"
          @input=${this.handleInput}
          @keydown=${E.debounce(this.handleEnter,500)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          id=${`input-${this.field}`}
          .value=${this.value}
          ?disabled=${this.disabled}
          autocomplete=${this.autocomplete}
          aria-label=${this.ariaLabel||this.placeholder||this.getMessage("input.textfield.placeholder.type.to.search")}
        />
        <!-- This icon will take color from the parent component as useCurrentColor set to true -->
        ${this.hasClear?p`
          <div
            tabIndex=2
            @click=${this.handleClear}
            @keydown=${this.handleClearEnter}
            data-testid="dx-clear-icon"
            aria-label=${this.getMessage("input.textfield.clear")}
            part="${this.getInputParts(a.ICON_CLEAR)}"
            role="button"
          >
            ${this.clearIcon}
          </div>`:f}
        ${this.hasAction?p`
          <div
            @click=${this.handleSearch}
            @keydown=${this.handleEnterSearch}
            data-testid="dx-action-icon"
            aria-label=${this.getMessage("input.textfield.action")}
            part="${this.getInputParts(a.ICON_ACTION)}"
            role="button"
            tabindex=${this.disabled?-1:3}
          >
            ${this.actionIcon}
          </div>`:f}
      </div>
    `}};s.shadowRootOptions={...g.shadowRootOptions,delegatesFocus:!0};i([l({type:String})],s.prototype,"value",2);i([l({type:String})],s.prototype,"type",2);i([l({type:String})],s.prototype,"label",2);i([l({type:String})],s.prototype,"placeholder",2);i([l({type:Boolean})],s.prototype,"disabled",2);i([l()],s.prototype,"clearIcon",2);i([l()],s.prototype,"actionIcon",2);i([l()],s.prototype,"field",2);i([l({type:Boolean})],s.prototype,"hassearchedbefore",2);i([l({type:String})],s.prototype,"autocomplete",2);i([l({type:String,attribute:"aria-label"})],s.prototype,"ariaLabel",2);i([C()],s.prototype,"tempValueHolder",2);i([C()],s.prototype,"isRTL",2);s=i([m("dx-input-textfield"),$()],s);
