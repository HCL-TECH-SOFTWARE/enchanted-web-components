import{B as n,s as o,D as a,u as l}from"./tags-DiA_3i88.js";import{E as m,a as s}from"./enchanted-menu-item-aFI9z9P_.js";import"./enchanted-button-N1GGdZJL.js";import"./iframe-CBMrvQ84.js";import"./preload-helper-C1FmrZbK.js";import"./state-wm_82jA5.js";import"./lodash-Y3IwG_AG.js";import"./enchanted-list-item-D_faBFGL.js";import"./cssClassEnums-WDBe4U61.js";import"./localization-DpWuhKau.js";import"./keyboardEventKeys-BnoN8uA3.js";const x=["display: flex","justify-content: center","align-items: center","min-height: 400px","padding: 40px"].join("; ")+";",U={title:"Navigation/enchanted-menu",tags:["autodocs"],argTypes:{items:{control:{type:"object"},description:"Array of menu item objects with text and value properties. Used to dynamically generate enchanted-menu-item components in the story template.",table:{category:"Content",type:{summary:"Array<{text: string, value: string}>"},defaultValue:{summary:"[]"}}},menuDelay:{control:{type:"number"},description:"Delay in milliseconds before opening the menu on interaction. Provides a slight pause to prevent accidental menu triggers.",table:{category:"Behavior",type:{summary:"number"},defaultValue:{summary:"300"}}},placement:{control:{type:"select"},options:Object.values(s),description:'Menu placement relative to the anchor element. Options: "bottom-start" (aligned to start edge) or "bottom-end" (aligned to end edge).',table:{category:"Layout",type:{summary:"EnchantedMenuPlacement"},defaultValue:{summary:s.BOTTOM_START}}},size:{control:{type:"select"},options:Object.values(m),description:'Menu size variant affecting menu item height and padding. Options: "sm" (small/compact) or "md" (medium/standard).',table:{category:"Layout",type:{summary:"EnchantedMenuSize"},defaultValue:{summary:m.MEDIUM}}},dropdownMinWidth:{control:{type:"text"},description:'Minimum width for the dropdown menu. Set via CSS custom property --dropdown-menu-min-width. Example values: "240px", "200px", "300px".',table:{category:"Styling",type:{summary:"string"},defaultValue:{summary:""}}}},args:{items:[{text:"Menu Item 1",value:"1"},{text:"Menu Item 2",value:"2"},{text:"Menu Item 3",value:"3"}],menuDelay:300,placement:s.BOTTOM_START,size:m.MEDIUM,dropdownMinWidth:"240px"},parameters:{docs:{description:{component:"Menu component that displays a dropdown list of menu items anchored to a target element. Supports customizable placement, size variants, delay timing, and automatic positioning with viewport awareness. Uses slots for flexible content: target-anchor for the trigger element and menu-items for the dropdown content."}}},render:e=>l`
      <div style="${x}">
        <${n} 
          style=${e.dropdownMinWidth?`--dropdown-menu-min-width: ${e.dropdownMinWidth};`:""}
          menuDelay=${e.menuDelay}
          placement=${e.placement}
          size=${e.size}
        >
          <${o} slot="target-anchor" variant="contained" size="large" buttontext="Menu"></${o}>
          ${e.items&&e.items.map(r=>l`
            <${a} slot="menu-items" text="${r.text}" value="${r.value}"></${a}>
          `)}
        </${n}>
      </div>
    `},p={},c={render:()=>{const e=[{text:"Option 1",value:"1"},{text:"Option 2",value:"2"},{text:"Option 3",value:"3"},{text:"Option 4",value:"4"}],r=["display: grid","grid-template-columns: repeat(2, 1fr)","gap: 60px","padding: 40px","min-height: 600px"].join("; ")+";",u=["display: flex","flex-direction: column","align-items: center","gap: 20px"].join("; ")+";",d=["font-weight: 600","font-size: 14px","color: #333"].join("; ")+";";return setTimeout(()=>{document.querySelectorAll("enchanted-menu").forEach(h=>{const i=h;!i.openMenu&&typeof i.toggleMenuOpen=="function"&&i.toggleMenuOpen(new MouseEvent("click"));const v=i.toggleMenuOpen;i.toggleMenuOpen=function(N){i.openMenu||v.call(i,N)}})},200),l`
      <div style="${r}">
        <!-- Small size, Bottom Start -->
        <div style="${u}">
          <span style="${d}">Size: Small, Placement: Bottom Start</span>
          <${n} 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${s.BOTTOM_START}"
            size="${m.SMALL}"
          >
            <${o} slot="target-anchor" variant="contained" size="large" buttontext="Small - Bottom Start"></${o}>
            ${e.map(t=>l`
              <${a} slot="menu-items" text="${t.text}" value="${t.value}"></${a}>
            `)}
          </${n}>
        </div>

        <!-- Small size, Bottom End -->
        <div style="${u}">
          <span style="${d}">Size: Small, Placement: Bottom End</span>
          <${n} 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${s.BOTTOM_END}"
            size="${m.SMALL}"
          >
            <${o} slot="target-anchor" variant="contained" size="large" buttontext="Small - Bottom End"></${o}>
            ${e.map(t=>l`
              <${a} slot="menu-items" text="${t.text}" value="${t.value}"></${a}>
            `)}
          </${n}>
        </div>

        <!-- Medium size, Bottom Start -->
        <div style="${u}">
          <span style="${d}">Size: Medium, Placement: Bottom Start</span>
          <${n} 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${s.BOTTOM_START}"
            size="${m.MEDIUM}"
          >
            <${o} slot="target-anchor" variant="contained" size="large" buttontext="Medium - Bottom Start"></${o}>
            ${e.map(t=>l`
              <${a} slot="menu-items" text="${t.text}" value="${t.value}"></${a}>
            `)}
          </${n}>
        </div>

        <!-- Medium size, Bottom End -->
        <div style="${u}">
          <span style="${d}">Size: Medium, Placement: Bottom End</span>
          <${n} 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${s.BOTTOM_END}"
            size="${m.MEDIUM}"
          >
            <${o} slot="target-anchor" variant="contained" size="large" buttontext="Medium - Bottom End"></${o}>
            ${e.map(t=>l`
              <${a} slot="menu-items" text="${t.text}" value="${t.value}"></${a}>
            `)}
          </${n}>
        </div>
      </div>
    `},parameters:{docs:{description:{story:"Comprehensive showcase of all menu size and placement combinations. Demonstrates 2 sizes (small, medium) × 2 placements (bottom-start, bottom-end) = 4 total configurations. Menus are programmatically opened on load to display their appearance and positioning behavior."}},controls:{disable:!0}}};var E,$,T;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(T=($=p.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var y,g,M;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
          <\${ENCHANTED_MENU_TAG} 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="\${EnchantedMenuPlacement.BOTTOM_START}"
            size="\${EnchantedMenuSize.SMALL}"
          >
            <\${ENCHANTED_BUTTON_TAG} slot="target-anchor" variant="contained" size="large" buttontext="Small - Bottom Start"></\${ENCHANTED_BUTTON_TAG}>
            \${items.map(item => {
      return html\`
              <\${ENCHANTED_MENU_ITEM_TAG} slot="menu-items" text="\${item.text}" value="\${item.value}"></\${ENCHANTED_MENU_ITEM_TAG}>
            \`;
    })}
          </\${ENCHANTED_MENU_TAG}>
        </div>

        <!-- Small size, Bottom End -->
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Size: Small, Placement: Bottom End</span>
          <\${ENCHANTED_MENU_TAG} 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="\${EnchantedMenuPlacement.BOTTOM_END}"
            size="\${EnchantedMenuSize.SMALL}"
          >
            <\${ENCHANTED_BUTTON_TAG} slot="target-anchor" variant="contained" size="large" buttontext="Small - Bottom End"></\${ENCHANTED_BUTTON_TAG}>
            \${items.map(item => {
      return html\`
              <\${ENCHANTED_MENU_ITEM_TAG} slot="menu-items" text="\${item.text}" value="\${item.value}"></\${ENCHANTED_MENU_ITEM_TAG}>
            \`;
    })}
          </\${ENCHANTED_MENU_TAG}>
        </div>

        <!-- Medium size, Bottom Start -->
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Size: Medium, Placement: Bottom Start</span>
          <\${ENCHANTED_MENU_TAG} 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="\${EnchantedMenuPlacement.BOTTOM_START}"
            size="\${EnchantedMenuSize.MEDIUM}"
          >
            <\${ENCHANTED_BUTTON_TAG} slot="target-anchor" variant="contained" size="large" buttontext="Medium - Bottom Start"></\${ENCHANTED_BUTTON_TAG}>
            \${items.map(item => {
      return html\`
              <\${ENCHANTED_MENU_ITEM_TAG} slot="menu-items" text="\${item.text}" value="\${item.value}"></\${ENCHANTED_MENU_ITEM_TAG}>
            \`;
    })}
          </\${ENCHANTED_MENU_TAG}>
        </div>

        <!-- Medium size, Bottom End -->
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Size: Medium, Placement: Bottom End</span>
          <\${ENCHANTED_MENU_TAG} 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="\${EnchantedMenuPlacement.BOTTOM_END}"
            size="\${EnchantedMenuSize.MEDIUM}"
          >
            <\${ENCHANTED_BUTTON_TAG} slot="target-anchor" variant="contained" size="large" buttontext="Medium - Bottom End"></\${ENCHANTED_BUTTON_TAG}>
            \${items.map(item => {
      return html\`
              <\${ENCHANTED_MENU_ITEM_TAG} slot="menu-items" text="\${item.text}" value="\${item.value}"></\${ENCHANTED_MENU_ITEM_TAG}>
            \`;
    })}
          </\${ENCHANTED_MENU_TAG}>
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
}`,...(M=(g=c.parameters)==null?void 0:g.docs)==null?void 0:M.source}}};const G=["Default","AllStates"];export{c as AllStates,p as Default,G as __namedExportsOrder,U as default};
