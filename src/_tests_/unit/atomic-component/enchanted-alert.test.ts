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
import { render } from 'lit';
import { html } from 'lit/static-html.js';
import { $, expect } from '@wdio/globals';

// Component imports
import '../../../components/atomic-component/enchanted-alert';

// Helpers imports
import { ALERT_SEVERITY, ALERT_VARIANTS } from '../../../types/cssClassEnums';
import { ENCHANTED_ALERT_TAG, ENCHANTED_ALERT_TAG_NAME } from '../../../components/tags';

describe(`${ENCHANTED_ALERT_TAG_NAME} component testing`, () => {
  before(() => {
    if (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  afterEach(() => {
    if (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  it('should render without crashing', async () => {
    let component = document.createElement(ENCHANTED_ALERT_TAG_NAME);
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('should render severity="info" variant="contained"', async () => {
    render(
      html`
        <${ENCHANTED_ALERT_TAG} message="contained-info" severity="info" variant="contained"></${ENCHANTED_ALERT_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_ALERT_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('variant', ALERT_VARIANTS.ALERT_CONTAINED);
    await expect(component).toHaveAttribute('severity', ALERT_SEVERITY.ALERT_INFO);
    await expect(component).toHaveAttribute('message', 'contained-info');
  });

  it('should render severity="info" variant="outlined"', async () => {
    render(
      html`
        <${ENCHANTED_ALERT_TAG} message="outlined-info" severity="info" variant="outlined"></${ENCHANTED_ALERT_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_ALERT_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('variant', ALERT_VARIANTS.ALERT_OUTLINED);
    await expect(component).toHaveAttribute('severity', ALERT_SEVERITY.ALERT_INFO);
    await expect(component).toHaveAttribute('message', 'outlined-info');
  });

  it('should render severity="warning" variant="contained"', async () => {
    render(
      html`
        <${ENCHANTED_ALERT_TAG} message="contained-warning" severity="warning" variant="contained"></${ENCHANTED_ALERT_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_ALERT_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('variant', ALERT_VARIANTS.ALERT_CONTAINED);
    await expect(component).toHaveAttribute('severity', ALERT_SEVERITY.ALERT_WARNING);
    await expect(component).toHaveAttribute('message', 'contained-warning');
  });

  it('should render severity="warning" variant="outlined"', async () => {
    render(
      html`
        <${ENCHANTED_ALERT_TAG} message="outlined-warning" severity="warning" variant="outlined"></${ENCHANTED_ALERT_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_ALERT_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('variant', ALERT_VARIANTS.ALERT_OUTLINED);
    await expect(component).toHaveAttribute('severity', ALERT_SEVERITY.ALERT_WARNING);
    await expect(component).toHaveAttribute('message', 'outlined-warning');
  });

  it('should render severity="success" variant="contained"', async () => {
    render(
      html`
        <${ENCHANTED_ALERT_TAG} message="contained-success" severity="success" variant="contained"></${ENCHANTED_ALERT_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_ALERT_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('variant', ALERT_VARIANTS.ALERT_CONTAINED);
    await expect(component).toHaveAttribute('severity', ALERT_SEVERITY.ALERT_SUCCESS);
    await expect(component).toHaveAttribute('message', 'contained-success');
  });

  it('should render severity="success" variant="outlined"', async () => {
    render(
      html`
        <${ENCHANTED_ALERT_TAG} message="outlined-success" severity="success" variant="outlined"></${ENCHANTED_ALERT_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_ALERT_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('variant', ALERT_VARIANTS.ALERT_OUTLINED);
    await expect(component).toHaveAttribute('severity', ALERT_SEVERITY.ALERT_SUCCESS);
    await expect(component).toHaveAttribute('message', 'outlined-success');
  });
  
  it('should render severity="error" variant="contained"', async () => {
    render(
      html`
        <${ENCHANTED_ALERT_TAG} message="contained-error" severity="error" variant="contained"></${ENCHANTED_ALERT_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_ALERT_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('variant', ALERT_VARIANTS.ALERT_CONTAINED);
    await expect(component).toHaveAttribute('severity', ALERT_SEVERITY.ALERT_ERROR);
    await expect(component).toHaveAttribute('message', 'contained-error');
  });

  it('should render severity="error" variant="outlined"', async () => {
    render(
      html`
        <${ENCHANTED_ALERT_TAG} message="outlined-error" severity="error" variant="outlined"></${ENCHANTED_ALERT_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_ALERT_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('variant', ALERT_VARIANTS.ALERT_OUTLINED);
    await expect(component).toHaveAttribute('severity', ALERT_SEVERITY.ALERT_ERROR);
    await expect(component).toHaveAttribute('message', 'outlined-error');
  });

});
