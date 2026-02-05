import{x as d}from"./iframe-I2cpem8U.js";import"./enchanted-badge-BlgaPtpq.js";import{E as t,g as n,h as a}from"./cssClassEnums-WDBe4U61.js";import"./preload-helper-C1FmrZbK.js";import"./enchanted-ac-base-element-CYtj5YlD.js";import"./localization-D5pUJpuu.js";const B={title:"Data display/enchanted-badge",component:"enchanted-badge",tags:["autodocs"],argTypes:{badge:{control:{type:"select"},options:Object.values(a),description:"Type of badge to display.",table:{category:"Appearance",type:{summary:Object.values(a).join(" | ")},defaultValue:{summary:a.TEXT}}},text:{control:{type:"text"},description:"Text to display inside the badge when badge type is text.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},color:{control:{type:"select"},options:Object.values(n),description:"Color of the badge.",table:{category:"Appearance",type:{summary:Object.values(n).join(" | ")},defaultValue:{summary:n.PRIMARY}}},border:{control:{type:"select"},options:Object.values(t),description:"Border style of the badge.",table:{category:"Appearance",type:{summary:Object.values(t).join(" | ")},defaultValue:{summary:t.DEFAULT}}}}},o={args:{badge:a.TEXT,text:"12",color:n.PRIMARY,border:t.NONE},render:({badge:e,text:b,color:h,border:x})=>d`
      <div style=" position: absolute;display: flex; justify-content: center; align-items: center; width: 20px; height: 20px; top: 50px; left: 50px;">
        <enchanted-badge badge="${e}" text="${b}" color="${h}" border="${x}">
        </enchanted-badge>
      </div>
    </div>
    `},r={render:()=>d`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h3>Badge Variants - Text</h3>
        <div style="display: flex; gap: 18px; flex-wrap: wrap; align-items: center;">
          ${Object.values(n).map(e=>d`
              <div style="position: relative; width: 50px; height: 50px; text-align: center;">
                <button style="width: 100%; height: 100%; position: absolute; border: none; background: none;"></button>
                <enchanted-badge badge="${a.TEXT}" text="12" color="${e}" border="${t.DEFAULT}"></enchanted-badge>
                <div style="margin-top: 8px; font-size: 12px;">Color: ${e}</div>
              </div>
            `)}
        </div>
      </div>

      <div>
        <h3>Badge Variants - Dot</h3>
        <div style="display: flex; gap: 18px; flex-wrap: wrap; align-items: center;">
          ${Object.values(n).map(e=>d`
              <div style="position: relative; width: 50px; height: 50px; text-align: center;">
                <button style="width: 100%; height: 100%; position: absolute; border: none; background: none;"></button>
                <enchanted-badge badge="${a.DOT}" color="${e}" border="${t.DEFAULT}"></enchanted-badge>
                <div style="margin-top: 8px; font-size: 12px;">Color: ${e}</div>
              </div>
            `)}
        </div>
      </div>

      <div>
        <h3>Badge Borders</h3>
        <div style="display: flex; gap: 18px; flex-wrap: wrap; align-items: center;">
          ${Object.values(t).map(e=>d`
              <div style="position: relative; width: 50px; height: 50px; text-align: center;">
                <button style="width: 100%; height: 100%; position: absolute; border: none; background: none;"></button>
                <enchanted-badge badge="${a.TEXT}" text="B" color="${n.PRIMARY}" border="${e}"></enchanted-badge>
                <div style="margin-top: 8px; font-size: 12px;">Border: ${e}</div>
              </div>
            `)}
        </div>
      </div>
    </div>
  `};var i,l,s;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
        <enchanted-badge badge="\${badge}" text="\${text}" color="\${color}" border="\${border}">
        </enchanted-badge>
      </div>
    </div>
    \`;
  }
}`,...(s=(l=o.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var p,c,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
                <enchanted-badge badge="\${EnchantedBadgeType.TEXT}" text="12" color="\${color}" border="\${EnchantedBadgeBorder.DEFAULT}"></enchanted-badge>
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
                <enchanted-badge badge="\${EnchantedBadgeType.DOT}" color="\${color}" border="\${EnchantedBadgeBorder.DEFAULT}"></enchanted-badge>
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
                <enchanted-badge badge="\${EnchantedBadgeType.TEXT}" text="B" color="\${EnchantedBadgeColor.PRIMARY}" border="\${border}"></enchanted-badge>
                <div style="margin-top: 8px; font-size: 12px;">Border: \${border}</div>
              </div>
            \`;
    })}
        </div>
      </div>
    </div>
  \`;
  }
}`,...(g=(c=r.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const E=["Default","AllVariants"];export{r as AllVariants,o as Default,E as __namedExportsOrder,B as default};
