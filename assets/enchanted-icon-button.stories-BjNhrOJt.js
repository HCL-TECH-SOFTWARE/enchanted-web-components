import{x as e}from"./iframe-I2cpem8U.js";import"./enchanted-icon-button-DALv30gz.js";import{I as n}from"./cssClassEnums-WDBe4U61.js";import"./index-QXK_OoEC.js";import"./preload-helper-C1FmrZbK.js";import"./enchanted-ac-base-element-CYtj5YlD.js";import"./enchanted-button-bGeso_Ea.js";import"./state-0u-7W5Ce.js";import"./localization-D5pUJpuu.js";import"./keyboardEventKeys-BnoN8uA3.js";import"./exportParts-B-kKZm-x.js";import"./index-CuTRIAwF.js";import"./index-ciz72CDE.js";const x={title:"Input/enchanted-icon-button",tags:["autodocs"],parameters:{docs:{description:{component:"The Icon Button component provides a compact, icon-only button for common actions. It supports three sizes (small, medium, FAB), can display icons via templates or image URLs, and offers optional padding for increased touch targets. Use icon buttons for toolbar actions, quick access features, or floating action buttons (FAB) with inverse color schemes for high contrast."}}},argTypes:{size:{control:{type:"select"},options:[n.SMALL,n.MEDIUM,n.FAB],description:"Size of the icon button. SMALL for compact toolbars, MEDIUM for standard actions, FAB (Floating Action Button) for prominent primary actions.",table:{category:"Layout",type:{summary:"ICON_BUTTON_SIZES"},defaultValue:{summary:n.SMALL}}},withPadding:{control:{type:"boolean"},description:"Adds padding around the icon button to increase the touch target area. Recommended for touch interfaces and improved accessibility.",table:{category:"Layout",type:{summary:"boolean"},defaultValue:{summary:"false"}}},icon:{control:!1,description:"Icon template (Lit TemplateResult) for the button. Accepts SVG templates or icon component templates. Use this for inline SVG icons.",table:{category:"Content",type:{summary:"TemplateResult"},defaultValue:{summary:"undefined"}}},imgurl:{control:{type:"text"},description:"Image URL for the icon. Alternative to the icon template property. Use this for external image files or icon URLs.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},disabled:{control:{type:"boolean"},description:"Disables the icon button, preventing user interaction. The button appears grayed out and click events are blocked.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},inverseColor:{control:{type:"boolean"},description:"Uses inverse color scheme for high contrast scenarios. Typically white icon on dark background, useful for FAB buttons or dark themed toolbars.",table:{category:"Styling",type:{summary:"boolean"},defaultValue:{summary:"false"}}},ariaLabel:{control:{type:"text"},description:"ARIA label for accessibility. Provides descriptive text for screen readers since icon buttons lack visible text labels. Required for accessibility.",table:{category:"Accessibility",type:{summary:"string"},defaultValue:{summary:""}}}},args:{size:n.SMALL,withPadding:!1,imgurl:"https://cdn-icons-png.flaticon.com/512/61/61456.png",icon:e`<icon-search></icon-search>`,disabled:!1,inverseColor:!1,ariaLabel:"Search"},render:t=>e`
    <enchanted-icon-button
      .size="${t.size}"
      ?withPadding=${t.withPadding}
      ?disabled=${t.disabled}
      imgurl="${t.imgurl}"
      .icon=${t.icon}
      ?inverseColor=${t.inverseColor}
      ariaLabel="${t.ariaLabel}"
    ></enchanted-icon-button>
  `},i={args:{imgurl:""}},o={parameters:{controls:{disable:!0},docs:{description:{story:`Comprehensive showcase of all icon button states and variations:

**Sizes:** Three size options - SMALL for compact toolbars, MEDIUM for standard actions, and FAB (Floating Action Button) for prominent primary actions.

**Icon Sources:** Supports both inline SVG templates (via icon property) and external image URLs (via imgurl property).

**States:** Includes disabled state, padding variations for improved touch targets, and inverse color scheme for dark backgrounds.

**Accessibility:** All buttons include ariaLabel for screen reader support.`}}},render:()=>e`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Small Size (Default)</div>
          <enchanted-icon-button
            size="${n.SMALL}"
            .icon=${e`<icon-search></icon-search>`}
            ariaLabel="Search"
          ></enchanted-icon-button>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Medium Size</div>
          <enchanted-icon-button
            size="${n.MEDIUM}"
            .icon=${e`<icon-search></icon-search>`}
            ariaLabel="Search"
          ></enchanted-icon-button>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">FAB Size</div>
          <enchanted-icon-button
            size="${n.FAB}"
            .icon=${e`<icon-search></icon-search>`}
            ariaLabel="Search"
          ></enchanted-icon-button>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With Padding</div>
          <enchanted-icon-button
            size="${n.SMALL}"
            .icon=${e`<icon-search></icon-search>`}
            ?withPadding=${!0}
            ariaLabel="Search with padding"
          ></enchanted-icon-button>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled</div>
          <enchanted-icon-button
            size="${n.SMALL}"
            .icon=${e`<icon-search></icon-search>`}
            ?disabled=${!0}
            ariaLabel="Search disabled"
          ></enchanted-icon-button>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Inverse Color</div>
          <div style="background-color: #333; padding: 12px; border-radius: 4px;">
            <enchanted-icon-button
              size="${n.SMALL}"
              .icon=${e`<icon-search></icon-search>`}
              ?inverseColor=${!0}
              ariaLabel="Search inverse"
            ></enchanted-icon-button>
          </div>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">FAB Inverse Color</div>
          <div style="background-color: #333; padding: 12px; border-radius: 4px;">
            <enchanted-icon-button
              size="${n.FAB}"
              .icon=${e`<icon-search></icon-search>`}
              ?inverseColor=${!0}
              ariaLabel="Primary action"
            ></enchanted-icon-button>
          </div>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Image URL Icon</div>
          <enchanted-icon-button
            size="${n.SMALL}"
            imgurl="https://cdn-icons-png.flaticon.com/512/61/61456.png"
            ariaLabel="Settings"
          ></enchanted-icon-button>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Medium with Padding</div>
          <enchanted-icon-button
            size="${n.MEDIUM}"
            .icon=${e`<icon-search></icon-search>`}
            ?withPadding=${!0}
            ariaLabel="Search medium"
          ></enchanted-icon-button>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Medium Disabled</div>
          <enchanted-icon-button
            size="${n.MEDIUM}"
            .icon=${e`<icon-search></icon-search>`}
            ?disabled=${!0}
            ariaLabel="Search disabled"
          ></enchanted-icon-button>
        </div>
      </div>
    `};var a,r,c;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    imgurl: ''
  }
}`,...(c=(r=i.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var s,d,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
          <enchanted-icon-button
            size="\${ICON_BUTTON_SIZES.SMALL}"
            .icon=\${html\`<icon-search></icon-search>\`}
            ariaLabel="Search"
          ></enchanted-icon-button>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Medium Size</div>
          <enchanted-icon-button
            size="\${ICON_BUTTON_SIZES.MEDIUM}"
            .icon=\${html\`<icon-search></icon-search>\`}
            ariaLabel="Search"
          ></enchanted-icon-button>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">FAB Size</div>
          <enchanted-icon-button
            size="\${ICON_BUTTON_SIZES.FAB}"
            .icon=\${html\`<icon-search></icon-search>\`}
            ariaLabel="Search"
          ></enchanted-icon-button>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With Padding</div>
          <enchanted-icon-button
            size="\${ICON_BUTTON_SIZES.SMALL}"
            .icon=\${html\`<icon-search></icon-search>\`}
            ?withPadding=\${true}
            ariaLabel="Search with padding"
          ></enchanted-icon-button>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled</div>
          <enchanted-icon-button
            size="\${ICON_BUTTON_SIZES.SMALL}"
            .icon=\${html\`<icon-search></icon-search>\`}
            ?disabled=\${true}
            ariaLabel="Search disabled"
          ></enchanted-icon-button>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Inverse Color</div>
          <div style="background-color: #333; padding: 12px; border-radius: 4px;">
            <enchanted-icon-button
              size="\${ICON_BUTTON_SIZES.SMALL}"
              .icon=\${html\`<icon-search></icon-search>\`}
              ?inverseColor=\${true}
              ariaLabel="Search inverse"
            ></enchanted-icon-button>
          </div>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">FAB Inverse Color</div>
          <div style="background-color: #333; padding: 12px; border-radius: 4px;">
            <enchanted-icon-button
              size="\${ICON_BUTTON_SIZES.FAB}"
              .icon=\${html\`<icon-search></icon-search>\`}
              ?inverseColor=\${true}
              ariaLabel="Primary action"
            ></enchanted-icon-button>
          </div>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Image URL Icon</div>
          <enchanted-icon-button
            size="\${ICON_BUTTON_SIZES.SMALL}"
            imgurl="https://cdn-icons-png.flaticon.com/512/61/61456.png"
            ariaLabel="Settings"
          ></enchanted-icon-button>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Medium with Padding</div>
          <enchanted-icon-button
            size="\${ICON_BUTTON_SIZES.MEDIUM}"
            .icon=\${html\`<icon-search></icon-search>\`}
            ?withPadding=\${true}
            ariaLabel="Search medium"
          ></enchanted-icon-button>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Medium Disabled</div>
          <enchanted-icon-button
            size="\${ICON_BUTTON_SIZES.MEDIUM}"
            .icon=\${html\`<icon-search></icon-search>\`}
            ?disabled=\${true}
            ariaLabel="Search disabled"
          ></enchanted-icon-button>
        </div>
      </div>
    \`;
  }
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const A=["Default","AllStates"];export{o as AllStates,i as Default,A as __namedExportsOrder,x as default};
