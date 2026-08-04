import{j as e,M as d,T as h,C as l,a as p}from"./blocks-D7FCWugj.js";import{useMDXComponents as c}from"./index-DYDNvvCy.js";import{E as m,a as r}from"./enchanted-chip.stories-XdN8rgKv.js";import{C as s,e as a}from"./cssClassEnums-CY7zIYSt.js";import"./preload-helper-C1FmrZbK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-B4blCNHZ.js";import"./tags-BB5KXmdF.js";import"./index-CKFmveJg.js";import"./enchanted-avatar-CoZ8wmiG.js";import"./localization-BPNcoI2x.js";import"./index-CuTRIAwF.js";import"./tags-C8bWlkz1.js";import"./index-CWwr-8yc.js";const x=new Map([[s.CHIP_DIV,"Main chip container."],[s.CHIP_NAME,"Chip label text."],[s.CHIP_AVATAR,"Avatar area inside the chip."],[s.CHIP_COUNT,"Count badge shown within the chip."],[s.CHIP_COUNT_RTL,"RTL count badge styling."],[s.CHIP_DIV_DISABLED,"Disabled chip appearance."]]),j=Object.values(s).map(n=>({name:n,description:x.get(n)??""})),C=new Map([[a.CLEAR_ICON,"Optional. Used to provide a custom clear or remove icon displayed at the end of the chip when `clearIcon` is enabled. If omitted, no clear icon is rendered."]]),T=Object.values(a).map(n=>({name:n,description:C.get(n)??""}));function o(n){const t={code:"code",h2:"h2",p:"p",...c(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,`
`,`
`,e.jsx(d,{of:m}),`
`,e.jsx(h,{}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"enchanted-chip"})," displays compact elements with optional avatar, count badge, and clear icon for dismissal. Use chips for tags, filters, or selected items with full RTL support and disabled state styling."]}),`
`,e.jsx(t.h2,{id:"interactive-example",children:"Interactive example"}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(p,{of:r}),`
`,e.jsx(t.h2,{id:"css-parts",children:"CSS Parts"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Part "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:j.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:i.name})}),e.jsx("td",{children:i.description})]},i.name))})]}),`
`,e.jsx(t.h2,{id:"slots",children:"Slots"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Slot "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:T.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{style:{whiteSpace:"nowrap"},children:i.name})}),e.jsx("td",{children:i.description})]},i.name))})]})]})}function E(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{x as CHIP_PART_METADATA,C as CHIP_SLOTS_METADATA,j as CSSPARTS,E as default,T as slots};
