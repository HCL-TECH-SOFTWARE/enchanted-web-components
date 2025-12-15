import{E as u,x as a}from"./iframe-DHDpWj8R.js";import{n as i,t as $,E as w}from"./enchanted-ac-base-element-DiERHT3A.js";import{i as U}from"./localization-Dlp2bMpu.js";import"./enchanted-badge-CvPeDb__.js";import"./enchanted-icon-button-D07MISMY.js";import{x as n,I as E}from"./cssClassEnums-D4dgqifY.js";import{I as L}from"./exportParts-lw5uKHST.js";import"./preload-helper-C1FmrZbK.js";import"./enchanted-button-CLWRKz3u.js";import"./state-CAzxSWuk.js";var V=Object.defineProperty,G=Object.getOwnPropertyDescriptor,l=(e,t,d,r)=>{for(var s=r>1?void 0:r?G(t,d):t,p=e.length-1,f;p>=0;p--)(f=e[p])&&(s=(r?f(t,d,s):f(s))||s);return r&&s&&V(t,d,s),s};let o=class extends w{constructor(){super(...arguments),this.singleButton=!1,this.toggleOn=!1,this.showBadge=!1,this.disabled=!1,this.outlined=!1,this.selectedValue="",this.iconUrls=[],this.icons=[],this.values=[],this.singleButtonTitle="",this.singleButtonAria=""}handleClick(e){e.stopPropagation();const t=e.currentTarget;if(t.value!==this.selectedValue){const d=new CustomEvent("click",{detail:{value:t.value}});this.dispatchEvent(d)}}partAttributeDecider(e){let t=e;switch(e){case n.TOGGLE_BUTTON_DIV:return this.outlined&&(t=n.TOGGLE_BUTTON_DIV_OUTLINED),t;case n.FIRST_BUTTON:return this.selectedValue===this.values[0]?t=n.TOGGLE_BUTTON_SELECTED:t=n.TOGGLE_BUTTON,t;case n.SECOND_BUTTON:return this.selectedValue===this.values[1]?t=n.TOGGLE_BUTTON_SELECTED:t=n.TOGGLE_BUTTON,t;case n.TOGGLE_BUTTON_ICON:return t;default:return t}}getButtonAttribute(){return this.toggleOn?n.TOGGLE_ON_SINGLE_BUTTON:n.TOGGLE_OFF_SINGLE_BUTTON}renderIcon(e,t){return e?typeof e=="string"?a`
        <img
          src="${e}"
          alt="${e}"
          part=${this.partAttributeDecider(t)}
          data-testid="enchanted-toggle-button-img"
        />`:a`
      <span
        part=${this.partAttributeDecider(t)}
        data-testid="enchanted-toggle-button-icon"
      > ${e}</span>
    `:u}render(){return a`
      <div data-testid="enchanted-toggle-button-div" part=${this.partAttributeDecider(n.TOGGLE_BUTTON_DIV)}>
        ${this.singleButton===!0?a`
          ${this.showBadge===!0?a`
            <enchanted-badge 
              data-testid="enchanted-badge" 
              part='${U()?n.TOGGLE_BUTTON_BADGE:`${n.TOGGLE_BUTTON_BADGE} ${n.TOGGLE_BUTTON_BADGE_RTL}`}'
            ></enchanted-badge>`:""}
          <enchanted-icon-button
            title=${this.singleButtonTitle}
            aria-label=${this.singleButtonAria}
            role='button'
            tabindex='0'
            withPadding
            part="${n.TOGGLE_SINGLE_BUTTON} ${this.getButtonAttribute()}"
            ?disabled=${this.disabled||u}
            size=${E.MEDIUM}
            .icon=${this.icon}
            data-testid="enchanted-toggle-single-button"
            exportparts="${L}"
          >
          </enchanted-icon-button>
        `:a`
          <button
            data-testid="enchanted-toggle-button-first"
            part=${this.partAttributeDecider(n.FIRST_BUTTON)}
            @click=${this.handleClick}
            disabled=${this.disabled||u}
            value=${this.values[0]}
          >
            ${this.renderIcon(this.icons[0]||this.iconUrls[0],n.TOGGLE_BUTTON_ICON)}
          </button>
          <button
            data-testid="enchanted-toggle-button-second"
            part=${this.partAttributeDecider(n.SECOND_BUTTON)}
            @click=${this.handleClick}
            disabled=${this.disabled||u}
            value=${this.values[1]}
          >
            ${this.renderIcon(this.icons[1]||this.iconUrls[1],n.TOGGLE_BUTTON_ICON)}
          </button>
        `}
      </div>
    `}};l([i({type:Boolean})],o.prototype,"singleButton",2);l([i({type:Boolean})],o.prototype,"toggleOn",2);l([i({type:Boolean})],o.prototype,"showBadge",2);l([i({type:Boolean})],o.prototype,"disabled",2);l([i({type:Boolean})],o.prototype,"outlined",2);l([i({type:String})],o.prototype,"selectedValue",2);l([i({attribute:!1})],o.prototype,"iconUrls",2);l([i({attribute:!1})],o.prototype,"icons",2);l([i()],o.prototype,"icon",2);l([i({attribute:!1})],o.prototype,"values",2);l([i({type:String})],o.prototype,"singleButtonTitle",2);l([i({type:String})],o.prototype,"singleButtonAria",2);o=l([$("enchanted-toggle-button")],o);const h="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.26%2015C8.86231%2014.9997%208.48103%2014.8414%208.2%2014.56L1.44%207.805C1.15862%207.52396%201.00035%207.14269%201%206.745V2.5C1%202.10218%201.15804%201.72064%201.43934%201.43934C1.72064%201.15804%202.10218%201%202.5%201H6.745C7.14269%201.00035%207.52396%201.15862%207.805%201.44L14.56%208.195C14.6998%208.33435%2014.8108%208.49994%2014.8865%208.68227C14.9622%208.8646%2015.0012%209.06008%2015.0012%209.2575C15.0012%209.45492%2014.9622%209.6504%2014.8865%209.83273C14.8108%2010.0151%2014.6998%2010.1806%2014.56%2010.32L10.32%2014.56C10.039%2014.8414%209.65769%2014.9997%209.26%2015ZM2.5%202C2.36739%202%202.24021%202.05268%202.14645%202.14645C2.05268%202.24021%202%202.36739%202%202.5V6.745C2.00027%206.81115%202.01367%206.8766%202.03942%206.93753C2.06517%206.99847%202.10276%207.05369%202.15%207.1L8.905%2013.855C8.99868%2013.9481%209.12541%2014.0004%209.2575%2014.0004C9.38959%2014.0004%209.51632%2013.9481%209.61%2013.855L13.855%209.61C13.9481%209.51632%2014.0004%209.38959%2014.0004%209.2575C14.0004%209.12541%2013.9481%208.99868%2013.855%208.905L7.1%202.15C7.05369%202.10276%206.99847%202.06517%206.93753%202.03942C6.8766%202.01367%206.81115%202.00027%206.745%202H2.5Z'%20fill='rgba(0,%200,%200,%200.60)'/%3e%3cpath%20d='M5%207C4.60444%207%204.21776%206.8827%203.88886%206.66294C3.55996%206.44318%203.30362%206.13082%203.15224%205.76537C3.00087%205.39991%202.96126%204.99778%203.03843%204.60982C3.1156%204.22186%203.30608%203.86549%203.58579%203.58579C3.86549%203.30608%204.22186%203.1156%204.60982%203.03843C4.99778%202.96126%205.39991%203.00087%205.76537%203.15224C6.13082%203.30362%206.44318%203.55996%206.66294%203.88886C6.8827%204.21776%207%204.60444%207%205C7%205.53043%206.78929%206.03914%206.41421%206.41421C6.03914%206.78929%205.53043%207%205%207ZM5%204C4.80222%204%204.60888%204.05865%204.44443%204.16853C4.27998%204.27841%204.15181%204.43459%204.07612%204.61732C4.00043%204.80004%203.98063%205.00111%204.01921%205.19509C4.0578%205.38907%204.15304%205.56725%204.29289%205.70711C4.43275%205.84696%204.61093%205.9422%204.80491%205.98079C4.99889%206.01937%205.19996%205.99957%205.38268%205.92388C5.56541%205.84819%205.72159%205.72002%205.83147%205.55557C5.94135%205.39112%206%205.19778%206%205C6%204.73478%205.89464%204.48043%205.70711%204.29289C5.51957%204.10536%205.26522%204%205%204Z'%20fill='rgba(0,%200,%200,%200.60)'/%3e%3c/svg%3e",b="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14%203H5V4H14V3Z'%20fill='rgba(0,%200,%200,%200.60)'/%3e%3cpath%20d='M14%2012H5V13H14V12Z'%20fill='rgba(0,%200,%200,%200.60)'/%3e%3cpath%20d='M14%207.5H5V8.5H14V7.5Z'%20fill='rgba(0,%200,%200,%200.60)'/%3e%3cpath%20d='M3%207.5H2V8.5H3V7.5Z'%20fill='rgba(0,%200,%200,%200.60)'/%3e%3cpath%20d='M3%203H2V4H3V3Z'%20fill='rgba(0,%200,%200,%200.60)'/%3e%3cpath%20d='M3%2012H2V13H3V12Z'%20fill='rgba(0,%200,%200,%200.60)'/%3e%3c/svg%3e",v=a`
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0.7L7.3 0L4 3.3L0.7 0L0 0.7L3.3 4L0 7.3L0.7 8L4 4.7L7.3 8L8 7.3L4.7 4L8 0.7Z"
      fill="black" fill-opacity="0.6" />
  </svg>
`,Z={title:"Input/enchanted-toggle-button",tags:["autodocs"],argTypes:{singleButton:{control:"boolean",description:"Single button mode",table:{defaultValue:{summary:"false"}}},toggleOn:{control:"boolean",description:"Toggle state (single button)",table:{defaultValue:{summary:"false"}}},showBadge:{control:"boolean",description:"Show badge (single button)",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Disabled",table:{defaultValue:{summary:"false"}}},outlined:{control:"boolean",description:"Outlined",table:{defaultValue:{summary:"false"}}},selectedValue:{control:"text",description:"Selected value (two-button mode)",table:{defaultValue:{summary:""}}},iconUrls:{control:"object",description:"Icon URLs (two-button mode)",table:{defaultValue:{summary:"[...]"}}},values:{control:"object",description:"Values (two-button mode)",table:{defaultValue:{summary:"[...]"}}},singleButtonTitle:{control:"text",description:"Single button title",table:{defaultValue:{summary:""}}},singleButtonAria:{control:"text",description:"Single button aria-label",table:{defaultValue:{summary:""}}},icon:{control:!1,description:"Icon template (single button)",table:{defaultValue:{summary:"svg"}}}},args:{singleButton:!1,toggleOn:!1,showBadge:!1,disabled:!1,outlined:!1,selectedValue:"",iconUrls:[],values:["on","off"],singleButtonTitle:"Toggle",singleButtonAria:"Toggle",icon:""},render:e=>a`
      <enchanted-toggle-button
        ?toggleOn=${e.toggleOn}
        ?disabled=${e.disabled}
        ?outlined=${e.outlined}
        .selectedValue=${e.selectedValue}
        .iconUrls=${[h,b]}
        .values=${e.values}
      ></enchanted-toggle-button>
    `},g={},c={render:()=>a`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end;">
        <div>
          <div>Two Button (Off)</div>
          <enchanted-toggle-button .iconUrls=${[h,b]} .values=${["on","off"]} selectedValue="off"></enchanted-toggle-button>
        </div>
        <div>
          <div>Two Button (On)</div>
          <enchanted-toggle-button .iconUrls=${[h,b]} .values=${["on","off"]} selectedValue="on"></enchanted-toggle-button>
        </div>
        <div>
          <div>Single Button (Off)</div>
          <enchanted-toggle-button singleButton .icon=${v} singleButtonTitle="Power" singleButtonAria="Power off" toggleOn="false"></enchanted-toggle-button>
        </div>
        <div>
          <div>Single Button (On)</div>
          <enchanted-toggle-button singleButton .icon=${v} singleButtonTitle="Power" singleButtonAria="Power on" toggleOn></enchanted-toggle-button>
        </div>
        <div>
          <div>Single Button with Badge</div>
          <enchanted-toggle-button singleButton .icon=${v} singleButtonTitle="Badge" showBadge toggleOn></enchanted-toggle-button>
        </div>
        <div>
          <div>Disabled</div>
          <enchanted-toggle-button .iconUrls=${[h,b]} .values=${["on","off"]} selectedValue="off" disabled></enchanted-toggle-button>
        </div>
      </div>
    `};var T,B,O;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(O=(B=g.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var m,C,_;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end;">
        <div>
          <div>Two Button (Off)</div>
          <enchanted-toggle-button .iconUrls=\${[tagUrl, listUrl]} .values=\${['on', 'off']} selectedValue="off"></enchanted-toggle-button>
        </div>
        <div>
          <div>Two Button (On)</div>
          <enchanted-toggle-button .iconUrls=\${[tagUrl, listUrl]} .values=\${['on', 'off']} selectedValue="on"></enchanted-toggle-button>
        </div>
        <div>
          <div>Single Button (Off)</div>
          <enchanted-toggle-button singleButton .icon=\${svgClose} singleButtonTitle="Power" singleButtonAria="Power off" toggleOn="false"></enchanted-toggle-button>
        </div>
        <div>
          <div>Single Button (On)</div>
          <enchanted-toggle-button singleButton .icon=\${svgClose} singleButtonTitle="Power" singleButtonAria="Power on" toggleOn></enchanted-toggle-button>
        </div>
        <div>
          <div>Single Button with Badge</div>
          <enchanted-toggle-button singleButton .icon=\${svgClose} singleButtonTitle="Badge" showBadge toggleOn></enchanted-toggle-button>
        </div>
        <div>
          <div>Disabled</div>
          <enchanted-toggle-button .iconUrls=\${[tagUrl, listUrl]} .values=\${['on', 'off']} selectedValue="off" disabled></enchanted-toggle-button>
        </div>
      </div>
    \`;
  }
}`,...(_=(C=c.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};const R=["Default","AllStates"];export{c as AllStates,g as Default,R as __namedExportsOrder,Z as default};
