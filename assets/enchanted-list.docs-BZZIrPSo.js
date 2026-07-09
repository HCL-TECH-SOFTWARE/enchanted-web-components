import{j as e,M as l,T as h,C as a,a as x}from"./blocks-8wSuGiO3.js";import{useMDXComponents as d}from"./index-BbMSz0O7.js";import{E as j,D as r}from"./enchanted-list.stories-6zuWaY7o.js";import{L as c,g as n}from"./cssClassEnums-B0FxBdGx.js";import"./preload-helper-C1FmrZbK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-q8uLr7wl.js";import"./tags-CoVdckeD.js";import"./enchanted-list-item-4M1fmflT.js";const m=new Map([[c.UNORDERED_LIST,"Unordered list container."],[n.LIST_ITEM,"Standard list item."],[n.LIST_ITEM_SELECTED,"Selected list item state."],[n.MENU_ITEM,"Menu-specific list item."]]),p=[...Object.values(c),...Object.values(n)].map(s=>({name:s,description:m.get(s)??""}));function o(s){const t={code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...d(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(l,{of:j}),`
`,e.jsx(h,{}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"enchanted-list"})," is a container component for rendering unordered lists with support for ARIA roles and semantic HTML. Works with enchanted-list-item components to create accessible list structures with flexible styling."]}),`
`,e.jsx(t.h2,{id:"interactive-example",children:"Interactive example"}),`
`,e.jsx(a,{of:r}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(x,{of:r}),`
`,e.jsx(t.h2,{id:"css-parts",children:"CSS Parts"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Part "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:p.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:i.name})}),e.jsx("td",{children:i.description})]},i.name))})]}),`
`,e.jsx(t.h2,{id:"slots",children:"Slots"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:e.jsx(t.strong,{children:"Slot"})}),e.jsx(t.th,{children:e.jsx(t.strong,{children:"Description"})})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"default"})}),e.jsxs(t.td,{children:[e.jsx(t.strong,{children:"Required."})," Used to provide one or more list item components as the contents of the list. If omitted, the list is rendered without any items."]})]})})]})]})}function D(s={}){const{wrapper:t}={...d(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(o,{...s})}):o(s)}export{p as CSSPARTS,m as LIST_PARTS_METADATA,D as default};
