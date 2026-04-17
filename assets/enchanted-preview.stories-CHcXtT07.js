import{c as le,a8 as x,E as de,A as W,u as c,y as ce,N as he,a9 as ue,C as p,z as E,g as h,aa as H,s as w,v as k,n as I,ab as F}from"./tags-Dua8CojJ.js";import{x as b,E as g}from"./iframe-DNG6NGwD.js";import{r as O}from"./state-fRMCsTN1.js";import"./enchanted-circular-progress-y6PrdFnV.js";import"./enchanted-icon-button-BTwTJ2mi.js";import"./enchanted-select-bwKEZOvd.js";import{I as u}from"./enchanted-item-type-avatar-D2peJAeZ.js";import"./enchanted-tooltip-CYBrcBvz.js";import{u as s,I as P,i as pe,k as me,T as f}from"./cssClassEnums-mKa0OyBd.js";import{a as Ee,T as $,I as G,P as _e,b as Y,c as Z,d as Re}from"./exportParts-cEl5bd2S.js";import{i as Ie}from"./localization-Pwna_gtP.js";import"./index-BBUPjF_O.js";import"./index-vUzmpDF-.js";import{t as C}from"./index-CuTRIAwF.js";import{c as M,I as L,B as D}from"./tags-BViZhp05.js";import{K as Oe}from"./keyboardEventKeys-BnoN8uA3.js";import"./preload-helper-C1FmrZbK.js";import"./enchanted-button-C1t71ouV.js";import"./lodash-CNEZJmwz.js";import"./enchanted-list-item-D9x5tp98.js";import"./enchanted-select-Ge91KUgI.js";import"./index-KnCr6GGA.js";import"./enchanted-avatar-BUo04uat.js";import"./index-BE6mPLxg.js";const Te=[10,25,50,75,100,175,250,325,400];var m=(e=>(e.CONTENT="Content",e.CONTENT_TEMPLATE="ContentTemplate",e.SITE_AREA_TEMPLATE="SiteAreaTemplate",e.LIBRARY_AUTHORING_TOOLS_COMPONENT="LibraryAuthoringToolsComponent",e.LIBRARY_DATE_COMPONENT="LibraryDateComponent",e.LIBRARY_FILE_COMPONENT="LibraryFileComponent",e.LIBRARY_HTML_COMPONENT="LibraryHTMLComponent",e.LIBRARY_IMAGE_COMPONENT="LibraryImageComponent",e.LIBRARY_JSP_COMPONENT="LibraryJSPComponent",e.LIBRARY_LINK_COMPONENT="LibraryLinkComponent",e.LIBRARY_LIST_PRESENTATION_COMPONENT="LibraryListPresentationComponent",e.LIBRARY_MENU_COMPONENT="LibraryMenuComponent",e.LIBRARY_NAVIGATOR_COMPONENT="LibraryNavigatorComponent",e.LIBRARY_NUMERIC_COMPONENT="LibraryNumericComponent",e.OPTION_SELECTION_COMPONENT="OptionSelectionComponent",e.LIBRARY_PAGE_NAVIGATION_COMPONENT="LibraryPageNavigationComponent",e.LIBRARY_PERSONALIZATION_COMPONENT="LibraryPersonalizationComponent",e.LIBRARY_REFERENCE_COMPONENT="LibraryReferenceComponent",e.LIBRARY_RICH_TEXT_COMPONENT="LibraryRichTextComponent",e.LIBRARY_SEARCH_COMPONENT="LibrarySearchComponent",e.LIBRARY_SHORT_TEXT_COMPONENT="LibraryShortTextComponent",e.LIBRARY_STYLESHEET_COMPONENT="LibraryStyleSheetComponent",e.LIBRARY_TAXONOMY_COMPONENT="LibraryTaxonomyComponent",e.LIBRARY_TEXT_COMPONENT="LibraryTextComponent",e.LIBRARY_USER_NAME_COMPONENT="LibraryUserNameComponent",e.LIBRARY_USER_SELECTION_COMPONENT="LibraryUserSelectionComponent",e.CATEGORY="Category",e.CONTENT_LINK="ContentLink",e.FOLDER="Folder",e.LIBRARY="Library",e.PORTAL_PAGE="PortalPage",e.PRESENTATION_TEMPLATE="PresentationTemplate",e.PROJECT="Project",e.PROJECT_TEMPLATE="ProjectTemplate",e.SEGMENT="Segment",e.SITE_AREA="SiteArea",e.TAXONOMY="Taxonomy",e.VERSION_ACTION="VersionAction",e.CUSTOM_WORKFLOW_ACTION="CustomWorkflowAction",e.EMAIL_ACTION="EmailAction",e.EXPIRE_ACTION="ExpireAction",e.PUBLISH_ACTION="PublishAction",e.SCHEDULED_MOVE_ACTION="ScheduledMoveAction",e.WORKFLOW="Workflow",e.WORKFLOW_STAGE="WorkflowStage",e.NOTEBOOK_REFERENCE="notebookReference",e.MAIL_ALL="mailAll",e.USER_PROFILE_ALT="userProfileAlt",e.LICENSE_GLOBAL="licenseGlobal",e.USER_PROFILE="userProfile",e.DATA_ANALYTICS="dataAnalytics",e.REMINDER="reminder",e.LICENSE_DRAFT="licenseDraft",e.EVENT_WARNING="eventWarning",e.LAYERS_EXTERNAL="layersExternal",e.SUBFLOW="subflow",e.DAM_COLLECTION="collection",e.DAM_IMAGE="image",e.DAM_VIDEO="video",e.DAM_DOCUMENT="application/vnd.openxmlformats-officedocument.wordprocessingml.document",e.DAM_XLS="application/vnd.ms-excel",e.DAM_XLSX="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",e.DAM_PPT="application/vnd.ms-powerpoint",e.DAM_PPTX="application/vnd.openxmlformats-officedocument.presentationml.presentation",e.DAM_PDF="application/pdf",e.DAM_GIF="image/gif",e.DAM_JPEG="image/jpeg",e.DAM_PNG="image/png",e.DAM_TIF="image/tiff",e.DAM_WEBP="image/webp",e.DAM_MP4="video/mp4",e.DAM_OGG="video/ogg",e.DAM_WEBM="video/webm",e))(m||{});const ve={image:u.IMAGE,"image/jpeg":u.IMAGE,"image/png":u.IMAGE,"image/webp":u.IMAGE,video:u.VIDEO,"video/mp4":u.VIDEO,"video/ogg":u.VIDEO,"video/webm":u.VIDEO,"application/vnd.openxmlformats-officedocument.wordprocessingml.document":u.DOC,"application/pdf":u.PDF,"application/vnd.ms-excel":u.XLS,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":u.XLSX,"application/vnd.ms-powerpoint":u.PPT,"application/vnd.openxmlformats-officedocument.presentationml.presentation":u.PPTX,"image/tiff":u.TIF,"image/gif":u.GIF};var R=(e=>(e.SUCCESS="SUCCESS",e.ERROR_NOT_FOUND="ERROR_NOT_FOUND",e.ERROR_FORBIDDEN="ERROR_FORBIDDEN",e.ERROR_BAD_REQUEST="ERROR_BAD_REQUEST",e.ERROR_SERVER="ERROR_SERVER",e.ERROR_FORMAT_UNSUPPORTED="ERROR_FORMAT_UNSUPPORTED",e))(R||{});const ge=async e=>{if(!e)return R.ERROR_BAD_REQUEST;const t=new AbortController,i=t.signal;try{const n=await fetch(e,{method:"GET",credentials:"include",cache:"no-cache",signal:i});return n.ok?(t.abort(),R.SUCCESS):n.status===404?R.ERROR_NOT_FOUND:n.status===403?R.ERROR_FORBIDDEN:n.status>=500?R.ERROR_SERVER:R.ERROR_BAD_REQUEST}catch(n){return n instanceof Error&&n.name==="AbortError"?R.SUCCESS:R.ERROR_SERVER}};var q={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M8 12H18V14H8z"}},{elem:"path",attrs:{d:"M21.4479,20A10.856,10.856,0,0,0,24,13,11,11,0,1,0,13,24a10.856,10.856,0,0,0,7-2.5521L27.5859,29,29,27.5859ZM13,22a9,9,0,1,1,9-9A9.01,9.01,0,0,1,13,22Z"}}],name:"zoom--out",size:32};const X=`${L}icon-zoom-out`;let Ae=class extends D{render(){return b`${C({...q,attrs:{...q.attrs,preserveAspectRatio:"xMidYMid"}})}`}};M&&!customElements.get(X)&&customElements.define(X,Ae);var K={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M18 12L14 12 14 8 12 8 12 12 8 12 8 14 12 14 12 18 14 18 14 14 18 14 18 12z"}},{elem:"path",attrs:{d:"M21.4479,20A10.856,10.856,0,0,0,24,13,11,11,0,1,0,13,24a10.856,10.856,0,0,0,7-2.5521L27.5859,29,29,27.5859ZM13,22a9,9,0,1,1,9-9A9.01,9.01,0,0,1,13,22Z"}}],name:"zoom--in",size:32};const j=`${L}icon-zoom-in`;let Ne=class extends D{render(){return b`${C({...K,attrs:{...K.attrs,preserveAspectRatio:"xMidYMid"}})}`}};M&&!customElements.get(j)&&customElements.define(j,Ne);var J={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M26 24v4H6V24H4v4H4a2 2 0 002 2H26a2 2 0 002-2h0V24zM26 14L24.59 12.59 17 20.17 17 2 15 2 15 20.17 7.41 12.59 6 14 16 24 26 14z"}}],name:"download",size:32};const Q=`${L}icon-download`;let fe=class extends D{render(){return b`${C({...J,attrs:{...J.attrs,preserveAspectRatio:"xMidYMid"}})}`}};M&&!customElements.get(Q)&&customElements.define(Q,fe);var ee={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M14 26L15.41 24.59 7.83 17 28 17 28 15 7.83 15 15.41 7.41 14 6 4 16 14 26z"}}],name:"arrow--left",size:32};const te=`${L}icon-arrow-left`;let $e=class extends D{render(){return b`${C({...ee,attrs:{...ee.attrs,preserveAspectRatio:"xMidYMid"}})}`}};M&&!customElements.get(te)&&customElements.define(te,$e);var ie={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M18 6L16.57 7.393 24.15 15 4 15 4 17 24.15 17 16.57 24.573 18 26 28 16 18 6z"}}],name:"arrow--right",size:32};const ne=`${L}icon-arrow-right`;class Pe extends D{render(){return b`${C({...ie,attrs:{...ie.attrs,preserveAspectRatio:"xMidYMid"}})}`}}M&&!customElements.get(ne)&&customElements.define(ne,Pe);var be=Object.defineProperty,d=(e,t,i,n)=>{for(var o=void 0,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=a(t,i,o)||o);return o&&be(t,i,o),o};const Ce=`${ce}:not([disabled]), ${he}:not([disabled]), ${ue}:not([disabled])`,Me=le("enchanted-web-components:components:atomic-component:enchanted-preview.ts");class l extends de{constructor(){super(...arguments),this._ZOOM_OPTIONS=Te,this._ZOOM_BUTTON_MARGIN=12,this._ZOOM_DEFAULT=100,this.open=!1,this.items=[],this.customHeaderTitle=null,this.component="",this.renditionLabel="",this.selectButtonTitle="",this.currentItemIndex=0,this.selectedRenditionId=null,this.skipSourceValidation=!1,this.zoomPercentage=this._ZOOM_DEFAULT,this.zoomOutDisable=!1,this.zoomInDisable=!1,this.zoomToFitPercentage=this._ZOOM_DEFAULT,this.currentDisplaySource=null,this.isLoading=!0,this.hasError=!1,this.errorType=null,this.isMediaReady=!1,this.isZoomedIn=!1,this._activeRequestToken=0,this.isLtr=Ie(),this._handleResize=()=>{var o,r;const t=this.items[this.currentItemIndex];if(!this.open||!t||t.type.split("/")[0]!==m.DAM_VIDEO)return;const i=(o=this.renderRoot)==null?void 0:o.querySelector('video[part="preview-item-video"]'),n=(r=this.renderRoot)==null?void 0:r.querySelector('div[part="preview-item-container"]');if(i&&n){if(!this.currentDisplaySource){i.removeAttribute("style");return}const a=i.videoWidth??0,A=(i.videoHeight??0)/a,v=n.offsetWidth,T=v*A;T<n.clientHeight?(i.style.width=`${v}px`,i.style.height=`${T}px`):(i.style.setProperty("height",`${n.clientHeight}px`,"important"),i.style.width="100%")}},this._handleKeydown=t=>{this.open&&t.key===Oe.TAB&&this._handleTrapFocus(t)}}willUpdate(t){if(this.open&&(t.has("currentItemIndex")||t.has("items")||t.has("selectedRenditionId"))&&this._updateCurrentItemAndRendition(),t.has("zoomPercentage")||t.has("items")||t.has("currentItemIndex")){const i=this.items[this.currentItemIndex??0];(i==null?void 0:i.type.split("/")[0])===m.DAM_IMAGE?requestAnimationFrame(()=>{var a,_;const o=(a=this.renderRoot)==null?void 0:a.querySelector("#preview-item-image"),r=(_=this.renderRoot)==null?void 0:_.querySelector("#preview-item-content-container");if(o&&r&&o.naturalWidth&&o.naturalHeight){const A=o.naturalWidth*this.zoomPercentage/100,v=o.naturalHeight*this.zoomPercentage/100,T=r.clientWidth,N=r.clientHeight;this.isZoomedIn=A>T||v>N}else this.isZoomedIn=!1}):this.isZoomedIn=!1}this.isZoomedIn?this.classList.add("zoomed"):this.classList.remove("zoomed"),t.has("zoomPercentage")&&(this.style.setProperty("--zoom-scale-factor",`${this.zoomPercentage/100}`),this._updateImageDimensions()),t.has("isMediaReady")&&this.style.setProperty("--media-visibility",this.isMediaReady?"visible":"hidden")}_updateImageDimensions(){requestAnimationFrame(()=>{var n,o;const t=(n=this.renderRoot)==null?void 0:n.querySelector("#preview-item-image-wrapper"),i=(o=this.renderRoot)==null?void 0:o.querySelector("#preview-item-image");if(t&&i&&i.naturalWidth&&i.naturalHeight){const r=this.zoomPercentage/100,a=i.naturalWidth*r,_=i.naturalHeight*r;i.style.width=`${a}px`,i.style.height=`${_}px`,t.style.width=`${a}px`,t.style.height=`${_}px`,i.style.transform="",i.style.transformOrigin=""}})}updated(t){var i;super.updated(t),t.has("open")&&this.open&&requestAnimationFrame(()=>{var o;const n=(o=this.renderRoot)==null?void 0:o.querySelector('[role="dialog"]');n&&n.focus()}),this.open&&((i=this.items[this.currentItemIndex])==null?void 0:i.type.split("/")[0])===m.DAM_VIDEO&&(t.has("open")||t.has("currentItemIndex")||t.has("items"))&&requestAnimationFrame(()=>{this._handleResize()})}async _updateCurrentItemAndRendition(){this._activeRequestToken++;const t=this._activeRequestToken;if(this.isLoading=!0,this.isMediaReady=!1,this.hasError=!1,this.errorType=null,this.currentDisplaySource=null,this.items.length===0||this.currentItemIndex<0||this.currentItemIndex>=this.items.length){t===this._activeRequestToken&&(this.isLoading=!1);return}const i=this.items[this.currentItemIndex],n=i.type.split("/")[0];if((n===m.DAM_IMAGE||n===m.DAM_VIDEO)&&i.renditions&&i.renditions.length>0){let o=i.renditions.find(r=>r.id===this.selectedRenditionId);if(o||(o=i.renditions[0]),this.selectedRenditionId=o.id,this.skipSourceValidation){t===this._activeRequestToken&&(this.currentDisplaySource=o.source,this.isLoading=!1);return}try{const r=await ge(o.source);if(t!==this._activeRequestToken)return;r===R.SUCCESS?this.currentDisplaySource=o.source:(this.hasError=!0,this.errorType=r,this.dispatchEvent(new CustomEvent("preview-error",{detail:{item:i,errorType:this.errorType},bubbles:!0,composed:!0})))}finally{t===this._activeRequestToken&&(this.isLoading=!1)}}else t===this._activeRequestToken&&(this.isLoading=!1,this.hasError=!0)}_resetState(){this.open=!1,this.isLoading=!0,this.hasError=!1,this.isMediaReady=!1,this.errorType=null,this.selectedRenditionId=null,this.currentDisplaySource=null,this.zoomPercentage=this._ZOOM_DEFAULT,this._activeRequestToken=0}_handleBack(){this._resetState(),this.dispatchEvent(new CustomEvent("preview-back",{detail:{open:this.open},bubbles:!0,composed:!0}))}_handlePreviousButtonClick(){const t=new CustomEvent("preview-previous",{bubbles:!0,composed:!0,detail:{previousIndex:this.currentItemIndex-1},cancelable:!0});this.dispatchEvent(t),t.defaultPrevented||(this.currentItemIndex-=1)}_handleNextButtonClick(){const t=new CustomEvent("preview-next",{bubbles:!0,composed:!0,detail:{nextIndex:this.currentItemIndex+1},cancelable:!0});this.dispatchEvent(t),t.defaultPrevented||(this.currentItemIndex+=1)}_handleZoomOutButtonClick(){const i=[...this._ZOOM_OPTIONS].reverse().find(n=>this.zoomPercentage>n);i===10&&(this.zoomOutDisable=!0),i&&(this.zoomPercentage=i),this.zoomInDisable=!1}_handleZoomInButtonClick(){const t=this._ZOOM_OPTIONS.find(i=>i>this.zoomPercentage);t===400&&(this.zoomInDisable=!0),t&&(this.zoomPercentage=t),this.zoomOutDisable=!1}_calculateImagePercentage(){var T,N;const t=(T=this.renderRoot)==null?void 0:T.querySelector("#preview-item-image"),i=(N=this.renderRoot)==null?void 0:N.querySelector("#preview-item-content-container");if(!t||!i||!t.naturalWidth||!t.naturalHeight)return this._ZOOM_DEFAULT;const n=i.clientWidth,o=i.clientHeight-this._ZOOM_BUTTON_MARGIN*2,r=t.naturalWidth,a=t.naturalHeight,_=n/r*100,A=o/a*100,v=Math.min(_,A,100);return this.zoomToFitPercentage=Math.round(v),this.zoomToFitPercentage}_handleZoomPercentageFitClick(){if(this.zoomPercentage!==this._ZOOM_DEFAULT)this.zoomPercentage=this._ZOOM_DEFAULT;else{const t=this._calculateImagePercentage();this.zoomPercentage=t}this.zoomInDisable=!1,this.zoomOutDisable=!1}_handlePreviewError(){this.isLoading=!1,this.hasError=!0,this.isMediaReady=!1,this.errorType=R.ERROR_FORMAT_UNSUPPORTED;const t=this.items[this.currentItemIndex];this.dispatchEvent(new CustomEvent("preview-error",{detail:{item:t,errorType:this.errorType},bubbles:!0,composed:!0}))}getUnsupportedFileComponent(t,i=""){return c`
      <div part=${s.PREVIEW_ITEM_CONTENT}>
        <div part=${s.PREVIEW_ITEM_UNSUPPORTED_CONTAINER}>
          <${W}
            itemtype=${ve[t]??t}
            exportparts=${Ee}
          >
          </${W}>
          <div part=${s.PREVIEW_ITEM_UNSUPPORTED_MESSAGE_CONTAINER}>
            <p part=${s.PREVIEW_ITEM_UNSUPPORTED_MESSAGE_TITLE}>
              ${this.getMessage("preview.item.unsupported.title")}
            </p>
            <span part=${s.PREVIEW_ITEM_UNSUPPORTED_MESSAGE_DESCRIPTION}>
              ${this.getMessage("preview.item.unsupported.description",[{"{itemType}":(i==null?void 0:i.toUpperCase())||(t==null?void 0:t.toUpperCase())}])}
            </span>
          </div>
        </div>
      </div>
    `}_renderPreviewItem(){if(this.component)return c`
        <div part=${s.PREVIEW_ITEM_CONTENT}>
          ${this.component}
        </div>
      `;if(!this.items||this.items.length===0)return g;if(this.hasError){const n=this.items[this.currentItemIndex];return this.getUnsupportedFileComponent(n==null?void 0:n.type,n==null?void 0:n.fileExtension)}if(this.isLoading)return g;const t=this.items[this.currentItemIndex];if(!this.currentDisplaySource)return this.getUnsupportedFileComponent(t==null?void 0:t.type,t==null?void 0:t.fileExtension);switch(t.type.split("/")[0]){case m.DAM_IMAGE:return c`
          <div id="preview-item-image-wrapper" part=${s.PREVIEW_ITEM_IMAGE_WRAPPER}>
            <img
              id="preview-item-image"
              part=${s.PREVIEW_ITEM_IMAGE}
              src=${this.currentDisplaySource}
              alt=${t.title}
              @load=${this._handleMediaReady}
              @error=${this._handlePreviewError}
            />
          </div>
        `;case m.DAM_VIDEO:return c`
          <div part=${s.PREVIEW_ITEM_VIDEO_CONTAINER}>
            <video 
              controls 
              part=${s.PREVIEW_ITEM_VIDEO}
              @loadeddata=${this._handleMediaReady}
              @error=${this._handlePreviewError}
              .src=${this.currentDisplaySource}
            >
            </video>
          </div>
        `;default:return this.getUnsupportedFileComponent(t.type,t==null?void 0:t.fileExtension)}}_getRenditionOptionValue(t){return t.type?`${t.type} (${t.dimension??this.getMessage("preview.rendition.metadata.unknown")})`:""}_getDefaultSelectedRenditionValue(){if(this.currentItemIndex===null||this.currentItemIndex<0||this.currentItemIndex>=this.items.length)return"";const t=this.items[this.currentItemIndex];if(t&&t.type.split("/")[0]===m.DAM_IMAGE&&t.renditions&&t.renditions.length>0){const i=t.renditions.find(n=>n.id===this.selectedRenditionId);if(i)return this._getRenditionOptionValue(i);if(t.renditions.length>0)return this._getRenditionOptionValue(t.renditions[0])}return""}_handleRenditionSelectChange(t){var o;const i=(o=t.detail)==null?void 0:o.value;if(i===void 0||this.currentItemIndex===null)return;const n=this.items[this.currentItemIndex];if(n&&n.type.split("/")[0]===m.DAM_IMAGE&&n.renditions){const r=n.renditions.find(a=>a.id===i);if(r){const a=new CustomEvent("preview-rendition-change",{bubbles:!0,composed:!0,detail:{id:this.items[this.currentItemIndex].id,title:this.items[this.currentItemIndex].title,selectedRenditionId:r.id,source:this.currentDisplaySource},cancelable:!0});this.dispatchEvent(a),a.defaultPrevented||(this.selectedRenditionId=r.id)}}}_handleMediaReady(){this.isLoading=!1,this.isMediaReady=!0,this.hasError=!1;const t=this.items[this.currentItemIndex];if(!t)return;const i=t.type.split("/")[0];i===m.DAM_IMAGE?requestAnimationFrame(()=>{this.zoomPercentage=this._calculateImagePercentage(),this._updateImageDimensions()}):i===m.DAM_VIDEO&&requestAnimationFrame(()=>this._handleResize())}_handleDownloadButtonClick(){this.dispatchEvent(new CustomEvent("preview-download",{bubbles:!0,composed:!0,detail:{id:this.items[this.currentItemIndex].id,title:this.items[this.currentItemIndex].title,selectedRenditionId:this.selectedRenditionId,source:this.currentDisplaySource}}))}_handleSelectButtonClick(){this.dispatchEvent(new CustomEvent("preview-select",{bubbles:!0,composed:!0,detail:{id:this.items[this.currentItemIndex].id,title:this.items[this.currentItemIndex].title,selectedRenditionId:this.selectedRenditionId,source:this.currentDisplaySource}}))}_handleTrapFocus(t){var a;const i=(a=this.renderRoot)==null?void 0:a.querySelectorAll(Ce),n=i==null?void 0:i[0],o=i==null?void 0:i[i.length-1],r=this.renderRoot&&this.renderRoot.activeElement;t.shiftKey?r===n&&(o==null||o._focusButton(),t.preventDefault()):r===o&&(n==null||n._focusButton(),t.preventDefault())}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._handleResize),window.addEventListener("keydown",this._handleKeydown),this.renditionLabel==""&&(this.renditionLabel=this.getMessage("preview.rendition.label")),this.selectButtonTitle==""&&(this.selectButtonTitle=this.getMessage("select"))}disconnectedCallback(){window.removeEventListener("resize",this._handleResize),window.removeEventListener("keydown",this._handleKeydown),super.disconnectedCallback()}render(){var U,V,z;const t=this.isLoading||this.currentDisplaySource&&!this.isMediaReady&&!this.hasError||(this.isPreviousButtonDisabled!==void 0?this.isPreviousButtonDisabled:this.currentItemIndex<=0),i=this.isLoading||this.currentDisplaySource&&!this.isMediaReady&&!this.hasError||(this.isNextButtonDisabled!==void 0?this.isNextButtonDisabled:this.currentItemIndex===this.items.length-1),n=this.items[this.currentItemIndex??0],o=(n==null?void 0:n.type.split("/")[0])===m.DAM_IMAGE,r=n==null?void 0:n.renditions;if(!this.open)return g;const a=this.getMessage("preview.tooltip.download.button"),_=this.getMessage("preview.tooltip.next.asset.button"),A=this.getMessage("preview.tooltip.previous.asset.button"),v=this.getMessage("preview.tooltip.zoom.out.button"),T=this.getMessage("preview.tooltip.zoom.in.button"),N=this.getMessage(this.zoomPercentage===100?"preview.tooltip.zoom.to.fit":"preview.tooltip.view.actual.size"),B=this.customHeaderTitle??((U=this.items[this.currentItemIndex])==null?void 0:U.title)??this.getMessage("preview.header.title");return c`
    <div part=${s.PREVIEW_BACKDROP}
      ?open=${this.open} 
      tabindex="-1"
      role="presentation"
    >
      <div part=${s.PREVIEW_CONTAINER} role="dialog" aria-modal="true" tabindex="-1" aria-label=${B} aria-modal="true">
        <div part=${s.PREVIEW_HEADER} data-testid="enchanted-preview-header">
          <div part=${s.PREVIEW_HEADER_START_ACTIONS}>
            <${p} tooltiptext=${this.getMessage("preview.tooltip.back.button")} exportparts=${$}>
              <${E}
                slot="target"
                .icon=${this.isLtr?c`<${h("icon-arrow-left")}></${h("icon-arrow-left")}>`:c`<${h("icon-arrow-right")}></${h("icon-arrow-right")}>`}
                exportparts="${G}"
                @click=${this._handleBack}
                data-testid="enchanted-preview-back-button"
                size=${P.MEDIUM}
                ariaLabel=${this.getMessage("preview.tooltip.back.button")}
                aria-hidden="true"
              >
              </${E}>
            </${p}>
            <span part=${s.PREVIEW_HEADER_TITLE}>
              ${B}
            </span>
          </div>
          ${o&&r&&r.length>0?c`<div part=${s.PREVIEW_HEADER_MIDDLE_ACTIONS}>
              <span part=${s.PREVIEW_HEADER_RENDITION_LABEL} id="enchanted-preview-rendition-select-label" aria-hidden="true">
                ${this.renditionLabel}
              </span>
              <${H}
                aria-labelledby="enchanted-preview-rendition-select-label"
                hiddenLabel
                .options=${((z=(V=this.items[this.currentItemIndex??0])==null?void 0:V.renditions)==null?void 0:z.map(y=>({id:y.id,name:this._getRenditionOptionValue(y),value:y.type??""})))??[]}
                selectedValue=${this._getDefaultSelectedRenditionValue()}
                exportparts=${_e}
                @change=${this._handleRenditionSelectChange}
                data-testid="enchanted-preview-rendition-select"
                part=${s.PREVIEW_HEADER_RENDITION_INPUT_SELECT}
                aria-hidden="true"
              >
              </${H}>
            </div>`:g}
          <div part=${s.PREVIEW_HEADER_END_ACTIONS}>
            ${this.items.length>0?c`
                <${p} tooltiptext=${a} exportparts=${$}>
                  <${E}
                    slot="target"
                    .icon=${c`<${h("icon-download")} color="currentColor"></${h("icon-download")}>`}
                    exportparts="${G}"
                    @click=${this._handleDownloadButtonClick}
                    data-testid="enchanted-preview-download-button"
                    size=${P.MEDIUM}
                    ariaLabel=${a}
                    aria-hidden="true"
                  >
                  </${E}>
                </${p}>
                <${w}
                  part=${s.PREVIEW_HEADER_SELECT_BUTTON}
                  buttontext=${this.selectButtonTitle}
                  exportparts="${Object.values(me).join(",")}"
                  variant=${pe.BUTTON_CONTAINED_VAR}
                  @click=${this._handleSelectButtonClick}
                  data-testid="enchanted-preview-select-button"
                  aria-hidden="true"
                  >
                </${w}>
             `:g}
          </div>
        </div>
        <hr part=${s.PREVIEW_HEADER_DIVIDER} />
        <div part=${s.PREVIEW_ITEM_CONTAINER}>
          ${this.items.length>0?c`
            <div part=${s.PREVIEW_ITEM_PREVIOUS_BUTTON_CONTAINER}>
              <${p} 
                tooltiptext=${A}
                exportparts=${$}
                placement=${this.isLtr?f.TOOLTIP_BOTTOM_START:f.TOOLTIP_BOTTOM_END}
              >
                <${E}
                  slot="target"
                  part=${s.PREVIEW_ITEM_PREVIOUS_BUTTON}
                  .icon=${this.isLtr?c`<${h("icon-chevron-left")}></${h("icon-chevron-left")}>`:c`<${h("icon-chevron-right")}></${h("icon-chevron-right")}>`}
                  exportparts="${Y}"
                  @click=${this._handlePreviousButtonClick}
                  ?disabled=${t}
                  data-testid="enchanted-preview-previous-button"
                  size=${P.MEDIUM}
                  inversecolor
                  ariaLabel=${A}
                >
                </${E}>
              </${p}>
            </div>
          `:g}
          <div id="preview-item-content-container" part=${s.PREVIEW_ITEM_CONTENT_CONTAINER}>
            ${this._renderPreviewItem()}
            ${this.isLoading||this.currentDisplaySource&&!this.isMediaReady&&!this.hasError?c`
                <div part=${s.PREVIEW_ITEM_SPINNER_CONTAINER}>
                  <${k}></${k}>
                </div>
                `:g}
          </div>
          ${this.items.length>0?c`
            <div part=${s.PREVIEW_ITEM_NEXT_BUTTON_CONTAINER}>
              <${p} 
                tooltiptext=${_}
                exportparts=${$}
                placement=${this.isLtr?f.TOOLTIP_BOTTOM_END:f.TOOLTIP_BOTTOM_START}
              >
                <${E}
                  slot="target"
                  part=${s.PREVIEW_ITEM_NEXT_BUTTON}
                  .icon=${this.isLtr?c`<${h("icon-chevron-right")}></${h("icon-chevron-right")}>`:c`<${h("icon-chevron-left")}></${h("icon-chevron-left")}>`}
                  exportparts="${Y}"
                  @click=${this._handleNextButtonClick}
                  ?disabled=${i}
                  data-testid="enchanted-preview-next-button"
                  size=${P.MEDIUM}
                  inversecolor
                  ariaLabel=${_}
                >
                </${E}>
              </${p}>
            </div>
          `:g}
        </div>
        ${!this.isLoading&&this.isMediaReady&&!this.hasError&&o&&!this.component?c`
              <div part=${s.PREVIEW_ZOOM_CONTAINER}>
                <div part=${s.PREVIEW_ZOOM_CONTROLS}>
                  <${p} 
                    tooltiptext=${v}
                    exportparts=${$}
                    placement=${f.TOOLTIP_TOP}
                  >
                    <${E}
                      slot="target"
                      .icon=${c`<${h("icon-zoom-out")}></${h("icon-zoom-out")}>`}
                      exportparts="${Z}"
                      @click=${this._handleZoomOutButtonClick}
                      ?disabled=${this.zoomOutDisable}
                      data-testid="enchanted-preview-zoom-out-button"
                      size=${P.MEDIUM}
                      inversecolor
                      ariaLabel=${v}
                    >
                    </${E}>
                  </${p}>
                  <${p} 
                    tooltiptext=${N}
                    exportparts=${$}
                    placement=${f.TOOLTIP_TOP}
                  >
                    <${w}
                      slot="target"
                      buttontext=${`${this.zoomPercentage}%`}
                      exportparts="${Re}"
                      @click=${this._handleZoomPercentageFitClick}
                      data-testid="enchanted-preview-zoom-percentage-button"
                      inversecolor
                      ariaLabel=${N}
                    >
                    </${w}>
                  </${p}>
                  <${p} 
                    tooltiptext=${T}
                    exportparts=${$}
                    placement=${f.TOOLTIP_TOP}
                  >
                    <${E}
                      slot="target"
                      .icon=${c`<${h("icon-zoom-in")}></${h("icon-zoom-in")}>`}
                      exportparts="${Z}"
                      @click=${this._handleZoomInButtonClick}
                      ?disabled=${this.zoomInDisable}
                      data-testid="enchanted-preview-zoom-in-button"
                      size=${P.MEDIUM}
                      inversecolor
                      ariaLabel=${T}
                    >
                    </${E}>
                  </${p}>
                </div>
              </div>
            `:g}
      </div>
        </div>
    `}}d([I({type:Boolean,reflect:!0})],l.prototype,"open");d([I({type:Array})],l.prototype,"items");d([I({type:String})],l.prototype,"customHeaderTitle");d([I()],l.prototype,"component");d([I({type:Boolean,reflect:!0})],l.prototype,"isPreviousButtonDisabled");d([I({type:Boolean,reflect:!0})],l.prototype,"isNextButtonDisabled");d([I({type:String})],l.prototype,"renditionLabel");d([I({type:String})],l.prototype,"selectButtonTitle");d([I()],l.prototype,"currentItemIndex");d([I()],l.prototype,"selectedRenditionId");d([I({type:Boolean})],l.prototype,"skipSourceValidation");d([O()],l.prototype,"zoomPercentage");d([O()],l.prototype,"zoomOutDisable");d([O()],l.prototype,"zoomInDisable");d([O()],l.prototype,"zoomToFitPercentage");d([O()],l.prototype,"currentDisplaySource");d([O()],l.prototype,"isLoading");d([O()],l.prototype,"hasError");d([O()],l.prototype,"errorType");d([O()],l.prototype,"isMediaReady");d([O()],l.prototype,"isZoomedIn");d([O()],l.prototype,"isLtr");customElements.get(x)?Me("Component (%s) is currently registered and not possible to registrate again.",x):customElements.define(x,l);const Le=[{id:"original",type:"Original",source:new URL(""+new URL("test-image-C2ev5F1I.jpg",import.meta.url).href,import.meta.url).href,dimension:"600x400"},{id:"thumb",type:"Thumbnail",source:new URL(""+new URL("test-image-C2ev5F1I.jpg",import.meta.url).href,import.meta.url).href,dimension:"150x100"},{id:"desktop",type:"Desktop",source:new URL(""+new URL("test-image-large-CwU_hnoS.jpg",import.meta.url).href,import.meta.url).href,dimension:"5760x3840"}],oe=[{id:1,title:"Sample Image",type:"image",renditions:Le,fileExtension:"jpg"},{id:2,title:"Sample Video",type:"video",fileExtension:"mp4"},{id:3,title:"Unsupported File",type:"pdf",fileExtension:"pdf"}],st={title:"Overlay/enchanted-preview",component:"enchanted-preview",tags:["autodocs"],parameters:{docs:{description:{component:"The Preview component displays media items in a full-screen overlay with navigation controls. Supports images, videos, and documents with multiple renditions. Features include zoom controls, previous/next navigation, rendition selection, and custom header titles. Use this component for viewing and selecting media assets from collections or galleries."}}},argTypes:{open:{control:{type:"boolean"},description:"Controls preview visibility. When true, displays the preview overlay in full-screen mode. Close with the close button or ESC key.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},items:{control:{type:"object"},description:"Array of preview items to display. Each item should include id, title, type, optional renditions, and fileExtension. Supports images, videos, PDFs, etc.",table:{category:"Content",type:{summary:"PreviewItem[]"},defaultValue:{summary:"[]"}}},customHeaderTitle:{control:{type:"text"},description:"Custom text displayed in the preview header. Overrides the default item title. Use for contextual information or custom naming.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},component:{control:{type:"object"},description:"Custom component or template to render in the preview area. Allows full customization of the preview content beyond standard media types.",table:{category:"Content",type:{summary:"TemplateResult | string"},defaultValue:{summary:""}}},isPreviousButtonDisabled:{control:{type:"boolean"},description:"Disables the previous navigation button. Automatically set to true when viewing the first item. Can be manually controlled.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},isNextButtonDisabled:{control:{type:"boolean"},description:"Disables the next navigation button. Automatically set to true when viewing the last item. Can be manually controlled.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},renditionLabel:{control:{type:"text"},description:"Label text for the rendition selector dropdown. Appears next to the rendition selection control when multiple renditions are available.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},selectButtonTitle:{control:{type:"text"},description:"Title text for the select button in the toolbar. Used when preview is in selection mode to choose items.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},currentItemIndex:{control:{type:"number",min:0,max:oe.length},description:"Zero-based index of the currently displayed item. Updates as users navigate through items. Used to track position in the items array.",table:{category:"State",type:{summary:"number"},defaultValue:{summary:"0"}}},selectedRenditionId:{control:{type:"text"},description:"ID of the currently selected rendition. Used to control which rendition is displayed when an item has multiple renditions available.",table:{category:"State",type:{summary:"string"},defaultValue:{summary:"null"}}},skipSourceValidation:{control:{type:"boolean"},description:"Skips validation of source URLs when true. Useful for development or when using custom source handlers that may not be standard URLs.",table:{category:"Behavior",type:{summary:"boolean"},defaultValue:{summary:"false"}}}},args:{open:!0,items:oe,customHeaderTitle:"",component:"",isPreviousButtonDisabled:!1,isNextButtonDisabled:!1,renditionLabel:"Rendition",selectButtonTitle:"",currentItemIndex:0,selectedRenditionId:null,skipSourceValidation:!1}},S={name:"Default",render:e=>c`
      <${F}
        ?open=${e.open}
        .items=${e.items}
        customHeaderTitle="${e.customHeaderTitle}"
        .component=${e.component}
        ?isPreviousButtonDisabled=${e.isPreviousButtonDisabled}
        ?isNextButtonDisabled=${e.isNextButtonDisabled}
        renditionLabel="${e.renditionLabel}"
        selectButtonTitle="${e.selectButtonTitle}"
        .currentItemIndex=${e.currentItemIndex}
        selectedRenditionId="${e.selectedRenditionId}"
        ?skipSourceValidation=${e.skipSourceValidation}
      ></${F}>
    `};var re,se,ae;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Default',
  render: args => {
    return html\`
      <\${ENCHANTED_PREVIEW_TAG}
        ?open=\${args.open}
        .items=\${args.items}
        customHeaderTitle="\${args.customHeaderTitle}"
        .component=\${args.component}
        ?isPreviousButtonDisabled=\${args.isPreviousButtonDisabled}
        ?isNextButtonDisabled=\${args.isNextButtonDisabled}
        renditionLabel="\${args.renditionLabel}"
        selectButtonTitle="\${args.selectButtonTitle}"
        .currentItemIndex=\${args.currentItemIndex}
        selectedRenditionId="\${args.selectedRenditionId}"
        ?skipSourceValidation=\${args.skipSourceValidation}
      ></\${ENCHANTED_PREVIEW_TAG}>
    \`;
  }
}`,...(ae=(se=S.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};const at=["EnchantedPreviewStory"];export{S as EnchantedPreviewStory,at as __namedExportsOrder,st as default};
