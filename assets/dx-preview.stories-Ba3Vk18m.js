import{T as oe,x as s,E as m}from"./iframe-DgNdRKpa.js";import{n as u,t as ne,D as re}from"./dx-ac-base-element-BRVmdAbS.js";import{r as E}from"./state-g_VKachv.js";import"./dx-circular-progress-CBqiR7lp.js";import"./dx-icon-button-hiUpIBJT.js";import"./dx-input-select-CQJK32kj.js";import{I as c}from"./dx-item-type-avatar-NdPwBCOH.js";import"./dx-tooltip-BgcWVV7r.js";import{q as r,I as T,g as se,j as ae,T as O}from"./cssClassEnums-flPS6Iko.js";import{a as de,T as I,I as B,P as le,b as U,c as V,d as ce}from"./exportParts-DIz_AD5x.js";import{i as pe}from"./localization-8Qc5IxgI.js";import"./index-CKSEdNuR.js";import"./index-DI2o82En.js";import{c as g,B as x,t as N}from"./index-DaIQVsYU.js";import{K as he}from"./keyboardEventKeys-BnoN8uA3.js";import"./preload-helper-C1FmrZbK.js";import"./dx-button-q5wlWak9.js";import"./lodash-BYuv2CZ-.js";import"./dx-list-item-BMtFo3VC.js";import"./dx-input-select-DRXt9p_b.js";import"./index-CVuC80d4.js";import"./index-UTkq3v_9.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue={ATTRIBUTE:1},Ee=e=>(...t)=>({_$litDirective$:e,values:t});let _e=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,o){this._$Ct=t,this._$AM=i,this._$Ci=o}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie="important",me=" !"+ie,C=Ee(class extends _e{constructor(e){var t;if(super(e),e.type!==ue.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const o=e[i];return o==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:i}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)t[o]==null&&(this.ft.delete(o),o.includes("-")?i.removeProperty(o):i[o]=null);for(const o in t){const n=t[o];if(n!=null){this.ft.add(o);const l=typeof n=="string"&&n.endsWith(me);o.includes("-")||l?i.setProperty(o,l?n.slice(0,-11):n,l?ie:""):i[o]=n}}return oe}}),Re=[10,25,50,75,100,175,250,325,400];var p=(e=>(e.CONTENT="Content",e.CONTENT_TEMPLATE="ContentTemplate",e.SITE_AREA_TEMPLATE="SiteAreaTemplate",e.LIBRARY_AUTHORING_TOOLS_COMPONENT="LibraryAuthoringToolsComponent",e.LIBRARY_DATE_COMPONENT="LibraryDateComponent",e.LIBRARY_FILE_COMPONENT="LibraryFileComponent",e.LIBRARY_HTML_COMPONENT="LibraryHTMLComponent",e.LIBRARY_IMAGE_COMPONENT="LibraryImageComponent",e.LIBRARY_JSP_COMPONENT="LibraryJSPComponent",e.LIBRARY_LINK_COMPONENT="LibraryLinkComponent",e.LIBRARY_LIST_PRESENTATION_COMPONENT="LibraryListPresentationComponent",e.LIBRARY_MENU_COMPONENT="LibraryMenuComponent",e.LIBRARY_NAVIGATOR_COMPONENT="LibraryNavigatorComponent",e.LIBRARY_NUMERIC_COMPONENT="LibraryNumericComponent",e.OPTION_SELECTION_COMPONENT="OptionSelectionComponent",e.LIBRARY_PAGE_NAVIGATION_COMPONENT="LibraryPageNavigationComponent",e.LIBRARY_PERSONALIZATION_COMPONENT="LibraryPersonalizationComponent",e.LIBRARY_REFERENCE_COMPONENT="LibraryReferenceComponent",e.LIBRARY_RICH_TEXT_COMPONENT="LibraryRichTextComponent",e.LIBRARY_SEARCH_COMPONENT="LibrarySearchComponent",e.LIBRARY_SHORT_TEXT_COMPONENT="LibraryShortTextComponent",e.LIBRARY_STYLESHEET_COMPONENT="LibraryStyleSheetComponent",e.LIBRARY_TAXONOMY_COMPONENT="LibraryTaxonomyComponent",e.LIBRARY_TEXT_COMPONENT="LibraryTextComponent",e.LIBRARY_USER_NAME_COMPONENT="LibraryUserNameComponent",e.LIBRARY_USER_SELECTION_COMPONENT="LibraryUserSelectionComponent",e.CATEGORY="Category",e.CONTENT_LINK="ContentLink",e.FOLDER="Folder",e.LIBRARY="Library",e.PORTAL_PAGE="PortalPage",e.PRESENTATION_TEMPLATE="PresentationTemplate",e.PROJECT="Project",e.PROJECT_TEMPLATE="ProjectTemplate",e.SEGMENT="Segment",e.SITE_AREA="SiteArea",e.TAXONOMY="Taxonomy",e.VERSION_ACTION="VersionAction",e.CUSTOM_WORKFLOW_ACTION="CustomWorkflowAction",e.EMAIL_ACTION="EmailAction",e.EXPIRE_ACTION="ExpireAction",e.PUBLISH_ACTION="PublishAction",e.SCHEDULED_MOVE_ACTION="ScheduledMoveAction",e.WORKFLOW="Workflow",e.WORKFLOW_STAGE="WorkflowStage",e.NOTEBOOK_REFERENCE="notebookReference",e.MAIL_ALL="mailAll",e.USER_PROFILE_ALT="userProfileAlt",e.LICENSE_GLOBAL="licenseGlobal",e.USER_PROFILE="userProfile",e.DATA_ANALYTICS="dataAnalytics",e.REMINDER="reminder",e.LICENSE_DRAFT="licenseDraft",e.EVENT_WARNING="eventWarning",e.LAYERS_EXTERNAL="layersExternal",e.SUBFLOW="subflow",e.DAM_COLLECTION="collection",e.DAM_IMAGE="image",e.DAM_VIDEO="video",e.DAM_DOCUMENT="application/vnd.openxmlformats-officedocument.wordprocessingml.document",e.DAM_XLS="application/vnd.ms-excel",e.DAM_XLSX="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",e.DAM_PPT="application/vnd.ms-powerpoint",e.DAM_PPTX="application/vnd.openxmlformats-officedocument.presentationml.presentation",e.DAM_PDF="application/pdf",e.DAM_GIF="image/gif",e.DAM_JPEG="image/jpeg",e.DAM_PNG="image/png",e.DAM_TIF="image/tiff",e.DAM_WEBP="image/webp",e.DAM_MP4="video/mp4",e.DAM_OGG="video/ogg",e.DAM_WEBM="video/webm",e))(p||{});const ve={image:c.IMAGE,"image/jpeg":c.IMAGE,"image/png":c.IMAGE,"image/webp":c.IMAGE,video:c.VIDEO,"video/mp4":c.VIDEO,"video/ogg":c.VIDEO,"video/webm":c.VIDEO,"application/vnd.openxmlformats-officedocument.wordprocessingml.document":c.DOC,"application/pdf":c.PDF,"application/vnd.ms-excel":c.XLS,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":c.XLSX,"application/vnd.ms-powerpoint":c.PPT,"application/vnd.openxmlformats-officedocument.presentationml.presentation":c.PPTX,"image/tiff":c.TIF,"image/gif":c.GIF};var h=(e=>(e.SUCCESS="SUCCESS",e.ERROR_NOT_FOUND="ERROR_NOT_FOUND",e.ERROR_FORBIDDEN="ERROR_FORBIDDEN",e.ERROR_BAD_REQUEST="ERROR_BAD_REQUEST",e.ERROR_SERVER="ERROR_SERVER",e.ERROR_FORMAT_UNSUPPORTED="ERROR_FORMAT_UNSUPPORTED",e))(h||{});const Oe=async e=>{if(!e)return h.ERROR_BAD_REQUEST;const t=new AbortController,i=t.signal;try{const o=await fetch(e,{method:"GET",credentials:"include",cache:"no-cache",signal:i});return o.ok?(t.abort(),h.SUCCESS):o.status===404?h.ERROR_NOT_FOUND:o.status===403?h.ERROR_FORBIDDEN:o.status>=500?h.ERROR_SERVER:h.ERROR_BAD_REQUEST}catch(o){return o instanceof Error&&o.name==="AbortError"?h.SUCCESS:h.ERROR_SERVER}};var z={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M8 12H18V14H8z"}},{elem:"path",attrs:{d:"M21.4479,20A10.856,10.856,0,0,0,24,13,11,11,0,1,0,13,24a10.856,10.856,0,0,0,7-2.5521L27.5859,29,29,27.5859ZM13,22a9,9,0,1,1,9-9A9.01,9.01,0,0,1,13,22Z"}}],name:"zoom--out",size:32};const W="icon-zoom-out";let Ie=class extends x{render(){return s`${N({...z,attrs:{...z.attrs,preserveAspectRatio:"xMidYMid"}})}`}};g&&!customElements.get(W)&&customElements.define(W,Ie);var F={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M18 12L14 12 14 8 12 8 12 12 8 12 8 14 12 14 12 18 14 18 14 14 18 14 18 12z"}},{elem:"path",attrs:{d:"M21.4479,20A10.856,10.856,0,0,0,24,13,11,11,0,1,0,13,24a10.856,10.856,0,0,0,7-2.5521L27.5859,29,29,27.5859ZM13,22a9,9,0,1,1,9-9A9.01,9.01,0,0,1,13,22Z"}}],name:"zoom--in",size:32};const k="icon-zoom-in";let Te=class extends x{render(){return s`${N({...F,attrs:{...F.attrs,preserveAspectRatio:"xMidYMid"}})}`}};g&&!customElements.get(k)&&customElements.define(k,Te);var H={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M26 24v4H6V24H4v4H4a2 2 0 002 2H26a2 2 0 002-2h0V24zM26 14L24.59 12.59 17 20.17 17 2 15 2 15 20.17 7.41 12.59 6 14 16 24 26 14z"}}],name:"download",size:32};const G="icon-download";let Ae=class extends x{render(){return s`${N({...H,attrs:{...H.attrs,preserveAspectRatio:"xMidYMid"}})}`}};g&&!customElements.get(G)&&customElements.define(G,Ae);var Y={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M14 26L15.41 24.59 7.83 17 28 17 28 15 7.83 15 15.41 7.41 14 6 4 16 14 26z"}}],name:"arrow--left",size:32};const Z="icon-arrow-left";let Me=class extends x{render(){return s`${N({...Y,attrs:{...Y.attrs,preserveAspectRatio:"xMidYMid"}})}`}};g&&!customElements.get(Z)&&customElements.define(Z,Me);var X={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M18 6L16.57 7.393 24.15 15 4 15 4 17 24.15 17 16.57 24.573 18 26 28 16 18 6z"}}],name:"arrow--right",size:32};const q="icon-arrow-right";class ge extends x{render(){return s`${N({...X,attrs:{...X.attrs,preserveAspectRatio:"xMidYMid"}})}`}}g&&!customElements.get(q)&&customElements.define(q,ge);var xe=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,d=(e,t,i,o)=>{for(var n=o>1?void 0:o?Ne(t,i):t,l=e.length-1,_;l>=0;l--)(_=e[l])&&(n=(o?_(t,i,n):_(n))||n);return o&&n&&xe(t,i,n),n};let a=class extends re{constructor(){super(...arguments),this._ZOOM_OPTIONS=Re,this._ZOOM_BUTTON_MARGIN=12,this._ZOOM_DEFAULT=100,this.open=!1,this.items=[],this.customHeaderTitle=null,this.component="",this.renditionLabel="",this.selectButtonTitle="",this.currentItemIndex=0,this.selectedRenditionId=null,this.skipSourceValidation=!1,this.zoomPercentage=this._ZOOM_DEFAULT,this.zoomOutDisable=!1,this.zoomInDisable=!1,this.zoomToFitPercentage=this._ZOOM_DEFAULT,this.currentDisplaySource=null,this.isLoading=!0,this.hasError=!1,this.errorType=null,this.isMediaReady=!1,this._activeRequestToken=0,this.isLtr=pe(),this._handleResize=()=>{var o,n;const e=this.items[this.currentItemIndex];if(!this.open||!e||e.type.split("/")[0]!==p.DAM_VIDEO)return;const t=(o=this.renderRoot)==null?void 0:o.querySelector('video[part="preview-item-video"]'),i=(n=this.renderRoot)==null?void 0:n.querySelector('div[part="preview-item-container"]');if(t&&i){if(!this.currentDisplaySource){t.removeAttribute("style");return}const l=t.videoWidth??0,v=(t.videoHeight??0)/l,R=i.offsetWidth,M=R*v;M<i.clientHeight?(t.style.width=`${R}px`,t.style.height=`${M}px`):(t.style.setProperty("height",`${i.clientHeight}px`,"important"),t.style.width="100%")}},this._handleKeydown=e=>{this.open&&e.key===he.TAB&&this._handleTrapFocus(e)}}willUpdate(e){this.open&&(e.has("currentItemIndex")||e.has("items")||e.has("selectedRenditionId"))&&this._updateCurrentItemAndRendition()}updated(e){var t;super.updated(e),e.has("open")&&this.open&&requestAnimationFrame(()=>{var o;const i=(o=this.renderRoot)==null?void 0:o.querySelector('[role="dialog"]');i&&i.focus()}),this.open&&((t=this.items[this.currentItemIndex])==null?void 0:t.type.split("/")[0])===p.DAM_VIDEO&&(e.has("open")||e.has("currentItemIndex")||e.has("items"))&&requestAnimationFrame(()=>{this._handleResize()})}async _updateCurrentItemAndRendition(){this._activeRequestToken++;const e=this._activeRequestToken;if(this.isLoading=!0,this.isMediaReady=!1,this.hasError=!1,this.errorType=null,this.currentDisplaySource=null,this.items.length===0||this.currentItemIndex<0||this.currentItemIndex>=this.items.length){e===this._activeRequestToken&&(this.isLoading=!1);return}const t=this.items[this.currentItemIndex],i=t.type.split("/")[0];if((i===p.DAM_IMAGE||i===p.DAM_VIDEO)&&t.renditions&&t.renditions.length>0){let o=t.renditions.find(n=>n.id===this.selectedRenditionId);if(o||(o=t.renditions[0]),this.selectedRenditionId=o.id,this.skipSourceValidation){e===this._activeRequestToken&&(this.currentDisplaySource=o.source,this.isLoading=!1);return}try{const n=await Oe(o.source);if(e!==this._activeRequestToken)return;n===h.SUCCESS?this.currentDisplaySource=o.source:(this.hasError=!0,this.errorType=n,this.dispatchEvent(new CustomEvent("preview-error",{detail:{item:t,errorType:this.errorType},bubbles:!0,composed:!0})))}finally{e===this._activeRequestToken&&(this.isLoading=!1)}}else e===this._activeRequestToken&&(this.isLoading=!1,this.hasError=!0)}_resetState(){this.open=!1,this.isLoading=!0,this.hasError=!1,this.isMediaReady=!1,this.errorType=null,this.selectedRenditionId=null,this.currentDisplaySource=null,this.zoomPercentage=this._ZOOM_DEFAULT,this._activeRequestToken=0}_handleBack(){this._resetState(),this.dispatchEvent(new CustomEvent("preview-back",{detail:{open:this.open},bubbles:!0,composed:!0}))}_handlePreviousButtonClick(){const e=new CustomEvent("preview-previous",{bubbles:!0,composed:!0,detail:{previousIndex:this.currentItemIndex-1},cancelable:!0});this.dispatchEvent(e),e.defaultPrevented||(this.currentItemIndex-=1)}_handleNextButtonClick(){const e=new CustomEvent("preview-next",{bubbles:!0,composed:!0,detail:{nextIndex:this.currentItemIndex+1},cancelable:!0});this.dispatchEvent(e),e.defaultPrevented||(this.currentItemIndex+=1)}_handleZoomOutButtonClick(){const t=[...this._ZOOM_OPTIONS].reverse().find(i=>this.zoomPercentage>i);t===10&&(this.zoomOutDisable=!0),t&&(this.zoomPercentage=t),this.zoomInDisable=!1}_handleZoomInButtonClick(){const e=this._ZOOM_OPTIONS.find(t=>t>this.zoomPercentage);e===400&&(this.zoomInDisable=!0),e&&(this.zoomPercentage=e),this.zoomOutDisable=!1}_calculateImagePercentage(){var v;const e=(v=this.renderRoot)==null?void 0:v.querySelector("#preview-item-image"),t=(e==null?void 0:e.height)??0,i=e.clientHeight??0;if(t===i){const R=Math.round((i-this._ZOOM_BUTTON_MARGIN*2)/i*100);return this.zoomToFitPercentage=R,R}const o=Math.round((i-this._ZOOM_BUTTON_MARGIN*2)/t*100),n=e.clientWidth??0,l=e.width??0,_=Math.round((n-this._ZOOM_BUTTON_MARGIN*2)/l*100);return this.zoomToFitPercentage=Math.min(o,_),this._ZOOM_DEFAULT}_handleZoomPercentageFitClick(){this.zoomPercentage!==this._ZOOM_DEFAULT?this.zoomPercentage=this._ZOOM_DEFAULT:this.zoomPercentage=this.zoomToFitPercentage,this.zoomInDisable=!1,this.zoomOutDisable=!1}_handlePreviewError(){this.isLoading=!1,this.hasError=!0,this.isMediaReady=!1,this.errorType=h.ERROR_FORMAT_UNSUPPORTED;const e=this.items[this.currentItemIndex];this.dispatchEvent(new CustomEvent("preview-error",{detail:{item:e,errorType:this.errorType},bubbles:!0,composed:!0}))}getUnsupportedFileComponent(e,t=""){return s`
      <div part=${r.PREVIEW_ITEM_CONTENT}>
        <div part=${r.PREVIEW_ITEM_UNSUPPORTED_CONTAINER}>
          <dx-item-type-avatar
            itemtype=${ve[e]??e}
            exportparts=${de}
          >
          </dx-item-type-avatar>
          <div part=${r.PREVIEW_ITEM_UNSUPPORTED_MESSAGE_CONTAINER}>
            <p part=${r.PREVIEW_ITEM_UNSUPPORTED_MESSAGE_TITLE}>
              ${this.getMessage("preview.item.unsupported.title")}
            </p>
            <span part=${r.PREVIEW_ITEM_UNSUPPORTED_MESSAGE_DESCRIPTION}>
              ${this.getMessage("preview.item.unsupported.description",[{"{itemType}":(t==null?void 0:t.toUpperCase())||(e==null?void 0:e.toUpperCase())}])}
            </span>
          </div>
        </div>
      </div>
    `}_renderPreviewItem(){if(this.component)return s`
        <div part=${r.PREVIEW_ITEM_CONTENT}>
          ${this.component}
        </div>
      `;if(!this.items||this.items.length===0)return m;if(this.hasError){const i=this.items[this.currentItemIndex];return this.getUnsupportedFileComponent(i==null?void 0:i.type,i==null?void 0:i.fileExtension)}if(this.isLoading)return m;const e=this.items[this.currentItemIndex];if(!this.currentDisplaySource)return this.getUnsupportedFileComponent(e==null?void 0:e.type,e==null?void 0:e.fileExtension);switch(e.type.split("/")[0]){case p.DAM_IMAGE:{const i=this.zoomPercentage/100;return s`
          <img
            id="preview-item-image"
            part=${r.PREVIEW_ITEM_IMAGE}
            src=${this.currentDisplaySource}
            alt=${e.title}
            style=${C({"--zoom-scale-factor":i,visibility:this.isMediaReady?"visible":"hidden"})}
            @load=${this._handleMediaReady}
            @error=${this._handlePreviewError}
          />
        `}case p.DAM_VIDEO:return s`
          <div part=${r.PREVIEW_ITEM_VIDEO_CONTAINER}>
            <video 
              controls 
              part=${r.PREVIEW_ITEM_VIDEO}
              style=${C({visibility:this.isMediaReady?"visible":"hidden"})}
              @loadeddata=${this._handleMediaReady}
              @error=${this._handlePreviewError}
              .src=${this.currentDisplaySource}
            >
            </video>
          </div>
        `;default:return this.getUnsupportedFileComponent(e.type,e==null?void 0:e.fileExtension)}}_getRenditionOptionValue(e){return e.type?`${e.type} (${e.dimension??this.getMessage("preview.rendition.metadata.unknown")})`:""}_getDefaultSelectedRenditionValue(){if(this.currentItemIndex===null||this.currentItemIndex<0||this.currentItemIndex>=this.items.length)return"";const e=this.items[this.currentItemIndex];if(e&&e.type.split("/")[0]===p.DAM_IMAGE&&e.renditions&&e.renditions.length>0){const t=e.renditions.find(i=>i.id===this.selectedRenditionId);if(t)return this._getRenditionOptionValue(t);if(e.renditions.length>0)return this._getRenditionOptionValue(e.renditions[0])}return""}_handleRenditionSelectChange(e){var o;const t=(o=e.detail)==null?void 0:o.value;if(t===void 0||this.currentItemIndex===null)return;const i=this.items[this.currentItemIndex];if(i&&i.type.split("/")[0]===p.DAM_IMAGE&&i.renditions){const n=i.renditions.find(l=>l.id===t);if(n){const l=new CustomEvent("preview-rendition-change",{bubbles:!0,composed:!0,detail:{id:this.items[this.currentItemIndex].id,title:this.items[this.currentItemIndex].title,selectedRenditionId:n.id,source:this.currentDisplaySource},cancelable:!0});this.dispatchEvent(l),l.defaultPrevented||(this.selectedRenditionId=n.id)}}}_handleMediaReady(){this.isLoading=!1,this.isMediaReady=!0,this.hasError=!1;const e=this.items[this.currentItemIndex];if(!e)return;const t=e.type.split("/")[0];t===p.DAM_IMAGE?requestAnimationFrame(()=>this.zoomPercentage=this._calculateImagePercentage()):t===p.DAM_VIDEO&&requestAnimationFrame(()=>this._handleResize())}_handleDownloadButtonClick(){this.dispatchEvent(new CustomEvent("preview-download",{bubbles:!0,composed:!0,detail:{id:this.items[this.currentItemIndex].id,title:this.items[this.currentItemIndex].title,selectedRenditionId:this.selectedRenditionId,source:this.currentDisplaySource}}))}_handleSelectButtonClick(){this.dispatchEvent(new CustomEvent("preview-select",{bubbles:!0,composed:!0,detail:{id:this.items[this.currentItemIndex].id,title:this.items[this.currentItemIndex].title,selectedRenditionId:this.selectedRenditionId,source:this.currentDisplaySource}}))}_handleTrapFocus(e){var l;const t=(l=this.renderRoot)==null?void 0:l.querySelectorAll("dx-icon-button:not([disabled]), dx-button:not([disabled]), dx-input-select:not([disabled])"),i=t==null?void 0:t[0],o=t==null?void 0:t[t.length-1],n=this.renderRoot&&this.renderRoot.activeElement;e.shiftKey?n===i&&(o==null||o._focusButton(),e.preventDefault()):n===o&&(i==null||i._focusButton(),e.preventDefault())}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._handleResize),window.addEventListener("keydown",this._handleKeydown),this.renditionLabel==""&&(this.renditionLabel=this.getMessage("preview.rendition.label")),this.selectButtonTitle==""&&(this.selectButtonTitle=this.getMessage("select"))}disconnectedCallback(){window.removeEventListener("resize",this._handleResize),window.removeEventListener("keydown",this._handleKeydown),super.disconnectedCallback()}render(){var D,S,y;const e=this.isLoading||this.currentDisplaySource&&!this.isMediaReady&&!this.hasError||(this.isPreviousButtonDisabled!==void 0?this.isPreviousButtonDisabled:this.currentItemIndex<=0),t=this.isLoading||this.currentDisplaySource&&!this.isMediaReady&&!this.hasError||(this.isNextButtonDisabled!==void 0?this.isNextButtonDisabled:this.currentItemIndex===this.items.length-1),i=this.items[this.currentItemIndex??0],o=(i==null?void 0:i.type.split("/")[0])===p.DAM_IMAGE,n=i==null?void 0:i.renditions,l={overflow:o&&this.zoomPercentage!==this._ZOOM_DEFAULT?"auto":"hidden"};if(!this.open)return m;const _=this.getMessage("preview.tooltip.download.button"),v=this.getMessage("preview.tooltip.next.asset.button"),R=this.getMessage("preview.tooltip.previous.asset.button"),M=this.getMessage("preview.tooltip.zoom.out.button"),w=this.getMessage("preview.tooltip.zoom.in.button"),L=this.getMessage(this.zoomPercentage===100?"preview.tooltip.zoom.to.fit":"preview.tooltip.view.actual.size"),$=this.customHeaderTitle??((D=this.items[this.currentItemIndex])==null?void 0:D.title)??this.getMessage("preview.header.title");return s`
    <div part=${r.PREVIEW_BACKDROP} 
      ?open=${this.open} 
      tabindex="-1"
      role="presentation"
    >
      <div part=${r.PREVIEW_CONTAINER} role="dialog" aria-modal="true" tabindex="-1" aria-label=${$} aria-modal="true">
        <div part=${r.PREVIEW_HEADER} data-testid="dx-preview-header">
          <div part=${r.PREVIEW_HEADER_START_ACTIONS}>
            <dx-tooltip tooltiptext=${this.getMessage("preview.tooltip.back.button")} exportparts=${I}>
              <dx-icon-button
                slot="target"
                .icon=${this.isLtr?s`<icon-arrow-left></icon-arrow-left>`:s`<icon-arrow-right></icon-arrow-right>`}
                exportparts="${B}"
                @click=${this._handleBack}
                data-testid="dx-preview-back-button"
                size=${T.MEDIUM}
                ariaLabel=${this.getMessage("preview.tooltip.back.button")}
                aria-hidden="true"
              >
              </dx-icon-button>
            </dx-tooltip>
            <span part=${r.PREVIEW_HEADER_TITLE}>
              ${$}
            </span>
          </div>
          ${o&&n&&n.length>0?s`<div part=${r.PREVIEW_HEADER_MIDDLE_ACTIONS}>
              <span part=${r.PREVIEW_HEADER_RENDITION_LABEL} id="dx-preview-rendition-select-label" aria-hidden="true">
                ${this.renditionLabel}
              </span>
              <dx-input-select
                aria-labelledby="dx-preview-rendition-select-label"
                hiddenLabel
                .options=${((y=(S=this.items[this.currentItemIndex??0])==null?void 0:S.renditions)==null?void 0:y.map(b=>({id:b.id,name:this._getRenditionOptionValue(b),value:b.type??""})))??[]}
                selectedValue=${this._getDefaultSelectedRenditionValue()}
                exportparts=${le}
                @change=${this._handleRenditionSelectChange}
                data-testid="dx-preview-rendition-select"
                part=${r.PREVIEW_HEADER_RENDITION_INPUT_SELECT}
                aria-hidden="true"
              >
              </dx-input-select>
            </div>`:m}
          <div part=${r.PREVIEW_HEADER_END_ACTIONS}>
            ${this.items.length>0?s`
                <dx-tooltip tooltiptext=${_} exportparts=${I}>
                  <dx-icon-button
                    slot="target"
                    .icon=${s`<icon-download color="currentColor"></icon-download>`}
                    exportparts="${B}"
                    @click=${this._handleDownloadButtonClick}
                    data-testid="dx-preview-download-button"
                    size=${T.MEDIUM}
                    ariaLabel=${_}
                    aria-hidden="true"
                  >
                  </dx-icon-button>
                </dx-tooltip>
                <dx-button
                  part=${r.PREVIEW_HEADER_SELECT_BUTTON}
                  buttontext=${this.selectButtonTitle}
                  exportparts="${Object.values(ae).join(",")}"
                  variant=${se.BUTTON_CONTAINED_VAR}
                  @click=${this._handleSelectButtonClick}
                  data-testid="dx-preview-select-button"
                  aria-hidden="true"
                  >
                </dx-button>
             `:m}
          </div>
        </div>
        <hr part=${r.PREVIEW_HEADER_DIVIDER} />
        <div part=${r.PREVIEW_ITEM_CONTAINER} style=${C(l)}>
          ${this.items.length>0?s`
            <div part=${r.PREVIEW_ITEM_PREVIOUS_BUTTON_CONTAINER}>
              <dx-tooltip 
                tooltiptext=${R}
                exportparts=${I}
                placement=${this.isLtr?O.TOOLTIP_BOTTOM_START:O.TOOLTIP_BOTTOM_END}
              >
                <dx-icon-button
                  slot="target"
                  part=${r.PREVIEW_ITEM_PREVIOUS_BUTTON}
                  .icon=${this.isLtr?s`<icon-chevron-left></icon-chevron-left>`:s`<icon-chevron-right></icon-chevron-right>`}
                  exportparts="${U}"
                  @click=${this._handlePreviousButtonClick}
                  ?disabled=${e}
                  data-testid="dx-preview-previous-button"
                  size=${T.MEDIUM}
                  inversecolor
                  ariaLabel=${R}
                >
                </dx-icon-button>
              </dx-tooltip>
            </div>
          `:m}
          <div part=${r.PREVIEW_ITEM_CONTENT_CONTAINER}>
            ${this._renderPreviewItem()}
            ${this.isLoading||this.currentDisplaySource&&!this.isMediaReady&&!this.hasError?s`
                <div part=${r.PREVIEW_ITEM_SPINNER_CONTAINER}>
                  <dx-circular-progress></dx-circular-progress>
                </div>
                `:m}
          </div>
          ${this.items.length>0?s`
            <div part=${r.PREVIEW_ITEM_NEXT_BUTTON_CONTAINER}>
              <dx-tooltip 
                tooltiptext=${v}
                exportparts=${I}
                placement=${this.isLtr?O.TOOLTIP_BOTTOM_END:O.TOOLTIP_BOTTOM_START}
              >
                <dx-icon-button
                  slot="target"
                  part=${r.PREVIEW_ITEM_NEXT_BUTTON}
                  .icon=${this.isLtr?s`<icon-chevron-right></icon-chevron-right>`:s`<icon-chevron-left></icon-chevron-left>`}
                  exportparts="${U}"
                  @click=${this._handleNextButtonClick}
                  ?disabled=${t}
                  data-testid="dx-preview-next-button"
                  size=${T.MEDIUM}
                  inversecolor
                  ariaLabel=${v}
                >
                </dx-icon-button>
              </dx-tooltip>
            </div>
          `:m}
        </div>
        ${!this.isLoading&&this.isMediaReady&&!this.hasError&&o&&!this.component?s`
              <div part=${r.PREVIEW_ZOOM_CONTAINER}>
                <div part=${r.PREVIEW_ZOOM_CONTROLS}>
                  <dx-tooltip 
                    tooltiptext=${M}
                    exportparts=${I}
                    placement=${O.TOOLTIP_TOP}
                  >
                    <dx-icon-button
                      slot="target"
                      .icon=${s`<icon-zoom-out></icon-zoom-out>`}
                      exportparts="${V}"
                      @click=${this._handleZoomOutButtonClick}
                      ?disabled=${this.zoomOutDisable}
                      data-testid="dx-preview-zoom-out-button"
                      size=${T.MEDIUM}
                      inversecolor
                      ariaLabel=${M}
                    >
                    </dx-icon-button>
                  </dx-tooltip>
                  <dx-tooltip 
                    tooltiptext=${L}
                    exportparts=${I}
                    placement=${O.TOOLTIP_TOP}
                  >
                    <dx-button
                      slot="target"
                      buttontext=${`${this.zoomPercentage}%`}
                      exportparts="${ce}"
                      @click=${this._handleZoomPercentageFitClick}
                      data-testid="dx-preview-zoom-percentage-button"
                      inversecolor
                      ariaLabel=${L}
                    >
                    </dx-button>
                  </dx-tooltip>
                  <dx-tooltip 
                    tooltiptext=${w}
                    exportparts=${I}
                    placement=${O.TOOLTIP_TOP}
                  >
                    <dx-icon-button
                      slot="target"
                      .icon=${s`<icon-zoom-in></icon-zoom-in>`}
                      exportparts="${V}"
                      @click=${this._handleZoomInButtonClick}
                      ?disabled=${this.zoomInDisable}
                      data-testid="dx-preview-zoom-in-button"
                      size=${T.MEDIUM}
                      inversecolor
                      ariaLabel=${w}
                    >
                    </dx-icon-button>
                  </dx-tooltip>
                </div>
              </div>
            `:m}
      </div>
        </div>
    `}};d([u({type:Boolean,reflect:!0})],a.prototype,"open",2);d([u({type:Array})],a.prototype,"items",2);d([u({type:String})],a.prototype,"customHeaderTitle",2);d([u()],a.prototype,"component",2);d([u({type:Boolean,reflect:!0})],a.prototype,"isPreviousButtonDisabled",2);d([u({type:Boolean,reflect:!0})],a.prototype,"isNextButtonDisabled",2);d([u({type:String})],a.prototype,"renditionLabel",2);d([u({type:String})],a.prototype,"selectButtonTitle",2);d([u()],a.prototype,"currentItemIndex",2);d([u()],a.prototype,"selectedRenditionId",2);d([u({type:Boolean})],a.prototype,"skipSourceValidation",2);d([E()],a.prototype,"zoomPercentage",2);d([E()],a.prototype,"zoomOutDisable",2);d([E()],a.prototype,"zoomInDisable",2);d([E()],a.prototype,"zoomToFitPercentage",2);d([E()],a.prototype,"currentDisplaySource",2);d([E()],a.prototype,"isLoading",2);d([E()],a.prototype,"hasError",2);d([E()],a.prototype,"errorType",2);d([E()],a.prototype,"isMediaReady",2);d([E()],a.prototype,"isLtr",2);a=d([ne("dx-preview")],a);const Pe=[{id:"original",type:"Original",source:"https://via.placeholder.com/600x400",dimension:"600x400"},{id:"thumb",type:"Thumbnail",source:"https://via.placeholder.com/150x100",dimension:"150x100"}],A=[{id:1,title:"Sample Image",type:"image",renditions:Pe,fileExtension:"jpg"},{id:2,title:"Sample Video",type:"video",fileExtension:"mp4"},{id:3,title:"Unsupported File",type:"pdf",fileExtension:"pdf"}],tt={title:"Overlay/dx-preview",tags:["autodocs"],argTypes:{open:{control:"boolean",description:"Whether the preview is open",table:{defaultValue:{summary:"false"}}},items:{control:"object",description:"Preview items",table:{defaultValue:{summary:"[]"}}},customHeaderTitle:{control:"text",description:"Custom header title",table:{defaultValue:{summary:""}}},initialItemIndex:{control:"number",description:"Initial item index",table:{defaultValue:{summary:"0"}}}},args:{open:!0,items:A,customHeaderTitle:"",initialItemIndex:0},render:e=>s`
      <dx-preview
        ?open=${e.open}
        .items=${e.items}
        customHeaderTitle="${e.customHeaderTitle}"
        .initialItemIndex=${e.initialItemIndex}
      ></dx-preview>
    `},P={},f={render:()=>s`
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 900px;">
        <div>
          <div>Image Preview</div>
          <dx-preview open .items=${[A[0]]}></dx-preview>
        </div>
        <div>
          <div>Video Preview</div>
          <dx-preview open .items=${[A[1]]}></dx-preview>
        </div>
        <div>
          <div>Unsupported File</div>
          <dx-preview open .items=${[A[2]]}></dx-preview>
        </div>
        <div>
          <div>Custom Header Title</div>
          <dx-preview open .items=${[A[0]]} customHeaderTitle="Custom Preview Header"></dx-preview>
        </div>
        <div>
          <div>Closed</div>
          <dx-preview .items=${[A[0]]}></dx-preview>
        </div>
      </div>
    `};var K,j,J;P.parameters={...P.parameters,docs:{...(K=P.parameters)==null?void 0:K.docs,source:{originalSource:"{}",...(J=(j=P.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};var Q,ee,te;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 900px;">
        <div>
          <div>Image Preview</div>
          <dx-preview open .items=\${[PREVIEW_ITEMS[0]]}></dx-preview>
        </div>
        <div>
          <div>Video Preview</div>
          <dx-preview open .items=\${[PREVIEW_ITEMS[1]]}></dx-preview>
        </div>
        <div>
          <div>Unsupported File</div>
          <dx-preview open .items=\${[PREVIEW_ITEMS[2]]}></dx-preview>
        </div>
        <div>
          <div>Custom Header Title</div>
          <dx-preview open .items=\${[PREVIEW_ITEMS[0]]} customHeaderTitle="Custom Preview Header"></dx-preview>
        </div>
        <div>
          <div>Closed</div>
          <dx-preview .items=\${[PREVIEW_ITEMS[0]]}></dx-preview>
        </div>
      </div>
    \`;
  }
}`,...(te=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const it=["Default","AllStates"];export{f as AllStates,P as Default,it as __namedExportsOrder,tt as default};
