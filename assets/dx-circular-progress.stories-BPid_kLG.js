import{x as o}from"./iframe-Dsd1MpWQ.js";import"./dx-circular-progress-Cwi2aphc.js";import"./preload-helper-C1FmrZbK.js";import"./dx-ac-base-element-C9dhstFR.js";import"./state-DQlunuPl.js";const u={title:"Feedback/dx-circular-progress",component:"dx-circular-progress",tags:["autodocs"],argTypes:{variant:{control:{type:"radio"},options:["default","primary","secondary"],description:"Progress variant",defaultValue:"default"},value:{control:{type:"range",min:0,max:100,step:1},description:"Progress value",defaultValue:50},size:{control:{type:"number",min:20,max:200,step:1},description:"Size (px)",defaultValue:100},strokewidth:{control:{type:"number",min:1,max:20,step:1},description:"Stroke width",defaultValue:4},trailcolor:{control:{type:"color"},description:"Trail color",defaultValue:"#D6D6D6"},valuecolor:{control:{type:"color"},description:"Value color",defaultValue:"#0550DC"},animated:{control:"boolean",description:"Animated",defaultValue:!0},showLabel:{control:"boolean",description:"Show label",defaultValue:!1},disabled:{control:"boolean",description:"Disabled",defaultValue:!1}},args:{variant:"default",value:50,size:100,strokewidth:4,trailcolor:"#D6D6D6",valuecolor:"#0550DC",animated:!0,showLabel:!1,disabled:!1},parameters:{docs:{description:{component:"Circular progress component with controls for variant, value, and boolean properties."}}}},e={render:r=>o`
      <dx-circular-progress
        .size=${r.size}
        .strokewidth=${r.strokewidth}
        .trailcolor=${r.trailcolor}
        .valuecolor=${r.valuecolor}
        ?disabled=${r.disabled}
      ></dx-circular-progress>
      ${r.showLabel?o`<div>${r.value}%</div>`:""}
    `,name:"DxCircularProgress"};var a,l,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <dx-circular-progress
        .size=\${args.size}
        .strokewidth=\${args.strokewidth}
        .trailcolor=\${args.trailcolor}
        .valuecolor=\${args.valuecolor}
        ?disabled=\${args.disabled}
      ></dx-circular-progress>
      \${args.showLabel ? html\`<div>\${args.value}%</div>\` : ''}
    \`;
  },
  name: 'DxCircularProgress'
}`,...(t=(l=e.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};const p=["DxCircularProgress"];export{e as DxCircularProgress,p as __namedExportsOrder,u as default};
