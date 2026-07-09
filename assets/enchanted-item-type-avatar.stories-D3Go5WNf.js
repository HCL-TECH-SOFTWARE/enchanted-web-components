import{p as e,u as _}from"./tags-CoVdckeD.js";import{I as i}from"./enchanted-item-type-avatar-BqUby24v.js";const p={title:"Data Display/Enchanted Item Type Avatar",tags:["a11y-addon"],parameters:{docs:{description:{component:"A versatile avatar component that displays an icon or image based on the provided item type or image URL. "}}},argTypes:{itemType:{control:{type:"select"},options:Object.values(i),description:"The type of the item (icon type).",table:{defaultValue:{summary:""}}},imageUrl:{control:"text",description:"The image URL for the avatar.",table:{defaultValue:{summary:""}}}},args:{itemType:i.APPLICATION,imageUrl:""},render:o=>_`
    <${e}
      .itemType=${o.itemType}
    ></${e}>
  `},t={},T={render:()=>_`
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
  `};var a,d,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(r=(d=t.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};var A,n,E;T.parameters={...T.parameters,docs:{...(A=T.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(E=(n=T.parameters)==null?void 0:n.docs)==null?void 0:E.source}}};const v=["Default","AllStates"],m=Object.freeze(Object.defineProperty({__proto__:null,AllStates:T,Default:t,__namedExportsOrder:v,default:p},Symbol.toStringTag,{value:"Module"}));export{t as D,m as E};
