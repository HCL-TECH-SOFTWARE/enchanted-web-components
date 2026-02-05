import{E as h,x as c}from"./iframe-I2cpem8U.js";import{n as u,E as D,t as w,l as _}from"./enchanted-ac-base-element-CYtj5YlD.js";import{l as f}from"./lodash-CN9U4Hn1.js";import"./enchanted-svg-icon-CzhLaiK0.js";import"./enchanted-button-bGeso_Ea.js";import{n as t}from"./cssClassEnums-WDBe4U61.js";import{i as b}from"./localization-D5pUJpuu.js";import{K as y}from"./keyboardEventKeys-BnoN8uA3.js";import"./index-Bz6YrIBk.js";import"./preload-helper-C1FmrZbK.js";import"./state-0u-7W5Ce.js";import"./index-CuTRIAwF.js";import"./index-ciz72CDE.js";var e=(i=>(i.XL="xl",i.LG="lg",i.MD="md",i.SM="sm",i.XS="xs",i.CHAT="chat",i))(e||{}),A=Object.defineProperty,L=Object.getOwnPropertyDescriptor,p=(i,o,s,n)=>{for(var l=n>1?void 0:n?L(o,s):o,d=i.length-1,r;d>=0;d--)(r=i[d])&&(l=(n?r(o,s,l):r(l))||l);return n&&l&&A(o,s,l),l};let a=class extends D{constructor(){super(...arguments),this.open=!1,this.size=e.XL,this.dialogTitle="",this.overrideTitle=!1,this.removeBorder=!1}connectedCallback(){super.connectedCallback(),this.dialogTitle===""&&(this.dialogTitle=this.getMessage("generic.label"))}disconnectedCallback(){super.disconnectedCallback()}async updated(o){o.has("open")&&this.open&&(await this.updateComplete,this._focusFirstElement())}_focusFirstElement(){const o=this.renderRoot.querySelectorAll("slot");for(const l of Array.from(o)){const d=l.assignedElements({flatten:!0});for(const r of d){if(r.matches(a.FOCUSABLE_SELECTOR)){this._focusElement(r);return}const v=r.querySelector(a.FOCUSABLE_SELECTOR);if(v){this._focusElement(v);return}}}const s=this.renderRoot.querySelector(a.FOCUSABLE_SELECTOR);if(s){this._focusElement(s);return}const n=this.renderRoot.querySelector(`[part*="${this.getPaperPart()}"]`);n==null||n.focus()}_hasShadowRoot(o){return"shadowRoot"in o&&o.shadowRoot instanceof ShadowRoot}_hasRenderRoot(o){return"renderRoot"in o&&o.renderRoot instanceof ShadowRoot}_focusElement(o,s=0){if(s>=a.MAX_FOCUS_DEPTH){o.focus();return}let n=o,l=null,d=s;for(;n&&d<a.MAX_FOCUS_DEPTH;){if(this._hasShadowRoot(n)){const r=n.shadowRoot.querySelector(a.FOCUSABLE_SELECTOR);if(r){n=r,l=r,d++;continue}}else if(this._hasRenderRoot(n)){const r=n.renderRoot.querySelector(a.FOCUSABLE_SELECTOR);if(r){n=r,l=r,d++;continue}}break}(l||o).focus()}async refocusDialog(){this.open&&(await this.updateComplete,this._focusFirstElement())}handleClose(o){o.stopPropagation(),this.open=!1,this.dispatchEvent(new CustomEvent("enchanted-dialog-close",{bubbles:!0,composed:!0}))}handleCloseByEnterKey(o){(o.key===y.ENTER||o.key===y.SPACE)&&(o.stopPropagation(),this.handleClose(o))}getContainerPart(){switch(this.size){case e.XL:return t.CONTAINER_XL;case e.XS:return t.CONTAINER_XS;case e.SM:return t.CONTAINER_SM;case e.MD:return t.CONTAINER_MD;case e.LG:return t.CONTAINER_LG;case e.CHAT:return t.CONTAINER_CHAT;default:return t.CONTAINER_XL}}getPaperPart(){switch(this.size){case e.XL:return t.PAPER_XL;case e.XS:return t.PAPER_XS;case e.SM:return t.PAPER_SM;case e.MD:return t.PAPER_MD;case e.LG:return t.PAPER_LG;case e.CHAT:return t.PAPER_CHAT;default:return t.PAPER_XL}}getContentPart(){switch(this.size){case e.XL:return this.removeBorder?t.CONTENT_XL_NO_BORDER:t.CONTENT_XL;case e.XS:return t.CONTENT_XS;case e.SM:return t.CONTENT_SM;case e.MD:return t.CONTENT_MD;case e.LG:return t.CONTENT_LG;case e.CHAT:return t.CONTENT_CHAT;default:return t.CONTENT_XL}}getPaginationPart(){switch(this.size){case e.XS:return t.PAGINATION_XS;case e.SM:return t.PAGINATION_SM;case e.MD:return t.PAGINATION_MD;case e.LG:return t.PAGINATION_LG;case e.XL:default:return t.PAGINATION_XL}}getActionPart(){return this.removeBorder?t.ACTION_NO_BORDER:this.size===e.CHAT?t.CHAT_ACTION:t.ACTION}render(){const o=this.size===e.CHAT;return this.open?c`
        <div role="presentation" part=${o?t.DIALOG_ROOT_CHAT:t.DIALOG_ROOT}>
          ${o?h:c`<div aria-hidden="true" part=${t.BACKDROP} @click=${f.debounce(this.handleClose,300)}></div>`}
          <div tabindex="-1" role="presentation" part=${this.getContainerPart()}>
            <div
              part=${this.getPaperPart()}
              role="dialog"
              aria-label=${this.dialogTitle}
              tabindex="-1"
              aria-modal="true"
            >
              <div part="${this.overrideTitle?h:t.TITLE}">
                ${this.overrideTitle?c`<slot name="title"></slot>`:c`
                    <div part=${b()?t.TITLE_ROOT:t.TITLE_ROOT_RTL}>
                      <p part=${b()?t.TITLE_TEXT:t.TITLE_TEXT_RTL}>
                        ${this.dialogTitle}
                      </p>
                      <div part=${t.ICON_ROOT}>
                        <icon-close
                          part=${t.ICON_CLOSE}
                          color="rgba(0, 0, 0, 0.60)"
                          size="20"
                          @click=${f.debounce(this.handleClose,300)}
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
      `:h}};a.FOCUSABLE_SELECTOR='enchanted-textfield, enchanted-button, enchanted-icon-button, button, input, [tabindex]:not([tabindex="-1"])';a.MAX_FOCUS_DEPTH=10;p([u({type:Boolean,reflect:!0})],a.prototype,"open",2);p([u({type:String})],a.prototype,"size",2);p([u({type:String})],a.prototype,"dialogTitle",2);p([u({type:Boolean})],a.prototype,"overrideTitle",2);p([u({type:Boolean})],a.prototype,"removeBorder",2);a=p([w("enchanted-dialog"),_()],a);const q={title:"Feedback/enchanted-dialog",component:"enchanted-dialog",tags:["autodocs"],argTypes:{dialogTitle:{control:{type:"text"},description:"Title text displayed in the dialog header. Provides context about the dialog purpose. Used for accessibility (aria-label) and screen reader announcements.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},size:{control:{type:"radio"},options:[e.XL,e.LG,e.MD,e.SM,e.XS],description:"Dialog size variant controlling width and layout. Options: xl (extra large), lg (large), md (medium), sm (small), xs (extra small). Affects dialog dimensions and responsive behavior.",table:{category:"Layout",type:{summary:"DialogSizes"},defaultValue:{summary:e.XL}}},open:{control:{type:"boolean"},description:"Controls dialog visibility and open state. When true, dialog displays with backdrop overlay. Reflects to DOM attribute for CSS styling. Manages focus and ARIA announcements.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},overrideTitle:{control:{type:"boolean"},description:'Enables custom title content via slot. When true, uses the "title" slot instead of dialogTitle property. Allows complex title layouts with icons, badges, or custom styling.',table:{category:"Display",type:{summary:"boolean"},defaultValue:{summary:"false"}}},removeBorder:{control:{type:"boolean"},description:"Removes the border from the dialog container. When true, displays dialog without border styling. Useful for custom styling or seamless integration with page design.",table:{category:"Styling",type:{summary:"boolean"},defaultValue:{summary:"false"}}}},args:{dialogTitle:"Dialog Title",size:e.XL,open:!0,overrideTitle:!1,removeBorder:!1},parameters:{docs:{description:{component:"Dialog component for displaying modal content with backdrop overlay. Features multiple size variants (xl to xs), customizable title, slotted content areas (title, content, footer), and accessibility support with focus management and ARIA announcements. Supports keyboard navigation (Escape to close) and automatic screen reader notifications."}}}},g={render:i=>c`
      <enchanted-dialog
        .dialogTitle=${i.dialogTitle}
        .size=${i.size}
        ?open=${i.open}
        ?overrideTitle=${i.overrideTitle}
        ?removeBorder=${i.removeBorder}
      >
        <span slot="title">Custom Title Slot</span>
        <div slot="content">Dialog content goes here.</div>
        <div slot="footer">Footer actions here.</div>
      </enchanted-dialog>
    `,name:"Default"},m={render:()=>c`
      <div style="display: flex; flex-direction: column; gap: 40px; padding: 20px;">
        <div>
          <h3 style="margin-top: 0;">Dialog Sizes</h3>
          <p style="margin: 10px 0; color: #666;">All dialogs shown with open=true for visualization. In production, only one dialog would be open at a time.</p>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <enchanted-dialog .dialogTitle=${"Extra Large Dialog (XL)"} .size=${e.XL} ?open=${!0}>
              <div slot="content">
                <p>This is an extra large (XL) dialog. It provides the most space for content and is suitable for complex forms or detailed information displays.</p>
                <p>Content can include multiple paragraphs, forms, tables, or any other HTML elements.</p>
              </div>
              <div slot="footer">
                <button>Cancel</button>
                <button>Confirm</button>
              </div>
            </enchanted-dialog>

            <enchanted-dialog .dialogTitle=${"Large Dialog (LG)"} .size=${e.LG} ?open=${!0}>
              <div slot="content">
                <p>This is a large (LG) dialog. It provides ample space for most use cases including forms with multiple fields.</p>
              </div>
              <div slot="footer">
                <button>Cancel</button>
                <button>Save</button>
              </div>
            </enchanted-dialog>

            <enchanted-dialog .dialogTitle=${"Medium Dialog (MD)"} .size=${e.MD} ?open=${!0}>
              <div slot="content">
                <p>This is a medium (MD) dialog. A balanced size suitable for most standard dialogs with moderate content.</p>
              </div>
              <div slot="footer">
                <button>OK</button>
              </div>
            </enchanted-dialog>

            <enchanted-dialog .dialogTitle=${"Small Dialog (SM)"} .size=${e.SM} ?open=${!0}>
              <div slot="content">
                <p>This is a small (SM) dialog. Compact size for simple messages or quick confirmations.</p>
              </div>
              <div slot="footer">
                <button>Close</button>
              </div>
            </enchanted-dialog>

            <enchanted-dialog .dialogTitle=${"Extra Small Dialog (XS)"} .size=${e.XS} ?open=${!0}>
              <div slot="content">
                <p>Extra small (XS) dialog for minimal content or quick alerts.</p>
              </div>
              <div slot="footer">
                <button>OK</button>
              </div>
            </enchanted-dialog>
          </div>
        </div>

        <div style="margin-top: 40px;">
          <h3 style="margin-top: 0;">Dialog Variations</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <enchanted-dialog .dialogTitle=${"Dialog with Custom Title Slot"} .size=${e.MD} ?open=${!0} ?overrideTitle=${!0}>
              <span slot="title" style="display: flex; align-items: center; gap: 8px; color: #1976d2;">
                <span>🔔</span>
                <strong>Custom Styled Title with Icon</strong>
              </span>
              <div slot="content">
                <p>This dialog uses the overrideTitle property to display custom content in the title slot.</p>
                <p>The title can include icons, badges, or any custom HTML/styling.</p>
              </div>
              <div slot="footer">
                <button>Dismiss</button>
              </div>
            </enchanted-dialog>

            <enchanted-dialog .dialogTitle=${"Dialog without Border"} .size=${e.MD} ?open=${!0} ?removeBorder=${!0}>
              <div slot="content">
                <p>This dialog has removeBorder set to true, removing the border styling from the dialog container.</p>
                <p>Useful for custom styling or seamless integration with specific design requirements.</p>
              </div>
              <div slot="footer">
                <button>Close</button>
              </div>
            </enchanted-dialog>

            <enchanted-dialog .dialogTitle=${"Dialog with Rich Content"} .size=${e.LG} ?open=${!0}>
              <div slot="content">
                <h4 style="margin-top: 0;">Form Example</h4>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                  <div>
                    <label style="display: block; margin-bottom: 4px; font-weight: 500;">Name:</label>
                    <input type="text" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" placeholder="Enter your name"/>
                  </div>
                  <div>
                    <label style="display: block; margin-bottom: 4px; font-weight: 500;">Email:</label>
                    <input type="email" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" placeholder="Enter your email"/>
                  </div>
                  <div>
                    <label style="display: block; margin-bottom: 4px; font-weight: 500;">Message:</label>
                    <textarea style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; min-height: 80px;" placeholder="Enter your message"></textarea>
                  </div>
                </div>
              </div>
              <div slot="footer">
                <button>Cancel</button>
                <button style="background: #1976d2; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Submit</button>
              </div>
            </enchanted-dialog>

            <enchanted-dialog .dialogTitle=${"Confirmation Dialog"} .size=${e.SM} ?open=${!0}>
              <div slot="content">
                <p style="margin: 0;">Are you sure you want to delete this item? This action cannot be undone.</p>
              </div>
              <div slot="footer" style="display: flex; gap: 8px; justify-content: flex-end;">
                <button style="padding: 8px 16px; border: 1px solid #ccc; background: white; border-radius: 4px; cursor: pointer;">Cancel</button>
                <button style="padding: 8px 16px; background: #d32f2f; color: white; border: none; border-radius: 4px; cursor: pointer;">Delete</button>
              </div>
            </enchanted-dialog>
          </div>
        </div>
      </div>
    `,parameters:{docs:{description:{story:"Comprehensive showcase of all dialog sizes and variations. Demonstrates 5 size variants (xl, lg, md, sm, xs) and various configurations including custom title slots with overrideTitle, borderless dialogs with removeBorder, rich content forms, and confirmation dialogs. Note: All dialogs shown as open for visualization purposes. In production, typically only one dialog is open at a time with backdrop overlay."}},controls:{disable:!0}}};var T,x,C;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <enchanted-dialog
        .dialogTitle=\${args.dialogTitle}
        .size=\${args.size}
        ?open=\${args.open}
        ?overrideTitle=\${args.overrideTitle}
        ?removeBorder=\${args.removeBorder}
      >
        <span slot="title">Custom Title Slot</span>
        <div slot="content">Dialog content goes here.</div>
        <div slot="footer">Footer actions here.</div>
      </enchanted-dialog>
    \`;
  },
  name: 'Default'
}`,...(C=(x=g.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var E,S,$;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; flex-direction: column; gap: 40px; padding: 20px;">
        <div>
          <h3 style="margin-top: 0;">Dialog Sizes</h3>
          <p style="margin: 10px 0; color: #666;">All dialogs shown with open=true for visualization. In production, only one dialog would be open at a time.</p>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <enchanted-dialog .dialogTitle=\${'Extra Large Dialog (XL)'} .size=\${DialogSizes.XL} ?open=\${true}>
              <div slot="content">
                <p>This is an extra large (XL) dialog. It provides the most space for content and is suitable for complex forms or detailed information displays.</p>
                <p>Content can include multiple paragraphs, forms, tables, or any other HTML elements.</p>
              </div>
              <div slot="footer">
                <button>Cancel</button>
                <button>Confirm</button>
              </div>
            </enchanted-dialog>

            <enchanted-dialog .dialogTitle=\${'Large Dialog (LG)'} .size=\${DialogSizes.LG} ?open=\${true}>
              <div slot="content">
                <p>This is a large (LG) dialog. It provides ample space for most use cases including forms with multiple fields.</p>
              </div>
              <div slot="footer">
                <button>Cancel</button>
                <button>Save</button>
              </div>
            </enchanted-dialog>

            <enchanted-dialog .dialogTitle=\${'Medium Dialog (MD)'} .size=\${DialogSizes.MD} ?open=\${true}>
              <div slot="content">
                <p>This is a medium (MD) dialog. A balanced size suitable for most standard dialogs with moderate content.</p>
              </div>
              <div slot="footer">
                <button>OK</button>
              </div>
            </enchanted-dialog>

            <enchanted-dialog .dialogTitle=\${'Small Dialog (SM)'} .size=\${DialogSizes.SM} ?open=\${true}>
              <div slot="content">
                <p>This is a small (SM) dialog. Compact size for simple messages or quick confirmations.</p>
              </div>
              <div slot="footer">
                <button>Close</button>
              </div>
            </enchanted-dialog>

            <enchanted-dialog .dialogTitle=\${'Extra Small Dialog (XS)'} .size=\${DialogSizes.XS} ?open=\${true}>
              <div slot="content">
                <p>Extra small (XS) dialog for minimal content or quick alerts.</p>
              </div>
              <div slot="footer">
                <button>OK</button>
              </div>
            </enchanted-dialog>
          </div>
        </div>

        <div style="margin-top: 40px;">
          <h3 style="margin-top: 0;">Dialog Variations</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <enchanted-dialog .dialogTitle=\${'Dialog with Custom Title Slot'} .size=\${DialogSizes.MD} ?open=\${true} ?overrideTitle=\${true}>
              <span slot="title" style="display: flex; align-items: center; gap: 8px; color: #1976d2;">
                <span>🔔</span>
                <strong>Custom Styled Title with Icon</strong>
              </span>
              <div slot="content">
                <p>This dialog uses the overrideTitle property to display custom content in the title slot.</p>
                <p>The title can include icons, badges, or any custom HTML/styling.</p>
              </div>
              <div slot="footer">
                <button>Dismiss</button>
              </div>
            </enchanted-dialog>

            <enchanted-dialog .dialogTitle=\${'Dialog without Border'} .size=\${DialogSizes.MD} ?open=\${true} ?removeBorder=\${true}>
              <div slot="content">
                <p>This dialog has removeBorder set to true, removing the border styling from the dialog container.</p>
                <p>Useful for custom styling or seamless integration with specific design requirements.</p>
              </div>
              <div slot="footer">
                <button>Close</button>
              </div>
            </enchanted-dialog>

            <enchanted-dialog .dialogTitle=\${'Dialog with Rich Content'} .size=\${DialogSizes.LG} ?open=\${true}>
              <div slot="content">
                <h4 style="margin-top: 0;">Form Example</h4>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                  <div>
                    <label style="display: block; margin-bottom: 4px; font-weight: 500;">Name:</label>
                    <input type="text" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" placeholder="Enter your name"/>
                  </div>
                  <div>
                    <label style="display: block; margin-bottom: 4px; font-weight: 500;">Email:</label>
                    <input type="email" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" placeholder="Enter your email"/>
                  </div>
                  <div>
                    <label style="display: block; margin-bottom: 4px; font-weight: 500;">Message:</label>
                    <textarea style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; min-height: 80px;" placeholder="Enter your message"></textarea>
                  </div>
                </div>
              </div>
              <div slot="footer">
                <button>Cancel</button>
                <button style="background: #1976d2; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Submit</button>
              </div>
            </enchanted-dialog>

            <enchanted-dialog .dialogTitle=\${'Confirmation Dialog'} .size=\${DialogSizes.SM} ?open=\${true}>
              <div slot="content">
                <p style="margin: 0;">Are you sure you want to delete this item? This action cannot be undone.</p>
              </div>
              <div slot="footer" style="display: flex; gap: 8px; justify-content: flex-end;">
                <button style="padding: 8px 16px; border: 1px solid #ccc; background: white; border-radius: 4px; cursor: pointer;">Cancel</button>
                <button style="padding: 8px 16px; background: #d32f2f; color: white; border: none; border-radius: 4px; cursor: pointer;">Delete</button>
              </div>
            </enchanted-dialog>
          </div>
        </div>
      </div>
    \`;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all dialog sizes and variations. Demonstrates 5 size variants (xl, lg, md, sm, xs) and various configurations including ' + 'custom title slots with overrideTitle, borderless dialogs with removeBorder, rich content forms, and confirmation dialogs. ' + 'Note: All dialogs shown as open for visualization purposes. In production, typically only one dialog is open at a time with backdrop overlay.'
      }
    },
    controls: {
      disable: true
    }
  }
}`,...($=(S=m.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};const K=["EnchantedDialog","AllStates"];export{m as AllStates,g as EnchantedDialog,K as __namedExportsOrder,q as default};
