"use client";

import { useEffect, useRef } from "react";

import styles from "./HeroCursor.module.css";

export default function HeroCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(
      "[data-hero-cursor]",
    );

    const cursor = cursorRef.current;

    if (!hero || !cursor) {
      return;
    }

    let animationFrame = 0;
    let initialized = false;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const animateCursor = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;

      cursor.style.transform = `
        translate3d(${currentX}px, ${currentY}px, 0)
        translate(-50%, -50%)
      `;

      animationFrame =
        window.requestAnimationFrame(animateCursor);
    };

    const handlePointerEnter = (event: PointerEvent) => {
      if (event.pointerType === "touch") {
        return;
      }

      targetX = event.clientX;
      targetY = event.clientY;

      if (!initialized) {
        currentX = targetX;
        currentY = targetY;
        initialized = true;
      }

      cursor.dataset.visible = "true";
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") {
        return;
      }

      targetX = event.clientX;
      targetY = event.clientY;

      const target = event.target as HTMLElement;
      const isInteractive = Boolean(
        target.closest("a, button, [data-cursor-interactive]"),
      );

      cursor.dataset.visible = "true";
      cursor.dataset.interactive = String(isInteractive);
    };

    const handlePointerLeave = () => {
      cursor.dataset.visible = "false";
      cursor.dataset.active = "false";
      cursor.dataset.interactive = "false";
    };

    const handlePointerDown = () => {
      cursor.dataset.active = "true";
    };

    const handlePointerUp = () => {
      cursor.dataset.active = "false";
    };

    hero.addEventListener(
      "pointerenter",
      handlePointerEnter,
    );

    hero.addEventListener(
      "pointermove",
      handlePointerMove,
    );

    hero.addEventListener(
      "pointerleave",
      handlePointerLeave,
    );

    hero.addEventListener(
      "pointerdown",
      handlePointerDown,
    );

    window.addEventListener(
      "pointerup",
      handlePointerUp,
    );

    animationFrame =
      window.requestAnimationFrame(animateCursor);

    return () => {
      window.cancelAnimationFrame(animationFrame);

      hero.removeEventListener(
        "pointerenter",
        handlePointerEnter,
      );

      hero.removeEventListener(
        "pointermove",
        handlePointerMove,
      );

      hero.removeEventListener(
        "pointerleave",
        handlePointerLeave,
      );

      hero.removeEventListener(
        "pointerdown",
        handlePointerDown,
      );

      window.removeEventListener(
        "pointerup",
        handlePointerUp,
      );
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={styles.cursorGlow}
      data-visible="false"
      data-active="false"
      data-interactive="false"
      aria-hidden="true"
    >
      <span className={styles.glow} />
    </div>
  );
}