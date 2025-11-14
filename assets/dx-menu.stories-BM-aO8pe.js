import{x as s,E as j}from"./iframe-g_dBLWCH.js";import{n as m,t as C,l as $,D as I,v as _}from"./dx-ac-base-element-Ba1nuzGa.js";import{r as E}from"./state-BrHRPonU.js";import{l as h}from"./lodash-CR4q0RmQ.js";import"./dx-list-item-YCtqzfuC.js";import{M as v,L as P,j as D,l as b,m as R}from"./cssClassEnums-DKCjOuJT.js";import{i as S}from"./localization-_QVbBsw5.js";import"./preload-helper-C1FmrZbK.js";var w=Object.defineProperty,A=Object.getOwnPropertyDescriptor,d=(e,t,r,i)=>{for(var n=i>1?void 0:i?A(t,r):t,l=e.length-1,a;l>=0;l--)(a=e[l])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&w(t,r,n),n};let u=class extends I{constructor(){super(...arguments),this.open=!1,this.menuDelay=300,this.componentId=_(),this.openMenu=!1}connectedCallback(){this.openMenu=this.open,super.connectedCallback(),this.addEventListener("click",e=>{this.handleMenuItemClick(e)})}disconnectedCallback(){super.disconnectedCallback()}anchorMenuToTarget(){const e=this.renderRoot.querySelector(`#target${this.componentId}`),t=this.renderRoot.querySelector(`#menu${this.componentId}`);if(t&&e){const r=e.getBoundingClientRect(),i=r.left,n=r.right,l=r.top+r.height;t.style.position="absolute",t.style.left=`${S()?i:n-100}px`,t.style.top=`${l}px`,t.style.visibility="visible"}}toggleMenuOpen(e){e.stopPropagation(),e.preventDefault(),this.openMenu=!this.openMenu,setTimeout(()=>{this.anchorMenuToTarget()},300)}handleMenuItemClick(e){const t=e;e.preventDefault(),e.stopPropagation();const i=e.target.closest("dx-menu-item");if(t.detail&&i)this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{text:t.detail.text,value:t.detail.value,menuObject:t.detail.menuObject}})),this.toggleMenuOpen(e);else if(i){const n=i.getAttribute("text"),l=i.getAttribute("value"),a=i.getAttribute("menuObject");this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{text:n,value:l,menuObject:a}})),this.toggleMenuOpen(e)}}renderMenu(){return this.openMenu?s`
        <div
          role="presentation"
          part=${v.MENU_ROOT}
          aria-expanded="${this.openMenu}"
        >
          <div data-testid="menu-backdrop" aria-hidden="true" part=${v.BACKDROP} @click=${h.debounce(this.toggleMenuOpen,300)}></div>
          <div part=${v.PAPER_ROOT} id="menu${this.componentId}" style="visibility: hidden;">
            <dx-list
              role="menu"
              exportparts="${Object.values(P).join(",")}"
              @menuItemClick=${this.handleMenuItemClick}
            >
              <slot name="menu-items"></slot>
            </dx-list>
          </div>
        </div>
      `:j}render(){return s`
      <div
        id="target${this.componentId}"
        @click=${h.debounce(this.toggleMenuOpen,this.menuDelay)}
        exportparts="${Object.values(D).join(",")}"

      >
        <slot name="target-anchor">
        </slot>
      </div>
      ${this.renderMenu()}
    `}};d([m({type:Boolean})],u.prototype,"open",2);d([m({type:Number})],u.prototype,"menuDelay",2);d([E()],u.prototype,"componentId",2);d([E()],u.prototype,"openMenu",2);u=d([C("dx-menu"),$()],u);var k=Object.defineProperty,L=Object.getOwnPropertyDescriptor,x=(e,t,r,i)=>{for(var n=i>1?void 0:i?L(t,r):t,l=e.length-1,a;l>=0;l--)(a=e[l])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&k(t,r,n),n};let o=class extends I{constructor(){super(...arguments),this.text="",this.value="",this.menuObject={}}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}handleMenuItemClick(e){e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent("menuItemClick",{bubbles:!0,composed:!0,detail:{text:this.text,value:this.value,menuObject:this.menuObject}}))}handleMenuItemEnter(e){e.key==="Enter"&&this.dispatchEvent(new CustomEvent("menuItemClick",{bubbles:!0,composed:!0,detail:{text:this.text,value:this.value,menuObject:this.menuObject}}))}handleMenuItemTooltip(e){const t=e.currentTarget;t.offsetWidth<t.scrollWidth&&t.setAttribute("title",this.text||"")}render(){return s`
      <dx-list-item
        role="menuitem"
        cascading="0"
        exportparts="${Object.values(R).join(",")}"
        @click=${this.handleMenuItemClick}
        @keydown=${this.handleMenuItemEnter}
        value=${this.value}
      >
        <div @mouseenter=${e=>this.handleMenuItemTooltip(e)} part=${b.TEXT_ROOT}>
          <span part=${b.TEXT}>${this.text}</span>
        </div>
      </dx-list-item>
    `}};x([m({type:String})],o.prototype,"text",2);x([m({type:String})],o.prototype,"value",2);x([m({type:Object})],o.prototype,"menuObject",2);o=x([C("dx-menu-item"),$()],o);const X={title:"Navigation/dx-menu",tags:["autodocs"],argTypes:{items:{control:"object",description:"The menu items as an array of objects with label.",table:{defaultValue:{summary:"[]"}}},role:{control:"text",description:"The ARIA role for the menu.",table:{defaultValue:{summary:""}}}},args:{items:[{label:"Menu 1"},{label:"Menu 2"},{label:"Menu 3"}],role:""},render:e=>s`
      <dx-menu role="${e.role}">
        ${e.items&&e.items.map(t=>s`<dx-menu-item label="${t.label}"></dx-menu-item>`)}
      </dx-menu>
    `},c={},p={render:()=>s`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div>
          <div>Default</div>
          <dx-menu>
            <dx-menu-item label="Menu 1"></dx-menu-item>
            <dx-menu-item label="Menu 2"></dx-menu-item>
            <dx-menu-item label="Menu 3"></dx-menu-item>
          </dx-menu>
        </div>
        <div>
          <div>With role="menubar"</div>
          <dx-menu role="menubar">
            <dx-menu-item label="File"></dx-menu-item>
            <dx-menu-item label="Edit"></dx-menu-item>
            <dx-menu-item label="View"></dx-menu-item>
          </dx-menu>
        </div>
        <div>
          <div>Empty Menu</div>
          <dx-menu></dx-menu>
        </div>
        <div>
          <div>Custom Content</div>
          <dx-menu>
            <li style="color: green;">Custom HTML Item</li>
            <dx-menu-item label="Standard Item"></dx-menu-item>
          </dx-menu>
        </div>
      </div>
    `};var g,f,M;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(M=(f=c.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var y,O,T;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div>
          <div>Default</div>
          <dx-menu>
            <dx-menu-item label="Menu 1"></dx-menu-item>
            <dx-menu-item label="Menu 2"></dx-menu-item>
            <dx-menu-item label="Menu 3"></dx-menu-item>
          </dx-menu>
        </div>
        <div>
          <div>With role="menubar"</div>
          <dx-menu role="menubar">
            <dx-menu-item label="File"></dx-menu-item>
            <dx-menu-item label="Edit"></dx-menu-item>
            <dx-menu-item label="View"></dx-menu-item>
          </dx-menu>
        </div>
        <div>
          <div>Empty Menu</div>
          <dx-menu></dx-menu>
        </div>
        <div>
          <div>Custom Content</div>
          <dx-menu>
            <li style="color: green;">Custom HTML Item</li>
            <dx-menu-item label="Standard Item"></dx-menu-item>
          </dx-menu>
        </div>
      </div>
    \`;
  }
}`,...(T=(O=p.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const z=["Default","AllStates"];export{p as AllStates,c as Default,z as __namedExportsOrder,X as default};
