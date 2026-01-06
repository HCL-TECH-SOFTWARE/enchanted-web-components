import{x as i}from"./iframe-B8Ykn-0R.js";import{n as h,t as v,E as B}from"./enchanted-ac-base-element-BcyMwwt4.js";import{r as C}from"./state-DtTHjCak.js";import"./enchanted-svg-icon-CIzA7alE.js";import{B as r}from"./cssClassEnums-D4dgqifY.js";import{c as S,B as A,t as M}from"./index-DQxh_L8h.js";import"./index-Dl-Vtdmr.js";import{i as D}from"./localization-Ca5Mq-1-.js";import"./index-BxImLiwP.js";import"./index-BmKmImsl.js";import"./preload-helper-C1FmrZbK.js";var b=(e=>(e.HOME="home",e.INFORMATION="information",e))(b||{}),E={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M16.6123,2.2138a1.01,1.01,0,0,0-1.2427,0L1,13.4194l1.2427,1.5717L4,13.6209V26a2.0041,2.0041,0,0,0,2,2H26a2.0037,2.0037,0,0,0,2-2V13.63L29.7573,15,31,13.4282ZM18,26H14V18h4Zm2,0V18a2.0023,2.0023,0,0,0-2-2H14a2.002,2.002,0,0,0-2,2v8H6V12.0615l10-7.79,10,7.8005V26Z"}}],name:"home",size:32};const R="icon-home";class g extends A{render(){return i`${M({...E,attrs:{...E.attrs,preserveAspectRatio:"xMidYMid"}})}`}}S&&!customElements.get(R)&&customElements.define(R,g);var I=Object.defineProperty,O=Object.getOwnPropertyDescriptor,u=(e,t,a,n)=>{for(var s=n>1?void 0:n?O(t,a):t,o=e.length-1,c;o>=0;o--)(c=e[o])&&(s=(n?c(t,a,s):c(s))||s);return n&&s&&I(t,a,s),s};let d=class extends B{constructor(){super(...arguments),this.key="",this.isDisabled=()=>this.path&&this.path.disabled?this.path.disabled===!0:!1}getPartValue(){return this.partProp&&this.isDisabled()?`${this.partProp} ${r.BREADCRUMBS_DISABLED}`:this.partProp?this.partProp:`${r.BREADCRUMBS_ITEM} ${this.isDisabled()?r.BREADCRUMBS_DISABLED:""}`}renderIcon(){var e,t;if((e=this.path)!=null&&e.icon)return i`<enchanted-svg-icon .icon=${this.path.icon} part=${r.BREADCRUMBS_ICON} color="#00000099" data-testid="breadcrumbs-item-icon"/>`;if((t=this.path)!=null&&t.iconName){let a;switch(this.partProp===r.BREADCRUMBS_ITEM_LAST?a=r.BREADCRUMBS_ITEM_LAST_ICON:a=r.BREADCRUMBS_ICON,this.path.iconName){case b.HOME:return i`<icon-home size="16" part=${a}></icon-home>`;case b.INFORMATION:return i`<icon-information size="16" part=${a}></icon-information>`;default:return i``}}return""}render(){var e,t;return i`
      <div part="${this.getPartValue()}" key=${this.key} title=${(e=this.path)==null?void 0:e.title}>
        <a href="#" part="${this.partProp?r.BREADCRUMBS_LINK_LAST:r.BREADCRUMBS_LINK}" tabindex="${this.isDisabled()?"-1":"0"}">
          <div part="${r.BREADCRUMBS_CONTENT}">
            ${this.renderIcon()}
            ${((t=this.path)==null?void 0:t.title)&&i`<span part="${r.BREADCRUMBS_TEXT}" data-testid="breadcrumbs-title">${this.path.title}</span>`}
          </div>
        </a>
      </div>
    `}};u([h({type:Object})],d.prototype,"path",2);u([h({type:String})],d.prototype,"partProp",2);u([h({type:String})],d.prototype,"key",2);d=u([v("enchanted-breadcrumbs-item")],d);var P=Object.defineProperty,T=Object.getOwnPropertyDescriptor,m=(e,t,a,n)=>{for(var s=n>1?void 0:n?T(t,a):t,o=e.length-1,c;o>=0;o--)(c=e[o])&&(s=(n?c(t,a,s):c(s))||s);return n&&s&&P(t,a,s),s};let p=class extends B{constructor(){super(...arguments),this.paths=[],this.exportParts=Object.values(r).join(","),this.isLtr=D()}render(){var t;return i`
      <nav
        part="${r.BREADCRUMBS_CONTAINER}"
        role="presentation"
      >
        <div role="group">
          <ul part="${r.BREADCRUMBS_LIST}" role="presentation">
          ${(t=this.paths)==null?void 0:t.map((a,n)=>i`
                ${n<this.paths.length-1?i`
                      <li part="${r.BREADCRUMBS_ITEM_LIST}" key="breadcrumb-${n}">
                        <enchanted-breadcrumbs-item
                          @click="${s=>{this.handleBreadcrumbClick&&!a.disabled&&this.handleBreadcrumbClick(s,a)}}"
                          .path="${a}"
                          key="breadcrumb-${n}"
                          exportparts="${this.exportParts}"
                          data-testid="breadcrumbs-item"
                        >
                        </enchanted-breadcrumbs-item>
                      </li>
                        <li part="${r.BREADCRUMBS_SEPARATOR}" aria-hidden="true">
                          <enchanted-svg-icon .icon=${this.isLtr?i`<icon-chevron-right size="16"></icon-chevron-right>`:i`<icon-chevron-left size="16"></icon-chevron-left>`} ?useCurrentColor=${!0}></enchanted-svg-icon>
                        </li>`:i`
                      <li part="${r.BREADCRUMBS_ITEM_LIST}" key="breadcrumb-${n}">
                        <enchanted-breadcrumbs-item
                          .path="${a}"
                          key="breadcrumb-${n}"
                          exportparts="${this.exportParts}"
                          partProp="${r.BREADCRUMBS_ITEM_LAST}"
                          data-testid="breadcrumbs-item"
                          aria-current="page"
                        />
                      </li>`}
              `)}
          </ul>
        </div>
      </nav>
    `}};p.shadowRootOptions={...B.shadowRootOptions,delegatesFocus:!0};m([h({type:Array})],p.prototype,"paths",2);m([h({type:Function})],p.prototype,"handleBreadcrumbClick",2);m([C()],p.prototype,"exportParts",2);m([C()],p.prototype,"isLtr",2);p=m([v("enchanted-breadcrumbs")],p);const k={title:"Navigation/enchanted-breadcrumbs",component:"enchanted-breadcrumbs",tags:["autodocs"],argTypes:{paths:{control:"object",description:"Breadcrumb paths",defaultValue:[{name:"Search",icon:"search",disabled:!1},{name:"Content",icon:"content",disabled:!1},{name:"Elements",icon:"elements",disabled:!1}]}},args:{paths:[{name:"Search",icon:"search",disabled:!1},{name:"Content",icon:"content",disabled:!1},{name:"Elements",icon:"elements",disabled:!1}]},parameters:{docs:{description:{component:"Breadcrumbs component with example paths: Search, Content, Elements."}}}},l={render:e=>i`
      <enchanted-breadcrumbs .paths=${e.paths}></enchanted-breadcrumbs>
    `,name:"EnchantedBreadcrumbs"};var $,f,_;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <enchanted-breadcrumbs .paths=\${args.paths}></enchanted-breadcrumbs>
    \`;
  },
  name: 'EnchantedBreadcrumbs'
}`,...(_=(f=l.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};const K=["EnchantedBreadcrumbs"];export{l as EnchantedBreadcrumbs,K as __namedExportsOrder,k as default};
