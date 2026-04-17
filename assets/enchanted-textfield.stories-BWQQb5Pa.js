import{W as e,u as i,g as a}from"./tags-Dua8CojJ.js";import"./enchanted-textfield-CQ72IaNg.js";import"./index-BNGnTAuZ.js";import"./index-CyivXirU.js";import"./iframe-DNG6NGwD.js";import"./preload-helper-C1FmrZbK.js";import"./state-fRMCsTN1.js";import"./lodash-CNEZJmwz.js";import"./localization-Pwna_gtP.js";import"./enchanted-select-Ge91KUgI.js";import"./cssClassEnums-mKa0OyBd.js";import"./keyboardEventKeys-BnoN8uA3.js";import"./index-CuTRIAwF.js";import"./tags-BViZhp05.js";const A={title:"Input/enchanted-textfield",tags:["autodocs"],parameters:{docs:{description:{component:"The Input Textfield component provides a standard text input with label, placeholder, and optional clear/action icons. It supports various HTML5 input types (text, password, email, number), autocomplete behavior, and RTL text direction. Use for single-line text entry in forms, search fields, and data input interfaces."}}},argTypes:{value:{control:{type:"text"},description:"Current value of the textfield. Can be set programmatically or updated by user input. Binds to the underlying input element value.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},label:{control:{type:"text"},description:"Label text displayed above the textfield. Provides context about the expected input. Properly associated with the input for accessibility.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:void 0}}},placeholder:{control:{type:"text"},description:"Placeholder text shown when the field is empty. Provides hints about the expected format or example input. Disappears when user starts typing.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},type:{control:{type:"text"},description:"HTML5 input type attribute. Common values: text, password, email, number, tel, url. Controls input validation and mobile keyboard display.",table:{category:"Form",type:{summary:"string"},defaultValue:{summary:"text"}}},disabled:{control:{type:"boolean"},description:"Disables the textfield, preventing user input and interaction. The field appears grayed out and does not accept focus or keyboard input.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},clearIcon:{control:{type:"object"},description:"The TemplateResult for the clear icon.",table:{defaultValue:{summary:"TemplateResult"}}},actionIcon:{control:{type:"object"},description:"The TemplateResult for the action icon.",table:{defaultValue:{summary:"TemplateResult"}}},field:{control:{type:"text"},description:"Field type or name identifier for the input textfield. Used for form processing, validation, or programmatic field identification.",table:{category:"Form",type:{summary:"string"},defaultValue:{summary:""}}},hassearchedbefore:{control:{type:"boolean"},description:"Indicates whether a search has been performed before. Used to track search state in search field implementations.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},autocomplete:{control:{type:"text"},description:'HTML autocomplete attribute. Controls browser autocomplete behavior. Common values: "on", "off", "email", "username", "new-password".',table:{category:"Form",type:{summary:"string"},defaultValue:{summary:"on"}}},ariaLabel:{control:{type:"text"},description:"ARIA label for accessibility. Provides descriptive text for screen readers when the visible label is insufficient or needs clarification.",table:{category:"Accessibility",type:{summary:"string"},defaultValue:{summary:""}}},showClearIcon:{control:{type:"boolean"},description:"Toggle to show or hide the clear icon.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"true"}}},multiline:{control:{type:"boolean"},description:"If true, renders a multiline textarea instead of a single-line input.",table:{category:"Content",type:{summary:"boolean"},defaultValue:{summary:"false"}}},numberOfLines:{control:{type:"number",min:1},description:"Number of visible lines for the textarea when multiline is true. Clear the field for unlimited growth. Ignored if multiline is false.",table:{category:"Content",type:{summary:"number | null"},defaultValue:{summary:"null"}}}},args:{value:"",type:"text",label:"Text Field",placeholder:"Enter text",disabled:!1,clearIcon:i`<${a("icon-close")} size="16" color="black"></${a("icon-close")}>`,actionIcon:i`<${a("icon-search")} size="16" color="black"></${a("icon-search")}>`,field:"",hassearchedbefore:!1,autocomplete:"on",ariaLabel:"",showClearIcon:!0,multiline:!1,numberOfLines:null},render:t=>i`
      <${e}
        .value=${t.value}
        type="${t.type}"
        label="${t.label}"
        placeholder="${t.placeholder}"
        ?disabled=${t.disabled}
        .clearIcon=${t.showClearIcon?t.clearIcon:null}
        .actionIcon=${t.actionIcon}
        field="${t.field}"
        ?hassearchedbefore=${t.hassearchedbefore}
        autocomplete="${t.autocomplete}"
        aria-label="${t.ariaLabel}"
        ?multiline=${t.multiline}
        .numberOfLines=${t.multiline?t.numberOfLines??null:null}
      ></${e}>
    `},l={},o={parameters:{controls:{disable:!0},docs:{description:{story:`Comprehensive showcase of all input textfield states and variations:

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
            .clearIcon=${i`<${a("icon-close")} size="16" color="black"></${a("icon-close")}>`}
          ></${e}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Action Icon</div>
          <${e}
            label="Search"
            placeholder="Search..."
            .actionIcon=${i`<${a("icon-search")} size="16" color="black"></${a("icon-search")}>`}
          ></${e}>
        </div>
        <div style="width: 250px;">
          <div style="margin-bottom: 8px; font-weight: 500;">With Both Icons</div>
          <${e}
            label="Search Field"
            .value=${"Search term"}
            .clearIcon=${i`<${a("icon-close")} size="16" color="black"></${a("icon-close")}>`}
            .actionIcon=${i`<${a("icon-search")} size="16" color="black"></${a("icon-search")}>`}
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
            .actionIcon=${i`<${a("icon-search")} size="16" color="black"></${a("icon-search")}>`}
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
    `};var n,r,s;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(s=(r=l.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var d,c,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const D=["Default","AllStates"];export{o as AllStates,l as Default,D as __namedExportsOrder,A as default};
