import{x as c}from"./iframe-Dsd1MpWQ.js";import{n as a,t as f,D as d}from"./dx-ac-base-element-C9dhstFR.js";import{L as m,j as n}from"./cssClassEnums-v1h5zF5X.js";var S=Object.defineProperty,v=Object.getOwnPropertyDescriptor,h=(s,t,i,r)=>{for(var e=r>1?void 0:r?v(t,i):t,o=s.length-1,l;o>=0;o--)(l=s[o])&&(e=(r?l(t,i,e):l(e))||e);return r&&e&&S(t,i,e),e};let _=class extends d{constructor(){super(...arguments),this.role=""}render(){return c`
      <ul
        tabindex="-1"
        part=${m.UNORDERED_LIST}
        exportpart="unordered-list"
        ${this.role&&`role="${this.role}"`}
      >
        <slot/>
      </ul>
    `}};h([a({type:String})],_.prototype,"role",2);_=h([f("dx-list")],_);var x=Object.defineProperty,D=Object.getOwnPropertyDescriptor,u=(s,t,i,r)=>{for(var e=r>1?void 0:r?D(t,i):t,o=s.length-1,l;o>=0;o--)(l=s[o])&&(e=(r?l(t,i,e):l(e))||e);return r&&e&&x(t,i,e),e};let p=class extends d{constructor(){super(...arguments),this.key="",this.isSelected=!1,this.role=""}partAttributeDecider(s){return this.role==="menuitem"?n.MENU_ITEM:s?n.LIST_ITEM_SELECTED:n.LIST_ITEM}render(){return c`
      <li
        data-testid="dx-list-item-list"
        part="${this.partAttributeDecider(this.isSelected)}"
        key="${this.key}"
        tabindex="0"
        ${this.role&&`role="${this.role}"`}
        exportparts="${Object.values(n).join(",")}"
      >
        <slot></slot>
      </li>`}};u([a({type:String})],p.prototype,"key",2);u([a({type:Boolean})],p.prototype,"isSelected",2);u([a({type:String})],p.prototype,"role",2);p=u([f("dx-list-item")],p);
