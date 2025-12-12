/*
 ********************************************************************
 * Licensed Materials - Property of HCL                             *
 *                                                                  *
 * Copyright HCL Technologies Ltd. 2025. All Rights Reserved.       *
 *                                                                  *
 * Note to US Government Users Restricted Rights:                   *
 *                                                                  *
 * Use, duplication or disclosure restricted by GSA ADP Schedule    *
 ********************************************************************
 */
// External imports
import { html } from "lit";
import { expect, $, browser } from "@wdio/globals";

// Helper import
import { renderComponent } from "../../utils";
import  { EnchantedPopoverArrowPosition } from '../../../types/enchanted-popover';

// Component import
import "../../../components/atomic-component/enchanted-popover";

afterEach(() => {
  document.body.innerHTML = "";
});

describe("enchanted-popover - component test", () => {
  it("enchanted-popover - should render popover with label and text", async () => {
    renderComponent (html`
      <enchanted-popover
        label="Label"
        text="Text"
        showLabel
        showText
      >
        <button slot="target" id="popover-parent">Hover me</button>
      </enchanted-popover>
    `);
    expect(await $("enchanted-popover")).toBeExisting();
    const popover = await $("enchanted-popover");
    expect(await popover.getAttribute("label")).toBe("Label");
    expect(await popover.getAttribute("text")).toBe("Text");
  });

  it('enchanted-popover - should hide label, text and closeIcon when showLabel, showText and showCloseIcon are false ', async () => {
    renderComponent (html`
      <enchanted-popover
        label="Label"
        text="Text"
      >
        <button slot="target" id="popover-parent">Hover me</button>
      </enchanted-popover>
    `);
    const popover = await $("enchanted-popover");
    const labelPart = await popover.shadow$("div[part='label']");
    const textPart = await popover.shadow$("div[part='text']");
    const closeIcon =  await popover.shadow$("button[part='close-icon']");
    expect(await closeIcon.isExisting()).toBe(false);
    expect(await labelPart.isExisting()).toBe(false);
    expect(await textPart.isExisting()).toBe(false);
  });

  it('enchanted-popover - should show label and text when showLabel and showText are true ', async () => {
    renderComponent (html`
      <enchanted-popover
        label="Label"
        text="Text"
        showLabel
        showText
      >
        <button slot="target" id="popover-parent">Hover me</button>
      </enchanted-popover>
    `);
    const popover = await $("enchanted-popover");
    const labelPart = await popover.shadow$("div[part='label']");
    const textPart = await popover.shadow$("div[part='text']");
    expect(await labelPart.isExisting()).toBe(true);
    expect(await textPart.isExisting()).toBe(true);
  });
  
  it('enchanted-popover - should render only label when showLabel is true and showText is false ', async () => {
    renderComponent (html`
      <enchanted-popover
        label="Label"
        text="Text"
        showLabel
      >
        <button slot="target" id="popover-parent">Hover me</button>
      </enchanted-popover>
    `);
    const popover = await $("enchanted-popover");
    const labelPart = await popover.shadow$("div[part='label']");
    const textPart = await popover.shadow$("div[part='text']");
    expect(await labelPart.isExisting()).toBe(true);
    expect(await textPart.isExisting()).toBe(false);
  });

  it('enchanted-popover - should not show arrow when arrow attribute is set to ""  ', async () => {
    renderComponent (html`
      <enchanted-popover
        label="Label"
        text="Text"
        showLabel
        showText
        arrow="${EnchantedPopoverArrowPosition.NONE}"
      >
        <button slot="target" id="popover-parent">Hover me</button>
      </enchanted-popover>
    `);
    const popover = await $("enchanted-popover");
    const arrowPart = await popover.shadow$("div[part='arrow']");
    expect(await arrowPart.isExisting()).toBe(false);
    const wrapperPart = await popover.shadow$("div[part='wrapper']");
    expect(await wrapperPart.isExisting()).toBe(true);
  });

  it('enchanted-popover - should open popover without arrow when arrow attribute is not set ', async () => {
    renderComponent (html`
      <enchanted-popover
        label="Label"
        text="Text"
        showLabel
        showText
      >
        <button slot="target" id="popover-parent">Hover me</button>
      </enchanted-popover>
    `);
    const popover = await $("enchanted-popover");
    const arrowPart = await popover.shadow$("div[part='arrow']");
    expect(await arrowPart.isExisting()).toBe(false);
    const wrapperPart = await popover.shadow$("div[part='wrapper']");
    expect(await wrapperPart.isExisting()).toBe(true);
  });

  it('enchanted-popover - should close popover on close icon click ', async () => {
    renderComponent (html`
      <enchanted-popover
        label="Label"
        text="Text"
        showLabel
        showText
        showCloseIcon
        arrow="${EnchantedPopoverArrowPosition.BOTTOM_LEFT}"
      >
        <button slot="target" id="popover-parent">Hover me</button>
      </enchanted-popover>
    `);
    const trigger = await $("#popover-parent");
    const popover = await $("enchanted-popover");
    const closeIcon =  await popover.shadow$("button[part='close-icon']");
    await trigger.moveTo();
    await popover.waitForDisplayed({ timeout: 300 });
    await closeIcon.click();
    expect(await popover.getProperty("open")).toBe(false);
  });

  it('enchanted-popover - should apply correct theme when  theme ="dark" attribute', async () => {
    renderComponent (html`
      <enchanted-popover
        label="Label"
        text="Text"
        showLabel
        showText
        theme="dark"
      >
        <button slot="target" id="popover-parent">Hover me</button>
      </enchanted-popover>
    `);
    const popover = await $("enchanted-popover");
    expect(await popover.getAttribute("theme")).toBe("dark");
  });

  it('enchanted-popover - should show arrow in correct position based on arrow attribute', async () => {
    renderComponent (html`
      <enchanted-popover
        label="Label"
        text="Text"
        showLabel
        showText
        arrow="${EnchantedPopoverArrowPosition.BOTTOM_LEFT}"
      >
        <button slot="target" id="popover-parent">Hover me</button>
      </enchanted-popover>
    `);
    const popover = await $("enchanted-popover");
    expect(await popover.getAttribute("arrow")).toBe(EnchantedPopoverArrowPosition.BOTTOM_LEFT);
  });

  it('enchanted-popover - should only show popover for element with slot="target" in parent div', async () => {
    renderComponent (html`
      <div id="parent-div">
        <enchanted-popover
          label="Label"
          text="Text"
          showLabel
          showText
        >
          <button slot="target" id="popover-parent">Hover me</button>
        </enchanted-popover>
        <button id="btn-1">Button 1</button>
        <button id="btn-2">Button 2</button>
      </div>
    `);
    const popover = await $("enchanted-popover");
    const targetButton = await $("#popover-parent");
    const btn1 = await $("#btn-1");
    const btn2 = await $("#btn-2");
   
    const popoverWrapper = await popover.shadow$("div[part='wrapper']");
    await targetButton.moveTo();
    await popoverWrapper.waitForDisplayed({ timeout: 300 });
    expect(await popover.getProperty("open")).toBe(true);

    await btn1.moveTo();
    await browser.waitUntil (async () => {
      return (await popover.getProperty("open")) === false;
    }, { 
      timeout: 300, timeoutMsg: 'expected popover to be closed after 300ms'
    });
    expect(await popover.getProperty("open")).toBe(false);

    await btn2.moveTo();
    await browser.waitUntil (async () => {
      return (await popover.getProperty("open")) === false;
    }, { 
      timeout: 300, timeoutMsg: 'expected popover to be closed after 300ms'
    });
    expect(await popover.getProperty("open")).toBe(false);
  });
});
