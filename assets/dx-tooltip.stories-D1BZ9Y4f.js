import{x as a}from"./iframe-g_dBLWCH.js";import"./dx-tooltip-D9Bb4e-o.js";import"./dx-button-rc8nG4sK.js";import{T as t}from"./cssClassEnums-DKCjOuJT.js";import"./preload-helper-C1FmrZbK.js";import"./dx-ac-base-element-Ba1nuzGa.js";import"./state-BrHRPonU.js";import"./localization-_QVbBsw5.js";const c={title:"Feedback/dx-tooltip",tags:["autodocs"],argTypes:{tooltiptext:{control:"text",description:"Tooltip text",table:{defaultValue:{summary:""}}},placement:{control:{type:"select"},options:[t.TOOLTIP_TOP,t.TOOLTIP_BOTTOM,t.TOOLTIP_LEFT,t.TOOLTIP_RIGHT,t.TOOLTIP_TOP_START,t.TOOLTIP_TOP_END,t.TOOLTIP_BOTTOM_START,t.TOOLTIP_BOTTOM_END,t.TOOLTIP_LEFT_START,t.TOOLTIP_LEFT_END,t.TOOLTIP_RIGHT_START,t.TOOLTIP_RIGHT_END],description:"Tooltip placement",table:{defaultValue:{summary:t.TOOLTIP_TOP}}},open:{control:"boolean",description:"Always show tooltip",table:{defaultValue:{summary:"false"}}}},args:{tooltiptext:"Tooltip text",placement:t.TOOLTIP_TOP,open:!1},render:i=>a`
      <dx-tooltip
        tooltiptext="${i.tooltiptext}"
        placement="${i.placement}"
        ?open=${i.open}
      >
        <dx-button slot="target" buttontext="Show Tooltip"></dx-button>
      </dx-tooltip>
    `},o={},e={render:()=>a`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end;">
        <div>
          <div>Top</div>
          <dx-tooltip tooltiptext="Top tooltip" placement="${t.TOOLTIP_TOP}">
            <dx-button slot="target" buttontext="Show Tooltip"></dx-button>
          </dx-tooltip>
        </div>
        <div>
          <div>Bottom</div>
          <dx-tooltip tooltiptext="Bottom tooltip" placement="${t.TOOLTIP_BOTTOM}">
            <dx-button slot="target" buttontext="Show Tooltip"></dx-button>
          </dx-tooltip>
        </div>
        <div>
          <div>Left</div>
          <dx-tooltip tooltiptext="Left tooltip" placement="${t.TOOLTIP_LEFT}">
            <dx-button slot="target" buttontext="Show Tooltip"></dx-button>
          </dx-tooltip>
        </div>
        <div>
          <div>Right</div>
          <dx-tooltip tooltiptext="Right tooltip" placement="${t.TOOLTIP_RIGHT}">
            <dx-button slot="target" buttontext="Show Tooltip"></dx-button>
          </dx-tooltip>
        </div>
        <div>
          <div>Always Open</div>
          <dx-tooltip tooltiptext="Always open" placement="${t.TOOLTIP_TOP}" open>
            <dx-button slot="target" buttontext="Show Tooltip"></dx-button>
          </dx-tooltip>
        </div>
        <div>
          <div>Custom Content</div>
          <dx-tooltip tooltiptext="Custom content tooltip" placement="${t.TOOLTIP_TOP}">
            <button slot="target" style="padding: 8px 16px;">Hover me</button>
          </dx-tooltip>
        </div>
      </div>
    `};var l,n,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var T,d,x;e.parameters={...e.parameters,docs:{...(T=e.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end;">
        <div>
          <div>Top</div>
          <dx-tooltip tooltiptext="Top tooltip" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}">
            <dx-button slot="target" buttontext="Show Tooltip"></dx-button>
          </dx-tooltip>
        </div>
        <div>
          <div>Bottom</div>
          <dx-tooltip tooltiptext="Bottom tooltip" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM}">
            <dx-button slot="target" buttontext="Show Tooltip"></dx-button>
          </dx-tooltip>
        </div>
        <div>
          <div>Left</div>
          <dx-tooltip tooltiptext="Left tooltip" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_LEFT}">
            <dx-button slot="target" buttontext="Show Tooltip"></dx-button>
          </dx-tooltip>
        </div>
        <div>
          <div>Right</div>
          <dx-tooltip tooltiptext="Right tooltip" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT}">
            <dx-button slot="target" buttontext="Show Tooltip"></dx-button>
          </dx-tooltip>
        </div>
        <div>
          <div>Always Open</div>
          <dx-tooltip tooltiptext="Always open" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" open>
            <dx-button slot="target" buttontext="Show Tooltip"></dx-button>
          </dx-tooltip>
        </div>
        <div>
          <div>Custom Content</div>
          <dx-tooltip tooltiptext="Custom content tooltip" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}">
            <button slot="target" style="padding: 8px 16px;">Hover me</button>
          </dx-tooltip>
        </div>
      </div>
    \`;
  }
}`,...(x=(d=e.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const _=["Default","AllStates"];export{e as AllStates,o as Default,_ as __namedExportsOrder,c as default};
