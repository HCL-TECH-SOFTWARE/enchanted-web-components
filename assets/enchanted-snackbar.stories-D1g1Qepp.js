import{x as t}from"./iframe-B8Ykn-0R.js";import{n as R,t as S,E as N}from"./enchanted-ac-base-element-BcyMwwt4.js";import"./enchanted-circular-progress-D8lL5Nbh.js";import{S as e,s as n}from"./cssClassEnums-D4dgqifY.js";import"./index-D4o3YmzN.js";import"./index-Dl-Vtdmr.js";import"./enchanted-button-DmMDoW_g.js";import"./preload-helper-C1FmrZbK.js";import"./index-DQxh_L8h.js";import"./state-DtTHjCak.js";import"./localization-Ca5Mq-1-.js";var k=Object.defineProperty,C=Object.getOwnPropertyDescriptor,h=(s,i,p,r)=>{for(var a=r>1?void 0:r?C(i,p):i,m=s.length-1,l;m>=0;m--)(l=s[m])&&(a=(r?l(i,p,a):l(a))||a);return r&&a&&k(i,p,a),a};let d=class extends N{constructor(){super(...arguments),this.message="",this.type=e.SNACKBAR_INFO}_renderPreElement(){if(e.SNACKBAR_PROGRESS==this.type)return t`
          <div part="${n.SNACKBAR_PROGRESS}">
            <enchanted-circular-progress
              size="36" strokewidth="2"
              progresscolor="#B3D9F8"
              trackcolor="#ffffff26"
            />
          </div>
        `;switch(this.type){case e.SNACKBAR_INFO:return t`<icon-information size="16" data-test-id="enchanted-snackbar-icon" part="${n.SNACKBAR_ICON} icon-${this.type}"></icon-information>`;case e.SNACKBAR_WARNING:return t`<icon-warning-alt size="16" data-test-id="enchanted-snackbar-icon" part="${n.SNACKBAR_ICON} icon-${this.type}"></icon-warning-alt>`;case e.SNACKBAR_ERROR:return t`<icon-warning size="16" data-test-id="enchanted-snackbar-icon" part="${n.SNACKBAR_ICON} icon-${this.type}"></icon-warning>`;case e.SNACKBAR_SUCCESS:return t`<icon-checkmark-outline size="16" part="${n.SNACKBAR_ICON} icon-${this.type}"></icon-checkmark-outline>`}}render(){return t`
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
      `}};h([R({type:String})],d.prototype,"message",2);h([R({type:String})],d.prototype,"type",2);d=h([S("enchanted-snackbar")],d);const P={title:"Feedback/enchanted-snackbar",tags:["autodocs"],parameters:{docs:{description:{component:"The Snackbar component displays brief, temporary messages or notifications at the bottom of the screen. It supports five visual types (info, success, warning, error, progress) with corresponding icons, accepts HTML content in messages, and can include action buttons via slots. Use snackbars for non-critical feedback that doesn't require immediate user action."}}},argTypes:{message:{control:{type:"text"},description:"Message text displayed in the snackbar. Supports HTML formatting including bold text, line breaks, and other inline elements for rich content display.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},type:{control:{type:"select"},options:[e.SNACKBAR_INFO,e.SNACKBAR_SUCCESS,e.SNACKBAR_WARNING,e.SNACKBAR_ERROR,e.SNACKBAR_PROGRESS],description:"Visual type of the snackbar. Determines the icon and color scheme: info (information), success (checkmark), warning (alert), error (warning), or progress (circular spinner).",table:{category:"Display",type:{summary:"SNACKBAR_TYPE"},defaultValue:{summary:e.SNACKBAR_INFO}}}},args:{message:"Sample snackbar message",type:e.SNACKBAR_INFO},render:s=>t`
      <enchanted-snackbar
        message="${s.message}"
        .type="${s.type}"
      >
        <div slot="snackbar-buttons">
          <enchanted-button buttontext="Action" variant="text"></enchanted-button>
        </div>
      </enchanted-snackbar>
    `},o={},c={parameters:{controls:{disable:!0},docs:{description:{story:`Comprehensive showcase of all snackbar types and variations:

**Visual Types:** Five distinct types with corresponding icons - info (information icon), success (checkmark), warning (alert icon), error (warning icon), and progress (circular spinner).

**Action Buttons:** Snackbars can include action buttons using the snackbar-buttons slot for interactions like "Undo" or "Retry".

**HTML Content:** Messages support HTML formatting for rich content including bold text, links, and line breaks.`}}},render:()=>t`
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Info Type</div>
          <enchanted-snackbar message="This is an informational message" type="${e.SNACKBAR_INFO}"></enchanted-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Success Type</div>
          <enchanted-snackbar message="Operation completed successfully!" type="${e.SNACKBAR_SUCCESS}"></enchanted-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Warning Type</div>
          <enchanted-snackbar message="Warning: Please review before proceeding" type="${e.SNACKBAR_WARNING}"></enchanted-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Error Type</div>
          <enchanted-snackbar message="Error: Unable to complete the operation" type="${e.SNACKBAR_ERROR}"></enchanted-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Progress Type</div>
          <enchanted-snackbar message="Processing your request..." type="${e.SNACKBAR_PROGRESS}"></enchanted-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With Action Button</div>
          <enchanted-snackbar message="File deleted" type="${e.SNACKBAR_INFO}">
            <div slot="snackbar-buttons">
              <enchanted-button buttontext="Undo" variant="text"></enchanted-button>
            </div>
          </enchanted-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With Multiple Buttons</div>
          <enchanted-snackbar message="Connection lost" type="${e.SNACKBAR_ERROR}">
            <div slot="snackbar-buttons">
              <enchanted-button buttontext="Retry" variant="text"></enchanted-button>
              <enchanted-button buttontext="Dismiss" variant="text"></enchanted-button>
            </div>
          </enchanted-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With HTML Content</div>
          <enchanted-snackbar message="This is a <strong>bold</strong> message with <em>emphasis</em>.<br>It spans multiple lines." type="${e.SNACKBAR_INFO}"></enchanted-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Long Message</div>
          <enchanted-snackbar message="This is a longer message that demonstrates how the snackbar handles extended text content. The component will wrap the text appropriately." 
            type="${e.SNACKBAR_WARNING}"></enchanted-snackbar>
        </div>
      </div>
    `};var b,g,A;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(A=(g=o.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};var v,u,y;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
          <enchanted-snackbar message="This is an informational message" type="\${SNACKBAR_TYPE.SNACKBAR_INFO}"></enchanted-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Success Type</div>
          <enchanted-snackbar message="Operation completed successfully!" type="\${SNACKBAR_TYPE.SNACKBAR_SUCCESS}"></enchanted-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Warning Type</div>
          <enchanted-snackbar message="Warning: Please review before proceeding" type="\${SNACKBAR_TYPE.SNACKBAR_WARNING}"></enchanted-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Error Type</div>
          <enchanted-snackbar message="Error: Unable to complete the operation" type="\${SNACKBAR_TYPE.SNACKBAR_ERROR}"></enchanted-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Progress Type</div>
          <enchanted-snackbar message="Processing your request..." type="\${SNACKBAR_TYPE.SNACKBAR_PROGRESS}"></enchanted-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With Action Button</div>
          <enchanted-snackbar message="File deleted" type="\${SNACKBAR_TYPE.SNACKBAR_INFO}">
            <div slot="snackbar-buttons">
              <enchanted-button buttontext="Undo" variant="text"></enchanted-button>
            </div>
          </enchanted-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With Multiple Buttons</div>
          <enchanted-snackbar message="Connection lost" type="\${SNACKBAR_TYPE.SNACKBAR_ERROR}">
            <div slot="snackbar-buttons">
              <enchanted-button buttontext="Retry" variant="text"></enchanted-button>
              <enchanted-button buttontext="Dismiss" variant="text"></enchanted-button>
            </div>
          </enchanted-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With HTML Content</div>
          <enchanted-snackbar message="This is a <strong>bold</strong> message with <em>emphasis</em>.<br>It spans multiple lines." type="\${SNACKBAR_TYPE.SNACKBAR_INFO}"></enchanted-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Long Message</div>
          <enchanted-snackbar message="This is a longer message that demonstrates how the snackbar handles extended text content. The component will wrap the text appropriately." 
            type="\${SNACKBAR_TYPE.SNACKBAR_WARNING}"></enchanted-snackbar>
        </div>
      </div>
    \`;
  }
}`,...(y=(u=c.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const F=["Default","AllStates"];export{c as AllStates,o as Default,F as __namedExportsOrder,P as default};
