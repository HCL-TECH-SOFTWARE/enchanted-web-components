import{E as m,x as o}from"./iframe-g_dBLWCH.js";import{n as f,t as S,D as E}from"./dx-ac-base-element-Ba1nuzGa.js";import{l as _}from"./lodash-CR4q0RmQ.js";import{t as s}from"./cssClassEnums-DKCjOuJT.js";import{K as D}from"./keyboardEventKeys-BnoN8uA3.js";import"./preload-helper-C1FmrZbK.js";var k=Object.defineProperty,I=Object.getOwnPropertyDescriptor,p=(i,e,l,d)=>{for(var t=d>1?void 0:d?I(e,l):e,n=i.length-1,h;n>=0;n--)(h=i[n])&&(t=(d?h(e,l,t):h(t))||t);return d&&t&&k(e,l,t),t};let c=class extends E{constructor(){super(...arguments),this.isChecked=!1,this.isDisabled=!1}partAttributeDecider(i){let e=i;switch(i){case s.SWITCH_SLIDER:return this.isChecked?(e=s.SWITCH_SLIDER_CHECKED,this.isDisabled&&(e=s.SWITCH_SLIDER_CHECKED_DISABLED)):this.isDisabled&&(e=s.SWITCH_SLIDER_DISABLED),e;case s.SWITCH_LABEL:return this.isDisabled&&(e=s.SWITCH_LABEL_DISABLED),e;case s.SWITCH_INPUT:return e;default:return e}}handleSwitchToggle(i){i.stopPropagation(),this.isChecked=!this.isChecked;const e=new CustomEvent("change",{detail:{isChecked:this.isChecked}});this.dispatchEvent(e)}pressKeyHandler(i){const e=i;(e.key===D.ENTER||e.key==D.SPACE)&&(i.preventDefault(),this.handleSwitchToggle(i))}render(){return o`
    <label
      data-testid="dx-switch-label"
      part=${this.partAttributeDecider(s.SWITCH_LABEL)}
      @keydown=${this.pressKeyHandler}
      tabindex=${this.isDisabled?-1:0} >
      <input
        data-testid="dx-switch-input"
        type="checkbox"
        tabindex=-1
        disabled=${this.isDisabled||m}
        part=${this.partAttributeDecider(s.SWITCH_INPUT)}
        @click=${_.debounce(this.handleSwitchToggle,300)}>
      </input>
      <span
        data-testid="dx-switch-span"
        part=${this.partAttributeDecider(s.SWITCH_SLIDER)}></span>
    </label>
    `}};p([f({type:Boolean})],c.prototype,"isChecked",2);p([f({type:Boolean})],c.prototype,"isDisabled",2);c=p([S("dx-switch")],c);const W={title:"Input/dx-switch",tags:["autodocs"],argTypes:{isChecked:{control:"boolean",description:"Checked",table:{defaultValue:{summary:"false"}}},isDisabled:{control:"boolean",description:"Disabled",table:{defaultValue:{summary:"false"}}}},args:{isChecked:!1,isDisabled:!1},render:i=>o`
      <dx-switch
        ?isChecked=${i.isChecked}
        ?isDisabled=${i.isDisabled}
      ></dx-switch>
    `},a={},r={render:()=>o`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end;">
        <div>
          <div>Default (Unchecked)</div>
          <dx-switch></dx-switch>
        </div>
        <div>
          <div>Checked</div>
          <dx-switch isChecked></dx-switch>
        </div>
        <div>
          <div>Disabled</div>
          <dx-switch isDisabled></dx-switch>
        </div>
        <div>
          <div>Checked & Disabled</div>
          <dx-switch isChecked isDisabled></dx-switch>
        </div>
      </div>
    `};var u,v,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var b,C,w;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end;">
        <div>
          <div>Default (Unchecked)</div>
          <dx-switch></dx-switch>
        </div>
        <div>
          <div>Checked</div>
          <dx-switch isChecked></dx-switch>
        </div>
        <div>
          <div>Disabled</div>
          <dx-switch isDisabled></dx-switch>
        </div>
        <div>
          <div>Checked & Disabled</div>
          <dx-switch isChecked isDisabled></dx-switch>
        </div>
      </div>
    \`;
  }
}`,...(w=(C=r.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const P=["Default","AllStates"];export{r as AllStates,a as Default,P as __namedExportsOrder,W as default};
