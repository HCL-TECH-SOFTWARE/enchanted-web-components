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
import { nothing, render } from 'lit';
import { html } from 'lit/static-html.js';
import { $, expect } from '@wdio/globals';

// Component imports
import '../../../components/atomic-component/enchanted-item-type-avatar';

// Helper imports
import { ICON_ITEM_TYPE } from '../../../types/enchanted-svg-icon';
import { AVATAR_COLOR } from '../../../types/cssClassEnums';
import { initSessionStorage } from '../../utils';
import { ENCHANTED_AVATAR_TAG_NAME, ENCHANTED_ITEM_TYPE_AVATAR_TAG, ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME } from '../../../components/tags';

describe(`${ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME} component testing`, () => {
  before(async () => {
    await initSessionStorage();
    render(nothing, document.body);
  });

  afterEach(() => {
    render(nothing, document.body);
  });

  it('should render without crashing', async () => {
    let component = document.createElement(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME);
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('should remove component from document body and validate removal', async () => {
    let component = document.createElement(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME);
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('should render imageUrl directly to enchanted-avatar if imageUrl is provided', async () => {
    const testImageUrl = 'https://example.com/custom-image.png';

    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.CONTENT_ITEM} imageUrl=${testImageUrl} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('imageUrl', testImageUrl);
  });

  it('should not render imageUrl directly to enchanted-avatar if imageUrl is empty', async () => {
    const testImageUrl = '';

    render(
      html`
        <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.CONTENT_ITEM} imageUrl=${testImageUrl} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.CONTENT_ITEM);
    expect(component).toHaveAttribute('imageUrl', ICON_ITEM_TYPE.CONTENT_ITEM);
  });

  it('should render property itemTyp VIDEO', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.VIDEO} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.VIDEO);
  });

  it('should render property itemType CONTENT', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.CONTENT_ITEM} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.CONTENT_ITEM);
  });

  it('should render property itemType CATALOG', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.CATALOG} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.CATALOG);
  });

  it('should render property itemType BLOG', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.BLOG} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.BLOG);
  });

  it('should render property itemType CHARACTER WHOLE NUMBER', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.CHARACTER_WHOLE_NUMBER} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.CHARACTER_WHOLE_NUMBER);
  });

  it('should render property itemType SITE AREA', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.PARENT_CHILD} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.PARENT_CHILD);
  });

  it('should render property itemType RICH TEXT', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.PAGE_ELEMENTS_RICH_TEXT} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.PAGE_ELEMENTS_RICH_TEXT);
  });

  it('should render property itemType IMAGE', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.IMAGE} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.IMAGE);
  });

  it('should render property itemType PAGE_SCROLL', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.PAGE_SCROLL} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.PAGE_SCROLL);
  });

  it('should render property itemType PORTFOLIO', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.PORTFOLIO} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.PORTFOLIO);
  });

  it('should render property itemType PPT', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.PPT} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.PPT);
  });

  it('should render property itemType PPTX', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.PPTX} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.PPTX);
  });

  it('should render property itemType DIAGRAM', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.DIAGRAM} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.DIAGRAM);
  });

  it('should render property itemType HTML', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.HTML} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.HTML);
  });

  it('should render property itemType DECISION TREE', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.DECISION_TREE} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.DECISION_TREE);
  });

  it('should render property itemType INVENTORY_MANAGEMENT', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.INVENTORY_MANAGEMENT} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.INVENTORY_MANAGEMENT);
  });

  it('should render property itemType LIST DROPDOWN', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.LIST_DROPDOWN} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.LIST_DROPDOWN);
  });

  it('should render property itemType TAG GROUP', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.TAG_GROUP} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.TAG_GROUP);
  });

  it('should render property itemType SCRIPT', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.SCRIPT} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.SCRIPT);
  });

  it('should render property itemType SHORT TEXT', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.PAGE_ELEMENTS_SHORT_TEXT} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.PAGE_ELEMENTS_SHORT_TEXT);
  });

  it('should render property itemType COLLABORATE', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.COLLABORATE} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.COLLABORATE);
  });

  it('should render property itemType DECISION TREE', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.DECISION_TREE} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.DECISION_TREE);
  });

  it('should render property itemType TEXT LINK', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.TEXT_LINK} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.TEXT_LINK);
  });
  it('should render property itemType TIF', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.TIF} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.TIF);
  });
  it('should render property itemType COPY FILE', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.COPY_FILE} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.COPY_FILE);
  });

  it('should render property itemType ELEMENTS TEXT', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.PAGE_ELEMENTS_TEXT} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.PAGE_ELEMENTS_TEXT);
  });

  it('should render property itemType NOTEBOOK REFERENCE', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.NOTEBOOK_REFERENCE} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.NOTEBOOK_REFERENCE);
  });

  it('should render property itemType MAIL ALL', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.MAIL_ALL} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.MAIL_ALL);
  });

  it('should render property itemType USER PROFILE ALT', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.USER_PROFILE_ALT} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.USER_PROFILE_ALT);
  });

  it('should render property itemType LICENSE GLOBAL', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.LICENSE_GLOBAL} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.LICENSE_GLOBAL);
  });

  it('should render property itemType USER PROFILE', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.USER_PROFILE} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.USER_PROFILE);
  });

  it('should render property itemType DATA ANALYTICS', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.DATA_ANALYTICS} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.DATA_ANALYTICS);
  });

  it('should render property itemType REMINDER', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.REMINDER} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.REMINDER);
  });

  it('should render property itemType LICENSE DRAFT', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.LICENSE_DRAFT} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.LICENSE_DRAFT);
  });

  it('should render property itemType EVENT WARNING', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.EVENT_WARNING} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.EVENT_WARNING);
  });

  it('should render property itemType LAYERS EXTERNAL', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.LAYERS_EXTERNAL} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.LAYERS_EXTERNAL);
  });

  it('should render property itemType SUBFLOW', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.SUBFLOW} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.SUBFLOW);
  });

  it('should render property itemType XLS', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.XLS} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.XLS);
  });

  it('should render property itemType XLSX', async () => {
    render(
      html`
         <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.XLSX} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.XLSX);
  });

  it('should render property itemType CONTENT_ITEM with the correct color', async () => {
    render(
      html`
        <${ENCHANTED_ITEM_TYPE_AVATAR_TAG} itemType=${ICON_ITEM_TYPE.CONTENT_ITEM} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    expect(component).toHaveAttribute('itemType', ICON_ITEM_TYPE.CONTENT_ITEM);

    let avatarElement = await component.$(`>>>${ENCHANTED_AVATAR_TAG_NAME}[data-testid="enchanted-item-type-avatar"]`).getElement();
    expect(avatarElement).toHaveAttribute('color', AVATAR_COLOR.AVATAR_BLUE);
    let divElement = await avatarElement.$('>>>div[data-testid="enchanted-avatar-div"]').getElement();
    let iconElement = await divElement.$('>>>span[data-testid="enchanted-avatar-icon-template"]').getElement();
    await expect(iconElement).toBeExisting();
  });

});
