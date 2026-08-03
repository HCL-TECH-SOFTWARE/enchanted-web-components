import{j as t,M as c,T as d,C as A,a as l}from"./blocks-D7FCWugj.js";import{useMDXComponents as i}from"./index-DYDNvvCy.js";import{E as m,a as o}from"./enchanted-avatar.stories-D-fEOpIp.js";import{c as e}from"./cssClassEnums-CY7zIYSt.js";import"./preload-helper-C1FmrZbK.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./iframe-B4blCNHZ.js";import"./tags-BB5KXmdF.js";import"./enchanted-avatar-CoZ8wmiG.js";import"./index-CuTRIAwF.js";import"./tags-C8bWlkz1.js";import"./index-DtQ3Ywn8.js";import"./test-avatar-image-RZI1r1Pv.js";const p=new Map([[e.AVATAR_DIV,"Root container for rounded avatars."],[e.AVATAR_DIV_CIRCULAR,"Root container for circular avatars."],[e.AVATAR_SPAN_CIRCULAR,"Circular text-based avatar content."],[e.AVATAR_SPAN_ROUNDED,"Rounded text-based avatar content."],[e.AVATAR_ICON_CIRCULAR,"Circular icon avatar content."],[e.AVATAR_ICON_ROUNDED,"Rounded icon avatar content."],[e.AVATAR_ICON_TEMPLATE_CIRCULAR,"Circular avatar content rendered from a template."],[e.AVATAR_ICON_TEMPLATE_ROUNDED,"Rounded avatar content rendered from a template."],[e.AVATAR_IMAGE_CIRCULAR,"Circular image-based avatar content."],[e.AVATAR_IMAGE_ROUNDED,"Rounded image-based avatar content."]]),R=Object.values(e).map(r=>({name:r,description:p.get(r)??""}));function s(r){const n={code:"code",h2:"h2",p:"p",...i(),...r.components};return t.jsxs(t.Fragment,{children:[`
`,`
`,`
`,`
`,t.jsx(c,{of:m}),`
`,t.jsx(d,{}),`
`,t.jsxs(n.p,{children:["The ",t.jsx(n.code,{children:"enchanted-avatar"})," displays user or entity representations as letters, icons, or images with rounded or circular shapes. Supports multiple background colors for visual distinction and identity representation."]}),`
`,t.jsx(n.h2,{id:"interactive-example",children:"Interactive example"}),`
`,t.jsx(A,{of:o}),`
`,t.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(l,{of:o}),`
`,t.jsx(n.h2,{id:"css-parts",children:"CSS Parts"}),`
`,t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:" Part "}),t.jsx("th",{children:" Description "})]})}),t.jsx("tbody",{children:R.map(a=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:a.name})}),t.jsx("td",{children:a.description})]},a.name))})]}),`
`,t.jsx(n.h2,{id:"slots",children:"Slots"}),`
`,t.jsx(n.p,{children:"This component does not expose any slots."})]})}function M(r={}){const{wrapper:n}={...i(),...r.components};return n?t.jsx(n,{...r,children:t.jsx(s,{...r})}):s(r)}export{p as AVATAR_PARTS_METADATA,R as CSSPARTS,M as default};
