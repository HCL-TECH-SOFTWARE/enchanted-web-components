import{j as e,M as c,T as d,C as h,a as l}from"./blocks-8wSuGiO3.js";import{useMDXComponents as a}from"./index-BbMSz0O7.js";import{E as p,D as i}from"./enchanted-circular-progress.stories-CrGwM3i5.js";import{d as s}from"./cssClassEnums-B0FxBdGx.js";import"./preload-helper-C1FmrZbK.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./iframe-q8uLr7wl.js";import"./tags-CoVdckeD.js";import"./enchanted-circular-progress-DVAC6kdd.js";const m=new Map([[s.ROOT,"Outer wrapper around the spinner. "],[s.SVG,"SVG element that renders the progress ring."],[s.TRACK,"Track circle behind the progress ring."],[s.CIRCLE,"Animated progress circle."],[s.CIRCLE_DISABLE_SHRINK,"Progress circle without shrink."],[s.LABEL,"Label shown under the spinner."],[s.SPINNER,"Spinner container around the SVG."]]),x=Object.values(s).map(r=>({name:r,description:m.get(r)??""}));function o(r){const n={code:"code",h2:"h2",p:"p",...a(),...r.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(c,{of:p}),`
`,e.jsx(d,{}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"enchanted-circular-progress"})," displays an animated circular progress indicator with customizable size, colors, and optional label. Features smooth rotation and dash animations with optional shrink animation for reduced CPU usage."]}),`
`,e.jsx(n.h2,{id:"interactive-example",children:"Interactive example"}),`
`,e.jsx(h,{of:i}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(n.h2,{id:"css-parts",children:"CSS Parts"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Part "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:x.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:t.name})}),e.jsx("td",{children:t.description})]},t.name))})]}),`
`,e.jsx(n.h2,{id:"slots",children:"Slots"}),`
`,e.jsx(n.p,{children:"This component does not expose any slots."})]})}function T(r={}){const{wrapper:n}={...a(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{m as CIRCULAR_PROGRESS_PART_METADATA,x as CSSPARTS,T as default};
