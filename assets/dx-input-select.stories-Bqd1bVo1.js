import{x as s}from"./iframe-g_dBLWCH.js";import"./dx-input-select-BkzLrdyt.js";import"./preload-helper-C1FmrZbK.js";import"./dx-ac-base-element-Ba1nuzGa.js";import"./state-BrHRPonU.js";import"./lodash-CR4q0RmQ.js";import"./dx-list-item-YCtqzfuC.js";import"./cssClassEnums-DKCjOuJT.js";import"./dx-button-rc8nG4sK.js";import"./localization-_QVbBsw5.js";import"./dx-input-select-DRXt9p_b.js";import"./index-C9ebTOpn.js";import"./index-DAvuBMGP.js";import"./keyboardEventKeys-BnoN8uA3.js";const V={title:"Input/dx-input-select",tags:["autodocs"],argTypes:{label:{control:"text",description:"The label for the select input.",table:{defaultValue:{summary:""}}},disabled:{control:"boolean",description:"If true, disables the select input.",table:{defaultValue:{summary:"false"}}},selectedValue:{control:"text",description:"The selected value.",table:{defaultValue:{summary:""}}},placeholder:{control:"text",description:"The placeholder text for the select input.",table:{defaultValue:{summary:""}}},alwaysShowPlaceholder:{control:"boolean",description:"If true, always show the placeholder.",table:{defaultValue:{summary:"false"}}},options:{control:"object",description:"The select options as an array of OptionData or strings.",table:{defaultValue:{summary:"[]"}}}},args:{label:"Select an option",disabled:!1,selectedValue:"",placeholder:"Choose...",alwaysShowPlaceholder:!1,options:[{id:"1",name:"Option 1",value:"1"},{id:"2",name:"Option 2",value:"2"},{id:"3",name:"Option 3",value:"3"}]},render:e=>s`
    <dx-input-select
      label="${e.label}"
      ?disabled=${e.disabled}
      .selectedValue=${e.selectedValue}
      placeholder="${e.placeholder}"
      ?alwaysShowPlaceholder=${e.alwaysShowPlaceholder}
      .options=${e.options}
    ></dx-input-select>
  `},t={},l={render:()=>s`
    <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
      <div>
        <div>Default</div>
        <dx-input-select
          label="Select an option"
          .options=${[{id:"1",name:"Option 1",value:"1"},{id:"2",name:"Option 2",value:"2"},{id:"3",name:"Option 3",value:"3"}]}
        ></dx-input-select>
      </div>
      <div>
        <div>Disabled</div>
        <dx-input-select
          label="Select an option"
          .options=${[{id:"1",name:"Option 1",value:"1"},{id:"2",name:"Option 2",value:"2"},{id:"3",name:"Option 3",value:"3"}]}
          ?disabled=${!0}
        ></dx-input-select>
      </div>
      <div>
        <div>With Placeholder</div>
        <dx-input-select
          label="Select an option"
          placeholder="Pick one..."
          ?alwaysShowPlaceholder=${!0}
          .options=${[{id:"1",name:"Option 1",value:"1"},{id:"2",name:"Option 2",value:"2"},{id:"3",name:"Option 3",value:"3"}]}
        ></dx-input-select>
      </div>
      <div>
        <div>With Selected Value</div>
        <dx-input-select
          label="Select an option"
          .selectedValue="2"
          .options=${[{id:"1",name:"Option 1",value:"1"},{id:"2",name:"Option 2",value:"2"},{id:"3",name:"Option 3",value:"3"}]}
        ></dx-input-select>
      </div>
    </div>
  `};var a,i,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var d,n,p;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return html\`
    <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
      <div>
        <div>Default</div>
        <dx-input-select
          label="Select an option"
          .options=\${[{
      id: '1',
      name: 'Option 1',
      value: '1'
    }, {
      id: '2',
      name: 'Option 2',
      value: '2'
    }, {
      id: '3',
      name: 'Option 3',
      value: '3'
    }]}
        ></dx-input-select>
      </div>
      <div>
        <div>Disabled</div>
        <dx-input-select
          label="Select an option"
          .options=\${[{
      id: '1',
      name: 'Option 1',
      value: '1'
    }, {
      id: '2',
      name: 'Option 2',
      value: '2'
    }, {
      id: '3',
      name: 'Option 3',
      value: '3'
    }]}
          ?disabled=\${true}
        ></dx-input-select>
      </div>
      <div>
        <div>With Placeholder</div>
        <dx-input-select
          label="Select an option"
          placeholder="Pick one..."
          ?alwaysShowPlaceholder=\${true}
          .options=\${[{
      id: '1',
      name: 'Option 1',
      value: '1'
    }, {
      id: '2',
      name: 'Option 2',
      value: '2'
    }, {
      id: '3',
      name: 'Option 3',
      value: '3'
    }]}
        ></dx-input-select>
      </div>
      <div>
        <div>With Selected Value</div>
        <dx-input-select
          label="Select an option"
          .selectedValue="2"
          .options=\${[{
      id: '1',
      name: 'Option 1',
      value: '1'
    }, {
      id: '2',
      name: 'Option 2',
      value: '2'
    }, {
      id: '3',
      name: 'Option 3',
      value: '3'
    }]}
        ></dx-input-select>
      </div>
    </div>
  \`;
  }
}`,...(p=(n=l.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const P=["Default","AllStates"];export{l as AllStates,t as Default,P as __namedExportsOrder,V as default};
