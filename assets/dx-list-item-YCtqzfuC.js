import{x as c}from"./iframe-g_dBLWCH.js";import{n as a,t as f,D as m}from"./dx-ac-base-element-Ba1nuzGa.js";import{L as h,m as n}from"./cssClassEnums-DKCjOuJT.js";var S=Object.defineProperty,v=Object.getOwnPropertyDescriptor,d=(s,t,i,r)=>{for(var e=r>1?void 0:r?v(t,i):t,o=s.length-1,l;o>=0;o--)(l=s[o])&&(e=(r?l(t,i,e):l(e))||e);return r&&e&&S(t,i,e),e};let _=class extends m{constructor(){super(...arguments),this.role=""}render(){return c`
      <ul
        tabindex="-1"
        part=${h.UNORDERED_LIST}
        exportpart="unordered-list"
        ${this.role&&`role="${this.role}"`}
      >
        <slot/>
      </ul>
    `}};d([a({type:String})],_.prototype,"role",2);_=d([f("dx-list")],_);var x=Object.defineProperty,D=Object.getOwnPropertyDescriptor,u=(s,t,i,r)=>{for(var e=r>1?void 0:r?D(t,i):t,o=s.length-1,l;o>=0;o--)(l=s[o])&&(e=(r?l(t,i,e):l(e))||e);return r&&e&&x(t,i,e),e};let p=class extends m{constructor(){super(...arguments),this.key="",this.isSelected=!1,this.role=""}partAttributeDecider(s){return this.role==="menuitem"?n.MENU_ITEM:s?n.LIST_ITEM_SELECTED:n.LIST_ITEM}render(){return c`
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
