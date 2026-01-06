import{x as t}from"./iframe-B8Ykn-0R.js";import"./enchanted-textfield-feSiq3rd.js";import"./index-A3WY0Cph.js";import"./index-DEesZIw8.js";import"./preload-helper-C1FmrZbK.js";import"./enchanted-ac-base-element-BcyMwwt4.js";import"./state-DtTHjCak.js";import"./lodash-CM0-ShnD.js";import"./localization-Ca5Mq-1-.js";import"./enchanted-select-Ge91KUgI.js";import"./cssClassEnums-D4dgqifY.js";import"./keyboardEventKeys-BnoN8uA3.js";import"./index-DQxh_L8h.js";const T={title:"Input/enchanted-textfield",tags:["autodocs"],parameters:{docs:{description:{component:"The Input Textfield component provides a standard text input with label, placeholder, and optional clear/action icons. It supports various HTML5 input types (text, password, email, number), autocomplete behavior, and RTL text direction. Use for single-line text entry in forms, search fields, and data input interfaces."}}},argTypes:{value:{control:{type:"text"},description:"Current value of the textfield. Can be set programmatically or updated by user input. Binds to the underlying input element value.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},label:{control:{type:"text"},description:"Label text displayed above the textfield. Provides context about the expected input. Properly associated with the input for accessibility.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:void 0}}},placeholder:{control:{type:"text"},description:"Placeholder text shown when the field is empty. Provides hints about the expected format or example input. Disappears when user starts typing.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},type:{control:{type:"text"},description:"HTML5 input type attribute. Common values: text, password, email, number, tel, url. Controls input validation and mobile keyboard display.",table:{category:"Form",type:{summary:"string"},defaultValue:{summary:"text"}}},disabled:{control:{type:"boolean"},description:"Disables the textfield, preventing user input and interaction. The field appears grayed out and does not accept focus or keyboard input.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},clearIcon:{control:{type:"object"},description:"The TemplateResult for the clear icon.",table:{defaultValue:{summary:"TemplateResult"}}},actionIcon:{control:{type:"object"},description:"The TemplateResult for the action icon.",table:{defaultValue:{summary:"TemplateResult"}}},field:{control:{type:"text"},description:"Field type or name identifier for the input textfield. Used for form processing, validation, or programmatic field identification.",table:{category:"Form",type:{summary:"string"},defaultValue:{summary:""}}},hassearchedbefore:{control:{type:"boolean"},description:"Indicates whether a search has been performed before. Used to track search state in search field implementations.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},autocomplete:{control:{type:"text"},description:'HTML autocomplete attribute. Controls browser autocomplete behavior. Common values: "on", "off", "email", "username", "new-password".',table:{category:"Form",type:{summary:"string"},defaultValue:{summary:"on"}}},ariaLabel:{control:{type:"text"},description:"ARIA label for accessibility. Provides descriptive text for screen readers when the visible label is insufficient or needs clarification.",table:{category:"Accessibility",type:{summary:"string"},defaultValue:{summary:""}}}},args:{value:"",type:"text",label:"Text Field",placeholder:"Enter text",disabled:!1,clearIcon:t`<icon-close size="16" color="black"></icon-close>`,actionIcon:t`<icon-search size="16" color="black"></icon-search>`,field:"",hassearchedbefore:!1,autocomplete:"on",ariaLabel:""},render:e=>t`
      <enchanted-textfield
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
      ></enchanted-textfield>
    `},i={},n={parameters:{controls:{disable:!0},docs:{description:{story:`Comprehensive showcase of all input textfield states and variations:

**Input Types:** Supports HTML5 types like text, password, email, and number with appropriate validation and mobile keyboard optimization.

**Icons:** Optional clear icon for quick value clearing and action icon for operations like search or submit.

**States:** Includes empty, filled, disabled, and various placeholder configurations.

**Features:** Autocomplete control, RTL support, and full accessibility with ARIA labels.`}}},render:()=>t`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Default (Empty)</div>
          <enchanted-textfield
            label="Text Field"
            placeholder="Enter text"
          ></enchanted-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Value</div>
          <enchanted-textfield
            label="Text Field"
            .value=${"Sample text"}
          ></enchanted-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Placeholder</div>
          <enchanted-textfield
            label="Username"
            placeholder="Enter your username"
          ></enchanted-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Password Type</div>
          <enchanted-textfield
            label="Password"
            type="password"
            placeholder="Enter password"
          ></enchanted-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Email Type</div>
          <enchanted-textfield
            label="Email"
            type="email"
            placeholder="name@example.com"
          ></enchanted-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Number Type</div>
          <enchanted-textfield
            label="Age"
            type="number"
            placeholder="Enter age"
          ></enchanted-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Clear Icon</div>
          <enchanted-textfield
            label="Search"
            .value=${"Search query"}
            .clearIcon=${t`<icon-close size="16" color="black"></icon-close>`}
          ></enchanted-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Action Icon</div>
          <enchanted-textfield
            label="Search"
            placeholder="Search..."
            .actionIcon=${t`<icon-search size="16" color="black"></icon-search>`}
          ></enchanted-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Both Icons</div>
          <enchanted-textfield
            label="Search Field"
            .value=${"Search term"}
            .clearIcon=${t`<icon-close size="16" color="black"></icon-close>`}
            .actionIcon=${t`<icon-search size="16" color="black"></icon-search>`}
          ></enchanted-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled (Empty)</div>
          <enchanted-textfield
            label="Text Field"
            placeholder="Disabled"
            ?disabled=${!0}
          ></enchanted-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled (Filled)</div>
          <enchanted-textfield
            label="Text Field"
            .value=${"Disabled value"}
            ?disabled=${!0}
          ></enchanted-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Autocomplete Off</div>
          <enchanted-textfield
            label="Credit Card"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            autocomplete="off"
          ></enchanted-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With ARIA Label</div>
          <enchanted-textfield
            label="Search"
            placeholder="Type to search"
            aria-label="Search products in catalog"
            .actionIcon=${t`<icon-search size="16" color="black"></icon-search>`}
          ></enchanted-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Long Placeholder</div>
          <enchanted-textfield
            label="Description"
            placeholder="Enter a detailed description of your item"
          ></enchanted-textfield>
        </div>
      </div>
    `};var a,l,o;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(o=(l=i.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var d,r,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <enchanted-textfield
            label="Text Field"
            placeholder="Enter text"
          ></enchanted-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Value</div>
          <enchanted-textfield
            label="Text Field"
            .value=\${'Sample text'}
          ></enchanted-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Placeholder</div>
          <enchanted-textfield
            label="Username"
            placeholder="Enter your username"
          ></enchanted-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Password Type</div>
          <enchanted-textfield
            label="Password"
            type="password"
            placeholder="Enter password"
          ></enchanted-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Email Type</div>
          <enchanted-textfield
            label="Email"
            type="email"
            placeholder="name@example.com"
          ></enchanted-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Number Type</div>
          <enchanted-textfield
            label="Age"
            type="number"
            placeholder="Enter age"
          ></enchanted-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Clear Icon</div>
          <enchanted-textfield
            label="Search"
            .value=\${'Search query'}
            .clearIcon=\${html\`<icon-close size="16" color="black"></icon-close>\`}
          ></enchanted-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Action Icon</div>
          <enchanted-textfield
            label="Search"
            placeholder="Search..."
            .actionIcon=\${html\`<icon-search size="16" color="black"></icon-search>\`}
          ></enchanted-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Both Icons</div>
          <enchanted-textfield
            label="Search Field"
            .value=\${'Search term'}
            .clearIcon=\${html\`<icon-close size="16" color="black"></icon-close>\`}
            .actionIcon=\${html\`<icon-search size="16" color="black"></icon-search>\`}
          ></enchanted-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled (Empty)</div>
          <enchanted-textfield
            label="Text Field"
            placeholder="Disabled"
            ?disabled=\${true}
          ></enchanted-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled (Filled)</div>
          <enchanted-textfield
            label="Text Field"
            .value=\${'Disabled value'}
            ?disabled=\${true}
          ></enchanted-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Autocomplete Off</div>
          <enchanted-textfield
            label="Credit Card"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            autocomplete="off"
          ></enchanted-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With ARIA Label</div>
          <enchanted-textfield
            label="Search"
            placeholder="Type to search"
            aria-label="Search products in catalog"
            .actionIcon=\${html\`<icon-search size="16" color="black"></icon-search>\`}
          ></enchanted-textfield>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Long Placeholder</div>
          <enchanted-textfield
            label="Description"
            placeholder="Enter a detailed description of your item"
          ></enchanted-textfield>
        </div>
      </div>
    \`;
  }
}`,...(c=(r=n.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const $=["Default","AllStates"];export{n as AllStates,i as Default,$ as __namedExportsOrder,T as default};
