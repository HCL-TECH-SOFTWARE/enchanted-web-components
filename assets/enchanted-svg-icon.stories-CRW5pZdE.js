import{o as n,u as v}from"./tags-xkLHt5Ez.js";import"./enchanted-svg-icon-C56_n_Bp.js";import{x as $}from"./iframe-C32rrkgB.js";import"./preload-helper-C1FmrZbK.js";const s=$`
   <svg
     width="16"
     height="16"
     viewBox="0 0 16 16"
     fill="currentColor"
     fill-opacity="0.6"
     xmlns="http://www.w3.org/2000/svg"
   >
   <path
      d="M14.5 13.7931L10.7239 10.017C11.6313 8.9277 12.0838 7.5305 11.9872 6.11608C11.8907 4.70165 11.2525 3.37891 10.2055 2.423C9.15855 1.4671 7.78335 0.951637 6.366 0.983845C4.94865 1.01605 3.59828
      1.59345 2.59581 2.59593C1.59333 3.5984 1.01593 4.94877 0.983723 6.36612C0.951515 7.78347 1.46698 9.15867 2.42288 10.2057C3.37879 11.2526 4.70153 11.8908 6.11596 11.9873C7.53038 12.0839 8.92758
      11.6314 10.0169 10.7241L13.7929 14.5001L14.5 13.7931ZM2 6.50012C2 5.6101 2.26392 4.74007 2.75838 4.00005C3.25285 3.26003 3.95565 2.68325 4.77792 2.34266C5.60019 2.00207 6.50499 1.91295 7.3779
      2.08658C8.25082 2.26022 9.05264 2.6888 9.68198 3.31814C10.3113 3.94747 10.7399 4.7493 10.9135 5.62221C11.0872 6.49513 10.998 7.39993 10.6575 8.22219C10.3169 9.04446 9.74008 9.74726 9.00006
      10.2417C8.26004 10.7362 7.39001 11.0001 6.5 11.0001C5.30693 10.9988 4.1631 10.5243 3.31948 9.68064C2.47585 8.83701 2.00132 7.69319 2 6.50012Z"
   />
   </svg>
 `,E={title:"Icon/enchanted-svg-icon",component:"enchanted-svg-icon",tags:["autodocs"],parameters:{docs:{description:{component:"The SVG Icon component renders SVG templates with customizable color and size properties. It supports parent color inheritance via useCurrentColor for seamless integration with text and UI elements. Use this component for consistent icon rendering across your application with flexible styling options."}}},argTypes:{icon:{control:{type:"object"},description:"SVG icon template (TemplateResult) to be rendered. Pass a Lit template containing the SVG markup. Required for the icon to display."},color:{control:{type:"color"},description:"Custom color for the icon. Overrides default styling. Ignored when useCurrentColor is true. Accepts any valid CSS color value (hex, rgb, named colors).",table:{category:"Styling",type:{summary:"string"},defaultValue:{summary:""}}},size:{control:{type:"text"},description:'Icon size applied to both width and height. Accepts CSS size values (px, em, rem, %). Example: "24px", "2rem". Ensures consistent aspect ratio.',table:{category:"Layout",type:{summary:"string"},defaultValue:{summary:"16px"}}},useCurrentColor:{control:{type:"boolean"},description:"When true, icon inherits color from parent element. Useful for matching icon color with surrounding text or UI components. Overrides color property.",table:{category:"Styling",type:{summary:"boolean"},defaultValue:{summary:"false"}}}},args:{icon:s,color:"",size:"16px",useCurrentColor:!1}},e={render:o=>v`
      <${n}
        .icon=${o.icon}
        color="${o.color}"
        size="${o.size}"
        ?useCurrentColor=${o.useCurrentColor}
      ></${n}>
    `},i={parameters:{controls:{disable:!0}},render:()=>v`
      <style>
        .icon-container {
          display: flex;
          flex-direction: column;
          gap: 32px;
          padding: 20px;
        }
        .icon-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .icon-section h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
        }
        .icon-row {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
          align-items: flex-end;
        }
        .icon-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }
        .icon-label {
          font-size: 12px;
          color: #666;
        }
      </style>

      <div class="icon-container">
        <!-- Default State -->
        <div class="icon-section">
          <h3>Default State</h3>
          <div class="icon-row">
            <div class="icon-item">
              <${n} .icon=${s}></${n}>
              <span class="icon-label">Default (16px)</span>
            </div>
          </div>
        </div>

        <!-- Custom Colors -->
        <div class="icon-section">
          <h3>Custom Colors</h3>
          <div class="icon-row">
            <div class="icon-item">
              <${n} .icon=${s} color="red"></${n}>
              <span class="icon-label">Red</span>
            </div>
            <div class="icon-item">
              <${n} .icon=${s} color="blue"></${n}>
              <span class="icon-label">Blue</span>
            </div>
            <div class="icon-item">
              <${n} .icon=${s} color="green"></${n}>
              <span class="icon-label">Green</span>
            </div>
            <div class="icon-item">
              <${n} .icon=${s} color="#FF6B35"></${n}>
              <span class="icon-label">Hex Color</span>
            </div>
            <div class="icon-item">
              <${n} .icon=${s} color="rgb(138, 43, 226)"></${n}>
              <span class="icon-label">RGB Color</span>
            </div>
            <div class="icon-item">
              <${n} .icon=${s} color="rgba(255, 99, 71, 0.6)"></${n}>
              <span class="icon-label">RGBA (transparent)</span>
            </div>
          </div>
        </div>

        <!-- Different Sizes -->
        <div class="icon-section">
          <h3>Sizes</h3>
          <div class="icon-row">
            <div class="icon-item">
              <${n} .icon=${s} size="12px"></${n}>
              <span class="icon-label">12px (small)</span>
            </div>
            <div class="icon-item">
              <${n} .icon=${s} size="16px"></${n}>
              <span class="icon-label">16px (default)</span>
            </div>
            <div class="icon-item">
              <${n} .icon=${s} size="24px"></${n}>
              <span class="icon-label">24px</span>
            </div>
            <div class="icon-item">
              <${n} .icon=${s} size="32px"></${n}>
              <span class="icon-label">32px</span>
            </div>
            <div class="icon-item">
              <${n} .icon=${s} size="48px"></${n}>
              <span class="icon-label">48px</span>
            </div>
            <div class="icon-item">
              <${n} .icon=${s} size="64px"></${n}>
              <span class="icon-label">64px (large)</span>
            </div>
            <div class="icon-item">
              <${n} .icon=${s} size="2rem"></${n}>
              <span class="icon-label">2rem</span>
            </div>
            <div class="icon-item">
              <${n} .icon=${s} size="3em"></${n}>
              <span class="icon-label">3em</span>
            </div>
          </div>
        </div>

        <!-- UseCurrentColor -->
        <div class="icon-section">
          <h3>Inherit Parent Color (useCurrentColor)</h3>
          <div class="icon-row">
            <div class="icon-item">
              <span style="color: green; font-size: 24px;">
                <${n} .icon=${s} ?useCurrentColor=${!0}></${n}>
              </span>
              <span class="icon-label">Green parent</span>
            </div>
            <div class="icon-item">
              <span style="color: purple; font-size: 24px;">
                <${n} .icon=${s} ?useCurrentColor=${!0}></${n}>
              </span>
              <span class="icon-label">Purple parent</span>
            </div>
            <div class="icon-item">
              <span style="color: orange; font-size: 32px;">
                <${n} .icon=${s} ?useCurrentColor=${!0}></${n}>
              </span>
              <span class="icon-label">Orange + 32px</span>
            </div>
            <div class="icon-item">
              <span style="color: #E91E63; font-size: 40px;">
                <${n} .icon=${s} ?useCurrentColor=${!0}></${n}>
              </span>
              <span class="icon-label">Pink + 40px</span>
            </div>
            <div class="icon-item">
              <span style="color: navy; font-size: 48px;">
                <${n} .icon=${s} ?useCurrentColor=${!0}></${n}>
              </span>
              <span class="icon-label">Navy + 48px</span>
            </div>
          </div>
        </div>

        <!-- Combined States -->
        <div class="icon-section">
          <h3>Combined States</h3>
          <div class="icon-row">
            <div class="icon-item">
              <${n} .icon=${s} color="crimson" size="32px"></${n}>
              <span class="icon-label">Color + Size</span>
            </div>
            <div class="icon-item">
              <${n} .icon=${s} color="teal" size="48px"></${n}>
              <span class="icon-label">Teal + 48px</span>
            </div>
            <div class="icon-item">
              <${n} .icon=${s} color="#4CAF50" size="24px"></${n}>
              <span class="icon-label">Hex + 24px</span>
            </div>
            <div class="icon-item">
              <span style="color: indigo; font-size: 48px;">
                <${n} .icon=${s} size="48px" ?useCurrentColor=${!0}></${n}>
              </span>
              <span class="icon-label">Parent color + size</span>
            </div>
            <div class="icon-item">
              <span style="color: darkorange; font-size: 64px;">
                <${n} .icon=${s} ?useCurrentColor=${!0}></${n}>
              </span>
              <span class="icon-label">Large inherited</span>
            </div>
          </div>
        </div>
      </div>
    `};var a,c,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <\${ENCHANTED_SVG_ICON_TAG}
        .icon=\${args.icon}
        color="\${args.color}"
        size="\${args.size}"
        ?useCurrentColor=\${args.useCurrentColor}
      ></\${ENCHANTED_SVG_ICON_TAG}>
    \`;
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var r,t,p,d,C;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    return html\`
      <style>
        .icon-container {
          display: flex;
          flex-direction: column;
          gap: 32px;
          padding: 20px;
        }
        .icon-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .icon-section h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
        }
        .icon-row {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
          align-items: flex-end;
        }
        .icon-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }
        .icon-label {
          font-size: 12px;
          color: #666;
        }
      </style>

      <div class="icon-container">
        <!-- Default State -->
        <div class="icon-section">
          <h3>Default State</h3>
          <div class="icon-row">
            <div class="icon-item">
              <\${ENCHANTED_SVG_ICON_TAG} .icon=\${svgIconEnd}></\${ENCHANTED_SVG_ICON_TAG}>
              <span class="icon-label">Default (16px)</span>
            </div>
          </div>
        </div>

        <!-- Custom Colors -->
        <div class="icon-section">
          <h3>Custom Colors</h3>
          <div class="icon-row">
            <div class="icon-item">
              <\${ENCHANTED_SVG_ICON_TAG} .icon=\${svgIconEnd} color="red"></\${ENCHANTED_SVG_ICON_TAG}>
              <span class="icon-label">Red</span>
            </div>
            <div class="icon-item">
              <\${ENCHANTED_SVG_ICON_TAG} .icon=\${svgIconEnd} color="blue"></\${ENCHANTED_SVG_ICON_TAG}>
              <span class="icon-label">Blue</span>
            </div>
            <div class="icon-item">
              <\${ENCHANTED_SVG_ICON_TAG} .icon=\${svgIconEnd} color="green"></\${ENCHANTED_SVG_ICON_TAG}>
              <span class="icon-label">Green</span>
            </div>
            <div class="icon-item">
              <\${ENCHANTED_SVG_ICON_TAG} .icon=\${svgIconEnd} color="#FF6B35"></\${ENCHANTED_SVG_ICON_TAG}>
              <span class="icon-label">Hex Color</span>
            </div>
            <div class="icon-item">
              <\${ENCHANTED_SVG_ICON_TAG} .icon=\${svgIconEnd} color="rgb(138, 43, 226)"></\${ENCHANTED_SVG_ICON_TAG}>
              <span class="icon-label">RGB Color</span>
            </div>
            <div class="icon-item">
              <\${ENCHANTED_SVG_ICON_TAG} .icon=\${svgIconEnd} color="rgba(255, 99, 71, 0.6)"></\${ENCHANTED_SVG_ICON_TAG}>
              <span class="icon-label">RGBA (transparent)</span>
            </div>
          </div>
        </div>

        <!-- Different Sizes -->
        <div class="icon-section">
          <h3>Sizes</h3>
          <div class="icon-row">
            <div class="icon-item">
              <\${ENCHANTED_SVG_ICON_TAG} .icon=\${svgIconEnd} size="12px"></\${ENCHANTED_SVG_ICON_TAG}>
              <span class="icon-label">12px (small)</span>
            </div>
            <div class="icon-item">
              <\${ENCHANTED_SVG_ICON_TAG} .icon=\${svgIconEnd} size="16px"></\${ENCHANTED_SVG_ICON_TAG}>
              <span class="icon-label">16px (default)</span>
            </div>
            <div class="icon-item">
              <\${ENCHANTED_SVG_ICON_TAG} .icon=\${svgIconEnd} size="24px"></\${ENCHANTED_SVG_ICON_TAG}>
              <span class="icon-label">24px</span>
            </div>
            <div class="icon-item">
              <\${ENCHANTED_SVG_ICON_TAG} .icon=\${svgIconEnd} size="32px"></\${ENCHANTED_SVG_ICON_TAG}>
              <span class="icon-label">32px</span>
            </div>
            <div class="icon-item">
              <\${ENCHANTED_SVG_ICON_TAG} .icon=\${svgIconEnd} size="48px"></\${ENCHANTED_SVG_ICON_TAG}>
              <span class="icon-label">48px</span>
            </div>
            <div class="icon-item">
              <\${ENCHANTED_SVG_ICON_TAG} .icon=\${svgIconEnd} size="64px"></\${ENCHANTED_SVG_ICON_TAG}>
              <span class="icon-label">64px (large)</span>
            </div>
            <div class="icon-item">
              <\${ENCHANTED_SVG_ICON_TAG} .icon=\${svgIconEnd} size="2rem"></\${ENCHANTED_SVG_ICON_TAG}>
              <span class="icon-label">2rem</span>
            </div>
            <div class="icon-item">
              <\${ENCHANTED_SVG_ICON_TAG} .icon=\${svgIconEnd} size="3em"></\${ENCHANTED_SVG_ICON_TAG}>
              <span class="icon-label">3em</span>
            </div>
          </div>
        </div>

        <!-- UseCurrentColor -->
        <div class="icon-section">
          <h3>Inherit Parent Color (useCurrentColor)</h3>
          <div class="icon-row">
            <div class="icon-item">
              <span style="color: green; font-size: 24px;">
                <\${ENCHANTED_SVG_ICON_TAG} .icon=\${svgIconEnd} ?useCurrentColor=\${true}></\${ENCHANTED_SVG_ICON_TAG}>
              </span>
              <span class="icon-label">Green parent</span>
            </div>
            <div class="icon-item">
              <span style="color: purple; font-size: 24px;">
                <\${ENCHANTED_SVG_ICON_TAG} .icon=\${svgIconEnd} ?useCurrentColor=\${true}></\${ENCHANTED_SVG_ICON_TAG}>
              </span>
              <span class="icon-label">Purple parent</span>
            </div>
            <div class="icon-item">
              <span style="color: orange; font-size: 32px;">
                <\${ENCHANTED_SVG_ICON_TAG} .icon=\${svgIconEnd} ?useCurrentColor=\${true}></\${ENCHANTED_SVG_ICON_TAG}>
              </span>
              <span class="icon-label">Orange + 32px</span>
            </div>
            <div class="icon-item">
              <span style="color: #E91E63; font-size: 40px;">
                <\${ENCHANTED_SVG_ICON_TAG} .icon=\${svgIconEnd} ?useCurrentColor=\${true}></\${ENCHANTED_SVG_ICON_TAG}>
              </span>
              <span class="icon-label">Pink + 40px</span>
            </div>
            <div class="icon-item">
              <span style="color: navy; font-size: 48px;">
                <\${ENCHANTED_SVG_ICON_TAG} .icon=\${svgIconEnd} ?useCurrentColor=\${true}></\${ENCHANTED_SVG_ICON_TAG}>
              </span>
              <span class="icon-label">Navy + 48px</span>
            </div>
          </div>
        </div>

        <!-- Combined States -->
        <div class="icon-section">
          <h3>Combined States</h3>
          <div class="icon-row">
            <div class="icon-item">
              <\${ENCHANTED_SVG_ICON_TAG} .icon=\${svgIconEnd} color="crimson" size="32px"></\${ENCHANTED_SVG_ICON_TAG}>
              <span class="icon-label">Color + Size</span>
            </div>
            <div class="icon-item">
              <\${ENCHANTED_SVG_ICON_TAG} .icon=\${svgIconEnd} color="teal" size="48px"></\${ENCHANTED_SVG_ICON_TAG}>
              <span class="icon-label">Teal + 48px</span>
            </div>
            <div class="icon-item">
              <\${ENCHANTED_SVG_ICON_TAG} .icon=\${svgIconEnd} color="#4CAF50" size="24px"></\${ENCHANTED_SVG_ICON_TAG}>
              <span class="icon-label">Hex + 24px</span>
            </div>
            <div class="icon-item">
              <span style="color: indigo; font-size: 48px;">
                <\${ENCHANTED_SVG_ICON_TAG} .icon=\${svgIconEnd} size="48px" ?useCurrentColor=\${true}></\${ENCHANTED_SVG_ICON_TAG}>
              </span>
              <span class="icon-label">Parent color + size</span>
            </div>
            <div class="icon-item">
              <span style="color: darkorange; font-size: 64px;">
                <\${ENCHANTED_SVG_ICON_TAG} .icon=\${svgIconEnd} ?useCurrentColor=\${true}></\${ENCHANTED_SVG_ICON_TAG}>
              </span>
              <span class="icon-label">Large inherited</span>
            </div>
          </div>
        </div>
      </div>
    \`;
  }
}`,...(p=(t=i.parameters)==null?void 0:t.docs)==null?void 0:p.source},description:{story:`Comprehensive showcase of all svg-icon states and styling options.
Demonstrates default rendering, custom colors, various sizes, and parent color inheritance.`,...(C=(d=i.parameters)==null?void 0:d.docs)==null?void 0:C.description}}};const G=["Default","AllStates"];export{i as AllStates,e as Default,G as __namedExportsOrder,E as default};
