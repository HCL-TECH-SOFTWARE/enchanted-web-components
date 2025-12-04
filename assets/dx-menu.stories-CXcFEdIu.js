import{x as r,E as C}from"./iframe-DgNdRKpa.js";import{n as d,t as w,l as D,D as z,v as I}from"./dx-ac-base-element-BRVmdAbS.js";import{r as B}from"./state-g_VKachv.js";import{l as g}from"./lodash-BYuv2CZ-.js";import"./dx-list-item-BMtFo3VC.js";import{M as y,L as j,j as A,l as M,m as R}from"./cssClassEnums-flPS6Iko.js";import{i as b}from"./localization-8Qc5IxgI.js";import"./dx-button-q5wlWak9.js";import"./preload-helper-C1FmrZbK.js";var s=(e=>(e.BOTTOM_START="bottom-start",e.BOTTOM_END="bottom-end",e))(s||{}),m=(e=>(e.SMALL="sm",e.MEDIUM="md",e))(m||{}),k=Object.defineProperty,L=Object.getOwnPropertyDescriptor,c=(e,t,l,o)=>{for(var n=o>1?void 0:o?L(t,l):t,a=e.length-1,i;a>=0;a--)(i=e[a])&&(n=(o?i(t,l,n):i(n))||n);return o&&n&&k(t,l,n),n};let u=class extends z{constructor(){super(...arguments),this.open=!1,this.menuDelay=300,this.placement=s.BOTTOM_START,this.size=m.MEDIUM,this.componentId=I(),this.openMenu=!1,this.scrollParent=null,this.OnViewportChange=g.debounce(()=>{this.openMenu&&this.anchorMenuToTarget()},100)}connectedCallback(){this.openMenu=this.open,super.connectedCallback(),this.addEventListener("click",e=>{this.handleMenuItemClick(e)})}disconnectedCallback(){super.disconnectedCallback(),this.scrollParent&&(this.scrollParent.style.overflow=""),window.removeEventListener("resize",this.OnViewportChange)}getScrollableParent(e){if(!e)return null;let t=e;for(;t&&t!==document.body;){const o=window.getComputedStyle(t).overflowY;if(o==="auto"||o==="scroll")return t;t=t.parentElement}return document.body}anchorMenuToTarget(){const e=this.renderRoot.querySelector(`#target${this.componentId}`),t=this.renderRoot.querySelector(`#menu${this.componentId}`);if(t&&e){const l=e.getBoundingClientRect(),o=l.left,n=l.right,a=l.top+l.height,i=t.offsetWidth;switch(t.style.position="absolute",t.style.top=`${a}px`,t.style.visibility="visible",this.placement){case s.BOTTOM_START:t.style.left=`${b()?o:n-i}px`;break;case s.BOTTOM_END:t.style.left=`${n-i}px`;break;default:t.style.left=`${b()?o:n-i}px`}}}toggleMenuOpen(e){e.stopPropagation(),e.preventDefault(),this.openMenu=!this.openMenu,this.openMenu?(this.scrollParent=this.getScrollableParent(this),this.scrollParent&&(this.scrollParent.style.overflow="hidden"),window.addEventListener("resize",this.OnViewportChange)):(this.scrollParent&&(this.scrollParent.style.overflow=""),window.removeEventListener("resize",this.OnViewportChange)),setTimeout(()=>{this.anchorMenuToTarget()},300)}handleMenuItemClick(e){const t=e;e.preventDefault(),e.stopPropagation();const o=e.target.closest("dx-menu-item");if(t.detail&&o)this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{text:t.detail.text,value:t.detail.value,menuObject:t.detail.menuObject}})),this.toggleMenuOpen(e);else if(o){const n=o.getAttribute("text"),a=o.getAttribute("value"),i=o.getAttribute("menuObject");this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{text:n,value:a,menuObject:i}})),this.toggleMenuOpen(e)}}renderMenu(){return this.openMenu?r`
        <div
          role="presentation"
          part=${y.MENU_ROOT}
          aria-expanded="${this.openMenu}"
        >
          <div data-testid="menu-backdrop" aria-hidden="true" part=${y.BACKDROP} @click=${g.debounce(this.toggleMenuOpen,300)}></div>
          <div part=${y.PAPER_ROOT} id="menu${this.componentId}" style="visibility: hidden;">
            <dx-list
              role="menu"
              exportparts="${Object.values(j).join(",")}"
              @menuItemClick=${this.handleMenuItemClick}
            >
              <slot name="menu-items"></slot>
            </dx-list>
          </div>
        </div>
      `:C}render(){return r`
      <div
        id="target${this.componentId}"
        @click=${g.debounce(this.toggleMenuOpen,this.menuDelay)}
        exportparts="${Object.values(A).join(",")}"

      >
        <slot name="target-anchor">
        </slot>
      </div>
      ${this.renderMenu()}
    `}};c([d({type:Boolean})],u.prototype,"open",2);c([d({type:Number})],u.prototype,"menuDelay",2);c([d({type:String,reflect:!0})],u.prototype,"placement",2);c([d({type:String,reflect:!0})],u.prototype,"size",2);c([B()],u.prototype,"componentId",2);c([B()],u.prototype,"openMenu",2);u=c([w("dx-menu"),D()],u);var N=Object.defineProperty,U=Object.getOwnPropertyDescriptor,v=(e,t,l,o)=>{for(var n=o>1?void 0:o?U(t,l):t,a=e.length-1,i;a>=0;a--)(i=e[a])&&(n=(o?i(t,l,n):i(n))||n);return o&&n&&N(t,l,n),n};let p=class extends z{constructor(){super(...arguments),this.text="",this.value="",this.menuObject={}}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}handleMenuItemClick(e){e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent("menuItemClick",{bubbles:!0,composed:!0,detail:{text:this.text,value:this.value,menuObject:this.menuObject}}))}handleMenuItemEnter(e){e.key==="Enter"&&this.dispatchEvent(new CustomEvent("menuItemClick",{bubbles:!0,composed:!0,detail:{text:this.text,value:this.value,menuObject:this.menuObject}}))}handleMenuItemTooltip(e){const t=e.currentTarget;t.offsetWidth<t.scrollWidth&&t.setAttribute("title",this.text||"")}render(){return r`
      <dx-list-item
        role="menuitem"
        cascading="0"
        exportparts="${Object.values(R).join(",")}"
        @click=${this.handleMenuItemClick}
        @keydown=${this.handleMenuItemEnter}
        value=${this.value}
      >
        <div @mouseenter=${e=>this.handleMenuItemTooltip(e)} part=${M.TEXT_ROOT}>
          <span part=${M.TEXT}>${this.text}</span>
        </div>
      </dx-list-item>
    `}};v([d({type:String})],p.prototype,"text",2);v([d({type:String})],p.prototype,"value",2);v([d({type:Object})],p.prototype,"menuObject",2);p=v([w("dx-menu-item"),D()],p);const V=["display: flex","justify-content: center","align-items: center","min-height: 400px","padding: 40px"].join("; ")+";",Q={title:"Navigation/dx-menu",tags:["autodocs"],argTypes:{items:{control:"object",description:"The menu items as an array of objects with text and value.",table:{defaultValue:{summary:"[]"}}},menuDelay:{control:"number",description:"Delay in ms before opening the menu.",table:{defaultValue:{summary:"300"}}},placement:{control:"select",options:Object.values(s),description:"Menu placement relative to anchor.",table:{defaultValue:{summary:s.BOTTOM_START}}},size:{control:"select",options:Object.values(m),description:"Menu size.",table:{defaultValue:{summary:m.MEDIUM}}},dropdownMinWidth:{control:"text",description:"CSS var --dropdown-menu-min-width (e.g., 240px).",table:{defaultValue:{summary:""}}}},args:{items:[{text:"Menu Item 1",value:"1"},{text:"Menu Item 2",value:"2"},{text:"Menu Item 3",value:"3"}],menuDelay:300,placement:s.BOTTOM_START,size:m.MEDIUM,dropdownMinWidth:"240px"},render:e=>r`
      <div style="${V}">
        <dx-menu 
          style=${e.dropdownMinWidth?`--dropdown-menu-min-width: ${e.dropdownMinWidth};`:""}
          menuDelay=${e.menuDelay}
          placement=${e.placement}
          size=${e.size}
        >
          <dx-button slot="target-anchor" variant="contained" size="large" buttontext="Menu"></dx-button>
          ${e.items&&e.items.map(t=>r`
            <dx-menu-item slot="menu-items" text="${t.text}" value="${t.value}"></dx-menu-item>
          `)}
        </dx-menu>
      </div>
    `},x={},h={render:()=>{const e=[{text:"Option 1",value:"1"},{text:"Option 2",value:"2"},{text:"Option 3",value:"3"},{text:"Option 4",value:"4"}],t=["display: grid","grid-template-columns: repeat(2, 1fr)","gap: 60px","padding: 40px","min-height: 600px"].join("; ")+";",l=["display: flex","flex-direction: column","align-items: center","gap: 20px"].join("; ")+";",o=["font-weight: 600","font-size: 14px","color: #333"].join("; ")+";";return setTimeout(()=>{document.querySelectorAll("dx-menu").forEach(a=>{const i=a;!i.openMenu&&typeof i.toggleMenuOpen=="function"&&i.toggleMenuOpen(new MouseEvent("click"));const P=i.toggleMenuOpen;i.toggleMenuOpen=function(_){i.openMenu||P.call(i,_)}})},200),r`
      <div style="${t}">
        <!-- Small size, Bottom Start -->
        <div style="${l}">
          <span style="${o}">Size: Small, Placement: Bottom Start</span>
          <dx-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${s.BOTTOM_START}"
            size="${m.SMALL}"
          >
            <dx-button slot="target-anchor" variant="contained" size="large" buttontext="Small - Bottom Start"></dx-button>
            ${e.map(n=>r`
              <dx-menu-item slot="menu-items" text="${n.text}" value="${n.value}"></dx-menu-item>
            `)}
          </dx-menu>
        </div>

        <!-- Small size, Bottom End -->
        <div style="${l}">
          <span style="${o}">Size: Small, Placement: Bottom End</span>
          <dx-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${s.BOTTOM_END}"
            size="${m.SMALL}"
          >
            <dx-button slot="target-anchor" variant="contained" size="large" buttontext="Small - Bottom End"></dx-button>
            ${e.map(n=>r`
              <dx-menu-item slot="menu-items" text="${n.text}" value="${n.value}"></dx-menu-item>
            `)}
          </dx-menu>
        </div>

        <!-- Medium size, Bottom Start -->
        <div style="${l}">
          <span style="${o}">Size: Medium, Placement: Bottom Start</span>
          <dx-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${s.BOTTOM_START}"
            size="${m.MEDIUM}"
          >
            <dx-button slot="target-anchor" variant="contained" size="large" buttontext="Medium - Bottom Start"></dx-button>
            ${e.map(n=>r`
              <dx-menu-item slot="menu-items" text="${n.text}" value="${n.value}"></dx-menu-item>
            `)}
          </dx-menu>
        </div>

        <!-- Medium size, Bottom End -->
        <div style="${l}">
          <span style="${o}">Size: Medium, Placement: Bottom End</span>
          <dx-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${s.BOTTOM_END}"
            size="${m.MEDIUM}"
          >
            <dx-button slot="target-anchor" variant="contained" size="large" buttontext="Medium - Bottom End"></dx-button>
            ${e.map(n=>r`
              <dx-menu-item slot="menu-items" text="${n.text}" value="${n.value}"></dx-menu-item>
            `)}
          </dx-menu>
        </div>
      </div>
    `}};var $,O,S;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:"{}",...(S=(O=x.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var f,T,E;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const items = [{
      text: 'Option 1',
      value: '1'
    }, {
      text: 'Option 2',
      value: '2'
    }, {
      text: 'Option 3',
      value: '3'
    }, {
      text: 'Option 4',
      value: '4'
    }];
    const gridStyle = ['display: grid', 'grid-template-columns: repeat(2, 1fr)', 'gap: 60px', 'padding: 40px', 'min-height: 600px'].join('; ') + ';';
    const itemContainerStyle = ['display: flex', 'flex-direction: column', 'align-items: center', 'gap: 20px'].join('; ') + ';';
    const labelStyle = ['font-weight: 600', 'font-size: 14px', 'color: #333'].join('; ') + ';';

    // Open all menus via their public toggle to trigger internal scroll-lock/anchor
    setTimeout(() => {
      const menus = document.querySelectorAll('dx-menu');
      menus.forEach(menu => {
        // eslint-why: Accessing component instance methods for testing convenience
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const menuElement = menu as any;

        // Call the component's toggle once to open and lock scroll on its container
        if (!menuElement.openMenu && typeof menuElement.toggleMenuOpen === 'function') {
          menuElement.toggleMenuOpen(new MouseEvent('click'));
        }

        // Keep it open for snapshots: ignore subsequent toggles that would close
        const originalToggle = menuElement.toggleMenuOpen;
        menuElement.toggleMenuOpen = function (evt: MouseEvent | KeyboardEvent) {
          if (!menuElement.openMenu) {
            originalToggle.call(menuElement, evt);
          }
          // Do nothing if already open (prevents closing)
        };
      });
    }, 200);
    return html\`
      <div style="\${gridStyle}">
        <!-- Small size, Bottom Start -->
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Size: Small, Placement: Bottom Start</span>
          <dx-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="\${DxMenuPlacement.BOTTOM_START}"
            size="\${DxMenuSize.SMALL}"
          >
            <dx-button slot="target-anchor" variant="contained" size="large" buttontext="Small - Bottom Start"></dx-button>
            \${items.map(item => {
      return html\`
              <dx-menu-item slot="menu-items" text="\${item.text}" value="\${item.value}"></dx-menu-item>
            \`;
    })}
          </dx-menu>
        </div>

        <!-- Small size, Bottom End -->
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Size: Small, Placement: Bottom End</span>
          <dx-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="\${DxMenuPlacement.BOTTOM_END}"
            size="\${DxMenuSize.SMALL}"
          >
            <dx-button slot="target-anchor" variant="contained" size="large" buttontext="Small - Bottom End"></dx-button>
            \${items.map(item => {
      return html\`
              <dx-menu-item slot="menu-items" text="\${item.text}" value="\${item.value}"></dx-menu-item>
            \`;
    })}
          </dx-menu>
        </div>

        <!-- Medium size, Bottom Start -->
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Size: Medium, Placement: Bottom Start</span>
          <dx-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="\${DxMenuPlacement.BOTTOM_START}"
            size="\${DxMenuSize.MEDIUM}"
          >
            <dx-button slot="target-anchor" variant="contained" size="large" buttontext="Medium - Bottom Start"></dx-button>
            \${items.map(item => {
      return html\`
              <dx-menu-item slot="menu-items" text="\${item.text}" value="\${item.value}"></dx-menu-item>
            \`;
    })}
          </dx-menu>
        </div>

        <!-- Medium size, Bottom End -->
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Size: Medium, Placement: Bottom End</span>
          <dx-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="\${DxMenuPlacement.BOTTOM_END}"
            size="\${DxMenuSize.MEDIUM}"
          >
            <dx-button slot="target-anchor" variant="contained" size="large" buttontext="Medium - Bottom End"></dx-button>
            \${items.map(item => {
      return html\`
              <dx-menu-item slot="menu-items" text="\${item.text}" value="\${item.value}"></dx-menu-item>
            \`;
    })}
          </dx-menu>
        </div>
      </div>
    \`;
  }
}`,...(E=(T=h.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const Z=["Default","AllStates"];export{h as AllStates,x as Default,Z as __namedExportsOrder,Q as default};
