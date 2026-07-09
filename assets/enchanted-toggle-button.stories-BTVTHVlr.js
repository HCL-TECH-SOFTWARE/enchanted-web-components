import{B as t,u as i,g as o}from"./tags-CoVdckeD.js";import"./index-DTZg3DxU.js";import"./enchanted-badge-Df1lKWMF.js";import{t as p,s as g,r as $}from"./cssClassEnums-B0FxBdGx.js";const y={title:"Input/Enchanted Toggle Button",component:"enchanted-toggle-button",tags:["a11y-addon"],argTypes:{toggleOn:{control:"boolean",description:"Toggle state",table:{defaultValue:{summary:"false"}}},showBadge:{control:"boolean",description:"Show badge slot",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Disabled",table:{defaultValue:{summary:"false"}}},padding:{control:"boolean",description:"Adds icon button padding",table:{defaultValue:{summary:"false"}}},tooltipText:{control:"text",description:"Tooltip text",table:{defaultValue:{summary:""}}},ariaLabel:{control:"text",description:"Aria label for the button",table:{defaultValue:{summary:""}}},iconSize:{control:{type:"select"},options:["16","20"],description:"Icon size, 16 or 20",table:{defaultValue:{summary:"20"}}},firstType:{control:"boolean",description:"Whether this button is the first in a group (for styling)",table:{defaultValue:{summary:"true"}}},lastType:{control:"boolean",description:"Whether this button is the last in a group (for styling)",table:{defaultValue:{summary:"true"}}}},args:{toggleOn:!1,showBadge:!1,disabled:!1,padding:!1,iconSize:"16",tooltipText:"",ariaLabel:"Toggle",firstType:!0,lastType:!0},render:e=>{const b=u=>{const{toggleOn:v}=u.detail;e.toggleOn=v};return i`
    <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end; padding: 20px 24px 24px;">
      <${t}
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
          badge=${p.DOT}
          color=${g.PRIMARY}
          border=${$.PAPER}
        ></enchanted-badge>
        <${o("icon-add")} slot="icon"></${o("icon-add")}>

      </${t}>
    </div>
    `}},a={},n={render:()=>i`
      ${(()=>{const e=o("icon-add");return i`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end;">
        <div>
          <div>Default</div>
          <${t} ariaLabel="Default"  firstType lastType>
            <${e} slot="icon"></${e}>
          </${t}>
        </div>
        <div>
          <div>Toggle On</div>
          <${t} ariaLabel="On" toggleOn firstType lastType>
            <${e} slot="icon"></${e}>
          </${t}>
        </div>
        <div>
          <div>With Tooltip Text</div>
          <${t}
            ariaLabel="Tooltip"
            tooltipText="Toggle tooltip"
            firstType
            lastType
          >
            <${e} slot="icon"></${e}>
          </${t}>
        </div>
        <div>
          <div>With Badge Slot</div>
          <${t} ariaLabel="Badge" showBadge firstType lastType>
            <${e} slot="icon"></${e}>
            <enchanted-badge
              slot="badge"
              badge=${p.DOT}
              color=${g.PRIMARY}
              border=${$.PAPER}
            ></enchanted-badge>
          </${t}>
        </div>
        <div>
          <div>Disabled</div>
          <${t} ariaLabel="Disabled" disabled firstType lastType>
            <${e} slot="icon"></${e}>
          </${t}>
        </div>

        <div>
          <div>First/middle button</div>
          <${t} ariaLabel="FirstType" firstType>
            <${e} slot="icon"></${e}>
          </${t}>
        </div>

        <div>
          <div>LastButton</div>
          <${t} ariaLabel="LastButton" lastType>
            <${e} slot="icon"></${e}>
          </${t}>
        </div>
      </div>
      `})()}
    `};var l,d,s;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(s=(d=a.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var T,r,c;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(c=(r=n.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const E=["Default","AllStates"],m=Object.freeze(Object.defineProperty({__proto__:null,AllStates:n,Default:a,__namedExportsOrder:E,default:y},Symbol.toStringTag,{value:"Module"}));export{a as D,m as E};
