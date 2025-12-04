import{x as i}from"./iframe-DgNdRKpa.js";import"./dx-input-textfield-Bv27Bsmg.js";import{s as c}from"./svg-search-BkC5CLNH.js";import"./preload-helper-C1FmrZbK.js";import"./dx-ac-base-element-BRVmdAbS.js";import"./state-g_VKachv.js";import"./lodash-BYuv2CZ-.js";import"./localization-8Qc5IxgI.js";import"./dx-input-select-DRXt9p_b.js";import"./cssClassEnums-flPS6Iko.js";import"./dx-svg-icon-GVOyhV2P.js";import"./keyboardEventKeys-BnoN8uA3.js";const x=i`
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="black"
    fill-opacity="0.6"
    xmlns="http://www.w3.org/2000/svg"
  >
  <path
    d="M12 4.7L11.3 4L8 7.3L4.7 4L4 4.7L7.3 8L4 11.3L4.7 12L8 8.7L11.3 12L12 11.3L8.7 8L12 4.7Z"
  />
  </svg>
`,U={title:"Input/dx-input-textfield",tags:["autodocs"],argTypes:{value:{control:"text",description:"The value of the textfield.",table:{defaultValue:{summary:""}}},type:{control:"text",description:'The input type (e.g., "text", "password").',table:{defaultValue:{summary:"text"}}},label:{control:"text",description:"The label for the textfield.",table:{defaultValue:{summary:""}}},placeholder:{control:"text",description:"The placeholder text for the textfield.",table:{defaultValue:{summary:""}}},disabled:{control:"boolean",description:"If true, disables the textfield.",table:{defaultValue:{summary:"false"}}},clearIconUrl:{control:"text",description:"The URL for the clear icon.",table:{defaultValue:{summary:""}}},actionIconUrl:{control:"text",description:"The URL for the action icon.",table:{defaultValue:{summary:""}}}},args:{value:"",type:"text",label:"Text Field",placeholder:"Enter text",disabled:!1,clearIconUrl:"",actionIconUrl:""},render:e=>i`
    <dx-input-textfield
      .value=${e.value}
      type="${e.type}"
      label="${e.label}"
      placeholder="${e.placeholder}"
      ?disabled=${e.disabled}
      .clearIconUrl=${x}
      .actionIconUrl=${c}
    ></dx-input-textfield>
  `},t={},l={render:()=>i`
    <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
      <div>
        <div>Default</div>
        <dx-input-textfield
          label="Text Field"
          placeholder="Enter text"
        ></dx-input-textfield>
      </div>
      <div>
        <div>Disabled</div>
        <dx-input-textfield
          label="Text Field"
          value="Disabled"
          ?disabled=${!0}
        ></dx-input-textfield>
      </div>
      <div>
        <div>With Placeholder</div>
        <dx-input-textfield
          label="Text Field"
          placeholder="Type here..."
        ></dx-input-textfield>
      </div>
      <div>
        <div>With Clear Icon</div>
        <dx-input-textfield
          label="Text Field"
          clearIconUrl="https://cdn-icons-png.flaticon.com/512/1828/1828778.png"
        ></dx-input-textfield>
      </div>
      <div>
        <div>With Action Icon</div>
        <dx-input-textfield
          label="Text Field"
          actionIconUrl="https://cdn-icons-png.flaticon.com/512/709/709586.png"
        ></dx-input-textfield>
      </div>
    </div>
  `};var d,n,a;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var r,o,p;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return html\`
    <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
      <div>
        <div>Default</div>
        <dx-input-textfield
          label="Text Field"
          placeholder="Enter text"
        ></dx-input-textfield>
      </div>
      <div>
        <div>Disabled</div>
        <dx-input-textfield
          label="Text Field"
          value="Disabled"
          ?disabled=\${true}
        ></dx-input-textfield>
      </div>
      <div>
        <div>With Placeholder</div>
        <dx-input-textfield
          label="Text Field"
          placeholder="Type here..."
        ></dx-input-textfield>
      </div>
      <div>
        <div>With Clear Icon</div>
        <dx-input-textfield
          label="Text Field"
          clearIconUrl="https://cdn-icons-png.flaticon.com/512/1828/1828778.png"
        ></dx-input-textfield>
      </div>
      <div>
        <div>With Action Icon</div>
        <dx-input-textfield
          label="Text Field"
          actionIconUrl="https://cdn-icons-png.flaticon.com/512/709/709586.png"
        ></dx-input-textfield>
      </div>
    </div>
  \`;
  }
}`,...(p=(o=l.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const w=["Default","AllStates"];export{l as AllStates,t as Default,w as __namedExportsOrder,U as default};
