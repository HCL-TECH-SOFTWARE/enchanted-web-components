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
import { html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

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

 @customElement('enchanted-item-type-avatar')
export class EnchantedItemTypeAvatar extends EnchantedAcBaseElement {
 
   @property({ type: String }) itemType = '';

   @property({ type: String }) imageUrl = '';
   
   private getSvgIcon(path: string): {icon: TemplateResult | String, color: AVATAR_COLOR} {
     switch (path) {
       case ICON_ITEM_TYPE.APPLICATION:
         return { icon: html`<icon-application></icon-application>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.BLOG:
         return { icon: html`<icon-blog></icon-blog>`, color: AVATAR_COLOR.AVATAR_PURPLE };
       case ICON_ITEM_TYPE.CATALOG:
         return { icon: html`<icon-catalog></icon-catalog>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.CHARACTER_WHOLE_NUMBER:
         return { icon: html`<icon-character-whole-number></icon-character-whole-number>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.COLLABORATE:
         return { icon: html`<icon-collaborate></icon-collaborate>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.CONTENT_ITEM:
         return { icon: html`<icon-content-item></icon-content-item>`, color: AVATAR_COLOR.AVATAR_BLUE };
       case ICON_ITEM_TYPE.COPY_FILE:
         return { icon: html`<icon-copy-file></icon-copy-file>`, color: AVATAR_COLOR.AVATAR_BLUE };
       case ICON_ITEM_TYPE.DATA_ANALYTICS:
         return { icon: html`<icon-data-analytics></icon-data-analytics>`, color: AVATAR_COLOR.AVATAR_YELLOW };
       case ICON_ITEM_TYPE.DATA_BASE:
         return { icon: html`<icon-data-base></icon-data-base>`, color: AVATAR_COLOR.AVATAR_YELLOW };
       case ICON_ITEM_TYPE.DECISION_TREE:
         return { icon: html`<icon-decision-tree></icon-decision-tree>`, color: AVATAR_COLOR.AVATAR_LIME };
       case ICON_ITEM_TYPE.DIAGRAM:
         return { icon: html`<icon-diagram></icon-diagram>`, color: AVATAR_COLOR.AVATAR_RED };
       case ICON_ITEM_TYPE.DOC:
         return { icon: html`<icon-doc></icon-doc>`, color: AVATAR_COLOR.AVATAR_BLUE };
       case ICON_ITEM_TYPE.DOCUMENT_BLANK:
         return { icon: html`<icon-document-blank></icon-document-blank>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.DOCUMENT_EXPORT:
         return { icon: html`<icon-document-export></icon-document-export>`, color: AVATAR_COLOR.AVATAR_BLUE };
       case ICON_ITEM_TYPE.EVENT_SCHEDULE:
         return { icon: html`<icon-event-schedule></icon-event-schedule>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.EVENT_WARNING:
         return { icon: html`<icon-event-warning></icon-event-warning>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.FLOW_DATA:
         return { icon: html`<icon-flow-data></icon-flow-data>`, color: AVATAR_COLOR.AVATAR_LIME };
       case ICON_ITEM_TYPE.FOLDER:
         return { icon: html`<icon-folder></icon-folder>`, color: AVATAR_COLOR.AVATAR_YELLOW };
       case ICON_ITEM_TYPE.FOLDER_DETAILS:
         return { icon: html`<icon-folder-details></icon-folder-details>`, color: AVATAR_COLOR.AVATAR_RED };
       case ICON_ITEM_TYPE.FOLDER_DETAILS_1:
         return { icon: html`<icon-folder-details></icon-folder-details>`, color: AVATAR_COLOR.AVATAR_RED };
       case ICON_ITEM_TYPE.FOLDER_DETAILS_2:
         return { icon: html`<icon-folder-details></icon-folder-details>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.FOLDER_DETAILS_3:
         return { icon: html`<icon-folder-details></icon-folder-details>`, color: AVATAR_COLOR.AVATAR_ORANGE };
       case ICON_ITEM_TYPE.GIF:
         return { icon: html`<icon-gif></icon-gif>`, color: AVATAR_COLOR.AVATAR_INDIGO };
       case ICON_ITEM_TYPE.HTML:
         return { icon: html`<icon-html></icon-html>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.IMAGE:
         return { icon: html`<icon-image></icon-image>`, color: AVATAR_COLOR.AVATAR_INDIGO };
       case ICON_ITEM_TYPE.IMAGE_1:
         return { icon: html`<icon-image></icon-image>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.INVENTORY_MANAGEMENT:
         return { icon: html`<icon-inventory-management></icon-inventory-management>`, color: AVATAR_COLOR.AVATAR_YELLOW };
       case ICON_ITEM_TYPE.LAYERS_EXTERNAL:
         return { icon: html`<icon-layers-external></icon-layers-external>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.LICENSE_DRAFT:
         return { icon: html`<icon-license-draft></icon-license-draft>`, color: AVATAR_COLOR.AVATAR_YELLOW };
       case ICON_ITEM_TYPE.LICENSE_GLOBAL:
         return { icon: html`<icon-license-global></icon-license-global>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.LIST_BOXES:
         return { icon: html`<icon-list-boxes></icon-list-boxes>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.LIST_DROPDOWN:
         return { icon: html`<icon-page-elements-text></icon-page-elements-text>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.MAIL_ALL:
         return { icon: html`<icon-mail-all></icon-mail-all>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.MENU:
         return { icon: html`<icon-menu></icon-menu>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.NOTEBOOK_REFERENCE:
         return { icon: html`<icon-notebook-reference></icon-notebook-reference>`, color: AVATAR_COLOR.AVATAR_YELLOW };
       case ICON_ITEM_TYPE.PAGE_ELEMENTS_RICH_TEXT:
         return { icon: html`<icon-page-elements-rich-text></icon-page-elements-rich-text>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.PAGE_ELEMENTS_SHORT_TEXT:
         return { icon: html`<icon-page-elements-short-text></icon-page-elements-short-text>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.PAGE_ELEMENTS_TEXT:
         return { icon: html`<icon-page-elements-text></icon-page-elements-text>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.PAGE_SCROLL:
         return { icon: html`<icon-page-scroll></icon-page-scroll>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.PARENT_CHILD:
         return { icon: html`<icon-parent-child></icon-parent-child>`, color: AVATAR_COLOR.AVATAR_BLUE };
       case ICON_ITEM_TYPE.PDF:
         return { icon: html`<icon-pdf></icon-pdf>`, color: AVATAR_COLOR.AVATAR_RED };
       case ICON_ITEM_TYPE.PORTFOLIO:
         return { icon: html`<icon-portfolio></icon-portfolio>`, color: AVATAR_COLOR.AVATAR_YELLOW };
       case ICON_ITEM_TYPE.PPT:
         return { icon: html`<icon-ppt></icon-ppt>`, color: AVATAR_COLOR.AVATAR_ORANGE };
       case ICON_ITEM_TYPE.PPTX:
         return { icon: html`<icon-ppt></icon-ppt>`, color: AVATAR_COLOR.AVATAR_ORANGE };
       case ICON_ITEM_TYPE.REMINDER:
         return { icon: html`<icon-reminder></icon-reminder>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.SCRIPT:
         return { icon: html`<icon-script></icon-script>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.SEARCH_LOCATE:
         return { icon: html`<icon-search-locate></icon-search-locate>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.SUBFLOW:
         return { icon: html`<icon-subflow></icon-subflow>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.TAG_GROUP:
         return { icon: html`<icon-tag-group></icon-tag-group>`, color: AVATAR_COLOR.AVATAR_PINK };
       case ICON_ITEM_TYPE.TAG:
         return { icon: html`<icon-tag></icon-tag>`, color: AVATAR_COLOR.AVATAR_PINK };
       case ICON_ITEM_TYPE.TEMPLATE:
         return { icon: html`<icon-template></icon-template>`, color: AVATAR_COLOR.AVATAR_ORANGE };
       case ICON_ITEM_TYPE.TEMPLATE_1:
         return { icon: html`<icon-template></icon-template>`, color: AVATAR_COLOR.AVATAR_ORANGE };
       case ICON_ITEM_TYPE.TEXT_LINK:
         return { icon: html`<icon-text-link></icon-text-link>`, color: AVATAR_COLOR.AVATAR_TEAL };
       case ICON_ITEM_TYPE.TIF:
         return { icon: html`<icon-tif></icon-tif>`, color: AVATAR_COLOR.AVATAR_INDIGO };
       case ICON_ITEM_TYPE.USER_PROFILE:
         return { icon: html`<icon-user-profile></icon-user-profile>`, color: AVATAR_COLOR.AVATAR_YELLOW };
       case ICON_ITEM_TYPE.USER_PROFILE_ALT:
         return { icon: html`<icon-user-profile-alt></icon-user-profile-alt>`, color: AVATAR_COLOR.AVATAR_YELLOW };
       case ICON_ITEM_TYPE.VIDEO:
         return { icon: html`<icon-video></icon-video>`, color: AVATAR_COLOR.AVATAR_PINK };
       case ICON_ITEM_TYPE.XLS:
         return { icon: html`<icon-xls></icon-xls>`, color: AVATAR_COLOR.AVATAR_LIME };
       case ICON_ITEM_TYPE.XLSX:
         return { icon: html`<icon-xls></icon-xls>`, color: AVATAR_COLOR.AVATAR_LIME };
       default:
         return { icon: html``, color: AVATAR_COLOR.AVATAR_DEFAULT_COLOR };;
     }
   }

   render() {
     return html`
        <enchanted-avatar
          data-testId="enchanted-item-type-avatar"
          variant=${this.imageUrl && this.itemType === ICON_ITEM_TYPE.IMAGE ? AVATAR_VARIANT.AVATAR_IMG : AVATAR_VARIANT.AVATAR_ICON_TEMPLATE}
          type=${AVATAR_TYPE.AVATAR_ROUNDED}
          .iconTemplate=${this.getSvgIcon(this.itemType).icon}
          imgUrl="${this.imageUrl}"
          color="${this.getSvgIcon(this.itemType).color}"
          exportparts="${ITEM_TYPE_AVATAR_EXPORT_PARTS}"
        />
      `;
   }
}
  
 declare global {
   interface HTMLElementTagNameMap {
     'enchanted-item-type-avatar': EnchantedItemTypeAvatar
   }
 }
