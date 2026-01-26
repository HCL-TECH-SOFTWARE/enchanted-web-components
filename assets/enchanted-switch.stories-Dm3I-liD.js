import{E as D,x as l}from"./iframe-Bl462ZXk.js";import{n as y,t as k,E as C}from"./enchanted-ac-base-element-D6hCixC-.js";import{l as S}from"./lodash-DkmKKxq-.js";import{w as s}from"./cssClassEnums-DRCAaF3v.js";import{K as b}from"./keyboardEventKeys-BnoN8uA3.js";import"./preload-helper-C1FmrZbK.js";var E=Object.defineProperty,I=Object.getOwnPropertyDescriptor,p=(t,e,r,a)=>{for(var i=a>1?void 0:a?I(e,r):e,o=t.length-1,h;o>=0;o--)(h=t[o])&&(i=(a?h(e,r,i):h(i))||i);return a&&i&&E(e,r,i),i};let d=class extends C{constructor(){super(...arguments),this.isChecked=!1,this.isDisabled=!1}partAttributeDecider(t){let e=t;switch(t){case s.SWITCH_SLIDER:return this.isChecked?(e=s.SWITCH_SLIDER_CHECKED,this.isDisabled&&(e=s.SWITCH_SLIDER_CHECKED_DISABLED)):this.isDisabled&&(e=s.SWITCH_SLIDER_DISABLED),e;case s.SWITCH_LABEL:return this.isDisabled&&(e=s.SWITCH_LABEL_DISABLED),e;case s.SWITCH_INPUT:return e;default:return e}}handleSwitchToggle(t){t.stopPropagation(),this.isChecked=!this.isChecked;const e=new CustomEvent("change",{detail:{isChecked:this.isChecked}});this.dispatchEvent(e)}pressKeyHandler(t){const e=t;(e.key===b.ENTER||e.key==b.SPACE)&&(t.preventDefault(),this.handleSwitchToggle(t))}render(){return l`
    <label
      data-testid="enchanted-switch-label"
      part=${this.partAttributeDecider(s.SWITCH_LABEL)}
      @keydown=${this.pressKeyHandler}
      tabindex=${this.isDisabled?-1:0} >
      <input
        data-testid="enchanted-switch-input"
        type="checkbox"
        tabindex=-1
        disabled=${this.isDisabled||D}
        part=${this.partAttributeDecider(s.SWITCH_INPUT)}
        @click=${S.debounce(this.handleSwitchToggle,300)}>
      </input>
      <span
        data-testid="enchanted-switch-span"
        part=${this.partAttributeDecider(s.SWITCH_SLIDER)}></span>
    </label>
    `}};p([y({type:Boolean})],d.prototype,"isChecked",2);p([y({type:Boolean})],d.prototype,"isDisabled",2);d=p([k("enchanted-switch")],d);const L={title:"Input/enchanted-switch",tags:["autodocs"],parameters:{docs:{description:{component:"The Switch component provides a toggle control for binary on/off or true/false states. It supports keyboard navigation (Enter/Space keys), dispatches change events with the checked state, and includes disabled styling. Use switches for immediate actions like enabling/disabling features, where the change takes effect instantly without requiring a save or submit action."}}},argTypes:{isChecked:{control:{type:"boolean"},description:"Controls the checked/on state of the switch. When true, the switch is in the on position. Dispatches a change event when toggled.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},isDisabled:{control:{type:"boolean"},description:"Disables the switch, preventing user interaction. The switch cannot be toggled and appears grayed out. Does not respond to clicks or keyboard input.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}}},args:{isChecked:!1,isDisabled:!1},render:t=>l`
      <enchanted-switch
        ?isChecked=${t.isChecked}
        ?isDisabled=${t.isDisabled}
      ></enchanted-switch>
    `},n={},c={parameters:{controls:{disable:!0},docs:{description:{story:`Comprehensive showcase of all switch states and variations:

**States:** Demonstrates all four possible state combinations - unchecked, checked, disabled unchecked, and disabled checked.

**Interaction:** Active switches respond to clicks and keyboard input (Enter/Space keys). Disabled switches show non-interactive visual styling.

**Events:** Toggleable switches dispatch change events with the new isChecked state, enabling reactive behavior in applications.`}}},render:()=>l`
      <div style="display: flex; gap: 48px; flex-wrap: wrap; align-items: center;">
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Unchecked (Off)</div>
          <enchanted-switch></enchanted-switch>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Checked (On)</div>
          <enchanted-switch ?isChecked=${!0}></enchanted-switch>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled (Off)</div>
          <enchanted-switch ?isDisabled=${!0}></enchanted-switch>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled (On)</div>
          <enchanted-switch ?isChecked=${!0} ?isDisabled=${!0}></enchanted-switch>
        </div>
      </div>
    `};var u,w,v;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(v=(w=n.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var m,g,f;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
          <enchanted-switch></enchanted-switch>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Checked (On)</div>
          <enchanted-switch ?isChecked=\${true}></enchanted-switch>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled (Off)</div>
          <enchanted-switch ?isDisabled=\${true}></enchanted-switch>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-weight: 500;">Disabled (On)</div>
          <enchanted-switch ?isChecked=\${true} ?isDisabled=\${true}></enchanted-switch>
        </div>
      </div>
    \`;
  }
}`,...(f=(g=c.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const O=["Default","AllStates"];export{c as AllStates,n as Default,O as __namedExportsOrder,L as default};
