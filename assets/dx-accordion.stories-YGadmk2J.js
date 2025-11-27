import{x as s,E as y}from"./iframe-BabVupQu.js";import{n as d,t as w,D as m,L as O}from"./dx-ac-base-element-CMZo8k64.js";import{r as u}from"./state-ByhEXiYs.js";import{l as x}from"./lodash-B-0SAclH.js";import{g as R}from"./localization-2aoGzCSL.js";import{A as o}from"./cssClassEnums-ChRP0d8n.js";import{c as g,B as D,t as f}from"./index-B_E2F3xT.js";import{K as $}from"./keyboardEventKeys-BnoN8uA3.js";import"./preload-helper-C1FmrZbK.js";var b={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"}}],name:"chevron--down",size:32};const T="icon-chevron-down";class v extends D{render(){return s`${f({...b,attrs:{...b.attrs,preserveAspectRatio:"xMidYMid"}})}`}}g&&!customElements.get(T)&&customElements.define(T,v);var S=Object.defineProperty,L=Object.getOwnPropertyDescriptor,r=(e,t,l,c)=>{for(var a=c>1?void 0:c?L(t,l):t,p=e.length-1,h;p>=0;p--)(h=e[p])&&(a=(c?h(t,l,a):h(a))||a);return c&&a&&S(t,l,a),a};let n=class extends m{constructor(){super(...arguments),this.showCheckbox=!1,this.disabled=!1,this.showSecondaryText=!1,this.type="outlined",this.open=!1,this.label="",this.secondaryText="",this.isLTR=R()===O.LTR}toggleAccordion(){this.disabled||(this.open=!this.open)}handleKeyToggle(t){(t.key===$.ENTER||t.key===$.SPACE)&&(t.preventDefault(),this.toggleAccordion())}handleArrowClick(t){t.stopPropagation(),this.toggleAccordion()}render(){return s`
      <div
        part=${this.isLTR?`${o.DX_ACCORDION_CONTAINER}`:`${o.DX_ACCORDION_CONTAINER_RTL}`}
      >
        <div
          part=${this.isLTR?`${o.DX_ACCORDION_HEADER_SCSS}`:`${o.DX_ACCORDION_HEADER_SCSS_RTL}`}
        >
          ${this.showCheckbox?s`<input type="checkbox" ?disabled=${this.disabled} />`:y}
          <div
            part=${this.isLTR?`${o.DX_ACCORDION_LABEL_COLUMN}`:`${o.DX_ACCORDION_LABEL_COLUMN_RTL}`}
            role="button"
            tabindex="-1"
            aria-expanded="${this.open}"
            aria-disabled="${this.disabled}"
            @keydown=${this.handleKeyToggle}
            @click=${x.debounce(this.toggleAccordion,300)}
          >
            ${this.label?s`<div
                  part=${this.isLTR?`${o.DX_ACCORDION_LABEL_TEXT}`:`${o.DX_ACCORDION_LABEL_TEXT_RTL}`}
                >
                  ${this.label}
                </div>`:s`<slot name="header"
                  >${this.getMessage("accordion.header.text")}</slot
                >`}
            ${this.showSecondaryText?s`<div
                  part=${this.isLTR?"secondary-text":"secondary-text-rtl"}
                >
                  ${this.secondaryText||s`<slot name="secondary"
                    >${this.getMessage("accordion.secondary.text")}</slot
                  >`}
                </div>`:y}
          </div>
        </div>
        <span
          part=${this.isLTR?`${o.DX_ACCORDION_ARROW}`:`${o.DX_ACCORDION_ARROW_RTL}`}
          role="button"
          tabindex="0"
          aria-label="Toggle accordion"
          @click=${x.debounce(this.handleArrowClick,300)}
          @keydown=${this.handleKeyToggle}
        >
          <icon-chevron-down
            part=${this.isLTR?`${o.DX_ACCORDION_ARROW_ICON}`:`${o.DX_ACCORDION_ARROW_ICON_RTL}`}
            size="16"
          ></icon-chevron-down>
        </span>
      </div>
      ${this.open?s`
            <div
              part=${this.isLTR?`${o.DX_ACCORDION_CONTENT}`:`${o.DX_ACCORDION_CONTENT_RTL}`}
            >
              <slot
                name="accordion-items"
                @slotchange=${this.handleSlotChange}
              ></slot>
            </div>
          `:y}
    `}handleSlotChange(){this.requestUpdate()}};r([d({type:Boolean,reflect:!0})],n.prototype,"showCheckbox",2);r([d({type:Boolean,reflect:!0})],n.prototype,"disabled",2);r([d({type:Boolean,reflect:!0})],n.prototype,"showSecondaryText",2);r([d({type:String})],n.prototype,"type",2);r([d({type:Boolean,reflect:!0})],n.prototype,"open",2);r([d({type:String})],n.prototype,"label",2);r([d({type:String})],n.prototype,"secondaryText",2);r([u()],n.prototype,"isLTR",2);n=r([w("dx-accordion")],n);const W={title:"Navigation/dx-accordion",component:"dx-accordion",tags:["autodocs"],argTypes:{type:{control:{type:"radio"},options:["outlined","no-outline"],description:"Accordion type",defaultValue:"outlined"},showCheckbox:{control:"boolean",description:"Show checkbox",defaultValue:!1},disabled:{control:"boolean",description:"Disabled",defaultValue:!1},showSecondaryText:{control:"boolean",description:"Show secondary text",defaultValue:!1},open:{control:"boolean",description:"Open",defaultValue:!1},label:{control:"text",description:"Label",defaultValue:"Accordion label"},secondaryText:{control:"text",description:"Secondary text",defaultValue:"Secondary text"}},args:{type:"outlined",showCheckbox:!1,disabled:!1,showSecondaryText:!1,open:!1,label:"Accordion label",secondaryText:"Secondary text"},parameters:{docs:{description:{component:"Accordion component with boolean and type property controls."}}}},i={render:e=>s`
      <dx-accordion
        type=${e.type}
        .type=${e.type}
        ?showCheckbox=${e.showCheckbox}
        ?disabled=${e.disabled}
        ?showSecondaryText=${e.showSecondaryText}
        ?open=${e.open}
        .label=${e.label}
        .secondaryText=${e.secondaryText}
      >
        <div slot="accordion-items">Accordion content goes here.</div>
      </dx-accordion>
      <dx-accordion
        type=${e.type}
        .type=${e.type}
        ?showCheckbox=${e.showCheckbox}
        ?disabled=${e.disabled}
        ?showSecondaryText=${e.showSecondaryText}
        ?open=${e.open}
        .label=${e.label}
        .secondaryText=${e.secondaryText}
      >
        <div slot="accordion-items">Accordion content goes here.</div>
      </dx-accordion>
      <dx-accordion
        type=${e.type}
        .type=${e.type}
        ?showCheckbox=${e.showCheckbox}
        ?disabled=${e.disabled}
        ?showSecondaryText=${e.showSecondaryText}
        ?open=${e.open}
        .label=${e.label}
        .secondaryText=${e.secondaryText}
      >
        <div slot="accordion-items">Accordion content goes here.</div>
      </dx-accordion>
    `,name:"DxAccordion"};var C,A,_;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <dx-accordion
        type=\${args.type}
        .type=\${args.type}
        ?showCheckbox=\${args.showCheckbox}
        ?disabled=\${args.disabled}
        ?showSecondaryText=\${args.showSecondaryText}
        ?open=\${args.open}
        .label=\${args.label}
        .secondaryText=\${args.secondaryText}
      >
        <div slot="accordion-items">Accordion content goes here.</div>
      </dx-accordion>
      <dx-accordion
        type=\${args.type}
        .type=\${args.type}
        ?showCheckbox=\${args.showCheckbox}
        ?disabled=\${args.disabled}
        ?showSecondaryText=\${args.showSecondaryText}
        ?open=\${args.open}
        .label=\${args.label}
        .secondaryText=\${args.secondaryText}
      >
        <div slot="accordion-items">Accordion content goes here.</div>
      </dx-accordion>
      <dx-accordion
        type=\${args.type}
        .type=\${args.type}
        ?showCheckbox=\${args.showCheckbox}
        ?disabled=\${args.disabled}
        ?showSecondaryText=\${args.showSecondaryText}
        ?open=\${args.open}
        .label=\${args.label}
        .secondaryText=\${args.secondaryText}
      >
        <div slot="accordion-items">Accordion content goes here.</div>
      </dx-accordion>
    \`;
  },
  name: 'DxAccordion'
}`,...(_=(A=i.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};const z=["DxAccordion"];export{i as DxAccordion,z as __namedExportsOrder,W as default};
