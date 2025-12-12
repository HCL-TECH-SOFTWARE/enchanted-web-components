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

import { TOOLTIP_PLACEMENT } from "../types/cssClassEnums";
import { Overflow, OverflowClassification, ViewportBox } from "../types/enchanted-tooltip";

const PLACEMENT_FALLBACK_MAP = new Map<TOOLTIP_PLACEMENT, TOOLTIP_PLACEMENT[]>([
  [
    TOOLTIP_PLACEMENT.TOOLTIP_TOP,
    [
      TOOLTIP_PLACEMENT.TOOLTIP_TOP,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_START,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_END,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT_START,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT_END,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP_START,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP_END,
    ],
  ],
  [
    TOOLTIP_PLACEMENT.TOOLTIP_TOP_START,
    [
      TOOLTIP_PLACEMENT.TOOLTIP_TOP_START,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_START,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_END,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT_START,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT_END,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP_END,
    ],
  ],
  [
    TOOLTIP_PLACEMENT.TOOLTIP_TOP_END,
    [
      TOOLTIP_PLACEMENT.TOOLTIP_TOP_END,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_START,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_END,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT_START,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT_END,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP_START,
    ],
  ],
  [
    TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM,
    [
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP_START,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP_END,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_START,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_END,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT_START,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT_END,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END,
    ],
  ],
  [
    TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START,
    [
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP_START,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP_END,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_START,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_END,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT_START,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT_END,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END,
    ],
  ],
  [
    TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END,
    [
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP_END,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP_START,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_START,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_END,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT_START,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT_END,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START,
    ],
  ],
  [
    TOOLTIP_PLACEMENT.TOOLTIP_RIGHT,
    [
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT_START,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT_END,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP_START,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP_END,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_START,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_END,
    ],
  ],
  [
    TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_START,
    [
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_START,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT_START,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT_END,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP_START,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP_END,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_END,
    ],
  ],
  [
    TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_END,
    [
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_END,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT_END,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT_START,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP_START,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP_END,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_START,
    ],
  ],
  [
    TOOLTIP_PLACEMENT.TOOLTIP_LEFT,
    [
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_START,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_END,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP_START,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP_END,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT_START,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT_END,
    ],
  ],
  [
    TOOLTIP_PLACEMENT.TOOLTIP_LEFT_START,
    [
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT_START,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_START,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_END,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP_START,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP_END,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT_END,
    ],
  ],
  [
    TOOLTIP_PLACEMENT.TOOLTIP_LEFT_END,
    [
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT_END,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_END,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM,
      TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_START,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP_START,
      TOOLTIP_PLACEMENT.TOOLTIP_TOP_END,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START,
      TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END,
      TOOLTIP_PLACEMENT.TOOLTIP_LEFT_START,
    ],
  ],
]);

/**
 * Returns a list of fallback placements for the tooltip based on the initial placement.
 * @param {TOOLTIP_PLACEMENT} placement - The initial tooltip placement.
 * @returns {TOOLTIP_PLACEMENT[]} An array of fallback placements in priority order.
 */
export const getFallbackPlacements = (placement: TOOLTIP_PLACEMENT): TOOLTIP_PLACEMENT[] => {
  return PLACEMENT_FALLBACK_MAP.get(placement) || [];
};

/**
 * Resolves the horizontal position (left) for the tooltip based on the placement.
 * @param {TOOLTIP_PLACEMENT} placement - The tooltip placement.
 * @param {DOMRect} targetRect - The bounding rectangle of the target element.
 * @param {number} tooltipWidth - The width of the tooltip.
 * @param {boolean} isRTL - Whether the layout is right-to-left.
 * @returns {number} The computed left position for the tooltip.
 */
export const resolveStartEndLeft = (
  placement: TOOLTIP_PLACEMENT,
  targetRect: DOMRect,
  tooltipWidth: number,
  isRTL: boolean
): number => {
  const start = isRTL ? (targetRect.right - tooltipWidth) : targetRect.left;
  const end = isRTL ? targetRect.left : (targetRect.right - tooltipWidth);

  if (placement.endsWith('-start')) return start;
  if (placement.endsWith('-end')) return end;

  // Horizontal center position
  return targetRect.left + (targetRect.width - tooltipWidth) / 2;
};

/**
 * Resolves the vertical position (top) for the tooltip based on the placement.
 * @param {TOOLTIP_PLACEMENT} placement - The tooltip placement.
 * @param {DOMRect} targetRect - The bounding rectangle of the target element.
 * @param {number} tooltipHeight - The height of the tooltip.
 * @returns {number} The computed top position for the tooltip.
 */
export const resolveStartEndTop = (
  placement: TOOLTIP_PLACEMENT,
  targetRect: DOMRect,
  tooltipHeight: number,
): number => {
  if (placement.endsWith('-start')) return targetRect.top;
  if (placement.endsWith('-end')) return targetRect.bottom - tooltipHeight;

  // Vertical center position
  return targetRect.top + (targetRect.height - tooltipHeight) / 2;
};

/**
 * Computes the base position (left and top) of the tooltip based on the placement.
 * @param {TOOLTIP_PLACEMENT} placement - The tooltip placement.
 * @param {DOMRect} targetRect - The bounding rectangle of the target element.
 * @param {DOMRect} tooltipRect - The bounding rectangle of the tooltip element.
 * @param {number} gap - The gap between the tooltip and the target.
 * @param {boolean} isRTL - Whether the layout is right-to-left.
 * @returns {{ left: number, top: number }} The computed base position for the tooltip.
 */
export const computeBasePosition = (
  placement: TOOLTIP_PLACEMENT,
  targetRect: DOMRect,
  tooltipRect: DOMRect,
  gap: number,
  isRTL: boolean
) => {
  const leftCenter = targetRect.left + targetRect.width / 2;
  const topCenter = targetRect.top + targetRect.height / 2;

  switch (true) {
    case placement.startsWith('tooltip-top'):
      return {
        left: resolveStartEndLeft(
          placement,
          targetRect,
          tooltipRect.width,
          isRTL
        ),
        top: targetRect.top - tooltipRect.height - gap
      };
    case placement.startsWith('tooltip-bottom'):
      return {
        left: resolveStartEndLeft(
          placement,
          targetRect,
          tooltipRect.width,
          isRTL
        ),
        top: targetRect.bottom + gap
      };
    case placement.startsWith('tooltip-right'):
      return {
        left: targetRect.right + gap,
        top: resolveStartEndTop(
          placement,
          targetRect,
          tooltipRect.height
        )
      };
    case placement.startsWith('tooltip-left'):
      return {
        left: targetRect.left - tooltipRect.width - gap,
        top: resolveStartEndTop(
          placement,
          targetRect,
          tooltipRect.height
        )
      };
    default:
      return {
        left: leftCenter,
        top: topCenter
      };
  }
};

export const overflowCache = new Map<string, Overflow>();

/**
 * Computes the overflow values for the tooltip relative to the viewport.
 * @param {number} left - The left position of the tooltip.
 * @param {number} top - The top position of the tooltip.
 * @param {DOMRect} tooltipRect - The bounding rectangle of the tooltip element.
 * @param {ViewportBox} viewportBox - The visible viewport dimensions.
 * @param {number} padding - The padding to apply around the viewport.
 * @returns {Overflow} The computed overflow values for all sides of the tooltip.
 */
export const computeOverflows = (
  left: number,
  top: number,
  tooltipRect: DOMRect,
  viewportBox: ViewportBox,
  padding: number,
  softMargin: number
): Overflow => {
  // Cache key based on input parameters
  const cacheKey = `${left}-${top}-${tooltipRect.width}-${tooltipRect.height}-${viewportBox.width}-${viewportBox.height}-${padding}`;
  
  if (overflowCache.has(cacheKey)) {
    return overflowCache.get(cacheKey)!;
  }
  
  const leftOverflow = Math.max(0, (viewportBox.left + padding + softMargin) - left);
  const topOverflow = Math.max(0, (viewportBox.top + padding + softMargin) - top);
  const rightOverflow = Math.max(0, (left + tooltipRect.width) - (viewportBox.right - padding - softMargin));
  const bottomOverflow = Math.max(0, (top + tooltipRect.height) - (viewportBox.bottom - padding - softMargin));

  const overflow = {
    left: leftOverflow,
    top: topOverflow,
    right: rightOverflow,
    bottom: bottomOverflow,
    total: leftOverflow + topOverflow + rightOverflow + bottomOverflow
  };

  overflowCache.set(cacheKey, overflow);
  
  return overflow;
};

/**
 * Determines whether the placement is primarily vertical (top or bottom).
 * @param {TOOLTIP_PLACEMENT} placement - The tooltip placement.
 * @returns {boolean} `true` if the placement is vertical, otherwise `false`.
 */
export const isPrimaryVertical = (placement: TOOLTIP_PLACEMENT): boolean => {
  return placement.startsWith('tooltip-top') || placement.startsWith('tooltip-bottom');
};

/**
 * Classifies the overflow of the tooltip based on the placement and soft margin.
 * @param {TOOLTIP_PLACEMENT} placement - The tooltip placement.
 * @param {Overflow} overflow - The overflow values for the tooltip.
 * @param {number} softMargin - The soft margin to allow for overflow.
 * @returns {OverflowClassification} The classification of the overflow.
 */
export const classifyOverflow = (
  placement: TOOLTIP_PLACEMENT,
  overflow: Overflow,
  softMargin: number
) => {
  const primaryAxisFailure = isPrimaryVertical(placement) 
    ? (overflow.top > softMargin || overflow.bottom > softMargin)
    : (overflow.left > softMargin || overflow.right > softMargin);
  
  const crossAxisFailure = isPrimaryVertical(placement)
    ? (overflow.left > softMargin || overflow.right > softMargin)
    : (overflow.top > softMargin || overflow.bottom > softMargin);
  
  if (!primaryAxisFailure && !crossAxisFailure) return OverflowClassification.ACCEPT;
  if (!primaryAxisFailure && crossAxisFailure) return OverflowClassification.CROSS;
  if (primaryAxisFailure && !crossAxisFailure) return OverflowClassification.PRIMARY;
  return OverflowClassification.MIXED;
};

/**
 * Clamps the tooltip position to ensure it stays within the viewport.
 * @param {number} left - The left position of the tooltip.
 * @param {number} top - The top position of the tooltip.
 * @param {DOMRect} tooltipRect - The bounding rectangle of the tooltip element.
 * @param {ViewportBox} viewportBox - The visible viewport dimensions.
 * @param {number} padding - The padding to apply around the viewport.
 * @returns {{ left: number, top: number }} The clamped position for the tooltip.
 */
export const clampToViewport = (
  left: number,
  top: number,
  tooltipRect: DOMRect,
  viewportBox: ViewportBox,
  padding: number
): { left: number, top: number } => {

  const minLeft = viewportBox.left + padding;
  const maxLeft = viewportBox.right - padding - tooltipRect.width;
  const minTop = viewportBox.top + padding;
  const maxTop = viewportBox.bottom - padding - tooltipRect.height;

  return {
    left: Math.min(Math.max(left, minLeft), maxLeft),
    top: Math.min(Math.max(top, minTop), maxTop)
  };
};

/**
 * Adjusts the tooltip position along the cross-axis to fit within the viewport.
 * @param {TOOLTIP_PLACEMENT} placement - The tooltip placement.
 * @param {{ left: number, top: number }} candidatePosition - The candidate position for the tooltip.
 * @param {DOMRect} tooltipRect - The bounding rectangle of the tooltip element.
 * @param {ViewportBox} viewportBox - The visible viewport dimensions.
 * @param {number} padding - The padding to apply around the viewport.
 * @returns {{ left: number, top: number }} The adjusted position for the tooltip.
 */
export const shiftCrossAxis = (
  placement: TOOLTIP_PLACEMENT,
  candidatePosition: { left: number, top: number },
  tooltipRect: DOMRect,
  viewportBox: ViewportBox,
  padding: number
): { left: number, top: number } => {
  if (isPrimaryVertical(placement)) {
    const minLeft = viewportBox.left + padding;
    const maxLeft = viewportBox.right - padding - tooltipRect.width;

    return {
      left: Math.min(Math.max(candidatePosition.left, minLeft), maxLeft),
      top: candidatePosition.top
    };
  } else {
    const minTop = viewportBox.top + padding;
    const maxTop = viewportBox.bottom - padding - tooltipRect.height;

    return {
      left: candidatePosition.left,
      top: Math.min(Math.max(candidatePosition.top, minTop), maxTop)
    };
  }
};

/**
 * Scores a candidate placement based on its overflow values.
 * @param {TOOLTIP_PLACEMENT} placement - The tooltip placement.
 * @param {Overflow} overflow - The overflow values for the tooltip.
 * @returns {number} The score for the candidate placement (lower is better).
 */
export const scoreCandidate = (
  placement: TOOLTIP_PLACEMENT,
  overflow: Overflow
): number => {
  const primaryAxisOverflows = isPrimaryVertical(placement) ? overflow.top + overflow.bottom : overflow.left + overflow.right;
  const crossAxisOverflows = isPrimaryVertical(placement) ? overflow.left + overflow.right : overflow.top + overflow.bottom;

  // Weighted - give heavier weight for primary axis overflows
  return primaryAxisOverflows * 2 + crossAxisOverflows;
};

/**
 * Attempts to find a valid placement for the tooltip by evaluating overflow and adjusting position.
 * @param {TOOLTIP_PLACEMENT} placement - The tooltip placement.
 * @param {DOMRect} targetRect - The bounding rectangle of the target element.
 * @param {DOMRect} tooltipRect - The bounding rectangle of the tooltip element.
 * @param {number} padding - The padding to apply around the viewport.
 * @param {number} gap - The gap between the tooltip and the target.
 * @param {number} softMargin - The soft margin to allow for overflow.
 * @param {ViewportBox} viewportBox - The visible viewport dimensions.
 * @param {boolean} isRTL - Whether the layout is right-to-left.
 * @returns {{ accept: boolean, left: number, top: number, placement: TOOLTIP_PLACEMENT, overflows: Overflow }} The result of the placement attempt.
 */
export const tryCandidatePlacement = (
  placement: TOOLTIP_PLACEMENT,
  targetRect: DOMRect,
  tooltipRect: DOMRect,
  padding: number,
  gap: number,
  softMargin: number,
  viewportBox: ViewportBox,
  isRTL: boolean
) => {
  let candidateBasePosition = computeBasePosition(
    placement,
    targetRect,
    tooltipRect,
    gap,
    isRTL
  );

  let candidateOverflows = computeOverflows(
    candidateBasePosition.left,
    candidateBasePosition.top,
    tooltipRect,
    viewportBox,
    padding,
    softMargin
  );

  let classification = classifyOverflow(
    placement,
    candidateOverflows,
    softMargin
  );
  
  if (classification === OverflowClassification.ACCEPT) {
    return {
      accept: true,
      left: candidateBasePosition.left,
      top: candidateBasePosition.top,
      placement,
      overflows: candidateOverflows
    };
  }

  if (classification === OverflowClassification.CROSS) {
    candidateBasePosition = shiftCrossAxis(
      placement,
      candidateBasePosition,
      tooltipRect,
      viewportBox,
      padding
    );

    candidateOverflows = computeOverflows(
      candidateBasePosition.left,
      candidateBasePosition.top,
      tooltipRect,
      viewportBox,
      padding,
      softMargin
    );

    classification = classifyOverflow(
      placement,
      candidateOverflows,
      softMargin
    );

    if (classification === OverflowClassification.ACCEPT) {
      return {
        accept: true,
        left: candidateBasePosition.left,
        top: candidateBasePosition.top,
        placement,
        overflows: candidateOverflows
      };
    }
  }
  
  return {
    accept: false,
    left: candidateBasePosition.left,
    top: candidateBasePosition.top,
    placement,
    overflows: candidateOverflows
  };
};

/**
 * Rounds the left and top positions to the nearest integer.
 * @param {number} left - The left position of the tooltip.
 * @param {number} top - The top position of the tooltip.
 * @returns {{ left: number, top: number }} The rounded position.
 */
export const roundLeftTop = (left: number, top: number) => {
  return { left: Math.round(left), top: Math.round(top) };
};

/**
 * Determines the best placement for the tooltip by evaluating all fallback placements.
 * @param {TOOLTIP_PLACEMENT} placement - The initial tooltip placement.
 * @param {DOMRect} targetRect - The bounding rectangle of the target element.
 * @param {DOMRect} tooltipRect - The bounding rectangle of the tooltip element.
 * @param {number} padding - The padding to apply around the viewport.
 * @param {number} gap - The gap between the tooltip and the target.
 * @param {number} softMargin - The soft margin to allow for overflow.
 * @param {ViewportBox} viewportBox - The visible viewport dimensions.
 * @param {boolean} isRTL - Whether the layout is right-to-left.
 * @returns {{ left: number, top: number, placement: TOOLTIP_PLACEMENT }} The best placement and position for the tooltip.
 */
export const runPlacement = (
  placement: TOOLTIP_PLACEMENT,
  targetRect: DOMRect,
  tooltipRect: DOMRect,
  padding: number,
  gap: number,
  softMargin: number,
  viewportBox: ViewportBox,
  isRTL: boolean
) => {
  const placements = getFallbackPlacements(placement);
  const tried = [];

  for (const currentPlacement of placements) {
    const attempt = tryCandidatePlacement(
      currentPlacement,
      targetRect,
      tooltipRect,
      padding,
      gap,
      softMargin,
      viewportBox,
      isRTL
    );

    if (attempt.accept) {
      const clamped = clampToViewport(
        attempt.left,
        attempt.top,
        tooltipRect,
        viewportBox,
        padding
      );
      
      const rounded = roundLeftTop(clamped.left, clamped.top);
      return {
        left: rounded.left,
        top: rounded.top,
        placement: attempt.placement
      };
    }

    tried.push(attempt);
  }

  // if no candidate has passed choose the one with the least overflows
  tried.sort((a, b) => {return scoreCandidate(a.placement, a.overflows) - scoreCandidate(b.placement, b.overflows);});
  const bestPlacement = tried[0];
  
  // final fallback clamp
  const clamped = clampToViewport(
    bestPlacement.left,
    bestPlacement.top,
    tooltipRect,
    viewportBox,
    padding
  );

  const rounded = roundLeftTop(clamped.left, clamped.top);
  return {
    left: rounded.left,
    top: rounded.top,
    placement: bestPlacement.placement,
  };
};

/**
 * Finds the nearest ancestor of a given element that has a CSS `transform` applied.
 *
 * This function traverses up the DOM tree from the element's parent, checking each
 * ancestor's computed style for the `transform` property. It stops and returns
 * the first ancestor it finds with a `transform` that is not 'none'.
 *
 * @param {HTMLElement} element The starting element to check from.
 * @returns {HTMLElement | null} The nearest ancestor with a `transform` or `null` if none is found.
 */
export const getAncestorWithTransform = (element: HTMLElement) => {
// Start the check from the element's parent, not the element itself.
  let parent = element.parentElement;

  // Loop up the DOM tree until the parent is null (i.e., we've reached the top of the tree).
  while (parent) {
    // Get the computed style of the parent element.
    const style = window.getComputedStyle(parent);
    
    // Check if the transform property exists and is not 'none'.
    // The transform property is a string, and 'none' is the default value.
    if (style.transform && style.transform !== 'none') {
      return parent;
    }
    
    // Move up to the next parent in the tree.
    parent = parent.parentElement;
  }
  
  // If the loop completes without finding a transform, return null.
  return null;
};

/**
 * Gets the scale and translate values from an element's computed transform matrix.
 * @param {HTMLElement} element The element to inspect.
 * @returns {{scale: number, translateX: number, translateY: number}} The transform details.
 */
export const getTransformDetails = (element: HTMLElement) => {
  const computedStyle = window.getComputedStyle(element);
  const transform = computedStyle.getPropertyValue('transform') || computedStyle.getPropertyValue('-webkit-transform');

  if (transform === 'none') {
    return {
      scale: 1,
      translateX: 0,
      translateY: 0
    };
  }

  // Use a temporary element to parse the matrix values
  const matrix = new DOMMatrix(transform);

  // The 'a' and 'd' values represent the scaleX and scaleY
  const scale = matrix.a;

  // The 'e' and 'f' values represent the translateX and translateY
  const translateX = matrix.e;
  const translateY = matrix.f;

  return {
    scale: scale,
    translateX: translateX,
    translateY: translateY
  };
};
