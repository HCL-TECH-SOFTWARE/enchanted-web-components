import{c as B,Q as f,E as I,R as A,u as o,n as r,g as e,T as a,k as i}from"./tags-Dua8CojJ.js";import{F as c,E as b,g,h as u}from"./cssClassEnums-mKa0OyBd.js";import"./index-BFxN667Y.js";import"./enchanted-badge-C60MBd3C.js";import"./iframe-DNG6NGwD.js";import"./preload-helper-C1FmrZbK.js";import"./state-fRMCsTN1.js";import"./localization-Pwna_gtP.js";import"./tags-BViZhp05.js";var D=Object.defineProperty,d=(t,s,p,C)=>{for(var n=void 0,m=t.length-1,x;m>=0;m--)(x=t[m])&&(n=x(s,p,n)||n);return n&&D(s,p,n),n};const k=B("enchanted-web-components:components:atomic-component:enchanted-fab-ai.ts");class l extends I{constructor(){super(...arguments),this.extended=!1,this.disabled=!1,this.label="",this.badge=!1}render(){return o`
      <${A}
        exportparts="${c.FAB}, ${c.FAB_RTL}, ${c.ICON}, ${c.LABEL}"
        ?extended=${this.extended}
        ?disabled=${this.disabled}
        .label=${this.label}
        .icon=${this.icon}
        ?badge=${this.badge}
      >
        <slot name="badge" slot="badge"></slot>
      </${A}>
    `}}d([r({type:Boolean,reflect:!0})],l.prototype,"extended");d([r({type:Boolean,reflect:!0})],l.prototype,"disabled");d([r()],l.prototype,"label");d([r()],l.prototype,"icon");d([r({type:Boolean,reflect:!0})],l.prototype,"badge");customElements.get(f)?k("Component (%s) is currently registered and not possible to registrate again.",f):customElements.define(f,l);const V={title:"Input/enchanted-fab-ai",tags:["autodocs"],argTypes:{badge:{control:{type:"boolean"},description:"Whether to show the badge.",table:{category:"Badge",type:{summary:"boolean"},defaultValue:{summary:"false"}}},badgeType:{control:{type:"select"},options:Object.values(u),description:"The type of badge to display.",table:{category:"Badge",type:{summary:Object.values(u).join(" | ")},defaultValue:{summary:u.TEXT}},if:{arg:"badge",truthy:!0}},badgeText:{control:{type:"text"},description:"Text to display in the badge (when badgeType is text).",table:{category:"Badge",type:{summary:"string"},defaultValue:{summary:"5"}},if:{arg:"badge",truthy:!0}},badgeColor:{control:{type:"select"},options:Object.values(g),description:"Color of the badge.",table:{category:"Badge",type:{summary:Object.values(g).join(" | ")},defaultValue:{summary:g.PRIMARY}},if:{arg:"badge",truthy:!0}},badgeBorder:{control:{type:"select"},options:Object.values(b),description:"Border style of the badge.",table:{category:"Badge",type:{summary:Object.values(b).join(" | ")},defaultValue:{summary:b.NONE}},if:{arg:"badge",truthy:!0}},extended:{control:{type:"boolean"},description:"Whether the button is extended.",table:{category:"Behavior",type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"Whether the button is disabled.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},label:{control:{type:"text"},description:"The label for the button.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},icon:{control:{type:"select"},options:["ai-sparkle","arrows","circle","images"],description:"Select an icon from the enchanted-icon repository.",table:{category:"Content",type:{summary:"TemplateResult"},defaultValue:{summary:"ai-sparkle"}}}},args:{badge:!0,badgeType:u.TEXT,badgeText:"1",badgeColor:g.PRIMARY,badgeBorder:b.NONE,extended:!1,disabled:!1,label:"Label",icon:o`<${e("icon-ai-sparkle")}></${e("icon-ai-sparkle")}>`},parameters:{docs:{description:{component:'AI Button component using composition pattern. Wraps enchanted-fab internally with type locked to "contained" for consistent AI-specific styling. Exposes only the properties needed for AI variants (extended, disabled, icon, label, badge). The type property is not exposed to users, ensuring the AI theme is always applied.'}}},render:t=>{const s={"ai-sparkle":o`<${e("icon-ai-sparkle")}></${e("icon-ai-sparkle")}>`,arrows:o`<${e("icon-arrows")}></${e("icon-arrows")}>`,circle:o`<${e("icon-circle")}></${e("icon-circle")}>`,images:o`<${e("icon-images")}></${e("icon-images")}>`},p=typeof t.icon=="string"&&Object.prototype.hasOwnProperty.call(s,t.icon)?s[t.icon]:t.icon||o``;return o`
      <${a}
        .badge=${t.badge}
        .extended=${t.extended}
        .disabled=${t.disabled}
        .label=${t.label}
        .icon=${p}
      >
        <${i}
          slot="badge"
          badge="${t.badgeType}"
          text="${t.badgeText}"
          border="${t.badgeBorder}"
          color="${t.badgeColor}"
        ></${i}>
      </${a}>
    `}},$={},y={render:()=>o`
    <div style="position: relative; display: flex; flex-wrap: wrap; gap: 10px; padding: 20px;">
      <!-- AI Button States (Extended EnchantedFab) -->
      <div style="font-weight: bold; font-size:14px; position: absolute; top: 0; left: 20px;">Default</div>
      <${a}
        style="position: relative; top: 10px; left: 5px;"
        .icon=${o`<${e("icon-ai-sparkle")}></${e("icon-ai-sparkle")}>`}
      ></${a}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 150px;">[Extended]</div>
      <${a}
        style="position: relative; top: 10px; left: 70px;"
        .extended=${!0}
        label="Label"
        .icon=${o`<${e("icon-ai-sparkle")}></${e("icon-ai-sparkle")}>`}
      ></${a}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 320px;">[Badge]</div>
      <${a}
        style="position: relative; top: 10px; left: 150px;"
        .badge=${!0}
        .icon=${o`<${e("icon-ai-sparkle")}></${e("icon-ai-sparkle")}>`}
      >
        <${i}
          slot="badge"
          badge="dot"
          text="3"
          border="none"
          color="primary"
        ></${i}>
      </${a}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 430px;">[Extended + Badge]</div>
      <${a}
        style="position: relative; top: 10px; left: 230px;"
        .extended=${!0}
        .badge=${!0}
        label="Label"
        .icon=${o`<${e("icon-ai-sparkle")}></${e("icon-ai-sparkle")}>`}
      >
        <${i}
          slot="badge"
          badge="text"
          text="5"
          border="none"
          color="error"
        ></${i}>
      </${a}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 620px;">[Disabled]</div>
      <${a}
        style="position: relative; top: 10px; left: 320px;"
        .disabled=${!0}
        .icon=${o`<${e("icon-ai-sparkle")}></${e("icon-ai-sparkle")}>`}
      ></${a}>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 750px;">[Extended + Disabled]</div>
      <${a}
        style="position: relative; top: 10px; left: 400px;"
        .extended=${!0}
        .disabled=${!0}
        label="Label"
        .icon=${o`<${e("icon-ai-sparkle")}></${e("icon-ai-sparkle")}>`}
      ></${a}>
    </div>
  `,parameters:{controls:{disable:!0}}};var T,E,h;$.parameters={...$.parameters,docs:{...(T=$.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(h=(E=$.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var _,N,v;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(v=(N=y.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};const R=["Default","AllStates"];export{y as AllStates,$ as Default,R as __namedExportsOrder,V as default};
