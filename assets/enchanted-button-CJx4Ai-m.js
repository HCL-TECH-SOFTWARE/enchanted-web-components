import{E as c,n as T,L as A,t as I}from"./enchanted-ac-base-element-D6hCixC-.js";import{r as l}from"./state-BWRILggY.js";import{x as d,E as _}from"./iframe-Bl462ZXk.js";import{i as a,I as O,k as t,K as B}from"./cssClassEnums-DRCAaF3v.js";import{g as D}from"./localization-52_TdTxi.js";import{K as E}from"./keyboardEventKeys-BnoN8uA3.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=(e,s,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof s!="object"&&Object.defineProperty(e,s,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function f(e,s){return(n,N,o)=>{const u=h=>{var p;return((p=h.renderRoot)==null?void 0:p.querySelector(e))??null};return U(n,N,{get(){return u(this)}})}}var C=Object.defineProperty,S=Object.getOwnPropertyDescriptor,i=(e,s,n,N)=>{for(var o=N>1?void 0:N?S(s,n):s,u=e.length-1,h;u>=0;u--)(h=e[u])&&(o=(N?h(s,n,o):h(o))||o);return N&&o&&C(s,n,o),o};let r=class extends c{constructor(){super(...arguments),this.focused=!1,this.disabled=!1,this.endicon=!1,this.variant=a.BUTTON_CONTAINED_VAR,this.withPadding=!1,this.inverseColor=!1,this.size=O.SMALL,this.ariaLabel="",this.ariaHasPopup="",this.ariaExpanded="false"}getButtonPart(){if(this.disabled)switch(this.variant){case a.BUTTON_TEXT_VAR:return this.inverseColor?t.BUTTON_ENCHANTED_TEXT_DISABLED_INVERSE:t.BUTTON_ENCHANTED_TEXT_DISABLED;case a.BUTTON_OUTLINED_VAR:return t.BUTTON_ENCHANTED_OUTLINED_DISABLED;default:return this.inverseColor?t.BUTTON_CONTAINED_DISABLED_INVERSE:t.BUTTON_CONTAINED_DISABLED}if(this.focused)switch(this.variant){case a.BUTTON_TEXT_VAR:return this.inverseColor?t.BUTTON_ENCHANTED_TEXT_FOCUSED_INVERSE:t.BUTTON_ENCHANTED_TEXT_FOCUSED;case a.BUTTON_OUTLINED_VAR:return t.BUTTON_ENCHANTED_OUTLINED_FOCUSED;default:return this.inverseColor?t.BUTTON_CONTAINED_FOCUSED_INVERSE:t.BUTTON_CONTAINED_FOCUSED}switch(this.variant){case a.BUTTON_TEXT_VAR:return this.inverseColor?t.BUTTON_ENCHANTED_TEXT_INVERSE:t.BUTTON_ENCHANTED_TEXT;case a.BUTTON_OUTLINED_VAR:return t.BUTTON_ENCHANTED_OUTLINED;case a.BUTTON_CONTAINED_VAR:return this.inverseColor?t.BUTTON_CONTAINED_INVERSE:t.BUTTON_CONTAINED;default:return t.BUTTON}}getStartIconPart(){return this.buttontext?D()===A.RTL?t.BUTTON_START_ICON_RTL_MARGIN:t.BUTTON_START_ICON:this.size===O.MEDIUM?this.withPadding?t.BUTTON_START_ICON_MEDIUM_WITH_PADDING:t.BUTTON_START_ICON_MEDIUM_WITHOUT_PADDING:this.size===O.FAB?t.BUTTON_START_ICON_FAB:this.withPadding?t.BUTTON_START_ICON_SMALL_WITH_PADDING:t.BUTTON_START_ICON_SMALL_WITHOUT_PADDING}partAttributeDecider(e){switch(e){case t.BUTTON:return this.getButtonPart();case t.BUTTON_START_ICON:return this.getStartIconPart();case t.BUTTON_TEXT:return t.BUTTON_TEXT;default:return e}}updated(e){super.updated(e),this.icon&&this._svgIcon&&this._svgIcon.setAttribute("part",this.partAttributeDecider(this.endicon?t.BUTTON_END_ICON:t.BUTTON_START_ICON))}renderIcon(e){if(this.icon){const{strings:s}=this.icon;return s.length>0&&s[0].match(/^\s*<icon-[a-zA-Z0-9\-_]+/)?d`
            <span part=${this.partAttributeDecider(this.endicon?t.BUTTON_END_ICON:t.BUTTON_START_ICON)} aria-hidden="true">
            ${this.icon}
            </span>
          `:d`
          ${this.icon}
        `}else if(this.imgurl)return d`
        <img
          src="${this.imgurl}"
          alt="${this.imgurl}"
          part=${this.partAttributeDecider(e?t.BUTTON_END_ICON:t.BUTTON_START_ICON)}
          data-testid="${e?"enchanted-button-endicon-img":"enchanted-button-img"}"
          aria-hidden="true"
        />
      `;return _}_focusButton(){const e=this.renderRoot.querySelector("button");e==null||e.focus()}render(){return d`
      <button
        id="enchanted-button-${this.id}"
        data-testid="enchanted-button"
        part=${this.partAttributeDecider(t.BUTTON)}
        ?disabled=${this.disabled||_}
        @focus=${()=>this.focused=!0}
        @blur=${()=>this.focused=!1}
        @keydown=${this.handleKeyDown}
        aria-label=${this.ariaLabel||"Button"}
        aria-haspopup=${this.ariaHasPopup||_}
        aria-expanded=${this.ariaExpanded||_}
        aria-disabled=${this.disabled?"true":"false"}
        role=${B.BUTTON}
        tabindex="0"
      >
        ${this.endicon?_:this.renderIcon(this.endicon)}
        ${this.buttontext===void 0?_:d`
            <span part=${this.partAttributeDecider(t.BUTTON_TEXT)}>${this.buttontext}</span>
          `}
        ${this.endicon?this.renderIcon(this.endicon):_}
      </button>
    `}handleKeyDown(e){(e.key===E.ENTER||e.key===E.SPACE)&&!this.disabled&&(e.preventDefault(),this._focusButton(),this.dispatchEvent(new Event("click",{bubbles:!0,composed:!0})))}};r.shadowRootOptions={...c.shadowRootOptions,delegatesFocus:!0};i([l()],r.prototype,"focused",2);i([T({type:Boolean,reflect:!0})],r.prototype,"disabled",2);i([T()],r.prototype,"imgurl",2);i([T()],r.prototype,"icon",2);i([T()],r.prototype,"buttontext",2);i([T({type:Boolean})],r.prototype,"endicon",2);i([T({type:String})],r.prototype,"variant",2);i([T({type:Boolean})],r.prototype,"withPadding",2);i([T({type:Boolean})],r.prototype,"inverseColor",2);i([T({type:String})],r.prototype,"size",2);i([T({type:String})],r.prototype,"ariaLabel",2);i([T({type:String})],r.prototype,"ariaHasPopup",2);i([T({type:String})],r.prototype,"ariaExpanded",2);i([f("svg")],r.prototype,"_svgIcon",2);r=i([I("enchanted-button")],r);export{f as e};
