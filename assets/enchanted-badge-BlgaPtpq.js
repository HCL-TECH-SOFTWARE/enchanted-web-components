import{x as h}from"./iframe-I2cpem8U.js";import{n as s,t as T,E as g,L as f}from"./enchanted-ac-base-element-CYtj5YlD.js";import{g as l}from"./localization-D5pUJpuu.js";import{g as m,E as D,h as i,q as E}from"./cssClassEnums-WDBe4U61.js";var _=Object.defineProperty,b=Object.getOwnPropertyDescriptor,a=(o,t,d,n)=>{for(var e=n>1?void 0:n?b(t,d):t,c=o.length-1,p;c>=0;c--)(p=o[c])&&(e=(n?p(t,d,e):p(e))||e);return n&&e&&_(t,d,e),e};let r=class extends g{constructor(){super(...arguments),this.color=m.PRIMARY,this.border=D.DEFAULT,this.badge=i.TEXT,this.text=""}render(){const o=l()===f.LTR,t=this.badge===i.DOT?E.BADGE_DOT:o?E.BADGE_TEXT:E.BADGE_TEXT_RTL;return h`
      <div
        part="${t}"
        data-testid="enchanted-badge"
      >
        ${this.badge===i.TEXT?this.text:""}
      </div>
    `}};a([s({reflect:!0})],r.prototype,"color",2);a([s({reflect:!0})],r.prototype,"border",2);a([s({reflect:!0})],r.prototype,"badge",2);a([s()],r.prototype,"text",2);r=a([T("enchanted-badge")],r);
