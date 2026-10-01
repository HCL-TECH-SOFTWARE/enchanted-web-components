import{u as c,j as e,M as p,T as d,C as h,a as m}from"./blocks-F9Y7eMXh.js";import{E as x,a as i}from"./enchanted-popover.stories-Qh4HP7-6.js";import{q as n,r}from"./cssClassEnums-CMPlQyPz.js";import"./preload-helper-C1FmrZbK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DY3tjC3r.js";import"./tags-CwWDjGJh.js";import"./index-GD79fOtH.js";import"./index-CuTRIAwF.js";import"./tags-DoreIf3C.js";import"./localization-wc-AMdX0.js";import"./enchanted-button-AFRsqyaK.js";import"./state-Db0ArEf-.js";import"./query-BApjzB0v.js";import"./keyboardEventKeys-BnoN8uA3.js";const l=new Map([[n.POPOVER_WRAPPER,"Styles Wrapper around the popover content."],[n.POPOVER_ARROW,"Styles arrow element for the popover."],[n.POPOVER_CONTAINER,"Styles popover content container."],[n.POPOVER_CONTAINER_RTL,"Styles RTL popover content container."],[n.POPOVER_CONTENT,"Styles content area."],[n.POPOVER_LABEL,"Styles label content slot."],[n.POPOVER_TEXT,"Styles text content slot."],[n.POPOVER_CLOSE_ICON,"Styles close icon button."],[n.POPOVER_CLOSE_ICON_RTL,"Styles RTL close icon button."],[n.POPOVER_TARGET,"Styles target element that anchors the popover."]]),O=Object.values(n).map(t=>({name:t,description:l.get(t)??""})),g=new Map([[r.TARGET,"Required. Used to provide the element that triggers the popover on hover or keyboard focus. If omitted, the popover has no target and cannot be displayed."],[r.LABEL,"Optional. Used to provide custom label content when `showLabel` is enabled. If omitted, the component displays the value of the `label` property."],[r.TEXT,"Optional. Used to provide custom popover body content when `showText` is enabled. If omitted, the component displays the value of the `text` property."]]),P=Object.values(r).map(t=>({name:t,description:l.get(t)??""}));function a(t){const o={code:"code",h2:"h2",p:"p",...c(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,`
`,`
`,e.jsx(p,{of:x}),`
`,e.jsx(d,{}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"enchanted-popover"})," displays contextual content in a floating panel anchored to a target element. Supports 13 arrow positions, dark/light themes, optional close buttons, and full RTL support for flexible positioning."]}),`
`,e.jsx(o.h2,{id:"interactive-example",children:"Interactive example"}),`
`,e.jsx(h,{of:i}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(m,{of:i}),`
`,e.jsx(o.h2,{id:"css-parts",children:"CSS Parts"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Part "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:O.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:s.name})}),e.jsx("td",{children:s.description})]},s.name))})]}),`
`,e.jsx(o.h2,{id:"slots",children:"Slots"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Slot "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:P.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{style:{whiteSpace:"nowrap"},children:s.name})}),e.jsx("td",{children:s.description})]},s.name))})]})]})}function w(t={}){const{wrapper:o}={...c(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(a,{...t})}):a(t)}export{O as CSSPARTS,l as POPOVER_PARTS_METADATA,g as POPOVER_SLOTS_METADATA,w as default,P as slots};
