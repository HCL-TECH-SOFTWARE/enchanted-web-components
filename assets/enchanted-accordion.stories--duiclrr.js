import{c as g,d as h,E as f,L as R,g as T,u as n,n as d,e,f as b}from"./tags-Dua8CojJ.js";import{x as w,E as C}from"./iframe-DNG6NGwD.js";import{r as I}from"./state-fRMCsTN1.js";import{l as N}from"./lodash-CNEZJmwz.js";import{g as S}from"./localization-Pwna_gtP.js";import{A as t}from"./cssClassEnums-mKa0OyBd.js";import{t as k}from"./index-CuTRIAwF.js";import{c as H,I as G,B as L}from"./tags-BViZhp05.js";import{K as A}from"./keyboardEventKeys-BnoN8uA3.js";import"./preload-helper-C1FmrZbK.js";var $={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"}}],name:"chevron--down",size:32};const m=`${G}icon-chevron-down`;class M extends L{render(){return w`${k({...$,attrs:{...$.attrs,preserveAspectRatio:"xMidYMid"}})}`}}H&&!customElements.get(m)&&customElements.define(m,M);var W=Object.defineProperty,a=(o,s,y,V)=>{for(var r=void 0,p=o.length-1,u;p>=0;p--)(u=o[p])&&(r=u(s,y,r)||r);return r&&W(s,y,r),r};const B=g("enchanted-web-components:components:atomic-component:enchanted-accordion.ts");let i=class extends f{constructor(){super(...arguments),this.showCheckbox=!1,this.disabled=!1,this.showSecondaryText=!1,this.type="outlined",this.open=!1,this.label="",this.secondaryText="",this.isLTR=S()===R.LTR}toggleAccordion(){this.disabled||(this.open=!this.open)}handleKeyToggle(s){(s.key===A.ENTER||s.key===A.SPACE)&&(s.preventDefault(),this.toggleAccordion())}handleArrowClick(s){s.stopPropagation(),this.toggleAccordion()}render(){return n`
      <div
        part=${this.isLTR?`${t.ENCHANTED_ACCORDION_CONTAINER}`:`${t.ENCHANTED_ACCORDION_CONTAINER_RTL}`}
      >
        <div
          part=${this.isLTR?`${t.ENCHANTED_ACCORDION_HEADER_SCSS}`:`${t.ENCHANTED_ACCORDION_HEADER_SCSS_RTL}`}
        >
          ${this.showCheckbox?n`<input type="checkbox" ?disabled=${this.disabled} />`:C}
          <div
            part=${this.isLTR?`${t.ENCHANTED_ACCORDION_LABEL_COLUMN}`:`${t.ENCHANTED_ACCORDION_LABEL_COLUMN_RTL}`}
            role="button"
            tabindex="-1"
            aria-expanded="${this.open}"
            aria-disabled="${this.disabled}"
            @keydown=${this.handleKeyToggle}
            @click=${N.debounce(this.toggleAccordion,300)}
          >
            ${this.label?n`<div
                  part=${this.isLTR?`${t.ENCHANTED_ACCORDION_LABEL_TEXT}`:`${t.ENCHANTED_ACCORDION_LABEL_TEXT_RTL}`}
                >
                  ${this.label}
                </div>`:n`<slot name="header"
                  >${this.getMessage("accordion.header.text")}</slot
                >`}
            ${this.showSecondaryText?n`<div
                  part=${this.isLTR?"secondary-text":"secondary-text-rtl"}
                >
                  ${this.secondaryText||n`<slot name="secondary"
                    >${this.getMessage("accordion.secondary.text")}</slot
                  >`}
                </div>`:C}
          </div>
        </div>
        <span
          part=${this.isLTR?`${t.ENCHANTED_ACCORDION_ARROW}`:`${t.ENCHANTED_ACCORDION_ARROW_RTL}`}
          role="button"
          tabindex="0"
          aria-label="Toggle accordion"
          @click=${N.debounce(this.handleArrowClick,300)}
          @keydown=${this.handleKeyToggle}
        >
          <${T("icon-chevron-down")}
            part=${this.isLTR?`${t.ENCHANTED_ACCORDION_ARROW_ICON}`:`${t.ENCHANTED_ACCORDION_ARROW_ICON_RTL}`}
            size="16"
          ></${T("icon-chevron-down")}>
        </span>
      </div>
      ${this.open?n`
            <div
              part=${this.isLTR?`${t.ENCHANTED_ACCORDION_CONTENT}`:`${t.ENCHANTED_ACCORDION_CONTENT_RTL}`}
            >
              <slot
                name="accordion-items"
                @slotchange=${this.handleSlotChange}
              ></slot>
            </div>
          `:C}
    `}handleSlotChange(){this.requestUpdate()}};a([d({type:Boolean,reflect:!0})],i.prototype,"showCheckbox");a([d({type:Boolean,reflect:!0})],i.prototype,"disabled");a([d({type:Boolean,reflect:!0})],i.prototype,"showSecondaryText");a([d({type:String})],i.prototype,"type");a([d({type:Boolean,reflect:!0})],i.prototype,"open");a([d({type:String})],i.prototype,"label");a([d({type:String})],i.prototype,"secondaryText");a([I()],i.prototype,"isLTR");customElements.get(h)?B("Component (%s) is currently registered and not possible to registrate again.",h):customElements.define(h,i);const Z={title:"Navigation/enchanted-accordion",component:"enchanted-accordion",tags:["autodocs"],argTypes:{type:{control:{type:"radio"},options:["outlined","no-outline"],description:"Defines the accordion style type",table:{type:{summary:"outlined | no-outline"},defaultValue:{summary:"outlined"}}},showCheckbox:{control:{type:"boolean"},description:"Controls the visibility of a checkbox in the accordion header",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"Disables the accordion, preventing user interaction",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},showSecondaryText:{control:{type:"boolean"},description:"Controls the visibility of secondary text below the label",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},open:{control:{type:"boolean"},description:"Controls whether the accordion is expanded or collapsed",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},label:{control:{type:"text"},description:"Main label text displayed in the accordion header",table:{type:{summary:"string"},defaultValue:{summary:""}}},secondaryText:{control:{type:"text"},description:"Secondary text displayed below the label (when showSecondaryText is true)",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{type:"outlined",showCheckbox:!1,disabled:!1,showSecondaryText:!1,open:!1,label:"Accordion label",secondaryText:"Secondary text"},parameters:{docs:{description:{component:"An accordion component that allows collapsible content sections with support for checkboxes, secondary text, and multiple visual styles. Supports both LTR and RTL layouts. The accordion can be toggled by clicking on the label area or the arrow icon."}}}},c={render:o=>n`
      <${e}
        type=${o.type}
        ?showCheckbox=${o.showCheckbox}
        ?disabled=${o.disabled}
        ?showSecondaryText=${o.showSecondaryText}
        ?open=${o.open}
        .label=${o.label}
        .secondaryText=${o.secondaryText}
      >
        <div slot="accordion-items">Accordion content goes here.</div>
        <${b}
          slot="accordion-items"
          label="security settings"
          secondaryText="Security settings description"
        ></${b}>
      </${e}>
      <${e}
        type=${o.type}
        ?showCheckbox=${o.showCheckbox}
        ?disabled=${o.disabled}
        ?showSecondaryText=${o.showSecondaryText}
        ?open=${o.open}
        .label=${o.label}
        .secondaryText=${o.secondaryText}
      >
        <div slot="accordion-items">Accordion content goes here.</div>
      </${e}>
      <${e}
        type=${o.type}
        ?showCheckbox=${o.showCheckbox}
        ?disabled=${o.disabled}
        ?showSecondaryText=${o.showSecondaryText}
        ?open=${o.open}
        .label=${o.label}
        .secondaryText=${o.secondaryText}
      >
        <div slot="accordion-items">Accordion content goes here.</div>
      </${e}>
    `,name:"Default",parameters:{docs:{description:{story:"Default accordion with customizable properties. Toggle open/closed state, add checkboxes, and display secondary text. Try different combinations of the controls to see how the component behaves."}}}},l={render:()=>n`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div><strong>Outlined Type</strong></div>
        <${e}
          type="outlined"
          label="Outlined - Closed"
          ?open=${!1}
        >
          <div slot="accordion-items">Content for outlined accordion.</div>
        </${e}>
        <${e}
          type="outlined"
          label="Outlined - Open"
          ?open=${!0}
        >
          <div slot="accordion-items">Content for outlined accordion.</div>
        </${e}>
        <${e}
          type="outlined"
          label="Outlined - With Checkbox"
          ?showCheckbox=${!0}
        >
          <div slot="accordion-items">Content with checkbox.</div>
        </${e}>
        <${e}
          type="outlined"
          label="Outlined - With Secondary Text"
          secondaryText="This is secondary text"
          ?showSecondaryText=${!0}
        >
          <div slot="accordion-items">Content with secondary text.</div>
        </${e}>
        <${e}
          type="outlined"
          label="Outlined - Disabled"
          ?disabled=${!0}
        >
          <div slot="accordion-items">Disabled accordion content.</div>
        </${e}>

        <div style="margin-top: 24px;"><strong>No-Outline Type</strong></div>
        <${e}
          type="no-outline"
          label="No-Outline - Closed"
          ?open=${!1}
        >
          <div slot="accordion-items">Content for no-outline accordion.</div>
        </${e}>
        <${e}
          type="no-outline"
          label="No-Outline - Open"
          ?open=${!0}
        >
          <div slot="accordion-items">Content for no-outline accordion.</div>
        </${e}>
        <${e}
          type="no-outline"
          label="No-Outline - With Checkbox"
          ?showCheckbox=${!0}
        >
          <div slot="accordion-items">Content with checkbox.</div>
        </${e}>
        <${e}
          type="no-outline"
          label="No-Outline - With Secondary Text"
          secondaryText="This is secondary text"
          ?showSecondaryText=${!0}
        >
          <div slot="accordion-items">Content with secondary text.</div>
        </${e}>
        <${e}
          type="no-outline"
          label="No-Outline - Disabled"
          ?disabled=${!0}
        >
          <div slot="accordion-items">Disabled accordion content.</div>
        </${e}>

        <div style="margin-top: 24px;"><strong>Combined Features</strong></div>
        <${e}
          type="outlined"
          label="All Features Combined"
          secondaryText="With checkbox and secondary text"
          ?showCheckbox=${!0}
          ?showSecondaryText=${!0}
          ?open=${!0}
        >
          <div slot="accordion-items">
            This accordion demonstrates all features: outlined type, checkbox, secondary text, and open state.
          </div>
        </${e}>
      </div>
    `,parameters:{docs:{description:{story:"Showcase of all accordion states and variations including both types (outlined and no-outline), open/closed states, with checkboxes, secondary text, disabled state, and combined features. This demonstrates the complete range of accordion configurations available."}}}};var x,O,E;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <\${ENCHANTED_ACCORDION_TAG}
        type=\${args.type}
        ?showCheckbox=\${args.showCheckbox}
        ?disabled=\${args.disabled}
        ?showSecondaryText=\${args.showSecondaryText}
        ?open=\${args.open}
        .label=\${args.label}
        .secondaryText=\${args.secondaryText}
      >
        <div slot="accordion-items">Accordion content goes here.</div>
        <\${ENCHANTED_ACCORDION_SUMMARY_TAG}
          slot="accordion-items"
          label="security settings"
          secondaryText="Security settings description"
        ></\${ENCHANTED_ACCORDION_SUMMARY_TAG}>
      </\${ENCHANTED_ACCORDION_TAG}>
      <\${ENCHANTED_ACCORDION_TAG}
        type=\${args.type}
        ?showCheckbox=\${args.showCheckbox}
        ?disabled=\${args.disabled}
        ?showSecondaryText=\${args.showSecondaryText}
        ?open=\${args.open}
        .label=\${args.label}
        .secondaryText=\${args.secondaryText}
      >
        <div slot="accordion-items">Accordion content goes here.</div>
      </\${ENCHANTED_ACCORDION_TAG}>
      <\${ENCHANTED_ACCORDION_TAG}
        type=\${args.type}
        ?showCheckbox=\${args.showCheckbox}
        ?disabled=\${args.disabled}
        ?showSecondaryText=\${args.showSecondaryText}
        ?open=\${args.open}
        .label=\${args.label}
        .secondaryText=\${args.secondaryText}
      >
        <div slot="accordion-items">Accordion content goes here.</div>
      </\${ENCHANTED_ACCORDION_TAG}>
    \`;
  },
  name: 'Default',
  parameters: {
    docs: {
      description: {
        story: 'Default accordion with customizable properties. Toggle open/closed state, add checkboxes, ' + 'and display secondary text. Try different combinations of the controls to see how the component behaves.'
      }
    }
  }
}`,...(E=(O=c.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var _,D,v;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div><strong>Outlined Type</strong></div>
        <\${ENCHANTED_ACCORDION_TAG}
          type="outlined"
          label="Outlined - Closed"
          ?open=\${false}
        >
          <div slot="accordion-items">Content for outlined accordion.</div>
        </\${ENCHANTED_ACCORDION_TAG}>
        <\${ENCHANTED_ACCORDION_TAG}
          type="outlined"
          label="Outlined - Open"
          ?open=\${true}
        >
          <div slot="accordion-items">Content for outlined accordion.</div>
        </\${ENCHANTED_ACCORDION_TAG}>
        <\${ENCHANTED_ACCORDION_TAG}
          type="outlined"
          label="Outlined - With Checkbox"
          ?showCheckbox=\${true}
        >
          <div slot="accordion-items">Content with checkbox.</div>
        </\${ENCHANTED_ACCORDION_TAG}>
        <\${ENCHANTED_ACCORDION_TAG}
          type="outlined"
          label="Outlined - With Secondary Text"
          secondaryText="This is secondary text"
          ?showSecondaryText=\${true}
        >
          <div slot="accordion-items">Content with secondary text.</div>
        </\${ENCHANTED_ACCORDION_TAG}>
        <\${ENCHANTED_ACCORDION_TAG}
          type="outlined"
          label="Outlined - Disabled"
          ?disabled=\${true}
        >
          <div slot="accordion-items">Disabled accordion content.</div>
        </\${ENCHANTED_ACCORDION_TAG}>

        <div style="margin-top: 24px;"><strong>No-Outline Type</strong></div>
        <\${ENCHANTED_ACCORDION_TAG}
          type="no-outline"
          label="No-Outline - Closed"
          ?open=\${false}
        >
          <div slot="accordion-items">Content for no-outline accordion.</div>
        </\${ENCHANTED_ACCORDION_TAG}>
        <\${ENCHANTED_ACCORDION_TAG}
          type="no-outline"
          label="No-Outline - Open"
          ?open=\${true}
        >
          <div slot="accordion-items">Content for no-outline accordion.</div>
        </\${ENCHANTED_ACCORDION_TAG}>
        <\${ENCHANTED_ACCORDION_TAG}
          type="no-outline"
          label="No-Outline - With Checkbox"
          ?showCheckbox=\${true}
        >
          <div slot="accordion-items">Content with checkbox.</div>
        </\${ENCHANTED_ACCORDION_TAG}>
        <\${ENCHANTED_ACCORDION_TAG}
          type="no-outline"
          label="No-Outline - With Secondary Text"
          secondaryText="This is secondary text"
          ?showSecondaryText=\${true}
        >
          <div slot="accordion-items">Content with secondary text.</div>
        </\${ENCHANTED_ACCORDION_TAG}>
        <\${ENCHANTED_ACCORDION_TAG}
          type="no-outline"
          label="No-Outline - Disabled"
          ?disabled=\${true}
        >
          <div slot="accordion-items">Disabled accordion content.</div>
        </\${ENCHANTED_ACCORDION_TAG}>

        <div style="margin-top: 24px;"><strong>Combined Features</strong></div>
        <\${ENCHANTED_ACCORDION_TAG}
          type="outlined"
          label="All Features Combined"
          secondaryText="With checkbox and secondary text"
          ?showCheckbox=\${true}
          ?showSecondaryText=\${true}
          ?open=\${true}
        >
          <div slot="accordion-items">
            This accordion demonstrates all features: outlined type, checkbox, secondary text, and open state.
          </div>
        </\${ENCHANTED_ACCORDION_TAG}>
      </div>
    \`;
  },
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all accordion states and variations including both types (outlined and no-outline), ' + 'open/closed states, with checkboxes, secondary text, disabled state, and combined features. ' + 'This demonstrates the complete range of accordion configurations available.'
      }
    }
  }
}`,...(v=(D=l.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};const ee=["EnchantedAccordion","AllStates"];export{l as AllStates,c as EnchantedAccordion,ee as __namedExportsOrder,Z as default};
