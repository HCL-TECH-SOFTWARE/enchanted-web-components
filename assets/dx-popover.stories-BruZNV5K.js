import{E as h,x as l}from"./iframe-DgNdRKpa.js";import{n,t as _,D as w,L as $}from"./dx-ac-base-element-BRVmdAbS.js";import"./index-iMiEPESM.js";import{g as x}from"./localization-8Qc5IxgI.js";import{p as s}from"./cssClassEnums-flPS6Iko.js";import"./dx-button-q5wlWak9.js";import"./preload-helper-C1FmrZbK.js";import"./index-DaIQVsYU.js";import"./state-g_VKachv.js";var E=Object.defineProperty,R=Object.getOwnPropertyDescriptor,r=(e,a,T,p)=>{for(var i=p>1?void 0:p?R(a,T):a,c=e.length-1,O;c>=0;c--)(O=e[c])&&(i=(p?O(a,T,i):O(i))||i);return p&&i&&E(a,T,i),i};let o=class extends w{constructor(){super(...arguments),this.open=!1,this.label="Label",this.text="Text",this.showLabel=!1,this.showText=!1,this.showCloseIcon=!1,this.inverse=!1,this.withpadding=!1,this.disableHover=!1,this._showPopover=()=>{this.disableHover||(this.open=!0)},this._hidePopover=()=>{this.disableHover||(this.open=!1)},this._onCloseClick=e=>{e.stopPropagation(),this.open=!1}}get isLTR(){return x()===$.LTR}render(){return l`
    <div id="target" part="${s.POPOVER_TARGET}" aria-label=${this.label}>
      <slot
        name="target"
        @pointerenter=${this._showPopover}
        @pointerleave=${this._hidePopover}
      ></slot>
    </div>
    <div part="${s.POPOVER_WRAPPER}" ?inverse=${this.inverse} aria-label=${this.label}>
      ${this.arrow?l`
      <div part="${s.POPOVER_ARROW}"></div>`:h}
        <div part=${this.isLTR?s.POPOVER_CONTAINER:s.POPOVER_CONTAINER_RTL}>
          <div part="${s.POPOVER_CONTENT}">
            ${this.showLabel?l`<div part="${s.POPOVER_LABEL}"><slot name="label">${this.label}</slot></div>`:h}
            ${this.showText?l`<div part="${s.POPOVER_TEXT}"><slot name="text">${this.text}</slot></div>`:h}
            
          </div>
          ${this.showCloseIcon?l`<button part=${this.isLTR?s.POPOVER_CLOSE_ICON:s.POPOVER_CLOSE_ICON_RTL} 
            @click="${this._onCloseClick}" aria-label="Close popover">
            <icon-close size="16" color="currentColor"></icon-close>
          </button>`:h}
        </div>
      </div>
    </div>
    `}};r([n({type:Boolean,reflect:!0})],o.prototype,"open",2);r([n({type:String})],o.prototype,"label",2);r([n({type:String})],o.prototype,"text",2);r([n({type:Boolean})],o.prototype,"showLabel",2);r([n({type:Boolean})],o.prototype,"showText",2);r([n({type:Boolean})],o.prototype,"showCloseIcon",2);r([n({type:Boolean,reflect:!0})],o.prototype,"inverse",2);r([n({type:String,reflect:!0})],o.prototype,"arrow",2);r([n({type:Boolean})],o.prototype,"withpadding",2);r([n({type:Boolean})],o.prototype,"disableHover",2);o=r([_("dx-popover")],o);var t=(e=>(e.NONE="",e.BOTTOM="12:00",e.BOTTOM_RIGHT="1:00",e.LEFT_TOP="2:00",e.LEFT="3:00",e.LEFT_BOTTOM="4:00",e.TOP_RIGHT="5:00",e.TOP="6:00",e.TOP_LEFT="7:00",e.RIGHT_BOTTOM="8:00",e.RIGHT="9:00",e.RIGHT_TOP="10:00",e.BOTTOM_LEFT="11:00",e))(t||{});const B={title:"Display/dx-popover",component:"dx-popover",tags:["autodocs"],argTypes:{open:{control:"boolean",description:"Controls the popover visibility"},label:{control:"text",description:"Popover label text"},text:{control:"text",description:"Popover description text"},showLabel:{control:"boolean",description:"Show the label section"},showText:{control:"boolean",description:"Show the text section"},showCloseIcon:{control:"boolean",description:"Show close button inside popover"},inverse:{control:"boolean",description:"Sets the popover to dark theme when true"},arrow:{control:{type:"radio"},options:[t.TOP,t.BOTTOM,t.LEFT,t.RIGHT,t.BOTTOM_LEFT,t.BOTTOM_RIGHT,t.LEFT_BOTTOM,t.LEFT_TOP,t.RIGHT_BOTTOM,t.RIGHT_TOP,t.TOP_LEFT,t.TOP_RIGHT,t.NONE],description:"Position of the arrow"},withpadding:{control:"boolean",description:"Applies internal padding to the popover content"},disableHover:{control:"boolean",description:"Disables hover-based show/hide behavior"},buttontext:{control:"text",description:"Button text"}},args:{open:!1,label:"Popover Title",text:"This is a sample popover description.",showLabel:!0,showText:!0,showCloseIcon:!0,inverse:!0,arrow:"3:00",withpadding:!0,disableHover:!1,buttontext:"Hover on Me"},parameters:{docs:{description:{component:"A flexible popover component with arrow positioning, show-on-load, hover control, padding, dark/light theme, and full RTL support."}}}},d={name:"Default",render:e=>l`
    <dx-popover
      ?open=${e.open}
      label=${e.label}
      text=${e.text}
      ?showLabel=${e.showLabel}
      ?showText=${e.showText}
      ?showCloseIcon=${e.showCloseIcon}
      ?inverse=${e.inverse}
      arrow=${e.arrow}
      ?withpadding=${e.withpadding}
      ?disableHover=${e.disableHover}
      style="position: absolute; top: 50%; left: 45%;"
    >
      <dx-button slot="target" buttontext="${e.buttontext}"></dx-button>
    </dx-popover>
  `};var b,v,u;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Default',
  render: args => {
    return html\`
    <dx-popover
      ?open=\${args.open}
      label=\${args.label}
      text=\${args.text}
      ?showLabel=\${args.showLabel}
      ?showText=\${args.showText}
      ?showCloseIcon=\${args.showCloseIcon}
      ?inverse=\${args.inverse}
      arrow=\${args.arrow}
      ?withpadding=\${args.withpadding}
      ?disableHover=\${args.disableHover}
      style="position: absolute; top: 50%; left: 45%;"
    >
      <dx-button slot="target" buttontext="\${args.buttontext}"></dx-button>
    </dx-popover>
  \`;
  }
}`,...(u=(v=d.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};const S=["DxPopoverStory"];export{d as DxPopoverStory,S as __namedExportsOrder,B as default};
