import{x as s,E as _}from"./iframe-Dsd1MpWQ.js";import{n as m,t as K,D as j}from"./dx-ac-base-element-C9dhstFR.js";import{r as E}from"./state-DQlunuPl.js";import"./dx-circular-progress-Cwi2aphc.js";import"./dx-icon-button-B0xLViaD.js";import"./dx-input-select-32Rx-ZfG.js";import{I as c}from"./dx-item-type-avatar-Bsy_fZte.js";import"./dx-tooltip-O0sFiIEl.js";import{r,I as T,g as J,i as Q,T as I}from"./cssClassEnums-v1h5zF5X.js";import{a as ee,T as v,I as D,P as te,b as y,c as S,d as ie}from"./exportParts-CtUt9Lva.js";import{i as oe}from"./localization-DmqTGOFp.js";import"./index-DGHtdGDl.js";import"./index-HHRpnDFu.js";import{c as f,B as b,t as A}from"./index-BPZZDKKN.js";import{K as ne}from"./keyboardEventKeys-BnoN8uA3.js";import"./preload-helper-C1FmrZbK.js";import"./dx-button-gwJQrlvi.js";import"./lodash-BXdGFY-L.js";import"./dx-list-item-OcRTzvHV.js";import"./dx-input-select-DRXt9p_b.js";import"./index-DzNqIDb7.js";import"./dx-avatar-CcPSZodn.js";import"./index-86KUY05j.js";const re=[10,25,50,75,100,175,250,325,400];var p=(e=>(e.CONTENT="Content",e.CONTENT_TEMPLATE="ContentTemplate",e.SITE_AREA_TEMPLATE="SiteAreaTemplate",e.LIBRARY_AUTHORING_TOOLS_COMPONENT="LibraryAuthoringToolsComponent",e.LIBRARY_DATE_COMPONENT="LibraryDateComponent",e.LIBRARY_FILE_COMPONENT="LibraryFileComponent",e.LIBRARY_HTML_COMPONENT="LibraryHTMLComponent",e.LIBRARY_IMAGE_COMPONENT="LibraryImageComponent",e.LIBRARY_JSP_COMPONENT="LibraryJSPComponent",e.LIBRARY_LINK_COMPONENT="LibraryLinkComponent",e.LIBRARY_LIST_PRESENTATION_COMPONENT="LibraryListPresentationComponent",e.LIBRARY_MENU_COMPONENT="LibraryMenuComponent",e.LIBRARY_NAVIGATOR_COMPONENT="LibraryNavigatorComponent",e.LIBRARY_NUMERIC_COMPONENT="LibraryNumericComponent",e.OPTION_SELECTION_COMPONENT="OptionSelectionComponent",e.LIBRARY_PAGE_NAVIGATION_COMPONENT="LibraryPageNavigationComponent",e.LIBRARY_PERSONALIZATION_COMPONENT="LibraryPersonalizationComponent",e.LIBRARY_REFERENCE_COMPONENT="LibraryReferenceComponent",e.LIBRARY_RICH_TEXT_COMPONENT="LibraryRichTextComponent",e.LIBRARY_SEARCH_COMPONENT="LibrarySearchComponent",e.LIBRARY_SHORT_TEXT_COMPONENT="LibraryShortTextComponent",e.LIBRARY_STYLESHEET_COMPONENT="LibraryStyleSheetComponent",e.LIBRARY_TAXONOMY_COMPONENT="LibraryTaxonomyComponent",e.LIBRARY_TEXT_COMPONENT="LibraryTextComponent",e.LIBRARY_USER_NAME_COMPONENT="LibraryUserNameComponent",e.LIBRARY_USER_SELECTION_COMPONENT="LibraryUserSelectionComponent",e.CATEGORY="Category",e.CONTENT_LINK="ContentLink",e.FOLDER="Folder",e.LIBRARY="Library",e.PORTAL_PAGE="PortalPage",e.PRESENTATION_TEMPLATE="PresentationTemplate",e.PROJECT="Project",e.PROJECT_TEMPLATE="ProjectTemplate",e.SEGMENT="Segment",e.SITE_AREA="SiteArea",e.TAXONOMY="Taxonomy",e.VERSION_ACTION="VersionAction",e.CUSTOM_WORKFLOW_ACTION="CustomWorkflowAction",e.EMAIL_ACTION="EmailAction",e.EXPIRE_ACTION="ExpireAction",e.PUBLISH_ACTION="PublishAction",e.SCHEDULED_MOVE_ACTION="ScheduledMoveAction",e.WORKFLOW="Workflow",e.WORKFLOW_STAGE="WorkflowStage",e.NOTEBOOK_REFERENCE="notebookReference",e.MAIL_ALL="mailAll",e.USER_PROFILE_ALT="userProfileAlt",e.LICENSE_GLOBAL="licenseGlobal",e.USER_PROFILE="userProfile",e.DATA_ANALYTICS="dataAnalytics",e.REMINDER="reminder",e.LICENSE_DRAFT="licenseDraft",e.EVENT_WARNING="eventWarning",e.LAYERS_EXTERNAL="layersExternal",e.SUBFLOW="subflow",e.DAM_COLLECTION="collection",e.DAM_IMAGE="image",e.DAM_VIDEO="video",e.DAM_DOCUMENT="application/vnd.openxmlformats-officedocument.wordprocessingml.document",e.DAM_XLS="application/vnd.ms-excel",e.DAM_XLSX="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",e.DAM_PPT="application/vnd.ms-powerpoint",e.DAM_PPTX="application/vnd.openxmlformats-officedocument.presentationml.presentation",e.DAM_PDF="application/pdf",e.DAM_GIF="image/gif",e.DAM_JPEG="image/jpeg",e.DAM_PNG="image/png",e.DAM_TIF="image/tiff",e.DAM_WEBP="image/webp",e.DAM_MP4="video/mp4",e.DAM_OGG="video/ogg",e.DAM_WEBM="video/webm",e))(p||{});const se={image:c.IMAGE,"image/jpeg":c.IMAGE,"image/png":c.IMAGE,"image/webp":c.IMAGE,video:c.VIDEO,"video/mp4":c.VIDEO,"video/ogg":c.VIDEO,"video/webm":c.VIDEO,"application/vnd.openxmlformats-officedocument.wordprocessingml.document":c.DOC,"application/pdf":c.PDF,"application/vnd.ms-excel":c.XLS,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":c.XLSX,"application/vnd.ms-powerpoint":c.PPT,"application/vnd.openxmlformats-officedocument.presentationml.presentation":c.PPTX,"image/tiff":c.TIF,"image/gif":c.GIF};var h=(e=>(e.SUCCESS="SUCCESS",e.ERROR_NOT_FOUND="ERROR_NOT_FOUND",e.ERROR_FORBIDDEN="ERROR_FORBIDDEN",e.ERROR_BAD_REQUEST="ERROR_BAD_REQUEST",e.ERROR_SERVER="ERROR_SERVER",e.ERROR_FORMAT_UNSUPPORTED="ERROR_FORMAT_UNSUPPORTED",e))(h||{});const ae=async e=>{if(!e)return h.ERROR_BAD_REQUEST;const t=new AbortController,i=t.signal;try{const o=await fetch(e,{method:"GET",credentials:"include",cache:"no-cache",signal:i});return o.ok?(t.abort(),h.SUCCESS):o.status===404?h.ERROR_NOT_FOUND:o.status===403?h.ERROR_FORBIDDEN:o.status>=500?h.ERROR_SERVER:h.ERROR_BAD_REQUEST}catch(o){return o instanceof Error&&o.name==="AbortError"?h.SUCCESS:h.ERROR_SERVER}};var $={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M8 12H18V14H8z"}},{elem:"path",attrs:{d:"M21.4479,20A10.856,10.856,0,0,0,24,13,11,11,0,1,0,13,24a10.856,10.856,0,0,0,7-2.5521L27.5859,29,29,27.5859ZM13,22a9,9,0,1,1,9-9A9.01,9.01,0,0,1,13,22Z"}}],name:"zoom--out",size:32};const B="icon-zoom-out";let le=class extends b{render(){return s`${A({...$,attrs:{...$.attrs,preserveAspectRatio:"xMidYMid"}})}`}};f&&!customElements.get(B)&&customElements.define(B,le);var U={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M18 12L14 12 14 8 12 8 12 12 8 12 8 14 12 14 12 18 14 18 14 14 18 14 18 12z"}},{elem:"path",attrs:{d:"M21.4479,20A10.856,10.856,0,0,0,24,13,11,11,0,1,0,13,24a10.856,10.856,0,0,0,7-2.5521L27.5859,29,29,27.5859ZM13,22a9,9,0,1,1,9-9A9.01,9.01,0,0,1,13,22Z"}}],name:"zoom--in",size:32};const V="icon-zoom-in";let de=class extends b{render(){return s`${A({...U,attrs:{...U.attrs,preserveAspectRatio:"xMidYMid"}})}`}};f&&!customElements.get(V)&&customElements.define(V,de);var z={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M26 24v4H6V24H4v4H4a2 2 0 002 2H26a2 2 0 002-2h0V24zM26 14L24.59 12.59 17 20.17 17 2 15 2 15 20.17 7.41 12.59 6 14 16 24 26 14z"}}],name:"download",size:32};const W="icon-download";let ce=class extends b{render(){return s`${A({...z,attrs:{...z.attrs,preserveAspectRatio:"xMidYMid"}})}`}};f&&!customElements.get(W)&&customElements.define(W,ce);var k={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M14 26L15.41 24.59 7.83 17 28 17 28 15 7.83 15 15.41 7.41 14 6 4 16 14 26z"}}],name:"arrow--left",size:32};const F="icon-arrow-left";let pe=class extends b{render(){return s`${A({...k,attrs:{...k.attrs,preserveAspectRatio:"xMidYMid"}})}`}};f&&!customElements.get(F)&&customElements.define(F,pe);var H={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M18 6L16.57 7.393 24.15 15 4 15 4 17 24.15 17 16.57 24.573 18 26 28 16 18 6z"}}],name:"arrow--right",size:32};const G="icon-arrow-right";class ue extends b{render(){return s`${A({...H,attrs:{...H.attrs,preserveAspectRatio:"xMidYMid"}})}`}}f&&!customElements.get(G)&&customElements.define(G,ue);var he=Object.defineProperty,me=Object.getOwnPropertyDescriptor,l=(e,t,i,o)=>{for(var n=o>1?void 0:o?me(t,i):t,d=e.length-1,u;d>=0;d--)(u=e[d])&&(n=(o?u(t,i,n):u(n))||n);return o&&n&&he(t,i,n),n};let a=class extends j{constructor(){super(...arguments),this._ZOOM_OPTIONS=re,this._ZOOM_BUTTON_MARGIN=12,this._ZOOM_DEFAULT=100,this.open=!1,this.items=[],this.customHeaderTitle=null,this.component="",this.renditionLabel="",this.selectButtonTitle="",this.currentItemIndex=0,this.selectedRenditionId=null,this.skipSourceValidation=!1,this.zoomPercentage=this._ZOOM_DEFAULT,this.zoomOutDisable=!1,this.zoomInDisable=!1,this.zoomToFitPercentage=this._ZOOM_DEFAULT,this.currentDisplaySource=null,this.isLoading=!0,this.hasError=!1,this.errorType=null,this.isMediaReady=!1,this.isZoomedIn=!1,this._activeRequestToken=0,this.isLtr=oe(),this._handleResize=()=>{var o,n;const e=this.items[this.currentItemIndex];if(!this.open||!e||e.type.split("/")[0]!==p.DAM_VIDEO)return;const t=(o=this.renderRoot)==null?void 0:o.querySelector('video[part="preview-item-video"]'),i=(n=this.renderRoot)==null?void 0:n.querySelector('div[part="preview-item-container"]');if(t&&i){if(!this.currentDisplaySource){t.removeAttribute("style");return}const d=t.videoWidth??0,O=(t.videoHeight??0)/d,R=i.offsetWidth,g=R*O;g<i.clientHeight?(t.style.width=`${R}px`,t.style.height=`${g}px`):(t.style.setProperty("height",`${i.clientHeight}px`,"important"),t.style.width="100%")}},this._handleKeydown=e=>{this.open&&e.key===ne.TAB&&this._handleTrapFocus(e)}}willUpdate(e){if(this.open&&(e.has("currentItemIndex")||e.has("items")||e.has("selectedRenditionId"))&&this._updateCurrentItemAndRendition(),e.has("zoomPercentage")||e.has("items")||e.has("currentItemIndex")){const t=this.items[this.currentItemIndex??0],i=(t==null?void 0:t.type.split("/")[0])===p.DAM_IMAGE;this.isZoomedIn=i&&this.zoomPercentage>100}this.isZoomedIn?this.classList.add("zoomed"):this.classList.remove("zoomed"),e.has("zoomPercentage")&&(this.style.setProperty("--zoom-scale-factor",`${this.zoomPercentage/100}`),this._updateImageDimensions()),e.has("isMediaReady")&&this.style.setProperty("--media-visibility",this.isMediaReady?"visible":"hidden")}_updateImageDimensions(){requestAnimationFrame(()=>{var i,o;const e=(i=this.renderRoot)==null?void 0:i.querySelector("#preview-item-image-wrapper"),t=(o=this.renderRoot)==null?void 0:o.querySelector("#preview-item-image");if(e&&t&&t.naturalWidth&&t.naturalHeight){const n=this.zoomPercentage/100,d=t.naturalWidth*n,u=t.naturalHeight*n;t.style.width=`${d}px`,t.style.height=`${u}px`,e.style.width=`${d}px`,e.style.height=`${u}px`,t.style.transform="",t.style.transformOrigin=""}})}updated(e){var t;super.updated(e),e.has("open")&&this.open&&requestAnimationFrame(()=>{var o;const i=(o=this.renderRoot)==null?void 0:o.querySelector('[role="dialog"]');i&&i.focus()}),this.open&&((t=this.items[this.currentItemIndex])==null?void 0:t.type.split("/")[0])===p.DAM_VIDEO&&(e.has("open")||e.has("currentItemIndex")||e.has("items"))&&requestAnimationFrame(()=>{this._handleResize()})}async _updateCurrentItemAndRendition(){this._activeRequestToken++;const e=this._activeRequestToken;if(this.isLoading=!0,this.isMediaReady=!1,this.hasError=!1,this.errorType=null,this.currentDisplaySource=null,this.items.length===0||this.currentItemIndex<0||this.currentItemIndex>=this.items.length){e===this._activeRequestToken&&(this.isLoading=!1);return}const t=this.items[this.currentItemIndex],i=t.type.split("/")[0];if((i===p.DAM_IMAGE||i===p.DAM_VIDEO)&&t.renditions&&t.renditions.length>0){let o=t.renditions.find(n=>n.id===this.selectedRenditionId);if(o||(o=t.renditions[0]),this.selectedRenditionId=o.id,this.skipSourceValidation){e===this._activeRequestToken&&(this.currentDisplaySource=o.source,this.isLoading=!1);return}try{const n=await ae(o.source);if(e!==this._activeRequestToken)return;n===h.SUCCESS?this.currentDisplaySource=o.source:(this.hasError=!0,this.errorType=n,this.dispatchEvent(new CustomEvent("preview-error",{detail:{item:t,errorType:this.errorType},bubbles:!0,composed:!0})))}finally{e===this._activeRequestToken&&(this.isLoading=!1)}}else e===this._activeRequestToken&&(this.isLoading=!1,this.hasError=!0)}_resetState(){this.open=!1,this.isLoading=!0,this.hasError=!1,this.isMediaReady=!1,this.errorType=null,this.selectedRenditionId=null,this.currentDisplaySource=null,this.zoomPercentage=this._ZOOM_DEFAULT,this._activeRequestToken=0}_handleBack(){this._resetState(),this.dispatchEvent(new CustomEvent("preview-back",{detail:{open:this.open},bubbles:!0,composed:!0}))}_handlePreviousButtonClick(){const e=new CustomEvent("preview-previous",{bubbles:!0,composed:!0,detail:{previousIndex:this.currentItemIndex-1},cancelable:!0});this.dispatchEvent(e),e.defaultPrevented||(this.currentItemIndex-=1)}_handleNextButtonClick(){const e=new CustomEvent("preview-next",{bubbles:!0,composed:!0,detail:{nextIndex:this.currentItemIndex+1},cancelable:!0});this.dispatchEvent(e),e.defaultPrevented||(this.currentItemIndex+=1)}_handleZoomOutButtonClick(){const t=[...this._ZOOM_OPTIONS].reverse().find(i=>this.zoomPercentage>i);t===10&&(this.zoomOutDisable=!0),t&&(this.zoomPercentage=t),this.zoomInDisable=!1}_handleZoomInButtonClick(){const e=this._ZOOM_OPTIONS.find(t=>t>this.zoomPercentage);e===400&&(this.zoomInDisable=!0),e&&(this.zoomPercentage=e),this.zoomOutDisable=!1}_calculateImagePercentage(){var O;const e=(O=this.renderRoot)==null?void 0:O.querySelector("#preview-item-image"),t=(e==null?void 0:e.height)??0,i=e.clientHeight??0;if(t===i){const R=Math.round((i-this._ZOOM_BUTTON_MARGIN*2)/i*100);return this.zoomToFitPercentage=R,R}const o=Math.round((i-this._ZOOM_BUTTON_MARGIN*2)/t*100),n=e.clientWidth??0,d=e.width??0,u=Math.round((n-this._ZOOM_BUTTON_MARGIN*2)/d*100);return this.zoomToFitPercentage=Math.min(o,u),this._ZOOM_DEFAULT}_handleZoomPercentageFitClick(){this.zoomPercentage!==this._ZOOM_DEFAULT?this.zoomPercentage=this._ZOOM_DEFAULT:this.zoomPercentage=this.zoomToFitPercentage,this.zoomInDisable=!1,this.zoomOutDisable=!1}_handlePreviewError(){this.isLoading=!1,this.hasError=!0,this.isMediaReady=!1,this.errorType=h.ERROR_FORMAT_UNSUPPORTED;const e=this.items[this.currentItemIndex];this.dispatchEvent(new CustomEvent("preview-error",{detail:{item:e,errorType:this.errorType},bubbles:!0,composed:!0}))}getUnsupportedFileComponent(e,t=""){return s`
      <div part=${r.PREVIEW_ITEM_CONTENT}>
        <div part=${r.PREVIEW_ITEM_UNSUPPORTED_CONTAINER}>
          <dx-item-type-avatar
            itemtype=${se[e]??e}
            exportparts=${ee}
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
      `;if(!this.items||this.items.length===0)return _;if(this.hasError){const i=this.items[this.currentItemIndex];return this.getUnsupportedFileComponent(i==null?void 0:i.type,i==null?void 0:i.fileExtension)}if(this.isLoading)return _;const e=this.items[this.currentItemIndex];if(!this.currentDisplaySource)return this.getUnsupportedFileComponent(e==null?void 0:e.type,e==null?void 0:e.fileExtension);switch(e.type.split("/")[0]){case p.DAM_IMAGE:return s`
          <div id="preview-item-image-wrapper" part=${r.PREVIEW_ITEM_IMAGE_WRAPPER}>
            <img
              id="preview-item-image"
              part=${r.PREVIEW_ITEM_IMAGE}
              src=${this.currentDisplaySource}
              alt=${e.title}
              @load=${this._handleMediaReady}
              @error=${this._handlePreviewError}
            />
          </div>
        `;case p.DAM_VIDEO:return s`
          <div part=${r.PREVIEW_ITEM_VIDEO_CONTAINER}>
            <video 
              controls 
              part=${r.PREVIEW_ITEM_VIDEO}
              @loadeddata=${this._handleMediaReady}
              @error=${this._handlePreviewError}
              .src=${this.currentDisplaySource}
            >
            </video>
          </div>
        `;default:return this.getUnsupportedFileComponent(e.type,e==null?void 0:e.fileExtension)}}_getRenditionOptionValue(e){return e.type?`${e.type} (${e.dimension??this.getMessage("preview.rendition.metadata.unknown")})`:""}_getDefaultSelectedRenditionValue(){if(this.currentItemIndex===null||this.currentItemIndex<0||this.currentItemIndex>=this.items.length)return"";const e=this.items[this.currentItemIndex];if(e&&e.type.split("/")[0]===p.DAM_IMAGE&&e.renditions&&e.renditions.length>0){const t=e.renditions.find(i=>i.id===this.selectedRenditionId);if(t)return this._getRenditionOptionValue(t);if(e.renditions.length>0)return this._getRenditionOptionValue(e.renditions[0])}return""}_handleRenditionSelectChange(e){var o;const t=(o=e.detail)==null?void 0:o.value;if(t===void 0||this.currentItemIndex===null)return;const i=this.items[this.currentItemIndex];if(i&&i.type.split("/")[0]===p.DAM_IMAGE&&i.renditions){const n=i.renditions.find(d=>d.id===t);if(n){const d=new CustomEvent("preview-rendition-change",{bubbles:!0,composed:!0,detail:{id:this.items[this.currentItemIndex].id,title:this.items[this.currentItemIndex].title,selectedRenditionId:n.id,source:this.currentDisplaySource},cancelable:!0});this.dispatchEvent(d),d.defaultPrevented||(this.selectedRenditionId=n.id)}}}_handleMediaReady(){this.isLoading=!1,this.isMediaReady=!0,this.hasError=!1;const e=this.items[this.currentItemIndex];if(!e)return;const t=e.type.split("/")[0];t===p.DAM_IMAGE?requestAnimationFrame(()=>{this.zoomPercentage=this._calculateImagePercentage(),this._updateImageDimensions()}):t===p.DAM_VIDEO&&requestAnimationFrame(()=>this._handleResize())}_handleDownloadButtonClick(){this.dispatchEvent(new CustomEvent("preview-download",{bubbles:!0,composed:!0,detail:{id:this.items[this.currentItemIndex].id,title:this.items[this.currentItemIndex].title,selectedRenditionId:this.selectedRenditionId,source:this.currentDisplaySource}}))}_handleSelectButtonClick(){this.dispatchEvent(new CustomEvent("preview-select",{bubbles:!0,composed:!0,detail:{id:this.items[this.currentItemIndex].id,title:this.items[this.currentItemIndex].title,selectedRenditionId:this.selectedRenditionId,source:this.currentDisplaySource}}))}_handleTrapFocus(e){var d;const t=(d=this.renderRoot)==null?void 0:d.querySelectorAll("dx-icon-button:not([disabled]), dx-button:not([disabled]), dx-input-select:not([disabled])"),i=t==null?void 0:t[0],o=t==null?void 0:t[t.length-1],n=this.renderRoot&&this.renderRoot.activeElement;e.shiftKey?n===i&&(o==null||o._focusButton(),e.preventDefault()):n===o&&(i==null||i._focusButton(),e.preventDefault())}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._handleResize),window.addEventListener("keydown",this._handleKeydown),this.renditionLabel==""&&(this.renditionLabel=this.getMessage("preview.rendition.label")),this.selectButtonTitle==""&&(this.selectButtonTitle=this.getMessage("select"))}disconnectedCallback(){window.removeEventListener("resize",this._handleResize),window.removeEventListener("keydown",this._handleKeydown),super.disconnectedCallback()}render(){var C,w,L;const e=this.isLoading||this.currentDisplaySource&&!this.isMediaReady&&!this.hasError||(this.isPreviousButtonDisabled!==void 0?this.isPreviousButtonDisabled:this.currentItemIndex<=0),t=this.isLoading||this.currentDisplaySource&&!this.isMediaReady&&!this.hasError||(this.isNextButtonDisabled!==void 0?this.isNextButtonDisabled:this.currentItemIndex===this.items.length-1),i=this.items[this.currentItemIndex??0],o=(i==null?void 0:i.type.split("/")[0])===p.DAM_IMAGE,n=i==null?void 0:i.renditions;if(!this.open)return _;const d=this.getMessage("preview.tooltip.download.button"),u=this.getMessage("preview.tooltip.next.asset.button"),O=this.getMessage("preview.tooltip.previous.asset.button"),R=this.getMessage("preview.tooltip.zoom.out.button"),g=this.getMessage("preview.tooltip.zoom.in.button"),x=this.getMessage(this.zoomPercentage===100?"preview.tooltip.zoom.to.fit":"preview.tooltip.view.actual.size"),P=this.customHeaderTitle??((C=this.items[this.currentItemIndex])==null?void 0:C.title)??this.getMessage("preview.header.title");return s`
    <div part=${r.PREVIEW_BACKDROP}
      ?open=${this.open} 
      tabindex="-1"
      role="presentation"
    >
      <div part=${r.PREVIEW_CONTAINER} role="dialog" aria-modal="true" tabindex="-1" aria-label=${P} aria-modal="true">
        <div part=${r.PREVIEW_HEADER} data-testid="dx-preview-header">
          <div part=${r.PREVIEW_HEADER_START_ACTIONS}>
            <dx-tooltip tooltiptext=${this.getMessage("preview.tooltip.back.button")} exportparts=${v}>
              <dx-icon-button
                slot="target"
                .icon=${this.isLtr?s`<icon-arrow-left></icon-arrow-left>`:s`<icon-arrow-right></icon-arrow-right>`}
                exportparts="${D}"
                @click=${this._handleBack}
                data-testid="dx-preview-back-button"
                size=${T.MEDIUM}
                ariaLabel=${this.getMessage("preview.tooltip.back.button")}
                aria-hidden="true"
              >
              </dx-icon-button>
            </dx-tooltip>
            <span part=${r.PREVIEW_HEADER_TITLE}>
              ${P}
            </span>
          </div>
          ${o&&n&&n.length>0?s`<div part=${r.PREVIEW_HEADER_MIDDLE_ACTIONS}>
              <span part=${r.PREVIEW_HEADER_RENDITION_LABEL} id="dx-preview-rendition-select-label" aria-hidden="true">
                ${this.renditionLabel}
              </span>
              <dx-input-select
                aria-labelledby="dx-preview-rendition-select-label"
                hiddenLabel
                .options=${((L=(w=this.items[this.currentItemIndex??0])==null?void 0:w.renditions)==null?void 0:L.map(M=>({id:M.id,name:this._getRenditionOptionValue(M),value:M.type??""})))??[]}
                selectedValue=${this._getDefaultSelectedRenditionValue()}
                exportparts=${te}
                @change=${this._handleRenditionSelectChange}
                data-testid="dx-preview-rendition-select"
                part=${r.PREVIEW_HEADER_RENDITION_INPUT_SELECT}
                aria-hidden="true"
              >
              </dx-input-select>
            </div>`:_}
          <div part=${r.PREVIEW_HEADER_END_ACTIONS}>
            ${this.items.length>0?s`
                <dx-tooltip tooltiptext=${d} exportparts=${v}>
                  <dx-icon-button
                    slot="target"
                    .icon=${s`<icon-download color="currentColor"></icon-download>`}
                    exportparts="${D}"
                    @click=${this._handleDownloadButtonClick}
                    data-testid="dx-preview-download-button"
                    size=${T.MEDIUM}
                    ariaLabel=${d}
                    aria-hidden="true"
                  >
                  </dx-icon-button>
                </dx-tooltip>
                <dx-button
                  part=${r.PREVIEW_HEADER_SELECT_BUTTON}
                  buttontext=${this.selectButtonTitle}
                  exportparts="${Object.values(Q).join(",")}"
                  variant=${J.BUTTON_CONTAINED_VAR}
                  @click=${this._handleSelectButtonClick}
                  data-testid="dx-preview-select-button"
                  aria-hidden="true"
                  >
                </dx-button>
             `:_}
          </div>
        </div>
        <hr part=${r.PREVIEW_HEADER_DIVIDER} />
        <div part=${r.PREVIEW_ITEM_CONTAINER}>
          ${this.items.length>0?s`
            <div part=${r.PREVIEW_ITEM_PREVIOUS_BUTTON_CONTAINER}>
              <dx-tooltip 
                tooltiptext=${O}
                exportparts=${v}
                placement=${this.isLtr?I.TOOLTIP_BOTTOM_START:I.TOOLTIP_BOTTOM_END}
              >
                <dx-icon-button
                  slot="target"
                  part=${r.PREVIEW_ITEM_PREVIOUS_BUTTON}
                  .icon=${this.isLtr?s`<icon-chevron-left></icon-chevron-left>`:s`<icon-chevron-right></icon-chevron-right>`}
                  exportparts="${y}"
                  @click=${this._handlePreviousButtonClick}
                  ?disabled=${e}
                  data-testid="dx-preview-previous-button"
                  size=${T.MEDIUM}
                  inversecolor
                  ariaLabel=${O}
                >
                </dx-icon-button>
              </dx-tooltip>
            </div>
          `:_}
          <div id="preview-item-content-container" part=${r.PREVIEW_ITEM_CONTENT_CONTAINER}>
            ${this._renderPreviewItem()}
            ${this.isLoading||this.currentDisplaySource&&!this.isMediaReady&&!this.hasError?s`
                <div part=${r.PREVIEW_ITEM_SPINNER_CONTAINER}>
                  <dx-circular-progress></dx-circular-progress>
                </div>
                `:_}
          </div>
          ${this.items.length>0?s`
            <div part=${r.PREVIEW_ITEM_NEXT_BUTTON_CONTAINER}>
              <dx-tooltip 
                tooltiptext=${u}
                exportparts=${v}
                placement=${this.isLtr?I.TOOLTIP_BOTTOM_END:I.TOOLTIP_BOTTOM_START}
              >
                <dx-icon-button
                  slot="target"
                  part=${r.PREVIEW_ITEM_NEXT_BUTTON}
                  .icon=${this.isLtr?s`<icon-chevron-right></icon-chevron-right>`:s`<icon-chevron-left></icon-chevron-left>`}
                  exportparts="${y}"
                  @click=${this._handleNextButtonClick}
                  ?disabled=${t}
                  data-testid="dx-preview-next-button"
                  size=${T.MEDIUM}
                  inversecolor
                  ariaLabel=${u}
                >
                </dx-icon-button>
              </dx-tooltip>
            </div>
          `:_}
        </div>
        ${!this.isLoading&&this.isMediaReady&&!this.hasError&&o&&!this.component?s`
              <div part=${r.PREVIEW_ZOOM_CONTAINER}>
                <div part=${r.PREVIEW_ZOOM_CONTROLS}>
                  <dx-tooltip 
                    tooltiptext=${R}
                    exportparts=${v}
                    placement=${I.TOOLTIP_TOP}
                  >
                    <dx-icon-button
                      slot="target"
                      .icon=${s`<icon-zoom-out></icon-zoom-out>`}
                      exportparts="${S}"
                      @click=${this._handleZoomOutButtonClick}
                      ?disabled=${this.zoomOutDisable}
                      data-testid="dx-preview-zoom-out-button"
                      size=${T.MEDIUM}
                      inversecolor
                      ariaLabel=${R}
                    >
                    </dx-icon-button>
                  </dx-tooltip>
                  <dx-tooltip 
                    tooltiptext=${x}
                    exportparts=${v}
                    placement=${I.TOOLTIP_TOP}
                  >
                    <dx-button
                      slot="target"
                      buttontext=${`${this.zoomPercentage}%`}
                      exportparts="${ie}"
                      @click=${this._handleZoomPercentageFitClick}
                      data-testid="dx-preview-zoom-percentage-button"
                      inversecolor
                      ariaLabel=${x}
                    >
                    </dx-button>
                  </dx-tooltip>
                  <dx-tooltip 
                    tooltiptext=${g}
                    exportparts=${v}
                    placement=${I.TOOLTIP_TOP}
                  >
                    <dx-icon-button
                      slot="target"
                      .icon=${s`<icon-zoom-in></icon-zoom-in>`}
                      exportparts="${S}"
                      @click=${this._handleZoomInButtonClick}
                      ?disabled=${this.zoomInDisable}
                      data-testid="dx-preview-zoom-in-button"
                      size=${T.MEDIUM}
                      inversecolor
                      ariaLabel=${g}
                    >
                    </dx-icon-button>
                  </dx-tooltip>
                </div>
              </div>
            `:_}
      </div>
        </div>
    `}};l([m({type:Boolean,reflect:!0})],a.prototype,"open",2);l([m({type:Array})],a.prototype,"items",2);l([m({type:String})],a.prototype,"customHeaderTitle",2);l([m()],a.prototype,"component",2);l([m({type:Boolean,reflect:!0})],a.prototype,"isPreviousButtonDisabled",2);l([m({type:Boolean,reflect:!0})],a.prototype,"isNextButtonDisabled",2);l([m({type:String})],a.prototype,"renditionLabel",2);l([m({type:String})],a.prototype,"selectButtonTitle",2);l([m()],a.prototype,"currentItemIndex",2);l([m()],a.prototype,"selectedRenditionId",2);l([m({type:Boolean})],a.prototype,"skipSourceValidation",2);l([E()],a.prototype,"zoomPercentage",2);l([E()],a.prototype,"zoomOutDisable",2);l([E()],a.prototype,"zoomInDisable",2);l([E()],a.prototype,"zoomToFitPercentage",2);l([E()],a.prototype,"currentDisplaySource",2);l([E()],a.prototype,"isLoading",2);l([E()],a.prototype,"hasError",2);l([E()],a.prototype,"errorType",2);l([E()],a.prototype,"isMediaReady",2);l([E()],a.prototype,"isZoomedIn",2);l([E()],a.prototype,"isLtr",2);a=l([K("dx-preview")],a);const Ee=[{id:"original",type:"Original",source:new URL(""+new URL("test-image-C2ev5F1I.jpg",import.meta.url).href,import.meta.url).href,dimension:"600x400"},{id:"thumb",type:"Thumbnail",source:new URL(""+new URL("test-image-C2ev5F1I.jpg",import.meta.url).href,import.meta.url).href,dimension:"150x100"}],Y=[{id:1,title:"Sample Image",type:"image",renditions:Ee,fileExtension:"jpg"},{id:2,title:"Sample Video",type:"video",fileExtension:"mp4"},{id:3,title:"Unsupported File",type:"pdf",fileExtension:"pdf"}],Fe={title:"Overlay/dx-preview",component:"dx-preview",tags:["autodocs"],parameters:{docs:{description:{component:"The Preview component displays media items in a full-screen overlay with navigation controls. Supports images, videos, and documents with multiple renditions. Features include zoom controls, previous/next navigation, rendition selection, and custom header titles. Use this component for viewing and selecting media assets from collections or galleries."}}},argTypes:{open:{control:{type:"boolean"},description:"Controls preview visibility. When true, displays the preview overlay in full-screen mode. Close with the close button or ESC key.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},items:{control:{type:"object"},description:"Array of preview items to display. Each item should include id, title, type, optional renditions, and fileExtension. Supports images, videos, PDFs, etc.",table:{category:"Content",type:{summary:"PreviewItem[]"},defaultValue:{summary:"[]"}}},customHeaderTitle:{control:{type:"text"},description:"Custom text displayed in the preview header. Overrides the default item title. Use for contextual information or custom naming.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},component:{control:{type:"object"},description:"Custom component or template to render in the preview area. Allows full customization of the preview content beyond standard media types.",table:{category:"Content",type:{summary:"TemplateResult | string"},defaultValue:{summary:""}}},isPreviousButtonDisabled:{control:{type:"boolean"},description:"Disables the previous navigation button. Automatically set to true when viewing the first item. Can be manually controlled.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},isNextButtonDisabled:{control:{type:"boolean"},description:"Disables the next navigation button. Automatically set to true when viewing the last item. Can be manually controlled.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},renditionLabel:{control:{type:"text"},description:"Label text for the rendition selector dropdown. Appears next to the rendition selection control when multiple renditions are available.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},selectButtonTitle:{control:{type:"text"},description:"Title text for the select button in the toolbar. Used when preview is in selection mode to choose items.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},currentItemIndex:{control:{type:"number",min:0,max:Y.length},description:"Zero-based index of the currently displayed item. Updates as users navigate through items. Used to track position in the items array.",table:{category:"State",type:{summary:"number"},defaultValue:{summary:"0"}}},selectedRenditionId:{control:{type:"text"},description:"ID of the currently selected rendition. Used to control which rendition is displayed when an item has multiple renditions available.",table:{category:"State",type:{summary:"string"},defaultValue:{summary:"null"}}},skipSourceValidation:{control:{type:"boolean"},description:"Skips validation of source URLs when true. Useful for development or when using custom source handlers that may not be standard URLs.",table:{category:"Behavior",type:{summary:"boolean"},defaultValue:{summary:"false"}}}},args:{open:!0,items:Y,customHeaderTitle:"",component:"",isPreviousButtonDisabled:!1,isNextButtonDisabled:!1,renditionLabel:"Rendition",selectButtonTitle:"",currentItemIndex:0,selectedRenditionId:null,skipSourceValidation:!1}},N={name:"Default",render:e=>s`
      <dx-preview
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
      ></dx-preview>
    `};var Z,X,q;N.parameters={...N.parameters,docs:{...(Z=N.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Default',
  render: args => {
    return html\`
      <dx-preview
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
      ></dx-preview>
    \`;
  }
}`,...(q=(X=N.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};const He=["DxPreviewStory"];export{N as DxPreviewStory,He as __namedExportsOrder,Fe as default};
