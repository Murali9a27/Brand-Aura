"use client";

import Link from "next/link";

import HeroClosing from "./HeroClosing/HeroClosing";
import HeroIntro from "./HeroIntro/HeroIntro";
import HeroStatement from "./HeroStatement/HeroStatement";
import HeroWork from "./HeroWork/HeroWork";
import { useHorizontalStory } from "./useHorizontalStory";

import styles from "./Hero.module.css";

export default function Hero() {
  const { viewportRef, handleKeyDown, handlePointerDown, handlePointerMove, handlePointerUp } =
    useHorizontalStory();

  return (
    <section id="hero" className={styles.hero} aria-label="Brand Aura horizontal introduction">
      <div
        ref={viewportRef}
        className={styles.viewport}
        role="region"
        tabIndex={0}
        aria-label="Explore the Brand Aura story horizontally"
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onLostPointerCapture={handlePointerUp}
      >
        <div className={styles.storyCanvas} data-horizontal-story>
          <HeroIntro />
          <HeroWork />
          <HeroStatement />
          <HeroClosing />
        </div>
      </div>

      {/* <Link href="/contact" className={styles.helloButton} aria-label="Contact Brand Aura">
        <MailIcon />

        <span>Hello!</span>
      </Link> */}
    </section>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 30 24" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="28" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" />

      <path d="m2 3 13 10L28 3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
