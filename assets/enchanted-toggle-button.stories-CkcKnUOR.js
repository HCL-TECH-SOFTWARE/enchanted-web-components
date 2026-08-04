import{B as a,u as i,g as l}from"./tags-BoxFtPAv.js";import{E as o}from"./index-sb1Sop7G.js";import"./enchanted-badge-CfrVuyT0.js";import{O as p,N as $,K as b}from"./cssClassEnums-CY7zIYSt.js";const f={title:"Input/Enchanted Toggle Button",component:"enchanted-toggle-button",tags:["a11y-addon"],argTypes:{toggleOn:{control:"boolean",description:"Toggle state",table:{defaultValue:{summary:"false"}}},showBadge:{control:"boolean",description:"Show badge slot",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Disabled",table:{defaultValue:{summary:"false"}}},padding:{control:"boolean",description:"Adds icon button padding",table:{defaultValue:{summary:"false"}}},tooltipText:{control:"text",description:"Tooltip text",table:{defaultValue:{summary:""}}},ariaLabel:{control:"text",description:"Aria label for the button",table:{defaultValue:{summary:""}}},iconSize:{control:{type:"select"},options:[o.SMALL,o.LARGE],description:"Icon size, small or large",table:{defaultValue:{summary:o.SMALL}}},firstType:{control:"boolean",description:"Whether this button is the first in a group (for styling)",table:{defaultValue:{summary:"false"}}},lastType:{control:"boolean",description:"Whether this button is the last in a group (for styling)",table:{defaultValue:{summary:"false"}}}},args:{toggleOn:!1,showBadge:!1,disabled:!1,padding:!1,iconSize:o.SMALL,tooltipText:"",ariaLabel:"Toggle",firstType:!1,lastType:!1},render:e=>{const u=v=>{const{toggleOn:E}=v.detail;e.toggleOn=E};return i`
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
        @toggle-change=${u}
      >
        <enchanted-badge
          slot="badge"
          badge=${p.DOT}
          color=${$.PRIMARY}
          border=${b.PAPER}
        ></enchanted-badge>
        <${l("icon-add")} slot="icon"></${l("icon-add")}>

      </${a}>
    </div>
    `}},t={},n={render:()=>i`
      ${(()=>{const e=l("icon-add");return i`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end;">
        <div>
          <div>Default</div>
          <${a} ariaLabel="Default">
            <${e} slot="icon"></${e}>
          </${a}>
        </div>
        <div>
          <div>Toggle On</div>
          <${a} ariaLabel="On" toggleOn>
            <${e} slot="icon"></${e}>
          </${a}>
        </div>
        <div>
          <div>With Tooltip Text</div>
          <${a}
            ariaLabel="Tooltip"
            tooltipText="Toggle tooltip"
          >
            <${e} slot="icon"></${e}>
          </${a}>
        </div>
        <div>
          <div>With Badge Slot</div>
          <${a} ariaLabel="Badge" showBadge>
            <${e} slot="icon"></${e}>
            <enchanted-badge
              slot="badge"
              badge=${p.DOT}
              color=${$.PRIMARY}
              border=${b.PAPER}
            ></enchanted-badge>
          </${a}>
        </div>
        <div>
          <div>Disabled</div>
          <${a} ariaLabel="Disabled" disabled>
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
    `};var d,s,r;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var T,g,c;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    return html\`
      \${(() => {
      const iconTag = generateIconTagName('icon-add');
      return html\`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end;">
        <div>
          <div>Default</div>
          <\${ENCHANTED_TOGGLE_BUTTON_TAG} ariaLabel="Default">
            <\${iconTag} slot="icon"></\${iconTag}>
          </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </div>
        <div>
          <div>Toggle On</div>
          <\${ENCHANTED_TOGGLE_BUTTON_TAG} ariaLabel="On" toggleOn>
            <\${iconTag} slot="icon"></\${iconTag}>
          </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </div>
        <div>
          <div>With Tooltip Text</div>
          <\${ENCHANTED_TOGGLE_BUTTON_TAG}
            ariaLabel="Tooltip"
            tooltipText="Toggle tooltip"
          >
            <\${iconTag} slot="icon"></\${iconTag}>
          </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </div>
        <div>
          <div>With Badge Slot</div>
          <\${ENCHANTED_TOGGLE_BUTTON_TAG} ariaLabel="Badge" showBadge>
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
          <\${ENCHANTED_TOGGLE_BUTTON_TAG} ariaLabel="Disabled" disabled>
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
}`,...(c=(g=n.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};const _=["Default","AllStates"],A=Object.freeze(Object.defineProperty({__proto__:null,AllStates:n,Default:t,__namedExportsOrder:_,default:f},Symbol.toStringTag,{value:"Module"}));export{t as D,A as E};
