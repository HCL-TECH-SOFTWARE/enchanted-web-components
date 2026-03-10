import{c as b,V as g,E as x,u as a,s as d,g as l,W as $,k as C,n as p,l as S,X as e}from"./tags-xkLHt5Ez.js";import{x as O,E as w}from"./iframe-C32rrkgB.js";import"./enchanted-textfield-D5FUW9Ez.js";import"./enchanted-button-CPwlhnNb.js";import"./enchanted-badge-Cgwya0NM.js";import{H as t,p as i,k as I,q as G}from"./cssClassEnums-WDBe4U61.js";import"./index-Jxeq8AF6.js";import{t as U}from"./index-CuTRIAwF.js";import{c as V,I as B,B as k}from"./tags-DNNghoUc.js";import"./index-D57X42El.js";import"./preload-helper-C1FmrZbK.js";import"./state-BMB52Uli.js";import"./lodash-DfIfhbli.js";import"./localization-BszdroIW.js";import"./enchanted-select-Ge91KUgI.js";import"./keyboardEventKeys-BnoN8uA3.js";var _={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M18,28H14a2,2,0,0,1-2-2V18.41L4.59,11A2,2,0,0,1,4,9.59V6A2,2,0,0,1,6,4H26a2,2,0,0,1,2,2V9.59A2,2,0,0,1,27.41,11L20,18.41V26A2,2,0,0,1,18,28ZM6,6V9.59l8,8V26h4V17.59l8-8V6Z"}}],name:"filter",size:32};const D=`${B}icon-filter`;class M extends k{render(){return O`${U({..._,attrs:{..._.attrs,preserveAspectRatio:"xMidYMid"}})}`}}V&&!customElements.get(D)&&customElements.define(D,M);var L=Object.defineProperty,P=Object.getOwnPropertyDescriptor,c=(n,r,v,E)=>{for(var o=E>1?void 0:E?P(r,v):r,u=n.length-1,m;u>=0;u--)(m=n[u])&&(o=(E?m(r,v,o):m(o))||o);return E&&o&&L(r,v,o),o};const z=b("enchanted-web-components:components:atomic-component:enchanted-header.ts");let s=class extends x{constructor(){super(...arguments),this.headerTitle="",this.showBackIcon=!1,this.isSideNavOpen=!1,this.disabled=!1,this.variant=void 0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}renderTitle(r){switch(r){case t.HEADER_AUTHORING:return a`${this.getMessage("header.authoring.search")}`;case t.HEADER_AUTHORING_MODAL_CLOSE:return a`${this.getMessage("header.authoring.search")}`;case t.HEADER_ENDUSER:return a`${this.getMessage("header.enduser.search.center.title")}`;default:return a`${this.headerTitle}`}}renderEndSection(r){switch(r){case t.HEADER_AUTHORING:return a`
          <${$} label=""
            ?disabled="${this.disabled}"
            exportparts=${i.INPUT} 
            placeholder="${this.getMessage("header.enduser.search.placeholder")}"
          >
          </${$}>
          <div part=${i.HEADER_SPACING_END}>
            <${d}
              ?disabled="${this.disabled}"
              buttontext=''
              ?outlined="${!1}"
              data-testid="enchanted-filter-button"
              .icon="${a`<${l("icon-filter")} size="16" color="currentColor"></${l("icon-filter")}>`}"
            >
            </${d}>
            <${C} part=${G.BADGE_DOT}/>
          </div>`;case t.HEADER_AUTHORING_MODAL_CLOSE:return a`
          <div part=${i.HEADER_SPACING_END}>
            <${d}
              ?disabled="${this.disabled}"
              .icon="${a`<${l("icon-search")} size="16" color="currentColor"></${l("icon-search")}>`}"
              buttontext="${this.getMessage("header.enduser.search")}"
              exportparts="${Object.values(I).join(",")}"
              ?outlined="${!0}"
            >
            </${d}>
          </div>`;case t.HEADER_ENDUSER:return a`
          <div part=${i.HEADER_SPACING_END}></div>`;default:return null}}render(){return a`
      <div part=${i.HEADER}>
        <div part=${i.SUB_HEADER_START}>
          <div part=${this.isSideNavOpen?i.HEADER_SPACING_START_HAMBURGER:i.HEADER_SPACING_START} >
            ${this.showBackIcon?a`
              <${d}
              ?disabled="${this.disabled}"
              buttontext=''
              ?outlined="${!1}"
              data-testid="enchanted-back-button"
              .icon="${a`<${l("icon-chevron-left")} size="16" color="rgba(0, 0, 0, 0.60)"></${l("icon-chevron-left")}>`}"
            >
            </${d}>`:w}
          </div>
          <div part=${i.H6}>
            ${this.renderTitle(this.variant)}
          </div>
        </div>
        <div part=${i.SUB_HEADER_END}>
          ${this.renderEndSection(this.variant)}
        </div>
      </div>
      <hr part=${i.HR_PART}>
    `}};c([p({type:String})],s.prototype,"headerTitle",2);c([p({type:Boolean})],s.prototype,"showBackIcon",2);c([p({type:Boolean})],s.prototype,"isSideNavOpen",2);c([p({type:Boolean})],s.prototype,"disabled",2);c([p()],s.prototype,"variant",2);s=c([S()],s);customElements.get(g)?z("Component (%s) is currently registered and not possible to registrate again.",g):customElements.define(g,s);const oe={title:"Navigation/enchanted-header",component:"enchanted-header",tags:["autodocs"],argTypes:{headerTitle:{control:{type:"text"},description:"Title text displayed in the header. Used when variant is undefined or for custom header titles. Overridden by localized messages in specific variants.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},variant:{control:{type:"radio"},options:[t.HEADER_AUTHORING,t.HEADER_AUTHORING_MODAL_CLOSE,t.HEADER_ENDUSER],description:"Header variant controlling layout and content. Options: HEADER_AUTHORING (with search input and filter), HEADER_AUTHORING_MODAL_CLOSE (with search button), HEADER_ENDUSER (end-user interface). Each variant has specific UI patterns.",table:{category:"Layout",type:{summary:"HEADER_VARIANT"},defaultValue:{summary:t.HEADER_AUTHORING}}},showBackIcon:{control:{type:"boolean"},description:"Shows or hides the back/chevron-left icon at the start of the header. When enabled, displays a navigation back button for hierarchical navigation.",table:{category:"Display",type:{summary:"boolean"},defaultValue:{summary:"false"}}},isSideNavOpen:{control:{type:"boolean"},description:"Indicates whether the side navigation is open. Controls related header styling and layout adjustments when side navigation panel is visible.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"Disables interactive elements within the header. When true, header actions and buttons are disabled and non-interactive.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}}},args:{headerTitle:"Header Title",variant:t.HEADER_AUTHORING,showBackIcon:!1,isSideNavOpen:!1,disabled:!1},parameters:{docs:{description:{component:"Header component for application navigation and branding. Features multiple variants (authoring, authoring modal, end-user), customizable color, optional back navigation icon, and side navigation integration. Each variant provides specific UI patterns including search inputs, filter buttons, and localized content. Supports disabled states and responsive layout adjustments."}}}},h={render:n=>a`
      <${e}
        .headerTitle=${n.headerTitle}
        .variant=${n.variant}
        ?showBackIcon=${n.showBackIcon}
        ?isSideNavOpen=${n.isSideNavOpen}
        ?disabled=${n.disabled}
      ></${e}>
    `,name:"Default"},A={render:()=>a`
      <div style="display: flex; flex-direction: column; gap: 40px;">
        <div>
          <h3 style="margin: 0 0 20px 0;">Header Variants</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Authoring Variant (with search input and filter)</p>
              <${e} .variant=${t.HEADER_AUTHORING}></${e}>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Authoring Modal Close Variant (with search button)</p>
              <${e} .variant=${t.HEADER_AUTHORING_MODAL_CLOSE}></${e}>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">End-User Variant</p>
              <${e} .variant=${t.HEADER_ENDUSER}></${e}>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Custom Titles (No Variant)</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Default Custom Title</p>
              <${e} .headerTitle=${"Custom Application Header"}></${e}>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Custom Title with Back Icon</p>
              <${e} .headerTitle=${"Settings"} ?showBackIcon=${!0}></${e}>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">State Variations</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">With Side Nav Open</p>
              <${e} .headerTitle=${"Side Nav Open"} ?isSideNavOpen=${!0}></${e}>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Disabled State (Authoring Modal Close)</p>
              <${e} .variant=${t.HEADER_AUTHORING_MODAL_CLOSE} ?disabled=${!0}></${e}>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Back Icon + Side Nav Open</p>
              <${e} .headerTitle=${"Dashboard"} ?showBackIcon=${!0} ?isSideNavOpen=${!0}></${e}>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Combined Features</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Authoring Variant + Disabled</p>
              <${e} .variant=${t.HEADER_AUTHORING} ?disabled=${!0}></${e}>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Custom Title + All States Active</p>
              <${e} .headerTitle=${"Profile Settings"} ?showBackIcon=${!0} ?isSideNavOpen=${!0}></${e}>
            </div>
          </div>
        </div>
      </div>
    `,parameters:{docs:{description:{story:"Comprehensive showcase of all header variants, configurations, and states. Demonstrates 3 header variants (authoring, authoring modal close, end-user), custom titles with optional back icons, state changes (side nav open, disabled), and combined feature scenarios. Shows 11 different header configurations highlighting the full range of customization options including variant-specific UI patterns, navigation states, and accessibility features."}},controls:{disable:!0}}};var T,H,N;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <\${ENCHANTED_HEADER_TAG}
        .headerTitle=\${args.headerTitle}
        .variant=\${args.variant}
        ?showBackIcon=\${args.showBackIcon}
        ?isSideNavOpen=\${args.isSideNavOpen}
        ?disabled=\${args.disabled}
      ></\${ENCHANTED_HEADER_TAG}>
    \`;
  },
  name: 'Default'
}`,...(N=(H=h.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var f,R,y;A.parameters={...A.parameters,docs:{...(f=A.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; flex-direction: column; gap: 40px;">
        <div>
          <h3 style="margin: 0 0 20px 0;">Header Variants</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Authoring Variant (with search input and filter)</p>
              <\${ENCHANTED_HEADER_TAG} .variant=\${HEADER_VARIANT.HEADER_AUTHORING}></\${ENCHANTED_HEADER_TAG}>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Authoring Modal Close Variant (with search button)</p>
              <\${ENCHANTED_HEADER_TAG} .variant=\${HEADER_VARIANT.HEADER_AUTHORING_MODAL_CLOSE}></\${ENCHANTED_HEADER_TAG}>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">End-User Variant</p>
              <\${ENCHANTED_HEADER_TAG} .variant=\${HEADER_VARIANT.HEADER_ENDUSER}></\${ENCHANTED_HEADER_TAG}>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Custom Titles (No Variant)</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Default Custom Title</p>
              <\${ENCHANTED_HEADER_TAG} .headerTitle=\${'Custom Application Header'}></\${ENCHANTED_HEADER_TAG}>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Custom Title with Back Icon</p>
              <\${ENCHANTED_HEADER_TAG} .headerTitle=\${'Settings'} ?showBackIcon=\${true}></\${ENCHANTED_HEADER_TAG}>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">State Variations</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">With Side Nav Open</p>
              <\${ENCHANTED_HEADER_TAG} .headerTitle=\${'Side Nav Open'} ?isSideNavOpen=\${true}></\${ENCHANTED_HEADER_TAG}>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Disabled State (Authoring Modal Close)</p>
              <\${ENCHANTED_HEADER_TAG} .variant=\${HEADER_VARIANT.HEADER_AUTHORING_MODAL_CLOSE} ?disabled=\${true}></\${ENCHANTED_HEADER_TAG}>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Back Icon + Side Nav Open</p>
              <\${ENCHANTED_HEADER_TAG} .headerTitle=\${'Dashboard'} ?showBackIcon=\${true} ?isSideNavOpen=\${true}></\${ENCHANTED_HEADER_TAG}>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Combined Features</h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Authoring Variant + Disabled</p>
              <\${ENCHANTED_HEADER_TAG} .variant=\${HEADER_VARIANT.HEADER_AUTHORING} ?disabled=\${true}></\${ENCHANTED_HEADER_TAG}>
            </div>

            <div>
              <p style="margin: 0 0 10px 0; font-weight: 600;">Custom Title + All States Active</p>
              <\${ENCHANTED_HEADER_TAG} .headerTitle=\${'Profile Settings'} ?showBackIcon=\${true} ?isSideNavOpen=\${true}></\${ENCHANTED_HEADER_TAG}>
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
}`,...(y=(R=A.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};const de=["EnchantedHeader","AllStates"];export{A as AllStates,h as EnchantedHeader,de as __namedExportsOrder,oe as default};
