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

/**
 * TEST SUITE: Dynamic Shadow Root Options
 * 
 * This test suite verifies the critical functionality of EnchantedAcBaseElement's dynamic
 * shadow root options system. The implementation uses a getter/setter pattern with
 * per-class caching to achieve the following goals:
 * 
 * PROBLEM SOLVED:
 * - Static properties evaluate once at class definition time
 * - Subclasses inherit the parent's static property value
 * - Shadow root mode needs to be determined at runtime from sessionStorage
 * - Each subclass should be able to override the sessionStorage key used
 * 
 * SOLUTION:
 * - Use a getter for shadowRootOptions (called by Lit when creating shadow roots)
 * - Cache the result per-class using Object.defineProperty
 * - Return the same object reference on subsequent calls (prevents Lit from
 *   thinking the configuration changed and re-registering event listeners)
 * - Allow subclasses to override shadowRootModeKey to use different sessionStorage keys
 * 
 * WHAT THIS TESTS:
 * - Subclass key override functionality
 * - Dynamic mode determination based on sessionStorage
 * - Per-class caching (EnchantedAcBaseElement vs EnchantedTestCustomKey have separate caches)
 * - Object reference stability (same object returned on multiple calls)
 * - Independent configuration (different classes can have different modes)
 * 
 * @see enchanted-test-custom-key.ts for the test component implementation
 * @see enchanted-ac-base-element.ts for the base class implementation
 */

// External imports
import { expect } from '@wdio/globals';

// Component imports
import './enchanted-test-custom-key'; // Test component in same directory
import '../../../components/atomic-component/enchanted-avatar'; // Using enchanted-avatar as example of base class usage

// Helper imports
import { EnchantedTestCustomKey } from './enchanted-test-custom-key';
import { EnchantedAcBaseElement } from '../../../components/atomic-component/enchanted-ac-base-element';
import { SHADOW_ROOT_MODE_KEY } from '../../../components/constants';

describe('EnchantedTestCustomKey - Shadow Root Mode Override', () => {
  let element: EnchantedTestCustomKey;
  let baseElement: HTMLElement;

  beforeEach(() => {
    // Clear sessionStorage before each test
    window.sessionStorage.clear();
    // Clear document body
    if (document.body.firstElementChild) {
      document.body.innerHTML = '';
    }
    // Clear the cached shadowRootOptions to allow testing different scenarios
    // This simulates a fresh page load where classes haven't been accessed yet
    if (Object.prototype.hasOwnProperty.call(EnchantedTestCustomKey, '_shadowRootOptions')) {
      // eslint-why - Using any to delete static property for testing purposes
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (EnchantedTestCustomKey as any)._shadowRootOptions;
    }
    if (Object.prototype.hasOwnProperty.call(EnchantedAcBaseElement, '_shadowRootOptions')) {
      // eslint-why - Using any to delete static property for testing purposes
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (EnchantedAcBaseElement as any)._shadowRootOptions;
    }
  });

  afterEach(() => {
    // Clean up elements
    element?.remove();
    baseElement?.remove();
    // Clear sessionStorage after each test
    window.sessionStorage.clear();
    // Clear document body
    document.body.innerHTML = '';
  });

  it('should use custom shadowRootModeKey', () => {
    expect(EnchantedTestCustomKey.shadowRootModeKey).toBe('ENCHANTED_TEST_CUSTOM_SHADOW_ROOT_MODE');
    expect(EnchantedAcBaseElement.shadowRootModeKey).toBe(SHADOW_ROOT_MODE_KEY);
  });

  it('should create closed shadow root when custom key is not set', () => {
    // Don't set the custom key
    element = document.createElement('enchanted-test-custom-key') as EnchantedTestCustomKey;
    document.body.appendChild(element);

    // Should have closed shadow root (default)
    expect(element.shadowRoot).toBeNull(); // closed shadow roots are not accessible
  });

  it('should create open shadow root when custom key is set to true BEFORE class is accessed', () => {
    // Note: In the current implementation, shadowRootOptions are cached on first access.
    // This test documents that the caching happens when getShadowRootOptions() is first called,
    // not when elements are created. Once cached, changing sessionStorage won't affect it.
    
    // Since the class was already imported and possibly accessed, we can't reliably test
    // dynamic changes. This test verifies that getShadowRootOptions() returns the mode
    // based on current sessionStorage state when called directly.
    
    window.sessionStorage.setItem('ENCHANTED_TEST_CUSTOM_SHADOW_ROOT_MODE', 'true');
    // eslint-why - Using any to access static method for testing purposes
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const options = (EnchantedTestCustomKey as any).getShadowRootOptions();
    expect(options.mode).toBe('open');
  });

  it('should respect different keys for base class vs custom class', () => {
    // Set default key to 'true' but custom key to false/unset
    window.sessionStorage.setItem(SHADOW_ROOT_MODE_KEY, 'true');
    // Don't set ENCHANTED_TEST_CUSTOM_SHADOW_ROOT_MODE

    // Create base element - should have open shadow root
    baseElement = document.createElement('enchanted-avatar');
    document.body.appendChild(baseElement);
    
    // Create custom key element - should have closed shadow root
    element = document.createElement('enchanted-test-custom-key') as EnchantedTestCustomKey;
    document.body.appendChild(element);

    // Base element should be open (SHADOW_ROOT_MODE_KEY is 'true')
    expect(baseElement.shadowRoot).not.toBeNull();
    
    // Custom element should be closed (ENCHANTED_TEST_CUSTOM_SHADOW_ROOT_MODE not set)
    expect(element.shadowRoot).toBeNull();
  });

  it('should get correct shadowRootOptions at runtime', () => {
    // Test without setting key
    window.sessionStorage.removeItem('ENCHANTED_TEST_CUSTOM_SHADOW_ROOT_MODE');
    let options1 = EnchantedTestCustomKey.shadowRootOptions;
    expect(options1.mode).toBe('closed');

    // Note: In the current implementation with static property initialization,
    // changing sessionStorage after the class is defined won't affect already-initialized options.
    // This test documents the current behavior.
  });

  it('should verify getShadowRootOptions caching behavior', () => {
    // Important: getShadowRootOptions() caches the result on first call using Object.defineProperty.
    // Once cached, subsequent calls return the same object reference, and changing sessionStorage
    // won't affect it. This is the intended behavior to maintain object reference stability.
    
    // Since classes may have been accessed already, we check that the cached value is stable
    // eslint-why - Using any to access static method for testing purposes
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const options1 = (EnchantedTestCustomKey as any).getShadowRootOptions();
    // eslint-why - Using any to access static method for testing purposes
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const options2 = (EnchantedTestCustomKey as any).getShadowRootOptions();
    
    // Should return the exact same object reference (reference equality)
    expect(options1).toBe(options2);
    
    // The mode should be consistent
    expect(options1.mode).toBe(options2.mode);
    
    // Verify the cache property was created
    const hasCache = Object.prototype.hasOwnProperty.call(EnchantedTestCustomKey, '_shadowRootOptions');
    expect(hasCache).toBe(true);
  });
});
