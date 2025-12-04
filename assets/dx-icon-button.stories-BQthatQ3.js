import{x as i}from"./iframe-DgNdRKpa.js";import"./dx-icon-button-hiUpIBJT.js";import{I as n}from"./cssClassEnums-flPS6Iko.js";import{s as t}from"./svg-search-BkC5CLNH.js";import"./preload-helper-C1FmrZbK.js";import"./dx-ac-base-element-BRVmdAbS.js";import"./dx-button-q5wlWak9.js";import"./state-g_VKachv.js";import"./localization-8Qc5IxgI.js";import"./exportParts-DIz_AD5x.js";const h={title:"Input/dx-icon-button",tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:[n.SMALL,n.MEDIUM,n.FAB],description:"The size of the icon button.",table:{defaultValue:{summary:n.SMALL}}},withPadding:{control:"boolean",description:"If true, adds padding to the button.",table:{defaultValue:{summary:"false"}}},imgurl:{control:"text",description:"The image URL for the icon.",table:{defaultValue:{summary:""}}},disabled:{control:"boolean",description:"If true, disables the button.",table:{defaultValue:{summary:"false"}}},inverseColor:{control:"boolean",description:"If true, uses the inverse color scheme.",table:{defaultValue:{summary:"false"}}}},args:{size:n.SMALL,withPadding:!1,imgurl:"https://cdn-icons-png.flaticon.com/512/61/61456.png",disabled:!1,inverseColor:!1},render:o=>i`
    <dx-icon-button
      size="${o.size}"
      ?withPadding=${o.withPadding}
      ?disabled=${o.disabled}
      .icon=${i`
          ${t}
        `}
      ?inverseColor=${o.inverseColor}
    ></dx-icon-button>
  `},e={args:{imgurl:""}},d={render:()=>i`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
      <div>
        <div>Default</div>
        <dx-icon-button
          size="${n.SMALL}"
          .icon=${i`${t}`}
        ></dx-icon-button>
      </div>
      <div>
        <div>Disabled</div>
        <dx-icon-button
          size="${n.SMALL}"
          .icon=${i`${t}`}
          ?disabled=${!0}
        ></dx-icon-button>
      </div>
      <div>
        <div>With Padding</div>
        <dx-icon-button
          size="${n.SMALL}"
          .icon=${i`${t}`}
          ?withPadding=${!0}
        ></dx-icon-button>
      </div>
      <div>
        <div>Inverse Color</div>
        <dx-icon-button
          size="${n.SMALL}"
          .icon=${i`${t}`}
          ?inverseColor=${!0}
        ></dx-icon-button>
      </div>
      <div>
        <div>Medium Size</div>
        <dx-icon-button
          size="${n.MEDIUM}"
          .icon=${i`${t}`}
        ></dx-icon-button>
      </div>
      <div>
        <div>Image Icon</div>
        <dx-icon-button
          size="${n.SMALL}"
          imgurl="https://cdn-icons-png.flaticon.com/512/61/61456.png"
        ></dx-icon-button>
      </div>
      <div>
        <div>No Icon</div>
        <dx-icon-button
          size="${n.SMALL}"
        ></dx-icon-button>
      </div>
    </div>
  `};var r,s,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    imgurl: ''
  }
}`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var a,l,u;d.parameters={...d.parameters,docs:{...(a=d.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return html\`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
      <div>
        <div>Default</div>
        <dx-icon-button
          size="\${ICON_BUTTON_SIZES.SMALL}"
          .icon=\${html\`\${svgIconSearch}\`}
        ></dx-icon-button>
      </div>
      <div>
        <div>Disabled</div>
        <dx-icon-button
          size="\${ICON_BUTTON_SIZES.SMALL}"
          .icon=\${html\`\${svgIconSearch}\`}
          ?disabled=\${true}
        ></dx-icon-button>
      </div>
      <div>
        <div>With Padding</div>
        <dx-icon-button
          size="\${ICON_BUTTON_SIZES.SMALL}"
          .icon=\${html\`\${svgIconSearch}\`}
          ?withPadding=\${true}
        ></dx-icon-button>
      </div>
      <div>
        <div>Inverse Color</div>
        <dx-icon-button
          size="\${ICON_BUTTON_SIZES.SMALL}"
          .icon=\${html\`\${svgIconSearch}\`}
          ?inverseColor=\${true}
        ></dx-icon-button>
      </div>
      <div>
        <div>Medium Size</div>
        <dx-icon-button
          size="\${ICON_BUTTON_SIZES.MEDIUM}"
          .icon=\${html\`\${svgIconSearch}\`}
        ></dx-icon-button>
      </div>
      <div>
        <div>Image Icon</div>
        <dx-icon-button
          size="\${ICON_BUTTON_SIZES.SMALL}"
          imgurl="https://cdn-icons-png.flaticon.com/512/61/61456.png"
        ></dx-icon-button>
      </div>
      <div>
        <div>No Icon</div>
        <dx-icon-button
          size="\${ICON_BUTTON_SIZES.SMALL}"
        ></dx-icon-button>
      </div>
    </div>
  \`;
  }
}`,...(u=(l=d.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const L=["Default","AllStates"];export{d as AllStates,e as Default,L as __namedExportsOrder,h as default};
