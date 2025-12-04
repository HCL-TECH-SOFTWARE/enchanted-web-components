import{x as t}from"./iframe-DgNdRKpa.js";import{n as x,t as u,D as _}from"./dx-ac-base-element-BRVmdAbS.js";import"./dx-circular-progress-CBqiR7lp.js";import{s as e,t as a}from"./cssClassEnums-flPS6Iko.js";import"./index-DmYf0Wc2.js";import"./index-CLrtgfNa.js";import"./dx-button-q5wlWak9.js";import"./preload-helper-C1FmrZbK.js";import"./state-g_VKachv.js";import"./index-DaIQVsYU.js";import"./localization-8Qc5IxgI.js";var g=Object.defineProperty,B=Object.getOwnPropertyDescriptor,N=(s,r,p,i)=>{for(var n=i>1?void 0:i?B(r,p):r,A=s.length-1,v;A>=0;A--)(v=s[A])&&(n=(i?v(r,p,n):v(n))||n);return i&&n&&g(r,p,n),n};let c=class extends _{constructor(){super(...arguments),this.message="",this.type=e.SNACKBAR_INFO}_renderPreElement(){if(e.SNACKBAR_PROGRESS==this.type)return t`
          <div part="${a.SNACKBAR_PROGRESS}">
            <dx-circular-progress
              size="36" strokewidth="2"
              valuecolor="#B3D9F8"
              trailcolor="#ffffff26"
            />
          </div>
        `;switch(this.type){case e.SNACKBAR_INFO:return t`<icon-information size="16" data-test-id="dx-snackbar-icon" part="${a.SNACKBAR_ICON} icon-${this.type}"></icon-information>`;case e.SNACKBAR_WARNING:return t`<icon-warning-alt size="16" data-test-id="dx-snackbar-icon" part="${a.SNACKBAR_ICON} icon-${this.type}"></icon-warning-alt>`;case e.SNACKBAR_ERROR:return t`<icon-warning size="16" data-test-id="dx-snackbar-icon" part="${a.SNACKBAR_ICON} icon-${this.type}"></icon-warning>`;case e.SNACKBAR_SUCCESS:return t`<icon-checkmark-outline size="16" part="${a.SNACKBAR_ICON} icon-${this.type}"></icon-checkmark-outline>`}}render(){return t`
        <div part=${a.SNACKBAR_CONTAINER}>
          <div part=${a.SNACKBAR_ICON_CONTAINER}>${this._renderPreElement()}</div>
          <span
            data-testid="dx-snackbar-message"
            part=${a.SNACKBAR_MESSAGE}
            .innerHTML=${this.message}
          ></span>
          <div part=${a.SNACKBAR_BUTTON_CONTAINER}>
            <div part=${a.SNACKBAR_BUTTONS}><slot name="snackbar-buttons"></slot></div>
          </div>
        </div>
      `}};N([x({type:String})],c.prototype,"message",2);N([x({type:String})],c.prototype,"type",2);c=N([u("dx-snackbar")],c);const W={title:"Feedback/dx-snackbar",tags:["autodocs"],argTypes:{message:{control:"text",description:"Snackbar message",table:{defaultValue:{summary:""}}},open:{control:"boolean",description:"Whether the snackbar is open",table:{defaultValue:{summary:"false"}}},type:{control:"select",options:[e.SNACKBAR_INFO,e.SNACKBAR_SUCCESS,e.SNACKBAR_WARNING,e.SNACKBAR_ERROR],description:"Snackbar type",table:{defaultValue:{summary:e.SNACKBAR_INFO}}}},args:{message:"Sample snackbar message",open:!0,type:e.SNACKBAR_INFO},render:s=>t`
      <dx-snackbar
        message="${s.message}"
        ?open=${s.open}
        .type="${s.type}"
      >
        <div slot="snackbar-buttons">
          <dx-button buttontext="Action" variant="text"></dx-button>
        </div>
      </dx-snackbar>
    `},d={},o={render:()=>t`
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 600px;">
        <div>
          <div>Info</div>
          <dx-snackbar message="Info message" open type="${e.SNACKBAR_INFO}"></dx-snackbar>
        </div>
        <div>
          <div>Success</div>
          <dx-snackbar message="Success!" open type="${e.SNACKBAR_SUCCESS}"></dx-snackbar>
        </div>
        <div>
          <div>Warning</div>
          <dx-snackbar message="Warning!" open type="${e.SNACKBAR_WARNING}"></dx-snackbar>
        </div>
        <div>
          <div>Error</div>
          <dx-snackbar message="Error!" open type="${e.SNACKBAR_ERROR}"></dx-snackbar>
        </div>
        <div>
          <div>With Button</div>
          <dx-snackbar message="With action button" open type="${e.SNACKBAR_INFO}">
            <div slot="snackbar-buttons">
              <dx-button buttontext="Undo" variant="text"></dx-button>
            </div>
          </dx-snackbar>
        </div>
        <div>
          <div>With Complex HTML Message</div>
          <dx-snackbar message="This is a <strong>bold</strong> message.<br>With a line break." open type="${e.SNACKBAR_INFO}"></dx-snackbar>
        </div>
        <div>
          <div>Closed</div>
          <dx-snackbar message="Closed snackbar" type="${e.SNACKBAR_INFO}"></dx-snackbar>
        </div>
      </div>
    `};var S,m,b;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(b=(m=d.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var l,R,C;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 600px;">
        <div>
          <div>Info</div>
          <dx-snackbar message="Info message" open type="\${SNACKBAR_TYPE.SNACKBAR_INFO}"></dx-snackbar>
        </div>
        <div>
          <div>Success</div>
          <dx-snackbar message="Success!" open type="\${SNACKBAR_TYPE.SNACKBAR_SUCCESS}"></dx-snackbar>
        </div>
        <div>
          <div>Warning</div>
          <dx-snackbar message="Warning!" open type="\${SNACKBAR_TYPE.SNACKBAR_WARNING}"></dx-snackbar>
        </div>
        <div>
          <div>Error</div>
          <dx-snackbar message="Error!" open type="\${SNACKBAR_TYPE.SNACKBAR_ERROR}"></dx-snackbar>
        </div>
        <div>
          <div>With Button</div>
          <dx-snackbar message="With action button" open type="\${SNACKBAR_TYPE.SNACKBAR_INFO}">
            <div slot="snackbar-buttons">
              <dx-button buttontext="Undo" variant="text"></dx-button>
            </div>
          </dx-snackbar>
        </div>
        <div>
          <div>With Complex HTML Message</div>
          <dx-snackbar message="This is a <strong>bold</strong> message.<br>With a line break." open type="\${SNACKBAR_TYPE.SNACKBAR_INFO}"></dx-snackbar>
        </div>
        <div>
          <div>Closed</div>
          <dx-snackbar message="Closed snackbar" type="\${SNACKBAR_TYPE.SNACKBAR_INFO}"></dx-snackbar>
        </div>
      </div>
    \`;
  }
}`,...(C=(R=o.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};const F=["Default","AllStates"];export{o as AllStates,d as Default,F as __namedExportsOrder,W as default};
