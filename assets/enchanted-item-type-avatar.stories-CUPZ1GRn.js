import{A as e,u as o}from"./tags-GuWqQq8Q.js";import{I as i}from"./enchanted-item-type-avatar-CMH1ATm9.js";import"./iframe-DIZdwA76.js";import"./preload-helper-C1FmrZbK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./enchanted-avatar-D08jLYYn.js";import"./cssClassEnums-BAuKGcJP.js";import"./exportParts-cfcc4c_o.js";import"./index-CuTRIAwF.js";import"./tags-OypiFpf3.js";import"./index-eoQuUYFD.js";const C={title:"Data Display/Enchanted Item Type Avatar",tags:["autodocs","a11y-addon"],parameters:{docs:{description:{component:"A versatile avatar component that displays an icon or image based on the provided item type or image URL. "}}},argTypes:{itemType:{control:{type:"select"},options:Object.values(i),description:"The type of the item (icon type).",table:{defaultValue:{summary:""}}},imageUrl:{control:"text",description:"The image URL for the avatar.",table:{defaultValue:{summary:""}}}},args:{itemType:i.APPLICATION,imageUrl:""},render:_=>o`
    <${e}
      .itemType=${_.itemType}
    ></${e}>
  `},t={},T={render:()=>o`
    <div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: center;">
      <div>
        <div>Application</div>
        <${e} itemType="${i.APPLICATION}"></${e}>
      </div>
      <div>
        <div>Blog</div>
        <${e} itemType="${i.BLOG}"></${e}>
      </div>
      <div>
        <div>Catalog</div>
        <${e} itemType="${i.CATALOG}"></${e}>
      </div>
      <div>
        <div>PDF</div>
        <${e} itemType="${i.PDF}"></${e}>
      </div>
      <div>
        <div>User Profile</div>
        <${e} itemType="${i.USER_PROFILE}"></${e}>
      </div>
      <div>
        <div>Default (no type)</div>
        <${e}></${e}>
      </div>
    </div>
  `};var a,r,A;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(A=(r=t.parameters)==null?void 0:r.docs)==null?void 0:A.source}}};var d,E,n;T.parameters={...T.parameters,docs:{...(d=T.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return html\`
    <div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: center;">
      <div>
        <div>Application</div>
        <\${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType="\${ICON_ITEM_TYPE.APPLICATION}"></\${ENCHANTED_ITEM_TYPE_AVATAR_TAG}>
      </div>
      <div>
        <div>Blog</div>
        <\${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType="\${ICON_ITEM_TYPE.BLOG}"></\${ENCHANTED_ITEM_TYPE_AVATAR_TAG}>
      </div>
      <div>
        <div>Catalog</div>
        <\${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType="\${ICON_ITEM_TYPE.CATALOG}"></\${ENCHANTED_ITEM_TYPE_AVATAR_TAG}>
      </div>
      <div>
        <div>PDF</div>
        <\${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType="\${ICON_ITEM_TYPE.PDF}"></\${ENCHANTED_ITEM_TYPE_AVATAR_TAG}>
      </div>
      <div>
        <div>User Profile</div>
        <\${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType="\${ICON_ITEM_TYPE.USER_PROFILE}"></\${ENCHANTED_ITEM_TYPE_AVATAR_TAG}>
      </div>
      <div>
        <div>Default (no type)</div>
        <\${ENCHANTED_ITEM_TYPE_AVATAR_TAG}></\${ENCHANTED_ITEM_TYPE_AVATAR_TAG}>
      </div>
    </div>
  \`;
  }
}`,...(n=(E=T.parameters)==null?void 0:E.docs)==null?void 0:n.source}}};const u=["Default","AllStates"];export{T as AllStates,t as Default,u as __namedExportsOrder,C as default};
