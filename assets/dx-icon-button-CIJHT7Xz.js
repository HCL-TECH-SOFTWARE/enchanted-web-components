import{D as d,n as r,t as u}from"./dx-ac-base-element-CMZo8k64.js";import{x as h}from"./iframe-BabVupQu.js";import"./dx-button-BmdWVcw5.js";import{I as c}from"./cssClassEnums-ChRP0d8n.js";import{I as f}from"./exportParts-BXxV9uDV.js";var m=Object.defineProperty,b=Object.getOwnPropertyDescriptor,e=(i,s,a,n)=>{for(var o=n>1?void 0:n?b(s,a):s,p=i.length-1,l;p>=0;p--)(l=i[p])&&(o=(n?l(s,a,o):l(o))||o);return n&&o&&m(s,a,o),o};let t=class extends d{constructor(){super(...arguments),this.size=c.SMALL,this.withPadding=!1,this.imgurl="",this.disabled=!1,this.inverseColor=!1,this.ariaLabel=""}_focusButton(){const i=this.renderRoot.querySelector("dx-button");i==null||i._focusButton()}render(){return h`
      <dx-button 
        outlined="false"
        data-testid="dx-icon-button"
        ?inverseColor=${this.inverseColor}
        imgurl="${this.imgurl}"
        size="${this.size}"
        ?withPadding=${this.withPadding}
        exportparts=${f}
        .icon=${this.icon}
        ?disabled=${this.disabled}
        ariaLabel=${this.ariaLabel}
      >
      </dx-button>
    `}};t.shadowRootOptions={...d.shadowRootOptions,delegatesFocus:!0};e([r({type:String})],t.prototype,"size",2);e([r({type:Boolean})],t.prototype,"withPadding",2);e([r({type:String})],t.prototype,"imgurl",2);e([r()],t.prototype,"icon",2);e([r({type:Boolean,reflect:!0})],t.prototype,"disabled",2);e([r({type:Boolean})],t.prototype,"inverseColor",2);e([r({type:String})],t.prototype,"ariaLabel",2);t=e([u("dx-icon-button")],t);
