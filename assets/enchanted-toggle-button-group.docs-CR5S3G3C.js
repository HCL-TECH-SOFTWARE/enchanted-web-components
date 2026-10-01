import{u as a,j as t,M as d,T as c,C as T,a as h}from"./blocks-F9Y7eMXh.js";import{E as p,D as r}from"./enchanted-toggle-button-group.stories-Io_veNqx.js";import{x as n,y as l}from"./cssClassEnums-CMPlQyPz.js";import"./preload-helper-C1FmrZbK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DY3tjC3r.js";import"./tags-CwWDjGJh.js";import"./index-MjCKsSj_.js";import"./enchanted-badge-BxkBp9tM.js";import"./localization-wc-AMdX0.js";import"./enchanted-tooltip-CPYXSVC1.js";import"./state-Db0ArEf-.js";import"./query-BApjzB0v.js";import"./exportParts-DduVWjiD.js";import"./index-CuTRIAwF.js";import"./tags-DoreIf3C.js";const g=new Map([[n.TOGGLE_BUTTON_DISABLED,"The disabled state of the toggle button."],[n.TOGGLE_BUTTON_DIV,"The wrapper around the toggle button."],[n.TOGGLE_BUTTON_BADGE_WRAPPER,"The badge wrapper slot of the toggle button."],[n.TOGGLE_BUTTON_ICON,"The icon slot of the toggle button."],[n.TOGGLE_SINGLE_BUTTON," Main toggle button element."],[n.TOGGLE_BUTTON_SMALL," Small toggle button size."],[n.TOGGLE_BUTTON_LARGE,"Large toggle button size."],[n.TOGGLE_BUTTON_WITH_PADDING,"Toggle button with padding."],[n.TOGGLE_BUTTON_GROUP_CONTAINER,"Container for a group of toggle buttons."],[n.TOGGLE_BUTTON_GROUP_SLOT,"Slot used for toggle-button children."],[n.TOGGLE_BUTTON_FOCUS_RING,"Focus ring shown on the button."]]),m=Object.values(n).map(e=>({name:e,description:g.get(e)??""})),u=new Map([[l.DEFAULT_SLOT,"Required. Used to provide one or more `enchanted-toggle-button` components that participate in toggle group. If omitted, the toggle group is rendered without any buttons and cannot be interacted with."]]),O=Object.values(l).map(e=>({name:e,description:u.get(e)??""}));function i(e){const o={code:"code",h2:"h2",p:"p",...a(),...e.components};return t.jsxs(t.Fragment,{children:[`
`,`
`,`
`,`
`,`
`,`
`,t.jsx(d,{of:p}),`
`,t.jsx(c,{}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"enchanted-toggle-button-group"})," is a container for multiple toggle buttons in horizontal or vertical layout. Supports single selection mode with optional badges, tooltips, and size customization for toolbar-style button groups."]}),`
`,t.jsx(o.h2,{id:"interactive-example",children:"Interactive example"}),`
`,t.jsx(T,{of:r}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(h,{of:r}),`
`,t.jsx(o.h2,{id:"css-parts",children:"CSS Parts"}),`
`,t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:" Part "}),t.jsx("th",{children:" Description "})]})}),t.jsx("tbody",{children:m.map(s=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:s.name})}),t.jsx("td",{children:s.description})]},s.name))})]}),`
`,t.jsx(o.h2,{id:"slots",children:"Slots"}),`
`,t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:" Slot "}),t.jsx("th",{children:" Description "})]})}),t.jsx("tbody",{children:O.map(s=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{style:{whiteSpace:"nowrap"},children:s.name})}),t.jsx("td",{children:s.description})]},s.name))})]})]})}function w(e={}){const{wrapper:o}={...a(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(i,{...e})}):i(e)}export{m as CSSPARTS,u as TOGGLE_BUTTON_GROUP_SLOTS_METADATA,g as TOGGLE_BUTTON_PARTS_METADATA,w as default,O as slots};
