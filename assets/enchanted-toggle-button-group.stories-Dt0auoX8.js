import{c as z,ai as h,a as V,u as g,n as E,aj as r,B as t,g as o}from"./tags-BoxFtPAv.js";import{a as s,E as i}from"./index-sb1Sop7G.js";import{x as L,O as u}from"./cssClassEnums-CY7zIYSt.js";import"./enchanted-badge-CfrVuyT0.js";import{x as A}from"./iframe-CXiC-zJe.js";import{t as N}from"./index-CuTRIAwF.js";import{c as G,I as O,B as _}from"./tags-7LaTluoi.js";var P=Object.defineProperty,m=(e,a,c,n)=>{for(var d=void 0,l=e.length-1,T;l>=0;l--)(T=e[l])&&(d=T(a,c,d)||d);return d&&P(a,c,d),d};const M=z("enchanted-web-components:components:atomic-component:enchanted-toggle-button-group.ts");class p extends V{constructor(){super(...arguments),this.orientation=s.HORIZONTAL,this.size=i.LARGE,this.disabled=!1,this.selectedIndex=0,this.toggleItems=[],this.handleToggleChange=a=>{var T;const c=a.target,n=a,d=typeof((T=n.detail)==null?void 0:T.toggleOn)=="boolean"?n.detail.toggleOn:c.toggleOn,l=this.toggleItems.indexOf(c);if(!(l<0)){if(!d){this.selectedIndex=-1,this.updateButtons();return}l!==this.selectedIndex&&(this.selectedIndex=l,this.updateButtons(),this.dispatchEvent(new CustomEvent("toggle-group-change",{detail:{selectedIndex:this.selectedIndex},bubbles:!0,composed:!0})))}}}handleSlotChange(){const a=this.renderRoot.querySelector("slot");a&&(this.toggleItems=a.assignedElements({flatten:!0}),this.updateButtons())}updated(a){super.updated(a),this.updateButtons()}updateButtons(){if(!this.toggleItems.length)return;const a=this.orientation===s.HORIZONTAL,c=this.size===i.SMALL?i.SMALL:i.LARGE;this.toggleItems.forEach((n,d)=>{const l=d===0,T=d===this.toggleItems.length-1,v=this.toggleItems.length===1;a?v?(n.firstType=!1,n.lastType=!1):l?(n.firstType=!0,n.lastType=!1):T?(n.firstType=!1,n.lastType=!0):(n.firstType=!0,n.lastType=!0):(n.firstType=!1,n.lastType=!1),n.toggleOn=d===this.selectedIndex,n.iconSize=c,n.disabled=this.disabled,n.removeEventListener("toggle-change",this.handleToggleChange),n.addEventListener("toggle-change",this.handleToggleChange)})}render(){return g`
        <div part=${L.TOGGLE_BUTTON_GROUP_CONTAINER} data-testid="enchanted-toggle-button-group-div">
            <slot part=${L.TOGGLE_BUTTON_GROUP_SLOT} @slotchange=${this.handleSlotChange}></slot>
        </div>
    `}}m([E({type:String,reflect:!0})],p.prototype,"orientation");m([E({type:String})],p.prototype,"size");m([E({type:Boolean,reflect:!0})],p.prototype,"disabled");m([E({type:Number})],p.prototype,"selectedIndex");m([E({attribute:!1})],p.prototype,"toggleItems");customElements.get(h)?M("Component (%s) is currently registered and not possible to registrate again.",h):customElements.define(h,p);var B={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M2 26H30V28H2zM25.4 9c.8-.8.8-2 0-2.8 0 0 0 0 0 0l-3.6-3.6c-.8-.8-2-.8-2.8 0 0 0 0 0 0 0l-15 15V24h6.4L25.4 9zM20.4 4L24 7.6l-3 3L17.4 7 20.4 4zM6 22v-3.6l10-10 3.6 3.6-10 10H6z"}}],name:"edit",size:32};const f=`${O}icon-edit`;let Z=class extends _{render(){return A`${N({...B,attrs:{...B.attrs,preserveAspectRatio:"xMidYMid"}})}`}};G&&!customElements.get(f)&&customElements.define(f,Z);var x={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"m29,26H12c-.2651,0-.5195-.1053-.707-.2928L2.293,16.7072c-.3906-.3906-.3906-1.0237,0-1.4143L11.293,6.2928c.1875-.1875.4419-.2928.707-.2928h17c.5522,0,1,.4478,1,1v18c0,.5522-.4478,1-1,1Zm-16.5857-2h15.5857V8h-15.5857l-8,8,8,8Z"}},{elem:"path",attrs:{d:"M20.4141 16L25 11.4141 23.5859 10 19 14.5859 14.4143 10 13 11.4141 17.5859 16 13 20.5859 14.4143 22 19 17.4141 23.5859 22 25 20.5859 20.4141 16z"}}],name:"delete",size:32};const y=`${O}icon-delete`;let W=class extends _{render(){return A`${N({...x,attrs:{...x.attrs,preserveAspectRatio:"xMidYMid"}})}`}};G&&!customElements.get(y)&&customElements.define(y,W);var I={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"}},{elem:"path",attrs:{d:"M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"}}],name:"copy",size:32};const D=`${O}icon-copy`;class j extends _{render(){return A`${N({...I,attrs:{...I.attrs,preserveAspectRatio:"xMidYMid"}})}`}}G&&!customElements.get(D)&&customElements.define(D,j);const Y={title:"Input/Enchanted Toggle Button Group",argTypes:{orientation:{control:{type:"select"},options:[s.HORIZONTAL,s.VERTICAL],description:"Layout direction of the button group",table:{category:"Group",defaultValue:{summary:s.HORIZONTAL}}},size:{control:{type:"select"},options:[i.SMALL,i.LARGE],description:"Icon size applied to every button in the group",table:{category:"Group",defaultValue:{summary:i.LARGE}}},disabled:{control:"boolean",description:"Disable all buttons in the group",table:{category:"Group",defaultValue:{summary:"false"}}},selectedIndex:{control:"number",description:"Index of the currently selected button (0-based)",table:{category:"Group",defaultValue:{summary:"0"}}},button1AriaLabel:{control:"text",description:"Aria label for Button 1",table:{category:"Button 1 (Add)",defaultValue:{summary:"Add"}}},button1TooltipText:{control:"text",description:"Tooltip text for Button 1",table:{category:"Button 1 (Add)",defaultValue:{summary:"Add"}}},button1ShowBadge:{control:"boolean",description:"Show badge on Button 1",table:{category:"Button 1 (Add)",defaultValue:{summary:"false"}}},button1Padding:{control:"boolean",description:"Add extra padding inside Button 1",table:{category:"Button 1 (Add)",defaultValue:{summary:"false"}}},button2AriaLabel:{control:"text",description:"Aria label for Button 2",table:{category:"Button 2 (Edit)",defaultValue:{summary:"Edit"}}},button2TooltipText:{control:"text",description:"Tooltip text for Button 2",table:{category:"Button 2 (Edit)",defaultValue:{summary:"Edit"}}},button2ShowBadge:{control:"boolean",description:"Show badge on Button 2",table:{category:"Button 2 (Edit)",defaultValue:{summary:"false"}}},button2Padding:{control:"boolean",description:"Add extra padding inside Button 2",table:{category:"Button 2 (Edit)",defaultValue:{summary:"false"}}},button3AriaLabel:{control:"text",description:"Aria label for Button 3",table:{category:"Button 3 (Delete)",defaultValue:{summary:"Delete"}}},button3TooltipText:{control:"text",description:"Tooltip text for Button 3",table:{category:"Button 3 (Delete)",defaultValue:{summary:"Delete"}}},button3ShowBadge:{control:"boolean",description:"Show badge on Button 3",table:{category:"Button 3 (Delete)",defaultValue:{summary:"true"}}},button3Padding:{control:"boolean",description:"Add extra padding inside Button 3",table:{category:"Button 3 (Delete)",defaultValue:{summary:"false"}}}},args:{orientation:s.HORIZONTAL,size:i.LARGE,disabled:!1,selectedIndex:0,button1AriaLabel:"Add",button1TooltipText:"Add",button1ShowBadge:!1,button1Padding:!1,button2AriaLabel:"Edit",button2TooltipText:"Edit",button2ShowBadge:!1,button2Padding:!1,button3AriaLabel:"Delete",button3TooltipText:"Delete",button3ShowBadge:!0,button3Padding:!1},render:e=>g` 
        <${r}
          orientation=${e.orientation}
          size=${e.size}
          ?disabled=${e.disabled}
          .selectedIndex=${e.selectedIndex}
        >
          <${t}
            .ariaLabel=${e.button1AriaLabel}
            tooltipText=${e.button1TooltipText}
            ?showBadge=${e.button1ShowBadge}
            ?padding=${e.button1Padding}
          >
            <${o("icon-add")} slot="icon"></${o("icon-add")}>
            ${e.button1ShowBadge?g`<enchanted-badge slot="badge" badge=${u.DOT}></enchanted-badge>`:""}
          </${t}>
          <${t}
            .ariaLabel=${e.button2AriaLabel}
            tooltipText=${e.button2TooltipText}
            ?showBadge=${e.button2ShowBadge}
            ?padding=${e.button2Padding}
          >
            <${o("icon-edit")} slot="icon"></${o("icon-edit")}>
            ${e.button2ShowBadge?g`<enchanted-badge slot="badge" badge=${u.DOT}></enchanted-badge>`:""}
          </${t}>
          <${t}
            .ariaLabel=${e.button3AriaLabel}
            tooltipText=${e.button3TooltipText}
            ?showBadge=${e.button3ShowBadge}
            ?padding=${e.button3Padding}
          >
            <${o("icon-delete")} slot="icon"></${o("icon-delete")}>
            ${e.button3ShowBadge?g`<enchanted-badge slot="badge" badge=${u.DOT}></enchanted-badge>`:""}
          </${t}>
        </${r}>
        `},$={},b={render:()=>g`
        <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end; padding: 20px 24px 24px;">
          <${r}
            orientation=${s.HORIZONTAL}
            size=${i.LARGE}
          >
            <${t} .ariaLabel=${"Add"} tooltipText="Add">
              <${o("icon-add")} slot="icon"></${o("icon-add")}>
            </${t}>
            <${t} .ariaLabel=${"Edit"} tooltipText="Edit">
              <${o("icon-edit")} slot="icon"></${o("icon-edit")}>
            </${t}>
            <${t} .ariaLabel=${"Delete"} tooltipText="Delete" showBadge>
              <${o("icon-delete")} slot="icon"></${o("icon-delete")}>
              <enchanted-badge slot="badge" badge=${u.DOT}></enchanted-badge>
            </${t}>
          </${r}>

          <${r}
            orientation=${s.HORIZONTAL}
            size=${i.SMALL}
            .selectedIndex=${1}
          >
            <${t} .ariaLabel=${"Add"} tooltipText="Add">
              <${o("icon-add")} slot="icon"></${o("icon-add")}>
            </${t}>
            <${t} .ariaLabel=${"Edit"} tooltipText="Edit">
              <${o("icon-edit")} slot="icon"></${o("icon-edit")}>
            </${t}>
            <${t} .ariaLabel=${"Delete"} tooltipText="Delete" showBadge>
              <${o("icon-delete")} slot="icon"></${o("icon-delete")}>
              <enchanted-badge slot="badge" badge=${u.DOT}></enchanted-badge>
            </${t}>
          </${r}>

          <${r}
            orientation=${s.VERTICAL}
            size=${i.LARGE}
            ?disabled=${!0}
          >
            <${t} .ariaLabel=${"Add"} tooltipText="Add">
              <${o("icon-add")} slot="icon"></${o("icon-add")}>
            </${t}>
            <${t} .ariaLabel=${"Edit"} tooltipText="Edit">
              <${o("icon-edit")} slot="icon"></${o("icon-edit")}>
            </${t}>
            <${t} .ariaLabel=${"Delete"} tooltipText="Delete" showBadge>
              <${o("icon-delete")} slot="icon"></${o("icon-delete")}>
              <enchanted-badge slot="badge" badge=${u.DOT}></enchanted-badge>
            </${t}>
          </${r}>
        </div>
      `};var C,w,H;$.parameters={...$.parameters,docs:{...(C=$.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(H=(w=$.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var S,U,R;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    return html\`
        <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end; padding: 20px 24px 24px;">
          <\${ENCHANTED_TOGGLE_BUTTON_GROUP_TAG}
            orientation=\${EnchantedToggleGroupOrientation.HORIZONTAL}
            size=\${EnchantedToggleButtonSize.LARGE}
          >
            <\${ENCHANTED_TOGGLE_BUTTON_TAG} .ariaLabel=\${"Add"} tooltipText="Add">
              <\${generateIconTagName('icon-add')} slot="icon"></\${generateIconTagName('icon-add')}>
            </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
            <\${ENCHANTED_TOGGLE_BUTTON_TAG} .ariaLabel=\${"Edit"} tooltipText="Edit">
              <\${generateIconTagName('icon-edit')} slot="icon"></\${generateIconTagName('icon-edit')}>
            </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
            <\${ENCHANTED_TOGGLE_BUTTON_TAG} .ariaLabel=\${"Delete"} tooltipText="Delete" showBadge>
              <\${generateIconTagName('icon-delete')} slot="icon"></\${generateIconTagName('icon-delete')}>
              <enchanted-badge slot="badge" badge=\${EnchantedBadgeType.DOT}></enchanted-badge>
            </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
          </\${ENCHANTED_TOGGLE_BUTTON_GROUP_TAG}>

          <\${ENCHANTED_TOGGLE_BUTTON_GROUP_TAG}
            orientation=\${EnchantedToggleGroupOrientation.HORIZONTAL}
            size=\${EnchantedToggleButtonSize.SMALL}
            .selectedIndex=\${1}
          >
            <\${ENCHANTED_TOGGLE_BUTTON_TAG} .ariaLabel=\${"Add"} tooltipText="Add">
              <\${generateIconTagName('icon-add')} slot="icon"></\${generateIconTagName('icon-add')}>
            </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
            <\${ENCHANTED_TOGGLE_BUTTON_TAG} .ariaLabel=\${"Edit"} tooltipText="Edit">
              <\${generateIconTagName('icon-edit')} slot="icon"></\${generateIconTagName('icon-edit')}>
            </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
            <\${ENCHANTED_TOGGLE_BUTTON_TAG} .ariaLabel=\${"Delete"} tooltipText="Delete" showBadge>
              <\${generateIconTagName('icon-delete')} slot="icon"></\${generateIconTagName('icon-delete')}>
              <enchanted-badge slot="badge" badge=\${EnchantedBadgeType.DOT}></enchanted-badge>
            </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
          </\${ENCHANTED_TOGGLE_BUTTON_GROUP_TAG}>

          <\${ENCHANTED_TOGGLE_BUTTON_GROUP_TAG}
            orientation=\${EnchantedToggleGroupOrientation.VERTICAL}
            size=\${EnchantedToggleButtonSize.LARGE}
            ?disabled=\${true}
          >
            <\${ENCHANTED_TOGGLE_BUTTON_TAG} .ariaLabel=\${"Add"} tooltipText="Add">
              <\${generateIconTagName('icon-add')} slot="icon"></\${generateIconTagName('icon-add')}>
            </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
            <\${ENCHANTED_TOGGLE_BUTTON_TAG} .ariaLabel=\${"Edit"} tooltipText="Edit">
              <\${generateIconTagName('icon-edit')} slot="icon"></\${generateIconTagName('icon-edit')}>
            </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
            <\${ENCHANTED_TOGGLE_BUTTON_TAG} .ariaLabel=\${"Delete"} tooltipText="Delete" showBadge>
              <\${generateIconTagName('icon-delete')} slot="icon"></\${generateIconTagName('icon-delete')}>
              <enchanted-badge slot="badge" badge=\${EnchantedBadgeType.DOT}></enchanted-badge>
            </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
          </\${ENCHANTED_TOGGLE_BUTTON_GROUP_TAG}>
        </div>
      \`;
  }
}`,...(R=(U=b.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};const F=["Default","AllStates"],ne=Object.freeze(Object.defineProperty({__proto__:null,AllStates:b,Default:$,__namedExportsOrder:F,default:Y},Symbol.toStringTag,{value:"Module"}));export{$ as D,ne as E};
