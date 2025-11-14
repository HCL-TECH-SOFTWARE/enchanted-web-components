import{x as l}from"./iframe-g_dBLWCH.js";import"./dx-avatar-wv70DYSt.js";import{d as a,e as A,f as r}from"./cssClassEnums-DKCjOuJT.js";import"./preload-helper-C1FmrZbK.js";import"./dx-ac-base-element-Ba1nuzGa.js";import"./index-DAvuBMGP.js";const m={title:"Data display/dx-avatar",component:"dx-avatar",tags:["autodocs"],argTypes:{variant:{control:{type:"radio"},options:[r.AVATAR_LETTER,r.AVATAR_ICON,r.AVATAR_ICON_TEMPLATE,r.AVATAR_IMG],description:"Avatar variant",defaultValue:r.AVATAR_LETTER},type:{control:{type:"radio"},options:[A.AVATAR_ROUNDED,A.AVATAR_CIRCULAR],description:"Avatar type",defaultValue:A.AVATAR_ROUNDED},color:{control:{type:"radio"},options:[a.AVATAR_DEFAULT_COLOR,a.AVATAR_RED,a.AVATAR_ORANGE,a.AVATAR_YELLOW,a.AVATAR_LIME,a.AVATAR_GREEN,a.AVATAR_TEAL,a.AVATAR_BLUE,a.AVATAR_INDIGO,a.AVATAR_PURPLE,a.AVATAR_PINK],description:"Avatar color",defaultValue:a.AVATAR_DEFAULT_COLOR},imgUrl:{control:"text",description:"Image URL",defaultValue:""},iconUrl:{control:"text",description:"Icon URL",defaultValue:""},avatarText:{control:"text",description:"Avatar text",defaultValue:"AB"},iconTemplate:{control:"text",description:"Icon template (SVG string)",defaultValue:""}},args:{variant:r.AVATAR_LETTER,type:A.AVATAR_ROUNDED,color:a.AVATAR_DEFAULT_COLOR,imgUrl:"",iconUrl:"",avatarText:"AB",iconTemplate:""},parameters:{docs:{description:{component:"Avatar component with controls for type, variant, color, and content."}}}},o={render:t=>l`
      <dx-avatar
        .variant=${t.variant}
        .type=${t.type}
        .color=${t.color}
        .imgUrl=${t.imgUrl}
        .iconUrl=${t.iconUrl}
        .avatarText=${t.avatarText}
        .iconTemplate=${t.iconTemplate}
      ></dx-avatar>
    `,name:"DxAvatar"};var e,n,i;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
  name: 'DxAvatar'
}`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const V=["DxAvatar"];export{o as DxAvatar,V as __namedExportsOrder,m as default};
