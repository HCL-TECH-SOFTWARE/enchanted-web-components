import{x as h}from"./iframe-B8Ykn-0R.js";import{n as a,t as _,E as d}from"./enchanted-ac-base-element-BcyMwwt4.js";import{L as E,j as p}from"./cssClassEnums-D4dgqifY.js";var m=Object.defineProperty,S=Object.getOwnPropertyDescriptor,f=(s,t,i,r)=>{for(var e=r>1?void 0:r?S(t,i):t,o=s.length-1,l;o>=0;o--)(l=s[o])&&(e=(r?l(t,i,e):l(e))||e);return r&&e&&m(t,i,e),e};let u=class extends d{constructor(){super(...arguments),this.role=""}render(){return h`
      <ul
        tabindex="-1"
        part=${E.UNORDERED_LIST}
        exportpart="unordered-list"
        ${this.role&&`role="${this.role}"`}
      >
        <slot/>
      </ul>
    `}};f([a({type:String})],u.prototype,"role",2);u=f([_("enchanted-list")],u);var v=Object.defineProperty,y=Object.getOwnPropertyDescriptor,c=(s,t,i,r)=>{for(var e=r>1?void 0:r?y(t,i):t,o=s.length-1,l;o>=0;o--)(l=s[o])&&(e=(r?l(t,i,e):l(e))||e);return r&&e&&v(t,i,e),e};let n=class extends d{constructor(){super(...arguments),this.key="",this.isSelected=!1,this.role=""}partAttributeDecider(s){return this.role==="menuitem"?p.MENU_ITEM:s?p.LIST_ITEM_SELECTED:p.LIST_ITEM}render(){return h`
      <li
        data-testid="enchanted-list-item-list"
        part="${this.partAttributeDecider(this.isSelected)}"
        key="${this.key}"
        tabindex="0"
        ${this.role&&`role="${this.role}"`}
        exportparts="${Object.values(p).join(",")}"
      >
        <slot></slot>
      </li>`}};c([a({type:String})],n.prototype,"key",2);c([a({type:Boolean})],n.prototype,"isSelected",2);c([a({type:String})],n.prototype,"role",2);n=c([_("enchanted-list-item")],n);
