import{u as c,j as e,M as d,T as h,C as l,a as p}from"./blocks-F9Y7eMXh.js";import{E as m,a as r}from"./enchanted-chip.stories-BXEx4zvy.js";import{C as i,e as o}from"./cssClassEnums-CMPlQyPz.js";import"./preload-helper-C1FmrZbK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DY3tjC3r.js";import"./tags-CwWDjGJh.js";import"./index-D6MPGYlW.js";import"./enchanted-avatar-DI7j70IN.js";import"./localization-wc-AMdX0.js";import"./index-CuTRIAwF.js";import"./tags-DoreIf3C.js";import"./index-GD79fOtH.js";const x=new Map([[i.CHIP_DIV,"Main chip container."],[i.CHIP_NAME,"Chip label text."],[i.CHIP_AVATAR,"Avatar area inside the chip."],[i.CHIP_COUNT,"Count badge shown within the chip."],[i.CHIP_COUNT_RTL,"RTL count badge styling."],[i.CHIP_DIV_DISABLED,"Disabled chip appearance."]]),j=Object.values(i).map(n=>({name:n,description:x.get(n)??""})),C=new Map([[o.CLEAR_ICON,"Optional. Used to provide a custom clear or remove icon displayed at the end of the chip when `clearIcon` is enabled. If omitted, no clear icon is rendered."]]),T=Object.values(o).map(n=>({name:n,description:C.get(n)??""}));function a(n){const t={code:"code",h2:"h2",p:"p",...c(),...n.components};return e.jsxs(e.Fragment,{children:[`
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
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Part "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:j.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:s.name})}),e.jsx("td",{children:s.description})]},s.name))})]}),`
`,e.jsx(t.h2,{id:"slots",children:"Slots"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Slot "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:T.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{style:{whiteSpace:"nowrap"},children:s.name})}),e.jsx("td",{children:s.description})]},s.name))})]})]})}function v(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{x as CHIP_PART_METADATA,C as CHIP_SLOTS_METADATA,j as CSSPARTS,v as default,T as slots};
