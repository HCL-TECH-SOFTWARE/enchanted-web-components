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
import { LitElement, TemplateResult, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";


@customElement('enchanted-fab')
export class EnchantedFab extends LitElement {
@property({ reflect: true }) type: 'contained' | 'outlined' | 'AI' = 'contained';
@property({ type:Boolean,reflect: true }) extended= false;
@property({type: Boolean, reflect: true }) disabled= false;
@property({type: Object }) icon?: TemplateResult;
@property({ type: String }) label= "";
@property({type:Boolean, reflect: true }) badge= false;

private get iconColor(): string {
    if (this.disabled) {
        return 'rgba(0,0,0,0.38)';
    }
    switch (this.type) {
        case 'contained':
            return '#FFFFFF';
        case 'outlined':
            return '#0550dc';
        case 'AI':
            return '#0550dc';
        default:
            return '#0550dc';
    }
}
private normalizeIcon(element: HTMLElement) {
    element.style.width = '24px';
    element.style.height = '24px';
    element.style.color = this.iconColor;
}

private handleSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    const assignedElements = slot.assignedElements({ flatten: true });
    assignedElements.forEach((el) => {
        this.normalizeIcon(el as HTMLElement);
    });
}
protected updated(changed: Map<string, unknown>) {
    if(changed.has('type') || changed.has('disabled')) {
        const slot = this.renderRoot.querySelector('slot[name="icon"]')as HTMLSlotElement | null;
        slot?.assignedElements({ flatten: true }).forEach((el) => {
            this.normalizeIcon(el as HTMLElement);
            
        }); 
    }
}

    render() 
    {
        return html`
        <button
            part="fab"
            ?disabled=${this.disabled}
            exportparts="icon, label, badge"
            aria-label=${this.label || ''}
        >
            <span part="icon">
                <slot name="icon" @slotchange=${this.handleSlotChange}>
                    ${this.icon ? this.icon : nothing}
                </slot>
            </span>
            ${this.badge ? html`<enchanted-badge part="badge" badge=" "></enchanted-badge>` : nothing}
            ${this.extended && this.label ? html`<span part="label">${this.label}</span>` : nothing}
        </button>
        `;
    }
}
declare global {
    interface HTMLElementTagNameMap {
        'enchanted-fab': EnchantedFab;
    }
}