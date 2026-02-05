import{E as v,x as n}from"./iframe-I2cpem8U.js";import{n as o,t as g,l as y,E as I}from"./enchanted-ac-base-element-CYtj5YlD.js";import{a as e,b as t,c as r}from"./cssClassEnums-WDBe4U61.js";import"./index-KCGdeCo7.js";import"./index-CJMUiEEC.js";import"./preload-helper-C1FmrZbK.js";import"./index-CuTRIAwF.js";import"./index-ciz72CDE.js";var S=Object.defineProperty,O=Object.getOwnPropertyDescriptor,l=(a,E,A,c)=>{for(var s=c>1?void 0:c?O(E,A):E,R=a.length-1,h;R>=0;R--)(h=a[R])&&(s=(c?h(E,A,s):h(s))||s);return c&&s&&S(E,A,s),s};let i=class extends I{constructor(){super(...arguments),this.message="",this.width=240,this.variant="contained",this.severity="info"}getAlertPart(){switch(this.severity){case e.ALERT_INFO:return this.variant===t.ALERT_CONTAINED?r.ALERT_CONTAINED_INFO:r.ALERT_OUTLINED_INFO;case e.ALERT_ERROR:return this.variant===t.ALERT_CONTAINED?r.ALERT_CONTAINED_ERROR:r.ALERT_OUTLINED_ERROR;case e.ALERT_WARNING:return this.variant===t.ALERT_CONTAINED?r.ALERT_CONTAINED_WARNING:r.ALERT_OUTLINED_WARNING;case e.ALERT_SUCCESS:return this.variant===t.ALERT_CONTAINED?r.ALERT_CONTAINED_SUCCESS:r.ALERT_OUTLINED_SUCCESS;default:return""}}getAlertIcon(){switch(this.severity){case e.ALERT_INFO:return n`<icon-information size="16" part="${this.getAlertSVG()}"></icon-information>`;case e.ALERT_ERROR:return n`<icon-warning size="16" part="${this.getAlertSVG()}"></icon-warning>`;case e.ALERT_WARNING:return n`<icon-warning-alt size="16" part="${this.getAlertSVG()}"></icon-warning-alt>`;case e.ALERT_SUCCESS:return n`<icon-checkmark-outline size="16" part="${this.getAlertSVG()}"></icon-checkmark-outline>`;default:return v}}getAlertSVG(){switch(this.severity){case e.ALERT_INFO:return r.ALERT_SVG_INFO;case e.ALERT_ERROR:return r.ALERT_SVG_ERROR;case e.ALERT_WARNING:return r.ALERT_SVG_WARNING;case e.ALERT_SUCCESS:return r.ALERT_SVG_SUCCESS;default:return""}}render(){return n`
      <div part="${r.ALERT_DIV_ROOT} ${this.getAlertPart()}" style="width:${this.width}px">
          ${this.getAlertIcon()}
          <div part="${r.ALERT_CONTENT}">
            ${this.alertTitle?n`<div part="${r.ALERT_TITLE}">${this.alertTitle}</div>`:v}
            <span>${this.message}</span>
          </div>
      </div>`}};l([o({type:String})],i.prototype,"message",2);l([o({type:String})],i.prototype,"alertTitle",2);l([o({type:Number})],i.prototype,"width",2);l([o({type:String})],i.prototype,"variant",2);l([o({type:String})],i.prototype,"severity",2);i=l([g("enchanted-alert"),y()],i);const G={title:"Feedback/enchanted-alert",component:"enchanted-alert",tags:["autodocs"],argTypes:{severity:{control:{type:"radio"},options:[e.ALERT_INFO,e.ALERT_SUCCESS,e.ALERT_WARNING,e.ALERT_ERROR],description:"Defines the severity level of the alert (info, success, warning, error)",table:{type:{summary:"string"},defaultValue:{summary:e.ALERT_INFO}}},variant:{control:{type:"radio"},options:[t.ALERT_CONTAINED,t.ALERT_OUTLINED],description:"Defines the visual style variant (contained with background, or outlined)",table:{type:{summary:"string"},defaultValue:{summary:t.ALERT_CONTAINED}}},message:{control:{type:"text"},description:"The message text to display in the alert",table:{type:{summary:"string"},defaultValue:{summary:""}}},alertTitle:{control:{type:"text"},description:"Optional title text to display above the message",table:{type:{summary:"string | undefined"},defaultValue:{summary:"undefined"}}},width:{control:{type:"number",min:100,max:1e3,step:10},description:"Width of the alert in pixels",table:{type:{summary:"number"},defaultValue:{summary:"240"}}}},args:{severity:e.ALERT_INFO,variant:t.ALERT_CONTAINED,message:"This is a enchanted-alert!",width:240},parameters:{docs:{description:{component:"Alert component for displaying important messages to users with various severity levels. Supports two visual variants (contained and outlined) and four severity types (info, success, warning, error). Each severity level has a corresponding icon and color scheme."}}}},d={render:a=>n`
      <enchanted-alert 
        .message=${a.message} 
        .severity=${a.severity} 
        .variant=${a.variant}
        .width=${a.width}
        .alertTitle=${a.alertTitle}
      ></enchanted-alert>
    `,name:"Default",parameters:{docs:{description:{story:"Default alert with customizable severity, variant, message, and width. Try different severity levels to see the color schemes and icons change."}}}},T={render:()=>n`
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
      <div style="margin-top: 24px;"><strong>Alerts with Titles</strong></div>
      <enchanted-alert 
        alertTitle="Information" 
        message="This alert includes a title to provide additional context" 
        severity="${e.ALERT_INFO}" 
        variant="${t.ALERT_CONTAINED}"
        width="400">
      </enchanted-alert>
      <enchanted-alert 
        alertTitle="Success" 
        message="Your changes have been saved successfully" 
        severity="${e.ALERT_SUCCESS}" 
        variant="${t.ALERT_CONTAINED}"
        width="400">
      </enchanted-alert>
      <enchanted-alert 
        alertTitle="Warning" 
        message="Please review your input before proceeding" 
        severity="${e.ALERT_WARNING}" 
        variant="${t.ALERT_OUTLINED}"
        width="400">
      </enchanted-alert>
      <enchanted-alert 
        alertTitle="Error" 
        message="An error occurred while processing your request" 
        severity="${e.ALERT_ERROR}" 
        variant="${t.ALERT_CONTAINED}"
        width="400">
      </enchanted-alert>
    </div>
  `,parameters:{docs:{description:{story:"Showcase of all severity levels (info, success, warning, error) in both contained and outlined variants. This demonstrates the complete range of alert styles available."}}}};var _,L,u;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <enchanted-alert 
        .message=\${args.message} 
        .severity=\${args.severity} 
        .variant=\${args.variant}
        .width=\${args.width}
        .alertTitle=\${args.alertTitle}
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
}`,...(u=(L=d.parameters)==null?void 0:L.docs)==null?void 0:u.source}}};var N,m,p;T.parameters={...T.parameters,docs:{...(N=T.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
      <div style="margin-top: 24px;"><strong>Alerts with Titles</strong></div>
      <enchanted-alert 
        alertTitle="Information" 
        message="This alert includes a title to provide additional context" 
        severity="\${ALERT_SEVERITY.ALERT_INFO}" 
        variant="\${ALERT_VARIANTS.ALERT_CONTAINED}"
        width="400">
      </enchanted-alert>
      <enchanted-alert 
        alertTitle="Success" 
        message="Your changes have been saved successfully" 
        severity="\${ALERT_SEVERITY.ALERT_SUCCESS}" 
        variant="\${ALERT_VARIANTS.ALERT_CONTAINED}"
        width="400">
      </enchanted-alert>
      <enchanted-alert 
        alertTitle="Warning" 
        message="Please review your input before proceeding" 
        severity="\${ALERT_SEVERITY.ALERT_WARNING}" 
        variant="\${ALERT_VARIANTS.ALERT_OUTLINED}"
        width="400">
      </enchanted-alert>
      <enchanted-alert 
        alertTitle="Error" 
        message="An error occurred while processing your request" 
        severity="\${ALERT_SEVERITY.ALERT_ERROR}" 
        variant="\${ALERT_VARIANTS.ALERT_CONTAINED}"
        width="400">
      </enchanted-alert>
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
}`,...(p=(m=T.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const W=["EnchantedAlert","AllStates"];export{T as AllStates,d as EnchantedAlert,W as __namedExportsOrder,G as default};
