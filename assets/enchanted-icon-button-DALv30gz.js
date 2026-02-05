import{E as h,n as s,t as c}from"./enchanted-ac-base-element-CYtj5YlD.js";import{x as u}from"./iframe-I2cpem8U.js";import"./enchanted-button-bGeso_Ea.js";import{I as b,N as y}from"./cssClassEnums-WDBe4U61.js";import{I as f}from"./exportParts-B-kKZm-x.js";import{K as p}from"./keyboardEventKeys-BnoN8uA3.js";var m=Object.defineProperty,_=Object.getOwnPropertyDescriptor,o=(e,r,n,a)=>{for(var i=a>1?void 0:a?_(r,n):r,l=e.length-1,d;l>=0;l--)(d=e[l])&&(i=(a?d(r,n,i):d(i))||i);return a&&i&&m(r,n,i),i};let t=class extends h{constructor(){super(...arguments),this.size=b.SMALL,this.withPadding=!1,this.imgurl="",this.disabled=!1,this.inverseColor=!1,this.ariaLabel="Icon button"}_handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_focusButton(){const e=this.renderRoot.querySelector("enchanted-button");e==null||e._focusButton()}render(){return u`
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
        aria-label=${this.ariaLabel} // Ensure aria-label is passed correctly
        role=${y.BUTTON}
        aria-disabled="${this.disabled?"true":"false"}" // Communicate disabled state
        @click=${this._handleClick}
        @keydown=${this._handleKeyDown} // Add keyboard event listener
        >
        </enchanted-button>
      `}_handleKeyDown(e){(e.key===p.ENTER||e.key===p.SPACE)&&!this.disabled&&(e.preventDefault(),this._handleClick(e))}};t.shadowRootOptions={...h.shadowRootOptions,delegatesFocus:!0};o([s({type:String})],t.prototype,"size",2);o([s({type:Boolean})],t.prototype,"withPadding",2);o([s({type:String})],t.prototype,"imgurl",2);o([s()],t.prototype,"icon",2);o([s({type:Boolean,reflect:!0})],t.prototype,"disabled",2);o([s({type:Boolean})],t.prototype,"inverseColor",2);o([s({type:String})],t.prototype,"ariaLabel",2);t=o([c("enchanted-icon-button")],t);
