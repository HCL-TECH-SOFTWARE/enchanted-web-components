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
import { html } from "lit";
import { browser, $ } from "@wdio/globals";
import {
  appendEnchantedStylingLink,
  SNAPSHOT_WINDOW_HEIGHT,
  SNAPSHOT_WINDOW_WIDTH,
} from "../utils";
import { renderComponent } from "../../utils";


// Import ai--sparkle icon
import '@hcl-software/enchanted-icons-web-component/dist/apps/es/ai--sparkle';

// Component import
import "../../../components/atomic-component/enchanted-fab";
import "../../../components/atomic-component/enchanted-badge";

describe("enchanted-fab - snapshot tests", () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  let link: HTMLLinkElement;
  beforeEach(() => {
    link = appendEnchantedStylingLink();
  });
  afterEach(() => {
    document.head.removeChild(link);
  });

  it("should match snapshot for FAB with text badge", async () => {
    renderComponent(html`
      <enchanted-fab type="contained" badge .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}>
        <enchanted-badge slot="badge" badge="text" text="5" color="primary"></enchanted-badge>
      </enchanted-fab>
    `);
    const fab = await $("enchanted-fab");
    await browser.checkElement(fab, "enchanted-fab-snapshot-text-badge");
  });

  it("should match snapshot for FAB with dot badge", async () => {
    renderComponent(html`
      <enchanted-fab type="contained" badge .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}>
        <enchanted-badge slot="badge" badge="dot" color="error"></enchanted-badge>
      </enchanted-fab>
    `);
    const fab = await $("enchanted-fab");
    await browser.checkElement(fab, "enchanted-fab-snapshot-dot-badge");
  });

  it("should match snapshot for FAB with primary badge color", async () => {
    renderComponent(html`
      <enchanted-fab type="contained" badge .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}>
        <enchanted-badge slot="badge" badge="text" text="3" color="primary"></enchanted-badge>
      </enchanted-fab>
    `);
    const fab = await $("enchanted-fab");
    await browser.checkElement(fab, "enchanted-fab-snapshot-badge-primary");
  });

  it("should match snapshot for FAB with error badge color", async () => {
    renderComponent(html`
      <enchanted-fab type="contained" badge .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}>
        <enchanted-badge slot="badge" badge="text" text="99" color="error"></enchanted-badge>
      </enchanted-fab>
    `);
    const fab = await $("enchanted-fab");
    await browser.checkElement(fab, "enchanted-fab-snapshot-badge-error");
  });

  it("should match snapshot for FAB with primary-inverse badge color", async () => {
    renderComponent(html`
      <enchanted-fab type="contained" badge .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}>
        <enchanted-badge slot="badge" badge="text" text="7" color="primary-inverse"></enchanted-badge>
      </enchanted-fab>
    `);
    const fab = await $("enchanted-fab");
    await browser.checkElement(fab, "enchanted-fab-snapshot-badge-primary-inverse");
  });

  it("should match snapshot for FAB with error-inverse badge color", async () => {
    renderComponent(html`
      <enchanted-fab type="contained" badge .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}>
        <enchanted-badge slot="badge" badge="text" text="12" color="error-inverse"></enchanted-badge>
      </enchanted-fab>
    `);
    const fab = await $("enchanted-fab");
    await browser.checkElement(fab, "enchanted-fab-snapshot-badge-error-inverse");
  });

  it("should match snapshot for extended FAB with badge", async () => {
    renderComponent(html`
      <enchanted-fab type="contained" extended label="Extended" badge .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}>
        <enchanted-badge slot="badge" badge="text" text="8" color="primary"></enchanted-badge>
      </enchanted-fab>
    `);
    const fab = await $("enchanted-fab");
    await browser.checkElement(fab, "enchanted-fab-snapshot-extended-badge");
  });

  it("should match snapshot for outlined FAB with badge", async () => {
    renderComponent(html`
      <enchanted-fab type="outlined" badge .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}>
        <enchanted-badge slot="badge" badge="text" text="4" color="primary"></enchanted-badge>
      </enchanted-fab>
    `);
    const fab = await $("enchanted-fab");
    await browser.checkElement(fab, "enchanted-fab-snapshot-outlined-badge");
  });

  it("should match snapshot for RTL direction with badge", async () => {
    renderComponent(html`
      <enchanted-fab type="contained" dir="rtl" badge .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}>
        <enchanted-badge slot="badge" badge="text" text="6" color="error"></enchanted-badge>
      </enchanted-fab>
    `);
    const fab = await $("enchanted-fab");
    await browser.checkElement(fab, "enchanted-fab-snapshot-rtl-badge");
  });
});