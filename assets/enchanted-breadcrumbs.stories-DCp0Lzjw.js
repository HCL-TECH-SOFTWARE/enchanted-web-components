import{c as N,m as b,E as A,o as E,u as n,g as o,n as m,p as l,q as R,r as f}from"./tags-Dua8CojJ.js";import{r as I}from"./state-fRMCsTN1.js";import"./enchanted-svg-icon-BFXDvOnm.js";import{B as e}from"./cssClassEnums-mKa0OyBd.js";import{x as v}from"./iframe-DNG6NGwD.js";import{t as y}from"./index-CuTRIAwF.js";import{c as U,I as O,B as P}from"./tags-BViZhp05.js";import"./index-BPZws_1f.js";import{i as L}from"./localization-Pwna_gtP.js";import"./index-vUzmpDF-.js";import"./index-BBUPjF_O.js";import"./preload-helper-C1FmrZbK.js";var _=(s=>(s.HOME="home",s.INFORMATION="information",s))(_||{}),M={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M16.6123,2.2138a1.01,1.01,0,0,0-1.2427,0L1,13.4194l1.2427,1.5717L4,13.6209V26a2.0041,2.0041,0,0,0,2,2H26a2.0037,2.0037,0,0,0,2-2V13.63L29.7573,15,31,13.4282ZM18,26H14V18h4Zm2,0V18a2.0023,2.0023,0,0,0-2-2H14a2.002,2.002,0,0,0-2,2v8H6V12.0615l10-7.79,10,7.8005V26Z"}}],name:"home",size:32};const S=`${O}icon-home`;class x extends P{render(){return v`${y({...M,attrs:{...M.attrs,preserveAspectRatio:"xMidYMid"}})}`}}U&&!customElements.get(S)&&customElements.define(S,x);var H=Object.defineProperty,C=(s,a,t,i)=>{for(var r=void 0,c=s.length-1,d;c>=0;c--)(d=s[c])&&(r=d(a,t,r)||r);return r&&H(a,t,r),r};const k=N("enchanted-web-components:components:atomic-component:enchanted-breadcrumbs-item.ts");class $ extends A{constructor(){super(...arguments),this.key="",this.isDisabled=()=>this.path&&this.path.disabled?this.path.disabled===!0:!1}getPartValue(){return this.partProp&&this.isDisabled()?`${this.partProp} ${e.BREADCRUMBS_DISABLED}`:this.partProp?this.partProp:`${e.BREADCRUMBS_ITEM} ${this.isDisabled()?e.BREADCRUMBS_DISABLED:""}`}renderIcon(){var a,t;if((a=this.path)!=null&&a.icon)return n`<${E} .icon=${this.path.icon} part=${e.BREADCRUMBS_ICON} color="#00000099" data-testid="breadcrumbs-item-icon"></${E}>`;if((t=this.path)!=null&&t.iconName){let i;switch(this.partProp===e.BREADCRUMBS_ITEM_LAST?i=e.BREADCRUMBS_ITEM_LAST_ICON:i=e.BREADCRUMBS_ICON,this.path.iconName){case _.HOME:return n`<${o("icon-home")} size="16" part=${i}></${o("icon-home")}>`;case _.INFORMATION:return n`<${o("icon-information")} size="16" part=${i}></${o("icon-information")}>`;default:return n``}}return""}render(){var a,t;return n`
      <div part="${this.getPartValue()}" key=${this.key} title=${(a=this.path)==null?void 0:a.title}>
        <a href="#" part="${this.partProp?e.BREADCRUMBS_LINK_LAST:e.BREADCRUMBS_LINK}" tabindex="${this.isDisabled()?"-1":"0"}">
          <div part="${e.BREADCRUMBS_CONTENT}">
            ${this.renderIcon()}
            ${((t=this.path)==null?void 0:t.title)&&n`<span part="${e.BREADCRUMBS_TEXT}" data-testid="breadcrumbs-title">${this.path.title}</span>`}
          </div>
        </a>
      </div>
    `}}C([m({type:Object})],$.prototype,"path");C([m({type:String})],$.prototype,"partProp");C([m({type:String})],$.prototype,"key");customElements.get(b)?k("Component (%s) is currently registered and not possible to registrate again.",b):customElements.define(b,$);var w=Object.defineProperty,B=(s,a,t,i)=>{for(var r=void 0,c=s.length-1,d;c>=0;c--)(d=s[c])&&(r=d(a,t,r)||r);return r&&w(a,t,r),r};const V=N("enchanted-web-components:components:atomic-component:enchanted-breadcrumbs.ts");var p;let h=(p=class extends A{constructor(){super(...arguments),this.paths=[],this.exportParts=Object.values(e).join(","),this.isLtr=L()}render(){var a;return n`
      <nav
        part="${e.BREADCRUMBS_CONTAINER}"
        role="presentation"
      >
        <div role="group">
          <ul part="${e.BREADCRUMBS_LIST}" role="presentation">
          ${(a=this.paths)==null?void 0:a.map((t,i)=>n`
                ${i<this.paths.length-1?n`
                      <li part="${e.BREADCRUMBS_ITEM_LIST}" key="breadcrumb-${i}">
                        <${l}
                          @click="${r=>{this.handleBreadcrumbClick&&!t.disabled&&this.handleBreadcrumbClick(r,t)}}"
                          .path="${t}"
                          key="breadcrumb-${i}"
                          exportparts="${this.exportParts}"
                          data-testid="breadcrumbs-item"
                        >
                        </${l}>
                      </li>
                        <li part="${e.BREADCRUMBS_SEPARATOR}" aria-hidden="true">
                          <${E} .icon=${this.isLtr?n`<${o("icon-chevron-right")} size="16"></${o("icon-chevron-right")}>`:n`<${o("icon-chevron-left")} size="16"></${o("icon-chevron-left")}>`} ?useCurrentColor=${!0}></${E}>
                        </li>`:n`
                      <li part="${e.BREADCRUMBS_ITEM_LIST}" key="breadcrumb-${i}">
                        <${l}
                          .path="${t}"
                          key="breadcrumb-${i}"
                          exportparts="${this.exportParts}"
                          partProp="${e.BREADCRUMBS_ITEM_LAST}"
                          data-testid="breadcrumbs-item"
                          aria-current="page"
                        ></${l}>
                      </li>`}
              `)}
          </ul>
        </div>
      </nav>
    `}},p.shadowRootOptions={...A.shadowRootOptions,delegatesFocus:!0},p);B([m({type:Array})],h.prototype,"paths");B([m({type:Function})],h.prototype,"handleBreadcrumbClick");B([I()],h.prototype,"exportParts");B([I()],h.prototype,"isLtr");customElements.get(R)?V("Component (%s) is currently registered and not possible to registrate again.",R):customElements.define(R,h);const ee={title:"Navigation/enchanted-breadcrumbs",component:"enchanted-breadcrumbs",tags:["autodocs"],argTypes:{paths:{control:"object",description:"Breadcrumb paths",defaultValue:[{name:"Search",icon:"search",disabled:!1},{name:"Content",icon:"content",disabled:!1},{name:"Elements",icon:"elements",disabled:!1}]}},args:{paths:[{name:"Search",icon:"search",disabled:!1},{name:"Content",icon:"content",disabled:!1},{name:"Elements",icon:"elements",disabled:!1}]},parameters:{docs:{description:{component:"Breadcrumbs component with example paths: Search, Content, Elements."}}}},u={render:s=>n`
      <${f} .paths=${s.paths}></${f}>
    `,name:"EnchantedBreadcrumbs"};var D,T,g;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <\${ENCHANTED_BREADCRUMBS_TAG} .paths=\${args.paths}></\${ENCHANTED_BREADCRUMBS_TAG}>
    \`;
  },
  name: 'EnchantedBreadcrumbs'
}`,...(g=(T=u.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};const te=["EnchantedBreadcrumbs"];export{u as EnchantedBreadcrumbs,te as __namedExportsOrder,ee as default};
