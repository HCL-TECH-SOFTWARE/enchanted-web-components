import{c as m,a as h,h as _,f as c,u as f,n as s,l as r}from"./tags-CoVdckeD.js";import"./enchanted-button-D143v6g8.js";import{u as y,w as b}from"./cssClassEnums-B0FxBdGx.js";import{I as T}from"./exportParts-R9YCw1G8.js";import{K as u}from"./keyboardEventKeys-BnoN8uA3.js";var g=Object.defineProperty,i=(l,e,d,C)=>{for(var o=void 0,a=l.length-1,p;a>=0;a--)(p=l[a])&&(o=p(e,d,o)||o);return o&&g(e,d,o),o};const N=m("enchanted-web-components:components:atomic-component:enchanted-icon-button.ts"),n=class n extends h{constructor(){super(...arguments),this.size=y.SMALL,this.withPadding=!1,this.imgurl="",this.disabled=!1,this.inverseColor=!1,this.ariaLabel="Icon button"}_handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_focusButton(){const e=this.renderRoot.querySelector(_);e==null||e._focusButton()}render(){return f`
      <${c}
        outlined="false"
        data-testid="enchanted-icon-button"
        ?inverseColor=${this.inverseColor}
        imgurl="${this.imgurl}"
        size="${this.size}"
        ?withPadding=${this.withPadding}
        exportparts=${T}
        ?disabled=${this.disabled}
        .icon=${this.icon}
        aria-label=${this.ariaLabel} // Ensure aria-label is passed correctly
        role=${b.BUTTON}
        aria-disabled="${this.disabled?"true":"false"}" // Communicate disabled state
        @click=${this._handleClick}
        @keydown=${this._handleKeyDown} // Add keyboard event listener
        >
        </${c}>
      `}_handleKeyDown(e){(e.key===u.ENTER||e.key===u.SPACE)&&!this.disabled&&(e.preventDefault(),this._handleClick(e))}};n.shadowRootOptions={...h.shadowRootOptions,delegatesFocus:!0};let t=n;i([s({type:String})],t.prototype,"size");i([s({type:Boolean})],t.prototype,"withPadding");i([s({type:String})],t.prototype,"imgurl");i([s()],t.prototype,"icon");i([s({type:Boolean,reflect:!0})],t.prototype,"disabled");i([s({type:Boolean})],t.prototype,"inverseColor");i([s({type:String})],t.prototype,"ariaLabel");customElements.get(r)?N("Component (%s) is currently registered and not possible to registrate again.",r):customElements.define(r,t);
