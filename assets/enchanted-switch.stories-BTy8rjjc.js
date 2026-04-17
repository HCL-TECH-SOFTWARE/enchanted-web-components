import{c as y,ai as c,E as T,n as C,aj as i,u as D}from"./tags-Dua8CojJ.js";import{E as w,x as k}from"./iframe-DNG6NGwD.js";import{l as S}from"./lodash-CNEZJmwz.js";import{y as s}from"./cssClassEnums-mKa0OyBd.js";import{K as p}from"./keyboardEventKeys-BnoN8uA3.js";import"./preload-helper-C1FmrZbK.js";var _=Object.defineProperty,E=(n,t,e,I)=>{for(var a=void 0,d=n.length-1,h;d>=0;d--)(h=n[d])&&(a=h(t,e,a)||a);return a&&_(t,e,a),a};const A=y("enchanted-web-components:components:atomic-component:enchanted-switch.ts");class l extends T{constructor(){super(...arguments),this.isChecked=!1,this.isDisabled=!1}partAttributeDecider(t){let e=t;switch(t){case s.SWITCH_SLIDER:return this.isChecked?(e=s.SWITCH_SLIDER_CHECKED,this.isDisabled&&(e=s.SWITCH_SLIDER_CHECKED_DISABLED)):this.isDisabled&&(e=s.SWITCH_SLIDER_DISABLED),e;case s.SWITCH_LABEL:return this.isDisabled&&(e=s.SWITCH_LABEL_DISABLED),e;case s.SWITCH_INPUT:return e;default:return e}}handleSwitchToggle(t){t.stopPropagation(),this.isChecked=!this.isChecked;const e=new CustomEvent("change",{detail:{isChecked:this.isChecked}});this.dispatchEvent(e)}pressKeyHandler(t){const e=t;(e.key===p.ENTER||e.key==p.SPACE)&&(t.preventDefault(),this.handleSwitchToggle(t))}render(){return k`
    <label
      data-testid="enchanted-switch-label"
      part=${this.partAttributeDecider(s.SWITCH_LABEL)}
      @keydown=${this.pressKeyHandler}
      tabindex=${this.isDisabled?-1:0} >
      <input
        data-testid="enchanted-switch-input"
        type="checkbox"
        tabindex=-1
        disabled=${this.isDisabled||w}
        part=${this.partAttributeDecider(s.SWITCH_INPUT)}
        @click=${S.debounce(this.handleSwitchToggle,300)}>
      </input>
      <span
        data-testid="enchanted-switch-span"
        part=${this.partAttributeDecider(s.SWITCH_SLIDER)}></span>
    </label>
    `}}E([C({type:Boolean})],l.prototype,"isChecked");E([C({type:Boolean})],l.prototype,"isDisabled");customElements.get(c)?A("Component (%s) is currently registered and not possible to registrate again.",c):customElements.define(c,l);const G={title:"Input/enchanted-switch",tags:["autodocs"],parameters:{docs:{description:{component:"The Switch component provides a toggle control for binary on/off or true/false states. It supports keyboard navigation (Enter/Space keys), dispatches change events with the checked state, and includes disabled styling. Use switches for immediate actions like enabling/disabling features, where the change takes effect instantly without requiring a save or submit action."}}},argTypes:{isChecked:{control:{type:"boolean"},description:"Controls the checked/on state of the switch. When true, the switch is in the on position. Dispatches a change event when toggled.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},isDisabled:{control:{type:"boolean"},description:"Disables the switch, preventing user interaction. The switch cannot be toggled and appears grayed out. Does not respond to clicks or keyboard input.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}}},args:{isChecked:!1,isDisabled:!1},render:n=>D`
      <${i}
        ?isChecked=${n.isChecked}
        ?isDisabled=${n.isDisabled}
      ></${i}>
    `},r={},o={parameters:{controls:{disable:!0},docs:{description:{story:`Comprehensive showcase of all switch states and variations:

**States:** Demonstrates all four possible state combinations - unchecked, checked, disabled unchecked, and disabled checked.

**Interaction:** Active switches respond to clicks and keyboard input (Enter/Space keys). Disabled switches show non-interactive visual styling.

**Events:** Toggleable switches dispatch change events with the new isChecked state, enabling reactive behavior in applications.`}}},render:()=>D`
      <div style="display: flex; gap: 48px; flex-wrap: wrap; align-items: center;">
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Unchecked (Off)</div>
          <${i}></${i}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Checked (On)</div>
          <${i} ?isChecked=${!0}></${i}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled (Off)</div>
          <${i} ?isDisabled=${!0}></${i}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled (On)</div>
          <${i} ?isChecked=${!0} ?isDisabled=${!0}></${i}>
        </div>
      </div>
    `};var u,b,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(m=(b=r.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var g,v,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Comprehensive showcase of all switch states and variations:\\n\\n' + '**States:** Demonstrates all four possible state combinations - unchecked, checked, disabled unchecked, and disabled checked.\\n\\n' + '**Interaction:** Active switches respond to clicks and keyboard input (Enter/Space keys). Disabled switches show non-interactive visual styling.\\n\\n' + '**Events:** Toggleable switches dispatch change events with the new isChecked state, enabling reactive behavior in applications.'
      }
    }
  },
  render: () => {
    return html\`
      <div style="display: flex; gap: 48px; flex-wrap: wrap; align-items: center;">
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Unchecked (Off)</div>
          <\${ENCHANTED_SWITCH_TAG}></\${ENCHANTED_SWITCH_TAG}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Checked (On)</div>
          <\${ENCHANTED_SWITCH_TAG} ?isChecked=\${true}></\${ENCHANTED_SWITCH_TAG}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled (Off)</div>
          <\${ENCHANTED_SWITCH_TAG} ?isDisabled=\${true}></\${ENCHANTED_SWITCH_TAG}>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled (On)</div>
          <\${ENCHANTED_SWITCH_TAG} ?isChecked=\${true} ?isDisabled=\${true}></\${ENCHANTED_SWITCH_TAG}>
        </div>
      </div>
    \`;
  }
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const O=["Default","AllStates"];export{o as AllStates,r as Default,O as __namedExportsOrder,G as default};
