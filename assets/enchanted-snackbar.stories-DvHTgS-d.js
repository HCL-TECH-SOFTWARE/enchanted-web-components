import{c as E,ae as p,E as h,v as $,u as i,g as s,n as u,af as t,s as o}from"./tags-DiA_3i88.js";import"./enchanted-circular-progress-NSEuCgAg.js";import{S as e,w as n}from"./cssClassEnums-WDBe4U61.js";import"./index-Cub2XWrN.js";import"./index-C4QMa-T0.js";import"./enchanted-button-N1GGdZJL.js";import"./iframe-CBMrvQ84.js";import"./preload-helper-C1FmrZbK.js";import"./index-CuTRIAwF.js";import"./tags-BNPDHufJ.js";import"./state-wm_82jA5.js";import"./localization-DpWuhKau.js";import"./keyboardEventKeys-BnoN8uA3.js";var B=Object.defineProperty,y=(a,m,l,f)=>{for(var r=void 0,d=a.length-1,g;d>=0;d--)(g=a[d])&&(r=g(m,l,r)||r);return r&&B(m,l,r),r};const b=E("enchanted-web-components:components:atomic-component:enchanted-snackbar.ts");class N extends h{constructor(){super(...arguments),this.message="",this.type=e.SNACKBAR_INFO}_renderPreElement(){if(e.SNACKBAR_PROGRESS==this.type)return i`
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
      `}}y([u({type:String})],N.prototype,"message");y([u({type:String})],N.prototype,"type");customElements.get(p)?b("Component (%s) is currently registered and not possible to registrate again.",p):customElements.define(p,N);const W={title:"Feedback/enchanted-snackbar",tags:["autodocs"],parameters:{docs:{description:{component:"The Snackbar component displays brief, temporary messages or notifications at the bottom of the screen. It supports five visual types (info, success, warning, error, progress) with corresponding icons, accepts HTML content in messages, and can include action buttons via slots. Use snackbars for non-critical feedback that doesn't require immediate user action."}}},argTypes:{message:{control:{type:"text"},description:"Message text displayed in the snackbar. Supports HTML formatting including bold text, line breaks, and other inline elements for rich content display.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},type:{control:{type:"select"},options:[e.SNACKBAR_INFO,e.SNACKBAR_SUCCESS,e.SNACKBAR_WARNING,e.SNACKBAR_ERROR,e.SNACKBAR_PROGRESS],description:"Visual type of the snackbar. Determines the icon and color scheme: info (information), success (checkmark), warning (alert), error (warning), or progress (circular spinner).",table:{category:"Display",type:{summary:"SNACKBAR_TYPE"},defaultValue:{summary:e.SNACKBAR_INFO}}}},args:{message:"Sample snackbar message",type:e.SNACKBAR_INFO},render:a=>i`
      <${t}
        message="${a.message}"
        .type="${a.type}"
      >
        <div slot="snackbar-buttons">
          <${o} buttontext="Action" variant="text"></${o}>
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
              <${o} buttontext="Undo" variant="text"></${o}>
            </div>
          </${t}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With Multiple Buttons</div>
          <${t} message="Connection lost" type="${e.SNACKBAR_ERROR}">
            <div slot="snackbar-buttons">
              <${o} buttontext="Retry" variant="text"></${o}>
              <${o} buttontext="Dismiss" variant="text"></${o}>
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
    `};var C,T,_;A.parameters={...A.parameters,docs:{...(C=A.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(_=(T=A.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var v,R,S;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(S=(R=c.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};const L=["Default","AllStates"];export{c as AllStates,A as Default,L as __namedExportsOrder,W as default};
