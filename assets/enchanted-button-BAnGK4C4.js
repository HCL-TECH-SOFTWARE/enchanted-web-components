import{c as I,E as p,L as D,ap as l,n as s,K as d}from"./tags-GuWqQq8Q.js";import{r as U}from"./state-CtyNSLbf.js";import{e as B}from"./query-BApjzB0v.js";import{x as N,E as n}from"./iframe-DIZdwA76.js";import{i as T,I as u,k as t,v as C}from"./cssClassEnums-BAuKGcJP.js";import{g as f}from"./localization-CViIwzVj.js";import{K as c}from"./keyboardEventKeys-BnoN8uA3.js";var S=Object.defineProperty,r=(E,e,o,A)=>{for(var a=void 0,_=E.length-1,O;_>=0;_--)(O=E[_])&&(a=O(e,o,a)||a);return a&&S(e,o,a),a};const b=I("enchanted-web-components:components:atomic-component:enchanted-button.ts"),h=class h extends p{constructor(){super(...arguments),this.focused=!1,this.disabled=!1,this.endicon=!1,this.variant=T.BUTTON_CONTAINED_VAR,this.withPadding=!1,this.inverseColor=!1,this.size=u.SMALL,this.ariaLabel="",this.ariaHasPopup="",this.ariaExpanded="false"}getButtonPart(){if(this.disabled)switch(this.variant){case T.BUTTON_TEXT_VAR:return this.inverseColor?t.BUTTON_ENCHANTED_TEXT_DISABLED_INVERSE:t.BUTTON_ENCHANTED_TEXT_DISABLED;case T.BUTTON_OUTLINED_VAR:return t.BUTTON_ENCHANTED_OUTLINED_DISABLED;default:return this.inverseColor?t.BUTTON_CONTAINED_DISABLED_INVERSE:t.BUTTON_CONTAINED_DISABLED}if(this.focused)switch(this.variant){case T.BUTTON_TEXT_VAR:return this.inverseColor?t.BUTTON_ENCHANTED_TEXT_FOCUSED_INVERSE:t.BUTTON_ENCHANTED_TEXT_FOCUSED;case T.BUTTON_OUTLINED_VAR:return t.BUTTON_ENCHANTED_OUTLINED_FOCUSED;default:return this.inverseColor?t.BUTTON_CONTAINED_FOCUSED_INVERSE:t.BUTTON_CONTAINED_FOCUSED}switch(this.variant){case T.BUTTON_TEXT_VAR:return this.inverseColor?t.BUTTON_ENCHANTED_TEXT_INVERSE:t.BUTTON_ENCHANTED_TEXT;case T.BUTTON_OUTLINED_VAR:return t.BUTTON_ENCHANTED_OUTLINED;case T.BUTTON_CONTAINED_VAR:return this.inverseColor?t.BUTTON_CONTAINED_INVERSE:t.BUTTON_CONTAINED;default:return t.BUTTON}}getStartIconPart(){return this.buttontext?f()===D.RTL?t.BUTTON_START_ICON_RTL_MARGIN:t.BUTTON_START_ICON:this.size===u.MEDIUM?this.withPadding?t.BUTTON_START_ICON_MEDIUM_WITH_PADDING:t.BUTTON_START_ICON_MEDIUM_WITHOUT_PADDING:this.size===u.FAB?t.BUTTON_START_ICON_FAB:this.withPadding?t.BUTTON_START_ICON_SMALL_WITH_PADDING:t.BUTTON_START_ICON_SMALL_WITHOUT_PADDING}partAttributeDecider(e){switch(e){case t.BUTTON:return this.getButtonPart();case t.BUTTON_START_ICON:return this.getStartIconPart();case t.BUTTON_TEXT:return t.BUTTON_TEXT;default:return e}}updated(e){super.updated(e),this.icon&&this._svgIcon&&this._svgIcon.setAttribute("part",this.partAttributeDecider(this.endicon?t.BUTTON_END_ICON:t.BUTTON_START_ICON))}renderIcon(e){if(this.icon){const{strings:o}=this.icon;return o.length>0&&o[0].match(new RegExp(`^\\s*<${l}icon-[a-zA-Z0-9\\-_]+`))?N`
            <span part=${this.partAttributeDecider(this.endicon?t.BUTTON_END_ICON:t.BUTTON_START_ICON)} aria-hidden="true">
            ${this.icon}
            </span>
          `:N`
          ${this.icon}
        `}else if(this.imgurl)return N`
        <img
          src="${this.imgurl}"
          alt="${this.imgurl}"
          part=${this.partAttributeDecider(e?t.BUTTON_END_ICON:t.BUTTON_START_ICON)}
          data-testid="${e?"enchanted-button-endicon-img":"enchanted-button-img"}"
          aria-hidden="true"
        />
      `;return n}_focusButton(){const e=this.renderRoot.querySelector("button");e==null||e.focus()}render(){return N`
      <button
        id="enchanted-button-${this.id}"
        data-testid="enchanted-button"
        part=${this.partAttributeDecider(t.BUTTON)}
        ?disabled=${this.disabled||n}
        @focus=${()=>this.focused=!0}
        @blur=${()=>this.focused=!1}
        @keydown=${this.handleKeyDown}
        aria-label=${this.ariaLabel||"Button"}
        aria-haspopup=${this.ariaHasPopup||n}
        aria-expanded=${this.ariaExpanded||n}
        aria-disabled=${this.disabled?"true":"false"}
        role=${C.BUTTON}
        tabindex="0"
      >
        ${this.endicon?n:this.renderIcon(this.endicon)}
        ${this.buttontext===void 0?n:N`
            <span part=${this.partAttributeDecider(t.BUTTON_TEXT)}>${this.buttontext}</span>
          `}
        ${this.endicon?this.renderIcon(this.endicon):n}
      </button>
    `}handleKeyDown(e){(e.key===c.ENTER||e.key===c.SPACE)&&!this.disabled&&(e.preventDefault(),this._focusButton(),this.dispatchEvent(new Event("click",{bubbles:!0,composed:!0})))}};h.shadowRootOptions={...p.shadowRootOptions,delegatesFocus:!0};let i=h;r([U()],i.prototype,"focused");r([s({type:Boolean,reflect:!0})],i.prototype,"disabled");r([s()],i.prototype,"imgurl");r([s()],i.prototype,"icon");r([s()],i.prototype,"buttontext");r([s({type:Boolean})],i.prototype,"endicon");r([s({type:String})],i.prototype,"variant");r([s({type:Boolean})],i.prototype,"withPadding");r([s({type:Boolean})],i.prototype,"inverseColor");r([s({type:String})],i.prototype,"size");r([s({type:String})],i.prototype,"ariaLabel");r([s({type:String})],i.prototype,"ariaHasPopup");r([s({type:String})],i.prototype,"ariaExpanded");r([B("svg")],i.prototype,"_svgIcon");customElements.get(d)?b("Component (%s) is currently registered and not possible to registrate again.",d):customElements.define(d,i);
