import{j as e,M as c,T as d,C as m,a as l}from"./blocks-8wSuGiO3.js";import{useMDXComponents as o}from"./index-BbMSz0O7.js";import{E as p,a as s}from"./enchanted-breadcrumbs.stories-CgX0pFh3.js";import{B as t}from"./cssClassEnums-B0FxBdGx.js";import"./preload-helper-C1FmrZbK.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./iframe-q8uLr7wl.js";import"./tags-CoVdckeD.js";import"./state-HmA1gIuo.js";import"./enchanted-svg-icon-DTsO5F9G.js";import"./index-CuTRIAwF.js";import"./tags-Dsu22f7O.js";import"./index-Cu-SjR_S.js";import"./localization-BpntbVwP.js";import"./index-uJEfLNnI.js";import"./index-BZC1VVGD.js";const h=new Map([[t.BREADCRUMBS_CONTAINER,"Navigation container for breadcrumb trail."],[t.BREADCRUMBS_LIST,"List that groups breadcrumb items."],[t.BREADCRUMBS_ICON,"Icon displayed in a breadcrumb item."],[t.BREADCRUMBS_SEPARATOR,"Separator between breadcrumb items."],[t.BREADCRUMBS_ITEM,"Breadcrumb item wrapper."],[t.BREADCRUMBS_ITEM_LIST,"List item wrapper for each breadcrumb entry."],[t.BREADCRUMBS_DISABLED,"Disabled breadcrumb state."],[t.BREADCRUMBS_ITEM_LAST,"Last breadcrumb item styling."],[t.BREADCRUMBS_ITEM_LAST_ICON,"Last item icon styling."],[t.BREADCRUMBS_LINK,"Link element within a breadcrumb item."],[t.BREADCRUMBS_LINK_LAST,"Last breadcrumb link styling."],[t.BREADCRUMBS_CONTENT,"Content region inside a breadcrumb item."],[t.BREADCRUMBS_TEXT,"Text label inside a breadcrumb item."]]),b=Object.values(t).map(r=>({name:r,description:h.get(r)??""}));function a(r){const n={code:"code",h2:"h2",p:"p",...o(),...r.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(c,{of:p}),`
`,e.jsx(d,{}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"enchanted-breadcrumbs"})," component displays navigation path hierarchy with optional icons and disabled states. Use breadcrumbs for showing current location in site structure and enabling quick navigation to parent levels."]}),`
`,e.jsx(n.h2,{id:"interactive-example",children:"Interactive example"}),`
`,e.jsx(m,{of:s}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(l,{of:s}),`
`,e.jsx(n.h2,{id:"css-parts",children:"CSS Parts"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Part "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:b.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:i.name})}),e.jsx("td",{children:i.description})]},i.name))})]}),`
`,e.jsx(n.h2,{id:"slots",children:"Slots"}),`
`,e.jsx(n.p,{children:"This component does not expose any slots."})]})}function f(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(a,{...r})}):a(r)}export{h as BREADCRUMBS_PART_METADATA,b as CSSPARTS,f as default};
