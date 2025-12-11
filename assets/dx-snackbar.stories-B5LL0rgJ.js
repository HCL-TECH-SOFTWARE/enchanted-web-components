import{x as n}from"./iframe-Dsd1MpWQ.js";import{n as R,t as S,D as h}from"./dx-ac-base-element-C9dhstFR.js";import"./dx-circular-progress-Cwi2aphc.js";import{S as t,t as e}from"./cssClassEnums-v1h5zF5X.js";import"./index-oN6J18Ve.js";import"./index-BjNSVBJf.js";import"./dx-button-gwJQrlvi.js";import"./preload-helper-C1FmrZbK.js";import"./state-DQlunuPl.js";import"./index-BPZZDKKN.js";import"./localization-DmqTGOFp.js";var N=Object.defineProperty,k=Object.getOwnPropertyDescriptor,b=(a,i,p,r)=>{for(var s=r>1?void 0:r?k(i,p):i,l=a.length-1,m;l>=0;l--)(m=a[l])&&(s=(r?m(i,p,s):m(s))||s);return r&&s&&N(i,p,s),s};let c=class extends h{constructor(){super(...arguments),this.message="",this.type=t.SNACKBAR_INFO}_renderPreElement(){if(t.SNACKBAR_PROGRESS==this.type)return n`
          <div part="${e.SNACKBAR_PROGRESS}">
            <dx-circular-progress
              size="36" strokewidth="2"
              valuecolor="#B3D9F8"
              trailcolor="#ffffff26"
            />
          </div>
        `;switch(this.type){case t.SNACKBAR_INFO:return n`<icon-information size="16" data-test-id="dx-snackbar-icon" part="${e.SNACKBAR_ICON} icon-${this.type}"></icon-information>`;case t.SNACKBAR_WARNING:return n`<icon-warning-alt size="16" data-test-id="dx-snackbar-icon" part="${e.SNACKBAR_ICON} icon-${this.type}"></icon-warning-alt>`;case t.SNACKBAR_ERROR:return n`<icon-warning size="16" data-test-id="dx-snackbar-icon" part="${e.SNACKBAR_ICON} icon-${this.type}"></icon-warning>`;case t.SNACKBAR_SUCCESS:return n`<icon-checkmark-outline size="16" part="${e.SNACKBAR_ICON} icon-${this.type}"></icon-checkmark-outline>`}}render(){return n`
        <div part=${e.SNACKBAR_CONTAINER}>
          <div part=${e.SNACKBAR_ICON_CONTAINER}>${this._renderPreElement()}</div>
          <span
            data-testid="dx-snackbar-message"
            part=${e.SNACKBAR_MESSAGE}
            .innerHTML=${this.message}
          ></span>
          <div part=${e.SNACKBAR_BUTTON_CONTAINER}>
            <div part=${e.SNACKBAR_BUTTONS}><slot name="snackbar-buttons"></slot></div>
          </div>
        </div>
      `}};b([R({type:String})],c.prototype,"message",2);b([R({type:String})],c.prototype,"type",2);c=b([S("dx-snackbar")],c);const P={title:"Feedback/dx-snackbar",tags:["autodocs"],parameters:{docs:{description:{component:"The Snackbar component displays brief, temporary messages or notifications at the bottom of the screen. It supports five visual types (info, success, warning, error, progress) with corresponding icons, accepts HTML content in messages, and can include action buttons via slots. Use snackbars for non-critical feedback that doesn't require immediate user action."}}},argTypes:{message:{control:{type:"text"},description:"Message text displayed in the snackbar. Supports HTML formatting including bold text, line breaks, and other inline elements for rich content display.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},type:{control:{type:"select"},options:[t.SNACKBAR_INFO,t.SNACKBAR_SUCCESS,t.SNACKBAR_WARNING,t.SNACKBAR_ERROR,t.SNACKBAR_PROGRESS],description:"Visual type of the snackbar. Determines the icon and color scheme: info (information), success (checkmark), warning (alert), error (warning), or progress (circular spinner).",table:{category:"Display",type:{summary:"SNACKBAR_TYPE"},defaultValue:{summary:t.SNACKBAR_INFO}}}},args:{message:"Sample snackbar message",type:t.SNACKBAR_INFO},render:a=>n`
      <dx-snackbar
        message="${a.message}"
        .type="${a.type}"
      >
        <div slot="snackbar-buttons">
          <dx-button buttontext="Action" variant="text"></dx-button>
        </div>
      </dx-snackbar>
    `},o={},d={parameters:{controls:{disable:!0},docs:{description:{story:`Comprehensive showcase of all snackbar types and variations:

**Visual Types:** Five distinct types with corresponding icons - info (information icon), success (checkmark), warning (alert icon), error (warning icon), and progress (circular spinner).

**Action Buttons:** Snackbars can include action buttons using the snackbar-buttons slot for interactions like "Undo" or "Retry".

**HTML Content:** Messages support HTML formatting for rich content including bold text, links, and line breaks.`}}},render:()=>n`
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Info Type</div>
          <dx-snackbar message="This is an informational message" type="${t.SNACKBAR_INFO}"></dx-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Success Type</div>
          <dx-snackbar message="Operation completed successfully!" type="${t.SNACKBAR_SUCCESS}"></dx-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Warning Type</div>
          <dx-snackbar message="Warning: Please review before proceeding" type="${t.SNACKBAR_WARNING}"></dx-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Error Type</div>
          <dx-snackbar message="Error: Unable to complete the operation" type="${t.SNACKBAR_ERROR}"></dx-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Progress Type</div>
          <dx-snackbar message="Processing your request..." type="${t.SNACKBAR_PROGRESS}"></dx-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With Action Button</div>
          <dx-snackbar message="File deleted" type="${t.SNACKBAR_INFO}">
            <div slot="snackbar-buttons">
              <dx-button buttontext="Undo" variant="text"></dx-button>
            </div>
          </dx-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With Multiple Buttons</div>
          <dx-snackbar message="Connection lost" type="${t.SNACKBAR_ERROR}">
            <div slot="snackbar-buttons">
              <dx-button buttontext="Retry" variant="text"></dx-button>
              <dx-button buttontext="Dismiss" variant="text"></dx-button>
            </div>
          </dx-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With HTML Content</div>
          <dx-snackbar message="This is a <strong>bold</strong> message with <em>emphasis</em>.<br>It spans multiple lines." type="${t.SNACKBAR_INFO}"></dx-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Long Message</div>
          <dx-snackbar message="This is a longer message that demonstrates how the snackbar handles extended text content. The component will wrap the text appropriately." 
            type="${t.SNACKBAR_WARNING}"></dx-snackbar>
        </div>
      </div>
    `};var g,A,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(v=(A=o.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var x,u,y;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
          <dx-snackbar message="This is an informational message" type="\${SNACKBAR_TYPE.SNACKBAR_INFO}"></dx-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Success Type</div>
          <dx-snackbar message="Operation completed successfully!" type="\${SNACKBAR_TYPE.SNACKBAR_SUCCESS}"></dx-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Warning Type</div>
          <dx-snackbar message="Warning: Please review before proceeding" type="\${SNACKBAR_TYPE.SNACKBAR_WARNING}"></dx-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Error Type</div>
          <dx-snackbar message="Error: Unable to complete the operation" type="\${SNACKBAR_TYPE.SNACKBAR_ERROR}"></dx-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Progress Type</div>
          <dx-snackbar message="Processing your request..." type="\${SNACKBAR_TYPE.SNACKBAR_PROGRESS}"></dx-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With Action Button</div>
          <dx-snackbar message="File deleted" type="\${SNACKBAR_TYPE.SNACKBAR_INFO}">
            <div slot="snackbar-buttons">
              <dx-button buttontext="Undo" variant="text"></dx-button>
            </div>
          </dx-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With Multiple Buttons</div>
          <dx-snackbar message="Connection lost" type="\${SNACKBAR_TYPE.SNACKBAR_ERROR}">
            <div slot="snackbar-buttons">
              <dx-button buttontext="Retry" variant="text"></dx-button>
              <dx-button buttontext="Dismiss" variant="text"></dx-button>
            </div>
          </dx-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">With HTML Content</div>
          <dx-snackbar message="This is a <strong>bold</strong> message with <em>emphasis</em>.<br>It spans multiple lines." type="\${SNACKBAR_TYPE.SNACKBAR_INFO}"></dx-snackbar>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Long Message</div>
          <dx-snackbar message="This is a longer message that demonstrates how the snackbar handles extended text content. The component will wrap the text appropriately." 
            type="\${SNACKBAR_TYPE.SNACKBAR_WARNING}"></dx-snackbar>
        </div>
      </div>
    \`;
  }
}`,...(y=(u=d.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const F=["Default","AllStates"];export{d as AllStates,o as Default,F as __namedExportsOrder,P as default};
