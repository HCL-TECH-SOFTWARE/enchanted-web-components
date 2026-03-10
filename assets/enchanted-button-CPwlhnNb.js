import{c as I,E as l,L as D,aq as U,n as T,N as h}from"./tags-xkLHt5Ez.js";import{r as B}from"./state-BMB52Uli.js";import{x as u,E as a}from"./iframe-C32rrkgB.js";import{i as n,I as E,k as t,N as f}from"./cssClassEnums-WDBe4U61.js";import{g as C}from"./localization-BszdroIW.js";import{K as A}from"./keyboardEventKeys-BnoN8uA3.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=(N,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(N,e,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function S(N,e){return(s,c,o)=>{const _=d=>{var p;return((p=d.renderRoot)==null?void 0:p.querySelector(N))??null};return b(s,c,{get(){return _(this)}})}}var R=Object.defineProperty,i=(N,e,s,c)=>{for(var o=void 0,_=N.length-1,d;_>=0;_--)(d=N[_])&&(o=d(e,s,o)||o);return o&&R(e,s,o),o};const g=I("enchanted-web-components:components:atomic-component:enchanted-button.ts"),O=class O extends l{constructor(){super(...arguments),this.focused=!1,this.disabled=!1,this.endicon=!1,this.variant=n.BUTTON_CONTAINED_VAR,this.withPadding=!1,this.inverseColor=!1,this.size=E.SMALL,this.ariaLabel="",this.ariaHasPopup="",this.ariaExpanded="false"}getButtonPart(){if(this.disabled)switch(this.variant){case n.BUTTON_TEXT_VAR:return this.inverseColor?t.BUTTON_ENCHANTED_TEXT_DISABLED_INVERSE:t.BUTTON_ENCHANTED_TEXT_DISABLED;case n.BUTTON_OUTLINED_VAR:return t.BUTTON_ENCHANTED_OUTLINED_DISABLED;default:return this.inverseColor?t.BUTTON_CONTAINED_DISABLED_INVERSE:t.BUTTON_CONTAINED_DISABLED}if(this.focused)switch(this.variant){case n.BUTTON_TEXT_VAR:return this.inverseColor?t.BUTTON_ENCHANTED_TEXT_FOCUSED_INVERSE:t.BUTTON_ENCHANTED_TEXT_FOCUSED;case n.BUTTON_OUTLINED_VAR:return t.BUTTON_ENCHANTED_OUTLINED_FOCUSED;default:return this.inverseColor?t.BUTTON_CONTAINED_FOCUSED_INVERSE:t.BUTTON_CONTAINED_FOCUSED}switch(this.variant){case n.BUTTON_TEXT_VAR:return this.inverseColor?t.BUTTON_ENCHANTED_TEXT_INVERSE:t.BUTTON_ENCHANTED_TEXT;case n.BUTTON_OUTLINED_VAR:return t.BUTTON_ENCHANTED_OUTLINED;case n.BUTTON_CONTAINED_VAR:return this.inverseColor?t.BUTTON_CONTAINED_INVERSE:t.BUTTON_CONTAINED;default:return t.BUTTON}}getStartIconPart(){return this.buttontext?C()===D.RTL?t.BUTTON_START_ICON_RTL_MARGIN:t.BUTTON_START_ICON:this.size===E.MEDIUM?this.withPadding?t.BUTTON_START_ICON_MEDIUM_WITH_PADDING:t.BUTTON_START_ICON_MEDIUM_WITHOUT_PADDING:this.size===E.FAB?t.BUTTON_START_ICON_FAB:this.withPadding?t.BUTTON_START_ICON_SMALL_WITH_PADDING:t.BUTTON_START_ICON_SMALL_WITHOUT_PADDING}partAttributeDecider(e){switch(e){case t.BUTTON:return this.getButtonPart();case t.BUTTON_START_ICON:return this.getStartIconPart();case t.BUTTON_TEXT:return t.BUTTON_TEXT;default:return e}}updated(e){super.updated(e),this.icon&&this._svgIcon&&this._svgIcon.setAttribute("part",this.partAttributeDecider(this.endicon?t.BUTTON_END_ICON:t.BUTTON_START_ICON))}renderIcon(e){if(this.icon){const{strings:s}=this.icon;return s.length>0&&s[0].match(new RegExp(`^\\s*<${U}icon-[a-zA-Z0-9\\-_]+`))?u`
            <span part=${this.partAttributeDecider(this.endicon?t.BUTTON_END_ICON:t.BUTTON_START_ICON)} aria-hidden="true">
            ${this.icon}
            </span>
          `:u`
          ${this.icon}
        `}else if(this.imgurl)return u`
        <img
          src="${this.imgurl}"
          alt="${this.imgurl}"
          part=${this.partAttributeDecider(e?t.BUTTON_END_ICON:t.BUTTON_START_ICON)}
          data-testid="${e?"enchanted-button-endicon-img":"enchanted-button-img"}"
          aria-hidden="true"
        />
      `;return a}_focusButton(){const e=this.renderRoot.querySelector("button");e==null||e.focus()}render(){return u`
      <button
        id="enchanted-button-${this.id}"
        data-testid="enchanted-button"
        part=${this.partAttributeDecider(t.BUTTON)}
        ?disabled=${this.disabled||a}
        @focus=${()=>this.focused=!0}
        @blur=${()=>this.focused=!1}
        @keydown=${this.handleKeyDown}
        aria-label=${this.ariaLabel||"Button"}
        aria-haspopup=${this.ariaHasPopup||a}
        aria-expanded=${this.ariaExpanded||a}
        aria-disabled=${this.disabled?"true":"false"}
        role=${f.BUTTON}
        tabindex="0"
      >
        ${this.endicon?a:this.renderIcon(this.endicon)}
        ${this.buttontext===void 0?a:u`
            <span part=${this.partAttributeDecider(t.BUTTON_TEXT)}>${this.buttontext}</span>
          `}
        ${this.endicon?this.renderIcon(this.endicon):a}
      </button>
    `}handleKeyDown(e){(e.key===A.ENTER||e.key===A.SPACE)&&!this.disabled&&(e.preventDefault(),this._focusButton(),this.dispatchEvent(new Event("click",{bubbles:!0,composed:!0})))}};O.shadowRootOptions={...l.shadowRootOptions,delegatesFocus:!0};let r=O;i([B()],r.prototype,"focused");i([T({type:Boolean,reflect:!0})],r.prototype,"disabled");i([T()],r.prototype,"imgurl");i([T()],r.prototype,"icon");i([T()],r.prototype,"buttontext");i([T({type:Boolean})],r.prototype,"endicon");i([T({type:String})],r.prototype,"variant");i([T({type:Boolean})],r.prototype,"withPadding");i([T({type:Boolean})],r.prototype,"inverseColor");i([T({type:String})],r.prototype,"size");i([T({type:String})],r.prototype,"ariaLabel");i([T({type:String})],r.prototype,"ariaHasPopup");i([T({type:String})],r.prototype,"ariaExpanded");i([S("svg")],r.prototype,"_svgIcon");customElements.get(h)?g("Component (%s) is currently registered and not possible to registrate again.",h):customElements.define(h,r);export{S as e};
