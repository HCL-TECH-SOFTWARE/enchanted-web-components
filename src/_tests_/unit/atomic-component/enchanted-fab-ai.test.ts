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
import { expect, $,  } from "@wdio/globals";

// Helper import
import { renderComponent } from "../../utils";

// Component import
import "../../../components/atomic-component/enchanted-fab-ai";
import { EnchantedFabAi } from "../../../components/atomic-component/enchanted-fab-ai";
import { EnchantedAcBaseElement } from "../../../components/atomic-component/enchanted-ac-base-element";
import { FAB_PARTS } from "../../../types/cssClassEnums";
import { ENCHANTED_FAB_AI_TAG, ENCHANTED_FAB_AI_TAG_NAME, ENCHANTED_FAB_TAG_NAME } from '../../../components/tags';


afterEach(() => {
  document.body.innerHTML = "";
});

describe(`${ENCHANTED_FAB_AI_TAG_NAME} - component test`, () => {
  beforeEach(async () => {
    document.body.innerHTML = ""; // Clear the DOM before each test
  });

  it("should render without crashing", async () => {
    renderComponent(html`<${ENCHANTED_FAB_AI_TAG}></${ENCHANTED_FAB_AI_TAG}>`);
    const fabAi = await $(ENCHANTED_FAB_AI_TAG_NAME);
    await expect(fabAi).toBeExisting();
  });

  it("should render with custom element tag name enchanted-fab-ai", async () => {
    renderComponent(html`<${ENCHANTED_FAB_AI_TAG} label="AI FAB"></${ENCHANTED_FAB_AI_TAG}>`);
    const fabAi = await $(ENCHANTED_FAB_AI_TAG_NAME);
    await expect(fabAi).toBeExisting();
    await expect(await fabAi.getTagName()).toBe(ENCHANTED_FAB_AI_TAG_NAME);
  });

  it("should be instance of EnchantedFabAi and extend EnchantedAcBaseElement", async () => {
    const fabAi = document.createElement(ENCHANTED_FAB_AI_TAG_NAME) as EnchantedFabAi;
    document.body.appendChild(fabAi);
    
    // Verify it's an instance of EnchantedFabAi
    await expect(fabAi instanceof EnchantedFabAi).toBe(true);
    
    // Verify it extends EnchantedAcBaseElement (composition pattern)
    await expect(fabAi instanceof EnchantedAcBaseElement).toBe(true);
  });

  it("should support extended property for showing label", async () => {
    renderComponent(html`<${ENCHANTED_FAB_AI_TAG} label="Extended FAB" extended></${ENCHANTED_FAB_AI_TAG}>`);
    const fabAi = await $(ENCHANTED_FAB_AI_TAG_NAME);
    
    // Check extended attribute is present
    await expect(fabAi).toHaveAttribute("extended");
    
    // Check if the label is rendered in the inner enchanted-fab
    const innerFab = await fabAi.shadow$(ENCHANTED_FAB_TAG_NAME);
    await expect(innerFab).toBeExisting();
    const label = await innerFab.shadow$(`span[part='${FAB_PARTS.LABEL}']`);
    await expect(label).toBeExisting();
    await expect(label).toHaveText("Extended FAB");
  });

  it("should not show label when extended property is false", async () => {
    renderComponent(html`<${ENCHANTED_FAB_AI_TAG} label="No Extended FAB"></${ENCHANTED_FAB_AI_TAG}>`);
    const fabAi = await $(ENCHANTED_FAB_AI_TAG_NAME);
    
    // Check extended attribute is not present
    await expect(fabAi).not.toHaveAttribute("extended");
    
    // Label should not be rendered in the inner enchanted-fab
    const innerFab = await fabAi.shadow$(ENCHANTED_FAB_TAG_NAME);
    const label = await innerFab.shadow$(`span[part='${FAB_PARTS.LABEL}']`);
    await expect(label).not.toBeExisting();
  });

  it("should support disabled property", async () => {
    renderComponent(html`<${ENCHANTED_FAB_AI_TAG} label="Disabled FAB" disabled></${ENCHANTED_FAB_AI_TAG}>`);
    const fabAi = await $(ENCHANTED_FAB_AI_TAG_NAME);
    
    // Check disabled attribute is present
    await expect(fabAi).toHaveAttribute("disabled");
    
    // Button should not be clickable
    await expect(fabAi).not.toBeClickable();
  });

  it("should be clickable when not disabled", async () => {
    renderComponent(html`<${ENCHANTED_FAB_AI_TAG} label="Enabled FAB"></${ENCHANTED_FAB_AI_TAG}>`);
    const fabAi = await $(ENCHANTED_FAB_AI_TAG_NAME);
    
    // Check disabled attribute is not present
    await expect(fabAi).not.toHaveAttribute("disabled");
    
    // Button should be clickable
    await expect(fabAi).toBeClickable();
  });

  it("should support icon property", async () => {
    const testIcon = html`<svg><circle r="10"/></svg>`;
    renderComponent(html`<${ENCHANTED_FAB_AI_TAG} .icon=${testIcon}></${ENCHANTED_FAB_AI_TAG}>`);
    const fabAi = await $(ENCHANTED_FAB_AI_TAG_NAME);
    
    const fabAiElement = document.querySelector(ENCHANTED_FAB_AI_TAG_NAME) as EnchantedFabAi;
    await expect(fabAiElement.icon).toBeDefined();
    
    // Icon is rendered in the inner enchanted-fab
    const innerFab = await fabAi.shadow$(ENCHANTED_FAB_TAG_NAME);
    const iconSlot = await innerFab.shadow$(`span[part='${FAB_PARTS.ICON}']`);
    await expect(iconSlot).toBeExisting();
  });

  it("should update label text when property changes", async () => {
    renderComponent(html`<${ENCHANTED_FAB_AI_TAG} label="Initial Label" extended></${ENCHANTED_FAB_AI_TAG}>`);
    const fabAi = await $(ENCHANTED_FAB_AI_TAG_NAME);
    const fabAiElement = document.querySelector(ENCHANTED_FAB_AI_TAG_NAME) as EnchantedFabAi;
    
    const innerFab = await fabAi.shadow$(ENCHANTED_FAB_TAG_NAME);
    let label = await innerFab.shadow$(`span[part='${FAB_PARTS.LABEL}']`);
    await expect(label).toHaveText("Initial Label");
    
    // Update label programmatically to test property reactivity
    fabAiElement.label = "Updated Label";
    await fabAiElement.updateComplete;
    
    label = await innerFab.shadow$(`span[part='${FAB_PARTS.LABEL}']`);
    await expect(label).toHaveText("Updated Label");
  });

  it("should support badge property", async () => {
    renderComponent(html`<${ENCHANTED_FAB_AI_TAG} label="FAB with Badge" badge></${ENCHANTED_FAB_AI_TAG}>`);
    const fabAi = await $(ENCHANTED_FAB_AI_TAG_NAME);
    
    // Check badge attribute is present on host
    await expect(fabAi).toHaveAttribute("badge");
    
    // Badge slot should be rendered in inner enchanted-fab
    const innerFab = await fabAi.shadow$(ENCHANTED_FAB_TAG_NAME);
    const badgeSlot = await innerFab.shadow$("slot[name='badge']");
    await expect(badgeSlot).toBeExisting();
  });

  it("should not render badge slot when badge property is false", async () => {
    renderComponent(html`<${ENCHANTED_FAB_AI_TAG} label="FAB without Badge"></${ENCHANTED_FAB_AI_TAG}>`);
    const fabAi = await $(ENCHANTED_FAB_AI_TAG_NAME);
    
    // Check badge attribute is not present
    await expect(fabAi).not.toHaveAttribute("badge");
    
    // Badge slot should not be rendered in inner enchanted-fab
    const innerFab = await fabAi.shadow$(ENCHANTED_FAB_TAG_NAME);
    const badgeSlot = await innerFab.shadow$("slot[name='badge']");
    await expect(badgeSlot).not.toBeExisting();
  });

  it("should have correct aria-label attribute", async () => {
    renderComponent(html`<${ENCHANTED_FAB_AI_TAG} label="Accessible FAB"></${ENCHANTED_FAB_AI_TAG}>`);
    const fabAi = await $(ENCHANTED_FAB_AI_TAG_NAME);
    const innerFab = await fabAi.shadow$(ENCHANTED_FAB_TAG_NAME);
    const button = await innerFab.shadow$("button");
    
    await expect(button).toHaveAttribute("aria-label", "Accessible FAB");
  });

  it("should handle all properties together", async () => {
    renderComponent(html`<${ENCHANTED_FAB_AI_TAG} 
      label="Complete FAB" 
      extended 
      badge
      .icon=${html`<svg><circle r="10"/></svg>`}
    ></${ENCHANTED_FAB_AI_TAG}>`);
    const fabAiElement = await $(ENCHANTED_FAB_AI_TAG_NAME);
    
    // Check all attributes on host
    await expect(fabAiElement).toHaveAttribute("extended");
    await expect(fabAiElement).toHaveAttribute("badge");
    
    // Check label is rendered in inner enchanted-fab
    const innerFab = await fabAiElement.shadow$(ENCHANTED_FAB_TAG_NAME);
    const label = await innerFab.shadow$(`span[part='${FAB_PARTS.LABEL}']`);
    await expect(label).toBeExisting();
    await expect(label).toHaveText("Complete FAB");
    
    // Check icon span exists because icon property is set
    const iconSpan = await innerFab.shadow$(`span[part='${FAB_PARTS.ICON}']`);
    await expect(iconSpan).toBeExisting();
    
    // Check badge slot
    const badgeSlot = await innerFab.shadow$("slot[name='badge']");
    await expect(badgeSlot).toBeExisting();
  });
});
