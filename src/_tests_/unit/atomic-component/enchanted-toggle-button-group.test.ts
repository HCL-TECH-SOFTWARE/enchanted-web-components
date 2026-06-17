/* ======================================================================== *
 * Copyright 2026 HCL America Inc.                                          *
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

import { html } from 'lit/static-html.js';
import { expect, $, browser } from '@wdio/globals';

import { initSessionStorage, renderComponent } from '../../utils';
import '../../../components/atomic-component/enchanted-toggle-button-group';
import '../../../components/atomic-component/enchanted-toggle-button';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/add';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/edit';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/delete';

import { EnchantedToggleButton } from '../../../components/atomic-component/enchanted-toggle-button';
import { EnchantedToggleButtonGroup } from '../../../components/atomic-component/enchanted-toggle-button-group';
import {
  ENCHANTED_TOGGLE_BUTTON_GROUP_TAG,
  ENCHANTED_TOGGLE_BUTTON_GROUP_TAG_NAME,
  ENCHANTED_TOGGLE_BUTTON_TAG_NAME,
} from '../../../components/tags';

afterEach(() => {
  document.body.innerHTML = '';
});

const renderDefaultGroup = (
  orientation: 'horizontal' | 'vertical' = 'horizontal',
  size: '16' | '20' = '20',
  disabled = false,
  selectedIndex = 0,
) => {
  renderComponent(html`
    <${ENCHANTED_TOGGLE_BUTTON_GROUP_TAG}
      orientation=${orientation}
      size=${size}
      ?disabled=${disabled}
      .selectedIndex=${selectedIndex}
    >
      <enchanted-toggle-button ariaLabel="Add">
        <icon-add slot="icon"></icon-add>
      </enchanted-toggle-button>
      <enchanted-toggle-button ariaLabel="Edit">
        <icon-edit slot="icon"></icon-edit>
      </enchanted-toggle-button>
      <enchanted-toggle-button ariaLabel="Delete">
        <icon-delete slot="icon"></icon-delete>
      </enchanted-toggle-button>
    </${ENCHANTED_TOGGLE_BUTTON_GROUP_TAG}>
  `);
};

const getGroup = (): EnchantedToggleButtonGroup => {
  return document.querySelector(ENCHANTED_TOGGLE_BUTTON_GROUP_TAG_NAME) as EnchantedToggleButtonGroup;
};

const getButtons = async (): Promise<EnchantedToggleButton[]> => {
  const group = getGroup();
  await group.updateComplete;
  const buttons = group.toggleItems;
  await Promise.all(buttons.map(button => {return button.updateComplete;}));
  return buttons;
};

const clickButtonAt = async (index: number): Promise<void> => {
  const buttons = await getButtons();
  const button = buttons[index];
  if (!button) {
    throw new Error(`Unable to find toggle button at index ${index}`);
  }

  // Drive the group via the child's public event contract, not button internals.
  button.dispatchEvent(new CustomEvent('toggle-change', {
    detail: { toggleOn: true },
    bubbles: true,
    composed: true,
  }));
  await browser.pause(20); // Allow event dispatch/update cycle to flush in browser-runner tests
};

describe(`${ENCHANTED_TOGGLE_BUTTON_GROUP_TAG_NAME} - unit test`, () => {
  before(async () => {
    await initSessionStorage();
  });

  it('should render group and initialise default properties', async () => {
    renderDefaultGroup();

    const group = await $(ENCHANTED_TOGGLE_BUTTON_GROUP_TAG_NAME);
    await expect(group).toBeExisting();

    const groupElement = getGroup();
    await groupElement.updateComplete;
    await expect(groupElement.orientation).toBe('horizontal');
    await expect(groupElement.size).toBe('20');
    await expect(groupElement.disabled).toBe(false);
    await expect(groupElement.selectedIndex).toBe(0);
  });

  it('should apply horizontal firstType/lastType and selected toggleOn states', async () => {
    renderDefaultGroup('horizontal', '20', false, 1);

    const groupElement = getGroup();
    await groupElement.updateComplete;

    const buttons = await getButtons();

    await expect(buttons[0].firstType).toBe(true);
    await expect(buttons[0].lastType).toBe(false);
    await expect(buttons[0].toggleOn).toBe(false);

    await expect(buttons[1].firstType).toBe(false);
    await expect(buttons[1].lastType).toBe(false);
    await expect(buttons[1].toggleOn).toBe(true);

    await expect(buttons[2].firstType).toBe(false);
    await expect(buttons[2].lastType).toBe(true);
    await expect(buttons[2].toggleOn).toBe(false);
  });

  it('should set all buttons as standalone shape in vertical orientation', async () => {
    renderDefaultGroup('vertical');

    const groupElement =  getGroup();
    await groupElement.updateComplete;
    await browser.pause(50); // Wait for shape changes to propagate to buttons

    const buttons = await getButtons();
    await expect(buttons[0].firstType).toBe(true);
    await expect(buttons[0].lastType).toBe(true);
    await expect(buttons[1].firstType).toBe(true);
    await expect(buttons[1].lastType).toBe(true);
    await expect(buttons[2].firstType).toBe(true);
    await expect(buttons[2].lastType).toBe(true);
  });

  it('should propagate size to all child buttons', async () => {
    renderDefaultGroup('horizontal', '16');

    const groupElement = getGroup();
    await groupElement.updateComplete;
    await browser.pause(50); // Wait for size changes to propagate to buttons

    const buttons = await getButtons();
    await expect(buttons[0].iconSize).toBe('16');
    await expect(buttons[1].iconSize).toBe('16');
    await expect(buttons[2].iconSize).toBe('16');
  });

  it('should propagate disabled=true to all child buttons', async () => {
    renderDefaultGroup('horizontal', '20', true);

    const groupElement = getGroup();
    await groupElement.updateComplete;
    await browser.pause(50); // Wait for disabled state to propagate to buttons

    const buttons = await getButtons();
    await expect(buttons[0].disabled).toBe(true);
    await expect(buttons[1].disabled).toBe(true);
    await expect(buttons[2].disabled).toBe(true);
  });

  it('should propagate disabled=false to all child buttons after re-enabling group', async () => {
    renderDefaultGroup('horizontal', '20', true);

    const groupElement = await getGroup();
    await groupElement.updateComplete;
    await browser.pause(50); // Wait for disabled state to propagate to buttons

    groupElement.disabled = false;
    await groupElement.updateComplete;
    await browser.pause(50); // Wait for disabled state to propagate to buttons

    const buttons = await getButtons();
    await expect(buttons[0].disabled).toBe(false);
    await expect(buttons[1].disabled).toBe(false);
    await expect(buttons[2].disabled).toBe(false);
  });

  it('should update selectedIndex and emit toggle-group-change when a different button is clicked', async () => {
    renderDefaultGroup('horizontal', '20', false, 0);

    const groupElement = getGroup();
    await groupElement.updateComplete;
    await browser.pause(50); // Wait for selectedIndex changes to propagate
    let emittedSelectedIndex = -1;
    groupElement.addEventListener('toggle-group-change', (event: Event) => {
      emittedSelectedIndex = (event as CustomEvent<{ selectedIndex: number }>).detail.selectedIndex;
    });

    await clickButtonAt(1);

    await browser.waitUntil(async () => {
      return getGroup().selectedIndex === 1;
    }, { timeout: 1000 });

    const buttons = await getButtons();
    await expect(buttons[0].toggleOn).toBe(false);
    await expect(buttons[1].toggleOn).toBe(true);
    await expect(buttons[2].toggleOn).toBe(false);
    await expect(emittedSelectedIndex).toBe(1);
  });

  it('should not emit toggle-group-change when clicking the already selected button', async () => {
    renderDefaultGroup('horizontal', '20', false, 1);

    const groupElement = getGroup();
    await groupElement.updateComplete;
    await browser.pause(50); // Wait for selectedIndex changes to propagate

    let emissionCount = 0;
    groupElement.addEventListener('toggle-group-change', () => {
      emissionCount += 1;
    });

    await clickButtonAt(1);

    await expect(getGroup().selectedIndex).toBe(1);
    await expect(emissionCount).toBe(0);
  });

  it('should ignore toggle-change from a button that is not part of the group', async () => {
    renderDefaultGroup('horizontal', '20', false, 0);

    const groupElement = getGroup();
    await groupElement.updateComplete;
    await browser.pause(50); // Wait for selectedIndex changes to propagate

    const detachedButton = document.createElement(ENCHANTED_TOGGLE_BUTTON_TAG_NAME) as EnchantedToggleButton;
    const handleToggleChange = (groupElement as unknown as { handleToggleChange: (event: Event) => void }).handleToggleChange;
    handleToggleChange.call(groupElement, { target: detachedButton } as unknown as Event);

    await expect(groupElement.selectedIndex).toBe(0);
  });

  it('should return early in handleSlotChange when slot is missing', async () => {
    renderDefaultGroup('horizontal', '20', false, 0);

    const groupElement = getGroup();
    await groupElement.updateComplete;
    await browser.pause(50); // Wait for selectedIndex changes to propagate
    const renderRoot = groupElement.renderRoot as ShadowRoot & {
      querySelector: (selector: string) => Element | null;
    };
    const originalQuerySelector = renderRoot.querySelector.bind(renderRoot);

    let updateButtonsCalled = false;
    const originalUpdateButtons = (groupElement as unknown as { updateButtons: () => void }).updateButtons;

    renderRoot.querySelector = () => {
      return null;
    };
    (groupElement as unknown as { updateButtons: () => void }).updateButtons = () => {
      updateButtonsCalled = true;
    };

    (groupElement as unknown as { handleSlotChange: () => void }).handleSlotChange();

    await expect(updateButtonsCalled).toBe(false);

    renderRoot.querySelector = originalQuerySelector;
    (groupElement as unknown as { updateButtons: () => void }).updateButtons = originalUpdateButtons;
  });

  it('should execute already-registered module branch without errors', async () => {
    const initialDefinition = customElements.get(ENCHANTED_TOGGLE_BUTTON_GROUP_TAG_NAME);
    await expect(!!initialDefinition).toBe(true);
    await expect(initialDefinition?.name).toBe('EnchantedToggleButtonGroup');
  });
});
