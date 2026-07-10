import{j as t,M as c,T as p,C as d,a as l}from"./blocks-8wSuGiO3.js";import{useMDXComponents as a}from"./index-BbMSz0O7.js";import{E as m,D as s}from"./enchanted-table-pagination.stories-Bjvrp-oH.js";import{T as i}from"./cssClassEnums-B0FxBdGx.js";import"./preload-helper-C1FmrZbK.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./iframe-q8uLr7wl.js";import"./tags-CoVdckeD.js";import"./state-HmA1gIuo.js";import"./lodash-CdDiHlzQ.js";import"./enchanted-select-DQvwEWS3.js";import"./enchanted-list-item-4M1fmflT.js";import"./enchanted-button-D143v6g8.js";import"./query-BApjzB0v.js";import"./localization-BpntbVwP.js";import"./keyboardEventKeys-BnoN8uA3.js";import"./enchanted-select-Ge91KUgI.js";import"./index-DSw0ACRs.js";import"./index-CuTRIAwF.js";import"./tags-Dsu22f7O.js";import"./exportParts-R9YCw1G8.js";import"./index-BZC1VVGD.js";import"./index-uJEfLNnI.js";const h=new Map([[i.CONTAINER,"Styles pagination container."],[i.ROWS_SECTION,"Styles section containing the rows-per-page selector."],[i.PAGES_SECTION,"Styles section containing page navigation controls."],[i.ROWS_DESCRIPTION,"Styles text describing the current rows selection."],[i.PAGES_DESCRIPTION,"Styles text describing the current page selection."],[i.PAGES_NAV_BUTTON,"Styles navigation button for pages."]]),x=Object.values(i).map(n=>({name:n,description:h.get(n)??""}));function r(n){const e={code:"code",h2:"h2",p:"p",...a(),...n.components};return t.jsxs(t.Fragment,{children:[`
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
