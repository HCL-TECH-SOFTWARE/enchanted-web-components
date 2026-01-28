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
import { customElement } from "lit/decorators.js";
import { EnchantedFab } from "./enchanted-fab";

/**
 * AI-themed floating action button component that extends EnchantedFab.
 * 
 * This component inherits all properties from EnchantedFab (extended, disabled, icon, label, badge)
 * and applies AI-specific styling with a fixed blue gradient theme.
 * 
 * Note: The `type` property is inherited but should not be used with this component.
 * The main purpose of enchanted-fab-ai is to provide a consistent AI-themed appearance.
 * If you need different button types, use the base EnchantedFab component instead.
 * 
 * @element enchanted-fab-ai
 * @extends EnchantedFab
 */
@customElement('enchanted-fab-ai')
export class EnchantedFabAi extends EnchantedFab {
}

declare global {
  interface HTMLElementTagNameMap {
    'enchanted-fab-ai': EnchantedFabAi;
  }
}
