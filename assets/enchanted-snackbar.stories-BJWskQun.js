import{c as E,O as p,a as h,j as $,u as i,g as s,n as u,P as t,f as a}from"./tags-CoVdckeD.js";import"./enchanted-circular-progress-DVAC6kdd.js";import{Q as e,S as n}from"./cssClassEnums-B0FxBdGx.js";import"./index-BHCkbqoI.js";import"./index-Cu-SjR_S.js";import"./enchanted-button-D143v6g8.js";var b=Object.defineProperty,y=(o,l,m,x)=>{for(var r=void 0,d=o.length-1,g;d>=0;d--)(g=o[d])&&(r=g(l,m,r)||r);return r&&b(l,m,r),r};const B=E("enchanted-web-components:components:atomic-component:enchanted-snackbar.ts");class N extends h{constructor(){super(...arguments),this.message="",this.type=e.SNACKBAR_INFO}_renderPreElement(){if(e.SNACKBAR_PROGRESS==this.type)return i`
          <div part="${n.SNACKBAR_PROGRESS}">
            <${$}
              size="36" strokewidth="2"
              progresscolor="#B3D9F8"
              trackcolor="#ffffff26"
            />
          </div>
        `;switch(this.type){case e.SNACKBAR_INFO:return i`<${s("icon-information")} size="16" data-test-id="enchanted-snackbar-icon" part="${n.SNACKBAR_ICON} icon-${this.type}">
            </${s("icon-information")}>`;case e.SNACKBAR_WARNING:return i`<${s("icon-warning-alt")} size="16" data-test-id="enchanted-snackbar-icon" part="${n.SNACKBAR_ICON} icon-${this.type}">
            </${s("icon-warning-alt")}>`;case e.SNACKBAR_ERROR:return i`<${s("icon-warning")} size="16" data-test-id="enchanted-snackbar-icon" part="${n.SNACKBAR_ICON} icon-${this.type}">
            </${s("icon-warning")}>`;case e.SNACKBAR_SUCCESS:return i`<${s("icon-checkmark-outline")} size="16" part="${n.SNACKBAR_ICON} icon-${this.type}">
            </${s("icon-checkmark-outline")}>`}}render(){return i`
        <div part=${n.SNACKBAR_CONTAINER}>
          <div part=${n.SNACKBAR_ICON_CONTAINER}>${this._renderPreElement()}</div>
          <span
            data-testid="enchanted-snackbar-message"
            part=${n.SNACKBAR_MESSAGE}
            .innerHTML=${this.message}
          ></span>
          <div part=${n.SNACKBAR_BUTTON_CONTAINER}>
            <div part=${n.SNACKBAR_BUTTONS}><slot name="snackbar-buttons"></slot></div>
          </div>
        </div>
      `}}y([u({type:String})],N.prototype,"message");y([u({type:String})],N.prototype,"type");customElements.get(p)?B("Component (%s) is currently registered and not possible to registrate again.",p):customElements.define(p,N);const f={title:"Feedback/Enchanted Snackbar",tags:["a11y-addon"],parameters:{docs:{description:{component:"The Snackbar component displays brief, temporary messages or notifications at the bottom of the screen. It supports five visual types (info, success, warning, error, progress) with corresponding icons, accepts HTML content in messages, and can include action buttons via slots. Use snackbars for non-critical feedback that doesn't require immediate user action."}}},argTypes:{message:{control:{type:"text"},description:"Message text displayed in the snackbar. Supports HTML formatting including bold text, line breaks, and other inline elements for rich content display.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},type:{control:{type:"select"},options:[e.SNACKBAR_INFO,e.SNACKBAR_SUCCESS,e.SNACKBAR_WARNING,e.SNACKBAR_ERROR,e.SNACKBAR_PROGRESS],description:"Visual type of the snackbar. Determines the icon and color scheme: info (information), success (checkmark), warning (alert), error (warning), or progress (circular spinner).",table:{category:"Display",type:{summary:"SNACKBAR_TYPE"},defaultValue:{summary:e.SNACKBAR_INFO}}}},args:{message:"Sample snackbar message",type:e.SNACKBAR_INFO},render:o=>i`
      <${t}
        message="${o.message}"
        .type="${o.type}"
      >
        <div slot="snackbar-buttons">
          <${a} buttontext="Action" variant="text"></${a}>
        </div>
      </${t}>
    `},A={},c={parameters:{controls:{disable:!0},docs:{description:{story:`Comprehensive showcase of all snackbar types and variations:

**Visual Types:** Five distinct types with corresponding icons - info (information icon), success (checkmark), warning (alert icon), error (warning icon), and progress (circular spinner).

**Action Buttons:** Snackbars can include action buttons using the snackbar-buttons slot for interactions like "Undo" or "Retry".

**HTML Content:** Messages support HTML formatting for rich content including bold text, links, and line breaks.`}}},render:()=>i`
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Info Type</div>
          <${t} message="This is an informational message" type="${e.SNACKBAR_INFO}"></${t}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Success Type</div>
          <${t} message="Operation completed successfully!" type="${e.SNACKBAR_SUCCESS}"></${t}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Warning Type</div>
          <${t} message="Warning: Please review before proceeding" type="${e.SNACKBAR_WARNING}"></${t}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Error Type</div>
          <${t} message="Error: Unable to complete the operation" type="${e.SNACKBAR_ERROR}"></${t}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Progress Type</div>
          <${t} message="Processing your request..." type="${e.SNACKBAR_PROGRESS}"></${t}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With Action Button</div>
          <${t} message="File deleted" type="${e.SNACKBAR_INFO}">
            <div slot="snackbar-buttons">
              <${a} buttontext="Undo" variant="text"></${a}>
            </div>
          </${t}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With Multiple Buttons</div>
          <${t} message="Connection lost" type="${e.SNACKBAR_ERROR}">
            <div slot="snackbar-buttons">
              <${a} buttontext="Retry" variant="text"></${a}>
              <${a} buttontext="Dismiss" variant="text"></${a}>
            </div>
          </${t}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With HTML Content</div>
          <${t} message="This is a <strong>bold</strong> message with <em>emphasis</em>.<br>It spans multiple lines." type="${e.SNACKBAR_INFO}">
          </${t}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Long Message</div>
          <${t} message="This is a longer message that demonstrates how the snackbar handles extended text content. The component will wrap the text appropriately." 
            type="${e.SNACKBAR_WARNING}"></${t}>
        </div>
      </div>
    `};var C,_,T;A.parameters={...A.parameters,docs:{...(C=A.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(T=(_=A.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var S,v,R;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Comprehensive showcase of all snackbar types and variations:\\n\\n' + '**Visual Types:** Five distinct types with corresponding icons - info (information icon), success (checkmark), warning (alert icon), error (warning icon), and ' + 'progress (circular spinner).\\n\\n' + '**Action Buttons:** Snackbars can include action buttons using the snackbar-buttons slot for interactions like "Undo" or "Retry".\\n\\n' + '**HTML Content:** Messages support HTML formatting for rich content including bold text, links, and line breaks.'
      }
    }
  },
  render: () => {
    return html\`
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Info Type</div>
          <\${ENCHANTED_SNACKBAR_TAG} message="This is an informational message" type="\${SNACKBAR_TYPE.SNACKBAR_INFO}"></\${ENCHANTED_SNACKBAR_TAG}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Success Type</div>
          <\${ENCHANTED_SNACKBAR_TAG} message="Operation completed successfully!" type="\${SNACKBAR_TYPE.SNACKBAR_SUCCESS}"></\${ENCHANTED_SNACKBAR_TAG}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Warning Type</div>
          <\${ENCHANTED_SNACKBAR_TAG} message="Warning: Please review before proceeding" type="\${SNACKBAR_TYPE.SNACKBAR_WARNING}"></\${ENCHANTED_SNACKBAR_TAG}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Error Type</div>
          <\${ENCHANTED_SNACKBAR_TAG} message="Error: Unable to complete the operation" type="\${SNACKBAR_TYPE.SNACKBAR_ERROR}"></\${ENCHANTED_SNACKBAR_TAG}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Progress Type</div>
          <\${ENCHANTED_SNACKBAR_TAG} message="Processing your request..." type="\${SNACKBAR_TYPE.SNACKBAR_PROGRESS}"></\${ENCHANTED_SNACKBAR_TAG}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With Action Button</div>
          <\${ENCHANTED_SNACKBAR_TAG} message="File deleted" type="\${SNACKBAR_TYPE.SNACKBAR_INFO}">
            <div slot="snackbar-buttons">
              <\${ENCHANTED_BUTTON_TAG} buttontext="Undo" variant="text"></\${ENCHANTED_BUTTON_TAG}>
            </div>
          </\${ENCHANTED_SNACKBAR_TAG}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With Multiple Buttons</div>
          <\${ENCHANTED_SNACKBAR_TAG} message="Connection lost" type="\${SNACKBAR_TYPE.SNACKBAR_ERROR}">
            <div slot="snackbar-buttons">
              <\${ENCHANTED_BUTTON_TAG} buttontext="Retry" variant="text"></\${ENCHANTED_BUTTON_TAG}>
              <\${ENCHANTED_BUTTON_TAG} buttontext="Dismiss" variant="text"></\${ENCHANTED_BUTTON_TAG}>
            </div>
          </\${ENCHANTED_SNACKBAR_TAG}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With HTML Content</div>
          <\${ENCHANTED_SNACKBAR_TAG} message="This is a <strong>bold</strong> message with <em>emphasis</em>.<br>It spans multiple lines." type="\${SNACKBAR_TYPE.SNACKBAR_INFO}">
          </\${ENCHANTED_SNACKBAR_TAG}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Long Message</div>
          <\${ENCHANTED_SNACKBAR_TAG} message="This is a longer message that demonstrates how the snackbar handles extended text content. The component will wrap the text appropriately." 
            type="\${SNACKBAR_TYPE.SNACKBAR_WARNING}"></\${ENCHANTED_SNACKBAR_TAG}>
        </div>
      </div>
    \`;
  }
}`,...(R=(v=c.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};const K=["Default","AllStates"],I=Object.freeze(Object.defineProperty({__proto__:null,AllStates:c,Default:A,__namedExportsOrder:K,default:f},Symbol.toStringTag,{value:"Module"}));export{A as D,I as E};
