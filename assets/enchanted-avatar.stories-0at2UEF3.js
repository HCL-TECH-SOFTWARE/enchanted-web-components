import{x as e}from"./iframe-Bl462ZXk.js";import"./enchanted-avatar-C0SvbnPH.js";import{d as A,e as t,f as a}from"./cssClassEnums-DRCAaF3v.js";import{t as p}from"./index-CuTRIAwF.js";import{c as $,B as E}from"./index-C79KgSGt.js";import"./index-BPdh0Jk9.js";import{t as R}from"./test-avatar-image-RZI1r1Pv.js";import"./preload-helper-C1FmrZbK.js";import"./enchanted-ac-base-element-D6hCixC-.js";var i={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z"}},{elem:"path",attrs:{d:"M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z"}}],name:"link",size:32};const c="icon-link";class s extends E{render(){return e`${p({...i,attrs:{...i.attrs,preserveAspectRatio:"xMidYMid"}})}`}}$&&!customElements.get(c)&&customElements.define(c,s);const x={title:"Data display/enchanted-avatar",component:"enchanted-avatar",tags:["autodocs"],argTypes:{variant:{control:{type:"radio"},options:[a.AVATAR_LETTER,a.AVATAR_ICON,a.AVATAR_ICON_TEMPLATE,a.AVATAR_IMG],description:"Defines the content type displayed in the avatar (letter, icon, icon template, or image)",table:{type:{summary:"string"},defaultValue:{summary:a.AVATAR_LETTER}}},type:{control:{type:"radio"},options:[t.AVATAR_ROUNDED,t.AVATAR_CIRCULAR],description:"Defines the shape of the avatar (rounded corners or fully circular)",table:{type:{summary:"string"},defaultValue:{summary:t.AVATAR_ROUNDED}}},color:{control:{type:"radio"},options:[A.AVATAR_DEFAULT_COLOR,A.AVATAR_RED,A.AVATAR_ORANGE,A.AVATAR_YELLOW,A.AVATAR_LIME,A.AVATAR_GREEN,A.AVATAR_TEAL,A.AVATAR_BLUE,A.AVATAR_INDIGO,A.AVATAR_PURPLE,A.AVATAR_PINK],description:"Defines the background color of the avatar",table:{type:{summary:"AVATAR_COLOR"},defaultValue:{summary:A.AVATAR_DEFAULT_COLOR}}},imgUrl:{control:{type:"text"},description:"URL of the image to display when variant is set to AVATAR_IMG",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},iconUrl:{control:{type:"object"},description:"Icon component to display when variant is set to AVATAR_ICON (Lit TemplateResult)"},avatarText:{control:{type:"text"},description:"Text to display when variant is set to AVATAR_LETTER (max 2 characters)",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},iconTemplate:{control:{type:"object"},description:"Icon template to display when variant is set to AVATAR_ICON_TEMPLATE (Lit TemplateResult)"}},args:{variant:a.AVATAR_LETTER,type:t.AVATAR_ROUNDED,color:A.AVATAR_DEFAULT_COLOR,imgUrl:R,iconUrl:e`<icon-link></icon-link>`,avatarText:"AB",iconTemplate:e`<icon-template></icon-template>`},parameters:{docs:{description:{component:"Avatar component for displaying user profile pictures, initials, or icons. Supports multiple variants (letter, icon, icon template, image), shapes (rounded, circular), and a variety of color options. Letter avatars automatically truncate text to 2 characters."}}}},r={render:n=>e`
      <enchanted-avatar
        .variant=${n.variant}
        .type=${n.type}
        .color=${n.color}
        .imgUrl=${n.imgUrl}
        .iconUrl=${n.iconUrl}
        .avatarText=${n.avatarText}
        .iconTemplate=${n.iconTemplate}
      ></enchanted-avatar>
    `,name:"Default",parameters:{docs:{description:{story:"Default avatar with customizable variant, type, color, and content. Switch between variants to see letters, icons, or images. Try different colors and shapes to match your design requirements."}}}},T={render:()=>e`
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h3>Letter Avatars - Rounded</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <enchanted-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"AB"}></enchanted-avatar>
            <enchanted-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"CD"} .color=${A.AVATAR_RED}></enchanted-avatar>
            <enchanted-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"EF"} .color=${A.AVATAR_ORANGE}></enchanted-avatar>
            <enchanted-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"GH"} .color=${A.AVATAR_YELLOW}></enchanted-avatar>
            <enchanted-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"IJ"} .color=${A.AVATAR_LIME}></enchanted-avatar>
            <enchanted-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"KL"} .color=${A.AVATAR_GREEN}></enchanted-avatar>
            <enchanted-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"MN"} .color=${A.AVATAR_TEAL}></enchanted-avatar>
            <enchanted-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"OP"} .color=${A.AVATAR_BLUE}></enchanted-avatar>
            <enchanted-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"QR"} .color=${A.AVATAR_INDIGO}></enchanted-avatar>
            <enchanted-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"ST"} .color=${A.AVATAR_PURPLE}></enchanted-avatar>
            <enchanted-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"UV"} .color=${A.AVATAR_PINK}></enchanted-avatar>
          </div>
        </div>

        <div>
          <h3>Letter Avatars - Circular</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <enchanted-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"AB"}></enchanted-avatar>
            <enchanted-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"CD"} .color=${A.AVATAR_RED}></enchanted-avatar>
            <enchanted-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"EF"} .color=${A.AVATAR_ORANGE}></enchanted-avatar>
            <enchanted-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"GH"} .color=${A.AVATAR_YELLOW}></enchanted-avatar>
            <enchanted-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"IJ"} .color=${A.AVATAR_LIME}></enchanted-avatar>
            <enchanted-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"KL"} .color=${A.AVATAR_GREEN}></enchanted-avatar>
            <enchanted-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"MN"} .color=${A.AVATAR_TEAL}></enchanted-avatar>
            <enchanted-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"OP"} .color=${A.AVATAR_BLUE}></enchanted-avatar>
            <enchanted-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"QR"} .color=${A.AVATAR_INDIGO}></enchanted-avatar>
            <enchanted-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"ST"} .color=${A.AVATAR_PURPLE}></enchanted-avatar>
            <enchanted-avatar .variant=${a.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"UV"} .color=${A.AVATAR_PINK}></enchanted-avatar>
          </div>
        </div>

        <div>
          <h3>Icon Avatars</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <enchanted-avatar .variant=${a.AVATAR_ICON} .type=${t.AVATAR_ROUNDED} .iconUrl=${e`<icon-link></icon-link>`}></enchanted-avatar>
            <enchanted-avatar .variant=${a.AVATAR_ICON} .type=${t.AVATAR_CIRCULAR} .iconUrl=${e`<icon-link></icon-link>`}></enchanted-avatar>
            <enchanted-avatar .variant=${a.AVATAR_ICON} .type=${t.AVATAR_ROUNDED} .iconUrl=${e`<icon-link></icon-link>`} .color=${A.AVATAR_BLUE}>
            </enchanted-avatar>
            <enchanted-avatar .variant=${a.AVATAR_ICON} .type=${t.AVATAR_CIRCULAR} .iconUrl=${e`<icon-link></icon-link>`} .color=${A.AVATAR_BLUE}>
            </enchanted-avatar>
          </div>
        </div>

        <div>
          <h3>Icon Template Avatars</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <enchanted-avatar .variant=${a.AVATAR_ICON_TEMPLATE} .type=${t.AVATAR_ROUNDED} .iconTemplate=${e`<icon-template></icon-template>`}></enchanted-avatar>
            <enchanted-avatar .variant=${a.AVATAR_ICON_TEMPLATE} .type=${t.AVATAR_CIRCULAR} .iconTemplate=${e`<icon-template></icon-template>`}></enchanted-avatar>
            <enchanted-avatar
              .variant=${a.AVATAR_ICON_TEMPLATE}
              .type=${t.AVATAR_ROUNDED}
              .iconTemplate=${e`<icon-template></icon-template>`}
              .color=${A.AVATAR_GREEN}
            ></enchanted-avatar>
            <enchanted-avatar
              .variant=${a.AVATAR_ICON_TEMPLATE}
              .type=${t.AVATAR_CIRCULAR}
              .iconTemplate=${e`<icon-template></icon-template>`}
              .color=${A.AVATAR_GREEN}
            ></enchanted-avatar>
          </div>
        </div>

        <div>
          <h3>Image Avatars</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <enchanted-avatar .variant=${a.AVATAR_IMG} .type=${t.AVATAR_ROUNDED} .imgUrl=${R}></enchanted-avatar>
            <enchanted-avatar .variant=${a.AVATAR_IMG} .type=${t.AVATAR_CIRCULAR} .imgUrl=${R}></enchanted-avatar>
          </div>
        </div>
      </div>
    `,parameters:{docs:{description:{story:"Comprehensive showcase of all avatar variants, types, and colors. Demonstrates letter avatars in all 11 colors with both rounded and circular shapes, icon avatars, icon template avatars, and image avatars. This provides a complete reference for all available avatar configurations."}}}};var o,v,V;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <enchanted-avatar
        .variant=\${args.variant}
        .type=\${args.type}
        .color=\${args.color}
        .imgUrl=\${args.imgUrl}
        .iconUrl=\${args.iconUrl}
        .avatarText=\${args.avatarText}
        .iconTemplate=\${args.iconTemplate}
      ></enchanted-avatar>
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
}`,...(V=(v=r.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var l,_,d;T.parameters={...T.parameters,docs:{...(l=T.parameters)==null?void 0:l.docs,source:{originalSource:"{\n  render: () => {\n    return html`\n      <div style=\"display: flex; flex-direction: column; gap: 24px;\">\n        <div>\n          <h3>Letter Avatars - Rounded</h3>\n          <div style=\"display: flex; gap: 12px; flex-wrap: wrap; align-items: center;\">\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'AB'}></enchanted-avatar>\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'CD'} .color=${AVATAR_COLOR.AVATAR_RED}></enchanted-avatar>\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'EF'} .color=${AVATAR_COLOR.AVATAR_ORANGE}></enchanted-avatar>\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'GH'} .color=${AVATAR_COLOR.AVATAR_YELLOW}></enchanted-avatar>\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'IJ'} .color=${AVATAR_COLOR.AVATAR_LIME}></enchanted-avatar>\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'KL'} .color=${AVATAR_COLOR.AVATAR_GREEN}></enchanted-avatar>\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'MN'} .color=${AVATAR_COLOR.AVATAR_TEAL}></enchanted-avatar>\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'OP'} .color=${AVATAR_COLOR.AVATAR_BLUE}></enchanted-avatar>\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'QR'} .color=${AVATAR_COLOR.AVATAR_INDIGO}></enchanted-avatar>\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'ST'} .color=${AVATAR_COLOR.AVATAR_PURPLE}></enchanted-avatar>\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'UV'} .color=${AVATAR_COLOR.AVATAR_PINK}></enchanted-avatar>\n          </div>\n        </div>\n\n        <div>\n          <h3>Letter Avatars - Circular</h3>\n          <div style=\"display: flex; gap: 12px; flex-wrap: wrap; align-items: center;\">\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'AB'}></enchanted-avatar>\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'CD'} .color=${AVATAR_COLOR.AVATAR_RED}></enchanted-avatar>\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'EF'} .color=${AVATAR_COLOR.AVATAR_ORANGE}></enchanted-avatar>\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'GH'} .color=${AVATAR_COLOR.AVATAR_YELLOW}></enchanted-avatar>\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'IJ'} .color=${AVATAR_COLOR.AVATAR_LIME}></enchanted-avatar>\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'KL'} .color=${AVATAR_COLOR.AVATAR_GREEN}></enchanted-avatar>\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'MN'} .color=${AVATAR_COLOR.AVATAR_TEAL}></enchanted-avatar>\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'OP'} .color=${AVATAR_COLOR.AVATAR_BLUE}></enchanted-avatar>\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'QR'} .color=${AVATAR_COLOR.AVATAR_INDIGO}></enchanted-avatar>\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'ST'} .color=${AVATAR_COLOR.AVATAR_PURPLE}></enchanted-avatar>\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'UV'} .color=${AVATAR_COLOR.AVATAR_PINK}></enchanted-avatar>\n          </div>\n        </div>\n\n        <div>\n          <h3>Icon Avatars</h3>\n          <div style=\"display: flex; gap: 12px; flex-wrap: wrap; align-items: center;\">\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_ICON} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .iconUrl=${html`<icon-link></icon-link>`}></enchanted-avatar>\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_ICON} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .iconUrl=${html`<icon-link></icon-link>`}></enchanted-avatar>\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_ICON} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .iconUrl=${html`<icon-link></icon-link>`} .color=${AVATAR_COLOR.AVATAR_BLUE}>\n            </enchanted-avatar>\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_ICON} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .iconUrl=${html`<icon-link></icon-link>`} .color=${AVATAR_COLOR.AVATAR_BLUE}>\n            </enchanted-avatar>\n          </div>\n        </div>\n\n        <div>\n          <h3>Icon Template Avatars</h3>\n          <div style=\"display: flex; gap: 12px; flex-wrap: wrap; align-items: center;\">\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .iconTemplate=${html`<icon-template></icon-template>`}></enchanted-avatar>\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .iconTemplate=${html`<icon-template></icon-template>`}></enchanted-avatar>\n            <enchanted-avatar\n              .variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE}\n              .type=${AVATAR_TYPE.AVATAR_ROUNDED}\n              .iconTemplate=${html`<icon-template></icon-template>`}\n              .color=${AVATAR_COLOR.AVATAR_GREEN}\n            ></enchanted-avatar>\n            <enchanted-avatar\n              .variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE}\n              .type=${AVATAR_TYPE.AVATAR_CIRCULAR}\n              .iconTemplate=${html`<icon-template></icon-template>`}\n              .color=${AVATAR_COLOR.AVATAR_GREEN}\n            ></enchanted-avatar>\n          </div>\n        </div>\n\n        <div>\n          <h3>Image Avatars</h3>\n          <div style=\"display: flex; gap: 12px; flex-wrap: wrap; align-items: center;\">\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_IMG} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .imgUrl=${testAvatarImageUrl}></enchanted-avatar>\n            <enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_IMG} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .imgUrl=${testAvatarImageUrl}></enchanted-avatar>\n          </div>\n        </div>\n      </div>\n    `;\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Comprehensive showcase of all avatar variants, types, and colors. ' + 'Demonstrates letter avatars in all 11 colors with both rounded and circular shapes, ' + 'icon avatars, icon template avatars, and image avatars. ' + 'This provides a complete reference for all available avatar configurations.'\n      }\n    }\n  }\n}",...(d=(_=T.parameters)==null?void 0:_.docs)==null?void 0:d.source}}};const D=["EnchantedAvatar","AllStates"];export{T as AllStates,r as EnchantedAvatar,D as __namedExportsOrder,x as default};
