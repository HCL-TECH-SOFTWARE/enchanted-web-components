import{x as g}from"./iframe-DNG6NGwD.js";import{c as m,ap as c,E as h,L as T,n as a}from"./tags-Dua8CojJ.js";import{g as l}from"./localization-Pwna_gtP.js";import{g as u,E as f,h as i,q as E}from"./cssClassEnums-mKa0OyBd.js";var b=Object.defineProperty,o=(s,r,n,_)=>{for(var e=void 0,d=s.length-1,p;d>=0;d--)(p=s[d])&&(e=p(r,n,e)||e);return e&&b(r,n,e),e};const D=m("enchanted-web-components:components:atomic-component:enchanted-badge.ts");class t extends h{constructor(){super(...arguments),this.color=u.PRIMARY,this.border=f.DEFAULT,this.badge=i.TEXT,this.text=""}render(){const r=l()===T.LTR,n=this.badge===i.DOT?E.BADGE_DOT:r?E.BADGE_TEXT:E.BADGE_TEXT_RTL;return g`
      <div
        part="${n}"
        data-testid="enchanted-badge"
      >
        ${this.badge===i.TEXT?this.text:""}
      </div>
    `}}o([a({reflect:!0})],t.prototype,"color");o([a({reflect:!0})],t.prototype,"border");o([a({reflect:!0})],t.prototype,"badge");o([a()],t.prototype,"text");customElements.get(c)?D("Component (%s) is currently registered and not possible to registrate again.",c):customElements.define(c,t);
