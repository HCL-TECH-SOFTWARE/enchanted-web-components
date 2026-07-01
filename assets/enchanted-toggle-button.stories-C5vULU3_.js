import{an as a,u as o,g as n}from"./tags-GuWqQq8Q.js";import"./index-CkOu3Kkl.js";import"./enchanted-badge-B982anGm.js";import{h as c,g,E as $}from"./cssClassEnums-BAuKGcJP.js";import"./iframe-DIZdwA76.js";import"./preload-helper-C1FmrZbK.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./enchanted-tooltip-DiuHkyK3.js";import"./state-CtyNSLbf.js";import"./query-BApjzB0v.js";import"./exportParts-cfcc4c_o.js";import"./index-CuTRIAwF.js";import"./tags-OypiFpf3.js";import"./localization-CViIwzVj.js";const C={title:"Input/Enchanted Toggle Button",tags:["autodocs","a11y-addon"],argTypes:{toggleOn:{control:"boolean",description:"Toggle state",table:{defaultValue:{summary:"false"}}},showBadge:{control:"boolean",description:"Show badge slot",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Disabled",table:{defaultValue:{summary:"false"}}},padding:{control:"boolean",description:"Adds icon button padding",table:{defaultValue:{summary:"false"}}},tooltipText:{control:"text",description:"Tooltip text",table:{defaultValue:{summary:""}}},ariaLabel:{control:"text",description:"Aria label for the button",table:{defaultValue:{summary:""}}},iconSize:{control:{type:"select"},options:["16","20"],description:"Icon size, 16 or 20",table:{defaultValue:{summary:"20"}}},firstType:{control:"boolean",description:"Whether this button is the first in a group (for styling)",table:{defaultValue:{summary:"true"}}},lastType:{control:"boolean",description:"Whether this button is the last in a group (for styling)",table:{defaultValue:{summary:"true"}}}},args:{toggleOn:!1,showBadge:!1,disabled:!1,padding:!1,iconSize:"16",tooltipText:"",ariaLabel:"Toggle",firstType:!0,lastType:!0},render:e=>{const b=u=>{const{toggleOn:v}=u.detail;e.toggleOn=v};return o`
    <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end; padding: 20px 24px 24px;">
      <${a}
        ?toggleOn=${e.toggleOn}
        ?showBadge=${e.showBadge}
        ?disabled=${e.disabled}
        tooltipText=${e.tooltipText}
        ?padding=${e.padding}
        ?firstType=${e.firstType}
        ?lastType=${e.lastType}
        iconSize=${e.iconSize}
        ariaLabel=${e.ariaLabel}
        @toggle-change=${b}
      >
        <enchanted-badge
          slot="badge"
          badge=${c.DOT}
          color=${g.PRIMARY}
          border=${$.PAPER}
        ></enchanted-badge>
        <${n("icon-add")} slot="icon"></${n("icon-add")}>

      </${a}>
    </div>
    `}},t={},i={render:()=>o`
      ${(()=>{const e=n("icon-add");return o`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end;">
        <div>
          <div>Default</div>
          <${a} ariaLabel="Default"  firstType lastType>
            <${e} slot="icon"></${e}>
          </${a}>
        </div>
        <div>
          <div>Toggle On</div>
          <${a} ariaLabel="On" toggleOn firstType lastType>
            <${e} slot="icon"></${e}>
          </${a}>
        </div>
        <div>
          <div>With Tooltip Text</div>
          <${a}
            ariaLabel="Tooltip"
            tooltipText="Toggle tooltip"
            firstType
            lastType
          >
            <${e} slot="icon"></${e}>
          </${a}>
        </div>
        <div>
          <div>With Badge Slot</div>
          <${a} ariaLabel="Badge" showBadge firstType lastType>
            <${e} slot="icon"></${e}>
            <enchanted-badge
              slot="badge"
              badge=${c.DOT}
              color=${g.PRIMARY}
              border=${$.PAPER}
            ></enchanted-badge>
          </${a}>
        </div>
        <div>
          <div>Disabled</div>
          <${a} ariaLabel="Disabled" disabled firstType lastType>
            <${e} slot="icon"></${e}>
          </${a}>
        </div>

        <div>
          <div>First/middle button</div>
          <${a} ariaLabel="FirstType" firstType>
            <${e} slot="icon"></${e}>
          </${a}>
        </div>

        <div>
          <div>LastButton</div>
          <${a} ariaLabel="LastButton" lastType>
            <${e} slot="icon"></${e}>
          </${a}>
        </div>
      </div>
      `})()}
    `};var l,d,r;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(r=(d=t.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};var s,T,p;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    return html\`
      \${(() => {
      const iconTag = generateIconTagName('icon-add');
      return html\`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end;">
        <div>
          <div>Default</div>
          <\${ENCHANTED_TOGGLE_BUTTON_TAG} ariaLabel="Default"  firstType lastType>
            <\${iconTag} slot="icon"></\${iconTag}>
          </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </div>
        <div>
          <div>Toggle On</div>
          <\${ENCHANTED_TOGGLE_BUTTON_TAG} ariaLabel="On" toggleOn firstType lastType>
            <\${iconTag} slot="icon"></\${iconTag}>
          </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </div>
        <div>
          <div>With Tooltip Text</div>
          <\${ENCHANTED_TOGGLE_BUTTON_TAG}
            ariaLabel="Tooltip"
            tooltipText="Toggle tooltip"
            firstType
            lastType
          >
            <\${iconTag} slot="icon"></\${iconTag}>
          </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </div>
        <div>
          <div>With Badge Slot</div>
          <\${ENCHANTED_TOGGLE_BUTTON_TAG} ariaLabel="Badge" showBadge firstType lastType>
            <\${iconTag} slot="icon"></\${iconTag}>
            <enchanted-badge
              slot="badge"
              badge=\${EnchantedBadgeType.DOT}
              color=\${EnchantedBadgeColor.PRIMARY}
              border=\${EnchantedBadgeBorder.PAPER}
            ></enchanted-badge>
          </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </div>
        <div>
          <div>Disabled</div>
          <\${ENCHANTED_TOGGLE_BUTTON_TAG} ariaLabel="Disabled" disabled firstType lastType>
            <\${iconTag} slot="icon"></\${iconTag}>
          </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </div>

        <div>
          <div>First/middle button</div>
          <\${ENCHANTED_TOGGLE_BUTTON_TAG} ariaLabel="FirstType" firstType>
            <\${iconTag} slot="icon"></\${iconTag}>
          </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </div>

        <div>
          <div>LastButton</div>
          <\${ENCHANTED_TOGGLE_BUTTON_TAG} ariaLabel="LastButton" lastType>
            <\${iconTag} slot="icon"></\${iconTag}>
          </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </div>
      </div>
      \`;
    })()}
    \`;
  }
}`,...(p=(T=i.parameters)==null?void 0:T.docs)==null?void 0:p.source}}};const H=["Default","AllStates"];export{i as AllStates,t as Default,H as __namedExportsOrder,C as default};
