import{n as o,t as u,D as d,L as I}from"./dx-ac-base-element-BRVmdAbS.js";import{E as C,x as p}from"./iframe-DgNdRKpa.js";import{C as a}from"./cssClassEnums-flPS6Iko.js";import{g as _}from"./localization-8Qc5IxgI.js";var f=Object.defineProperty,m=Object.getOwnPropertyDescriptor,r=(s,i,c,n)=>{for(var e=n>1?void 0:n?m(i,c):i,l=s.length-1,h;l>=0;l--)(h=s[l])&&(e=(n?h(i,c,e):h(e))||e);return n&&e&&f(i,c,e),e};let t=class extends d{constructor(){super(...arguments),this.name="",this.count=0,this.showChipCount=!1,this.showAvatar=!1,this.clearIcon=!1,this.disabled=!1}isLocaleRTL(){return _()===I.RTL}render(){const s=this.isLocaleRTL()?a.CHIP_COUNT_RTL:a.CHIP_COUNT;return p`
      <div part=${this.disabled?`${a.CHIP_DIV} ${a.CHIP_DIV_DISABLED}`:a.CHIP_DIV} tabindex=${this.disabled?"-1":"0"}>
        ${this.showAvatar?p`<dx-avatar variant="avatar-icon" ?disabled=${this.disabled}></dx-avatar>`:C}
        <span part=${a.CHIP_NAME}>${this.name}</span>
        ${this.showChipCount?p`<span part=${s}>${this.count}</span>`:C}
        ${this.clearIcon?p`<slot name="clear-icon"></slot>`:C}
      </div>
    `}};r([o({type:String})],t.prototype,"name",2);r([o({type:Number})],t.prototype,"count",2);r([o({type:Boolean})],t.prototype,"showChipCount",2);r([o({type:Boolean})],t.prototype,"showAvatar",2);r([o({type:Boolean})],t.prototype,"clearIcon",2);r([o({type:Boolean})],t.prototype,"disabled",2);t=r([u("dx-chip")],t);
