import{x as m}from"./iframe-DHDpWj8R.js";import{I as e}from"./enchanted-item-type-avatar-Cf1yxHOJ.js";import"./preload-helper-C1FmrZbK.js";import"./enchanted-ac-base-element-DiERHT3A.js";import"./enchanted-avatar-CS0Brxsm.js";import"./cssClassEnums-D4dgqifY.js";import"./exportParts-lw5uKHST.js";import"./index-BdjfDspd.js";import"./index-CjYVgHr4.js";const f={title:"Data Display/enchanted-item-type-avatar",tags:["autodocs"],argTypes:{itemType:{control:{type:"select"},options:Object.values(e),description:"The type of the item (icon type).",table:{defaultValue:{summary:""}}},imageUrl:{control:"text",description:"The image URL for the avatar.",table:{defaultValue:{summary:""}}}},args:{itemType:e.APPLICATION,imageUrl:""},render:c=>m`
    <enchanted-item-type-avatar
      .itemType=${c.itemType}
    ></enchanted-item-type-avatar>
  `},t={},a={render:()=>m`
    <div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: center;">
      <div>
        <div>Application</div>
        <enchanted-item-type-avatar itemType="${e.APPLICATION}"></enchanted-item-type-avatar>
      </div>
      <div>
        <div>Blog</div>
        <enchanted-item-type-avatar itemType="${e.BLOG}"></enchanted-item-type-avatar>
      </div>
      <div>
        <div>Catalog</div>
        <enchanted-item-type-avatar itemType="${e.CATALOG}"></enchanted-item-type-avatar>
      </div>
      <div>
        <div>PDF</div>
        <enchanted-item-type-avatar itemType="${e.PDF}"></enchanted-item-type-avatar>
      </div>
      <div>
        <div>User Profile</div>
        <enchanted-item-type-avatar itemType="${e.USER_PROFILE}"></enchanted-item-type-avatar>
      </div>
      <div>
        <div>Default (no type)</div>
        <enchanted-item-type-avatar></enchanted-item-type-avatar>
      </div>
    </div>
  `};var i,n,r;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var d,p,v;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return html\`
    <div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: center;">
      <div>
        <div>Application</div>
        <enchanted-item-type-avatar itemType="\${ICON_ITEM_TYPE.APPLICATION}"></enchanted-item-type-avatar>
      </div>
      <div>
        <div>Blog</div>
        <enchanted-item-type-avatar itemType="\${ICON_ITEM_TYPE.BLOG}"></enchanted-item-type-avatar>
      </div>
      <div>
        <div>Catalog</div>
        <enchanted-item-type-avatar itemType="\${ICON_ITEM_TYPE.CATALOG}"></enchanted-item-type-avatar>
      </div>
      <div>
        <div>PDF</div>
        <enchanted-item-type-avatar itemType="\${ICON_ITEM_TYPE.PDF}"></enchanted-item-type-avatar>
      </div>
      <div>
        <div>User Profile</div>
        <enchanted-item-type-avatar itemType="\${ICON_ITEM_TYPE.USER_PROFILE}"></enchanted-item-type-avatar>
      </div>
      <div>
        <div>Default (no type)</div>
        <enchanted-item-type-avatar></enchanted-item-type-avatar>
      </div>
    </div>
  \`;
  }
}`,...(v=(p=a.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};const E=["Default","AllStates"];export{a as AllStates,t as Default,E as __namedExportsOrder,f as default};
