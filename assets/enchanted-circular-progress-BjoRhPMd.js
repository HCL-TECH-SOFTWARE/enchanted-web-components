import{n as a,E as d,t as l}from"./enchanted-ac-base-element-CBHL5x_U.js";import{i as p,x as k}from"./iframe-BY3ui3w0.js";var u=Object.defineProperty,y=Object.getOwnPropertyDescriptor,t=(r,i,c,o)=>{for(var s=o>1?void 0:o?y(i,c):i,n=r.length-1,h;n>=0;n--)(h=r[n])&&(s=(o?h(i,c,s):h(s))||s);return o&&s&&u(i,c,s),s};let e=class extends d{constructor(){super(...arguments),this.size=40,this.strokewidth=3.6,this.trackcolor="#D6D6D6",this.progresscolor="#0550DC",this.disableShrink=!1}get radius(){return(this.size-this.strokewidth)/2}get viewBox(){return`0 0 ${this.size} ${this.size}`}get center(){return this.size/2}get circumference(){return 2*Math.PI*this.radius}get animationStyles(){const r=this.circumference;return`
      --stroke-dasharray-start: ${r*.01}px, ${r}px;
      --stroke-dasharray-mid: ${r*.5}px, ${r}px;
      --stroke-dasharray-end: ${r*.5}px, ${r}px;
      --stroke-dashoffset-mid: ${r*-.075}px;
      --stroke-dashoffset-end: ${r*-.625}px;
      --stroke-dasharray-shrink: ${r*.4}px, ${r}px;
    `}render(){const r=`enchanted-circular-progress-circle${this.disableShrink?" disable-shrink":""}`;return k`
      <div class="enchanted-circular-progress-root" style="width: ${this.size}px; height: ${this.size}px; ${this.animationStyles}">
        <svg
          class="enchanted-circular-progress-svg"
          viewBox="${this.viewBox}"
          role="progressbar"
          aria-label="Loading"
        >
          <!-- Track circle (background) -->
          <circle
            class="enchanted-circular-progress-track"
            cx="${this.center}"
            cy="${this.center}"
            r="${this.radius}"
            fill="none"
            stroke="${this.trackcolor}"
            stroke-width="${this.strokewidth}"
          />
          <!-- Progress circle (animated) -->
          <circle
            class="${r}"
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
    `}};e.styles=p`
    :host {
      display: inline-block;
    }

    .enchanted-circular-progress-root {
      display: inline-block;
      line-height: 1;
    }

    .enchanted-circular-progress-svg {
      display: block;
      animation: enchanted-circular-rotate 1.4s linear infinite;
    }

    .enchanted-circular-progress-track {
      opacity: 1;
    }

    .enchanted-circular-progress-circle {
      stroke-dasharray: var(--stroke-dasharray-start);
      stroke-dashoffset: 0;
      animation: enchanted-circular-dash 1.4s ease-in-out infinite;
    }

    .enchanted-circular-progress-circle.disable-shrink {
      stroke-dasharray: var(--stroke-dasharray-shrink);
      animation: none;
    }

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
  `;t([a({type:Number})],e.prototype,"size",2);t([a({type:Number})],e.prototype,"strokewidth",2);t([a({type:String})],e.prototype,"trackcolor",2);t([a({type:String})],e.prototype,"progresscolor",2);t([a({type:Boolean,attribute:"disable-shrink"})],e.prototype,"disableShrink",2);e=t([l("enchanted-circular-progress")],e);
