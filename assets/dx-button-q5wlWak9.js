import{D as E,n as T,L as c,t as D}from"./dx-ac-base-element-BRVmdAbS.js";import{r as I}from"./state-g_VKachv.js";import{x as p,E as N}from"./iframe-DgNdRKpa.js";import{g as a,I as d,j as t}from"./cssClassEnums-flPS6Iko.js";import{g as A}from"./localization-8Qc5IxgI.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=(e,s,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof s!="object"&&Object.defineProperty(e,s,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(e,s){return(o,_,n)=>{const u=O=>{var h;return((h=O.renderRoot)==null?void 0:h.querySelector(e))??null};return B(o,_,{get(){return u(this)}})}}var l=Object.defineProperty,C=Object.getOwnPropertyDescriptor,i=(e,s,o,_)=>{for(var n=_>1?void 0:_?C(s,o):s,u=e.length-1,O;u>=0;u--)(O=e[u])&&(n=(_?O(s,o,n):O(n))||n);return _&&n&&l(s,o,n),n};let r=class extends E{constructor(){super(...arguments),this.focused=!1,this.disabled=!1,this.endicon=!1,this.variant=a.BUTTON_CONTAINED_VAR,this.withPadding=!1,this.inverseColor=!1,this.size=d.SMALL,this.ariaLabel="",this.ariaHasPopup="",this.ariaExpanded="false"}getButtonPart(){if(this.disabled)switch(this.variant){case a.BUTTON_TEXT_VAR:return this.inverseColor?t.BUTTON_ENCHANTED_TEXT_DISABLED_INVERSE:t.BUTTON_ENCHANTED_TEXT_DISABLED;case a.BUTTON_OUTLINED_VAR:return t.BUTTON_ENCHANTED_OUTLINED_DISABLED;default:return this.inverseColor?t.BUTTON_CONTAINED_DISABLED_INVERSE:t.BUTTON_CONTAINED_DISABLED}if(this.focused)switch(this.variant){case a.BUTTON_TEXT_VAR:return this.inverseColor?t.BUTTON_ENCHANTED_TEXT_FOCUSED_INVERSE:t.BUTTON_ENCHANTED_TEXT_FOCUSED;case a.BUTTON_OUTLINED_VAR:return t.BUTTON_ENCHANTED_OUTLINED_FOCUSED;default:return this.inverseColor?t.BUTTON_CONTAINED_FOCUSED_INVERSE:t.BUTTON_CONTAINED_FOCUSED}switch(this.variant){case a.BUTTON_TEXT_VAR:return this.inverseColor?t.BUTTON_ENCHANTED_TEXT_INVERSE:t.BUTTON_ENCHANTED_TEXT;case a.BUTTON_OUTLINED_VAR:return t.BUTTON_ENCHANTED_OUTLINED;case a.BUTTON_CONTAINED_VAR:return this.inverseColor?t.BUTTON_CONTAINED_INVERSE:t.BUTTON_CONTAINED;default:return t.BUTTON}}getStartIconPart(){return this.buttontext?A()===c.RTL?t.BUTTON_START_ICON_RTL_MARGIN:t.BUTTON_START_ICON:this.size===d.MEDIUM?this.withPadding?t.BUTTON_START_ICON_MEDIUM_WITH_PADDING:t.BUTTON_START_ICON_MEDIUM_WITHOUT_PADDING:this.size===d.FAB?t.BUTTON_START_ICON_FAB:this.withPadding?t.BUTTON_START_ICON_SMALL_WITH_PADDING:t.BUTTON_START_ICON_SMALL_WITHOUT_PADDING}partAttributeDecider(e){switch(e){case t.BUTTON:return this.getButtonPart();case t.BUTTON_START_ICON:return this.getStartIconPart();case t.BUTTON_TEXT:return t.BUTTON_TEXT;default:return e}}updated(e){super.updated(e),this.icon&&this._svgIcon&&this._svgIcon.setAttribute("part",this.partAttributeDecider(this.endicon?t.BUTTON_END_ICON:t.BUTTON_START_ICON))}renderIcon(e){if(this.icon){const{strings:s}=this.icon;return s.length>0&&s[0].match(/^\s*<icon-[a-zA-Z0-9\-_]+/)?p`
            <span part=${this.partAttributeDecider(this.endicon?t.BUTTON_END_ICON:t.BUTTON_START_ICON)} aria-hidden="true">
            ${this.icon}
            </span>
          `:p`
          ${this.icon}
        `}else if(this.imgurl)return p`
        <img
          src="${this.imgurl}"
          alt="${this.imgurl}"
          part=${this.partAttributeDecider(e?t.BUTTON_END_ICON:t.BUTTON_START_ICON)}
          data-testid="${e?"dx-button-endicon-img":"dx-button-img"}"
          aria-hidden="true"
        />
      `;return N}_focusButton(){const e=this.renderRoot.querySelector("button");e==null||e.focus()}render(){return p`
      <button
        id="dx-button-${this.id}"
        data-testid="dx-button"
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
        ${this.buttontext===void 0?N:p`
            <span part=${this.partAttributeDecider(t.BUTTON_TEXT)}>${this.buttontext}</span>
          `}
        ${this.endicon?this.renderIcon(this.endicon):N}
      </button>
    `}};r.shadowRootOptions={...E.shadowRootOptions,delegatesFocus:!0};i([I()],r.prototype,"focused",2);i([T({type:Boolean,reflect:!0})],r.prototype,"disabled",2);i([T()],r.prototype,"imgurl",2);i([T()],r.prototype,"icon",2);i([T()],r.prototype,"buttontext",2);i([T({type:Boolean})],r.prototype,"endicon",2);i([T({type:String})],r.prototype,"variant",2);i([T({type:Boolean})],r.prototype,"withPadding",2);i([T({type:Boolean})],r.prototype,"inverseColor",2);i([T({type:String})],r.prototype,"size",2);i([T({type:String})],r.prototype,"ariaLabel",2);i([T({type:String})],r.prototype,"ariaHasPopup",2);i([T({type:String})],r.prototype,"ariaExpanded",2);i([U("svg")],r.prototype,"_svgIcon",2);r=i([D("dx-button")],r);export{U as e};
