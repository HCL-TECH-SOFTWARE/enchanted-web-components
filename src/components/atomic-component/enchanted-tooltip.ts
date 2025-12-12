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
import { customElement, property, query, state } from 'lit/decorators.js';
import { v4 as uuid } from 'uuid';
import { html, nothing } from 'lit';

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';

// Helper imports
import { TOOLTIP_PARTS, TOOLTIP_PLACEMENT, TOOLTIP_TYPE, TOOLTIP_VARIANT } from '../../types/cssClassEnums';
import { ViewportBox } from '../../types/enchanted-tooltip';
import { getAncestorWithTransform, getTransformDetails, runPlacement } from '../../utils/tooltipUtils';

@customElement("enchanted-tooltip")
export class EnchantedTooltip extends EnchantedAcBaseElement {
  @property({ type: Boolean, reflect: true })
  show = false;

  @property({ type: String })
  tooltiptext: string | undefined;

  @property({ type: String, reflect: true })
  tooltipSize: TOOLTIP_VARIANT = TOOLTIP_VARIANT.TOOLTIP_SMALL;

  @property({ type: String, reflect: true })
  tooltipType: TOOLTIP_TYPE = TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE;

  @property({ type: String, reflect: true })
  placement: TOOLTIP_PLACEMENT = TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM;

  @property({ type: Number })
  gap = 4;

  @property({ type: Number })
  multiLineMaxWidth = 300;

  @property({ type: Number })
  viewportPadding = 4;

  @property({ type: Number })
  minimumWidth = 0;

  @property({ type: Boolean })
  isRTL = false;

  @state() componentId = uuid();
  @state() effectivePlacement?: TOOLTIP_PLACEMENT;
  @state() effectiveType?: TOOLTIP_TYPE;
  @state() softMargin = 8;
  @state() isTargetVisible = true;
  @state() rafId: number | null = null;

  @query('.tooltip')
  tooltipElement!: HTMLElement;

  @query('.target')
  targetElement!: HTMLElement;
  
  private _targetIntersectionObserver?: IntersectionObserver | null = null;
  private _targetResizeObserver?: ResizeObserver | null = null;
  private _tooltipResizeObserver?: ResizeObserver | null = null;
  private _ancestorResizeObserver?: ResizeObserver | null = null;
  private _targetDismissTimer : number | null = null;
  // Store bound handler to ensure removeEventListener can find it
  private _scheduleTooltipPositionUpdateHandler = () => {return this.scheduleTooltipPositionUpdate();};

  connectedCallback() {
    super.connectedCallback();
    this.effectivePlacement = this.placement;
    this.effectiveType = this.tooltipType;
    
    // Detach first to prevent duplicate listeners if connectedCallback is called multiple times
    this.detachListeners();
    this.attachListeners();
  }
  
  firstUpdated() {
    this.startObservers();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback(); 
    this.unmount();
  }
  
  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (
      changedProperties.has('show') || 
      changedProperties.has('tooltiptext') ||
      changedProperties.has('tooltipSize') ||
      changedProperties.has('tooltipType') ||
      changedProperties.has('placement')
    ) {
      if (this.show && this.isTargetVisible) {
        this.attachA11y();
        this.scheduleTooltipPositionUpdate();
      }
    }
  }

  scheduleTooltipPositionUpdate = () => {
    if (this.rafId !== null) return;
    this.rafId = requestAnimationFrame(async () => {
      this.rafId = null;
      await this.updateTooltipPosition();
    });
  };

  attachListeners() {
    // Use stored handler reference to ensure removeEventListener works correctly
    window.addEventListener('scroll', this._scheduleTooltipPositionUpdateHandler, { passive: true });
    window.addEventListener('resize', this._scheduleTooltipPositionUpdateHandler, { passive: true, capture: true });

    if (window.visualViewport) {
      visualViewport?.addEventListener('resize', this._scheduleTooltipPositionUpdateHandler, { passive: true });
      visualViewport?.addEventListener('scroll', this._scheduleTooltipPositionUpdateHandler, { passive: true });
    }
  }

  detachListeners() {
    // Use same handler reference to properly remove listeners
    window.removeEventListener('scroll', this._scheduleTooltipPositionUpdateHandler);
    window.removeEventListener('resize', this._scheduleTooltipPositionUpdateHandler);

    if (window.visualViewport) {
      visualViewport?.removeEventListener('resize', this._scheduleTooltipPositionUpdateHandler);
      visualViewport?.removeEventListener('scroll', this._scheduleTooltipPositionUpdateHandler);
    }
  }

  startObservers() {
    this.startTargetIntersectionObserver();
    this._targetResizeObserver = new ResizeObserver(this.scheduleTooltipPositionUpdate);
    this._targetResizeObserver.observe(this.targetElement);
    
    if (this.show) {
      this._tooltipResizeObserver = new ResizeObserver(this.scheduleTooltipPositionUpdate);
      this._tooltipResizeObserver.observe(this.tooltipElement);
    }

    const ancestor = getAncestorWithTransform(this);
    if (ancestor) {
      this._ancestorResizeObserver = new ResizeObserver(this.scheduleTooltipPositionUpdate);
      this._ancestorResizeObserver.observe(ancestor);
    }
  }

  stopObservers() {
    this._targetIntersectionObserver?.disconnect();
    this._targetIntersectionObserver = null;

    this._targetResizeObserver?.disconnect();
    this._targetResizeObserver = null;

    this._tooltipResizeObserver?.disconnect();
    this._tooltipResizeObserver = null;

    this._ancestorResizeObserver?.disconnect();
    this._ancestorResizeObserver = null;
  }

  unmount() {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
    }

    if (this._targetDismissTimer) {
      clearTimeout(this._targetDismissTimer);
      this._targetDismissTimer = null;
    }

    this.detachListeners();
    this.stopObservers();
  }

  onTargetVisibility = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    const nowVisible = entry.isIntersecting && entry.intersectionRatio >= 0.01;
    this.isTargetVisible = nowVisible;
    
    if (nowVisible) {
      if (this._targetDismissTimer) {
        clearTimeout(this._targetDismissTimer);
        this._targetDismissTimer = null;
      }
    } else {
      if (!this._targetDismissTimer) {
        this._targetDismissTimer = window.setTimeout(() => {
          this._targetDismissTimer = null;
          this.isTargetVisible = false;
          this.show = false;
        }, 150);
      }
    }
  };

  startTargetIntersectionObserver() {
    const rootMargin = `-${this.viewportPadding}px`;
    const thresholds = [0, 0.01];
    const options = {
      root: null,
      rootMargin: rootMargin,
      threshold: thresholds
    };

    this._targetIntersectionObserver?.disconnect();
    this._targetIntersectionObserver = new IntersectionObserver(this.onTargetVisibility, options);
    this._targetIntersectionObserver.observe(this.targetElement);
  }

  // Arrow functions ensure stable references for event handlers across re-renders
  // This prevents duplicate handler registration when connectedCallback is called multiple times
  handleMouseOver = (event: Event) => {
    event.stopPropagation();
    this.show = true;
  };

  handleMouseLeave = (event: Event) => {
    event.stopPropagation();
    this.show = false;
  };

  handleFocus = (event: FocusEvent) => {
    event.stopPropagation();
    this.show = true;
  };

  handleBlur = (event: FocusEvent) => {
    event.stopPropagation();
    this.show = false;
  };

  getTooltipTextParts() {
    return `${TOOLTIP_PARTS.TOOLTIP_TEXT} ${this.effectiveType} ${this.tooltipSize} ${this.effectivePlacement}`;
  }
  
  readVisibleViewportBox(): ViewportBox {
    if (window.visualViewport) {
      const visualViewport = window.visualViewport;
      
      return {
        left: visualViewport.offsetLeft,
        top: visualViewport.offsetTop,
        right: visualViewport.offsetLeft + visualViewport.width,
        bottom: visualViewport.offsetTop + visualViewport.height,
        width: visualViewport.width,
        height: visualViewport.height
      };
    }
    
    const documentElement = document.documentElement;
    return {
      left: 0,
      top: 0,
      right: documentElement.clientWidth,
      bottom: documentElement.clientHeight,
      width: documentElement.clientWidth,
      height: documentElement.clientHeight
    };
  }

  computeAvailableWidth(
    placement: TOOLTIP_PLACEMENT, 
    targetRect: DOMRect,
    viewportBox: ViewportBox,
    padding: number,
    gap: number
  ): number {
    let availableWidth = viewportBox.width - 2 * padding;

    if (placement.startsWith('tooltip-left')) {
      availableWidth = Math.min(availableWidth, targetRect.left - padding - gap);
    } else if (this.placement.startsWith('tooltip-right')) {
      availableWidth = Math.min(availableWidth, (viewportBox.right - padding) - (targetRect.right + this.gap));
    }

    return  Math.max(this.minimumWidth, Math.floor(availableWidth));
  }

  async measureSingleLineWidth(
    tooltipEl: HTMLElement
  ) {
    const snapshot = this.tooltipElement.style.cssText;

    tooltipEl.style.visibility = 'hidden';
    tooltipEl.style.whiteSpace = 'nowrap';
    tooltipEl.style.maxWidth = 'none';
    tooltipEl.style.overflow = 'visible';
    
    await this.updateComplete;

    const width = Math.round(this.tooltipElement.scrollWidth);
    tooltipEl.style.cssText = snapshot;

    return width;
  }

  decideEffectiveType(
    singleLineWidth: number | null,
    availableWidth: number,
    prevType: TOOLTIP_TYPE
  ) {
    if (singleLineWidth === null) return TOOLTIP_TYPE.TOOLTIP_MULTI_LINE;

    const roundedAvailableWidth = Math.round(availableWidth);

    if (prevType === TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE) {
      return (singleLineWidth > roundedAvailableWidth) ? TOOLTIP_TYPE.TOOLTIP_MULTI_LINE : TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE;
    }

    return TOOLTIP_TYPE.TOOLTIP_MULTI_LINE;
  }
  
  applySingleSizing(
    tooltipEl: HTMLElement,
    availableWidth: number
  ): { maxWidth: number } {
    tooltipEl.style.whiteSpace = 'nowrap';
    tooltipEl.style.overflowWrap = '';
    tooltipEl.style.maxWidth = `${availableWidth}px`;
    tooltipEl.style.maxHeight = '';
    tooltipEl.style.overflow = 'visible';

    return {
      maxWidth: availableWidth
    };
  };

  applyMultiSizing(
    tooltipEl: HTMLElement,
    availableWidth: number,
    visibleViewportHeight: number,
    padding: number,
    desiredMaxWidth: number
  ): { maxWidth: number; maxHeight: number } {
    tooltipEl.style.whiteSpace = 'normal';
    
    const maxWidth = Math.max(this.minimumWidth, Math.min(desiredMaxWidth, availableWidth));
    const maxHeight = visibleViewportHeight - 2 * padding;
    tooltipEl.style.maxWidth = `${availableWidth}px`;
    tooltipEl.style.maxHeight = '';
    tooltipEl.style.overflow = 'visible';
    tooltipEl.style.maxWidth = `${maxWidth}px`;
    tooltipEl.style.maxHeight = `${maxHeight}px`;
    
    return {
      maxWidth: maxWidth,
      maxHeight: maxHeight
    };
  }
  
  async runSizing(
    placement: TOOLTIP_PLACEMENT,
    targetRect: DOMRect,
    viewportBox: ViewportBox,
    padding: number
  ) {
    const availableWidth = this.computeAvailableWidth(
      placement,
      targetRect,
      viewportBox,
      this.viewportPadding,
      this.gap
    );
    const needSingleLineWidth = this.tooltipType === TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE;
    const singleLineWidth = needSingleLineWidth ? await this.measureSingleLineWidth(this.tooltipElement) : null;

    const effectiveType = this.decideEffectiveType(
      singleLineWidth,
      availableWidth,
      this.tooltipType
    );

    this.effectiveType = effectiveType;
    
    if (this.effectiveType === TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE) {
      const { maxWidth } = this.applySingleSizing(
        this.tooltipElement,
        availableWidth
      );
      return {
        effectiveType,
        availableWidth,
        appliedMaxWidth: maxWidth,
        singleLineWidth
      };

    } else if (this.effectiveType === TOOLTIP_TYPE.TOOLTIP_MULTI_LINE) {
      const { maxWidth, maxHeight } = this.applyMultiSizing(
        this.tooltipElement,
        availableWidth,
        viewportBox.height,
        padding,
        this.multiLineMaxWidth
      );

      return {
        effectiveType,
        availableWidth,
        appliedMaxWidth: maxWidth,
        appliedMaxHeight: maxHeight,
        singLineWidth: this.tooltipType === TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE ? singleLineWidth : undefined
      };
    }
  }

  applyPosition(
    tooltip: HTMLElement,
    left: number,
    top: number,
  ) {
    tooltip.style.left = `${Math.round(left)}px`;
    tooltip.style.top = `${Math.round(top)}px`;
  }

  isTargetElementVisible(
    targetRect: DOMRect,
    viewportBox: ViewportBox,
    padding: number
  ): boolean {
    const paddingLeft = viewportBox.left + padding;
    const paddingTop = viewportBox.top + padding;
    const paddingRight = viewportBox.right - padding;
    const paddingBottom = viewportBox.bottom - padding;

    const intersectionX = Math.max(0, Math.min(targetRect.right, paddingRight) - Math.max(targetRect.left, paddingLeft));
    const intersectionY = Math.max(0, Math.min(targetRect.bottom, paddingBottom) - Math.max(targetRect.top, paddingTop));

    return intersectionX > 0 && intersectionY > 0;
  }

  updateTooltipPosition = async () => {
    if (!this.tooltipElement || !this.targetElement || !this.show) return;
    const targetRect = this.targetElement.getBoundingClientRect();
    const viewportBox = this.readVisibleViewportBox();
    
    let targetVisible = this.isTargetElementVisible(
      targetRect,
      viewportBox,
      this.viewportPadding
    );

    if (!targetVisible) {
      this.tooltipElement.style.visibility = 'hidden';
      return;
    }

    await this.runSizing(
      this.placement,
      this.targetElement.getBoundingClientRect(),
      viewportBox,
      this.viewportPadding
    );

    const tooltipRect = this.tooltipElement.getBoundingClientRect();

    let finalPlacement = runPlacement(
      this.placement,
      this.targetElement.getBoundingClientRect(),
      tooltipRect,
      this.viewportPadding,
      this.gap,
      this.softMargin,
      viewportBox,
      this.isRTL
    );

    // Last sizing update for left/right placements if flipped
    if (this.placement.startsWith('tooltip-left') || this.placement.startsWith('tooltip-right') && this.placement !== finalPlacement.placement) {
      await this.runSizing(
        finalPlacement.placement,
        targetRect,
        viewportBox,
        this.viewportPadding
      );

      const sizedTooltipRect = this.tooltipElement.getBoundingClientRect();
      
      finalPlacement = runPlacement(
        finalPlacement.placement,
        this.targetElement.getBoundingClientRect(),
        sizedTooltipRect,
        this.viewportPadding,
        this.gap,
        this.softMargin,
        viewportBox,
        this.isRTL
      );

    }

    this.effectivePlacement = finalPlacement.placement;
    let top = finalPlacement.top, left = finalPlacement.left;
    
    // There will be a new containing block if there's a transform style on any ancenstor element
    const newContainingBlockEl = getAncestorWithTransform(this);
    if (newContainingBlockEl) {
      // Get the element scale (1 by default) since this will affect placement
      const { scale } = getTransformDetails(newContainingBlockEl);

      // Recalculate the position to fix the position
      left = (left - newContainingBlockEl.getBoundingClientRect().left) / scale;
      top = (top - newContainingBlockEl.getBoundingClientRect().top) / scale;
    }

    this.applyPosition(
      this.tooltipElement,
      left,
      top
    );

    requestAnimationFrame(() => {
      targetVisible = this.isTargetElementVisible(
        targetRect,
        viewportBox,
        this.viewportPadding
      );
      if (this.tooltipElement) {
        this.tooltipElement.style.visibility = 'visible';
      }
    }
    );
  };

  attachA11y() {
    this.tooltipElement.setAttribute('role', 'tooltip');
    this.targetElement.setAttribute('aria-describedby', `tooltip${this.componentId}`);
  }

  render() {
    return html`
      <div 
        part=${TOOLTIP_PARTS.TOOLTIP_ROOT}
        @pointerleave=${this.handleMouseLeave}
        @focusout=${this.handleBlur}
      >
        ${this.show ? 
            html`
            <div
              id="tooltip${this.componentId}"
              data-testid="tooltip-text"
              part=${this.getTooltipTextParts()}
              class='tooltip'
              role='tooltip'
            >
              <slot name="tooltip">
                ${this.tooltiptext === undefined ? nothing : this.tooltiptext}
              </slot>
            </div>` 
            : nothing 
          }
        <div id="target${this.componentId}" class='target'>
          <slot
            name="target"
            part=${TOOLTIP_PARTS.TOOLTIP_TARGET}
            @pointerenter=${this.handleMouseOver}
            @focusin=${this.handleFocus}
          >
          </slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "enchanted-tooltip": EnchantedTooltip;
  }
}
