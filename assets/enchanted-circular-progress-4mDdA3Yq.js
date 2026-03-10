import{c as k,E as y,n as s,ag as n}from"./tags-xkLHt5Ez.js";import{i as f,x as l}from"./iframe-C32rrkgB.js";import{x as r}from"./cssClassEnums-WDBe4U61.js";var $=Object.defineProperty,a=(c,e,d,u)=>{for(var i=void 0,o=c.length-1,p;o>=0;o--)(p=c[o])&&(i=p(e,d,i)||i);return i&&$(e,d,i),i};const m=k("enchanted-web-components:components:atomic-component:enchanted-circular-progress.ts"),h=class h extends y{constructor(){super(...arguments),this.size=40,this.strokewidth=3.6,this.trackcolor="#D6D6D6",this.progresscolor="#0550DC",this.disableShrink=!1,this.label="",this.showLabel=!1}get radius(){return(this.size-this.strokewidth)/2}get viewBox(){return`0 0 ${this.size} ${this.size}`}get center(){return this.size/2}get circumference(){return 2*Math.PI*this.radius}get animationStyles(){const e=this.circumference;return`
      --stroke-dasharray-start: ${e*.01}px, ${e}px;
      --stroke-dasharray-mid: ${e*.5}px, ${e}px;
      --stroke-dasharray-end: ${e*.5}px, ${e}px;
      --stroke-dashoffset-mid: ${e*-.075}px;
      --stroke-dashoffset-end: ${e*-.625}px;
      --stroke-dasharray-shrink: ${e*.4}px, ${e}px;
    `}render(){const e=this.disableShrink?r.CIRCLE_DISABLE_SHRINK:r.CIRCLE;return l`
      <div part=${r.ROOT} style="${this.animationStyles}">
        <div part=${r.SPINNER} style="width: ${this.size}px; height: ${this.size}px;">
          <svg
            part=${r.SVG}
            viewBox="${this.viewBox}"
            role="progressbar"
            aria-label="${this.showLabel?this.label:"Loading"}"
          >
            <!-- Track circle (background) -->
            <circle
              part=${r.TRACK}
              cx="${this.center}"
              cy="${this.center}"
              r="${this.radius}"
              fill="none"
              stroke="${this.trackcolor}"
              stroke-width="${this.strokewidth}"
            />
            <!-- Progress circle (animated) -->
            <circle
              part="${e}"
              cx="${this.center}"
              cy="${this.center}"
              r="${this.radius}"
              fill="none"
              stroke="${this.progresscolor}"
              stroke-width="${this.strokewidth}"
              stroke-linecap="round"
            />
          </svg>
        </div>
        ${this.showLabel?l`<span part=${r.LABEL}>${this.label}</span>`:""}
      </div>
    `}};h.styles=f`
    @keyframes enchanted-circular-rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes enchanted-circular-dash {
      0% {
        stroke-dasharray: var(--stroke-dasharray-start);
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: var(--stroke-dasharray-mid);
        stroke-dashoffset: var(--stroke-dashoffset-mid);
      }
      100% {
        stroke-dasharray: var(--stroke-dasharray-end);
        stroke-dashoffset: var(--stroke-dashoffset-end);
      }
    }

    @keyframes enchanted-label-pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: var(--enchanted-circular-progress-pulse-opacity-min, 0.5);
      }
    }
  `;let t=h;a([s({type:Number})],t.prototype,"size");a([s({type:Number})],t.prototype,"strokewidth");a([s({type:String})],t.prototype,"trackcolor");a([s({type:String})],t.prototype,"progresscolor");a([s({type:Boolean,attribute:"disable-shrink"})],t.prototype,"disableShrink");a([s({type:String})],t.prototype,"label");a([s({type:Boolean,attribute:"show-label"})],t.prototype,"showLabel");customElements.get(n)?m("Component (%s) is currently registered and not possible to registrate again.",n):customElements.define(n,t);
