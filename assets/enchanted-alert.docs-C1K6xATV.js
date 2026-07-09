import{j as e,M as l,T as c,C as h,a as d}from"./blocks-8wSuGiO3.js";import{useMDXComponents as o}from"./index-BbMSz0O7.js";import{E,a as i}from"./enchanted-alert.stories-Bvyf3tVf.js";import{a as t}from"./cssClassEnums-B0FxBdGx.js";import"./preload-helper-C1FmrZbK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-q8uLr7wl.js";import"./tags-CoVdckeD.js";import"./index-BHCkbqoI.js";import"./index-CuTRIAwF.js";import"./tags-Dsu22f7O.js";import"./index-Cu-SjR_S.js";const T=new Map([[t.ALERT_DIV_ROOT,"Styles the alert root container."],[t.ALERT_CONTAINED_INFO,"Styles the contained alert in the info state."],[t.ALERT_CONTAINED_ERROR,"Styles the contained alert in the error state."],[t.ALERT_CONTAINED_SUCCESS,"Styles the contained alert in the success state."],[t.ALERT_CONTAINED_WARNING,"Styles the contained alert in the warning state."],[t.ALERT_OUTLINED_INFO,"Styles the outlined alert in the info state."],[t.ALERT_OUTLINED_ERROR,"Styles the outlined alert in the error state."],[t.ALERT_OUTLINED_SUCCESS,"Styles the outlined alert in the success state."],[t.ALERT_OUTLINED_WARNING,"Styles the outlined alert in the warning state."],[t.ALERT_SVG_SUCCESS,"Styles the alert icon in the success state."],[t.ALERT_SVG_WARNING,"Styles the alert icon in the warning state."],[t.ALERT_SVG_INFO,"Styles the alert icon in the info state."],[t.ALERT_SVG_ERROR,"Styles the alert icon in the error state."],[t.ALERT_CONTENT,"Styles the alert content area."],[t.ALERT_TITLE,"Styles the alert title text."]]),S=Object.values(t).map(s=>({name:s,description:T.get(s)??""}));function a(s){const n={code:"code",h2:"h2",p:"p",...o(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(l,{of:E}),`
`,e.jsx(c,{}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"enchanted-alert"})," displays important messages with multiple severity levels (info, success, warning, error) and visual variants (contained, outlined). Each severity has a corresponding icon and color scheme for visual feedback."]}),`
`,e.jsx(n.h2,{id:"interactive-example",children:"Interactive example"}),`
`,e.jsx(h,{of:i}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(n.h2,{id:"css-parts",children:"CSS Parts"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Part "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:S.map(r=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:r.name})}),e.jsx("td",{children:r.description})]},r.name))})]}),`
`,e.jsx(n.h2,{id:"slots",children:"Slots"}),`
`,e.jsx(n.p,{children:"This component does not expose any slots."})]})}function O(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{T as ALERT_PART_METADATA,S as CSSPARTS,O as default};
