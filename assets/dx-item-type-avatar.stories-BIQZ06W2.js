import{x as n}from"./iframe-Dsd1MpWQ.js";import{I as t}from"./dx-item-type-avatar-Bsy_fZte.js";import"./preload-helper-C1FmrZbK.js";import"./dx-ac-base-element-C9dhstFR.js";import"./dx-avatar-CcPSZodn.js";import"./cssClassEnums-v1h5zF5X.js";import"./exportParts-CtUt9Lva.js";import"./index-BPZZDKKN.js";import"./index-86KUY05j.js";const f={title:"Data Display/dx-item-type-avatar",tags:["autodocs"],argTypes:{itemType:{control:{type:"select"},options:Object.values(t),description:"The type of the item (icon type).",table:{defaultValue:{summary:""}}},imageUrl:{control:"text",description:"The image URL for the avatar.",table:{defaultValue:{summary:""}}}},args:{itemType:t.APPLICATION,imageUrl:""},render:o=>n`
    <dx-item-type-avatar
      .itemType=${o.itemType}
    ></dx-item-type-avatar>
  `},e={},a={render:()=>n`
    <div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: center;">
      <div>
        <div>Application</div>
        <dx-item-type-avatar itemType="${t.APPLICATION}"></dx-item-type-avatar>
      </div>
      <div>
        <div>Blog</div>
        <dx-item-type-avatar itemType="${t.BLOG}"></dx-item-type-avatar>
      </div>
      <div>
        <div>Catalog</div>
        <dx-item-type-avatar itemType="${t.CATALOG}"></dx-item-type-avatar>
      </div>
      <div>
        <div>PDF</div>
        <dx-item-type-avatar itemType="${t.PDF}"></dx-item-type-avatar>
      </div>
      <div>
        <div>User Profile</div>
        <dx-item-type-avatar itemType="${t.USER_PROFILE}"></dx-item-type-avatar>
      </div>
      <div>
        <div>Default (no type)</div>
        <dx-item-type-avatar></dx-item-type-avatar>
      </div>
    </div>
  `};var i,r,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(d=(r=e.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};var p,v,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return html\`
    <div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: center;">
      <div>
        <div>Application</div>
        <dx-item-type-avatar itemType="\${ICON_ITEM_TYPE.APPLICATION}"></dx-item-type-avatar>
      </div>
      <div>
        <div>Blog</div>
        <dx-item-type-avatar itemType="\${ICON_ITEM_TYPE.BLOG}"></dx-item-type-avatar>
      </div>
      <div>
        <div>Catalog</div>
        <dx-item-type-avatar itemType="\${ICON_ITEM_TYPE.CATALOG}"></dx-item-type-avatar>
      </div>
      <div>
        <div>PDF</div>
        <dx-item-type-avatar itemType="\${ICON_ITEM_TYPE.PDF}"></dx-item-type-avatar>
      </div>
      <div>
        <div>User Profile</div>
        <dx-item-type-avatar itemType="\${ICON_ITEM_TYPE.USER_PROFILE}"></dx-item-type-avatar>
      </div>
      <div>
        <div>Default (no type)</div>
        <dx-item-type-avatar></dx-item-type-avatar>
      </div>
    </div>
  \`;
  }
}`,...(m=(v=a.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};const E=["Default","AllStates"];export{a as AllStates,e as Default,E as __namedExportsOrder,f as default};
