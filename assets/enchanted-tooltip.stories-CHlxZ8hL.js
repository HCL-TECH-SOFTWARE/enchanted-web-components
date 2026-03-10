import{C as t,s as e,u as d}from"./tags-xkLHt5Ez.js";import"./enchanted-tooltip-BnZnnWxC.js";import"./enchanted-button-CPwlhnNb.js";import{Q as o,R as T,T as i}from"./cssClassEnums-WDBe4U61.js";import"./iframe-C32rrkgB.js";import"./preload-helper-C1FmrZbK.js";import"./state-BMB52Uli.js";import"./localization-BszdroIW.js";import"./keyboardEventKeys-BnoN8uA3.js";const P={title:"Feedback/enchanted-tooltip",tags:["autodocs"],argTypes:{tooltiptext:{control:{type:"text"},description:"Text content displayed in the tooltip. Provides contextual information or help text when hovering over the target element.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},placement:{control:{type:"select"},options:[i.TOOLTIP_TOP,i.TOOLTIP_BOTTOM,i.TOOLTIP_LEFT,i.TOOLTIP_RIGHT,i.TOOLTIP_TOP_START,i.TOOLTIP_TOP_END,i.TOOLTIP_BOTTOM_START,i.TOOLTIP_BOTTOM_END,i.TOOLTIP_LEFT_START,i.TOOLTIP_LEFT_END,i.TOOLTIP_RIGHT_START,i.TOOLTIP_RIGHT_END],description:"Tooltip placement relative to target element. Supports 12 positions: top, bottom, left, right, and start/end variants for each. Automatically adjusts if constrained by viewport.",table:{category:"Layout",type:{summary:"TOOLTIP_PLACEMENT"},defaultValue:{summary:i.TOOLTIP_BOTTOM}}},tooltipSize:{control:{type:"radio"},options:[T.TOOLTIP_SMALL,T.TOOLTIP_MEDIUM],description:"Size variant of the tooltip. Options: tooltip-small (compact) or tooltip-medium (larger padding and text). Affects tooltip dimensions and padding.",table:{category:"Layout",type:{summary:"TOOLTIP_VARIANT"},defaultValue:{summary:T.TOOLTIP_SMALL}}},tooltipType:{control:{type:"radio"},options:[o.TOOLTIP_SINGLE_LINE,o.TOOLTIP_MULTI_LINE],description:"Tooltip type controlling text wrapping. Single-line keeps text on one line; multi-line allows wrapping with configurable max width.",table:{category:"Layout",type:{summary:"TOOLTIP_TYPE"},defaultValue:{summary:o.TOOLTIP_SINGLE_LINE}}},show:{control:{type:"boolean"},description:"Controls tooltip visibility state. When true, tooltip is always visible (useful for testing/debugging). When false, shows on hover/focus.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},gap:{control:{type:"number"},description:"Gap in pixels between tooltip and target element. Provides visual separation. Default is 4px.",table:{category:"Styling",type:{summary:"number"},defaultValue:{summary:"4"}}},multiLineMaxWidth:{control:{type:"number"},description:"Maximum width in pixels for multi-line tooltips. Controls where text wraps. Only applies when tooltipType is TOOLTIP_MULTI_LINE. Default is 300px.",table:{category:"Styling",type:{summary:"number"},defaultValue:{summary:"300"}}},viewportPadding:{control:{type:"number"},description:"Padding in pixels from viewport edges. Ensures tooltip stays within viewport bounds with spacing. Default is 4px.",table:{category:"Styling",type:{summary:"number"},defaultValue:{summary:"4"}}},minimumWidth:{control:{type:"number"},description:"Minimum width in pixels for the tooltip. Ensures tooltip meets minimum size requirements. Default is 0 (no minimum).",table:{category:"Styling",type:{summary:"number"},defaultValue:{summary:"0"}}},isRTL:{control:{type:"boolean"},description:"Enables right-to-left text direction for the tooltip content. Affects text alignment and layout for RTL languages.",table:{category:"Localization",type:{summary:"boolean"},defaultValue:{summary:"false"}}}},args:{tooltiptext:"Tooltip text",placement:i.TOOLTIP_TOP,tooltipSize:T.TOOLTIP_SMALL,tooltipType:o.TOOLTIP_SINGLE_LINE,show:!1,gap:4,multiLineMaxWidth:300,viewportPadding:4,minimumWidth:0,isRTL:!1},parameters:{docs:{description:{component:"Tooltip component for displaying contextual information on hover or focus. Features 12 placement options with automatic viewport adjustment, two size variants (small, medium), single-line and multi-line text support, and customizable styling. Supports RTL text direction, configurable gaps and widths, and keyboard accessibility. Uses slots for flexible target elements and automatically positions based on available viewport space."}}},render:n=>d`
      <${t}
        tooltiptext="${n.tooltiptext}"
        placement="${n.placement}"
        tooltipSize="${n.tooltipSize}"
        tooltipType="${n.tooltipType}"
        ?show=${n.show}
        .gap=${n.gap}
        .multiLineMaxWidth=${n.multiLineMaxWidth}
        .viewportPadding=${n.viewportPadding}
        .minimumWidth=${n.minimumWidth}
        ?isRTL=${n.isRTL}
      >
        <${e} slot="target" buttontext="Show Tooltip"></${e}>
      </${t}>
    `},l={},p={render:()=>d`
      <div style="display: flex; flex-direction: column; gap: 60px; padding: 40px;">
        <div>
          <h3 style="margin: 0 0 20px 0;">Tooltip Placements (12 Positions)</h3>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; place-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Top</p>
              <${t} tooltiptext="Top placement" placement="${i.TOOLTIP_TOP}" show>
                <${e} slot="target" buttontext="Top"></${e}>
              </${t}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Top Start</p>
              <${t} tooltiptext="Top start placement" placement="${i.TOOLTIP_TOP_START}" show>
                <${e} slot="target" buttontext="Top Start"></${e}>
              </${t}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Top End</p>
              <${t} tooltiptext="Top end placement" placement="${i.TOOLTIP_TOP_END}" show>
                <${e} slot="target" buttontext="Top End"></${e}>
              </${t}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Bottom</p>
              <${t} tooltiptext="Bottom placement" placement="${i.TOOLTIP_BOTTOM}" show>
                <${e} slot="target" buttontext="Bottom"></${e}>
              </${t}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Bottom Start</p>
              <${t} tooltiptext="Bottom start placement" placement="${i.TOOLTIP_BOTTOM_START}" show>
                <${e} slot="target" buttontext="Bottom Start"></${e}>
              </${t}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Bottom End</p>
              <${t} tooltiptext="Bottom end placement" placement="${i.TOOLTIP_BOTTOM_END}" show>
                <${e} slot="target" buttontext="Bottom End"></${e}>
              </${t}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Left</p>
              <${t} tooltiptext="Left placement" placement="${i.TOOLTIP_LEFT}" show>
                <${e} slot="target" buttontext="Left"></${e}>
              </${t}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Left Start</p>
              <${t} tooltiptext="Left start placement" placement="${i.TOOLTIP_LEFT_START}" show>
                <${e} slot="target" buttontext="Left Start"></${e}>
              </${t}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Left End</p>
              <${t} tooltiptext="Left end placement" placement="${i.TOOLTIP_LEFT_END}" show>
                <${e} slot="target" buttontext="Left End"></${e}>
              </${t}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Right</p>
              <${t} tooltiptext="Right placement" placement="${i.TOOLTIP_RIGHT}" show>
                <${e} slot="target" buttontext="Right"></${e}>
              </${t}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Right Start</p>
              <${t} tooltiptext="Right start placement" placement="${i.TOOLTIP_RIGHT_START}" show>
                <${e} slot="target" buttontext="Right Start"></${e}>
              </${t}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Right End</p>
              <${t} tooltiptext="Right end placement" placement="${i.TOOLTIP_RIGHT_END}" show>
                <${e} slot="target" buttontext="Right End"></${e}>
              </${t}>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Tooltip Sizes</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Small (Default)</p>
              <${t} tooltiptext="Small tooltip size" placement="${i.TOOLTIP_TOP}" tooltipSize="${T.TOOLTIP_SMALL}" show>
                <${e} slot="target" buttontext="Small Tooltip"></${e}>
              </${t}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Medium</p>
              <${t} tooltiptext="Medium tooltip size" placement="${i.TOOLTIP_TOP}" tooltipSize="${T.TOOLTIP_MEDIUM}" show>
                <${e} slot="target" buttontext="Medium Tooltip"></${e}>
              </${t}>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Tooltip Types</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Single Line</p>
              <${t} tooltiptext="This is a single line tooltip that stays on one line" placement="${i.TOOLTIP_TOP}" 
                tooltipType="${o.TOOLTIP_SINGLE_LINE}" show>
                <${e} slot="target" buttontext="Single Line"></${e}>
              </${t}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Multi Line</p>
              <${t}
                tooltiptext="This is a multi-line tooltip that can wrap text across multiple lines when it exceeds the maximum width"
                placement="${i.TOOLTIP_TOP}"
                tooltipType="${o.TOOLTIP_MULTI_LINE}"
                show
              >
                <${e} slot="target" buttontext="Multi Line"></${e}>
              </${t}>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Custom Styling</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Custom Gap (20px)</p>
              <${t} tooltiptext="Tooltip with 20px gap" placement="${i.TOOLTIP_TOP}" .gap=${20} show>
                <${e} slot="target" buttontext="Large Gap"></${e}>
              </${t}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Minimum Width (200px)</p>
              <${t} tooltiptext="Wide tooltip" placement="${i.TOOLTIP_TOP}" .minimumWidth=${200} show>
                <${e} slot="target" buttontext="Wide Tooltip"></${e}>
              </${t}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Multi-line Max Width (150px)</p>
              <${t}
                tooltiptext="This tooltip has a narrow max width so it wraps sooner"
                placement="${i.TOOLTIP_TOP}"
                tooltipType="${o.TOOLTIP_MULTI_LINE}"
                .multiLineMaxWidth=${150}
                show
              >
                <${e} slot="target" buttontext="Narrow Wrap"></${e}>
              </${t}>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">RTL Support</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">LTR (Default)</p>
              <${t} tooltiptext="Left to right text direction" placement="${i.TOOLTIP_TOP}" show>
                <${e} slot="target" buttontext="LTR Tooltip"></${e}>
              </${t}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">RTL</p>
              <${t} tooltiptext="مرحبا بك في التلميح" placement="${i.TOOLTIP_TOP}" ?isRTL=${!0} show>
                <${e} slot="target" buttontext="RTL Tooltip"></${e}>
              </${t}>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Interactive (Hover to Show)</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <${t} tooltiptext="Hover over me to see the tooltip" placement="${i.TOOLTIP_TOP}">
              <${e} slot="target" buttontext="Hover Me"></${e}>
            </${t}>
            
            <${t} tooltiptext="This tooltip appears on hover" placement="${i.TOOLTIP_RIGHT}">
              <button slot="target" style="padding: 8px 16px; cursor: pointer;">Custom Target</button>
            </${t}>
            
            <${t} tooltiptext="Works with any element" placement="${i.TOOLTIP_BOTTOM}">
              <span slot="target" style="padding: 8px; border: 1px solid #ccc; cursor: help;">ⓘ Info Icon</span>
            </${t}>
          </div>
        </div>
      </div>
    `,parameters:{docs:{description:{story:"Comprehensive showcase of all tooltip configurations and features. Demonstrates all 12 placement positions (top, bottom, left, right with start/end variants), 2 size variants (small, medium), 2 text types (single-line, multi-line), custom styling options (gap, minimum width, max width for wrapping), RTL text direction support, and interactive hover behavior with various target elements. Most tooltips shown with show=true for visualization; interactive section demonstrates hover behavior. Total of 25+ tooltip configurations highlighting the complete feature set."}},controls:{disable:!0}}};var a,s,r;l.parameters={...l.parameters,docs:{...(a=l.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(r=(s=l.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var O,m,_;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; flex-direction: column; gap: 60px; padding: 40px;">
        <div>
          <h3 style="margin: 0 0 20px 0;">Tooltip Placements (12 Positions)</h3>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; place-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Top</p>
              <\${ENCHANTED_TOOLTIP_TAG} tooltiptext="Top placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" show>
                <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Top"></\${ENCHANTED_BUTTON_TAG}>
              </\${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Top Start</p>
              <\${ENCHANTED_TOOLTIP_TAG} tooltiptext="Top start placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP_START}" show>
                <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Top Start"></\${ENCHANTED_BUTTON_TAG}>
              </\${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Top End</p>
              <\${ENCHANTED_TOOLTIP_TAG} tooltiptext="Top end placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP_END}" show>
                <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Top End"></\${ENCHANTED_BUTTON_TAG}>
              </\${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Bottom</p>
              <\${ENCHANTED_TOOLTIP_TAG} tooltiptext="Bottom placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM}" show>
                <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Bottom"></\${ENCHANTED_BUTTON_TAG}>
              </\${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Bottom Start</p>
              <\${ENCHANTED_TOOLTIP_TAG} tooltiptext="Bottom start placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START}" show>
                <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Bottom Start"></\${ENCHANTED_BUTTON_TAG}>
              </\${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Bottom End</p>
              <\${ENCHANTED_TOOLTIP_TAG} tooltiptext="Bottom end placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END}" show>
                <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Bottom End"></\${ENCHANTED_BUTTON_TAG}>
              </\${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Left</p>
              <\${ENCHANTED_TOOLTIP_TAG} tooltiptext="Left placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_LEFT}" show>
                <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Left"></\${ENCHANTED_BUTTON_TAG}>
              </\${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Left Start</p>
              <\${ENCHANTED_TOOLTIP_TAG} tooltiptext="Left start placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_LEFT_START}" show>
                <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Left Start"></\${ENCHANTED_BUTTON_TAG}>
              </\${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Left End</p>
              <\${ENCHANTED_TOOLTIP_TAG} tooltiptext="Left end placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_LEFT_END}" show>
                <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Left End"></\${ENCHANTED_BUTTON_TAG}>
              </\${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Right</p>
              <\${ENCHANTED_TOOLTIP_TAG} tooltiptext="Right placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT}" show>
                <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Right"></\${ENCHANTED_BUTTON_TAG}>
              </\${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Right Start</p>
              <\${ENCHANTED_TOOLTIP_TAG} tooltiptext="Right start placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_START}" show>
                <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Right Start"></\${ENCHANTED_BUTTON_TAG}>
              </\${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600; font-size: 12px;">Right End</p>
              <\${ENCHANTED_TOOLTIP_TAG} tooltiptext="Right end placement" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_END}" show>
                <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Right End"></\${ENCHANTED_BUTTON_TAG}>
              </\${ENCHANTED_TOOLTIP_TAG}>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Tooltip Sizes</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Small (Default)</p>
              <\${ENCHANTED_TOOLTIP_TAG} tooltiptext="Small tooltip size" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" tooltipSize="\${TOOLTIP_VARIANT.TOOLTIP_SMALL}" show>
                <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Small Tooltip"></\${ENCHANTED_BUTTON_TAG}>
              </\${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Medium</p>
              <\${ENCHANTED_TOOLTIP_TAG} tooltiptext="Medium tooltip size" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" tooltipSize="\${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}" show>
                <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Medium Tooltip"></\${ENCHANTED_BUTTON_TAG}>
              </\${ENCHANTED_TOOLTIP_TAG}>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Tooltip Types</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Single Line</p>
              <\${ENCHANTED_TOOLTIP_TAG} tooltiptext="This is a single line tooltip that stays on one line" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" 
                tooltipType="\${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}" show>
                <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Single Line"></\${ENCHANTED_BUTTON_TAG}>
              </\${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Multi Line</p>
              <\${ENCHANTED_TOOLTIP_TAG}
                tooltiptext="This is a multi-line tooltip that can wrap text across multiple lines when it exceeds the maximum width"
                placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}"
                tooltipType="\${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}"
                show
              >
                <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Multi Line"></\${ENCHANTED_BUTTON_TAG}>
              </\${ENCHANTED_TOOLTIP_TAG}>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Custom Styling</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Custom Gap (20px)</p>
              <\${ENCHANTED_TOOLTIP_TAG} tooltiptext="Tooltip with 20px gap" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" .gap=\${20} show>
                <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Large Gap"></\${ENCHANTED_BUTTON_TAG}>
              </\${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Minimum Width (200px)</p>
              <\${ENCHANTED_TOOLTIP_TAG} tooltiptext="Wide tooltip" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" .minimumWidth=\${200} show>
                <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Wide Tooltip"></\${ENCHANTED_BUTTON_TAG}>
              </\${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Multi-line Max Width (150px)</p>
              <\${ENCHANTED_TOOLTIP_TAG}
                tooltiptext="This tooltip has a narrow max width so it wraps sooner"
                placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}"
                tooltipType="\${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}"
                .multiLineMaxWidth=\${150}
                show
              >
                <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Narrow Wrap"></\${ENCHANTED_BUTTON_TAG}>
              </\${ENCHANTED_TOOLTIP_TAG}>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">RTL Support</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">LTR (Default)</p>
              <\${ENCHANTED_TOOLTIP_TAG} tooltiptext="Left to right text direction" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" show>
                <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="LTR Tooltip"></\${ENCHANTED_BUTTON_TAG}>
              </\${ENCHANTED_TOOLTIP_TAG}>
            </div>
            
            <div style="text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">RTL</p>
              <\${ENCHANTED_TOOLTIP_TAG} tooltiptext="مرحبا بك في التلميح" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" ?isRTL=\${true} show>
                <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="RTL Tooltip"></\${ENCHANTED_BUTTON_TAG}>
              </\${ENCHANTED_TOOLTIP_TAG}>
            </div>
          </div>
        </div>

        <div>
          <h3 style="margin: 0 0 20px 0;">Interactive (Hover to Show)</h3>
          <div style="display: flex; gap: 40px; align-items: center;">
            <\${ENCHANTED_TOOLTIP_TAG} tooltiptext="Hover over me to see the tooltip" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_TOP}">
              <\${ENCHANTED_BUTTON_TAG} slot="target" buttontext="Hover Me"></\${ENCHANTED_BUTTON_TAG}>
            </\${ENCHANTED_TOOLTIP_TAG}>
            
            <\${ENCHANTED_TOOLTIP_TAG} tooltiptext="This tooltip appears on hover" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT}">
              <button slot="target" style="padding: 8px 16px; cursor: pointer;">Custom Target</button>
            </\${ENCHANTED_TOOLTIP_TAG}>
            
            <\${ENCHANTED_TOOLTIP_TAG} tooltiptext="Works with any element" placement="\${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM}">
              <span slot="target" style="padding: 8px; border: 1px solid #ccc; cursor: help;">ⓘ Info Icon</span>
            </\${ENCHANTED_TOOLTIP_TAG}>
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
}`,...(_=(m=p.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};const u=["Default","AllStates"];export{p as AllStates,l as Default,u as __namedExportsOrder,P as default};
