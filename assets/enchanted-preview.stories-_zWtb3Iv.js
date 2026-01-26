import{x as s,E as O}from"./iframe-Bl462ZXk.js";import{n as m,t as j,E as K}from"./enchanted-ac-base-element-D6hCixC-.js";import{r as E}from"./state-BWRILggY.js";import"./enchanted-circular-progress-GrSgq0cS.js";import"./enchanted-icon-button-9nZ6ah3o.js";import"./enchanted-select-Dr5nKHfz.js";import{I as c}from"./enchanted-item-type-avatar-BbOYvyTn.js";import"./enchanted-tooltip-CCbcMIEv.js";import{t as r,I as f,i as J,k as Q,T as g}from"./cssClassEnums-DRCAaF3v.js";import{a as ee,T,I as y,P as te,b as S,c as $,d as ie}from"./exportParts-BYJN--9p.js";import{i as ne}from"./localization-52_TdTxi.js";import"./index-BHebUs8r.js";import"./index-BvejV-dJ.js";import{t as b}from"./index-CuTRIAwF.js";import{c as A,B as N}from"./index-C79KgSGt.js";import{K as oe}from"./keyboardEventKeys-BnoN8uA3.js";import"./preload-helper-C1FmrZbK.js";import"./enchanted-button-CJx4Ai-m.js";import"./lodash-DkmKKxq-.js";import"./enchanted-list-item-CnYnccbC.js";import"./enchanted-select-Ge91KUgI.js";import"./index-BAo8ZX5T.js";import"./enchanted-avatar-C0SvbnPH.js";import"./index-BPdh0Jk9.js";const re=[10,25,50,75,100,175,250,325,400];var p=(e=>(e.CONTENT="Content",e.CONTENT_TEMPLATE="ContentTemplate",e.SITE_AREA_TEMPLATE="SiteAreaTemplate",e.LIBRARY_AUTHORING_TOOLS_COMPONENT="LibraryAuthoringToolsComponent",e.LIBRARY_DATE_COMPONENT="LibraryDateComponent",e.LIBRARY_FILE_COMPONENT="LibraryFileComponent",e.LIBRARY_HTML_COMPONENT="LibraryHTMLComponent",e.LIBRARY_IMAGE_COMPONENT="LibraryImageComponent",e.LIBRARY_JSP_COMPONENT="LibraryJSPComponent",e.LIBRARY_LINK_COMPONENT="LibraryLinkComponent",e.LIBRARY_LIST_PRESENTATION_COMPONENT="LibraryListPresentationComponent",e.LIBRARY_MENU_COMPONENT="LibraryMenuComponent",e.LIBRARY_NAVIGATOR_COMPONENT="LibraryNavigatorComponent",e.LIBRARY_NUMERIC_COMPONENT="LibraryNumericComponent",e.OPTION_SELECTION_COMPONENT="OptionSelectionComponent",e.LIBRARY_PAGE_NAVIGATION_COMPONENT="LibraryPageNavigationComponent",e.LIBRARY_PERSONALIZATION_COMPONENT="LibraryPersonalizationComponent",e.LIBRARY_REFERENCE_COMPONENT="LibraryReferenceComponent",e.LIBRARY_RICH_TEXT_COMPONENT="LibraryRichTextComponent",e.LIBRARY_SEARCH_COMPONENT="LibrarySearchComponent",e.LIBRARY_SHORT_TEXT_COMPONENT="LibraryShortTextComponent",e.LIBRARY_STYLESHEET_COMPONENT="LibraryStyleSheetComponent",e.LIBRARY_TAXONOMY_COMPONENT="LibraryTaxonomyComponent",e.LIBRARY_TEXT_COMPONENT="LibraryTextComponent",e.LIBRARY_USER_NAME_COMPONENT="LibraryUserNameComponent",e.LIBRARY_USER_SELECTION_COMPONENT="LibraryUserSelectionComponent",e.CATEGORY="Category",e.CONTENT_LINK="ContentLink",e.FOLDER="Folder",e.LIBRARY="Library",e.PORTAL_PAGE="PortalPage",e.PRESENTATION_TEMPLATE="PresentationTemplate",e.PROJECT="Project",e.PROJECT_TEMPLATE="ProjectTemplate",e.SEGMENT="Segment",e.SITE_AREA="SiteArea",e.TAXONOMY="Taxonomy",e.VERSION_ACTION="VersionAction",e.CUSTOM_WORKFLOW_ACTION="CustomWorkflowAction",e.EMAIL_ACTION="EmailAction",e.EXPIRE_ACTION="ExpireAction",e.PUBLISH_ACTION="PublishAction",e.SCHEDULED_MOVE_ACTION="ScheduledMoveAction",e.WORKFLOW="Workflow",e.WORKFLOW_STAGE="WorkflowStage",e.NOTEBOOK_REFERENCE="notebookReference",e.MAIL_ALL="mailAll",e.USER_PROFILE_ALT="userProfileAlt",e.LICENSE_GLOBAL="licenseGlobal",e.USER_PROFILE="userProfile",e.DATA_ANALYTICS="dataAnalytics",e.REMINDER="reminder",e.LICENSE_DRAFT="licenseDraft",e.EVENT_WARNING="eventWarning",e.LAYERS_EXTERNAL="layersExternal",e.SUBFLOW="subflow",e.DAM_COLLECTION="collection",e.DAM_IMAGE="image",e.DAM_VIDEO="video",e.DAM_DOCUMENT="application/vnd.openxmlformats-officedocument.wordprocessingml.document",e.DAM_XLS="application/vnd.ms-excel",e.DAM_XLSX="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",e.DAM_PPT="application/vnd.ms-powerpoint",e.DAM_PPTX="application/vnd.openxmlformats-officedocument.presentationml.presentation",e.DAM_PDF="application/pdf",e.DAM_GIF="image/gif",e.DAM_JPEG="image/jpeg",e.DAM_PNG="image/png",e.DAM_TIF="image/tiff",e.DAM_WEBP="image/webp",e.DAM_MP4="video/mp4",e.DAM_OGG="video/ogg",e.DAM_WEBM="video/webm",e))(p||{});const se={image:c.IMAGE,"image/jpeg":c.IMAGE,"image/png":c.IMAGE,"image/webp":c.IMAGE,video:c.VIDEO,"video/mp4":c.VIDEO,"video/ogg":c.VIDEO,"video/webm":c.VIDEO,"application/vnd.openxmlformats-officedocument.wordprocessingml.document":c.DOC,"application/pdf":c.PDF,"application/vnd.ms-excel":c.XLS,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":c.XLSX,"application/vnd.ms-powerpoint":c.PPT,"application/vnd.openxmlformats-officedocument.presentationml.presentation":c.PPTX,"image/tiff":c.TIF,"image/gif":c.GIF};var u=(e=>(e.SUCCESS="SUCCESS",e.ERROR_NOT_FOUND="ERROR_NOT_FOUND",e.ERROR_FORBIDDEN="ERROR_FORBIDDEN",e.ERROR_BAD_REQUEST="ERROR_BAD_REQUEST",e.ERROR_SERVER="ERROR_SERVER",e.ERROR_FORMAT_UNSUPPORTED="ERROR_FORMAT_UNSUPPORTED",e))(u||{});const ae=async e=>{if(!e)return u.ERROR_BAD_REQUEST;const t=new AbortController,i=t.signal;try{const n=await fetch(e,{method:"GET",credentials:"include",cache:"no-cache",signal:i});return n.ok?(t.abort(),u.SUCCESS):n.status===404?u.ERROR_NOT_FOUND:n.status===403?u.ERROR_FORBIDDEN:n.status>=500?u.ERROR_SERVER:u.ERROR_BAD_REQUEST}catch(n){return n instanceof Error&&n.name==="AbortError"?u.SUCCESS:u.ERROR_SERVER}};var x={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M8 12H18V14H8z"}},{elem:"path",attrs:{d:"M21.4479,20A10.856,10.856,0,0,0,24,13,11,11,0,1,0,13,24a10.856,10.856,0,0,0,7-2.5521L27.5859,29,29,27.5859ZM13,22a9,9,0,1,1,9-9A9.01,9.01,0,0,1,13,22Z"}}],name:"zoom--out",size:32};const B="icon-zoom-out";let le=class extends N{render(){return s`${b({...x,attrs:{...x.attrs,preserveAspectRatio:"xMidYMid"}})}`}};A&&!customElements.get(B)&&customElements.define(B,le);var U={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M18 12L14 12 14 8 12 8 12 12 8 12 8 14 12 14 12 18 14 18 14 14 18 14 18 12z"}},{elem:"path",attrs:{d:"M21.4479,20A10.856,10.856,0,0,0,24,13,11,11,0,1,0,13,24a10.856,10.856,0,0,0,7-2.5521L27.5859,29,29,27.5859ZM13,22a9,9,0,1,1,9-9A9.01,9.01,0,0,1,13,22Z"}}],name:"zoom--in",size:32};const V="icon-zoom-in";let de=class extends N{render(){return s`${b({...U,attrs:{...U.attrs,preserveAspectRatio:"xMidYMid"}})}`}};A&&!customElements.get(V)&&customElements.define(V,de);var z={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M26 24v4H6V24H4v4H4a2 2 0 002 2H26a2 2 0 002-2h0V24zM26 14L24.59 12.59 17 20.17 17 2 15 2 15 20.17 7.41 12.59 6 14 16 24 26 14z"}}],name:"download",size:32};const W="icon-download";let ce=class extends N{render(){return s`${b({...z,attrs:{...z.attrs,preserveAspectRatio:"xMidYMid"}})}`}};A&&!customElements.get(W)&&customElements.define(W,ce);var k={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M14 26L15.41 24.59 7.83 17 28 17 28 15 7.83 15 15.41 7.41 14 6 4 16 14 26z"}}],name:"arrow--left",size:32};const F="icon-arrow-left";let he=class extends N{render(){return s`${b({...k,attrs:{...k.attrs,preserveAspectRatio:"xMidYMid"}})}`}};A&&!customElements.get(F)&&customElements.define(F,he);var H={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:32,height:32},content:[{elem:"path",attrs:{d:"M18 6L16.57 7.393 24.15 15 4 15 4 17 24.15 17 16.57 24.573 18 26 28 16 18 6z"}}],name:"arrow--right",size:32};const G="icon-arrow-right";class pe extends N{render(){return s`${b({...H,attrs:{...H.attrs,preserveAspectRatio:"xMidYMid"}})}`}}A&&!customElements.get(G)&&customElements.define(G,pe);var ue=Object.defineProperty,me=Object.getOwnPropertyDescriptor,d=(e,t,i,n)=>{for(var o=n>1?void 0:n?me(t,i):t,a=e.length-1,h;a>=0;a--)(h=e[a])&&(o=(n?h(t,i,o):h(o))||o);return n&&o&&ue(t,i,o),o};let l=class extends K{constructor(){super(...arguments),this._ZOOM_OPTIONS=re,this._ZOOM_BUTTON_MARGIN=12,this._ZOOM_DEFAULT=100,this.open=!1,this.items=[],this.customHeaderTitle=null,this.component="",this.renditionLabel="",this.selectButtonTitle="",this.currentItemIndex=0,this.selectedRenditionId=null,this.skipSourceValidation=!1,this.zoomPercentage=this._ZOOM_DEFAULT,this.zoomOutDisable=!1,this.zoomInDisable=!1,this.zoomToFitPercentage=this._ZOOM_DEFAULT,this.currentDisplaySource=null,this.isLoading=!0,this.hasError=!1,this.errorType=null,this.isMediaReady=!1,this.isZoomedIn=!1,this._activeRequestToken=0,this.isLtr=ne(),this._handleResize=()=>{var n,o;const e=this.items[this.currentItemIndex];if(!this.open||!e||e.type.split("/")[0]!==p.DAM_VIDEO)return;const t=(n=this.renderRoot)==null?void 0:n.querySelector('video[part="preview-item-video"]'),i=(o=this.renderRoot)==null?void 0:o.querySelector('div[part="preview-item-container"]');if(t&&i){if(!this.currentDisplaySource){t.removeAttribute("style");return}const a=t.videoWidth??0,I=(t.videoHeight??0)/a,R=i.offsetWidth,_=R*I;_<i.clientHeight?(t.style.width=`${R}px`,t.style.height=`${_}px`):(t.style.setProperty("height",`${i.clientHeight}px`,"important"),t.style.width="100%")}},this._handleKeydown=e=>{this.open&&e.key===oe.TAB&&this._handleTrapFocus(e)}}willUpdate(e){if(this.open&&(e.has("currentItemIndex")||e.has("items")||e.has("selectedRenditionId"))&&this._updateCurrentItemAndRendition(),e.has("zoomPercentage")||e.has("items")||e.has("currentItemIndex")){const t=this.items[this.currentItemIndex??0];(t==null?void 0:t.type.split("/")[0])===p.DAM_IMAGE?requestAnimationFrame(()=>{var a,h;const n=(a=this.renderRoot)==null?void 0:a.querySelector("#preview-item-image"),o=(h=this.renderRoot)==null?void 0:h.querySelector("#preview-item-content-container");if(n&&o&&n.naturalWidth&&n.naturalHeight){const I=n.naturalWidth*this.zoomPercentage/100,R=n.naturalHeight*this.zoomPercentage/100,_=o.clientWidth,v=o.clientHeight;this.isZoomedIn=I>_||R>v}else this.isZoomedIn=!1}):this.isZoomedIn=!1}this.isZoomedIn?this.classList.add("zoomed"):this.classList.remove("zoomed"),e.has("zoomPercentage")&&(this.style.setProperty("--zoom-scale-factor",`${this.zoomPercentage/100}`),this._updateImageDimensions()),e.has("isMediaReady")&&this.style.setProperty("--media-visibility",this.isMediaReady?"visible":"hidden")}_updateImageDimensions(){requestAnimationFrame(()=>{var i,n;const e=(i=this.renderRoot)==null?void 0:i.querySelector("#preview-item-image-wrapper"),t=(n=this.renderRoot)==null?void 0:n.querySelector("#preview-item-image");if(e&&t&&t.naturalWidth&&t.naturalHeight){const o=this.zoomPercentage/100,a=t.naturalWidth*o,h=t.naturalHeight*o;t.style.width=`${a}px`,t.style.height=`${h}px`,e.style.width=`${a}px`,e.style.height=`${h}px`,t.style.transform="",t.style.transformOrigin=""}})}updated(e){var t;super.updated(e),e.has("open")&&this.open&&requestAnimationFrame(()=>{var n;const i=(n=this.renderRoot)==null?void 0:n.querySelector('[role="dialog"]');i&&i.focus()}),this.open&&((t=this.items[this.currentItemIndex])==null?void 0:t.type.split("/")[0])===p.DAM_VIDEO&&(e.has("open")||e.has("currentItemIndex")||e.has("items"))&&requestAnimationFrame(()=>{this._handleResize()})}async _updateCurrentItemAndRendition(){this._activeRequestToken++;const e=this._activeRequestToken;if(this.isLoading=!0,this.isMediaReady=!1,this.hasError=!1,this.errorType=null,this.currentDisplaySource=null,this.items.length===0||this.currentItemIndex<0||this.currentItemIndex>=this.items.length){e===this._activeRequestToken&&(this.isLoading=!1);return}const t=this.items[this.currentItemIndex],i=t.type.split("/")[0];if((i===p.DAM_IMAGE||i===p.DAM_VIDEO)&&t.renditions&&t.renditions.length>0){let n=t.renditions.find(o=>o.id===this.selectedRenditionId);if(n||(n=t.renditions[0]),this.selectedRenditionId=n.id,this.skipSourceValidation){e===this._activeRequestToken&&(this.currentDisplaySource=n.source,this.isLoading=!1);return}try{const o=await ae(n.source);if(e!==this._activeRequestToken)return;o===u.SUCCESS?this.currentDisplaySource=n.source:(this.hasError=!0,this.errorType=o,this.dispatchEvent(new CustomEvent("preview-error",{detail:{item:t,errorType:this.errorType},bubbles:!0,composed:!0})))}finally{e===this._activeRequestToken&&(this.isLoading=!1)}}else e===this._activeRequestToken&&(this.isLoading=!1,this.hasError=!0)}_resetState(){this.open=!1,this.isLoading=!0,this.hasError=!1,this.isMediaReady=!1,this.errorType=null,this.selectedRenditionId=null,this.currentDisplaySource=null,this.zoomPercentage=this._ZOOM_DEFAULT,this._activeRequestToken=0}_handleBack(){this._resetState(),this.dispatchEvent(new CustomEvent("preview-back",{detail:{open:this.open},bubbles:!0,composed:!0}))}_handlePreviousButtonClick(){const e=new CustomEvent("preview-previous",{bubbles:!0,composed:!0,detail:{previousIndex:this.currentItemIndex-1},cancelable:!0});this.dispatchEvent(e),e.defaultPrevented||(this.currentItemIndex-=1)}_handleNextButtonClick(){const e=new CustomEvent("preview-next",{bubbles:!0,composed:!0,detail:{nextIndex:this.currentItemIndex+1},cancelable:!0});this.dispatchEvent(e),e.defaultPrevented||(this.currentItemIndex+=1)}_handleZoomOutButtonClick(){const t=[...this._ZOOM_OPTIONS].reverse().find(i=>this.zoomPercentage>i);t===10&&(this.zoomOutDisable=!0),t&&(this.zoomPercentage=t),this.zoomInDisable=!1}_handleZoomInButtonClick(){const e=this._ZOOM_OPTIONS.find(t=>t>this.zoomPercentage);e===400&&(this.zoomInDisable=!0),e&&(this.zoomPercentage=e),this.zoomOutDisable=!1}_calculateImagePercentage(){var _,v;const e=(_=this.renderRoot)==null?void 0:_.querySelector("#preview-item-image"),t=(v=this.renderRoot)==null?void 0:v.querySelector("#preview-item-content-container");if(!e||!t||!e.naturalWidth||!e.naturalHeight)return this._ZOOM_DEFAULT;const i=t.clientWidth,n=t.clientHeight-this._ZOOM_BUTTON_MARGIN*2,o=e.naturalWidth,a=e.naturalHeight,h=i/o*100,I=n/a*100,R=Math.min(h,I,100);return this.zoomToFitPercentage=Math.round(R),this.zoomToFitPercentage}_handleZoomPercentageFitClick(){if(this.zoomPercentage!==this._ZOOM_DEFAULT)this.zoomPercentage=this._ZOOM_DEFAULT;else{const e=this._calculateImagePercentage();this.zoomPercentage=e}this.zoomInDisable=!1,this.zoomOutDisable=!1}_handlePreviewError(){this.isLoading=!1,this.hasError=!0,this.isMediaReady=!1,this.errorType=u.ERROR_FORMAT_UNSUPPORTED;const e=this.items[this.currentItemIndex];this.dispatchEvent(new CustomEvent("preview-error",{detail:{item:e,errorType:this.errorType},bubbles:!0,composed:!0}))}getUnsupportedFileComponent(e,t=""){return s`
      <div part=${r.PREVIEW_ITEM_CONTENT}>
        <div part=${r.PREVIEW_ITEM_UNSUPPORTED_CONTAINER}>
          <enchanted-item-type-avatar
            itemtype=${se[e]??e}
            exportparts=${ee}
          >
          </enchanted-item-type-avatar>
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
      `;if(!this.items||this.items.length===0)return O;if(this.hasError){const i=this.items[this.currentItemIndex];return this.getUnsupportedFileComponent(i==null?void 0:i.type,i==null?void 0:i.fileExtension)}if(this.isLoading)return O;const e=this.items[this.currentItemIndex];if(!this.currentDisplaySource)return this.getUnsupportedFileComponent(e==null?void 0:e.type,e==null?void 0:e.fileExtension);switch(e.type.split("/")[0]){case p.DAM_IMAGE:return s`
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
        `;default:return this.getUnsupportedFileComponent(e.type,e==null?void 0:e.fileExtension)}}_getRenditionOptionValue(e){return e.type?`${e.type} (${e.dimension??this.getMessage("preview.rendition.metadata.unknown")})`:""}_getDefaultSelectedRenditionValue(){if(this.currentItemIndex===null||this.currentItemIndex<0||this.currentItemIndex>=this.items.length)return"";const e=this.items[this.currentItemIndex];if(e&&e.type.split("/")[0]===p.DAM_IMAGE&&e.renditions&&e.renditions.length>0){const t=e.renditions.find(i=>i.id===this.selectedRenditionId);if(t)return this._getRenditionOptionValue(t);if(e.renditions.length>0)return this._getRenditionOptionValue(e.renditions[0])}return""}_handleRenditionSelectChange(e){var n;const t=(n=e.detail)==null?void 0:n.value;if(t===void 0||this.currentItemIndex===null)return;const i=this.items[this.currentItemIndex];if(i&&i.type.split("/")[0]===p.DAM_IMAGE&&i.renditions){const o=i.renditions.find(a=>a.id===t);if(o){const a=new CustomEvent("preview-rendition-change",{bubbles:!0,composed:!0,detail:{id:this.items[this.currentItemIndex].id,title:this.items[this.currentItemIndex].title,selectedRenditionId:o.id,source:this.currentDisplaySource},cancelable:!0});this.dispatchEvent(a),a.defaultPrevented||(this.selectedRenditionId=o.id)}}}_handleMediaReady(){this.isLoading=!1,this.isMediaReady=!0,this.hasError=!1;const e=this.items[this.currentItemIndex];if(!e)return;const t=e.type.split("/")[0];t===p.DAM_IMAGE?requestAnimationFrame(()=>{this.zoomPercentage=this._calculateImagePercentage(),this._updateImageDimensions()}):t===p.DAM_VIDEO&&requestAnimationFrame(()=>this._handleResize())}_handleDownloadButtonClick(){this.dispatchEvent(new CustomEvent("preview-download",{bubbles:!0,composed:!0,detail:{id:this.items[this.currentItemIndex].id,title:this.items[this.currentItemIndex].title,selectedRenditionId:this.selectedRenditionId,source:this.currentDisplaySource}}))}_handleSelectButtonClick(){this.dispatchEvent(new CustomEvent("preview-select",{bubbles:!0,composed:!0,detail:{id:this.items[this.currentItemIndex].id,title:this.items[this.currentItemIndex].title,selectedRenditionId:this.selectedRenditionId,source:this.currentDisplaySource}}))}_handleTrapFocus(e){var a;const t=(a=this.renderRoot)==null?void 0:a.querySelectorAll("enchanted-icon-button:not([disabled]), enchanted-button:not([disabled]), enchanted-select:not([disabled])"),i=t==null?void 0:t[0],n=t==null?void 0:t[t.length-1],o=this.renderRoot&&this.renderRoot.activeElement;e.shiftKey?o===i&&(n==null||n._focusButton(),e.preventDefault()):o===n&&(i==null||i._focusButton(),e.preventDefault())}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._handleResize),window.addEventListener("keydown",this._handleKeydown),this.renditionLabel==""&&(this.renditionLabel=this.getMessage("preview.rendition.label")),this.selectButtonTitle==""&&(this.selectButtonTitle=this.getMessage("select"))}disconnectedCallback(){window.removeEventListener("resize",this._handleResize),window.removeEventListener("keydown",this._handleKeydown),super.disconnectedCallback()}render(){var w,L,D;const e=this.isLoading||this.currentDisplaySource&&!this.isMediaReady&&!this.hasError||(this.isPreviousButtonDisabled!==void 0?this.isPreviousButtonDisabled:this.currentItemIndex<=0),t=this.isLoading||this.currentDisplaySource&&!this.isMediaReady&&!this.hasError||(this.isNextButtonDisabled!==void 0?this.isNextButtonDisabled:this.currentItemIndex===this.items.length-1),i=this.items[this.currentItemIndex??0],n=(i==null?void 0:i.type.split("/")[0])===p.DAM_IMAGE,o=i==null?void 0:i.renditions;if(!this.open)return O;const a=this.getMessage("preview.tooltip.download.button"),h=this.getMessage("preview.tooltip.next.asset.button"),I=this.getMessage("preview.tooltip.previous.asset.button"),R=this.getMessage("preview.tooltip.zoom.out.button"),_=this.getMessage("preview.tooltip.zoom.in.button"),v=this.getMessage(this.zoomPercentage===100?"preview.tooltip.zoom.to.fit":"preview.tooltip.view.actual.size"),C=this.customHeaderTitle??((w=this.items[this.currentItemIndex])==null?void 0:w.title)??this.getMessage("preview.header.title");return s`
    <div part=${r.PREVIEW_BACKDROP}
      ?open=${this.open} 
      tabindex="-1"
      role="presentation"
    >
      <div part=${r.PREVIEW_CONTAINER} role="dialog" aria-modal="true" tabindex="-1" aria-label=${C} aria-modal="true">
        <div part=${r.PREVIEW_HEADER} data-testid="enchanted-preview-header">
          <div part=${r.PREVIEW_HEADER_START_ACTIONS}>
            <enchanted-tooltip tooltiptext=${this.getMessage("preview.tooltip.back.button")} exportparts=${T}>
              <enchanted-icon-button
                slot="target"
                .icon=${this.isLtr?s`<icon-arrow-left></icon-arrow-left>`:s`<icon-arrow-right></icon-arrow-right>`}
                exportparts="${y}"
                @click=${this._handleBack}
                data-testid="enchanted-preview-back-button"
                size=${f.MEDIUM}
                ariaLabel=${this.getMessage("preview.tooltip.back.button")}
                aria-hidden="true"
              >
              </enchanted-icon-button>
            </enchanted-tooltip>
            <span part=${r.PREVIEW_HEADER_TITLE}>
              ${C}
            </span>
          </div>
          ${n&&o&&o.length>0?s`<div part=${r.PREVIEW_HEADER_MIDDLE_ACTIONS}>
              <span part=${r.PREVIEW_HEADER_RENDITION_LABEL} id="enchanted-preview-rendition-select-label" aria-hidden="true">
                ${this.renditionLabel}
              </span>
              <enchanted-select
                aria-labelledby="enchanted-preview-rendition-select-label"
                hiddenLabel
                .options=${((D=(L=this.items[this.currentItemIndex??0])==null?void 0:L.renditions)==null?void 0:D.map(M=>({id:M.id,name:this._getRenditionOptionValue(M),value:M.type??""})))??[]}
                selectedValue=${this._getDefaultSelectedRenditionValue()}
                exportparts=${te}
                @change=${this._handleRenditionSelectChange}
                data-testid="enchanted-preview-rendition-select"
                part=${r.PREVIEW_HEADER_RENDITION_INPUT_SELECT}
                aria-hidden="true"
              >
              </enchanted-select>
            </div>`:O}
          <div part=${r.PREVIEW_HEADER_END_ACTIONS}>
            ${this.items.length>0?s`
                <enchanted-tooltip tooltiptext=${a} exportparts=${T}>
                  <enchanted-icon-button
                    slot="target"
                    .icon=${s`<icon-download color="currentColor"></icon-download>`}
                    exportparts="${y}"
                    @click=${this._handleDownloadButtonClick}
                    data-testid="enchanted-preview-download-button"
                    size=${f.MEDIUM}
                    ariaLabel=${a}
                    aria-hidden="true"
                  >
                  </enchanted-icon-button>
                </enchanted-tooltip>
                <enchanted-button
                  part=${r.PREVIEW_HEADER_SELECT_BUTTON}
                  buttontext=${this.selectButtonTitle}
                  exportparts="${Object.values(Q).join(",")}"
                  variant=${J.BUTTON_CONTAINED_VAR}
                  @click=${this._handleSelectButtonClick}
                  data-testid="enchanted-preview-select-button"
                  aria-hidden="true"
                  >
                </enchanted-button>
             `:O}
          </div>
        </div>
        <hr part=${r.PREVIEW_HEADER_DIVIDER} />
        <div part=${r.PREVIEW_ITEM_CONTAINER}>
          ${this.items.length>0?s`
            <div part=${r.PREVIEW_ITEM_PREVIOUS_BUTTON_CONTAINER}>
              <enchanted-tooltip 
                tooltiptext=${I}
                exportparts=${T}
                placement=${this.isLtr?g.TOOLTIP_BOTTOM_START:g.TOOLTIP_BOTTOM_END}
              >
                <enchanted-icon-button
                  slot="target"
                  part=${r.PREVIEW_ITEM_PREVIOUS_BUTTON}
                  .icon=${this.isLtr?s`<icon-chevron-left></icon-chevron-left>`:s`<icon-chevron-right></icon-chevron-right>`}
                  exportparts="${S}"
                  @click=${this._handlePreviousButtonClick}
                  ?disabled=${e}
                  data-testid="enchanted-preview-previous-button"
                  size=${f.MEDIUM}
                  inversecolor
                  ariaLabel=${I}
                >
                </enchanted-icon-button>
              </enchanted-tooltip>
            </div>
          `:O}
          <div id="preview-item-content-container" part=${r.PREVIEW_ITEM_CONTENT_CONTAINER}>
            ${this._renderPreviewItem()}
            ${this.isLoading||this.currentDisplaySource&&!this.isMediaReady&&!this.hasError?s`
                <div part=${r.PREVIEW_ITEM_SPINNER_CONTAINER}>
                  <enchanted-circular-progress></enchanted-circular-progress>
                </div>
                `:O}
          </div>
          ${this.items.length>0?s`
            <div part=${r.PREVIEW_ITEM_NEXT_BUTTON_CONTAINER}>
              <enchanted-tooltip 
                tooltiptext=${h}
                exportparts=${T}
                placement=${this.isLtr?g.TOOLTIP_BOTTOM_END:g.TOOLTIP_BOTTOM_START}
              >
                <enchanted-icon-button
                  slot="target"
                  part=${r.PREVIEW_ITEM_NEXT_BUTTON}
                  .icon=${this.isLtr?s`<icon-chevron-right></icon-chevron-right>`:s`<icon-chevron-left></icon-chevron-left>`}
                  exportparts="${S}"
                  @click=${this._handleNextButtonClick}
                  ?disabled=${t}
                  data-testid="enchanted-preview-next-button"
                  size=${f.MEDIUM}
                  inversecolor
                  ariaLabel=${h}
                >
                </enchanted-icon-button>
              </enchanted-tooltip>
            </div>
          `:O}
        </div>
        ${!this.isLoading&&this.isMediaReady&&!this.hasError&&n&&!this.component?s`
              <div part=${r.PREVIEW_ZOOM_CONTAINER}>
                <div part=${r.PREVIEW_ZOOM_CONTROLS}>
                  <enchanted-tooltip 
                    tooltiptext=${R}
                    exportparts=${T}
                    placement=${g.TOOLTIP_TOP}
                  >
                    <enchanted-icon-button
                      slot="target"
                      .icon=${s`<icon-zoom-out></icon-zoom-out>`}
                      exportparts="${$}"
                      @click=${this._handleZoomOutButtonClick}
                      ?disabled=${this.zoomOutDisable}
                      data-testid="enchanted-preview-zoom-out-button"
                      size=${f.MEDIUM}
                      inversecolor
                      ariaLabel=${R}
                    >
                    </enchanted-icon-button>
                  </enchanted-tooltip>
                  <enchanted-tooltip 
                    tooltiptext=${v}
                    exportparts=${T}
                    placement=${g.TOOLTIP_TOP}
                  >
                    <enchanted-button
                      slot="target"
                      buttontext=${`${this.zoomPercentage}%`}
                      exportparts="${ie}"
                      @click=${this._handleZoomPercentageFitClick}
                      data-testid="enchanted-preview-zoom-percentage-button"
                      inversecolor
                      ariaLabel=${v}
                    >
                    </enchanted-button>
                  </enchanted-tooltip>
                  <enchanted-tooltip 
                    tooltiptext=${_}
                    exportparts=${T}
                    placement=${g.TOOLTIP_TOP}
                  >
                    <enchanted-icon-button
                      slot="target"
                      .icon=${s`<icon-zoom-in></icon-zoom-in>`}
                      exportparts="${$}"
                      @click=${this._handleZoomInButtonClick}
                      ?disabled=${this.zoomInDisable}
                      data-testid="enchanted-preview-zoom-in-button"
                      size=${f.MEDIUM}
                      inversecolor
                      ariaLabel=${_}
                    >
                    </enchanted-icon-button>
                  </enchanted-tooltip>
                </div>
              </div>
            `:O}
      </div>
        </div>
    `}};d([m({type:Boolean,reflect:!0})],l.prototype,"open",2);d([m({type:Array})],l.prototype,"items",2);d([m({type:String})],l.prototype,"customHeaderTitle",2);d([m()],l.prototype,"component",2);d([m({type:Boolean,reflect:!0})],l.prototype,"isPreviousButtonDisabled",2);d([m({type:Boolean,reflect:!0})],l.prototype,"isNextButtonDisabled",2);d([m({type:String})],l.prototype,"renditionLabel",2);d([m({type:String})],l.prototype,"selectButtonTitle",2);d([m()],l.prototype,"currentItemIndex",2);d([m()],l.prototype,"selectedRenditionId",2);d([m({type:Boolean})],l.prototype,"skipSourceValidation",2);d([E()],l.prototype,"zoomPercentage",2);d([E()],l.prototype,"zoomOutDisable",2);d([E()],l.prototype,"zoomInDisable",2);d([E()],l.prototype,"zoomToFitPercentage",2);d([E()],l.prototype,"currentDisplaySource",2);d([E()],l.prototype,"isLoading",2);d([E()],l.prototype,"hasError",2);d([E()],l.prototype,"errorType",2);d([E()],l.prototype,"isMediaReady",2);d([E()],l.prototype,"isZoomedIn",2);d([E()],l.prototype,"isLtr",2);l=d([j("enchanted-preview")],l);const Ee=[{id:"original",type:"Original",source:new URL(""+new URL("test-image-C2ev5F1I.jpg",import.meta.url).href,import.meta.url).href,dimension:"600x400"},{id:"thumb",type:"Thumbnail",source:new URL(""+new URL("test-image-C2ev5F1I.jpg",import.meta.url).href,import.meta.url).href,dimension:"150x100"},{id:"desktop",type:"Desktop",source:new URL(""+new URL("test-image-large-CwU_hnoS.jpg",import.meta.url).href,import.meta.url).href,dimension:"5760x3840"}],Y=[{id:1,title:"Sample Image",type:"image",renditions:Ee,fileExtension:"jpg"},{id:2,title:"Sample Video",type:"video",fileExtension:"mp4"},{id:3,title:"Unsupported File",type:"pdf",fileExtension:"pdf"}],He={title:"Overlay/enchanted-preview",component:"enchanted-preview",tags:["autodocs"],parameters:{docs:{description:{component:"The Preview component displays media items in a full-screen overlay with navigation controls. Supports images, videos, and documents with multiple renditions. Features include zoom controls, previous/next navigation, rendition selection, and custom header titles. Use this component for viewing and selecting media assets from collections or galleries."}}},argTypes:{open:{control:{type:"boolean"},description:"Controls preview visibility. When true, displays the preview overlay in full-screen mode. Close with the close button or ESC key.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},items:{control:{type:"object"},description:"Array of preview items to display. Each item should include id, title, type, optional renditions, and fileExtension. Supports images, videos, PDFs, etc.",table:{category:"Content",type:{summary:"PreviewItem[]"},defaultValue:{summary:"[]"}}},customHeaderTitle:{control:{type:"text"},description:"Custom text displayed in the preview header. Overrides the default item title. Use for contextual information or custom naming.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},component:{control:{type:"object"},description:"Custom component or template to render in the preview area. Allows full customization of the preview content beyond standard media types.",table:{category:"Content",type:{summary:"TemplateResult | string"},defaultValue:{summary:""}}},isPreviousButtonDisabled:{control:{type:"boolean"},description:"Disables the previous navigation button. Automatically set to true when viewing the first item. Can be manually controlled.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},isNextButtonDisabled:{control:{type:"boolean"},description:"Disables the next navigation button. Automatically set to true when viewing the last item. Can be manually controlled.",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:"false"}}},renditionLabel:{control:{type:"text"},description:"Label text for the rendition selector dropdown. Appears next to the rendition selection control when multiple renditions are available.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},selectButtonTitle:{control:{type:"text"},description:"Title text for the select button in the toolbar. Used when preview is in selection mode to choose items.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},currentItemIndex:{control:{type:"number",min:0,max:Y.length},description:"Zero-based index of the currently displayed item. Updates as users navigate through items. Used to track position in the items array.",table:{category:"State",type:{summary:"number"},defaultValue:{summary:"0"}}},selectedRenditionId:{control:{type:"text"},description:"ID of the currently selected rendition. Used to control which rendition is displayed when an item has multiple renditions available.",table:{category:"State",type:{summary:"string"},defaultValue:{summary:"null"}}},skipSourceValidation:{control:{type:"boolean"},description:"Skips validation of source URLs when true. Useful for development or when using custom source handlers that may not be standard URLs.",table:{category:"Behavior",type:{summary:"boolean"},defaultValue:{summary:"false"}}}},args:{open:!0,items:Y,customHeaderTitle:"",component:"",isPreviousButtonDisabled:!1,isNextButtonDisabled:!1,renditionLabel:"Rendition",selectButtonTitle:"",currentItemIndex:0,selectedRenditionId:null,skipSourceValidation:!1}},P={name:"Default",render:e=>s`
      <enchanted-preview
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
      ></enchanted-preview>
    `};var Z,q,X;P.parameters={...P.parameters,docs:{...(Z=P.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Default',
  render: args => {
    return html\`
      <enchanted-preview
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
      ></enchanted-preview>
    \`;
  }
}`,...(X=(q=P.parameters)==null?void 0:q.docs)==null?void 0:X.source}}};const Ge=["EnchantedPreviewStory"];export{P as EnchantedPreviewStory,Ge as __namedExportsOrder,He as default};
