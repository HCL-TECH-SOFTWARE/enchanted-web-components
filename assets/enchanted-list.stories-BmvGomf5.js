import{x as d}from"./iframe-B8Ykn-0R.js";import"./enchanted-list-item-DyHRA-H7.js";import"./preload-helper-C1FmrZbK.js";import"./enchanted-ac-base-element-BcyMwwt4.js";import"./cssClassEnums-D4dgqifY.js";const y={title:"Data Display/enchanted-list",tags:["autodocs"],argTypes:{role:{control:{type:"text"},description:'ARIA role attribute for the list element. Common values include "listbox", "menu", or empty string for default list semantics. Enhances accessibility by defining the semantic purpose of the list.',table:{category:"Accessibility",type:{summary:"string"},defaultValue:{summary:""}}}},args:{role:""},parameters:{docs:{description:{component:"List container component that renders an unordered list element with support for ARIA roles. Works with enchanted-list-item components to create accessible list structures. Supports custom styling via CSS parts and flexible content via slots."}}},render:c=>d`
      <enchanted-list role="${c.role}">
        <enchanted-list-item>Item 1</enchanted-list-item>
        <enchanted-list-item>Item 2</enchanted-list-item>
        <enchanted-list-item>Item 3</enchanted-list-item>
      </enchanted-list>
    `},e={},t={render:()=>d`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div>
          <h3 style="margin-top: 0;">Default List</h3>
          <enchanted-list>
            <enchanted-list-item>Item 1</enchanted-list-item>
            <enchanted-list-item>Item 2</enchanted-list-item>
            <enchanted-list-item>Item 3</enchanted-list-item>
          </enchanted-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with role="listbox"</h3>
          <enchanted-list role="listbox">
            <enchanted-list-item role="option">Option A</enchanted-list-item>
            <enchanted-list-item role="option">Option B</enchanted-list-item>
            <enchanted-list-item role="option">Option C</enchanted-list-item>
          </enchanted-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with role="menu"</h3>
          <enchanted-list role="menu">
            <enchanted-list-item role="menuitem">Menu Item 1</enchanted-list-item>
            <enchanted-list-item role="menuitem">Menu Item 2</enchanted-list-item>
            <enchanted-list-item role="menuitem">Menu Item 3</enchanted-list-item>
          </enchanted-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with Selected Items</h3>
          <enchanted-list>
            <enchanted-list-item>Regular Item</enchanted-list-item>
            <enchanted-list-item ?isSelected=${!0}>Selected Item 1</enchanted-list-item>
            <enchanted-list-item>Regular Item</enchanted-list-item>
            <enchanted-list-item ?isSelected=${!0}>Selected Item 2</enchanted-list-item>
          </enchanted-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with Keys</h3>
          <enchanted-list>
            <enchanted-list-item .key=${"item-1"}>Item with key "item-1"</enchanted-list-item>
            <enchanted-list-item .key=${"item-2"}>Item with key "item-2"</enchanted-list-item>
            <enchanted-list-item .key=${"item-3"}>Item with key "item-3"</enchanted-list-item>
          </enchanted-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">Empty List</h3>
          <enchanted-list></enchanted-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">Long List</h3>
          <enchanted-list style="max-height: 200px; overflow-y: auto;">
            <enchanted-list-item>Item 1</enchanted-list-item>
            <enchanted-list-item>Item 2</enchanted-list-item>
            <enchanted-list-item>Item 3</enchanted-list-item>
            <enchanted-list-item>Item 4</enchanted-list-item>
            <enchanted-list-item>Item 5</enchanted-list-item>
            <enchanted-list-item>Item 6</enchanted-list-item>
            <enchanted-list-item>Item 7</enchanted-list-item>
            <enchanted-list-item>Item 8</enchanted-list-item>
          </enchanted-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">Mixed Content</h3>
          <enchanted-list>
            <enchanted-list-item ?isSelected=${!0}>Selected with long text that wraps to multiple lines to show layout</enchanted-list-item>
            <enchanted-list-item>Short item</enchanted-list-item>
            <enchanted-list-item .key=${"custom-key"}>Item with custom key</enchanted-list-item>
          </enchanted-list>
        </div>
      </div>
    `,parameters:{docs:{description:{story:"Comprehensive showcase of all list configurations and list-item states. Demonstrates default lists, ARIA roles (listbox, menu), selected items (isSelected), keyed items, empty lists, scrollable long lists, and mixed content scenarios. Shows 8 different list configurations highlighting various use cases and features."}},controls:{disable:!0}}};var i,n,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var l,a,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div>
          <h3 style="margin-top: 0;">Default List</h3>
          <enchanted-list>
            <enchanted-list-item>Item 1</enchanted-list-item>
            <enchanted-list-item>Item 2</enchanted-list-item>
            <enchanted-list-item>Item 3</enchanted-list-item>
          </enchanted-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with role="listbox"</h3>
          <enchanted-list role="listbox">
            <enchanted-list-item role="option">Option A</enchanted-list-item>
            <enchanted-list-item role="option">Option B</enchanted-list-item>
            <enchanted-list-item role="option">Option C</enchanted-list-item>
          </enchanted-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with role="menu"</h3>
          <enchanted-list role="menu">
            <enchanted-list-item role="menuitem">Menu Item 1</enchanted-list-item>
            <enchanted-list-item role="menuitem">Menu Item 2</enchanted-list-item>
            <enchanted-list-item role="menuitem">Menu Item 3</enchanted-list-item>
          </enchanted-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with Selected Items</h3>
          <enchanted-list>
            <enchanted-list-item>Regular Item</enchanted-list-item>
            <enchanted-list-item ?isSelected=\${true}>Selected Item 1</enchanted-list-item>
            <enchanted-list-item>Regular Item</enchanted-list-item>
            <enchanted-list-item ?isSelected=\${true}>Selected Item 2</enchanted-list-item>
          </enchanted-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with Keys</h3>
          <enchanted-list>
            <enchanted-list-item .key=\${'item-1'}>Item with key "item-1"</enchanted-list-item>
            <enchanted-list-item .key=\${'item-2'}>Item with key "item-2"</enchanted-list-item>
            <enchanted-list-item .key=\${'item-3'}>Item with key "item-3"</enchanted-list-item>
          </enchanted-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">Empty List</h3>
          <enchanted-list></enchanted-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">Long List</h3>
          <enchanted-list style="max-height: 200px; overflow-y: auto;">
            <enchanted-list-item>Item 1</enchanted-list-item>
            <enchanted-list-item>Item 2</enchanted-list-item>
            <enchanted-list-item>Item 3</enchanted-list-item>
            <enchanted-list-item>Item 4</enchanted-list-item>
            <enchanted-list-item>Item 5</enchanted-list-item>
            <enchanted-list-item>Item 6</enchanted-list-item>
            <enchanted-list-item>Item 7</enchanted-list-item>
            <enchanted-list-item>Item 8</enchanted-list-item>
          </enchanted-list>
        </div>

        <div>
          <h3 style="margin-top: 0;">Mixed Content</h3>
          <enchanted-list>
            <enchanted-list-item ?isSelected=\${true}>Selected with long text that wraps to multiple lines to show layout</enchanted-list-item>
            <enchanted-list-item>Short item</enchanted-list-item>
            <enchanted-list-item .key=\${'custom-key'}>Item with custom key</enchanted-list-item>
          </enchanted-list>
        </div>
      </div>
    \`;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all list configurations and list-item states. Demonstrates default lists, ARIA roles (listbox, menu), ' + 'selected items (isSelected), keyed items, empty lists, scrollable long lists, and mixed content scenarios. ' + 'Shows 8 different list configurations highlighting various use cases and features.'
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(m=(a=t.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const I=["Default","AllStates"];export{t as AllStates,e as Default,I as __namedExportsOrder,y as default};
