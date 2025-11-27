import{x as e,E}from"./iframe-BabVupQu.js";import{n as d,t as b,l as N,D as g}from"./dx-ac-base-element-CMZo8k64.js";import"./dx-input-textfield-CAovuoXs.js";import"./dx-button-BmdWVcw5.js";import"./dx-badge-fYhlnKRK.js";import{H as a,i as r,j as S}from"./cssClassEnums-ChRP0d8n.js";import"./index-CWQBWjj8.js";import{c as x,B as D,t as R}from"./index-B_E2F3xT.js";import"./preload-helper-C1FmrZbK.js";import"./state-ByhEXiYs.js";import"./lodash-B-0SAclH.js";import"./localization-2aoGzCSL.js";import"./dx-input-select-DRXt9p_b.js";import"./dx-svg-icon-C4m89-by.js";import"./keyboardEventKeys-BnoN8uA3.js";var v={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M18,28H14a2,2,0,0,1-2-2V18.41L4.59,11A2,2,0,0,1,4,9.59V6A2,2,0,0,1,6,4H26a2,2,0,0,1,2,2V9.59A2,2,0,0,1,27.41,11L20,18.41V26A2,2,0,0,1,18,28ZM6,6V9.59l8,8V26h4V17.59l8-8V6Z"}}],name:"filter",size:32};const A="icon-filter";let O=class extends D{render(){return e`${R({...v,attrs:{...v.attrs,preserveAspectRatio:"xMidYMid"}})}`}};x&&!customElements.get(A)&&customElements.define(A,O);var m={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z"}}],name:"search",size:32};const _="icon-search";class I extends D{render(){return e`${R({...m,attrs:{...m.attrs,preserveAspectRatio:"xMidYMid"}})}`}}x&&!customElements.get(_)&&customElements.define(_,I);var T=Object.defineProperty,w=Object.getOwnPropertyDescriptor,s=(t,o,p,l)=>{for(var i=l>1?void 0:l?w(o,p):o,h=t.length-1,u;h>=0;h--)(u=t[h])&&(i=(l?u(o,p,i):u(i))||i);return l&&i&&T(o,p,i),i};let n=class extends g{constructor(){super(...arguments),this.color="rgba(0, 0, 0, .32)",this.headerTitle="",this.showBackIcon=!1,this.isSideNavOpen=!1,this.disabled=!1,this.variant=void 0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}renderTitle(o){switch(o){case a.HEADER_AUTHORING:return e`${this.getMessage("header.authoring.search")}`;case a.HEADER_AUTHORING_MODAL_CLOSE:return e`${this.getMessage("header.authoring.search")}`;case a.HEADER_ENDUSER:return e`${this.getMessage("header.enduser.search.center.title")}`;default:return e`${this.headerTitle}`}}renderEndSection(o){switch(o){case a.HEADER_AUTHORING:return e`
          <dx-input-textfield label=""
            exportparts=${r.INPUT} 
            placeholder="${this.getMessage("header.enduser.search.placeholder")}"
          >
          </dx-input-textfield>
          <div part=${r.HEADER_SPACING_END}>
            <dx-button 
              buttontext=''
              ?outlined="${!1}"
              data-testid="dx-filter-button"
              .icon="${e`<icon-filter size="16" color="currentColor"></icon-filter>`}"
            >
            </dx-button>
            <dx-badge part=${r.BADGE_DOT}/>
          </div>`;case a.HEADER_AUTHORING_MODAL_CLOSE:return e`
          <div part=${r.HEADER_SPACING_END}>
            <dx-button
              ?disabled="${this.disabled||E}"
              .icon="${e`<icon-search size="16" color="currentColor"></icon-search>`}"
              buttontext="${this.getMessage("header.enduser.search")}"
              exportparts="${Object.values(S).join(",")}"
              ?outlined="${!0}"
            >
            </dx-button>
          </div>`;case a.HEADER_ENDUSER:return e`
          <div part=${r.HEADER_SPACING_END}></div>`;default:return null}}render(){return e`
      <div part=${r.HEADER}>
        <div part=${r.SUB_HEADER_START}>
          <div part=${this.isSideNavOpen?r.HEADER_SPACING_START_HAMBURGER:r.HEADER_SPACING_START} >
            ${this.showBackIcon?e`
              <dx-button 
              buttontext=''
              ?outlined="${!1}"
              data-testid="dx-back-button"
              .icon="${e`<icon-chevron-left size="16" color="rgba(0, 0, 0, 0.60)"></icon-chevron-left>`}"
            >
            </dx-button>`:E}
          </div>
          <div part=${r.H6}>
            ${this.renderTitle(this.variant)}
          </div>
        </div>
        <div part=${r.SUB_HEADER_END}>
          ${this.renderEndSection(this.variant)}
        </div>
      </div>
      <hr part=${r.HR_PART}>
    `}};s([d({type:String})],n.prototype,"color",2);s([d({type:String})],n.prototype,"headerTitle",2);s([d({type:Boolean})],n.prototype,"showBackIcon",2);s([d({type:Boolean})],n.prototype,"isSideNavOpen",2);s([d({type:Boolean})],n.prototype,"disabled",2);s([d()],n.prototype,"variant",2);n=s([b("dx-header"),N()],n);const J={title:"Navigation/dx-header",component:"dx-header",tags:["autodocs"],argTypes:{variant:{control:{type:"radio"},options:[a.HEADER_AUTHORING,a.HEADER_AUTHORING_MODAL_CLOSE,a.HEADER_ENDUSER],description:"Header variant",defaultValue:a.HEADER_AUTHORING},showBackIcon:{control:"boolean",description:"Show back icon",defaultValue:!1},isSideNavOpen:{control:"boolean",description:"Is side nav open",defaultValue:!1},disabled:{control:"boolean",description:"Disabled",defaultValue:!1},title:{control:"text",description:"Header title",defaultValue:"Header Title"},color:{control:{type:"color"},description:"Header color",defaultValue:"#000000"}},args:{variant:a.HEADER_AUTHORING,showBackIcon:!1,isSideNavOpen:!1,disabled:!1,title:"Header Title",color:"rgba(0, 0, 0, .32)"},parameters:{docs:{description:{component:"Header component with controls for variant and boolean properties."}}}},c={render:t=>e`
      <dx-header
        .variant=${t.variant}
        ?showBackIcon=${t.showBackIcon}
        ?isSideNavOpen=${t.isSideNavOpen}
        ?disabled=${t.disabled}
        .title=${t.title}
        .color=${t.color}
      ></dx-header>
    `,name:"DxHeader"};var H,f,$;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <dx-header
        .variant=\${args.variant}
        ?showBackIcon=\${args.showBackIcon}
        ?isSideNavOpen=\${args.isSideNavOpen}
        ?disabled=\${args.disabled}
        .title=\${args.title}
        .color=\${args.color}
      ></dx-header>
    \`;
  },
  name: 'DxHeader'
}`,...($=(f=c.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};const K=["DxHeader"];export{c as DxHeader,K as __namedExportsOrder,J as default};
