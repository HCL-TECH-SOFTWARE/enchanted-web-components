import{z as e,u as a,g as i}from"./tags-xkLHt5Ez.js";import"./enchanted-icon-button-BaD7biVf.js";import{I as n}from"./cssClassEnums-WDBe4U61.js";import"./index-D57X42El.js";import"./iframe-C32rrkgB.js";import"./preload-helper-C1FmrZbK.js";import"./enchanted-button-CPwlhnNb.js";import"./state-BMB52Uli.js";import"./localization-BszdroIW.js";import"./keyboardEventKeys-BnoN8uA3.js";import"./exportParts-B-kKZm-x.js";import"./index-CuTRIAwF.js";import"./tags-DNNghoUc.js";const S={title:"Input/enchanted-icon-button",tags:["autodocs"],parameters:{docs:{description:{component:"The Icon Button component provides a compact, icon-only button for common actions. It supports three sizes (small, medium, FAB), can display icons via templates or image URLs, and offers optional padding for increased touch targets. Use icon buttons for toolbar actions, quick access features, or floating action buttons (FAB) with inverse color schemes for high contrast."}}},argTypes:{size:{control:{type:"select"},options:[n.SMALL,n.MEDIUM,n.FAB],description:"Size of the icon button. SMALL for compact toolbars, MEDIUM for standard actions, FAB (Floating Action Button) for prominent primary actions.",table:{category:"Layout",type:{summary:"ICON_BUTTON_SIZES"},defaultValue:{summary:n.SMALL}}},withPadding:{control:{type:"boolean"},description:"Adds padding around the icon button to increase the touch target area. Recommended for touch interfaces and improved accessibility.",table:{category:"Layout",type:{summary:"boolean"},defaultValue:{summary:"false"}}},icon:{control:!1,description:"Icon template (Lit TemplateResult) for the button. Accepts SVG templates or icon component templates. Use this for inline SVG icons.",table:{category:"Content",type:{summary:"TemplateResult"},defaultValue:{summary:"undefined"}}},imgurl:{control:{type:"text"},description:"Image URL for the icon. Alternative to the icon template property. Use this for external image files or icon URLs.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},disabled:{control:{type:"boolean"},description:"Disables the icon button, preventing user interaction. The button appears grayed out and click events are blocked.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},inverseColor:{control:{type:"boolean"},description:"Uses inverse color scheme for high contrast scenarios. Typically white icon on dark background, useful for FAB buttons or dark themed toolbars.",table:{category:"Styling",type:{summary:"boolean"},defaultValue:{summary:"false"}}},ariaLabel:{control:{type:"text"},description:"ARIA label for accessibility. Provides descriptive text for screen readers since icon buttons lack visible text labels. Required for accessibility.",table:{category:"Accessibility",type:{summary:"string"},defaultValue:{summary:""}}}},args:{size:n.SMALL,withPadding:!1,imgurl:"https://cdn-icons-png.flaticon.com/512/61/61456.png",icon:a`<${i("icon-search")}></${i("icon-search")}>`,disabled:!1,inverseColor:!1,ariaLabel:"Search"},render:t=>a`
    <${e}
      .size="${t.size}"
      ?withPadding=${t.withPadding}
      ?disabled=${t.disabled}
      imgurl="${t.imgurl}"
      .icon=${t.icon}
      ?inverseColor=${t.inverseColor}
      ariaLabel="${t.ariaLabel}"
    ></${e}>
  `},o={args:{imgurl:""}},r={parameters:{controls:{disable:!0},docs:{description:{story:`Comprehensive showcase of all icon button states and variations:

**Sizes:** Three size options - SMALL for compact toolbars, MEDIUM for standard actions, and FAB (Floating Action Button) for prominent primary actions.

**Icon Sources:** Supports both inline SVG templates (via icon property) and external image URLs (via imgurl property).

**States:** Includes disabled state, padding variations for improved touch targets, and inverse color scheme for dark backgrounds.

**Accessibility:** All buttons include ariaLabel for screen reader support.`}}},render:()=>a`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Small Size (Default)</div>
          <${e}
            size="${n.SMALL}"
            .icon=${a`<${i("icon-search")}></${i("icon-search")}>`}
            ariaLabel="Search"
          ></${e}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Medium Size</div>
          <${e}
            size="${n.MEDIUM}"
            .icon=${a`<${i("icon-search")}></${i("icon-search")}>`}
            ariaLabel="Search"
          ></${e}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">FAB Size</div>
          <${e}
            size="${n.FAB}"
            .icon=${a`<${i("icon-search")}></${i("icon-search")}>`}
            ariaLabel="Search"
          ></${e}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With Padding</div>
          <${e}
            size="${n.SMALL}"
            .icon=${a`<${i("icon-search")}></${i("icon-search")}>`}
            ?withPadding=${!0}
            ariaLabel="Search with padding"
          ></${e}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled</div>
          <${e}
            size="${n.SMALL}"
            .icon=${a`<${i("icon-search")}></${i("icon-search")}>`}
            ?disabled=${!0}
            ariaLabel="Search disabled"
          ></${e}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Inverse Color</div>
          <div style="background-color: #333; padding: 12px; border-radius: 4px;">
            <${e}
              size="${n.SMALL}"
              .icon=${a`<${i("icon-search")}></${i("icon-search")}>`}
              ?inverseColor=${!0}
              ariaLabel="Search inverse"
            ></${e}>
          </div>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">FAB Inverse Color</div>
          <div style="background-color: #333; padding: 12px; border-radius: 4px;">
            <${e}
              size="${n.FAB}"
              .icon=${a`<${i("icon-search")}></${i("icon-search")}>`}
              ?inverseColor=${!0}
              ariaLabel="Primary action"
            ></${e}>
          </div>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Image URL Icon</div>
          <${e}
            size="${n.SMALL}"
            imgurl="https://cdn-icons-png.flaticon.com/512/61/61456.png"
            ariaLabel="Settings"
          ></${e}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Medium with Padding</div>
          <${e}
            size="${n.MEDIUM}"
            .icon=${a`<${i("icon-search")}></${i("icon-search")}>`}
            ?withPadding=${!0}
            ariaLabel="Search medium"
          ></${e}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Medium Disabled</div>
          <${e}
            size="${n.MEDIUM}"
            .icon=${a`<${i("icon-search")}></${i("icon-search")}>`}
            ?disabled=${!0}
            ariaLabel="Search disabled"
          ></${e}>
        </div>
      </div>
    `};var s,c,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    imgurl: ''
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Comprehensive showcase of all icon button states and variations:\\n\\n' + '**Sizes:** Three size options - SMALL for compact toolbars, MEDIUM for standard actions, and FAB (Floating Action Button) for prominent primary actions.\\n\\n' + '**Icon Sources:** Supports both inline SVG templates (via icon property) and external image URLs (via imgurl property).\\n\\n' + '**States:** Includes disabled state, padding variations for improved touch targets, and inverse color scheme for dark backgrounds.\\n\\n' + '**Accessibility:** All buttons include ariaLabel for screen reader support.'
      }
    }
  },
  render: () => {
    return html\`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Small Size (Default)</div>
          <\${ENCHANTED_ICON_BUTTON_TAG}
            size="\${ICON_BUTTON_SIZES.SMALL}"
            .icon=\${html\`<\${generateIconTagName('icon-search')}></\${generateIconTagName('icon-search')}>\`}
            ariaLabel="Search"
          ></\${ENCHANTED_ICON_BUTTON_TAG}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Medium Size</div>
          <\${ENCHANTED_ICON_BUTTON_TAG}
            size="\${ICON_BUTTON_SIZES.MEDIUM}"
            .icon=\${html\`<\${generateIconTagName('icon-search')}></\${generateIconTagName('icon-search')}>\`}
            ariaLabel="Search"
          ></\${ENCHANTED_ICON_BUTTON_TAG}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">FAB Size</div>
          <\${ENCHANTED_ICON_BUTTON_TAG}
            size="\${ICON_BUTTON_SIZES.FAB}"
            .icon=\${html\`<\${generateIconTagName('icon-search')}></\${generateIconTagName('icon-search')}>\`}
            ariaLabel="Search"
          ></\${ENCHANTED_ICON_BUTTON_TAG}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With Padding</div>
          <\${ENCHANTED_ICON_BUTTON_TAG}
            size="\${ICON_BUTTON_SIZES.SMALL}"
            .icon=\${html\`<\${generateIconTagName('icon-search')}></\${generateIconTagName('icon-search')}>\`}
            ?withPadding=\${true}
            ariaLabel="Search with padding"
          ></\${ENCHANTED_ICON_BUTTON_TAG}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled</div>
          <\${ENCHANTED_ICON_BUTTON_TAG}
            size="\${ICON_BUTTON_SIZES.SMALL}"
            .icon=\${html\`<\${generateIconTagName('icon-search')}></\${generateIconTagName('icon-search')}>\`}
            ?disabled=\${true}
            ariaLabel="Search disabled"
          ></\${ENCHANTED_ICON_BUTTON_TAG}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Inverse Color</div>
          <div style="background-color: #333; padding: 12px; border-radius: 4px;">
            <\${ENCHANTED_ICON_BUTTON_TAG}
              size="\${ICON_BUTTON_SIZES.SMALL}"
              .icon=\${html\`<\${generateIconTagName('icon-search')}></\${generateIconTagName('icon-search')}>\`}
              ?inverseColor=\${true}
              ariaLabel="Search inverse"
            ></\${ENCHANTED_ICON_BUTTON_TAG}>
          </div>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">FAB Inverse Color</div>
          <div style="background-color: #333; padding: 12px; border-radius: 4px;">
            <\${ENCHANTED_ICON_BUTTON_TAG}
              size="\${ICON_BUTTON_SIZES.FAB}"
              .icon=\${html\`<\${generateIconTagName('icon-search')}></\${generateIconTagName('icon-search')}>\`}
              ?inverseColor=\${true}
              ariaLabel="Primary action"
            ></\${ENCHANTED_ICON_BUTTON_TAG}>
          </div>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Image URL Icon</div>
          <\${ENCHANTED_ICON_BUTTON_TAG}
            size="\${ICON_BUTTON_SIZES.SMALL}"
            imgurl="https://cdn-icons-png.flaticon.com/512/61/61456.png"
            ariaLabel="Settings"
          ></\${ENCHANTED_ICON_BUTTON_TAG}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Medium with Padding</div>
          <\${ENCHANTED_ICON_BUTTON_TAG}
            size="\${ICON_BUTTON_SIZES.MEDIUM}"
            .icon=\${html\`<\${generateIconTagName('icon-search')}></\${generateIconTagName('icon-search')}>\`}
            ?withPadding=\${true}
            ariaLabel="Search medium"
          ></\${ENCHANTED_ICON_BUTTON_TAG}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Medium Disabled</div>
          <\${ENCHANTED_ICON_BUTTON_TAG}
            size="\${ICON_BUTTON_SIZES.MEDIUM}"
            .icon=\${html\`<\${generateIconTagName('icon-search')}></\${generateIconTagName('icon-search')}>\`}
            ?disabled=\${true}
            ariaLabel="Search disabled"
          ></\${ENCHANTED_ICON_BUTTON_TAG}>
        </div>
      </div>
    \`;
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const C=["Default","AllStates"];export{r as AllStates,o as Default,C as __namedExportsOrder,S as default};
