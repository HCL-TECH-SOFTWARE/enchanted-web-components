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
import { expect } from '@wdio/globals';
import { spyOn } from '@wdio/browser-runner';

import {
  clampToViewport,
  computeBasePosition,
  computeOverflows,
  getAncestorWithTransform,
  getFallbackPlacements,
  getTransformDetails,
  overflowCache,
  resolveStartEndLeft,
  runPlacement,
  shiftCrossAxis,
  tryCandidatePlacement
} from '../../../utils/tooltipUtils';
import { TOOLTIP_PLACEMENT } from '../../../types/cssClassEnums';
import { ViewportBox } from '../../../types/enchanted-tooltip';

describe('tooltipUtils', () => {
  describe('getFallbackPlacements', () => {
    it('should return fallback placements for TOOLTIP_TOP', async () => {
      const result = getFallbackPlacements(TOOLTIP_PLACEMENT.TOOLTIP_TOP);
      await expect(result).toContain(TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM);
      await expect(result).toContain(TOOLTIP_PLACEMENT.TOOLTIP_RIGHT);
      await expect(result).toContain(TOOLTIP_PLACEMENT.TOOLTIP_LEFT);
    });

    it('should return fallback placements for TOOLTIP_BOTTOM_START', async () => {
      const result = getFallbackPlacements(TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START);
      await expect(result).toContain(TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM);
      await expect(result).toContain(TOOLTIP_PLACEMENT.TOOLTIP_TOP_START);
      await expect(result).toContain(TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_START);
    });

    it('should return the correct fallback placements for TOOLTIP_LEFT', async () => {
      const result = getFallbackPlacements(TOOLTIP_PLACEMENT.TOOLTIP_LEFT);
      await expect(result).toContain(TOOLTIP_PLACEMENT.TOOLTIP_RIGHT);
      await expect(result).toContain(TOOLTIP_PLACEMENT.TOOLTIP_TOP);
      await expect(result).toContain(TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM);
    });

    it('should return an empty array for an unsupported placement', async () => {
      const result = getFallbackPlacements('unsupported-placement' as TOOLTIP_PLACEMENT);
      await expect(result).toEqual([]);
    });
  });

  describe('resolveStartEndLeft', () => {
    const targetRect = { left: 100, right: 200, width: 100 } as DOMRect;
    const tooltipWidth = 50;

    it('should resolve left position for start placement in LTR', async () => {
      const result = resolveStartEndLeft(
        TOOLTIP_PLACEMENT.TOOLTIP_TOP_START,
        targetRect,
        tooltipWidth,
        false
      );
      await expect(result).toBe(targetRect.left);
    });

    it('should resolve left position for end placement in RTL', async () => {
      const result = resolveStartEndLeft(
        TOOLTIP_PLACEMENT.TOOLTIP_TOP_END,
        targetRect,
        tooltipWidth,
        true
      );
      await expect(result).toBe(targetRect.left);
    });

    it('should resolve center position for non-start/end placement', async () => {
      const result = resolveStartEndLeft(
        TOOLTIP_PLACEMENT.TOOLTIP_TOP,
        targetRect,
        tooltipWidth,
        false
      );
      await expect(result).toBe(targetRect.left + (targetRect.width - tooltipWidth) / 2);
    });
  });

  describe('computeBasePosition', () => {
    const targetRect = { left: 100, top: 100, right: 200, bottom: 200, width: 100, height: 100 } as DOMRect;
    const tooltipRect = { width: 50, height: 50 } as DOMRect;
    const gap = 10;

    it('should compute position for TOOLTIP_TOP', async () => {
      const result = computeBasePosition(
        TOOLTIP_PLACEMENT.TOOLTIP_TOP,
        targetRect,
        tooltipRect,
        gap,
        false
      );
      await expect(result).toEqual({ left: 125, top: 40 });
    });

    it('should compute position for TOOLTIP_BOTTOM', async () => {
      const result = computeBasePosition(
        TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM,
        targetRect,
        tooltipRect,
        gap,
        false
      );
      await expect(result).toEqual({ left: 125, top: 210 });
    });

    it('should return target center positions as fallback', async () => {
      const result = computeBasePosition(
        'other-placement' as TOOLTIP_PLACEMENT,
        targetRect,
        tooltipRect,
        gap,
        false
      );

      await expect(result).toEqual({ left: 150, top: 150 });
    });
  });

  describe('computeOverflows', () => {
    const viewportBox: ViewportBox = { left: 0, top: 0, right: 500, bottom: 500, width: 500, height: 500 };
    const tooltipRect = { width: 100, height: 50 } as DOMRect;
    const padding = 10, softMargin = 8;
    it('should compute no overflow when tooltip is fully inside viewport', async () => {
      const result = computeOverflows(100, 100, tooltipRect, viewportBox, padding, softMargin);
      await expect(result).toEqual({ top: 0, bottom: 0, left: 0, right: 0, total: 0 });
    });

    it('should compute overflow when tooltip exceeds viewport boundaries', async () => {
      const result = computeOverflows(-20, 480, tooltipRect, viewportBox, padding, softMargin);
      await expect(result).toEqual({ top: 0, bottom: 48, left: 38, right: 0, total: 86 });
    });

    it('should return cached results for repeated inputs', async () => {
      const left = 10, top = 10;
      const cacheSpy = spyOn(overflowCache, 'has');
      const result1 = computeOverflows(left, top, tooltipRect, viewportBox, padding, softMargin);
      const result2 = computeOverflows(left, top, tooltipRect, viewportBox, padding, softMargin);

      await expect(result1).toEqual(result2);

      await expect(cacheSpy).toHaveBeenCalledWith(`${left}-${top}-${tooltipRect.width}-${tooltipRect.height}-${viewportBox.width}-${viewportBox.height}-${padding}`);
      await expect(cacheSpy).toHaveBeenCalledTimes(2);

      cacheSpy.mockRestore();
    });
  });

  describe('clampToViewport', () => {
    const viewportBox: ViewportBox = { left: 0, top: 0, right: 500, bottom: 500, width: 500, height: 500 };
    const tooltipRect = { width: 100, height: 50 } as DOMRect;

    it('should clamp position within viewport', async () => {
      const result = clampToViewport(-20, 480, tooltipRect, viewportBox, 10);
      await expect(result).toEqual({ left: 10, top: 440 });
    });

    it('should not adjust position if already within viewport', async () => {
      const result = clampToViewport(100, 100, tooltipRect, viewportBox, 10);
      await expect(result).toEqual({ left: 100, top: 100 });
    });
  });

  describe('shiftCrossAxis', () => {
    const viewportBox: ViewportBox = { top: 0, left: 0, bottom: 500, right: 500, width: 500, height: 500 };
    const tooltipRect = { width: 100, height: 50 } as DOMRect;
    const padding = 10;

    it('should not adjust position if there is no horizontal overflow for vertical placemenets', async () => {
      const candidatePosition = { left: 100, top: 100 };
      const result = shiftCrossAxis(
        TOOLTIP_PLACEMENT.TOOLTIP_TOP,
        candidatePosition,
        tooltipRect,
        viewportBox,
        padding
      );

      await expect(result).toEqual(candidatePosition);
    });

    it('should adjust position horizontally to the left edge for vertical placements with left-side overflow', async () => {
      // candidate position is overflowing left
      const candidatePosition = { left: -10, top: 100 };
      const result = shiftCrossAxis(
        TOOLTIP_PLACEMENT.TOOLTIP_TOP,
        candidatePosition,
        tooltipRect,
        viewportBox,
        padding
      );

      // Should move to the left edge plus padding
      await expect(result).toEqual({ ...candidatePosition, left: viewportBox.left + padding });
    });

    it('should adjust position horizontally to the right edge for vertical placements with right-side overflow', async () => {
      // candidate position is overflowing to the right
      const candidatePosition = { left: viewportBox.right - (tooltipRect.width - 10), top: 100 };
      const result = shiftCrossAxis(
        TOOLTIP_PLACEMENT.TOOLTIP_TOP,
        candidatePosition,
        tooltipRect,
        viewportBox,
        padding
      );

      // Should move the tooltip where it's hugging the right edge
      await expect(result).toEqual({ ...candidatePosition, left: (viewportBox.right - padding) - tooltipRect.width });
    });

    it('should not adjust position if there is no vertical overflow for horizontal placements', async () => {
      const candidatePosition = { left: 100, top: 100 };
      const result = shiftCrossAxis(
        TOOLTIP_PLACEMENT.TOOLTIP_LEFT,
        candidatePosition,
        tooltipRect,
        viewportBox,
        padding
      );

      await expect(result).toEqual(candidatePosition);
    });

    it('should adjust position vertically to the top edge for horizontal placements with top-side overflow', async () => {
      // candidate position is overflowing top
      const candidatePosition = { left: 100, top: -10 };
      const result = shiftCrossAxis(
        TOOLTIP_PLACEMENT.TOOLTIP_LEFT,
        candidatePosition,
        tooltipRect,
        viewportBox,
        padding
      );

      // Should move to the top edge + padding
      await expect(result).toEqual({ ...candidatePosition, top: padding });
    });

    it('should adjust position vertically to the bottom edge for horizontal placements with bottom-side overflow', async () => {
      // candidate position is overflowing bottom
      const candidatePosition = { left: 100, top: viewportBox.bottom };
      const result = shiftCrossAxis(
        TOOLTIP_PLACEMENT.TOOLTIP_LEFT,
        candidatePosition,
        tooltipRect,
        viewportBox,
        padding
      );

      // Should move the tooltip where it's hugging the bottom edge
      await expect(result).toEqual({ ...candidatePosition, top: viewportBox.bottom - padding - tooltipRect.height });
    });
  });

  describe('tryCandidatePlacement', () => {
    const targetRect = { left: 100, top: 100, right: 200, bottom: 200, width: 100, height: 100 } as DOMRect;
    const tooltipRect = { width: 200, height: 50 } as DOMRect;
    const viewportBox: ViewportBox = { top: 0, left: 0, bottom: 500, right: 500, width: 500, height: 500 };
    const padding = 10;
    const gap = 10;
    const softMargin = 8;

    it('should accept a placement when there is no overflow', async () => {
      const result = tryCandidatePlacement(
        TOOLTIP_PLACEMENT.TOOLTIP_TOP,
        targetRect,
        tooltipRect,
        padding,
        gap,
        softMargin,
        viewportBox,
        false
      );

      await expect(result.accept).toBe(true);
      await expect(result.placement).toBe(TOOLTIP_PLACEMENT.TOOLTIP_TOP);
      await expect(result.overflows.total).toBe(0);
    });

    it('should adjust position along the cross-axis when overflow is classified as CROSS', async () => {
      const result = tryCandidatePlacement(
        TOOLTIP_PLACEMENT.TOOLTIP_TOP,
        { ...targetRect, left: 50 },
        tooltipRect,
        padding,
        gap,
        softMargin,
        viewportBox,
        false
      );

      await expect(result.accept).toBe(true);
      await expect(result.placement).toBe(TOOLTIP_PLACEMENT.TOOLTIP_TOP);
      await expect(result.overflows.total).toBeLessThanOrEqual(softMargin);
    });

    it('should reject a placement when overflow is classified as PRIMARY', async () => {
      const result = tryCandidatePlacement(
        TOOLTIP_PLACEMENT.TOOLTIP_TOP,
        { ...targetRect, top: 0 }, // move the target at top
        tooltipRect,
        padding,
        gap,
        softMargin,
        viewportBox,
        false
      );

      await expect(result.accept).toBe(false);
      await expect(result.placement).toBe(TOOLTIP_PLACEMENT.TOOLTIP_TOP);
      await expect(result.overflows.top).toBeGreaterThan(softMargin);
    });

    it('should reject a placement when overflow is classified as MIXED', async () => {
      const result = tryCandidatePlacement(
        TOOLTIP_PLACEMENT.TOOLTIP_TOP,
        // move the target at top left so the tooltip is overflowing both primary and cross axis
        { ...targetRect, top: 0, left: 0 },
        tooltipRect,
        padding,
        gap,
        softMargin,
        viewportBox,
        false
      );

      await expect(result.accept).toBe(false);
      await expect(result.placement).toBe(TOOLTIP_PLACEMENT.TOOLTIP_TOP);
      await expect(result.overflows.top).toBeGreaterThan(softMargin);
      await expect(result.overflows.left).toBeGreaterThan(softMargin);
    });
  });

  describe('runPlacement', () => {
    const targetRect = { left: 100, top: 100, right: 200, bottom: 200, width: 100, height: 100 } as DOMRect;
    const tooltipRect = { width: 50, height: 50 } as DOMRect;
    const viewportBox: ViewportBox = { top: 0, left: 0, bottom: 500, right: 500, width: 500, height: 500 };
  
    it('should find the best placement for the tooltip', async () => {
      const result = runPlacement(
        TOOLTIP_PLACEMENT.TOOLTIP_TOP,
        targetRect,
        tooltipRect,
        10,
        10,
        8,
        viewportBox,
        false
      );
      await expect(result).toEqual({ left: 125, top: 40, placement: TOOLTIP_PLACEMENT.TOOLTIP_TOP });
    });

    it('should fallback to a valid placement if the initial placement overflows', async () => {
      const result = runPlacement(
        TOOLTIP_PLACEMENT.TOOLTIP_TOP,
        { ...targetRect, top: -50 }, // Target is partially outside the viewport
        tooltipRect,
        10,
        10,
        8,
        viewportBox,
        false
      );
      await expect(result.placement).not.toBe(TOOLTIP_PLACEMENT.TOOLTIP_TOP);
    });

    it('should fallback to the least overflowing placement when all fail', async () => {
      const result = runPlacement(
        TOOLTIP_PLACEMENT.TOOLTIP_TOP,
        // Cover the whole viewport box
        { left: 10, right: 490, top: 10, bottom: 490, width: 480, height: 480 } as DOMRect,
        { width: 50, height: 50 } as DOMRect,
        10,
        10,
        8,
        viewportBox,
        false
      );
      await expect(result.placement).toBeDefined();
      await expect(result.left).toBeGreaterThanOrEqual(0);
      await expect(result.top).toBeGreaterThanOrEqual(0);
    });
  });

  describe('getAncestorWithTransform', () => {
    let root: HTMLElement;
    let parent: HTMLElement;
    let child: HTMLElement;

    beforeEach(() => {
      root = document.createElement('div');
      parent = document.createElement('div');
      child = document.createElement('div');

      root.appendChild(parent);
      parent.appendChild(child);
      document.body.appendChild(root);
    });

    afterEach(() => {
      document.body.removeChild(root);
    });

    it('should return the direct parent if it has a transform', async () => {
      parent.style.transform = 'translate(20px, 20px)';
      await expect(getAncestorWithTransform(child)).toBe(parent);
    });

    it('should return a higher ancestor if it has a transform', async () => {
      root.style.transform = 'translate(20px, 20px)';
      await expect(getAncestorWithTransform(child)).toBe(root);
    });

    it('should return the nearest ancestor when multiple ancestors have transforms', async () => {
      root.style.transform = 'scale(1.5)';
      parent.style.transform = 'translate(20px, 20px)';
      await expect(getAncestorWithTransform(child)).toBe(parent);
    });

    it('should ignore ancestors with a transform value of "none"', async () => {
      root.style.transform = 'translate(20px, 20px)';
      parent.style.transform = 'none';
      await expect(getAncestorWithTransform(child)).toBe(root);
    });

    it('should return null if no ancestors have a transform', async () => {
      await expect(getAncestorWithTransform(child)).toBeNull();
    });

    it('should return null for an element with no parent', async () => {
      const detachedElement = document.createElement('div');
      await expect(getAncestorWithTransform(detachedElement)).toBeNull();
    });
  });

  describe('getTransformDetails', () => {
    let element: HTMLElement;

    beforeEach(() => {
      element = document.createElement('div');
      document.body.appendChild(element);
    });

    afterEach(() => {
      document.body.removeChild(element);
    });

    it('should return default values when no transform is applied', async () => {
      await expect(getTransformDetails(element)).toEqual({
        scale: 1,
        translateX: 0,
        translateY: 0
      });
    });

    it('should return default values when transform is "none"', async () => {
      element.style.transform = 'none';
      await expect(getTransformDetails(element)).toEqual({
        scale: 1,
        translateX: 0,
        translateY: 0
      });
    });

    it('should correctly parse a scale transform', async () => {
      element.style.transform = 'scale(1.5)';
      await expect(getTransformDetails(element)).toEqual({
        scale: 1.5,
        translateX: 0,
        translateY: 0
      });
    });

    it('should correctly parse a translate transform', async () => {
      element.style.transform = 'translate(50px, -25px)';
      await expect(getTransformDetails(element)).toEqual({
        scale: 1,
        translateX: 50,
        translateY: -25
      });
    });

    it('should correctly parse a combined scale and translate transform', async () => {
      element.style.transform = 'translateX(20px) scale(0.8) translateY(10px)';
      const details = getTransformDetails(element);
      await expect(details.scale).toBeCloseTo(0.8);
      await expect(details.translateX).toBeCloseTo(20);
      await expect(details.translateY).toBeCloseTo(8); // translate values are also scaled
    });

    it('should correctly parse an explicit matrix transform', async () => {
      // matrix(scaleX, skewY, skewX, scaleY, translateX, translateY)
      element.style.transform = 'matrix(2, 0, 0, 2, 100, 200)';
      await expect(getTransformDetails(element)).toEqual({
        scale: 2,
        translateX: 100,
        translateY: 200
      });
    });
  });
});
