import{c as B,I as m,a as I,m as A,u as a,n as p,J as o,b as i,g as e}from"./tags-CoVdckeD.js";import{F as g,r as u,s as y,t as $}from"./cssClassEnums-B0FxBdGx.js";import"./index-zE7OiFl-.js";import"./enchanted-badge-Df1lKWMF.js";var D=Object.defineProperty,c=(t,s,b,G)=>{for(var n=void 0,f=t.length-1,x;f>=0;f--)(x=t[f])&&(n=x(s,b,n)||n);return n&&D(s,b,n),n};const k=B("enchanted-web-components:components:atomic-component:enchanted-fab-ai.ts");class l extends I{constructor(){super(...arguments),this.extended=!1,this.disabled=!1,this.label="",this.badge=!1}render(){return a`
      <${A}
        exportparts="${g.FAB}, ${g.FAB_RTL}, ${g.ICON}, ${g.LABEL}"
        ?extended=${this.extended}
        ?disabled=${this.disabled}
        .label=${this.label}
        .icon=${this.icon}
        ?badge=${this.badge}
      >
        <slot name="badge" slot="badge"></slot>
      </${A}>
    `}}c([p({type:Boolean,reflect:!0})],l.prototype,"extended");c([p({type:Boolean,reflect:!0})],l.prototype,"disabled");c([p()],l.prototype,"label");c([p()],l.prototype,"icon");c([p({type:Boolean,reflect:!0})],l.prototype,"badge");customElements.get(m)?k("Component (%s) is currently registered and not possible to registrate again.",m):customElements.define(m,l);const C={title:"Input/Enchanted Fab AI",tags:["a11y-addon"],argTypes:{badge:{control:{type:"boolean"},description:"Whether to show the badge.",table:{category:"Badge",type:{summary:"boolean"},defaultValue:{summary:"false"}}},badgeType:{control:{type:"select"},options:Object.values($),description:"The type of badge to display.",table:{category:"Badge",type:{summary:Object.values($).join(" | ")},defaultValue:{summary:$.TEXT}},if:{arg:"badge",truthy:!0}},badgeText:{control:{type:"text"},description:"Text to display in the badge (when badgeType is text).",table:{category:"Badge",type:{summary:"string"},defaultValue:{summary:"5"}},if:{arg:"badge",truthy:!0}},badgeColor:{control:{type:"select"},options:Object.values(y),description:"Color of the badge.",table:{category:"Badge",type:{summary:Object.values(y).join(" | ")},defaultValue:{summary:y.PRIMARY}},if:{arg:"badge",truthy:!0}},badgeBorder:{control:{type:"select"},options:Object.values(u),description:"Border style of the badge.",table:{category:"Badge",type:{summary:Object.values(u).join(" | ")},defaultValue:{summary:u.NONE}},if:{arg:"badge",truthy:!0}},extended:{control:{type:"boolean"},description:"Whether the button is extended.",table:{category:"Behavior",type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"Whether the button is disabled.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},label:{control:{type:"text"},description:"The label for the button.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},icon:{control:{type:"select"},options:["ai-sparkle","arrows","circle","images"],description:"Select an icon from the enchanted-icon repository.",table:{category:"Content",type:{summary:"TemplateResult"},defaultValue:{summary:"ai-sparkle"}}}},args:{badge:!0,badgeType:$.TEXT,badgeText:"1",badgeColor:y.PRIMARY,badgeBorder:u.NONE,extended:!1,disabled:!1,label:"Label",icon:a`<${e("icon-ai-sparkle")}></${e("icon-ai-sparkle")}>`},parameters:{layout:"padded",docs:{description:{component:'AI Button component using composition pattern. Wraps enchanted-fab internally with type locked to "contained" for consistent AI-specific styling. Exposes only the properties needed for AI variants (extended, disabled, icon, label, badge). The type property is not exposed to users, ensuring the AI theme is always applied.'}}},render:t=>{const s={"ai-sparkle":a`<${e("icon-ai-sparkle")}></${e("icon-ai-sparkle")}>`,arrows:a`<${e("icon-arrows")}></${e("icon-arrows")}>`,circle:a`<${e("icon-circle")}></${e("icon-circle")}>`,images:a`<${e("icon-images")}></${e("icon-images")}>`},b=typeof t.icon=="string"&&Object.prototype.hasOwnProperty.call(s,t.icon)?s[t.icon]:t.icon||a``;return a`
    <div style="display: flex; justify-content: center; align-items: center; height: 100%; padding: 32px;">
      <${o}
        .badge=${t.badge}
        .extended=${t.extended}
        .disabled=${t.disabled}
        .label=${t.label}
        .icon=${b}
      >
        <${i}
          slot="badge"
          badge="${t.badgeType}"
          text="${t.badgeText}"
          border="${t.badgeBorder}"
          color="${t.badgeColor}"
        ></${i}>
      </${o}>
    </div>
    `}},r={},d={render:()=>a`
    <div style="position: relative; display: flex; flex-wrap: wrap; gap: 10px; padding: 20px;">
      <!-- AI Button States (Extended EnchantedFab) -->
      <div style="font-weight: bold; font-size:14px; position: absolute; top: 0; left: 20px;">Default</div>
      <${o}
        style="position: relative; top: 10px; left: 5px;"
        .icon=${a`<${e("icon-ai-sparkle")}></${e("icon-ai-sparkle")}>`}
      ></${o}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 150px;">[Extended]</div>
      <${o}
        style="position: relative; top: 10px; left: 70px;"
        .extended=${!0}
        label="Label"
        .icon=${a`<${e("icon-ai-sparkle")}></${e("icon-ai-sparkle")}>`}
      ></${o}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 320px;">[Badge]</div>
      <${o}
        style="position: relative; top: 10px; left: 150px;"
        .badge=${!0}
        .icon=${a`<${e("icon-ai-sparkle")}></${e("icon-ai-sparkle")}>`}
      >
        <${i}
          slot="badge"
          badge="dot"
          text="3"
          border="none"
          color="primary"
        ></${i}>
      </${o}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 430px;">[Extended + Badge]</div>
      <${o}
        style="position: relative; top: 10px; left: 230px;"
        .extended=${!0}
        .badge=${!0}
        label="Label"
        .icon=${a`<${e("icon-ai-sparkle")}></${e("icon-ai-sparkle")}>`}
      >
        <${i}
          slot="badge"
          badge="text"
          text="5"
          border="none"
          color="error"
        ></${i}>
      </${o}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 620px;">[Disabled]</div>
      <${o}
        style="position: relative; top: 10px; left: 320px;"
        .disabled=${!0}
        .icon=${a`<${e("icon-ai-sparkle")}></${e("icon-ai-sparkle")}>`}
      ></${o}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 750px;">[Extended + Disabled]</div>
      <${o}
        style="position: relative; top: 10px; left: 400px;"
        .extended=${!0}
        .disabled=${!0}
        label="Label"
        .icon=${a`<${e("icon-ai-sparkle")}></${e("icon-ai-sparkle")}>`}
      ></${o}>
    </div>
  `,parameters:{controls:{disable:!0}}};var E,T,h;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(h=(T=r.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var _,N,v;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    return html\`
    <div style="position: relative; display: flex; flex-wrap: wrap; gap: 10px; padding: 20px;">
      <!-- AI Button States (Extended EnchantedFab) -->
      <div style="font-weight: bold; font-size:14px; position: absolute; top: 0; left: 20px;">Default</div>
      <\${ENCHANTED_FAB_AI_TAG}
        style="position: relative; top: 10px; left: 5px;"
        .icon=\${html\`<\${generateIconTagName('icon-ai-sparkle')}></\${generateIconTagName('icon-ai-sparkle')}>\`}
      ></\${ENCHANTED_FAB_AI_TAG}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 150px;">[Extended]</div>
      <\${ENCHANTED_FAB_AI_TAG}
        style="position: relative; top: 10px; left: 70px;"
        .extended=\${true}
        label="Label"
        .icon=\${html\`<\${generateIconTagName('icon-ai-sparkle')}></\${generateIconTagName('icon-ai-sparkle')}>\`}
      ></\${ENCHANTED_FAB_AI_TAG}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 320px;">[Badge]</div>
      <\${ENCHANTED_FAB_AI_TAG}
        style="position: relative; top: 10px; left: 150px;"
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
      </\${ENCHANTED_FAB_AI_TAG}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 430px;">[Extended + Badge]</div>
      <\${ENCHANTED_FAB_AI_TAG}
        style="position: relative; top: 10px; left: 230px;"
        .extended=\${true}
        .badge=\${true}
        label="Label"
        .icon=\${html\`<\${generateIconTagName('icon-ai-sparkle')}></\${generateIconTagName('icon-ai-sparkle')}>\`}
      >
        <\${ENCHANTED_BADGE_TAG}
          slot="badge"
          badge="text"
          text="5"
          border="none"
          color="error"
        ></\${ENCHANTED_BADGE_TAG}>
      </\${ENCHANTED_FAB_AI_TAG}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 620px;">[Disabled]</div>
      <\${ENCHANTED_FAB_AI_TAG}
        style="position: relative; top: 10px; left: 320px;"
        .disabled=\${true}
        .icon=\${html\`<\${generateIconTagName('icon-ai-sparkle')}></\${generateIconTagName('icon-ai-sparkle')}>\`}
      ></\${ENCHANTED_FAB_AI_TAG}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 750px;">[Extended + Disabled]</div>
      <\${ENCHANTED_FAB_AI_TAG}
        style="position: relative; top: 10px; left: 400px;"
        .extended=\${true}
        .disabled=\${true}
        label="Label"
        .icon=\${html\`<\${generateIconTagName('icon-ai-sparkle')}></\${generateIconTagName('icon-ai-sparkle')}>\`}
      ></\${ENCHANTED_FAB_AI_TAG}>
    </div>
  \`;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(v=(N=d.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};const w=["Default","AllStates"],z=Object.freeze(Object.defineProperty({__proto__:null,AllStates:d,Default:r,__namedExportsOrder:w,default:C},Symbol.toStringTag,{value:"Module"}));export{r as D,z as E};
