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
import '../../../components/atomic-component/enchanted-dialog';

// Helper imports
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

const localization: Map<string, string> = new Map<string, string>();
localization.set('generic.label', 'Label');

describe('EnchantedDialog - Snapshot testing', () => {
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

  it('EnchantedDialog - should capture EnchantedDialog component with open attribute - Authoring ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <enchanted-dialog open .localization=${localization}></enchanted-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-dialog-snapshot-baseline-with-open-authoring', 100);

    document.head.removeChild(link);
  });

  it('EnchantedDialog - should capture EnchantedDialog component with title attribute - Authoring ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <enchanted-dialog title="Test title" open .localization=${localization}></enchanted-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-dialog-snapshot-baseline-with-title-attribute-authoring', 100);

    document.head.removeChild(link);
  });

  it('EnchantedDialog - should capture EnchantedDialog component with title and content - Authoring ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <enchanted-dialog title="Test title" open .localization=${localization}>
            <div slot="content">
              <label>Dialog Content</label>
            </div>
          </enchanted-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-dialog-snapshot-baseline-with-title-and-content-authoring', 100);

    document.head.removeChild(link);
  });

  it('EnchantedDialog - should capture EnchantedDialog component with overrideTitle attribute - Authoring ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <enchanted-dialog open overrideTitle .localization=${localization}>
            <div slot="title">
              <label style="color: #0066B0; margin: 5px;">Override Title</label>
            </div>
          </enchanted-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-dialog-snapshot-baseline-with-overrideTitle-authoring', 100);

    document.head.removeChild(link);
  });

  it('EnchantedDialog - should capture EnchantedDialog component with footer - Authoring ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <enchanted-dialog open .localization=${localization}>
            <div slot="footer">
              <enchanted-authoring-dialog-footer />
            </div>
          </enchanted-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-dialog-snapshot-baseline-with-footer-authoring', 100);

    document.head.removeChild(link);
  });

  it('EnchantedDialog - should capture EnchantedDialog component with md size', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <enchanted-dialog open size="md" .localization=${localization}></enchanted-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-dialog-snapshot-baseline-with-md-size', 100);

    document.head.removeChild(link);
  });

  it('EnchantedDialog - should capture EnchantedDialog component with lg size', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <enchanted-dialog open size="lg" .localization=${localization}></enchanted-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-dialog-snapshot-baseline-with-lg-size', 100);

    document.head.removeChild(link);
  });

  it('EnchantedDialog - should capture EnchantedDialog component with sm size', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <enchanted-dialog open size="sm" .localization=${localization}></enchanted-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-dialog-snapshot-baseline-with-sm-size', 100);

    document.head.removeChild(link);
  });

  it('EnchantedDialog - should capture EnchantedDialog component with xs size', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <enchanted-dialog open size="xs" .localization=${localization}></enchanted-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-dialog-snapshot-baseline-with-xs-size', 100);

    document.head.removeChild(link);
  });

  it('EnchantedDialog - should capture EnchantedDialog component with xl size', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <enchanted-dialog open size="xl" .localization=${localization}></enchanted-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-dialog-snapshot-baseline-with-xl-size', 100);

    document.head.removeChild(link);
  });

  it('EnchantedDialog - should capture EnchantedDialog component with chat size', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <enchanted-dialog open size="chat" .localization=${localization}></enchanted-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-dialog-snapshot-baseline-with-chat-size', 100);

    document.head.removeChild(link);
  });

  it('EnchantedDialog - should capture EnchantedDialog component with removeBorder attribute', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <enchanted-dialog open removeBorder .localization=${localization}>
            <div slot="content">
              <label>Content without border</label>
            </div>
            <div slot="footer">
              <enchanted-authoring-dialog-footer />
            </div>
          </enchanted-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-dialog-snapshot-baseline-with-removeBorder', 100);

    document.head.removeChild(link);
  });

  it('EnchantedDialog - should capture EnchantedDialog component with pagination slot', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <enchanted-dialog open title="Dialog with Pagination" .localization=${localization}>
            <div slot="content">
              <label>Content with pagination</label>
            </div>
            <div slot="pagination">
              <enchanted-table-pagination />
            </div>
          </enchanted-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-dialog-snapshot-baseline-with-pagination', 100);

    document.head.removeChild(link);
  });

  it('EnchantedDialog - should capture EnchantedDialog component with all slots', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <enchanted-dialog open title="Complete Dialog" .localization=${localization}>
            <div slot="content">
              <label>This is the main content area</label>
            </div>
            <div slot="pagination">
              <enchanted-table-pagination />
            </div>
            <div slot="footer">
              <enchanted-authoring-dialog-footer />
            </div>
          </enchanted-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-dialog-snapshot-baseline-with-all-slots', 100);

    document.head.removeChild(link);
  });

  it('EnchantedDialog - should capture EnchantedDialog component with overrideTitle and content', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <enchanted-dialog open overrideTitle .localization=${localization}>
            <div slot="title">
              <label style="color: #0066B0; margin: 5px;">Custom Title with Close</label>
              <icon-close color="rgba(0, 0, 0, 0.60)" size="20"></icon-close>
            </div>
            <div slot="content">
              <label>Custom content area</label>
            </div>
          </enchanted-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-dialog-snapshot-baseline-with-overrideTitle-and-content', 100);

    document.head.removeChild(link);
  });

  it('EnchantedDialog - should capture EnchantedDialog component with chat size and content', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <enchanted-dialog open size="chat" title="Chat Dialog" .localization=${localization}>
            <div slot="content">
              <label>Chat mode content</label>
            </div>
            <div slot="footer">
              <enchanted-authoring-dialog-footer />
            </div>
          </enchanted-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-dialog-snapshot-baseline-with-chat-size-and-content', 100);

    document.head.removeChild(link);
  });

  it('EnchantedDialog - should capture EnchantedDialog component with multiple sizes and removeBorder', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <enchanted-dialog open size="lg" removeBorder title="Large Dialog No Border" .localization=${localization}>
            <div slot="content">
              <label>Large dialog without borders</label>
            </div>
            <div slot="footer">
              <enchanted-authoring-dialog-footer />
            </div>
          </enchanted-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-dialog-snapshot-baseline-lg-size-removeBorder', 100);

    document.head.removeChild(link);
  });
});
