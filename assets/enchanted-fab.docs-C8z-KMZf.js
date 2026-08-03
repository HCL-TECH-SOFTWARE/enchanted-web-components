import{j as e,M as c,T as l,C as h,a as p}from"./blocks-D7FCWugj.js";import{useMDXComponents as a}from"./index-DYDNvvCy.js";import{E as x,D as d}from"./enchanted-fab.stories-CnSC1lc3.js";import{F as o,k as s}from"./cssClassEnums-CY7zIYSt.js";import"./preload-helper-C1FmrZbK.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./iframe-B4blCNHZ.js";import"./tags-BB5KXmdF.js";import"./index-DDKwPKd1.js";import"./state-B-Bwqa8u.js";import"./localization-BPNcoI2x.js";import"./enchanted-badge-EF_sND6Q.js";import"./tags-C8bWlkz1.js";const m=new Map([[o.FAB,"Main floating action button part."],[o.FAB_RTL,"RTL fab styling."],[o.LABEL,"Label text inside an extended fab."],[o.LABEL_RTL,"RTL label styling."],[o.ICON,"Icon container inside the fab."]]),j=Object.values(o).map(n=>({name:n,description:m.get(n)??""})),b=new Map([[s.ICON,"Optional. Used to provide a custom icon displayed inside the Floating Action Button. If omitted, the component renders the icon provided through the `icon` property. If neither is provided, no icon is displayed."],[s.BADGE,"Optional. Used to provide badge content displayed alongside the Floating Action Button when `badge` is enabled. If omitted, no badge is rendered."]]),f=Object.values(s).map(n=>({name:n,description:b.get(n)??""}));function r(n){const t={code:"code",h2:"h2",p:"p",...a(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,`
`,`
`,e.jsx(c,{of:x}),`
`,e.jsx(l,{}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"enchanted-fab"})," (Floating Action Button) is a prominent action button typically positioned at the bottom-right of the screen. Supports contained and outlined variants with optional badge for notifications and extended label display."]}),`
`,e.jsx(t.h2,{id:"interactive-example",children:"Interactive example"}),`
`,e.jsx(h,{of:d}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(p,{of:d}),`
`,e.jsx(t.h2,{id:"css-parts",children:"CSS Parts"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Part "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:j.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:i.name})}),e.jsx("td",{children:i.description})]},i.name))})]}),`
`,e.jsx(t.h2,{id:"slots",children:"Slots"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Slot "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:f.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{style:{whiteSpace:"nowrap"},children:i.name})}),e.jsx("td",{children:i.description})]},i.name))})]})]})}function _(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{j as CSSPARTS,m as FAB_PART_METADATA,b as FAB_SLOTS_METADATA,_ as default,f as slots};
