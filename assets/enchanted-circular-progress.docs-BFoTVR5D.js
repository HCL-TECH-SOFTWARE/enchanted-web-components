import{u as a,j as e,M as c,T as d,C as h,a as l}from"./blocks-F9Y7eMXh.js";import{E as p,D as i}from"./enchanted-circular-progress.stories-BaL3MyDa.js";import{f as r}from"./cssClassEnums-CMPlQyPz.js";import"./preload-helper-C1FmrZbK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DY3tjC3r.js";import"./tags-CwWDjGJh.js";import"./enchanted-circular-progress-YphxYrnH.js";const m=new Map([[r.ROOT,"Outer wrapper around the spinner. "],[r.SVG,"SVG element that renders the progress ring."],[r.TRACK,"Track circle behind the progress ring."],[r.CIRCLE,"Animated progress circle."],[r.CIRCLE_DISABLE_SHRINK,"Progress circle without shrink."],[r.LABEL,"Label shown under the spinner."],[r.SPINNER,"Spinner container around the SVG."]]),x=Object.values(r).map(s=>({name:s,description:m.get(s)??""}));function o(s){const n={code:"code",h2:"h2",p:"p",...a(),...s.components};return e.jsxs(e.Fragment,{children:[`
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
`,e.jsx(n.p,{children:"This component does not expose any slots."})]})}function P(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{m as CIRCULAR_PROGRESS_PART_METADATA,x as CSSPARTS,P as default};
