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
// External imports
import { TemplateResult } from 'lit';
import { html } from 'lit/static-html.js';
import { property } from 'lit/decorators.js';
import createDebug from 'debug';

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';
import './enchanted-avatar';

// Helper imports
import { AVATAR_COLOR, AVATAR_TYPE, AVATAR_VARIANT } from '../../types/cssClassEnums';
import { ICON_ITEM_TYPE } from '../../types/enchanted-svg-icon';
import { ITEM_TYPE_AVATAR_EXPORT_PARTS } from '../exportParts';

// Icon imports
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/application';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/blog';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/catalog';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/character--whole-number';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/collaborate';
import '@hcl-software/enchanted-icons-web-component/dist/apps/es/content-item';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/copy--file';
import '@hcl-software/enchanted-icons-web-component/dist/apps/es/data-analytics';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/data--base';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/decision-tree';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/diagram';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/DOC';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/document--blank';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/document--export';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/event--schedule';
import '@hcl-software/enchanted-icons-web-component/dist/apps/es/event--warning';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/flow--data';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/folder';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/folder--details';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/GIF';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/HTML';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/image';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/inventory-management';
import '@hcl-software/enchanted-icons-web-component/dist/apps/es/layers--external';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/license--draft';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/license--global';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/list--boxes';
import '@hcl-software/enchanted-icons-web-component/dist/apps/es/page-elements-text';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/mail--all';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/menu';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/notebook--reference';
import '@hcl-software/enchanted-icons-web-component/dist/apps/es/page-elements-rich-text';
import '@hcl-software/enchanted-icons-web-component/dist/apps/es/page-elements-short-text';
import '@hcl-software/enchanted-icons-web-component/dist/apps/es/page-scroll';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/parent-child';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/PDF';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/portfolio';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/PPT';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/reminder';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/script';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/search--locate';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/subflow';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/tag--group';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/tag';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/template';
import '@hcl-software/enchanted-icons-web-component/dist/apps/es/text-link';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/TIF';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/user--profile';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/user-profile--alt';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/video';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/XLS';
import { generateIconTagName, ENCHANTED_AVATAR_TAG, ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME } from '../tags';

const debug = createDebug('enchanted-web-components:components:atomic-component:enchanted-item-type-avatar.ts');

export class EnchantedItemTypeAvatar extends EnchantedAcBaseElement {
 
   @property({ type: String }) itemType = '';

   @property({ type: String }) imageUrl = '';
   
   private getSvgIcon(path: string): {icon: TemplateResult | String, color: AVATAR_COLOR} {
     switch (path) {
       case ICON_ITEM_TYPE.APPLICATION:
         return { icon: html`<${generateIconTagName('icon-application')}></${generateIconTagName('icon-application')}>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.BLOG:
         return { icon: html`<${generateIconTagName('icon-blog')}></${generateIconTagName('icon-blog')}>`, color: AVATAR_COLOR.AVATAR_PURPLE };
       case ICON_ITEM_TYPE.CATALOG:
         return { icon: html`<${generateIconTagName('icon-catalog')}></${generateIconTagName('icon-catalog')}>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.CHARACTER_WHOLE_NUMBER:
         return { icon: html`<${generateIconTagName('icon-character-whole-number')}></${generateIconTagName('icon-character-whole-number')}>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.COLLABORATE:
         return { icon: html`<${generateIconTagName('icon-collaborate')}></${generateIconTagName('icon-collaborate')}>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.CONTENT_ITEM:
         return { icon: html`<${generateIconTagName('icon-content-item')}></${generateIconTagName('icon-content-item')}>`, color: AVATAR_COLOR.AVATAR_BLUE };
       case ICON_ITEM_TYPE.COPY_FILE:
         return { icon: html`<${generateIconTagName('icon-copy-file')}></${generateIconTagName('icon-copy-file')}>`, color: AVATAR_COLOR.AVATAR_BLUE };
       case ICON_ITEM_TYPE.DATA_ANALYTICS:
         return { icon: html`<${generateIconTagName('icon-data-analytics')}></${generateIconTagName('icon-data-analytics')}>`, color: AVATAR_COLOR.AVATAR_YELLOW };
       case ICON_ITEM_TYPE.DATA_BASE:
         return { icon: html`<${generateIconTagName('icon-data-base')}></${generateIconTagName('icon-data-base')}>`, color: AVATAR_COLOR.AVATAR_YELLOW };
       case ICON_ITEM_TYPE.DECISION_TREE:
         return { icon: html`<${generateIconTagName('icon-decision-tree')}></${generateIconTagName('icon-decision-tree')}>`, color: AVATAR_COLOR.AVATAR_LIME };
       case ICON_ITEM_TYPE.DIAGRAM:
         return { icon: html`<${generateIconTagName('icon-diagram')}></${generateIconTagName('icon-diagram')}>`, color: AVATAR_COLOR.AVATAR_RED };
       case ICON_ITEM_TYPE.DOC:
         return { icon: html`<${generateIconTagName('icon-doc')}></${generateIconTagName('icon-doc')}>`, color: AVATAR_COLOR.AVATAR_BLUE };
       case ICON_ITEM_TYPE.DOCUMENT_BLANK:
         return { icon: html`<${generateIconTagName('icon-document-blank')}></${generateIconTagName('icon-document-blank')}>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.DOCUMENT_EXPORT:
         return { icon: html`<${generateIconTagName('icon-document-export')}></${generateIconTagName('icon-document-export')}>`, color: AVATAR_COLOR.AVATAR_BLUE };
       case ICON_ITEM_TYPE.EVENT_SCHEDULE:
         return { icon: html`<${generateIconTagName('icon-event-schedule')}></${generateIconTagName('icon-event-schedule')}>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.EVENT_WARNING:
         return { icon: html`<${generateIconTagName('icon-event-warning')}></${generateIconTagName('icon-event-warning')}>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.FLOW_DATA:
         return { icon: html`<${generateIconTagName('icon-flow-data')}></${generateIconTagName('icon-flow-data')}>`, color: AVATAR_COLOR.AVATAR_LIME };
       case ICON_ITEM_TYPE.FOLDER:
         return { icon: html`<${generateIconTagName('icon-folder')}></${generateIconTagName('icon-folder')}>`, color: AVATAR_COLOR.AVATAR_YELLOW };
       case ICON_ITEM_TYPE.FOLDER_DETAILS:
         return { icon: html`<${generateIconTagName('icon-folder-details')}></${generateIconTagName('icon-folder-details')}>`, color: AVATAR_COLOR.AVATAR_RED };
       case ICON_ITEM_TYPE.FOLDER_DETAILS_1:
         return { icon: html`<${generateIconTagName('icon-folder-details')}></${generateIconTagName('icon-folder-details')}>`, color: AVATAR_COLOR.AVATAR_RED };
       case ICON_ITEM_TYPE.FOLDER_DETAILS_2:
         return { icon: html`<${generateIconTagName('icon-folder-details')}></${generateIconTagName('icon-folder-details')}>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.FOLDER_DETAILS_3:
         return { icon: html`<${generateIconTagName('icon-folder-details')}></${generateIconTagName('icon-folder-details')}>`, color: AVATAR_COLOR.AVATAR_ORANGE };
       case ICON_ITEM_TYPE.GIF:
         return { icon: html`<${generateIconTagName('icon-gif')}></${generateIconTagName('icon-gif')}>`, color: AVATAR_COLOR.AVATAR_INDIGO };
       case ICON_ITEM_TYPE.HTML:
         return { icon: html`<${generateIconTagName('icon-html')}></${generateIconTagName('icon-html')}>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.IMAGE:
         return { icon: html`<${generateIconTagName('icon-image')}></${generateIconTagName('icon-image')}>`, color: AVATAR_COLOR.AVATAR_INDIGO };
       case ICON_ITEM_TYPE.IMAGE_1:
         return { icon: html`<${generateIconTagName('icon-image')}></${generateIconTagName('icon-image')}>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.INVENTORY_MANAGEMENT:
         return { icon: html`<${generateIconTagName('icon-inventory-management')}></${generateIconTagName('icon-inventory-management')}>`, color: AVATAR_COLOR.AVATAR_YELLOW };
       case ICON_ITEM_TYPE.LAYERS_EXTERNAL:
         return { icon: html`<${generateIconTagName('icon-layers-external')}></${generateIconTagName('icon-layers-external')}>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.LICENSE_DRAFT:
         return { icon: html`<${generateIconTagName('icon-license-draft')}></${generateIconTagName('icon-license-draft')}>`, color: AVATAR_COLOR.AVATAR_YELLOW };
       case ICON_ITEM_TYPE.LICENSE_GLOBAL:
         return { icon: html`<${generateIconTagName('icon-license-global')}></${generateIconTagName('icon-license-global')}>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.LIST_BOXES:
         return { icon: html`<${generateIconTagName('icon-list-boxes')}></${generateIconTagName('icon-list-boxes')}>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.LIST_DROPDOWN:
         return { icon: html`<${generateIconTagName('icon-list-dropdown')}></${generateIconTagName('icon-list-dropdown')}>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.MAIL_ALL:
         return { icon: html`<${generateIconTagName('icon-mail-all')}></${generateIconTagName('icon-mail-all')}>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.MENU:
         return { icon: html`<${generateIconTagName('icon-menu')}></${generateIconTagName('icon-menu')}>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.NOTEBOOK_REFERENCE:
         return { icon: html`<${generateIconTagName('icon-notebook-reference')}></${generateIconTagName('icon-notebook-reference')}>`, color: AVATAR_COLOR.AVATAR_YELLOW };
       case ICON_ITEM_TYPE.PAGE_ELEMENTS_RICH_TEXT:
         return { icon: html`<${generateIconTagName('icon-page-elements-rich-text')}></${generateIconTagName('icon-page-elements-rich-text')}>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.PAGE_ELEMENTS_SHORT_TEXT:
         return { icon: html`<${generateIconTagName('icon-page-elements-short-text')}></${generateIconTagName('icon-page-elements-short-text')}>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.PAGE_ELEMENTS_TEXT:
         return { icon: html`<${generateIconTagName('icon-page-elements-text')}></${generateIconTagName('icon-page-elements-text')}>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.PAGE_SCROLL:
         return { icon: html`<${generateIconTagName('icon-page-scroll')}></${generateIconTagName('icon-page-scroll')}>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.PARENT_CHILD:
         return { icon: html`<${generateIconTagName('icon-parent-child')}></${generateIconTagName('icon-parent-child')}>`, color: AVATAR_COLOR.AVATAR_BLUE };
       case ICON_ITEM_TYPE.PDF:
         return { icon: html`<${generateIconTagName('icon-pdf')}></${generateIconTagName('icon-pdf')}>`, color: AVATAR_COLOR.AVATAR_RED };
       case ICON_ITEM_TYPE.PORTFOLIO:
         return { icon: html`<${generateIconTagName('icon-portfolio')}></${generateIconTagName('icon-portfolio')}>`, color: AVATAR_COLOR.AVATAR_YELLOW };
       case ICON_ITEM_TYPE.PPT:
         return { icon: html`<${generateIconTagName('icon-ppt')}></${generateIconTagName('icon-ppt')}>`, color: AVATAR_COLOR.AVATAR_ORANGE };
       case ICON_ITEM_TYPE.PPTX:
         return { icon: html`<${generateIconTagName('icon-ppt')}></${generateIconTagName('icon-ppt')}>`, color: AVATAR_COLOR.AVATAR_ORANGE };
       case ICON_ITEM_TYPE.REMINDER:
         return { icon: html`<${generateIconTagName('icon-reminder')}></${generateIconTagName('icon-reminder')}>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.SCRIPT:
         return { icon: html`<${generateIconTagName('icon-script')}></${generateIconTagName('icon-script')}>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.SEARCH_LOCATE:
         return { icon: html`<${generateIconTagName('icon-search-locate')}></${generateIconTagName('icon-search-locate')}>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.SUBFLOW:
         return { icon: html`<${generateIconTagName('icon-subflow')}></${generateIconTagName('icon-subflow')}>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.TAG_GROUP:
         return { icon: html`<${generateIconTagName('icon-tag-group')}></${generateIconTagName('icon-tag-group')}>`, color: AVATAR_COLOR.AVATAR_PINK };
       case ICON_ITEM_TYPE.TAG:
         return { icon: html`<${generateIconTagName('icon-tag')}></${generateIconTagName('icon-tag')}>`, color: AVATAR_COLOR.AVATAR_PINK };
       case ICON_ITEM_TYPE.TEMPLATE:
         return { icon: html`<${generateIconTagName('icon-template')}></${generateIconTagName('icon-template')}>`, color: AVATAR_COLOR.AVATAR_ORANGE };
       case ICON_ITEM_TYPE.TEMPLATE_1:
         return { icon: html`<${generateIconTagName('icon-template')}></${generateIconTagName('icon-template')}>`, color: AVATAR_COLOR.AVATAR_ORANGE };
       case ICON_ITEM_TYPE.TEXT_LINK:
         return { icon: html`<${generateIconTagName('icon-text-link')}></${generateIconTagName('icon-text-link')}>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.TIF:
         return { icon: html`<${generateIconTagName('icon-tif')}></${generateIconTagName('icon-tif')}>`, color: AVATAR_COLOR.AVATAR_INDIGO };
       case ICON_ITEM_TYPE.USER_PROFILE:
         return { icon: html`<${generateIconTagName('icon-user-profile')}></${generateIconTagName('icon-user-profile')}>`, color: AVATAR_COLOR.AVATAR_YELLOW };
       case ICON_ITEM_TYPE.USER_PROFILE_ALT:
         return { icon: html`<${generateIconTagName('icon-user-profile-alt')}></${generateIconTagName('icon-user-profile-alt')}>`, color: AVATAR_COLOR.AVATAR_YELLOW };
       case ICON_ITEM_TYPE.VIDEO:
         return { icon: html`<${generateIconTagName('icon-video')}></${generateIconTagName('icon-video')}>`, color: AVATAR_COLOR.AVATAR_PINK };
       case ICON_ITEM_TYPE.XLS:
         return { icon: html`<${generateIconTagName('icon-xls')}></${generateIconTagName('icon-xls')}>`, color: AVATAR_COLOR.AVATAR_LIME };
       case ICON_ITEM_TYPE.XLSX:
         return { icon: html`<${generateIconTagName('icon-xls')}></${generateIconTagName('icon-xls')}>`, color: AVATAR_COLOR.AVATAR_LIME };
       default:
         return { icon: html``, color: AVATAR_COLOR.AVATAR_DEFAULT_COLOR };;
     }
   }

   render() {
     return html`
        <${ENCHANTED_AVATAR_TAG}
          data-testId="enchanted-item-type-avatar"
          variant=${this.imageUrl && this.itemType === ICON_ITEM_TYPE.IMAGE ? AVATAR_VARIANT.AVATAR_IMG : AVATAR_VARIANT.AVATAR_ICON_TEMPLATE}
          type=${AVATAR_TYPE.AVATAR_ROUNDED}
          .iconTemplate=${this.getSvgIcon(this.itemType).icon}
          imgUrl="${this.imageUrl}"
          color="${this.getSvgIcon(this.itemType).color}"
          exportparts="${ITEM_TYPE_AVATAR_EXPORT_PARTS}"
        ></${ENCHANTED_AVATAR_TAG}>
      `;
   }
}

if (!customElements.get(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME)) {
  customElements.define(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME, EnchantedItemTypeAvatar);
} else {
  debug('Component (%s) is currently registered and not possible to registrate again.', ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME);
}
