import{x as c}from"./iframe-I2cpem8U.js";import"./enchanted-tooltip-BfKWMRE3.js";import"./enchanted-button-bGeso_Ea.js";import{Q as n,R as o,T as t}from"./cssClassEnums-WDBe4U61.js";import"./preload-helper-C1FmrZbK.js";import"./enchanted-ac-base-element-CYtj5YlD.js";import"./state-0u-7W5Ce.js";import"./localization-D5pUJpuu.js";import"./keyboardEventKeys-BnoN8uA3.js";const b={title:"Feedback/enchanted-tooltip",tags:["autodocs"],argTypes:{tooltiptext:{control:{type:"text"},description:"Text content displayed in the tooltip. Provides contextual information or help text when hovering over the target element.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},placement:{control:{type:"select"},options:[t.TOOLTIP_TOP,t.TOOLTIP_BOTTOM,t.TOOLTIP_LEFT,t.TOOLTIP_RIGHT,t.TOOLTIP_TOP_START,t.TOOLTIP_TOP_END,t.TOOLTIP_BOTTOM_START,t.TOOLTIP_BOTTOM_END,t.TOOLTIP_LEFT_START,t.TOOLTIP_LEFT_END,t.TOOLTIP_RIGHT_START,t.TOOLTIP_RIGHT_END],description:"Tooltip placement relative to target element. Supports 12 positions: top, bottom, left, right, and start/end variants for each. Automatically adjusts if constrained by viewport.",table:{category:"Layout",type:{summary:"TOOLTIP_PLACEMENT"},defaultValue:{summary:t.TOOLTIP_BOTTOM}}},tooltipSize:{control:{type:"radio"},options:[o.TOOLTIP_SMALL,o.TOOLTIP_MEDIUM],description:"Size variant of the tooltip. Options: tooltip-small (compact) or tooltip-medium (larger padding and text). Affects tooltip dimensions and padding.",table:{category:"Layout",type:{summary:"TOOLTIP_VARIANT"},defaultValue:{summary:o.TOOLTIP_SMALL}}},tooltipType:{control:{type:"radio"},options:[n.TOOLTIP_SINGLE_LINE,n.TOOLTIP_MULTI_LINE],description:"Tooltip type controlling text wrapping. Single-line keeps text on one line; multi-line allows wrapping with configurable max width.",table:{category:"Layout",type:{summary:"TOOLTIP_TYPE"},defaultValue:{summary:n.TOOLTIP_SINGLE_LINE}}},show:{control:{type:"boolean"},description:"Controls tooltip visibility state. When true, tooltip is always visible (useful for testing/debugging). When false, shows on hover/focus.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},gap:{control:{type:"number"},description:"Gap in pixels between tooltip and target element. Provides visual separation. Default is 4px.",table:{category:"Styling",type:{summary:"number"},defaultValue:{summary:"4"}}},multiLineMaxWidth:{control:{type:"number"},description:"Maximum width in pixels for multi-line tooltips. Controls where text wraps. Only applies when tooltipType is TOOLTIP_MULTI_LINE. Default is 300px.",table:{category:"Styling",type:{summary:"number"},defaultValue:{summary:"300"}}},viewportPadding:{control:{type:"number"},description:"Padding in pixels from viewport edges. Ensures tooltip stays within viewport bounds with spacing. Default is 4px.",table:{category:"Styling",type:{summary:"number"},defaultValue:{summary:"4"}}},minimumWidth:{control:{type:"number"},description:"Minimum width in pixels for the tooltip. Ensures tooltip meets minimum size requirements. Default is 0 (no minimum).",table:{category:"Styling",type:{summary:"number"},defaultValue:{summary:"0"}}},isRTL:{control:{type:"boolean"},description:"Enables right-to-left text direction for the tooltip content. Affects text alignment and layout for RTL languages.",table:{category:"Localization",type:{summary:"boolean"},defaultValue:{summary:"false"}}}},args:{tooltiptext:"Tooltip text",placement:t.TOOLTIP_TOP,tooltipSize:o.TOOLTIP_SMALL,tooltipType:n.TOOLTIP_SINGLE_LINE,show:!1,gap:4,multiLineMaxWidth:300,viewportPadding:4,minimumWidth:0,isRTL:!1},parameters:{docs:{description:{component:"Tooltip component for displaying contextual information on hover or focus. Features 12 placement options with automatic viewport adjustment, two size variants (small, medium), single-line and multi-line text support, and customizable styling. Supports RTL text direction, configurable gaps and widths, and keyboard accessibility. Uses slots for flexible target elements and automatically positions based on available viewport space."}}},render:e=>c`
      <enchanted-tooltip
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
        <enchanted-button slot="target" buttontext="Show Tooltip"></enchanted-button>
      </enchanted-tooltip>
    `},i={},a={render:()=>c`
      <div style="display: flex; flex-direction: column; gap: 60px; padding: 40px;">
        <div>
          <h3 style="margin: 0 0 20px 0;">Tooltip Placements (12 Positions)</h3>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; place-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Top</p>
              <enchanted-tooltip tooltiptext="Top placement" placement="${t.TOOLTIP_TOP}" show>
                <enchanted-button slot="target" buttontext="Top"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Top Start</p>
              <enchanted-tooltip tooltiptext="Top start placement" placement="${t.TOOLTIP_TOP_START}" show>
                <enchanted-button slot="target" buttontext="Top Start"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Top End</p>
              <enchanted-tooltip tooltiptext="Top end placement" placement="${t.TOOLTIP_TOP_END}" show>
                <enchanted-button slot="target" buttontext="Top End"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Bottom</p>
              <enchanted-tooltip tooltiptext="Bottom placement" placement="${t.TOOLTIP_BOTTOM}" show>
                <enchanted-button slot="target" buttontext="Bottom"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Bottom Start</p>
              <enchanted-tooltip tooltiptext="Bottom start placement" placement="${t.TOOLTIP_BOTTOM_START}" show>
                <enchanted-button slot="target" buttontext="Bottom Start"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Bottom End</p>
              <enchanted-tooltip tooltiptext="Bottom end placement" placement="${t.TOOLTIP_BOTTOM_END}" show>
                <enchanted-button slot="target" buttontext="Bottom End"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Left</p>
              <enchanted-tooltip tooltiptext="Left placement" placement="${t.TOOLTIP_LEFT}" show>
                <enchanted-button slot="target" buttontext="Left"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Left Start</p>
              <enchanted-tooltip tooltiptext="Left start placement" placement="${t.TOOLTIP_LEFT_START}" show>
                <enchanted-button slot="target" buttontext="Left Start"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Left End</p>
              <enchanted-tooltip tooltiptext="Left end placement" placement="${t.TOOLTIP_LEFT_END}" show>
                <enchanted-button slot="target" buttontext="Left End"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Right</p>
              <enchanted-tooltip tooltiptext="Right placement" placement="${t.TOOLTIP_RIGHT}" show>
                <enchanted-button slot="target" buttontext="Right"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Right Start</p>
              <enchanted-tooltip tooltiptext="Right start placement" placement="${t.TOOLTIP_RIGHT_START}" show>
                <enchanted-button slot="target" buttontext="Right Start"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Right End</p>
              <enchanted-tooltip tooltiptext="Right end placement" placement="${t.TOOLTIP_RIGHT_END}" show>
                <enchanted-button slot="target" buttontext="Right End"></enchanted-button>
              </enchanted-tooltip>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Tooltip Sizes</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Small (Default)</p>
              <enchanted-tooltip tooltiptext="Small tooltip size" placement="${t.TOOLTIP_TOP}" tooltipSize="${o.TOOLTIP_SMALL}" show>
                <enchanted-button slot="target" buttontext="Small Tooltip"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Medium</p>
              <enchanted-tooltip tooltiptext="Medium tooltip size" placement="${t.TOOLTIP_TOP}" tooltipSize="${o.TOOLTIP_MEDIUM}" show>
                <enchanted-button slot="target" buttontext="Medium Tooltip"></enchanted-button>
              </enchanted-tooltip>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Tooltip Types</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Single Line</p>
              <enchanted-tooltip tooltiptext="This is a single line tooltip that stays on one line" placement="${t.TOOLTIP_TOP}" tooltipType="${n.TOOLTIP_SINGLE_LINE}" show>
                <enchanted-button slot="target" buttontext="Single Line"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Multi Line</p>
              <enchanted-tooltip
                tooltiptext="This is a multi-line tooltip that can wrap text across multiple lines when it exceeds the maximum width"
                placement="${t.TOOLTIP_TOP}"
                tooltipType="${n.TOOLTIP_MULTI_LINE}"
                show
              >
                <enchanted-button slot="target" buttontext="Multi Line"></enchanted-button>
              </enchanted-tooltip>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Custom Styling</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Custom Gap (20px)</p>
              <enchanted-tooltip tooltiptext="Tooltip with 20px gap" placement="${t.TOOLTIP_TOP}" .gap=${20} show>
                <enchanted-button slot="target" buttontext="Large Gap"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Minimum Width (200px)</p>
              <enchanted-tooltip tooltiptext="Wide tooltip" placement="${t.TOOLTIP_TOP}" .minimumWidth=${200} show>
                <enchanted-button slot="target" buttontext="Wide Tooltip"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Multi-line Max Width (150px)</p>
              <enchanted-tooltip
                tooltiptext="This tooltip has a narrow max width so it wraps sooner"
                placement="${t.TOOLTIP_TOP}"
                tooltipType="${n.TOOLTIP_MULTI_LINE}"
                .multiLineMaxWidth=${150}
                show
              >
                <enchanted-button slot="target" buttontext="Narrow Wrap"></enchanted-button>
              </enchanted-tooltip>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">RTL Support</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">LTR (Default)</p>
              <enchanted-tooltip tooltiptext="Left to right text direction" placement="${t.TOOLTIP_TOP}" show>
                <enchanted-button slot="target" buttontext="LTR Tooltip"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">RTL</p>
              <enchanted-tooltip tooltiptext="مرحبا بك في التلميح" placement="${t.TOOLTIP_TOP}" ?isRTL=${!0} show>
                <enchanted-button slot="target" buttontext="RTL Tooltip"></enchanted-button>
              </enchanted-tooltip>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Interactive (Hover to Show)</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <enchanted-tooltip tooltiptext="Hover over me to see the tooltip" placement="${t.TOOLTIP_TOP}">
              <enchanted-button slot="target" buttontext="Hover Me"></enchanted-button>
            </enchanted-tooltip>
            
            <enchanted-tooltip tooltiptext="This tooltip appears on hover" placement="${t.TOOLTIP_RIGHT}">
              <button slot="target" style="padding: 8px 16px; cursor: pointer;">Custom Target</button>
            </enchanted-tooltip>
            
            <enchanted-tooltip tooltiptext="Works with any element" placement="${t.TOOLTIP_BOTTOM}">
              <span slot="target" style="padding: 8px; border: 1px solid #ccc; cursor: help;">ⓘ Info Icon</span>
            </enchanted-tooltip>
          </div>
        </div>
      </div>
    `,parameters:{docs:{description:{story:"Comprehensive showcase of all tooltip configurations and features. Demonstrates all 12 placement positions (top, bottom, left, right with start/end variants), 2 size variants (small, medium), 2 text types (single-line, multi-line), custom styling options (gap, minimum width, max width for wrapping), RTL text direction support, and interactive hover behavior with various target elements. Most tooltips shown with show=true for visualization; interactive section demonstrates hover behavior. Total of 25+ tooltip configurations highlighting the complete feature set."}},controls:{disable:!0}}};var l,p,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(s=(p=i.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};var d,r,T;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; flex-direction: column; gap: 60px; padding: 40px;">
        <div>
          <h3 style="margin: 0 0 20px 0;">Tooltip Placements (12 Positions)</h3>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; place-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Top</p>
              <enchanted-tooltip tooltiptext="Top placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" show>
                <enchanted-button slot="target" buttontext="Top"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Top Start</p>
              <enchanted-tooltip tooltiptext="Top start placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP_START}" show>
                <enchanted-button slot="target" buttontext="Top Start"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Top End</p>
              <enchanted-tooltip tooltiptext="Top end placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP_END}" show>
                <enchanted-button slot="target" buttontext="Top End"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Bottom</p>
              <enchanted-tooltip tooltiptext="Bottom placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM}" show>
                <enchanted-button slot="target" buttontext="Bottom"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Bottom Start</p>
              <enchanted-tooltip tooltiptext="Bottom start placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START}" show>
                <enchanted-button slot="target" buttontext="Bottom Start"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Bottom End</p>
              <enchanted-tooltip tooltiptext="Bottom end placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END}" show>
                <enchanted-button slot="target" buttontext="Bottom End"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Left</p>
              <enchanted-tooltip tooltiptext="Left placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_LEFT}" show>
                <enchanted-button slot="target" buttontext="Left"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Left Start</p>
              <enchanted-tooltip tooltiptext="Left start placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_LEFT_START}" show>
                <enchanted-button slot="target" buttontext="Left Start"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Left End</p>
              <enchanted-tooltip tooltiptext="Left end placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_LEFT_END}" show>
                <enchanted-button slot="target" buttontext="Left End"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Right</p>
              <enchanted-tooltip tooltiptext="Right placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT}" show>
                <enchanted-button slot="target" buttontext="Right"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Right Start</p>
              <enchanted-tooltip tooltiptext="Right start placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_START}" show>
                <enchanted-button slot="target" buttontext="Right Start"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Right End</p>
              <enchanted-tooltip tooltiptext="Right end placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_END}" show>
                <enchanted-button slot="target" buttontext="Right End"></enchanted-button>
              </enchanted-tooltip>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Tooltip Sizes</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Small (Default)</p>
              <enchanted-tooltip tooltiptext="Small tooltip size" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" tooltipSize="\${TOOLTIP_VARIANT.TOOLTIP_SMALL}" show>
                <enchanted-button slot="target" buttontext="Small Tooltip"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Medium</p>
              <enchanted-tooltip tooltiptext="Medium tooltip size" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" tooltipSize="\${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}" show>
                <enchanted-button slot="target" buttontext="Medium Tooltip"></enchanted-button>
              </enchanted-tooltip>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Tooltip Types</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Single Line</p>
              <enchanted-tooltip tooltiptext="This is a single line tooltip that stays on one line" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" tooltipType="\${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}" show>
                <enchanted-button slot="target" buttontext="Single Line"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Multi Line</p>
              <enchanted-tooltip
                tooltiptext="This is a multi-line tooltip that can wrap text across multiple lines when it exceeds the maximum width"
                placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}"
                tooltipType="\${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}"
                show
              >
                <enchanted-button slot="target" buttontext="Multi Line"></enchanted-button>
              </enchanted-tooltip>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Custom Styling</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Custom Gap (20px)</p>
              <enchanted-tooltip tooltiptext="Tooltip with 20px gap" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" .gap=\${20} show>
                <enchanted-button slot="target" buttontext="Large Gap"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Minimum Width (200px)</p>
              <enchanted-tooltip tooltiptext="Wide tooltip" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" .minimumWidth=\${200} show>
                <enchanted-button slot="target" buttontext="Wide Tooltip"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Multi-line Max Width (150px)</p>
              <enchanted-tooltip
                tooltiptext="This tooltip has a narrow max width so it wraps sooner"
                placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}"
                tooltipType="\${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}"
                .multiLineMaxWidth=\${150}
                show
              >
                <enchanted-button slot="target" buttontext="Narrow Wrap"></enchanted-button>
              </enchanted-tooltip>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">RTL Support</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">LTR (Default)</p>
              <enchanted-tooltip tooltiptext="Left to right text direction" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" show>
                <enchanted-button slot="target" buttontext="LTR Tooltip"></enchanted-button>
              </enchanted-tooltip>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">RTL</p>
              <enchanted-tooltip tooltiptext="مرحبا بك في التلميح" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" ?isRTL=\${true} show>
                <enchanted-button slot="target" buttontext="RTL Tooltip"></enchanted-button>
              </enchanted-tooltip>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Interactive (Hover to Show)</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <enchanted-tooltip tooltiptext="Hover over me to see the tooltip" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}">
              <enchanted-button slot="target" buttontext="Hover Me"></enchanted-button>
            </enchanted-tooltip>
            
            <enchanted-tooltip tooltiptext="This tooltip appears on hover" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT}">
              <button slot="target" style="padding: 8px 16px; cursor: pointer;">Custom Target</button>
            </enchanted-tooltip>
            
            <enchanted-tooltip tooltiptext="Works with any element" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM}">
              <span slot="target" style="padding: 8px; border: 1px solid #ccc; cursor: help;">ⓘ Info Icon</span>
            </enchanted-tooltip>
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
}`,...(T=(r=a.parameters)==null?void 0:r.docs)==null?void 0:T.source}}};const P=["Default","AllStates"];export{a as AllStates,i as Default,P as __namedExportsOrder,b as default};
