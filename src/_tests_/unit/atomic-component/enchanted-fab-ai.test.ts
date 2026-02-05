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
import { html } from "lit";
import { expect, $,  } from "@wdio/globals";

// Helper import
import { renderComponent } from "../../utils";

// Component import
import "../../../components/atomic-component/enchanted-fab-ai";
import { EnchantedFabAi } from "../../../components/atomic-component/enchanted-fab-ai";
import { EnchantedAcBaseElement } from "../../../components/atomic-component/enchanted-ac-base-element";
import { FAB_PARTS } from "../../../types/cssClassEnums";


afterEach(() => {
  document.body.innerHTML = "";
});

describe("enchanted-fab-ai - component test", () => {
  beforeEach(async () => {
    document.body.innerHTML = ""; // Clear the DOM before each test
  });

  it("enchanted-fab-ai - should render without crashing", async () => {
    renderComponent(html`<enchanted-fab-ai></enchanted-fab-ai>`);
    const fabAi = await $("enchanted-fab-ai");
    await expect(fabAi).toBeExisting();
  });

  it("enchanted-fab-ai - should render with custom element tag name enchanted-fab-ai", async () => {
    renderComponent(html`<enchanted-fab-ai label="AI FAB"></enchanted-fab-ai>`);
    const fabAi = await $("enchanted-fab-ai");
    await expect(fabAi).toBeExisting();
    await expect(await fabAi.getTagName()).toBe("enchanted-fab-ai");
  });

  it("enchanted-fab-ai - should be instance of EnchantedFabAi and extend EnchantedAcBaseElement", async () => {
    const fabAi = document.createElement("enchanted-fab-ai") as EnchantedFabAi;
    document.body.appendChild(fabAi);
    
    // Verify it's an instance of EnchantedFabAi
    await expect(fabAi instanceof EnchantedFabAi).toBe(true);
    
    // Verify it extends EnchantedAcBaseElement (composition pattern)
    await expect(fabAi instanceof EnchantedAcBaseElement).toBe(true);
  });

  it("enchanted-fab-ai - should support extended property for showing label", async () => {
    renderComponent(html`<enchanted-fab-ai label="Extended FAB" extended></enchanted-fab-ai>`);
    const fabAi = await $("enchanted-fab-ai");
    
    // Check extended attribute is present
    await expect(fabAi).toHaveAttribute("extended");
    
    // Check if the label is rendered in the inner enchanted-fab
    const innerFab = await fabAi.shadow$("enchanted-fab");
    await expect(innerFab).toBeExisting();
    const label = await innerFab.shadow$(`span[part='${FAB_PARTS.LABEL}']`);
    await expect(label).toBeExisting();
    await expect(label).toHaveText("Extended FAB");
  });

  it("enchanted-fab-ai - should not show label when extended property is false", async () => {
    renderComponent(html`<enchanted-fab-ai label="No Extended FAB"></enchanted-fab-ai>`);
    const fabAi = await $("enchanted-fab-ai");
    
    // Check extended attribute is not present
    await expect(fabAi).not.toHaveAttribute("extended");
    
    // Label should not be rendered in the inner enchanted-fab
    const innerFab = await fabAi.shadow$("enchanted-fab");
    const label = await innerFab.shadow$(`span[part='${FAB_PARTS.LABEL}']`);
    await expect(label).not.toBeExisting();
  });

  it("enchanted-fab-ai - should support disabled property", async () => {
    renderComponent(html`<enchanted-fab-ai label="Disabled FAB" disabled></enchanted-fab-ai>`);
    const fabAi = await $("enchanted-fab-ai");
    
    // Check disabled attribute is present
    await expect(fabAi).toHaveAttribute("disabled");
    
    // Button should not be clickable
    await expect(fabAi).not.toBeClickable();
  });

  it("enchanted-fab-ai - should be clickable when not disabled", async () => {
    renderComponent(html`<enchanted-fab-ai label="Enabled FAB"></enchanted-fab-ai>`);
    const fabAi = await $("enchanted-fab-ai");
    
    // Check disabled attribute is not present
    await expect(fabAi).not.toHaveAttribute("disabled");
    
    // Button should be clickable
    await expect(fabAi).toBeClickable();
  });

  it("enchanted-fab-ai - should support icon property", async () => {
    const testIcon = html`<svg><circle r="10"/></svg>`;
    renderComponent(html`<enchanted-fab-ai .icon=${testIcon}></enchanted-fab-ai>`);
    const fabAi = await $("enchanted-fab-ai");
    
    const fabAiElement = document.querySelector("enchanted-fab-ai") as EnchantedFabAi;
    await expect(fabAiElement.icon).toBeDefined();
    
    // Icon is rendered in the inner enchanted-fab
    const innerFab = await fabAi.shadow$("enchanted-fab");
    const iconSlot = await innerFab.shadow$(`span[part='${FAB_PARTS.ICON}']`);
    await expect(iconSlot).toBeExisting();
  });

  it("enchanted-fab-ai - should update label text when property changes", async () => {
    renderComponent(html`<enchanted-fab-ai label="Initial Label" extended></enchanted-fab-ai>`);
    const fabAi = await $("enchanted-fab-ai");
    const fabAiElement = document.querySelector("enchanted-fab-ai") as EnchantedFabAi;
    
    const innerFab = await fabAi.shadow$("enchanted-fab");
    let label = await innerFab.shadow$(`span[part='${FAB_PARTS.LABEL}']`);
    await expect(label).toHaveText("Initial Label");
    
    // Update label programmatically to test property reactivity
    fabAiElement.label = "Updated Label";
    await fabAiElement.updateComplete;
    
    label = await innerFab.shadow$(`span[part='${FAB_PARTS.LABEL}']`);
    await expect(label).toHaveText("Updated Label");
  });

  it("enchanted-fab-ai - should support badge property", async () => {
    renderComponent(html`<enchanted-fab-ai label="FAB with Badge" badge></enchanted-fab-ai>`);
    const fabAi = await $("enchanted-fab-ai");
    
    // Check badge attribute is present on host
    await expect(fabAi).toHaveAttribute("badge");
    
    // Badge slot should be rendered in inner enchanted-fab
    const innerFab = await fabAi.shadow$("enchanted-fab");
    const badgeSlot = await innerFab.shadow$("slot[name='badge']");
    await expect(badgeSlot).toBeExisting();
  });

  it("enchanted-fab-ai - should not render badge slot when badge property is false", async () => {
    renderComponent(html`<enchanted-fab-ai label="FAB without Badge"></enchanted-fab-ai>`);
    const fabAi = await $("enchanted-fab-ai");
    
    // Check badge attribute is not present
    await expect(fabAi).not.toHaveAttribute("badge");
    
    // Badge slot should not be rendered in inner enchanted-fab
    const innerFab = await fabAi.shadow$("enchanted-fab");
    const badgeSlot = await innerFab.shadow$("slot[name='badge']");
    await expect(badgeSlot).not.toBeExisting();
  });

  it("enchanted-fab-ai - should have correct aria-label attribute", async () => {
    renderComponent(html`<enchanted-fab-ai label="Accessible FAB"></enchanted-fab-ai>`);
    const fabAi = await $("enchanted-fab-ai");
    const innerFab = await fabAi.shadow$("enchanted-fab");
    const button = await innerFab.shadow$("button");
    
    await expect(button).toHaveAttribute("aria-label", "Accessible FAB");
  });

  it("enchanted-fab-ai - should handle all properties together", async () => {
    renderComponent(html`<enchanted-fab-ai 
      label="Complete FAB" 
      extended 
      badge
      .icon=${html`<svg><circle r="10"/></svg>`}
    ></enchanted-fab-ai>`);
    const fabAiElement = await $("enchanted-fab-ai");
    
    // Check all attributes on host
    await expect(fabAiElement).toHaveAttribute("extended");
    await expect(fabAiElement).toHaveAttribute("badge");
    
    // Check label is rendered in inner enchanted-fab
    const innerFab = await fabAiElement.shadow$("enchanted-fab");
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
