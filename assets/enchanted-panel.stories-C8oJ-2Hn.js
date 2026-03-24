import{c as g,a4 as h,E as b,s as t,g as E,u as c,n as d,a5 as n}from"./tags-DiA_3i88.js";import"./enchanted-button-N1GGdZJL.js";import{P as e,s as l,i as y,k as x}from"./cssClassEnums-WDBe4U61.js";import"./index-CopxzRyo.js";import"./iframe-CBMrvQ84.js";import"./preload-helper-C1FmrZbK.js";import"./state-wm_82jA5.js";import"./localization-DpWuhKau.js";import"./keyboardEventKeys-BnoN8uA3.js";import"./index-CuTRIAwF.js";import"./tags-BNPDHufJ.js";var D=Object.defineProperty,p=(i,m,T,H)=>{for(var o=void 0,v=i.length-1,A;v>=0;v--)(A=i[v])&&(o=A(m,T,o)||o);return o&&D(m,T,o),o};const O=g("enchanted-web-components:components:atomic-component:enchanted-panel.ts");class a extends b{constructor(){super(...arguments),this.open=!1,this.position=e.PANEL_LEFT,this.headerTitle="",this.ariaLabel="",this.focusPanel=!1}show(){this.open=!0}hide(){this.open=!1}_handleCloseClick(){this.hide(),this.dispatchEvent(new CustomEvent("enchantedPanelClose"))}render(){return c`
      <div
        part=${l.PANEL_CONTAINER}
        role="dialog"
        aria-modal="true"
        aria-label=${this.ariaLabel}
        aria-hidden=${!this.open}
        tabindex="${this.focusPanel?"0":"-1"}"
      >
        <div part=${l.PANEL_HEADER}>
          <div part=${l.PANEL_TITLE}>
            <span>${this.headerTitle}</span>
          </div>
          <div>
            <slot name="center-title-content"></slot>
          </div>
          <${t}
            part=${l.PANEL_CLOSE_BUTTON}
            exportparts="${Object.values(x).join(",")}"
            buttontext=""
            ?outlined="${!1}"
            .icon="${c`<${E("icon-close")} size="16" color="rgba(0, 0, 0, 0.60)"></${E("icon-close")}>`}"
            @click=${this._handleCloseClick}
            variant=${y.BUTTON_TEXT_VAR}
          >
          </${t}>
        </div>
        <div part=${l.PANEL_CONTENT} tabindex="-1">
          <slot name="content"></slot>
        </div>
      </div>
    `}}p([d({type:Boolean,reflect:!0})],a.prototype,"open");p([d({type:String,reflect:!0})],a.prototype,"position");p([d({type:String})],a.prototype,"headerTitle");p([d({type:String})],a.prototype,"ariaLabel");p([d({type:Boolean})],a.prototype,"focusPanel");customElements.get(h)?O("Component (%s) is currently registered and not possible to registrate again.",h):customElements.define(h,a);const q={title:"Overlay/enchanted-panel",tags:["autodocs"],argTypes:{open:{control:{type:"boolean"},description:"Whether the panel is open",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},title:{control:{type:"text"},description:"Panel title",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},position:{control:{type:"radio"},options:[e.PANEL_LEFT,e.PANEL_RIGHT],description:"Panel position",table:{type:{summary:"string"},defaultValue:{summary:e.PANEL_LEFT}}}},args:{open:!0,title:"Panel Title",position:e.PANEL_LEFT},render:i=>c`
      <${n}
        ?open=${i.open}
        title="${i.title}"
        position="${i.position}"
      >
        <div slot="center-title-content">Center Title Content</div>
        <div slot="content">
          <p>This is the panel content area. You can put any HTML or components here.</p>
        </div>
      </${n}>
    `},r={},s={parameters:{controls:{disable:!0}},render:()=>c`
      <style>
        .panel-container {
          display: flex;
          flex-direction: column;
          gap: 40px;
          padding: 20px;
        }
        .panel-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .panel-section h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
        }
        .panel-demo {
          position: relative;
          height: 400px;
          border: 1px solid #e0e0e0;
          background: #f5f5f5;
          align-items: center;
          justify-content: center;
        }
        .panel-label {
          font-size: 12px;
          color: #666;
          margin-bottom: 8px;
        }
        .demo-content {
          text-align: center;
          color: #999;
        }
      </style>

      <div class="panel-container">
        <!-- Left Position -->
        <div class="panel-section">
          <h3>Left Position</h3>
          <div>
            <div class="panel-label">Open panel on the left with title and content</div>
            <div class="panel-demo">
              <${n} ?open=${!0} title="Left Panel" .position=${e.PANEL_LEFT}>
                <div slot="center-title-content">Additional Title Info</div>
                <div slot="content">
                  <p>This is the main content area of the left panel.</p>
                  <p>You can add any HTML or components here.</p>
                  <${t} buttontext="Action Button"></${t}>
                </div>
              </${n}>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>
          
          <div>
            <div class="panel-label">Left panel with minimal content</div>
            <div class="panel-demo">
              <${n} ?open=${!0} title="Minimal Panel" .position=${e.PANEL_LEFT}>
                <div slot="content">
                  <p>Simple panel content.</p>
                </div>
              </${n}>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>

          <div>
            <div class="panel-label">Left panel without title</div>
            <div class="panel-demo">
              <${n} ?open=${!0} .position=${e.PANEL_LEFT}>
                <div slot="content">
                  <p>Panel content without a title.</p>
                </div>
              </${n}>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>
        </div>

        <!-- Right Position -->
        <div class="panel-section">
          <h3>Right Position</h3>
          <div>
            <div class="panel-label">Open panel on the right with title and content</div>
            <div class="panel-demo">
              <${n} ?open=${!0} title="Right Panel" .position=${e.PANEL_RIGHT}>
                <div slot="center-title-content">Settings</div>
                <div slot="content">
                  <p>This panel slides in from the right side.</p>
                  <p>Commonly used for settings, filters, or additional information.</p>
                  <${t} buttontext="Apply Settings"></${t}>
                </div>
              </${n}>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>

          <div>
            <div class="panel-label">Right panel with form content</div>
            <div class="panel-demo">
              <${n} ?open=${!0} title="Configuration" .position=${e.PANEL_RIGHT}>
                <div slot="content">
                  <p>Configuration Panel</p>
                  <p>Use this for settings and options.</p>
                </div>
              </${n}>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>

          <div>
            <div class="panel-label">Right panel without title</div>
            <div class="panel-demo">
              <${n} ?open=${!0} .position=${e.PANEL_RIGHT}>
                <div slot="content">
                  <p>Panel content on the right side without a title.</p>
                </div>
              </${n}>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>
        </div>

        <!-- Closed State -->
        <div class="panel-section">
          <h3>Closed State</h3>
          <div>
            <div class="panel-label">Closed panel (not visible)</div>
            <div class="panel-demo">
              <${n} ?open=${!1} title="Closed Panel" .position=${e.PANEL_LEFT}>
                <div slot="content">
                  <p>This content is hidden when the panel is closed.</p>
                </div>
              </${n}>
              <div class="demo-content">Main Content Area (Panel is closed)</div>
            </div>
          </div>
        </div>

        <!-- Different Content Types -->
        <div class="panel-section">
          <h3>Different Content Types</h3>
          <div>
            <div class="panel-label">Panel with rich content</div>
            <div class="panel-demo">
              <${n} ?open=${!0} title="Rich Content Panel" .position=${e.PANEL_LEFT}>
                <div slot="center-title-content">Document Details</div>
                <div slot="content">
                  <h4>Section 1</h4>
                  <p>This panel contains multiple sections with different content types.</p>
                  <h4>Section 2</h4>
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                  </ul>
                  <${t} buttontext="Save"></${t}>
                  <${t} buttontext="Cancel"></${t}>
                </div>
              </${n}>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>

          <div>
            <div class="panel-label">Panel with long scrollable content</div>
            <div class="panel-demo">
              <${n} ?open=${!0} title="Scrollable Content" .position=${e.PANEL_RIGHT}>
                <div slot="content">
                  <p>This panel has a lot of content that requires scrolling.</p>
                  <p>Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p>Paragraph 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <p>Paragraph 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                  <p>Paragraph 4: Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                  <p>Paragraph 5: Excepteur sint occaecat cupidatat non proident.</p>
                </div>
              </${n}>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>
        </div>

        <!-- With Center Title Content -->
        <div class="panel-section">
          <h3>With Center Title Content Slot</h3>
          <div>
            <div class="panel-label">Panel with custom center title content</div>
            <div class="panel-demo">
              <${n} ?open=${!0} title="Main Title" .position=${e.PANEL_LEFT}>
                <div slot="center-title-content">
                  <span style="font-size: 14px; color: #666;">Custom Center Content</span>
                </div>
                <div slot="content">
                  <p>The center-title-content slot allows additional information in the header.</p>
                </div>
              </${n}>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>
        </div>
      </div>
    `};var N,u,P;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(P=(u=r.parameters)==null?void 0:u.docs)==null?void 0:P.source}}};var $,_,f,C,L;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    return html\`
      <style>
        .panel-container {
          display: flex;
          flex-direction: column;
          gap: 40px;
          padding: 20px;
        }
        .panel-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .panel-section h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
        }
        .panel-demo {
          position: relative;
          height: 400px;
          border: 1px solid #e0e0e0;
          background: #f5f5f5;
          align-items: center;
          justify-content: center;
        }
        .panel-label {
          font-size: 12px;
          color: #666;
          margin-bottom: 8px;
        }
        .demo-content {
          text-align: center;
          color: #999;
        }
      </style>

      <div class="panel-container">
        <!-- Left Position -->
        <div class="panel-section">
          <h3>Left Position</h3>
          <div>
            <div class="panel-label">Open panel on the left with title and content</div>
            <div class="panel-demo">
              <\${ENCHANTED_PANEL_TAG} ?open=\${true} title="Left Panel" .position=\${PANEL_POSITION.PANEL_LEFT}>
                <div slot="center-title-content">Additional Title Info</div>
                <div slot="content">
                  <p>This is the main content area of the left panel.</p>
                  <p>You can add any HTML or components here.</p>
                  <\${ENCHANTED_BUTTON_TAG} buttontext="Action Button"></\${ENCHANTED_BUTTON_TAG}>
                </div>
              </\${ENCHANTED_PANEL_TAG}>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>
          
          <div>
            <div class="panel-label">Left panel with minimal content</div>
            <div class="panel-demo">
              <\${ENCHANTED_PANEL_TAG} ?open=\${true} title="Minimal Panel" .position=\${PANEL_POSITION.PANEL_LEFT}>
                <div slot="content">
                  <p>Simple panel content.</p>
                </div>
              </\${ENCHANTED_PANEL_TAG}>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>

          <div>
            <div class="panel-label">Left panel without title</div>
            <div class="panel-demo">
              <\${ENCHANTED_PANEL_TAG} ?open=\${true} .position=\${PANEL_POSITION.PANEL_LEFT}>
                <div slot="content">
                  <p>Panel content without a title.</p>
                </div>
              </\${ENCHANTED_PANEL_TAG}>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>
        </div>

        <!-- Right Position -->
        <div class="panel-section">
          <h3>Right Position</h3>
          <div>
            <div class="panel-label">Open panel on the right with title and content</div>
            <div class="panel-demo">
              <\${ENCHANTED_PANEL_TAG} ?open=\${true} title="Right Panel" .position=\${PANEL_POSITION.PANEL_RIGHT}>
                <div slot="center-title-content">Settings</div>
                <div slot="content">
                  <p>This panel slides in from the right side.</p>
                  <p>Commonly used for settings, filters, or additional information.</p>
                  <\${ENCHANTED_BUTTON_TAG} buttontext="Apply Settings"></\${ENCHANTED_BUTTON_TAG}>
                </div>
              </\${ENCHANTED_PANEL_TAG}>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>

          <div>
            <div class="panel-label">Right panel with form content</div>
            <div class="panel-demo">
              <\${ENCHANTED_PANEL_TAG} ?open=\${true} title="Configuration" .position=\${PANEL_POSITION.PANEL_RIGHT}>
                <div slot="content">
                  <p>Configuration Panel</p>
                  <p>Use this for settings and options.</p>
                </div>
              </\${ENCHANTED_PANEL_TAG}>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>

          <div>
            <div class="panel-label">Right panel without title</div>
            <div class="panel-demo">
              <\${ENCHANTED_PANEL_TAG} ?open=\${true} .position=\${PANEL_POSITION.PANEL_RIGHT}>
                <div slot="content">
                  <p>Panel content on the right side without a title.</p>
                </div>
              </\${ENCHANTED_PANEL_TAG}>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>
        </div>

        <!-- Closed State -->
        <div class="panel-section">
          <h3>Closed State</h3>
          <div>
            <div class="panel-label">Closed panel (not visible)</div>
            <div class="panel-demo">
              <\${ENCHANTED_PANEL_TAG} ?open=\${false} title="Closed Panel" .position=\${PANEL_POSITION.PANEL_LEFT}>
                <div slot="content">
                  <p>This content is hidden when the panel is closed.</p>
                </div>
              </\${ENCHANTED_PANEL_TAG}>
              <div class="demo-content">Main Content Area (Panel is closed)</div>
            </div>
          </div>
        </div>

        <!-- Different Content Types -->
        <div class="panel-section">
          <h3>Different Content Types</h3>
          <div>
            <div class="panel-label">Panel with rich content</div>
            <div class="panel-demo">
              <\${ENCHANTED_PANEL_TAG} ?open=\${true} title="Rich Content Panel" .position=\${PANEL_POSITION.PANEL_LEFT}>
                <div slot="center-title-content">Document Details</div>
                <div slot="content">
                  <h4>Section 1</h4>
                  <p>This panel contains multiple sections with different content types.</p>
                  <h4>Section 2</h4>
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                  </ul>
                  <\${ENCHANTED_BUTTON_TAG} buttontext="Save"></\${ENCHANTED_BUTTON_TAG}>
                  <\${ENCHANTED_BUTTON_TAG} buttontext="Cancel"></\${ENCHANTED_BUTTON_TAG}>
                </div>
              </\${ENCHANTED_PANEL_TAG}>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>

          <div>
            <div class="panel-label">Panel with long scrollable content</div>
            <div class="panel-demo">
              <\${ENCHANTED_PANEL_TAG} ?open=\${true} title="Scrollable Content" .position=\${PANEL_POSITION.PANEL_RIGHT}>
                <div slot="content">
                  <p>This panel has a lot of content that requires scrolling.</p>
                  <p>Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p>Paragraph 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <p>Paragraph 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                  <p>Paragraph 4: Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                  <p>Paragraph 5: Excepteur sint occaecat cupidatat non proident.</p>
                </div>
              </\${ENCHANTED_PANEL_TAG}>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>
        </div>

        <!-- With Center Title Content -->
        <div class="panel-section">
          <h3>With Center Title Content Slot</h3>
          <div>
            <div class="panel-label">Panel with custom center title content</div>
            <div class="panel-demo">
              <\${ENCHANTED_PANEL_TAG} ?open=\${true} title="Main Title" .position=\${PANEL_POSITION.PANEL_LEFT}>
                <div slot="center-title-content">
                  <span style="font-size: 14px; color: #666;">Custom Center Content</span>
                </div>
                <div slot="content">
                  <p>The center-title-content slot allows additional information in the header.</p>
                </div>
              </\${ENCHANTED_PANEL_TAG}>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>
        </div>
      </div>
    \`;
  }
}`,...(f=(_=s.parameters)==null?void 0:_.docs)==null?void 0:f.source},description:{story:`Comprehensive showcase of all panel states and configurations.
Demonstrates different positions, open/closed states, with/without title, and various content scenarios.`,...(L=(C=s.parameters)==null?void 0:C.docs)==null?void 0:L.description}}};const j=["Default","AllStates"];export{s as AllStates,r as Default,j as __namedExportsOrder,q as default};
