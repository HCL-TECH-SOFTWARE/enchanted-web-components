import{E as h,x as p}from"./iframe-BY3ui3w0.js";import{n as a,t as f,E as L,L as P}from"./enchanted-ac-base-element-CBHL5x_U.js";import"./index-CvmBkJio.js";import{g as E}from"./localization-rBpmtxQQ.js";import{p as r}from"./cssClassEnums-D4dgqifY.js";import"./enchanted-button-DEmrPq5W.js";import"./preload-helper-C1FmrZbK.js";import"./index-F6NVQYd9.js";import"./state-B3qr-gd1.js";var R=Object.defineProperty,_=Object.getOwnPropertyDescriptor,n=(e,d,u,l)=>{for(var i=l>1?void 0:l?_(d,u):d,v=e.length-1,b;v>=0;v--)(b=e[v])&&(i=(l?b(d,u,i):b(i))||i);return l&&i&&R(d,u,i),i};let o=class extends L{constructor(){super(...arguments),this.open=!1,this.label="Label",this.text="Text",this.showLabel=!1,this.showText=!1,this.showCloseIcon=!1,this.inverse=!1,this.withpadding=!1,this.disableHover=!1,this._showPopover=()=>{this.disableHover||(this.open=!0)},this._hidePopover=()=>{this.disableHover||(this.open=!1)},this._onCloseClick=e=>{e.stopPropagation(),this.open=!1,this.dispatchEvent(new CustomEvent("enchanted-popover-closed",{bubbles:!0,composed:!0,detail:{reason:"click-icon-close"}}))}}get isLTR(){return E()===P.LTR}render(){return p`
    <div id="target" part="${r.POPOVER_TARGET}" aria-label=${this.label}>
      <slot
        name="target"
        @pointerenter=${this._showPopover}
        @pointerleave=${this._hidePopover}
      ></slot>
    </div>
    <div part="${r.POPOVER_WRAPPER}" ?inverse=${this.inverse} aria-label=${this.label}>
      ${this.arrow?p`
      <div part="${r.POPOVER_ARROW}"></div>`:h}
        <div part=${this.isLTR?r.POPOVER_CONTAINER:r.POPOVER_CONTAINER_RTL}>
          <div part="${r.POPOVER_CONTENT}">
            ${this.showLabel?p`<div part="${r.POPOVER_LABEL}"><slot name="label">${this.label}</slot></div>`:h}
            ${this.showText?p`<div part="${r.POPOVER_TEXT}"><slot name="text">${this.text}</slot></div>`:h}
            
          </div>
          ${this.showCloseIcon?p`<button part=${this.isLTR?r.POPOVER_CLOSE_ICON:r.POPOVER_CLOSE_ICON_RTL} 
            @click="${this._onCloseClick}" aria-label="Close popover">
            <icon-close size="16" color="currentColor"></icon-close>
          </button>`:h}
        </div>
      </div>
    </div>
    `}};n([a({type:Boolean,reflect:!0})],o.prototype,"open",2);n([a({type:String})],o.prototype,"label",2);n([a({type:String})],o.prototype,"text",2);n([a({type:Boolean})],o.prototype,"showLabel",2);n([a({type:Boolean})],o.prototype,"showText",2);n([a({type:Boolean})],o.prototype,"showCloseIcon",2);n([a({type:Boolean,reflect:!0})],o.prototype,"inverse",2);n([a({type:String,reflect:!0})],o.prototype,"arrow",2);n([a({type:Boolean})],o.prototype,"withpadding",2);n([a({type:Boolean})],o.prototype,"disableHover",2);o=n([f("enchanted-popover")],o);var t=(e=>(e.NONE="",e.BOTTOM="12:00",e.BOTTOM_RIGHT="1:00",e.LEFT_TOP="2:00",e.LEFT="3:00",e.LEFT_BOTTOM="4:00",e.TOP_RIGHT="5:00",e.TOP="6:00",e.TOP_LEFT="7:00",e.RIGHT_BOTTOM="8:00",e.RIGHT="9:00",e.RIGHT_TOP="10:00",e.BOTTOM_LEFT="11:00",e))(t||{});const M={title:"Display/enchanted-popover",component:"enchanted-popover",tags:["autodocs"],parameters:{docs:{description:{component:"The Popover component displays contextual content in a floating panel anchored to a target element. It supports 13 arrow positions, hover and click interactions, dark/light themes, and optional close buttons. Use popovers for additional information, help text, or contextual actions without leaving the current page context. Full RTL support included."}}},argTypes:{open:{control:{type:"boolean"},description:"Controls popover visibility. When true, popover is displayed. Can be controlled programmatically or through user interaction (hover/click).",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},label:{control:{type:"text"},description:"Title text displayed at the top of the popover. Provides a header or summary for the popover content. Only visible when showLabel is true.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:"Label"}}},text:{control:{type:"text"},description:"Description text displayed in the popover body. Main content area for detailed information. Only visible when showText is true.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:"Text"}}},showLabel:{control:{type:"boolean"},description:"Shows or hides the label section. When false, the header area is not rendered, providing more space for the text content.",table:{category:"Display",type:{summary:"boolean"},defaultValue:{summary:"false"}}},showText:{control:{type:"boolean"},description:"Shows or hides the text section. When false, only the label (if showLabel is true) or custom content is displayed.",table:{category:"Display",type:{summary:"boolean"},defaultValue:{summary:"false"}}},showCloseIcon:{control:{type:"boolean"},description:"Displays a close button inside the popover. Allows users to explicitly dismiss the popover. Useful when disableHover is true.",table:{category:"Display",type:{summary:"boolean"},defaultValue:{summary:"false"}}},inverse:{control:{type:"boolean"},description:"Applies dark theme styling when true, light theme when false. Dark theme features white text on dark background for high contrast scenarios.",table:{category:"Styling",type:{summary:"boolean"},defaultValue:{summary:"false"}}},arrow:{control:{type:"radio"},options:[t.TOP,t.BOTTOM,t.LEFT,t.RIGHT,t.BOTTOM_LEFT,t.BOTTOM_RIGHT,t.LEFT_BOTTOM,t.LEFT_TOP,t.RIGHT_BOTTOM,t.RIGHT_TOP,t.TOP_LEFT,t.TOP_RIGHT,t.NONE],description:"Position of the arrow pointing to the target element. Supports 12 clock positions plus NONE. Affects popover placement relative to target.",table:{category:"Layout",type:{summary:"EnchantedPopoverArrowPosition"},defaultValue:{summary:t.NONE}}},withpadding:{control:{type:"boolean"},description:"Applies internal padding to the popover content. When true, adds spacing around label and text for better readability.",table:{category:"Layout",type:{summary:"boolean"},defaultValue:{summary:"false"}}},disableHover:{control:{type:"boolean"},description:"Disables hover-based show/hide behavior. When true, popover must be controlled via the open property or click events. Prevents accidental dismissal.",table:{category:"Behavior",type:{summary:"boolean"},defaultValue:{summary:"false"}}},buttontext:{control:{type:"text"},description:"Text displayed on the target button. Used for demonstration purposes in the story. The popover can be anchored to any element via the target slot.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}}},args:{open:!1,label:"Popover Title",text:"This is a sample popover description.",showLabel:!0,showText:!0,showCloseIcon:!0,inverse:!0,arrow:t.RIGHT,withpadding:!0,disableHover:!1,buttontext:"Hover on Me"}},c={name:"Default",render:e=>p`
    <enchanted-popover
      ?open=${e.open}
      label=${e.label}
      text=${e.text}
      ?showLabel=${e.showLabel}
      ?showText=${e.showText}
      ?showCloseIcon=${e.showCloseIcon}
      ?inverse=${e.inverse}
      .arrow=${e.arrow}
      ?withpadding=${e.withpadding}
      ?disableHover=${e.disableHover}
      style="position: absolute; top: 50%; left: 45%;"
    >
      <enchanted-button slot="target" buttontext="${e.buttontext}"></enchanted-button>
    </enchanted-popover>
  `},s={parameters:{controls:{disable:!0}},render:()=>p`
    <style>
      .popover-container {
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding: 40px;
      }
      .popover-section {
        display: flex;
        flex-direction: column;
        gap: 100px;
      }
      .popover-section h3 {
        margin: 0 0 10px 0;
        font-size: 16px;
        font-weight: 600;
      }
      .popover-row {
        display: flex;
        flex-wrap: wrap;
        gap: 150px;
        align-items: center;
      }
      .popover-item {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .popover-label {
        font-size: 12px;
        color: #666;
        margin-top: 5px;
        text-align: center;
      }
    </style>

    <div class="popover-container">
      <!-- Arrow Positions Section -->
      <div class="popover-section">
        <h3>Arrow Positions (Light Theme)</h3>
        <div class="popover-row">
          <div class="popover-item">
            <enchanted-popover
              ?open=${!0}
              label="Top"
              text="Arrow at top"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${t.TOP}
              ?withpadding=${!0}
            >
              <enchanted-button slot="target" buttontext="Top"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${!0}
              label="Top Left"
              text="Arrow at top-left"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${t.TOP_LEFT}
              ?withpadding=${!0}
            >
              <enchanted-button slot="target" buttontext="Top Left"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${!0}
              label="Top Right"
              text="Arrow at top-right"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${t.TOP_RIGHT}
              ?withpadding=${!0}
            >
              <enchanted-button slot="target" buttontext="Top Right"></enchanted-button>
            </enchanted-popover>
          </div>
        </div>
        <div class="popover-row">
          <div class="popover-item">
            <enchanted-popover
              ?open=${!0}
              label="Bottom"
              text="Arrow at bottom"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${t.BOTTOM}
              ?withpadding=${!0}
            >
              <enchanted-button slot="target" buttontext="Bottom"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${!0}
              label="Bottom Left"
              text="Arrow at bottom-left"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${t.BOTTOM_LEFT}
              ?withpadding=${!0}
            >
              <enchanted-button slot="target" buttontext="Bottom Left"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${!0}
              label="Bottom Right"
              text="Arrow at bottom-right"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${t.BOTTOM_RIGHT}
              ?withpadding=${!0}
            >
              <enchanted-button slot="target" buttontext="Bottom Right"></enchanted-button>
            </enchanted-popover>
          </div>
        </div>
        <div class="popover-row">
          <div class="popover-item">
            <enchanted-popover
              ?open=${!0}
              label="Left"
              text="Arrow at left"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${t.LEFT}
              ?withpadding=${!0}
            >
              <enchanted-button slot="target" buttontext="Left"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${!0}
              label="Left Top"
              text="Arrow at left-top"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${t.LEFT_TOP}
              ?withpadding=${!0}
            >
              <enchanted-button slot="target" buttontext="Left Top"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${!0}
              label="Left Bottom"
              text="Arrow at left-bottom"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${t.LEFT_BOTTOM}
              ?withpadding=${!0}
            >
              <enchanted-button slot="target" buttontext="Left Bottom"></enchanted-button>
            </enchanted-popover>
          </div>
        </div>
        <div class="popover-row">
          <div class="popover-item">
            <enchanted-popover
              ?open=${!0}
              label="Right"
              text="Arrow at right"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${t.RIGHT}
              ?withpadding=${!0}
            >
              <enchanted-button slot="target" buttontext="Right"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${!0}
              label="Right Top"
              text="Arrow at right-top"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${t.RIGHT_TOP}
              ?withpadding=${!0}
            >
              <enchanted-button slot="target" buttontext="Right Top"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${!0}
              label="Right Bottom"
              text="Arrow at right-bottom"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${t.RIGHT_BOTTOM}
              ?withpadding=${!0}
            >
              <enchanted-button slot="target" buttontext="Right Bottom"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${!0}
              label="No Arrow"
              text="Arrow set to NONE"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${t.NONE}
              ?withpadding=${!0}
            >
              <enchanted-button slot="target" buttontext="No Arrow"></enchanted-button>
            </enchanted-popover>
          </div>
        </div>
      </div>

      <!-- Dark Theme Section -->
      <div class="popover-section">
        <h3>Dark Theme (Inverse)</h3>
        <div class="popover-row">
          <div class="popover-item">
            <enchanted-popover
              ?open=${!0}
              label="Dark Theme"
              text="Popover with inverse styling"
              ?showLabel=${!0}
              ?showText=${!0}
              ?inverse=${!0}
              .arrow=${t.TOP}
              ?withpadding=${!0}
            >
              <enchanted-button slot="target" buttontext="Dark Top"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${!0}
              label="Dark Right"
              text="Dark theme with right arrow"
              ?showLabel=${!0}
              ?showText=${!0}
              ?inverse=${!0}
              .arrow=${t.RIGHT}
              ?withpadding=${!0}
            >
              <enchanted-button slot="target" buttontext="Dark Right"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${!0}
              label="Dark Bottom"
              text="Dark theme with bottom arrow"
              ?showLabel=${!0}
              ?showText=${!0}
              ?inverse=${!0}
              .arrow=${t.BOTTOM}
              ?withpadding=${!0}
            >
              <enchanted-button slot="target" buttontext="Dark Bottom"></enchanted-button>
            </enchanted-popover>
          </div>
        </div>
      </div>

      <!-- Content Variations Section -->
      <div class="popover-section">
        <h3>Content Variations</h3>
        <div class="popover-row">
          <div class="popover-item">
            <enchanted-popover
              ?open=${!0}
              label="Label Only"
              ?showLabel=${!0}
              ?showText=${!1}
              .arrow=${t.TOP}
              ?withpadding=${!0}
            >
              <enchanted-button slot="target" buttontext="Label Only"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${!0}
              text="Text only, no label shown"
              ?showLabel=${!1}
              ?showText=${!0}
              .arrow=${t.TOP}
              ?withpadding=${!0}
            >
              <enchanted-button slot="target" buttontext="Text Only"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${!0}
              label="With Close"
              text="Popover with close button"
              ?showLabel=${!0}
              ?showText=${!0}
              ?showCloseIcon=${!0}
              .arrow=${t.TOP}
              ?withpadding=${!0}
            >
              <enchanted-button slot="target" buttontext="With Close"></enchanted-button>
            </enchanted-popover>
          </div>
        </div>
      </div>

      <!-- Layout Options Section -->
      <div class="popover-section">
        <h3>Layout Options</h3>
        <div class="popover-row">
          <div class="popover-item">
            <enchanted-popover
              ?open=${!0}
              label="No Padding"
              text="Content without internal padding"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${t.TOP}
              ?withpadding=${!1}
            >
              <enchanted-button slot="target" buttontext="No Padding"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${!0}
              label="With Padding"
              text="Content with internal padding"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${t.TOP}
              ?withpadding=${!0}
            >
              <enchanted-button slot="target" buttontext="With Padding"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${!0}
              label="Hover Disabled"
              text="Must be controlled via open property"
              ?showLabel=${!0}
              ?showText=${!0}
              ?showCloseIcon=${!0}
              .arrow=${t.TOP}
              ?withpadding=${!0}
              ?disableHover=${!0}
            >
              <enchanted-button slot="target" buttontext="No Hover"></enchanted-button>
            </enchanted-popover>
          </div>
        </div>
      </div>

      <!-- Combined States Section -->
      <div class="popover-section">
        <h3>Combined States</h3>
        <div class="popover-row">
          <div class="popover-item">
            <enchanted-popover
              ?open=${!0}
              label="Full Featured"
              text="Dark theme with close icon, padding, and custom arrow"
              ?showLabel=${!0}
              ?showText=${!0}
              ?showCloseIcon=${!0}
              ?inverse=${!0}
              .arrow=${t.RIGHT_TOP}
              ?withpadding=${!0}
            >
              <enchanted-button slot="target" buttontext="Full Featured"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=${!0}
              text="Minimal popover with no arrow or padding"
              ?showLabel=${!1}
              ?showText=${!0}
              .arrow=${t.NONE}
              ?withpadding=${!1}
            >
              <enchanted-button slot="target" buttontext="Minimal"></enchanted-button>
            </enchanted-popover>
          </div>
        </div>
      </div>
    </div>
  `};var w,$,T;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Default',
  render: args => {
    return html\`
    <enchanted-popover
      ?open=\${args.open}
      label=\${args.label}
      text=\${args.text}
      ?showLabel=\${args.showLabel}
      ?showText=\${args.showText}
      ?showCloseIcon=\${args.showCloseIcon}
      ?inverse=\${args.inverse}
      .arrow=\${args.arrow}
      ?withpadding=\${args.withpadding}
      ?disableHover=\${args.disableHover}
      style="position: absolute; top: 50%; left: 45%;"
    >
      <enchanted-button slot="target" buttontext="\${args.buttontext}"></enchanted-button>
    </enchanted-popover>
  \`;
  }
}`,...(T=($=c.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var g,m,x,y,O;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    return html\`
    <style>
      .popover-container {
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding: 40px;
      }
      .popover-section {
        display: flex;
        flex-direction: column;
        gap: 100px;
      }
      .popover-section h3 {
        margin: 0 0 10px 0;
        font-size: 16px;
        font-weight: 600;
      }
      .popover-row {
        display: flex;
        flex-wrap: wrap;
        gap: 150px;
        align-items: center;
      }
      .popover-item {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .popover-label {
        font-size: 12px;
        color: #666;
        margin-top: 5px;
        text-align: center;
      }
    </style>

    <div class="popover-container">
      <!-- Arrow Positions Section -->
      <div class="popover-section">
        <h3>Arrow Positions (Light Theme)</h3>
        <div class="popover-row">
          <div class="popover-item">
            <enchanted-popover
              ?open=\${true}
              label="Top"
              text="Arrow at top"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.TOP}
              ?withpadding=\${true}
            >
              <enchanted-button slot="target" buttontext="Top"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=\${true}
              label="Top Left"
              text="Arrow at top-left"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.TOP_LEFT}
              ?withpadding=\${true}
            >
              <enchanted-button slot="target" buttontext="Top Left"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=\${true}
              label="Top Right"
              text="Arrow at top-right"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.TOP_RIGHT}
              ?withpadding=\${true}
            >
              <enchanted-button slot="target" buttontext="Top Right"></enchanted-button>
            </enchanted-popover>
          </div>
        </div>
        <div class="popover-row">
          <div class="popover-item">
            <enchanted-popover
              ?open=\${true}
              label="Bottom"
              text="Arrow at bottom"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.BOTTOM}
              ?withpadding=\${true}
            >
              <enchanted-button slot="target" buttontext="Bottom"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=\${true}
              label="Bottom Left"
              text="Arrow at bottom-left"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.BOTTOM_LEFT}
              ?withpadding=\${true}
            >
              <enchanted-button slot="target" buttontext="Bottom Left"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=\${true}
              label="Bottom Right"
              text="Arrow at bottom-right"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.BOTTOM_RIGHT}
              ?withpadding=\${true}
            >
              <enchanted-button slot="target" buttontext="Bottom Right"></enchanted-button>
            </enchanted-popover>
          </div>
        </div>
        <div class="popover-row">
          <div class="popover-item">
            <enchanted-popover
              ?open=\${true}
              label="Left"
              text="Arrow at left"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.LEFT}
              ?withpadding=\${true}
            >
              <enchanted-button slot="target" buttontext="Left"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=\${true}
              label="Left Top"
              text="Arrow at left-top"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.LEFT_TOP}
              ?withpadding=\${true}
            >
              <enchanted-button slot="target" buttontext="Left Top"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=\${true}
              label="Left Bottom"
              text="Arrow at left-bottom"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.LEFT_BOTTOM}
              ?withpadding=\${true}
            >
              <enchanted-button slot="target" buttontext="Left Bottom"></enchanted-button>
            </enchanted-popover>
          </div>
        </div>
        <div class="popover-row">
          <div class="popover-item">
            <enchanted-popover
              ?open=\${true}
              label="Right"
              text="Arrow at right"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.RIGHT}
              ?withpadding=\${true}
            >
              <enchanted-button slot="target" buttontext="Right"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=\${true}
              label="Right Top"
              text="Arrow at right-top"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.RIGHT_TOP}
              ?withpadding=\${true}
            >
              <enchanted-button slot="target" buttontext="Right Top"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=\${true}
              label="Right Bottom"
              text="Arrow at right-bottom"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.RIGHT_BOTTOM}
              ?withpadding=\${true}
            >
              <enchanted-button slot="target" buttontext="Right Bottom"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=\${true}
              label="No Arrow"
              text="Arrow set to NONE"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.NONE}
              ?withpadding=\${true}
            >
              <enchanted-button slot="target" buttontext="No Arrow"></enchanted-button>
            </enchanted-popover>
          </div>
        </div>
      </div>

      <!-- Dark Theme Section -->
      <div class="popover-section">
        <h3>Dark Theme (Inverse)</h3>
        <div class="popover-row">
          <div class="popover-item">
            <enchanted-popover
              ?open=\${true}
              label="Dark Theme"
              text="Popover with inverse styling"
              ?showLabel=\${true}
              ?showText=\${true}
              ?inverse=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.TOP}
              ?withpadding=\${true}
            >
              <enchanted-button slot="target" buttontext="Dark Top"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=\${true}
              label="Dark Right"
              text="Dark theme with right arrow"
              ?showLabel=\${true}
              ?showText=\${true}
              ?inverse=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.RIGHT}
              ?withpadding=\${true}
            >
              <enchanted-button slot="target" buttontext="Dark Right"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=\${true}
              label="Dark Bottom"
              text="Dark theme with bottom arrow"
              ?showLabel=\${true}
              ?showText=\${true}
              ?inverse=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.BOTTOM}
              ?withpadding=\${true}
            >
              <enchanted-button slot="target" buttontext="Dark Bottom"></enchanted-button>
            </enchanted-popover>
          </div>
        </div>
      </div>

      <!-- Content Variations Section -->
      <div class="popover-section">
        <h3>Content Variations</h3>
        <div class="popover-row">
          <div class="popover-item">
            <enchanted-popover
              ?open=\${true}
              label="Label Only"
              ?showLabel=\${true}
              ?showText=\${false}
              .arrow=\${EnchantedPopoverArrowPosition.TOP}
              ?withpadding=\${true}
            >
              <enchanted-button slot="target" buttontext="Label Only"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=\${true}
              text="Text only, no label shown"
              ?showLabel=\${false}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.TOP}
              ?withpadding=\${true}
            >
              <enchanted-button slot="target" buttontext="Text Only"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=\${true}
              label="With Close"
              text="Popover with close button"
              ?showLabel=\${true}
              ?showText=\${true}
              ?showCloseIcon=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.TOP}
              ?withpadding=\${true}
            >
              <enchanted-button slot="target" buttontext="With Close"></enchanted-button>
            </enchanted-popover>
          </div>
        </div>
      </div>

      <!-- Layout Options Section -->
      <div class="popover-section">
        <h3>Layout Options</h3>
        <div class="popover-row">
          <div class="popover-item">
            <enchanted-popover
              ?open=\${true}
              label="No Padding"
              text="Content without internal padding"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.TOP}
              ?withpadding=\${false}
            >
              <enchanted-button slot="target" buttontext="No Padding"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=\${true}
              label="With Padding"
              text="Content with internal padding"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.TOP}
              ?withpadding=\${true}
            >
              <enchanted-button slot="target" buttontext="With Padding"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=\${true}
              label="Hover Disabled"
              text="Must be controlled via open property"
              ?showLabel=\${true}
              ?showText=\${true}
              ?showCloseIcon=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.TOP}
              ?withpadding=\${true}
              ?disableHover=\${true}
            >
              <enchanted-button slot="target" buttontext="No Hover"></enchanted-button>
            </enchanted-popover>
          </div>
        </div>
      </div>

      <!-- Combined States Section -->
      <div class="popover-section">
        <h3>Combined States</h3>
        <div class="popover-row">
          <div class="popover-item">
            <enchanted-popover
              ?open=\${true}
              label="Full Featured"
              text="Dark theme with close icon, padding, and custom arrow"
              ?showLabel=\${true}
              ?showText=\${true}
              ?showCloseIcon=\${true}
              ?inverse=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.RIGHT_TOP}
              ?withpadding=\${true}
            >
              <enchanted-button slot="target" buttontext="Full Featured"></enchanted-button>
            </enchanted-popover>
          </div>
          <div class="popover-item">
            <enchanted-popover
              ?open=\${true}
              text="Minimal popover with no arrow or padding"
              ?showLabel=\${false}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.NONE}
              ?withpadding=\${false}
            >
              <enchanted-button slot="target" buttontext="Minimal"></enchanted-button>
            </enchanted-popover>
          </div>
        </div>
      </div>
    </div>
  \`;
  }
}`,...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.source},description:{story:`Comprehensive showcase of all popover states and arrow positions.
This story demonstrates:
- All 13 arrow positions (12 clock positions + NONE)
- Light and dark themes (inverse property)
- With/without padding
- With/without close icon
- Label and text visibility combinations`,...(O=(y=s.parameters)==null?void 0:y.docs)==null?void 0:O.description}}};const F=["EnchantedPopoverStory","AllStates"];export{s as AllStates,c as EnchantedPopoverStory,F as __namedExportsOrder,M as default};
