import{x as t}from"./iframe-I2cpem8U.js";import{n as d,t as k,E as w}from"./enchanted-ac-base-element-CYtj5YlD.js";import{F as s,E as p,g as c,h as b}from"./cssClassEnums-WDBe4U61.js";import"./index-CnkfAJEI.js";import"./enchanted-badge-BlgaPtpq.js";import"./preload-helper-C1FmrZbK.js";import"./state-0u-7W5Ce.js";import"./localization-D5pUJpuu.js";import"./index-ciz72CDE.js";var T=Object.defineProperty,E=Object.getOwnPropertyDescriptor,i=(e,a,l,r)=>{for(var n=r>1?void 0:r?E(a,l):a,h=e.length-1,x;h>=0;h--)(x=e[h])&&(n=(r?x(a,l,n):x(n))||n);return r&&n&&T(a,l,n),n};let o=class extends w{constructor(){super(...arguments),this.extended=!1,this.disabled=!1,this.label="",this.badge=!1}render(){return t`
      <enchanted-fab
        exportparts="${s.FAB}, ${s.FAB_RTL}, ${s.ICON}, ${s.LABEL}"
        ?extended=${this.extended}
        ?disabled=${this.disabled}
        .label=${this.label}
        .icon=${this.icon}
        ?badge=${this.badge}
      >
        <slot name="badge" slot="badge"></slot>
      </enchanted-fab>
    `}};i([d({type:Boolean,reflect:!0})],o.prototype,"extended",2);i([d({type:Boolean,reflect:!0})],o.prototype,"disabled",2);i([d()],o.prototype,"label",2);i([d()],o.prototype,"icon",2);i([d({type:Boolean,reflect:!0})],o.prototype,"badge",2);o=i([k("enchanted-fab-ai")],o);const V={title:"Input/enchanted-fab-ai",tags:["autodocs"],argTypes:{badge:{control:{type:"boolean"},description:"Whether to show the badge.",table:{category:"Badge",type:{summary:"boolean"},defaultValue:{summary:"false"}}},badgeType:{control:{type:"select"},options:Object.values(b),description:"The type of badge to display.",table:{category:"Badge",type:{summary:Object.values(b).join(" | ")},defaultValue:{summary:b.TEXT}},if:{arg:"badge",truthy:!0}},badgeText:{control:{type:"text"},description:"Text to display in the badge (when badgeType is text).",table:{category:"Badge",type:{summary:"string"},defaultValue:{summary:"5"}},if:{arg:"badge",truthy:!0}},badgeColor:{control:{type:"select"},options:Object.values(c),description:"Color of the badge.",table:{category:"Badge",type:{summary:Object.values(c).join(" | ")},defaultValue:{summary:c.PRIMARY}},if:{arg:"badge",truthy:!0}},badgeBorder:{control:{type:"select"},options:Object.values(p),description:"Border style of the badge.",table:{category:"Badge",type:{summary:Object.values(p).join(" | ")},defaultValue:{summary:p.NONE}},if:{arg:"badge",truthy:!0}},extended:{control:{type:"boolean"},description:"Whether the button is extended.",table:{category:"Behavior",type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"Whether the button is disabled.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},label:{control:{type:"text"},description:"The label for the button.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},icon:{control:{type:"select"},options:["ai-sparkle","arrows","circle","images"],description:"Select an icon from the enchanted-icon repository.",table:{category:"Content",type:{summary:"TemplateResult"},defaultValue:{summary:"ai-sparkle"}}}},args:{badge:!0,badgeType:b.TEXT,badgeText:"5",badgeColor:c.ERROR,badgeBorder:p.NONE,extended:!1,disabled:!1,label:"Text",icon:t`<icon-ai-sparkle></icon-ai-sparkle>`},parameters:{docs:{description:{component:'AI Button component using composition pattern. Wraps enchanted-fab internally with type locked to "contained" for consistent AI-specific styling. Exposes only the properties needed for AI variants (extended, disabled, icon, label, badge). The type property is not exposed to users, ensuring the AI theme is always applied.'}}},render:e=>{const a={"ai-sparkle":t`<icon-ai-sparkle></icon-ai-sparkle>`,arrows:t`<icon-arrows></icon-arrows>`,circle:t`<icon-circle></icon-circle>`,images:t`<icon-images></icon-images>`},l=typeof e.icon=="string"&&Object.prototype.hasOwnProperty.call(a,e.icon)?a[e.icon]:e.icon||t``;return t`
      <enchanted-fab-ai
        .badge=${e.badge}
        .extended=${e.extended}
        .disabled=${e.disabled}
        .label=${e.label}
        .icon=${l}
      >
        <enchanted-badge
          slot="badge"
          badge="${e.badgeType}"
          text="${e.badgeText}"
          border="${e.badgeBorder}"
          color="${e.badgeColor}"
        ></enchanted-badge>
      </enchanted-fab-ai>
    `}},f={},u={render:()=>t`
    <div style="position: relative; display: flex; flex-wrap: wrap; gap: 10px; padding: 20px;">
      <!-- AI Button States (Extended EnchantedFab) -->
      <div style="font-weight: bold; font-size:14px; position: absolute; top: 0; left: 20px;">Default</div>
      <enchanted-fab-ai
        style="position: relative; top: 10px; left: 5px;"
        .icon=${t`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab-ai>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 150px;">[Extended]</div>
      <enchanted-fab-ai
        style="position: relative; top: 10px; left: 70px;"
        .extended=${!0}
        .label=${"Text"}
        .icon=${t`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab-ai>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 320px;">[Badge]</div>
      <enchanted-fab-ai
        style="position: relative; top: 10px; left: 150px;"
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
      </enchanted-fab-ai>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 430px;">[Extended + Badge]</div>
      <enchanted-fab-ai
        style="position: relative; top: 10px; left: 230px;"
        .extended=${!0}
        .badge=${!0}
        .label=${"Text"}
        .icon=${t`<icon-ai-sparkle></icon-ai-sparkle>`}
      >
        <enchanted-badge
          slot="badge"
          badge="text"
          text="5"
          border="none"
          color="error"
        ></enchanted-badge>
      </enchanted-fab-ai>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 620px;">[Disabled]</div>
      <enchanted-fab-ai
        style="position: relative; top: 10px; left: 320px;"
        .disabled=${!0}
        .icon=${t`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab-ai>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 750px;">[Extended + Disabled]</div>
      <enchanted-fab-ai
        style="position: relative; top: 10px; left: 400px;"
        .extended=${!0}
        .disabled=${!0}
        .label=${"Text"}
        .icon=${t`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab-ai>
    </div>
  `,parameters:{controls:{disable:!0}}};var y,g,m;f.parameters={...f.parameters,docs:{...(y=f.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(m=(g=f.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var v,$,B;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    return html\`
    <div style="position: relative; display: flex; flex-wrap: wrap; gap: 10px; padding: 20px;">
      <!-- AI Button States (Extended EnchantedFab) -->
      <div style="font-weight: bold; font-size:14px; position: absolute; top: 0; left: 20px;">Default</div>
      <enchanted-fab-ai
        style="position: relative; top: 10px; left: 5px;"
        .icon=\${html\`<icon-ai-sparkle></icon-ai-sparkle>\`}
      ></enchanted-fab-ai>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 150px;">[Extended]</div>
      <enchanted-fab-ai
        style="position: relative; top: 10px; left: 70px;"
        .extended=\${true}
        .label=\${'Text'}
        .icon=\${html\`<icon-ai-sparkle></icon-ai-sparkle>\`}
      ></enchanted-fab-ai>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 320px;">[Badge]</div>
      <enchanted-fab-ai
        style="position: relative; top: 10px; left: 150px;"
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
      </enchanted-fab-ai>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 430px;">[Extended + Badge]</div>
      <enchanted-fab-ai
        style="position: relative; top: 10px; left: 230px;"
        .extended=\${true}
        .badge=\${true}
        .label=\${'Text'}
        .icon=\${html\`<icon-ai-sparkle></icon-ai-sparkle>\`}
      >
        <enchanted-badge
          slot="badge"
          badge="text"
          text="5"
          border="none"
          color="error"
        ></enchanted-badge>
      </enchanted-fab-ai>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 620px;">[Disabled]</div>
      <enchanted-fab-ai
        style="position: relative; top: 10px; left: 320px;"
        .disabled=\${true}
        .icon=\${html\`<icon-ai-sparkle></icon-ai-sparkle>\`}
      ></enchanted-fab-ai>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 750px;">[Extended + Disabled]</div>
      <enchanted-fab-ai
        style="position: relative; top: 10px; left: 400px;"
        .extended=\${true}
        .disabled=\${true}
        .label=\${'Text'}
        .icon=\${html\`<icon-ai-sparkle></icon-ai-sparkle>\`}
      ></enchanted-fab-ai>
    </div>
  \`;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(B=($=u.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};const R=["Default","AllStates"];export{u as AllStates,f as Default,R as __namedExportsOrder,V as default};
