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
import { html, nothing, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { localized } from '@lit/localize';

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';

// Helper imports
import { ALERT, ALERT_SEVERITY, ALERT_VARIANTS } from '../../types/cssClassEnums';

// Icon imports
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/checkmark--outline';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/information';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/warning--alt';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/warning';

/**
 * Alert component.
 */
@customElement('enchanted-alert')
@localized()
export class EnchantedAlert extends EnchantedAcBaseElement {

  @property({ type: String })
  message = '';

  @property({ type: Number })
  width = 240;

  @property({ type: String })
  variant = 'contained';

  @property({ type: String })
  severity = 'info';

  private getAlertPart(): string {
    switch (this.severity) {
      case ALERT_SEVERITY.ALERT_INFO:
        if (this.variant === ALERT_VARIANTS.ALERT_CONTAINED) {
          return ALERT.ALERT_CONTAINED_INFO;
        } else {
          return ALERT.ALERT_OUTLINED_INFO;
        }
      case ALERT_SEVERITY.ALERT_ERROR:
        if (this.variant === ALERT_VARIANTS.ALERT_CONTAINED) {
          return ALERT.ALERT_CONTAINED_ERROR;
        } else {
          return ALERT.ALERT_OUTLINED_ERROR;
        }
      case ALERT_SEVERITY.ALERT_WARNING:
        if (this.variant === ALERT_VARIANTS.ALERT_CONTAINED) {
          return ALERT.ALERT_CONTAINED_WARNING;
        } else {
          return ALERT.ALERT_OUTLINED_WARNING;
        }
      case ALERT_SEVERITY.ALERT_SUCCESS:
        if (this.variant === ALERT_VARIANTS.ALERT_CONTAINED) {
          return ALERT.ALERT_CONTAINED_SUCCESS;
        } else {
          return ALERT.ALERT_OUTLINED_SUCCESS;
        }
      default:
        return '';
    }
  }
  
  private getAlertIcon(): TemplateResult | typeof nothing {
    switch (this.severity) {
      case ALERT_SEVERITY.ALERT_INFO:
        return html`<icon-information size="16" part="${this.getAlertSVG()}"></icon-information>`;
      case ALERT_SEVERITY.ALERT_ERROR:
        return html`<icon-warning size="16" part="${this.getAlertSVG()}"></icon-warning>`;
      case ALERT_SEVERITY.ALERT_WARNING:
        return html`<icon-warning-alt size="16" part="${this.getAlertSVG()}"></icon-warning-alt>`;
      case ALERT_SEVERITY.ALERT_SUCCESS:
        return html`<icon-checkmark-outline size="16" part="${this.getAlertSVG()}"></icon-checkmark-outline>`;
      default:
        return nothing;
    }
  }

  private getAlertSVG(): string {
    switch (this.severity) {
      case ALERT_SEVERITY.ALERT_INFO:
        return ALERT.ALERT_SVG_INFO;
      case ALERT_SEVERITY.ALERT_ERROR:
        return ALERT.ALERT_SVG_ERROR;
      case ALERT_SEVERITY.ALERT_WARNING:
        return ALERT.ALERT_SVG_WARNING;
      case ALERT_SEVERITY.ALERT_SUCCESS:
        return ALERT.ALERT_SVG_SUCCESS;
      default:
        return '';
    }
  }

  render() {
    return html`
      <div part="${ALERT.ALERT_DIV_ROOT} ${this.getAlertPart()}" style="width:${this.width}px">
          ${this.getAlertIcon()}
          <span>${this.message}</span>
      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'enchanted-alert': EnchantedAlert
  }
}
