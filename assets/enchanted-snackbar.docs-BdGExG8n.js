import{u as a,j as e,M as d,T as h,C as p,a as l}from"./blocks-F9Y7eMXh.js";import{E as m,D as o}from"./enchanted-snackbar.stories-BDlMi3qv.js";import{S as s,u as c}from"./cssClassEnums-CMPlQyPz.js";import"./preload-helper-C1FmrZbK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DY3tjC3r.js";import"./tags-CwWDjGJh.js";import"./enchanted-circular-progress-YphxYrnH.js";import"./index-B5cbY6YM.js";import"./index-CuTRIAwF.js";import"./tags-DoreIf3C.js";import"./index-B61waE2Y.js";import"./enchanted-button-AFRsqyaK.js";import"./state-Db0ArEf-.js";import"./query-BApjzB0v.js";import"./localization-wc-AMdX0.js";import"./keyboardEventKeys-BnoN8uA3.js";const S=new Map([[s.SNACKBAR_CONTAINER,"Styles root snackbar container."],[s.SNACKBAR_MESSAGE,"Styles message text container."],[s.SNACKBAR_BUTTON_CONTAINER,"Styles wrapper for snackbar buttons."],[s.SNACKBAR_BUTTONS,"Styles slot area for the snackbar message."],[s.SNACKBAR_ICON,"Styles icon shown for the snackbar message."],[s.SNACKBAR_PROGRESS,"Styles progress spinner container for progress snackbar."],[s.SNACKBAR_ICON_CONTAINER,"Styles container around the snackbar icon."]]),x=Object.values(s).map(n=>({name:n,description:S.get(n)??""})),j=new Map([[c.SNACKBAR_BUTTONS,"Optional. Used to provide one or more action buttons displayed in the snackbar. If omitted, the snackbar is rendered without any action buttons."]]),A=Object.values(c).map(n=>({name:n,description:j.get(n)??""}));function i(n){const t={code:"code",h2:"h2",p:"p",...a(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,`
`,`
`,e.jsx(d,{of:m}),`
`,e.jsx(h,{}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"enchanted-snackbar"})," displays brief temporary notifications at the bottom of the screen with five visual types (info, success, warning, error, progress). Supports HTML content and optional action buttons for user interactions."]}),`
`,e.jsx(t.h2,{id:"interactive-example",children:"Interactive example"}),`
`,e.jsx(p,{of:o}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(t.h2,{id:"css-parts",children:"CSS Parts"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Part "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:x.map(r=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:r.name})}),e.jsx("td",{children:r.description})]},r.name))})]}),`
`,e.jsx(t.h2,{id:"slots",children:"Slots"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" Slot "}),e.jsx("th",{children:" Description "})]})}),e.jsx("tbody",{children:A.map(r=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{style:{whiteSpace:"nowrap"},children:r.name})}),e.jsx("td",{children:r.description})]},r.name))})]})]})}function D(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{x as CSSPARTS,S as SNACKBAR_PARTS_METADATA,j as SNACKBAR_SLOTS_METADATA,D as default,A as slots};
