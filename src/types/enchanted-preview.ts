import { ICON_ITEM_TYPE } from "./enchanted-svg-icon";

/* ======================================================================== *
 * Copyright 2025 HCL America Inc.                                          *
 * Licensed under the Apache License, Version 2.0 (the "License");          *
 * you may not use this file except in compliance with the License.         *
 * You may obtain a copy of the License at                                  *
 *                                                                          *
 * http://www.apache.org/licenses/LICENSE-2.0                               *
 *                                                                          *
 * Unless required by applicable law or agreed to in writing, software      *
 * distributed under the License is distributed on an "AS IS" BASIS,        *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
 * See the License for the specific language governing permissions and      *
 * limitations under the License.                                           *
 * ======================================================================== */
export const ENCHANTED_PREVIEW_DEFAULT_ZOOM_OPTIONS = [10, 25, 50, 75, 100, 175, 250, 325, 400];

export enum ItemTypes {
  CONTENT = 'Content',
  CONTENT_TEMPLATE = 'ContentTemplate',
  SITE_AREA_TEMPLATE = 'SiteAreaTemplate',
  LIBRARY_AUTHORING_TOOLS_COMPONENT = 'LibraryAuthoringToolsComponent',
  LIBRARY_DATE_COMPONENT = 'LibraryDateComponent',
  LIBRARY_FILE_COMPONENT = 'LibraryFileComponent',
  LIBRARY_HTML_COMPONENT = 'LibraryHTMLComponent',
  LIBRARY_IMAGE_COMPONENT = 'LibraryImageComponent',
  LIBRARY_JSP_COMPONENT = 'LibraryJSPComponent',
  LIBRARY_LINK_COMPONENT = 'LibraryLinkComponent',
  LIBRARY_LIST_PRESENTATION_COMPONENT = 'LibraryListPresentationComponent',
  LIBRARY_MENU_COMPONENT = 'LibraryMenuComponent',
  LIBRARY_NAVIGATOR_COMPONENT = 'LibraryNavigatorComponent',
  LIBRARY_NUMERIC_COMPONENT = 'LibraryNumericComponent',
  OPTION_SELECTION_COMPONENT = 'OptionSelectionComponent',
  LIBRARY_PAGE_NAVIGATION_COMPONENT = 'LibraryPageNavigationComponent',
  LIBRARY_PERSONALIZATION_COMPONENT = 'LibraryPersonalizationComponent',
  LIBRARY_REFERENCE_COMPONENT = 'LibraryReferenceComponent',
  LIBRARY_RICH_TEXT_COMPONENT = 'LibraryRichTextComponent',
  LIBRARY_SEARCH_COMPONENT = 'LibrarySearchComponent',
  LIBRARY_SHORT_TEXT_COMPONENT = 'LibraryShortTextComponent',
  LIBRARY_STYLESHEET_COMPONENT = 'LibraryStyleSheetComponent',
  LIBRARY_TAXONOMY_COMPONENT = 'LibraryTaxonomyComponent',
  LIBRARY_TEXT_COMPONENT = 'LibraryTextComponent',
  LIBRARY_USER_NAME_COMPONENT = 'LibraryUserNameComponent',
  LIBRARY_USER_SELECTION_COMPONENT = 'LibraryUserSelectionComponent',
  CATEGORY = 'Category',
  CONTENT_LINK = 'ContentLink',
  FOLDER = 'Folder',
  LIBRARY = 'Library',
  PORTAL_PAGE = 'PortalPage',
  PRESENTATION_TEMPLATE = 'PresentationTemplate',
  PROJECT = 'Project',
  PROJECT_TEMPLATE = 'ProjectTemplate',
  SEGMENT = 'Segment',
  SITE_AREA = 'SiteArea',
  TAXONOMY = 'Taxonomy',
  VERSION_ACTION = 'VersionAction',
  CUSTOM_WORKFLOW_ACTION = 'CustomWorkflowAction',
  EMAIL_ACTION = 'EmailAction',
  EXPIRE_ACTION = 'ExpireAction',
  PUBLISH_ACTION = 'PublishAction',
  SCHEDULED_MOVE_ACTION = 'ScheduledMoveAction',
  WORKFLOW = 'Workflow',
  WORKFLOW_STAGE = 'WorkflowStage',
  NOTEBOOK_REFERENCE = 'notebookReference',
  MAIL_ALL = 'mailAll',
  USER_PROFILE_ALT = 'userProfileAlt',
  LICENSE_GLOBAL = 'licenseGlobal',
  USER_PROFILE = 'userProfile',
  DATA_ANALYTICS = 'dataAnalytics',
  REMINDER = 'reminder',
  LICENSE_DRAFT = 'licenseDraft',
  EVENT_WARNING = 'eventWarning',
  LAYERS_EXTERNAL = 'layersExternal',
  SUBFLOW = 'subflow',
  DAM_COLLECTION = 'collection',
  DAM_IMAGE = 'image',
  DAM_VIDEO = 'video',
  DAM_DOCUMENT = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  DAM_XLS = 'application/vnd.ms-excel',
  DAM_XLSX = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  DAM_PPT = 'application/vnd.ms-powerpoint',
  DAM_PPTX = 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  DAM_PDF = 'application/pdf',
  DAM_GIF = 'image/gif',
  DAM_JPEG = 'image/jpeg',
  DAM_PNG = 'image/png',
  DAM_TIF = 'image/tiff',
  DAM_WEBP = 'image/webp',
  DAM_MP4 = 'video/mp4',
  DAM_OGG = 'video/ogg',
  DAM_WEBM = 'video/webm'
}

export const itemTypeIconMapping = {
  [ItemTypes.DAM_IMAGE]: ICON_ITEM_TYPE.IMAGE,
  [ItemTypes.DAM_JPEG]: ICON_ITEM_TYPE.IMAGE,
  [ItemTypes.DAM_PNG]: ICON_ITEM_TYPE.IMAGE,
  [ItemTypes.DAM_WEBP]: ICON_ITEM_TYPE.IMAGE,
  [ItemTypes.DAM_VIDEO]: ICON_ITEM_TYPE.VIDEO,
  [ItemTypes.DAM_MP4]: ICON_ITEM_TYPE.VIDEO,
  [ItemTypes.DAM_OGG]: ICON_ITEM_TYPE.VIDEO,
  [ItemTypes.DAM_WEBM]: ICON_ITEM_TYPE.VIDEO,
  [ItemTypes.DAM_DOCUMENT]: ICON_ITEM_TYPE.DOC,
  [ItemTypes.DAM_PDF]: ICON_ITEM_TYPE.PDF,
  [ItemTypes.DAM_XLS]: ICON_ITEM_TYPE.XLS,
  [ItemTypes.DAM_XLSX]: ICON_ITEM_TYPE.XLSX,
  [ItemTypes.DAM_PPT]: ICON_ITEM_TYPE.PPT,
  [ItemTypes.DAM_PPTX]: ICON_ITEM_TYPE.PPTX,
  [ItemTypes.DAM_TIF]: ICON_ITEM_TYPE.TIF,
  [ItemTypes.DAM_GIF]: ICON_ITEM_TYPE.GIF,
  // TODO: Add more mapping as needed
};

export const PARENT_ITEM_TYPES = [ItemTypes.LIBRARY, ItemTypes.SITE_AREA];

export enum ValidationStatus {
  SUCCESS = 'SUCCESS',
  ERROR_NOT_FOUND = 'ERROR_NOT_FOUND',
  ERROR_FORBIDDEN = 'ERROR_FORBIDDEN',
  ERROR_BAD_REQUEST = 'ERROR_BAD_REQUEST',
  ERROR_SERVER = 'ERROR_SERVER',
  ERROR_FORMAT_UNSUPPORTED = 'ERROR_FORMAT_UNSUPPORTED'
}
