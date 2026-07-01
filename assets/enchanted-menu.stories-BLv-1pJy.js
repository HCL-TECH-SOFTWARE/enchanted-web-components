import{B as n,s as a,D as i,u as o}from"./tags-GuWqQq8Q.js";import{E as l,a as m}from"./enchanted-menu-item-COHY5qLX.js";import"./enchanted-button-BAnGK4C4.js";import"./iframe-DIZdwA76.js";import"./preload-helper-C1FmrZbK.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./state-CtyNSLbf.js";import"./lodash-CdDiHlzQ.js";import"./enchanted-list-item-BSeQRxWx.js";import"./cssClassEnums-BAuKGcJP.js";import"./localization-CViIwzVj.js";import"./query-BApjzB0v.js";import"./keyboardEventKeys-BnoN8uA3.js";const{userEvent:v,within:N}=__STORYBOOK_MODULE_TEST__,g=["display: flex","justify-content: center","align-items: center","min-height: 100px"].join("; ")+";",U={title:"Navigation/Enchanted Menu",tags:["autodocs","a11y-addon"],argTypes:{items:{control:{type:"object"},description:"Array of menu item objects with text and value properties. Used to dynamically generate enchanted-menu-item components in the story template.",table:{category:"Content",type:{summary:"Array<{text: string, value: string}>"},defaultValue:{summary:"[]"}}},menuDelay:{control:{type:"number"},description:"Delay in milliseconds before opening the menu on interaction. Provides a slight pause to prevent accidental menu triggers.",table:{category:"Behavior",type:{summary:"number"},defaultValue:{summary:"300"}}},placement:{control:{type:"select"},options:Object.values(m),description:'Menu placement relative to the anchor element. Options: "bottom-start" (aligned to start edge) or "bottom-end" (aligned to end edge).',table:{category:"Layout",type:{summary:"EnchantedMenuPlacement"},defaultValue:{summary:m.BOTTOM_START}}},size:{control:{type:"select"},options:Object.values(l),description:'Menu size variant affecting menu item height and padding. Options: "sm" (small/compact) or "md" (medium/standard).',table:{category:"Layout",type:{summary:"EnchantedMenuSize"},defaultValue:{summary:l.MEDIUM}}},dropdownMinWidth:{control:{type:"text"},description:'Minimum width for the dropdown menu. Set via CSS custom property --dropdown-menu-min-width. Example values: "240px", "200px", "300px".',table:{category:"Styling",type:{summary:"string"},defaultValue:{summary:""}}}},args:{items:[{text:"Menu Item 1",value:"1"},{text:"Menu Item 2",value:"2"},{text:"Menu Item 3",value:"3"}],menuDelay:300,placement:m.BOTTOM_START,size:l.MEDIUM,dropdownMinWidth:"240px"},parameters:{docs:{story:{inline:!1,iframeHeight:300},description:{component:"Menu component that displays a dropdown list of menu items anchored to a target element. Supports customizable placement, size variants, delay timing, and automatic positioning with viewport awareness. Uses slots for flexible content: target-anchor for the trigger element and menu-items for the dropdown content."}}},render:e=>o`
      <div style="${g}">
        <${n} 
          style=${e.dropdownMinWidth?`--dropdown-menu-min-width: ${e.dropdownMinWidth};`:""}
          menuDelay=${e.menuDelay}
          placement=${e.placement}
          size=${e.size}
        >
          <${a} data-testid="menu-trigger" slot="target-anchor" variant="contained" size="large" buttontext="Menu"></${a}>
          ${e.items&&e.items.map(s=>o`
            <${i} slot="menu-items" text="${s.text}" value="${s.value}"></${i}>
          `)}
        </${n}>
      </div>
    `},p={play:async({canvasElement:e,viewMode:s})=>{if(s==="docs")return;const r=N(e);await v.click(r.getByTestId("menu-trigger"))}},u={render:()=>{const e=[{text:"Option 1",value:"1"},{text:"Option 2",value:"2"},{text:"Option 3",value:"3"},{text:"Option 4",value:"4"}],s=["display: grid","grid-template-columns: repeat(2, 1fr)","gap: 60px","padding: 40px","min-height: 600px"].join("; ")+";",r=["display: flex","flex-direction: column","align-items: center","gap: 20px"].join("; ")+";",d=["font-weight: 600","font-size: 14px","color: #333"].join("; ")+";";return o`
      <div style="${s}">
        <!-- Small size, Bottom Start -->
        <div style="${r}">
          <span style="${d}">Size: Small, Placement: Bottom Start</span>
          <${n} 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${m.BOTTOM_START}"
            size="${l.SMALL}"
          >
            <${a} slot="target-anchor" variant="contained" size="large" buttontext="Small - Bottom Start"></${a}>
            ${e.map(t=>o`
              <${i} slot="menu-items" text="${t.text}" value="${t.value}"></${i}>
            `)}
          </${n}>
        </div>

        <!-- Small size, Bottom End -->
        <div style="${r}">
          <span style="${d}">Size: Small, Placement: Bottom End</span>
          <${n} 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${m.BOTTOM_END}"
            size="${l.SMALL}"
          >
            <${a} slot="target-anchor" variant="contained" size="large" buttontext="Small - Bottom End"></${a}>
            ${e.map(t=>o`
              <${i} slot="menu-items" text="${t.text}" value="${t.value}"></${i}>
            `)}
          </${n}>
        </div>

        <!-- Medium size, Bottom Start -->
        <div style="${r}">
          <span style="${d}">Size: Medium, Placement: Bottom Start</span>
          <${n} 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${m.BOTTOM_START}"
            size="${l.MEDIUM}"
          >
            <${a} slot="target-anchor" variant="contained" size="large" buttontext="Medium - Bottom Start"></${a}>
            ${e.map(t=>o`
              <${i} slot="menu-items" text="${t.text}" value="${t.value}"></${i}>
            `)}
          </${n}>
        </div>

        <!-- Medium size, Bottom End -->
        <div style="${r}">
          <span style="${d}">Size: Medium, Placement: Bottom End</span>
          <${n} 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${m.BOTTOM_END}"
            size="${l.MEDIUM}"
          >
            <${a} slot="target-anchor" variant="contained" size="large" buttontext="Medium - Bottom End"></${a}>
            ${e.map(t=>o`
              <${i} slot="menu-items" text="${t.text}" value="${t.value}"></${i}>
            `)}
          </${n}>
        </div>
      </div>
    `},parameters:{docs:{description:{story:"Comprehensive showcase of all menu size and placement combinations. Demonstrates 2 sizes (small, medium) × 2 placements (bottom-start, bottom-end) = 4 total configurations. Menus are programmatically opened on load to display their appearance and positioning behavior."}},controls:{disable:!0}}};var c,E,$;p.parameters={...p.parameters,docs:{...(c=p.parameters)==null?void 0:c.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    viewMode
  }: {
    canvasElement: HTMLElement;
    viewMode: 'docs' | 'story';
  }) => {
    if (viewMode === 'docs') {
      return;
    }
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('menu-trigger'));
  }
}`,...($=(E=p.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var T,y,M;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(M=(y=u.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};const H=["Default","AllStates"];export{u as AllStates,p as Default,H as __namedExportsOrder,U as default};
