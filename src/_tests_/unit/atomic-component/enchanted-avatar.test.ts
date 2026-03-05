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
import { $, expect } from '@wdio/globals';
import { nothing, render } from 'lit';
import { html } from 'lit/static-html.js';

// Component imports
import '../../../components/atomic-component/enchanted-avatar';

// Helper imports
import { AVATAR_COLOR, AVATAR_PARTS, AVATAR_TYPE, AVATAR_VARIANT } from '../../../types/cssClassEnums';
import { initSessionStorage } from '../../utils';
import { generateIconTagName, ENCHANTED_AVATAR_TAG, ENCHANTED_AVATAR_TAG_NAME } from '../../../components/tags';

describe(`${ENCHANTED_AVATAR_TAG_NAME} component testing`, () => {
  before(async () => {
    await initSessionStorage();
    render(nothing, document.body);
  });

  afterEach(() => {
    render(nothing, document.body);
  });

  it('should render without crashing', async () => {
    let component = document.createElement(ENCHANTED_AVATAR_TAG_NAME);
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    component.remove();
  });

  it('should remove component from document body and validate removal', async () => {
    let component = document.createElement(ENCHANTED_AVATAR_TAG_NAME);
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('validate default value of attributes', async () => {
    let component = document.createElement(ENCHANTED_AVATAR_TAG_NAME);
    document.body.appendChild(component);
    await expect(component).not.toHaveAttribute('variant');
    await expect(component).not.toHaveAttribute('imgUrl');
    await expect(component).not.toHaveAttribute('iconUrl');
    await expect(component).not.toHaveAttribute('avatarText');
    component.remove();
  });

  it('set and remove attributes and validate', async () => {
    let component = document.createElement(ENCHANTED_AVATAR_TAG_NAME);
    component.setAttribute('variant', AVATAR_VARIANT.AVATAR_ICON);
    document.body.appendChild(component);
    await expect($(component).getAttribute('variant')).not.toBeNull();
    await expect($(component)).toHaveAttribute('variant', AVATAR_VARIANT.AVATAR_ICON);
    component.remove();
  });

  it('should validate null for non-existent attributes', async () => {
    let component = document.createElement(ENCHANTED_AVATAR_TAG_NAME);
    await expect(component.getAttribute('nonExistentAttribute')).toBeNull();
    component.remove();
  });

  it('should render component with letter variant and validate', async () => {
    render(
      html`
        <${ENCHANTED_AVATAR_TAG}
          variant=${AVATAR_VARIANT.AVATAR_LETTER}
          type=${AVATAR_TYPE.AVATAR_ROUNDED}
          avatarText="Abc"
          imgUrl="testImageURL"
          iconUrl="testIconURL">
        ></${ENCHANTED_AVATAR_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('variant', AVATAR_VARIANT.AVATAR_LETTER);
    await expect(component).toHaveAttribute('avatarText', 'Abc');
    await expect(component).toHaveAttribute('imgUrl', 'testImageURL');
    await expect(component).toHaveAttribute('iconUrl', 'testIconURL');
    let divElement = await component.$('>>>div[data-testid="enchanted-avatar-div"]').getElement();
    let letterElement = await divElement.$('>>>span[data-testid="enchanted-avatar-letter"]').getElement();
    await expect(letterElement).toHaveText('Ab');
  });

  it('should render component with icon rounded variant and validate', async () => {
    render(
      html`
        <${ENCHANTED_AVATAR_TAG}
          variant=${AVATAR_VARIANT.AVATAR_ICON}
          type=${AVATAR_TYPE.AVATAR_ROUNDED}
          avatarText="Abc"
          imgUrl="testImageURL"
          iconUrl="testIconURL"
        ></${ENCHANTED_AVATAR_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('variant', AVATAR_VARIANT.AVATAR_ICON);
    await expect(component).toHaveAttribute('avatarText', 'Abc');
    await expect(component).toHaveAttribute('imgUrl', 'testImageURL');
    await expect(component).toHaveAttribute('iconUrl', 'testIconURL');
    let divElement = await component.$('>>>div[data-testid="enchanted-avatar-div"]').getElement();
    let iconElement = await divElement.$('>>>img[data-testid="enchanted-avatar-img"]').getElement();
    let iconUrl = await iconElement.getAttribute('src');
    await expect(iconUrl).toContain('testIconURL');
    await expect(iconElement).toHaveElementProperty('alt', AVATAR_PARTS.AVATAR_ICON_ROUNDED);
  });

  it('should render component with icon circular variant and validate', async () => {
    render(
      html`
        <${ENCHANTED_AVATAR_TAG}
          variant=${AVATAR_VARIANT.AVATAR_ICON}
          type=${AVATAR_TYPE.AVATAR_CIRCULAR}
          iconUrl="testIconURL">
        ></${ENCHANTED_AVATAR_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('variant', AVATAR_VARIANT.AVATAR_ICON);
    await expect(component).toHaveAttribute('iconUrl', 'testIconURL');
    let divElement = await component.$('>>>div[data-testid="enchanted-avatar-div-circular"]').getElement();
    let iconElement = await divElement.$('>>>img[data-testid="enchanted-avatar-img"]').getElement();
    let iconUrl = await iconElement.getAttribute('src');
    await expect(iconUrl).toContain('testIconURL');
    await expect(iconElement).toHaveElementProperty('alt', AVATAR_PARTS.AVATAR_ICON_CIRCULAR);
  });

  it('should render component with icon template, rounded, color and validate', async () => {
    render(
      html`
        <${ENCHANTED_AVATAR_TAG}
          variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE}
          type=${AVATAR_TYPE.AVATAR_ROUNDED}
          .iconTemplate=${html`<${generateIconTagName('icon-content-item')}></${generateIconTagName('icon-content-item')}>`}
          color="${AVATAR_COLOR.AVATAR_BLUE}">
        ></${ENCHANTED_AVATAR_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('variant', AVATAR_VARIANT.AVATAR_ICON_TEMPLATE);
    await expect(component).toHaveAttribute('type', AVATAR_TYPE.AVATAR_ROUNDED);
    await expect(component).toHaveAttribute('color', AVATAR_COLOR.AVATAR_BLUE);
    let divElement = await component.$('>>>div[data-testid="enchanted-avatar-div"]').getElement();
    let iconElement = await divElement.$('>>>span[data-testid="enchanted-avatar-icon-template"]').getElement();
    await expect(iconElement).toBeExisting();
  });

  it('should render component with icon template, circular and validate', async () => {
    render(
      html`
        <${ENCHANTED_AVATAR_TAG}
          variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE}
          type=${AVATAR_TYPE.AVATAR_CIRCULAR}
          .iconTemplate=${html`<${generateIconTagName('icon-content-item')}></${generateIconTagName('icon-content-item')}>`}
        ></${ENCHANTED_AVATAR_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('variant', AVATAR_VARIANT.AVATAR_ICON_TEMPLATE);
    await expect(component).toHaveAttribute('type', AVATAR_TYPE.AVATAR_CIRCULAR);
    let divElement = await component.$('>>>div[data-testid="enchanted-avatar-div-circular"]').getElement();
    let iconElement = await divElement.$('>>>span[data-testid="enchanted-avatar-icon-template"]').getElement();
    await expect(iconElement).toBeExisting();
  });

  it('should render component with selected css as per setting mode in circular variant', async () => {
    render(
      html`
        <${ENCHANTED_AVATAR_TAG}
          variant=${AVATAR_VARIANT.AVATAR_IMG}
          type=${AVATAR_TYPE.AVATAR_CIRCULAR}
          avatarText="Abc"
          imgUrl="testImageURL"
          iconUrl="testIconURL">
        ></${ENCHANTED_AVATAR_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('variant', AVATAR_VARIANT.AVATAR_IMG);
    await expect(component).toHaveAttribute('avatarText', 'Abc');
    await expect(component).toHaveAttribute('imgUrl', 'testImageURL');
    await expect(component).toHaveAttribute('iconUrl', 'testIconURL');
    let divElement = await component.$('>>>div[data-testid="enchanted-avatar-div-circular"]').getElement();
    let imageElement = await divElement.$('>>>img[data-testid="enchanted-avatar-img"]').getElement();
    let imageUrl = await imageElement.getAttribute('src');
    await expect(imageUrl).toContain('testImageURL');
    await expect(imageElement).toHaveElementProperty('alt', AVATAR_PARTS.AVATAR_IMAGE_CIRCULAR);
  });

  it('should render component with selected css as per setting mode in rounded variant', async () => {
    render(
      html`
        <${ENCHANTED_AVATAR_TAG}
          variant=${AVATAR_VARIANT.AVATAR_IMG}
          type=${AVATAR_TYPE.AVATAR_ROUNDED}
          imgUrl="testImageURL"
        ></${ENCHANTED_AVATAR_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_AVATAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('variant', AVATAR_VARIANT.AVATAR_IMG);
    await expect(component).toHaveAttribute('imgUrl', 'testImageURL');
    let divElement = await component.$('>>>div[data-testid="enchanted-avatar-div"]').getElement();
    let imageElement = await divElement.$('>>>img[data-testid="enchanted-avatar-img"]').getElement();
    let imageUrl = await imageElement.getAttribute('src');
    await expect(imageUrl).toContain('testImageURL');
    await expect(imageElement).toHaveElementProperty('alt', AVATAR_PARTS.AVATAR_IMAGE_ROUNDED);
  });
});
