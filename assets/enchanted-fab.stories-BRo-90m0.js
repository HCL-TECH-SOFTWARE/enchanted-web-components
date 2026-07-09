import{m as e,b as i,g as t,u as n}from"./tags-CoVdckeD.js";import"./index-zE7OiFl-.js";import"./enchanted-badge-Df1lKWMF.js";import{J as o,r as d,s,t as r}from"./cssClassEnums-B0FxBdGx.js";const N={title:"Input/Enchanted Fab",tags:["a11y-addon"],argTypes:{badge:{control:{type:"boolean"},description:"Whether to show the badge.",table:{category:"Badge",type:{summary:"boolean"},defaultValue:{summary:"false"}}},badgeType:{control:{type:"select"},options:Object.values(r),description:"The type of badge to display.",table:{category:"Badge",type:{summary:Object.values(r).join(" | ")},defaultValue:{summary:r.TEXT}},if:{arg:"badge",truthy:!0}},badgeText:{control:{type:"text"},description:"Text to display in the badge (when badgeType is text).",table:{category:"Badge",type:{summary:"string"},defaultValue:{summary:"5"}},if:{arg:"badge",truthy:!0}},badgeColor:{control:{type:"select"},options:Object.values(s),description:"Color of the badge.",table:{category:"Badge",type:{summary:Object.values(s).join(" | ")},defaultValue:{summary:s.PRIMARY}},if:{arg:"badge",truthy:!0}},badgeBorder:{control:{type:"select"},options:Object.values(d),description:"Border style of the badge.",table:{category:"Badge",type:{summary:Object.values(d).join(" | ")},defaultValue:{summary:d.NONE}},if:{arg:"badge",truthy:!0}},type:{control:{type:"select"},options:Object.values(o),description:"The type of the FAB.",table:{category:"Appearance",type:{summary:Object.values(o).join(" | ")},defaultValue:{summary:o.CONTAINED}}},extended:{control:{type:"boolean"},description:"Whether the FAB is extended.",table:{category:"Behavior",type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"Whether the FAB is disabled.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},label:{control:{type:"text"},description:"The label for the FAB.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},icon:{control:{type:"select"},options:["ai-sparkle","arrows","circle","images"],description:"Select an icon from the enchanted-icon repository.",table:{category:"Content",type:{summary:"TemplateResult"},defaultValue:{summary:"undefined"}}}},args:{badge:!0,badgeType:r.TEXT,badgeText:"5",badgeColor:s.PRIMARY,badgeBorder:d.NONE,type:o.CONTAINED,extended:!1,disabled:!1,label:"Label",icon:void 0},parameters:{layout:"padded",docs:{description:{component:"Floating Action Button (FAB) component with support for badges, multiple types, and extended mode. Customizable via properties and slots for flexible usage in various contexts."}}},render:a=>{const $={"ai-sparkle":n`<${t("icon-ai-sparkle")}></${t("icon-ai-sparkle")}>`,arrows:n`<${t("icon-arrows")}></${t("icon-arrows")}>`,circle:n`<${t("icon-circle")}></${t("icon-circle")}>`,images:n`<${t("icon-images")}></${t("icon-images")}>`},E=typeof a.icon=="string"&&Object.prototype.hasOwnProperty.call($,a.icon)?$[a.icon]:a.icon;return n`
    <div style="display: flex; justify-content: center; align-items: center; height: 100%; padding: 32px;">
      <${e}
        .badge=${a.badge}
        .type=${a.type}
        .extended=${a.extended}
        .disabled=${a.disabled}
        .label=${a.label}
        .icon=${E}
      >
        <${i}
          slot="badge"
          badge="${a.badgeType}"
          text="${a.badgeText}"
          border="${a.badgeBorder}"
          color="${a.badgeColor}"
        ></${i}>
      </${e}>
    </div>
    `}},l={},p={render:()=>n`
    <div style="position: relative; display: flex; flex-wrap: wrap; gap: 10px; padding: 20px;">
      <!-- Contained Type -->
      <div style="font-weight: bold; font-size:14px; position: absolute; top: 0; left: 0px;">Contained Type</div>
      <${e}
        style="position: relative; top: 10px; left: 10px;"
        .type=${o.CONTAINED}
        .icon=${n`<${t("icon-ai-sparkle")}></${t("icon-ai-sparkle")}>`}
      ></${e}>
      
    <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 150px;">[Extended]</div>
      <${e}
        style="position: relative; top: 10px; left: 50px;"
        .type=${o.CONTAINED}
        .extended=${!0}
        .label=${"Extended"}
        .icon=${n`<${t("icon-ai-sparkle")}></${t("icon-ai-sparkle")}>`}
      ></${e}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 350px;">[Badge]</div>
      <${e}
        style="position: relative; top: 10px; left: 150px;"
        .type=${o.CONTAINED}
        .badge=${!0}
        .icon=${n`<${t("icon-ai-sparkle")}></${t("icon-ai-sparkle")}>`}
      >
        <${i}
          slot="badge"
          badge="dot"
          text="3"
          border="none"
          color="primary"
        ></${i}>
      </${e}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 450px;">[Extended + Badge]</div>
      <${e}
        style="position: relative; top: 10px; left: 200px;"
        .type=${o.CONTAINED}
        .extended=${!0}
        .badge=${!0}
        .label=${"Extended Badge"}
        .icon=${n`<${t("icon-ai-sparkle")}></${t("icon-ai-sparkle")}>`}
      >
        <${i}
          slot="badge"
          badge="text"
          text="5"
          border="none"
          color="error"
        ></${i}>
      </${e}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 680px;">[Disabled]</div>
      <${e}
        style="position: relative; top: 10px; left: 270px;"
        .type=${o.CONTAINED}
        .disabled=${!0}
        .icon=${n`<${t("icon-ai-sparkle")}></${t("icon-ai-sparkle")}>`}
      ></${e}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 800px;">[Extended + Disabled]</div>
      <${e}
        style="position: relative; top: 10px; left: 340px;"
        .type=${o.CONTAINED}
        .extended=${!0}
        .disabled=${!0}
        .label=${"Disabled"}
        .icon=${n`<${t("icon-ai-sparkle")}></${t("icon-ai-sparkle")}>`}
      ></${e}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 1000px;">[No Icon]</div>
      <${e}
        style="position: relative; top: 10px; left: 440px;"
        .type=${o.CONTAINED}
      ></${e}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 1100px;">[Extended + No Icon]</div>
      <${e}
        style="position: relative; top: 10px; left: 500px;"
        .type=${o.CONTAINED}
        .extended=${!0}
        .label=${"No Icon"}
      ></${e}>
      </div>
    <div style="position: relative; display: flex; flex-wrap: wrap; gap: 10px; padding: 20px;">
      <!-- Outlined Type -->
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 0px;">Outlined Type</div>
      <${e}
        style="position: relative; top: 140px; left: 10px;"
        .type=${o.OUTLINED}
        .icon=${n`<${t("icon-ai-sparkle")}></${t("icon-ai-sparkle")}>`}
      ></${e}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 150px;">[Extended]</div>
      <${e}
        style="position: relative; top: 140px; left: 50px;"
        .type=${o.OUTLINED}
        .extended=${!0}
        .label=${"Extended"}
        .icon=${n`<${t("icon-ai-sparkle")}></${t("icon-ai-sparkle")}>`}
      ></${e}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 350px;">[Badge]</div>
      <${e}
        style="position: relative; top: 140px; left: 150px;"
        .type=${o.OUTLINED}
        .badge=${!0}
        .icon=${n`<${t("icon-ai-sparkle")}></${t("icon-ai-sparkle")}>`}
      >
        <${i}
          slot="badge"
          badge="dot"
          border="none"
          color="primary"
        ></${i}>
      </${e}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 450px;">[Extended + Badge]</div>
      <${e}
        style="position: relative; top: 140px; left: 200px;"
        .type=${o.OUTLINED}
        .extended=${!0}
        .badge=${!0}
        .label=${"Extended Badge"}
        .icon=${n`<${t("icon-ai-sparkle")}></${t("icon-ai-sparkle")}>`}
      >
        <${i}
          slot="badge"
          badge="text"
          text="9"
          border="none"
          color="primary"
        ></${i}>
      </${e}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 680px;">[Disabled]</div>
      <${e}
        style="position: relative; top: 140px; left: 270px;"
        .type=${o.OUTLINED}
        .disabled=${!0}
        .icon=${n`<${t("icon-ai-sparkle")}></${t("icon-ai-sparkle")}>`}
      ></${e}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 800px;">[Extended + Disabled]</div>
      <${e}
        style="position: relative; top: 140px; left: 340px;"
        .type=${o.OUTLINED}
        .extended=${!0}
        .disabled=${!0}
        .label=${"Disabled"}
        .icon=${n`<${t("icon-ai-sparkle")}></${t("icon-ai-sparkle")}>`}
      ></${e}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 1000px;">[No Icon]</div>
      <${e}
        style="position: relative; top: 140px; left: 450px;"
        .type=${o.OUTLINED}
      ></${e}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 1100px;">[Extended + No Icon]</div>
      <${e}
        style="position: relative; top: 140px; left: 500px;"
        .type=${o.OUTLINED}
        .extended=${!0}
        .label=${"No Icon"}
      ></${e}>
      
      <!-- Removed AI Type examples -->
      </div>
    </div>
  `,parameters:{controls:{disable:!0}}};var c,x,b;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(b=(x=l.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,T,g;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    return html\`
    <div style="position: relative; display: flex; flex-wrap: wrap; gap: 10px; padding: 20px;">
      <!-- Contained Type -->
      <div style="font-weight: bold; font-size:14px; position: absolute; top: 0; left: 0px;">Contained Type</div>
      <\${ENCHANTED_FAB_TAG}
        style="position: relative; top: 10px; left: 10px;"
        .type=\${EnchantedFabType.CONTAINED}
        .icon=\${html\`<\${generateIconTagName('icon-ai-sparkle')}></\${generateIconTagName('icon-ai-sparkle')}>\`}
      ></\${ENCHANTED_FAB_TAG}>
      
    <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 150px;">[Extended]</div>
      <\${ENCHANTED_FAB_TAG}
        style="position: relative; top: 10px; left: 50px;"
        .type=\${EnchantedFabType.CONTAINED}
        .extended=\${true}
        .label=\${'Extended'}
        .icon=\${html\`<\${generateIconTagName('icon-ai-sparkle')}></\${generateIconTagName('icon-ai-sparkle')}>\`}
      ></\${ENCHANTED_FAB_TAG}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 350px;">[Badge]</div>
      <\${ENCHANTED_FAB_TAG}
        style="position: relative; top: 10px; left: 150px;"
        .type=\${EnchantedFabType.CONTAINED}
        .badge=\${true}
        .icon=\${html\`<\${generateIconTagName('icon-ai-sparkle')}></\${generateIconTagName('icon-ai-sparkle')}>\`}
      >
        <\${ENCHANTED_BADGE_TAG}
          slot="badge"
          badge="dot"
          text="3"
          border="none"
          color="primary"
        ></\${ENCHANTED_BADGE_TAG}>
      </\${ENCHANTED_FAB_TAG}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 450px;">[Extended + Badge]</div>
      <\${ENCHANTED_FAB_TAG}
        style="position: relative; top: 10px; left: 200px;"
        .type=\${EnchantedFabType.CONTAINED}
        .extended=\${true}
        .badge=\${true}
        .label=\${'Extended Badge'}
        .icon=\${html\`<\${generateIconTagName('icon-ai-sparkle')}></\${generateIconTagName('icon-ai-sparkle')}>\`}
      >
        <\${ENCHANTED_BADGE_TAG}
          slot="badge"
          badge="text"
          text="5"
          border="none"
          color="error"
        ></\${ENCHANTED_BADGE_TAG}>
      </\${ENCHANTED_FAB_TAG}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 680px;">[Disabled]</div>
      <\${ENCHANTED_FAB_TAG}
        style="position: relative; top: 10px; left: 270px;"
        .type=\${EnchantedFabType.CONTAINED}
        .disabled=\${true}
        .icon=\${html\`<\${generateIconTagName('icon-ai-sparkle')}></\${generateIconTagName('icon-ai-sparkle')}>\`}
      ></\${ENCHANTED_FAB_TAG}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 800px;">[Extended + Disabled]</div>
      <\${ENCHANTED_FAB_TAG}
        style="position: relative; top: 10px; left: 340px;"
        .type=\${EnchantedFabType.CONTAINED}
        .extended=\${true}
        .disabled=\${true}
        .label=\${'Disabled'}
        .icon=\${html\`<\${generateIconTagName('icon-ai-sparkle')}></\${generateIconTagName('icon-ai-sparkle')}>\`}
      ></\${ENCHANTED_FAB_TAG}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 1000px;">[No Icon]</div>
      <\${ENCHANTED_FAB_TAG}
        style="position: relative; top: 10px; left: 440px;"
        .type=\${EnchantedFabType.CONTAINED}
      ></\${ENCHANTED_FAB_TAG}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 1100px;">[Extended + No Icon]</div>
      <\${ENCHANTED_FAB_TAG}
        style="position: relative; top: 10px; left: 500px;"
        .type=\${EnchantedFabType.CONTAINED}
        .extended=\${true}
        .label=\${'No Icon'}
      ></\${ENCHANTED_FAB_TAG}>
      </div>
    <div style="position: relative; display: flex; flex-wrap: wrap; gap: 10px; padding: 20px;">
      <!-- Outlined Type -->
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 0px;">Outlined Type</div>
      <\${ENCHANTED_FAB_TAG}
        style="position: relative; top: 140px; left: 10px;"
        .type=\${EnchantedFabType.OUTLINED}
        .icon=\${html\`<\${generateIconTagName('icon-ai-sparkle')}></\${generateIconTagName('icon-ai-sparkle')}>\`}
      ></\${ENCHANTED_FAB_TAG}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 150px;">[Extended]</div>
      <\${ENCHANTED_FAB_TAG}
        style="position: relative; top: 140px; left: 50px;"
        .type=\${EnchantedFabType.OUTLINED}
        .extended=\${true}
        .label=\${'Extended'}
        .icon=\${html\`<\${generateIconTagName('icon-ai-sparkle')}></\${generateIconTagName('icon-ai-sparkle')}>\`}
      ></\${ENCHANTED_FAB_TAG}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 350px;">[Badge]</div>
      <\${ENCHANTED_FAB_TAG}
        style="position: relative; top: 140px; left: 150px;"
        .type=\${EnchantedFabType.OUTLINED}
        .badge=\${true}
        .icon=\${html\`<\${generateIconTagName('icon-ai-sparkle')}></\${generateIconTagName('icon-ai-sparkle')}>\`}
      >
        <\${ENCHANTED_BADGE_TAG}
          slot="badge"
          badge="dot"
          border="none"
          color="primary"
        ></\${ENCHANTED_BADGE_TAG}>
      </\${ENCHANTED_FAB_TAG}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 450px;">[Extended + Badge]</div>
      <\${ENCHANTED_FAB_TAG}
        style="position: relative; top: 140px; left: 200px;"
        .type=\${EnchantedFabType.OUTLINED}
        .extended=\${true}
        .badge=\${true}
        .label=\${'Extended Badge'}
        .icon=\${html\`<\${generateIconTagName('icon-ai-sparkle')}></\${generateIconTagName('icon-ai-sparkle')}>\`}
      >
        <\${ENCHANTED_BADGE_TAG}
          slot="badge"
          badge="text"
          text="9"
          border="none"
          color="primary"
        ></\${ENCHANTED_BADGE_TAG}>
      </\${ENCHANTED_FAB_TAG}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 680px;">[Disabled]</div>
      <\${ENCHANTED_FAB_TAG}
        style="position: relative; top: 140px; left: 270px;"
        .type=\${EnchantedFabType.OUTLINED}
        .disabled=\${true}
        .icon=\${html\`<\${generateIconTagName('icon-ai-sparkle')}></\${generateIconTagName('icon-ai-sparkle')}>\`}
      ></\${ENCHANTED_FAB_TAG}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 800px;">[Extended + Disabled]</div>
      <\${ENCHANTED_FAB_TAG}
        style="position: relative; top: 140px; left: 340px;"
        .type=\${EnchantedFabType.OUTLINED}
        .extended=\${true}
        .disabled=\${true}
        .label=\${'Disabled'}
        .icon=\${html\`<\${generateIconTagName('icon-ai-sparkle')}></\${generateIconTagName('icon-ai-sparkle')}>\`}
      ></\${ENCHANTED_FAB_TAG}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 1000px;">[No Icon]</div>
      <\${ENCHANTED_FAB_TAG}
        style="position: relative; top: 140px; left: 450px;"
        .type=\${EnchantedFabType.OUTLINED}
      ></\${ENCHANTED_FAB_TAG}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 1100px;">[Extended + No Icon]</div>
      <\${ENCHANTED_FAB_TAG}
        style="position: relative; top: 140px; left: 500px;"
        .type=\${EnchantedFabType.OUTLINED}
        .extended=\${true}
        .label=\${'No Icon'}
      ></\${ENCHANTED_FAB_TAG}>
      
      <!-- Removed AI Type examples -->
      </div>
    </div>
  \`;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(g=(T=p.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};const f=["Default","AllStates"],D=Object.freeze(Object.defineProperty({__proto__:null,AllStates:p,Default:l,__namedExportsOrder:f,default:N},Symbol.toStringTag,{value:"Module"}));export{l as D,D as E};
