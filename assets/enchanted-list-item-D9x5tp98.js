import{x as m}from"./iframe-DNG6NGwD.js";import{c as u,am as c,E,n as a,a1 as p}from"./tags-Dua8CojJ.js";import{L as f,l as i}from"./cssClassEnums-mKa0OyBd.js";var T=Object.defineProperty,g=(t,r,n,h)=>{for(var e=void 0,s=t.length-1,o;s>=0;s--)(o=t[s])&&(e=o(r,n,e)||e);return e&&T(r,n,e),e};const S=u("enchanted-web-components:components:atomic-component:enchanted-list.ts");class _ extends E{constructor(){super(...arguments),this.role=""}render(){return m`
      <ul
        tabindex="-1"
        part=${f.UNORDERED_LIST}
        exportpart="unordered-list"
        ${this.role&&`role="${this.role}"`}
      >
        <slot/>
      </ul>
    `}}g([a({type:String})],_.prototype,"role");customElements.get(c)?S("Component (%s) is currently registered and not possible to registrate again.",c):customElements.define(c,_);var b=Object.defineProperty,d=(t,r,n,h)=>{for(var e=void 0,s=t.length-1,o;s>=0;s--)(o=t[s])&&(e=o(r,n,e)||e);return e&&b(r,n,e),e};const y=u("enchanted-web-components:components:atomic-component:enchanted-list-item.ts");class l extends E{constructor(){super(...arguments),this.key="",this.isSelected=!1,this.role=""}partAttributeDecider(r){return this.role==="menuitem"?i.MENU_ITEM:r?i.LIST_ITEM_SELECTED:i.LIST_ITEM}render(){return m`
      <li
        data-testid="enchanted-list-item-list"
        part="${this.partAttributeDecider(this.isSelected)}"
        key="${this.key}"
        tabindex="0"
        ${this.role&&`role="${this.role}"`}
        exportparts="${Object.values(i).join(",")}"
      >
        <slot></slot>
      </li>`}}d([a({type:String})],l.prototype,"key");d([a({type:Boolean})],l.prototype,"isSelected");d([a({type:String})],l.prototype,"role");customElements.get(p)?y("Component (%s) is currently registered and not possible to registrate again.",p):customElements.define(p,l);
