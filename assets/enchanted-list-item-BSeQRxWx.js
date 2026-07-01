import{x as u}from"./iframe-DIZdwA76.js";import{c as m,ak as c,E,n as l,$ as p}from"./tags-GuWqQq8Q.js";import{L as _,l as i}from"./cssClassEnums-BAuKGcJP.js";var T=Object.defineProperty,S=(r,t,n,h)=>{for(var e=void 0,s=r.length-1,o;s>=0;s--)(o=r[s])&&(e=o(t,n,e)||e);return e&&T(t,n,e),e};const g=m("enchanted-web-components:components:atomic-component:enchanted-list.ts");class f extends E{constructor(){super(...arguments),this.role=""}render(){return u`
      <ul
        tabindex="-1"
        part=${_.UNORDERED_LIST}
        exportpart="unordered-list"
        ${this.role&&`role="${this.role}"`}
      >
        <slot/>
      </ul>
    `}}S([l({type:String})],f.prototype,"role");customElements.get(c)?g("Component (%s) is currently registered and not possible to registrate again.",c):customElements.define(c,f);var y=Object.defineProperty,d=(r,t,n,h)=>{for(var e=void 0,s=r.length-1,o;s>=0;s--)(o=r[s])&&(e=o(t,n,e)||e);return e&&y(t,n,e),e};const I=m("enchanted-web-components:components:atomic-component:enchanted-list-item.ts");class a extends E{constructor(){super(...arguments),this.key="",this.isSelected=!1,this.role=""}partAttributeDecider(t){return this.role==="menuitem"?i.MENU_ITEM:t?i.LIST_ITEM_SELECTED:i.LIST_ITEM}focusListItem(){const t=this.renderRoot.querySelector("li");if(t instanceof HTMLElement){t.focus();return}this.focus()}render(){return u`
      <li
        data-testid="enchanted-list-item-list"
        part="${this.partAttributeDecider(this.isSelected)}"
        key="${this.key}"
        tabindex="0"
        ${this.role&&`role="${this.role}"`}
        exportparts="${Object.values(i).join(",")}"
      >
        <slot></slot>
      </li>`}}d([l({type:String})],a.prototype,"key");d([l({type:Boolean})],a.prototype,"isSelected");d([l({type:String})],a.prototype,"role");customElements.get(p)?I("Component (%s) is currently registered and not possible to registrate again.",p):customElements.define(p,a);
