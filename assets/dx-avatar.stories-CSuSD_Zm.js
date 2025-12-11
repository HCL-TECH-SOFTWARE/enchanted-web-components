import{x as r}from"./iframe-Dsd1MpWQ.js";import"./dx-avatar-CcPSZodn.js";import{d as A,e as t,f as a}from"./cssClassEnums-v1h5zF5X.js";import{c as $,B as c,t as E}from"./index-BPZZDKKN.js";import"./index-86KUY05j.js";import{t as n}from"./test-avatar-image-RZI1r1Pv.js";import"./preload-helper-C1FmrZbK.js";import"./dx-ac-base-element-C9dhstFR.js";var i={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z"}},{elem:"path",attrs:{d:"M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z"}}],name:"link",size:32};const o="icon-link";class s extends c{render(){return r`${E({...i,attrs:{...i.attrs,preserveAspectRatio:"xMidYMid"}})}`}}$&&!customElements.get(o)&&customElements.define(o,s);const U={title:"Data display/dx-avatar",component:"dx-avatar",tags:["autodocs"],argTypes:{variant:{control:{type:"radio"},options:[a.AVATAR_LETTER,a.AVATAR_ICON,a.AVATAR_ICON_TEMPLATE,a.AVATAR_IMG],description:"Defines the content type displayed in the avatar (letter, icon, icon template, or image)",table:{type:{summary:"string"},defaultValue:{summary:a.AVATAR_LETTER}}},type:{control:{type:"radio"},options:[t.AVATAR_ROUNDED,t.AVATAR_CIRCULAR],description:"Defines the shape of the avatar (rounded corners or fully circular)",table:{type:{summary:"string"},defaultValue:{summary:t.AVATAR_ROUNDED}}},color:{control:{type:"radio"},options:[A.AVATAR_DEFAULT_COLOR,A.AVATAR_RED,A.AVATAR_ORANGE,A.AVATAR_YELLOW,A.AVATAR_LIME,A.AVATAR_GREEN,A.AVATAR_TEAL,A.AVATAR_BLUE,A.AVATAR_INDIGO,A.AVATAR_PURPLE,A.AVATAR_PINK],description:"Defines the background color of the avatar",table:{type:{summary:"AVATAR_COLOR"},defaultValue:{summary:A.AVATAR_DEFAULT_COLOR}}},imgUrl:{control:{type:"text"},description:"URL of the image to display when variant is set to AVATAR_IMG",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},iconUrl:{control:{type:"object"},description:"Icon component to display when variant is set to AVATAR_ICON (Lit TemplateResult)"},avatarText:{control:{type:"text"},description:"Text to display when variant is set to AVATAR_LETTER (max 2 characters)",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},iconTemplate:{control:{type:"object"},description:"Icon template to display when variant is set to AVATAR_ICON_TEMPLATE (Lit TemplateResult)"}},args:{variant:a.AVATAR_LETTER,type:t.AVATAR_ROUNDED,color:A.AVATAR_DEFAULT_COLOR,imgUrl:n,iconUrl:r`<icon-link></icon-link>`,avatarText:"AB",iconTemplate:r`<icon-template></icon-template>`},parameters:{docs:{description:{component:"Avatar component for displaying user profile pictures, initials, or icons. Supports multiple variants (letter, icon, icon template, image), shapes (rounded, circular), and a variety of color options. Letter avatars automatically truncate text to 2 characters."}}}},e={render:T=>r`
      <dx-avatar
        .variant=${T.variant}
        .type=${T.type}
        .color=${T.color}
        .imgUrl=${T.imgUrl}
        .iconUrl=${T.iconUrl}
        .avatarText=${T.avatarText}
        .iconTemplate=${T.iconTemplate}
      ></dx-avatar>
    `,name:"Default",parameters:{docs:{description:{story:"Default avatar with customizable variant, type, color, and content. Switch between variants to see letters, icons, or images. Try different colors and shapes to match your design requirements."}}}},R={render:()=>r`
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h3>Letter Avatars - Rounded</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <dx-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"AB"}></dx-avatar>
            <dx-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"CD"} .color=${A.AVATAR_RED}></dx-avatar>
            <dx-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"EF"} .color=${A.AVATAR_ORANGE}></dx-avatar>
            <dx-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"GH"} .color=${A.AVATAR_YELLOW}></dx-avatar>
            <dx-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"IJ"} .color=${A.AVATAR_LIME}></dx-avatar>
            <dx-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"KL"} .color=${A.AVATAR_GREEN}></dx-avatar>
            <dx-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"MN"} .color=${A.AVATAR_TEAL}></dx-avatar>
            <dx-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"OP"} .color=${A.AVATAR_BLUE}></dx-avatar>
            <dx-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"QR"} .color=${A.AVATAR_INDIGO}></dx-avatar>
            <dx-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"ST"} .color=${A.AVATAR_PURPLE}></dx-avatar>
            <dx-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"UV"} .color=${A.AVATAR_PINK}></dx-avatar>
          </div>
        </div>

        <div>
          <h3>Letter Avatars - Circular</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <dx-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"AB"}></dx-avatar>
            <dx-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"CD"} .color=${A.AVATAR_RED}></dx-avatar>
            <dx-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"EF"} .color=${A.AVATAR_ORANGE}></dx-avatar>
            <dx-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"GH"} .color=${A.AVATAR_YELLOW}></dx-avatar>
            <dx-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"IJ"} .color=${A.AVATAR_LIME}></dx-avatar>
            <dx-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"KL"} .color=${A.AVATAR_GREEN}></dx-avatar>
            <dx-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"MN"} .color=${A.AVATAR_TEAL}></dx-avatar>
            <dx-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"OP"} .color=${A.AVATAR_BLUE}></dx-avatar>
            <dx-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"QR"} .color=${A.AVATAR_INDIGO}></dx-avatar>
            <dx-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"ST"} .color=${A.AVATAR_PURPLE}></dx-avatar>
            <dx-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"UV"} .color=${A.AVATAR_PINK}></dx-avatar>
          </div>
        </div>

        <div>
          <h3>Icon Avatars</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <dx-avatar .variant=${a.AVATAR_ICON} .type=${t.AVATAR_ROUNDED} .iconUrl=${r`<icon-link></icon-link>`}></dx-avatar>
            <dx-avatar .variant=${a.AVATAR_ICON} .type=${t.AVATAR_CIRCULAR} .iconUrl=${r`<icon-link></icon-link>`}></dx-avatar>
            <dx-avatar .variant=${a.AVATAR_ICON} .type=${t.AVATAR_ROUNDED} .iconUrl=${r`<icon-link></icon-link>`} .color=${A.AVATAR_BLUE}></dx-avatar>
            <dx-avatar .variant=${a.AVATAR_ICON} .type=${t.AVATAR_CIRCULAR} .iconUrl=${r`<icon-link></icon-link>`} .color=${A.AVATAR_BLUE}></dx-avatar>
          </div>
        </div>

        <div>
          <h3>Icon Template Avatars</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <dx-avatar .variant=${a.AVATAR_ICON_TEMPLATE} .type=${t.AVATAR_ROUNDED} .iconTemplate=${r`<icon-template></icon-template>`}></dx-avatar>
            <dx-avatar .variant=${a.AVATAR_ICON_TEMPLATE} .type=${t.AVATAR_CIRCULAR} .iconTemplate=${r`<icon-template></icon-template>`}></dx-avatar>
            <dx-avatar
              .variant=${a.AVATAR_ICON_TEMPLATE}
              .type=${t.AVATAR_ROUNDED}
              .iconTemplate=${r`<icon-template></icon-template>`}
              .color=${A.AVATAR_GREEN}
            ></dx-avatar>
            <dx-avatar
              .variant=${a.AVATAR_ICON_TEMPLATE}
              .type=${t.AVATAR_CIRCULAR}
              .iconTemplate=${r`<icon-template></icon-template>`}
              .color=${A.AVATAR_GREEN}
            ></dx-avatar>
          </div>
        </div>

        <div>
          <h3>Image Avatars</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <dx-avatar .variant=${a.AVATAR_IMG} .type=${t.AVATAR_ROUNDED} .imgUrl=${n}></dx-avatar>
            <dx-avatar .variant=${a.AVATAR_IMG} .type=${t.AVATAR_CIRCULAR} .imgUrl=${n}></dx-avatar>
          </div>
        </div>
      </div>
    `,parameters:{docs:{description:{story:"Comprehensive showcase of all avatar variants, types, and colors. Demonstrates letter avatars in all 11 colors with both rounded and circular shapes, icon avatars, icon template avatars, and image avatars. This provides a complete reference for all available avatar configurations."}}}};var v,V,l;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <dx-avatar
        .variant=\${args.variant}
        .type=\${args.type}
        .color=\${args.color}
        .imgUrl=\${args.imgUrl}
        .iconUrl=\${args.iconUrl}
        .avatarText=\${args.avatarText}
        .iconTemplate=\${args.iconTemplate}
      ></dx-avatar>
    \`;
  },
  name: 'Default',
  parameters: {
    docs: {
      description: {
        story: 'Default avatar with customizable variant, type, color, and content. ' + 'Switch between variants to see letters, icons, or images. ' + 'Try different colors and shapes to match your design requirements.'
      }
    }
  }
}`,...(l=(V=e.parameters)==null?void 0:V.docs)==null?void 0:l.source}}};var _,d,p;R.parameters={...R.parameters,docs:{...(_=R.parameters)==null?void 0:_.docs,source:{originalSource:"{\n  render: () => {\n    return html`\n      <div style=\"display: flex; flex-direction: column; gap: 24px;\">\n        <div>\n          <h3>Letter Avatars - Rounded</h3>\n          <div style=\"display: flex; gap: 12px; flex-wrap: wrap; align-items: center;\">\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'AB'}></dx-avatar>\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'CD'} .color=${AVATAR_COLOR.AVATAR_RED}></dx-avatar>\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'EF'} .color=${AVATAR_COLOR.AVATAR_ORANGE}></dx-avatar>\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'GH'} .color=${AVATAR_COLOR.AVATAR_YELLOW}></dx-avatar>\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'IJ'} .color=${AVATAR_COLOR.AVATAR_LIME}></dx-avatar>\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'KL'} .color=${AVATAR_COLOR.AVATAR_GREEN}></dx-avatar>\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'MN'} .color=${AVATAR_COLOR.AVATAR_TEAL}></dx-avatar>\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'OP'} .color=${AVATAR_COLOR.AVATAR_BLUE}></dx-avatar>\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'QR'} .color=${AVATAR_COLOR.AVATAR_INDIGO}></dx-avatar>\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'ST'} .color=${AVATAR_COLOR.AVATAR_PURPLE}></dx-avatar>\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'UV'} .color=${AVATAR_COLOR.AVATAR_PINK}></dx-avatar>\n          </div>\n        </div>\n\n        <div>\n          <h3>Letter Avatars - Circular</h3>\n          <div style=\"display: flex; gap: 12px; flex-wrap: wrap; align-items: center;\">\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'AB'}></dx-avatar>\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'CD'} .color=${AVATAR_COLOR.AVATAR_RED}></dx-avatar>\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'EF'} .color=${AVATAR_COLOR.AVATAR_ORANGE}></dx-avatar>\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'GH'} .color=${AVATAR_COLOR.AVATAR_YELLOW}></dx-avatar>\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'IJ'} .color=${AVATAR_COLOR.AVATAR_LIME}></dx-avatar>\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'KL'} .color=${AVATAR_COLOR.AVATAR_GREEN}></dx-avatar>\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'MN'} .color=${AVATAR_COLOR.AVATAR_TEAL}></dx-avatar>\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'OP'} .color=${AVATAR_COLOR.AVATAR_BLUE}></dx-avatar>\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'QR'} .color=${AVATAR_COLOR.AVATAR_INDIGO}></dx-avatar>\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'ST'} .color=${AVATAR_COLOR.AVATAR_PURPLE}></dx-avatar>\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'UV'} .color=${AVATAR_COLOR.AVATAR_PINK}></dx-avatar>\n          </div>\n        </div>\n\n        <div>\n          <h3>Icon Avatars</h3>\n          <div style=\"display: flex; gap: 12px; flex-wrap: wrap; align-items: center;\">\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_ICON} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .iconUrl=${html`<icon-link></icon-link>`}></dx-avatar>\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_ICON} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .iconUrl=${html`<icon-link></icon-link>`}></dx-avatar>\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_ICON} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .iconUrl=${html`<icon-link></icon-link>`} .color=${AVATAR_COLOR.AVATAR_BLUE}></dx-avatar>\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_ICON} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .iconUrl=${html`<icon-link></icon-link>`} .color=${AVATAR_COLOR.AVATAR_BLUE}></dx-avatar>\n          </div>\n        </div>\n\n        <div>\n          <h3>Icon Template Avatars</h3>\n          <div style=\"display: flex; gap: 12px; flex-wrap: wrap; align-items: center;\">\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .iconTemplate=${html`<icon-template></icon-template>`}></dx-avatar>\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .iconTemplate=${html`<icon-template></icon-template>`}></dx-avatar>\n            <dx-avatar\n              .variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE}\n              .type=${AVATAR_TYPE.AVATAR_ROUNDED}\n              .iconTemplate=${html`<icon-template></icon-template>`}\n              .color=${AVATAR_COLOR.AVATAR_GREEN}\n            ></dx-avatar>\n            <dx-avatar\n              .variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE}\n              .type=${AVATAR_TYPE.AVATAR_CIRCULAR}\n              .iconTemplate=${html`<icon-template></icon-template>`}\n              .color=${AVATAR_COLOR.AVATAR_GREEN}\n            ></dx-avatar>\n          </div>\n        </div>\n\n        <div>\n          <h3>Image Avatars</h3>\n          <div style=\"display: flex; gap: 12px; flex-wrap: wrap; align-items: center;\">\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_IMG} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .imgUrl=${testAvatarImageUrl}></dx-avatar>\n            <dx-avatar .variant=${AVATAR_VARIANT.AVATAR_IMG} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .imgUrl=${testAvatarImageUrl}></dx-avatar>\n          </div>\n        </div>\n      </div>\n    `;\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Comprehensive showcase of all avatar variants, types, and colors. ' + 'Demonstrates letter avatars in all 11 colors with both rounded and circular shapes, ' + 'icon avatars, icon template avatars, and image avatars. ' + 'This provides a complete reference for all available avatar configurations.'\n      }\n    }\n  }\n}",...(p=(d=R.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const D=["DxAvatar","AllStates"];export{R as AllStates,e as DxAvatar,D as __namedExportsOrder,U as default};
