import{E as g,x as n}from"./iframe-DgNdRKpa.js";import{n as o,t as p,l as u,D as O}from"./dx-ac-base-element-BRVmdAbS.js";import{a as e,b as t,c as r}from"./cssClassEnums-flPS6Iko.js";import"./index-DmYf0Wc2.js";import"./index-CLrtgfNa.js";import"./preload-helper-C1FmrZbK.js";import"./index-DaIQVsYU.js";var x=Object.defineProperty,y=Object.getOwnPropertyDescriptor,E=(a,A,d,R)=>{for(var s=R>1?void 0:R?y(A,d):A,_=a.length-1,L;_>=0;_--)(L=a[_])&&(s=(R?L(A,d,s):L(s))||s);return R&&s&&x(A,d,s),s};let i=class extends O{constructor(){super(...arguments),this.message="",this.width=240,this.variant="contained",this.severity="info"}getAlertPart(){switch(this.severity){case e.ALERT_INFO:return this.variant===t.ALERT_CONTAINED?r.ALERT_CONTAINED_INFO:r.ALERT_OUTLINED_INFO;case e.ALERT_ERROR:return this.variant===t.ALERT_CONTAINED?r.ALERT_CONTAINED_ERROR:r.ALERT_OUTLINED_ERROR;case e.ALERT_WARNING:return this.variant===t.ALERT_CONTAINED?r.ALERT_CONTAINED_WARNING:r.ALERT_OUTLINED_WARNING;case e.ALERT_SUCCESS:return this.variant===t.ALERT_CONTAINED?r.ALERT_CONTAINED_SUCCESS:r.ALERT_OUTLINED_SUCCESS;default:return""}}getAlertIcon(){switch(this.severity){case e.ALERT_INFO:return n`<icon-information size="16" part="${this.getAlertSVG()}"></icon-information>`;case e.ALERT_ERROR:return n`<icon-warning size="16" part="${this.getAlertSVG()}"></icon-warning>`;case e.ALERT_WARNING:return n`<icon-warning-alt size="16" part="${this.getAlertSVG()}"></icon-warning-alt>`;case e.ALERT_SUCCESS:return n`<icon-checkmark-outline size="16" part="${this.getAlertSVG()}"></icon-checkmark-outline>`;default:return g}}getAlertSVG(){switch(this.severity){case e.ALERT_INFO:return r.ALERT_SVG_INFO;case e.ALERT_ERROR:return r.ALERT_SVG_ERROR;case e.ALERT_WARNING:return r.ALERT_SVG_WARNING;case e.ALERT_SUCCESS:return r.ALERT_SVG_SUCCESS;default:return""}}render(){return n`
      <div part="${r.ALERT_DIV_ROOT} ${this.getAlertPart()}" style="width:${this.width}px">
          ${this.getAlertIcon()}
          <span>${this.message}</span>
      </div>`}};E([o({type:String})],i.prototype,"message",2);E([o({type:Number})],i.prototype,"width",2);E([o({type:String})],i.prototype,"variant",2);E([o({type:String})],i.prototype,"severity",2);i=E([p("dx-alert"),u()],i);const W={title:"Feedback/dx-alert",component:"dx-alert",tags:["autodocs"],argTypes:{severity:{control:{type:"radio"},options:[e.ALERT_INFO,e.ALERT_SUCCESS,e.ALERT_WARNING,e.ALERT_ERROR],description:"Severity of the alert",defaultValue:e.ALERT_INFO},variant:{control:{type:"radio"},options:[t.ALERT_CONTAINED,t.ALERT_OUTLINED],description:"Variant of the alert",defaultValue:t.ALERT_CONTAINED},message:{control:"text",description:"Alert message",defaultValue:"This is a dx-alert!"}},args:{severity:e.ALERT_INFO,variant:t.ALERT_CONTAINED,message:"This is a dx-alert!"},parameters:{docs:{description:{component:"Alert component for displaying important messages to users."}}}},T={render:a=>n`
      <dx-alert .message=${a.message} severity=${a.severity} variant=${a.variant}></dx-alert>
    `,name:"DxAlert"},l={render:()=>n`
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
  `,name:"All States (Severity × Variant)"};var N,c,I;T.parameters={...T.parameters,docs:{...(N=T.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <dx-alert .message=\${args.message} severity=\${args.severity} variant=\${args.variant}></dx-alert>
    \`;
  },
  name: 'DxAlert'
}`,...(I=(c=T.parameters)==null?void 0:c.docs)==null?void 0:I.source}}};var v,S,m;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
  name: 'All States (Severity × Variant)'
}`,...(m=(S=l.parameters)==null?void 0:S.docs)==null?void 0:m.source}}};const F=["DxAlert","AllStates"];export{l as AllStates,T as DxAlert,F as __namedExportsOrder,W as default};
