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
import { customElement, state } from 'lit/decorators.js';
import { css, html, TemplateResult } from 'lit';
import createDebug from 'debug';

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';

// Helper imports
import  * as theme from '../../utils/themeUtils';
import { ThemeType } from '../../utils/themeUtils';

const debug = createDebug('enchanted-web-components:components:ac:enchanted-theme-inspector.ts');

@customElement('enchanted-theme-inspector')
export class EnchantedThemeInspector extends EnchantedAcBaseElement {
  static styles = css`
    table,
    th,
    tr,
    td {
      border: 1px solid black;
      border-collapse: collapse;
      padding: 5px;
      min-width: 100px;
      margin: 10px;
    }
  `;

  @state()
  protected _themePropertiesDelimiter = 'ZZZ';
  
  @state()
  protected _themePrefix = 'theme';

  @state()
  protected _shadeKeys: (number | string)[] = [100, 150, 200, 300, '300_DARK', 400, 500, 600, 700, 800, '800_DARK', 900, 1000, 1000_80, 1100];
  
  @state()
  protected _colorKeys: string[] = ['GREY', 'BLACK', 'BLUE', 'GREEN', 'HCLSOFTWAREBLUE', 'INDIGO', 'LIME', 'ORANGE', 'PINK', 'PURPLE', 'RED', 'TEAL', 'WHITE', 'YELLOW'];

  @state()
  protected _blackKeys: string[] = ['100P', '87P', '60P', '55P', '43P', '38P', '32P', '20P', '12P', '8P', '7P'];

  @state()
  protected _whiteKeys: string[] = ['100P', '93P', '80P', '70P', '55P', '40P', '38P', '24P', '15P', '12P', '8P'];

  @state()
  protected _hclSoftwareBlueKeys: string[] = ['01', '02', '03', '04', '05', '06', '07', '07_20', '07_12', '07_8', '08', '09', '09_20', '09_12', '09_8', '07_DARK', '09_DARK'];

  @state()
  protected _theme: ThemeType | undefined;

  connectedCallback(): void {
    super.connectedCallback();
    this._theme = theme;
  }

  renderColors() {
    return html`
      ${this._colorKeys.map((color) => {
        let shades: (number | string)[] = this._shadeKeys;

        if (color === 'BLACK') {
          shades = this._blackKeys;
        } else if (color === 'WHITE') {
          shades = this._whiteKeys;
        } else if (color === 'HCLSOFTWAREBLUE') {
          shades = this._hclSoftwareBlueKeys;
        }

        return html`
          <tr style="text-align: center; font-weight: bold;">
            <td colspan=${color === 'GREY' ? "5" : "3"}>${color}</td>
            ${color !== 'GREY'
              ? html`<td colspan="2">${color} value</td>`
              : null
            }
            
          </tr>
          ${shades.map(
            (shade) => {
              if (color === 'GREY') {
                const neutralGrey = (this._theme && this._theme[`paletteNG${shade}`]) as string;
                const coolGrey = (this._theme && this._theme[`paletteCG${shade}`]) as string;

                if (neutralGrey && coolGrey) {
                  return html`
                    <tr>
                      <td>${shade}</td>
                      <td style="background: ${neutralGrey};"></td>
                      <td>${neutralGrey}</td>
                      <td style="background: ${coolGrey};"></td>
                      <td>${coolGrey}</td>
                    </tr>
                  `;
                }
              } else {
                const derivedColor = (this._theme && this._theme[`palette${color}${shade}`]) as string;

                if (derivedColor) {
                  return html`
                    <tr style="background: ${color === 'WHITE' ? '#000' : '#FFF'}; color: ${color === 'WHITE' ? '#FFF' : '#000'};">
                      <td>${shade}</td>
                      <td style="background: ${derivedColor};" colspan="2"></td>
                      <td colspan="2">${derivedColor}</td>
                    </tr>
                  `;
                }
              }
              return null;
            }
          )}
        `;
      })}
    `;
  }

  renderThemes(modeToRender: string) {
    const alreadyAdded: string[] = [];
    let themeObject: {
      [key: string]: {
        [key: string]: {
          [key: string]: string;
        };
      }
    } = {};
    const templateResultArr: Array<TemplateResult> = [];

    debug('Rendering themes for mode: %s', modeToRender);
    for (const key in this._theme) {
      const value = this._theme[key];
      if (key.startsWith(this._themePrefix)) {
        const [ , mode, type, property ] = key.split(this._themePropertiesDelimiter);
        debug('mode: %s, type: %s, property: %s, value: %s', mode, type, property, value);
        if (mode === modeToRender) {
          if (!alreadyAdded.includes(type)) {
            alreadyAdded.push(type);
            themeObject[type] = {
              [property]: {
                [mode]: value
              }
            };
          } else {
            if (themeObject[type][property]) {
              themeObject[type][property][mode] = value;
            } else {
              themeObject[type] = {
                ...themeObject[type],
                [property]: {
                  [mode]: value
                }
              };
            }
          }
        }
      }
    }

    for (const themeKey in themeObject) {
      const themeValue = themeObject[themeKey];
      templateResultArr.push(html`
        <tr>
          <td colspan="3" style="text-align: center; font-weight: bold; border: 3px solid black">${themeKey}</td>
        </tr>
      `);
      for (const propertyKey in themeValue) {
        const propertyValue = themeValue[propertyKey];
        const derivedModeColor = propertyValue[modeToRender];
        templateResultArr.push(html`
          <tr>
            <td>${propertyKey}</td>
            <td style=${modeToRender === 'light' ? "background: #FFF; color: #000;" : "background: #000; color: #FFF;"}>
              <div style="height: 20px; background: ${derivedModeColor}"></div>
            </td>
            <td>
              ${derivedModeColor}
            </td>
          </tr>
        `);
      }
    }
    

    if (templateResultArr.length) {
      return templateResultArr;
    }
    return null;
  }

  render() {
    return html`
      <div style="display: flex; flex-direction: row; justify-content: space-around;" data-testid="enchanted-theme-inspector-container">
        <div style="display: flex; flex-direction: column;">
          <table>
            <thead>
              <tr>
                <th>Color Name</th>
                <th>Neutral</th>
                <th>Neutral value</th>
                <th>Cool</th>
                <th>Cool value</th>
              </tr>
            </thead>
            <tbody>
              ${this.renderColors()}
            </tbody>
          </table>
        </div>
        <div style="display: flex; flex-direction: row;">
          <table>
            <thead>
              <tr>
                <th>Theme Name</th>
                <th>Light Mode</th>
                <th>Light value</th>
              </tr>
            </thead>
            <tbody>
              ${this.renderThemes('light')}
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>Theme Name</th>
                <th>Dark Mode</th>
                <th>Dark value</th>
              </tr>
            </thead>
            <tbody>
              ${this.renderThemes('dark')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'enchanted-theme-inspector': EnchantedThemeInspector;
  }
}
