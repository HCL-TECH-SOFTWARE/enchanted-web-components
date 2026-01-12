import{x as t,E as u}from"./iframe-BY3ui3w0.js";import{n as i,t as O,E as N,L as A}from"./enchanted-ac-base-element-CBHL5x_U.js";import{r as E}from"./state-B3qr-gd1.js";import{l as b}from"./lodash-DGpKHPGy.js";import{g as _}from"./localization-rBpmtxQQ.js";import{A as o}from"./cssClassEnums-D4dgqifY.js";import{c as S,B as D,t as R}from"./index-F6NVQYd9.js";import{K as x}from"./keyboardEventKeys-BnoN8uA3.js";import"./preload-helper-C1FmrZbK.js";var m={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"}}],name:"chevron--down",size:32};const C="icon-chevron-down";class k extends D{render(){return t`${R({...m,attrs:{...m.attrs,preserveAspectRatio:"xMidYMid"}})}`}}S&&!customElements.get(C)&&customElements.define(C,k);var L=Object.defineProperty,I=Object.getOwnPropertyDescriptor,c=(e,n,h,s)=>{for(var d=s>1?void 0:s?I(n,h):n,p=e.length-1,y;p>=0;p--)(y=e[p])&&(d=(s?y(n,h,d):y(d))||d);return s&&d&&L(n,h,d),d};let a=class extends N{constructor(){super(...arguments),this.showCheckbox=!1,this.disabled=!1,this.showSecondaryText=!1,this.type="outlined",this.open=!1,this.label="",this.secondaryText="",this.isLTR=_()===A.LTR}toggleAccordion(){this.disabled||(this.open=!this.open)}handleKeyToggle(n){(n.key===x.ENTER||n.key===x.SPACE)&&(n.preventDefault(),this.toggleAccordion())}handleArrowClick(n){n.stopPropagation(),this.toggleAccordion()}render(){return t`
      <div
        part=${this.isLTR?`${o.ENCHANTED_ACCORDION_CONTAINER}`:`${o.ENCHANTED_ACCORDION_CONTAINER_RTL}`}
      >
        <div
          part=${this.isLTR?`${o.ENCHANTED_ACCORDION_HEADER_SCSS}`:`${o.ENCHANTED_ACCORDION_HEADER_SCSS_RTL}`}
        >
          ${this.showCheckbox?t`<input type="checkbox" ?disabled=${this.disabled} />`:u}
          <div
            part=${this.isLTR?`${o.ENCHANTED_ACCORDION_LABEL_COLUMN}`:`${o.ENCHANTED_ACCORDION_LABEL_COLUMN_RTL}`}
            role="button"
            tabindex="-1"
            aria-expanded="${this.open}"
            aria-disabled="${this.disabled}"
            @keydown=${this.handleKeyToggle}
            @click=${b.debounce(this.toggleAccordion,300)}
          >
            ${this.label?t`<div
                  part=${this.isLTR?`${o.ENCHANTED_ACCORDION_LABEL_TEXT}`:`${o.ENCHANTED_ACCORDION_LABEL_TEXT_RTL}`}
                >
                  ${this.label}
                </div>`:t`<slot name="header"
                  >${this.getMessage("accordion.header.text")}</slot
                >`}
            ${this.showSecondaryText?t`<div
                  part=${this.isLTR?"secondary-text":"secondary-text-rtl"}
                >
                  ${this.secondaryText||t`<slot name="secondary"
                    >${this.getMessage("accordion.secondary.text")}</slot
                  >`}
                </div>`:u}
          </div>
        </div>
        <span
          part=${this.isLTR?`${o.ENCHANTED_ACCORDION_ARROW}`:`${o.ENCHANTED_ACCORDION_ARROW_RTL}`}
          role="button"
          tabindex="0"
          aria-label="Toggle accordion"
          @click=${b.debounce(this.handleArrowClick,300)}
          @keydown=${this.handleKeyToggle}
        >
          <icon-chevron-down
            part=${this.isLTR?`${o.ENCHANTED_ACCORDION_ARROW_ICON}`:`${o.ENCHANTED_ACCORDION_ARROW_ICON_RTL}`}
            size="16"
          ></icon-chevron-down>
        </span>
      </div>
      ${this.open?t`
            <div
              part=${this.isLTR?`${o.ENCHANTED_ACCORDION_CONTENT}`:`${o.ENCHANTED_ACCORDION_CONTENT_RTL}`}
            >
              <slot
                name="accordion-items"
                @slotchange=${this.handleSlotChange}
              ></slot>
            </div>
          `:u}
    `}handleSlotChange(){this.requestUpdate()}};c([i({type:Boolean,reflect:!0})],a.prototype,"showCheckbox",2);c([i({type:Boolean,reflect:!0})],a.prototype,"disabled",2);c([i({type:Boolean,reflect:!0})],a.prototype,"showSecondaryText",2);c([i({type:String})],a.prototype,"type",2);c([i({type:Boolean,reflect:!0})],a.prototype,"open",2);c([i({type:String})],a.prototype,"label",2);c([i({type:String})],a.prototype,"secondaryText",2);c([E()],a.prototype,"isLTR",2);a=c([O("enchanted-accordion")],a);const j={title:"Navigation/enchanted-accordion",component:"enchanted-accordion",tags:["autodocs"],argTypes:{type:{control:{type:"radio"},options:["outlined","no-outline"],description:"Defines the accordion style type",table:{type:{summary:"outlined | no-outline"},defaultValue:{summary:"outlined"}}},showCheckbox:{control:{type:"boolean"},description:"Controls the visibility of a checkbox in the accordion header",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"Disables the accordion, preventing user interaction",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},showSecondaryText:{control:{type:"boolean"},description:"Controls the visibility of secondary text below the label",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},open:{control:{type:"boolean"},description:"Controls whether the accordion is expanded or collapsed",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},label:{control:{type:"text"},description:"Main label text displayed in the accordion header",table:{type:{summary:"string"},defaultValue:{summary:""}}},secondaryText:{control:{type:"text"},description:"Secondary text displayed below the label (when showSecondaryText is true)",table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{type:"outlined",showCheckbox:!1,disabled:!1,showSecondaryText:!1,open:!1,label:"Accordion label",secondaryText:"Secondary text"},parameters:{docs:{description:{component:"An accordion component that allows collapsible content sections with support for checkboxes, secondary text, and multiple visual styles. Supports both LTR and RTL layouts. The accordion can be toggled by clicking on the label area or the arrow icon."}}}},r={render:e=>t`
      <enchanted-accordion
        type=${e.type}
        ?showCheckbox=${e.showCheckbox}
        ?disabled=${e.disabled}
        ?showSecondaryText=${e.showSecondaryText}
        ?open=${e.open}
        .label=${e.label}
        .secondaryText=${e.secondaryText}
      >
        <div slot="accordion-items">Accordion content goes here.</div>
      </enchanted-accordion>
      <enchanted-accordion
        type=${e.type}
        ?showCheckbox=${e.showCheckbox}
        ?disabled=${e.disabled}
        ?showSecondaryText=${e.showSecondaryText}
        ?open=${e.open}
        .label=${e.label}
        .secondaryText=${e.secondaryText}
      >
        <div slot="accordion-items">Accordion content goes here.</div>
      </enchanted-accordion>
      <enchanted-accordion
        type=${e.type}
        ?showCheckbox=${e.showCheckbox}
        ?disabled=${e.disabled}
        ?showSecondaryText=${e.showSecondaryText}
        ?open=${e.open}
        .label=${e.label}
        .secondaryText=${e.secondaryText}
      >
        <div slot="accordion-items">Accordion content goes here.</div>
      </enchanted-accordion>
    `,name:"Default",parameters:{docs:{description:{story:"Default accordion with customizable properties. Toggle open/closed state, add checkboxes, and display secondary text. Try different combinations of the controls to see how the component behaves."}}}},l={render:()=>t`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div><strong>Outlined Type</strong></div>
        <enchanted-accordion
          type="outlined"
          label="Outlined - Closed"
          ?open=${!1}
        >
          <div slot="accordion-items">Content for outlined accordion.</div>
        </enchanted-accordion>
        <enchanted-accordion
          type="outlined"
          label="Outlined - Open"
          ?open=${!0}
        >
          <div slot="accordion-items">Content for outlined accordion.</div>
        </enchanted-accordion>
        <enchanted-accordion
          type="outlined"
          label="Outlined - With Checkbox"
          ?showCheckbox=${!0}
        >
          <div slot="accordion-items">Content with checkbox.</div>
        </enchanted-accordion>
        <enchanted-accordion
          type="outlined"
          label="Outlined - With Secondary Text"
          secondaryText="This is secondary text"
          ?showSecondaryText=${!0}
        >
          <div slot="accordion-items">Content with secondary text.</div>
        </enchanted-accordion>
        <enchanted-accordion
          type="outlined"
          label="Outlined - Disabled"
          ?disabled=${!0}
        >
          <div slot="accordion-items">Disabled accordion content.</div>
        </enchanted-accordion>

        <div style="margin-top: 24px;"><strong>No-Outline Type</strong></div>
        <enchanted-accordion
          type="no-outline"
          label="No-Outline - Closed"
          ?open=${!1}
        >
          <div slot="accordion-items">Content for no-outline accordion.</div>
        </enchanted-accordion>
        <enchanted-accordion
          type="no-outline"
          label="No-Outline - Open"
          ?open=${!0}
        >
          <div slot="accordion-items">Content for no-outline accordion.</div>
        </enchanted-accordion>
        <enchanted-accordion
          type="no-outline"
          label="No-Outline - With Checkbox"
          ?showCheckbox=${!0}
        >
          <div slot="accordion-items">Content with checkbox.</div>
        </enchanted-accordion>
        <enchanted-accordion
          type="no-outline"
          label="No-Outline - With Secondary Text"
          secondaryText="This is secondary text"
          ?showSecondaryText=${!0}
        >
          <div slot="accordion-items">Content with secondary text.</div>
        </enchanted-accordion>
        <enchanted-accordion
          type="no-outline"
          label="No-Outline - Disabled"
          ?disabled=${!0}
        >
          <div slot="accordion-items">Disabled accordion content.</div>
        </enchanted-accordion>

        <div style="margin-top: 24px;"><strong>Combined Features</strong></div>
        <enchanted-accordion
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
        </enchanted-accordion>
      </div>
    `,parameters:{docs:{description:{story:"Showcase of all accordion states and variations including both types (outlined and no-outline), open/closed states, with checkboxes, secondary text, disabled state, and combined features. This demonstrates the complete range of accordion configurations available."}}}};var T,v,$;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <enchanted-accordion
        type=\${args.type}
        ?showCheckbox=\${args.showCheckbox}
        ?disabled=\${args.disabled}
        ?showSecondaryText=\${args.showSecondaryText}
        ?open=\${args.open}
        .label=\${args.label}
        .secondaryText=\${args.secondaryText}
      >
        <div slot="accordion-items">Accordion content goes here.</div>
      </enchanted-accordion>
      <enchanted-accordion
        type=\${args.type}
        ?showCheckbox=\${args.showCheckbox}
        ?disabled=\${args.disabled}
        ?showSecondaryText=\${args.showSecondaryText}
        ?open=\${args.open}
        .label=\${args.label}
        .secondaryText=\${args.secondaryText}
      >
        <div slot="accordion-items">Accordion content goes here.</div>
      </enchanted-accordion>
      <enchanted-accordion
        type=\${args.type}
        ?showCheckbox=\${args.showCheckbox}
        ?disabled=\${args.disabled}
        ?showSecondaryText=\${args.showSecondaryText}
        ?open=\${args.open}
        .label=\${args.label}
        .secondaryText=\${args.secondaryText}
      >
        <div slot="accordion-items">Accordion content goes here.</div>
      </enchanted-accordion>
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
}`,...($=(v=r.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};var w,f,g;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div><strong>Outlined Type</strong></div>
        <enchanted-accordion
          type="outlined"
          label="Outlined - Closed"
          ?open=\${false}
        >
          <div slot="accordion-items">Content for outlined accordion.</div>
        </enchanted-accordion>
        <enchanted-accordion
          type="outlined"
          label="Outlined - Open"
          ?open=\${true}
        >
          <div slot="accordion-items">Content for outlined accordion.</div>
        </enchanted-accordion>
        <enchanted-accordion
          type="outlined"
          label="Outlined - With Checkbox"
          ?showCheckbox=\${true}
        >
          <div slot="accordion-items">Content with checkbox.</div>
        </enchanted-accordion>
        <enchanted-accordion
          type="outlined"
          label="Outlined - With Secondary Text"
          secondaryText="This is secondary text"
          ?showSecondaryText=\${true}
        >
          <div slot="accordion-items">Content with secondary text.</div>
        </enchanted-accordion>
        <enchanted-accordion
          type="outlined"
          label="Outlined - Disabled"
          ?disabled=\${true}
        >
          <div slot="accordion-items">Disabled accordion content.</div>
        </enchanted-accordion>

        <div style="margin-top: 24px;"><strong>No-Outline Type</strong></div>
        <enchanted-accordion
          type="no-outline"
          label="No-Outline - Closed"
          ?open=\${false}
        >
          <div slot="accordion-items">Content for no-outline accordion.</div>
        </enchanted-accordion>
        <enchanted-accordion
          type="no-outline"
          label="No-Outline - Open"
          ?open=\${true}
        >
          <div slot="accordion-items">Content for no-outline accordion.</div>
        </enchanted-accordion>
        <enchanted-accordion
          type="no-outline"
          label="No-Outline - With Checkbox"
          ?showCheckbox=\${true}
        >
          <div slot="accordion-items">Content with checkbox.</div>
        </enchanted-accordion>
        <enchanted-accordion
          type="no-outline"
          label="No-Outline - With Secondary Text"
          secondaryText="This is secondary text"
          ?showSecondaryText=\${true}
        >
          <div slot="accordion-items">Content with secondary text.</div>
        </enchanted-accordion>
        <enchanted-accordion
          type="no-outline"
          label="No-Outline - Disabled"
          ?disabled=\${true}
        >
          <div slot="accordion-items">Disabled accordion content.</div>
        </enchanted-accordion>

        <div style="margin-top: 24px;"><strong>Combined Features</strong></div>
        <enchanted-accordion
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
        </enchanted-accordion>
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
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const X=["EnchantedAccordion","AllStates"];export{l as AllStates,r as EnchantedAccordion,X as __namedExportsOrder,j as default};
