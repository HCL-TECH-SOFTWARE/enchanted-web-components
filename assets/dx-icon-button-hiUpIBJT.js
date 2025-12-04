import{D as d,n as r,t as h}from"./dx-ac-base-element-BRVmdAbS.js";import{x as u}from"./iframe-DgNdRKpa.js";import"./dx-button-q5wlWak9.js";import{I as c}from"./cssClassEnums-flPS6Iko.js";import{I as f}from"./exportParts-DIz_AD5x.js";var b=Object.defineProperty,m=Object.getOwnPropertyDescriptor,o=(e,s,n,a)=>{for(var i=a>1?void 0:a?m(s,n):s,l=e.length-1,p;l>=0;l--)(p=e[l])&&(i=(a?p(s,n,i):p(i))||i);return a&&i&&b(s,n,i),i};let t=class extends d{constructor(){super(...arguments),this.size=c.SMALL,this.withPadding=!1,this.imgurl="",this.disabled=!1,this.inverseColor=!1,this.ariaLabel=""}_handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_focusButton(){const e=this.renderRoot.querySelector("dx-button");e==null||e._focusButton()}render(){return u`
      <dx-button
        outlined="false"
        data-testid="dx-icon-button"
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
        </dx-button>
      `}};t.shadowRootOptions={...d.shadowRootOptions,delegatesFocus:!0};o([r({type:String})],t.prototype,"size",2);o([r({type:Boolean})],t.prototype,"withPadding",2);o([r({type:String})],t.prototype,"imgurl",2);o([r()],t.prototype,"icon",2);o([r({type:Boolean,reflect:!0})],t.prototype,"disabled",2);o([r({type:Boolean})],t.prototype,"inverseColor",2);o([r({type:String})],t.prototype,"ariaLabel",2);t=o([h("dx-icon-button")],t);
