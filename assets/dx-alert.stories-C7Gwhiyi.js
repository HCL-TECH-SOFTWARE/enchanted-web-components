import{E as g,x as n}from"./iframe-Dsd1MpWQ.js";import{n as R,t as y,l as I,D as S}from"./dx-ac-base-element-C9dhstFR.js";import{a as e,b as t,c as r}from"./cssClassEnums-v1h5zF5X.js";import"./index-oN6J18Ve.js";import"./index-BjNSVBJf.js";import"./preload-helper-C1FmrZbK.js";import"./index-BPZZDKKN.js";var h=Object.defineProperty,O=Object.getOwnPropertyDescriptor,o=(a,l,T,E)=>{for(var s=E>1?void 0:E?O(l,T):l,c=a.length-1,_;c>=0;c--)(_=a[c])&&(s=(E?_(l,T,s):_(s))||s);return E&&s&&h(l,T,s),s};let i=class extends S{constructor(){super(...arguments),this.message="",this.width=240,this.variant="contained",this.severity="info"}getAlertPart(){switch(this.severity){case e.ALERT_INFO:return this.variant===t.ALERT_CONTAINED?r.ALERT_CONTAINED_INFO:r.ALERT_OUTLINED_INFO;case e.ALERT_ERROR:return this.variant===t.ALERT_CONTAINED?r.ALERT_CONTAINED_ERROR:r.ALERT_OUTLINED_ERROR;case e.ALERT_WARNING:return this.variant===t.ALERT_CONTAINED?r.ALERT_CONTAINED_WARNING:r.ALERT_OUTLINED_WARNING;case e.ALERT_SUCCESS:return this.variant===t.ALERT_CONTAINED?r.ALERT_CONTAINED_SUCCESS:r.ALERT_OUTLINED_SUCCESS;default:return""}}getAlertIcon(){switch(this.severity){case e.ALERT_INFO:return n`<icon-information size="16" part="${this.getAlertSVG()}"></icon-information>`;case e.ALERT_ERROR:return n`<icon-warning size="16" part="${this.getAlertSVG()}"></icon-warning>`;case e.ALERT_WARNING:return n`<icon-warning-alt size="16" part="${this.getAlertSVG()}"></icon-warning-alt>`;case e.ALERT_SUCCESS:return n`<icon-checkmark-outline size="16" part="${this.getAlertSVG()}"></icon-checkmark-outline>`;default:return g}}getAlertSVG(){switch(this.severity){case e.ALERT_INFO:return r.ALERT_SVG_INFO;case e.ALERT_ERROR:return r.ALERT_SVG_ERROR;case e.ALERT_WARNING:return r.ALERT_SVG_WARNING;case e.ALERT_SUCCESS:return r.ALERT_SVG_SUCCESS;default:return""}}render(){return n`
      <div part="${r.ALERT_DIV_ROOT} ${this.getAlertPart()}" style="width:${this.width}px">
          ${this.getAlertIcon()}
          <span>${this.message}</span>
      </div>`}};o([R({type:String})],i.prototype,"message",2);o([R({type:Number})],i.prototype,"width",2);o([R({type:String})],i.prototype,"variant",2);o([R({type:String})],i.prototype,"severity",2);i=o([y("dx-alert"),I()],i);const G={title:"Feedback/dx-alert",component:"dx-alert",tags:["autodocs"],argTypes:{severity:{control:{type:"radio"},options:[e.ALERT_INFO,e.ALERT_SUCCESS,e.ALERT_WARNING,e.ALERT_ERROR],description:"Defines the severity level of the alert (info, success, warning, error)",table:{type:{summary:"string"},defaultValue:{summary:e.ALERT_INFO}}},variant:{control:{type:"radio"},options:[t.ALERT_CONTAINED,t.ALERT_OUTLINED],description:"Defines the visual style variant (contained with background, or outlined)",table:{type:{summary:"string"},defaultValue:{summary:t.ALERT_CONTAINED}}},message:{control:{type:"text"},description:"The message text to display in the alert",table:{type:{summary:"string"},defaultValue:{summary:""}}},width:{control:{type:"number",min:100,max:1e3,step:10},description:"Width of the alert in pixels",table:{type:{summary:"number"},defaultValue:{summary:"240"}}}},args:{severity:e.ALERT_INFO,variant:t.ALERT_CONTAINED,message:"This is a dx-alert!",width:240},parameters:{docs:{description:{component:"Alert component for displaying important messages to users with various severity levels. Supports two visual variants (contained and outlined) and four severity types (info, success, warning, error). Each severity level has a corresponding icon and color scheme."}}}},d={render:a=>n`
      <dx-alert 
        .message=${a.message} 
        .severity=${a.severity} 
        .variant=${a.variant}
        .width=${a.width}
      ></dx-alert>
    `,name:"Default",parameters:{docs:{description:{story:"Default alert with customizable severity, variant, message, and width. Try different severity levels to see the color schemes and icons change."}}}},A={render:()=>n`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div><strong>Contained Variant</strong></div>
      <dx-alert message="Info alert (contained)" severity="${e.ALERT_INFO}" variant="${t.ALERT_CONTAINED}"></dx-alert>
      <dx-alert message="Success alert (contained)" severity="${e.ALERT_SUCCESS}" variant="${t.ALERT_CONTAINED}"></dx-alert>
      <dx-alert message="Warning alert (contained)" severity="${e.ALERT_WARNING}" variant="${t.ALERT_CONTAINED}"></dx-alert>
      <dx-alert message="Error alert (contained)" severity="${e.ALERT_ERROR}" variant="${t.ALERT_CONTAINED}"></dx-alert>
      <div style="margin-top: 24px;"><strong>Outlined Variant</strong></div>
      <dx-alert message="Info alert (outlined)" severity="${e.ALERT_INFO}" variant="${t.ALERT_OUTLINED}"></dx-alert>
      <dx-alert message="Success alert (outlined)" severity="${e.ALERT_SUCCESS}" variant="${t.ALERT_OUTLINED}"></dx-alert>
      <dx-alert message="Warning alert (outlined)" severity="${e.ALERT_WARNING}" variant="${t.ALERT_OUTLINED}"></dx-alert>
      <dx-alert message="Error alert (outlined)" severity="${e.ALERT_ERROR}" variant="${t.ALERT_OUTLINED}"></dx-alert>
    </div>
  `,parameters:{docs:{description:{story:"Showcase of all severity levels (info, success, warning, error) in both contained and outlined variants. This demonstrates the complete range of alert styles available."}}}};var v,L,m;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <dx-alert 
        .message=\${args.message} 
        .severity=\${args.severity} 
        .variant=\${args.variant}
        .width=\${args.width}
      ></dx-alert>
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
}`,...(m=(L=d.parameters)==null?void 0:L.docs)==null?void 0:m.source}}};var u,N,p;A.parameters={...A.parameters,docs:{...(u=A.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    return html\`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div><strong>Contained Variant</strong></div>
      <dx-alert message="Info alert (contained)" severity="\${ALERT_SEVERITY.ALERT_INFO}" variant="\${ALERT_VARIANTS.ALERT_CONTAINED}"></dx-alert>
      <dx-alert message="Success alert (contained)" severity="\${ALERT_SEVERITY.ALERT_SUCCESS}" variant="\${ALERT_VARIANTS.ALERT_CONTAINED}"></dx-alert>
      <dx-alert message="Warning alert (contained)" severity="\${ALERT_SEVERITY.ALERT_WARNING}" variant="\${ALERT_VARIANTS.ALERT_CONTAINED}"></dx-alert>
      <dx-alert message="Error alert (contained)" severity="\${ALERT_SEVERITY.ALERT_ERROR}" variant="\${ALERT_VARIANTS.ALERT_CONTAINED}"></dx-alert>
      <div style="margin-top: 24px;"><strong>Outlined Variant</strong></div>
      <dx-alert message="Info alert (outlined)" severity="\${ALERT_SEVERITY.ALERT_INFO}" variant="\${ALERT_VARIANTS.ALERT_OUTLINED}"></dx-alert>
      <dx-alert message="Success alert (outlined)" severity="\${ALERT_SEVERITY.ALERT_SUCCESS}" variant="\${ALERT_VARIANTS.ALERT_OUTLINED}"></dx-alert>
      <dx-alert message="Warning alert (outlined)" severity="\${ALERT_SEVERITY.ALERT_WARNING}" variant="\${ALERT_VARIANTS.ALERT_OUTLINED}"></dx-alert>
      <dx-alert message="Error alert (outlined)" severity="\${ALERT_SEVERITY.ALERT_ERROR}" variant="\${ALERT_VARIANTS.ALERT_OUTLINED}"></dx-alert>
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
}`,...(p=(N=A.parameters)==null?void 0:N.docs)==null?void 0:p.source}}};const b=["DxAlert","AllStates"];export{A as AllStates,d as DxAlert,b as __namedExportsOrder,G as default};
