import{E as c,x as n}from"./iframe-g_dBLWCH.js";import{D as g,n as l,L as I,t as b,l as C}from"./dx-ac-base-element-Ba1nuzGa.js";import{r as $}from"./state-BrHRPonU.js";import{l as m}from"./lodash-CR4q0RmQ.js";import{g as v}from"./localization-_QVbBsw5.js";import{D as y}from"./dx-input-select-DRXt9p_b.js";import{k as a}from"./cssClassEnums-DKCjOuJT.js";import"./dx-svg-icon-j95vRYmd.js";import{K as p}from"./keyboardEventKeys-BnoN8uA3.js";var f=(e=>(e.ON="on",e.OFF="off",e))(f||{}),N=Object.defineProperty,E=Object.getOwnPropertyDescriptor,i=(e,t,r,h)=>{for(var o=h>1?void 0:h?E(t,r):t,d=e.length-1,u;d>=0;d--)(u=e[d])&&(o=(h?u(t,r,o):u(o))||o);return h&&o&&N(t,r,o),o};let s=class extends g{constructor(){super(...arguments),this.value="",this.type="text",this.placeholder="",this.disabled=!1,this.ignoreDisable=!1,this.clearIconUrl="",this.actionIconUrl="",this.field="",this.hassearchedbefore=!1,this.autocomplete=f.ON,this.tempValueHolder="",this.isRTL=v()===I.RTL}connectedCallback(){super.connectedCallback()}handleInput(e){e.stopPropagation(),console.debug(`Input event in ${this.tagName}: ${e.target.value}`),this.value!==this.tempValueHolder&&this.tempValueHolder===""&&this.hassearchedbefore&&(this.tempValueHolder=`${this.value}`),this.value=e.target.value;const t=new CustomEvent("change",{detail:{value:this.value,type:this.field,triggerSearch:!1}});this.dispatchEvent(t)}handleEnter(e){if(e.stopPropagation(),console.debug(`Enter event in ${this.tagName}: ${this.value}`),e.key===p.ENTER){const t=new CustomEvent("change",{detail:{value:this.value,type:this.field,triggerSearch:!0}});this.dispatchEvent(t),this.tempValueHolder=this.value,this.hassearchedbefore=!0}}handleClear(e){e.stopPropagation(),e.preventDefault(),console.debug(`Clear event in ${this.tagName}: ${this.value}`),this.value!==this.tempValueHolder&&this.tempValueHolder===""&&this.hassearchedbefore&&(this.tempValueHolder=`${this.value}`),this.value="";const t=this.renderRoot.querySelector(`#${`input-${this.field}`}`);t&&t.focus();const r=new CustomEvent("change",{detail:{type:y.CLEAR_QUERY}});this.dispatchEvent(r)}handleClearEnter(e){e.stopPropagation(),console.debug(`Clear Enter event in ${this.tagName}: ${this.value}`),(e.key===p.ENTER||e.key===p.SPACE)&&this.handleClear(e)}handleBlur(e){if(e.stopPropagation(),e.preventDefault(),console.debug(`Blur event in ${this.tagName}: ${this.value}`),this.value===""){this.value=this.tempValueHolder;const t=new CustomEvent("change",{detail:{value:this.tempValueHolder,type:this.field}});this.dispatchEvent(t),this.tempValueHolder=""}}handleEnterSearch(e){e.stopPropagation(),console.debug(`Search by Enter Key event in ${this.tagName}: ${this.value}`),e.key===p.ENTER&&(e.stopPropagation(),this.handleSearch(e))}handleSearch(e){e.stopPropagation(),e.preventDefault(),console.debug(`Search by Mouse Click event in ${this.tagName}: ${this.value}`);const t=new CustomEvent("change",{detail:{value:this.value,type:this.field,triggerSearch:!0}});this.dispatchEvent(t),this.tempValueHolder=this.value,this.hassearchedbefore=!0}handleFocus(e){e.stopPropagation(),e.preventDefault(),console.debug(`Focus event in ${this.tagName}: ${this.value}`),this.value!==this.tempValueHolder&&this.tempValueHolder===""&&this.hassearchedbefore&&(this.tempValueHolder=`${this.value}`)}getInputParts(e){let t="";switch(e){case a.INPUT:t=a.INPUT,this.disabled&&(t=`${a.INPUT} ${a.INPUT_DISABLED}`),(this.clearIconUrl||this.actionIconUrl)&&(t=`${t} ${this.isRTL?a.INPUT_ICON_CLEAR_RTL:a.INPUT_ICON_CLEAR}`),this.clearIconUrl&&this.actionIconUrl&&(t=`${t} ${this.isRTL?a.INPUT_ICON_BOTH_RTL:a.INPUT_ICON_BOTH}`);break;case a.ICON_CLEAR:t=`${this.isRTL?a.ICON_CLEAR_RTL:a.ICON_CLEAR}${this.label?` ${a.ICON_CLEAR_WITH_LABEL}`:""}`;break;case a.ICON_ACTION:t=`${this.isRTL?a.ICON_ACTION_RTL:a.ICON_ACTION}${this.label?` ${a.ICON_ACTION_WITH_LABEL}`:""}`,this.disabled&&(t=`${t} ${a.ICON_ACTION_DISABLED}`);break}return t}setTempValueHolder(e){this.tempValueHolder=e}render(){return console.debug(`Rendering ${this.tagName}: value - ${this.value}, disabled - ${this.disabled}, has searched before - ${this.hassearchedbefore}`),n`
      <div part="div" role="searchbox" 
        aria-label=${this.placeholder||this.getMessage("input.textfield.placeholder.type.to.search")}
      >
        ${this.label?n`<label data-testid="dx-input-textfield-label" for=${`input-${this.field}`} part="label">${this.label}</label>`:c}
        <input
          tabIndex=1
          data-testid="dx-input-textfield-input"
          type="${this.type}"
          part="${this.getInputParts(a.INPUT)}"
          part-attributes="selected"
          placeholder="${this.placeholder||this.getMessage("input.textfield.placeholder.type.to.search")}"
          @input=${this.handleInput}
          @keydown=${m.debounce(this.handleEnter,500)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          id=${`input-${this.field}`}
          .value=${this.value}
          ?disabled=${this.ignoreDisable?!1:this.disabled}
          autocomplete=${this.autocomplete}
        />
        <!-- This icon will take color from the parent component as useCurrentColor set to true -->
        ${this.clearIconUrl?n`
          <dx-svg-icon
            tabIndex=2
            @click=${this.handleClear}
            @keydown=${this.handleClearEnter}
            data-testid="dx-clear-icon"
            .icon=${this.clearIconUrl}
            ?useCurrentColor=${!0}
            aria-label=${this.getMessage("input.textfield.clear")}
            part="${this.getInputParts(a.ICON_CLEAR)}"
            role="button"
          />`:c}
        <!-- This icon will take color from the parent component as useCurrentColor set to true -->
        ${this.actionIconUrl?n`
          <dx-svg-icon
            .icon=${this.actionIconUrl}
            ?useCurrentColor=${!1}
            @click=${this.handleSearch}
            @keydown=${this.handleEnterSearch}
            tabIndex=${this.disabled?-1:3}
            data-testid="dx-action-icon"
            aria-label=${this.getMessage("input.textfield.action")}
            part="${this.getInputParts(a.ICON_ACTION)}"
            role="button"
          />`:c}
      </div>
    `}};s.shadowRootOptions={...g.shadowRootOptions,delegatesFocus:!0};i([l({type:String})],s.prototype,"value",2);i([l({type:String})],s.prototype,"type",2);i([l({type:String})],s.prototype,"label",2);i([l({type:String})],s.prototype,"placeholder",2);i([l({type:Boolean})],s.prototype,"disabled",2);i([l({type:Boolean})],s.prototype,"ignoreDisable",2);i([l({type:String})],s.prototype,"clearIconUrl",2);i([l({type:String})],s.prototype,"actionIconUrl",2);i([l()],s.prototype,"field",2);i([l({type:Boolean})],s.prototype,"hassearchedbefore",2);i([l({type:String})],s.prototype,"autocomplete",2);i([$()],s.prototype,"tempValueHolder",2);i([$()],s.prototype,"isRTL",2);s=i([b("dx-input-textfield"),C()],s);
