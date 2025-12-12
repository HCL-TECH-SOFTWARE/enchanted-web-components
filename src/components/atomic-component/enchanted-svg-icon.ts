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
 * @customElement
 * @class EnchantedSvgIcon
 * @extends {EnchantedAcBaseElement}
 * 
 * @description
 * The `EnchantedSvgIcon` class is a custom web component that extends the `EnchantedAcBaseElement`.
 * It is used to render an SVG icon with customizable properties such as `icon`, `color`, `size`, and `useCurrentColor`.
 * 
 * @property {TemplateResult} icon - The SVG icon template to be rendered.
 * @property {string} color - The color of the SVG icon. If `useCurrentColor` is true, the icon will inherit the color from its parent component.
 * @property {string} size - The size of the SVG icon. This sets both the width and height of the icon.
 * @property {boolean} useCurrentColor - A flag indicating whether the icon should inherit the color from its parent component.
 * 
 * @constructor
 * Initializes the `EnchantedSvgIcon` component.
 * 
 * @method updated
 * @param {Map<string, unknown>} changedProperties - A map of changed properties.
 * Updates the SVG icon's color and size based on the changed properties if `useCurrentColor` is false.
 * 
 * @method render
 * @returns {TemplateResult} The template result containing the SVG icon wrapped in a div.
 * 
 * @example
 * <enchanted-svg-icon icon="${myIcon}" color="red" size="24px" useCurrentColor></enchanted-svg-icon>
 */

// External imports
import { html, nothing, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';

@customElement('enchanted-svg-icon')
export class EnchantedSvgIcon extends EnchantedAcBaseElement {

  @property({ type: String }) icon?: TemplateResult;
  @property({ type: String }) color: string = '';
  @property({ type: String }) size: string = '';
  @property({ type: Boolean }) useCurrentColor: boolean = false;

  constructor() {
    super();
  }

  updated(changedProperties: Map<string, unknown>) {
    if (!this.useCurrentColor) {
      const svg = this.renderRoot?.querySelector('svg');
      if (changedProperties.has('color')) {
        svg ? svg.style.fill = this.color : nothing;
      }
      if (changedProperties.has('size')) {
        svg ? svg.style.width = this.size : nothing;
        svg ? svg.style.height = this.size : nothing;
      }
    }
  }

  render() {
    return html`
    <!-- If we set any style to <div> and useCurrentColor = true, icon will take color from the div (parent) component -->
      ${this.icon}
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'enchanted-svg-icon': EnchantedSvgIcon
  }
}
