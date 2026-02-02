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
import { customElement, property } from 'lit/decorators.js';
import { css, html } from 'lit';

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';

/**
 * EnchantedCircularProgress component - Indeterminate variant
 * Displays an animated circular progress indicator with track and progress colors
 * Based on Material UI's CircularProgress component
 */
@customElement('enchanted-circular-progress')
export class EnchantedCircularProgress extends EnchantedAcBaseElement {
  /**
   * Inline styles are required for this component due to Shadow DOM encapsulation.
   * 
   * IMPORTANT: Unlike other components that use external SCSS with ::part() selectors,
   * this component MUST use inline `static styles` because:
   * 
   * 1. **CSS Animations in Shadow DOM**: The @keyframes animations (enchanted-circular-rotate 
   *    and enchanted-circular-dash) must be defined in the same stylesheet where they are 
   *    referenced. External CSS cannot inject animations into Shadow DOM.
   * 
   * 2. **Shadow Boundary Limitation**: External stylesheets (even with ::part() selectors) 
   *    cannot penetrate the Shadow DOM boundary to apply animations to internal elements.
   *    The ::part() mechanism only allows styling of exposed parts from outside, not animating them.
   * 
   * 3. **Animation Timing Critical**: The indeterminate progress animation requires precise
   *    coordination between SVG rotation and stroke-dash animations. These must be encapsulated
   *    within the component's Shadow DOM for reliable cross-browser behavior.
   * 
   * 4. **Performance**: Inline styles in Shadow DOM are more performant for animated components
   *    as they don't require style recalculation across the Shadow boundary.
   * 
   * This pattern is consistent with Material UI and other animation-heavy web component libraries.
   * 
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM
   * @see https://lit.dev/docs/components/styles/#static-styles
   */
  static styles = css`
    :host {
      display: inline-block;
    }

    .enchanted-circular-progress-root {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      line-height: 1;
    }

    .enchanted-circular-progress-spinner {
      display: inline-block;
      flex-shrink: 0;
    }

    .enchanted-circular-progress-svg {
      display: block;
      animation: enchanted-circular-rotate 1.4s linear infinite;
    }

    .enchanted-circular-progress-label {
      color: rgba(0, 0, 0, 0.60);
      font-feature-settings: 'liga' off, 'clig' off;
      font-family: Inter, sans-serif;
      font-size: 12px;
      font-style: italic;
      font-weight: 400;
      line-height: 16px;
      white-space: nowrap;
      animation: enchanted-label-pulse 1.5s ease-in-out infinite;
    }

    .enchanted-circular-progress-track {
      opacity: 1;
    }

    .enchanted-circular-progress-circle {
      stroke-dasharray: var(--stroke-dasharray-start);
      stroke-dashoffset: 0;
      animation: enchanted-circular-dash 1.4s ease-in-out infinite;
    }

    .enchanted-circular-progress-circle.disable-shrink {
      stroke-dasharray: var(--stroke-dasharray-shrink);
      animation: none;
    }

    @keyframes enchanted-circular-rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes enchanted-circular-dash {
      0% {
        stroke-dasharray: var(--stroke-dasharray-start);
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: var(--stroke-dasharray-mid);
        stroke-dashoffset: var(--stroke-dashoffset-mid);
      }
      100% {
        stroke-dasharray: var(--stroke-dasharray-end);
        stroke-dashoffset: var(--stroke-dashoffset-end);
      }
    }

    @keyframes enchanted-label-pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }
  `;

  /**
   * Size of the circular progress in pixels
   * @default 40
   */
  @property({ type: Number }) size = 40;

  /**
   * Stroke width of the progress circle in pixels
   * @default 3.6
   */
  @property({ type: Number }) strokewidth = 3.6;

  /**
   * Color of the track (background circle)
   * Equivalent to $NG200 in enchanted styles
   * @default '#D6D6D6'
   */
  @property({ type: String }) trackcolor = '#D6D6D6';

  /**
   * Color of the progress indicator
   * Equivalent to $HCLSOFTWAREBLUE06 in enchanted styles
   * @default '#0550DC'
   */
  @property({ type: String }) progresscolor = '#0550DC';

  /**
   * Disables the shrink animation (keeps constant stroke length)
   * @default false
   */
  @property({ type: Boolean, attribute: 'disable-shrink' }) disableShrink = false;

  /**
   * Label text to display next to the progress indicator
   * @default 'Thinking'
   */
  @property({ type: String }) label = 'Thinking...';

  /**
   * Show or hide the label text
   * @default false
   */
  @property({ type: Boolean, attribute: 'show-label' }) showLabel = false;

  /**
   * Get the radius of the circle
   */
  private get radius(): number {
    return (this.size - this.strokewidth) / 2;
  }

  /**
   * Get the viewBox dimensions
   */
  private get viewBox(): string {
    return `0 0 ${this.size} ${this.size}`;
  }

  /**
   * Get the center coordinates of the circle
   */
  private get center(): number {
    return this.size / 2;
  }

  /**
   * Get the circumference of the circle
   * Used to calculate proper stroke-dasharray values
   */
  private get circumference(): number {
    return 2 * Math.PI * this.radius;
  }

  /**
   * Get the CSS variable definitions for animation
   * These values scale with the circle size for proper animation
   */
  private get animationStyles(): string {
    const circ = this.circumference;
    return `
      --stroke-dasharray-start: ${circ * 0.01}px, ${circ}px;
      --stroke-dasharray-mid: ${circ * 0.5}px, ${circ}px;
      --stroke-dasharray-end: ${circ * 0.5}px, ${circ}px;
      --stroke-dashoffset-mid: ${circ * -0.075}px;
      --stroke-dashoffset-end: ${circ * -0.625}px;
      --stroke-dasharray-shrink: ${circ * 0.4}px, ${circ}px;
    `;
  }

  render() {
    const circleClasses = `enchanted-circular-progress-circle${this.disableShrink ? ' disable-shrink' : ''}`;
    
    return html`
      <div class="enchanted-circular-progress-root" style="${this.animationStyles}">
        <div class="enchanted-circular-progress-spinner" style="width: ${this.size}px; height: ${this.size}px;">
          <svg
            class="enchanted-circular-progress-svg"
            viewBox="${this.viewBox}"
            role="progressbar"
            aria-label="${this.showLabel ? this.label : 'Loading'}"
          >
            <!-- Track circle (background) -->
            <circle
              class="enchanted-circular-progress-track"
              cx="${this.center}"
              cy="${this.center}"
              r="${this.radius}"
              fill="none"
              stroke="${this.trackcolor}"
              stroke-width="${this.strokewidth}"
            />
            <!-- Progress circle (animated) -->
            <circle
              class="${circleClasses}"
              cx="${this.center}"
              cy="${this.center}"
              r="${this.radius}"
              fill="none"
              stroke="${this.progresscolor}"
              stroke-width="${this.strokewidth}"
              stroke-linecap="round"
            />
          </svg>
        </div>
        ${this.showLabel ? html`<span class="enchanted-circular-progress-label">${this.label}</span>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'enchanted-circular-progress': EnchantedCircularProgress
  }
}
