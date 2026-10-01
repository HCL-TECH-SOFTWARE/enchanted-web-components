import{u as c,j as t,M as d,T as l,C as h,a as p}from"./blocks-F9Y7eMXh.js";import{E as m,D as r}from"./enchanted-tooltip.stories-CYxD22AJ.js";import{V as s,$ as i}from"./cssClassEnums-CMPlQyPz.js";import"./preload-helper-C1FmrZbK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DY3tjC3r.js";import"./tags-CwWDjGJh.js";import"./enchanted-tooltip-CPYXSVC1.js";import"./state-Db0ArEf-.js";import"./query-BApjzB0v.js";import"./enchanted-button-AFRsqyaK.js";import"./localization-wc-AMdX0.js";import"./keyboardEventKeys-BnoN8uA3.js";const x=new Map([[s.TOOLTIP_ROOT,"Styles root container for the tooltip wrapper."],[s.TOOLTIP_TEXT,"Styles tooltip bubble content."],[s.TOOLTIP_TEXT_HIDDEN,"Styles hidden tooltip text state."],[s.TOOLTIP_TARGET,"Styles target element that triggers the tooltip."]]),T=Object.values(s).map(e=>({name:e,description:x.get(e)??""})),j=new Map([[i.TOOLTIP,"Optional. Used to provide custom tooltip content. If omitted, the component displays the value of the `tooltiptext` property."],[i.TARGET,"Required. Used to provide the element that displays the tooltip when hovered or focused. If omitted, the tooltip has no target and cannot be shown."]]),O=Object.values(i).map(e=>({name:e,description:j.get(e)??""}));function a(e){const n={code:"code",h2:"h2",p:"p",...c(),...e.components};return t.jsxs(t.Fragment,{children:[`
`,`
`,`
`,`
`,`
`,`
`,t.jsx(d,{of:m}),`
`,t.jsx(l,{}),`
`,t.jsxs(n.p,{children:["The ",t.jsx(n.code,{children:"enchanted-tooltip"})," displays contextual help or information text when hovering over a target element. Supports 12 placement positions with automatic viewport constraint adjustment and multiple size variants for flexible use cases."]}),`
`,t.jsx(n.h2,{id:"interactive-example",children:"Interactive example"}),`
`,t.jsx(h,{of:r}),`
`,t.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(p,{of:r}),`
`,t.jsx(n.h2,{id:"css-parts",children:"CSS Parts"}),`
`,t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:" Part "}),t.jsx("th",{children:" Description "})]})}),t.jsx("tbody",{children:T.map(o=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:o.name})}),t.jsx("td",{children:o.description})]},o.name))})]}),`
`,t.jsx(n.h2,{id:"slots",children:"Slots"}),`
`,t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:" Slot "}),t.jsx("th",{children:" Description "})]})}),t.jsx("tbody",{children:O.map(o=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{style:{whiteSpace:"nowrap"},children:o.name})}),t.jsx("td",{children:o.description})]},o.name))})]})]})}function E(e={}){const{wrapper:n}={...c(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(a,{...e})}):a(e)}export{T as CSSPARTS,x as TOOLTIP_PARTS_METADATA,j as TOOLTIP_SLOTS_METADATA,E as default,O as slots};
