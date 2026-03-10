import{v as e,u as R}from"./tags-xkLHt5Ez.js";import"./enchanted-circular-progress-4mDdA3Yq.js";import"./iframe-C32rrkgB.js";import"./preload-helper-C1FmrZbK.js";import"./cssClassEnums-WDBe4U61.js";const A={title:"Feedback/enchanted-circular-progress",component:"enchanted-circular-progress",tags:["autodocs"],argTypes:{size:{control:{type:"number",min:20,max:200,step:1},description:"Size of the circular progress in pixels",defaultValue:40},strokewidth:{control:{type:"number",min:1,max:20,step:.1},description:"Stroke width of the progress circle in pixels",defaultValue:3.6},trackcolor:{control:{type:"color"},description:"Color of the track (background circle)",defaultValue:"#D6D6D6"},progresscolor:{control:{type:"color"},description:"Color of the progress indicator",defaultValue:"#0550DC"},disableShrink:{control:{type:"boolean"},description:"Disables the shrink animation for high CPU scenarios",defaultValue:!1},label:{control:{type:"text"},description:"Label text to display next to the progress indicator",defaultValue:"Thinking..."},showLabel:{control:{type:"boolean"},description:"Show or hide the label text",defaultValue:!1}},args:{size:40,strokewidth:3.6,trackcolor:"#D6D6D6",progresscolor:"#0550DC",disableShrink:!1,label:"Thinking...",showLabel:!1},parameters:{docs:{description:{component:"Enchanted Circular Progress component - Indeterminate variant. Displays an animated circular progress indicator with separate track and progress colors, inspired by Material UI CircularProgress. Features smooth rotation and dash animations. Use disable-shrink for high CPU load scenarios."}}}},n={render:r=>R`
      <${e}
        .size=${r.size}
        .strokewidth=${r.strokewidth}
        .trackcolor=${r.trackcolor}
        .progresscolor=${r.progresscolor}
        ?disable-shrink=${r.disableShrink}
        .label=${r.label}
        ?show-label=${r.showLabel}
      ></${e}>
    `},i={render:()=>{const r=["display: grid","grid-template-columns: repeat(4, 1fr)","gap: 48px","padding: 40px","min-height: 600px","justify-items: center","align-items: center"].join("; ")+";",t=["display: flex","flex-direction: column","align-items: center","gap: 16px","min-height: 140px"].join("; ")+";",s=["font-weight: 600","font-size: 14px","color: #333","text-align: center"].join("; ")+";",o=["grid-column: 1 / -1","font-weight: 700","font-size: 16px","color: #0550DC","margin-top: 20px","margin-bottom: -20px"].join("; ")+";";return R`
      <div style="${r}">
        <!-- Thinking State with Label -->
        <h3 style="${o}">Thinking State with Label</h3>
        <div style="${t}">
          <span style="${s}">Thinking...(24px)</span>
          <${e} size="24" strokewidth="2.2" trackcolor="#D6D6D6" progresscolor="#0550DC" label="Thinking..." show-label="true"></${e}>
        </div>
        <div style="${t}">
          <span style="${s}">Thinking...(40px)</span>
          <${e} size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC" label="Thinking..." show-label="true"></${e}>
        </div>
        <div style="${t}">
          <span style="${s}">Custom: Processing...</span>
          <${e} size="24" strokewidth="2.2" trackcolor="#D6D6D6" progresscolor="#0550DC" label="Processing..." show-label="true"></${e}>
        </div>
        <div style="${t}">
          <span style="${s}">Custom: Loading...</span>
          <${e} size="24" strokewidth="2.2" trackcolor="#D6D6D6" progresscolor="#0550DC" label="Loading..." show-label="true"></${e}>
        </div>

        <!-- Size Variations -->
        <h3 style="${o}">Size Variations</h3>
        <div style="${t}">
          <span style="${s}">Extra Small (20px)</span>
          <${e} size="20" strokewidth="2" trackcolor="#D6D6D6" progresscolor="#0550DC"></${e}>
        </div>
        <div style="${t}">
          <span style="${s}">Small (30px)</span>
          <${e} size="30" strokewidth="3" trackcolor="#D6D6D6" progresscolor="#0550DC"></${e}>
        </div>
        <div style="${t}">
          <span style="${s}">Default (40px)</span>
          <${e} size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC"></${e}>
        </div>
        <div style="${t}">
          <span style="${s}">Medium (60px)</span>
          <${e} size="60" strokewidth="4" trackcolor="#D6D6D6" progresscolor="#0550DC"></${e}>
        </div>
        <div style="${t}">
          <span style="${s}">Large (80px)</span>
          <${e} size="80" strokewidth="5" trackcolor="#D6D6D6" progresscolor="#0550DC"></${e}>
        </div>
        <div style="${t}">
          <span style="${s}">Extra Large (120px)</span>
          <${e} size="120" strokewidth="6" trackcolor="#D6D6D6" progresscolor="#0550DC"></${e}>
        </div>

        <!-- Stroke Width Variations -->
        <h3 style="${o}">Stroke Width Variations</h3>
        <div style="${t}">
          <span style="${s}">Very Thin (1px)</span>
          <${e} size="40" strokewidth="1" trackcolor="#D6D6D6" progresscolor="#0550DC"></${e}>
        </div>
        <div style="${t}">
          <span style="${s}">Thin (2px)</span>
          <${e} size="40" strokewidth="2" trackcolor="#D6D6D6" progresscolor="#0550DC"></${e}>
        </div>
        <div style="${t}">
          <span style="${s}">Default (3.6px)</span>
          <${e} size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC"></${e}>
        </div>
        <div style="${t}">
          <span style="${s}">Thick (6px)</span>
          <${e} size="40" strokewidth="6" trackcolor="#D6D6D6" progresscolor="#0550DC"></${e}>
        </div>
        <div style="${t}">
          <span style="${s}">Very Thick (10px)</span>
          <${e} size="40" strokewidth="10" trackcolor="#D6D6D6" progresscolor="#0550DC"></${e}>
        </div>
        <div style="${t}">
          <span style="${s}">Extra Thick (15px)</span>
          <${e} size="40" strokewidth="15" trackcolor="#D6D6D6" progresscolor="#0550DC"></${e}>
        </div>

        <!-- Color Variations -->
        <h3 style="${o}">Color Variations</h3>
        <div style="${t}">
          <span style="${s}">Default Blue</span>
          <${e} size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC"></${e}>
        </div>
        <div style="${t}">
          <span style="${s}">Success Green</span>
          <${e} size="40" strokewidth="3.6" trackcolor="#E8F5E9" progresscolor="#2E7D32"></${e}>
        </div>
        <div style="${t}">
          <span style="${s}">Warning Orange</span>
          <${e} size="40" strokewidth="3.6" trackcolor="#FFF3E0" progresscolor="#F57C00"></${e}>
        </div>
        <div style="${t}">
          <span style="${s}">Error Red</span>
          <${e} size="40" strokewidth="3.6" trackcolor="#FFE5E5" progresscolor="#e61010"></${e}>
        </div>
        <div style="${t}">
          <span style="${s}">Purple</span>
          <${e} size="40" strokewidth="3.6" trackcolor="#F3E5F5" progresscolor="#7B1FA2"></${e}>
        </div>
        <div style="${t}">
          <span style="${s}">Dark Theme</span>
          <${e} size="40" strokewidth="3.6" trackcolor="#424242" progresscolor="#90CAF9"></${e}>
        </div>
        <div style="${t}">
          <span style="${s}">High Contrast</span>
          <${e} size="40" strokewidth="3.6" trackcolor="#000000" progresscolor="#FFFF00"></${e}>
        </div>
        <div style="${t}">
          <span style="${s}">Monochrome</span>
          <${e} size="40" strokewidth="3.6" trackcolor="#E0E0E0" progresscolor="#424242"></${e}>
        </div>

        <!-- Animation States -->
        <h3 style="${o}">Animation States</h3>
        <div style="${t}">
          <span style="${s}">Default Animation</span>
          <${e} size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC"></${e}>
        </div>
        <div style="${t}">
          <span style="${s}">Disable Shrink</span>
          <${e} size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC" disable-shrink></${e}>
        </div>
        <div style="${t}">
          <span style="${s}">Large + Disable Shrink</span>
          <${e} size="80" strokewidth="5" trackcolor="#D6D6D6" progresscolor="#0550DC" disable-shrink></${e}>
        </div>

        <!-- Edge Cases -->
        <h3 style="${o}">Edge Cases</h3>
        <div style="${t}">
          <span style="${s}">Minimum Size (20px)</span>
          <${e} size="20" strokewidth="2" trackcolor="#D6D6D6" progresscolor="#0550DC"></${e}>
        </div>
        <div style="${t}">
          <span style="${s}">Maximum Stroke<br/>(Half Radius)</span>
          <${e} size="60" strokewidth="20" trackcolor="#D6D6D6" progresscolor="#0550DC"></${e}>
        </div>
        <div style="${t}">
          <span style="${s}">Transparent Track</span>
          <${e} size="40" strokewidth="3.6" trackcolor="transparent" progresscolor="#0550DC"></${e}>
        </div>
        <div style="${t}">
          <span style="${s}">Semi-transparent</span>
          <${e} size="40" strokewidth="3.6" trackcolor="rgba(214, 214, 214, 0.3)" progresscolor="rgba(5, 80, 220, 0.7)"></${e}>
        </div>
      </div>
    `},parameters:{docs:{description:{story:`Comprehensive showcase of all possible visual states and variations:

**Size Variations**: From extra small (20px) to extra large (120px) with proportional stroke widths.

**Stroke Width Variations**: From very thin (1px) to extra thick (15px) strokes.

**Color Variations**: Including default, success, warning, error, purple themes, dark theme, high contrast, and monochrome.

**Animation States**: Default animation with shrink effect vs. disable-shrink mode (useful for high CPU scenarios).

**Edge Cases**: Minimum size, maximum stroke width, transparent track, and semi-transparent colors.`}},controls:{disable:!0}}};var l,a,c,p,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <\${ENCHANTED_CIRCULAR_PROGRESS_TAG}
        .size=\${args.size}
        .strokewidth=\${args.strokewidth}
        .trackcolor=\${args.trackcolor}
        .progresscolor=\${args.progresscolor}
        ?disable-shrink=\${args.disableShrink}
        .label=\${args.label}
        ?show-label=\${args.showLabel}
      ></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
    \`;
  }
}`,...(c=(a=n.parameters)==null?void 0:a.docs)==null?void 0:c.source},description:{story:`Interactive enchanted circular progress component with controls for size, colors, and shrink animation.

Use the controls panel to:
- Adjust the size (20-200px)
- Modify stroke width
- Change the progress color
- Customize the track (background) color
- Toggle the shrink animation for performance optimization
- Show/hide and customize the label text`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.description}}};var C,$,D;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const gridStyle = ['display: grid', 'grid-template-columns: repeat(4, 1fr)', 'gap: 48px', 'padding: 40px', 'min-height: 600px', 'justify-items: center', 'align-items: center'].join('; ') + ';';
    const itemContainerStyle = ['display: flex', 'flex-direction: column', 'align-items: center', 'gap: 16px', 'min-height: 140px'].join('; ') + ';';
    const labelStyle = ['font-weight: 600', 'font-size: 14px', 'color: #333', 'text-align: center'].join('; ') + ';';
    const sectionHeaderStyle = ['grid-column: 1 / -1', 'font-weight: 700', 'font-size: 16px', 'color: #0550DC', 'margin-top: 20px', 'margin-bottom: -20px'].join('; ') + ';';
    return html\`
      <div style="\${gridStyle}">
        <!-- Thinking State with Label -->
        <h3 style="\${sectionHeaderStyle}">Thinking State with Label</h3>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Thinking...(24px)</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="24" strokewidth="2.2" trackcolor="#D6D6D6" progresscolor="#0550DC" label="Thinking..." show-label="true"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Thinking...(40px)</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC" label="Thinking..." show-label="true"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Custom: Processing...</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="24" strokewidth="2.2" trackcolor="#D6D6D6" progresscolor="#0550DC" label="Processing..." show-label="true"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Custom: Loading...</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="24" strokewidth="2.2" trackcolor="#D6D6D6" progresscolor="#0550DC" label="Loading..." show-label="true"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>

        <!-- Size Variations -->
        <h3 style="\${sectionHeaderStyle}">Size Variations</h3>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Extra Small (20px)</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="20" strokewidth="2" trackcolor="#D6D6D6" progresscolor="#0550DC"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Small (30px)</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="30" strokewidth="3" trackcolor="#D6D6D6" progresscolor="#0550DC"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Default (40px)</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Medium (60px)</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="60" strokewidth="4" trackcolor="#D6D6D6" progresscolor="#0550DC"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Large (80px)</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="80" strokewidth="5" trackcolor="#D6D6D6" progresscolor="#0550DC"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Extra Large (120px)</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="120" strokewidth="6" trackcolor="#D6D6D6" progresscolor="#0550DC"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>

        <!-- Stroke Width Variations -->
        <h3 style="\${sectionHeaderStyle}">Stroke Width Variations</h3>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Very Thin (1px)</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="40" strokewidth="1" trackcolor="#D6D6D6" progresscolor="#0550DC"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Thin (2px)</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="40" strokewidth="2" trackcolor="#D6D6D6" progresscolor="#0550DC"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Default (3.6px)</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Thick (6px)</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="40" strokewidth="6" trackcolor="#D6D6D6" progresscolor="#0550DC"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Very Thick (10px)</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="40" strokewidth="10" trackcolor="#D6D6D6" progresscolor="#0550DC"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Extra Thick (15px)</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="40" strokewidth="15" trackcolor="#D6D6D6" progresscolor="#0550DC"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>

        <!-- Color Variations -->
        <h3 style="\${sectionHeaderStyle}">Color Variations</h3>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Default Blue</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Success Green</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="40" strokewidth="3.6" trackcolor="#E8F5E9" progresscolor="#2E7D32"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Warning Orange</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="40" strokewidth="3.6" trackcolor="#FFF3E0" progresscolor="#F57C00"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Error Red</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="40" strokewidth="3.6" trackcolor="#FFE5E5" progresscolor="#e61010"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Purple</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="40" strokewidth="3.6" trackcolor="#F3E5F5" progresscolor="#7B1FA2"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Dark Theme</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="40" strokewidth="3.6" trackcolor="#424242" progresscolor="#90CAF9"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">High Contrast</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="40" strokewidth="3.6" trackcolor="#000000" progresscolor="#FFFF00"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Monochrome</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="40" strokewidth="3.6" trackcolor="#E0E0E0" progresscolor="#424242"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>

        <!-- Animation States -->
        <h3 style="\${sectionHeaderStyle}">Animation States</h3>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Default Animation</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Disable Shrink</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC" disable-shrink></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Large + Disable Shrink</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="80" strokewidth="5" trackcolor="#D6D6D6" progresscolor="#0550DC" disable-shrink></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>

        <!-- Edge Cases -->
        <h3 style="\${sectionHeaderStyle}">Edge Cases</h3>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Minimum Size (20px)</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="20" strokewidth="2" trackcolor="#D6D6D6" progresscolor="#0550DC"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Maximum Stroke<br/>(Half Radius)</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="60" strokewidth="20" trackcolor="#D6D6D6" progresscolor="#0550DC"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Transparent Track</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="40" strokewidth="3.6" trackcolor="transparent" progresscolor="#0550DC"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Semi-transparent</span>
          <\${ENCHANTED_CIRCULAR_PROGRESS_TAG} size="40" strokewidth="3.6" trackcolor="rgba(214, 214, 214, 0.3)" progresscolor="rgba(5, 80, 220, 0.7)"></\${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </div>
      </div>
    \`;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all possible visual states and variations:\\n\\n' + '**Size Variations**: From extra small (20px) to extra large (120px) with proportional stroke widths.\\n\\n' + '**Stroke Width Variations**: From very thin (1px) to extra thick (15px) strokes.\\n\\n' + '**Color Variations**: Including default, success, warning, error, purple themes, dark theme, high contrast, and monochrome.\\n\\n' + '**Animation States**: Default animation with shrink effect vs. disable-shrink mode (useful for high CPU scenarios).\\n\\n' + '**Edge Cases**: Minimum size, maximum stroke width, transparent track, and semi-transparent colors.'
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(D=($=i.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};const _=["Default","AllStates"];export{i as AllStates,n as Default,_ as __namedExportsOrder,A as default};
