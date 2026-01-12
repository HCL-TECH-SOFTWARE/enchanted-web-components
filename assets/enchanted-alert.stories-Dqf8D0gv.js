import{E as p,x as s}from"./iframe-BY3ui3w0.js";import{n as A,t as g,l as y,E as I}from"./enchanted-ac-base-element-CBHL5x_U.js";import{a as e,b as t,c as a}from"./cssClassEnums-D4dgqifY.js";import"./index-Dq5aMPIz.js";import"./index-k8m2Essq.js";import"./preload-helper-C1FmrZbK.js";import"./index-F6NVQYd9.js";var S=Object.defineProperty,O=Object.getOwnPropertyDescriptor,o=(r,l,R,E)=>{for(var n=E>1?void 0:E?O(l,R):l,T=r.length-1,h;T>=0;T--)(h=r[T])&&(n=(E?h(l,R,n):h(n))||n);return E&&n&&S(l,R,n),n};let i=class extends I{constructor(){super(...arguments),this.message="",this.width=240,this.variant="contained",this.severity="info"}getAlertPart(){switch(this.severity){case e.ALERT_INFO:return this.variant===t.ALERT_CONTAINED?a.ALERT_CONTAINED_INFO:a.ALERT_OUTLINED_INFO;case e.ALERT_ERROR:return this.variant===t.ALERT_CONTAINED?a.ALERT_CONTAINED_ERROR:a.ALERT_OUTLINED_ERROR;case e.ALERT_WARNING:return this.variant===t.ALERT_CONTAINED?a.ALERT_CONTAINED_WARNING:a.ALERT_OUTLINED_WARNING;case e.ALERT_SUCCESS:return this.variant===t.ALERT_CONTAINED?a.ALERT_CONTAINED_SUCCESS:a.ALERT_OUTLINED_SUCCESS;default:return""}}getAlertIcon(){switch(this.severity){case e.ALERT_INFO:return s`<icon-information size="16" part="${this.getAlertSVG()}"></icon-information>`;case e.ALERT_ERROR:return s`<icon-warning size="16" part="${this.getAlertSVG()}"></icon-warning>`;case e.ALERT_WARNING:return s`<icon-warning-alt size="16" part="${this.getAlertSVG()}"></icon-warning-alt>`;case e.ALERT_SUCCESS:return s`<icon-checkmark-outline size="16" part="${this.getAlertSVG()}"></icon-checkmark-outline>`;default:return p}}getAlertSVG(){switch(this.severity){case e.ALERT_INFO:return a.ALERT_SVG_INFO;case e.ALERT_ERROR:return a.ALERT_SVG_ERROR;case e.ALERT_WARNING:return a.ALERT_SVG_WARNING;case e.ALERT_SUCCESS:return a.ALERT_SVG_SUCCESS;default:return""}}render(){return s`
      <div part="${a.ALERT_DIV_ROOT} ${this.getAlertPart()}" style="width:${this.width}px">
          ${this.getAlertIcon()}
          <span>${this.message}</span>
      </div>`}};o([A({type:String})],i.prototype,"message",2);o([A({type:Number})],i.prototype,"width",2);o([A({type:String})],i.prototype,"variant",2);o([A({type:String})],i.prototype,"severity",2);i=o([g("enchanted-alert"),y()],i);const b={title:"Feedback/enchanted-alert",component:"enchanted-alert",tags:["autodocs"],argTypes:{severity:{control:{type:"radio"},options:[e.ALERT_INFO,e.ALERT_SUCCESS,e.ALERT_WARNING,e.ALERT_ERROR],description:"Defines the severity level of the alert (info, success, warning, error)",table:{type:{summary:"string"},defaultValue:{summary:e.ALERT_INFO}}},variant:{control:{type:"radio"},options:[t.ALERT_CONTAINED,t.ALERT_OUTLINED],description:"Defines the visual style variant (contained with background, or outlined)",table:{type:{summary:"string"},defaultValue:{summary:t.ALERT_CONTAINED}}},message:{control:{type:"text"},description:"The message text to display in the alert",table:{type:{summary:"string"},defaultValue:{summary:""}}},width:{control:{type:"number",min:100,max:1e3,step:10},description:"Width of the alert in pixels",table:{type:{summary:"number"},defaultValue:{summary:"240"}}}},args:{severity:e.ALERT_INFO,variant:t.ALERT_CONTAINED,message:"This is a enchanted-alert!",width:240},parameters:{docs:{description:{component:"Alert component for displaying important messages to users with various severity levels. Supports two visual variants (contained and outlined) and four severity types (info, success, warning, error). Each severity level has a corresponding icon and color scheme."}}}},c={render:r=>s`
      <enchanted-alert 
        .message=${r.message} 
        .severity=${r.severity} 
        .variant=${r.variant}
        .width=${r.width}
      ></enchanted-alert>
    `,name:"Default",parameters:{docs:{description:{story:"Default alert with customizable severity, variant, message, and width. Try different severity levels to see the color schemes and icons change."}}}},d={render:()=>s`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div><strong>Contained Variant</strong></div>
      <enchanted-alert message="Info alert (contained)" severity="${e.ALERT_INFO}" variant="${t.ALERT_CONTAINED}"></enchanted-alert>
      <enchanted-alert message="Success alert (contained)" severity="${e.ALERT_SUCCESS}" variant="${t.ALERT_CONTAINED}"></enchanted-alert>
      <enchanted-alert message="Warning alert (contained)" severity="${e.ALERT_WARNING}" variant="${t.ALERT_CONTAINED}"></enchanted-alert>
      <enchanted-alert message="Error alert (contained)" severity="${e.ALERT_ERROR}" variant="${t.ALERT_CONTAINED}"></enchanted-alert>
      <div style="margin-top: 24px;"><strong>Outlined Variant</strong></div>
      <enchanted-alert message="Info alert (outlined)" severity="${e.ALERT_INFO}" variant="${t.ALERT_OUTLINED}"></enchanted-alert>
      <enchanted-alert message="Success alert (outlined)" severity="${e.ALERT_SUCCESS}" variant="${t.ALERT_OUTLINED}"></enchanted-alert>
      <enchanted-alert message="Warning alert (outlined)" severity="${e.ALERT_WARNING}" variant="${t.ALERT_OUTLINED}"></enchanted-alert>
      <enchanted-alert message="Error alert (outlined)" severity="${e.ALERT_ERROR}" variant="${t.ALERT_OUTLINED}"></enchanted-alert>
    </div>
  `,parameters:{docs:{description:{story:"Showcase of all severity levels (info, success, warning, error) in both contained and outlined variants. This demonstrates the complete range of alert styles available."}}}};var _,v,L;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <enchanted-alert 
        .message=\${args.message} 
        .severity=\${args.severity} 
        .variant=\${args.variant}
        .width=\${args.width}
      ></enchanted-alert>
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
}`,...(L=(v=c.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var m,u,N;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return html\`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div><strong>Contained Variant</strong></div>
      <enchanted-alert message="Info alert (contained)" severity="\${ALERT_SEVERITY.ALERT_INFO}" variant="\${ALERT_VARIANTS.ALERT_CONTAINED}"></enchanted-alert>
      <enchanted-alert message="Success alert (contained)" severity="\${ALERT_SEVERITY.ALERT_SUCCESS}" variant="\${ALERT_VARIANTS.ALERT_CONTAINED}"></enchanted-alert>
      <enchanted-alert message="Warning alert (contained)" severity="\${ALERT_SEVERITY.ALERT_WARNING}" variant="\${ALERT_VARIANTS.ALERT_CONTAINED}"></enchanted-alert>
      <enchanted-alert message="Error alert (contained)" severity="\${ALERT_SEVERITY.ALERT_ERROR}" variant="\${ALERT_VARIANTS.ALERT_CONTAINED}"></enchanted-alert>
      <div style="margin-top: 24px;"><strong>Outlined Variant</strong></div>
      <enchanted-alert message="Info alert (outlined)" severity="\${ALERT_SEVERITY.ALERT_INFO}" variant="\${ALERT_VARIANTS.ALERT_OUTLINED}"></enchanted-alert>
      <enchanted-alert message="Success alert (outlined)" severity="\${ALERT_SEVERITY.ALERT_SUCCESS}" variant="\${ALERT_VARIANTS.ALERT_OUTLINED}"></enchanted-alert>
      <enchanted-alert message="Warning alert (outlined)" severity="\${ALERT_SEVERITY.ALERT_WARNING}" variant="\${ALERT_VARIANTS.ALERT_OUTLINED}"></enchanted-alert>
      <enchanted-alert message="Error alert (outlined)" severity="\${ALERT_SEVERITY.ALERT_ERROR}" variant="\${ALERT_VARIANTS.ALERT_OUTLINED}"></enchanted-alert>
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
}`,...(N=(u=d.parameters)==null?void 0:u.docs)==null?void 0:N.source}}};const x=["EnchantedAlert","AllStates"];export{d as AllStates,c as EnchantedAlert,x as __namedExportsOrder,b as default};
