import{a as D,E as v,x as e}from"./iframe-Bl462ZXk.js";import{n as s,t as A,L as z}from"./enchanted-ac-base-element-D6hCixC-.js";import{r as F}from"./state-BWRILggY.js";import{g as M}from"./localization-52_TdTxi.js";import{o as n,F as d,E as c,g as b,h as f}from"./cssClassEnums-DRCAaF3v.js";import"./enchanted-badge-CGu3i4Vs.js";import{c as y,B as u,a as g}from"./index-C79KgSGt.js";import"./preload-helper-C1FmrZbK.js";var R=Object.defineProperty,V=Object.getOwnPropertyDescriptor,a=(t,i,p,r)=>{for(var l=r>1?void 0:r?V(i,p):i,m=t.length-1,$;m>=0;m--)($=t[m])&&(l=(r?$(i,p,l):$(l))||l);return r&&l&&R(i,p,l),l};let o=class extends D{constructor(){super(...arguments),this.type=n.CONTAINED,this.extended=!1,this.disabled=!1,this.label="",this.badge=!1,this.isLTR=M()===z.LTR}render(){return e`
      <button
        part="${this.isLTR?d.FAB:d.FAB_RTL}"
        ?disabled=${this.disabled}
        exportparts="${d.ICON}, ${d.LABEL}"
        aria-label=${this.label||""}
      >
        <span part="${d.ICON}">
          <slot name="icon">
            ${this.icon?this.icon:v}
          </slot>
        </span>
        ${this.extended&&this.label?e`<span part="${d.LABEL}">${this.label}</span>`:v}
      </button>
      ${this.badge?e`<slot name="badge">
          </slot>`:v}
    `}};a([s({reflect:!0})],o.prototype,"type",2);a([s({type:Boolean,reflect:!0})],o.prototype,"extended",2);a([s({type:Boolean,reflect:!0})],o.prototype,"disabled",2);a([s({type:Object})],o.prototype,"icon",2);a([s({type:String})],o.prototype,"label",2);a([s({type:Boolean,reflect:!0})],o.prototype,"badge",2);a([F()],o.prototype,"isLTR",2);o=a([A("enchanted-fab")],o);const j={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:32,height:32},_=[{elem:"path",attrs:{d:"M21.8119 14.3881L18.0667 4.26667L14.3214 14.3881L4.2 18.1333L14.3214 21.8786L18.0667 32L21.8119 21.8786L31.9333 18.1333L21.8119 14.3881ZM26.1484 18.1333L20.1911 15.929L18.0667 10.1877L15.9422 15.929L9.98497 18.1333L15.9422 20.3377L18.0667 26.0789L20.1911 20.3377L26.1484 18.1333ZM5.28213 7.4512L6.86667 11.7333L8.4512 7.4512L12.7333 5.86667L8.4512 4.28213L6.86667 0L5.28213 4.28213L1 5.86667L5.28213 7.4512ZM6.78497 5.86667L6.86667 5.8969L6.94836 5.86667L6.86667 5.83644L6.78497 5.86667Z",fill:"currentColor",stroke:"none",strokeLinejoin:"round",strokeMiterlimit:10,fillRule:"evenodd",clipRule:"evenodd"}}],E="icon-ai-sparkle";let U=class extends u{render(){return e`${g(_,j)}`}};y&&!customElements.get(E)&&customElements.define(E,U);const Z={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:32,height:32},S=[{elem:"path",attrs:{d:"M27.6 20.6L24 24.2 24 4 22 4 22 24.2 18.4 20.6 17 22 23 28 29 22zM9 4L3 10 4.4 11.4 8 7.8 8 28 10 28 10 7.8 13.6 11.4 15 10z",fill:"currentColor",stroke:"none",strokeLinejoin:"round",strokeMiterlimit:10}}],C="icon-arrows";let W=class extends u{render(){return e`${g(S,Z)}`}};y&&!customElements.get(C)&&customElements.define(C,W);const H={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:24,height:24},P=[{elem:"path",attrs:{d:"M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Z"}}],T="icon-circle";let X=class extends u{render(){return e`${g(P,H)}`}};y&&!customElements.get(T)&&customElements.define(T,X);const Y={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:24,height:24},q=[{elem:"path",attrs:{d:"M12 9C12.445 9 12.88 8.86804 13.25 8.6208C13.62 8.37357 13.9085 8.02217 14.0788 7.61103C14.249 7.1999 14.2936 6.7475 14.2068 6.31104C14.12 5.87459 13.9057 5.47367 13.591 5.15901C13.2763 4.84434 12.8754 4.63005 12.4389 4.54323C12.0025 4.45642 11.5501 4.50097 11.1389 4.67127C10.7278 4.84157 10.3764 5.12996 10.1292 5.49997C9.88198 5.86998 9.75 6.30499 9.75 6.75C9.75 7.34674 9.98704 7.91903 10.409 8.34099C10.831 8.76295 11.4033 9 12 9ZM12 6C12.1483 6 12.2933 6.04399 12.4167 6.1264C12.54 6.20881 12.6362 6.32594 12.6929 6.46299C12.7497 6.60003 12.7645 6.75083 12.7356 6.89632C12.7066 7.0418 12.6352 7.17544 12.5303 7.28033C12.4254 7.38522 12.2918 7.45665 12.1463 7.48558C12.0008 7.51452 11.85 7.49968 11.713 7.44291C11.5759 7.38614 11.4588 7.29001 11.3764 7.16668C11.294 7.04334 11.25 6.89833 11.25 6.75C11.25 6.55109 11.329 6.36032 11.4697 6.21967C11.6103 6.07902 11.8011 6 12 6Z",fill:"currentColor",stroke:"none",strokeLinejoin:"round",strokeMiterlimit:10,fillRule:"evenodd",clipRule:"evenodd"}},{elem:"path",attrs:{d:"M3 1.5H17.25C17.6478 1.5 18.0293 1.65803 18.3106 1.93934C18.5919 2.22064 18.75 2.60218 18.75 3V4.5H21C21.8284 4.5 22.5 5.17157 22.5 6V21C22.5 21.8284 21.8284 22.5 21 22.5H6C5.17157 22.5 4.5 21.8284 4.5 21V18.75H3C2.60218 18.75 2.22067 18.592 1.93936 18.3107C1.65806 18.0294 1.5 17.6478 1.5 17.25V3C1.5 2.60218 1.65806 2.22064 1.93936 1.93934C2.22067 1.65803 2.60218 1.5 3 1.5ZM6 18.75V21H21V6H18.75V17.25C18.75 17.6478 18.5919 18.0294 18.3106 18.3107C18.0293 18.592 17.6478 18.75 17.25 18.75H6ZM3 17.25H17.25V16.5L13.5 12.75L12.3075 13.9425C12.0264 14.2219 11.6463 14.3787 11.25 14.3787C10.8537 14.3787 10.4736 14.2219 10.1925 13.9425L6 9.75L3 12.75V17.25ZM14.5575 11.6925L17.25 14.3775V3H3V10.6275L4.94252 8.6925C5.22356 8.41312 5.60372 8.25631 6 8.25631C6.39628 8.25631 6.77644 8.41312 7.05748 8.6925L11.25 12.8775L12.4425 11.6925C12.7236 11.4131 13.1037 11.2563 13.5 11.2563C13.8963 11.2563 14.2764 11.4131 14.5575 11.6925Z",fill:"currentColor",stroke:"none",strokeLinejoin:"round",strokeMiterlimit:10,fillRule:"evenodd",clipRule:"evenodd"}}],L="icon-images";class G extends u{render(){return e`${g(q,Y)}`}}y&&!customElements.get(L)&&customElements.define(L,G);const se={title:"Input/enchanted-fab",tags:["autodocs"],argTypes:{badge:{control:{type:"boolean"},description:"Whether to show the badge.",table:{category:"Badge",type:{summary:"boolean"},defaultValue:{summary:"false"}}},badgeType:{control:{type:"select"},options:Object.values(f),description:"The type of badge to display.",table:{category:"Badge",type:{summary:Object.values(f).join(" | ")},defaultValue:{summary:f.TEXT}},if:{arg:"badge",truthy:!0}},badgeText:{control:{type:"text"},description:"Text to display in the badge (when badgeType is text).",table:{category:"Badge",type:{summary:"string"},defaultValue:{summary:"5"}},if:{arg:"badge",truthy:!0}},badgeColor:{control:{type:"select"},options:Object.values(b),description:"Color of the badge.",table:{category:"Badge",type:{summary:Object.values(b).join(" | ")},defaultValue:{summary:b.PRIMARY}},if:{arg:"badge",truthy:!0}},badgeBorder:{control:{type:"select"},options:Object.values(c),description:"Border style of the badge.",table:{category:"Badge",type:{summary:Object.values(c).join(" | ")},defaultValue:{summary:c.NONE}},if:{arg:"badge",truthy:!0}},type:{control:{type:"select"},options:Object.values(n),description:"The type of the FAB.",table:{category:"Appearance",type:{summary:Object.values(n).join(" | ")},defaultValue:{summary:n.CONTAINED}}},extended:{control:{type:"boolean"},description:"Whether the FAB is extended.",table:{category:"Behavior",type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"Whether the FAB is disabled.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},label:{control:{type:"text"},description:"The label for the FAB.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},icon:{control:{type:"select"},options:["ai-sparkle","arrows","circle","images"],description:"Select an icon from the enchanted-icon repository.",table:{category:"Content",type:{summary:"TemplateResult"},defaultValue:{summary:"ai-sparkle"}}}},args:{badge:!0,badgeType:f.TEXT,badgeText:"5",badgeColor:b.ERROR,badgeBorder:c.NONE,type:n.CONTAINED,extended:!1,disabled:!1,label:"Text",icon:e`<icon-ai-sparkle></icon-ai-sparkle>`},parameters:{docs:{description:{component:"Floating Action Button (FAB) component with support for badges, multiple types, and extended mode. Customizable via properties and slots for flexible usage in various contexts."}}},render:t=>{const i={"ai-sparkle":e`<icon-ai-sparkle></icon-ai-sparkle>`,arrows:e`<icon-arrows></icon-arrows>`,circle:e`<icon-circle></icon-circle>`,images:e`<icon-images></icon-images>`},p=typeof t.icon=="string"&&Object.prototype.hasOwnProperty.call(i,t.icon)?i[t.icon]:t.icon||e``;return e`
      <enchanted-fab
        .badge=${t.badge}
        .type=${t.type}
        .extended=${t.extended}
        .disabled=${t.disabled}
        .label=${t.label}
        .icon=${p}
      >
        <enchanted-badge
          slot="badge"
          badge="${t.badgeType}"
          text="${t.badgeText}"
          border="${t.badgeBorder}"
          color="${t.badgeColor}"
        ></enchanted-badge>
      </enchanted-fab>
    `}},h={},x={render:()=>e`
    <div style="position: relative; display: flex; flex-wrap: wrap; gap: 10px; padding: 20px;">
      <!-- Contained Type -->
      <div style="font-weight: bold; font-size:14px; position: absolute; top: 0; left: 0px;">Contained Type</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 10px;"
        .type=${n.CONTAINED}
        .icon=${e`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
    <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 150px;">[Extended]</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 50px;"
        .type=${n.CONTAINED}
        .extended=${!0}
        .label=${"Extended"}
        .icon=${e`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 350px;">[Badge]</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 150px;"
        .type=${n.CONTAINED}
        .badge=${!0}
        .icon=${e`<icon-ai-sparkle></icon-ai-sparkle>`}
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
        .type=${n.CONTAINED}
        .extended=${!0}
        .badge=${!0}
        .label=${"Extended Badge"}
        .icon=${e`<icon-ai-sparkle></icon-ai-sparkle>`}
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
        .type=${n.CONTAINED}
        .disabled=${!0}
        .icon=${e`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 0; left: 800px;">[Extended + Disabled]</div>
      <enchanted-fab
        style="position: relative; top: 10px; left: 340px;"
        .type=${n.CONTAINED}
        .extended=${!0}
        .disabled=${!0}
        .label=${"Disabled"}
        .icon=${e`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      
      <!-- Outlined Type -->
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 0px;">Outlined Type</div>
      <enchanted-fab
        style="position: relative; top: 130px; right: 570px;"
        .type=${n.OUTLINED}
        .icon=${e`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 150px;">[Extended]</div>
      <enchanted-fab
        style="position: relative; top: 130px; right: 528px;"
        .type=${n.OUTLINED}
        .extended=${!0}
        .label=${"Extended"}
        .icon=${e`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 350px;">[Badge]</div>
      <enchanted-fab
        style="position: relative; top: 130px; right: 428px;"
        .type=${n.OUTLINED}
        .badge=${!0}
        .icon=${e`<icon-ai-sparkle></icon-ai-sparkle>`}
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
        style="position: relative; top: 130px; right: 380px;"
        .type=${n.OUTLINED}
        .extended=${!0}
        .badge=${!0}
        .label=${"Extended Badge"}
        .icon=${e`<icon-ai-sparkle></icon-ai-sparkle>`}
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
        style="position: relative; top: 130px; right: 310px;"
        .type=${n.OUTLINED}
        .disabled=${!0}
        .icon=${e`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 800px;">[Extended + Disabled]</div>
      <enchanted-fab
        style="position: relative; top: 80px; left: 800px;"
        .type=${n.OUTLINED}
        .extended=${!0}
        .disabled=${!0}
        .label=${"Disabled"}
        .icon=${e`<icon-ai-sparkle></icon-ai-sparkle>`}
      ></enchanted-fab>
      
      <!-- Removed AI Type examples -->
      </div>
    </div>
  `,parameters:{controls:{disable:!0}}};var k,w,O;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(O=(w=h.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var N,I,B;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
      
      
      <!-- Outlined Type -->
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 0px;">Outlined Type</div>
      <enchanted-fab
        style="position: relative; top: 130px; right: 570px;"
        .type=\${EnchantedFabType.OUTLINED}
        .icon=\${html\`<icon-ai-sparkle></icon-ai-sparkle>\`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 150px;">[Extended]</div>
      <enchanted-fab
        style="position: relative; top: 130px; right: 528px;"
        .type=\${EnchantedFabType.OUTLINED}
        .extended=\${true}
        .label=\${'Extended'}
        .icon=\${html\`<icon-ai-sparkle></icon-ai-sparkle>\`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 350px;">[Badge]</div>
      <enchanted-fab
        style="position: relative; top: 130px; right: 428px;"
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
        style="position: relative; top: 130px; right: 380px;"
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
        style="position: relative; top: 130px; right: 310px;"
        .type=\${EnchantedFabType.OUTLINED}
        .disabled=\${true}
        .icon=\${html\`<icon-ai-sparkle></icon-ai-sparkle>\`}
      ></enchanted-fab>
      
      <div style="font-weight: bold; font-size: 14px; position: absolute; top: 120px; left: 800px;">[Extended + Disabled]</div>
      <enchanted-fab
        style="position: relative; top: 80px; left: 800px;"
        .type=\${EnchantedFabType.OUTLINED}
        .extended=\${true}
        .disabled=\${true}
        .label=\${'Disabled'}
        .icon=\${html\`<icon-ai-sparkle></icon-ai-sparkle>\`}
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
}`,...(B=(I=x.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};const pe=["Default","AllStates"];export{x as AllStates,h as Default,pe as __namedExportsOrder,se as default};
