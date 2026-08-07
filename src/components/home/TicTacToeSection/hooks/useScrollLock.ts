"use client";

import { useEffect } from "react";

export default function useScrollLock(
  isLocked: boolean
) {
  useEffect(() => {
    if (!isLocked) {
      return;
    }

    const scrollY = window.scrollY;

    const body = document.body;
    const html = document.documentElement;

    const previousBodyStyles = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
    };

    const previousHtmlOverflow =
      html.style.overflow;

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";

    html.style.overflow = "hidden";

    return () => {
      body.style.position =
        previousBodyStyles.position;

      body.style.top =
        previousBodyStyles.top;

      body.style.width =
        previousBodyStyles.width;

      body.style.overflow =
        previousBodyStyles.overflow;

      html.style.overflow =
        previousHtmlOverflow;

      window.scrollTo(0, scrollY);
    };
  }, [isLocked]);
}