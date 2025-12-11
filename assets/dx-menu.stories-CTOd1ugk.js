import{x as o}from"./iframe-Dsd1MpWQ.js";import{D as a,a as i}from"./dx-menu-item-COyOuz4G.js";import"./dx-button-gwJQrlvi.js";import"./preload-helper-C1FmrZbK.js";import"./dx-ac-base-element-C9dhstFR.js";import"./state-DQlunuPl.js";import"./lodash-BXdGFY-L.js";import"./dx-list-item-OcRTzvHV.js";import"./cssClassEnums-v1h5zF5X.js";import"./localization-DmqTGOFp.js";const h=["display: flex","justify-content: center","align-items: center","min-height: 400px","padding: 40px"].join("; ")+";",A={title:"Navigation/dx-menu",tags:["autodocs"],argTypes:{items:{control:{type:"object"},description:"Array of menu item objects with text and value properties. Used to dynamically generate dx-menu-item components in the story template.",table:{category:"Content",type:{summary:"Array<{text: string, value: string}>"},defaultValue:{summary:"[]"}}},menuDelay:{control:{type:"number"},description:"Delay in milliseconds before opening the menu on interaction. Provides a slight pause to prevent accidental menu triggers.",table:{category:"Behavior",type:{summary:"number"},defaultValue:{summary:"300"}}},placement:{control:{type:"select"},options:Object.values(i),description:'Menu placement relative to the anchor element. Options: "bottom-start" (aligned to start edge) or "bottom-end" (aligned to end edge).',table:{category:"Layout",type:{summary:"DxMenuPlacement"},defaultValue:{summary:i.BOTTOM_START}}},size:{control:{type:"select"},options:Object.values(a),description:'Menu size variant affecting menu item height and padding. Options: "sm" (small/compact) or "md" (medium/standard).',table:{category:"Layout",type:{summary:"DxMenuSize"},defaultValue:{summary:a.MEDIUM}}},dropdownMinWidth:{control:{type:"text"},description:'Minimum width for the dropdown menu. Set via CSS custom property --dropdown-menu-min-width. Example values: "240px", "200px", "300px".',table:{category:"Styling",type:{summary:"string"},defaultValue:{summary:""}}}},args:{items:[{text:"Menu Item 1",value:"1"},{text:"Menu Item 2",value:"2"},{text:"Menu Item 3",value:"3"}],menuDelay:300,placement:i.BOTTOM_START,size:a.MEDIUM,dropdownMinWidth:"240px"},parameters:{docs:{description:{component:"Menu component that displays a dropdown list of menu items anchored to a target element. Supports customizable placement, size variants, delay timing, and automatic positioning with viewport awareness. Uses slots for flexible content: target-anchor for the trigger element and menu-items for the dropdown content."}}},render:e=>o`
      <div style="${h}">
        <dx-menu 
          style=${e.dropdownMinWidth?`--dropdown-menu-min-width: ${e.dropdownMinWidth};`:""}
          menuDelay=${e.menuDelay}
          placement=${e.placement}
          size=${e.size}
        >
          <dx-button slot="target-anchor" variant="contained" size="large" buttontext="Menu"></dx-button>
          ${e.items&&e.items.map(m=>o`
            <dx-menu-item slot="menu-items" text="${m.text}" value="${m.value}"></dx-menu-item>
          `)}
        </dx-menu>
      </div>
    `},r={},u={render:()=>{const e=[{text:"Option 1",value:"1"},{text:"Option 2",value:"2"},{text:"Option 3",value:"3"},{text:"Option 4",value:"4"}],m=["display: grid","grid-template-columns: repeat(2, 1fr)","gap: 60px","padding: 40px","min-height: 600px"].join("; ")+";",l=["display: flex","flex-direction: column","align-items: center","gap: 20px"].join("; ")+";",s=["font-weight: 600","font-size: 14px","color: #333"].join("; ")+";";return setTimeout(()=>{document.querySelectorAll("dx-menu").forEach(v=>{const n=v;!n.openMenu&&typeof n.toggleMenuOpen=="function"&&n.toggleMenuOpen(new MouseEvent("click"));const M=n.toggleMenuOpen;n.toggleMenuOpen=function(S){n.openMenu||M.call(n,S)}})},200),o`
      <div style="${m}">
        <!-- Small size, Bottom Start -->
        <div style="${l}">
          <span style="${s}">Size: Small, Placement: Bottom Start</span>
          <dx-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${i.BOTTOM_START}"
            size="${a.SMALL}"
          >
            <dx-button slot="target-anchor" variant="contained" size="large" buttontext="Small - Bottom Start"></dx-button>
            ${e.map(t=>o`
              <dx-menu-item slot="menu-items" text="${t.text}" value="${t.value}"></dx-menu-item>
            `)}
          </dx-menu>
        </div>

        <!-- Small size, Bottom End -->
        <div style="${l}">
          <span style="${s}">Size: Small, Placement: Bottom End</span>
          <dx-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${i.BOTTOM_END}"
            size="${a.SMALL}"
          >
            <dx-button slot="target-anchor" variant="contained" size="large" buttontext="Small - Bottom End"></dx-button>
            ${e.map(t=>o`
              <dx-menu-item slot="menu-items" text="${t.text}" value="${t.value}"></dx-menu-item>
            `)}
          </dx-menu>
        </div>

        <!-- Medium size, Bottom Start -->
        <div style="${l}">
          <span style="${s}">Size: Medium, Placement: Bottom Start</span>
          <dx-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${i.BOTTOM_START}"
            size="${a.MEDIUM}"
          >
            <dx-button slot="target-anchor" variant="contained" size="large" buttontext="Medium - Bottom Start"></dx-button>
            ${e.map(t=>o`
              <dx-menu-item slot="menu-items" text="${t.text}" value="${t.value}"></dx-menu-item>
            `)}
          </dx-menu>
        </div>

        <!-- Medium size, Bottom End -->
        <div style="${l}">
          <span style="${s}">Size: Medium, Placement: Bottom End</span>
          <dx-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${i.BOTTOM_END}"
            size="${a.MEDIUM}"
          >
            <dx-button slot="target-anchor" variant="contained" size="large" buttontext="Medium - Bottom End"></dx-button>
            ${e.map(t=>o`
              <dx-menu-item slot="menu-items" text="${t.text}" value="${t.value}"></dx-menu-item>
            `)}
          </dx-menu>
        </div>
      </div>
    `},parameters:{docs:{description:{story:"Comprehensive showcase of all menu size and placement combinations. Demonstrates 2 sizes (small, medium) × 2 placements (bottom-start, bottom-end) = 4 total configurations. Menus are programmatically opened on load to display their appearance and positioning behavior."}},controls:{disable:!0}}};var d,p,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var x,y,g;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all menu size and placement combinations. Demonstrates 2 sizes (small, medium) × 2 placements (bottom-start, bottom-end) = 4 total configurations. ' + 'Menus are programmatically opened on load to display their appearance and positioning behavior.'
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(g=(y=u.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const P=["Default","AllStates"];export{u as AllStates,r as Default,P as __namedExportsOrder,A as default};
