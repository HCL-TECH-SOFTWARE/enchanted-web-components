import{g as r,u as t,s as n}from"./tags-xkLHt5Ez.js";import"./enchanted-button-CPwlhnNb.js";import{I as a,i as o}from"./cssClassEnums-WDBe4U61.js";import"./index-D57X42El.js";import{t as g}from"./test-avatar-image-RZI1r1Pv.js";import"./iframe-C32rrkgB.js";import"./preload-helper-C1FmrZbK.js";import"./state-BMB52Uli.js";import"./localization-BszdroIW.js";import"./keyboardEventKeys-BnoN8uA3.js";import"./index-CuTRIAwF.js";import"./tags-DNNghoUc.js";const B={title:"Input/enchanted-button",component:"enchanted-button",tags:["autodocs"],argTypes:{variant:{control:{type:"radio"},options:[o.BUTTON_CONTAINED_VAR,o.BUTTON_TEXT_VAR,o.BUTTON_OUTLINED_VAR],description:"Visual style variant of the button (contained, text, or outlined). Contained buttons have solid background, text buttons are transparent, outlined have border.",table:{category:"Display",type:{summary:"string"},defaultValue:{summary:o.BUTTON_CONTAINED_VAR}}},size:{control:{type:"radio"},options:[a.SMALL,a.MEDIUM,a.FAB],description:"Size of the button (small, medium, or FAB for floating action button). Affects padding, font size, and icon dimensions.",table:{category:"Layout",type:{summary:"ICON_BUTTON_SIZES"},defaultValue:{summary:a.SMALL}}},disabled:{control:"boolean",description:"Disables the button, preventing interaction and showing disabled styling with reduced opacity.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},endicon:{control:"boolean",description:"Positions icon at the end of the button text instead of the start. Works with both icon and imgurl properties.",table:{category:"Layout",type:{summary:"boolean"},defaultValue:{summary:"false"}}},withPadding:{control:"boolean",description:"Adds additional padding around the button content, particularly useful for icon-only buttons without text.",table:{category:"Styling",type:{summary:"boolean"},defaultValue:{summary:"false"}}},inverseColor:{control:"boolean",description:"Applies inverse color scheme suitable for dark backgrounds, inverting text and icon colors for better contrast.",table:{category:"Styling",type:{summary:"boolean"},defaultValue:{summary:"false"}}},buttontext:{control:"text",description:"Text label displayed on the button. Can be omitted for icon-only buttons.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:"undefined"}}},imgurl:{control:"text",description:"URL of an image to display as the button icon. Alternative to using the icon property with template results.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:"undefined"}}},icon:{control:{type:"object"},description:"Template result containing an icon element to display on the button. Supports both enchanted icons (<icon-*>) and SVG elements."},ariaLabel:{control:"text",description:"Accessible label for screen readers when button text is insufficient to describe the action, particularly important for icon-only buttons.",table:{category:"Accessibility",type:{summary:"string"},defaultValue:{summary:""}}},ariaHasPopup:{control:"text",description:"ARIA attribute indicating the button opens a popup element (menu, dialog, listbox, etc.). Helps screen readers announce popup behavior.",table:{category:"Accessibility",type:{summary:"string"},defaultValue:{summary:""}}},ariaExpanded:{control:"text",description:'ARIA attribute indicating the expanded state of associated content. Use "true" or "false" to indicate whether controlled content is visible.',table:{category:"Accessibility",type:{summary:"string"},defaultValue:{summary:"false"}}}},args:{variant:o.BUTTON_CONTAINED_VAR,size:a.SMALL,disabled:!1,endicon:!1,withPadding:!1,inverseColor:!1,buttontext:"Button",imgurl:g,icon:t`<${r("icon-search")} size='16' color='#FFFFFF'></${r("icon-search")}>`,ariaLabel:"",ariaHasPopup:"",ariaExpanded:"false"},parameters:{docs:{description:{component:"Button component with controls for variant, size, and boolean properties. Supports text, icons, images, and accessibility features with ARIA attributes."}}}},s={render:e=>t`
      <${n}
        .variant=${e.variant}
        .size=${e.size}
        ?disabled=${e.disabled}
        ?endicon=${e.endicon}
        ?withPadding=${e.withPadding}
        ?inverseColor=${e.inverseColor}
        .buttontext=${e.buttontext}
        .imgurl=${e.imgurl}
        .icon=${e.icon}
        .ariaLabel=${e.ariaLabel}
        .ariaHasPopup=${e.ariaHasPopup}
        .ariaExpanded=${e.ariaExpanded}
      ></${n}>
    `,name:"Default"},l={render:()=>{const e=[o.BUTTON_CONTAINED_VAR,o.BUTTON_TEXT_VAR,o.BUTTON_OUTLINED_VAR],v=[a.SMALL,a.MEDIUM,a.FAB];return t`
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <!-- Variants x Sizes with Text + Icon -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Text + Icon Combinations</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            ${e.map(i=>v.map(d=>t`
                  <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
                    <${n}
                      .variant=${i}
                      .size=${d}
                      .buttontext=${"Button"}
                      .icon=${t`<${r("icon-search")} size='16'></${r("icon-search")}>`}>
                    </${n}>
                    <span style="font-size: 11px; color: #666;">${i} / ${d}</span>
                  </div>
                `))}
          </div>
        </div>

        <!-- Icon at End -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Icon at End (endicon)</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            ${e.map(i=>t`
                <${n}
                  .variant=${i}
                  .size=${a.MEDIUM}
                  .buttontext=${"Button"}
                  .icon=${t`<${r("icon-search")} size='16'></${r("icon-search")}>`}
                  ?endicon=${!0}>
                </${n}>
              `)}
          </div>
        </div>

        <!-- Image URL -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Image URL (imgurl)</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            ${e.map(i=>t`
                <${n} .variant=${i} .size=${a.MEDIUM} .buttontext=${"Avatar"} .imgurl=${g}></${n}>
              `)}
          </div>
        </div>

        <!-- Icon Only (no text) -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Icon Only (no text)</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            ${e.map(i=>t`
                <${n} 
                  .variant=${i}
                  .size=${a.MEDIUM}
                  .icon=${t`<${r("icon-search")} size='16'></${r("icon-search")}>`}
                  .ariaLabel=${"Search"}>
                </${n}>
              `)}
          </div>
        </div>

        <!-- With Padding -->
        <div>
          <h3 style="margin: 0 0 16px 0;">With Padding</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            ${e.map(i=>t`
                <${n}
                  .variant=${i}
                  .size=${a.MEDIUM}
                  .icon=${t`<${r("icon-search")} size='16'></${r("icon-search")}>`}
                  ?withPadding=${!0}
                  .ariaLabel=${"Search"}>
                </${n}>
              `)}
          </div>
        </div>

        <!-- Inverse Color (on dark background) -->
        <div style="background-color: #1a1a1a; padding: 16px; border-radius: 4px;">
          <h3 style="margin: 0 0 16px 0; color: white;">Inverse Color (dark background)</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            ${e.map(i=>t`
                <${n}
                  .variant=${i}
                  .size=${a.MEDIUM}
                  .buttontext=${"Button"}
                  .icon=${t`<${r("icon-search")} size='16'></${r("icon-search")}>`}
                  ?inverseColor=${!0}>
                </${n}>
              `)}
          </div>
        </div>

        <!-- Disabled State -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Disabled State</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            ${e.map(i=>t`
                <${n}
                  .variant=${i}
                  .size=${a.MEDIUM}
                  .buttontext=${"Button"}
                  .icon=${t`<${r("icon-search")} size='16'></${r("icon-search")}>`}
                  ?disabled=${!0}>
                </${n}>
              `)}
          </div>
        </div>

        <!-- Text Only (no icon) -->
        <div>
          <h3 style="margin: 0 0 16px 0;">Text Only (no icon)</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            ${e.map(i=>t`
                <${n} .variant=${i} .size=${a.MEDIUM} .buttontext=${"Button"}></${n}>
              `)}
          </div>
        </div>

        <!-- Accessibility Props -->
        <div>
          <h3 style="margin: 0 0 16px 0;">With ARIA Attributes</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            <${n}
              .variant=${o.BUTTON_CONTAINED_VAR}
              .size=${a.MEDIUM}
              .buttontext=${"Menu"}
              .icon=${t`<${r("icon-search")} size='16'></${r("icon-search")}>`}
              .ariaLabel=${"Open menu"}
              .ariaHasPopup=${"menu"}
              .ariaExpanded=${"false"}
            ></${n}>
            <${n}
              .variant=${o.BUTTON_OUTLINED_VAR}
              .size=${a.MEDIUM}
              .buttontext=${"Expand"}
              .ariaLabel=${"Expand section"}
              .ariaExpanded=${"true"}
            ></${n}>
          </div>
        </div>
      </div>
    `},name:"AllStates",parameters:{controls:{disabled:!0},docs:{description:{story:"Comprehensive showcase of all button states, variants, sizes, and configurations including text, icons, images, padding, inverse colors, disabled state, and ARIA attributes."}}}};var c,p,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <\${ENCHANTED_BUTTON_TAG}
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
      ></\${ENCHANTED_BUTTON_TAG}>
    \`;
  },
  name: 'Default'
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,T,$;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
                    <\${ENCHANTED_BUTTON_TAG}
                      .variant=\${variant}
                      .size=\${size}
                      .buttontext=\${'Button'}
                      .icon=\${html\`<\${generateIconTagName('icon-search')} size='16'></\${generateIconTagName('icon-search')}>\`}>
                    </\${ENCHANTED_BUTTON_TAG}>
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
                <\${ENCHANTED_BUTTON_TAG}
                  .variant=\${variant}
                  .size=\${ICON_BUTTON_SIZES.MEDIUM}
                  .buttontext=\${'Button'}
                  .icon=\${html\`<\${generateIconTagName('icon-search')} size='16'></\${generateIconTagName('icon-search')}>\`}
                  ?endicon=\${true}>
                </\${ENCHANTED_BUTTON_TAG}>
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
                <\${ENCHANTED_BUTTON_TAG} .variant=\${variant} .size=\${ICON_BUTTON_SIZES.MEDIUM} .buttontext=\${'Avatar'} .imgurl=\${testImageUrl}></\${ENCHANTED_BUTTON_TAG}>
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
                <\${ENCHANTED_BUTTON_TAG} 
                  .variant=\${variant}
                  .size=\${ICON_BUTTON_SIZES.MEDIUM}
                  .icon=\${html\`<\${generateIconTagName('icon-search')} size='16'></\${generateIconTagName('icon-search')}>\`}
                  .ariaLabel=\${'Search'}>
                </\${ENCHANTED_BUTTON_TAG}>
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
                <\${ENCHANTED_BUTTON_TAG}
                  .variant=\${variant}
                  .size=\${ICON_BUTTON_SIZES.MEDIUM}
                  .icon=\${html\`<\${generateIconTagName('icon-search')} size='16'></\${generateIconTagName('icon-search')}>\`}
                  ?withPadding=\${true}
                  .ariaLabel=\${'Search'}>
                </\${ENCHANTED_BUTTON_TAG}>
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
                <\${ENCHANTED_BUTTON_TAG}
                  .variant=\${variant}
                  .size=\${ICON_BUTTON_SIZES.MEDIUM}
                  .buttontext=\${'Button'}
                  .icon=\${html\`<\${generateIconTagName('icon-search')} size='16'></\${generateIconTagName('icon-search')}>\`}
                  ?inverseColor=\${true}>
                </\${ENCHANTED_BUTTON_TAG}>
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
                <\${ENCHANTED_BUTTON_TAG}
                  .variant=\${variant}
                  .size=\${ICON_BUTTON_SIZES.MEDIUM}
                  .buttontext=\${'Button'}
                  .icon=\${html\`<\${generateIconTagName('icon-search')} size='16'></\${generateIconTagName('icon-search')}>\`}
                  ?disabled=\${true}>
                </\${ENCHANTED_BUTTON_TAG}>
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
                <\${ENCHANTED_BUTTON_TAG} .variant=\${variant} .size=\${ICON_BUTTON_SIZES.MEDIUM} .buttontext=\${'Button'}></\${ENCHANTED_BUTTON_TAG}>
              \`;
    })}
          </div>
        </div>

        <!-- Accessibility Props -->
        <div>
          <h3 style="margin: 0 0 16px 0;">With ARIA Attributes</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
            <\${ENCHANTED_BUTTON_TAG}
              .variant=\${BUTTON_VARIANT.BUTTON_CONTAINED_VAR}
              .size=\${ICON_BUTTON_SIZES.MEDIUM}
              .buttontext=\${'Menu'}
              .icon=\${html\`<\${generateIconTagName('icon-search')} size='16'></\${generateIconTagName('icon-search')}>\`}
              .ariaLabel=\${'Open menu'}
              .ariaHasPopup=\${'menu'}
              .ariaExpanded=\${'false'}
            ></\${ENCHANTED_BUTTON_TAG}>
            <\${ENCHANTED_BUTTON_TAG}
              .variant=\${BUTTON_VARIANT.BUTTON_OUTLINED_VAR}
              .size=\${ICON_BUTTON_SIZES.MEDIUM}
              .buttontext=\${'Expand'}
              .ariaLabel=\${'Expand section'}
              .ariaExpanded=\${'true'}
            ></\${ENCHANTED_BUTTON_TAG}>
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
}`,...($=(T=l.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};const C=["EnchantedButton","AllStates"];export{l as AllStates,s as EnchantedButton,C as __namedExportsOrder,B as default};
