import{x as n}from"./iframe-DgNdRKpa.js";import{I as e}from"./dx-item-type-avatar-NdPwBCOH.js";import"./preload-helper-C1FmrZbK.js";import"./dx-ac-base-element-BRVmdAbS.js";import"./index-UTkq3v_9.js";import"./cssClassEnums-flPS6Iko.js";import"./index-DaIQVsYU.js";import"./exportParts-DIz_AD5x.js";const P={title:"Data Display/dx-item-type-avatar",tags:["autodocs"],argTypes:{itemType:{control:{type:"select"},options:Object.values(e),description:"The type of the item (icon type).",table:{defaultValue:{summary:""}}},imageUrl:{control:"text",description:"The image URL for the avatar.",table:{defaultValue:{summary:""}}}},args:{itemType:e.APPLICATION,imageUrl:""},render:y=>n`
    <dx-item-type-avatar
      .itemType=${y.itemType}
    ></dx-item-type-avatar>
  `},t={},a={render:()=>n`
    <div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: center;">
      <div>
        <div>Application</div>
        <dx-item-type-avatar itemType="${e.APPLICATION}"></dx-item-type-avatar>
      </div>
      <div>
        <div>Blog</div>
        <dx-item-type-avatar itemType="${e.BLOG}"></dx-item-type-avatar>
      </div>
      <div>
        <div>Catalog</div>
        <dx-item-type-avatar itemType="${e.CATALOG}"></dx-item-type-avatar>
      </div>
      <div>
        <div>PDF</div>
        <dx-item-type-avatar itemType="${e.PDF}"></dx-item-type-avatar>
      </div>
      <div>
        <div>User Profile</div>
        <dx-item-type-avatar itemType="${e.USER_PROFILE}"></dx-item-type-avatar>
      </div>
      <div>
        <div>Default (no type)</div>
        <dx-item-type-avatar></dx-item-type-avatar>
      </div>
    </div>
  `};var i,r,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(d=(r=t.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};var p,v,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(v=a.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};const f=["Default","AllStates"];export{a as AllStates,t as Default,f as __namedExportsOrder,P as default};
