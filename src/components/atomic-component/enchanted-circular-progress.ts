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
import { customElement, property, state } from 'lit/decorators.js';
import { html } from 'lit';

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';

@customElement('enchanted-circular-progress')
export class EnchantedCircularProgress extends EnchantedAcBaseElement {
  // properties user may control as element attributes
  @property({ type: Number }) size = 100;
  @property({ type: Number }) strokewidth = 4;
  @property({ type: String }) trailcolor = '#D6D6D6'; // equivalent to $NG200 in atomic-component.scss
  @property({ type: String }) valuecolor = '#0550DC'; // equivalent to $HCLSOFTWAREBLUE06 in atomic-component.scss

  // internal state to be computed from user-given properties
  @state() radius = 0;
  @state() circumference = 0;
  @state() cx = 0;
  @state() cy = 0;
  @state() durationToRotate = 2;
  @state() height = 0;
  @state() width = 0;


  connectedCallback(): void {
    super.connectedCallback();
    this.height = this.size;
    this.width = this.size;
    this.cx = this.size / 2;
    this.cy = this.size / 2;
    this.radius = (this.cx / 2) - this.strokewidth;
    this.circumference = 2 * Math.PI * this.radius;
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  render() {   
    return html`
      <div style="height: ${this.size}px; width: ${this.size}px;">
        <svg style="height: ${this.size}px; width: ${this.size}px; position: relative; animation: rotateCircularProgress 2s linear infinite;">
          <circle
            cx="${this.cx}"
            cy="${this.cy}"
            r="${this.radius}"
            fill="none"
            stroke-width="${this.strokewidth}" 
            stroke="${this.trailcolor}"
          >
          </circle>
          <circle
            cx="${this.cx}"
            cy="${this.cy}"
            r="${this.radius}"
            fill="none"
            stroke-width="${this.strokewidth}" 
            stroke-miterlimit="0"
            stroke-linecap="round"
            stroke="${this.valuecolor}"
            stroke-dasharray="0,${this.circumference}"
            stroke-dashoffset="0"
          >
          <animate
            attributeName="stroke-dasharray"
            values="0;${this.circumference}"
            dur="${this.durationToRotate}s"
            repeatCount="indefinite"
          ></animate>
          </circle>
        </svg>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'enchanted-circular-progress': EnchantedCircularProgress
  }
}
