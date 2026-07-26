"use client";

import {
  useEffect,
  useId,
  useRef,
  type MouseEvent,
} from "react";
import { createPortal } from "react-dom";

import styles from "./VideoModal.module.css";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  title: string;

  poster?: string;
  autoPlay?: boolean;
  controls?: boolean;
  muted?: boolean;
  loop?: boolean;
  className?: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  src,
  title,
  poster,
  autoPlay = true,
  controls = true,
  muted = false,
  loop = false,
  className = "",
}: VideoModalProps) {
  const titleId = useId();

  const videoRef = useRef<HTMLVideoElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previouslyFocusedElement =
      document.activeElement as HTMLElement | null;

    document.body.style.overflow = "hidden";

    window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);

      previouslyFocusedElement?.focus();
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (!isOpen) {
      video.pause();
      video.currentTime = 0;
      return;
    }

    if (!autoPlay) {
      return;
    }

    const playVideo = async () => {
      try {
        await video.play();
      } catch {
        // The video controls remain available when autoplay is blocked.
      }
    };

    void playVideo();
  }, [autoPlay, isOpen]);

  if (!isOpen || typeof document === "undefined") {
    return null;
  }

  const handleBackdropClick = (
    event: MouseEvent<HTMLDivElement>,
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const modalClasses =
    `${styles.modal} ${className}`.trim();

  return createPortal(
    <div
      className={styles.backdrop}
      role="presentation"
      onMouseDown={handleBackdropClick}
    >
      <div
        className={modalClasses}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <h2 id={titleId} className={styles.srOnly}>
          {title}
        </h2>

        <button
          ref={closeButtonRef}
          type="button"
          className={styles.closeButton}
          aria-label="Close video"
          onClick={onClose}
        >
          <CloseIcon />
        </button>

        <div className={styles.videoWrapper}>
          <video
            ref={videoRef}
            className={styles.video}
            src={src}
            poster={poster}
            autoPlay={autoPlay}
            controls={controls}
            muted={muted}
            loop={loop}
            playsInline
            preload="metadata"
          >
            Your browser does not support video playback.
          </video>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}