import{j as e,M as a,T as c,C as l,a as h}from"./blocks-8wSuGiO3.js";import{useMDXComponents as d}from"./index-BbMSz0O7.js";import{E as x,D as o}from"./enchanted-fab-ai.stories-BKg-pDkn.js";import{F as i}from"./cssClassEnums-B0FxBdGx.js";import"./preload-helper-C1FmrZbK.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./iframe-q8uLr7wl.js";import"./tags-CoVdckeD.js";import"./index-zE7OiFl-.js";import"./state-HmA1gIuo.js";import"./localization-BpntbVwP.js";import"./enchanted-badge-Df1lKWMF.js";import"./tags-Dsu22f7O.js";const j=new Map([[i.FAB,"Main floating action button part."],[i.FAB_RTL,"RTL fab styling."],[i.LABEL,"Label text inside an extended fab."],[i.LABEL_RTL,"RTL label styling."],[i.ICON,"Icon container inside the fab."]]),p=Object.values(i).map(n=>({name:n,description:j.get(n)??""}));function r(n){const t={code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...d(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:x}),`
`,e.jsx(c,{}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"enchanted-fab-ai"})," is a specialized floating action button for AI-related operations. Features prominent placement with icon support and optional badge for notifications."]}),`
`,e.jsx(t.h2,{id:"interactive-example",children:"Interactive example"}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(h,{of:o}),`
`,e.jsx(t.h2,{id:"css-parts",children:"CSS Parts"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Part "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:p.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:s.name})}),e.jsx("td",{children:s.description})]},s.name))})]}),`
`,e.jsx(t.h2,{id:"slots",children:"Slots"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:e.jsx(t.strong,{children:"Slot"})}),e.jsx(t.th,{children:e.jsx(t.strong,{children:"Description"})})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"badge"})}),e.jsxs(t.td,{children:[e.jsx(t.strong,{children:"Optional."})," Used to provide badge content displayed alongside the Floating Action Button when ",e.jsx(t.code,{children:"badge"})," is enabled. If omitted, no badge is rendered."]})]})})]})]})}function D(n={}){const{wrapper:t}={...d(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{p as CSSPARTS,j as FAB_PART_METADATA,D as default};
