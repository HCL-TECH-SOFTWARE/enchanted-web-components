import{A as e,u as n}from"./tags-xkLHt5Ez.js";import{I as i}from"./enchanted-item-type-avatar-Bapo0xqa.js";import"./iframe-C32rrkgB.js";import"./preload-helper-C1FmrZbK.js";import"./enchanted-avatar-DEfUp3hY.js";import"./cssClassEnums-WDBe4U61.js";import"./exportParts-B-kKZm-x.js";import"./index-CuTRIAwF.js";import"./tags-DNNghoUc.js";import"./index-bAk2BZj-.js";const y={title:"Data Display/enchanted-item-type-avatar",tags:["autodocs"],argTypes:{itemType:{control:{type:"select"},options:Object.values(i),description:"The type of the item (icon type).",table:{defaultValue:{summary:""}}},imageUrl:{control:"text",description:"The image URL for the avatar.",table:{defaultValue:{summary:""}}}},args:{itemType:i.APPLICATION,imageUrl:""},render:p=>n`
    <${e}
      .itemType=${p.itemType}
    ></${e}>
  `},T={},t={render:()=>n`
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
  `};var A,r,a;T.parameters={...T.parameters,docs:{...(A=T.parameters)==null?void 0:A.docs,source:{originalSource:"{}",...(a=(r=T.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var d,E,_;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(_=(E=t.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};const C=["Default","AllStates"];export{t as AllStates,T as Default,C as __namedExportsOrder,y as default};
