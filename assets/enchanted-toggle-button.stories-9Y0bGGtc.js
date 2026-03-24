import{c as U,an as B,E as A,u as r,z as h,k as E,n as o,ao as n}from"./tags-DiA_3i88.js";import{E as u,x as L}from"./iframe-CBMrvQ84.js";import{i as w}from"./localization-DpWuhKau.js";import"./enchanted-badge-Dyyrs3x7.js";import"./enchanted-icon-button-PsAMum8Q.js";import{K as t,I as V}from"./cssClassEnums-WDBe4U61.js";import{I as D}from"./exportParts-B-kKZm-x.js";import"./preload-helper-C1FmrZbK.js";import"./enchanted-button-N1GGdZJL.js";import"./state-wm_82jA5.js";import"./keyboardEventKeys-BnoN8uA3.js";var y=Object.defineProperty,s=(a,i,e,v)=>{for(var d=void 0,f=a.length-1,_;f>=0;f--)(_=a[f])&&(d=_(i,e,d)||d);return d&&y(i,e,d),d};const S=U("enchanted-web-components:components:atomic-component:enchanted-toggle-button.ts");class l extends A{constructor(){super(...arguments),this.singleButton=!1,this.toggleOn=!1,this.showBadge=!1,this.disabled=!1,this.outlined=!1,this.selectedValue="",this.iconUrls=[],this.icons=[],this.values=[],this.singleButtonTitle="",this.singleButtonAria=""}handleClick(i){i.stopPropagation();const e=i.currentTarget;if(e.value!==this.selectedValue){const v=new CustomEvent("click",{detail:{value:e.value}});this.dispatchEvent(v)}}partAttributeDecider(i){let e=i;switch(i){case t.TOGGLE_BUTTON_DIV:return this.outlined&&(e=t.TOGGLE_BUTTON_DIV_OUTLINED),e;case t.FIRST_BUTTON:return this.selectedValue===this.values[0]?e=t.TOGGLE_BUTTON_SELECTED:e=t.TOGGLE_BUTTON,e;case t.SECOND_BUTTON:return this.selectedValue===this.values[1]?e=t.TOGGLE_BUTTON_SELECTED:e=t.TOGGLE_BUTTON,e;case t.TOGGLE_BUTTON_ICON:return e;default:return e}}getButtonAttribute(){return this.toggleOn?t.TOGGLE_ON_SINGLE_BUTTON:t.TOGGLE_OFF_SINGLE_BUTTON}renderIcon(i,e){return i?typeof i=="string"?r`
        <img
          src="${i}"
          alt="${i}"
          part=${this.partAttributeDecider(e)}
          data-testid="enchanted-toggle-button-img"
        />`:r`
      <span
        part=${this.partAttributeDecider(e)}
        data-testid="enchanted-toggle-button-icon"
      > ${i}</span>
    `:u}render(){return r`
      <div data-testid="enchanted-toggle-button-div" part=${this.partAttributeDecider(t.TOGGLE_BUTTON_DIV)}>
        ${this.singleButton===!0?r`
          ${this.showBadge===!0?r`
            <${E} 
              data-testid="enchanted-badge" 
              part='${w()?t.TOGGLE_BUTTON_BADGE:`${t.TOGGLE_BUTTON_BADGE} ${t.TOGGLE_BUTTON_BADGE_RTL}`}'
            ></${E}>`:""}
          <${h}
            title=${this.singleButtonTitle}
            aria-label=${this.singleButtonAria}
            role='button'
            tabindex='0'
            withPadding
            part="${t.TOGGLE_SINGLE_BUTTON} ${this.getButtonAttribute()}"
            ?disabled=${this.disabled||u}
            size=${V.MEDIUM}
            .icon=${this.icon}
            data-testid="enchanted-toggle-single-button"
            exportparts="${D}"
          >
          </${h}>
        `:r`
          <button
            data-testid="enchanted-toggle-button-first"
            part=${this.partAttributeDecider(t.FIRST_BUTTON)}
            @click=${this.handleClick}
            disabled=${this.disabled||u}
            value=${this.values[0]}
          >
            ${this.renderIcon(this.icons[0]||this.iconUrls[0],t.TOGGLE_BUTTON_ICON)}
          </button>
          <button
            data-testid="enchanted-toggle-button-second"
            part=${this.partAttributeDecider(t.SECOND_BUTTON)}
            @click=${this.handleClick}
            disabled=${this.disabled||u}
            value=${this.values[1]}
          >
            ${this.renderIcon(this.icons[1]||this.iconUrls[1],t.TOGGLE_BUTTON_ICON)}
          </button>
        `}
      </div>
    `}}s([o({type:Boolean})],l.prototype,"singleButton");s([o({type:Boolean})],l.prototype,"toggleOn");s([o({type:Boolean})],l.prototype,"showBadge");s([o({type:Boolean})],l.prototype,"disabled");s([o({type:Boolean})],l.prototype,"outlined");s([o({type:String})],l.prototype,"selectedValue");s([o({attribute:!1})],l.prototype,"iconUrls");s([o({attribute:!1})],l.prototype,"icons");s([o()],l.prototype,"icon");s([o({attribute:!1})],l.prototype,"values");s([o({type:String})],l.prototype,"singleButtonTitle");s([o({type:String})],l.prototype,"singleButtonAria");customElements.get(B)?S("Component (%s) is currently registered and not possible to registrate again.",B):customElements.define(B,l);const c="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.26%2015C8.86231%2014.9997%208.48103%2014.8414%208.2%2014.56L1.44%207.805C1.15862%207.52396%201.00035%207.14269%201%206.745V2.5C1%202.10218%201.15804%201.72064%201.43934%201.43934C1.72064%201.15804%202.10218%201%202.5%201H6.745C7.14269%201.00035%207.52396%201.15862%207.805%201.44L14.56%208.195C14.6998%208.33435%2014.8108%208.49994%2014.8865%208.68227C14.9622%208.8646%2015.0012%209.06008%2015.0012%209.2575C15.0012%209.45492%2014.9622%209.6504%2014.8865%209.83273C14.8108%2010.0151%2014.6998%2010.1806%2014.56%2010.32L10.32%2014.56C10.039%2014.8414%209.65769%2014.9997%209.26%2015ZM2.5%202C2.36739%202%202.24021%202.05268%202.14645%202.14645C2.05268%202.24021%202%202.36739%202%202.5V6.745C2.00027%206.81115%202.01367%206.8766%202.03942%206.93753C2.06517%206.99847%202.10276%207.05369%202.15%207.1L8.905%2013.855C8.99868%2013.9481%209.12541%2014.0004%209.2575%2014.0004C9.38959%2014.0004%209.51632%2013.9481%209.61%2013.855L13.855%209.61C13.9481%209.51632%2014.0004%209.38959%2014.0004%209.2575C14.0004%209.12541%2013.9481%208.99868%2013.855%208.905L7.1%202.15C7.05369%202.10276%206.99847%202.06517%206.93753%202.03942C6.8766%202.01367%206.81115%202.00027%206.745%202H2.5Z'%20fill='rgba(0,%200,%200,%200.60)'/%3e%3cpath%20d='M5%207C4.60444%207%204.21776%206.8827%203.88886%206.66294C3.55996%206.44318%203.30362%206.13082%203.15224%205.76537C3.00087%205.39991%202.96126%204.99778%203.03843%204.60982C3.1156%204.22186%203.30608%203.86549%203.58579%203.58579C3.86549%203.30608%204.22186%203.1156%204.60982%203.03843C4.99778%202.96126%205.39991%203.00087%205.76537%203.15224C6.13082%203.30362%206.44318%203.55996%206.66294%203.88886C6.8827%204.21776%207%204.60444%207%205C7%205.53043%206.78929%206.03914%206.41421%206.41421C6.03914%206.78929%205.53043%207%205%207ZM5%204C4.80222%204%204.60888%204.05865%204.44443%204.16853C4.27998%204.27841%204.15181%204.43459%204.07612%204.61732C4.00043%204.80004%203.98063%205.00111%204.01921%205.19509C4.0578%205.38907%204.15304%205.56725%204.29289%205.70711C4.43275%205.84696%204.61093%205.9422%204.80491%205.98079C4.99889%206.01937%205.19996%205.99957%205.38268%205.92388C5.56541%205.84819%205.72159%205.72002%205.83147%205.55557C5.94135%205.39112%206%205.19778%206%205C6%204.73478%205.89464%204.48043%205.70711%204.29289C5.51957%204.10536%205.26522%204%205%204Z'%20fill='rgba(0,%200,%200,%200.60)'/%3e%3c/svg%3e",p="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14%203H5V4H14V3Z'%20fill='rgba(0,%200,%200,%200.60)'/%3e%3cpath%20d='M14%2012H5V13H14V12Z'%20fill='rgba(0,%200,%200,%200.60)'/%3e%3cpath%20d='M14%207.5H5V8.5H14V7.5Z'%20fill='rgba(0,%200,%200,%200.60)'/%3e%3cpath%20d='M3%207.5H2V8.5H3V7.5Z'%20fill='rgba(0,%200,%200,%200.60)'/%3e%3cpath%20d='M3%203H2V4H3V3Z'%20fill='rgba(0,%200,%200,%200.60)'/%3e%3cpath%20d='M3%2012H2V13H3V12Z'%20fill='rgba(0,%200,%200,%200.60)'/%3e%3c/svg%3e",O=L`
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0.7L7.3 0L4 3.3L0.7 0L0 0.7L3.3 4L0 7.3L0.7 8L4 4.7L7.3 8L8 7.3L4.7 4L8 0.7Z"
      fill="black" fill-opacity="0.6" />
  </svg>
`,K={title:"Input/enchanted-toggle-button",tags:["autodocs"],argTypes:{singleButton:{control:"boolean",description:"Single button mode",table:{defaultValue:{summary:"false"}}},toggleOn:{control:"boolean",description:"Toggle state (single button)",table:{defaultValue:{summary:"false"}}},showBadge:{control:"boolean",description:"Show badge (single button)",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Disabled",table:{defaultValue:{summary:"false"}}},outlined:{control:"boolean",description:"Outlined",table:{defaultValue:{summary:"false"}}},selectedValue:{control:"text",description:"Selected value (two-button mode)",table:{defaultValue:{summary:""}}},iconUrls:{control:"object",description:"Icon URLs (two-button mode)",table:{defaultValue:{summary:"[...]"}}},values:{control:"object",description:"Values (two-button mode)",table:{defaultValue:{summary:"[...]"}}},singleButtonTitle:{control:"text",description:"Single button title",table:{defaultValue:{summary:""}}},singleButtonAria:{control:"text",description:"Single button aria-label",table:{defaultValue:{summary:""}}},icon:{control:!1,description:"Icon template (single button)",table:{defaultValue:{summary:"svg"}}}},args:{singleButton:!1,toggleOn:!1,showBadge:!1,disabled:!1,outlined:!1,selectedValue:"",iconUrls:[],values:["on","off"],singleButtonTitle:"Toggle",singleButtonAria:"Toggle",icon:""},render:a=>r`
      <${n}
        ?toggleOn=${a.toggleOn}
        ?disabled=${a.disabled}
        ?outlined=${a.outlined}
        .selectedValue=${a.selectedValue}
        .iconUrls=${[c,p]}
        .values=${a.values}
      ></${n}>
    `},T={},g={render:()=>r`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end;">
        <div>
          <div>Two Button (Off)</div>
          <${n} .iconUrls=${[c,p]} .values=${["on","off"]} selectedValue="off"></${n}>
        </div>
        <div>
          <div>Two Button (On)</div>
          <${n} .iconUrls=${[c,p]} .values=${["on","off"]} selectedValue="on"></${n}>
        </div>
        <div>
          <div>Single Button (Off)</div>
          <${n} singleButton .icon=${O} singleButtonTitle="Power" singleButtonAria="Power off" toggleOn="false"></${n}>
        </div>
        <div>
          <div>Single Button (On)</div>
          <${n} singleButton .icon=${O} singleButtonTitle="Power" singleButtonAria="Power on" toggleOn></${n}>
        </div>
        <div>
          <div>Single Button with Badge</div>
          <${n} singleButton .icon=${O} singleButtonTitle="Badge" showBadge toggleOn></${n}>
        </div>
        <div>
          <div>Disabled</div>
          <${n} .iconUrls=${[c,p]} .values=${["on","off"]} selectedValue="off" disabled></${n}>
        </div>
      </div>
    `};var b,G,N;T.parameters={...T.parameters,docs:{...(b=T.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(N=(G=T.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var $,m,C;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end;">
        <div>
          <div>Two Button (Off)</div>
          <\${ENCHANTED_TOGGLE_BUTTON_TAG} .iconUrls=\${[tagUrl, listUrl]} .values=\${['on', 'off']} selectedValue="off"></\${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </div>
        <div>
          <div>Two Button (On)</div>
          <\${ENCHANTED_TOGGLE_BUTTON_TAG} .iconUrls=\${[tagUrl, listUrl]} .values=\${['on', 'off']} selectedValue="on"></\${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </div>
        <div>
          <div>Single Button (Off)</div>
          <\${ENCHANTED_TOGGLE_BUTTON_TAG} singleButton .icon=\${svgClose} singleButtonTitle="Power" singleButtonAria="Power off" toggleOn="false"></\${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </div>
        <div>
          <div>Single Button (On)</div>
          <\${ENCHANTED_TOGGLE_BUTTON_TAG} singleButton .icon=\${svgClose} singleButtonTitle="Power" singleButtonAria="Power on" toggleOn></\${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </div>
        <div>
          <div>Single Button with Badge</div>
          <\${ENCHANTED_TOGGLE_BUTTON_TAG} singleButton .icon=\${svgClose} singleButtonTitle="Badge" showBadge toggleOn></\${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </div>
        <div>
          <div>Disabled</div>
          <\${ENCHANTED_TOGGLE_BUTTON_TAG} .iconUrls=\${[tagUrl, listUrl]} .values=\${['on', 'off']} selectedValue="off" disabled></\${ENCHANTED_TOGGLE_BUTTON_TAG}>
        </div>
      </div>
    \`;
  }
}`,...(C=(m=g.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};const X=["Default","AllStates"];export{g as AllStates,T as Default,X as __namedExportsOrder,K as default};
