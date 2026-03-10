import{k as t,u as a}from"./tags-xkLHt5Ez.js";import"./enchanted-badge-Cgwya0NM.js";import{E as n,g as o,h as r}from"./cssClassEnums-WDBe4U61.js";import"./iframe-C32rrkgB.js";import"./preload-helper-C1FmrZbK.js";import"./localization-BszdroIW.js";const A={title:"Data display/enchanted-badge",component:"enchanted-badge",tags:["autodocs"],argTypes:{badge:{control:{type:"select"},options:Object.values(r),description:"Type of badge to display.",table:{category:"Appearance",type:{summary:Object.values(r).join(" | ")},defaultValue:{summary:r.TEXT}}},text:{control:{type:"text"},description:"Text to display inside the badge when badge type is text.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},color:{control:{type:"select"},options:Object.values(o),description:"Color of the badge.",table:{category:"Appearance",type:{summary:Object.values(o).join(" | ")},defaultValue:{summary:o.PRIMARY}}},border:{control:{type:"select"},options:Object.values(n),description:"Border style of the badge.",table:{category:"Appearance",type:{summary:Object.values(n).join(" | ")},defaultValue:{summary:n.DEFAULT}}}}},i={args:{badge:r.TEXT,text:"12",color:o.PRIMARY,border:n.NONE},render:({badge:e,text:x,color:h,border:u})=>a`
      <div style=" position: absolute;display: flex; justify-content: center; align-items: center; width: 20px; height: 20px; top: 50px; left: 50px;">
        <${t} badge="${e}" text="${x}" color="${h}" border="${u}">
        </${t}>
      </div>
    </div>
    `},d={render:()=>a`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
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
      </div>

      <div>
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
      </div>

      <div>
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
      </div>
    </div>
  `};var l,s,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
      <div style=" position: absolute;display: flex; justify-content: center; align-items: center; width: 20px; height: 20px; top: 50px; left: 50px;">
        <\${ENCHANTED_BADGE_TAG} badge="\${badge}" text="\${text}" color="\${color}" border="\${border}">
        </\${ENCHANTED_BADGE_TAG}>
      </div>
    </div>
    \`;
  }
}`,...(p=(s=i.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var c,g,b;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return html\`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
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
      </div>

      <div>
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
      </div>

      <div>
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
      </div>
    </div>
  \`;
  }
}`,...(b=(g=d.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const B=["Default","AllVariants"];export{d as AllVariants,i as Default,B as __namedExportsOrder,A as default};
