import{x as o}from"./iframe-Dsd1MpWQ.js";import{n as m,t as E,D as B}from"./dx-ac-base-element-C9dhstFR.js";import{r as v}from"./state-DQlunuPl.js";import"./dx-svg-icon-9LpOfG7A.js";import{B as r}from"./cssClassEnums-v1h5zF5X.js";import{c as x,B as C,t as S}from"./index-BPZZDKKN.js";import"./index-BjNSVBJf.js";import{i as A}from"./localization-DmqTGOFp.js";import"./index-HHRpnDFu.js";import"./index-DGHtdGDl.js";import"./preload-helper-C1FmrZbK.js";var b=(e=>(e.HOME="home",e.INFORMATION="information",e))(b||{}),R={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M16.6123,2.2138a1.01,1.01,0,0,0-1.2427,0L1,13.4194l1.2427,1.5717L4,13.6209V26a2.0041,2.0041,0,0,0,2,2H26a2.0037,2.0037,0,0,0,2-2V13.63L29.7573,15,31,13.4282ZM18,26H14V18h4Zm2,0V18a2.0023,2.0023,0,0,0-2-2H14a2.002,2.002,0,0,0-2,2v8H6V12.0615l10-7.79,10,7.8005V26Z"}}],name:"home",size:32};const $="icon-home";class M extends C{render(){return o`${S({...R,attrs:{...R.attrs,preserveAspectRatio:"xMidYMid"}})}`}}x&&!customElements.get($)&&customElements.define($,M);var g=Object.defineProperty,I=Object.getOwnPropertyDescriptor,u=(e,t,a,i)=>{for(var s=i>1?void 0:i?I(t,a):t,n=e.length-1,p;n>=0;n--)(p=e[n])&&(s=(i?p(t,a,s):p(s))||s);return i&&s&&g(t,a,s),s};let d=class extends B{constructor(){super(...arguments),this.key="",this.isDisabled=()=>this.path&&this.path.disabled?this.path.disabled===!0:!1}getPartValue(){return this.partProp&&this.isDisabled()?`${this.partProp} ${r.BREADCRUMBS_DISABLED}`:this.partProp?this.partProp:`${r.BREADCRUMBS_ITEM} ${this.isDisabled()?r.BREADCRUMBS_DISABLED:""}`}renderIcon(){var e,t;if((e=this.path)!=null&&e.icon)return o`<dx-svg-icon .icon=${this.path.icon} part=${r.BREADCRUMBS_ICON} color="#00000099" data-testid="breadcrumbs-item-icon"/>`;if((t=this.path)!=null&&t.iconName){let a;switch(this.partProp===r.BREADCRUMBS_ITEM_LAST?a=r.BREADCRUMBS_ITEM_LAST_ICON:a=r.BREADCRUMBS_ICON,this.path.iconName){case b.HOME:return o`<icon-home size="16" part=${a}></icon-home>`;case b.INFORMATION:return o`<icon-information size="16" part=${a}></icon-information>`;default:return o``}}return""}render(){var e,t;return o`
      <div part="${this.getPartValue()}" key=${this.key} title=${(e=this.path)==null?void 0:e.title}>
        <a href="#" part="${this.partProp?r.BREADCRUMBS_LINK_LAST:r.BREADCRUMBS_LINK}" tabindex="${this.isDisabled()?"-1":"0"}">
          <div part="${r.BREADCRUMBS_CONTENT}">
            ${this.renderIcon()}
            ${((t=this.path)==null?void 0:t.title)&&o`<span part="${r.BREADCRUMBS_TEXT}" data-testid="breadcrumbs-title">${this.path.title}</span>`}
          </div>
        </a>
      </div>
    `}};u([m({type:Object})],d.prototype,"path",2);u([m({type:String})],d.prototype,"partProp",2);u([m({type:String})],d.prototype,"key",2);d=u([E("dx-breadcrumbs-item")],d);var O=Object.defineProperty,P=Object.getOwnPropertyDescriptor,h=(e,t,a,i)=>{for(var s=i>1?void 0:i?P(t,a):t,n=e.length-1,p;n>=0;n--)(p=e[n])&&(s=(i?p(t,a,s):p(s))||s);return i&&s&&O(t,a,s),s};let c=class extends B{constructor(){super(...arguments),this.paths=[],this.exportParts=Object.values(r).join(","),this.isLtr=A()}render(){var t;return o`
      <nav
        part="${r.BREADCRUMBS_CONTAINER}"
        role="presentation"
      >
        <div role="group">
          <ul part="${r.BREADCRUMBS_LIST}" role="presentation">
          ${(t=this.paths)==null?void 0:t.map((a,i)=>o`
                ${i<this.paths.length-1?o`
                      <li part="${r.BREADCRUMBS_ITEM_LIST}" key="breadcrumb-${i}">
                        <dx-breadcrumbs-item
                          @click="${s=>{this.handleBreadcrumbClick&&!a.disabled&&this.handleBreadcrumbClick(s,a)}}"
                          .path="${a}"
                          key="breadcrumb-${i}"
                          exportparts="${this.exportParts}"
                          data-testid="breadcrumbs-item"
                        >
                        </dx-breadcrumbs-item>
                      </li>
                        <li part="${r.BREADCRUMBS_SEPARATOR}" aria-hidden="true">
                          <dx-svg-icon .icon=${this.isLtr?o`<icon-chevron-right size="16"></icon-chevron-right>`:o`<icon-chevron-left size="16"></icon-chevron-left>`} ?useCurrentColor=${!0}></dx-svg-icon>
                        </li>`:o`
                      <li part="${r.BREADCRUMBS_ITEM_LIST}" key="breadcrumb-${i}">
                        <dx-breadcrumbs-item
                          .path="${a}"
                          key="breadcrumb-${i}"
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
    `}};c.shadowRootOptions={...B.shadowRootOptions,delegatesFocus:!0};h([m({type:Array})],c.prototype,"paths",2);h([m({type:Function})],c.prototype,"handleBreadcrumbClick",2);h([v()],c.prototype,"exportParts",2);h([v()],c.prototype,"isLtr",2);c=h([E("dx-breadcrumbs")],c);const k={title:"Navigation/dx-breadcrumbs",component:"dx-breadcrumbs",tags:["autodocs"],argTypes:{paths:{control:"object",description:"Breadcrumb paths",defaultValue:[{name:"Search",icon:"search",disabled:!1},{name:"Content",icon:"content",disabled:!1},{name:"Elements",icon:"elements",disabled:!1}]}},args:{paths:[{name:"Search",icon:"search",disabled:!1},{name:"Content",icon:"content",disabled:!1},{name:"Elements",icon:"elements",disabled:!1}]},parameters:{docs:{description:{component:"Breadcrumbs component with example paths: Search, Content, Elements."}}}},l={render:e=>o`
      <dx-breadcrumbs .paths=${e.paths}></dx-breadcrumbs>
    `,name:"DxBreadcrumbs"};var f,D,_;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <dx-breadcrumbs .paths=\${args.paths}></dx-breadcrumbs>
    \`;
  },
  name: 'DxBreadcrumbs'
}`,...(_=(D=l.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const K=["DxBreadcrumbs"];export{l as DxBreadcrumbs,K as __namedExportsOrder,k as default};
