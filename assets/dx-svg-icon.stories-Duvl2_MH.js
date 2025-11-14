import{x as i}from"./iframe-g_dBLWCH.js";import"./dx-svg-icon-j95vRYmd.js";import"./preload-helper-C1FmrZbK.js";import"./dx-ac-base-element-Ba1nuzGa.js";const o=i`
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
 `,x={title:"Icon/dx-svg-icon",tags:["autodocs"],argTypes:{icon:{control:!1,description:"SVG icon template",table:{defaultValue:{summary:"svg"}}},color:{control:"color",description:"Icon color",table:{defaultValue:{summary:""}}},size:{control:"text",description:"Icon size (e.g. 24px)",table:{defaultValue:{summary:""}}},useCurrentColor:{control:"boolean",description:"Inherit color from parent",table:{defaultValue:{summary:"false"}}}},args:{icon:"",color:"",size:"",useCurrentColor:!1},render:r=>i`
      <dx-svg-icon
        .icon=${o}
        color="${r.color}"
        size="${r.size}"
        ?useCurrentColor=${r.useCurrentColor}
      ></dx-svg-icon>
    `},e={},n={render:()=>i`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end;">
        <div>
          <div>Default</div>
          <dx-svg-icon .icon=${o}></dx-svg-icon>
        </div>
        <div>
          <div>Colored</div>
          <dx-svg-icon .icon=${o} color="red"></dx-svg-icon>
        </div>
        <div>
          <div>Large Size</div>
          <dx-svg-icon .icon=${o} size="48px"></dx-svg-icon>
        </div>
        <div>
          <div>useCurrentColor</div>
          <span style="color: green; font-size: 32px;">
            <dx-svg-icon .icon=${o} useCurrentColor></dx-svg-icon>
          </span>
        </div>
      </div>
    `};var s,d,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(t=(d=e.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};var c,l,a;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end;">
        <div>
          <div>Default</div>
          <dx-svg-icon .icon=\${svgIconEnd}></dx-svg-icon>
        </div>
        <div>
          <div>Colored</div>
          <dx-svg-icon .icon=\${svgIconEnd} color="red"></dx-svg-icon>
        </div>
        <div>
          <div>Large Size</div>
          <dx-svg-icon .icon=\${svgIconEnd} size="48px"></dx-svg-icon>
        </div>
        <div>
          <div>useCurrentColor</div>
          <span style="color: green; font-size: 32px;">
            <dx-svg-icon .icon=\${svgIconEnd} useCurrentColor></dx-svg-icon>
          </span>
        </div>
      </div>
    \`;
  }
}`,...(a=(l=n.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const C=["Default","AllStates"];export{n as AllStates,e as Default,C as __namedExportsOrder,x as default};
