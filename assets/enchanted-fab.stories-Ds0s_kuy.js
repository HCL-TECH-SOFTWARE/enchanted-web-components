import{x as t}from"./iframe-I2cpem8U.js";import"./index-CnkfAJEI.js";import"./enchanted-badge-BlgaPtpq.js";import{o as e,E as a,g as o,h as i}from"./cssClassEnums-WDBe4U61.js";import"./preload-helper-C1FmrZbK.js";import"./enchanted-ac-base-element-CYtj5YlD.js";import"./state-0u-7W5Ce.js";import"./localization-D5pUJpuu.js";import"./index-ciz72CDE.js";const k={title:"Input/enchanted-fab",tags:["autodocs"],argTypes:{badge:{control:{type:"boolean"},description:"Whether to show the badge.",table:{category:"Badge",type:{summary:"boolean"},defaultValue:{summary:"false"}}},badgeType:{control:{type:"select"},options:Object.values(i),description:"The type of badge to display.",table:{category:"Badge",type:{summary:Object.values(i).join(" | ")},defaultValue:{summary:i.TEXT}},if:{arg:"badge",truthy:!0}},badgeText:{control:{type:"text"},description:"Text to display in the badge (when badgeType is text).",table:{category:"Badge",type:{summary:"string"},defaultValue:{summary:"5"}},if:{arg:"badge",truthy:!0}},badgeColor:{control:{type:"select"},options:Object.values(o),description:"Color of the badge.",table:{category:"Badge",type:{summary:Object.values(o).join(" | ")},defaultValue:{summary:o.PRIMARY}},if:{arg:"badge",truthy:!0}},badgeBorder:{control:{type:"select"},options:Object.values(a),description:"Border style of the badge.",table:{category:"Badge",type:{summary:Object.values(a).join(" | ")},defaultValue:{summary:a.NONE}},if:{arg:"badge",truthy:!0}},type:{control:{type:"select"},options:Object.values(e),description:"The type of the FAB.",table:{category:"Appearance",type:{summary:Object.values(e).join(" | ")},defaultValue:{summary:e.CONTAINED}}},extended:{control:{type:"boolean"},description:"Whether the FAB is extended.",table:{category:"Behavior",type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"Whether the FAB is disabled.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},label:{control:{type:"text"},description:"The label for the FAB.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},icon:{control:{type:"select"},options:["ai-sparkle","arrows","circle","images"],description:"Select an icon from the enchanted-icon repository.",table:{category:"Content",type:{summary:"TemplateResult"},defaultValue:{summary:"undefined"}}}},args:{badge:!0,badgeType:i.TEXT,badgeText:"5",badgeColor:o.ERROR,badgeBorder:a.NONE,type:e.CONTAINED,extended:!1,disabled:!1,label:"Text",icon:void 0},parameters:{docs:{description:{component:"Floating Action Button (FAB) component with support for badges, multiple types, and extended mode. Customizable via properties and slots for flexible usage in various contexts."}}},render:n=>{const l={"ai-sparkle":t`<icon-ai-sparkle></icon-ai-sparkle>`,arrows:t`<icon-arrows></icon-arrows>`,circle:t`<icon-circle></icon-circle>`,images:t`<icon-images></icon-images>`},y=typeof n.icon=="string"&&Object.prototype.hasOwnProperty.call(l,n.icon)?l[n.icon]:n.icon;return t`
      <enchanted-fab
        .badge=${n.badge}
        .type=${n.type}
        .extended=${n.extended}
        .disabled=${n.disabled}
        .label=${n.label}
        .icon=${y}
      >
        <enchanted-badge
          slot="badge"
          badge="${n.badgeType}"
          text="${n.badgeText}"
          border="${n.badgeBorder}"
          color="${n.badgeColor}"
        ></enchanted-badge>
      </enchanted-fab>
    `}},d={},p={render:()=>t`
    <div style="position: relative; display: flex; flex-wrap: wrap; gap: 10px; padding: 20px;">
      <!-- Contained Type -->
      <div style="font-weight: bold; font-size:14px; position: absolute; top: 0; left: 0px;">Contained Type</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 10px;"
        .type=${e.CONTAINED}
        .icon=${t`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
    <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 150px;">[Extended]</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 50px;"
        .type=${e.CONTAINED}
        .extended=${!0}
        .label=${"Extended"}
        .icon=${t`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 350px;">[Badge]</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 150px;"
        .type=${e.CONTAINED}
        .badge=${!0}
        .icon=${t`<icon-ai-sparkle></icon-ai-sparkle>`}
      >
        <enchanted-badge
          slot="badge"
          badge="dot"
          text="3"
          border="none"
          color="primary"
        ></enchanted-badge>
      </enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 450px;">[Extended + Badge]</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 200px;"
        .type=${e.CONTAINED}
        .extended=${!0}
        .badge=${!0}
        .label=${"Extended Badge"}
        .icon=${t`<icon-ai-sparkle></icon-ai-sparkle>`}
      >
        <enchanted-badge
          slot="badge"
          badge="text"
          text="5"
          border="none"
          color="error"
        ></enchanted-badge>
      </enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 680px;">[Disabled]</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 270px;"
        .type=${e.CONTAINED}
        .disabled=${!0}
        .icon=${t`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 800px;">[Extended + Disabled]</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 340px;"
        .type=${e.CONTAINED}
        .extended=${!0}
        .disabled=${!0}
        .label=${"Disabled"}
        .icon=${t`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 1000px;">[No Icon]</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 440px;"
        .type=${e.CONTAINED}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 1100px;">[Extended + No Icon]</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 500px;"
        .type=${e.CONTAINED}
        .extended=${!0}
        .label=${"No Icon"}
      ></enchanted-fab>
      </div>
    <div style="position: relative; display: flex; flex-wrap: wrap; gap: 10px; padding: 20px;">
      <!-- Outlined Type -->
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 0px;">Outlined Type</div>
      <enchanted-fab
        style="position: relative; top: 140px; left: 10px;"
        .type=${e.OUTLINED}
        .icon=${t`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 150px;">[Extended]</div>
      <enchanted-fab
        style="position: relative; top: 140px; left: 50px;"
        .type=${e.OUTLINED}
        .extended=${!0}
        .label=${"Extended"}
        .icon=${t`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 350px;">[Badge]</div>
      <enchanted-fab
        style="position: relative; top: 140px; left: 150px;"
        .type=${e.OUTLINED}
        .badge=${!0}
        .icon=${t`<icon-ai-sparkle></icon-ai-sparkle>`}
      >
        <enchanted-badge
          slot="badge"
          badge="dot"
          border="none"
          color="primary"
        ></enchanted-badge>
      </enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 450px;">[Extended + Badge]</div>
      <enchanted-fab
        style="position: relative; top: 140px; left: 200px;"
        .type=${e.OUTLINED}
        .extended=${!0}
        .badge=${!0}
        .label=${"Extended Badge"}
        .icon=${t`<icon-ai-sparkle></icon-ai-sparkle>`}
      >
        <enchanted-badge
          slot="badge"
          badge="text"
          text="9"
          border="none"
          color="primary"
        ></enchanted-badge>
      </enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 680px;">[Disabled]</div>
      <enchanted-fab
        style="position: relative; top: 140px; left: 270px;"
        .type=${e.OUTLINED}
        .disabled=${!0}
        .icon=${t`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 800px;">[Extended + Disabled]</div>
      <enchanted-fab
        style="position: relative; top: 140px; left: 340px;"
        .type=${e.OUTLINED}
        .extended=${!0}
        .disabled=${!0}
        .label=${"Disabled"}
        .icon=${t`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 1000px;">[No Icon]</div>
      <enchanted-fab
        style="position: relative; top: 140px; left: 450px;"
        .type=${e.OUTLINED}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 1100px;">[Extended + No Icon]</div>
      <enchanted-fab
        style="position: relative; top: 140px; left: 500px;"
        .type=${e.OUTLINED}
        .extended=${!0}
        .label=${"No Icon"}
      ></enchanted-fab>
      
      <!-- Removed AI Type examples -->
      </div>
    </div>
  `,parameters:{controls:{disable:!0}}};var s,r,b;d.parameters={...d.parameters,docs:{...(s=d.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(b=(r=d.parameters)==null?void 0:r.docs)==null?void 0:b.source}}};var c,f,x;p.parameters={...p.parameters,docs:{...(c=p.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return html\`
    <div style="position: relative; display: flex; flex-wrap: wrap; gap: 10px; padding: 20px;">
      <!-- Contained Type -->
      <div style="font-weight: bold; font-size:14px; position: absolute; top: 0; left: 0px;">Contained Type</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 10px;"
        .type=\${EnchantedFabType.CONTAINED}
        .icon=\${html\`<icon-ai-sparkle></icon-ai-sparkle>\`}
      ></enchanted-fab>
      
    <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 150px;">[Extended]</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 50px;"
        .type=\${EnchantedFabType.CONTAINED}
        .extended=\${true}
        .label=\${'Extended'}
        .icon=\${html\`<icon-ai-sparkle></icon-ai-sparkle>\`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 350px;">[Badge]</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 150px;"
        .type=\${EnchantedFabType.CONTAINED}
        .badge=\${true}
        .icon=\${html\`<icon-ai-sparkle></icon-ai-sparkle>\`}
      >
        <enchanted-badge
          slot="badge"
          badge="dot"
          text="3"
          border="none"
          color="primary"
        ></enchanted-badge>
      </enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 450px;">[Extended + Badge]</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 200px;"
        .type=\${EnchantedFabType.CONTAINED}
        .extended=\${true}
        .badge=\${true}
        .label=\${'Extended Badge'}
        .icon=\${html\`<icon-ai-sparkle></icon-ai-sparkle>\`}
      >
        <enchanted-badge
          slot="badge"
          badge="text"
          text="5"
          border="none"
          color="error"
        ></enchanted-badge>
      </enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 680px;">[Disabled]</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 270px;"
        .type=\${EnchantedFabType.CONTAINED}
        .disabled=\${true}
        .icon=\${html\`<icon-ai-sparkle></icon-ai-sparkle>\`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 800px;">[Extended + Disabled]</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 340px;"
        .type=\${EnchantedFabType.CONTAINED}
        .extended=\${true}
        .disabled=\${true}
        .label=\${'Disabled'}
        .icon=\${html\`<icon-ai-sparkle></icon-ai-sparkle>\`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 1000px;">[No Icon]</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 440px;"
        .type=\${EnchantedFabType.CONTAINED}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 1100px;">[Extended + No Icon]</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 500px;"
        .type=\${EnchantedFabType.CONTAINED}
        .extended=\${true}
        .label=\${'No Icon'}
      ></enchanted-fab>
      </div>
    <div style="position: relative; display: flex; flex-wrap: wrap; gap: 10px; padding: 20px;">
      <!-- Outlined Type -->
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 0px;">Outlined Type</div>
      <enchanted-fab
        style="position: relative; top: 140px; left: 10px;"
        .type=\${EnchantedFabType.OUTLINED}
        .icon=\${html\`<icon-ai-sparkle></icon-ai-sparkle>\`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 150px;">[Extended]</div>
      <enchanted-fab
        style="position: relative; top: 140px; left: 50px;"
        .type=\${EnchantedFabType.OUTLINED}
        .extended=\${true}
        .label=\${'Extended'}
        .icon=\${html\`<icon-ai-sparkle></icon-ai-sparkle>\`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 350px;">[Badge]</div>
      <enchanted-fab
        style="position: relative; top: 140px; left: 150px;"
        .type=\${EnchantedFabType.OUTLINED}
        .badge=\${true}
        .icon=\${html\`<icon-ai-sparkle></icon-ai-sparkle>\`}
      >
        <enchanted-badge
          slot="badge"
          badge="dot"
          border="none"
          color="primary"
        ></enchanted-badge>
      </enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 450px;">[Extended + Badge]</div>
      <enchanted-fab
        style="position: relative; top: 140px; left: 200px;"
        .type=\${EnchantedFabType.OUTLINED}
        .extended=\${true}
        .badge=\${true}
        .label=\${'Extended Badge'}
        .icon=\${html\`<icon-ai-sparkle></icon-ai-sparkle>\`}
      >
        <enchanted-badge
          slot="badge"
          badge="text"
          text="9"
          border="none"
          color="primary"
        ></enchanted-badge>
      </enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 680px;">[Disabled]</div>
      <enchanted-fab
        style="position: relative; top: 140px; left: 270px;"
        .type=\${EnchantedFabType.OUTLINED}
        .disabled=\${true}
        .icon=\${html\`<icon-ai-sparkle></icon-ai-sparkle>\`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 800px;">[Extended + Disabled]</div>
      <enchanted-fab
        style="position: relative; top: 140px; left: 340px;"
        .type=\${EnchantedFabType.OUTLINED}
        .extended=\${true}
        .disabled=\${true}
        .label=\${'Disabled'}
        .icon=\${html\`<icon-ai-sparkle></icon-ai-sparkle>\`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 1000px;">[No Icon]</div>
      <enchanted-fab
        style="position: relative; top: 140px; left: 450px;"
        .type=\${EnchantedFabType.OUTLINED}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 1100px;">[Extended + No Icon]</div>
      <enchanted-fab
        style="position: relative; top: 140px; left: 500px;"
        .type=\${EnchantedFabType.OUTLINED}
        .extended=\${true}
        .label=\${'No Icon'}
      ></enchanted-fab>
      
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
}`,...(x=(f=p.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const O=["Default","AllStates"];export{p as AllStates,d as Default,O as __namedExportsOrder,k as default};
