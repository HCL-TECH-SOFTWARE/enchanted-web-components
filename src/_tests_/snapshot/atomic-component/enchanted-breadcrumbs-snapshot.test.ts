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
import { $, browser } from '@wdio/globals';
import { html, render } from 'lit';

// Component imports
import '../../../components/atomic-component/enchanted-breadcrumbs';

// Icon imports
import { svgIconInfo } from '../../assets/svg-icon-info';

// Helper imports
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';
import { BREADCRUMBS_ICON_TYPE } from '../../../types/enchanted-breadcrumbs';
 
describe('EnchantedBreadcrumbs snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  const paths = [
    { link: 'sampleLink', icon: svgIconInfo },
    { title: 'Breadcrumbs1', link: 'sampleLink', icon: svgIconInfo },
    { title: 'Breadcrumb2Breadcrumb2Breadcrumb2Breadcrumb2Breadcrumb2Breadcrumb2Breadcrumb2Breadcrumb2Breadcrumb2Breadcrumb2Breadcrumb2', link: 'sampleLink' },
    { title: 'Breadcrumb3', link: 'sampleLink' },
    { title: 'Breadcrumb4', link: 'sampleLink', icon: svgIconInfo, disabled: true },
    { title: 'Breadcrumb5', link: 'sampleLink', icon: svgIconInfo },
    { title: 'Breadcrumbs6', parentId: '' },
    { title: 'Breadcrumbs6', parentId: '1', iconName: BREADCRUMBS_ICON_TYPE.HOME },
    { title: 'Breadcrumbs6', parentId: '1', iconName: BREADCRUMBS_ICON_TYPE.INFORMATION },
  ];

  function renderBreadcrumbs() {
    return html`
      <div data-testid="enchanted-breadcrumbs-layout" style="display: flex; flex-direction: column; gap: 20px; margin: 20px;">
        <enchanted-breadcrumbs .paths=${paths}></enchanted-breadcrumbs>
      </div>
    `;
  }

  it('EnchantedBreadcrumbs - should capture snapshot for all possible variants and types of AC breadcrumbs component for Authoring styling', async () => {
    const link = appendEnchantedStylingLink();

    render(renderBreadcrumbs(), document.body);
    let breadcrumbsLayout = await $('>>>div[data-testid="enchanted-breadcrumbs-layout"]');
    await browser.checkElement(breadcrumbsLayout, 'enchanted-breadcrumbs-snapshot-baseline-authoring');
    document.head.removeChild(link);
  });
});
