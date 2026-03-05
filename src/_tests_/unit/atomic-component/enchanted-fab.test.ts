/* ======================================================================== *
 * Copyright 2026 HCL America Inc.                                          *
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
import { expect, $ } from "@wdio/globals";

// Helper import
import { renderComponent } from "../../utils";
import { EnchantedFabType, FAB_PARTS } from '../../../types/cssClassEnums';

// Component import
import "../../../components/atomic-component/enchanted-fab";
import { generateIconTagName, ENCHANTED_BADGE_TAG, ENCHANTED_BADGE_TAG_NAME, ENCHANTED_FAB_TAG, ENCHANTED_FAB_TAG_NAME } from '../../../components/tags';

afterEach(() => {
  document.body.innerHTML = "";
});

describe(`${ENCHANTED_FAB_TAG_NAME} - component test`, () => {
  beforeEach(async () => {
    document.body.innerHTML = ""; // Clear the DOM before each test
  });

  it("should render the component with correct content", async () => {
    renderComponent(html`<${ENCHANTED_FAB_TAG}
      type="${EnchantedFabType.CONTAINED}"
      label="Test FAB"
      extended
      badge
    ></${ENCHANTED_FAB_TAG}>`);
    const fab = await $(ENCHANTED_FAB_TAG_NAME);
    await expect(fab).toBeExisting();
    await expect(fab).toHaveAttribute("type", "contained");

    // Check if the label is rendered correctly
    const label = await fab.shadow$(`span[part='${FAB_PARTS.LABEL}']`);
    await expect(label).toBeExisting();
    await expect(label).toHaveText("Test FAB");
  });

  it("should not render badge when badge property is not enabled", async () => {
    renderComponent(html`<${ENCHANTED_FAB_TAG} type="${EnchantedFabType.CONTAINED}" label="No Badge"></${ENCHANTED_FAB_TAG}>`);
    const badge = await $(`${ENCHANTED_FAB_TAG_NAME} ${ENCHANTED_BADGE_TAG_NAME}`);
    await expect(badge).not.toBeExisting();
  });

  it("should render with default properties", async () => {
    renderComponent(html`<${ENCHANTED_FAB_TAG}></${ENCHANTED_FAB_TAG}>`);
    const fab = await $(ENCHANTED_FAB_TAG_NAME);
    await expect(fab).toBeExisting();
    await expect(fab).toHaveAttribute("type", EnchantedFabType.CONTAINED);
    await expect(fab).not.toHaveAttribute("extended");
    await expect(fab).not.toHaveAttribute("disabled");
    const label = await fab.shadow$(`span[part='${FAB_PARTS.LABEL}']`);
    await expect(label).not.toBeExisting();
  });

  it("should apply disabled state", async () => {
    renderComponent(html`<${ENCHANTED_FAB_TAG} type="${EnchantedFabType.CONTAINED}" label="Disabled FAB" disabled></${ENCHANTED_FAB_TAG}>`);
    const fab = await $(ENCHANTED_FAB_TAG_NAME);
    await expect(fab).toHaveAttribute("disabled");
    await expect(fab).not.toBeClickable();
  });

  it("should render extended state with label", async () => {
    renderComponent(html`<${ENCHANTED_FAB_TAG} type="${EnchantedFabType.CONTAINED}" label="Extended FAB" extended></${ENCHANTED_FAB_TAG}>`);
    const fab = await $(ENCHANTED_FAB_TAG_NAME);
    const label = await fab.shadow$(`span[part='${FAB_PARTS.LABEL}']`);
    await expect(label).toBeExisting();
    await expect(label).toHaveText("Extended FAB");
  });

  it("should handle click events", async () => {
    let clicked = false;
    renderComponent(html`<${ENCHANTED_FAB_TAG}
      @click="${() => {
        clicked = true;
      }}"
    ></${ENCHANTED_FAB_TAG}>`);
    const fab = await $(ENCHANTED_FAB_TAG_NAME);
    await fab.click();
    await expect(clicked).toBe(true);
  });

  it("should not display label when extended property is not passed", async () => {
    renderComponent(html`<${ENCHANTED_FAB_TAG} label="Test Label"></${ENCHANTED_FAB_TAG}>`);
    const fab = await $(ENCHANTED_FAB_TAG_NAME);

    // Verify the component exists
    await expect(fab).toBeExisting();

    // Verify the label is not visible
    const label = await fab.shadow$(`span[part='${FAB_PARTS.LABEL}']`);
    await expect(label).not.toBeExisting();
  });

  it("should apply correct FAB part for LTR direction", async () => {
    renderComponent(html`<${ENCHANTED_FAB_TAG}></${ENCHANTED_FAB_TAG}>`);
    const fab = await $(ENCHANTED_FAB_TAG_NAME);
    const button = await fab.shadow$("button");
    await expect(button).toBeExisting();
    await expect(button).toHaveAttribute("part", FAB_PARTS.FAB);
  });

  it("should render contained type FAB by default", async () => {
    renderComponent(html`<${ENCHANTED_FAB_TAG}></${ENCHANTED_FAB_TAG}>`);
    const fab = await $(ENCHANTED_FAB_TAG_NAME);
    await expect(fab).toHaveAttribute("type", EnchantedFabType.CONTAINED);
  });

  it("should render outlined type when type is outlined", async () => {
    renderComponent(html`<${ENCHANTED_FAB_TAG} type="${EnchantedFabType.OUTLINED}"></${ENCHANTED_FAB_TAG}>`);
    const fab = await $(ENCHANTED_FAB_TAG_NAME);
    await expect(fab).toHaveAttribute("type", EnchantedFabType.OUTLINED);
  });

  it("should not be disabled by default", async () => {
    renderComponent(html`<${ENCHANTED_FAB_TAG}></${ENCHANTED_FAB_TAG}>`);
    const fab = await $(ENCHANTED_FAB_TAG_NAME);
    await expect(fab).not.toHaveAttribute("disabled");
    const button = await fab.shadow$("button");
    await expect(button).not.toHaveAttribute("disabled");
  });

  it("should render icon slot with correct part", async () => {
    renderComponent(html`<${ENCHANTED_FAB_TAG} .icon=${html`<${generateIconTagName('icon-ai-sparkle')}></${generateIconTagName('icon-ai-sparkle')}>`}></${ENCHANTED_FAB_TAG}>`);
    const fab = await $(ENCHANTED_FAB_TAG_NAME);
    const iconSpan = await fab.shadow$(`span[part='${FAB_PARTS.ICON}']`);
    await expect(iconSpan).toBeExisting();
  });

  it("should render provided icon template", async () => {
    renderComponent(html`<${ENCHANTED_FAB_TAG} .icon=${html`<${generateIconTagName('icon-ai-sparkle')}></${generateIconTagName('icon-ai-sparkle')}>`}></${ENCHANTED_FAB_TAG}>`);
    const fab = await $(ENCHANTED_FAB_TAG_NAME);
    const iconSpan = await fab.shadow$(`span[part='${FAB_PARTS.ICON}']`);
    await expect(iconSpan).toBeExisting();
    const svg = await iconSpan.$(`${generateIconTagName('icon-ai-sparkle')}`);
    await expect(svg).toBeExisting();
  });

  it("should not render icon span when no icon is provided", async () => {
    renderComponent(html`<${ENCHANTED_FAB_TAG}></${ENCHANTED_FAB_TAG}>`);
    const fab = await $(ENCHANTED_FAB_TAG_NAME);
    const iconSpan = await fab.shadow$(`span[part='${FAB_PARTS.ICON}']`);
    await expect(iconSpan).not.toBeExisting();
  });

  it("should render badge slot when badge is true", async () => {
    renderComponent(html`<${ENCHANTED_FAB_TAG} badge></${ENCHANTED_FAB_TAG}>`);
    const fab = await $(ENCHANTED_FAB_TAG_NAME);
    await expect(fab).toHaveAttribute("badge");
    const badgeSlot = await fab.shadow$("slot[name='badge']");
    await expect(badgeSlot).toBeExisting();
  });

  it("should accept slotted badge content", async () => {
    renderComponent(html`<${ENCHANTED_FAB_TAG} badge>
      <${ENCHANTED_BADGE_TAG} slot="badge" badge="text" text="5" color="primary"></${ENCHANTED_BADGE_TAG}>
    </${ENCHANTED_FAB_TAG}>`);
    const fab = await $(ENCHANTED_FAB_TAG_NAME);
    const badge = await fab.$(`${ENCHANTED_BADGE_TAG_NAME}[slot='badge']`);
    await expect(badge).toBeExisting();
    await expect(badge).toHaveAttribute("badge", "text");
    await expect(badge).toHaveAttribute("text", "5");
  });
});