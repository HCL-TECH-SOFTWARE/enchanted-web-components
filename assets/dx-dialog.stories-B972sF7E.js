import{E as s,x as l}from"./iframe-DgNdRKpa.js";import{n as d,t as C,l as O,D as x}from"./dx-ac-base-element-BRVmdAbS.js";import{r as p}from"./state-g_VKachv.js";import{l as _}from"./lodash-BYuv2CZ-.js";import"./dx-svg-icon-GVOyhV2P.js";import"./dx-button-q5wlWak9.js";import{h as e}from"./cssClassEnums-flPS6Iko.js";import{i as L}from"./localization-8Qc5IxgI.js";import{K as v}from"./keyboardEventKeys-BnoN8uA3.js";import"./index-iMiEPESM.js";import"./preload-helper-C1FmrZbK.js";import"./index-DaIQVsYU.js";var t=(o=>(o.XL="xl",o.LG="lg",o.MD="md",o.SM="sm",o.XS="xs",o.CHAT="chat",o))(t||{}),N=Object.defineProperty,b=Object.getOwnPropertyDescriptor,a=(o,i,c,u)=>{for(var n=u>1?void 0:u?b(i,c):i,h=o.length-1,g;h>=0;h--)(g=o[h])&&(n=(u?g(i,c,n):g(n))||n);return u&&n&&N(i,c,n),n};let r=class extends x{constructor(){super(...arguments),this.open=!1,this.size=t.XL,this.dialogTitle="",this.overrideTitle=!1,this.removeBorder=!1,this._dialogRole=null,this._dialogAriaLabel=null,this._dialogTabindex=null,this._contentAriaHidden=!1,this._liveRegionText=""}connectedCallback(){super.connectedCallback(),this.dialogTitle===""&&(this.dialogTitle=this.getMessage("generic.label"))}disconnectedCallback(){super.disconnectedCallback()}async updated(i){i.has("open")&&this.open&&await this._performDialogFocusSequence()}async _performDialogFocusSequence(){await this.updateComplete,this._liveRegionText=`${this.dialogTitle}, dialog`,this._dialogRole="dialog",this._dialogAriaLabel=this.dialogTitle,this._dialogTabindex="-1",this._contentAriaHidden=!0,await this.updateComplete;const i=this.renderRoot.querySelector(`[part*="${this.getPaperPart()}"]`);i&&(i.focus(),setTimeout(()=>{this._cleanupDialogAttributes(),setTimeout(()=>{this._focusFirstElement()},20)},100))}_cleanupDialogAttributes(){this._dialogRole=null,this._dialogAriaLabel=null,this._dialogTabindex=null,this._contentAriaHidden=!1,this._liveRegionText=""}_focusFirstElement(){const i=this.renderRoot.querySelector('dx-input-textfield, dx-button, button, input, [tabindex]:not([tabindex="-1"])');i&&("shadowRoot"in i&&i.shadowRoot?(i.shadowRoot.querySelector('input, button, [tabindex]:not([tabindex="-1"])')||i).focus():i.focus())}async refocusDialog(){this.open&&await this._performDialogFocusSequence()}handleClose(i){i.stopPropagation(),this.open=!1,this.dispatchEvent(new CustomEvent("dx-dialog-close",{bubbles:!0,composed:!0}))}handleCloseByEnterKey(i){(i.key===v.ENTER||i.key===v.SPACE)&&(i.stopPropagation(),this.handleClose(i))}getContainerPart(){switch(this.size){case t.XL:return e.CONTAINER_XL;case t.SM:return e.CONTAINER_SM;case t.MD:return e.CONTAINER_MD;case t.LG:return e.CONTAINER_LG;case t.CHAT:return e.CONTAINER_CHAT;default:return e.CONTAINER_XL}}getPaperPart(){switch(this.size){case t.XL:return e.PAPER_XL;case t.SM:return e.PAPER_SM;case t.MD:return e.PAPER_MD;case t.LG:return e.PAPER_LG;case t.CHAT:return e.PAPER_CHAT;default:return e.PAPER_XL}}getContentPart(){switch(this.size){case t.XL:return this.removeBorder?e.CONTENT_XL_NO_BORDER:e.CONTENT_XL;case t.SM:return e.CONTENT_SM;case t.MD:return e.CONTENT_MD;case t.LG:return e.CONTENT_LG;case t.CHAT:return e.CONTENT_CHAT;default:return e.CONTENT_XL}}getPaginationPart(){switch(this.size){case t.SM:return e.PAGINATION_SM;case t.MD:return e.PAGINATION_MD;case t.LG:return e.PAGINATION_LG;case t.XL:default:return e.PAGINATION_XL}}getActionPart(){return this.removeBorder?e.ACTION_NO_BORDER:this.size===t.CHAT?e.CHAT_ACTION:e.ACTION}render(){const i=this.size===t.CHAT;return this.open?l`
        <div role="presentation" part=${i?e.DIALOG_ROOT_CHAT:e.DIALOG_ROOT}>
          ${i?s:l`<div aria-hidden="true" part=${e.BACKDROP} @click=${_.debounce(this.handleClose,300)}></div>`}
          <div tabindex="-1" role="presentation" part=${this.getContainerPart()}>
            <!-- Live region for NVDA screen reader announcements -->
            <div part="live-region" id="dialog-announce" role="status" aria-live="polite" aria-atomic="true">${this._liveRegionText}</div>
            <div
              part=${this.getPaperPart()}
              role=${this._dialogRole||s}
              aria-label=${this._dialogAriaLabel||s}
              tabindex=${this._dialogTabindex||s}
              aria-modal="true"
            >
              <div role="presentation" aria-hidden=${this._contentAriaHidden}>
                <div role="presentation">
                  <div ?part=${this.overrideTitle?e.TITLE:""}>
                    ${this.overrideTitle?l`<slot name="title"></slot>`:l`
                        <div part=${e.TITLE_ROOT}>
                          <p part=${L()?e.TITLE_TEXT:e.TITLE_TEXT_RTL}>
                            ${this.dialogTitle}
                          </p>
                          <div part=${e.ICON_ROOT}>
                            <icon-close
                              part=${e.ICON_CLOSE}
                              color="rgba(0, 0, 0, 0.60)"
                              size="16"
                              @click=${_.debounce(this.handleClose,300)}
                              @keydown=${this.handleCloseByEnterKey}
                              tabindex="0"
                            >
                            </icon-close>
                          </div>
                        </div>`}
                  </div>
                  <div part=${this.getContentPart()}>
                    <slot name="content"></slot>
                  </div>
                  <div part=${this.getPaginationPart()}>
                    <slot name="pagination"></slot>
                  </div>
                  <div part=${this.getActionPart()}>
                    <slot name="footer"></slot>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `:s}};a([d({type:Boolean,reflect:!0})],r.prototype,"open",2);a([d({type:String})],r.prototype,"size",2);a([d({type:String})],r.prototype,"dialogTitle",2);a([d({type:Boolean})],r.prototype,"overrideTitle",2);a([d({type:Boolean})],r.prototype,"removeBorder",2);a([p()],r.prototype,"_dialogRole",2);a([p()],r.prototype,"_dialogAriaLabel",2);a([p()],r.prototype,"_dialogTabindex",2);a([p()],r.prototype,"_contentAriaHidden",2);a([p()],r.prototype,"_liveRegionText",2);r=a([C("dx-dialog"),O()],r);const z={title:"Feedback/dx-dialog",component:"dx-dialog",tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:[t.XL,t.LG,t.MD,t.SM,t.XS],description:"Dialog size",defaultValue:t.XL},open:{control:"boolean",description:"Open",defaultValue:!0},overrideTitle:{control:"boolean",description:"Override title with slot",defaultValue:!1},dialogTitle:{control:"text",description:"Dialog title",defaultValue:"Dialog Title"}},args:{size:t.XL,open:!0,overrideTitle:!1,dialogTitle:"Dialog Title"},parameters:{docs:{description:{component:"Dialog component with controls for size and boolean properties."}}}},T={render:o=>l`
      <dx-dialog
        .size=${o.size}
        ?open=${o.open}
        ?overrideTitle=${o.overrideTitle}
        .dialogTitle=${o.dialogTitle}
      >
        <span slot="title">Custom Title Slot</span>
        <div slot="content">Dialog content goes here.</div>
        <div slot="footer">Footer actions here.</div>
      </dx-dialog>
    `,name:"DxDialog"};var m,f,A;T.parameters={...T.parameters,docs:{...(m=T.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <dx-dialog
        .size=\${args.size}
        ?open=\${args.open}
        ?overrideTitle=\${args.overrideTitle}
        .dialogTitle=\${args.dialogTitle}
      >
        <span slot="title">Custom Title Slot</span>
        <div slot="content">Dialog content goes here.</div>
        <div slot="footer">Footer actions here.</div>
      </dx-dialog>
    \`;
  },
  name: 'DxDialog'
}`,...(A=(f=T.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};const B=["DxDialog"];export{T as DxDialog,B as __namedExportsOrder,z as default};
