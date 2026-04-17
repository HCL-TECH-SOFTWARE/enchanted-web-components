import{Y as t,Z as e,u as r}from"./tags-Dua8CojJ.js";import"./enchanted-list-item-D9x5tp98.js";import"./iframe-DNG6NGwD.js";import"./preload-helper-C1FmrZbK.js";import"./cssClassEnums-mKa0OyBd.js";const d={title:"Data Display/enchanted-list",tags:["autodocs"],argTypes:{role:{control:{type:"text"},description:'ARIA role attribute for the list element. Common values include "listbox", "menu", or empty string for default list semantics. Enhances accessibility by defining the semantic purpose of the list.',table:{category:"Accessibility",type:{summary:"string"},defaultValue:{summary:""}}}},args:{role:""},parameters:{docs:{description:{component:"List container component that renders an unordered list element with support for ARIA roles. Works with enchanted-list-item components to create accessible list structures. Supports custom styling via CSS parts and flexible content via slots."}}},render:l=>r`
      <${t} role="${l.role}">
        <${e}>Item 1</${e}>
        <${e}>Item 2</${e}>
        <${e}>Item 3</${e}>
      </${t}>
    `},T={},i={render:()=>r`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div>
          <h3 style="margin-top: 0;">Default List</h3>
          <${t}>
            <${e}>Item 1</${e}>
            <${e}>Item 2</${e}>
            <${e}>Item 3</${e}>
          </${t}>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with role="listbox"</h3>
          <${t} role="listbox">
            <${e} role="option">Option A</${e}>
            <${e} role="option">Option B</${e}>
            <${e} role="option">Option C</${e}>
          </${t}>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with role="menu"</h3>
          <${t} role="menu">
            <${e} role="menuitem">Menu Item 1</${e}>
            <${e} role="menuitem">Menu Item 2</${e}>
            <${e} role="menuitem">Menu Item 3</${e}>
          </${t}>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with Selected Items</h3>
          <${t}>
            <${e}>Regular Item</${e}>
            <${e} ?isSelected=${!0}>Selected Item 1</${e}>
            <${e}>Regular Item</${e}>
            <${e} ?isSelected=${!0}>Selected Item 2</${e}>
          </${t}>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with Keys</h3>
          <${t}>
            <${e} .key=${"item-1"}>Item with key "item-1"</${e}>
            <${e} .key=${"item-2"}>Item with key "item-2"</${e}>
            <${e} .key=${"item-3"}>Item with key "item-3"</${e}>
          </${t}>
        </div>

        <div>
          <h3 style="margin-top: 0;">Empty List</h3>
          <${t}></${t}>
        </div>

        <div>
          <h3 style="margin-top: 0;">Long List</h3>
          <${t} style="max-height: 200px; overflow-y: auto;">
            <${e}>Item 1</${e}>
            <${e}>Item 2</${e}>
            <${e}>Item 3</${e}>
            <${e}>Item 4</${e}>
            <${e}>Item 5</${e}>
            <${e}>Item 6</${e}>
            <${e}>Item 7</${e}>
            <${e}>Item 8</${e}>
          </${t}>
        </div>

        <div>
          <h3 style="margin-top: 0;">Mixed Content</h3>
          <${t}>
            <${e} ?isSelected=${!0}>Selected with long text that wraps to multiple lines to show layout</${e}>
            <${e}>Short item</${e}>
            <${e} .key=${"custom-key"}>Item with custom key</${e}>
          </${t}>
        </div>
      </div>
    `,parameters:{docs:{description:{story:"Comprehensive showcase of all list configurations and list-item states. Demonstrates default lists, ARIA roles (listbox, menu), selected items (isSelected), keyed items, empty lists, scrollable long lists, and mixed content scenarios. Shows 8 different list configurations highlighting various use cases and features."}},controls:{disable:!0}}};var n,s,E;T.parameters={...T.parameters,docs:{...(n=T.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(E=(s=T.parameters)==null?void 0:s.docs)==null?void 0:E.source}}};var _,o,I;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div>
          <h3 style="margin-top: 0;">Default List</h3>
          <\${ENCHANTED_LIST_TAG}>
            <\${ENCHANTED_LIST_ITEM_TAG}>Item 1</\${ENCHANTED_LIST_ITEM_TAG}>
            <\${ENCHANTED_LIST_ITEM_TAG}>Item 2</\${ENCHANTED_LIST_ITEM_TAG}>
            <\${ENCHANTED_LIST_ITEM_TAG}>Item 3</\${ENCHANTED_LIST_ITEM_TAG}>
          </\${ENCHANTED_LIST_TAG}>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with role="listbox"</h3>
          <\${ENCHANTED_LIST_TAG} role="listbox">
            <\${ENCHANTED_LIST_ITEM_TAG} role="option">Option A</\${ENCHANTED_LIST_ITEM_TAG}>
            <\${ENCHANTED_LIST_ITEM_TAG} role="option">Option B</\${ENCHANTED_LIST_ITEM_TAG}>
            <\${ENCHANTED_LIST_ITEM_TAG} role="option">Option C</\${ENCHANTED_LIST_ITEM_TAG}>
          </\${ENCHANTED_LIST_TAG}>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with role="menu"</h3>
          <\${ENCHANTED_LIST_TAG} role="menu">
            <\${ENCHANTED_LIST_ITEM_TAG} role="menuitem">Menu Item 1</\${ENCHANTED_LIST_ITEM_TAG}>
            <\${ENCHANTED_LIST_ITEM_TAG} role="menuitem">Menu Item 2</\${ENCHANTED_LIST_ITEM_TAG}>
            <\${ENCHANTED_LIST_ITEM_TAG} role="menuitem">Menu Item 3</\${ENCHANTED_LIST_ITEM_TAG}>
          </\${ENCHANTED_LIST_TAG}>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with Selected Items</h3>
          <\${ENCHANTED_LIST_TAG}>
            <\${ENCHANTED_LIST_ITEM_TAG}>Regular Item</\${ENCHANTED_LIST_ITEM_TAG}>
            <\${ENCHANTED_LIST_ITEM_TAG} ?isSelected=\${true}>Selected Item 1</\${ENCHANTED_LIST_ITEM_TAG}>
            <\${ENCHANTED_LIST_ITEM_TAG}>Regular Item</\${ENCHANTED_LIST_ITEM_TAG}>
            <\${ENCHANTED_LIST_ITEM_TAG} ?isSelected=\${true}>Selected Item 2</\${ENCHANTED_LIST_ITEM_TAG}>
          </\${ENCHANTED_LIST_TAG}>
        </div>

        <div>
          <h3 style="margin-top: 0;">List with Keys</h3>
          <\${ENCHANTED_LIST_TAG}>
            <\${ENCHANTED_LIST_ITEM_TAG} .key=\${'item-1'}>Item with key "item-1"</\${ENCHANTED_LIST_ITEM_TAG}>
            <\${ENCHANTED_LIST_ITEM_TAG} .key=\${'item-2'}>Item with key "item-2"</\${ENCHANTED_LIST_ITEM_TAG}>
            <\${ENCHANTED_LIST_ITEM_TAG} .key=\${'item-3'}>Item with key "item-3"</\${ENCHANTED_LIST_ITEM_TAG}>
          </\${ENCHANTED_LIST_TAG}>
        </div>

        <div>
          <h3 style="margin-top: 0;">Empty List</h3>
          <\${ENCHANTED_LIST_TAG}></\${ENCHANTED_LIST_TAG}>
        </div>

        <div>
          <h3 style="margin-top: 0;">Long List</h3>
          <\${ENCHANTED_LIST_TAG} style="max-height: 200px; overflow-y: auto;">
            <\${ENCHANTED_LIST_ITEM_TAG}>Item 1</\${ENCHANTED_LIST_ITEM_TAG}>
            <\${ENCHANTED_LIST_ITEM_TAG}>Item 2</\${ENCHANTED_LIST_ITEM_TAG}>
            <\${ENCHANTED_LIST_ITEM_TAG}>Item 3</\${ENCHANTED_LIST_ITEM_TAG}>
            <\${ENCHANTED_LIST_ITEM_TAG}>Item 4</\${ENCHANTED_LIST_ITEM_TAG}>
            <\${ENCHANTED_LIST_ITEM_TAG}>Item 5</\${ENCHANTED_LIST_ITEM_TAG}>
            <\${ENCHANTED_LIST_ITEM_TAG}>Item 6</\${ENCHANTED_LIST_ITEM_TAG}>
            <\${ENCHANTED_LIST_ITEM_TAG}>Item 7</\${ENCHANTED_LIST_ITEM_TAG}>
            <\${ENCHANTED_LIST_ITEM_TAG}>Item 8</\${ENCHANTED_LIST_ITEM_TAG}>
          </\${ENCHANTED_LIST_TAG}>
        </div>

        <div>
          <h3 style="margin-top: 0;">Mixed Content</h3>
          <\${ENCHANTED_LIST_TAG}>
            <\${ENCHANTED_LIST_ITEM_TAG} ?isSelected=\${true}>Selected with long text that wraps to multiple lines to show layout</\${ENCHANTED_LIST_ITEM_TAG}>
            <\${ENCHANTED_LIST_ITEM_TAG}>Short item</\${ENCHANTED_LIST_ITEM_TAG}>
            <\${ENCHANTED_LIST_ITEM_TAG} .key=\${'custom-key'}>Item with custom key</\${ENCHANTED_LIST_ITEM_TAG}>
          </\${ENCHANTED_LIST_TAG}>
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
}`,...(I=(o=i.parameters)==null?void 0:o.docs)==null?void 0:I.source}}};const S=["Default","AllStates"];export{i as AllStates,T as Default,S as __namedExportsOrder,d as default};
