import{x as i}from"./iframe-g_dBLWCH.js";import{n as m,t as _,D as B}from"./dx-ac-base-element-Ba1nuzGa.js";import{r as E}from"./state-BrHRPonU.js";import"./dx-svg-icon-j95vRYmd.js";import{B as s}from"./cssClassEnums-DKCjOuJT.js";import{c as v,B as C,t as A}from"./index-DAvuBMGP.js";import"./index-_3Z8720n.js";import{i as S}from"./localization-_QVbBsw5.js";import"./index-B1kB_W_f.js";import"./index-D-LugaBv.js";import"./preload-helper-C1FmrZbK.js";var b=(e=>(e.HOME="home",e.INFORMATION="information",e))(b||{}),f={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M16.6123,2.2138a1.01,1.01,0,0,0-1.2427,0L1,13.4194l1.2427,1.5717L4,13.6209V26a2.0041,2.0041,0,0,0,2,2H26a2.0037,2.0037,0,0,0,2-2V13.63L29.7573,15,31,13.4282ZM18,26H14V18h4Zm2,0V18a2.0023,2.0023,0,0,0-2-2H14a2.002,2.002,0,0,0-2,2v8H6V12.0615l10-7.79,10,7.8005V26Z"}}],name:"home",size:32};const R="icon-home";class M extends C{render(){return i`${A({...f,attrs:{...f.attrs,preserveAspectRatio:"xMidYMid"}})}`}}v&&!customElements.get(R)&&customElements.define(R,M);var g=Object.defineProperty,O=Object.getOwnPropertyDescriptor,u=(e,t,r,o)=>{for(var a=o>1?void 0:o?O(t,r):t,n=e.length-1,p;n>=0;n--)(p=e[n])&&(a=(o?p(t,r,a):p(a))||a);return o&&a&&g(t,r,a),a};let d=class extends B{constructor(){super(...arguments),this.key="",this.isDisabled=()=>this.path&&this.path.disabled?this.path.disabled===!0:!1}getPartValue(){return this.partProp&&this.isDisabled()?`${this.partProp} ${s.BREADCRUMBS_DISABLED}`:this.partProp?this.partProp:`${s.BREADCRUMBS_ITEM} ${this.isDisabled()?s.BREADCRUMBS_DISABLED:""}`}renderIcon(){var e,t;if((e=this.path)!=null&&e.icon)return i`<dx-svg-icon .icon=${this.path.icon} part=${s.BREADCRUMBS_ICON} color="#00000099" data-testid="breadcrumbs-item-icon"/>`;if((t=this.path)!=null&&t.iconName){let r;switch(this.partProp===s.BREADCRUMBS_ITEM_LAST?r=s.BREADCRUMBS_ITEM_LAST_ICON:r=s.BREADCRUMBS_ICON,this.path.iconName){case b.HOME:return i`<icon-home size="16" part=${r}></icon-home>`;case b.INFORMATION:return i`<icon-information size="16" part=${r}></icon-information>`;default:return i``}}return""}render(){var e,t;return i`
      <li part="${this.getPartValue()}" key=${this.key} title=${(e=this.path)==null?void 0:e.title}>
        <a href="#" part="${this.partProp?s.BREADCRUMBS_LINK_LAST:s.BREADCRUMBS_LINK}" tabindex="${this.isDisabled()?"-1":"0"}">
          <div part="${s.BREADCRUMBS_CONTENT}">
            ${this.renderIcon()}
            ${((t=this.path)==null?void 0:t.title)&&i`<span part="${s.BREADCRUMBS_TEXT}" data-testid="breadcrumbs-title">${this.path.title}</span>`}
          </div>
        </a>
      </li>
    `}};u([m({type:Object})],d.prototype,"path",2);u([m({type:String})],d.prototype,"partProp",2);u([m({type:String})],d.prototype,"key",2);d=u([_("dx-breadcrumbs-item")],d);var P=Object.defineProperty,I=Object.getOwnPropertyDescriptor,h=(e,t,r,o)=>{for(var a=o>1?void 0:o?I(t,r):t,n=e.length-1,p;n>=0;n--)(p=e[n])&&(a=(o?p(t,r,a):p(a))||a);return o&&a&&P(t,r,a),a};let c=class extends B{constructor(){super(...arguments),this.paths=[],this.exportParts=Object.values(s).join(","),this.isLtr=S()}render(){var t;return i`
      <nav part="${s.BREADCRUMBS_CONTAINER}">
        <ul part="${s.BREADCRUMBS_LIST}" role="navigation">
        ${(t=this.paths)==null?void 0:t.map((r,o)=>i`
              ${o<this.paths.length-1?i`<dx-breadcrumbs-item
                        @click="${a=>{this.handleBreadcrumbClick&&!r.disabled&&this.handleBreadcrumbClick(a,r)}}"
                        .path="${r}"
                        key="breadcrumb-${o}"
                        exportparts="${this.exportParts}"
                        data-testid="breadcrumbs-item"
                      >
                      </dx-breadcrumbs-item>
                      <li part="${s.BREADCRUMBS_SEPARATOR}" aria-hidden="true">
                        <dx-svg-icon .icon=${this.isLtr?i`<icon-chevron-right size="16"></icon-chevron-right>`:i`<icon-chevron-left size="16"></icon-chevron-left>`} ?useCurrentColor=${!0}></dx-svg-icon>
                      </li>`:i`<dx-breadcrumbs-item
                        .path="${r}"
                        key="breadcrumb-${o}"
                        exportparts="${this.exportParts}"
                        .partProp="${s.BREADCRUMBS_ITEM_LAST}"
                        data-testid="breadcrumbs-item"
                        aria-current="page"
                      />`}
            `)}
        </ul>
      </nav>
    `}};c.shadowRootOptions={...B.shadowRootOptions,delegatesFocus:!0};h([m({type:Array})],c.prototype,"paths",2);h([m({type:Function})],c.prototype,"handleBreadcrumbClick",2);h([E()],c.prototype,"exportParts",2);h([E()],c.prototype,"isLtr",2);c=h([_("dx-breadcrumbs")],c);const K={title:"Navigation/dx-breadcrumbs",component:"dx-breadcrumbs",tags:["autodocs"],argTypes:{paths:{control:"object",description:"Breadcrumb paths",defaultValue:[{name:"Search",icon:"search",disabled:!1},{name:"Content",icon:"content",disabled:!1},{name:"Elements",icon:"elements",disabled:!1}]}},args:{paths:[{name:"Search",icon:"search",disabled:!1},{name:"Content",icon:"content",disabled:!1},{name:"Elements",icon:"elements",disabled:!1}]},parameters:{docs:{description:{component:"Breadcrumbs component with example paths: Search, Content, Elements."}}}},l={render:e=>i`
      <dx-breadcrumbs .paths=${e.paths}></dx-breadcrumbs>
    `,name:"DxBreadcrumbs"};var $,x,D;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <dx-breadcrumbs .paths=\${args.paths}></dx-breadcrumbs>
    \`;
  },
  name: 'DxBreadcrumbs'
}`,...(D=(x=l.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const G=["DxBreadcrumbs"];export{l as DxBreadcrumbs,G as __namedExportsOrder,K as default};
