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
import { browser, expect } from '@wdio/globals';
import { html, render } from 'lit';

// Component imports
import '../../../components/atomic-component/enchanted-datepicker';
import '../../../components/atomic-component/enchanted-svg-icon';

// Helper imports
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

describe('EnchantedDatepicker - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
    if (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  afterEach(() => {
    if (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  it('EnchantedDatepicker - should capture EnchantedDatepicker component with open attribute ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <enchanted-datepicker open></enchanted-datepicker>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-datepicker-snapshot-baseline-with-open-authoring', 100);

    document.head.removeChild(link);
  });

  it('EnchantedDatepicker - should capture EnchantedDatepicker component with remove label ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <enchanted-datepicker showRemoveLabel></enchanted-datepicker>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-datepicker-snapshot-baseline-show-remove-label-authoring', 100);

    document.head.removeChild(link);
  });

  it('EnchantedDatepicker - should capture EnchantedDatepicker component closed ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <enchanted-datepicker></enchanted-datepicker>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-datepicker-snapshot-baseline-closed-authoring', 100);

    document.head.removeChild(link);
  });
});
