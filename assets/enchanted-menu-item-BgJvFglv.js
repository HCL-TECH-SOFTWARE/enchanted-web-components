import{E as I}from"./iframe-C32rrkgB.js";import{c as O,x as m,E as _,J as w,_ as P,Y as v,u as T,n as c,l as y,$ as h,Z as E}from"./tags-xkLHt5Ez.js";import{r as C}from"./state-BMB52Uli.js";import{l as b}from"./lodash-DfIfhbli.js";import"./enchanted-list-item-DOwADzBf.js";import{M as g,L as A,k as x,j as f,l as j}from"./cssClassEnums-WDBe4U61.js";import{i as M}from"./localization-BszdroIW.js";var p=(e=>(e.BOTTOM_START="bottom-start",e.BOTTOM_END="bottom-end",e))(p||{}),$=(e=>(e.SMALL="sm",e.MEDIUM="md",e))($||{}),N=Object.defineProperty,S=Object.getOwnPropertyDescriptor,u=(e,t,o,n)=>{for(var s=n>1?void 0:n?S(t,o):t,i=e.length-1,r;i>=0;i--)(r=e[i])&&(s=(n?r(t,o,s):r(s))||s);return n&&s&&N(t,o,s),s};const D=O("enchanted-web-components:components:atomic-component:enchanted-menu.ts");let a=class extends _{constructor(){super(...arguments),this.menuDelay=300,this.placement=p.BOTTOM_START,this.size=$.MEDIUM,this.componentId=w(),this.openMenu=!1,this.scrollParent=null,this.OnViewportChange=b.debounce(()=>{this.openMenu&&this.anchorMenuToTarget()},100)}connectedCallback(){super.connectedCallback(),this.addEventListener("click",e=>{this.handleMenuItemClick(e)})}disconnectedCallback(){super.disconnectedCallback(),this.scrollParent&&(this.scrollParent.style.overflow=""),window.removeEventListener("resize",this.OnViewportChange)}getScrollableParent(e){if(!e)return null;let t=e;for(;t&&t!==document.body;){const n=window.getComputedStyle(t).overflowY;if(n==="auto"||n==="scroll")return t;t=t.parentElement}return document.body}anchorMenuToTarget(){const e=this.renderRoot.querySelector(`#target${this.componentId}`),t=this.renderRoot.querySelector(`#menu${this.componentId}`);if(t&&e){const o=e.getBoundingClientRect(),n=o.left,s=o.right,i=o.top+o.height,r=t.offsetWidth;switch(t.style.position="absolute",t.style.top=`${i}px`,t.style.visibility="visible",this.placement){case p.BOTTOM_START:t.style.left=`${M()?n:s-r}px`;break;case p.BOTTOM_END:t.style.left=`${s-r}px`;break;default:t.style.left=`${M()?n:s-r}px`}}}toggleMenuOpen(e){e.stopPropagation(),e.preventDefault(),this.openMenu=!this.openMenu,this.openMenu?(this.scrollParent=this.getScrollableParent(this),this.scrollParent&&(this.scrollParent.style.overflow="hidden"),window.addEventListener("resize",this.OnViewportChange)):(this.scrollParent&&(this.scrollParent.style.overflow=""),window.removeEventListener("resize",this.OnViewportChange)),setTimeout(()=>{this.anchorMenuToTarget()},300)}handleMenuItemClick(e){const t=e;e.preventDefault(),e.stopPropagation();const n=e.target.closest(P);if(t.detail&&n)this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{text:t.detail.text,value:t.detail.value,menuObject:t.detail.menuObject}})),this.toggleMenuOpen(e);else if(n){const s=n.getAttribute("text"),i=n.getAttribute("value"),r=n.getAttribute("menuObject");this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{text:s,value:i,menuObject:r}})),this.toggleMenuOpen(e)}}renderMenu(){return this.openMenu?T`
        <div
          role="presentation"
          part=${g.MENU_ROOT}
          aria-expanded="${this.openMenu}"
        >
          <div data-testid="menu-backdrop" aria-hidden="true" part=${g.BACKDROP} @click=${b.debounce(this.toggleMenuOpen,300)}></div>
          <div part=${g.PAPER_ROOT} id="menu${this.componentId}" style="visibility: hidden;">
            <${v}
              role="menu"
              exportparts="${Object.values(A).join(",")}"
              @menuItemClick=${this.handleMenuItemClick}
            >
              <slot name="menu-items"></slot>
            </${v}>
          </div>
        </div>
      `:I}render(){return T`
      <div
        id="target${this.componentId}"
        @click=${b.debounce(this.toggleMenuOpen,this.menuDelay)}
        exportparts="${Object.values(x).join(",")}"

      >
        <slot name="target-anchor">
        </slot>
      </div>
      ${this.renderMenu()}
    `}};u([c({type:Number})],a.prototype,"menuDelay",2);u([c({type:String,reflect:!0})],a.prototype,"placement",2);u([c({type:String,reflect:!0})],a.prototype,"size",2);u([C()],a.prototype,"componentId",2);u([C()],a.prototype,"openMenu",2);a=u([y()],a);customElements.get(m)?D("Component (%s) is currently registered and not possible to registrate again.",m):customElements.define(m,a);var R=Object.defineProperty,k=Object.getOwnPropertyDescriptor,d=(e,t,o,n)=>{for(var s=n>1?void 0:n?k(t,o):t,i=e.length-1,r;i>=0;i--)(r=e[i])&&(s=(n?r(t,o,s):r(s))||s);return n&&s&&R(t,o,s),s};const L=O("enchanted-web-components:components:atomic-component:enchanted-menu-item.ts");let l=class extends _{constructor(){super(...arguments),this.text="",this.value="",this.menuObject={}}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}handleMenuItemClick(e){e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent("menuItemClick",{bubbles:!0,composed:!0,detail:{text:this.text,value:this.value,menuObject:this.menuObject}}))}handleMenuItemEnter(e){e.key==="Enter"&&this.dispatchEvent(new CustomEvent("menuItemClick",{bubbles:!0,composed:!0,detail:{text:this.text,value:this.value,menuObject:this.menuObject}}))}handleMenuItemTooltip(e){const t=e.currentTarget;t.offsetWidth<t.scrollWidth&&t.setAttribute("title",this.text||"")}render(){return T`
      <${E}
        role="menuitem"
        cascading="0"
        exportparts="${Object.values(j).join(",")}"
        @click=${this.handleMenuItemClick}
        @keydown=${this.handleMenuItemEnter}
        value=${this.value}
      >
        <div @mouseenter=${e=>this.handleMenuItemTooltip(e)} part=${f.TEXT_ROOT}>
          <span part=${f.TEXT}>${this.text}</span>
        </div>
      </${E}>
    `}};d([c({type:String})],l.prototype,"text",2);d([c({type:String})],l.prototype,"value",2);d([c({type:Object})],l.prototype,"menuObject",2);l=d([y()],l);customElements.get(h)?L("Component (%s) is currently registered and not possible to registrate again.",h):customElements.define(h,l);export{$ as E,p as a};
