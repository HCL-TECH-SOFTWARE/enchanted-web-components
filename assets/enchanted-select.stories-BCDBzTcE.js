import{aa as e,u as p}from"./tags-DiA_3i88.js";import"./enchanted-select-lFnL2Wp-.js";import"./iframe-CBMrvQ84.js";import"./preload-helper-C1FmrZbK.js";import"./state-wm_82jA5.js";import"./lodash-Y3IwG_AG.js";import"./enchanted-list-item-D_faBFGL.js";import"./cssClassEnums-WDBe4U61.js";import"./enchanted-button-N1GGdZJL.js";import"./localization-DpWuhKau.js";import"./keyboardEventKeys-BnoN8uA3.js";import"./enchanted-select-Ge91KUgI.js";import"./index-BWx_fKYl.js";import"./index-CuTRIAwF.js";import"./tags-BNPDHufJ.js";const A={title:"Input/enchanted-select",tags:["autodocs"],parameters:{docs:{description:{component:"The Input Select component provides a dropdown selection interface with keyboard navigation and accessibility support. It accepts options as strings or structured objects with id/name/value properties, supports placeholder text, and offers customization through hidden labels and icons. Use for single-choice selections in forms or filter interfaces."}}},argTypes:{label:{control:{type:"text"},description:"Label text displayed above the select input. Provides context about the selection purpose. Can be visually hidden while maintaining accessibility.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},placeholder:{control:{type:"text"},description:"Placeholder text shown when no option is selected. Use alwaysShowPlaceholder to keep it visible even after selection for additional context.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:"undefined"}}},options:{control:{type:"object"},description:"Array of selectable options. Can be simple strings or objects with id, name, and value properties. Objects provide better control for complex selections.",table:{category:"Content",type:{summary:"string[] | OptionData[]"},defaultValue:{summary:"[]"}}},selectedValue:{control:{type:"text"},description:"Currently selected value. Matches against option value or name in object arrays, or directly against string options. Controls the selected state.",table:{category:"State",type:{summary:"string"},defaultValue:{summary:"undefined"}}},selectedId:{control:{type:"text"},description:"ID of the currently selected option. Automatically set when using object-based options with id properties. Alternative to selectedValue.",table:{category:"State",type:{summary:"string"},defaultValue:{summary:"undefined"}}},disabled:{control:{type:"boolean"},description:"Disables the select input, preventing user interaction. The dropdown cannot be opened and the selection cannot be changed.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},alwaysShowPlaceholder:{control:{type:"boolean"},description:"Keeps placeholder visible even after selection. Useful for showing additional context or instructions alongside the selected value.",table:{category:"Display",type:{summary:"boolean"},defaultValue:{summary:"false"}}},hiddenLabel:{control:{type:"boolean"},description:"Visually hides the label while maintaining it for screen readers. Use when the select purpose is clear from surrounding context.",table:{category:"Display",type:{summary:"boolean"},defaultValue:{summary:"false"}}},hiddenIcon:{control:{type:"boolean"},description:"Hides the dropdown caret icon. Use for custom styling or when the dropdown affordance is provided through other visual means.",table:{category:"Display",type:{summary:"boolean"},defaultValue:{summary:"false"}}},showRemoveLabel:{control:{type:"boolean"},description:"Shows a remove/clear option in the dropdown. Allows users to deselect the current choice and return to the empty state.",table:{category:"Display",type:{summary:"boolean"},defaultValue:{summary:"false"}}},field:{control:{type:"text"},description:"Field type or name identifier for the input select. Used for form processing or programmatic field identification.",table:{category:"Form",type:{summary:"string"},defaultValue:{summary:""}}},ariaLabel:{control:{type:"text"},description:"ARIA label for accessibility. Provides descriptive text for screen readers when the visible label is insufficient or hidden.",table:{category:"Accessibility",type:{summary:"string"},defaultValue:{summary:""}}}},args:{label:"Select an option",disabled:!1,selectedValue:"",selectedId:void 0,placeholder:"Choose...",alwaysShowPlaceholder:!1,options:[{id:"1",name:"Option 1",value:"1"},{id:"2",name:"Option 2",value:"2"},{id:"3",name:"Option 3",value:"3"}],field:"",hiddenLabel:!1,hiddenIcon:!1,showRemoveLabel:!1,ariaLabel:""},render:t=>p`
    <${e}
      label="${t.label}"
      ?disabled=${t.disabled}
      .selectedValue=${t.selectedValue}
      .selectedId=${t.selectedId}
      placeholder="${t.placeholder}"
      ?alwaysShowPlaceholder=${t.alwaysShowPlaceholder}
      .options=${t.options}
      field="${t.field}"
      ?hiddenLabel=${t.hiddenLabel}
      ?hiddenIcon=${t.hiddenIcon}
      ?showRemoveLabel=${t.showRemoveLabel}
      ariaLabel="${t.ariaLabel}"
    ></${e}>
  `},i={},a={parameters:{controls:{disable:!0},docs:{description:{story:`Comprehensive showcase of all input select states and variations:

**Options:** Supports both string arrays and structured objects with id/name/value properties for flexible data handling.

**States:** Includes default, disabled, selected, and placeholder states with various display configurations.

**Customization:** Hidden labels and icons for compact layouts, persistent placeholders, and optional remove/clear functionality.

**Accessibility:** Full keyboard navigation support with proper ARIA labels and hidden label options.`}}},render:()=>p`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Default</div>
          <${e}
            label="Select an option"
            .options=${[{id:"1",name:"Option 1",value:"1"},{id:"2",name:"Option 2",value:"2"},{id:"3",name:"Option 3",value:"3"}]}
          ></${e}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Placeholder</div>
          <${e}
            label="Select an option"
            placeholder="Pick one..."
            .options=${[{id:"1",name:"Option 1",value:"1"},{id:"2",name:"Option 2",value:"2"},{id:"3",name:"Option 3",value:"3"}]}
          ></${e}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Selected Value</div>
          <${e}
            label="Select an option"
            .selectedValue="2"
            .options=${[{id:"1",name:"Option 1",value:"1"},{id:"2",name:"Option 2",value:"2"},{id:"3",name:"Option 3",value:"3"}]}
          ></${e}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Always Show Placeholder</div>
          <${e}
            label="Select an option"
            placeholder="Choose one"
            .selectedValue="2"
            ?alwaysShowPlaceholder=${!0}
            .options=${[{id:"1",name:"Option 1",value:"1"},{id:"2",name:"Option 2",value:"2"},{id:"3",name:"Option 3",value:"3"}]}
          ></${e}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled</div>
          <${e}
            label="Select an option"
            .options=${[{id:"1",name:"Option 1",value:"1"},{id:"2",name:"Option 2",value:"2"},{id:"3",name:"Option 3",value:"3"}]}
            ?disabled=${!0}
          ></${e}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled with Value</div>
          <${e}
            label="Select an option"
            .selectedValue="2"
            .options=${[{id:"1",name:"Option 1",value:"1"},{id:"2",name:"Option 2",value:"2"},{id:"3",name:"Option 3",value:"3"}]}
            ?disabled=${!0}
          ></${e}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Hidden Label</div>
          <${e}
            label="Select an option"
            ?hiddenLabel=${!0}
            placeholder="Hidden label example"
            .options=${[{id:"1",name:"Option 1",value:"1"},{id:"2",name:"Option 2",value:"2"},{id:"3",name:"Option 3",value:"3"}]}
          ></${e}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Hidden Icon</div>
          <${e}
            label="Select an option"
            ?hiddenIcon=${!0}
            .options=${[{id:"1",name:"Option 1",value:"1"},{id:"2",name:"Option 2",value:"2"},{id:"3",name:"Option 3",value:"3"}]}
          ></${e}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Remove Label</div>
          <${e}
            label="Select an option"
            .selectedValue="2"
            ?showRemoveLabel=${!0}
            .options=${[{id:"1",name:"Option 1",value:"1"},{id:"2",name:"Option 2",value:"2"},{id:"3",name:"Option 3",value:"3"}]}
          ></${e}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">String Options</div>
          <${e}
            label="Select a fruit"
            .options=${["Apple","Banana","Cherry","Date","Elderberry"]}
          ></${e}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With ARIA Label</div>
          <${e}
            label="Select country"
            ariaLabel="Country selection dropdown"
            .options=${[{id:"us",name:"United States",value:"us"},{id:"ca",name:"Canada",value:"ca"},{id:"mx",name:"Mexico",value:"mx"}]}
          ></${e}>
        </div>
      </div>
    `};var o,l,n;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(n=(l=i.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var d,s,r;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Comprehensive showcase of all input select states and variations:\\n\\n' + '**Options:** Supports both string arrays and structured objects with id/name/value properties for flexible data handling.\\n\\n' + '**States:** Includes default, disabled, selected, and placeholder states with various display configurations.\\n\\n' + '**Customization:** Hidden labels and icons for compact layouts, persistent placeholders, and optional remove/clear functionality.\\n\\n' + '**Accessibility:** Full keyboard navigation support with proper ARIA labels and hidden label options.'
      }
    }
  },
  render: () => {
    return html\`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Default</div>
          <\${ENCHANTED_SELECT_TAG}
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
          ></\${ENCHANTED_SELECT_TAG}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Placeholder</div>
          <\${ENCHANTED_SELECT_TAG}
            label="Select an option"
            placeholder="Pick one..."
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
          ></\${ENCHANTED_SELECT_TAG}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Selected Value</div>
          <\${ENCHANTED_SELECT_TAG}
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
          ></\${ENCHANTED_SELECT_TAG}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Always Show Placeholder</div>
          <\${ENCHANTED_SELECT_TAG}
            label="Select an option"
            placeholder="Choose one"
            .selectedValue="2"
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
          ></\${ENCHANTED_SELECT_TAG}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled</div>
          <\${ENCHANTED_SELECT_TAG}
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
          ></\${ENCHANTED_SELECT_TAG}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled with Value</div>
          <\${ENCHANTED_SELECT_TAG}
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
            ?disabled=\${true}
          ></\${ENCHANTED_SELECT_TAG}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Hidden Label</div>
          <\${ENCHANTED_SELECT_TAG}
            label="Select an option"
            ?hiddenLabel=\${true}
            placeholder="Hidden label example"
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
          ></\${ENCHANTED_SELECT_TAG}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Hidden Icon</div>
          <\${ENCHANTED_SELECT_TAG}
            label="Select an option"
            ?hiddenIcon=\${true}
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
          ></\${ENCHANTED_SELECT_TAG}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Remove Label</div>
          <\${ENCHANTED_SELECT_TAG}
            label="Select an option"
            .selectedValue="2"
            ?showRemoveLabel=\${true}
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
          ></\${ENCHANTED_SELECT_TAG}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">String Options</div>
          <\${ENCHANTED_SELECT_TAG}
            label="Select a fruit"
            .options=\${['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']}
          ></\${ENCHANTED_SELECT_TAG}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With ARIA Label</div>
          <\${ENCHANTED_SELECT_TAG}
            label="Select country"
            ariaLabel="Country selection dropdown"
            .options=\${[{
      id: 'us',
      name: 'United States',
      value: 'us'
    }, {
      id: 'ca',
      name: 'Canada',
      value: 'ca'
    }, {
      id: 'mx',
      name: 'Mexico',
      value: 'mx'
    }]}
          ></\${ENCHANTED_SELECT_TAG}>
        </div>
      </div>
    \`;
  }
}`,...(r=(s=a.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const C=["Default","AllStates"];export{a as AllStates,i as Default,C as __namedExportsOrder,A as default};
