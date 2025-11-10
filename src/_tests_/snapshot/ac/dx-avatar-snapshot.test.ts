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
import { $, browser } from '@wdio/globals';
import { html, render } from 'lit';

// Component imports
import '../../../components/ac/dx-avatar';

// Helper imports
import { AVATAR_COLOR, AVATAR_TYPE, AVATAR_VARIANT } from '../../../types/cssClassEnums';
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

// Icon imports
import addIcon from '../../assets/add-icon.svg';
import placeHolderImage from '../../assets/test-avatar-image.jpg';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/folder';

function renderAvatarVariant() {
  return html`
    <div data-testid="dx-avatar-layout" style="display: flex; gap: 10px; padding: 10px 5px; width: 350px; height: 1600px;">
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <div style="display: flex; flex-direction: column; gap: 5px;">
          <label>Letter and Rounded</label>
          <dx-avatar variant=${AVATAR_VARIANT.AVATAR_LETTER} type=${AVATAR_TYPE.AVATAR_ROUNDED} avatarText="Abc"></dx-avatar>
        </div>

        <div style="display: flex; flex-direction: column; gap: 5px;">
          <label>Letter and Circular</label>
          <dx-avatar variant=${AVATAR_VARIANT.AVATAR_LETTER} type=${AVATAR_TYPE.AVATAR_CIRCULAR} avatarText="Abc"></dx-avatar>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 10px;">
        <div style="display: flex; flex-direction: column; gap: 5px;">
          <label>No iconUrl and type</label>
          <dx-avatar variant=${AVATAR_VARIANT.AVATAR_ICON}></dx-avatar>
        </div>

        <div style="display: flex; flex-direction: column; gap: 5px;">
          <label>No iconUrl</label>
          <dx-avatar variant=${AVATAR_VARIANT.AVATAR_ICON} type=${AVATAR_TYPE.AVATAR_ROUNDED}></dx-avatar>
        </div>

        <div style="display: flex; flex-direction: column; gap: 5px;">
          <label>Icon and Rounded</label>
          <dx-avatar variant=${AVATAR_VARIANT.AVATAR_ICON} type=${AVATAR_TYPE.AVATAR_ROUNDED} iconUrl=${addIcon}></dx-avatar>
        </div>

        <div style="display: flex; flex-direction: column; gap: 5px;">
          <label>Icon and Circular</label>
          <dx-avatar variant=${AVATAR_VARIANT.AVATAR_ICON} type=${AVATAR_TYPE.AVATAR_CIRCULAR} iconUrl=${addIcon}></dx-avatar>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 10px;">
        <div style="display: flex; flex-direction: column; gap: 5px;">
          <label>No iconTemplate and type</label>
          <dx-avatar variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE}></dx-avatar>
        </div>

        <div style="display: flex; flex-direction: column; gap: 5px;">
          <label>No iconTemplate</label>
          <dx-avatar variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE} type=${AVATAR_TYPE.AVATAR_ROUNDED}></dx-avatar>
        </div>

        <div style="display: flex; flex-direction: column; gap: 5px;">
          <label>Icon and Rounded</label>
          <dx-avatar variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE} type=${AVATAR_TYPE.AVATAR_ROUNDED} .iconTemplate=${html`<icon-folder></icon-folder>`}></dx-avatar>
        </div>

        <div style="display: flex; flex-direction: column; gap: 5px;">
          <label>Icon and Circular</label>
          <dx-avatar variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE} type=${AVATAR_TYPE.AVATAR_CIRCULAR} .iconTemplate=${html`<icon-folder></icon-folder>`}></dx-avatar>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 10px;">
        <div style="display: flex; flex-direction: column; gap: 5px;">
          <label>No imgUrl and type</label>
          <dx-avatar variant=${AVATAR_VARIANT.AVATAR_IMG}></dx-avatar>
        </div>

        <div style="display: flex; flex-direction: column; gap: 5px;">
          <label>No imgUrl</label>
          <dx-avatar variant=${AVATAR_VARIANT.AVATAR_IMG} type=${AVATAR_TYPE.AVATAR_ROUNDED}></dx-avatar>
        </div>

        <div style="display: flex; flex-direction: column; gap: 5px;">
          <label>Image and Rounded</label>
          <dx-avatar variant=${AVATAR_VARIANT.AVATAR_IMG} type=${AVATAR_TYPE.AVATAR_ROUNDED} .imgUrl=${placeHolderImage}></dx-avatar>
        </div>

        <div style="display: flex; flex-direction: column; gap: 5px;">
          <label>Image and Circular</label>
          <dx-avatar variant=${AVATAR_VARIANT.AVATAR_IMG} type=${AVATAR_TYPE.AVATAR_CIRCULAR} .imgUrl=${placeHolderImage}></dx-avatar>
        </div>
      </div>
    </div>
  `;
}

function renderAvatarColor() {
  return html`
    <div data-testid="dx-avatar-layout" style="display: flex; gap: 10px; padding: 10px 5px; width: 350px; height: 1600px;">
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <div style="display: flex; flex-direction: column; gap: 5px;">
          <label>Default Color</label>
          <dx-avatar 
            variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE}
            type=${AVATAR_TYPE.AVATAR_ROUNDED}
            .iconTemplate=${html`<icon-folder></icon-folder>`}
            color=${AVATAR_COLOR.AVATAR_DEFAULT_COLOR}
          ></dx-avatar>
        </div>
        <div style="display: flex; flex-direction: column; gap: 5px;">
          <label>Red Color</label>
          <dx-avatar 
            variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE}
            type=${AVATAR_TYPE.AVATAR_ROUNDED}
            .iconTemplate=${html`<icon-folder></icon-folder>`}
            color=${AVATAR_COLOR.AVATAR_RED}
          ></dx-avatar>
        </div>
        <div style="display: flex; flex-direction: column; gap: 5px;">
          <label>Red Color</label>
          <dx-avatar 
            variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE}
            type=${AVATAR_TYPE.AVATAR_ROUNDED}
            .iconTemplate=${html`<icon-folder></icon-folder>`}
            color=${AVATAR_COLOR.AVATAR_ORANGE}
          ></dx-avatar>
        </div>
        <div style="display: flex; flex-direction: column; gap: 5px;">
          <label>Red Color</label>
          <dx-avatar 
            variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE}
            type=${AVATAR_TYPE.AVATAR_ROUNDED}
            .iconTemplate=${html`<icon-folder></icon-folder>`}
            color=${AVATAR_COLOR.AVATAR_YELLOW}
          ></dx-avatar>
        </div>
        <div style="display: flex; flex-direction: column; gap: 5px;">
          <label>Red Color</label>
          <dx-avatar 
            variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE}
            type=${AVATAR_TYPE.AVATAR_ROUNDED}
            .iconTemplate=${html`<icon-folder></icon-folder>`}
            color=${AVATAR_COLOR.AVATAR_LIME}
          ></dx-avatar>
        </div>
        <div style="display: flex; flex-direction: column; gap: 5px;">
          <label>Red Color</label>
          <dx-avatar 
            variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE}
            type=${AVATAR_TYPE.AVATAR_ROUNDED}
            .iconTemplate=${html`<icon-folder></icon-folder>`}
            color=${AVATAR_COLOR.AVATAR_GREEN}
          ></dx-avatar>
        </div>
        <div style="display: flex; flex-direction: column; gap: 5px;">
          <label>Red Color</label>
          <dx-avatar 
            variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE}
            type=${AVATAR_TYPE.AVATAR_ROUNDED}
            .iconTemplate=${html`<icon-folder></icon-folder>`}
            color=${AVATAR_COLOR.AVATAR_TEAL}
          ></dx-avatar>
        </div>
        <div style="display: flex; flex-direction: column; gap: 5px;">
          <label>Red Color</label>
          <dx-avatar 
            variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE}
            type=${AVATAR_TYPE.AVATAR_ROUNDED}
            .iconTemplate=${html`<icon-folder></icon-folder>`}
            color=${AVATAR_COLOR.AVATAR_BLUE}
          ></dx-avatar>
        </div>
        <div style="display: flex; flex-direction: column; gap: 5px;">
          <label>Red Color</label>
          <dx-avatar 
            variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE}
            type=${AVATAR_TYPE.AVATAR_ROUNDED}
            .iconTemplate=${html`<icon-folder></icon-folder>`}
            color=${AVATAR_COLOR.AVATAR_INDIGO}
          ></dx-avatar>
        </div>
        <div style="display: flex; flex-direction: column; gap: 5px;">
          <label>Red Color</label>
          <dx-avatar 
            variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE}
            type=${AVATAR_TYPE.AVATAR_ROUNDED}
            .iconTemplate=${html`<icon-folder></icon-folder>`}
            color=${AVATAR_COLOR.AVATAR_PURPLE}
          ></dx-avatar>
        </div>
        <div style="display: flex; flex-direction: column; gap: 5px;">
          <label>Red Color</label>
          <dx-avatar 
            variant=${AVATAR_VARIANT.AVATAR_ICON_TEMPLATE}
            type=${AVATAR_TYPE.AVATAR_ROUNDED}
            .iconTemplate=${html`<icon-folder></icon-folder>`}
            color=${AVATAR_COLOR.AVATAR_PINK}
          ></dx-avatar>
        </div>
      </div>
    </div>
  `;
}

describe('DxAvatar - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  it('DxAvatar - should capture Avatar component with different attributes - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(renderAvatarVariant(), document.body);
    let dxAvatar = await $('>>>div[data-testid="dx-avatar-layout"]');

    await browser.checkElement(dxAvatar, 'dx-avatar-snapshot-baseline-authoring');

    document.head.removeChild(link);
  });

  it('DxAvatar - should capture Avatar component with different colors - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(renderAvatarColor(), document.body);
    let dxAvatar = await $('>>>div[data-testid="dx-avatar-layout"]');

    await browser.checkElement(dxAvatar, 'dx-avatar-color-snapshot-baseline-authoring');

    document.head.removeChild(link);
  });
});
