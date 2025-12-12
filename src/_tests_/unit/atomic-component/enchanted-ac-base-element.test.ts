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
import { customElement } from 'lit/decorators.js';
import { $, expect } from '@wdio/globals';
import { v4 as uuid } from 'uuid';

// Component imports
import { EnchantedAcBaseElement } from '../../../components/atomic-component/enchanted-ac-base-element';

@customElement('enchanted-ac-base-element-test-component')
export class EnchantedAcBaseSample extends EnchantedAcBaseElement {
  render() {
    return html`
       <slot></slot>
     `;
  }
}

describe('AC base component testing', () => {
  let elem: HTMLElement;

  beforeEach(() => {
    elem = document.createElement('enchanted-fcc-base-element-test-component');
  });

  it('EnchantedAcBaseSample - should render component and validate id attribute', async () => {
    const id = uuid();
    render(
      html`
         <enchanted-ac-base-element-test-component id=${id}/>
       `,
      document.body
    );
    let component = await $('enchanted-ac-base-element-test-component').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('id', id);
  });

  afterEach(() => {
    elem.remove();
  });
});
