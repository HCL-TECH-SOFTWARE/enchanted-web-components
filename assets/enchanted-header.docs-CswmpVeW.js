import{u as a,j as e,M as d,T as c,C as h,a as p}from"./blocks-F9Y7eMXh.js";import{E as m,a as o}from"./enchanted-header.stories-DtDNf_pn.js";import{H as n}from"./cssClassEnums-CMPlQyPz.js";import"./preload-helper-C1FmrZbK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DY3tjC3r.js";import"./tags-CwWDjGJh.js";import"./enchanted-textfield-CXUvhGnM.js";import"./state-Db0ArEf-.js";import"./lodash-CdDiHlzQ.js";import"./localization-wc-AMdX0.js";import"./enchanted-select-Ge91KUgI.js";import"./keyboardEventKeys-BnoN8uA3.js";import"./enchanted-button-AFRsqyaK.js";import"./query-BApjzB0v.js";import"./enchanted-badge-BxkBp9tM.js";import"./index-pmCmTPRS.js";import"./index-CuTRIAwF.js";import"./tags-DoreIf3C.js";import"./index-BJaJJabx.js";const l=new Map([[n.H6,"Header title container."],[n.INPUT,"Search input part exported to the inner textfield."],[n.HEADER,"Root header container"],[n.SUB_HEADER_START,"Left-side header section."],[n.SUB_HEADER_END,"Right-side header section."],[n.HEADER_SPACING_START,"Spacing region before the title."],[n.HEADER_SPACING_START_HAMBURGER,"Spacing region at the end of the header."],[n.HEADER_SPACING_END,"Spacing region at the end of the header."],[n.HR_PART,"Divider line under the header."]]),x=Object.values(n).map(i=>({name:i,description:l.get(i)??""}));function s(i){const t={code:"code",h2:"h2",p:"p",...a(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(d,{of:m}),`
`,e.jsx(c,{}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"enchanted-header"})," is a navigation header component supporting multiple variants (authoring, authoring modal, end-user) with optional back navigation, search, and filter controls. Features responsive layout adjustments and side navigation integration."]}),`
`,e.jsx(t.h2,{id:"interactive-example",children:"Interactive example"}),`
`,e.jsx(h,{of:o}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(p,{of:o}),`
`,e.jsx(t.h2,{id:"css-parts",children:"CSS Parts"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Part "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:x.map(r=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:r.name})}),e.jsx("td",{children:r.description})]},r.name))})]}),`
`,e.jsx(t.h2,{id:"slots",children:"Slots"}),`
`,e.jsx(t.p,{children:"This component does not expose any slots."})]})}function G(i={}){const{wrapper:t}={...a(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(s,{...i})}):s(i)}export{x as CSSPARTS,l as HEADER_PARTS_METADATA,G as default};
