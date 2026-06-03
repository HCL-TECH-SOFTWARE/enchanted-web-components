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
import { html } from 'lit/static-html.js';
import { expect, $, browser } from "@wdio/globals";

// Helper import
import { renderComponent } from "../../utils";

// Component import
import "../../../components/atomic-component/enchanted-accordion";
import { ENCHANTED_ACCORDION_TAG, ENCHANTED_ACCORDION_TAG_NAME } from '../../../components/tags';

afterEach(() => {
  document.body.innerHTML = "";
});
async function waitForAccordion() {
  const accordion = await $(`${ENCHANTED_ACCORDION_TAG_NAME}`);
  await accordion.waitForExist({ timeout: 1000 });
  return accordion;
}
describe(`${ENCHANTED_ACCORDION_TAG_NAME} - component test`, () => {
  beforeEach(async () => {
    renderComponent(html`<${ENCHANTED_ACCORDION_TAG} showCheckbox type="outlined">
      <span slot="header">My accordion Header</span>
      <div slot="accordion-items">tests</div>
    </${ENCHANTED_ACCORDION_TAG}>`);
  });
  it('should render the component with correct content', async () => {
    const accordion = await waitForAccordion();
    await expect(accordion).toBeExisting();
    const header = await $(`${ENCHANTED_ACCORDION_TAG_NAME} span[slot="header"]`);
    await header.waitForExist();
    await expect(header).toHaveText("My accordion Header");
  });
});
describe(`${ENCHANTED_ACCORDION_TAG_NAME} - Attributes tests- showCheckbox, showSecondaryText, no-outline`, () => {
  beforeEach(async () => {
    renderComponent(html`<${ENCHANTED_ACCORDION_TAG}
      showCheckbox
      showSecondaryText
      type="no-outline"
    >
      <span slot="header">My accordion Header</span>
      <div slot="accordion-items">tests</div>
    </${ENCHANTED_ACCORDION_TAG}>`);
  });
  it('should have showCheckbox property set to true', async () => {
    const accordion = await waitForAccordion();
    const showCheckbox = await accordion.getProperty("showCheckbox");
    await expect(showCheckbox).toBe(true);
  });
  it('should have showSecondaryText property set to true', async () => {
    const accordion = await waitForAccordion();
    const showSecondaryText = await accordion.getProperty("showSecondaryText");
    await expect(showSecondaryText).toBe(true);
  });

  it('should have type = no-outline', async () => {
    const accordion = await waitForAccordion();
    await expect(accordion).toHaveAttribute("type", "no-outline");
  });

  it('should not have Disabled property set', async () => {
    const accordion = await waitForAccordion();
    await expect(accordion).not.toHaveAttribute("disabled");
  });
});
describe(`${ENCHANTED_ACCORDION_TAG_NAME} - Attributes tests - open, disabled, type`, () => {
  beforeEach(async () => {
    renderComponent(html`<${ENCHANTED_ACCORDION_TAG} open disabled type="outlined">
      <span slot="header">My accordion Header</span>
      <div slot="accordion-items">tests</div>
    </${ENCHANTED_ACCORDION_TAG}>`);
  });
  it('should have disabled property set to true', async () => {
    const accordion = await waitForAccordion();
    const disabled = await accordion.getProperty("disabled");
    await expect(disabled).toBe(true);
  });

  it('should have type = outlined', async () => {
    const accordion = await waitForAccordion();
    await expect(accordion).toHaveAttribute("type", "outlined");
  });
  it('should have open property set to true', async () => {
    const accordion = await waitForAccordion();
    const open = await accordion.getProperty("open");
    await expect(open).toBe(true);
  });
  it('should render the accordion-items slot content when open state', async () => {
    const content = await $(`${ENCHANTED_ACCORDION_TAG_NAME} div[slot="accordion-items"]`);
    await expect(content).toBeExisting();
    await expect(content).toHaveText("tests");
  });
  it('should not have showCheckbox property and showSecondaryText property', async () => {
    const accordion = await waitForAccordion();
    const showCheckbox = await accordion.getProperty("showCheckbox");
    const showSecondaryText = await accordion.getProperty("showSecondaryText");
    await expect(showCheckbox).toBe(false);
    await expect(showSecondaryText).toBe(false);
  });
});
describe(`${ENCHANTED_ACCORDION_TAG_NAME} - toggle behavior tests (click on header)`, () => {
  beforeEach(async () => {
    renderComponent(html`<${ENCHANTED_ACCORDION_TAG}>
      <span slot="header">My accordion Header</span>
      <div slot="accordion-items">tests</div>
    </${ENCHANTED_ACCORDION_TAG}>`);
  });
  it('should toggle open state on header click', async () => {
    const accordion = await waitForAccordion();
    const header = await $(`${ENCHANTED_ACCORDION_TAG_NAME} span[slot="header"]`);
    await header.waitForExist();

    const isOpenInitially = await accordion.getProperty("open");
    await expect(isOpenInitially).toBe(false);
    await header.click();
    await browser.waitUntil(
      async () => {
        return (await accordion.getProperty("open")) === true;
      },
      {
        timeout: 1000,
        timeoutMsg: "Accordion did not open after clicking on header",
      }
    );
    await header.click();
    await browser.waitUntil(
      async () => {
        return (await accordion.getProperty("open")) === false;
      },
      {
        timeout: 1000,
        timeoutMsg: "Accordion did not close after clicking on header",
      }
    );
    const isOpenFinally = await accordion.getProperty("open");
    await expect(isOpenFinally).toBe(false);
  });
});
