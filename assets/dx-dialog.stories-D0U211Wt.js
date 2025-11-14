import{E as g,x as l}from"./iframe-g_dBLWCH.js";import{n as d,t as O,l as A,D as N}from"./dx-ac-base-element-Ba1nuzGa.js";import{e as E}from"./dx-button-rc8nG4sK.js";import{l as h}from"./lodash-CR4q0RmQ.js";import"./dx-svg-icon-j95vRYmd.js";import{h as e}from"./cssClassEnums-DKCjOuJT.js";import{i as f}from"./localization-_QVbBsw5.js";import{K as C}from"./keyboardEventKeys-BnoN8uA3.js";import"./index-CChjELTs.js";import"./preload-helper-C1FmrZbK.js";import"./state-BrHRPonU.js";import"./index-DAvuBMGP.js";var t=(o=>(o.XL="xl",o.LG="lg",o.MD="md",o.SM="sm",o.XS="xs",o.CHAT="chat",o))(t||{}),P=Object.defineProperty,L=Object.getOwnPropertyDescriptor,s=(o,r,n,p)=>{for(var a=p>1?void 0:p?L(r,n):r,T=o.length-1,u;T>=0;T--)(u=o[T])&&(a=(p?u(r,n,a):u(a))||a);return p&&a&&P(r,n,a),a};let i=class extends N{constructor(){super(...arguments),this.open=!1,this.size=t.XL,this.dialogTitle="",this.overrideTitle=!1,this.removeBorder=!1}connectedCallback(){super.connectedCallback(),this.dialogTitle===""&&(this.dialogTitle=this.getMessage("generic.label"))}disconnectedCallback(){super.disconnectedCallback()}async updated(r){var n;r.has("open")&&this.open&&(await this.updateComplete,(n=this._dialogElement)==null||n.focus())}handleClose(r){r.stopPropagation(),this.open=!1,this.dispatchEvent(new CustomEvent("dx-dialog-close",{bubbles:!0,composed:!0}))}handleCloseByEnterKey(r){(r.key===C.ENTER||r.key===C.SPACE)&&(r.stopPropagation(),this.handleClose(r))}getContainerPart(){switch(this.size){case t.XL:return e.CONTAINER_XL;case t.SM:return e.CONTAINER_SM;case t.MD:return e.CONTAINER_MD;case t.LG:return e.CONTAINER_LG;case t.CHAT:return e.CONTAINER_CHAT;default:return e.CONTAINER_XL}}getPaperPart(){switch(this.size){case t.XL:return e.PAPER_XL;case t.SM:return e.PAPER_SM;case t.MD:return e.PAPER_MD;case t.LG:return e.PAPER_LG;case t.CHAT:return e.PAPER_CHAT;default:return e.PAPER_XL}}getContentPart(){switch(this.size){case t.XL:return this.removeBorder?e.CONTENT_XL_NO_BORDER:e.CONTENT_XL;case t.SM:return e.CONTENT_SM;case t.MD:return e.CONTENT_MD;case t.LG:return e.CONTENT_LG;case t.CHAT:return e.CONTENT_CHAT;default:return e.CONTENT_XL}}getPaginationPart(){switch(this.size){case t.SM:return e.PAGINATION_SM;case t.MD:return e.PAGINATION_MD;case t.LG:return e.PAGINATION_LG;case t.XL:default:return e.PAGINATION_XL}}getActionPart(){return this.removeBorder?e.ACTION_NO_BORDER:this.size===t.CHAT?e.CHAT_ACTION:e.ACTION}render(){const r=this.size===t.CHAT;return this.open?l`
        <div role="presentation" part=${r?e.DIALOG_ROOT_CHAT:e.DIALOG_ROOT}>
          ${r?g:l`<div aria-hidden="true" part=${e.BACKDROP} @click=${h.debounce(this.handleClose,300)}></div>`}
          <div tabindex="-1" role="presentation" part=${this.getContainerPart()}>
            <div role="dialog" part=${this.getPaperPart()} tabindex="0">
              <div ?part=${this.overrideTitle?e.TITLE:""}>
                ${this.overrideTitle?l`<slot name="title"></slot>`:l`
                    <div part=${e.TITLE_ROOT}>
                      <p part=${f()?e.TITLE_TEXT:e.TITLE_TEXT_RTL}>
                        ${this.dialogTitle}
                      </p>
                      <div part=${e.ICON_ROOT}>
                        <icon-close
                          part=${e.ICON_CLOSE}
                          color="rgba(0, 0, 0, 0.60)"
                          size="16"
                          @click=${h.debounce(this.handleClose,300)}
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
      `:g}};s([d({type:Boolean,reflect:!0})],i.prototype,"open",2);s([d({type:String})],i.prototype,"size",2);s([d({type:String})],i.prototype,"dialogTitle",2);s([d({type:Boolean})],i.prototype,"overrideTitle",2);s([E('div[role="dialog"]')],i.prototype,"_dialogElement",2);s([d({type:Boolean})],i.prototype,"removeBorder",2);i=s([O("dx-dialog"),A()],i);const w={title:"Feedback/dx-dialog",component:"dx-dialog",tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:[t.XL,t.LG,t.MD,t.SM,t.XS],description:"Dialog size",defaultValue:t.XL},open:{control:"boolean",description:"Open",defaultValue:!0},overrideTitle:{control:"boolean",description:"Override title with slot",defaultValue:!1},dialogTitle:{control:"text",description:"Dialog title",defaultValue:"Dialog Title"}},args:{size:t.XL,open:!0,overrideTitle:!1,dialogTitle:"Dialog Title"},parameters:{docs:{description:{component:"Dialog component with controls for size and boolean properties."}}}},c={render:o=>l`
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
    `,name:"DxDialog"};var m,v,_;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(_=(v=c.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const H=["DxDialog"];export{c as DxDialog,H as __namedExportsOrder,w as default};
