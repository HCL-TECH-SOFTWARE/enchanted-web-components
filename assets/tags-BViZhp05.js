import{r as h,i as y,a as v}from"./iframe-DNG6NGwD.js";import{n as p,c as m}from"./tags-Dua8CojJ.js";const f=32,_="rgb(5, 80, 220)";var d=function(t,e,i,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(o=(s<3?r(o):s>3?r(e,i,o):r(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o};class a extends v{firstUpdated(e){super.firstUpdated(e),this.size!==void 0&&this._applySize(),this.color!==void 0&&this._applyColor()}updated(e){super.updated(e),e.has("size")&&this._applySize(),e.has("color")&&this._applyColor()}_applySize(){this.size!=null&&!isNaN(this.size)&&this.size>0?this.style.setProperty("--_icon-instance-size",`${this.size}px`):this.style.removeProperty("--_icon-instance-size")}_applyColor(){this.color&&this.color.trim()!==""?this.style.setProperty("--_icon-instance-color",this.color):this.style.removeProperty("--_icon-instance-color")}}a.styles=y`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--_icon-instance-color, var(--icon-theme-color, ${h(_)}));
    }

    svg {
      width: var(--_icon-instance-size, var(--icon-theme-size, ${f}px));
      height: var(--_icon-instance-size, var(--icon-theme-size, ${f}px));
      display: block;
    }

    svg path:not([fill]),
    svg rect:not([fill]) 
    {
      fill: currentColor;
    }
  `;d([p({type:Number,reflect:!0})],a.prototype,"size",void 0);d([p({type:String,reflect:!0})],a.prototype,"color",void 0);const b=t=>t==="viewBox"||t==="xmlns"?t:t.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase(),g=(t,e)=>{for(const i in e)if(Object.hasOwnProperty.call(e,i)){const n=e[i];n!==void 0&&t.setAttribute(i,String(n))}},O=(t,e)=>{const i=document.createElementNS(e.xmlns,"svg");return g(i,e),t.forEach(n=>{const s=document.createElementNS(e.xmlns,n.elem);if(n.attrs){for(const o in n.attrs)if(Object.hasOwnProperty.call(n.attrs,o)){const r=n.attrs[o];r!==void 0&&s.setAttribute(b(o),String(r))}}i.appendChild(s)}),i},C=typeof globalThis<"u"&&"customElements"in globalThis,u=m("enchanted-icons-web-component:utils:tags.ts");let l="";try{l=""}catch(t){u("Error accessing environment variable for icon prefix:",t),l=""}u(`Icon prefix is '${l}'`);export{a as B,l as I,O as a,C as c};
