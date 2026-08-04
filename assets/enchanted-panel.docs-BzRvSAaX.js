import{j as e,M as c,T as l,C as h,a as p}from"./blocks-D7FCWugj.js";import{useMDXComponents as d}from"./index-DYDNvvCy.js";import{E as m,D as o}from"./enchanted-panel.stories-BYaViagF.js";import{P as s,p as r}from"./cssClassEnums-CY7zIYSt.js";import"./preload-helper-C1FmrZbK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-B4blCNHZ.js";import"./tags-BB5KXmdF.js";import"./enchanted-button-D6oqnDeG.js";import"./state-B-Bwqa8u.js";import"./query-BApjzB0v.js";import"./localization-BPNcoI2x.js";import"./keyboardEventKeys-BnoN8uA3.js";import"./index-CWwr-8yc.js";import"./index-CuTRIAwF.js";import"./tags-C8bWlkz1.js";const x=new Map([[s.PANEL_CONTAINER,"Styles main panel wrapper."],[s.PANEL_HEADER,"Styles header section with title."],[s.PANEL_TITLE,"Styles title text element."],[s.PANEL_CONTENT,"Styles main content area."],[s.PANEL_CLOSE_BUTTON,"Styles close/dismiss button."]]),j=Object.values(s).map(t=>({name:t,description:x.get(t)??""})),T=new Map([[r.CENTER_TITLE_CONTENT,"Optional. Used to provide custom content in the center of the panel header, such as actions, indicators, or additional controls. If omitted, only the default header title and close button are displayed."],[r.CONTENT,"Required. Used to provide the main content displayed inside the panel. If omitted, the panel is rendered without any body content"]]),E=Object.values(r).map(t=>({name:t,description:T.get(t)??""}));function a(t){const n={code:"code",h2:"h2",p:"p",...d(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,`
`,`
`,e.jsx(c,{of:m}),`
`,e.jsx(l,{}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"enchanted-panel"})," is a side panel or drawer component that slides in from left or right with customizable title and content areas. Use for supplementary navigation, settings, or detailed views without navigating away."]}),`
`,e.jsx(n.h2,{id:"interactive-example",children:"Interactive example"}),`
`,e.jsx(h,{of:o}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(p,{of:o}),`
`,e.jsx(n.h2,{id:"css-parts",children:"CSS Parts"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Part "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:j.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:i.name})}),e.jsx("td",{children:i.description})]},i.name))})]}),`
`,e.jsx(n.h2,{id:"slots",children:"Slots"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Slot "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:E.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{style:{whiteSpace:"nowrap"},children:i.name})}),e.jsx("td",{children:i.description})]},i.name))})]})]})}function g(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{j as CSSPARTS,x as PANEL_PARTS_METADATA,T as PANEL_SLOTS_METADATA,g as default,E as slots};
