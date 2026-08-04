import{j as t,M as c,T as p,C as d,a as l}from"./blocks-D7FCWugj.js";import{useMDXComponents as a}from"./index-DYDNvvCy.js";import{E as m,D as s}from"./enchanted-table-pagination.stories-B0S6Wy0J.js";import{T as i}from"./cssClassEnums-CY7zIYSt.js";import"./preload-helper-C1FmrZbK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-B4blCNHZ.js";import"./tags-BB5KXmdF.js";import"./state-B-Bwqa8u.js";import"./lodash-CdDiHlzQ.js";import"./enchanted-select-B65P8Vc5.js";import"./enchanted-list-item-fo8vQpK0.js";import"./enchanted-button-D6oqnDeG.js";import"./query-BApjzB0v.js";import"./localization-BPNcoI2x.js";import"./keyboardEventKeys-BnoN8uA3.js";import"./enchanted-select-Ge91KUgI.js";import"./index-C7HrrR8w.js";import"./index-CuTRIAwF.js";import"./tags-C8bWlkz1.js";import"./exportParts-CSCHC3ow.js";import"./index-0ADDeSrV.js";import"./index-AqhBB4Dz.js";const h=new Map([[i.CONTAINER,"Styles pagination container."],[i.ROWS_SECTION,"Styles section containing the rows-per-page selector."],[i.PAGES_SECTION,"Styles section containing page navigation controls."],[i.ROWS_DESCRIPTION,"Styles text describing the current rows selection."],[i.PAGES_DESCRIPTION,"Styles text describing the current page selection."],[i.PAGES_NAV_BUTTON,"Styles navigation button for pages."]]),x=Object.values(i).map(n=>({name:n,description:h.get(n)??""}));function r(n){const e={code:"code",h2:"h2",p:"p",...a(),...n.components};return t.jsxs(t.Fragment,{children:[`
`,`
`,`
`,`
`,t.jsx(c,{of:m}),`
`,t.jsx(p,{}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"enchanted-table-pagination"})," provides navigation controls for paginated data tables with first/last page buttons, previous/next navigation, and adjustable rows per page dropdown. Use for efficient data browsing in large datasets."]}),`
`,t.jsx(e.h2,{id:"interactive-example",children:"Interactive example"}),`
`,t.jsx(d,{of:s}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(l,{of:s}),`
`,t.jsx(e.h2,{id:"css-parts",children:"CSS Parts"}),`
`,t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:" Part "}),t.jsx("th",{children:" Description "})]})}),t.jsx("tbody",{children:x.map(o=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:o.name})}),t.jsx("td",{children:o.description})]},o.name))})]}),`
`,t.jsx(e.h2,{id:"slots",children:"Slots"}),`
`,t.jsx(e.p,{children:"This component does not expose any slots."})]})}function L(n={}){const{wrapper:e}={...a(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r(n)}export{x as CSSPARTS,h as TABLE_PAGINATION_PARTS_METADATA,L as default};
