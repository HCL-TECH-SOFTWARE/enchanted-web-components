import{f as m,u as v,a as p}from"./iframe-g_dBLWCH.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=t=>(e,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:m},O=(t=f,e,o)=>{const{kind:n,metadata:s}=o;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),n==="setter"&&((t=Object.create(t)).wrapped=!0),i.set(o.name,t),n==="accessor"){const{name:a}=o;return{set(c){const l=e.get.call(this);e.set.call(this,c),this.requestUpdate(a,l,t)},init(c){return c!==void 0&&this.C(a,void 0,t,c),c}}}if(n==="setter"){const{name:a}=o;return function(c){const l=this[a];e.call(this,c),this.requestUpdate(a,l,t)}}throw Error("Unsupported decorator location: "+n)};function y(t){return(e,o)=>typeof o=="object"?O(t,e,o):((n,s,i)=>{const a=s.hasOwnProperty(i);return s.constructor.createProperty(i,n),a?Object.getOwnPropertyDescriptor(s,i):void 0})(t,e,o)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class _{constructor(e){this.__litLocalizeEventHandler=o=>{o.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(w,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(w,this.__litLocalizeEventHandler)}}const b=t=>t.addController(new _(t)),R=b;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=()=>(t,e)=>(t.addInitializer(R),t);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class S{constructor(){this.settled=!1,this.promise=new Promise((e,o)=>{this._resolve=e,this._reject=o})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let t=0;t<256;t++)(t>>4&15).toString(16)+(t&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let D=new S;D.resolve();const r=[];for(let t=0;t<256;++t)r.push((t+256).toString(16).slice(1));function U(t,e=0){return(r[t[e+0]]+r[t[e+1]]+r[t[e+2]]+r[t[e+3]]+"-"+r[t[e+4]]+r[t[e+5]]+"-"+r[t[e+6]]+r[t[e+7]]+"-"+r[t[e+8]]+r[t[e+9]]+"-"+r[t[e+10]]+r[t[e+11]]+r[t[e+12]]+r[t[e+13]]+r[t[e+14]]+r[t[e+15]]).toLowerCase()}let h;const L=new Uint8Array(16);function C(){if(!h){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");h=crypto.getRandomValues.bind(crypto)}return h(L)}const P=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),g={randomUUID:P};function j(t,e,o){var s;if(g.randomUUID&&!t)return g.randomUUID();t=t||{};const n=t.random??((s=t.rng)==null?void 0:s.call(t))??C();if(n.length<16)throw new Error("Random bytes length must be >= 16");return n[6]=n[6]&15|64,n[8]=n[8]&63|128,U(n)}const x="dx.searchv2.useOpenAcShadowRoot";var z=(t=>(t.LTR="ltr",t.RTL="rtl",t))(z||{});const $=["ar","ca","cs","da","de","el","en","es","fi","fr","iw","hr","hu","it","ja","kk","ko","nl","no","pl","pt","pt_BR","ro","ru","sk","sl","sv","th","tr","uk","zh","zh_TW"];var M=Object.defineProperty,T=Object.getOwnPropertyDescriptor,u=(t,e,o,n)=>{for(var s=n>1?void 0:n?T(e,o):e,i=t.length-1,a;i>=0;i--)(a=t[i])&&(s=(n?a(e,o,s):a(s))||s);return n&&s&&M(e,o,s),s};let d=class extends p{constructor(){super(),this.id="",this.id=j(),console.debug(`${this.tagName} [${this.id}] is connected to the DOM!`)}static useOpenShadowRoot(){if(typeof window>"u"||!window.sessionStorage)return"closed";const t=this.shadowRootModeKey,e=window.sessionStorage.getItem(t),o=e==="true"?"open":"closed";return console.info(e==="true"?`Open shadowRoot is ENABLED for all AC components! (key=${t})`:`Open shadowRoot is DISABLED for all AC components! (key=${t})`),o}static getShadowRootOptions(){if(!Object.prototype.hasOwnProperty.call(this,"_shadowRootOptions")){const t=this.useOpenShadowRoot(),e={...p.shadowRootOptions};Object.defineProperty(this,"_shadowRootOptions",{value:{...e,mode:t},writable:!1,configurable:!0})}return this._shadowRootOptions}static get shadowRootOptions(){return this.getShadowRootOptions()}static set shadowRootOptions(t){}disconnectedCallback(){console.debug(`${this.tagName} [${this.id}] is disconnected from the DOM!`),super.disconnectedCallback()}connectedCallback(){super.connectedCallback()}getMessage(t,e){var o;if(this.localization){let n=(o=this.localization)==null?void 0:o.get(t);if(n!=null)return e&&e.forEach(s=>{for(const[i,a]of Object.entries(s))n=n==null?void 0:n.replace(new RegExp(i,"g"),a)}),n}return console.warn(`The templateKey '${t}' is not provided by the 'localization' property for the '${this.nodeName}' component!`),t}};d.shadowRootModeKey=x;d._shadowRootOptions=null;u([y({type:String,reflect:!0})],d.prototype,"id",2);u([y({type:Map})],d.prototype,"localization",2);d=u([E()],d);export{d as D,z as L,$ as S,E as l,y as n,k as t,j as v};
