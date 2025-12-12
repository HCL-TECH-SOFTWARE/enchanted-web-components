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
import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { localized } from '@lit/localize';
import { v4 as uuid } from 'uuid';
import createDebug from 'debug';

// Helper imports
import { Replacement } from '../localization';
import { SHADOW_ROOT_MODE_KEY } from '../constants';

const debug = createDebug('enchanted-web-components:components:ac:enchanted-ac-base-element.ts');

/**
 * Base class for all AC components.
 */
@localized()
export class EnchantedAcBaseElement extends LitElement {
  @property({ type: String, reflect: true })
  id = '';

  @property({ type: Map })
  localization?: Map<string, string>;

  /**
   * The sessionStorage key used to control shadow root mode. Can be overridden by subclasses.
   */
  static shadowRootModeKey = SHADOW_ROOT_MODE_KEY;

  // Cached shadowRootOptions per class (not shared - each subclass gets its own via Object.defineProperty)
  // This maintains object reference stability to prevent Lit from re-processing element definitions
  // eslint-why - The ShadowRootInit is coming directly from the browser API.
  // eslint-disable-next-line no-undef
  private static _shadowRootOptions: ShadowRootInit | null = null;

  // eslint-why - The ShadowRootMode is coming directly from the browser API.
  // eslint-disable-next-line no-undef
  protected static useOpenShadowRoot(): ShadowRootMode {
    // Allow graceful fallback when window/sessionStorage not available (SSR / tests)
    if (typeof window === 'undefined' || !window.sessionStorage) {
      return 'closed';
    }
    const key = this.shadowRootModeKey;
    const flag = window.sessionStorage.getItem(key);
    // eslint-why - The ShadowRootMode is coming directly from the browser API.
    // eslint-disable-next-line no-undef
    const mode: ShadowRootMode = flag === 'true' ? 'open' : 'closed';
    if (flag === 'true') {
      debug('Open shadowRoot is ENABLED for all AC components! (key=%s)', key);
    } else {
      debug('Open shadowRoot is DISABLED for all AC components! (key=%s)', key);
    }
    return mode;
  }

  /**
   * Build shadow root options dynamically so subclasses can override shadowRootModeKey
   * and respect sessionStorage changes at runtime.
   * 
   * Each class (base and subclasses) gets its own cached _shadowRootOptions property
   * created via Object.defineProperty. This ensures:
   * 1. Each subclass respects its own shadowRootModeKey override
   * 2. The same object reference is returned on subsequent calls, preventing Lit from
   *    thinking the configuration changed and re-registering event listeners
   * 
   * @returns The cached ShadowRootInit object for this specific class
   */
  // eslint-why - The ShadowRootInit is coming directly from the browser API.
  // eslint-disable-next-line no-undef
  protected static getShadowRootOptions(): ShadowRootInit {
    // Check if this specific class (not parent) has _shadowRootOptions property
    if (!Object.prototype.hasOwnProperty.call(this, '_shadowRootOptions')) {
      const shadowRootMode = this.useOpenShadowRoot();
      // eslint-why - The ShadowRootInit is coming directly from the browser API.
      // eslint-disable-next-line no-undef
      const base: ShadowRootInit = { ...LitElement.shadowRootOptions };
      // Create a property directly on this class constructor (not on prototype)
      // This allows each subclass to have its own cached options
      Object.defineProperty(this, '_shadowRootOptions', {
        value: { ...base, mode: shadowRootMode },
        writable: false,
        configurable: true
      });
    }

    return this._shadowRootOptions!;
  }

  /**
   * Lit reads this property when defining custom elements.
   * 
   * Using a getter (instead of a static property) allows us to dynamically determine
   * the shadow root mode based on sessionStorage at class definition time, while still
   * caching the result via getShadowRootOptions() to maintain object reference stability.
   */
  // eslint-why - The ShadowRootInit is coming directly from the browser API.
  // eslint-disable-next-line no-undef
  static get shadowRootOptions(): ShadowRootInit {
    return this.getShadowRootOptions();
  }

  /**
   * Setter to handle external assignments to shadowRootOptions (e.g., from test tooling).
   * The getter is authoritative, so assignments are ignored.
   */
  // eslint-why - The ShadowRootInit is coming directly from the browser API.
  // eslint-disable-next-line no-undef
  static set shadowRootOptions(_value: ShadowRootInit) {
    // No-op: getter is authoritative
  }

  constructor() {
    super();
    this.id = uuid();
    debug('%s [%s] is connected to the DOM!', this.tagName, this.id);
  }

  disconnectedCallback(): void {
    debug('%s [%s] is disconnected from the DOM!', this.tagName, this.id);
    super.disconnectedCallback();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  getMessage(templateKey: string, _replacements?: Replacement[]): string {
    if (this.localization) {
      let message = this.localization?.get(templateKey);
      if (message != undefined) {
        if (_replacements) {
          _replacements.forEach(replacement => {
            for (const [key, value] of Object.entries(replacement)) {
              message = message?.replace(new RegExp(key, 'g'), value);
            }
          });
        }
        return message;
      }
    }

    debug('The templateKey %s is not provided by the localization property for the %s component!', templateKey, this.nodeName);
    return templateKey;
  }
}
