import{D as d,n as i,t as h}from"./dx-ac-base-element-Ba1nuzGa.js";import{x as u}from"./iframe-g_dBLWCH.js";import"./dx-button-rc8nG4sK.js";import{I as m}from"./cssClassEnums-DKCjOuJT.js";import{I as b}from"./exportParts-pu2Pj9Yh.js";var c=Object.defineProperty,f=Object.getOwnPropertyDescriptor,e=(l,r,a,s)=>{for(var o=s>1?void 0:s?f(r,a):r,n=l.length-1,p;n>=0;n--)(p=l[n])&&(o=(s?p(r,a,o):p(o))||o);return s&&o&&c(r,a,o),o};let t=class extends d{constructor(){super(...arguments),this.size=m.SMALL,this.withPadding=!1,this.imgurl="",this.disabled=!1,this.inverseColor=!1,this.ariaLabel=""}render(){return u`
      <dx-button 
        outlined="false"
        data-testid="dx-icon-button"
        ?inverseColor=${this.inverseColor}
        imgurl="${this.imgurl}"
        size="${this.size}"
        ?withPadding=${this.withPadding}
        exportparts=${b}
        .icon=${this.icon}
        ?disabled=${this.disabled}
        ariaLabel=${this.ariaLabel}
      >
      </dx-button>
    `}};t.shadowRootOptions={...d.shadowRootOptions,delegatesFocus:!0};e([i({type:String})],t.prototype,"size",2);e([i({type:Boolean})],t.prototype,"withPadding",2);e([i({type:String})],t.prototype,"imgurl",2);e([i()],t.prototype,"icon",2);e([i({type:Boolean,reflect:!0})],t.prototype,"disabled",2);e([i({type:Boolean})],t.prototype,"inverseColor",2);e([i({type:String})],t.prototype,"ariaLabel",2);t=e([h("dx-icon-button")],t);
