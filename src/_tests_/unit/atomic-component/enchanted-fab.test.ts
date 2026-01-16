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
import { expect, $ } from "@wdio/globals";

// Helper import
import { renderComponent } from "../../utils";
import { EnchantedFabType } from '../../../types/cssClassEnums';

// Component import
import "../../../components/atomic-component/enchanted-fab";

afterEach(() => {
  document.body.innerHTML = "";
});

describe("enchanted-fab - component test", () => {
  beforeEach(async () => {
    document.body.innerHTML = ""; // Clear the DOM before each test
  });

  it("enchanted-fab - should render the component with correct content", async () => {
    renderComponent(html`<enchanted-fab
      type="${EnchantedFabType.CONTAINED}"
      label="Test FAB"
      extended
      badge
    ></enchanted-fab>`);
    const fab = await $("enchanted-fab");
    await expect(fab).toBeExisting();
    await expect(fab).toHaveAttribute("type", "contained");

    // Check if the label is rendered correctly
    const label = await fab.shadow$("span[part='label']");
    await expect(label).toBeExisting();
    await expect(label).toHaveText("Test FAB");
  });

  it("enchanted-fab - should not render badge when badge property is not enabled", async () => {
    renderComponent(html`<enchanted-fab type="${EnchantedFabType.CONTAINED}" label="No Badge"></enchanted-fab>`);
    const badge = await $("enchanted-fab enchanted-badge");
    await expect(badge).not.toBeExisting();
  });

  it("enchanted-fab - should render with default properties", async () => {
    renderComponent(html`<enchanted-fab></enchanted-fab>`);
    const fab = await $("enchanted-fab");
    await expect(fab).toBeExisting();
    await expect(fab).toHaveAttribute("type", EnchantedFabType.CONTAINED);
    await expect(fab).not.toHaveAttribute("extended");
    await expect(fab).not.toHaveAttribute("disabled");
    const label = await fab.shadow$("span[part='label']");
    await expect(label).not.toBeExisting();
  });

  it("enchanted-fab - should apply disabled state", async () => {
    renderComponent(html`<enchanted-fab type="${EnchantedFabType.CONTAINED}" label="Disabled FAB" disabled></enchanted-fab>`);
    const fab = await $("enchanted-fab");
    await expect(fab).toHaveAttribute("disabled");
    await expect(fab).not.toBeClickable();
  });

  it("enchanted-fab - should render extended state with label", async () => {
    renderComponent(html`<enchanted-fab type="${EnchantedFabType.CONTAINED}" label="Extended FAB" extended></enchanted-fab>`);
    const fab = await $("enchanted-fab");
    const label = await fab.shadow$("span[part='label']");
    await expect(label).toBeExisting();
    await expect(label).toHaveText("Extended FAB");
  });

  it("enchanted-fab - should handle click events", async () => {
    let clicked = false;
    renderComponent(html`<enchanted-fab
      @click="${() => {
        clicked = true;
      }}"
    ></enchanted-fab>`);
    const fab = await $("enchanted-fab");
    await fab.click();
    await expect(clicked).toBe(true);
  });

  it("enchanted-fab - should not display label when extended property is not passed", async () => {
    renderComponent(html`<enchanted-fab label="Test Label"></enchanted-fab>`);
    const fab = await $("enchanted-fab");

    // Verify the component exists
    await expect(fab).toBeExisting();

    // Verify the label is not visible
    const label = await fab.shadow$("span[part='label']");
    await expect(label).not.toBeExisting();
  });

  it("enchanted-fab - should apply correct FAB part for LTR direction", async () => {
    renderComponent(html`<enchanted-fab></enchanted-fab>`);
    const fab = await $("enchanted-fab");
    const button = await fab.shadow$("button[part='fab']");
    await expect(button).toBeExisting();
  });

  it("enchanted-fab - should render contained type FAB by default", async () => {
    renderComponent(html`<enchanted-fab></enchanted-fab>`);
    const fab = await $("enchanted-fab");
    await expect(fab).toHaveAttribute("type", EnchantedFabType.CONTAINED);
  });

  it("enchanted-fab - should render outlined type when type is outlined", async () => {
    renderComponent(html`<enchanted-fab type="${EnchantedFabType.OUTLINED}"></enchanted-fab>`);
    const fab = await $("enchanted-fab");
    await expect(fab).toHaveAttribute("type", EnchantedFabType.OUTLINED);
  });

  it("enchanted-fab - should not be disabled by default", async () => {
    renderComponent(html`<enchanted-fab></enchanted-fab>`);
    const fab = await $("enchanted-fab");
    await expect(fab).not.toHaveAttribute("disabled");
    const button = await fab.shadow$("button");
    await expect(button).not.toHaveAttribute("disabled");
  });

  it("enchanted-fab - should render icon slot with correct part", async () => {
    renderComponent(html`<enchanted-fab></enchanted-fab>`);
    const fab = await $("enchanted-fab");
    const iconSpan = await fab.shadow$("span[part='icon']");
    await expect(iconSpan).toBeExisting();
  });

  it("enchanted-fab - should render provided icon template", async () => {
    renderComponent(html`<enchanted-fab .icon=${html`<icon-ai-sparkle></icon-ai-sparkle>`}></enchanted-fab>`);
    const fab = await $("enchanted-fab");
    const iconSpan = await fab.shadow$("span[part='icon']");
    await expect(iconSpan).toBeExisting();
    const svg = await iconSpan.$("icon-ai-sparkle");
    await expect(svg).toBeExisting();
  });

  it("enchanted-fab - should render icon slot when no icon is provided", async () => {
    renderComponent(html`<enchanted-fab></enchanted-fab>`);
    const fab = await $("enchanted-fab");
    const iconSpan = await fab.shadow$("span[part='icon']");
    await expect(iconSpan).toBeExisting();
    const slot = await iconSpan.$("slot[name='icon']");
    await expect(slot).toBeExisting();
  });

  it("enchanted-fab - should render badge slot when badge is true", async () => {
    renderComponent(html`<enchanted-fab badge></enchanted-fab>`);
    const fab = await $("enchanted-fab");
    await expect(fab).toHaveAttribute("badge");
    const badgeSlot = await fab.shadow$("slot[name='badge']");
    await expect(badgeSlot).toBeExisting();
  });

  it("enchanted-fab - should accept slotted badge content", async () => {
    renderComponent(html`<enchanted-fab badge>
      <enchanted-badge slot="badge" badge="text" text="5" color="primary"></enchanted-badge>
    </enchanted-fab>`);
    const fab = await $("enchanted-fab");
    const badge = await fab.$("enchanted-badge[slot='badge']");
    await expect(badge).toBeExisting();
    await expect(badge).toHaveAttribute("badge", "text");
    await expect(badge).toHaveAttribute("text", "5");
  });
});