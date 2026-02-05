import{x as y}from"./iframe-I2cpem8U.js";import"./enchanted-circular-progress-Baz1pzsK.js";import"./preload-helper-C1FmrZbK.js";import"./enchanted-ac-base-element-CYtj5YlD.js";import"./cssClassEnums-WDBe4U61.js";const v={title:"Feedback/enchanted-circular-progress",component:"enchanted-circular-progress",tags:["autodocs"],argTypes:{size:{control:{type:"number",min:20,max:200,step:1},description:"Size of the circular progress in pixels",defaultValue:40},strokewidth:{control:{type:"number",min:1,max:20,step:.1},description:"Stroke width of the progress circle in pixels",defaultValue:3.6},trackcolor:{control:{type:"color"},description:"Color of the track (background circle)",defaultValue:"#D6D6D6"},progresscolor:{control:{type:"color"},description:"Color of the progress indicator",defaultValue:"#0550DC"},disableShrink:{control:{type:"boolean"},description:"Disables the shrink animation for high CPU scenarios",defaultValue:!1},label:{control:{type:"text"},description:"Label text to display next to the progress indicator",defaultValue:"Thinking..."},showLabel:{control:{type:"boolean"},description:"Show or hide the label text",defaultValue:!1}},args:{size:40,strokewidth:3.6,trackcolor:"#D6D6D6",progresscolor:"#0550DC",disableShrink:!1,label:"Thinking...",showLabel:!1},parameters:{docs:{description:{component:"Enchanted Circular Progress component - Indeterminate variant. Displays an animated circular progress indicator with separate track and progress colors, inspired by Material UI CircularProgress. Features smooth rotation and dash animations. Use disable-shrink for high CPU load scenarios."}}}},o={render:s=>y`
      <enchanted-circular-progress
        .size=${s.size}
        .strokewidth=${s.strokewidth}
        .trackcolor=${s.trackcolor}
        .progresscolor=${s.progresscolor}
        ?disable-shrink=${s.disableShrink}
        .label=${s.label}
        ?show-label=${s.showLabel}
      ></enchanted-circular-progress>
    `},a={render:()=>{const s=["display: grid","grid-template-columns: repeat(4, 1fr)","gap: 48px","padding: 40px","min-height: 600px","justify-items: center","align-items: center"].join("; ")+";",e=["display: flex","flex-direction: column","align-items: center","gap: 16px","min-height: 140px"].join("; ")+";",r=["font-weight: 600","font-size: 14px","color: #333","text-align: center"].join("; ")+";",t=["grid-column: 1 / -1","font-weight: 700","font-size: 16px","color: #0550DC","margin-top: 20px","margin-bottom: -20px"].join("; ")+";";return y`
      <div style="${s}">
        <!-- Thinking State with Label -->
        <h3 style="${t}">Thinking State with Label</h3>
        <div style="${e}">
          <span style="${r}">Thinking...(24px)</span>
          <enchanted-circular-progress size="24" strokewidth="2.2" trackcolor="#D6D6D6" progresscolor="#0550DC" label="Thinking..." show-label="true"></enchanted-circular-progress>
        </div>
        <div style="${e}">
          <span style="${r}">Thinking...(40px)</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC" label="Thinking..." show-label="true"></enchanted-circular-progress>
        </div>
        <div style="${e}">
          <span style="${r}">Custom: Processing...</span>
          <enchanted-circular-progress size="24" strokewidth="2.2" trackcolor="#D6D6D6" progresscolor="#0550DC" label="Processing..." show-label="true"></enchanted-circular-progress>
        </div>
        <div style="${e}">
          <span style="${r}">Custom: Loading...</span>
          <enchanted-circular-progress size="24" strokewidth="2.2" trackcolor="#D6D6D6" progresscolor="#0550DC" label="Loading..." show-label="true"></enchanted-circular-progress>
        </div>

        <!-- Size Variations -->
        <h3 style="${t}">Size Variations</h3>
        <div style="${e}">
          <span style="${r}">Extra Small (20px)</span>
          <enchanted-circular-progress size="20" strokewidth="2" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="${e}">
          <span style="${r}">Small (30px)</span>
          <enchanted-circular-progress size="30" strokewidth="3" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="${e}">
          <span style="${r}">Default (40px)</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="${e}">
          <span style="${r}">Medium (60px)</span>
          <enchanted-circular-progress size="60" strokewidth="4" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="${e}">
          <span style="${r}">Large (80px)</span>
          <enchanted-circular-progress size="80" strokewidth="5" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="${e}">
          <span style="${r}">Extra Large (120px)</span>
          <enchanted-circular-progress size="120" strokewidth="6" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>

        <!-- Stroke Width Variations -->
        <h3 style="${t}">Stroke Width Variations</h3>
        <div style="${e}">
          <span style="${r}">Very Thin (1px)</span>
          <enchanted-circular-progress size="40" strokewidth="1" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="${e}">
          <span style="${r}">Thin (2px)</span>
          <enchanted-circular-progress size="40" strokewidth="2" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="${e}">
          <span style="${r}">Default (3.6px)</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="${e}">
          <span style="${r}">Thick (6px)</span>
          <enchanted-circular-progress size="40" strokewidth="6" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="${e}">
          <span style="${r}">Very Thick (10px)</span>
          <enchanted-circular-progress size="40" strokewidth="10" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="${e}">
          <span style="${r}">Extra Thick (15px)</span>
          <enchanted-circular-progress size="40" strokewidth="15" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>

        <!-- Color Variations -->
        <h3 style="${t}">Color Variations</h3>
        <div style="${e}">
          <span style="${r}">Default Blue</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="${e}">
          <span style="${r}">Success Green</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#E8F5E9" progresscolor="#2E7D32"></enchanted-circular-progress>
        </div>
        <div style="${e}">
          <span style="${r}">Warning Orange</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#FFF3E0" progresscolor="#F57C00"></enchanted-circular-progress>
        </div>
        <div style="${e}">
          <span style="${r}">Error Red</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#FFE5E5" progresscolor="#e61010"></enchanted-circular-progress>
        </div>
        <div style="${e}">
          <span style="${r}">Purple</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#F3E5F5" progresscolor="#7B1FA2"></enchanted-circular-progress>
        </div>
        <div style="${e}">
          <span style="${r}">Dark Theme</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#424242" progresscolor="#90CAF9"></enchanted-circular-progress>
        </div>
        <div style="${e}">
          <span style="${r}">High Contrast</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#000000" progresscolor="#FFFF00"></enchanted-circular-progress>
        </div>
        <div style="${e}">
          <span style="${r}">Monochrome</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#E0E0E0" progresscolor="#424242"></enchanted-circular-progress>
        </div>

        <!-- Animation States -->
        <h3 style="${t}">Animation States</h3>
        <div style="${e}">
          <span style="${r}">Default Animation</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="${e}">
          <span style="${r}">Disable Shrink</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC" disable-shrink></enchanted-circular-progress>
        </div>
        <div style="${e}">
          <span style="${r}">Large + Disable Shrink</span>
          <enchanted-circular-progress size="80" strokewidth="5" trackcolor="#D6D6D6" progresscolor="#0550DC" disable-shrink></enchanted-circular-progress>
        </div>

        <!-- Edge Cases -->
        <h3 style="${t}">Edge Cases</h3>
        <div style="${e}">
          <span style="${r}">Minimum Size (20px)</span>
          <enchanted-circular-progress size="20" strokewidth="2" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="${e}">
          <span style="${r}">Maximum Stroke<br/>(Half Radius)</span>
          <enchanted-circular-progress size="60" strokewidth="20" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="${e}">
          <span style="${r}">Transparent Track</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="transparent" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="${e}">
          <span style="${r}">Semi-transparent</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="rgba(214, 214, 214, 0.3)" progresscolor="rgba(5, 80, 220, 0.7)"></enchanted-circular-progress>
        </div>
      </div>
    `},parameters:{docs:{description:{story:`Comprehensive showcase of all possible visual states and variations:

**Size Variations**: From extra small (20px) to extra large (120px) with proportional stroke widths.

**Stroke Width Variations**: From very thin (1px) to extra thick (15px) strokes.

**Color Variations**: Including default, success, warning, error, purple themes, dark theme, high contrast, and monochrome.

**Animation States**: Default animation with shrink effect vs. disable-shrink mode (useful for high CPU scenarios).

**Edge Cases**: Minimum size, maximum stroke width, transparent track, and semi-transparent colors.`}},controls:{disable:!0}}};var i,n,l,c,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <enchanted-circular-progress
        .size=\${args.size}
        .strokewidth=\${args.strokewidth}
        .trackcolor=\${args.trackcolor}
        .progresscolor=\${args.progresscolor}
        ?disable-shrink=\${args.disableShrink}
        .label=\${args.label}
        ?show-label=\${args.showLabel}
      ></enchanted-circular-progress>
    \`;
  }
}`,...(l=(n=o.parameters)==null?void 0:n.docs)==null?void 0:l.source},description:{story:`Interactive enchanted circular progress component with controls for size, colors, and shrink animation.

Use the controls panel to:
- Adjust the size (20-200px)
- Modify stroke width
- Change the progress color
- Customize the track (background) color
- Toggle the shrink animation for performance optimization
- Show/hide and customize the label text`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.description}}};var d,h,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <enchanted-circular-progress size="24" strokewidth="2.2" trackcolor="#D6D6D6" progresscolor="#0550DC" label="Thinking..." show-label="true"></enchanted-circular-progress>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Thinking...(40px)</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC" label="Thinking..." show-label="true"></enchanted-circular-progress>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Custom: Processing...</span>
          <enchanted-circular-progress size="24" strokewidth="2.2" trackcolor="#D6D6D6" progresscolor="#0550DC" label="Processing..." show-label="true"></enchanted-circular-progress>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Custom: Loading...</span>
          <enchanted-circular-progress size="24" strokewidth="2.2" trackcolor="#D6D6D6" progresscolor="#0550DC" label="Loading..." show-label="true"></enchanted-circular-progress>
        </div>

        <!-- Size Variations -->
        <h3 style="\${sectionHeaderStyle}">Size Variations</h3>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Extra Small (20px)</span>
          <enchanted-circular-progress size="20" strokewidth="2" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Small (30px)</span>
          <enchanted-circular-progress size="30" strokewidth="3" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Default (40px)</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Medium (60px)</span>
          <enchanted-circular-progress size="60" strokewidth="4" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Large (80px)</span>
          <enchanted-circular-progress size="80" strokewidth="5" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Extra Large (120px)</span>
          <enchanted-circular-progress size="120" strokewidth="6" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>

        <!-- Stroke Width Variations -->
        <h3 style="\${sectionHeaderStyle}">Stroke Width Variations</h3>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Very Thin (1px)</span>
          <enchanted-circular-progress size="40" strokewidth="1" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Thin (2px)</span>
          <enchanted-circular-progress size="40" strokewidth="2" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Default (3.6px)</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Thick (6px)</span>
          <enchanted-circular-progress size="40" strokewidth="6" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Very Thick (10px)</span>
          <enchanted-circular-progress size="40" strokewidth="10" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Extra Thick (15px)</span>
          <enchanted-circular-progress size="40" strokewidth="15" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>

        <!-- Color Variations -->
        <h3 style="\${sectionHeaderStyle}">Color Variations</h3>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Default Blue</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Success Green</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#E8F5E9" progresscolor="#2E7D32"></enchanted-circular-progress>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Warning Orange</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#FFF3E0" progresscolor="#F57C00"></enchanted-circular-progress>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Error Red</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#FFE5E5" progresscolor="#e61010"></enchanted-circular-progress>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Purple</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#F3E5F5" progresscolor="#7B1FA2"></enchanted-circular-progress>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Dark Theme</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#424242" progresscolor="#90CAF9"></enchanted-circular-progress>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">High Contrast</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#000000" progresscolor="#FFFF00"></enchanted-circular-progress>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Monochrome</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#E0E0E0" progresscolor="#424242"></enchanted-circular-progress>
        </div>

        <!-- Animation States -->
        <h3 style="\${sectionHeaderStyle}">Animation States</h3>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Default Animation</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Disable Shrink</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="#D6D6D6" progresscolor="#0550DC" disable-shrink></enchanted-circular-progress>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Large + Disable Shrink</span>
          <enchanted-circular-progress size="80" strokewidth="5" trackcolor="#D6D6D6" progresscolor="#0550DC" disable-shrink></enchanted-circular-progress>
        </div>

        <!-- Edge Cases -->
        <h3 style="\${sectionHeaderStyle}">Edge Cases</h3>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Minimum Size (20px)</span>
          <enchanted-circular-progress size="20" strokewidth="2" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Maximum Stroke<br/>(Half Radius)</span>
          <enchanted-circular-progress size="60" strokewidth="20" trackcolor="#D6D6D6" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Transparent Track</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="transparent" progresscolor="#0550DC"></enchanted-circular-progress>
        </div>
        <div style="\${itemContainerStyle}">
          <span style="\${labelStyle}">Semi-transparent</span>
          <enchanted-circular-progress size="40" strokewidth="3.6" trackcolor="rgba(214, 214, 214, 0.3)" progresscolor="rgba(5, 80, 220, 0.7)"></enchanted-circular-progress>
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
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const S=["Default","AllStates"];export{a as AllStates,o as Default,S as __namedExportsOrder,v as default};
