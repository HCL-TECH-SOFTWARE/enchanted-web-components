import{x as t,E as D}from"./iframe-Dsd1MpWQ.js";import{n as o,t as R,l as $,D as _}from"./dx-ac-base-element-C9dhstFR.js";import"./dx-input-textfield-BSbq_0wd.js";import"./dx-button-gwJQrlvi.js";import"./dx-badge-lWY7oCAA.js";import{H as e,m as a,i as H}from"./cssClassEnums-v1h5zF5X.js";import"./index-DGHtdGDl.js";import{c as S,B as T,t as N}from"./index-BPZZDKKN.js";import"./index-DILb829j.js";import"./preload-helper-C1FmrZbK.js";import"./state-DQlunuPl.js";import"./lodash-BXdGFY-L.js";import"./localization-DmqTGOFp.js";import"./dx-input-select-DRXt9p_b.js";import"./keyboardEventKeys-BnoN8uA3.js";var g={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M18,28H14a2,2,0,0,1-2-2V18.41L4.59,11A2,2,0,0,1,4,9.59V6A2,2,0,0,1,6,4H26a2,2,0,0,1,2,2V9.59A2,2,0,0,1,27.41,11L20,18.41V26A2,2,0,0,1,18,28ZM6,6V9.59l8,8V26h4V17.59l8-8V6Z"}}],name:"filter",size:32};const m="icon-filter";class O extends T{render(){return t`${N({...g,attrs:{...g.attrs,preserveAspectRatio:"xMidYMid"}})}`}}S&&!customElements.get(m)&&customElements.define(m,O);var w=Object.defineProperty,I=Object.getOwnPropertyDescriptor,s=(i,n,c,l)=>{for(var r=l>1?void 0:l?I(n,c):n,v=i.length-1,u;v>=0;v--)(u=i[v])&&(r=(l?u(n,c,r):u(r))||r);return l&&r&&w(n,c,r),r};let d=class extends _{constructor(){super(...arguments),this.headerTitle="",this.showBackIcon=!1,this.isSideNavOpen=!1,this.disabled=!1,this.variant=void 0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}renderTitle(n){switch(n){case e.HEADER_AUTHORING:return t`${this.getMessage("header.authoring.search")}`;case e.HEADER_AUTHORING_MODAL_CLOSE:return t`${this.getMessage("header.authoring.search")}`;case e.HEADER_ENDUSER:return t`${this.getMessage("header.enduser.search.center.title")}`;default:return t`${this.headerTitle}`}}renderEndSection(n){switch(n){case e.HEADER_AUTHORING:return t`
          <dx-input-textfield label=""
            ?disabled="${this.disabled}"
            exportparts=${a.INPUT} 
            placeholder="${this.getMessage("header.enduser.search.placeholder")}"
          >
          </dx-input-textfield>
          <div part=${a.HEADER_SPACING_END}>
            <dx-button
              ?disabled="${this.disabled}"
              buttontext=''
              ?outlined="${!1}"
              data-testid="dx-filter-button"
              .icon="${t`<icon-filter size="16" color="currentColor"></icon-filter>`}"
            >
            </dx-button>
            <dx-badge part=${a.BADGE_DOT}/>
          </div>`;case e.HEADER_AUTHORING_MODAL_CLOSE:return t`
          <div part=${a.HEADER_SPACING_END}>
            <dx-button
              ?disabled="${this.disabled}"
              .icon="${t`<icon-search size="16" color="currentColor"></icon-search>`}"
              buttontext="${this.getMessage("header.enduser.search")}"
              exportparts="${Object.values(H).join(",")}"
              ?outlined="${!0}"
            >
            </dx-button>
          </div>`;case e.HEADER_ENDUSER:return t`
          <div part=${a.HEADER_SPACING_END}></div>`;default:return null}}render(){return t`
      <div part=${a.HEADER}>
        <div part=${a.SUB_HEADER_START}>
          <div part=${this.isSideNavOpen?a.HEADER_SPACING_START_HAMBURGER:a.HEADER_SPACING_START} >
            ${this.showBackIcon?t`
              <dx-button
              ?disabled="${this.disabled}"
              buttontext=''
              ?outlined="${!1}"
              data-testid="dx-back-button"
              .icon="${t`<icon-chevron-left size="16" color="rgba(0, 0, 0, 0.60)"></icon-chevron-left>`}"
            >
            </dx-button>`:D}
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
    `}};s([o({type:String})],d.prototype,"headerTitle",2);s([o({type:Boolean})],d.prototype,"showBackIcon",2);s([o({type:Boolean})],d.prototype,"isSideNavOpen",2);s([o({type:Boolean})],d.prototype,"disabled",2);s([o()],d.prototype,"variant",2);d=s([R("dx-header"),$()],d);const J={title:"Navigation/dx-header",component:"dx-header",tags:["autodocs"],argTypes:{headerTitle:{control:{type:"text"},description:"Title text displayed in the header. Used when variant is undefined or for custom header titles. Overridden by localized messages in specific variants.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},variant:{control:{type:"radio"},options:[e.HEADER_AUTHORING,e.HEADER_AUTHORING_MODAL_CLOSE,e.HEADER_ENDUSER],description:"Header variant controlling layout and content. Options: HEADER_AUTHORING (with search input and filter), HEADER_AUTHORING_MODAL_CLOSE (with search button), HEADER_ENDUSER (end-user interface). Each variant has specific UI patterns.",table:{category:"Layout",type:{summary:"HEADER_VARIANT"},defaultValue:{summary:e.HEADER_AUTHORING}}},showBackIcon:{control:{type:"boolean"},description:"Shows or hides the back/chevron-left icon at the start of the header. When enabled, displays a navigation back button for hierarchical navigation.",table:{category:"Display",type:{summary:"boolean"},defaultValue:{summary:"false"}}},isSideNavOpen:{control:{type:"boolean"},description:"Indicates whether the side navigation is open. Controls related header styling and layout adjustments when side navigation panel is visible.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"Disables interactive elements within the header. When true, header actions and buttons are disabled and non-interactive.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}}},args:{headerTitle:"Header Title",variant:e.HEADER_AUTHORING,showBackIcon:!1,isSideNavOpen:!1,disabled:!1},parameters:{docs:{description:{component:"Header component for application navigation and branding. Features multiple variants (authoring, authoring modal, end-user), customizable color, optional back navigation icon, and side navigation integration. Each variant provides specific UI patterns including search inputs, filter buttons, and localized content. Supports disabled states and responsive layout adjustments."}}}},p={render:i=>t`
      <dx-header
        .headerTitle=${i.headerTitle}
        .variant=${i.variant}
        ?showBackIcon=${i.showBackIcon}
        ?isSideNavOpen=${i.isSideNavOpen}
        ?disabled=${i.disabled}
      ></dx-header>
    `,name:"Default"},h={render:()=>t`
      <div style="display: flex; flex-direction: column; gap: 40px;">
        <div>
          <h3 style="margin: 0 0 20px 0;">Header Variants</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Authoring Variant (with search input and filter)</p>
              <dx-header .variant=${e.HEADER_AUTHORING}></dx-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Authoring Modal Close Variant (with search button)</p>
              <dx-header .variant=${e.HEADER_AUTHORING_MODAL_CLOSE}></dx-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">End-User Variant</p>
              <dx-header .variant=${e.HEADER_ENDUSER}></dx-header>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Custom Titles (No Variant)</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Default Custom Title</p>
              <dx-header .headerTitle=${"Custom Application Header"}></dx-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Custom Title with Back Icon</p>
              <dx-header .headerTitle=${"Settings"} ?showBackIcon=${!0}></dx-header>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">State Variations</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">With Side Nav Open</p>
              <dx-header .headerTitle=${"Side Nav Open"} ?isSideNavOpen=${!0}></dx-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Disabled State (Authoring Modal Close)</p>
              <dx-header .variant=${e.HEADER_AUTHORING_MODAL_CLOSE} ?disabled=${!0}></dx-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Back Icon + Side Nav Open</p>
              <dx-header .headerTitle=${"Dashboard"} ?showBackIcon=${!0} ?isSideNavOpen=${!0}></dx-header>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Combined Features</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Authoring Variant + Disabled</p>
              <dx-header .variant=${e.HEADER_AUTHORING} ?disabled=${!0}></dx-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Custom Title + All States Active</p>
              <dx-header .headerTitle=${"Profile Settings"} ?showBackIcon=${!0} ?isSideNavOpen=${!0}></dx-header>
            </div>
          </div>
        </div>
      </div>
    `,parameters:{docs:{description:{story:"Comprehensive showcase of all header variants, configurations, and states. Demonstrates 3 header variants (authoring, authoring modal close, end-user), custom titles with optional back icons, state changes (side nav open, disabled), and combined feature scenarios. Shows 11 different header configurations highlighting the full range of customization options including variant-specific UI patterns, navigation states, and accessibility features."}},controls:{disable:!0}}};var x,f,E;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <dx-header
        .headerTitle=\${args.headerTitle}
        .variant=\${args.variant}
        ?showBackIcon=\${args.showBackIcon}
        ?isSideNavOpen=\${args.isSideNavOpen}
        ?disabled=\${args.disabled}
      ></dx-header>
    \`;
  },
  name: 'Default'
}`,...(E=(f=p.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var A,y,b;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; flex-direction: column; gap: 40px;">
        <div>
          <h3 style="margin: 0 0 20px 0;">Header Variants</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Authoring Variant (with search input and filter)</p>
              <dx-header .variant=\${HEADER_VARIANT.HEADER_AUTHORING}></dx-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Authoring Modal Close Variant (with search button)</p>
              <dx-header .variant=\${HEADER_VARIANT.HEADER_AUTHORING_MODAL_CLOSE}></dx-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">End-User Variant</p>
              <dx-header .variant=\${HEADER_VARIANT.HEADER_ENDUSER}></dx-header>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Custom Titles (No Variant)</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Default Custom Title</p>
              <dx-header .headerTitle=\${'Custom Application Header'}></dx-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Custom Title with Back Icon</p>
              <dx-header .headerTitle=\${'Settings'} ?showBackIcon=\${true}></dx-header>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">State Variations</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">With Side Nav Open</p>
              <dx-header .headerTitle=\${'Side Nav Open'} ?isSideNavOpen=\${true}></dx-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Disabled State (Authoring Modal Close)</p>
              <dx-header .variant=\${HEADER_VARIANT.HEADER_AUTHORING_MODAL_CLOSE} ?disabled=\${true}></dx-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Back Icon + Side Nav Open</p>
              <dx-header .headerTitle=\${'Dashboard'} ?showBackIcon=\${true} ?isSideNavOpen=\${true}></dx-header>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Combined Features</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Authoring Variant + Disabled</p>
              <dx-header .variant=\${HEADER_VARIANT.HEADER_AUTHORING} ?disabled=\${true}></dx-header>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Custom Title + All States Active</p>
              <dx-header .headerTitle=\${'Profile Settings'} ?showBackIcon=\${true} ?isSideNavOpen=\${true}></dx-header>
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
}`,...(b=(y=h.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const K=["DxHeader","AllStates"];export{h as AllStates,p as DxHeader,K as __namedExportsOrder,J as default};
