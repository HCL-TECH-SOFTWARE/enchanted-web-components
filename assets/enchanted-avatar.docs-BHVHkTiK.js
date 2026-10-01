import{u as i,j as e,M as c,T as d,C as A,a as l}from"./blocks-F9Y7eMXh.js";import{E as p,a as o}from"./enchanted-avatar.stories-C_FYmcdv.js";import{c as t}from"./cssClassEnums-CMPlQyPz.js";import"./preload-helper-C1FmrZbK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DY3tjC3r.js";import"./tags-CwWDjGJh.js";import"./enchanted-avatar-DI7j70IN.js";import"./index-CuTRIAwF.js";import"./tags-DoreIf3C.js";import"./index-D4ovR67Y.js";import"./test-avatar-image-RZI1r1Pv.js";const m=new Map([[t.AVATAR_DIV,"Root container for rounded avatars."],[t.AVATAR_DIV_CIRCULAR,"Root container for circular avatars."],[t.AVATAR_SPAN_CIRCULAR,"Circular text-based avatar content."],[t.AVATAR_SPAN_ROUNDED,"Rounded text-based avatar content."],[t.AVATAR_ICON_CIRCULAR,"Circular icon avatar content."],[t.AVATAR_ICON_ROUNDED,"Rounded icon avatar content."],[t.AVATAR_ICON_TEMPLATE_CIRCULAR,"Circular avatar content rendered from a template."],[t.AVATAR_ICON_TEMPLATE_ROUNDED,"Rounded avatar content rendered from a template."],[t.AVATAR_IMAGE_CIRCULAR,"Circular image-based avatar content."],[t.AVATAR_IMAGE_ROUNDED,"Rounded image-based avatar content."]]),R=Object.values(t).map(r=>({name:r,description:m.get(r)??""}));function s(r){const n={code:"code",h2:"h2",p:"p",...i(),...r.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(c,{of:p}),`
`,e.jsx(d,{}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"enchanted-avatar"})," displays user or entity representations as letters, icons, or images with rounded or circular shapes. Supports multiple background colors for visual distinction and identity representation."]}),`
`,e.jsx(n.h2,{id:"interactive-example",children:"Interactive example"}),`
`,e.jsx(A,{of:o}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(n.h2,{id:"css-parts",children:"CSS Parts"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Part "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:R.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:a.name})}),e.jsx("td",{children:a.description})]},a.name))})]}),`
`,e.jsx(n.h2,{id:"slots",children:"Slots"}),`
`,e.jsx(n.p,{children:"This component does not expose any slots."})]})}function V(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{m as AVATAR_PARTS_METADATA,R as CSSPARTS,V as default};
