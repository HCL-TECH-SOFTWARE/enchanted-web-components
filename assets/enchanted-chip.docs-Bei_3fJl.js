import{j as e,M as d,T as a,C as h,a as l}from"./blocks-8wSuGiO3.js";import{useMDXComponents as c}from"./index-BbMSz0O7.js";import{E as p,a as r}from"./enchanted-chip.stories-BFFPiKr0.js";import{C as s}from"./cssClassEnums-B0FxBdGx.js";import"./preload-helper-C1FmrZbK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-q8uLr7wl.js";import"./tags-CoVdckeD.js";import"./index-BwP5HMBC.js";import"./enchanted-avatar-Cqrw_WMu.js";import"./localization-BpntbVwP.js";import"./index-CuTRIAwF.js";import"./tags-Dsu22f7O.js";import"./index-Bv3ibheM.js";const x=new Map([[s.CHIP_DIV,"Main chip container."],[s.CHIP_NAME,"Chip label text."],[s.CHIP_AVATAR,"Avatar area inside the chip."],[s.CHIP_COUNT,"Count badge shown within the chip."],[s.CHIP_COUNT_RTL,"RTL count badge styling."],[s.CHIP_DIV_DISABLED,"Disabled chip appearance."]]),j=Object.values(s).map(n=>({name:n,description:x.get(n)??""}));function o(n){const t={code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...c(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(d,{of:p}),`
`,e.jsx(a,{}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"enchanted-chip"})," displays compact elements with optional avatar, count badge, and clear icon for dismissal. Use chips for tags, filters, or selected items with full RTL support and disabled state styling."]}),`
`,e.jsx(t.h2,{id:"interactive-example",children:"Interactive example"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(t.h2,{id:"css-parts",children:"CSS Parts"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Part "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:j.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:i.name})}),e.jsx("td",{children:i.description})]},i.name))})]}),`
`,e.jsx(t.h2,{id:"slots",children:"Slots"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:e.jsx(t.strong,{children:"Slot"})}),e.jsx(t.th,{children:e.jsx(t.strong,{children:"Description"})})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"clear-icon"})}),e.jsxs(t.td,{children:[e.jsx(t.strong,{children:"Optional."})," Used to provide a custom clear or remove icon displayed at the end of the chip when ",e.jsx(t.code,{children:"clearIcon"})," is enabled. If omitted, no clear icon is rendered."]})]})})]})]})}function y(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{x as CHIP_PART_METADATA,j as CSSPARTS,y as default};
