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

import { browser } from '@wdio/globals';
import { render, TemplateResult } from 'lit';
import { SHADOW_ROOT_MODE_KEY } from '../components/constants';

/**
 * Initializes the session storage for the application.
 */
export const initSessionStorage = async (shadowRootModeKey?: string) => {
  if (!shadowRootModeKey) {
    shadowRootModeKey = SHADOW_ROOT_MODE_KEY;
  }
  if (
    window.sessionStorage.getItem(shadowRootModeKey) !== 'true'
  ) {
    window.sessionStorage.setItem(shadowRootModeKey, 'true');
    // the reload is needed to apply the sessionStorage changes
    await browser.refresh();
  }
};

/**
 * Renders a Lit template into a new HTMLElement.
 * @param template - The Lit template to render.
 * @returns The rendered HTMLElement.
 */
export const renderComponent = (template: TemplateResult): HTMLElement => {
  const container = document.createElement("div");
  document.body.replaceChildren(container);
  render(template, container);
  return container;
};
