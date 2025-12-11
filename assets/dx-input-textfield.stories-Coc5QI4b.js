import{x as t}from"./iframe-Dsd1MpWQ.js";import"./dx-input-textfield-BSbq_0wd.js";import"./index-DBmzuMS8.js";import"./index-DILb829j.js";import"./preload-helper-C1FmrZbK.js";import"./dx-ac-base-element-C9dhstFR.js";import"./state-DQlunuPl.js";import"./lodash-BXdGFY-L.js";import"./localization-DmqTGOFp.js";import"./dx-input-select-DRXt9p_b.js";import"./cssClassEnums-v1h5zF5X.js";import"./keyboardEventKeys-BnoN8uA3.js";import"./index-BPZZDKKN.js";const T={title:"Input/dx-input-textfield",tags:["autodocs"],parameters:{docs:{description:{component:"The Input Textfield component provides a standard text input with label, placeholder, and optional clear/action icons. It supports various HTML5 input types (text, password, email, number), autocomplete behavior, and RTL text direction. Use for single-line text entry in forms, search fields, and data input interfaces."}}},argTypes:{value:{control:{type:"text"},description:"Current value of the textfield. Can be set programmatically or updated by user input. Binds to the underlying input element value.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},label:{control:{type:"text"},description:"Label text displayed above the textfield. Provides context about the expected input. Properly associated with the input for accessibility.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:void 0}}},placeholder:{control:{type:"text"},description:"Placeholder text shown when the field is empty. Provides hints about the expected format or example input. Disappears when user starts typing.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},type:{control:{type:"text"},description:"HTML5 input type attribute. Common values: text, password, email, number, tel, url. Controls input validation and mobile keyboard display.",table:{category:"Form",type:{summary:"string"},defaultValue:{summary:"text"}}},disabled:{control:{type:"boolean"},description:"Disables the textfield, preventing user input and interaction. The field appears grayed out and does not accept focus or keyboard input.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},clearIcon:{control:{type:"object"},description:"The TemplateResult for the clear icon.",table:{defaultValue:{summary:"TemplateResult"}}},actionIcon:{control:{type:"object"},description:"The TemplateResult for the action icon.",table:{defaultValue:{summary:"TemplateResult"}}},field:{control:{type:"text"},description:"Field type or name identifier for the input textfield. Used for form processing, validation, or programmatic field identification.",table:{category:"Form",type:{summary:"string"},defaultValue:{summary:""}}},hassearchedbefore:{control:{type:"boolean"},description:"Indicates whether a search has been performed before. Used to track search state in search field implementations.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},autocomplete:{control:{type:"text"},description:'HTML autocomplete attribute. Controls browser autocomplete behavior. Common values: "on", "off", "email", "username", "new-password".',table:{category:"Form",type:{summary:"string"},defaultValue:{summary:"on"}}},ariaLabel:{control:{type:"text"},description:"ARIA label for accessibility. Provides descriptive text for screen readers when the visible label is insufficient or needs clarification.",table:{category:"Accessibility",type:{summary:"string"},defaultValue:{summary:""}}}},args:{value:"",type:"text",label:"Text Field",placeholder:"Enter text",disabled:!1,clearIcon:t`<icon-close size="16" color="black"></icon-close>`,actionIcon:t`<icon-search size="16" color="black"></icon-search>`,field:"",hassearchedbefore:!1,autocomplete:"on",ariaLabel:""},render:e=>t`
      <dx-input-textfield
        .value=${e.value}
        type="${e.type}"
        label="${e.label}"
        placeholder="${e.placeholder}"
        ?disabled=${e.disabled}
        .clearIcon=${e.clearIcon}
        .actionIcon=${e.actionIcon}
        field="${e.field}"
        ?hassearchedbefore=${e.hassearchedbefore}
        autocomplete="${e.autocomplete}"
        aria-label="${e.ariaLabel}"
      ></dx-input-textfield>
    `},i={},l={parameters:{controls:{disable:!0},docs:{description:{story:`Comprehensive showcase of all input textfield states and variations:

**Input Types:** Supports HTML5 types like text, password, email, and number with appropriate validation and mobile keyboard optimization.

**Icons:** Optional clear icon for quick value clearing and action icon for operations like search or submit.

**States:** Includes empty, filled, disabled, and various placeholder configurations.

**Features:** Autocomplete control, RTL support, and full accessibility with ARIA labels.`}}},render:()=>t`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Default (Empty)</div>
          <dx-input-textfield
            label="Text Field"
            placeholder="Enter text"
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Value</div>
          <dx-input-textfield
            label="Text Field"
            .value=${"Sample text"}
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Placeholder</div>
          <dx-input-textfield
            label="Username"
            placeholder="Enter your username"
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Password Type</div>
          <dx-input-textfield
            label="Password"
            type="password"
            placeholder="Enter password"
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Email Type</div>
          <dx-input-textfield
            label="Email"
            type="email"
            placeholder="name@example.com"
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Number Type</div>
          <dx-input-textfield
            label="Age"
            type="number"
            placeholder="Enter age"
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Clear Icon</div>
          <dx-input-textfield
            label="Search"
            .value=${"Search query"}
            .clearIcon=${t`<icon-close size="16" color="black"></icon-close>`}
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Action Icon</div>
          <dx-input-textfield
            label="Search"
            placeholder="Search..."
            .actionIcon=${t`<icon-search size="16" color="black"></icon-search>`}
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Both Icons</div>
          <dx-input-textfield
            label="Search Field"
            .value=${"Search term"}
            .clearIcon=${t`<icon-close size="16" color="black"></icon-close>`}
            .actionIcon=${t`<icon-search size="16" color="black"></icon-search>`}
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled (Empty)</div>
          <dx-input-textfield
            label="Text Field"
            placeholder="Disabled"
            ?disabled=${!0}
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled (Filled)</div>
          <dx-input-textfield
            label="Text Field"
            .value=${"Disabled value"}
            ?disabled=${!0}
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Autocomplete Off</div>
          <dx-input-textfield
            label="Credit Card"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            autocomplete="off"
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With ARIA Label</div>
          <dx-input-textfield
            label="Search"
            placeholder="Type to search"
            aria-label="Search products in catalog"
            .actionIcon=${t`<icon-search size="16" color="black"></icon-search>`}
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Long Placeholder</div>
          <dx-input-textfield
            label="Description"
            placeholder="Enter a detailed description of your item"
          ></dx-input-textfield>
        </div>
      </div>
    `};var n,a,o;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(o=(a=i.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var d,r,s;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Comprehensive showcase of all input textfield states and variations:\\n\\n' + '**Input Types:** Supports HTML5 types like text, password, email, and number with appropriate validation and mobile keyboard optimization.\\n\\n' + '**Icons:** Optional clear icon for quick value clearing and action icon for operations like search or submit.\\n\\n' + '**States:** Includes empty, filled, disabled, and various placeholder configurations.\\n\\n' + '**Features:** Autocomplete control, RTL support, and full accessibility with ARIA labels.'
      }
    }
  },
  render: () => {
    return html\`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Default (Empty)</div>
          <dx-input-textfield
            label="Text Field"
            placeholder="Enter text"
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Value</div>
          <dx-input-textfield
            label="Text Field"
            .value=\${'Sample text'}
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Placeholder</div>
          <dx-input-textfield
            label="Username"
            placeholder="Enter your username"
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Password Type</div>
          <dx-input-textfield
            label="Password"
            type="password"
            placeholder="Enter password"
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Email Type</div>
          <dx-input-textfield
            label="Email"
            type="email"
            placeholder="name@example.com"
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Number Type</div>
          <dx-input-textfield
            label="Age"
            type="number"
            placeholder="Enter age"
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Clear Icon</div>
          <dx-input-textfield
            label="Search"
            .value=\${'Search query'}
            .clearIcon=\${html\`<icon-close size="16" color="black"></icon-close>\`}
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Action Icon</div>
          <dx-input-textfield
            label="Search"
            placeholder="Search..."
            .actionIcon=\${html\`<icon-search size="16" color="black"></icon-search>\`}
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Both Icons</div>
          <dx-input-textfield
            label="Search Field"
            .value=\${'Search term'}
            .clearIcon=\${html\`<icon-close size="16" color="black"></icon-close>\`}
            .actionIcon=\${html\`<icon-search size="16" color="black"></icon-search>\`}
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled (Empty)</div>
          <dx-input-textfield
            label="Text Field"
            placeholder="Disabled"
            ?disabled=\${true}
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled (Filled)</div>
          <dx-input-textfield
            label="Text Field"
            .value=\${'Disabled value'}
            ?disabled=\${true}
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Autocomplete Off</div>
          <dx-input-textfield
            label="Credit Card"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            autocomplete="off"
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With ARIA Label</div>
          <dx-input-textfield
            label="Search"
            placeholder="Type to search"
            aria-label="Search products in catalog"
            .actionIcon=\${html\`<icon-search size="16" color="black"></icon-search>\`}
          ></dx-input-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Long Placeholder</div>
          <dx-input-textfield
            label="Description"
            placeholder="Enter a detailed description of your item"
          ></dx-input-textfield>
        </div>
      </div>
    \`;
  }
}`,...(s=(r=l.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const $=["Default","AllStates"];export{l as AllStates,i as Default,$ as __namedExportsOrder,T as default};
