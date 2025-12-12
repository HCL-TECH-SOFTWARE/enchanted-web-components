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
import { html, render } from 'lit';
import { $, browser, expect } from '@wdio/globals';
import { spyOn } from '@wdio/browser-runner';
import { v4 as uuid } from 'uuid';

// Component imports
import '../../../components/atomic-component/enchanted-tooltip';
import '../../../components/atomic-component/enchanted-button';

// Helper imports
import { TOOLTIP_PLACEMENT, TOOLTIP_TYPE, TOOLTIP_VARIANT } from '../../../types/cssClassEnums';
import { initSessionStorage } from '../../utils';
import { EnchantedTooltip } from '../../../components/atomic-component/enchanted-tooltip';
 
describe('EnchantedTooltip component testing', () => {
  before(async () => {
    await initSessionStorage();
    if (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  afterEach(() => {
    if (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  it('EnchantedTooltip - should render without crashing', async () => {
    let component = document.createElement('enchanted-tooltip');
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('EnchantedTooltip - removes component from document body and validates removal', async () => {
    let component = document.createElement('enchanted-tooltip');
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('EnchantedTooltip - should render component and validate default attributes', async () => { 
    render(
      html`
        <enchanted-tooltip show=true tooltiptext="sample-tooltiptext">
          <enchanted-button slot="target" buttontext="sample-buttontext"></enchanted-button>
        </enchanted-tooltip>
      `,
      document.body
    );

    let component = await $('enchanted-tooltip').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('tooltiptext', 'sample-tooltiptext');
    await expect(component).toHaveElementProperty('tooltipSize', TOOLTIP_VARIANT.TOOLTIP_SMALL);
    await expect(component).toHaveElementProperty('tooltipType', TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE);
    await expect(component).toHaveElementProperty('placement', TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM);
  });

  it('EnchantedTooltip - should render component with tooltip type, size, placement and validate', async () => { 
    render(
      html`
        <enchanted-tooltip 
          show=true 
          tooltiptext="sample-tooltiptext"
          tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}
          tooltipType=${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}
          placement=${TOOLTIP_PLACEMENT.TOOLTIP_TOP}
        >
          <enchanted-button slot="target" buttontext="sample-buttontext"></enchanted-button>
        </enchanted-tooltip>
      `,
      document.body
    );

    let component = await $('enchanted-tooltip').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('tooltiptext', 'sample-tooltiptext');
    await expect(component).toHaveElementProperty('tooltipSize', TOOLTIP_VARIANT.TOOLTIP_MEDIUM);
    await expect(component).toHaveElementProperty('tooltipType', TOOLTIP_TYPE.TOOLTIP_MULTI_LINE);
    await expect(component).toHaveElementProperty('placement', TOOLTIP_PLACEMENT.TOOLTIP_TOP);
  });

  it('EnchantedTooltip - should render component should render component and validate attributes for placement in TOP_START', async () => { 
    render(
      html`
        <enchanted-tooltip 
          show=true 
          tooltiptext="sample-tooltiptext"
          placement=${TOOLTIP_PLACEMENT.TOOLTIP_TOP_START}
        >
          <enchanted-button slot="target" buttontext="sample-buttontext"></enchanted-button>
        </enchanted-tooltip>
      `,
      document.body
    );

    let component = await $('enchanted-tooltip').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('placement', TOOLTIP_PLACEMENT.TOOLTIP_TOP_START);
  });

  it('EnchantedTooltip - should render component should render component and validate attributes for placement in TOP_END', async () => { 
    render(
      html`
        <enchanted-tooltip 
          show=true 
          tooltiptext="sample-tooltiptext"
          placement=${TOOLTIP_PLACEMENT.TOOLTIP_TOP_END}
        >
          <enchanted-button slot="target" buttontext="sample-buttontext"></enchanted-button>
        </enchanted-tooltip>
      `,
      document.body
    );

    let component = await $('enchanted-tooltip').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('placement', TOOLTIP_PLACEMENT.TOOLTIP_TOP_END);
  });

  it('EnchantedTooltip - should render component should render component and validate attributes for placement in BOTTOM_START', async () => { 
    render(
      html`
        <enchanted-tooltip 
          show=true 
          tooltiptext="sample-tooltiptext"
          placement=${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START}
        >
          <enchanted-button slot="target" buttontext="sample-buttontext"></enchanted-button>
        </enchanted-tooltip>
      `,
      document.body
    );

    let component = await $('enchanted-tooltip').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('placement', TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START);
  });

  it('EnchantedTooltip - should render component should render component and validate attributes for placement in BOTTOM_END', async () => { 
    render(
      html`
        <enchanted-tooltip 
          show=true 
          tooltiptext="sample-tooltiptext"
          placement=${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END}
        >
          <enchanted-button slot="target" buttontext="sample-buttontext"></enchanted-button>
        </enchanted-tooltip>
      `,
      document.body
    );

    let component = await $('enchanted-tooltip').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('placement', TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END);
  });

  it('EnchantedTooltip - should render component should render component and validate attributes for placement in RIGHT_START', async () => { 
    render(
      html`
        <enchanted-tooltip 
          show=true 
          tooltiptext="sample-tooltiptext"
          placement=${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_START}
        >
          <enchanted-button slot="target" buttontext="sample-buttontext"></enchanted-button>
        </enchanted-tooltip>
      `,
      document.body
    );

    let component = await $('enchanted-tooltip').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('placement', TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_START);
  });

  it('EnchantedTooltip - should render component should render component and validate attributes for placement in RIGHT', async () => { 
    render(
      html`
        <enchanted-tooltip 
          show=true 
          tooltiptext="sample-tooltiptext"
          placement=${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT}
        >
          <enchanted-button slot="target" buttontext="sample-buttontext"></enchanted-button>
        </enchanted-tooltip>
      `,
      document.body
    );

    let component = await $('enchanted-tooltip').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('placement', TOOLTIP_PLACEMENT.TOOLTIP_RIGHT);
  });

  it('EnchantedTooltip - should render component should render component and validate attributes for placement in RIGHT_END', async () => { 
    render(
      html`
        <enchanted-tooltip 
          show=true 
          tooltiptext="sample-tooltiptext"
          placement=${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_END}
        >
          <enchanted-button slot="target" buttontext="sample-buttontext"></enchanted-button>
        </enchanted-tooltip>
      `,
      document.body
    );

    let component = await $('enchanted-tooltip').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('placement', TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_END);
  });

  it('EnchantedTooltip - should render component should render component and validate attributes for placement in LEFT_START', async () => { 
    render(
      html`
        <enchanted-tooltip 
          show=true 
          tooltiptext="sample-tooltiptext"
          placement=${TOOLTIP_PLACEMENT.TOOLTIP_LEFT_START}
        >
          <enchanted-button slot="target" buttontext="sample-buttontext"></enchanted-button>
        </enchanted-tooltip>
      `,
      document.body
    );

    let component = await $('enchanted-tooltip').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('placement', TOOLTIP_PLACEMENT.TOOLTIP_LEFT_START);
  });

  it('EnchantedTooltip - should render component should render component and validate attributes for placement in LEFT', async () => { 
    render(
      html`
        <enchanted-tooltip 
          show=true 
          tooltiptext="sample-tooltiptext"
          placement=${TOOLTIP_PLACEMENT.TOOLTIP_LEFT}
        >
          <enchanted-button slot="target" buttontext="sample-buttontext"></enchanted-button>
        </enchanted-tooltip>
      `,
      document.body
    );

    let component = await $('enchanted-tooltip').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('placement', TOOLTIP_PLACEMENT.TOOLTIP_LEFT);
  });

  it('EnchantedTooltip - should render component should render component and validate attributes for placement in LEFT_END', async () => { 
    render(
      html`
        <enchanted-tooltip 
          show=true 
          tooltiptext="sample-tooltiptext"
          placement=${TOOLTIP_PLACEMENT.TOOLTIP_LEFT_END}
        >
          <enchanted-button slot="target" buttontext="sample-buttontext"></enchanted-button>
        </enchanted-tooltip>
      `,
      document.body
    );

    let component = await $('enchanted-tooltip').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('placement', TOOLTIP_PLACEMENT.TOOLTIP_LEFT_END);
  });

  it('EnchantedTooltip - should show tooltip on hover and hide on leave', async () => {
    render(
      html`
        <enchanted-tooltip tooltiptext="sample-tooltiptext">
          <enchanted-button slot="target" buttontext="sample-buttontext"></enchanted-button>
        </enchanted-tooltip>
      `,
      document.body
    );

    let component = await $('enchanted-tooltip').getElement();
    let targetButton = await component.$('enchanted-button[slot="target"]');
    let tooltipText = await component.shadow$(`[data-testid="tooltip-text"]`);

    await expect(component).not.toHaveAttribute('show');
    await expect(tooltipText).not.toBeDisplayed();

    await targetButton.moveTo();
    await browser.pause(50);

    let tooltipSlot = await component.$('>>>div[data-testid="tooltip-text"]').$('>>>slot').getElement();
    await expect(component).toHaveAttribute('show');
    await expect(await component.getAttribute('tooltiptext')).toEqual('sample-tooltiptext');

    await targetButton.moveTo({ xOffset: 100, yOffset: 100 });
    await expect(component).not.toHaveAttribute('show');
    await expect(tooltipText).not.toBeDisplayed();
    await expect(tooltipSlot).not.toBeDisplayed();
  });

  it('EnchantedTooltip - should render italic tooltip', async () => {
    const id = uuid();

    render(
      html`
        <enchanted-tooltip 
          show=true
        >
          <i slot="tooltip" id=${id}>sample-tooltiptext</i>
          <enchanted-button slot="target" buttontext="sample-buttontext"></enchanted-button>
        </enchanted-tooltip>
      `,
      document.body
    );

    let component = await $('i').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('id', id);
  });
  
  it('EnchantedTooltip - should call unmount and verify cleanup operations', async () => {
    const component = document.createElement('enchanted-tooltip') as EnchantedTooltip;
    document.body.appendChild(component);

    const cancelAnimationFrameSpy = spyOn(window, 'cancelAnimationFrame');
    const clearTimeoutSpy = spyOn(window, 'clearTimeout');
    const detachListenersSpy = spyOn(component, 'detachListeners');
    const stopObserversSpy = spyOn(component, 'stopObservers');

    component.rafId = 123;
    Object.defineProperty(component, '_targetDismissTimer', {
      value: 456,
      writable: true,
      configurable: true,
    });

    component.unmount();

    await expect(cancelAnimationFrameSpy).toHaveBeenCalledWith(123);
    await expect(clearTimeoutSpy).toHaveBeenCalledWith(456);
    await expect(detachListenersSpy).toHaveBeenCalled();
    await expect(stopObserversSpy).toHaveBeenCalled();
  });

  it('EnchantedTooltip - should clear _targetDismissTimer when target becomes visible', async () => {
    const component = document.createElement('enchanted-tooltip') as EnchantedTooltip;
    document.body.appendChild(component);

    const clearTimeoutSpy = spyOn(window, 'clearTimeout');

    Object.defineProperty(component, '_targetDismissTimer', {
      value: 123,
      writable: true,
      configurable: true,
    });

    const mockEntry = { isIntersecting: true, intersectionRatio: 0.5 } as IntersectionObserverEntry;
    component.onTargetVisibility([mockEntry]);

    await expect(clearTimeoutSpy).toHaveBeenCalledWith(123);
    await expect(component['_targetDismissTimer']).toBeNull();
  });

  it('EnchantedTooltip - should set _targetDismissTimer when target becomes invisible', async () => {
    const component = document.createElement('enchanted-tooltip') as EnchantedTooltip;
    document.body.appendChild(component);

    const setTimeoutSpy = spyOn(window, 'setTimeout');

    await expect(component['_targetDismissTimer']).toBeNull();

    const mockEntry = { isIntersecting: false, intersectionRatio: 0 } as IntersectionObserverEntry;
    component.onTargetVisibility([mockEntry]);

    await expect(setTimeoutSpy).toHaveBeenCalled();
    await expect(component.isTargetVisible).toBe(false);
    await expect(component.show).toBe(false);
  });

  it('EnchantedTooltip - should show tooltip on focus and hide on blur', async () => {
    render(
      html`
        <enchanted-tooltip tooltiptext="sample-tooltiptext">
          <enchanted-button slot="target" buttontext="sample-buttontext"></enchanted-button>
        </enchanted-tooltip>
      `,
      document.body
    );

    const component = await $('enchanted-tooltip').getElement();
    const tooltipTextSlot = await component.$('>>>div[data-testid="tooltip-text"] > slot');

    await expect(component).not.toHaveAttribute('show');

    await browser.keys(['Tab']);
    await browser.pause(100);

    await expect(component).toHaveAttribute('show');
    await expect(tooltipTextSlot).toBeDisplayed();
    await expect(tooltipTextSlot).toHaveText('sample-tooltiptext');

    await browser.keys(['Tab']);

    await browser.pause(100); 

    await expect(component).not.toHaveAttribute('show');
    await expect(tooltipTextSlot).not.toBeDisplayed();
  });

  it('EnchantedTooltip - should fall back to document.documentElement when window.visualViewport is null', async () => {
    const originalDocumentElement = document.documentElement;
    Object.defineProperty(document, 'documentElement', {
      value: {
        clientWidth: 1200,
        clientHeight: 900,
      },
      writable: true,
      configurable: true,
    });

    const originalVisualViewport = window.visualViewport;
    Object.defineProperty(window, 'visualViewport', {
      value: null,
      writable: true,
      configurable: true,
    });
    
    const component = new EnchantedTooltip();

    const viewportBox = component.readVisibleViewportBox();

    await expect(viewportBox).toEqual({
      left: 0,
      top: 0,
      right: 1200,
      bottom: 900,
      width: 1200,
      height: 900
    });

    Object.defineProperty(window, 'visualViewport', {
      value: originalVisualViewport,
      writable: true,
      configurable: true,
    });
    Object.defineProperty(document, 'documentElement', {
      value: originalDocumentElement,
      writable: true,
      configurable: true,
    });
  });

  it('EnchantedTooltip - should always return TOOLTIP_MULTI_LINE if prevType is TOOLTIP_MULTI_LINE', async () => {
    const component = new EnchantedTooltip();
    const singleLineWidth = 200;
    const availableWidth = 300;
    const prevType = TOOLTIP_TYPE.TOOLTIP_MULTI_LINE;

    const result = component.decideEffectiveType(singleLineWidth, availableWidth, prevType);

    await expect(result).toBe(TOOLTIP_TYPE.TOOLTIP_MULTI_LINE);
  });

  it('EnchantedTooltip - should hide the tooltip if the target is not visible', async () => {
    render(
      html`
              <enchanted-tooltip show=true tooltiptext="sample-tooltiptext">
                  <enchanted-button slot="target" buttontext="sample-buttontext"></enchanted-button>
              </enchanted-tooltip>
          `,
      document.body
    );

    const component = document.querySelector('enchanted-tooltip') as EnchantedTooltip;
    await component.updateComplete;

    const isTargetVisibleSpy = spyOn(component, 'isTargetElementVisible').mockReturnValue(false);

    const tooltip = component.renderRoot.querySelector(`#tooltip${component.componentId}`) as HTMLElement;

    await component.updateTooltipPosition();

    await expect(tooltip.style.visibility).toBe('hidden');
    await expect(isTargetVisibleSpy).toHaveBeenCalled();
  });
});
