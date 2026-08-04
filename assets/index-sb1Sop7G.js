import{c as _,aa as g,a as E,u as T,D as h,n as i}from"./tags-BoxFtPAv.js";import{E as L,x as f}from"./iframe-CXiC-zJe.js";import"./enchanted-badge-CfrVuyT0.js";import"./enchanted-tooltip-DlcIoti1.js";import{x as a,_ as O,W as G}from"./cssClassEnums-CY7zIYSt.js";import{T as B}from"./exportParts-CSCHC3ow.js";import{t as b}from"./index-CuTRIAwF.js";import{c as y,I as N,B as v}from"./tags-7LaTluoi.js";var c=(t=>(t.SMALL="small",t.LARGE="large",t))(c||{}),S=(t=>(t.HORIZONTAL="horizontal",t.VERTICAL="vertical",t))(S||{}),A=Object.defineProperty,n=(t,s,r,e)=>{for(var l=void 0,p=t.length-1,d;p>=0;p--)(d=t[p])&&(l=d(s,r,l)||l);return l&&A(s,r,l),l};const $=_("enchanted-web-components:components:atomic-component:enchanted-toggle-button.ts");class o extends E{constructor(){super(...arguments),this.toggleOn=!1,this.showBadge=!1,this.disabled=!1,this.padding=!1,this.iconSize=c.SMALL,this.tooltipText="",this.firstType=!1,this.lastType=!1,this.ariaLabel=""}handleClick(s){s.stopPropagation(),!this.disabled&&(this.toggleOn=!this.toggleOn,this.dispatchEvent(new CustomEvent("toggle-change",{detail:{toggleOn:this.toggleOn},bubbles:!0,composed:!0})))}updated(s){if(!s.has("iconSize"))return;const r=this.renderRoot.querySelector('slot[name="icon"]'),e=r?r.assignedElements()[0]:void 0,p=e!=null&&e.matches('[slot="icon"]')?e:e==null?void 0:e.querySelector("*");if(p){const d=this.iconSize===c.LARGE?"20":"16";p.size=d}}getSizePart(){return this.iconSize===c.SMALL?a.TOGGLE_BUTTON_SMALL:a.TOGGLE_BUTTON_LARGE}getPaddingPart(){return this.padding?a.TOGGLE_BUTTON_WITH_PADDING:""}renderBadge(){return this.showBadge?T`
    <div part="${a.TOGGLE_BUTTON_BADGE_WRAPPER}">
      <slot name="${O.BADGE}"></slot>
    </div>
    `:L}render(){const s=typeof this.tooltipText=="string"?this.tooltipText.trim():"",r=!!s,e=T`
      <button
        type="button"
        slot="target"
        aria-label=${this.ariaLabel}
        ?disabled=${this.disabled}
        @click=${this.handleClick}
        tabindex='0'
        part="${a.TOGGLE_SINGLE_BUTTON} ${this.getSizePart()} ${this.getPaddingPart()}"
        data-testid="enchanted-toggle-single-button"
      >
        <span part=${a.TOGGLE_BUTTON_FOCUS_RING}></span>
        <slot name="${O.ICON}"
        part="${a.TOGGLE_BUTTON_ICON}"></slot>
      </button>
    `;return r?T`
      <div data-testid="enchanted-toggle-button-div" part=${a.TOGGLE_BUTTON_DIV}>
        ${this.renderBadge()}
        <${h} tooltiptext=${s} placement="${G.TOOLTIP_TOP}" exportparts=${B}>
          ${e}
        </${h}>
      </div>
        `:T`
        <div data-testid="enchanted-toggle-button-div" part=${a.TOGGLE_BUTTON_DIV}>
          ${this.renderBadge()}
          ${e}
        </div>
      `}}n([i({type:Boolean,reflect:!0})],o.prototype,"toggleOn");n([i({type:Boolean})],o.prototype,"showBadge");n([i({type:Boolean,reflect:!0})],o.prototype,"disabled");n([i({type:Boolean,reflect:!0})],o.prototype,"padding");n([i({type:String})],o.prototype,"iconSize");n([i({type:String})],o.prototype,"tooltipText");n([i({type:Boolean,reflect:!0})],o.prototype,"firstType");n([i({type:Boolean,reflect:!0})],o.prototype,"lastType");n([i({type:String})],o.prototype,"ariaLabel");customElements.get(g)?$("Component (%s) is currently registered and not possible to registrate again.",g):customElements.define(g,o);var m={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"}}],name:"add",size:32};const u=`${N}icon-add`;class P extends v{render(){return f`${b({...m,attrs:{...m.attrs,preserveAspectRatio:"xMidYMid"}})}`}}y&&!customElements.get(u)&&customElements.define(u,P);export{c as E,S as a};
