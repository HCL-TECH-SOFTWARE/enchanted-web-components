import{x as t}from"./iframe-I2cpem8U.js";import"./enchanted-button-bGeso_Ea.js";import{I as e,i}from"./cssClassEnums-WDBe4U61.js";import"./index-QXK_OoEC.js";import{t as h}from"./test-avatar-image-RZI1r1Pv.js";import"./preload-helper-C1FmrZbK.js";import"./enchanted-ac-base-element-CYtj5YlD.js";import"./state-0u-7W5Ce.js";import"./localization-D5pUJpuu.js";import"./keyboardEventKeys-BnoN8uA3.js";import"./index-CuTRIAwF.js";import"./index-ciz72CDE.js";const U={title:"Input/enchanted-button",component:"enchanted-button",tags:["autodocs"],argTypes:{variant:{control:{type:"radio"},options:[i.BUTTON_CONTAINED_VAR,i.BUTTON_TEXT_VAR,i.BUTTON_OUTLINED_VAR],description:"Visual style variant of the button (contained, text, or outlined). Contained buttons have solid background, text buttons are transparent, outlined have border.",table:{category:"Display",type:{summary:"string"},defaultValue:{summary:i.BUTTON_CONTAINED_VAR}}},size:{control:{type:"radio"},options:[e.SMALL,e.MEDIUM,e.FAB],description:"Size of the button (small, medium, or FAB for floating action button). Affects padding, font size, and icon dimensions.",table:{category:"Layout",type:{summary:"ICON_BUTTON_SIZES"},defaultValue:{summary:e.SMALL}}},disabled:{control:"boolean",description:"Disables the button, preventing interaction and showing disabled styling with reduced opacity.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},endicon:{control:"boolean",description:"Positions icon at the end of the button text instead of the start. Works with both icon and imgurl properties.",table:{category:"Layout",type:{summary:"boolean"},defaultValue:{summary:"false"}}},withPadding:{control:"boolean",description:"Adds additional padding around the button content, particularly useful for icon-only buttons without text.",table:{category:"Styling",type:{summary:"boolean"},defaultValue:{summary:"false"}}},inverseColor:{control:"boolean",description:"Applies inverse color scheme suitable for dark backgrounds, inverting text and icon colors for better contrast.",table:{category:"Styling",type:{summary:"boolean"},defaultValue:{summary:"false"}}},buttontext:{control:"text",description:"Text label displayed on the button. Can be omitted for icon-only buttons.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:"undefined"}}},imgurl:{control:"text",description:"URL of an image to display as the button icon. Alternative to using the icon property with template results.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:"undefined"}}},icon:{control:{type:"object"},description:"Template result containing an icon element to display on the button. Supports both enchanted icons (<icon-*>) and SVG elements."},ariaLabel:{control:"text",description:"Accessible label for screen readers when button text is insufficient to describe the action, particularly important for icon-only buttons.",table:{category:"Accessibility",type:{summary:"string"},defaultValue:{summary:""}}},ariaHasPopup:{control:"text",description:"ARIA attribute indicating the button opens a popup element (menu, dialog, listbox, etc.). Helps screen readers announce popup behavior.",table:{category:"Accessibility",type:{summary:"string"},defaultValue:{summary:""}}},ariaExpanded:{control:"text",description:'ARIA attribute indicating the expanded state of associated content. Use "true" or "false" to indicate whether controlled content is visible.',table:{category:"Accessibility",type:{summary:"string"},defaultValue:{summary:"false"}}}},args:{variant:i.BUTTON_CONTAINED_VAR,size:e.SMALL,disabled:!1,endicon:!1,withPadding:!1,inverseColor:!1,buttontext:"Button",imgurl:h,icon:t`<icon-search size='16' color='#FFFFFF'></icon-search>`,ariaLabel:"",ariaHasPopup:"",ariaExpanded:"false"},parameters:{docs:{description:{component:"Button component with controls for variant, size, and boolean properties. Supports text, icons, images, and accessibility features with ARIA attributes."}}}},r={render:n=>t`
      <enchanted-button
        .variant=${n.variant}
        .size=${n.size}
        ?disabled=${n.disabled}
        ?endicon=${n.endicon}
        ?withPadding=${n.withPadding}
        ?inverseColor=${n.inverseColor}
        .buttontext=${n.buttontext}
        .imgurl=${n.imgurl}
        .icon=${n.icon}
        .ariaLabel=${n.ariaLabel}
        .ariaHasPopup=${n.ariaHasPopup}
        .ariaExpanded=${n.ariaExpanded}
      ></enchanted-button>
    `,name:"Default"},o={render:()=>{const n=[i.BUTTON_CONTAINED_VAR,i.BUTTON_TEXT_VAR,i.BUTTON_OUTLINED_VAR],b=[e.SMALL,e.MEDIUM,e.FAB];return t`
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <!-- Variants x Sizes with Text + Icon -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Text + Icon Combinations</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            ${n.map(a=>b.map(s=>t`
                  <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
                    <enchanted-button .variant=${a} .size=${s} .buttontext=${"Button"} .icon=${t`<icon-search size='16'></icon-search>`}></enchanted-button>
                    <span style="font-size: 11px; color: #666;">${a} / ${s}</span>
                  </div>
                `))}
          </div>
        </div>

        <!-- Icon at End -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Icon at End (endicon)</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            ${n.map(a=>t`
                <enchanted-button 
                  .variant=${a}
                  .size=${e.MEDIUM}
                  .buttontext=${"Button"}
                  .icon=${t`<icon-search size='16'></icon-search>`}
                  ?endicon=${!0}>
                </enchanted-button>
              `)}
          </div>
        </div>

        <!-- Image URL -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Image URL (imgurl)</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            ${n.map(a=>t`
                <enchanted-button .variant=${a} .size=${e.MEDIUM} .buttontext=${"Avatar"} .imgurl=${h}></enchanted-button>
              `)}
          </div>
        </div>

        <!-- Icon Only (no text) -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Icon Only (no text)</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            ${n.map(a=>t`
                <enchanted-button .variant=${a} .size=${e.MEDIUM} .icon=${t`<icon-search size='16'></icon-search>`} .ariaLabel=${"Search"}></enchanted-button>
              `)}
          </div>
        </div>

        <!-- With Padding -->
        <div>
          <h3 style="margin: 0 0 16px 0;">With Padding</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            ${n.map(a=>t`
                <enchanted-button
                  .variant=${a}
                  .size=${e.MEDIUM}
                  .icon=${t`<icon-search size='16'></icon-search>`}
                  ?withPadding=${!0}
                  .ariaLabel=${"Search"}>
                </enchanted-button>
              `)}
          </div>
        </div>

        <!-- Inverse Color (on dark background) -->
        <div style="background-color: #1a1a1a; padding: 16px; border-radius: 4px;">
          <h3 style="margin: 0 0 16px 0; color: white;">Inverse Color (dark background)</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            ${n.map(a=>t`
                <enchanted-button
                  .variant=${a}
                  .size=${e.MEDIUM}
                  .buttontext=${"Button"}
                  .icon=${t`<icon-search size='16'></icon-search>`}
                  ?inverseColor=${!0}>
                </enchanted-button>
              `)}
          </div>
        </div>

        <!-- Disabled State -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Disabled State</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            ${n.map(a=>t`
                <enchanted-button
                  .variant=${a}
                  .size=${e.MEDIUM}
                  .buttontext=${"Button"}
                  .icon=${t`<icon-search size='16'></icon-search>`}
                  ?disabled=${!0}>
                </enchanted-button>
              `)}
          </div>
        </div>

        <!-- Text Only (no icon) -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Text Only (no icon)</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            ${n.map(a=>t`
                <enchanted-button .variant=${a} .size=${e.MEDIUM} .buttontext=${"Button"}></enchanted-button>
              `)}
          </div>
        </div>

        <!-- Accessibility Props -->
        <div>
          <h3 style="margin: 0 0 16px 0;">With ARIA Attributes</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            <enchanted-button
              .variant=${i.BUTTON_CONTAINED_VAR}
              .size=${e.MEDIUM}
              .buttontext=${"Menu"}
              .icon=${t`<icon-search size='16'></icon-search>`}
              .ariaLabel=${"Open menu"}
              .ariaHasPopup=${"menu"}
              .ariaExpanded=${"false"}
            ></enchanted-button>
            <enchanted-button
              .variant=${i.BUTTON_OUTLINED_VAR}
              .size=${e.MEDIUM}
              .buttontext=${"Expand"}
              .ariaLabel=${"Expand section"}
              .ariaExpanded=${"true"}
            ></enchanted-button>
          </div>
        </div>
      </div>
    `},name:"AllStates",parameters:{controls:{disabled:!0},docs:{description:{story:"Comprehensive showcase of all button states, variants, sizes, and configurations including text, icons, images, padding, inverse colors, disabled state, and ARIA attributes."}}}};var d,l,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <enchanted-button
        .variant=\${args.variant}
        .size=\${args.size}
        ?disabled=\${args.disabled}
        ?endicon=\${args.endicon}
        ?withPadding=\${args.withPadding}
        ?inverseColor=\${args.inverseColor}
        .buttontext=\${args.buttontext}
        .imgurl=\${args.imgurl}
        .icon=\${args.icon}
        .ariaLabel=\${args.ariaLabel}
        .ariaHasPopup=\${args.ariaHasPopup}
        .ariaExpanded=\${args.ariaExpanded}
      ></enchanted-button>
    \`;
  },
  name: 'Default'
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,u,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const variants = [BUTTON_VARIANT.BUTTON_CONTAINED_VAR, BUTTON_VARIANT.BUTTON_TEXT_VAR, BUTTON_VARIANT.BUTTON_OUTLINED_VAR];
    const sizes = [ICON_BUTTON_SIZES.SMALL, ICON_BUTTON_SIZES.MEDIUM, ICON_BUTTON_SIZES.FAB];
    return html\`
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <!-- Variants x Sizes with Text + Icon -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Text + Icon Combinations</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            \${variants.map(variant => {
      return sizes.map(size => {
        return html\`
                  <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
                    <enchanted-button .variant=\${variant} .size=\${size} .buttontext=\${'Button'} .icon=\${html\`<icon-search size='16'></icon-search>\`}></enchanted-button>
                    <span style="font-size: 11px; color: #666;">\${variant} / \${size}</span>
                  </div>
                \`;
      });
    })}
          </div>
        </div>

        <!-- Icon at End -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Icon at End (endicon)</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            \${variants.map(variant => {
      return html\`
                <enchanted-button 
                  .variant=\${variant}
                  .size=\${ICON_BUTTON_SIZES.MEDIUM}
                  .buttontext=\${'Button'}
                  .icon=\${html\`<icon-search size='16'></icon-search>\`}
                  ?endicon=\${true}>
                </enchanted-button>
              \`;
    })}
          </div>
        </div>

        <!-- Image URL -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Image URL (imgurl)</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            \${variants.map(variant => {
      return html\`
                <enchanted-button .variant=\${variant} .size=\${ICON_BUTTON_SIZES.MEDIUM} .buttontext=\${'Avatar'} .imgurl=\${testImageUrl}></enchanted-button>
              \`;
    })}
          </div>
        </div>

        <!-- Icon Only (no text) -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Icon Only (no text)</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            \${variants.map(variant => {
      return html\`
                <enchanted-button .variant=\${variant} .size=\${ICON_BUTTON_SIZES.MEDIUM} .icon=\${html\`<icon-search size='16'></icon-search>\`} .ariaLabel=\${'Search'}></enchanted-button>
              \`;
    })}
          </div>
        </div>

        <!-- With Padding -->
        <div>
          <h3 style="margin: 0 0 16px 0;">With Padding</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            \${variants.map(variant => {
      return html\`
                <enchanted-button
                  .variant=\${variant}
                  .size=\${ICON_BUTTON_SIZES.MEDIUM}
                  .icon=\${html\`<icon-search size='16'></icon-search>\`}
                  ?withPadding=\${true}
                  .ariaLabel=\${'Search'}>
                </enchanted-button>
              \`;
    })}
          </div>
        </div>

        <!-- Inverse Color (on dark background) -->
        <div style="background-color: #1a1a1a; padding: 16px; border-radius: 4px;">
          <h3 style="margin: 0 0 16px 0; color: white;">Inverse Color (dark background)</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            \${variants.map(variant => {
      return html\`
                <enchanted-button
                  .variant=\${variant}
                  .size=\${ICON_BUTTON_SIZES.MEDIUM}
                  .buttontext=\${'Button'}
                  .icon=\${html\`<icon-search size='16'></icon-search>\`}
                  ?inverseColor=\${true}>
                </enchanted-button>
              \`;
    })}
          </div>
        </div>

        <!-- Disabled State -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Disabled State</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            \${variants.map(variant => {
      return html\`
                <enchanted-button
                  .variant=\${variant}
                  .size=\${ICON_BUTTON_SIZES.MEDIUM}
                  .buttontext=\${'Button'}
                  .icon=\${html\`<icon-search size='16'></icon-search>\`}
                  ?disabled=\${true}>
                </enchanted-button>
              \`;
    })}
          </div>
        </div>

        <!-- Text Only (no icon) -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Text Only (no icon)</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            \${variants.map(variant => {
      return html\`
                <enchanted-button .variant=\${variant} .size=\${ICON_BUTTON_SIZES.MEDIUM} .buttontext=\${'Button'}></enchanted-button>
              \`;
    })}
          </div>
        </div>

        <!-- Accessibility Props -->
        <div>
          <h3 style="margin: 0 0 16px 0;">With ARIA Attributes</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            <enchanted-button
              .variant=\${BUTTON_VARIANT.BUTTON_CONTAINED_VAR}
              .size=\${ICON_BUTTON_SIZES.MEDIUM}
              .buttontext=\${'Menu'}
              .icon=\${html\`<icon-search size='16'></icon-search>\`}
              .ariaLabel=\${'Open menu'}
              .ariaHasPopup=\${'menu'}
              .ariaExpanded=\${'false'}
            ></enchanted-button>
            <enchanted-button
              .variant=\${BUTTON_VARIANT.BUTTON_OUTLINED_VAR}
              .size=\${ICON_BUTTON_SIZES.MEDIUM}
              .buttontext=\${'Expand'}
              .ariaLabel=\${'Expand section'}
              .ariaExpanded=\${'true'}
            ></enchanted-button>
          </div>
        </div>
      </div>
    \`;
  },
  name: 'AllStates',
  parameters: {
    controls: {
      disabled: true
    },
    docs: {
      description: {
        story: 'Comprehensive showcase of all button states, variants, sizes, and configurations including text, icons, images, padding, inverse colors, disabled state, and ARIA attributes.'
      }
    }
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const _=["EnchantedButton","AllStates"];export{o as AllStates,r as EnchantedButton,_ as __namedExportsOrder,U as default};
