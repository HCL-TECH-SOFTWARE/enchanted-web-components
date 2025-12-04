import{x as u}from"./iframe-DgNdRKpa.js";import{n as m,t as T,D as f}from"./dx-ac-base-element-BRVmdAbS.js";import{S as s}from"./cssClassEnums-flPS6Iko.js";import"./preload-helper-C1FmrZbK.js";var A=Object.defineProperty,_=Object.getOwnPropertyDescriptor,c=(e,a,l,n)=>{for(var t=n>1?void 0:n?_(a,l):a,d=e.length-1,p;d>=0;d--)(p=e[d])&&(t=(n?p(a,l,t):p(t))||t);return n&&t&&A(a,l,t),t};let o=class extends f{constructor(){super(...arguments),this.isTagsAvailable=!1,this.isFeatureTagCloudEnabled=!1}render(){return u`
      <div part="header-container">
        <div part="header"><slot name="dx-header"></slot></div>
      </div>
      <div part="pagination-container">
        <div part="pagination"><slot name="dx-pagination"></slot></div>
      </div>
      <div part="main">
        <div part="search-input-container"><slot name="search-input-container"></slot></div>  
        <hr part="hr-part">
        <div part="search-result-container">
          <div part=${this.isFeatureTagCloudEnabled&&this.isTagsAvailable?s.SEARCH_OUTPUT_CONTAINER:s.SEARCH_OUTPUT_CONTAINER_NO_TAGS}>
            <slot name="search-output-container"></slot>
          </div>
          <div part=${this.isFeatureTagCloudEnabled&&this.isTagsAvailable?s.TAG_CLOUD_CONTAINER:s.TAG_CLOUD_CONTAINER_HIDDEN}>
            <slot name="tag-cloud"></slot>
          </div>
        </div>
      </div>
    `}};c([m({type:Boolean})],o.prototype,"isTagsAvailable",2);c([m()],o.prototype,"isFeatureTagCloudEnabled",2);o=c([T("dx-search-center-layout")],o);const P={title:"Layout/dx-search-center-layout",tags:["autodocs"],argTypes:{isTagsAvailable:{control:"boolean",description:"Whether tags are available",table:{defaultValue:{summary:"false"}}}},args:{isTagsAvailable:!1},render:e=>u`
      <dx-search-center-layout ?isTagsAvailable=${e.isTagsAvailable}>
        <div slot="dx-header">
          <h2>Header Content</h2>
          <span style="color: #888; font-size: 0.9em;">Subtitle or description</span>
        </div>
        <div slot="dx-pagination">
          <button>Prev</button>
          <span>Page 1 of 10</span>
          <button>Next</button>
        </div>
        <div slot="search-input-container">
          <input type="text" placeholder="Search..." />
          <button>Go</button>
        </div>
        <div slot="search-output-container">
          <ul>
            <li><b>Result 1</b> <span style="color: #888;">(details)</span></li>
            <li><b>Result 2</b> <span style="color: #888;">(details)</span></li>
          </ul>
        </div>
        <div slot="tag-cloud">
          <span style="background: #eee; padding: 2px 8px; border-radius: 8px; margin-right: 4px;">Tag1</span>
          <span style="background: #eee; padding: 2px 8px; border-radius: 8px; margin-right: 4px;">Tag2</span>
        </div>
      </dx-search-center-layout>
    `},i={},r={render:()=>u`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div>
          <div>Default (No Tags)</div>
          <dx-search-center-layout>
            <div slot="dx-header">
              <h2>Header Content</h2>
              <span style="color: #888; font-size: 0.9em;">Subtitle or description</span>
            </div>
            <div slot="dx-pagination">
              <button>Prev</button>
              <span>Page 1 of 10</span>
              <button>Next</button>
            </div>
            <div slot="search-input-container">
              <input type="text" placeholder="Search..." />
              <button>Go</button>
            </div>
            <div slot="search-output-container">
              <ul>
                <li><b>Result 1</b> <span style="color: #888;">(details)</span></li>
                <li><b>Result 2</b> <span style="color: #888;">(details)</span></li>
              </ul>
            </div>
            <div slot="tag-cloud">
              <span style="background: #eee; padding: 2px 8px; border-radius: 8px; margin-right: 4px;">Tag1</span>
              <span style="background: #eee; padding: 2px 8px; border-radius: 8px; margin-right: 4px;">Tag2</span>
            </div>
          </dx-search-center-layout>
        </div>
        <div>
          <div>With Tags</div>
          <dx-search-center-layout isTagsAvailable>
            <div slot="dx-header">
              <h2>Header Content</h2>
              <span style="color: #888; font-size: 0.9em;">Subtitle or description</span>
            </div>
            <div slot="dx-pagination">
              <button>Prev</button>
              <span>Page 1 of 10</span>
              <button>Next</button>
            </div>
            <div slot="search-input-container">
              <input type="text" placeholder="Search..." />
              <button>Go</button>
            </div>
            <div slot="search-output-container">
              <ul>
                <li><b>Result 1</b> <span style="color: #888;">(details)</span></li>
                <li><b>Result 2</b> <span style="color: #888;">(details)</span></li>
              </ul>
            </div>
            <div slot="tag-cloud">
              <span style="background: #eee; padding: 2px 8px; border-radius: 8px; margin-right: 4px;">Tag1</span>
              <span style="background: #eee; padding: 2px 8px; border-radius: 8px; margin-right: 4px;">Tag2</span>
            </div>
          </dx-search-center-layout>
        </div>
      </div>
    `};var v,g,b;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(b=(g=i.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,h,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div>
          <div>Default (No Tags)</div>
          <dx-search-center-layout>
            <div slot="dx-header">
              <h2>Header Content</h2>
              <span style="color: #888; font-size: 0.9em;">Subtitle or description</span>
            </div>
            <div slot="dx-pagination">
              <button>Prev</button>
              <span>Page 1 of 10</span>
              <button>Next</button>
            </div>
            <div slot="search-input-container">
              <input type="text" placeholder="Search..." />
              <button>Go</button>
            </div>
            <div slot="search-output-container">
              <ul>
                <li><b>Result 1</b> <span style="color: #888;">(details)</span></li>
                <li><b>Result 2</b> <span style="color: #888;">(details)</span></li>
              </ul>
            </div>
            <div slot="tag-cloud">
              <span style="background: #eee; padding: 2px 8px; border-radius: 8px; margin-right: 4px;">Tag1</span>
              <span style="background: #eee; padding: 2px 8px; border-radius: 8px; margin-right: 4px;">Tag2</span>
            </div>
          </dx-search-center-layout>
        </div>
        <div>
          <div>With Tags</div>
          <dx-search-center-layout isTagsAvailable>
            <div slot="dx-header">
              <h2>Header Content</h2>
              <span style="color: #888; font-size: 0.9em;">Subtitle or description</span>
            </div>
            <div slot="dx-pagination">
              <button>Prev</button>
              <span>Page 1 of 10</span>
              <button>Next</button>
            </div>
            <div slot="search-input-container">
              <input type="text" placeholder="Search..." />
              <button>Go</button>
            </div>
            <div slot="search-output-container">
              <ul>
                <li><b>Result 1</b> <span style="color: #888;">(details)</span></li>
                <li><b>Result 2</b> <span style="color: #888;">(details)</span></li>
              </ul>
            </div>
            <div slot="tag-cloud">
              <span style="background: #eee; padding: 2px 8px; border-radius: 8px; margin-right: 4px;">Tag1</span>
              <span style="background: #eee; padding: 2px 8px; border-radius: 8px; margin-right: 4px;">Tag2</span>
            </div>
          </dx-search-center-layout>
        </div>
      </div>
    \`;
  }
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const E=["Default","AllStates"];export{r as AllStates,i as Default,E as __namedExportsOrder,P as default};
