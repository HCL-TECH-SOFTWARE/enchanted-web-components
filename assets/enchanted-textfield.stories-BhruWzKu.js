import{W as e,u as i,g as t}from"./tags-xkLHt5Ez.js";import"./enchanted-textfield-D5FUW9Ez.js";import"./index-DwWyfVsa.js";import"./index-D57X42El.js";import"./iframe-C32rrkgB.js";import"./preload-helper-C1FmrZbK.js";import"./state-BMB52Uli.js";import"./lodash-DfIfhbli.js";import"./localization-BszdroIW.js";import"./enchanted-select-Ge91KUgI.js";import"./cssClassEnums-WDBe4U61.js";import"./keyboardEventKeys-BnoN8uA3.js";import"./index-CuTRIAwF.js";import"./tags-DNNghoUc.js";const A={title:"Input/enchanted-textfield",tags:["autodocs"],parameters:{docs:{description:{component:"The Input Textfield component provides a standard text input with label, placeholder, and optional clear/action icons. It supports various HTML5 input types (text, password, email, number), autocomplete behavior, and RTL text direction. Use for single-line text entry in forms, search fields, and data input interfaces."}}},argTypes:{value:{control:{type:"text"},description:"Current value of the textfield. Can be set programmatically or updated by user input. Binds to the underlying input element value.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},label:{control:{type:"text"},description:"Label text displayed above the textfield. Provides context about the expected input. Properly associated with the input for accessibility.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:void 0}}},placeholder:{control:{type:"text"},description:"Placeholder text shown when the field is empty. Provides hints about the expected format or example input. Disappears when user starts typing.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},type:{control:{type:"text"},description:"HTML5 input type attribute. Common values: text, password, email, number, tel, url. Controls input validation and mobile keyboard display.",table:{category:"Form",type:{summary:"string"},defaultValue:{summary:"text"}}},disabled:{control:{type:"boolean"},description:"Disables the textfield, preventing user input and interaction. The field appears grayed out and does not accept focus or keyboard input.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},clearIcon:{control:{type:"object"},description:"The TemplateResult for the clear icon.",table:{defaultValue:{summary:"TemplateResult"}}},actionIcon:{control:{type:"object"},description:"The TemplateResult for the action icon.",table:{defaultValue:{summary:"TemplateResult"}}},field:{control:{type:"text"},description:"Field type or name identifier for the input textfield. Used for form processing, validation, or programmatic field identification.",table:{category:"Form",type:{summary:"string"},defaultValue:{summary:""}}},hassearchedbefore:{control:{type:"boolean"},description:"Indicates whether a search has been performed before. Used to track search state in search field implementations.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},autocomplete:{control:{type:"text"},description:'HTML autocomplete attribute. Controls browser autocomplete behavior. Common values: "on", "off", "email", "username", "new-password".',table:{category:"Form",type:{summary:"string"},defaultValue:{summary:"on"}}},ariaLabel:{control:{type:"text"},description:"ARIA label for accessibility. Provides descriptive text for screen readers when the visible label is insufficient or needs clarification.",table:{category:"Accessibility",type:{summary:"string"},defaultValue:{summary:""}}},showClearIcon:{control:{type:"boolean"},description:"Toggle to show or hide the clear icon.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"true"}}}},args:{value:"",type:"text",label:"Text Field",placeholder:"Enter text",disabled:!1,clearIcon:i`<${t("icon-close")} size="16" color="black"></${t("icon-close")}>`,actionIcon:i`<${t("icon-search")} size="16" color="black"></${t("icon-search")}>`,field:"",hassearchedbefore:!1,autocomplete:"on",ariaLabel:"",showClearIcon:!0},render:a=>i`
      <${e}
        .value=${a.value}
        type="${a.type}"
        label="${a.label}"
        placeholder="${a.placeholder}"
        ?disabled=${a.disabled}
        .clearIcon=${a.showClearIcon?a.clearIcon:null}
        .actionIcon=${a.actionIcon}
        field="${a.field}"
        ?hassearchedbefore=${a.hassearchedbefore}
        autocomplete="${a.autocomplete}"
        aria-label="${a.ariaLabel}"
      ></${e}>
    `},o={},l={parameters:{controls:{disable:!0},docs:{description:{story:`Comprehensive showcase of all input textfield states and variations:

**Input Types:** Supports HTML5 types like text, password, email, and number with appropriate validation and mobile keyboard optimization.

**Icons:** Optional clear icon for quick value clearing and action icon for operations like search or submit.

**States:** Includes empty, filled, disabled, and various placeholder configurations.

**Features:** Autocomplete control, RTL support, and full accessibility with ARIA labels.`}}},render:()=>i`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Default (Empty)</div>
          <${e}
            label="Text Field"
            placeholder="Enter text"
          ></${e}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Value</div>
          <${e}
            label="Text Field"
            .value=${"Sample text"}
          ></${e}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Placeholder</div>
          <${e}
            label="Username"
            placeholder="Enter your username"
          ></${e}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Password Type</div>
          <${e}
            label="Password"
            type="password"
            placeholder="Enter password"
          ></${e}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Email Type</div>
          <${e}
            label="Email"
            type="email"
            placeholder="name@example.com"
          ></${e}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Number Type</div>
          <${e}
            label="Age"
            type="number"
            placeholder="Enter age"
          ></${e}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Clear Icon</div>
          <${e}
            label="Search"
            .value=${"Search query"}
            .clearIcon=${i`<${t("icon-close")} size="16" color="black"></${t("icon-close")}>`}
          ></${e}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Action Icon</div>
          <${e}
            label="Search"
            placeholder="Search..."
            .actionIcon=${i`<${t("icon-search")} size="16" color="black"></${t("icon-search")}>`}
          ></${e}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Both Icons</div>
          <${e}
            label="Search Field"
            .value=${"Search term"}
            .clearIcon=${i`<${t("icon-close")} size="16" color="black"></${t("icon-close")}>`}
            .actionIcon=${i`<${t("icon-search")} size="16" color="black"></${t("icon-search")}>`}
          ></${e}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled (Empty)</div>
          <${e}
            label="Text Field"
            placeholder="Disabled"
            ?disabled=${!0}
          ></${e}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled (Filled)</div>
          <${e}
            label="Text Field"
            .value=${"Disabled value"}
            ?disabled=${!0}
          ></${e}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Autocomplete Off</div>
          <${e}
            label="Credit Card"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            autocomplete="off"
          ></${e}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With ARIA Label</div>
          <${e}
            label="Search"
            placeholder="Type to search"
            aria-label="Search products in catalog"
            .actionIcon=${i`<${t("icon-search")} size="16" color="black"></${t("icon-search")}>`}
          ></${e}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Long Placeholder</div>
          <${e}
            label="Description"
            placeholder="Enter a detailed description of your item"
          ></${e}>
        </div>
      </div>
    `};var n,r,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(d=(r=o.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};var s,c,p;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
          <\${ENCHANTED_TEXTFIELD_TAG}
            label="Text Field"
            placeholder="Enter text"
          ></\${ENCHANTED_TEXTFIELD_TAG}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Value</div>
          <\${ENCHANTED_TEXTFIELD_TAG}
            label="Text Field"
            .value=\${'Sample text'}
          ></\${ENCHANTED_TEXTFIELD_TAG}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Placeholder</div>
          <\${ENCHANTED_TEXTFIELD_TAG}
            label="Username"
            placeholder="Enter your username"
          ></\${ENCHANTED_TEXTFIELD_TAG}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Password Type</div>
          <\${ENCHANTED_TEXTFIELD_TAG}
            label="Password"
            type="password"
            placeholder="Enter password"
          ></\${ENCHANTED_TEXTFIELD_TAG}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Email Type</div>
          <\${ENCHANTED_TEXTFIELD_TAG}
            label="Email"
            type="email"
            placeholder="name@example.com"
          ></\${ENCHANTED_TEXTFIELD_TAG}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Number Type</div>
          <\${ENCHANTED_TEXTFIELD_TAG}
            label="Age"
            type="number"
            placeholder="Enter age"
          ></\${ENCHANTED_TEXTFIELD_TAG}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Clear Icon</div>
          <\${ENCHANTED_TEXTFIELD_TAG}
            label="Search"
            .value=\${'Search query'}
            .clearIcon=\${html\`<\${generateIconTagName('icon-close')} size="16" color="black"></\${generateIconTagName('icon-close')}>\`}
          ></\${ENCHANTED_TEXTFIELD_TAG}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Action Icon</div>
          <\${ENCHANTED_TEXTFIELD_TAG}
            label="Search"
            placeholder="Search..."
            .actionIcon=\${html\`<\${generateIconTagName('icon-search')} size="16" color="black"></\${generateIconTagName('icon-search')}>\`}
          ></\${ENCHANTED_TEXTFIELD_TAG}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Both Icons</div>
          <\${ENCHANTED_TEXTFIELD_TAG}
            label="Search Field"
            .value=\${'Search term'}
            .clearIcon=\${html\`<\${generateIconTagName('icon-close')} size="16" color="black"></\${generateIconTagName('icon-close')}>\`}
            .actionIcon=\${html\`<\${generateIconTagName('icon-search')} size="16" color="black"></\${generateIconTagName('icon-search')}>\`}
          ></\${ENCHANTED_TEXTFIELD_TAG}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled (Empty)</div>
          <\${ENCHANTED_TEXTFIELD_TAG}
            label="Text Field"
            placeholder="Disabled"
            ?disabled=\${true}
          ></\${ENCHANTED_TEXTFIELD_TAG}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled (Filled)</div>
          <\${ENCHANTED_TEXTFIELD_TAG}
            label="Text Field"
            .value=\${'Disabled value'}
            ?disabled=\${true}
          ></\${ENCHANTED_TEXTFIELD_TAG}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Autocomplete Off</div>
          <\${ENCHANTED_TEXTFIELD_TAG}
            label="Credit Card"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            autocomplete="off"
          ></\${ENCHANTED_TEXTFIELD_TAG}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With ARIA Label</div>
          <\${ENCHANTED_TEXTFIELD_TAG}
            label="Search"
            placeholder="Type to search"
            aria-label="Search products in catalog"
            .actionIcon=\${html\`<\${generateIconTagName('icon-search')} size="16" color="black"></\${generateIconTagName('icon-search')}>\`}
          ></\${ENCHANTED_TEXTFIELD_TAG}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">Long Placeholder</div>
          <\${ENCHANTED_TEXTFIELD_TAG}
            label="Description"
            placeholder="Enter a detailed description of your item"
          ></\${ENCHANTED_TEXTFIELD_TAG}>
        </div>
      </div>
    \`;
  }
}`,...(p=(c=l.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const D=["Default","AllStates"];export{l as AllStates,o as Default,D as __namedExportsOrder,A as default};
