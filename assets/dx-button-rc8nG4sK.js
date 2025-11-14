import{D as d,n,L as D,t as I}from"./dx-ac-base-element-Ba1nuzGa.js";import{r as p}from"./state-BrHRPonU.js";import{x as u,E}from"./iframe-g_dBLWCH.js";import{g as N,I as h,j as t}from"./cssClassEnums-DKCjOuJT.js";import{g as A}from"./localization-_QVbBsw5.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=(r,i,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof i!="object"&&Object.defineProperty(r,i,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function B(r,i){return(s,_,o)=>{const a=O=>{var c;return((c=O.renderRoot)==null?void 0:c.querySelector(r))??null};return U(s,_,{get(){return a(this)}})}}var l=Object.defineProperty,C=Object.getOwnPropertyDescriptor,T=(r,i,s,_)=>{for(var o=_>1?void 0:_?C(i,s):i,a=r.length-1,O;a>=0;a--)(O=r[a])&&(o=(_?O(i,s,o):O(o))||o);return _&&o&&l(i,s,o),o};let e=class extends d{constructor(){super(...arguments),this.focused=!1,this.disabled=!1,this.endicon=!1,this.variant=N.BUTTON_CONTAINED_VAR,this.withPadding=!1,this.inverseColor=!1,this.size=h.SMALL,this.ariaLabel=""}getButtonPart(){if(this.disabled)switch(this.variant){case N.BUTTON_TEXT_VAR:return this.inverseColor?t.BUTTON_ENCHANTED_TEXT_DISABLED_INVERSE:t.BUTTON_ENCHANTED_TEXT_DISABLED;case N.BUTTON_OUTLINED_VAR:return t.BUTTON_ENCHANTED_OUTLINED_DISABLED;default:return this.inverseColor?t.BUTTON_CONTAINED_DISABLED_INVERSE:t.BUTTON_CONTAINED_DISABLED}if(this.focused)switch(this.variant){case N.BUTTON_TEXT_VAR:return this.inverseColor?t.BUTTON_ENCHANTED_TEXT_FOCUSED_INVERSE:t.BUTTON_ENCHANTED_TEXT_FOCUSED;case N.BUTTON_OUTLINED_VAR:return t.BUTTON_ENCHANTED_OUTLINED_FOCUSED;default:return this.inverseColor?t.BUTTON_CONTAINED_FOCUSED_INVERSE:t.BUTTON_CONTAINED_FOCUSED}switch(this.variant){case N.BUTTON_TEXT_VAR:return this.inverseColor?t.BUTTON_ENCHANTED_TEXT_INVERSE:t.BUTTON_ENCHANTED_TEXT;case N.BUTTON_OUTLINED_VAR:return t.BUTTON_ENCHANTED_OUTLINED;case N.BUTTON_CONTAINED_VAR:return this.inverseColor?t.BUTTON_CONTAINED_INVERSE:t.BUTTON_CONTAINED;default:return t.BUTTON}}getStartIconPart(){return this.buttontext?A()===D.RTL?t.BUTTON_START_ICON_RTL_MARGIN:t.BUTTON_START_ICON:this.size===h.MEDIUM?this.withPadding?t.BUTTON_START_ICON_MEDIUM_WITH_PADDING:t.BUTTON_START_ICON_MEDIUM_WITHOUT_PADDING:this.size===h.FAB?t.BUTTON_START_ICON_FAB:this.withPadding?t.BUTTON_START_ICON_SMALL_WITH_PADDING:t.BUTTON_START_ICON_SMALL_WITHOUT_PADDING}partAttributeDecider(r){switch(r){case t.BUTTON:return this.getButtonPart();case t.BUTTON_START_ICON:return this.getStartIconPart();case t.BUTTON_TEXT:return t.BUTTON_TEXT;default:return r}}updated(r){super.updated(r),this.icon&&this._svgIcon&&this._svgIcon.setAttribute("part",this.partAttributeDecider(this.endicon?t.BUTTON_END_ICON:t.BUTTON_START_ICON))}renderIcon(r){if(this.icon){const{strings:i}=this.icon;return i.length>0&&i[0].match(/^\s*<icon-[a-zA-Z0-9\-_]+/)?u`
            <span part=${this.partAttributeDecider(this.endicon?t.BUTTON_END_ICON:t.BUTTON_START_ICON)} aria-hidden="true">
            ${this.icon}
            </span>
          `:u`
          ${this.icon}
        `}else if(this.imgurl)return u`
        <img
          src="${this.imgurl}"
          alt="${this.imgurl}"
          part=${this.partAttributeDecider(r?t.BUTTON_END_ICON:t.BUTTON_START_ICON)}
          data-testid="${r?"dx-button-endicon-img":"dx-button-img"}"
          aria-hidden="true"
        />
      `;return E}render(){return u`
      <button
        id="dx-button-${this.id}"
        data-testid="dx-button"
        part=${this.partAttributeDecider(t.BUTTON)}
        ?disabled=${this.disabled||E}
        @focus=${()=>this.focused=!0}
        @blur=${()=>this.focused=!1}
        aria-label=${this.ariaLabel}
        role="button"
        tabindex="0"
      >
        ${this.endicon?E:this.renderIcon(this.endicon)}
        ${this.buttontext===void 0?E:u`
            <span part=${this.partAttributeDecider(t.BUTTON_TEXT)}>${this.buttontext}</span>
          `}
        ${this.endicon?this.renderIcon(this.endicon):E}
      </button>
    `}};e.shadowRootOptions={...d.shadowRootOptions,delegatesFocus:!0};T([p()],e.prototype,"focused",2);T([n({type:Boolean,reflect:!0})],e.prototype,"disabled",2);T([n()],e.prototype,"imgurl",2);T([n()],e.prototype,"icon",2);T([n()],e.prototype,"buttontext",2);T([n({type:Boolean})],e.prototype,"endicon",2);T([n({type:String})],e.prototype,"variant",2);T([n({type:Boolean})],e.prototype,"withPadding",2);T([n({type:Boolean})],e.prototype,"inverseColor",2);T([n({type:String})],e.prototype,"size",2);T([n({type:String})],e.prototype,"ariaLabel",2);T([B("svg")],e.prototype,"_svgIcon",2);e=T([I("dx-button")],e);export{B as e};
