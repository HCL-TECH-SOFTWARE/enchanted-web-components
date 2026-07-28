import{E as w}from"./iframe-B4blCNHZ.js";import{c as _,V as m,a as y,w as A,W as P,q as E,u as g,n as c,y as C,X as h,r as v}from"./tags-BB5KXmdF.js";import{r as $}from"./state-B-Bwqa8u.js";import{l as b}from"./lodash-CdDiHlzQ.js";import"./enchanted-list-item-fo8vQpK0.js";import{M as T,o as f,L as x,d as N,n as M,l as S}from"./cssClassEnums-CY7zIYSt.js";import{i as O}from"./localization-BPNcoI2x.js";var p=(e=>(e.BOTTOM_START="bottom-start",e.BOTTOM_END="bottom-end",e))(p||{}),I=(e=>(e.SMALL="sm",e.MEDIUM="md",e))(I||{}),R=Object.defineProperty,j=Object.getOwnPropertyDescriptor,u=(e,t,o,n)=>{for(var s=n>1?void 0:n?j(t,o):t,i=e.length-1,r;i>=0;i--)(r=e[i])&&(s=(n?r(t,o,s):r(s))||s);return n&&s&&R(t,o,s),s};const D=_("enchanted-web-components:components:atomic-component:enchanted-menu.ts");let a=class extends y{constructor(){super(...arguments),this.menuDelay=300,this.placement=p.BOTTOM_START,this.size=I.MEDIUM,this.componentId=A(),this.openMenu=!1,this.scrollParent=null,this.OnViewportChange=b.debounce(()=>{this.openMenu&&this.anchorMenuToTarget()},100)}connectedCallback(){super.connectedCallback(),this.addEventListener("click",e=>{this.handleMenuItemClick(e)})}disconnectedCallback(){super.disconnectedCallback(),this.scrollParent&&(this.scrollParent.style.overflow=""),window.removeEventListener("resize",this.OnViewportChange)}getScrollableParent(e){if(!e)return null;let t=e;for(;t&&t!==document.body;){const n=window.getComputedStyle(t).overflowY;if(n==="auto"||n==="scroll")return t;t=t.parentElement}return document.body}anchorMenuToTarget(){const e=this.renderRoot.querySelector(`#target${this.componentId}`),t=this.renderRoot.querySelector(`#menu${this.componentId}`);if(t&&e){const o=e.getBoundingClientRect(),n=o.left,s=o.right,i=o.top+o.height,r=t.offsetWidth;switch(t.style.position="absolute",t.style.top=`${i}px`,t.style.visibility="visible",this.placement){case p.BOTTOM_START:t.style.left=`${O()?n:s-r}px`;break;case p.BOTTOM_END:t.style.left=`${s-r}px`;break;default:t.style.left=`${O()?n:s-r}px`}}}toggleMenuOpen(e){e.stopPropagation(),e.preventDefault(),this.openMenu=!this.openMenu,this.openMenu?(this.scrollParent=this.getScrollableParent(this),this.scrollParent&&(this.scrollParent.style.overflow="hidden"),window.addEventListener("resize",this.OnViewportChange)):(this.scrollParent&&(this.scrollParent.style.overflow=""),window.removeEventListener("resize",this.OnViewportChange)),setTimeout(()=>{this.anchorMenuToTarget()},300)}handleMenuItemClick(e){const t=e;e.preventDefault(),e.stopPropagation();const n=e.target.closest(P);if(t.detail&&n)this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{text:t.detail.text,value:t.detail.value,menuObject:t.detail.menuObject}})),this.toggleMenuOpen(e);else if(n){const s=n.getAttribute("text"),i=n.getAttribute("value"),r=n.getAttribute("menuObject");this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{text:s,value:i,menuObject:r}})),this.toggleMenuOpen(e)}}renderMenu(){return this.openMenu?g`
        <div
          role="presentation"
          part=${T.MENU_ROOT}
          aria-expanded="${this.openMenu}"
        >
          <div data-testid="menu-backdrop" aria-hidden="true" part=${T.BACKDROP} @click=${b.debounce(this.toggleMenuOpen,300)}></div>
          <div part=${T.PAPER_ROOT} id="menu${this.componentId}" style="visibility: hidden;">
            <${E}
              role="menu"
              exportparts="${Object.values(x).join(",")}"
              @menuItemClick=${this.handleMenuItemClick}
            >
              <slot name="${f.MENU_ITEMS}"></slot>
            </${E}>
          </div>
        </div>
      `:w}render(){return g`
      <div
        id="target${this.componentId}"
        @click=${b.debounce(this.toggleMenuOpen,this.menuDelay)}
        exportparts="${Object.values(N).join(",")}"

      >
        <slot name="${f.TARGET_ANCHOR}">
        </slot>
      </div>
      ${this.renderMenu()}
    `}};u([c({type:Number})],a.prototype,"menuDelay",2);u([c({type:String,reflect:!0})],a.prototype,"placement",2);u([c({type:String,reflect:!0})],a.prototype,"size",2);u([$()],a.prototype,"componentId",2);u([$()],a.prototype,"openMenu",2);a=u([C()],a);customElements.get(m)?D("Component (%s) is currently registered and not possible to registrate again.",m):customElements.define(m,a);var k=Object.defineProperty,L=Object.getOwnPropertyDescriptor,d=(e,t,o,n)=>{for(var s=n>1?void 0:n?L(t,o):t,i=e.length-1,r;i>=0;i--)(r=e[i])&&(s=(n?r(t,o,s):r(s))||s);return n&&s&&k(t,o,s),s};const U=_("enchanted-web-components:components:atomic-component:enchanted-menu-item.ts");let l=class extends y{constructor(){super(...arguments),this.text="",this.value="",this.menuObject={}}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}handleMenuItemClick(e){e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent("menuItemClick",{bubbles:!0,composed:!0,detail:{text:this.text,value:this.value,menuObject:this.menuObject}}))}handleMenuItemEnter(e){e.key==="Enter"&&this.dispatchEvent(new CustomEvent("menuItemClick",{bubbles:!0,composed:!0,detail:{text:this.text,value:this.value,menuObject:this.menuObject}}))}handleMenuItemTooltip(e){const t=e.currentTarget;t.offsetWidth<t.scrollWidth&&t.setAttribute("title",this.text||"")}render(){return g`
      <${v}
        role="menuitem"
        cascading="0"
        exportparts="${Object.values(S).join(",")}"
        @click=${this.handleMenuItemClick}
        @keydown=${this.handleMenuItemEnter}
        value=${this.value}
      >
        <div @mouseenter=${e=>this.handleMenuItemTooltip(e)} part=${M.TEXT_ROOT}>
          <span part=${M.TEXT}>${this.text}</span>
        </div>
      </${v}>
    `}};d([c({type:String})],l.prototype,"text",2);d([c({type:String})],l.prototype,"value",2);d([c({type:Object})],l.prototype,"menuObject",2);l=d([C()],l);customElements.get(h)?U("Component (%s) is currently registered and not possible to registrate again.",h):customElements.define(h,l);export{I as E,p as a};
