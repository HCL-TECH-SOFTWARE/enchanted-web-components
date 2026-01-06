import{E as g,x as p}from"./iframe-B8Ykn-0R.js";import{c as f,E as C,n as r,L as E,t as b,l as $}from"./enchanted-ac-base-element-BcyMwwt4.js";import{r as v}from"./state-DtTHjCak.js";import{l as y}from"./lodash-CM0-ShnD.js";import{g as N}from"./localization-Ca5Mq-1-.js";import{E as L}from"./enchanted-select-Ge91KUgI.js";import{w as a}from"./cssClassEnums-D4dgqifY.js";import{K as d}from"./keyboardEventKeys-BnoN8uA3.js";var I=(t=>(t.ON="on",t.OFF="off",t))(I||{}),T=Object.defineProperty,_=Object.getOwnPropertyDescriptor,i=(t,e,l,o)=>{for(var n=o>1?void 0:o?_(e,l):e,c=t.length-1,u;c>=0;c--)(u=t[c])&&(n=(o?u(e,l,n):u(n))||n);return o&&n&&T(e,l,n),n};const h=f("enchanted-web-components:components:ac:enchanted-textfield.ts");let s=class extends C{constructor(){super(...arguments),this.value="",this.type="text",this.placeholder="",this.disabled=!1,this.field="",this.hassearchedbefore=!1,this.autocomplete=I.ON,this.ariaLabel=null,this.isRTL=N()===E.RTL}get hasClear(){return!!this.clearIcon}get hasAction(){return!!this.actionIcon}connectedCallback(){super.connectedCallback()}handleInput(t){t.stopPropagation(),h("Input event in %s: %s",this.tagName,t.target.value),this.value=t.target.value;const e=new CustomEvent("change",{detail:{value:this.value,type:this.field,triggerSearch:!1}});this.dispatchEvent(e)}handleEnter(t){if(t.stopPropagation(),h("Enter event in %s: %s",this.tagName,this.value),t.key===d.ENTER){const e=new CustomEvent("change",{detail:{value:this.value,type:this.field,triggerSearch:!0}});this.dispatchEvent(e),this.hassearchedbefore=!0}}handleClear(t){t.stopPropagation(),t.preventDefault(),h("Clear event in %s: %s",this.tagName,this.value),this.value="";const e=this.renderRoot.querySelector(`#${`input-${this.field}`}`);e&&e.focus();const l=new CustomEvent("change",{detail:{type:L.CLEAR_QUERY}});this.dispatchEvent(l)}handleClearEnter(t){t.stopPropagation(),h("Clear Enter event in %s: %s",this.tagName,this.value),(t.key===d.ENTER||t.key===d.SPACE)&&this.handleClear(t)}handleBlur(t){if(t.stopPropagation(),t.preventDefault(),h("Blur event in %s: %s",this.tagName,this.value),this.value===""){const e=new CustomEvent("change",{detail:{value:this.value,type:this.field}});this.dispatchEvent(e)}}handleEnterSearch(t){t.stopPropagation(),h("Search by Enter Key event in %s: %s",this.tagName,this.value),t.key===d.ENTER&&(t.stopPropagation(),this.handleSearch(t))}handleSearch(t){t.stopPropagation(),t.preventDefault(),h("Search by Mouse Click event in %s: %s",this.tagName,this.value);const e=new CustomEvent("change",{detail:{value:this.value,type:this.field,triggerSearch:!0}});this.dispatchEvent(e),this.hassearchedbefore=!0}getInputParts(t){let e="";switch(t){case a.INPUT:e=a.INPUT,this.disabled&&(e=`${a.INPUT} ${a.INPUT_DISABLED}`),(this.hasClear||this.hasAction)&&(e=`${e} ${this.isRTL?a.INPUT_ICON_CLEAR_RTL:a.INPUT_ICON_CLEAR}`),this.hasClear&&this.hasAction&&(e=`${e} ${this.isRTL?a.INPUT_ICON_BOTH_RTL:a.INPUT_ICON_BOTH}`);break;case a.ICON_CLEAR:e=`${this.isRTL?a.ICON_CLEAR_RTL:a.ICON_CLEAR}${this.label?` ${a.ICON_CLEAR_WITH_LABEL}`:""}`;break;case a.ICON_ACTION:e=`${this.isRTL?a.ICON_ACTION_RTL:a.ICON_ACTION}${this.label?` ${a.ICON_ACTION_WITH_LABEL}`:""}`,this.disabled&&(e=`${e} ${a.ICON_ACTION_DISABLED}`);break;case a.LABEL:e=this.disabled?`${a.LABEL} ${a.LABEL_DISABLED}`:a.LABEL;break}return e}render(){return h("Rendering %s: value - %s, disabled - %s, has searched before - %s",this.tagName,this.value,this.disabled,this.hassearchedbefore),p`
      <div part="div">
        ${this.label?p`<label data-testid="enchanted-textfield-label" for=${`input-${this.field}`} part="${this.getInputParts(a.LABEL)}">${this.label}</label>`:g}
        <input
          tabIndex=1
          data-testid="enchanted-textfield-input"
          type="${this.type}"
          part="${this.getInputParts(a.INPUT)}"
          part-attributes="selected"
          placeholder="${this.placeholder||this.getMessage("input.textfield.placeholder.type.to.search")}"
          @input=${this.handleInput}
          @keydown=${y.debounce(this.handleEnter,500)}
          @blur=${this.handleBlur}
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
            data-testid="enchanted-clear-icon"
            aria-label=${this.getMessage("input.textfield.clear")}
            part="${this.getInputParts(a.ICON_CLEAR)}"
            role="button"
          >
            ${this.clearIcon}
          </div>`:g}
        ${this.hasAction?p`
          <div
            @click=${this.handleSearch}
            @keydown=${this.handleEnterSearch}
            data-testid="enchanted-action-icon"
            aria-label=${this.getMessage("input.textfield.action")}
            part="${this.getInputParts(a.ICON_ACTION)}"
            role="button"
            tabindex=${this.disabled?-1:3}
          >
            ${this.actionIcon}
          </div>`:g}
      </div>
    `}};s.shadowRootOptions={...C.shadowRootOptions,delegatesFocus:!0};i([r({type:String})],s.prototype,"value",2);i([r({type:String})],s.prototype,"type",2);i([r({type:String})],s.prototype,"label",2);i([r({type:String})],s.prototype,"placeholder",2);i([r({type:Boolean})],s.prototype,"disabled",2);i([r()],s.prototype,"clearIcon",2);i([r()],s.prototype,"actionIcon",2);i([r()],s.prototype,"field",2);i([r({type:Boolean})],s.prototype,"hassearchedbefore",2);i([r({type:String})],s.prototype,"autocomplete",2);i([r({type:String,attribute:"aria-label"})],s.prototype,"ariaLabel",2);i([v()],s.prototype,"isRTL",2);s=i([b("enchanted-textfield"),$()],s);
