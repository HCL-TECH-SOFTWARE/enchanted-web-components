import{x}from"./iframe-DgNdRKpa.js";import"./dx-list-item-BMtFo3VC.js";import"./preload-helper-C1FmrZbK.js";import"./dx-ac-base-element-BRVmdAbS.js";import"./cssClassEnums-flPS6Iko.js";const c={title:"Data Display/dx-list",tags:["autodocs"],argTypes:{role:{control:"text",description:"The ARIA role for the list.",table:{defaultValue:{summary:""}}}},args:{role:""},render:n=>x`
      <dx-list role="${n.role}">
        <dx-list-item>Item 1</dx-list-item>
        <dx-list-item>Item 2</dx-list-item>
        <dx-list-item>Item 3</dx-list-item>
      </dx-list>
    `},t={},i={render:()=>x`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div>
          <div>Default</div>
          <dx-list>
            <dx-list-item>Item 1</dx-list-item>
            <dx-list-item>Item 2</dx-list-item>
            <dx-list-item>Item 3</dx-list-item>
          </dx-list>
        </div>
        <div>
          <div>With role="listbox"</div>
          <dx-list role="listbox">
            <dx-list-item>Option A</dx-list-item>
            <dx-list-item>Option B</dx-list-item>
          </dx-list>
        </div>
        <div>
          <div>Empty List</div>
          <dx-list></dx-list>
        </div>
        <div>
          <div>Custom Content</div>
          <dx-list>
            <li style="color: red;">Custom HTML Item</li>
            <dx-list-item>Standard Item</dx-list-item>
          </dx-list>
        </div>
      </div>
    `};var e,d,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(s=(d=t.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var l,r,m;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div>
          <div>Default</div>
          <dx-list>
            <dx-list-item>Item 1</dx-list-item>
            <dx-list-item>Item 2</dx-list-item>
            <dx-list-item>Item 3</dx-list-item>
          </dx-list>
        </div>
        <div>
          <div>With role="listbox"</div>
          <dx-list role="listbox">
            <dx-list-item>Option A</dx-list-item>
            <dx-list-item>Option B</dx-list-item>
          </dx-list>
        </div>
        <div>
          <div>Empty List</div>
          <dx-list></dx-list>
        </div>
        <div>
          <div>Custom Content</div>
          <dx-list>
            <li style="color: red;">Custom HTML Item</li>
            <dx-list-item>Standard Item</dx-list-item>
          </dx-list>
        </div>
      </div>
    \`;
  }
}`,...(m=(r=i.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const f=["Default","AllStates"];export{i as AllStates,t as Default,f as __namedExportsOrder,c as default};
