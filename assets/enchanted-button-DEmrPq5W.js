import{E,n as T,L as c,t as I}from"./enchanted-ac-base-element-CBHL5x_U.js";import{r as A}from"./state-B3qr-gd1.js";import{x as h,E as N}from"./iframe-BY3ui3w0.js";import{g as a,I as d,i as t}from"./cssClassEnums-D4dgqifY.js";import{g as B}from"./localization-rBpmtxQQ.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=(e,n,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof n!="object"&&Object.defineProperty(e,n,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(e,n){return(s,_,o)=>{const u=O=>{var p;return((p=O.renderRoot)==null?void 0:p.querySelector(e))??null};return D(s,_,{get(){return u(this)}})}}var l=Object.defineProperty,C=Object.getOwnPropertyDescriptor,i=(e,n,s,_)=>{for(var o=_>1?void 0:_?C(n,s):n,u=e.length-1,O;u>=0;u--)(O=e[u])&&(o=(_?O(n,s,o):O(o))||o);return _&&o&&l(n,s,o),o};let r=class extends E{constructor(){super(...arguments),this.focused=!1,this.disabled=!1,this.endicon=!1,this.variant=a.BUTTON_CONTAINED_VAR,this.withPadding=!1,this.inverseColor=!1,this.size=d.SMALL,this.ariaLabel="",this.ariaHasPopup="",this.ariaExpanded="false"}getButtonPart(){if(this.disabled)switch(this.variant){case a.BUTTON_TEXT_VAR:return this.inverseColor?t.BUTTON_ENCHANTED_TEXT_DISABLED_INVERSE:t.BUTTON_ENCHANTED_TEXT_DISABLED;case a.BUTTON_OUTLINED_VAR:return t.BUTTON_ENCHANTED_OUTLINED_DISABLED;default:return this.inverseColor?t.BUTTON_CONTAINED_DISABLED_INVERSE:t.BUTTON_CONTAINED_DISABLED}if(this.focused)switch(this.variant){case a.BUTTON_TEXT_VAR:return this.inverseColor?t.BUTTON_ENCHANTED_TEXT_FOCUSED_INVERSE:t.BUTTON_ENCHANTED_TEXT_FOCUSED;case a.BUTTON_OUTLINED_VAR:return t.BUTTON_ENCHANTED_OUTLINED_FOCUSED;default:return this.inverseColor?t.BUTTON_CONTAINED_FOCUSED_INVERSE:t.BUTTON_CONTAINED_FOCUSED}switch(this.variant){case a.BUTTON_TEXT_VAR:return this.inverseColor?t.BUTTON_ENCHANTED_TEXT_INVERSE:t.BUTTON_ENCHANTED_TEXT;case a.BUTTON_OUTLINED_VAR:return t.BUTTON_ENCHANTED_OUTLINED;case a.BUTTON_CONTAINED_VAR:return this.inverseColor?t.BUTTON_CONTAINED_INVERSE:t.BUTTON_CONTAINED;default:return t.BUTTON}}getStartIconPart(){return this.buttontext?B()===c.RTL?t.BUTTON_START_ICON_RTL_MARGIN:t.BUTTON_START_ICON:this.size===d.MEDIUM?this.withPadding?t.BUTTON_START_ICON_MEDIUM_WITH_PADDING:t.BUTTON_START_ICON_MEDIUM_WITHOUT_PADDING:this.size===d.FAB?t.BUTTON_START_ICON_FAB:this.withPadding?t.BUTTON_START_ICON_SMALL_WITH_PADDING:t.BUTTON_START_ICON_SMALL_WITHOUT_PADDING}partAttributeDecider(e){switch(e){case t.BUTTON:return this.getButtonPart();case t.BUTTON_START_ICON:return this.getStartIconPart();case t.BUTTON_TEXT:return t.BUTTON_TEXT;default:return e}}updated(e){super.updated(e),this.icon&&this._svgIcon&&this._svgIcon.setAttribute("part",this.partAttributeDecider(this.endicon?t.BUTTON_END_ICON:t.BUTTON_START_ICON))}renderIcon(e){if(this.icon){const{strings:n}=this.icon;return n.length>0&&n[0].match(/^\s*<icon-[a-zA-Z0-9\-_]+/)?h`
            <span part=${this.partAttributeDecider(this.endicon?t.BUTTON_END_ICON:t.BUTTON_START_ICON)} aria-hidden="true">
            ${this.icon}
            </span>
          `:h`
          ${this.icon}
        `}else if(this.imgurl)return h`
        <img
          src="${this.imgurl}"
          alt="${this.imgurl}"
          part=${this.partAttributeDecider(e?t.BUTTON_END_ICON:t.BUTTON_START_ICON)}
          data-testid="${e?"enchanted-button-endicon-img":"enchanted-button-img"}"
          aria-hidden="true"
        />
      `;return N}_focusButton(){const e=this.renderRoot.querySelector("button");e==null||e.focus()}render(){return h`
      <button
        id="enchanted-button-${this.id}"
        data-testid="enchanted-button"
        part=${this.partAttributeDecider(t.BUTTON)}
        ?disabled=${this.disabled||N}
        @focus=${()=>this.focused=!0}
        @blur=${()=>this.focused=!1}
        aria-label=${this.ariaLabel}
        aria-haspopup=${this.ariaHasPopup}
        ${this.ariaExpanded?`aria-expanded="${this.ariaExpanded}"`:N}
        tabindex="0"
      >
        ${this.endicon?N:this.renderIcon(this.endicon)}
        ${this.buttontext===void 0?N:h`
            <span part=${this.partAttributeDecider(t.BUTTON_TEXT)}>${this.buttontext}</span>
          `}
        ${this.endicon?this.renderIcon(this.endicon):N}
      </button>
    `}};r.shadowRootOptions={...E.shadowRootOptions,delegatesFocus:!0};i([A()],r.prototype,"focused",2);i([T({type:Boolean,reflect:!0})],r.prototype,"disabled",2);i([T()],r.prototype,"imgurl",2);i([T()],r.prototype,"icon",2);i([T()],r.prototype,"buttontext",2);i([T({type:Boolean})],r.prototype,"endicon",2);i([T({type:String})],r.prototype,"variant",2);i([T({type:Boolean})],r.prototype,"withPadding",2);i([T({type:Boolean})],r.prototype,"inverseColor",2);i([T({type:String})],r.prototype,"size",2);i([T({type:String})],r.prototype,"ariaLabel",2);i([T({type:String})],r.prototype,"ariaHasPopup",2);i([T({type:String})],r.prototype,"ariaExpanded",2);i([U("svg")],r.prototype,"_svgIcon",2);r=i([I("enchanted-button")],r);export{U as e};
