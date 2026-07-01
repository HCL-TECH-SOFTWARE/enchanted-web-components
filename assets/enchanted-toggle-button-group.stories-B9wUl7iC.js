import{c as v,al as $,E as H,u as s,n as g,am as i,an as t,g as o}from"./tags-GuWqQq8Q.js";import"./index-CkOu3Kkl.js";import{N as G}from"./cssClassEnums-BAuKGcJP.js";import"./enchanted-badge-B982anGm.js";import{x as m}from"./iframe-DIZdwA76.js";import{t as E}from"./index-CuTRIAwF.js";import{c as h,I as N,B as _}from"./tags-OypiFpf3.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./enchanted-tooltip-DiuHkyK3.js";import"./state-CtyNSLbf.js";import"./query-BApjzB0v.js";import"./exportParts-cfcc4c_o.js";import"./localization-CViIwzVj.js";import"./preload-helper-C1FmrZbK.js";var z=Object.defineProperty,u=(e,n,l,d)=>{for(var a=void 0,r=e.length-1,T;r>=0;r--)(T=e[r])&&(a=T(n,l,a)||a);return a&&z(n,l,a),a};const S=v("enchanted-web-components:components:atomic-component:enchanted-toggle-button-group.ts");class c extends H{constructor(){super(...arguments),this.orientation="horizontal",this.size="20",this.disabled=!1,this.selectedIndex=0,this.toggleItems=[],this.handleToggleChange=n=>{var T;const l=n.target,d=n,a=typeof((T=d.detail)==null?void 0:T.toggleOn)=="boolean"?d.detail.toggleOn:l.toggleOn,r=this.toggleItems.indexOf(l);if(!(r<0)){if(!a){this.selectedIndex=-1,this.updateButtons();return}r!==this.selectedIndex&&(this.selectedIndex=r,this.updateButtons(),this.dispatchEvent(new CustomEvent("toggle-group-change",{detail:{selectedIndex:this.selectedIndex},bubbles:!0,composed:!0})))}}}handleSlotChange(){const n=this.renderRoot.querySelector("slot");n&&(this.toggleItems=n.assignedElements({flatten:!0}),this.updateButtons())}updated(n){super.updated(n),this.updateButtons()}updateButtons(){if(!this.toggleItems.length)return;const n=this.orientation==="horizontal",l=this.size==="16"?"16":"20";this.toggleItems.forEach((d,a)=>{d.firstType=n?a===0:!0,d.lastType=n?a===this.toggleItems.length-1:!0,d.toggleOn=a===this.selectedIndex,d.iconSize=l,d.disabled=this.disabled,d.removeEventListener("toggle-change",this.handleToggleChange),d.addEventListener("toggle-change",this.handleToggleChange)})}render(){return s`
        <div part=${G.TOGGLE_BUTTON_GROUP_CONTAINER} data-testid="enchanted-toggle-button-group-div">
            <slot part=${G.TOGGLE_BUTTON_GROUP_SLOT} @slotchange=${this.handleSlotChange}></slot>
        </div>
    `}}u([g({type:String,reflect:!0})],c.prototype,"orientation");u([g({type:String})],c.prototype,"size");u([g({type:Boolean,reflect:!0})],c.prototype,"disabled");u([g({type:Number})],c.prototype,"selectedIndex");u([g({attribute:!1})],c.prototype,"toggleItems");customElements.get($)?S("Component (%s) is currently registered and not possible to registrate again.",$):customElements.define($,c);var A={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M2 26H30V28H2zM25.4 9c.8-.8.8-2 0-2.8 0 0 0 0 0 0l-3.6-3.6c-.8-.8-2-.8-2.8 0 0 0 0 0 0 0l-15 15V24h6.4L25.4 9zM20.4 4L24 7.6l-3 3L17.4 7 20.4 4zM6 22v-3.6l10-10 3.6 3.6-10 10H6z"}}],name:"edit",size:32};const B=`${N}icon-edit`;let V=class extends _{render(){return m`${E({...A,attrs:{...A.attrs,preserveAspectRatio:"xMidYMid"}})}`}};h&&!customElements.get(B)&&customElements.define(B,V);var x={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"m29,26H12c-.2651,0-.5195-.1053-.707-.2928L2.293,16.7072c-.3906-.3906-.3906-1.0237,0-1.4143L11.293,6.2928c.1875-.1875.4419-.2928.707-.2928h17c.5522,0,1,.4478,1,1v18c0,.5522-.4478,1-1,1Zm-16.5857-2h15.5857V8h-15.5857l-8,8,8,8Z"}},{elem:"path",attrs:{d:"M20.4141 16L25 11.4141 23.5859 10 19 14.5859 14.4143 10 13 11.4141 17.5859 16 13 20.5859 14.4143 22 19 17.4141 23.5859 22 25 20.5859 20.4141 16z"}}],name:"delete",size:32};const O=`${N}icon-delete`;let P=class extends _{render(){return m`${E({...x,attrs:{...x.attrs,preserveAspectRatio:"xMidYMid"}})}`}};h&&!customElements.get(O)&&customElements.define(O,P);var f={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"}},{elem:"path",attrs:{d:"M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"}}],name:"copy",size:32};const L=`${N}icon-copy`;class M extends _{render(){return m`${E({...f,attrs:{...f.attrs,preserveAspectRatio:"xMidYMid"}})}`}}h&&!customElements.get(L)&&customElements.define(L,M);const ae={title:"Input/Enchanted Toggle Button Group",tags:["autodocs"],argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout direction of the button group",table:{category:"Group",defaultValue:{summary:"horizontal"}}},size:{control:{type:"select"},options:["16","20"],description:"Icon size applied to every button in the group",table:{category:"Group",defaultValue:{summary:"20"}}},disabled:{control:"boolean",description:"Disable all buttons in the group",table:{category:"Group",defaultValue:{summary:"false"}}},selectedIndex:{control:"number",description:"Index of the currently selected button (0-based)",table:{category:"Group",defaultValue:{summary:"0"}}},button1AriaLabel:{control:"text",description:"Aria label for Button 1",table:{category:"Button 1 (Add)",defaultValue:{summary:"Add"}}},button1TooltipText:{control:"text",description:"Tooltip text for Button 1",table:{category:"Button 1 (Add)",defaultValue:{summary:"Add"}}},button1ShowBadge:{control:"boolean",description:"Show badge on Button 1",table:{category:"Button 1 (Add)",defaultValue:{summary:"false"}}},button1Padding:{control:"boolean",description:"Add extra padding inside Button 1",table:{category:"Button 1 (Add)",defaultValue:{summary:"false"}}},button2AriaLabel:{control:"text",description:"Aria label for Button 2",table:{category:"Button 2 (Edit)",defaultValue:{summary:"Edit"}}},button2TooltipText:{control:"text",description:"Tooltip text for Button 2",table:{category:"Button 2 (Edit)",defaultValue:{summary:"Edit"}}},button2ShowBadge:{control:"boolean",description:"Show badge on Button 2",table:{category:"Button 2 (Edit)",defaultValue:{summary:"false"}}},button2Padding:{control:"boolean",description:"Add extra padding inside Button 2",table:{category:"Button 2 (Edit)",defaultValue:{summary:"false"}}},button3AriaLabel:{control:"text",description:"Aria label for Button 3",table:{category:"Button 3 (Delete)",defaultValue:{summary:"Delete"}}},button3TooltipText:{control:"text",description:"Tooltip text for Button 3",table:{category:"Button 3 (Delete)",defaultValue:{summary:"Delete"}}},button3ShowBadge:{control:"boolean",description:"Show badge on Button 3",table:{category:"Button 3 (Delete)",defaultValue:{summary:"true"}}},button3Padding:{control:"boolean",description:"Add extra padding inside Button 3",table:{category:"Button 3 (Delete)",defaultValue:{summary:"false"}}}},args:{orientation:"horizontal",size:"20",disabled:!1,selectedIndex:0,button1AriaLabel:"Add",button1TooltipText:"Add",button1ShowBadge:!1,button1Padding:!1,button2AriaLabel:"Edit",button2TooltipText:"Edit",button2ShowBadge:!1,button2Padding:!1,button3AriaLabel:"Delete",button3TooltipText:"Delete",button3ShowBadge:!0,button3Padding:!1},render:e=>s` 
        <${i}
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
            ${e.button1ShowBadge?s`<enchanted-badge slot="badge" badge="dot"></enchanted-badge>`:""}
          </${t}>
          <${t}
            .ariaLabel=${e.button2AriaLabel}
            tooltipText=${e.button2TooltipText}
            ?showBadge=${e.button2ShowBadge}
            ?padding=${e.button2Padding}
          >
            <${o("icon-edit")} slot="icon"></${o("icon-edit")}>
            ${e.button2ShowBadge?s`<enchanted-badge slot="badge" badge="dot"></enchanted-badge>`:""}
          </${t}>
          <${t}
            .ariaLabel=${e.button3AriaLabel}
            tooltipText=${e.button3TooltipText}
            ?showBadge=${e.button3ShowBadge}
            ?padding=${e.button3Padding}
          >
            <${o("icon-delete")} slot="icon"></${o("icon-delete")}>
            ${e.button3ShowBadge?s`<enchanted-badge slot="badge" badge="dot"></enchanted-badge>`:""}
          </${t}>
        </${i}>
        `},p={},b={render:()=>s`
        <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end; padding: 20px 24px 24px;">
          <${i} orientation="horizontal" size="20">
            <${t} .ariaLabel=${"Add"} tooltipText="Add">
              <${o("icon-add")} slot="icon"></${o("icon-add")}>
            </${t}>
            <${t} .ariaLabel=${"Edit"} tooltipText="Edit">
              <${o("icon-edit")} slot="icon"></${o("icon-edit")}>
            </${t}>
            <${t} .ariaLabel=${"Delete"} tooltipText="Delete" showBadge>
              <${o("icon-delete")} slot="icon"></${o("icon-delete")}>
              <enchanted-badge slot="badge" badge="dot"></enchanted-badge>
            </${t}>
          </${i}>

          <${i} orientation="horizontal" size="16" .selectedIndex=${1}>
            <${t} .ariaLabel=${"Add"} tooltipText="Add">
              <${o("icon-add")} slot="icon"></${o("icon-add")}>
            </${t}>
            <${t} .ariaLabel=${"Edit"} tooltipText="Edit">
              <${o("icon-edit")} slot="icon"></${o("icon-edit")}>
            </${t}>
            <${t} .ariaLabel=${"Delete"} tooltipText="Delete" showBadge>
              <${o("icon-delete")} slot="icon"></${o("icon-delete")}>
              <enchanted-badge slot="badge" badge="dot"></enchanted-badge>
            </${t}>
          </${i}>

          <${i} orientation="vertical" size="20" ?disabled=${!0}>
            <${t} .ariaLabel=${"Add"} tooltipText="Add">
              <${o("icon-add")} slot="icon"></${o("icon-add")}>
            </${t}>
            <${t} .ariaLabel=${"Edit"} tooltipText="Edit">
              <${o("icon-edit")} slot="icon"></${o("icon-edit")}>
            </${t}>
            <${t} .ariaLabel=${"Delete"} tooltipText="Delete" showBadge>
              <${o("icon-delete")} slot="icon"></${o("icon-delete")}>
              <enchanted-badge slot="badge" badge="dot"></enchanted-badge>
            </${t}>
          </${i}>
        </div>
      `};var y,I,D;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(D=(I=p.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var w,C,U;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    return html\`
        <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end; padding: 20px 24px 24px;">
          <\${ENCHANTED_TOGGLE_BUTTON_GROUP_TAG} orientation="horizontal" size="20">
            <\${ENCHANTED_TOGGLE_BUTTON_TAG} .ariaLabel=\${"Add"} tooltipText="Add">
              <\${generateIconTagName('icon-add')} slot="icon"></\${generateIconTagName('icon-add')}>
            </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
            <\${ENCHANTED_TOGGLE_BUTTON_TAG} .ariaLabel=\${"Edit"} tooltipText="Edit">
              <\${generateIconTagName('icon-edit')} slot="icon"></\${generateIconTagName('icon-edit')}>
            </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
            <\${ENCHANTED_TOGGLE_BUTTON_TAG} .ariaLabel=\${"Delete"} tooltipText="Delete" showBadge>
              <\${generateIconTagName('icon-delete')} slot="icon"></\${generateIconTagName('icon-delete')}>
              <enchanted-badge slot="badge" badge="dot"></enchanted-badge>
            </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
          </\${ENCHANTED_TOGGLE_BUTTON_GROUP_TAG}>

          <\${ENCHANTED_TOGGLE_BUTTON_GROUP_TAG} orientation="horizontal" size="16" .selectedIndex=\${1}>
            <\${ENCHANTED_TOGGLE_BUTTON_TAG} .ariaLabel=\${"Add"} tooltipText="Add">
              <\${generateIconTagName('icon-add')} slot="icon"></\${generateIconTagName('icon-add')}>
            </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
            <\${ENCHANTED_TOGGLE_BUTTON_TAG} .ariaLabel=\${"Edit"} tooltipText="Edit">
              <\${generateIconTagName('icon-edit')} slot="icon"></\${generateIconTagName('icon-edit')}>
            </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
            <\${ENCHANTED_TOGGLE_BUTTON_TAG} .ariaLabel=\${"Delete"} tooltipText="Delete" showBadge>
              <\${generateIconTagName('icon-delete')} slot="icon"></\${generateIconTagName('icon-delete')}>
              <enchanted-badge slot="badge" badge="dot"></enchanted-badge>
            </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
          </\${ENCHANTED_TOGGLE_BUTTON_GROUP_TAG}>

          <\${ENCHANTED_TOGGLE_BUTTON_GROUP_TAG} orientation="vertical" size="20" ?disabled=\${true}>
            <\${ENCHANTED_TOGGLE_BUTTON_TAG} .ariaLabel=\${"Add"} tooltipText="Add">
              <\${generateIconTagName('icon-add')} slot="icon"></\${generateIconTagName('icon-add')}>
            </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
            <\${ENCHANTED_TOGGLE_BUTTON_TAG} .ariaLabel=\${"Edit"} tooltipText="Edit">
              <\${generateIconTagName('icon-edit')} slot="icon"></\${generateIconTagName('icon-edit')}>
            </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
            <\${ENCHANTED_TOGGLE_BUTTON_TAG} .ariaLabel=\${"Delete"} tooltipText="Delete" showBadge>
              <\${generateIconTagName('icon-delete')} slot="icon"></\${generateIconTagName('icon-delete')}>
              <enchanted-badge slot="badge" badge="dot"></enchanted-badge>
            </\${ENCHANTED_TOGGLE_BUTTON_TAG}>
          </\${ENCHANTED_TOGGLE_BUTTON_GROUP_TAG}>
        </div>
      \`;
  }
}`,...(U=(C=b.parameters)==null?void 0:C.docs)==null?void 0:U.source}}};const de=["Default","AllStates"];export{b as AllStates,p as Default,de as __namedExportsOrder,ae as default};
