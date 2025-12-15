import{x as o}from"./iframe-DHDpWj8R.js";import"./enchanted-circular-progress-DHQJc59E.js";import"./preload-helper-C1FmrZbK.js";import"./enchanted-ac-base-element-DiERHT3A.js";import"./state-CAzxSWuk.js";const u={title:"Feedback/enchanted-circular-progress",component:"enchanted-circular-progress",tags:["autodocs"],argTypes:{variant:{control:{type:"radio"},options:["default","primary","secondary"],description:"Progress variant",defaultValue:"default"},value:{control:{type:"range",min:0,max:100,step:1},description:"Progress value",defaultValue:50},size:{control:{type:"number",min:20,max:200,step:1},description:"Size (px)",defaultValue:100},strokewidth:{control:{type:"number",min:1,max:20,step:1},description:"Stroke width",defaultValue:4},trailcolor:{control:{type:"color"},description:"Trail color",defaultValue:"#D6D6D6"},valuecolor:{control:{type:"color"},description:"Value color",defaultValue:"#0550DC"},animated:{control:"boolean",description:"Animated",defaultValue:!0},showLabel:{control:"boolean",description:"Show label",defaultValue:!1},disabled:{control:"boolean",description:"Disabled",defaultValue:!1}},args:{variant:"default",value:50,size:100,strokewidth:4,trailcolor:"#D6D6D6",valuecolor:"#0550DC",animated:!0,showLabel:!1,disabled:!1},parameters:{docs:{description:{component:"Circular progress component with controls for variant, value, and boolean properties."}}}},r={render:e=>o`
      <enchanted-circular-progress
        .size=${e.size}
        .strokewidth=${e.strokewidth}
        .trailcolor=${e.trailcolor}
        .valuecolor=${e.valuecolor}
        ?disabled=${e.disabled}
      ></enchanted-circular-progress>
      ${e.showLabel?o`<div>${e.value}%</div>`:""}
    `,name:"EnchantedCircularProgress"};var a,t,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <enchanted-circular-progress
        .size=\${args.size}
        .strokewidth=\${args.strokewidth}
        .trailcolor=\${args.trailcolor}
        .valuecolor=\${args.valuecolor}
        ?disabled=\${args.disabled}
      ></enchanted-circular-progress>
      \${args.showLabel ? html\`<div>\${args.value}%</div>\` : ''}
    \`;
  },
  name: 'EnchantedCircularProgress'
}`,...(l=(t=r.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const p=["EnchantedCircularProgress"];export{r as EnchantedCircularProgress,p as __namedExportsOrder,u as default};
