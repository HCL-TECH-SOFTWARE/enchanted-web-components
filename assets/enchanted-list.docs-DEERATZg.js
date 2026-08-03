import{j as e,M as l,T as h,C as m,a as x}from"./blocks-D7FCWugj.js";import{useMDXComponents as c}from"./index-DYDNvvCy.js";import{E as j,D as r}from"./enchanted-list.stories-CFKZJaN2.js";import{L as d,l as i,m as a}from"./cssClassEnums-CY7zIYSt.js";import"./preload-helper-C1FmrZbK.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./iframe-B4blCNHZ.js";import"./tags-BB5KXmdF.js";import"./enchanted-list-item-fo8vQpK0.js";const p=new Map([[d.UNORDERED_LIST,"Unordered list container."],[i.LIST_ITEM,"Standard list item."],[i.LIST_ITEM_SELECTED,"Selected list item state."],[i.MENU_ITEM,"Menu-specific list item."]]),T=[...Object.values(d),...Object.values(i)].map(t=>({name:t,description:p.get(t)??""})),S=new Map([[a.DEFAULT,"Required. Used to provide one or more list item components as the contents of the list. If omitted, the list is rendered without any items."]]),u=Object.values(a).map(t=>({name:t,description:S.get(t)??""}));function o(t){const n={code:"code",h2:"h2",p:"p",...c(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,`
`,`
`,e.jsx(l,{of:j}),`
`,e.jsx(h,{}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"enchanted-list"})," is a container component for rendering unordered lists with support for ARIA roles and semantic HTML. Works with enchanted-list-item components to create accessible list structures with flexible styling."]}),`
`,e.jsx(n.h2,{id:"interactive-example",children:"Interactive example"}),`
`,e.jsx(m,{of:r}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(x,{of:r}),`
`,e.jsx(n.h2,{id:"css-parts",children:"CSS Parts"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Part "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:T.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:s.name})}),e.jsx("td",{children:s.description})]},s.name))})]}),`
`,e.jsx(n.h2,{id:"slots",children:"Slots"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Slot "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:u.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{style:{whiteSpace:"nowrap"},children:s.name})}),e.jsx("td",{children:s.description})]},s.name))})]})]})}function w(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{T as CSSPARTS,p as LIST_PARTS_METADATA,S as LIST_SLOTS_METADATA,w as default,u as slots};
