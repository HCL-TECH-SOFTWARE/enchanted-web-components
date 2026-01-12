import{x as t,E as $}from"./iframe-BY3ui3w0.js";import{n as o,t as D,l as _,E as x}from"./enchanted-ac-base-element-CBHL5x_U.js";import"./enchanted-textfield-DF90cnwL.js";import"./enchanted-button-DEmrPq5W.js";import"./enchanted-badge-Baol5r0t.js";import{H as e,m as a,i as H}from"./cssClassEnums-D4dgqifY.js";import"./index-K2DsxZIL.js";import{c as S,B as T,t as N}from"./index-F6NVQYd9.js";import"./index-CagY_hW_.js";import"./preload-helper-C1FmrZbK.js";import"./state-B3qr-gd1.js";import"./lodash-DGpKHPGy.js";import"./localization-rBpmtxQQ.js";import"./enchanted-select-Ge91KUgI.js";import"./keyboardEventKeys-BnoN8uA3.js";var g={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M18,28H14a2,2,0,0,1-2-2V18.41L4.59,11A2,2,0,0,1,4,9.59V6A2,2,0,0,1,6,4H26a2,2,0,0,1,2,2V9.59A2,2,0,0,1,27.41,11L20,18.41V26A2,2,0,0,1,18,28ZM6,6V9.59l8,8V26h4V17.59l8-8V6Z"}}],name:"filter",size:32};const m="icon-filter";class O extends T{render(){return t`${N({...g,attrs:{...g.attrs,preserveAspectRatio:"xMidYMid"}})}`}}S&&!customElements.get(m)&&customElements.define(m,O);var w=Object.defineProperty,I=Object.getOwnPropertyDescriptor,s=(n,i,p,l)=>{for(var r=l>1?void 0:l?I(i,p):i,v=n.length-1,u;v>=0;v--)(u=n[v])&&(r=(l?u(i,p,r):u(r))||r);return l&&r&&w(i,p,r),r};let d=class extends x{constructor(){super(...arguments),this.headerTitle="",this.showBackIcon=!1,this.isSideNavOpen=!1,this.disabled=!1,this.variant=void 0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}renderTitle(i){switch(i){case e.HEADER_AUTHORING:return t`${this.getMessage("header.authoring.search")}`;case e.HEADER_AUTHORING_MODAL_CLOSE:return t`${this.getMessage("header.authoring.search")}`;case e.HEADER_ENDUSER:return t`${this.getMessage("header.enduser.search.center.title")}`;default:return t`${this.headerTitle}`}}renderEndSection(i){switch(i){case e.HEADER_AUTHORING:return t`
          <enchanted-textfield label=""
            ?disabled="${this.disabled}"
            exportparts=${a.INPUT} 
            placeholder="${this.getMessage("header.enduser.search.placeholder")}"
          >
          </enchanted-textfield>
          <div part=${a.HEADER_SPACING_END}>
            <enchanted-button
              ?disabled="${this.disabled}"
              buttontext=''
              ?outlined="${!1}"
              data-testid="enchanted-filter-button"
              .icon="${t`<icon-filter size="16" color="currentColor"></icon-filter>`}"
            >
            </enchanted-button>
            <enchanted-badge part=${a.BADGE_DOT}/>
          </div>`;case e.HEADER_AUTHORING_MODAL_CLOSE:return t`
          <div part=${a.HEADER_SPACING_END}>
            <enchanted-button
              ?disabled="${this.disabled}"
              .icon="${t`<icon-search size="16" color="currentColor"></icon-search>`}"
              buttontext="${this.getMessage("header.enduser.search")}"
              exportparts="${Object.values(H).join(",")}"
              ?outlined="${!0}"
            >
            </enchanted-button>
          </div>`;case e.HEADER_ENDUSER:return t`
          <div part=${a.HEADER_SPACING_END}></div>`;default:return null}}render(){return t`
      <div part=${a.HEADER}>
        <div part=${a.SUB_HEADER_START}>
          <div part=${this.isSideNavOpen?a.HEADER_SPACING_START_HAMBURGER:a.HEADER_SPACING_START} >
            ${this.showBackIcon?t`
              <enchanted-button
              ?disabled="${this.disabled}"
              buttontext=''
              ?outlined="${!1}"
              data-testid="enchanted-back-button"
              .icon="${t`<icon-chevron-left size="16" color="rgba(0, 0, 0, 0.60)"></icon-chevron-left>`}"
            >
            </enchanted-button>`:$}
          </div>
          <div part=${a.H6}>
            ${this.renderTitle(this.variant)}
          </div>
        </div>
        <div part=${a.SUB_HEADER_END}>
          ${this.renderEndSection(this.variant)}
        </div>
      </div>
      <hr part=${a.HR_PART}>
    `}};s([o({type:String})],d.prototype,"headerTitle",2);s([o({type:Boolean})],d.prototype,"showBackIcon",2);s([o({type:Boolean})],d.prototype,"isSideNavOpen",2);s([o({type:Boolean})],d.prototype,"disabled",2);s([o()],d.prototype,"variant",2);d=s([D("enchanted-header"),_()],d);const J={title:"Navigation/enchanted-header",component:"enchanted-header",tags:["autodocs"],argTypes:{headerTitle:{control:{type:"text"},description:"Title text displayed in the header. Used when variant is undefined or for custom header titles. Overridden by localized messages in specific variants.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},variant:{control:{type:"radio"},options:[e.HEADER_AUTHORING,e.HEADER_AUTHORING_MODAL_CLOSE,e.HEADER_ENDUSER],description:"Header variant controlling layout and content. Options: HEADER_AUTHORING (with search input and filter), HEADER_AUTHORING_MODAL_CLOSE (with search button), HEADER_ENDUSER (end-user interface). Each variant has specific UI patterns.",table:{category:"Layout",type:{summary:"HEADER_VARIANT"},defaultValue:{summary:e.HEADER_AUTHORING}}},showBackIcon:{control:{type:"boolean"},description:"Shows or hides the back/chevron-left icon at the start of the header. When enabled, displays a navigation back button for hierarchical navigation.",table:{category:"Display",type:{summary:"boolean"},defaultValue:{summary:"false"}}},isSideNavOpen:{control:{type:"boolean"},description:"Indicates whether the side navigation is open. Controls related header styling and layout adjustments when side navigation panel is visible.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"Disables interactive elements within the header. When true, header actions and buttons are disabled and non-interactive.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}}},args:{headerTitle:"Header Title",variant:e.HEADER_AUTHORING,showBackIcon:!1,isSideNavOpen:!1,disabled:!1},parameters:{docs:{description:{component:"Header component for application navigation and branding. Features multiple variants (authoring, authoring modal, end-user), customizable color, optional back navigation icon, and side navigation integration. Each variant provides specific UI patterns including search inputs, filter buttons, and localized content. Supports disabled states and responsive layout adjustments."}}}},h={render:n=>t`
      <enchanted-header
        .headerTitle=${n.headerTitle}
        .variant=${n.variant}
        ?showBackIcon=${n.showBackIcon}
        ?isSideNavOpen=${n.isSideNavOpen}
        ?disabled=${n.disabled}
      ></enchanted-header>
    `,name:"Default"},c={render:()=>t`
      <div style="display: flex; flex-direction: column; gap: 40px;">
        <div>
          <h3 style="margin: 0 0 20px 0;">Header Variants</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Authoring Variant (with search input and filter)</p>
              <enchanted-header .variant=${e.HEADER_AUTHORING}></enchanted-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Authoring Modal Close Variant (with search button)</p>
              <enchanted-header .variant=${e.HEADER_AUTHORING_MODAL_CLOSE}></enchanted-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">End-User Variant</p>
              <enchanted-header .variant=${e.HEADER_ENDUSER}></enchanted-header>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Custom Titles (No Variant)</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Default Custom Title</p>
              <enchanted-header .headerTitle=${"Custom Application Header"}></enchanted-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Custom Title with Back Icon</p>
              <enchanted-header .headerTitle=${"Settings"} ?showBackIcon=${!0}></enchanted-header>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">State Variations</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">With Side Nav Open</p>
              <enchanted-header .headerTitle=${"Side Nav Open"} ?isSideNavOpen=${!0}></enchanted-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Disabled State (Authoring Modal Close)</p>
              <enchanted-header .variant=${e.HEADER_AUTHORING_MODAL_CLOSE} ?disabled=${!0}></enchanted-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Back Icon + Side Nav Open</p>
              <enchanted-header .headerTitle=${"Dashboard"} ?showBackIcon=${!0} ?isSideNavOpen=${!0}></enchanted-header>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Combined Features</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Authoring Variant + Disabled</p>
              <enchanted-header .variant=${e.HEADER_AUTHORING} ?disabled=${!0}></enchanted-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Custom Title + All States Active</p>
              <enchanted-header .headerTitle=${"Profile Settings"} ?showBackIcon=${!0} ?isSideNavOpen=${!0}></enchanted-header>
            </div>
          </div>
        </div>
      </div>
    `,parameters:{docs:{description:{story:"Comprehensive showcase of all header variants, configurations, and states. Demonstrates 3 header variants (authoring, authoring modal close, end-user), custom titles with optional back icons, state changes (side nav open, disabled), and combined feature scenarios. Shows 11 different header configurations highlighting the full range of customization options including variant-specific UI patterns, navigation states, and accessibility features."}},controls:{disable:!0}}};var E,f,A;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <enchanted-header
        .headerTitle=\${args.headerTitle}
        .variant=\${args.variant}
        ?showBackIcon=\${args.showBackIcon}
        ?isSideNavOpen=\${args.isSideNavOpen}
        ?disabled=\${args.disabled}
      ></enchanted-header>
    \`;
  },
  name: 'Default'
}`,...(A=(f=h.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var y,b,R;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; flex-direction: column; gap: 40px;">
        <div>
          <h3 style="margin: 0 0 20px 0;">Header Variants</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Authoring Variant (with search input and filter)</p>
              <enchanted-header .variant=\${HEADER_VARIANT.HEADER_AUTHORING}></enchanted-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Authoring Modal Close Variant (with search button)</p>
              <enchanted-header .variant=\${HEADER_VARIANT.HEADER_AUTHORING_MODAL_CLOSE}></enchanted-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">End-User Variant</p>
              <enchanted-header .variant=\${HEADER_VARIANT.HEADER_ENDUSER}></enchanted-header>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Custom Titles (No Variant)</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Default Custom Title</p>
              <enchanted-header .headerTitle=\${'Custom Application Header'}></enchanted-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Custom Title with Back Icon</p>
              <enchanted-header .headerTitle=\${'Settings'} ?showBackIcon=\${true}></enchanted-header>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">State Variations</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">With Side Nav Open</p>
              <enchanted-header .headerTitle=\${'Side Nav Open'} ?isSideNavOpen=\${true}></enchanted-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Disabled State (Authoring Modal Close)</p>
              <enchanted-header .variant=\${HEADER_VARIANT.HEADER_AUTHORING_MODAL_CLOSE} ?disabled=\${true}></enchanted-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Back Icon + Side Nav Open</p>
              <enchanted-header .headerTitle=\${'Dashboard'} ?showBackIcon=\${true} ?isSideNavOpen=\${true}></enchanted-header>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Combined Features</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Authoring Variant + Disabled</p>
              <enchanted-header .variant=\${HEADER_VARIANT.HEADER_AUTHORING} ?disabled=\${true}></enchanted-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Custom Title + All States Active</p>
              <enchanted-header .headerTitle=\${'Profile Settings'} ?showBackIcon=\${true} ?isSideNavOpen=\${true}></enchanted-header>
            </div>
          </div>
        </div>
      </div>
    \`;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all header variants, configurations, and states. Demonstrates 3 header variants (authoring, authoring modal close, end-user), ' + 'custom titles with optional back icons, state changes (side nav open, disabled), and combined feature scenarios. ' + 'Shows 11 different header configurations highlighting the full range of customization options including variant-specific UI patterns, ' + 'navigation states, and accessibility features.'
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(R=(b=c.parameters)==null?void 0:b.docs)==null?void 0:R.source}}};const K=["EnchantedHeader","AllStates"];export{c as AllStates,h as EnchantedHeader,K as __namedExportsOrder,J as default};
