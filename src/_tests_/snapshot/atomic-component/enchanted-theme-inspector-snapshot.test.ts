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
import { $, browser, expect } from '@wdio/globals';
import { html, render } from 'lit';

// Component imports
import '../../../components/atomic-component/enchanted-theme-inspector';

// Helper imports
import { SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

describe('EnchantedThemeInspector - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  afterEach(() => {
    document.body.replaceChildren();
  });

  it('EnchantedThemeInspector - should capture Theme Inspector component - Enchanted Theme', async () => {
    render(
      html`
        <enchanted-theme-inspector></enchanted-theme-inspector>
      `,
      document.body
    );
    const component = await $('enchanted-theme-inspector');
    await component.waitForDisplayed({ timeout: 8000 });
    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-theme-inspector-snapshot-baseline', 100);
  });
});
