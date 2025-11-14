import{x as d}from"./iframe-g_dBLWCH.js";import"./dx-button-rc8nG4sK.js";import{I as n,g as e}from"./cssClassEnums-DKCjOuJT.js";import"./preload-helper-C1FmrZbK.js";import"./dx-ac-base-element-Ba1nuzGa.js";import"./state-BrHRPonU.js";import"./localization-_QVbBsw5.js";const x={title:"Input/dx-button",component:"dx-button",tags:["autodocs"],argTypes:{variant:{control:{type:"radio"},options:[e.BUTTON_CONTAINED_VAR,e.BUTTON_TEXT_VAR,e.BUTTON_OUTLINED_VAR],description:"Button variant",defaultValue:e.BUTTON_CONTAINED_VAR},size:{control:{type:"radio"},options:[n.SMALL,n.MEDIUM],description:"Button size",defaultValue:n.SMALL},disabled:{control:"boolean",description:"Disabled",defaultValue:!1},endicon:{control:"boolean",description:"End icon",defaultValue:!1},withPadding:{control:"boolean",description:"With padding",defaultValue:!1},inverseColor:{control:"boolean",description:"Inverse color",defaultValue:!1},buttontext:{control:"text",description:"Button text",defaultValue:"Button"},imgurl:{control:"text",description:"Image URL",defaultValue:""}},args:{variant:e.BUTTON_CONTAINED_VAR,size:n.SMALL,disabled:!1,endicon:!1,withPadding:!1,inverseColor:!1,buttontext:"Button",imgurl:""},parameters:{docs:{description:{component:"Button component with controls for variant, size, and boolean properties."}}}},o={render:t=>d`
      <dx-button
        .variant=${t.variant}
        .size=${t.size}
        ?disabled=${t.disabled}
        ?endicon=${t.endicon}
        ?withPadding=${t.withPadding}
        ?inverseColor=${t.inverseColor}
        .buttontext=${t.buttontext}
        .imgurl=${t.imgurl}
      ></dx-button>
    `,name:"DxButton"};var i,r,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <dx-button
        .variant=\${args.variant}
        .size=\${args.size}
        ?disabled=\${args.disabled}
        ?endicon=\${args.endicon}
        ?withPadding=\${args.withPadding}
        ?inverseColor=\${args.inverseColor}
        .buttontext=\${args.buttontext}
        .imgurl=\${args.imgurl}
      ></dx-button>
    \`;
  },
  name: 'DxButton'
}`,...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const T=["DxButton"];export{o as DxButton,T as __namedExportsOrder,x as default};
