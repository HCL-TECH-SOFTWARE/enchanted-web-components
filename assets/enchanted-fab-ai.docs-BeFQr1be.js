import{j as e,M as c,T as l,C as h,a as p}from"./blocks-D7FCWugj.js";import{useMDXComponents as a}from"./index-DYDNvvCy.js";import{E as x,D as o}from"./enchanted-fab-ai.stories-C3VbbeYG.js";import{F as s,j as d}from"./cssClassEnums-CY7zIYSt.js";import"./preload-helper-C1FmrZbK.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./iframe-B4blCNHZ.js";import"./tags-BB5KXmdF.js";import"./index-DDKwPKd1.js";import"./state-B-Bwqa8u.js";import"./localization-BPNcoI2x.js";import"./enchanted-badge-EF_sND6Q.js";import"./tags-C8bWlkz1.js";const j=new Map([[s.FAB,"Main floating action button part."],[s.FAB_RTL,"RTL fab styling."],[s.LABEL,"Label text inside an extended fab."],[s.LABEL_RTL,"RTL label styling."],[s.ICON,"Icon container inside the fab."]]),m=Object.values(s).map(n=>({name:n,description:j.get(n)??""})),A=new Map([[d.BADGE,"Optional. Used to provide badge content displayed alongside the Floating Action Button when `badge` is enabled. If omitted, no badge is rendered."]]),f=Object.values(d).map(n=>({name:n,description:A.get(n)??""}));function r(n){const t={code:"code",h2:"h2",p:"p",...a(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,`
`,`
`,e.jsx(c,{of:x}),`
`,e.jsx(l,{}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"enchanted-fab-ai"})," is a specialized floating action button for AI-related operations. Features prominent placement with icon support and optional badge for notifications."]}),`
`,e.jsx(t.h2,{id:"interactive-example",children:"Interactive example"}),`
`,e.jsx(h,{of:o}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(p,{of:o}),`
`,e.jsx(t.h2,{id:"css-parts",children:"CSS Parts"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Part "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:m.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:i.name})}),e.jsx("td",{children:i.description})]},i.name))})]}),`
`,e.jsx(t.h2,{id:"slots",children:"Slots"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Slot "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:f.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{style:{whiteSpace:"nowrap"},children:i.name})}),e.jsx("td",{children:i.description})]},i.name))})]})]})}function R(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{m as CSSPARTS,A as FAB_AI_SLOTS_METADATA,j as FAB_PART_METADATA,R as default,f as slots};
