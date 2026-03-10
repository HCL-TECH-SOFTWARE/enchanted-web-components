import{g as e,u as R,j as A}from"./tags-xkLHt5Ez.js";import"./enchanted-avatar-DEfUp3hY.js";import{d as a,e as t,f as T}from"./cssClassEnums-WDBe4U61.js";import{x as s}from"./iframe-C32rrkgB.js";import{t as v}from"./index-CuTRIAwF.js";import{c as C,I as m,B as L}from"./tags-DNNghoUc.js";import"./index-bAk2BZj-.js";import{t as $}from"./test-avatar-image-RZI1r1Pv.js";import"./preload-helper-C1FmrZbK.js";var V={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z"}},{elem:"path",attrs:{d:"M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z"}}],name:"link",size:32};const o=`${m}icon-link`;class D extends L{render(){return s`${v({...V,attrs:{...V.attrs,preserveAspectRatio:"xMidYMid"}})}`}}C&&!customElements.get(o)&&customElements.define(o,D);const u={title:"Data display/enchanted-avatar",component:"enchanted-avatar",tags:["autodocs"],argTypes:{variant:{control:{type:"radio"},options:[T.AVATAR_LETTER,T.AVATAR_ICON,T.AVATAR_ICON_TEMPLATE,T.AVATAR_IMG],description:"Defines the content type displayed in the avatar (letter, icon, icon template, or image)",table:{type:{summary:"string"},defaultValue:{summary:T.AVATAR_LETTER}}},type:{control:{type:"radio"},options:[t.AVATAR_ROUNDED,t.AVATAR_CIRCULAR],description:"Defines the shape of the avatar (rounded corners or fully circular)",table:{type:{summary:"string"},defaultValue:{summary:t.AVATAR_ROUNDED}}},color:{control:{type:"radio"},options:[a.AVATAR_DEFAULT_COLOR,a.AVATAR_RED,a.AVATAR_ORANGE,a.AVATAR_YELLOW,a.AVATAR_LIME,a.AVATAR_GREEN,a.AVATAR_TEAL,a.AVATAR_BLUE,a.AVATAR_INDIGO,a.AVATAR_PURPLE,a.AVATAR_PINK],description:"Defines the background color of the avatar",table:{type:{summary:"AVATAR_COLOR"},defaultValue:{summary:a.AVATAR_DEFAULT_COLOR}}},imgUrl:{control:{type:"text"},description:"URL of the image to display when variant is set to AVATAR_IMG",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},iconUrl:{control:{type:"object"},description:"Icon component to display when variant is set to AVATAR_ICON (Lit TemplateResult)"},avatarText:{control:{type:"text"},description:"Text to display when variant is set to AVATAR_LETTER (max 2 characters)",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},iconTemplate:{control:{type:"object"},description:"Icon template to display when variant is set to AVATAR_ICON_TEMPLATE (Lit TemplateResult)"}},args:{variant:T.AVATAR_LETTER,type:t.AVATAR_ROUNDED,color:a.AVATAR_DEFAULT_COLOR,imgUrl:$,iconUrl:R`<${e("icon-link")}></${e("icon-link")}>`,avatarText:"AB",iconTemplate:R`<${e("icon-template")}></${e("icon-template")}>`},parameters:{docs:{description:{component:"Avatar component for displaying user profile pictures, initials, or icons. Supports multiple variants (letter, icon, icon template, image), shapes (rounded, circular), and a variety of color options. Letter avatars automatically truncate text to 2 characters."}}}},r={render:n=>R`
      <${A}
        .variant=${n.variant}
        .type=${n.type}
        .color=${n.color}
        .imgUrl=${n.imgUrl}
        .iconUrl=${n.iconUrl}
        .avatarText=${n.avatarText}
        .iconTemplate=${n.iconTemplate}
      ></${A}>
    `,name:"Default",parameters:{docs:{description:{story:"Default avatar with customizable variant, type, color, and content. Switch between variants to see letters, icons, or images. Try different colors and shapes to match your design requirements."}}}},_={render:()=>R`
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h3>Letter Avatars - Rounded</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <${A} .variant=${T.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"AB"}></${A}>
            <${A} .variant=${T.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"CD"} .color=${a.AVATAR_RED}></${A}>
            <${A} .variant=${T.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"EF"} .color=${a.AVATAR_ORANGE}></${A}>
            <${A} .variant=${T.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"GH"} .color=${a.AVATAR_YELLOW}></${A}>
            <${A} .variant=${T.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"IJ"} .color=${a.AVATAR_LIME}></${A}>
            <${A} .variant=${T.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"KL"} .color=${a.AVATAR_GREEN}></${A}>
            <${A} .variant=${T.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"MN"} .color=${a.AVATAR_TEAL}></${A}>
            <${A} .variant=${T.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"OP"} .color=${a.AVATAR_BLUE}></${A}>
            <${A} .variant=${T.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"QR"} .color=${a.AVATAR_INDIGO}></${A}>
            <${A} .variant=${T.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"ST"} .color=${a.AVATAR_PURPLE}></${A}>
            <${A} .variant=${T.AVATAR_LETTER} .type=${t.AVATAR_ROUNDED} .avatarText=${"UV"} .color=${a.AVATAR_PINK}></${A}>
          </div>
        </div>

        <div>
          <h3>Letter Avatars - Circular</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <${A} .variant=${T.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"AB"}></${A}>
            <${A} .variant=${T.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"CD"} .color=${a.AVATAR_RED}></${A}>
            <${A} .variant=${T.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"EF"} .color=${a.AVATAR_ORANGE}></${A}>
            <${A} .variant=${T.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"GH"} .color=${a.AVATAR_YELLOW}></${A}>
            <${A} .variant=${T.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"IJ"} .color=${a.AVATAR_LIME}></${A}>
            <${A} .variant=${T.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"KL"} .color=${a.AVATAR_GREEN}></${A}>
            <${A} .variant=${T.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"MN"} .color=${a.AVATAR_TEAL}></${A}>
            <${A} .variant=${T.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"OP"} .color=${a.AVATAR_BLUE}></${A}>
            <${A} .variant=${T.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"QR"} .color=${a.AVATAR_INDIGO}></${A}>
            <${A} .variant=${T.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"ST"} .color=${a.AVATAR_PURPLE}></${A}>
            <${A} .variant=${T.AVATAR_LETTER} .type=${t.AVATAR_CIRCULAR} .avatarText=${"UV"} .color=${a.AVATAR_PINK}></${A}>
          </div>
        </div>

        <div>
          <h3>Icon Avatars</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <${A} 
              .variant=${T.AVATAR_ICON}
              .type=${t.AVATAR_ROUNDED}
              .iconUrl=${R`<${e("icon-link")}></${e("icon-link")}>`}>
            </${A}>
            <${A}
              .variant=${T.AVATAR_ICON}
              .type=${t.AVATAR_CIRCULAR}
              .iconUrl=${R`<${e("icon-link")}></${e("icon-link")}>`}>
            </${A}>
            <${A}
              .variant=${T.AVATAR_ICON}
              .type=${t.AVATAR_ROUNDED}
              .iconUrl=${R`<${e("icon-link")}></${e("icon-link")}>`} .color=${a.AVATAR_BLUE}>
            </${A}>
            <${A}
              .variant=${T.AVATAR_ICON}
              .type=${t.AVATAR_CIRCULAR}
              .iconUrl=${R`<${e("icon-link")}></${e("icon-link")}>`}
              .color=${a.AVATAR_BLUE}>
            </${A}>
          </div>
        </div>

        <div>
          <h3>Icon Template Avatars</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <${A}
              .variant=${T.AVATAR_ICON_TEMPLATE}
              .type=${t.AVATAR_ROUNDED}
              .iconTemplate=${R`<${e("icon-template")}></${e("icon-template")}>`}>
            </${A}>
            <${A}
              .variant=${T.AVATAR_ICON_TEMPLATE}
              .type=${t.AVATAR_CIRCULAR}
              .iconTemplate=${R`<${e("icon-template")}></${e("icon-template")}>`}>
            </${A}>
            <${A}
              .variant=${T.AVATAR_ICON_TEMPLATE}
              .type=${t.AVATAR_ROUNDED}
              .iconTemplate=${R`<${e("icon-template")}></${e("icon-template")}>`}
              .color=${a.AVATAR_GREEN}
            ></${A}>
            <${A}
              .variant=${T.AVATAR_ICON_TEMPLATE}
              .type=${t.AVATAR_CIRCULAR}
              .iconTemplate=${R`<${e("icon-template")}></${e("icon-template")}>`}
              .color=${a.AVATAR_GREEN}
            ></${A}>
          </div>
        </div>

        <div>
          <h3>Image Avatars</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <${A} .variant=${T.AVATAR_IMG} .type=${t.AVATAR_ROUNDED} .imgUrl=${$}></${A}>
            <${A} .variant=${T.AVATAR_IMG} .type=${t.AVATAR_CIRCULAR} .imgUrl=${$}></${A}>
          </div>
        </div>
      </div>
    `,parameters:{docs:{description:{story:"Comprehensive showcase of all avatar variants, types, and colors. Demonstrates letter avatars in all 11 colors with both rounded and circular shapes, icon avatars, icon template avatars, and image avatars. This provides a complete reference for all available avatar configurations."}}}};var i,E,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <\${ENCHANTED_AVATAR_TAG}
        .variant=\${args.variant}
        .type=\${args.type}
        .color=\${args.color}
        .imgUrl=\${args.imgUrl}
        .iconUrl=\${args.iconUrl}
        .avatarText=\${args.avatarText}
        .iconTemplate=\${args.iconTemplate}
      ></\${ENCHANTED_AVATAR_TAG}>
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
}`,...(l=(E=r.parameters)==null?void 0:E.docs)==null?void 0:l.source}}};var c,N,p;_.parameters={..._.parameters,docs:{...(c=_.parameters)==null?void 0:c.docs,source:{originalSource:"{\n  render: () => {\n    return html`\n      <div style=\"display: flex; flex-direction: column; gap: 24px;\">\n        <div>\n          <h3>Letter Avatars - Rounded</h3>\n          <div style=\"display: flex; gap: 12px; flex-wrap: wrap; align-items: center;\">\n            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'AB'}></${ENCHANTED_AVATAR_TAG}>\n            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'CD'} .color=${AVATAR_COLOR.AVATAR_RED}></${ENCHANTED_AVATAR_TAG}>\n            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'EF'} .color=${AVATAR_COLOR.AVATAR_ORANGE}></${ENCHANTED_AVATAR_TAG}>\n            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'GH'} .color=${AVATAR_COLOR.AVATAR_YELLOW}></${ENCHANTED_AVATAR_TAG}>\n            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'IJ'} .color=${AVATAR_COLOR.AVATAR_LIME}></${ENCHANTED_AVATAR_TAG}>\n            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'KL'} .color=${AVATAR_COLOR.AVATAR_GREEN}></${ENCHANTED_AVATAR_TAG}>\n            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'MN'} .color=${AVATAR_COLOR.AVATAR_TEAL}></${ENCHANTED_AVATAR_TAG}>\n            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'OP'} .color=${AVATAR_COLOR.AVATAR_BLUE}></${ENCHANTED_AVATAR_TAG}>\n            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'QR'} .color=${AVATAR_COLOR.AVATAR_INDIGO}></${ENCHANTED_AVATAR_TAG}>\n            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'ST'} .color=${AVATAR_COLOR.AVATAR_PURPLE}></${ENCHANTED_AVATAR_TAG}>\n            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .avatarText=${'UV'} .color=${AVATAR_COLOR.AVATAR_PINK}></${ENCHANTED_AVATAR_TAG}>\n          </div>\n        </div>\n\n        <div>\n          <h3>Letter Avatars - Circular</h3>\n          <div style=\"display: flex; gap: 12px; flex-wrap: wrap; align-items: center;\">\n            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'AB'}></${ENCHANTED_AVATAR_TAG}>\n            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'CD'} .color=${AVATAR_COLOR.AVATAR_RED}></${ENCHANTED_AVATAR_TAG}>\n            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'EF'} .color=${AVATAR_COLOR.AVATAR_ORANGE}></${ENCHANTED_AVATAR_TAG}>\n            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'GH'} .color=${AVATAR_COLOR.AVATAR_YELLOW}></${ENCHANTED_AVATAR_TAG}>\n            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'IJ'} .color=${AVATAR_COLOR.AVATAR_LIME}></${ENCHANTED_AVATAR_TAG}>\n            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'KL'} .color=${AVATAR_COLOR.AVATAR_GREEN}></${ENCHANTED_AVATAR_TAG}>\n            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'MN'} .color=${AVATAR_COLOR.AVATAR_TEAL}></${ENCHANTED_AVATAR_TAG}>\n            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'OP'} .color=${AVATAR_COLOR.AVATAR_BLUE}></${ENCHANTED_AVATAR_TAG}>\n            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'QR'} .color=${AVATAR_COLOR.AVATAR_INDIGO}></${ENCHANTED_AVATAR_TAG}>\n            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'ST'} .color=${AVATAR_COLOR.AVATAR_PURPLE}></${ENCHANTED_AVATAR_TAG}>\n            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_LETTER} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .avatarText=${'UV'} .color=${AVATAR_COLOR.AVATAR_PINK}></${ENCHANTED_AVATAR_TAG}>\n          </div>\n        </div>\n\n        <div>\n          <h3>Icon Avatars</h3>\n          <div style=\"display: flex; gap: 12px; flex-wrap: wrap; align-items: center;\">\n            <${ENCHANTED_AVATAR_TAG} \n              .variant=${AVATAR_VARIANT.AVATAR_ICON}\n              .type=${AVATAR_TYPE.AVATAR_ROUNDED}\n              .iconUrl=${html`<${generateIconTagName('icon-link')}></${generateIconTagName('icon-link')}>`}>\n            </${ENCHANTED_AVATAR_TAG}>\n            <${ENCHANTED_AVATAR_TAG}\n              .variant=${AVATAR_VARIANT.AVATAR_ICON}\n              .type=${AVATAR_TYPE.AVATAR_CIRCULAR}\n              .iconUrl=${html`<${generateIconTagName('icon-link')}></${generateIconTagName('icon-link')}>`}>\n            </${ENCHANTED_AVATAR_TAG}>\n            <${ENCHANTED_AVATAR_TAG}\n              .variant=${AVATAR_VARIANT.AVATAR_ICON}\n              .type=${AVATAR_TYPE.AVATAR_ROUNDED}\n              .iconUrl=${html`<${generateIconTagName('icon-link')}></${generateIconTagName('icon-link')}>`} .color=${AVATAR_COLOR.AVATAR_BLUE}>\n            </${ENCHANTED_AVATAR_TAG}>\n            <${ENCHANTED_AVATAR_TAG}\n              .variant=${AVATAR_VARIANT.AVATAR_ICON}\n              .type=${AVATAR_TYPE.AVATAR_CIRCULAR}\n              .iconUrl=${html`<${generateIconTagName('icon-link')}></${generateIconTagName('icon-link')}>`}\n              .color=${AVATAR_COLOR.AVATAR_BLUE}>\n            </${ENCHANTED_AVATAR_TAG}>\n          </div>\n        </div>\n\n        <div>\n          <h3>Icon Template Avatars</h3>\n          <div style=\"display: flex; gap: 12px; flex-wrap: wrap; align-items: center;\">\n            <${ENCHANTED_AVATAR_TAG}\n              .variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE}\n              .type=${AVATAR_TYPE.AVATAR_ROUNDED}\n              .iconTemplate=${html`<${generateIconTagName('icon-template')}></${generateIconTagName('icon-template')}>`}>\n            </${ENCHANTED_AVATAR_TAG}>\n            <${ENCHANTED_AVATAR_TAG}\n              .variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE}\n              .type=${AVATAR_TYPE.AVATAR_CIRCULAR}\n              .iconTemplate=${html`<${generateIconTagName('icon-template')}></${generateIconTagName('icon-template')}>`}>\n            </${ENCHANTED_AVATAR_TAG}>\n            <${ENCHANTED_AVATAR_TAG}\n              .variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE}\n              .type=${AVATAR_TYPE.AVATAR_ROUNDED}\n              .iconTemplate=${html`<${generateIconTagName('icon-template')}></${generateIconTagName('icon-template')}>`}\n              .color=${AVATAR_COLOR.AVATAR_GREEN}\n            ></${ENCHANTED_AVATAR_TAG}>\n            <${ENCHANTED_AVATAR_TAG}\n              .variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE}\n              .type=${AVATAR_TYPE.AVATAR_CIRCULAR}\n              .iconTemplate=${html`<${generateIconTagName('icon-template')}></${generateIconTagName('icon-template')}>`}\n              .color=${AVATAR_COLOR.AVATAR_GREEN}\n            ></${ENCHANTED_AVATAR_TAG}>\n          </div>\n        </div>\n\n        <div>\n          <h3>Image Avatars</h3>\n          <div style=\"display: flex; gap: 12px; flex-wrap: wrap; align-items: center;\">\n            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_IMG} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .imgUrl=${testAvatarImageUrl}></${ENCHANTED_AVATAR_TAG}>\n            <${ENCHANTED_AVATAR_TAG} .variant=${AVATAR_VARIANT.AVATAR_IMG} .type=${AVATAR_TYPE.AVATAR_CIRCULAR} .imgUrl=${testAvatarImageUrl}></${ENCHANTED_AVATAR_TAG}>\n          </div>\n        </div>\n      </div>\n    `;\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Comprehensive showcase of all avatar variants, types, and colors. ' + 'Demonstrates letter avatars in all 11 colors with both rounded and circular shapes, ' + 'icon avatars, icon template avatars, and image avatars. ' + 'This provides a complete reference for all available avatar configurations.'\n      }\n    }\n  }\n}",...(p=(N=_.parameters)==null?void 0:N.docs)==null?void 0:p.source}}};const H=["EnchantedAvatar","AllStates"];export{_ as AllStates,r as EnchantedAvatar,H as __namedExportsOrder,u as default};
