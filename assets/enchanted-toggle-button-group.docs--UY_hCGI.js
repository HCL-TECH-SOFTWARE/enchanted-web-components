import{j as t,M as d,T as c,C as T,a as h}from"./blocks-CA9wmmv7.js";import{useMDXComponents as a}from"./index-JFG68s-6.js";import{E as p,D as i}from"./enchanted-toggle-button-group.stories-Dt0auoX8.js";import{x as o,y as l}from"./cssClassEnums-CY7zIYSt.js";import"./preload-helper-C1FmrZbK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-CXiC-zJe.js";import"./tags-BoxFtPAv.js";import"./index-sb1Sop7G.js";import"./enchanted-badge-CfrVuyT0.js";import"./localization-YUdjb7F_.js";import"./enchanted-tooltip-DlcIoti1.js";import"./state-vevn46I6.js";import"./query-BApjzB0v.js";import"./exportParts-CSCHC3ow.js";import"./index-CuTRIAwF.js";import"./tags-7LaTluoi.js";const m=new Map([[o.TOGGLE_BUTTON_DISABLED,"The disabled state of the toggle button."],[o.TOGGLE_BUTTON_DIV,"The wrapper around the toggle button."],[o.TOGGLE_BUTTON_BADGE_WRAPPER,"The badge wrapper slot of the toggle button."],[o.TOGGLE_BUTTON_ICON,"The icon slot of the toggle button."],[o.TOGGLE_SINGLE_BUTTON," Main toggle button element."],[o.TOGGLE_BUTTON_SMALL," Small toggle button size."],[o.TOGGLE_BUTTON_LARGE,"Large toggle button size."],[o.TOGGLE_BUTTON_WITH_PADDING,"Toggle button with padding."],[o.TOGGLE_BUTTON_GROUP_CONTAINER,"Container for a group of toggle buttons."],[o.TOGGLE_BUTTON_GROUP_SLOT,"Slot used for toggle-button children."],[o.TOGGLE_BUTTON_FOCUS_RING,"Focus ring shown on the button."]]),g=Object.values(o).map(e=>({name:e,description:m.get(e)??""})),u=new Map([[l.DEFAULT_SLOT,"Required. Used to provide one or more `enchanted-toggle-button` components that participate in toggle group. If omitted, the toggle group is rendered without any buttons and cannot be interacted with."]]),O=Object.values(l).map(e=>({name:e,description:u.get(e)??""}));function s(e){const n={code:"code",h2:"h2",p:"p",...a(),...e.components};return t.jsxs(t.Fragment,{children:[`
`,`
`,`
`,`
`,`
`,`
`,t.jsx(d,{of:p}),`
`,t.jsx(c,{}),`
`,t.jsxs(n.p,{children:["The ",t.jsx(n.code,{children:"enchanted-toggle-button-group"})," is a container for multiple toggle buttons in horizontal or vertical layout. Supports single selection mode with optional badges, tooltips, and size customization for toolbar-style button groups."]}),`
`,t.jsx(n.h2,{id:"interactive-example",children:"Interactive example"}),`
`,t.jsx(T,{of:i}),`
`,t.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(h,{of:i}),`
`,t.jsx(n.h2,{id:"css-parts",children:"CSS Parts"}),`
`,t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:" Part "}),t.jsx("th",{children:" Description "})]})}),t.jsx("tbody",{children:g.map(r=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:r.name})}),t.jsx("td",{children:r.description})]},r.name))})]}),`
`,t.jsx(n.h2,{id:"slots",children:"Slots"}),`
`,t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:" Slot "}),t.jsx("th",{children:" Description "})]})}),t.jsx("tbody",{children:O.map(r=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{style:{whiteSpace:"nowrap"},children:r.name})}),t.jsx("td",{children:r.description})]},r.name))})]})]})}function C(e={}){const{wrapper:n}={...a(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(s,{...e})}):s(e)}export{g as CSSPARTS,u as TOGGLE_BUTTON_GROUP_SLOTS_METADATA,m as TOGGLE_BUTTON_PARTS_METADATA,C as default,O as slots};
