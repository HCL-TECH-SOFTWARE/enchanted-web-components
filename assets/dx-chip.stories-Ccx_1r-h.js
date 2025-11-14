import{x as r}from"./iframe-g_dBLWCH.js";import"./dx-chip-CWwvjZBr.js";import"./preload-helper-C1FmrZbK.js";import"./dx-ac-base-element-Ba1nuzGa.js";import"./cssClassEnums-DKCjOuJT.js";import"./localization-_QVbBsw5.js";const u={title:"Data display/dx-chip",component:"dx-chip",tags:["autodocs"],argTypes:{variant:{control:{type:"radio"},options:["default","primary","secondary"],description:"Chip variant",defaultValue:"default"},name:{control:"text",description:"Chip name",defaultValue:"Chip Name"},count:{control:{type:"number",min:0,max:99,step:1},description:"Chip count",defaultValue:0},showChipCount:{control:"boolean",description:"Show chip count",defaultValue:!1},showAvatar:{control:"boolean",description:"Show avatar",defaultValue:!1},clearIcon:{control:"boolean",description:"Show clear icon",defaultValue:!1}},args:{variant:"default",name:"Chip Name",count:0,showChipCount:!1,showAvatar:!1,clearIcon:!1},parameters:{docs:{description:{component:"Chip component with controls for variant and boolean properties."}}}},a={render:o=>r`
      <dx-chip
        .name=${o.name}
        .count=${o.count}
        ?showChipCount=${o.showChipCount}
        ?showAvatar=${o.showAvatar}
        ?clearIcon=${o.clearIcon}
      ></dx-chip>
    `,name:"DxChip"};var e,n,t;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <dx-chip
        .name=\${args.name}
        .count=\${args.count}
        ?showChipCount=\${args.showChipCount}
        ?showAvatar=\${args.showAvatar}
        ?clearIcon=\${args.clearIcon}
      ></dx-chip>
    \`;
  },
  name: 'DxChip'
}`,...(t=(n=a.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const d=["DxChip"];export{a as DxChip,d as __namedExportsOrder,u as default};
