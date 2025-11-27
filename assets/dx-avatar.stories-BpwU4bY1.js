import{x as r}from"./iframe-BabVupQu.js";import"./index-Nalu1cgc.js";import{d as A,e as o,f as a}from"./cssClassEnums-ChRP0d8n.js";import{c as B,B as s,t as Q}from"./index-B_E2F3xT.js";import"./preload-helper-C1FmrZbK.js";import"./dx-ac-base-element-CMZo8k64.js";var n={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z"}},{elem:"path",attrs:{d:"M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z"}}],name:"link",size:32};const E="icon-link";class p extends s{render(){return r`${Q({...n,attrs:{...n.attrs,preserveAspectRatio:"xMidYMid"}})}`}}B&&!customElements.get(E)&&customElements.define(E,p);const R="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAgACADAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/igD/AHoA/3+KAP8AegAoA/3+KAP8AegD/f4oAKAP8AegD/f4oA/wB6ACgD/AH+KAP8AAHoA/wB/igD/2Q==",x={title:"Data display/dx-avatar",component:"dx-avatar",tags:["autodocs"],argTypes:{variant:{control:{type:"radio"},options:[a.AVATAR_LETTER,a.AVATAR_ICON,a.AVATAR_ICON_TEMPLATE,a.AVATAR_IMG],description:"Avatar variant",defaultValue:a.AVATAR_LETTER},type:{control:{type:"radio"},options:[o.AVATAR_ROUNDED,o.AVATAR_CIRCULAR],description:"Avatar type",defaultValue:o.AVATAR_ROUNDED},color:{control:{type:"radio"},options:[A.AVATAR_DEFAULT_COLOR,A.AVATAR_RED,A.AVATAR_ORANGE,A.AVATAR_YELLOW,A.AVATAR_LIME,A.AVATAR_GREEN,A.AVATAR_TEAL,A.AVATAR_BLUE,A.AVATAR_INDIGO,A.AVATAR_PURPLE,A.AVATAR_PINK],description:"Avatar color",defaultValue:A.AVATAR_DEFAULT_COLOR},imgUrl:{control:"text",description:"Image URL"},iconUrl:{control:"object",description:"Icon URL"},avatarText:{control:"text",description:"Avatar text"},iconTemplate:{control:"object",description:"Icon template (SVG string)"}},args:{variant:a.AVATAR_LETTER,type:o.AVATAR_ROUNDED,color:A.AVATAR_DEFAULT_COLOR,imgUrl:R,iconUrl:r`<icon-link></icon-link>`,avatarText:"AB",iconTemplate:r`<icon-template></icon-template>`},parameters:{docs:{description:{component:"Avatar component with controls for type, variant, color, and content."}}}},e={render:t=>r`
      <dx-avatar
        .variant=${t.variant}
        .type=${t.type}
        .color=${t.color}
        .imgUrl=${t.imgUrl}
        .iconUrl=${t.iconUrl}
        .avatarText=${t.avatarText}
        .iconTemplate=${t.iconTemplate}
      ></dx-avatar>
    `,name:"DxAvatar"};var i,c,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <dx-avatar
        .variant=\${args.variant}
        .type=\${args.type}
        .color=\${args.color}
        .imgUrl=\${args.imgUrl}
        .iconUrl=\${args.iconUrl}
        .avatarText=\${args.avatarText}
        .iconTemplate=\${args.iconTemplate}
      ></dx-avatar>
    \`;
  },
  name: 'DxAvatar'
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const D=["DxAvatar"];export{e as DxAvatar,D as __namedExportsOrder,x as default};
