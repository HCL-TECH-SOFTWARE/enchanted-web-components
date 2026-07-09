import{b as t,u as a}from"./tags-CoVdckeD.js";import"./enchanted-badge-Df1lKWMF.js";import{r as n,s as o,t as r}from"./cssClassEnums-B0FxBdGx.js";const x={title:"Data display/Enchanted Badge",component:"enchanted-badge",tags:["a11y-addon"],decorators:[e=>a`
    <div 
    style="
    display: flex; 
    flex-direction: column;
    position: absolute;
    justify-content: center; 
    min-height: 30px;
    align-items: center;">
      ${e()}
    </div>`],parameters:{layout:"padded",docs:{description:{component:"Badge component for displaying notifications or status indicators. Supports multiple types (text, icon), colors, and border styles."}}},argTypes:{badge:{control:{type:"select"},options:Object.values(r),description:"Type of badge to display.",table:{category:"Appearance",type:{summary:Object.values(r).join(" | ")},defaultValue:{summary:r.TEXT}}},text:{control:{type:"text"},description:"Text to display inside the badge when badge type is text.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},color:{control:{type:"select"},options:Object.values(o),description:"Color of the badge.",table:{category:"Appearance",type:{summary:Object.values(o).join(" | ")},defaultValue:{summary:o.PRIMARY}}},border:{control:{type:"select"},options:Object.values(n),description:"Border style of the badge.",table:{category:"Appearance",type:{summary:Object.values(n).join(" | ")},defaultValue:{summary:n.DEFAULT}}}}},d={args:{badge:r.TEXT,text:"12",color:o.PRIMARY,border:n.NONE},render:({badge:e,text:u,color:h,border:y})=>a`
        <${t} badge="${e}" text="${u}" color="${h}" border="${y}">
        </${t}>
    `},i={render:()=>a`
        <h3>Badge Variants - Text</h3>
        <div style="display: flex; gap: 18px; flex-wrap: wrap; align-items: center;">
          ${Object.values(o).map(e=>a`
              <div style="position: relative; width: 50px; height: 50px; text-align: center;">
                <button style="width: 100%; height: 100%; position: absolute; border: none; background: none;"></button>
                <${t} badge="${r.TEXT}" text="12" color="${e}" border="${n.DEFAULT}"></${t}>
                <div style="margin-top: 8px; font-size: 12px;">Color: ${e}</div>
              </div>
            `)}
        </div>
      
        <h3>Badge Variants - Dot</h3>
        <div style="display: flex; gap: 18px; flex-wrap: wrap; align-items: center;">
          ${Object.values(o).map(e=>a`
              <div style="position: relative; width: 50px; height: 50px; text-align: center;">
                <button style="width: 100%; height: 100%; position: absolute; border: none; background: none;"></button>
                <${t} badge="${r.DOT}" color="${e}" border="${n.DEFAULT}"></${t}>
                <div style="margin-top: 8px; font-size: 12px;">Color: ${e}</div>
              </div>
            `)}
        </div>

        <h3>Badge Borders</h3>
        <div style="display: flex; gap: 18px; flex-wrap: wrap; align-items: center;">
          ${Object.values(n).map(e=>a`
              <div style="position: relative; width: 50px; height: 50px; text-align: center;">
                <button style="width: 100%; height: 100%; position: absolute; border: none; background: none;"></button>
                <${t} badge="${r.TEXT}" text="B" color="${o.PRIMARY}" border="${e}"></${t}>
                <div style="margin-top: 8px; font-size: 12px;">Border: ${e}</div>
              </div>
            `)}
        </div>
  `};var l,s,p;d.parameters={...d.parameters,docs:{...(l=d.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    badge: EnchantedBadgeType.TEXT,
    text: '12',
    color: EnchantedBadgeColor.PRIMARY,
    border: EnchantedBadgeBorder.NONE
  },
  render: ({
    badge,
    text,
    color,
    border
  }) => {
    return html\`
        <\${ENCHANTED_BADGE_TAG} badge="\${badge}" text="\${text}" color="\${color}" border="\${border}">
        </\${ENCHANTED_BADGE_TAG}>
    \`;
  }
}`,...(p=(s=d.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var c,g,b;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return html\`
        <h3>Badge Variants - Text</h3>
        <div style="display: flex; gap: 18px; flex-wrap: wrap; align-items: center;">
          \${Object.values(EnchantedBadgeColor).map(color => {
      return html\`
              <div style="position: relative; width: 50px; height: 50px; text-align: center;">
                <button style="width: 100%; height: 100%; position: absolute; border: none; background: none;"></button>
                <\${ENCHANTED_BADGE_TAG} badge="\${EnchantedBadgeType.TEXT}" text="12" color="\${color}" border="\${EnchantedBadgeBorder.DEFAULT}"></\${ENCHANTED_BADGE_TAG}>
                <div style="margin-top: 8px; font-size: 12px;">Color: \${color}</div>
              </div>
            \`;
    })}
        </div>
      
        <h3>Badge Variants - Dot</h3>
        <div style="display: flex; gap: 18px; flex-wrap: wrap; align-items: center;">
          \${Object.values(EnchantedBadgeColor).map(color => {
      return html\`
              <div style="position: relative; width: 50px; height: 50px; text-align: center;">
                <button style="width: 100%; height: 100%; position: absolute; border: none; background: none;"></button>
                <\${ENCHANTED_BADGE_TAG} badge="\${EnchantedBadgeType.DOT}" color="\${color}" border="\${EnchantedBadgeBorder.DEFAULT}"></\${ENCHANTED_BADGE_TAG}>
                <div style="margin-top: 8px; font-size: 12px;">Color: \${color}</div>
              </div>
            \`;
    })}
        </div>

        <h3>Badge Borders</h3>
        <div style="display: flex; gap: 18px; flex-wrap: wrap; align-items: center;">
          \${Object.values(EnchantedBadgeBorder).map(border => {
      return html\`
              <div style="position: relative; width: 50px; height: 50px; text-align: center;">
                <button style="width: 100%; height: 100%; position: absolute; border: none; background: none;"></button>
                <\${ENCHANTED_BADGE_TAG} badge="\${EnchantedBadgeType.TEXT}" text="B" color="\${EnchantedBadgeColor.PRIMARY}" border="\${border}"></\${ENCHANTED_BADGE_TAG}>
                <div style="margin-top: 8px; font-size: 12px;">Border: \${border}</div>
              </div>
            \`;
    })}
        </div>
  \`;
  }
}`,...(b=(g=i.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const m=["Default","AllStates"],T=Object.freeze(Object.defineProperty({__proto__:null,AllStates:i,Default:d,__namedExportsOrder:m,default:x},Symbol.toStringTag,{value:"Module"}));export{d as D,T as E};
