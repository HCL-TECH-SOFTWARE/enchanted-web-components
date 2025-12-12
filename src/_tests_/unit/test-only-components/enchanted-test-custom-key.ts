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
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { EnchantedAcBaseElement } from '../../../components/atomic-component/enchanted-ac-base-element';

/**
 * TEST COMPONENT - DO NOT USE IN PRODUCTION
 * 
 * This component exists solely to test the dynamic shadow root options functionality
 * in EnchantedAcBaseElement. It overrides shadowRootModeKey to verify that:
 * 
 * 1. Subclasses can define their own sessionStorage key for shadow root mode
 * 2. The getShadowRootOptions() method respects the overridden key
 * 3. Per-class caching works correctly (each class gets its own cached options)
 * 4. Object reference stability is maintained (same object returned on subsequent calls)
 * 5. Different classes can have different shadow root modes simultaneously
 * 
 * This component uses 'ENCHANTED_TEST_CUSTOM_SHADOW_ROOT_MODE' instead of the default
 * SHADOW_ROOT_MODE_KEY to demonstrate independent configuration.
 * 
 * @see enchanted-test-custom-key.test.ts for comprehensive test coverage
 */
@customElement('enchanted-test-custom-key')
export class EnchantedTestCustomKey extends EnchantedAcBaseElement {
  /**
   * Override the shadowRootModeKey to use a custom sessionStorage key.
   * This allows testing that subclasses can have their own shadow root mode settings
   * independent of the base class.
   */
  static override shadowRootModeKey = 'ENCHANTED_TEST_CUSTOM_SHADOW_ROOT_MODE';

  render() {
    return html`
      <div class="test-content">
        <p>Test component with custom shadowRootModeKey</p>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'enchanted-test-custom-key': EnchantedTestCustomKey;
  }
}
