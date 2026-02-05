import{n as i,E as d,t as y}from"./enchanted-ac-base-element-CYtj5YlD.js";import{i as k,x as l}from"./iframe-I2cpem8U.js";import{x as a}from"./cssClassEnums-WDBe4U61.js";var $=Object.defineProperty,f=Object.getOwnPropertyDescriptor,t=(r,o,n,h)=>{for(var s=h>1?void 0:h?f(o,n):o,c=r.length-1,p;c>=0;c--)(p=r[c])&&(s=(h?p(o,n,s):p(s))||s);return h&&s&&$(o,n,s),s};let e=class extends d{constructor(){super(...arguments),this.size=40,this.strokewidth=3.6,this.trackcolor="#D6D6D6",this.progresscolor="#0550DC",this.disableShrink=!1,this.label="",this.showLabel=!1}get radius(){return(this.size-this.strokewidth)/2}get viewBox(){return`0 0 ${this.size} ${this.size}`}get center(){return this.size/2}get circumference(){return 2*Math.PI*this.radius}get animationStyles(){const r=this.circumference;return`
      --stroke-dasharray-start: ${r*.01}px, ${r}px;
      --stroke-dasharray-mid: ${r*.5}px, ${r}px;
      --stroke-dasharray-end: ${r*.5}px, ${r}px;
      --stroke-dashoffset-mid: ${r*-.075}px;
      --stroke-dashoffset-end: ${r*-.625}px;
      --stroke-dasharray-shrink: ${r*.4}px, ${r}px;
    `}render(){const r=this.disableShrink?a.CIRCLE_DISABLE_SHRINK:a.CIRCLE;return l`
      <div part=${a.ROOT} style="${this.animationStyles}">
        <div part=${a.SPINNER} style="width: ${this.size}px; height: ${this.size}px;">
          <svg
            part=${a.SVG}
            viewBox="${this.viewBox}"
            role="progressbar"
            aria-label="${this.showLabel?this.label:"Loading"}"
          >
            <!-- Track circle (background) -->
            <circle
              part=${a.TRACK}
              cx="${this.center}"
              cy="${this.center}"
              r="${this.radius}"
              fill="none"
              stroke="${this.trackcolor}"
              stroke-width="${this.strokewidth}"
            />
            <!-- Progress circle (animated) -->
            <circle
              part="${r}"
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
        ${this.showLabel?l`<span part=${a.LABEL}>${this.label}</span>`:""}
      </div>
    `}};e.styles=k`
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
  `;t([i({type:Number})],e.prototype,"size",2);t([i({type:Number})],e.prototype,"strokewidth",2);t([i({type:String})],e.prototype,"trackcolor",2);t([i({type:String})],e.prototype,"progresscolor",2);t([i({type:Boolean,attribute:"disable-shrink"})],e.prototype,"disableShrink",2);t([i({type:String})],e.prototype,"label",2);t([i({type:Boolean,attribute:"show-label"})],e.prototype,"showLabel",2);e=t([y("enchanted-circular-progress")],e);
