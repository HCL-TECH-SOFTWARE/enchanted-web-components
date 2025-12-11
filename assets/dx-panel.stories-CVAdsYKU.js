import{x as c}from"./iframe-Dsd1MpWQ.js";import{n as d,t as L,D as C}from"./dx-ac-base-element-C9dhstFR.js";import"./dx-button-gwJQrlvi.js";import{P as n,p as a,g as E,i as N}from"./cssClassEnums-v1h5zF5X.js";import"./index-DBmzuMS8.js";import"./preload-helper-C1FmrZbK.js";import"./state-DQlunuPl.js";import"./localization-DmqTGOFp.js";import"./index-BPZZDKKN.js";var _=Object.defineProperty,$=Object.getOwnPropertyDescriptor,o=(i,s,v,p)=>{for(var e=p>1?void 0:p?$(s,v):s,h=i.length-1,u;h>=0;h--)(u=i[h])&&(e=(p?u(s,v,e):u(e))||e);return p&&e&&_(s,v,e),e};let t=class extends C{constructor(){super(...arguments),this.open=!1,this.position=n.PANEL_LEFT,this.headerTitle="",this.ariaLabel="",this.focusPanel=!1}show(){this.open=!0}hide(){this.open=!1}_handleCloseClick(){this.hide(),this.dispatchEvent(new CustomEvent("dxPanelClose"))}render(){return c`
      <div
        part=${a.PANEL_CONTAINER}
        role="dialog"
        aria-modal="true"
        aria-label=${this.ariaLabel}
        aria-hidden=${!this.open}
        tabindex="${this.focusPanel?"0":"-1"}"
      >
        <div part=${a.PANEL_HEADER}>
          <div part=${a.PANEL_TITLE}>
            <span>${this.headerTitle}</span>
          </div>
          <div>
            <slot name="center-title-content"></slot>
          </div>
          <dx-button
            part=${a.PANEL_CLOSE_BUTTON}
            exportparts="${Object.values(N).join(",")}"
            buttontext=""
            ?outlined="${!1}"
            .icon="${c`<icon-close size="16" color="rgba(0, 0, 0, 0.60)"></icon-close>`}"
            @click=${this._handleCloseClick}
            variant=${E.BUTTON_TEXT_VAR}
          >
          </dx-button>
        </div>
        <div part=${a.PANEL_CONTENT} tabindex="-1">
          <slot name="content"></slot>
        </div>
      </div>
    `}};o([d({type:Boolean,reflect:!0})],t.prototype,"open",2);o([d({type:String,reflect:!0})],t.prototype,"position",2);o([d({type:String})],t.prototype,"headerTitle",2);o([d({type:String})],t.prototype,"ariaLabel",2);o([d({type:Boolean})],t.prototype,"focusPanel",2);t=o([L("dx-panel")],t);const H={title:"Overlay/dx-panel",tags:["autodocs"],argTypes:{open:{control:{type:"boolean"},description:"Whether the panel is open",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},title:{control:{type:"text"},description:"Panel title",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},position:{control:{type:"radio"},options:[n.PANEL_LEFT,n.PANEL_RIGHT],description:"Panel position",table:{type:{summary:"string"},defaultValue:{summary:n.PANEL_LEFT}}}},args:{open:!0,title:"Panel Title",position:n.PANEL_LEFT},render:i=>c`
      <dx-panel
        ?open=${i.open}
        title="${i.title}"
        position="${i.position}"
      >
        <div slot="center-title-content">Center Title Content</div>
        <div slot="content">
          <p>This is the panel content area. You can put any HTML or components here.</p>
        </div>
      </dx-panel>
    `},r={},l={parameters:{controls:{disable:!0}},render:()=>c`
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
              <dx-panel ?open=${!0} title="Left Panel" .position=${n.PANEL_LEFT}>
                <div slot="center-title-content">Additional Title Info</div>
                <div slot="content">
                  <p>This is the main content area of the left panel.</p>
                  <p>You can add any HTML or components here.</p>
                  <dx-button buttontext="Action Button"></dx-button>
                </div>
              </dx-panel>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>
          
          <div>
            <div class="panel-label">Left panel with minimal content</div>
            <div class="panel-demo">
              <dx-panel ?open=${!0} title="Minimal Panel" .position=${n.PANEL_LEFT}>
                <div slot="content">
                  <p>Simple panel content.</p>
                </div>
              </dx-panel>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>

          <div>
            <div class="panel-label">Left panel without title</div>
            <div class="panel-demo">
              <dx-panel ?open=${!0} .position=${n.PANEL_LEFT}>
                <div slot="content">
                  <p>Panel content without a title.</p>
                </div>
              </dx-panel>
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
              <dx-panel ?open=${!0} title="Right Panel" .position=${n.PANEL_RIGHT}>
                <div slot="center-title-content">Settings</div>
                <div slot="content">
                  <p>This panel slides in from the right side.</p>
                  <p>Commonly used for settings, filters, or additional information.</p>
                  <dx-button buttontext="Apply Settings"></dx-button>
                </div>
              </dx-panel>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>

          <div>
            <div class="panel-label">Right panel with form content</div>
            <div class="panel-demo">
              <dx-panel ?open=${!0} title="Configuration" .position=${n.PANEL_RIGHT}>
                <div slot="content">
                  <p>Configuration Panel</p>
                  <p>Use this for settings and options.</p>
                </div>
              </dx-panel>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>

          <div>
            <div class="panel-label">Right panel without title</div>
            <div class="panel-demo">
              <dx-panel ?open=${!0} .position=${n.PANEL_RIGHT}>
                <div slot="content">
                  <p>Panel content on the right side without a title.</p>
                </div>
              </dx-panel>
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
              <dx-panel ?open=${!1} title="Closed Panel" .position=${n.PANEL_LEFT}>
                <div slot="content">
                  <p>This content is hidden when the panel is closed.</p>
                </div>
              </dx-panel>
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
              <dx-panel ?open=${!0} title="Rich Content Panel" .position=${n.PANEL_LEFT}>
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
                  <dx-button buttontext="Save"></dx-button>
                  <dx-button buttontext="Cancel"></dx-button>
                </div>
              </dx-panel>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>

          <div>
            <div class="panel-label">Panel with long scrollable content</div>
            <div class="panel-demo">
              <dx-panel ?open=${!0} title="Scrollable Content" .position=${n.PANEL_RIGHT}>
                <div slot="content">
                  <p>This panel has a lot of content that requires scrolling.</p>
                  <p>Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p>Paragraph 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <p>Paragraph 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                  <p>Paragraph 4: Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                  <p>Paragraph 5: Excepteur sint occaecat cupidatat non proident.</p>
                </div>
              </dx-panel>
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
              <dx-panel ?open=${!0} title="Main Title" .position=${n.PANEL_LEFT}>
                <div slot="center-title-content">
                  <span style="font-size: 14px; color: #666;">Custom Center Content</span>
                </div>
                <div slot="content">
                  <p>The center-title-content slot allows additional information in the header.</p>
                </div>
              </dx-panel>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>
        </div>
      </div>
    `};var m,x,P;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(P=(x=r.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var f,T,g,b,A;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
              <dx-panel ?open=\${true} title="Left Panel" .position=\${PANEL_POSITION.PANEL_LEFT}>
                <div slot="center-title-content">Additional Title Info</div>
                <div slot="content">
                  <p>This is the main content area of the left panel.</p>
                  <p>You can add any HTML or components here.</p>
                  <dx-button buttontext="Action Button"></dx-button>
                </div>
              </dx-panel>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>
          
          <div>
            <div class="panel-label">Left panel with minimal content</div>
            <div class="panel-demo">
              <dx-panel ?open=\${true} title="Minimal Panel" .position=\${PANEL_POSITION.PANEL_LEFT}>
                <div slot="content">
                  <p>Simple panel content.</p>
                </div>
              </dx-panel>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>

          <div>
            <div class="panel-label">Left panel without title</div>
            <div class="panel-demo">
              <dx-panel ?open=\${true} .position=\${PANEL_POSITION.PANEL_LEFT}>
                <div slot="content">
                  <p>Panel content without a title.</p>
                </div>
              </dx-panel>
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
              <dx-panel ?open=\${true} title="Right Panel" .position=\${PANEL_POSITION.PANEL_RIGHT}>
                <div slot="center-title-content">Settings</div>
                <div slot="content">
                  <p>This panel slides in from the right side.</p>
                  <p>Commonly used for settings, filters, or additional information.</p>
                  <dx-button buttontext="Apply Settings"></dx-button>
                </div>
              </dx-panel>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>

          <div>
            <div class="panel-label">Right panel with form content</div>
            <div class="panel-demo">
              <dx-panel ?open=\${true} title="Configuration" .position=\${PANEL_POSITION.PANEL_RIGHT}>
                <div slot="content">
                  <p>Configuration Panel</p>
                  <p>Use this for settings and options.</p>
                </div>
              </dx-panel>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>

          <div>
            <div class="panel-label">Right panel without title</div>
            <div class="panel-demo">
              <dx-panel ?open=\${true} .position=\${PANEL_POSITION.PANEL_RIGHT}>
                <div slot="content">
                  <p>Panel content on the right side without a title.</p>
                </div>
              </dx-panel>
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
              <dx-panel ?open=\${false} title="Closed Panel" .position=\${PANEL_POSITION.PANEL_LEFT}>
                <div slot="content">
                  <p>This content is hidden when the panel is closed.</p>
                </div>
              </dx-panel>
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
              <dx-panel ?open=\${true} title="Rich Content Panel" .position=\${PANEL_POSITION.PANEL_LEFT}>
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
                  <dx-button buttontext="Save"></dx-button>
                  <dx-button buttontext="Cancel"></dx-button>
                </div>
              </dx-panel>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>

          <div>
            <div class="panel-label">Panel with long scrollable content</div>
            <div class="panel-demo">
              <dx-panel ?open=\${true} title="Scrollable Content" .position=\${PANEL_POSITION.PANEL_RIGHT}>
                <div slot="content">
                  <p>This panel has a lot of content that requires scrolling.</p>
                  <p>Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p>Paragraph 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <p>Paragraph 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                  <p>Paragraph 4: Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                  <p>Paragraph 5: Excepteur sint occaecat cupidatat non proident.</p>
                </div>
              </dx-panel>
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
              <dx-panel ?open=\${true} title="Main Title" .position=\${PANEL_POSITION.PANEL_LEFT}>
                <div slot="center-title-content">
                  <span style="font-size: 14px; color: #666;">Custom Center Content</span>
                </div>
                <div slot="content">
                  <p>The center-title-content slot allows additional information in the header.</p>
                </div>
              </dx-panel>
              <div class="demo-content">Main Content Area</div>
            </div>
          </div>
        </div>
      </div>
    \`;
  }
}`,...(g=(T=l.parameters)==null?void 0:T.docs)==null?void 0:g.source},description:{story:`Comprehensive showcase of all panel states and configurations.
Demonstrates different positions, open/closed states, with/without title, and various content scenarios.`,...(A=(b=l.parameters)==null?void 0:b.docs)==null?void 0:A.description}}};const B=["Default","AllStates"];export{l as AllStates,r as Default,B as __namedExportsOrder,H as default};
