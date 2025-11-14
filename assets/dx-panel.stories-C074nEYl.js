import{x as d}from"./iframe-g_dBLWCH.js";import{n as a,t as g,D as _}from"./dx-ac-base-element-Ba1nuzGa.js";import"./dx-button-rc8nG4sK.js";import{P as y,o,g as E,j as A}from"./cssClassEnums-DKCjOuJT.js";import"./index-CChjELTs.js";import"./preload-helper-C1FmrZbK.js";import"./state-BrHRPonU.js";import"./localization-_QVbBsw5.js";import"./index-DAvuBMGP.js";var N=Object.defineProperty,O=Object.getOwnPropertyDescriptor,i=(n,l,c,r)=>{for(var e=r>1?void 0:r?O(l,c):l,v=n.length-1,u;v>=0;v--)(u=n[v])&&(e=(r?u(l,c,e):u(e))||e);return r&&e&&N(l,c,e),e};let t=class extends _{constructor(){super(...arguments),this.open=!1,this.position=y.PANEL_LEFT,this.headerTitle="",this.ariaLabel="",this.focusPanel=!1}show(){this.open=!0}hide(){this.open=!1}_handleCloseClick(){this.hide(),this.dispatchEvent(new CustomEvent("dxPanelClose"))}render(){return d`
      <div
        part=${o.PANEL_CONTAINER}
        role="dialog"
        aria-modal="true"
        aria-label=${this.ariaLabel}
        aria-hidden=${!this.open}
        tabindex="${this.focusPanel?"0":"-1"}"
      >
        <div part=${o.PANEL_HEADER}>
          <div part=${o.PANEL_TITLE}>
            <span>${this.headerTitle}</span>
          </div>
          <div>
            <slot name="center-title-content"></slot>
          </div>
          <dx-button
            part=${o.PANEL_CLOSE_BUTTON}
            exportparts="${Object.values(A).join(",")}"
            buttontext=""
            ?outlined="${!1}"
            .icon="${d`<icon-close size="16" color="rgba(0, 0, 0, 0.60)"></icon-close>`}"
            @click=${this._handleCloseClick}
            variant=${E.BUTTON_TEXT_VAR}
          >
          </dx-button>
        </div>
        <div part=${o.PANEL_CONTENT} tabindex="-1">
          <slot name="content"></slot>
        </div>
      </div>
    `}};i([a({type:Boolean,reflect:!0})],t.prototype,"open",2);i([a({type:String,reflect:!0})],t.prototype,"position",2);i([a({type:String})],t.prototype,"headerTitle",2);i([a({type:String})],t.prototype,"ariaLabel",2);i([a({type:Boolean})],t.prototype,"focusPanel",2);t=i([g("dx-panel")],t);const j={title:"Overlay/dx-panel",tags:["autodocs"],argTypes:{open:{control:"boolean",description:"Whether the panel is open",table:{defaultValue:{summary:"false"}}},title:{control:"text",description:"Panel title",table:{defaultValue:{summary:""}}},position:{control:"text",description:"Panel position",table:{defaultValue:{summary:"left"}}}},args:{open:!0,title:"Panel Title",position:"left"},render:n=>d`
      <dx-panel
        ?open=${n.open}
        title="${n.title}"
        position="${n.position}"
      >
        <div slot="center-title-content">Center Title Content</div>
        <div slot="content">
          <p>This is the panel content area. You can put any HTML or components here.</p>

        </div>
      </dx-panel>
    `},s={},p={render:()=>d`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div>
          <div>Default (Open, Left)</div>
          <dx-panel open title="Panel Title" position="left">
            <div slot="center-title-content">Center Title Content</div>
            <div slot="content">Panel content goes here.</div>
          </dx-panel>
        </div>
        <div>
          <div>Right Position</div>
          <dx-panel open title="Right Panel" position="right">
            <div slot="content">Panel on the right.</div>
          </dx-panel>
        </div>
      </div>
    `};var h,f,m;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(m=(f=s.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var x,P,T;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div>
          <div>Default (Open, Left)</div>
          <dx-panel open title="Panel Title" position="left">
            <div slot="center-title-content">Center Title Content</div>
            <div slot="content">Panel content goes here.</div>
          </dx-panel>
        </div>
        <div>
          <div>Right Position</div>
          <dx-panel open title="Right Panel" position="right">
            <div slot="content">Panel on the right.</div>
          </dx-panel>
        </div>
      </div>
    \`;
  }
}`,...(T=(P=p.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const I=["Default","AllStates"];export{p as AllStates,s as Default,I as __namedExportsOrder,j as default};
