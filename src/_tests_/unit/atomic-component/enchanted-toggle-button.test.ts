/* ======================================================================== *
 * Copyright 2025, 2026 HCL America Inc.                                    *
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

import { html } from 'lit/static-html.js';
import { expect, $, browser } from '@wdio/globals';

import { initSessionStorage, renderComponent } from '../../utils';
import '../../../components/atomic-component/enchanted-toggle-button';
import '../../../components/atomic-component/enchanted-badge';
import '../../../components/atomic-component/enchanted-tooltip';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/add';

import { EnchantedToggleButton } from '../../../components/atomic-component/enchanted-toggle-button';
import { TOGGLE_BUTTON_PARTS } from '../../../types/cssClassEnums';
import {
  ENCHANTED_TOGGLE_BUTTON_TAG,
  ENCHANTED_TOGGLE_BUTTON_TAG_NAME,
  ENCHANTED_TOOLTIP_TAG_NAME,
} from '../../../components/tags';

afterEach(() => {
  document.body.innerHTML = '';
});

const getToggleButton = async (): Promise<EnchantedToggleButton> => {
  const component = await $(ENCHANTED_TOGGLE_BUTTON_TAG_NAME);
  await component.waitForExist();
  return document.querySelector(ENCHANTED_TOGGLE_BUTTON_TAG_NAME) as EnchantedToggleButton;
};

describe(`${ENCHANTED_TOGGLE_BUTTON_TAG_NAME} - unit test`, () => {
  before(async () => {
    await initSessionStorage();
  });

  it('should render with expected default property values', async () => {
    renderComponent(html`<${ENCHANTED_TOGGLE_BUTTON_TAG}></${ENCHANTED_TOGGLE_BUTTON_TAG}>`);

    const toggleButton = await getToggleButton();
    await expect(toggleButton.toggleOn).toBe(false);
    await expect(toggleButton.showBadge).toBe(false);
    await expect(toggleButton.disabled).toBe(false);
    await expect(toggleButton.padding).toBe(false);
    await expect(toggleButton.iconSize).toBe('16');
    await expect(toggleButton.tooltipText).toBe('');
    await expect(toggleButton.firstType).toBe(false);
    await expect(toggleButton.lastType).toBe(false);
    await expect(toggleButton.ariaLabel).toBe('');
  });

  it('should render single button with expected default part tokens', async () => {
    renderComponent(html`
      <${ENCHANTED_TOGGLE_BUTTON_TAG} ariaLabel="Toggle">
        <icon-add slot="icon"></icon-add>
      </${ENCHANTED_TOGGLE_BUTTON_TAG}>
    `);

    const host = await $(ENCHANTED_TOGGLE_BUTTON_TAG_NAME);
    const button = await host.$('>>>button[data-testid="enchanted-toggle-single-button"]');
    await expect(button).toBeExisting();

    const part = await button.getAttribute('part');
    await expect(part).toContain(TOGGLE_BUTTON_PARTS.TOGGLE_SINGLE_BUTTON);
    await expect(part).toContain(TOGGLE_BUTTON_PARTS.TOGGLE_BUTTON_SMALL);
    await expect(part).not.toContain(TOGGLE_BUTTON_PARTS.TOGGLE_BUTTON_WITH_PADDING);
  });

  it('should include small-size and padding part tokens when configured', async () => {
    renderComponent(html`
      <${ENCHANTED_TOGGLE_BUTTON_TAG} iconSize="16" padding ariaLabel="Toggle">
        <icon-add slot="icon"></icon-add>
      </${ENCHANTED_TOGGLE_BUTTON_TAG}>
    `);

    const host = await $(ENCHANTED_TOGGLE_BUTTON_TAG_NAME);
    const button = await host.$('>>>button[data-testid="enchanted-toggle-single-button"]');
    const part = await button.getAttribute('part');

    await expect(part).toContain(TOGGLE_BUTTON_PARTS.TOGGLE_BUTTON_SMALL);
    await expect(part).toContain(TOGGLE_BUTTON_PARTS.TOGGLE_BUTTON_WITH_PADDING);
  });

  it('should render badge slot only when showBadge is true', async () => {
    renderComponent(html`
      <${ENCHANTED_TOGGLE_BUTTON_TAG} ariaLabel="Toggle" showBadge>
        <icon-add slot="icon"></icon-add>
        <enchanted-badge slot="badge" badge="text" text="5"></enchanted-badge>
      </${ENCHANTED_TOGGLE_BUTTON_TAG}>
    `);

    const hostWithBadge = await $(ENCHANTED_TOGGLE_BUTTON_TAG_NAME);
    const badgeSlot = await hostWithBadge.$('>>>slot[name="badge"]');
    await expect(badgeSlot).toBeExisting();

    renderComponent(html`
      <${ENCHANTED_TOGGLE_BUTTON_TAG} ariaLabel="Toggle">
        <icon-add slot="icon"></icon-add>
      </${ENCHANTED_TOGGLE_BUTTON_TAG}>
    `);

    const hostWithoutBadge = await $(ENCHANTED_TOGGLE_BUTTON_TAG_NAME);
    const missingBadgeSlot = await hostWithoutBadge.$('>>>slot[name="badge"]');
    await expect(missingBadgeSlot).not.toExist();
  });

  it('should render tooltip wrapper only when tooltipText has non-whitespace content', async () => {
    renderComponent(html`
      <${ENCHANTED_TOGGLE_BUTTON_TAG} tooltipText="  Has tooltip  " ariaLabel="Toggle">
        <icon-add slot="icon"></icon-add>
      </${ENCHANTED_TOGGLE_BUTTON_TAG}>
    `);

    const host = await $(ENCHANTED_TOGGLE_BUTTON_TAG_NAME);
    const tooltip = await host.$(`>>>${ENCHANTED_TOOLTIP_TAG_NAME}`);
    await expect(tooltip).toBeExisting();

    renderComponent(html`
      <${ENCHANTED_TOGGLE_BUTTON_TAG} tooltipText="   " ariaLabel="Toggle">
        <icon-add slot="icon"></icon-add>
      </${ENCHANTED_TOGGLE_BUTTON_TAG}>
    `);

    const hostNoTooltip = await $(ENCHANTED_TOGGLE_BUTTON_TAG_NAME);
    const missingTooltip = await hostNoTooltip.$(`>>>${ENCHANTED_TOOLTIP_TAG_NAME}`);
    await expect(missingTooltip).not.toExist();
  });

  it('should toggle state and dispatch toggle-change event when clicked', async () => {
    renderComponent(html`
      <${ENCHANTED_TOGGLE_BUTTON_TAG} ariaLabel="Toggle">
        <icon-add slot="icon"></icon-add>
      </${ENCHANTED_TOGGLE_BUTTON_TAG}>
    `);

    const toggleButton = await getToggleButton();
    let emittedValue: boolean | undefined;
    toggleButton.addEventListener('toggle-change', (event: Event) => {
      emittedValue = (event as CustomEvent<{ toggleOn: boolean }>).detail.toggleOn;
    });

    const host = await $(ENCHANTED_TOGGLE_BUTTON_TAG_NAME);
    const button = await host.$('>>>button[data-testid="enchanted-toggle-single-button"]');
    await browser.execute((el: HTMLElement) => { el.click(); }, button);

    await expect(toggleButton.toggleOn).toBe(true);
    await expect(emittedValue).toBe(true);

    await browser.execute((el: HTMLElement) => { el.click(); }, button);
    await expect(toggleButton.toggleOn).toBe(false);
  });

  it('should not toggle or emit when disabled', async () => {
    renderComponent(html`
      <${ENCHANTED_TOGGLE_BUTTON_TAG} disabled ariaLabel="Toggle">
        <icon-add slot="icon"></icon-add>
      </${ENCHANTED_TOGGLE_BUTTON_TAG}>
    `);

    const toggleButton = await getToggleButton();
    let emissionCount = 0;
    toggleButton.addEventListener('toggle-change', () => {
      emissionCount += 1;
    });

    const host = await $(ENCHANTED_TOGGLE_BUTTON_TAG_NAME);
    const button = await host.$('>>>button[data-testid="enchanted-toggle-single-button"]');
    await browser.execute((el: HTMLElement) => { el.click(); }, button);

    await expect(toggleButton.toggleOn).toBe(false);
    await expect(emissionCount).toBe(0);
  });

  it('should early-return in click handler when disabled flag is true', async () => {
    renderComponent(html`
      <${ENCHANTED_TOGGLE_BUTTON_TAG} ariaLabel="Toggle">
        <icon-add slot="icon"></icon-add>
      </${ENCHANTED_TOGGLE_BUTTON_TAG}>
    `);

    const toggleButton = await getToggleButton();
    toggleButton.disabled = true;
    await toggleButton.updateComplete;

    let emitted = false;
    toggleButton.addEventListener('toggle-change', () => {
      emitted = true;
    });

    (toggleButton as unknown as { handleClick: (event: Event) => void }).handleClick(new Event('click'));

    await expect(toggleButton.toggleOn).toBe(false);
    await expect(emitted).toBe(false);
  });

  it('should update assigned icon size only when iconSize changes', async () => {
    renderComponent(html`
      <${ENCHANTED_TOGGLE_BUTTON_TAG} ariaLabel="Toggle">
        <icon-add slot="icon"></icon-add>
      </${ENCHANTED_TOGGLE_BUTTON_TAG}>
    `);

    const toggleButton = await getToggleButton();
    const icon = toggleButton.querySelector('[slot="icon"]') as HTMLElement & { size?: string };

    await expect(icon.size).toBe('16');

    toggleButton.tooltipText = 'No icon resize update expected';
    await toggleButton.updateComplete;
    await expect(icon.size).toBe('16');

    toggleButton.iconSize = '20';
    await toggleButton.updateComplete;
    await expect(icon.size).toBe('20');
  });

  it('should safely ignore icon size update when no icon is assigned', async () => {
    renderComponent(html`<${ENCHANTED_TOGGLE_BUTTON_TAG} ariaLabel="Toggle"></${ENCHANTED_TOGGLE_BUTTON_TAG}>`);

    const toggleButton = await getToggleButton();
    toggleButton.iconSize = '20';
    await toggleButton.updateComplete;

    await expect(toggleButton.iconSize).toBe('20');
  });

  it('should safely handle iconSize update when icon slot lookup returns null', async () => {
    renderComponent(html`
      <${ENCHANTED_TOGGLE_BUTTON_TAG} ariaLabel="Toggle">
        <icon-add slot="icon"></icon-add>
      </${ENCHANTED_TOGGLE_BUTTON_TAG}>
    `);

    const toggleButton = await getToggleButton();
    const renderRoot = toggleButton.renderRoot as ShadowRoot & {
      querySelector: (selector: string) => Element | null;
    };
    const originalQuerySelector = renderRoot.querySelector.bind(renderRoot);
    renderRoot.querySelector = () => {
      return null;
    };

    toggleButton.iconSize = '20';
    await toggleButton.updateComplete;

    renderRoot.querySelector = originalQuerySelector;
    await expect(toggleButton.iconSize).toBe('20');
  });

  it('should treat non-string tooltipText as empty and render without tooltip wrapper', async () => {
    renderComponent(html`
      <${ENCHANTED_TOGGLE_BUTTON_TAG} ariaLabel="Toggle">
        <icon-add slot="icon"></icon-add>
      </${ENCHANTED_TOGGLE_BUTTON_TAG}>
    `);

    const toggleButton = await getToggleButton();
    (toggleButton as unknown as { tooltipText: unknown }).tooltipText = 123;
    toggleButton.requestUpdate();
    await toggleButton.updateComplete;

    const host = await $(ENCHANTED_TOGGLE_BUTTON_TAG_NAME);
    const tooltip = await host.$(`>>>${ENCHANTED_TOOLTIP_TAG_NAME}`);
    await expect(tooltip).not.toExist();
  });

  it('should execute already-registered module branch without errors', async () => {
    const initialDefinition = customElements.get(ENCHANTED_TOGGLE_BUTTON_TAG_NAME);
    await expect(!!initialDefinition).toBe(true);
    await expect(initialDefinition?.name).toBe('EnchantedToggleButton');
  });

  it('should reflect firstType and lastType attributes when changed', async () => {
    renderComponent(html`<${ENCHANTED_TOGGLE_BUTTON_TAG}></${ENCHANTED_TOGGLE_BUTTON_TAG}>`);

    const toggleButton = await getToggleButton();
    toggleButton.firstType = false;
    toggleButton.lastType = false;
    await toggleButton.updateComplete;

    const host = await $(ENCHANTED_TOGGLE_BUTTON_TAG_NAME);
    await expect(host).not.toHaveAttribute('firsttype');
    await expect(host).not.toHaveAttribute('lasttype');

    toggleButton.firstType = true;
    toggleButton.lastType = true;
    await toggleButton.updateComplete;

    await expect(host).toHaveAttribute('firsttype');
    await expect(host).toHaveAttribute('lasttype');
  });
});
