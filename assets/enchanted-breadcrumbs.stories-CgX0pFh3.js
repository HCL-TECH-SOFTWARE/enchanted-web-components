import{c as N,ac as $,a as R,Q as E,u as n,g as i,n as h,ad as u,ae as _,af as C}from"./tags-CoVdckeD.js";import{r as I}from"./state-HmA1gIuo.js";import"./enchanted-svg-icon-DTsO5F9G.js";import{B as e}from"./cssClassEnums-B0FxBdGx.js";import{x as v}from"./iframe-q8uLr7wl.js";import{t as y}from"./index-CuTRIAwF.js";import{c as O,I as U,B as P}from"./tags-Dsu22f7O.js";import"./index-Cu-SjR_S.js";import{i as L}from"./localization-BpntbVwP.js";import"./index-uJEfLNnI.js";import"./index-BZC1VVGD.js";var A=(s=>(s.HOME="home",s.INFORMATION="information",s))(A||{}),S={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M16.6123,2.2138a1.01,1.01,0,0,0-1.2427,0L1,13.4194l1.2427,1.5717L4,13.6209V26a2.0041,2.0041,0,0,0,2,2H26a2.0037,2.0037,0,0,0,2-2V13.63L29.7573,15,31,13.4282ZM18,26H14V18h4Zm2,0V18a2.0023,2.0023,0,0,0-2-2H14a2.002,2.002,0,0,0-2,2v8H6V12.0615l10-7.79,10,7.8005V26Z"}}],name:"home",size:32};const M=`${U}icon-home`;class x extends P{render(){return v`${y({...S,attrs:{...S.attrs,preserveAspectRatio:"xMidYMid"}})}`}}O&&!customElements.get(M)&&customElements.define(M,x);var H=Object.defineProperty,f=(s,a,t,o)=>{for(var r=void 0,c=s.length-1,d;c>=0;c--)(d=s[c])&&(r=d(a,t,r)||r);return r&&H(a,t,r),r};const k=N("enchanted-web-components:components:atomic-component:enchanted-breadcrumbs-item.ts");class B extends R{constructor(){super(...arguments),this.key="",this.isDisabled=()=>this.path&&this.path.disabled?this.path.disabled===!0:!1}getPartValue(){return this.partProp&&this.isDisabled()?`${this.partProp} ${e.BREADCRUMBS_DISABLED}`:this.partProp?this.partProp:`${e.BREADCRUMBS_ITEM} ${this.isDisabled()?e.BREADCRUMBS_DISABLED:""}`}renderIcon(){var a,t;if((a=this.path)!=null&&a.icon)return n`<${E} .icon=${this.path.icon} part=${e.BREADCRUMBS_ICON} color="#00000099" data-testid="breadcrumbs-item-icon"></${E}>`;if((t=this.path)!=null&&t.iconName){let o;switch(this.partProp===e.BREADCRUMBS_ITEM_LAST?o=e.BREADCRUMBS_ITEM_LAST_ICON:o=e.BREADCRUMBS_ICON,this.path.iconName){case A.HOME:return n`<${i("icon-home")} size="16" part=${o}></${i("icon-home")}>`;case A.INFORMATION:return n`<${i("icon-information")} size="16" part=${o}></${i("icon-information")}>`;default:return n``}}return""}render(){var a,t;return n`
      <div part="${this.getPartValue()}" key=${this.key} title=${(a=this.path)==null?void 0:a.title}>
        <a href="#" part="${this.partProp?e.BREADCRUMBS_LINK_LAST:e.BREADCRUMBS_LINK}" tabindex="${this.isDisabled()?"-1":"0"}">
          <div part="${e.BREADCRUMBS_CONTENT}">
            ${this.renderIcon()}
            ${((t=this.path)==null?void 0:t.title)&&n`<span part="${e.BREADCRUMBS_TEXT}" data-testid="breadcrumbs-title">${this.path.title}</span>`}
          </div>
        </a>
      </div>
    `}}f([h({type:Object})],B.prototype,"path");f([h({type:String})],B.prototype,"partProp");f([h({type:String})],B.prototype,"key");customElements.get($)?k("Component (%s) is currently registered and not possible to registrate again.",$):customElements.define($,B);var w=Object.defineProperty,b=(s,a,t,o)=>{for(var r=void 0,c=s.length-1,d;c>=0;c--)(d=s[c])&&(r=d(a,t,r)||r);return r&&w(a,t,r),r};const V=N("enchanted-web-components:components:atomic-component:enchanted-breadcrumbs.ts");var p;let l=(p=class extends R{constructor(){super(...arguments),this.paths=[],this.exportParts=Object.values(e).join(","),this.isLtr=L()}render(){var a;return n`
      <nav
        part="${e.BREADCRUMBS_CONTAINER}"
        role="presentation"
      >
        <div role="group">
          <ul part="${e.BREADCRUMBS_LIST}" role="presentation">
          ${(a=this.paths)==null?void 0:a.map((t,o)=>n`
                ${o<this.paths.length-1?n`
                      <li part="${e.BREADCRUMBS_ITEM_LIST}" key="breadcrumb-${o}">
                        <${u}
                          @click="${r=>{this.handleBreadcrumbClick&&!t.disabled&&this.handleBreadcrumbClick(r,t)}}"
                          .path="${t}"
                          key="breadcrumb-${o}"
                          exportparts="${this.exportParts}"
                          data-testid="breadcrumbs-item"
                        >
                        </${u}>
                      </li>
                        <li part="${e.BREADCRUMBS_SEPARATOR}" aria-hidden="true">
                          <${E} .icon=${this.isLtr?n`<${i("icon-chevron-right")} size="16"></${i("icon-chevron-right")}>`:n`<${i("icon-chevron-left")} size="16"></${i("icon-chevron-left")}>`} ?useCurrentColor=${!0}></${E}>
                        </li>`:n`
                      <li part="${e.BREADCRUMBS_ITEM_LIST}" key="breadcrumb-${o}">
                        <${u}
                          .path="${t}"
                          key="breadcrumb-${o}"
                          exportparts="${this.exportParts}"
                          partProp="${e.BREADCRUMBS_ITEM_LAST}"
                          data-testid="breadcrumbs-item"
                          aria-current="page"
                        ></${u}>
                      </li>`}
              `)}
          </ul>
        </div>
      </nav>
    `}},p.shadowRootOptions={...R.shadowRootOptions,delegatesFocus:!0},p);b([h({type:Array})],l.prototype,"paths");b([h({type:Function})],l.prototype,"handleBreadcrumbClick");b([I()],l.prototype,"exportParts");b([I()],l.prototype,"isLtr");customElements.get(_)?V("Component (%s) is currently registered and not possible to registrate again.",_):customElements.define(_,l);const G={title:"Navigation/Enchanted Breadcrumbs",component:"enchanted-breadcrumbs",tags:["a11y-addon"],argTypes:{paths:{control:"object",description:"Breadcrumb paths",defaultValue:[{name:"Search",icon:"search",disabled:!1},{name:"Content",icon:"content",disabled:!1},{name:"Elements",icon:"elements",disabled:!1}]}},args:{paths:[{name:"Search",icon:"search",disabled:!1},{name:"Content",icon:"content",disabled:!1},{name:"Elements",icon:"elements",disabled:!1}]},parameters:{docs:{description:{component:"Breadcrumbs component with example paths: Search, Content, Elements."}}}},m={render:s=>n`
      <${C} .paths=${s.paths}></${C}>
    `,name:"EnchantedBreadcrumbs"};var T,g,D;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <\${ENCHANTED_BREADCRUMBS_TAG} .paths=\${args.paths}></\${ENCHANTED_BREADCRUMBS_TAG}>
    \`;
  },
  name: 'EnchantedBreadcrumbs'
}`,...(D=(g=m.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};const j=["EnchantedBreadcrumbs"],te=Object.freeze(Object.defineProperty({__proto__:null,EnchantedBreadcrumbs:m,__namedExportsOrder:j,default:G},Symbol.toStringTag,{value:"Module"}));export{te as E,m as a};
