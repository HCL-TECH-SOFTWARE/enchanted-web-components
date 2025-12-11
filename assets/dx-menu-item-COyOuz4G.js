import{x as v,E as x}from"./iframe-Dsd1MpWQ.js";import{n as a,t as f,l as O,D as T,v as E}from"./dx-ac-base-element-C9dhstFR.js";import{r as M}from"./state-DQlunuPl.js";import{l as h}from"./lodash-BXdGFY-L.js";import"./dx-list-item-OcRTzvHV.js";import{M as m,L as C,i as P,h as b,j as $}from"./cssClassEnums-v1h5zF5X.js";import{i as g}from"./localization-DmqTGOFp.js";var p=(e=>(e.BOTTOM_START="bottom-start",e.BOTTOM_END="bottom-end",e))(p||{}),y=(e=>(e.SMALL="sm",e.MEDIUM="md",e))(y||{}),w=Object.defineProperty,_=Object.getOwnPropertyDescriptor,u=(e,t,r,n)=>{for(var s=n>1?void 0:n?_(t,r):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(n?o(t,r,s):o(s))||s);return n&&s&&w(t,r,s),s};let l=class extends T{constructor(){super(...arguments),this.menuDelay=300,this.placement=p.BOTTOM_START,this.size=y.MEDIUM,this.componentId=E(),this.openMenu=!1,this.scrollParent=null,this.OnViewportChange=h.debounce(()=>{this.openMenu&&this.anchorMenuToTarget()},100)}connectedCallback(){super.connectedCallback(),this.addEventListener("click",e=>{this.handleMenuItemClick(e)})}disconnectedCallback(){super.disconnectedCallback(),this.scrollParent&&(this.scrollParent.style.overflow=""),window.removeEventListener("resize",this.OnViewportChange)}getScrollableParent(e){if(!e)return null;let t=e;for(;t&&t!==document.body;){const n=window.getComputedStyle(t).overflowY;if(n==="auto"||n==="scroll")return t;t=t.parentElement}return document.body}anchorMenuToTarget(){const e=this.renderRoot.querySelector(`#target${this.componentId}`),t=this.renderRoot.querySelector(`#menu${this.componentId}`);if(t&&e){const r=e.getBoundingClientRect(),n=r.left,s=r.right,i=r.top+r.height,o=t.offsetWidth;switch(t.style.position="absolute",t.style.top=`${i}px`,t.style.visibility="visible",this.placement){case p.BOTTOM_START:t.style.left=`${g()?n:s-o}px`;break;case p.BOTTOM_END:t.style.left=`${s-o}px`;break;default:t.style.left=`${g()?n:s-o}px`}}}toggleMenuOpen(e){e.stopPropagation(),e.preventDefault(),this.openMenu=!this.openMenu,this.openMenu?(this.scrollParent=this.getScrollableParent(this),this.scrollParent&&(this.scrollParent.style.overflow="hidden"),window.addEventListener("resize",this.OnViewportChange)):(this.scrollParent&&(this.scrollParent.style.overflow=""),window.removeEventListener("resize",this.OnViewportChange)),setTimeout(()=>{this.anchorMenuToTarget()},300)}handleMenuItemClick(e){const t=e;e.preventDefault(),e.stopPropagation();const n=e.target.closest("dx-menu-item");if(t.detail&&n)this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{text:t.detail.text,value:t.detail.value,menuObject:t.detail.menuObject}})),this.toggleMenuOpen(e);else if(n){const s=n.getAttribute("text"),i=n.getAttribute("value"),o=n.getAttribute("menuObject");this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{text:s,value:i,menuObject:o}})),this.toggleMenuOpen(e)}}renderMenu(){return this.openMenu?v`
        <div
          role="presentation"
          part=${m.MENU_ROOT}
          aria-expanded="${this.openMenu}"
        >
          <div data-testid="menu-backdrop" aria-hidden="true" part=${m.BACKDROP} @click=${h.debounce(this.toggleMenuOpen,300)}></div>
          <div part=${m.PAPER_ROOT} id="menu${this.componentId}" style="visibility: hidden;">
            <dx-list
              role="menu"
              exportparts="${Object.values(C).join(",")}"
              @menuItemClick=${this.handleMenuItemClick}
            >
              <slot name="menu-items"></slot>
            </dx-list>
          </div>
        </div>
      `:x}render(){return v`
      <div
        id="target${this.componentId}"
        @click=${h.debounce(this.toggleMenuOpen,this.menuDelay)}
        exportparts="${Object.values(P).join(",")}"

      >
        <slot name="target-anchor">
        </slot>
      </div>
      ${this.renderMenu()}
    `}};u([a({type:Number})],l.prototype,"menuDelay",2);u([a({type:String,reflect:!0})],l.prototype,"placement",2);u([a({type:String,reflect:!0})],l.prototype,"size",2);u([M()],l.prototype,"componentId",2);u([M()],l.prototype,"openMenu",2);l=u([f("dx-menu"),O()],l);var I=Object.defineProperty,j=Object.getOwnPropertyDescriptor,d=(e,t,r,n)=>{for(var s=n>1?void 0:n?j(t,r):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(n?o(t,r,s):o(s))||s);return n&&s&&I(t,r,s),s};let c=class extends T{constructor(){super(...arguments),this.text="",this.value="",this.menuObject={}}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}handleMenuItemClick(e){e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent("menuItemClick",{bubbles:!0,composed:!0,detail:{text:this.text,value:this.value,menuObject:this.menuObject}}))}handleMenuItemEnter(e){e.key==="Enter"&&this.dispatchEvent(new CustomEvent("menuItemClick",{bubbles:!0,composed:!0,detail:{text:this.text,value:this.value,menuObject:this.menuObject}}))}handleMenuItemTooltip(e){const t=e.currentTarget;t.offsetWidth<t.scrollWidth&&t.setAttribute("title",this.text||"")}render(){return v`
      <dx-list-item
        role="menuitem"
        cascading="0"
        exportparts="${Object.values($).join(",")}"
        @click=${this.handleMenuItemClick}
        @keydown=${this.handleMenuItemEnter}
        value=${this.value}
      >
        <div @mouseenter=${e=>this.handleMenuItemTooltip(e)} part=${b.TEXT_ROOT}>
          <span part=${b.TEXT}>${this.text}</span>
        </div>
      </dx-list-item>
    `}};d([a({type:String})],c.prototype,"text",2);d([a({type:String})],c.prototype,"value",2);d([a({type:Object})],c.prototype,"menuObject",2);c=d([f("dx-menu-item"),O()],c);export{y as D,p as a};
