import{c as w,a8 as h,a as v,L,u as i,g as b,n as r,a9 as u,aa as e,ab as t}from"./tags-CwWDjGJh.js";import{x as A,E as O}from"./iframe-DY3tjC3r.js";import{r as G}from"./state-Db0ArEf-.js";import{l as m}from"./lodash-CdDiHlzQ.js";import{g as k}from"./localization-wc-AMdX0.js";import{A as n,a as E,a5 as d}from"./cssClassEnums-CMPlQyPz.js";import{t as U}from"./index-CuTRIAwF.js";import{c as W,I as B,B as P}from"./tags-DoreIf3C.js";import{K as D}from"./keyboardEventKeys-BnoN8uA3.js";var R={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"}}],name:"chevron--down",size:32};const x=`${B}icon-chevron-down`;class V extends P{render(){return A`${U({...R,attrs:{...R.attrs,preserveAspectRatio:"xMidYMid"}})}`}}W&&!customElements.get(x)&&customElements.define(x,V);var z=Object.defineProperty,c=(o,s,N,Y)=>{for(var a=void 0,C=o.length-1,T;C>=0;C--)(T=o[C])&&(a=T(s,N,a)||a);return a&&z(s,N,a),a};const K=w("enchanted-web-components:components:atomic-component:enchanted-accordion.ts");let l=class extends v{constructor(){super(...arguments),this.showCheckbox=!1,this.disabled=!1,this.showSecondaryText=!1,this.type="outlined",this.open=!1,this.label="",this.secondaryText="",this.isLTR=k()===L.LTR}toggleAccordion(){this.disabled||(this.open=!this.open)}handleKeyToggle(s){(s.key===D.ENTER||s.key===D.SPACE)&&(s.preventDefault(),this.toggleAccordion())}handleArrowClick(s){s.stopPropagation(),this.toggleAccordion()}render(){return i`
      <div
        part=${this.isLTR?`${n.ENCHANTED_ACCORDION_CONTAINER}`:`${n.ENCHANTED_ACCORDION_CONTAINER_RTL}`}
      >
        <div
          part=${this.isLTR?`${n.ENCHANTED_ACCORDION_HEADER_SCSS}`:`${n.ENCHANTED_ACCORDION_HEADER_SCSS_RTL}`}
        >
          ${this.showCheckbox?i`<input type="checkbox" ?disabled=${this.disabled} />`:O}
          <div
            part=${this.isLTR?`${n.ENCHANTED_ACCORDION_LABEL_COLUMN}`:`${n.ENCHANTED_ACCORDION_LABEL_COLUMN_RTL}`}
            role="button"
            tabindex="-1"
            aria-expanded="${this.open}"
            aria-disabled="${this.disabled}"
            @keydown=${this.handleKeyToggle}
            @click=${m.debounce(this.toggleAccordion,300)}
          >
            ${this.label?i`<div
                  part=${this.isLTR?`${n.ENCHANTED_ACCORDION_LABEL_TEXT}`:`${n.ENCHANTED_ACCORDION_LABEL_TEXT_RTL}`}
                >
                  ${this.label}
                </div>`:i`<slot name="${E.HEADER}"
                  >${this.getMessage("accordion.header.text")}</slot
                >`}
            ${this.showSecondaryText?i`<div
                  part=${this.isLTR?n.ENCHANTED_ACCORDION_SECONDARY_TEXT:n.ENCHANTED_ACCORDION_SECONDARY_TEXT_RTL}
                >
                  ${this.secondaryText||i`<slot name="${E.SECONDARY}"
                    >${this.getMessage("accordion.secondary.text")}</slot
                  >`}
                </div>`:O}
          </div>
        </div>
        <span
          part=${this.isLTR?`${n.ENCHANTED_ACCORDION_ARROW}`:`${n.ENCHANTED_ACCORDION_ARROW_RTL}`}
          role="button"
          tabindex="0"
          aria-label="Toggle accordion"
          @click=${m.debounce(this.handleArrowClick,300)}
          @keydown=${this.handleKeyToggle}
        >
          <${b("icon-chevron-down")}
            part=${this.isLTR?`${n.ENCHANTED_ACCORDION_ARROW_ICON}`:`${n.ENCHANTED_ACCORDION_ARROW_ICON_RTL}`}
            size="16"
          ></${b("icon-chevron-down")}>
        </span>
      </div>
      ${this.open?i`
            <div
              part=${this.isLTR?`${n.ENCHANTED_ACCORDION_CONTENT}`:`${n.ENCHANTED_ACCORDION_CONTENT_RTL}`}
            >
              <slot
                name="${E.ACCORDION_ITEMS}"
                @slotchange=${this.handleSlotChange}
              ></slot>
            </div>
          `:O}
    `}handleSlotChange(){this.requestUpdate()}};c([r({type:Boolean,reflect:!0})],l.prototype,"showCheckbox");c([r({type:Boolean,reflect:!0})],l.prototype,"disabled");c([r({type:Boolean,reflect:!0})],l.prototype,"showSecondaryText");c([r({type:String})],l.prototype,"type");c([r({type:Boolean,reflect:!0})],l.prototype,"open");c([r({type:String})],l.prototype,"label");c([r({type:String})],l.prototype,"secondaryText");c([G()],l.prototype,"isLTR");customElements.get(h)?K("Component (%s) is currently registered and not possible to registrate again.",h):customElements.define(h,l);var F=Object.defineProperty,$=(o,s,N,Y)=>{for(var a=void 0,C=o.length-1,T;C>=0;C--)(T=o[C])&&(a=T(s,N,a)||a);return a&&F(s,N,a),a};const X=w("enchanted-web-components:components:atomic-component:enchanted-accordion-summary.ts");class _ extends v{constructor(){super(...arguments),this.label="",this.secondaryText="",this.isLTR=k()===L.LTR}render(){return A`
      <div
        part="${this.isLTR?`${d.ENCHANTED_ACCORDION_SUMMARY}`:`${d.ENCHANTED_ACCORDION_SUMMARY_RTL}`}"
      >
        ${this.label?A` <div
              part=${this.isLTR?`${d.ENCHANTED_ACCORDION_LABEL}`:`${d.ENCHANTED_ACCORDION_LABEL_RTL}`}
            >
              ${this.label}
            </div>`:A`<slot name="label"
              >${this.getMessage("accordion.summary.label.text")}</slot
            > `}
        ${this.secondaryText?A` <div
              part="${this.isLTR?`${d.ENCHANTED_ACCORDION_SECONDARY}`:`${d.ENCHANTED_ACCORDION_SECONDARY_RTL}`}"
            >
              ${this.secondaryText}
            </div>`:A`
              <div
                part="${this.isLTR?`${d.ENCHANTED_ACCORDION_SECONDARY}`:`${d.ENCHANTED_ACCORDION_SECONDARY_RTL}`}"
              >
                <slot name="secondary-text"></slot>
              </div>
            `}
        <slot></slot>
      </div>
    `}}$([r({type:String})],_.prototype,"label");$([r({type:String})],_.prototype,"secondaryText");$([G()],_.prototype,"isLTR");customElements.get(u)?X("Component (%s) is currently registered and not possible to registrate again.",u):customElements.define(u,_);const j={title:"Navigation/Enchanted Accordion",component:"enchanted-accordion",tags:["a11y-addon"],argTypes:{type:{control:{type:"radio"},options:["outlined","no-outline"],description:"Defines the accordion style type",table:{type:{summary:"outlined | no-outline"},defaultValue:{summary:"outlined"}}},showCheckbox:{control:{type:"boolean"},description:"Controls the visibility of a checkbox in the accordion header",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"Disables the accordion, preventing user interaction",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},showSecondaryText:{control:{type:"boolean"},description:"Controls the visibility of secondary text below the label",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},open:{control:{type:"boolean"},description:"Controls whether the accordion is expanded or collapsed",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},label:{control:{type:"text"},description:"Main label text displayed in the accordion header",table:{type:{summary:"string"},defaultValue:{summary:""}}},secondaryText:{control:{type:"text"},description:"Secondary text displayed below the label (when showSecondaryText is true)",table:{type:{summary:"string"},defaultValue:{summary:""}}},summaryLabel:{control:{type:"text"},description:"Label text displayed in the accordion-summary content slot",table:{type:{summary:"string"},defaultValue:{summary:""}}},summarySecondaryText:{control:{type:"text"},description:"Secondary text displayed in the accordion-summary content slot",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{type:"outlined",showCheckbox:!1,disabled:!1,showSecondaryText:!1,open:!1,label:"Accordion label",secondaryText:"Secondary text",summaryLabel:"Accordion summary label",summarySecondaryText:"Accordion summary secondary text"},parameters:{docs:{description:{component:"An accordion component that allows collapsible content sections with support for checkboxes, secondary text, and multiple visual styles. Supports both LTR and RTL layouts. The accordion can be toggled by clicking on the label area or the arrow icon."}}}},p={render:o=>i`
      <${e}
        type=${o.type}
        ?showCheckbox=${o.showCheckbox}
        ?disabled=${o.disabled}
        ?showSecondaryText=${o.showSecondaryText}
        ?open=${o.open}
        .label=${o.label}
        .secondaryText=${o.secondaryText}
      >
        <${t}
          slot="accordion-items"
          .label=${o.summaryLabel}
          .secondaryText=${o.summarySecondaryText}
        ></${t}>
      </${e}>
    `,name:"Default",parameters:{docs:{description:{story:"Default accordion with customizable properties. Toggle open/closed state, add checkboxes, and display secondary text. Try different combinations of the controls to see how the component behaves."}}}},y={render:()=>i`
      <div style="display: flex; flex-direction: column;">
        <div><strong>Outlined Type</strong></div>
        <${e}
          type="outlined"
          label="Outlined - Closed"
          ?open=${!1}
        >
          <${t}
            slot="accordion-items"
            label="Content for outlined accordion."
          ></${t}>
        </${e}>
        <${e}
          type="outlined"
          label="Outlined - Open"
          ?open=${!0}
        >
          <${t}
            slot="accordion-items"
            label="Content for outlined accordion."
          ></${t}>
        </${e}>
        <${e}
          type="outlined"
          label="Outlined - With Checkbox"
          ?showCheckbox=${!0}
        >
          <${t}
            slot="accordion-items"
            label="Content with checkbox."
          ></${t}>
        </${e}>
        <${e}
          type="outlined"
          label="Outlined - With Secondary Text"
          secondaryText="This is secondary text"
          ?showSecondaryText=${!0}
        >
          <${t}
            slot="accordion-items"
            label="Content with secondary text."
          ></${t}>
        </${e}>
        <${e}
          type="outlined"
          label="Outlined - Disabled"
          ?disabled=${!0}
        >
          <${t}
            slot="accordion-items"
            label="Disabled accordion content."
          ></${t}>
        </${e}>

        <div style="margin-top: 24px;"><strong>No-Outline Type</strong></div>
        <${e}
          type="no-outline"
          label="No-Outline - Closed"
          ?open=${!1}
        >
          <${t}
            slot="accordion-items"
            label="Content for no-outline accordion."
          ></${t}>
        </${e}>
        <${e}
          type="no-outline"
          label="No-Outline - Open"
          ?open=${!0}
        >
          <${t}
            slot="accordion-items"
            label="Content for no-outline accordion."
          ></${t}>
        </${e}>
        <${e}
          type="no-outline"
          label="No-Outline - With Checkbox"
          ?showCheckbox=${!0}
        >
          <${t}
            slot="accordion-items"
            label="Content with checkbox."
          ></${t}>
        </${e}>
        <${e}
          type="no-outline"
          label="No-Outline - With Secondary Text"
          secondaryText="This is secondary text"
          ?showSecondaryText=${!0}
        >
          <${t}
            slot="accordion-items"
            label="Content with secondary text."
          ></${t}>
        </${e}>
        <${e}
          type="no-outline"
          label="No-Outline - Disabled"
          ?disabled=${!0}
        >
          <${t}
            slot="accordion-items"
            label="Disabled accordion content."
          ></${t}>
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
          <${t}
            slot="accordion-items"
            label="This accordion demonstrates all features: outlined type, checkbox, secondary text, and open state."
            secondaryText="This is secondary text"
          ></${t}>
        </${e}>
      </div>
    `,parameters:{docs:{description:{story:"Showcase of all accordion states and variations including both types (outlined and no-outline), open/closed states, with checkboxes, secondary text, disabled state, and combined features. This demonstrates the complete range of accordion configurations available."}}}},q=["EnchantedAccordion","AllStates"];var f,g,I;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
        <\${ENCHANTED_ACCORDION_SUMMARY_TAG}
          slot="accordion-items"
          .label=\${args.summaryLabel}
          .secondaryText=\${args.summarySecondaryText}
        ></\${ENCHANTED_ACCORDION_SUMMARY_TAG}>
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
}`,...(I=(g=p.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var S,H,M;y.parameters={...y.parameters,docs:{...(S=y.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; flex-direction: column;">
        <div><strong>Outlined Type</strong></div>
        <\${ENCHANTED_ACCORDION_TAG}
          type="outlined"
          label="Outlined - Closed"
          ?open=\${false}
        >
          <\${ENCHANTED_ACCORDION_SUMMARY_TAG}
            slot="accordion-items"
            label="Content for outlined accordion."
          ></\${ENCHANTED_ACCORDION_SUMMARY_TAG}>
        </\${ENCHANTED_ACCORDION_TAG}>
        <\${ENCHANTED_ACCORDION_TAG}
          type="outlined"
          label="Outlined - Open"
          ?open=\${true}
        >
          <\${ENCHANTED_ACCORDION_SUMMARY_TAG}
            slot="accordion-items"
            label="Content for outlined accordion."
          ></\${ENCHANTED_ACCORDION_SUMMARY_TAG}>
        </\${ENCHANTED_ACCORDION_TAG}>
        <\${ENCHANTED_ACCORDION_TAG}
          type="outlined"
          label="Outlined - With Checkbox"
          ?showCheckbox=\${true}
        >
          <\${ENCHANTED_ACCORDION_SUMMARY_TAG}
            slot="accordion-items"
            label="Content with checkbox."
          ></\${ENCHANTED_ACCORDION_SUMMARY_TAG}>
        </\${ENCHANTED_ACCORDION_TAG}>
        <\${ENCHANTED_ACCORDION_TAG}
          type="outlined"
          label="Outlined - With Secondary Text"
          secondaryText="This is secondary text"
          ?showSecondaryText=\${true}
        >
          <\${ENCHANTED_ACCORDION_SUMMARY_TAG}
            slot="accordion-items"
            label="Content with secondary text."
          ></\${ENCHANTED_ACCORDION_SUMMARY_TAG}>
        </\${ENCHANTED_ACCORDION_TAG}>
        <\${ENCHANTED_ACCORDION_TAG}
          type="outlined"
          label="Outlined - Disabled"
          ?disabled=\${true}
        >
          <\${ENCHANTED_ACCORDION_SUMMARY_TAG}
            slot="accordion-items"
            label="Disabled accordion content."
          ></\${ENCHANTED_ACCORDION_SUMMARY_TAG}>
        </\${ENCHANTED_ACCORDION_TAG}>

        <div style="margin-top: 24px;"><strong>No-Outline Type</strong></div>
        <\${ENCHANTED_ACCORDION_TAG}
          type="no-outline"
          label="No-Outline - Closed"
          ?open=\${false}
        >
          <\${ENCHANTED_ACCORDION_SUMMARY_TAG}
            slot="accordion-items"
            label="Content for no-outline accordion."
          ></\${ENCHANTED_ACCORDION_SUMMARY_TAG}>
        </\${ENCHANTED_ACCORDION_TAG}>
        <\${ENCHANTED_ACCORDION_TAG}
          type="no-outline"
          label="No-Outline - Open"
          ?open=\${true}
        >
          <\${ENCHANTED_ACCORDION_SUMMARY_TAG}
            slot="accordion-items"
            label="Content for no-outline accordion."
          ></\${ENCHANTED_ACCORDION_SUMMARY_TAG}>
        </\${ENCHANTED_ACCORDION_TAG}>
        <\${ENCHANTED_ACCORDION_TAG}
          type="no-outline"
          label="No-Outline - With Checkbox"
          ?showCheckbox=\${true}
        >
          <\${ENCHANTED_ACCORDION_SUMMARY_TAG}
            slot="accordion-items"
            label="Content with checkbox."
          ></\${ENCHANTED_ACCORDION_SUMMARY_TAG}>
        </\${ENCHANTED_ACCORDION_TAG}>
        <\${ENCHANTED_ACCORDION_TAG}
          type="no-outline"
          label="No-Outline - With Secondary Text"
          secondaryText="This is secondary text"
          ?showSecondaryText=\${true}
        >
          <\${ENCHANTED_ACCORDION_SUMMARY_TAG}
            slot="accordion-items"
            label="Content with secondary text."
          ></\${ENCHANTED_ACCORDION_SUMMARY_TAG}>
        </\${ENCHANTED_ACCORDION_TAG}>
        <\${ENCHANTED_ACCORDION_TAG}
          type="no-outline"
          label="No-Outline - Disabled"
          ?disabled=\${true}
        >
          <\${ENCHANTED_ACCORDION_SUMMARY_TAG}
            slot="accordion-items"
            label="Disabled accordion content."
          ></\${ENCHANTED_ACCORDION_SUMMARY_TAG}>
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
          <\${ENCHANTED_ACCORDION_SUMMARY_TAG}
            slot="accordion-items"
            label="This accordion demonstrates all features: outlined type, checkbox, secondary text, and open state."
            secondaryText="This is secondary text"
          ></\${ENCHANTED_ACCORDION_SUMMARY_TAG}>
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
}`,...(M=(H=y.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};const re=Object.freeze(Object.defineProperty({__proto__:null,AllStates:y,EnchantedAccordion:p,__namedExportsOrder:q,default:j},Symbol.toStringTag,{value:"Module"}));export{re as E,p as a};
