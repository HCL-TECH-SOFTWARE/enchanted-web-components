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
import { $, browser, expect } from '@wdio/globals';
import { html, render } from 'lit';

// Component imports
import '../../../components/atomic-component/enchanted-circular-progress';
import { EnchantedCircularProgress } from '../../../components/atomic-component/enchanted-circular-progress';

// Helper imports
import { initSessionStorage } from '../../utils';

describe('EnchantedCircularProgress component testing', () => {
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

  it('EnchantedCircularProgress - should render without crashing', async () => {
    let component = document.createElement('enchanted-circular-progress');
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    component.remove();
  });

  it('EnchantedCircularProgress - removes component from document body and validates removal', async () => {
    let component = document.createElement('enchanted-circular-progress');
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('EnchantedCircularProgress - validate default value of attributes', async () => {
    let component = document.createElement('enchanted-circular-progress') as EnchantedCircularProgress;
    document.body.appendChild(component);
    await expect(component).toHaveElementProperty('size', 40);
    await expect(component).toHaveElementProperty('strokewidth', 3.6);
    await expect(component).toHaveElementProperty('trackcolor', '#D6D6D6');
    await expect(component).toHaveElementProperty('progresscolor', '#0550DC');
    await expect(component).toHaveElementProperty('disableShrink', false);
    component.remove();
  });

  it('EnchantedCircularProgress - should validate null for non-existent attributes', async () => {
    let component = document.createElement('enchanted-circular-progress');
    await expect(component.getAttribute('nonExistentAttribute')).toBeNull();
    component.remove();
  });

  it('EnchantedCircularProgress - should render component with default properties', async () => {
    render(
      html`
        <enchanted-circular-progress></enchanted-circular-progress>
      `,
      document.body
    );
    let component = await $('enchanted-circular-progress').getElement();
    await expect(component).toBeDisplayed();

    // Validate SVG exists with progressbar role
    let svgElement = await component.$('>>>svg[role="progressbar"]').getElement();
    await expect(svgElement).toBeDisplayed();
    await expect(svgElement).toHaveAttribute('aria-label', 'Loading');

    // Validate track circle exists
    let trackCircle = await svgElement.$('>>>circle.enchanted-circular-progress-track').getElement();
    await expect(trackCircle).toBeDisplayed();
    await expect(trackCircle).toHaveAttribute('stroke', '#D6D6D6');

    // Validate progress circle exists
    let progressCircle = await svgElement.$('>>>circle.enchanted-circular-progress-circle').getElement();
    await expect(progressCircle).toBeDisplayed();
    await expect(progressCircle).toHaveAttribute('stroke', '#0550DC');
    await expect(progressCircle).toHaveAttribute('stroke-linecap', 'round');
  });

  it('EnchantedCircularProgress - should render component with custom size', async () => {
    render(
      html`
        <enchanted-circular-progress size="60"></enchanted-circular-progress>
      `,
      document.body
    );
    let component = await $('enchanted-circular-progress').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('size', 60);

    let spinnerDiv = await component.$('>>>div.enchanted-circular-progress-spinner').getElement();
    let style = await spinnerDiv.getAttribute('style');
    await expect(style).toContain('width: 60px');
    await expect(style).toContain('height: 60px');

    let svgElement = await component.$('>>>svg').getElement();
    await expect(svgElement).toHaveAttribute('viewBox', '0 0 60 60');
  });

  it('EnchantedCircularProgress - should render component with custom stroke width', async () => {
    render(
      html`
        <enchanted-circular-progress strokewidth="5"></enchanted-circular-progress>
      `,
      document.body
    );
    let component = await $('enchanted-circular-progress').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('strokewidth', 5);

    let svgElement = await component.$('>>>svg').getElement();
    let trackCircle = await svgElement.$('>>>circle.enchanted-circular-progress-track').getElement();
    await expect(trackCircle).toHaveAttribute('stroke-width', '5');

    let progressCircle = await svgElement.$('>>>circle.enchanted-circular-progress-circle').getElement();
    await expect(progressCircle).toHaveAttribute('stroke-width', '5');
  });

  it('EnchantedCircularProgress - should render component with custom track color', async () => {
    render(
      html`
        <enchanted-circular-progress trackcolor="#FF0000"></enchanted-circular-progress>
      `,
      document.body
    );
    let component = await $('enchanted-circular-progress').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('trackcolor', '#FF0000');

    let svgElement = await component.$('>>>svg').getElement();
    let trackCircle = await svgElement.$('>>>circle.enchanted-circular-progress-track').getElement();
    await expect(trackCircle).toHaveAttribute('stroke', '#FF0000');
  });

  it('EnchantedCircularProgress - should render component with custom progress color', async () => {
    render(
      html`
        <enchanted-circular-progress progresscolor="#00FF00"></enchanted-circular-progress>
      `,
      document.body
    );
    let component = await $('enchanted-circular-progress').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('progresscolor', '#00FF00');

    let svgElement = await component.$('>>>svg').getElement();
    let progressCircle = await svgElement.$('>>>circle.enchanted-circular-progress-circle').getElement();
    await expect(progressCircle).toHaveAttribute('stroke', '#00FF00');
  });

  it('EnchantedCircularProgress - should render component with disable-shrink attribute', async () => {
    render(
      html`
        <enchanted-circular-progress disable-shrink></enchanted-circular-progress>
      `,
      document.body
    );
    let component = await $('enchanted-circular-progress').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('disableShrink', true);

    let svgElement = await component.$('>>>svg').getElement();
    let progressCircle = await svgElement.$('>>>circle.enchanted-circular-progress-circle').getElement();
    let classValue = await progressCircle.getAttribute('class');
    await expect(classValue).toContain('disable-shrink');
  });

  it('EnchantedCircularProgress - should render component without disable-shrink class by default', async () => {
    render(
      html`
        <enchanted-circular-progress></enchanted-circular-progress>
      `,
      document.body
    );
    let component = await $('enchanted-circular-progress').getElement();
    await expect(component).toBeDisplayed();

    let svgElement = await component.$('>>>svg').getElement();
    let progressCircle = await svgElement.$('>>>circle.enchanted-circular-progress-circle').getElement();
    let classValue = await progressCircle.getAttribute('class');
    await expect(classValue).not.toContain('disable-shrink');
    await expect(classValue).toBe('enchanted-circular-progress-circle');
  });

  it('EnchantedCircularProgress - should render component with all custom properties', async () => {
    render(
      html`
        <enchanted-circular-progress
          size="80"
          strokewidth="6"
          trackcolor="#CCCCCC"
          progresscolor="#FF6600"
          disable-shrink>
        </enchanted-circular-progress>
      `,
      document.body
    );
    let component = await $('enchanted-circular-progress').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('size', 80);
    await expect(component).toHaveElementProperty('strokewidth', 6);
    await expect(component).toHaveElementProperty('trackcolor', '#CCCCCC');
    await expect(component).toHaveElementProperty('progresscolor', '#FF6600');
    await expect(component).toHaveElementProperty('disableShrink', true);

    let spinnerDiv = await component.$('>>>div.enchanted-circular-progress-spinner').getElement();
    let style = await spinnerDiv.getAttribute('style');
    await expect(style).toContain('width: 80px');
    await expect(style).toContain('height: 80px');

    let svgElement = await component.$('>>>svg').getElement();
    await expect(svgElement).toHaveAttribute('viewBox', '0 0 80 80');

    let trackCircle = await svgElement.$('>>>circle.enchanted-circular-progress-track').getElement();
    await expect(trackCircle).toHaveAttribute('stroke', '#CCCCCC');
    await expect(trackCircle).toHaveAttribute('stroke-width', '6');

    let progressCircle = await svgElement.$('>>>circle.enchanted-circular-progress-circle').getElement();
    await expect(progressCircle).toHaveAttribute('stroke', '#FF6600');
    await expect(progressCircle).toHaveAttribute('stroke-width', '6');
    let classValue = await progressCircle.getAttribute('class');
    await expect(classValue).toContain('disable-shrink');
  });

  it('EnchantedCircularProgress - should update properties dynamically', async () => {
    let component = document.createElement('enchanted-circular-progress') as EnchantedCircularProgress;
    document.body.appendChild(component);

    // Initial values
    await expect(component).toHaveElementProperty('size', 40);
    await expect(component).toHaveElementProperty('progresscolor', '#0550DC');

    // Update properties
    component.size = 50;
    component.progresscolor = '#123456';
    await browser.pause(100); // Wait for re-render

    await expect(component).toHaveElementProperty('size', 50);
    await expect(component).toHaveElementProperty('progresscolor', '#123456');

    component.remove();
  });

  it('EnchantedCircularProgress - should calculate correct circle dimensions', async () => {
    render(
      html`
        <enchanted-circular-progress size="40" strokewidth="3.6"></enchanted-circular-progress>
      `,
      document.body
    );
    let component = await $('enchanted-circular-progress').getElement();
    await expect(component).toBeDisplayed();

    let svgElement = await component.$('>>>svg').getElement();
    let circles = await svgElement.$$('>>>circle');

    // Both circles should have same dimensions
    for (const circle of circles) {
      // radius = (size - strokewidth) / 2 = (40 - 3.6) / 2 = 18.2
      await expect(circle).toHaveAttribute('r', '18.2');
      // center = size / 2 = 40 / 2 = 20
      await expect(circle).toHaveAttribute('cx', '20');
      await expect(circle).toHaveAttribute('cy', '20');
      await expect(circle).toHaveAttribute('fill', 'none');
    }
  });

  it('EnchantedCircularProgress - should have correct CSS classes', async () => {
    render(
      html`
        <enchanted-circular-progress></enchanted-circular-progress>
      `,
      document.body
    );
    let component = await $('enchanted-circular-progress').getElement();
    await expect(component).toBeDisplayed();

    let rootDiv = await component.$('>>>div').getElement();
    let rootClass = await rootDiv.getAttribute('class');
    await expect(rootClass).toBe('enchanted-circular-progress-root');

    let svgElement = await component.$('>>>svg').getElement();
    let svgClass = await svgElement.getAttribute('class');
    await expect(svgClass).toBe('enchanted-circular-progress-svg');

    let trackCircle = await svgElement.$('>>>circle.enchanted-circular-progress-track').getElement();
    let trackClass = await trackCircle.getAttribute('class');
    await expect(trackClass).toBe('enchanted-circular-progress-track');

    let progressCircle = await svgElement.$('>>>circle.enchanted-circular-progress-circle').getElement();
    let progressClass = await progressCircle.getAttribute('class');
    await expect(progressClass).toBe('enchanted-circular-progress-circle');
  });

  it('EnchantedCircularProgress - should render with small size', async () => {
    render(
      html`
        <enchanted-circular-progress size="20" strokewidth="2"></enchanted-circular-progress>
      `,
      document.body
    );
    let component = await $('enchanted-circular-progress').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('size', 20);

    let spinnerDiv = await component.$('>>>div.enchanted-circular-progress-spinner').getElement();
    let style = await spinnerDiv.getAttribute('style');
    await expect(style).toContain('width: 20px');
    await expect(style).toContain('height: 20px');
  });

  it('EnchantedCircularProgress - should render with large size', async () => {
    render(
      html`
        <enchanted-circular-progress size="100" strokewidth="8"></enchanted-circular-progress>
      `,
      document.body
    );
    let component = await $('enchanted-circular-progress').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('size', 100);

    let spinnerDiv = await component.$('>>>div.enchanted-circular-progress-spinner').getElement();
    let style = await spinnerDiv.getAttribute('style');
    await expect(style).toContain('width: 100px');
    await expect(style).toContain('height: 100px');
  });

  it('EnchantedCircularProgress - should have animation styles in root div', async () => {
    render(
      html`
        <enchanted-circular-progress></enchanted-circular-progress>
      `,
      document.body
    );
    let component = await $('enchanted-circular-progress').getElement();
    await expect(component).toBeDisplayed();

    let rootDiv = await component.$('>>>div.enchanted-circular-progress-root').getElement();
    let style = await rootDiv.getAttribute('style');

    // Check for CSS custom properties
    await expect(style).toContain('--stroke-dasharray-start:');
    await expect(style).toContain('--stroke-dasharray-mid:');
    await expect(style).toContain('--stroke-dasharray-end:');
    await expect(style).toContain('--stroke-dashoffset-mid:');
    await expect(style).toContain('--stroke-dashoffset-end:');
    await expect(style).toContain('--stroke-dasharray-shrink:');
  });

  it('EnchantedCircularProgress - should toggle disable-shrink attribute', async () => {
    let component = document.createElement('enchanted-circular-progress') as EnchantedCircularProgress;
    document.body.appendChild(component);

    // Initially false
    await expect(component).toHaveElementProperty('disableShrink', false);

    // Set to true
    component.disableShrink = true;
    await browser.pause(100);
    await expect(component).toHaveElementProperty('disableShrink', true);

    // Set back to false
    component.disableShrink = false;
    await browser.pause(100);
    await expect(component).toHaveElementProperty('disableShrink', false);

    component.remove();
  });
});
