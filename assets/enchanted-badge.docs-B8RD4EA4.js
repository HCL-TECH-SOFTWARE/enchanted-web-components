import{j as e,M as d,T as c,C as l,a as h}from"./blocks-8wSuGiO3.js";import{useMDXComponents as a}from"./index-BbMSz0O7.js";import{E as x,D as r}from"./enchanted-badge.stories-D0tsqNnR.js";import{E as s}from"./cssClassEnums-B0FxBdGx.js";import"./preload-helper-C1FmrZbK.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./iframe-q8uLr7wl.js";import"./tags-CoVdckeD.js";import"./enchanted-badge-Df1lKWMF.js";import"./localization-BpntbVwP.js";const p=new Map([[s.BADGE_TEXT,"Text badge container."],[s.BADGE_DOT,"Dot badge container."],[s.BADGE_TEXT_RTL,"RTL text badge container."]]),m=Object.values(s).map(t=>({name:t,description:p.get(t)??""}));function i(t){const n={code:"code",h2:"h2",p:"p",...a(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(d,{of:x}),`
`,e.jsx(c,{}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"enchanted-badge"})," is a small component for displaying notifications or status indicators. Supports multiple badge types (text, dot), colors, and border styles for visual variety."]}),`
`,e.jsx(n.h2,{id:"interactive-example",children:"Interactive example"}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(n.h2,{id:"css-parts",children:"CSS Parts"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Part "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:m.map(o=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:o.name})}),e.jsx("td",{children:o.description})]},o.name))})]}),`
`,e.jsx(n.h2,{id:"slots",children:"Slots"}),`
`,e.jsx(n.p,{children:"This component does not expose any slots."})]})}function S(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{m as CSSPARTS,p as EnchantedBadgeParts_METADATA,S as default};
