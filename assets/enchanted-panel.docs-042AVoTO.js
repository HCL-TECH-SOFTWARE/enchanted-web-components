import{u as d,j as e,M as c,T as l,C as h,a as p}from"./blocks-F9Y7eMXh.js";import{E as m,D as o}from"./enchanted-panel.stories-D2Z1fThL.js";import{P as i,p as r}from"./cssClassEnums-CMPlQyPz.js";import"./preload-helper-C1FmrZbK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DY3tjC3r.js";import"./tags-CwWDjGJh.js";import"./enchanted-button-AFRsqyaK.js";import"./state-Db0ArEf-.js";import"./query-BApjzB0v.js";import"./localization-wc-AMdX0.js";import"./keyboardEventKeys-BnoN8uA3.js";import"./index-GD79fOtH.js";import"./index-CuTRIAwF.js";import"./tags-DoreIf3C.js";const x=new Map([[i.PANEL_CONTAINER,"Styles main panel wrapper."],[i.PANEL_HEADER,"Styles header section with title."],[i.PANEL_TITLE,"Styles title text element."],[i.PANEL_CONTENT,"Styles main content area."],[i.PANEL_CLOSE_BUTTON,"Styles close/dismiss button."]]),j=Object.values(i).map(t=>({name:t,description:x.get(t)??""})),T=new Map([[r.CENTER_TITLE_CONTENT,"Optional. Used to provide custom content in the center of the panel header, such as actions, indicators, or additional controls. If omitted, only the default header title and close button are displayed."],[r.CONTENT,"Required. Used to provide the main content displayed inside the panel. If omitted, the panel is rendered without any body content"]]),E=Object.values(r).map(t=>({name:t,description:T.get(t)??""}));function a(t){const n={code:"code",h2:"h2",p:"p",...d(),...t.components};return e.jsxs(e.Fragment,{children:[`
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
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Part "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:j.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:s.name})}),e.jsx("td",{children:s.description})]},s.name))})]}),`
`,e.jsx(n.h2,{id:"slots",children:"Slots"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Slot "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:E.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{style:{whiteSpace:"nowrap"},children:s.name})}),e.jsx("td",{children:s.description})]},s.name))})]})]})}function M(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{j as CSSPARTS,x as PANEL_PARTS_METADATA,T as PANEL_SLOTS_METADATA,M as default,E as slots};
