import{j as e,M as h,T as m,C as p,a as l}from"./blocks-D7FCWugj.js";import{useMDXComponents as c}from"./index-DYDNvvCy.js";import{E as x,D as a}from"./enchanted-menu.stories-DF5qIh-Q.js";import{M as i,n as o,o as r}from"./cssClassEnums-CY7zIYSt.js";import"./preload-helper-C1FmrZbK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-B4blCNHZ.js";import"./tags-BB5KXmdF.js";import"./enchanted-menu-item-CIQ8ws2g.js";import"./state-B-Bwqa8u.js";import"./lodash-CdDiHlzQ.js";import"./enchanted-list-item-fo8vQpK0.js";import"./localization-BPNcoI2x.js";import"./enchanted-button-D6oqnDeG.js";import"./query-BApjzB0v.js";import"./keyboardEventKeys-BnoN8uA3.js";const j=new Map([[i.MENU_ROOT,"Root container of the overlay menu."],[i.BACKDROP,"Backdrop behind the menu."],[i.PAPER_ROOT,"Menu paper/surface container."],[o.TEXT_ROOT,"Wrapper around the menu item text."],[o.TEXT,"The visible menu item label."]]),u=[...Object.values(i),...Object.values(o)].map(n=>({name:n,description:j.get(n)??""})),T=new Map([[r.MENU_ITEMS,"Required. Used to provide one or more `enchanted-menu-item` components displayed in the menu. If omitted, the menu opens without displaying any menu items."],[r.TARGET_ANCHOR,"Required.  Used to provide the element that opens and anchors the menu, such as a button or icon. If omitted , the menu has no trigger and cannot be opened by the user."]]),M=Object.values(r).map(n=>({name:n,description:T.get(n)??""}));function d(n){const t={code:"code",h2:"h2",p:"p",...c(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,`
`,`
`,e.jsx(h,{of:x}),`
`,e.jsx(m,{}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"enchanted-menu"})," displays a dropdown list of menu items anchored to a target element with keyboard navigation support. Supports multiple placement options and size variants for flexible positioning and layout."]}),`
`,e.jsx(t.h2,{id:"interactive-example",children:"Interactive example"}),`
`,e.jsx(p,{of:a}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(t.h2,{id:"css-parts",children:"CSS Parts"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Part "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:u.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:s.name})}),e.jsx("td",{children:s.description})]},s.name))})]}),`
`,e.jsx(t.h2,{id:"slots",children:"Slots"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Slot "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:M.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{style:{whiteSpace:"nowrap"},children:s.name})}),e.jsx("td",{children:s.description})]},s.name))})]})]})}function N(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(d,{...n})}):d(n)}export{u as CSSPARTS,j as MENU_PARTS_METADATA,T as MENU_SLOTS_METADATA,N as default,M as slots};
