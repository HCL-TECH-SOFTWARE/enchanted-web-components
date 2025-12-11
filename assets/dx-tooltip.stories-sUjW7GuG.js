import{x as T}from"./iframe-Dsd1MpWQ.js";import"./dx-tooltip-O0sFiIEl.js";import"./dx-button-gwJQrlvi.js";import{E as o,F as i,T as t}from"./cssClassEnums-v1h5zF5X.js";import"./preload-helper-C1FmrZbK.js";import"./dx-ac-base-element-C9dhstFR.js";import"./state-DQlunuPl.js";import"./localization-DmqTGOFp.js";const v={title:"Feedback/dx-tooltip",tags:["autodocs"],argTypes:{tooltiptext:{control:{type:"text"},description:"Text content displayed in the tooltip. Provides contextual information or help text when hovering over the target element.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},placement:{control:{type:"select"},options:[t.TOOLTIP_TOP,t.TOOLTIP_BOTTOM,t.TOOLTIP_LEFT,t.TOOLTIP_RIGHT,t.TOOLTIP_TOP_START,t.TOOLTIP_TOP_END,t.TOOLTIP_BOTTOM_START,t.TOOLTIP_BOTTOM_END,t.TOOLTIP_LEFT_START,t.TOOLTIP_LEFT_END,t.TOOLTIP_RIGHT_START,t.TOOLTIP_RIGHT_END],description:"Tooltip placement relative to target element. Supports 12 positions: top, bottom, left, right, and start/end variants for each. Automatically adjusts if constrained by viewport.",table:{category:"Layout",type:{summary:"TOOLTIP_PLACEMENT"},defaultValue:{summary:t.TOOLTIP_BOTTOM}}},tooltipSize:{control:{type:"radio"},options:[i.TOOLTIP_SMALL,i.TOOLTIP_MEDIUM],description:"Size variant of the tooltip. Options: tooltip-small (compact) or tooltip-medium (larger padding and text). Affects tooltip dimensions and padding.",table:{category:"Layout",type:{summary:"TOOLTIP_VARIANT"},defaultValue:{summary:i.TOOLTIP_SMALL}}},tooltipType:{control:{type:"radio"},options:[o.TOOLTIP_SINGLE_LINE,o.TOOLTIP_MULTI_LINE],description:"Tooltip type controlling text wrapping. Single-line keeps text on one line; multi-line allows wrapping with configurable max width.",table:{category:"Layout",type:{summary:"TOOLTIP_TYPE"},defaultValue:{summary:o.TOOLTIP_SINGLE_LINE}}},show:{control:{type:"boolean"},description:"Controls tooltip visibility state. When true, tooltip is always visible (useful for testing/debugging). When false, shows on hover/focus.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},gap:{control:{type:"number"},description:"Gap in pixels between tooltip and target element. Provides visual separation. Default is 4px.",table:{category:"Styling",type:{summary:"number"},defaultValue:{summary:"4"}}},multiLineMaxWidth:{control:{type:"number"},description:"Maximum width in pixels for multi-line tooltips. Controls where text wraps. Only applies when tooltipType is TOOLTIP_MULTI_LINE. Default is 300px.",table:{category:"Styling",type:{summary:"number"},defaultValue:{summary:"300"}}},viewportPadding:{control:{type:"number"},description:"Padding in pixels from viewport edges. Ensures tooltip stays within viewport bounds with spacing. Default is 4px.",table:{category:"Styling",type:{summary:"number"},defaultValue:{summary:"4"}}},minimumWidth:{control:{type:"number"},description:"Minimum width in pixels for the tooltip. Ensures tooltip meets minimum size requirements. Default is 0 (no minimum).",table:{category:"Styling",type:{summary:"number"},defaultValue:{summary:"0"}}},isRTL:{control:{type:"boolean"},description:"Enables right-to-left text direction for the tooltip content. Affects text alignment and layout for RTL languages.",table:{category:"Localization",type:{summary:"boolean"},defaultValue:{summary:"false"}}}},args:{tooltiptext:"Tooltip text",placement:t.TOOLTIP_TOP,tooltipSize:i.TOOLTIP_SMALL,tooltipType:o.TOOLTIP_SINGLE_LINE,show:!1,gap:4,multiLineMaxWidth:300,viewportPadding:4,minimumWidth:0,isRTL:!1},parameters:{docs:{description:{component:"Tooltip component for displaying contextual information on hover or focus. Features 12 placement options with automatic viewport adjustment, two size variants (small, medium), single-line and multi-line text support, and customizable styling. Supports RTL text direction, configurable gaps and widths, and keyboard accessibility. Uses slots for flexible target elements and automatically positions based on available viewport space."}}},render:e=>T`
      <dx-tooltip
        tooltiptext="${e.tooltiptext}"
        placement="${e.placement}"
        tooltipSize="${e.tooltipSize}"
        tooltipType="${e.tooltipType}"
        ?show=${e.show}
        .gap=${e.gap}
        .multiLineMaxWidth=${e.multiLineMaxWidth}
        .viewportPadding=${e.viewportPadding}
        .minimumWidth=${e.minimumWidth}
        ?isRTL=${e.isRTL}
      >
        <dx-button slot="target" buttontext="Show Tooltip"></dx-button>
      </dx-tooltip>
    `},n={},l={render:()=>T`
      <div style="display: flex; flex-direction: column; gap: 60px; padding: 40px;">
        <div>
          <h3 style="margin: 0 0 20px 0;">Tooltip Placements (12 Positions)</h3>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; place-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Top</p>
              <dx-tooltip tooltiptext="Top placement" placement="${t.TOOLTIP_TOP}" show>
                <dx-button slot="target" buttontext="Top"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Top Start</p>
              <dx-tooltip tooltiptext="Top start placement" placement="${t.TOOLTIP_TOP_START}" show>
                <dx-button slot="target" buttontext="Top Start"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Top End</p>
              <dx-tooltip tooltiptext="Top end placement" placement="${t.TOOLTIP_TOP_END}" show>
                <dx-button slot="target" buttontext="Top End"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Bottom</p>
              <dx-tooltip tooltiptext="Bottom placement" placement="${t.TOOLTIP_BOTTOM}" show>
                <dx-button slot="target" buttontext="Bottom"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Bottom Start</p>
              <dx-tooltip tooltiptext="Bottom start placement" placement="${t.TOOLTIP_BOTTOM_START}" show>
                <dx-button slot="target" buttontext="Bottom Start"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Bottom End</p>
              <dx-tooltip tooltiptext="Bottom end placement" placement="${t.TOOLTIP_BOTTOM_END}" show>
                <dx-button slot="target" buttontext="Bottom End"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Left</p>
              <dx-tooltip tooltiptext="Left placement" placement="${t.TOOLTIP_LEFT}" show>
                <dx-button slot="target" buttontext="Left"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Left Start</p>
              <dx-tooltip tooltiptext="Left start placement" placement="${t.TOOLTIP_LEFT_START}" show>
                <dx-button slot="target" buttontext="Left Start"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Left End</p>
              <dx-tooltip tooltiptext="Left end placement" placement="${t.TOOLTIP_LEFT_END}" show>
                <dx-button slot="target" buttontext="Left End"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Right</p>
              <dx-tooltip tooltiptext="Right placement" placement="${t.TOOLTIP_RIGHT}" show>
                <dx-button slot="target" buttontext="Right"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Right Start</p>
              <dx-tooltip tooltiptext="Right start placement" placement="${t.TOOLTIP_RIGHT_START}" show>
                <dx-button slot="target" buttontext="Right Start"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Right End</p>
              <dx-tooltip tooltiptext="Right end placement" placement="${t.TOOLTIP_RIGHT_END}" show>
                <dx-button slot="target" buttontext="Right End"></dx-button>
              </dx-tooltip>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Tooltip Sizes</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Small (Default)</p>
              <dx-tooltip tooltiptext="Small tooltip size" placement="${t.TOOLTIP_TOP}" tooltipSize="${i.TOOLTIP_SMALL}" show>
                <dx-button slot="target" buttontext="Small Tooltip"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Medium</p>
              <dx-tooltip tooltiptext="Medium tooltip size" placement="${t.TOOLTIP_TOP}" tooltipSize="${i.TOOLTIP_MEDIUM}" show>
                <dx-button slot="target" buttontext="Medium Tooltip"></dx-button>
              </dx-tooltip>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Tooltip Types</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Single Line</p>
              <dx-tooltip tooltiptext="This is a single line tooltip that stays on one line" placement="${t.TOOLTIP_TOP}" tooltipType="${o.TOOLTIP_SINGLE_LINE}" show>
                <dx-button slot="target" buttontext="Single Line"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Multi Line</p>
              <dx-tooltip
                tooltiptext="This is a multi-line tooltip that can wrap text across multiple lines when it exceeds the maximum width"
                placement="${t.TOOLTIP_TOP}"
                tooltipType="${o.TOOLTIP_MULTI_LINE}"
                show
              >
                <dx-button slot="target" buttontext="Multi Line"></dx-button>
              </dx-tooltip>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Custom Styling</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Custom Gap (20px)</p>
              <dx-tooltip tooltiptext="Tooltip with 20px gap" placement="${t.TOOLTIP_TOP}" .gap=${20} show>
                <dx-button slot="target" buttontext="Large Gap"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Minimum Width (200px)</p>
              <dx-tooltip tooltiptext="Wide tooltip" placement="${t.TOOLTIP_TOP}" .minimumWidth=${200} show>
                <dx-button slot="target" buttontext="Wide Tooltip"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Multi-line Max Width (150px)</p>
              <dx-tooltip
                tooltiptext="This tooltip has a narrow max width so it wraps sooner"
                placement="${t.TOOLTIP_TOP}"
                tooltipType="${o.TOOLTIP_MULTI_LINE}"
                .multiLineMaxWidth=${150}
                show
              >
                <dx-button slot="target" buttontext="Narrow Wrap"></dx-button>
              </dx-tooltip>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">RTL Support</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">LTR (Default)</p>
              <dx-tooltip tooltiptext="Left to right text direction" placement="${t.TOOLTIP_TOP}" show>
                <dx-button slot="target" buttontext="LTR Tooltip"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">RTL</p>
              <dx-tooltip tooltiptext="مرحبا بك في التلميح" placement="${t.TOOLTIP_TOP}" ?isRTL=${!0} show>
                <dx-button slot="target" buttontext="RTL Tooltip"></dx-button>
              </dx-tooltip>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Interactive (Hover to Show)</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <dx-tooltip tooltiptext="Hover over me to see the tooltip" placement="${t.TOOLTIP_TOP}">
              <dx-button slot="target" buttontext="Hover Me"></dx-button>
            </dx-tooltip>
            
            <dx-tooltip tooltiptext="This tooltip appears on hover" placement="${t.TOOLTIP_RIGHT}">
              <button slot="target" style="padding: 8px 16px; cursor: pointer;">Custom Target</button>
            </dx-tooltip>
            
            <dx-tooltip tooltiptext="Works with any element" placement="${t.TOOLTIP_BOTTOM}">
              <span slot="target" style="padding: 8px; border: 1px solid #ccc; cursor: help;">ⓘ Info Icon</span>
            </dx-tooltip>
          </div>
        </div>
      </div>
    `,parameters:{docs:{description:{story:"Comprehensive showcase of all tooltip configurations and features. Demonstrates all 12 placement positions (top, bottom, left, right with start/end variants), 2 size variants (small, medium), 2 text types (single-line, multi-line), custom styling options (gap, minimum width, max width for wrapping), RTL text direction support, and interactive hover behavior with various target elements. Most tooltips shown with show=true for visualization; interactive section demonstrates hover behavior. Total of 25+ tooltip configurations highlighting the complete feature set."}},controls:{disable:!0}}};var p,a,s;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(s=(a=n.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var d,x,r;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; flex-direction: column; gap: 60px; padding: 40px;">
        <div>
          <h3 style="margin: 0 0 20px 0;">Tooltip Placements (12 Positions)</h3>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; place-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Top</p>
              <dx-tooltip tooltiptext="Top placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" show>
                <dx-button slot="target" buttontext="Top"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Top Start</p>
              <dx-tooltip tooltiptext="Top start placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP_START}" show>
                <dx-button slot="target" buttontext="Top Start"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Top End</p>
              <dx-tooltip tooltiptext="Top end placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP_END}" show>
                <dx-button slot="target" buttontext="Top End"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Bottom</p>
              <dx-tooltip tooltiptext="Bottom placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM}" show>
                <dx-button slot="target" buttontext="Bottom"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Bottom Start</p>
              <dx-tooltip tooltiptext="Bottom start placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START}" show>
                <dx-button slot="target" buttontext="Bottom Start"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Bottom End</p>
              <dx-tooltip tooltiptext="Bottom end placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END}" show>
                <dx-button slot="target" buttontext="Bottom End"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Left</p>
              <dx-tooltip tooltiptext="Left placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_LEFT}" show>
                <dx-button slot="target" buttontext="Left"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Left Start</p>
              <dx-tooltip tooltiptext="Left start placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_LEFT_START}" show>
                <dx-button slot="target" buttontext="Left Start"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Left End</p>
              <dx-tooltip tooltiptext="Left end placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_LEFT_END}" show>
                <dx-button slot="target" buttontext="Left End"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Right</p>
              <dx-tooltip tooltiptext="Right placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT}" show>
                <dx-button slot="target" buttontext="Right"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Right Start</p>
              <dx-tooltip tooltiptext="Right start placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_START}" show>
                <dx-button slot="target" buttontext="Right Start"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Right End</p>
              <dx-tooltip tooltiptext="Right end placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_END}" show>
                <dx-button slot="target" buttontext="Right End"></dx-button>
              </dx-tooltip>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Tooltip Sizes</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Small (Default)</p>
              <dx-tooltip tooltiptext="Small tooltip size" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" tooltipSize="\${TOOLTIP_VARIANT.TOOLTIP_SMALL}" show>
                <dx-button slot="target" buttontext="Small Tooltip"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Medium</p>
              <dx-tooltip tooltiptext="Medium tooltip size" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" tooltipSize="\${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}" show>
                <dx-button slot="target" buttontext="Medium Tooltip"></dx-button>
              </dx-tooltip>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Tooltip Types</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Single Line</p>
              <dx-tooltip tooltiptext="This is a single line tooltip that stays on one line" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" tooltipType="\${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}" show>
                <dx-button slot="target" buttontext="Single Line"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Multi Line</p>
              <dx-tooltip
                tooltiptext="This is a multi-line tooltip that can wrap text across multiple lines when it exceeds the maximum width"
                placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}"
                tooltipType="\${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}"
                show
              >
                <dx-button slot="target" buttontext="Multi Line"></dx-button>
              </dx-tooltip>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Custom Styling</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Custom Gap (20px)</p>
              <dx-tooltip tooltiptext="Tooltip with 20px gap" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" .gap=\${20} show>
                <dx-button slot="target" buttontext="Large Gap"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Minimum Width (200px)</p>
              <dx-tooltip tooltiptext="Wide tooltip" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" .minimumWidth=\${200} show>
                <dx-button slot="target" buttontext="Wide Tooltip"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Multi-line Max Width (150px)</p>
              <dx-tooltip
                tooltiptext="This tooltip has a narrow max width so it wraps sooner"
                placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}"
                tooltipType="\${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}"
                .multiLineMaxWidth=\${150}
                show
              >
                <dx-button slot="target" buttontext="Narrow Wrap"></dx-button>
              </dx-tooltip>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">RTL Support</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">LTR (Default)</p>
              <dx-tooltip tooltiptext="Left to right text direction" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" show>
                <dx-button slot="target" buttontext="LTR Tooltip"></dx-button>
              </dx-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">RTL</p>
              <dx-tooltip tooltiptext="مرحبا بك في التلميح" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" ?isRTL=\${true} show>
                <dx-button slot="target" buttontext="RTL Tooltip"></dx-button>
              </dx-tooltip>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Interactive (Hover to Show)</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <dx-tooltip tooltiptext="Hover over me to see the tooltip" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}">
              <dx-button slot="target" buttontext="Hover Me"></dx-button>
            </dx-tooltip>
            
            <dx-tooltip tooltiptext="This tooltip appears on hover" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT}">
              <button slot="target" style="padding: 8px 16px; cursor: pointer;">Custom Target</button>
            </dx-tooltip>
            
            <dx-tooltip tooltiptext="Works with any element" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM}">
              <span slot="target" style="padding: 8px; border: 1px solid #ccc; cursor: help;">ⓘ Info Icon</span>
            </dx-tooltip>
          </div>
        </div>
      </div>
    \`;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all tooltip configurations and features. Demonstrates all 12 placement positions (top, bottom, left, right with start/end variants), ' + '2 size variants (small, medium), 2 text types (single-line, multi-line), custom styling options (gap, minimum width, max width for wrapping), ' + 'RTL text direction support, and interactive hover behavior with various target elements. ' + 'Most tooltips shown with show=true for visualization; interactive section demonstrates hover behavior. ' + 'Total of 25+ tooltip configurations highlighting the complete feature set.'
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(r=(x=l.parameters)==null?void 0:x.docs)==null?void 0:r.source}}};const b=["Default","AllStates"];export{l as AllStates,n as Default,b as __namedExportsOrder,v as default};
