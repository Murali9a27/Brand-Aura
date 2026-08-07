"use client";

import {
  useEffect,
  useRef,
  type RefObject,
} from "react";

export default function usePortfolioHorizontalScroll(): RefObject<HTMLDivElement | null> {
  const viewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    let isDragging = false;
    let pointerStartX = 0;
    let scrollStartX = 0;

    /*
     * Allows for fractional scrollLeft values,
     * browser rounding and trackpad momentum.
     */
    const EDGE_THRESHOLD = 3;

    const isInteractiveElement = (
      target: EventTarget | null
    ) => {
      return (
        target instanceof Element &&
        Boolean(
          target.closest(
            "a, button, input, textarea, select, option"
          )
        )
      );
    };

    /* =====================================================
       WHEEL → HORIZONTAL SCROLL
       ===================================================== */

    const handleWheel = (event: WheelEvent) => {
      const maximumScroll = Math.max(
        0,
        viewport.scrollWidth - viewport.clientWidth
      );

      /*
       * No horizontal overflow.
       * Let the normal page scroll happen.
       */
      if (maximumScroll <= EDGE_THRESHOLD) {
        return;
      }

      /*
       * Supports:
       * - normal mouse wheel
       * - vertical trackpad gesture
       * - horizontal trackpad gesture
       */
      const movement =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;

      if (movement === 0) {
        return;
      }

      const currentScroll = viewport.scrollLeft;

      const isAtStart =
        currentScroll <= EDGE_THRESHOLD;

      const isAtEnd =
        currentScroll >=
        maximumScroll - EDGE_THRESHOLD;

      const movingForward = movement > 0;
      const movingBackward = movement < 0;

      /*
       * -----------------------------------------------------
       * END OF PORTFOLIO
       *
       * User keeps scrolling down:
       * release horizontal lock and move the page vertically.
       * -----------------------------------------------------
       */

      if (isAtEnd && movingForward) {
        /*
         * Snap away any tiny floating point difference.
         */
        if (currentScroll !== maximumScroll) {
          viewport.scrollLeft = maximumScroll;
        }

        /*
         * IMPORTANT:
         * Do not preventDefault here.
         *
         * The browser is now free to scroll vertically
         * into the SayHello section.
         */
        return;
      }

      /*
       * -----------------------------------------------------
       * START OF PORTFOLIO
       *
       * User scrolls upward:
       * release back to the previous page section.
       * -----------------------------------------------------
       */

      if (isAtStart && movingBackward) {
        if (currentScroll !== 0) {
          viewport.scrollLeft = 0;
        }

        return;
      }

      /*
       * We still have horizontal content available,
       * so temporarily convert wheel movement into
       * horizontal scrolling.
       */

      event.preventDefault();

      const nextScroll = Math.min(
        maximumScroll,
        Math.max(
          0,
          currentScroll + movement
        )
      );

      viewport.scrollLeft = nextScroll;
    };

    /* =====================================================
       MOUSE DRAG
       ===================================================== */

    const handlePointerDown = (
      event: PointerEvent
    ) => {
      if (
        event.pointerType !== "mouse" ||
        event.button !== 0 ||
        isInteractiveElement(event.target)
      ) {
        return;
      }

      isDragging = true;

      pointerStartX = event.clientX;
      scrollStartX = viewport.scrollLeft;

      viewport.dataset.portfolioDragging =
        "true";

      viewport.setPointerCapture(
        event.pointerId
      );
    };

    const handlePointerMove = (
      event: PointerEvent
    ) => {
      if (!isDragging) {
        return;
      }

      const movement =
        event.clientX - pointerStartX;

      const maximumScroll = Math.max(
        0,
        viewport.scrollWidth -
          viewport.clientWidth
      );

      viewport.scrollLeft = Math.min(
        maximumScroll,
        Math.max(
          0,
          scrollStartX - movement
        )
      );
    };

    const stopDragging = (
      event: PointerEvent
    ) => {
      if (!isDragging) {
        return;
      }

      isDragging = false;

      delete viewport.dataset
        .portfolioDragging;

      if (
        viewport.hasPointerCapture(
          event.pointerId
        )
      ) {
        viewport.releasePointerCapture(
          event.pointerId
        );
      }
    };

    /* =====================================================
       KEYBOARD NAVIGATION
       ===================================================== */

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      const maximumScroll = Math.max(
        0,
        viewport.scrollWidth -
          viewport.clientWidth
      );

      const scrollAmount = Math.max(
        viewport.clientWidth * 0.65,
        320
      );

      switch (event.key) {
        case "ArrowRight": {
          /*
           * If we're already at the end,
           * don't trap keyboard navigation.
           */
          if (
            viewport.scrollLeft >=
            maximumScroll -
              EDGE_THRESHOLD
          ) {
            return;
          }

          event.preventDefault();

          viewport.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });

          break;
        }

        case "ArrowLeft": {
          if (
            viewport.scrollLeft <=
            EDGE_THRESHOLD
          ) {
            return;
          }

          event.preventDefault();

          viewport.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
          });

          break;
        }

        case "Home": {
          event.preventDefault();

          viewport.scrollTo({
            left: 0,
            behavior: "smooth",
          });

          break;
        }

        case "End": {
          event.preventDefault();

          viewport.scrollTo({
            left: maximumScroll,
            behavior: "smooth",
          });

          break;
        }
      }
    };

    /* =====================================================
       EVENTS
       ===================================================== */

    viewport.addEventListener(
      "wheel",
      handleWheel,
      {
        passive: false,
      }
    );

    viewport.addEventListener(
      "pointerdown",
      handlePointerDown
    );

    viewport.addEventListener(
      "pointermove",
      handlePointerMove
    );

    viewport.addEventListener(
      "pointerup",
      stopDragging
    );

    viewport.addEventListener(
      "pointercancel",
      stopDragging
    );

    viewport.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      viewport.removeEventListener(
        "wheel",
        handleWheel
      );

      viewport.removeEventListener(
        "pointerdown",
        handlePointerDown
      );

      viewport.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      viewport.removeEventListener(
        "pointerup",
        stopDragging
      );

      viewport.removeEventListener(
        "pointercancel",
        stopDragging
      );

      viewport.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  return viewportRef;
}