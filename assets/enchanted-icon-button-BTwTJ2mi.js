import{c as m,E as c,N as y,s as h,u as _,n as s,y as r}from"./tags-Dua8CojJ.js";import"./enchanted-button-C1t71ouV.js";import{I as b,N as f}from"./cssClassEnums-mKa0OyBd.js";import{I as T}from"./exportParts-cEl5bd2S.js";import{K as u}from"./keyboardEventKeys-BnoN8uA3.js";var g=Object.defineProperty,i=(l,e,d,E)=>{for(var o=void 0,a=l.length-1,p;a>=0;a--)(p=l[a])&&(o=p(e,d,o)||o);return o&&g(e,d,o),o};const N=m("enchanted-web-components:components:atomic-component:enchanted-icon-button.ts"),n=class n extends c{constructor(){super(...arguments),this.size=b.SMALL,this.withPadding=!1,this.imgurl="",this.disabled=!1,this.inverseColor=!1,this.ariaLabel="Icon button"}_handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_focusButton(){const e=this.renderRoot.querySelector(y);e==null||e._focusButton()}render(){return _`
      <${h}
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
        role=${f.BUTTON}
        aria-disabled="${this.disabled?"true":"false"}" // Communicate disabled state
        @click=${this._handleClick}
        @keydown=${this._handleKeyDown} // Add keyboard event listener
        >
        </${h}>
      `}_handleKeyDown(e){(e.key===u.ENTER||e.key===u.SPACE)&&!this.disabled&&(e.preventDefault(),this._handleClick(e))}};n.shadowRootOptions={...c.shadowRootOptions,delegatesFocus:!0};let t=n;i([s({type:String})],t.prototype,"size");i([s({type:Boolean})],t.prototype,"withPadding");i([s({type:String})],t.prototype,"imgurl");i([s()],t.prototype,"icon");i([s({type:Boolean,reflect:!0})],t.prototype,"disabled");i([s({type:Boolean})],t.prototype,"inverseColor");i([s({type:String})],t.prototype,"ariaLabel");customElements.get(r)?N("Component (%s) is currently registered and not possible to registrate again.",r):customElements.define(r,t);
