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

// Component import
import "../../../components/atomic-component/enchanted-accordion-summary";
function renderSummaryTemplate({
  label = "",
  secondaryText = "",
}: {
  label?: string;
  secondaryText?: string;
} = {}) {
  renderComponent(html`
    <enchanted-accordion-summary label=${label} secondaryText=${secondaryText}>
    </enchanted-accordion-summary>
  `);
}
describe("<enchanted-accordion-summary> render", () => {
  it("should render part='label' with correct text", async () => {
    renderSummaryTemplate({ label: "Test Label" });
    const summary = await $("enchanted-accordion-summary");
    const labelPart = await summary.shadow$('[part="label"]');
    const labelText = await labelPart.getText();
    expect(labelText).toBe("Test Label");
  });
  it("should render part='secondary' with correct text", async () => {
    renderSummaryTemplate({ secondaryText: "Test Secondary Text" });
    const summary = await $("enchanted-accordion-summary");
    const secondaryTextPart = await summary.shadow$('[part="summary"]');
    expect(secondaryTextPart).not.toBeNull();
    const secondaryText = await secondaryTextPart.getText();
    expect(secondaryText).toBe("Test Secondary Text");
  });
  it("should  render secondary text part when not provided", async () => {
    renderSummaryTemplate({ label: "Test Label" });
    const summary = await $("enchanted-accordion-summary");
    const secondaryTextPart = await summary.shadow$('[part="secondary"]');
    if (secondaryTextPart === null) {
      expect(secondaryTextPart).toBeNull();
    } else {
      const exists = await secondaryTextPart.isExisting();
      expect(exists).toBe(true);
    }
  });
});
