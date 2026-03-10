import{c as P,a6 as v,E as C,L as H,u as l,g as c,n as i,a7 as t,s as e}from"./tags-xkLHt5Ez.js";import{E as d}from"./iframe-C32rrkgB.js";import"./index-DwWyfVsa.js";import{g as y}from"./localization-BszdroIW.js";import{t as a}from"./cssClassEnums-WDBe4U61.js";import"./enchanted-button-CPwlhnNb.js";import"./preload-helper-C1FmrZbK.js";import"./index-CuTRIAwF.js";import"./tags-DNNghoUc.js";import"./state-BMB52Uli.js";import"./keyboardEventKeys-BnoN8uA3.js";var D=Object.defineProperty,s=(n,$,w,G)=>{for(var p=void 0,u=n.length-1,E;u>=0;u--)(E=n[u])&&(p=E($,w,p)||p);return p&&D($,w,p),p};const f=P("enchanted-web-components:components:atomic-component:enchanted-popover.ts");class r extends C{constructor(){super(...arguments),this.open=!1,this.label="Label",this.text="Text",this.showLabel=!1,this.showText=!1,this.showCloseIcon=!1,this.inverse=!1,this.withpadding=!1,this.disableHover=!1,this._showPopover=()=>{this.disableHover||(this.open=!0)},this._hidePopover=()=>{this.disableHover||(this.open=!1)},this._onCloseClick=$=>{$.stopPropagation(),this.open=!1,this.dispatchEvent(new CustomEvent("enchanted-popover-closed",{bubbles:!0,composed:!0,detail:{reason:"click-icon-close"}}))}}get isLTR(){return y()===H.LTR}render(){return l`
    <div id="target" part="${a.POPOVER_TARGET}" aria-label=${this.label}>
      <slot
        name="target"
        @pointerenter=${this._showPopover}
        @pointerleave=${this._hidePopover}
      ></slot>
    </div>
    <div part="${a.POPOVER_WRAPPER}" ?inverse=${this.inverse} aria-label=${this.label}>
      ${this.arrow?l`
      <div part="${a.POPOVER_ARROW}"></div>`:d}
        <div part=${this.isLTR?a.POPOVER_CONTAINER:a.POPOVER_CONTAINER_RTL}>
          <div part="${a.POPOVER_CONTENT}">
            ${this.showLabel?l`<div part="${a.POPOVER_LABEL}"><slot name="label">${this.label}</slot></div>`:d}
            ${this.showText?l`<div part="${a.POPOVER_TEXT}"><slot name="text">${this.text}</slot></div>`:d}
            
          </div>
          ${this.showCloseIcon?l`<button part=${this.isLTR?a.POPOVER_CLOSE_ICON:a.POPOVER_CLOSE_ICON_RTL} 
            @click="${this._onCloseClick}" aria-label="Close popover">
            <${c("icon-close")} size="16" color="currentColor"></${c("icon-close")}>
          </button>`:d}
        </div>
      </div>
    </div>
    `}}s([i({type:Boolean,reflect:!0})],r.prototype,"open");s([i({type:String})],r.prototype,"label");s([i({type:String})],r.prototype,"text");s([i({type:Boolean})],r.prototype,"showLabel");s([i({type:Boolean})],r.prototype,"showText");s([i({type:Boolean})],r.prototype,"showCloseIcon");s([i({type:Boolean,reflect:!0})],r.prototype,"inverse");s([i({type:String,reflect:!0})],r.prototype,"arrow");s([i({type:Boolean})],r.prototype,"withpadding");s([i({type:Boolean})],r.prototype,"disableHover");customElements.get(v)?f("Component (%s) is currently registered and not possible to registrate again.",v):customElements.define(v,r);var o=(n=>(n.NONE="",n.BOTTOM="12:00",n.BOTTOM_RIGHT="1:00",n.LEFT_TOP="2:00",n.LEFT="3:00",n.LEFT_BOTTOM="4:00",n.TOP_RIGHT="5:00",n.TOP="6:00",n.TOP_LEFT="7:00",n.RIGHT_BOTTOM="8:00",n.RIGHT="9:00",n.RIGHT_TOP="10:00",n.BOTTOM_LEFT="11:00",n))(o||{});const z={title:"Display/enchanted-popover",component:"enchanted-popover",tags:["autodocs"],parameters:{docs:{description:{component:"The Popover component displays contextual content in a floating panel anchored to a target element. It supports 13 arrow positions, hover and click interactions, dark/light themes, and optional close buttons. Use popovers for additional information, help text, or contextual actions without leaving the current page context. Full RTL support included."}}},argTypes:{open:{control:{type:"boolean"},description:"Controls popover visibility. When true, popover is displayed. Can be controlled programmatically or through user interaction (hover/click).",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},label:{control:{type:"text"},description:"Title text displayed at the top of the popover. Provides a header or summary for the popover content. Only visible when showLabel is true.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:"Label"}}},text:{control:{type:"text"},description:"Description text displayed in the popover body. Main content area for detailed information. Only visible when showText is true.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:"Text"}}},showLabel:{control:{type:"boolean"},description:"Shows or hides the label section. When false, the header area is not rendered, providing more space for the text content.",table:{category:"Display",type:{summary:"boolean"},defaultValue:{summary:"false"}}},showText:{control:{type:"boolean"},description:"Shows or hides the text section. When false, only the label (if showLabel is true) or custom content is displayed.",table:{category:"Display",type:{summary:"boolean"},defaultValue:{summary:"false"}}},showCloseIcon:{control:{type:"boolean"},description:"Displays a close button inside the popover. Allows users to explicitly dismiss the popover. Useful when disableHover is true.",table:{category:"Display",type:{summary:"boolean"},defaultValue:{summary:"false"}}},inverse:{control:{type:"boolean"},description:"Applies dark theme styling when true, light theme when false. Dark theme features white text on dark background for high contrast scenarios.",table:{category:"Styling",type:{summary:"boolean"},defaultValue:{summary:"false"}}},arrow:{control:{type:"radio"},options:[o.TOP,o.BOTTOM,o.LEFT,o.RIGHT,o.BOTTOM_LEFT,o.BOTTOM_RIGHT,o.LEFT_BOTTOM,o.LEFT_TOP,o.RIGHT_BOTTOM,o.RIGHT_TOP,o.TOP_LEFT,o.TOP_RIGHT,o.NONE],description:"Position of the arrow pointing to the target element. Supports 12 clock positions plus NONE. Affects popover placement relative to target.",table:{category:"Layout",type:{summary:"EnchantedPopoverArrowPosition"},defaultValue:{summary:o.NONE}}},withpadding:{control:{type:"boolean"},description:"Applies internal padding to the popover content. When true, adds spacing around label and text for better readability.",table:{category:"Layout",type:{summary:"boolean"},defaultValue:{summary:"false"}}},disableHover:{control:{type:"boolean"},description:"Disables hover-based show/hide behavior. When true, popover must be controlled via the open property or click events. Prevents accidental dismissal.",table:{category:"Behavior",type:{summary:"boolean"},defaultValue:{summary:"false"}}},buttontext:{control:{type:"text"},description:"Text displayed on the target button. Used for demonstration purposes in the story. The popover can be anchored to any element via the target slot.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}}},args:{open:!1,label:"Popover Title",text:"This is a sample popover description.",showLabel:!0,showText:!0,showCloseIcon:!0,inverse:!0,arrow:o.RIGHT,withpadding:!0,disableHover:!1,buttontext:"Hover on Me"}},h={name:"Default",render:n=>l`
    <${t}
      ?open=${n.open}
      label=${n.label}
      text=${n.text}
      ?showLabel=${n.showLabel}
      ?showText=${n.showText}
      ?showCloseIcon=${n.showCloseIcon}
      ?inverse=${n.inverse}
      .arrow=${n.arrow}
      ?withpadding=${n.withpadding}
      ?disableHover=${n.disableHover}
      style="position: absolute; top: 50%; left: 45%;"
    >
      <${e} slot="target" buttontext="${n.buttontext}"></${e}>
    </${t}>
  `},T={parameters:{controls:{disable:!0}},render:()=>l`
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
            <${t}
              ?open=${!0}
              label="Top"
              text="Arrow at top"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${o.TOP}
              ?withpadding=${!0}
            >
              <${e} slot="target" buttontext="Top"></${e}>
            </${t}>
          </div>
          <div class="popover-item">
            <${t}
              ?open=${!0}
              label="Top Left"
              text="Arrow at top-left"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${o.TOP_LEFT}
              ?withpadding=${!0}
            >
              <${e} slot="target" buttontext="Top Left"></${e}>
            </${t}>
          </div>
          <div class="popover-item">
            <${t}
              ?open=${!0}
              label="Top Right"
              text="Arrow at top-right"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${o.TOP_RIGHT}
              ?withpadding=${!0}
            >
              <${e} slot="target" buttontext="Top Right"></${e}>
            </${t}>
          </div>
        </div>
        <div class="popover-row">
          <div class="popover-item">
            <${t}
              ?open=${!0}
              label="Bottom"
              text="Arrow at bottom"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${o.BOTTOM}
              ?withpadding=${!0}
            >
              <${e} slot="target" buttontext="Bottom"></${e}>
            </${t}>
          </div>
          <div class="popover-item">
            <${t}
              ?open=${!0}
              label="Bottom Left"
              text="Arrow at bottom-left"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${o.BOTTOM_LEFT}
              ?withpadding=${!0}
            >
              <${e} slot="target" buttontext="Bottom Left"></${e}>
            </${t}>
          </div>
          <div class="popover-item">
            <${t}
              ?open=${!0}
              label="Bottom Right"
              text="Arrow at bottom-right"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${o.BOTTOM_RIGHT}
              ?withpadding=${!0}
            >
              <${e} slot="target" buttontext="Bottom Right"></${e}>
            </${t}>
          </div>
        </div>
        <div class="popover-row">
          <div class="popover-item">
            <${t}
              ?open=${!0}
              label="Left"
              text="Arrow at left"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${o.LEFT}
              ?withpadding=${!0}
            >
              <${e} slot="target" buttontext="Left"></${e}>
            </${t}>
          </div>
          <div class="popover-item">
            <${t}
              ?open=${!0}
              label="Left Top"
              text="Arrow at left-top"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${o.LEFT_TOP}
              ?withpadding=${!0}
            >
              <${e} slot="target" buttontext="Left Top"></${e}>
            </${t}>
          </div>
          <div class="popover-item">
            <${t}
              ?open=${!0}
              label="Left Bottom"
              text="Arrow at left-bottom"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${o.LEFT_BOTTOM}
              ?withpadding=${!0}
            >
              <${e} slot="target" buttontext="Left Bottom"></${e}>
            </${t}>
          </div>
        </div>
        <div class="popover-row">
          <div class="popover-item">
            <${t}
              ?open=${!0}
              label="Right"
              text="Arrow at right"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${o.RIGHT}
              ?withpadding=${!0}
            >
              <${e} slot="target" buttontext="Right"></${e}>
            </${t}>
          </div>
          <div class="popover-item">
            <${t}
              ?open=${!0}
              label="Right Top"
              text="Arrow at right-top"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${o.RIGHT_TOP}
              ?withpadding=${!0}
            >
              <${e} slot="target" buttontext="Right Top"></${e}>
            </${t}>
          </div>
          <div class="popover-item">
            <${t}
              ?open=${!0}
              label="Right Bottom"
              text="Arrow at right-bottom"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${o.RIGHT_BOTTOM}
              ?withpadding=${!0}
            >
              <${e} slot="target" buttontext="Right Bottom"></${e}>
            </${t}>
          </div>
          <div class="popover-item">
            <${t}
              ?open=${!0}
              label="No Arrow"
              text="Arrow set to NONE"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${o.NONE}
              ?withpadding=${!0}
            >
              <${e} slot="target" buttontext="No Arrow"></${e}>
            </${t}>
          </div>
        </div>
      </div>

      <!-- Dark Theme Section -->
      <div class="popover-section">
        <h3>Dark Theme (Inverse)</h3>
        <div class="popover-row">
          <div class="popover-item">
            <${t}
              ?open=${!0}
              label="Dark Theme"
              text="Popover with inverse styling"
              ?showLabel=${!0}
              ?showText=${!0}
              ?inverse=${!0}
              .arrow=${o.TOP}
              ?withpadding=${!0}
            >
              <${e} slot="target" buttontext="Dark Top"></${e}>
            </${t}>
          </div>
          <div class="popover-item">
            <${t}
              ?open=${!0}
              label="Dark Right"
              text="Dark theme with right arrow"
              ?showLabel=${!0}
              ?showText=${!0}
              ?inverse=${!0}
              .arrow=${o.RIGHT}
              ?withpadding=${!0}
            >
              <${e} slot="target" buttontext="Dark Right"></${e}>
            </${t}>
          </div>
          <div class="popover-item">
            <${t}
              ?open=${!0}
              label="Dark Bottom"
              text="Dark theme with bottom arrow"
              ?showLabel=${!0}
              ?showText=${!0}
              ?inverse=${!0}
              .arrow=${o.BOTTOM}
              ?withpadding=${!0}
            >
              <${e} slot="target" buttontext="Dark Bottom"></${e}>
            </${t}>
          </div>
        </div>
      </div>

      <!-- Content Variations Section -->
      <div class="popover-section">
        <h3>Content Variations</h3>
        <div class="popover-row">
          <div class="popover-item">
            <${t}
              ?open=${!0}
              label="Label Only"
              ?showLabel=${!0}
              ?showText=${!1}
              .arrow=${o.TOP}
              ?withpadding=${!0}
            >
              <${e} slot="target" buttontext="Label Only"></${e}>
            </${t}>
          </div>
          <div class="popover-item">
            <${t}
              ?open=${!0}
              text="Text only, no label shown"
              ?showLabel=${!1}
              ?showText=${!0}
              .arrow=${o.TOP}
              ?withpadding=${!0}
            >
              <${e} slot="target" buttontext="Text Only"></${e}>
            </${t}>
          </div>
          <div class="popover-item">
            <${t}
              ?open=${!0}
              label="With Close"
              text="Popover with close button"
              ?showLabel=${!0}
              ?showText=${!0}
              ?showCloseIcon=${!0}
              .arrow=${o.TOP}
              ?withpadding=${!0}
            >
              <${e} slot="target" buttontext="With Close"></${e}>
            </${t}>
          </div>
        </div>
      </div>

      <!-- Layout Options Section -->
      <div class="popover-section">
        <h3>Layout Options</h3>
        <div class="popover-row">
          <div class="popover-item">
            <${t}
              ?open=${!0}
              label="No Padding"
              text="Content without internal padding"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${o.TOP}
              ?withpadding=${!1}
            >
              <${e} slot="target" buttontext="No Padding"></${e}>
            </${t}>
          </div>
          <div class="popover-item">
            <${t}
              ?open=${!0}
              label="With Padding"
              text="Content with internal padding"
              ?showLabel=${!0}
              ?showText=${!0}
              .arrow=${o.TOP}
              ?withpadding=${!0}
            >
              <${e} slot="target" buttontext="With Padding"></${e}>
            </${t}>
          </div>
          <div class="popover-item">
            <${t}
              ?open=${!0}
              label="Hover Disabled"
              text="Must be controlled via open property"
              ?showLabel=${!0}
              ?showText=${!0}
              ?showCloseIcon=${!0}
              .arrow=${o.TOP}
              ?withpadding=${!0}
              ?disableHover=${!0}
            >
              <${e} slot="target" buttontext="No Hover"></${e}>
            </${t}>
          </div>
        </div>
      </div>

      <!-- Combined States Section -->
      <div class="popover-section">
        <h3>Combined States</h3>
        <div class="popover-row">
          <div class="popover-item">
            <${t}
              ?open=${!0}
              label="Full Featured"
              text="Dark theme with close icon, padding, and custom arrow"
              ?showLabel=${!0}
              ?showText=${!0}
              ?showCloseIcon=${!0}
              ?inverse=${!0}
              .arrow=${o.RIGHT_TOP}
              ?withpadding=${!0}
            >
              <${e} slot="target" buttontext="Full Featured"></${e}>
            </${t}>
          </div>
          <div class="popover-item">
            <${t}
              ?open=${!0}
              text="Minimal popover with no arrow or padding"
              ?showLabel=${!1}
              ?showText=${!0}
              .arrow=${o.NONE}
              ?withpadding=${!1}
            >
              <${e} slot="target" buttontext="Minimal"></${e}>
            </${t}>
          </div>
        </div>
      </div>
    </div>
  `};var N,O,b;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Default',
  render: args => {
    return html\`
    <\${ENCHANTED_POPOVER_TAG}
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
      <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="\${args.buttontext}"></\${ENCHANTED_BUTTON_TAG}>
    </\${ENCHANTED_POPOVER_TAG}>
  \`;
  }
}`,...(b=(O=h.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var A,_,g,m,x;T.parameters={...T.parameters,docs:{...(A=T.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
            <\${ENCHANTED_POPOVER_TAG}
              ?open=\${true}
              label="Top"
              text="Arrow at top"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.TOP}
              ?withpadding=\${true}
            >
              <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Top"></\${ENCHANTED_BUTTON_TAG}>
            </\${ENCHANTED_POPOVER_TAG}>
          </div>
          <div class="popover-item">
            <\${ENCHANTED_POPOVER_TAG}
              ?open=\${true}
              label="Top Left"
              text="Arrow at top-left"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.TOP_LEFT}
              ?withpadding=\${true}
            >
              <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Top Left"></\${ENCHANTED_BUTTON_TAG}>
            </\${ENCHANTED_POPOVER_TAG}>
          </div>
          <div class="popover-item">
            <\${ENCHANTED_POPOVER_TAG}
              ?open=\${true}
              label="Top Right"
              text="Arrow at top-right"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.TOP_RIGHT}
              ?withpadding=\${true}
            >
              <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Top Right"></\${ENCHANTED_BUTTON_TAG}>
            </\${ENCHANTED_POPOVER_TAG}>
          </div>
        </div>
        <div class="popover-row">
          <div class="popover-item">
            <\${ENCHANTED_POPOVER_TAG}
              ?open=\${true}
              label="Bottom"
              text="Arrow at bottom"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.BOTTOM}
              ?withpadding=\${true}
            >
              <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Bottom"></\${ENCHANTED_BUTTON_TAG}>
            </\${ENCHANTED_POPOVER_TAG}>
          </div>
          <div class="popover-item">
            <\${ENCHANTED_POPOVER_TAG}
              ?open=\${true}
              label="Bottom Left"
              text="Arrow at bottom-left"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.BOTTOM_LEFT}
              ?withpadding=\${true}
            >
              <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Bottom Left"></\${ENCHANTED_BUTTON_TAG}>
            </\${ENCHANTED_POPOVER_TAG}>
          </div>
          <div class="popover-item">
            <\${ENCHANTED_POPOVER_TAG}
              ?open=\${true}
              label="Bottom Right"
              text="Arrow at bottom-right"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.BOTTOM_RIGHT}
              ?withpadding=\${true}
            >
              <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Bottom Right"></\${ENCHANTED_BUTTON_TAG}>
            </\${ENCHANTED_POPOVER_TAG}>
          </div>
        </div>
        <div class="popover-row">
          <div class="popover-item">
            <\${ENCHANTED_POPOVER_TAG}
              ?open=\${true}
              label="Left"
              text="Arrow at left"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.LEFT}
              ?withpadding=\${true}
            >
              <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Left"></\${ENCHANTED_BUTTON_TAG}>
            </\${ENCHANTED_POPOVER_TAG}>
          </div>
          <div class="popover-item">
            <\${ENCHANTED_POPOVER_TAG}
              ?open=\${true}
              label="Left Top"
              text="Arrow at left-top"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.LEFT_TOP}
              ?withpadding=\${true}
            >
              <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Left Top"></\${ENCHANTED_BUTTON_TAG}>
            </\${ENCHANTED_POPOVER_TAG}>
          </div>
          <div class="popover-item">
            <\${ENCHANTED_POPOVER_TAG}
              ?open=\${true}
              label="Left Bottom"
              text="Arrow at left-bottom"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.LEFT_BOTTOM}
              ?withpadding=\${true}
            >
              <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Left Bottom"></\${ENCHANTED_BUTTON_TAG}>
            </\${ENCHANTED_POPOVER_TAG}>
          </div>
        </div>
        <div class="popover-row">
          <div class="popover-item">
            <\${ENCHANTED_POPOVER_TAG}
              ?open=\${true}
              label="Right"
              text="Arrow at right"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.RIGHT}
              ?withpadding=\${true}
            >
              <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Right"></\${ENCHANTED_BUTTON_TAG}>
            </\${ENCHANTED_POPOVER_TAG}>
          </div>
          <div class="popover-item">
            <\${ENCHANTED_POPOVER_TAG}
              ?open=\${true}
              label="Right Top"
              text="Arrow at right-top"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.RIGHT_TOP}
              ?withpadding=\${true}
            >
              <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Right Top"></\${ENCHANTED_BUTTON_TAG}>
            </\${ENCHANTED_POPOVER_TAG}>
          </div>
          <div class="popover-item">
            <\${ENCHANTED_POPOVER_TAG}
              ?open=\${true}
              label="Right Bottom"
              text="Arrow at right-bottom"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.RIGHT_BOTTOM}
              ?withpadding=\${true}
            >
              <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Right Bottom"></\${ENCHANTED_BUTTON_TAG}>
            </\${ENCHANTED_POPOVER_TAG}>
          </div>
          <div class="popover-item">
            <\${ENCHANTED_POPOVER_TAG}
              ?open=\${true}
              label="No Arrow"
              text="Arrow set to NONE"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.NONE}
              ?withpadding=\${true}
            >
              <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="No Arrow"></\${ENCHANTED_BUTTON_TAG}>
            </\${ENCHANTED_POPOVER_TAG}>
          </div>
        </div>
      </div>

      <!-- Dark Theme Section -->
      <div class="popover-section">
        <h3>Dark Theme (Inverse)</h3>
        <div class="popover-row">
          <div class="popover-item">
            <\${ENCHANTED_POPOVER_TAG}
              ?open=\${true}
              label="Dark Theme"
              text="Popover with inverse styling"
              ?showLabel=\${true}
              ?showText=\${true}
              ?inverse=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.TOP}
              ?withpadding=\${true}
            >
              <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Dark Top"></\${ENCHANTED_BUTTON_TAG}>
            </\${ENCHANTED_POPOVER_TAG}>
          </div>
          <div class="popover-item">
            <\${ENCHANTED_POPOVER_TAG}
              ?open=\${true}
              label="Dark Right"
              text="Dark theme with right arrow"
              ?showLabel=\${true}
              ?showText=\${true}
              ?inverse=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.RIGHT}
              ?withpadding=\${true}
            >
              <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Dark Right"></\${ENCHANTED_BUTTON_TAG}>
            </\${ENCHANTED_POPOVER_TAG}>
          </div>
          <div class="popover-item">
            <\${ENCHANTED_POPOVER_TAG}
              ?open=\${true}
              label="Dark Bottom"
              text="Dark theme with bottom arrow"
              ?showLabel=\${true}
              ?showText=\${true}
              ?inverse=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.BOTTOM}
              ?withpadding=\${true}
            >
              <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Dark Bottom"></\${ENCHANTED_BUTTON_TAG}>
            </\${ENCHANTED_POPOVER_TAG}>
          </div>
        </div>
      </div>

      <!-- Content Variations Section -->
      <div class="popover-section">
        <h3>Content Variations</h3>
        <div class="popover-row">
          <div class="popover-item">
            <\${ENCHANTED_POPOVER_TAG}
              ?open=\${true}
              label="Label Only"
              ?showLabel=\${true}
              ?showText=\${false}
              .arrow=\${EnchantedPopoverArrowPosition.TOP}
              ?withpadding=\${true}
            >
              <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Label Only"></\${ENCHANTED_BUTTON_TAG}>
            </\${ENCHANTED_POPOVER_TAG}>
          </div>
          <div class="popover-item">
            <\${ENCHANTED_POPOVER_TAG}
              ?open=\${true}
              text="Text only, no label shown"
              ?showLabel=\${false}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.TOP}
              ?withpadding=\${true}
            >
              <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Text Only"></\${ENCHANTED_BUTTON_TAG}>
            </\${ENCHANTED_POPOVER_TAG}>
          </div>
          <div class="popover-item">
            <\${ENCHANTED_POPOVER_TAG}
              ?open=\${true}
              label="With Close"
              text="Popover with close button"
              ?showLabel=\${true}
              ?showText=\${true}
              ?showCloseIcon=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.TOP}
              ?withpadding=\${true}
            >
              <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="With Close"></\${ENCHANTED_BUTTON_TAG}>
            </\${ENCHANTED_POPOVER_TAG}>
          </div>
        </div>
      </div>

      <!-- Layout Options Section -->
      <div class="popover-section">
        <h3>Layout Options</h3>
        <div class="popover-row">
          <div class="popover-item">
            <\${ENCHANTED_POPOVER_TAG}
              ?open=\${true}
              label="No Padding"
              text="Content without internal padding"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.TOP}
              ?withpadding=\${false}
            >
              <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="No Padding"></\${ENCHANTED_BUTTON_TAG}>
            </\${ENCHANTED_POPOVER_TAG}>
          </div>
          <div class="popover-item">
            <\${ENCHANTED_POPOVER_TAG}
              ?open=\${true}
              label="With Padding"
              text="Content with internal padding"
              ?showLabel=\${true}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.TOP}
              ?withpadding=\${true}
            >
              <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="With Padding"></\${ENCHANTED_BUTTON_TAG}>
            </\${ENCHANTED_POPOVER_TAG}>
          </div>
          <div class="popover-item">
            <\${ENCHANTED_POPOVER_TAG}
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
              <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="No Hover"></\${ENCHANTED_BUTTON_TAG}>
            </\${ENCHANTED_POPOVER_TAG}>
          </div>
        </div>
      </div>

      <!-- Combined States Section -->
      <div class="popover-section">
        <h3>Combined States</h3>
        <div class="popover-row">
          <div class="popover-item">
            <\${ENCHANTED_POPOVER_TAG}
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
              <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Full Featured"></\${ENCHANTED_BUTTON_TAG}>
            </\${ENCHANTED_POPOVER_TAG}>
          </div>
          <div class="popover-item">
            <\${ENCHANTED_POPOVER_TAG}
              ?open=\${true}
              text="Minimal popover with no arrow or padding"
              ?showLabel=\${false}
              ?showText=\${true}
              .arrow=\${EnchantedPopoverArrowPosition.NONE}
              ?withpadding=\${false}
            >
              <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Minimal"></\${ENCHANTED_BUTTON_TAG}>
            </\${ENCHANTED_POPOVER_TAG}>
          </div>
        </div>
      </div>
    </div>
  \`;
  }
}`,...(g=(_=T.parameters)==null?void 0:_.docs)==null?void 0:g.source},description:{story:`Comprehensive showcase of all popover states and arrow positions.
This story demonstrates:
- All 13 arrow positions (12 clock positions + NONE)
- Light and dark themes (inverse property)
- With/without padding
- With/without close icon
- Label and text visibility combinations`,...(x=(m=T.parameters)==null?void 0:m.docs)==null?void 0:x.description}}};const j=["EnchantedPopoverStory","AllStates"];export{T as AllStates,h as EnchantedPopoverStory,j as __namedExportsOrder,z as default};
