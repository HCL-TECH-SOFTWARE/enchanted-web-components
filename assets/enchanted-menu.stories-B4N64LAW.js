import{s as n,f as a,t as o,u as i}from"./tags-CoVdckeD.js";import{E as l,a as s}from"./enchanted-menu-item-DXVNKSDd.js";import"./enchanted-button-D143v6g8.js";const{userEvent:v,within:N}=__STORYBOOK_MODULE_TEST__,_=["display: flex","justify-content: center","align-items: center","min-height: 100px"].join("; ")+";",g={title:"Navigation/Enchanted Menu",tags:["a11y-addon"],argTypes:{items:{control:{type:"object"},description:"Array of menu item objects with text and value properties. Used to dynamically generate enchanted-menu-item components in the story template.",table:{category:"Content",type:{summary:"Array<{text: string, value: string}>"},defaultValue:{summary:"[]"}}},menuDelay:{control:{type:"number"},description:"Delay in milliseconds before opening the menu on interaction. Provides a slight pause to prevent accidental menu triggers.",table:{category:"Behavior",type:{summary:"number"},defaultValue:{summary:"300"}}},placement:{control:{type:"select"},options:Object.values(s),description:'Menu placement relative to the anchor element. Options: "bottom-start" (aligned to start edge) or "bottom-end" (aligned to end edge).',table:{category:"Layout",type:{summary:"EnchantedMenuPlacement"},defaultValue:{summary:s.BOTTOM_START}}},size:{control:{type:"select"},options:Object.values(l),description:'Menu size variant affecting menu item height and padding. Options: "sm" (small/compact) or "md" (medium/standard).',table:{category:"Layout",type:{summary:"EnchantedMenuSize"},defaultValue:{summary:l.MEDIUM}}},dropdownMinWidth:{control:{type:"text"},description:'Minimum width for the dropdown menu. Set via CSS custom property --dropdown-menu-min-width. Example values: "240px", "200px", "300px".',table:{category:"Styling",type:{summary:"string"},defaultValue:{summary:""}}}},args:{items:[{text:"Menu Item 1",value:"1"},{text:"Menu Item 2",value:"2"},{text:"Menu Item 3",value:"3"}],menuDelay:300,placement:s.BOTTOM_START,size:l.MEDIUM,dropdownMinWidth:"240px"},parameters:{docs:{story:{inline:!1,iframeHeight:300},description:{component:"Menu component that displays a dropdown list of menu items anchored to a target element. Supports customizable placement, size variants, delay timing, and automatic positioning with viewport awareness. Uses slots for flexible content: target-anchor for the trigger element and menu-items for the dropdown content."}}},render:e=>i`
      <div style="${_}">
        <${n} 
          style=${e.dropdownMinWidth?`--dropdown-menu-min-width: ${e.dropdownMinWidth};`:""}
          menuDelay=${e.menuDelay}
          placement=${e.placement}
          size=${e.size}
        >
          <${a} data-testid="menu-trigger" slot="target-anchor" variant="contained" size="large" buttontext="Menu"></${a}>
          ${e.items&&e.items.map(m=>i`
            <${o} slot="menu-items" text="${m.text}" value="${m.value}"></${o}>
          `)}
        </${n}>
      </div>
    `},d={play:async({canvasElement:e,viewMode:m})=>{if(m==="docs")return;const r=N(e);await v.click(r.getByTestId("menu-trigger"))}},u={render:()=>{const e=[{text:"Option 1",value:"1"},{text:"Option 2",value:"2"},{text:"Option 3",value:"3"},{text:"Option 4",value:"4"}],m=["display: grid","grid-template-columns: repeat(2, 1fr)","gap: 60px","padding: 40px","min-height: 600px"].join("; ")+";",r=["display: flex","flex-direction: column","align-items: center","gap: 20px"].join("; ")+";",c=["font-weight: 600","font-size: 14px","color: #333"].join("; ")+";";return i`
      <div style="${m}">
        <!-- Small size, Bottom Start -->
        <div style="${r}">
          <span style="${c}">Size: Small, Placement: Bottom Start</span>
          <${n} 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${s.BOTTOM_START}"
            size="${l.SMALL}"
          >
            <${a} slot="target-anchor" variant="contained" size="large" buttontext="Small - Bottom Start"></${a}>
            ${e.map(t=>i`
              <${o} slot="menu-items" text="${t.text}" value="${t.value}"></${o}>
            `)}
          </${n}>
        </div>

        <!-- Small size, Bottom End -->
        <div style="${r}">
          <span style="${c}">Size: Small, Placement: Bottom End</span>
          <${n} 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${s.BOTTOM_END}"
            size="${l.SMALL}"
          >
            <${a} slot="target-anchor" variant="contained" size="large" buttontext="Small - Bottom End"></${a}>
            ${e.map(t=>i`
              <${o} slot="menu-items" text="${t.text}" value="${t.value}"></${o}>
            `)}
          </${n}>
        </div>

        <!-- Medium size, Bottom Start -->
        <div style="${r}">
          <span style="${c}">Size: Medium, Placement: Bottom Start</span>
          <${n} 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${s.BOTTOM_START}"
            size="${l.MEDIUM}"
          >
            <${a} slot="target-anchor" variant="contained" size="large" buttontext="Medium - Bottom Start"></${a}>
            ${e.map(t=>i`
              <${o} slot="menu-items" text="${t.text}" value="${t.value}"></${o}>
            `)}
          </${n}>
        </div>

        <!-- Medium size, Bottom End -->
        <div style="${r}">
          <span style="${c}">Size: Medium, Placement: Bottom End</span>
          <${n} 
            style="--dropdown-menu-min-width: 240px;"
            menuDelay="300"
            placement="${s.BOTTOM_END}"
            size="${l.MEDIUM}"
          >
            <${a} slot="target-anchor" variant="contained" size="large" buttontext="Medium - Bottom End"></${a}>
            ${e.map(t=>i`
              <${o} slot="menu-items" text="${t.text}" value="${t.value}"></${o}>
            `)}
          </${n}>
        </div>
      </div>
    `},parameters:{docs:{description:{story:"Comprehensive showcase of all menu size and placement combinations. Demonstrates 2 sizes (small, medium) × 2 placements (bottom-start, bottom-end) = 4 total configurations. Menus are programmatically opened on load to display their appearance and positioning behavior."}},controls:{disable:!0}}};var p,E,T;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(E=d.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var $,y,M;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(M=(y=u.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};const h=["Default","AllStates"],D=Object.freeze(Object.defineProperty({__proto__:null,AllStates:u,Default:d,__namedExportsOrder:h,default:g},Symbol.toStringTag,{value:"Module"}));export{d as D,D as E};
