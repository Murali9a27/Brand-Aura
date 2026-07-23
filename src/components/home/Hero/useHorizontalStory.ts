import {
  useEffect,
  useRef,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";

interface DragState {
  isDragging: boolean;
  startX: number;
  startScrollLeft: number;
}

export function useHorizontalStory() {
  const viewportRef = useRef<HTMLDivElement>(null);

  const dragState = useRef<DragState>({
    isDragging: false,
    startX: 0,
    startScrollLeft: 0,
  });

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const handleWheel = (event: WheelEvent) => {
      const maxScrollLeft =
        viewport.scrollWidth - viewport.clientWidth;

      if (maxScrollLeft <= 0) {
        return;
      }

      const delta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;

      const isAtStart = viewport.scrollLeft <= 1;
      const isAtEnd =
        viewport.scrollLeft >= maxScrollLeft - 1;

      /*
       * At either edge, release the wheel so the page
       * can continue scrolling vertically.
       */
      if (
        (delta < 0 && isAtStart) ||
        (delta > 0 && isAtEnd)
      ) {
        return;
      }

      event.preventDefault();

      viewport.scrollLeft += delta;
    };

    viewport.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      viewport.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const handlePointerDown = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    if (event.pointerType !== "mouse" || event.button !== 0) {
      return;
    }

    const target = event.target as HTMLElement;

    if (target.closest("a, button")) {
      return;
    }

    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    dragState.current = {
      isDragging: true,
      startX: event.clientX,
      startScrollLeft: viewport.scrollLeft,
    };

    viewport.dataset.dragging = "true";
    viewport.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    const viewport = viewportRef.current;

    if (!viewport || !dragState.current.isDragging) {
      return;
    }

    const distance =
      event.clientX - dragState.current.startX;

    viewport.scrollLeft =
      dragState.current.startScrollLeft - distance;
  };

  const handlePointerUp = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    dragState.current.isDragging = false;

    delete viewport.dataset.dragging;

    if (viewport.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }
  };

  const handleKeyDown = (
    event: ReactKeyboardEvent<HTMLDivElement>,
  ) => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const distance = Math.max(
      viewport.clientWidth * 0.7,
      500,
    );

    if (event.key === "ArrowRight") {
      event.preventDefault();

      viewport.scrollBy({
        left: distance,
        behavior: "smooth",
      });
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();

      viewport.scrollBy({
        left: -distance,
        behavior: "smooth",
      });
    }

    if (event.key === "Home") {
      event.preventDefault();

      viewport.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }

    if (event.key === "End") {
      event.preventDefault();

      viewport.scrollTo({
        left: viewport.scrollWidth,
        behavior: "smooth",
      });
    }
  };

  return {
    viewportRef,
    handleKeyDown,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  };
}