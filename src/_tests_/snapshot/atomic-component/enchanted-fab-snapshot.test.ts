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

  it("should match snapshot for contained type", async () => {
    renderComponent(html`<enchanted-fab type="contained" label="Contained FAB"></enchanted-fab>`);
    const fab = await $("enchanted-fab");
    await browser.checkElement(fab, "enchanted-fab-snapshot-contained");
  });

  it("should match snapshot for outlined type", async () => {
    renderComponent(html`<enchanted-fab type="outlined" label="Outlined FAB" badge .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}></enchanted-fab>`);
    const fab = await $("enchanted-fab");
    await browser.checkElement(fab, "enchanted-fab-snapshot-outlined");
  });

  it("should match snapshot for extended FAB", async () => {
    renderComponent(html`<enchanted-fab type="contained" label="Extended FAB" extended .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}></enchanted-fab>`);
    const fab = await $("enchanted-fab");
    await browser.checkElement(fab, "enchanted-fab-snapshot-extended");
  });

  it("should match snapshot for FAB with icon", async () => {
    renderComponent(html`<enchanted-fab
      type="contained"
      .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}
    ></enchanted-fab>`);
    const fab = await $("enchanted-fab");
    await browser.checkElement(fab, "enchanted-fab-snapshot-icon");
  });

  it("should match snapshot for disabled FAB", async () => {
    renderComponent(html`<enchanted-fab type="contained" label="Disabled FAB" disabled .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}></enchanted-fab>`);
    const fab = await $("enchanted-fab");
    await browser.checkElement(fab, "enchanted-fab-snapshot-disabled");
  });

  it("should match snapshot for FAB with badge enabled", async () => {
    renderComponent(html`<enchanted-fab type="contained" label="FAB with Badge" badge></enchanted-fab>`);
    const fab = await $("enchanted-fab");
    await browser.checkElement(fab, "enchanted-fab-snapshot-badge-enabled");
  });

});