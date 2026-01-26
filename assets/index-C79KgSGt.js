import{r as h,i as u,a as d}from"./iframe-Bl462ZXk.js";import{n as p}from"./enchanted-ac-base-element-D6hCixC-.js";const a=32,y="rgb(5, 80, 220)";var f=function(t,e,i,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(o=(s<3?r(o):s>3?r(e,i,o):r(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o};class c extends d{firstUpdated(e){super.firstUpdated(e),this.size!==void 0&&this._applySize(),this.color!==void 0&&this._applyColor()}updated(e){super.updated(e),e.has("size")&&this._applySize(),e.has("color")&&this._applyColor()}_applySize(){this.size!=null&&!isNaN(this.size)&&this.size>0?this.style.setProperty("--_icon-instance-size",`${this.size}px`):this.style.removeProperty("--_icon-instance-size")}_applyColor(){this.color&&this.color.trim()!==""?this.style.setProperty("--_icon-instance-color",this.color):this.style.removeProperty("--_icon-instance-color")}}c.styles=u`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--_icon-instance-color, var(--icon-theme-color, ${h(y)}));
    }

    svg {
      width: var(--_icon-instance-size, var(--icon-theme-size, ${a}px));
      height: var(--_icon-instance-size, var(--icon-theme-size, ${a}px));
      display: block;
    }

    svg path:not([fill]),
    svg rect:not([fill]) 
    {
      fill: currentColor;
    }
  `;f([p({type:Number,reflect:!0})],c.prototype,"size",void 0);f([p({type:String,reflect:!0})],c.prototype,"color",void 0);const v=t=>t==="viewBox"||t==="xmlns"?t:t.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase(),m=(t,e)=>{for(const i in e)if(Object.hasOwnProperty.call(e,i)){const n=e[i];n!==void 0&&t.setAttribute(i,String(n))}},b=(t,e)=>{const i=document.createElementNS(e.xmlns,"svg");return m(i,e),t.forEach(n=>{const s=document.createElementNS(e.xmlns,n.elem);if(n.attrs){for(const o in n.attrs)if(Object.hasOwnProperty.call(n.attrs,o)){const r=n.attrs[o];r!==void 0&&s.setAttribute(v(o),String(r))}}i.appendChild(s)}),i},g=typeof globalThis<"u"&&"customElements"in globalThis;export{c as B,b as a,g as c};
