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
import { html, nothing, TemplateResult } from 'lit';

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';

// Helper imports
import { AVATAR_PARTS, AVATAR_VARIANT, AVATAR_TYPE, AVATAR_COLOR } from '../../types/cssClassEnums';

@customElement('enchanted-avatar')
export class EnchantedAvatar extends EnchantedAcBaseElement {
  @property()
  variant: string | undefined;

  @property()
  imgUrl: string | undefined;

  @property()
  iconUrl: string | undefined;

  @property()
  color: AVATAR_COLOR | undefined;

  @property()
  iconTemplate: TemplateResult | undefined;

  @property()
  avatarText: string | undefined;

  @property()
  type: string | undefined;

  private getPartAttribute(part: AVATAR_PARTS): string {
    return this.color ? `${part} ${this.color}` : `${part} ${AVATAR_COLOR.AVATAR_DEFAULT_COLOR}`;
  }

  private renderAvatar(src: TemplateResult | string | undefined, part: AVATAR_PARTS) {
    if (typeof src === 'string') {
      if (src.length > 0) {
        return html`<img data-testid="enchanted-avatar-img" src="${src}" part=${this.getPartAttribute(part)} alt="${part}" />`;
      }
      return nothing;
    }
    return html`<span data-testid="enchanted-avatar-icon-template" part=${this.getPartAttribute(part)}>${src}</span>`;
  }

  renderAvatarContent() {
    switch (this.variant) {
      case AVATAR_VARIANT.AVATAR_LETTER:
        switch (this.type) {
          case AVATAR_TYPE.AVATAR_ROUNDED:
            return this.avatarText ? 
              html`<span data-testid="enchanted-avatar-letter" part=${this.getPartAttribute(AVATAR_PARTS.AVATAR_SPAN_ROUNDED)}>${this.avatarText.substring(0, 2)}</span>` 
              : nothing;
          case AVATAR_TYPE.AVATAR_CIRCULAR:
            return this.avatarText ? 
              html `<span data-testid="enchanted-avatar-letter" part=${this.getPartAttribute(AVATAR_PARTS.AVATAR_SPAN_CIRCULAR)}>${this.avatarText.substring(0, 2)}</span>` 
              : nothing;
          default:
            return nothing;
        }
      case AVATAR_VARIANT.AVATAR_ICON:
        switch (this.type) {
          case AVATAR_TYPE.AVATAR_ROUNDED:
            return this.renderAvatar(this.iconUrl, AVATAR_PARTS.AVATAR_ICON_ROUNDED);
          case AVATAR_TYPE.AVATAR_CIRCULAR:
            return this.renderAvatar(this.iconUrl, AVATAR_PARTS.AVATAR_ICON_CIRCULAR);
          default:
            return nothing;
        }
      case AVATAR_VARIANT.AVATAR_ICON_TEMPLATE:
        switch (this.type) {
          case AVATAR_TYPE.AVATAR_ROUNDED:
            return this.renderAvatar(this.iconTemplate, AVATAR_PARTS.AVATAR_ICON_TEMPLATE_ROUNDED);
          case AVATAR_TYPE.AVATAR_CIRCULAR:
            return this.renderAvatar(this.iconTemplate, AVATAR_PARTS.AVATAR_ICON_TEMPLATE_CIRCULAR);
          default:
            return nothing;
        } 
      case AVATAR_VARIANT.AVATAR_IMG:
        switch (this.type) {
          case AVATAR_TYPE.AVATAR_ROUNDED:
            return this.renderAvatar(this.imgUrl, AVATAR_PARTS.AVATAR_IMAGE_ROUNDED);
          case AVATAR_TYPE.AVATAR_CIRCULAR:
            return this.renderAvatar(this.imgUrl, AVATAR_PARTS.AVATAR_IMAGE_CIRCULAR);
          default:
            return nothing;
        }  
    }
  }

  render() {
    const shape = this.type === AVATAR_TYPE.AVATAR_ROUNDED ? AVATAR_PARTS.AVATAR_DIV : AVATAR_PARTS.AVATAR_DIV_CIRCULAR;
    return html`
      <div data-testId="enchanted-${shape}" part=${this.getPartAttribute(shape)}>${this.renderAvatarContent()}</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'enchanted-avatar': EnchantedAvatar
  }
}
