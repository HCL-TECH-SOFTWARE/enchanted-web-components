import{E as g,x as p}from"./iframe-CBMrvQ84.js";import{c as f,E as C,n as r,M as E,L as b,l as N}from"./tags-DiA_3i88.js";import{r as $}from"./state-wm_82jA5.js";import{l as v}from"./lodash-Y3IwG_AG.js";import{g as y}from"./localization-DpWuhKau.js";import{E as m}from"./enchanted-select-Ge91KUgI.js";import{J as a}from"./cssClassEnums-WDBe4U61.js";import{K as d}from"./keyboardEventKeys-BnoN8uA3.js";var I=(e=>(e.ON="on",e.OFF="off",e))(I||{}),L=Object.defineProperty,T=Object.getOwnPropertyDescriptor,i=(e,t,l,o)=>{for(var h=o>1?void 0:o?T(t,l):t,c=e.length-1,u;c>=0;c--)(u=e[c])&&(h=(o?u(t,l,h):u(h))||h);return o&&h&&L(t,l,h),h};const n=f("enchanted-web-components:components:atomic-component:enchanted-textfield.ts");let s=class extends C{constructor(){super(...arguments),this.value="",this.type="text",this.placeholder="",this.disabled=!1,this.field="",this.hassearchedbefore=!1,this.autocomplete=I.ON,this.ariaLabel=null,this.isRTL=y()===b.RTL}get hasClear(){return!!this.clearIcon}get hasAction(){return!!this.actionIcon}connectedCallback(){super.connectedCallback()}handleInput(e){e.stopPropagation(),n("Input event in %s: %s",this.tagName,e.target.value),this.value=e.target.value;const t=new CustomEvent("change",{detail:{value:this.value,type:this.field,triggerSearch:!1}});this.dispatchEvent(t)}handleEnter(e){if(e.stopPropagation(),n("Enter event in %s: %s",this.tagName,this.value),e.key===d.ENTER){const t=new CustomEvent("change",{detail:{value:this.value,type:this.field,triggerSearch:!0}});this.dispatchEvent(t),this.hassearchedbefore=!0}}handleClear(e){e.stopPropagation(),e.preventDefault(),n("Clear event in %s: %s",this.tagName,this.value),this.value="";const t=this.renderRoot.querySelector(`#${`input-${this.field}`}`);t&&t.focus();const l=new CustomEvent("change",{detail:{type:m.CLEAR_QUERY}});this.dispatchEvent(l)}handleClearEnter(e){e.stopPropagation(),n("Clear Enter event in %s: %s",this.tagName,this.value),(e.key===d.ENTER||e.key===d.SPACE)&&this.handleClear(e)}handleBlur(e){if(e.stopPropagation(),e.preventDefault(),n("Blur event in %s: %s",this.tagName,this.value),this.value===""){const t=new CustomEvent("change",{detail:{value:this.value,type:this.field}});this.dispatchEvent(t)}}handleEnterSearch(e){e.stopPropagation(),n("Search by Enter Key event in %s: %s",this.tagName,this.value),e.key===d.ENTER&&(e.stopPropagation(),this.handleSearch(e))}handleSearch(e){e.stopPropagation(),e.preventDefault(),n("Search by Mouse Click event in %s: %s",this.tagName,this.value);const t=new CustomEvent("change",{detail:{value:this.value,type:this.field,triggerSearch:!0}});this.dispatchEvent(t),this.hassearchedbefore=!0}getInputParts(e){let t="";switch(e){case a.INPUT:t=a.INPUT,this.disabled&&(t=`${a.INPUT} ${a.INPUT_DISABLED}`),(this.hasClear||this.hasAction)&&(t=`${t} ${this.isRTL?a.INPUT_ICON_CLEAR_RTL:a.INPUT_ICON_CLEAR}`),this.hasClear&&this.hasAction&&(t=`${t} ${this.isRTL?a.INPUT_ICON_BOTH_RTL:a.INPUT_ICON_BOTH}`);break;case a.ICON_CLEAR:t=`${this.isRTL?a.ICON_CLEAR_RTL:a.ICON_CLEAR}${this.label?` ${a.ICON_CLEAR_WITH_LABEL}`:""}`;break;case a.ICON_ACTION:t=`${this.isRTL?a.ICON_ACTION_RTL:a.ICON_ACTION}${this.label?` ${a.ICON_ACTION_WITH_LABEL}`:""}`,this.disabled&&(t=`${t} ${a.ICON_ACTION_DISABLED}`);break;case a.LABEL:t=this.disabled?`${a.LABEL} ${a.LABEL_DISABLED}`:a.LABEL;break}return t}render(){return n("Rendering %s: value - %s, disabled - %s, has searched before - %s",this.tagName,this.value,this.disabled,this.hassearchedbefore),p`
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
          @keydown=${v.debounce(this.handleEnter,500)}
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
    `}};s.shadowRootOptions={...C.shadowRootOptions,delegatesFocus:!0};i([r({type:String})],s.prototype,"value",2);i([r({type:String})],s.prototype,"type",2);i([r({type:String})],s.prototype,"label",2);i([r({type:String})],s.prototype,"placeholder",2);i([r({type:Boolean})],s.prototype,"disabled",2);i([r()],s.prototype,"clearIcon",2);i([r()],s.prototype,"actionIcon",2);i([r()],s.prototype,"field",2);i([r({type:Boolean})],s.prototype,"hassearchedbefore",2);i([r({type:String})],s.prototype,"autocomplete",2);i([r({type:String,attribute:"aria-label"})],s.prototype,"ariaLabel",2);i([$()],s.prototype,"isRTL",2);s=i([N()],s);customElements.get(E)?n("Component (%s) is currently registered and not possible to registrate again.",E):customElements.define(E,s);
