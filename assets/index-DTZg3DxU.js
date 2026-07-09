import{c as u,a1 as c,a as O,u as d,D as g,n as i}from"./tags-CoVdckeD.js";import{E as _,x as E}from"./iframe-q8uLr7wl.js";import"./enchanted-badge-Df1lKWMF.js";import"./enchanted-tooltip-BpOrLM42.js";import{n,y as f}from"./cssClassEnums-B0FxBdGx.js";import{T as B}from"./exportParts-R9YCw1G8.js";import{t as G}from"./index-CuTRIAwF.js";import{c as b,I as y,B as L}from"./tags-Dsu22f7O.js";var N=Object.defineProperty,s=(p,o,a,t)=>{for(var r=void 0,l=p.length-1,T;l>=0;l--)(T=p[l])&&(r=T(o,a,r)||r);return r&&N(o,a,r),r};const $=u("enchanted-web-components:components:atomic-component:enchanted-toggle-button.ts");class e extends O{constructor(){super(...arguments),this.toggleOn=!1,this.showBadge=!1,this.disabled=!1,this.padding=!1,this.iconSize="16",this.tooltipText="",this.firstType=!1,this.lastType=!1,this.ariaLabel=""}handleClick(o){o.stopPropagation(),!this.disabled&&(this.toggleOn=!this.toggleOn,this.dispatchEvent(new CustomEvent("toggle-change",{detail:{toggleOn:this.toggleOn},bubbles:!0,composed:!0})))}updated(o){if(!o.has("iconSize"))return;const a=this.renderRoot.querySelector('slot[name="icon"]'),t=a?a.assignedElements()[0]:void 0,l=t!=null&&t.matches('[slot="icon"]')?t:t==null?void 0:t.querySelector("*");l&&(l.size=this.iconSize)}getSizepart(){return this.iconSize==="16"?n.TOGGLE_BUTTON_SMALL:n.TOGGLE_BUTTON_LARGE}getPaddingPart(){return this.padding?n.TOGGLE_BUTTON_WITH_PADDING:""}renderBadge(){return this.showBadge?d`
    <div part="${n.TOGGLE_BUTTON_BADGE_WRAPPER}">
      <slot name="badge"></slot>
    </div>
    `:_}render(){const o=typeof this.tooltipText=="string"?this.tooltipText.trim():"",a=!!o,t=d`
      <button
        type="button"
        slot="target"
        aria-label=${this.ariaLabel}
        ?disabled=${this.disabled}
        @click=${this.handleClick}
        tabindex='0'
        part="${n.TOGGLE_SINGLE_BUTTON} ${this.getSizepart()} ${this.getPaddingPart()}"
        data-testid="enchanted-toggle-single-button"
      >
        <span part=${n.TOGGLE_BUTTON_FOCUS_RING}></span>
        <slot name="icon"
        part="${n.TOGGLE_BUTTON_ICON}"></slot>
      </button>
    `;return a?d`
      <div data-testid="enchanted-toggle-button-div" part=${n.TOGGLE_BUTTON_DIV}>
        ${this.renderBadge()}
        <${g} tooltiptext=${o} placement="${f.TOOLTIP_TOP}" exportparts=${B}>
          ${t}
        </${g}>
      </div>
        `:d`
        <div data-testid="enchanted-toggle-button-div" part=${n.TOGGLE_BUTTON_DIV}>
          ${this.renderBadge()}
          ${t}
        </div>
      `}}s([i({type:Boolean,reflect:!0})],e.prototype,"toggleOn");s([i({type:Boolean})],e.prototype,"showBadge");s([i({type:Boolean,reflect:!0})],e.prototype,"disabled");s([i({type:Boolean,reflect:!0})],e.prototype,"padding");s([i({type:String})],e.prototype,"iconSize");s([i({type:String})],e.prototype,"tooltipText");s([i({type:Boolean,reflect:!0})],e.prototype,"firstType");s([i({type:Boolean,reflect:!0})],e.prototype,"lastType");s([i({type:String})],e.prototype,"ariaLabel");customElements.get(c)?$("Component (%s) is currently registered and not possible to registrate again.",c):customElements.define(c,e);var h={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"}}],name:"add",size:32};const m=`${y}icon-add`;class v extends L{render(){return E`${G({...h,attrs:{...h.attrs,preserveAspectRatio:"xMidYMid"}})}`}}b&&!customElements.get(m)&&customElements.define(m,v);
