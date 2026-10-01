import{u as c,j as e,M as a,T as d,C as l,a as h}from"./blocks-F9Y7eMXh.js";import{E as S,D as r}from"./enchanted-switch.stories-BFEjUhTG.js";import{v as n}from"./cssClassEnums-CMPlQyPz.js";import"./preload-helper-C1FmrZbK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DY3tjC3r.js";import"./tags-CwWDjGJh.js";import"./lodash-CdDiHlzQ.js";import"./keyboardEventKeys-BnoN8uA3.js";const p=new Map([[n.SWITCH_LABEL,"Styles label wrapper around the switch control."],[n.SWITCH_LABEL_DISABLED,"Styles disabled label."],[n.SWITCH_INPUT,"Styles checkbox input element."],[n.SWITCH_SLIDER,"Styles switch visual track."],[n.SWITCH_SLIDER_CHECKED,"Styles checked switch track."],[n.SWITCH_SLIDER_DISABLED,"Styles disabled switch track."],[n.SWITCH_SLIDER_CHECKED_DISABLED,"Styles checked and disabled switch track."]]),x=Object.values(n).map(s=>({name:s,description:p.get(s)??""}));function o(s){const t={code:"code",h2:"h2",p:"p",...c(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:S}),`
`,e.jsx(d,{}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"enchanted-switch"})," provides a toggle control for binary on/off states with keyboard navigation support (Enter/Space keys). Use switches for immediate actions where changes take effect instantly without requiring save or submit."]}),`
`,e.jsx(t.h2,{id:"interactive-example",children:"Interactive example"}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(t.h2,{id:"css-parts",children:"CSS Parts"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Part "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:x.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:i.name})}),e.jsx("td",{children:i.description})]},i.name))})]}),`
`,e.jsx(t.h2,{id:"slots",children:"Slots"}),`
`,e.jsx(t.p,{children:"This component does not expose any slots."})]})}function f(s={}){const{wrapper:t}={...c(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(o,{...s})}):o(s)}export{x as CSSPARTS,p as SWITCH_PARTS_METADATA,f as default};
