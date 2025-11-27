import{n as h,t as n,D as d}from"./dx-ac-base-element-CMZo8k64.js";import{r}from"./state-ByhEXiYs.js";import{x as u}from"./iframe-BabVupQu.js";var y=Object.defineProperty,m=Object.getOwnPropertyDescriptor,e=(l,s,c,o)=>{for(var i=o>1?void 0:o?m(s,c):s,a=l.length-1,p;a>=0;a--)(p=l[a])&&(i=(o?p(s,c,i):p(i))||i);return o&&i&&y(s,c,i),i};let t=class extends d{constructor(){super(...arguments),this.size=100,this.strokewidth=4,this.trailcolor="#D6D6D6",this.valuecolor="#0550DC",this.radius=0,this.circumference=0,this.cx=0,this.cy=0,this.durationToRotate=2,this.height=0,this.width=0}connectedCallback(){super.connectedCallback(),this.height=this.size,this.width=this.size,this.cx=this.size/2,this.cy=this.size/2,this.radius=this.cx/2-this.strokewidth,this.circumference=2*Math.PI*this.radius}disconnectedCallback(){super.disconnectedCallback()}render(){return u`
      <div style="height: ${this.size}px; width: ${this.size}px;">
        <svg style="height: ${this.size}px; width: ${this.size}px; position: relative; animation: rotateCircularProgress 2s linear infinite;">
          <circle
            cx="${this.cx}"
            cy="${this.cy}"
            r="${this.radius}"
            fill="none"
            stroke-width="${this.strokewidth}" 
            stroke="${this.trailcolor}"
          >
          </circle>
          <circle
            cx="${this.cx}"
            cy="${this.cy}"
            r="${this.radius}"
            fill="none"
            stroke-width="${this.strokewidth}" 
            stroke-miterlimit="0"
            stroke-linecap="round"
            stroke="${this.valuecolor}"
            stroke-dasharray="0,${this.circumference}"
            stroke-dashoffset="0"
          >
          <animate
            attributeName="stroke-dasharray"
            values="0;${this.circumference}"
            dur="${this.durationToRotate}s"
            repeatCount="indefinite"
          ></animate>
          </circle>
        </svg>
      </div>
    `}};e([h({type:Number})],t.prototype,"size",2);e([h({type:Number})],t.prototype,"strokewidth",2);e([h({type:String})],t.prototype,"trailcolor",2);e([h({type:String})],t.prototype,"valuecolor",2);e([r()],t.prototype,"radius",2);e([r()],t.prototype,"circumference",2);e([r()],t.prototype,"cx",2);e([r()],t.prototype,"cy",2);e([r()],t.prototype,"durationToRotate",2);e([r()],t.prototype,"height",2);e([r()],t.prototype,"width",2);t=e([n("dx-circular-progress")],t);
