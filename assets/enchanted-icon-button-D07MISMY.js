import{E as d,n as r,t as h}from"./enchanted-ac-base-element-DiERHT3A.js";import{x as c}from"./iframe-DHDpWj8R.js";import"./enchanted-button-CLWRKz3u.js";import{I as u}from"./cssClassEnums-D4dgqifY.js";import{I as f}from"./exportParts-lw5uKHST.js";var b=Object.defineProperty,m=Object.getOwnPropertyDescriptor,o=(e,s,a,n)=>{for(var i=n>1?void 0:n?m(s,a):s,l=e.length-1,p;l>=0;l--)(p=e[l])&&(i=(n?p(s,a,i):p(i))||i);return n&&i&&b(s,a,i),i};let t=class extends d{constructor(){super(...arguments),this.size=u.SMALL,this.withPadding=!1,this.imgurl="",this.disabled=!1,this.inverseColor=!1,this.ariaLabel=""}_handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_focusButton(){const e=this.renderRoot.querySelector("enchanted-button");e==null||e._focusButton()}render(){return c`
      <enchanted-button
        outlined="false"
        data-testid="enchanted-icon-button"
        ?inverseColor=${this.inverseColor}
        imgurl="${this.imgurl}"
        size="${this.size}"
        ?withPadding=${this.withPadding}
        exportparts=${f}
        ?disabled=${this.disabled}
        .icon=${this.icon}
        ariaLabel=${this.ariaLabel}
        @click=${this._handleClick}
        >
        </enchanted-button>
      `}};t.shadowRootOptions={...d.shadowRootOptions,delegatesFocus:!0};o([r({type:String})],t.prototype,"size",2);o([r({type:Boolean})],t.prototype,"withPadding",2);o([r({type:String})],t.prototype,"imgurl",2);o([r()],t.prototype,"icon",2);o([r({type:Boolean,reflect:!0})],t.prototype,"disabled",2);o([r({type:Boolean})],t.prototype,"inverseColor",2);o([r({type:String})],t.prototype,"ariaLabel",2);t=o([h("enchanted-icon-button")],t);
