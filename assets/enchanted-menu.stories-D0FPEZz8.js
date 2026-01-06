import{x as a}from"./iframe-B8Ykn-0R.js";import{E as o,a as i}from"./enchanted-menu-item-BrS2-D5a.js";import"./enchanted-button-DmMDoW_g.js";import"./preload-helper-C1FmrZbK.js";import"./enchanted-ac-base-element-BcyMwwt4.js";import"./state-DtTHjCak.js";import"./lodash-CM0-ShnD.js";import"./enchanted-list-item-DyHRA-H7.js";import"./cssClassEnums-D4dgqifY.js";import"./localization-Ca5Mq-1-.js";const S=["display: flex","justify-content: center","align-items: center","min-height: 400px","padding: 40px"].join("; ")+";",A={title:"Navigation/enchanted-menu",tags:["autodocs"],argTypes:{items:{control:{type:"object"},description:"Array of menu item objects with text and value properties. Used to dynamically generate enchanted-menu-item components in the story template.",table:{category:"Content",type:{summary:"Array<{text: string, value: string}>"},defaultValue:{summary:"[]"}}},menuDelay:{control:{type:"number"},description:"Delay in milliseconds before opening the menu on interaction. Provides a slight pause to prevent accidental menu triggers.",table:{category:"Behavior",type:{summary:"number"},defaultValue:{summary:"300"}}},placement:{control:{type:"select"},options:Object.values(i),description:'Menu placement relative to the anchor element. Options: "bottom-start" (aligned to start edge) or "bottom-end" (aligned to end edge).',table:{category:"Layout",type:{summary:"EnchantedMenuPlacement"},defaultValue:{summary:i.BOTTOM_START}}},size:{control:{type:"select"},options:Object.values(o),description:'Menu size variant affecting menu item height and padding. Options: "sm" (small/compact) or "md" (medium/standard).',table:{category:"Layout",type:{summary:"EnchantedMenuSize"},defaultValue:{summary:o.MEDIUM}}},dropdownMinWidth:{control:{type:"text"},description:'Minimum width for the dropdown menu. Set via CSS custom property --dropdown-menu-min-width. Example values: "240px", "200px", "300px".',table:{category:"Styling",type:{summary:"string"},defaultValue:{summary:""}}}},args:{items:[{text:"Menu Item 1",value:"1"},{text:"Menu Item 2",value:"2"},{text:"Menu Item 3",value:"3"}],menuDelay:300,placement:i.BOTTOM_START,size:o.MEDIUM,dropdownMinWidth:"240px"},parameters:{docs:{description:{component:"Menu component that displays a dropdown list of menu items anchored to a target element. Supports customizable placement, size variants, delay timing, and automatic positioning with viewport awareness. Uses slots for flexible content: target-anchor for the trigger element and menu-items for the dropdown content."}}},render:e=>a`
      <div style="${S}">
        <enchanted-menu 
          style=${e.dropdownMinWidth?`--dropdown-menu-min-width: ${e.dropdownMinWidth};`:""}
          menuDelay=${e.menuDelay}
          placement=${e.placement}
          size=${e.size}
        >
          <enchanted-button slot="target-anchor" variant="contained" size="large" buttontext="Menu"></enchanted-button>
          ${e.items&&e.items.map(m=>a`
            <enchanted-menu-item slot="menu-items" text="${m.text}" value="${m.value}"></enchanted-menu-item>
          `)}
        </enchanted-menu>
      </div>
    `},r={},u={render:()=>{const e=[{text:"Option 1",value:"1"},{text:"Option 2",value:"2"},{text:"Option 3",value:"3"},{text:"Option 4",value:"4"}],m=["display: grid","grid-template-columns: repeat(2, 1fr)","gap: 60px","padding: 40px","min-height: 600px"].join("; ")+";",l=["display: flex","flex-direction: column","align-items: center","gap: 20px"].join("; ")+";",s=["font-weight: 600","font-size: 14px","color: #333"].join("; ")+";";return setTimeout(()=>{document.querySelectorAll("enchanted-menu").forEach(v=>{const n=v;!n.openMenu&&typeof n.toggleMenuOpen=="function"&&n.toggleMenuOpen(new MouseEvent("click"));const M=n.toggleMenuOpen;n.toggleMenuOpen=function(x){n.openMenu||M.call(n,x)}})},200),a`
      <div style="${m}">
        <!-- Small size, Bottom Start -->
        <div style="${l}">
          <span style="${s}">Size: Small, Placement: Bottom Start</span>
          <enchanted-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${i.BOTTOM_START}"
            size="${o.SMALL}"
          >
            <enchanted-button slot="target-anchor" variant="contained" size="large" buttontext="Small - Bottom Start"></enchanted-button>
            ${e.map(t=>a`
              <enchanted-menu-item slot="menu-items" text="${t.text}" value="${t.value}"></enchanted-menu-item>
            `)}
          </enchanted-menu>
        </div>

        <!-- Small size, Bottom End -->
        <div style="${l}">
          <span style="${s}">Size: Small, Placement: Bottom End</span>
          <enchanted-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${i.BOTTOM_END}"
            size="${o.SMALL}"
          >
            <enchanted-button slot="target-anchor" variant="contained" size="large" buttontext="Small - Bottom End"></enchanted-button>
            ${e.map(t=>a`
              <enchanted-menu-item slot="menu-items" text="${t.text}" value="${t.value}"></enchanted-menu-item>
            `)}
          </enchanted-menu>
        </div>

        <!-- Medium size, Bottom Start -->
        <div style="${l}">
          <span style="${s}">Size: Medium, Placement: Bottom Start</span>
          <enchanted-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${i.BOTTOM_START}"
            size="${o.MEDIUM}"
          >
            <enchanted-button slot="target-anchor" variant="contained" size="large" buttontext="Medium - Bottom Start"></enchanted-button>
            ${e.map(t=>a`
              <enchanted-menu-item slot="menu-items" text="${t.text}" value="${t.value}"></enchanted-menu-item>
            `)}
          </enchanted-menu>
        </div>

        <!-- Medium size, Bottom End -->
        <div style="${l}">
          <span style="${s}">Size: Medium, Placement: Bottom End</span>
          <enchanted-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${i.BOTTOM_END}"
            size="${o.MEDIUM}"
          >
            <enchanted-button slot="target-anchor" variant="contained" size="large" buttontext="Medium - Bottom End"></enchanted-button>
            ${e.map(t=>a`
              <enchanted-menu-item slot="menu-items" text="${t.text}" value="${t.value}"></enchanted-menu-item>
            `)}
          </enchanted-menu>
        </div>
      </div>
    `},parameters:{docs:{description:{story:"Comprehensive showcase of all menu size and placement combinations. Demonstrates 2 sizes (small, medium) × 2 placements (bottom-start, bottom-end) = 4 total configurations. Menus are programmatically opened on load to display their appearance and positioning behavior."}},controls:{disable:!0}}};var d,c,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var h,y,g;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
      const menus = document.querySelectorAll('enchanted-menu');
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
          <enchanted-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="\${EnchantedMenuPlacement.BOTTOM_START}"
            size="\${EnchantedMenuSize.SMALL}"
          >
            <enchanted-button slot="target-anchor" variant="contained" size="large" buttontext="Small - Bottom Start"></enchanted-button>
            \${items.map(item => {
      return html\`
              <enchanted-menu-item slot="menu-items" text="\${item.text}" value="\${item.value}"></enchanted-menu-item>
            \`;
    })}
          </enchanted-menu>
        </div>

        <!-- Small size, Bottom End -->
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Size: Small, Placement: Bottom End</span>
          <enchanted-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="\${EnchantedMenuPlacement.BOTTOM_END}"
            size="\${EnchantedMenuSize.SMALL}"
          >
            <enchanted-button slot="target-anchor" variant="contained" size="large" buttontext="Small - Bottom End"></enchanted-button>
            \${items.map(item => {
      return html\`
              <enchanted-menu-item slot="menu-items" text="\${item.text}" value="\${item.value}"></enchanted-menu-item>
            \`;
    })}
          </enchanted-menu>
        </div>

        <!-- Medium size, Bottom Start -->
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Size: Medium, Placement: Bottom Start</span>
          <enchanted-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="\${EnchantedMenuPlacement.BOTTOM_START}"
            size="\${EnchantedMenuSize.MEDIUM}"
          >
            <enchanted-button slot="target-anchor" variant="contained" size="large" buttontext="Medium - Bottom Start"></enchanted-button>
            \${items.map(item => {
      return html\`
              <enchanted-menu-item slot="menu-items" text="\${item.text}" value="\${item.value}"></enchanted-menu-item>
            \`;
    })}
          </enchanted-menu>
        </div>

        <!-- Medium size, Bottom End -->
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Size: Medium, Placement: Bottom End</span>
          <enchanted-menu 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="\${EnchantedMenuPlacement.BOTTOM_END}"
            size="\${EnchantedMenuSize.MEDIUM}"
          >
            <enchanted-button slot="target-anchor" variant="contained" size="large" buttontext="Medium - Bottom End"></enchanted-button>
            \${items.map(item => {
      return html\`
              <enchanted-menu-item slot="menu-items" text="\${item.text}" value="\${item.value}"></enchanted-menu-item>
            \`;
    })}
          </enchanted-menu>
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
