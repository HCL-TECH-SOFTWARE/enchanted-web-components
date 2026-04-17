import{c as h,h as v,E as S,g as s,u as i,n as o,l as C,i as t}from"./tags-Dua8CojJ.js";import{E as $}from"./iframe-DNG6NGwD.js";import{a as e,b as r,c as n}from"./cssClassEnums-mKa0OyBd.js";import"./index-CdiZ5ito.js";import"./index-BPZws_1f.js";import"./preload-helper-C1FmrZbK.js";import"./index-CuTRIAwF.js";import"./tags-BViZhp05.js";var O=Object.defineProperty,D=Object.getOwnPropertyDescriptor,A=(a,R,c,l)=>{for(var T=l>1?void 0:l?D(R,c):R,d=a.length-1,L;d>=0;d--)(L=a[d])&&(T=(l?L(R,c,T):L(T))||T);return l&&T&&O(R,c,T),T};const f=h("enchanted-web-components:components:atomic-component:enchanted-alert.ts");let E=class extends S{constructor(){super(...arguments),this.message="",this.width=240,this.variant="contained",this.severity="info"}getAlertPart(){switch(this.severity){case e.ALERT_INFO:return this.variant===r.ALERT_CONTAINED?n.ALERT_CONTAINED_INFO:n.ALERT_OUTLINED_INFO;case e.ALERT_ERROR:return this.variant===r.ALERT_CONTAINED?n.ALERT_CONTAINED_ERROR:n.ALERT_OUTLINED_ERROR;case e.ALERT_WARNING:return this.variant===r.ALERT_CONTAINED?n.ALERT_CONTAINED_WARNING:n.ALERT_OUTLINED_WARNING;case e.ALERT_SUCCESS:return this.variant===r.ALERT_CONTAINED?n.ALERT_CONTAINED_SUCCESS:n.ALERT_OUTLINED_SUCCESS;default:return""}}getAlertIcon(){switch(this.severity){case e.ALERT_INFO:return i`<${s("icon-information")} size="16" part="${this.getAlertSVG()}"></${s("icon-information")}>`;case e.ALERT_ERROR:return i`<${s("icon-warning")} size="16" part="${this.getAlertSVG()}"></${s("icon-warning")}>`;case e.ALERT_WARNING:return i`<${s("icon-warning-alt")} size="16" part="${this.getAlertSVG()}"></${s("icon-warning-alt")}>`;case e.ALERT_SUCCESS:return i`<${s("icon-checkmark-outline")} size="16" part="${this.getAlertSVG()}"></${s("icon-checkmark-outline")}>`;default:return $}}getAlertSVG(){switch(this.severity){case e.ALERT_INFO:return n.ALERT_SVG_INFO;case e.ALERT_ERROR:return n.ALERT_SVG_ERROR;case e.ALERT_WARNING:return n.ALERT_SVG_WARNING;case e.ALERT_SUCCESS:return n.ALERT_SVG_SUCCESS;default:return""}}render(){return i`
      <div part="${n.ALERT_DIV_ROOT} ${this.getAlertPart()}" style="width:${this.width}px">
          ${this.getAlertIcon()}
          <div part="${n.ALERT_CONTENT}">
            ${this.alertTitle?i`<div part="${n.ALERT_TITLE}">${this.alertTitle}</div>`:$}
            <span>${this.message}</span>
          </div>
      </div>`}};A([o({type:String})],E.prototype,"message",2);A([o({type:String})],E.prototype,"alertTitle",2);A([o({type:Number})],E.prototype,"width",2);A([o({type:String})],E.prototype,"variant",2);A([o({type:String})],E.prototype,"severity",2);E=A([C()],E);customElements.get(v)?f("Component (%s) is currently registered and not possible to registrate again.",v):customElements.define(v,E);const Y={title:"Feedback/enchanted-alert",component:"enchanted-alert",tags:["autodocs"],argTypes:{severity:{control:{type:"radio"},options:[e.ALERT_INFO,e.ALERT_SUCCESS,e.ALERT_WARNING,e.ALERT_ERROR],description:"Defines the severity level of the alert (info, success, warning, error)",table:{type:{summary:"string"},defaultValue:{summary:e.ALERT_INFO}}},variant:{control:{type:"radio"},options:[r.ALERT_CONTAINED,r.ALERT_OUTLINED],description:"Defines the visual style variant (contained with background, or outlined)",table:{type:{summary:"string"},defaultValue:{summary:r.ALERT_CONTAINED}}},message:{control:{type:"text"},description:"The message text to display in the alert",table:{type:{summary:"string"},defaultValue:{summary:""}}},alertTitle:{control:{type:"text"},description:"Optional title text to display above the message",table:{type:{summary:"string | undefined"},defaultValue:{summary:"undefined"}}},width:{control:{type:"number",min:100,max:1e3,step:10},description:"Width of the alert in pixels",table:{type:{summary:"number"},defaultValue:{summary:"240"}}}},args:{severity:e.ALERT_INFO,variant:r.ALERT_CONTAINED,message:"This is a enchanted-alert!",width:240},parameters:{docs:{description:{component:"Alert component for displaying important messages to users with various severity levels. Supports two visual variants (contained and outlined) and four severity types (info, success, warning, error). Each severity level has a corresponding icon and color scheme."}}}},_={render:a=>i`
      <${t}
        .message=${a.message} 
        .severity=${a.severity} 
        .variant=${a.variant}
        .width=${a.width}
        .alertTitle=${a.alertTitle}
      ></${t}>
    `,name:"Default",parameters:{docs:{description:{story:"Default alert with customizable severity, variant, message, and width. Try different severity levels to see the color schemes and icons change."}}}},N={render:()=>i`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div><strong>Contained Variant</strong></div>
      <${t} message="Info alert (contained)" severity="${e.ALERT_INFO}" variant="${r.ALERT_CONTAINED}"></${t}>
      <${t} message="Success alert (contained)" severity="${e.ALERT_SUCCESS}" variant="${r.ALERT_CONTAINED}"></${t}>
      <${t} message="Warning alert (contained)" severity="${e.ALERT_WARNING}" variant="${r.ALERT_CONTAINED}"></${t}>
      <${t} message="Error alert (contained)" severity="${e.ALERT_ERROR}" variant="${r.ALERT_CONTAINED}"></${t}>
      <div style="margin-top: 24px;"><strong>Outlined Variant</strong></div>
      <${t} message="Info alert (outlined)" severity="${e.ALERT_INFO}" variant="${r.ALERT_OUTLINED}"></${t}>
      <${t} message="Success alert (outlined)" severity="${e.ALERT_SUCCESS}" variant="${r.ALERT_OUTLINED}"></${t}>
      <${t} message="Warning alert (outlined)" severity="${e.ALERT_WARNING}" variant="${r.ALERT_OUTLINED}"></${t}>
      <${t} message="Error alert (outlined)" severity="${e.ALERT_ERROR}" variant="${r.ALERT_OUTLINED}"></${t}>
      <div style="margin-top: 24px;"><strong>Alerts with Titles</strong></div>
      <${t} 
        alertTitle="Information" 
        message="This alert includes a title to provide additional context" 
        severity="${e.ALERT_INFO}" 
        variant="${r.ALERT_CONTAINED}"
        width="400">
      </${t}>
      <${t} 
        alertTitle="Success" 
        message="Your changes have been saved successfully" 
        severity="${e.ALERT_SUCCESS}" 
        variant="${r.ALERT_CONTAINED}"
        width="400">
      </${t}>
      <${t} 
        alertTitle="Warning" 
        message="Please review your input before proceeding" 
        severity="${e.ALERT_WARNING}" 
        variant="${r.ALERT_OUTLINED}"
        width="400">
      </${t}>
      <${t} 
        alertTitle="Error" 
        message="An error occurred while processing your request" 
        severity="${e.ALERT_ERROR}" 
        variant="${r.ALERT_CONTAINED}"
        width="400">
      </${t}>
    </div>
  `,parameters:{docs:{description:{story:"Showcase of all severity levels (info, success, warning, error) in both contained and outlined variants. This demonstrates the complete range of alert styles available."}}}};var m,u,p;_.parameters={..._.parameters,docs:{...(m=_.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <\${ENCHANTED_ALERT_TAG}
        .message=\${args.message} 
        .severity=\${args.severity} 
        .variant=\${args.variant}
        .width=\${args.width}
        .alertTitle=\${args.alertTitle}
      ></\${ENCHANTED_ALERT_TAG}>
    \`;
  },
  name: 'Default',
  parameters: {
    docs: {
      description: {
        story: 'Default alert with customizable severity, variant, message, and width. ' + 'Try different severity levels to see the color schemes and icons change.'
      }
    }
  }
}`,...(p=(u=_.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,y,I;N.parameters={...N.parameters,docs:{...(g=N.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return html\`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div><strong>Contained Variant</strong></div>
      <\${ENCHANTED_ALERT_TAG} message="Info alert (contained)" severity="\${ALERT_SEVERITY.ALERT_INFO}" variant="\${ALERT_VARIANTS.ALERT_CONTAINED}"></\${ENCHANTED_ALERT_TAG}>
      <\${ENCHANTED_ALERT_TAG} message="Success alert (contained)" severity="\${ALERT_SEVERITY.ALERT_SUCCESS}" variant="\${ALERT_VARIANTS.ALERT_CONTAINED}"></\${ENCHANTED_ALERT_TAG}>
      <\${ENCHANTED_ALERT_TAG} message="Warning alert (contained)" severity="\${ALERT_SEVERITY.ALERT_WARNING}" variant="\${ALERT_VARIANTS.ALERT_CONTAINED}"></\${ENCHANTED_ALERT_TAG}>
      <\${ENCHANTED_ALERT_TAG} message="Error alert (contained)" severity="\${ALERT_SEVERITY.ALERT_ERROR}" variant="\${ALERT_VARIANTS.ALERT_CONTAINED}"></\${ENCHANTED_ALERT_TAG}>
      <div style="margin-top: 24px;"><strong>Outlined Variant</strong></div>
      <\${ENCHANTED_ALERT_TAG} message="Info alert (outlined)" severity="\${ALERT_SEVERITY.ALERT_INFO}" variant="\${ALERT_VARIANTS.ALERT_OUTLINED}"></\${ENCHANTED_ALERT_TAG}>
      <\${ENCHANTED_ALERT_TAG} message="Success alert (outlined)" severity="\${ALERT_SEVERITY.ALERT_SUCCESS}" variant="\${ALERT_VARIANTS.ALERT_OUTLINED}"></\${ENCHANTED_ALERT_TAG}>
      <\${ENCHANTED_ALERT_TAG} message="Warning alert (outlined)" severity="\${ALERT_SEVERITY.ALERT_WARNING}" variant="\${ALERT_VARIANTS.ALERT_OUTLINED}"></\${ENCHANTED_ALERT_TAG}>
      <\${ENCHANTED_ALERT_TAG} message="Error alert (outlined)" severity="\${ALERT_SEVERITY.ALERT_ERROR}" variant="\${ALERT_VARIANTS.ALERT_OUTLINED}"></\${ENCHANTED_ALERT_TAG}>
      <div style="margin-top: 24px;"><strong>Alerts with Titles</strong></div>
      <\${ENCHANTED_ALERT_TAG} 
        alertTitle="Information" 
        message="This alert includes a title to provide additional context" 
        severity="\${ALERT_SEVERITY.ALERT_INFO}" 
        variant="\${ALERT_VARIANTS.ALERT_CONTAINED}"
        width="400">
      </\${ENCHANTED_ALERT_TAG}>
      <\${ENCHANTED_ALERT_TAG} 
        alertTitle="Success" 
        message="Your changes have been saved successfully" 
        severity="\${ALERT_SEVERITY.ALERT_SUCCESS}" 
        variant="\${ALERT_VARIANTS.ALERT_CONTAINED}"
        width="400">
      </\${ENCHANTED_ALERT_TAG}>
      <\${ENCHANTED_ALERT_TAG} 
        alertTitle="Warning" 
        message="Please review your input before proceeding" 
        severity="\${ALERT_SEVERITY.ALERT_WARNING}" 
        variant="\${ALERT_VARIANTS.ALERT_OUTLINED}"
        width="400">
      </\${ENCHANTED_ALERT_TAG}>
      <\${ENCHANTED_ALERT_TAG} 
        alertTitle="Error" 
        message="An error occurred while processing your request" 
        severity="\${ALERT_SEVERITY.ALERT_ERROR}" 
        variant="\${ALERT_VARIANTS.ALERT_CONTAINED}"
        width="400">
      </\${ENCHANTED_ALERT_TAG}>
    </div>
  \`;
  },
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all severity levels (info, success, warning, error) in both contained and outlined variants. ' + 'This demonstrates the complete range of alert styles available.'
      }
    }
  }
}`,...(I=(y=N.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const P=["EnchantedAlert","AllStates"];export{N as AllStates,_ as EnchantedAlert,P as __namedExportsOrder,Y as default};
