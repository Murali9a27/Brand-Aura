"use client";

import {
  useEffect,
  useRef,
  type RefObject,
} from "react";

export default function usePortfolioHorizontalScroll(): RefObject<HTMLDivElement | null> {
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    let isDragging = false;
    let pointerStartX = 0;
    let scrollStartX = 0;

    const isInteractiveElement = (target: EventTarget | null) => {
      return (
        target instanceof Element &&
        Boolean(
          target.closest(
            "a, button, input, textarea, select, option"
          )
        )
      );
    };

    const handleWheel = (event: WheelEvent) => {
      const movement =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;

      if (movement === 0) {
        return;
      }

      const maximumScroll =
        viewport.scrollWidth - viewport.clientWidth;

      const movingForward = movement > 0;
      const movingBackward = movement < 0;

      const canMoveForward =
        viewport.scrollLeft < maximumScroll;

      const canMoveBackward =
        viewport.scrollLeft > 0;

      if (
        (movingForward && canMoveForward) ||
        (movingBackward && canMoveBackward)
      ) {
        event.preventDefault();

        viewport.scrollLeft += movement;
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
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

      viewport.dataset.portfolioDragging = "true";

      viewport.setPointerCapture(event.pointerId);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!isDragging) {
        return;
      }

      const movement = event.clientX - pointerStartX;

      viewport.scrollLeft = scrollStartX - movement;
    };

    const stopDragging = (event: PointerEvent) => {
      if (!isDragging) {
        return;
      }

      isDragging = false;

      delete viewport.dataset.portfolioDragging;

      if (viewport.hasPointerCapture(event.pointerId)) {
        viewport.releasePointerCapture(event.pointerId);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const scrollAmount = Math.max(
        viewport.clientWidth * 0.65,
        320
      );

      switch (event.key) {
        case "ArrowRight":
          event.preventDefault();

          viewport.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
          break;

        case "ArrowLeft":
          event.preventDefault();

          viewport.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
          });
          break;

        case "Home":
          event.preventDefault();

          viewport.scrollTo({
            left: 0,
            behavior: "smooth",
          });
          break;

        case "End":
          event.preventDefault();

          viewport.scrollTo({
            left: viewport.scrollWidth,
            behavior: "smooth",
          });
          break;
      }
    };

    viewport.addEventListener("wheel", handleWheel, {
      passive: false,
    });

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