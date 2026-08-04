"use client";

import Image from "next/image";
import { useState } from "react";
import ContactButton from "@/components/common/ContactButton";

import VideoModal from "@/components/common/VideoModal";

import styles from "./HeroIntro.module.css";

const tools = [
  {
    name: "Figma",
    icon: "/icons/tools/figma.svg",
  },
  {
    name: "Sketch",
    icon: "/icons/tools/sketch.svg",
  },
  {
    name: "Illustrator",
    icon: "/icons/tools/illustrator.svg",
  },
  {
    name: "Photoshop",
    icon: "/icons/tools/photoshop.svg",
  },
  {
    name: "Premiere-Pro",
    icon: "/icons/tools/premiere-pro.svg",
  },
  {
    name: "Corel-Draw",
    icon: "/icons/tools/coreldraw.svg",
  },
];

export default function HeroIntro() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section
        className={styles.section}
        data-story-section="intro"
        aria-label="Brand Aura introduction"
      >
        <div className={styles.trustBadge}>
          <span className={styles.shield} aria-hidden="true">
            <ShieldIcon />
          </span>

          <span className={styles.trustText}>Trusted by startups to craft XXXX+ designs with</span>

          <div className={styles.tools} aria-label="Creative tools">
            {tools.map((tool) => (
              <span key={tool.name} className={styles.tool} title={tool.name}>
                <Image src={tool.icon} alt="" width={18} height={18} />
              </span>
            ))}
          </div>
        </div>

        <div className={`${styles.content} relative`}>
          <h1 className={styles.heading}>
            <span>
              <strong>Brands </strong> don&apos;t
            </span>

            <span>need noise.</span>
            <span>They need</span>

            <span>
              an <strong>Aura.</strong>
            </span>
          </h1>

          <button
            type="button"
            className={styles.lifeCard}
            aria-label="Play Life at Brand Aura video"
            aria-haspopup="dialog"
            onClick={() => setIsVideoOpen(true)}
          >
            <Image
              src="/images/home/life-at-brand-aura.png"
              alt=""
              fill
              priority
              sizes="240px"
              className={styles.lifeImage}
            />

            <span className={styles.overlay} />

            <span className={styles.playButton}>
              <PlayIcon />
            </span>

            <span className={styles.lifeLabel}>
              Life at
              <br />
              Brand Aura
            </span>
          </button>
          <div className={styles.contactButtonPosition}>
            <ContactButton />
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        src="/videos/home/ba-hero-bg-video.mp4"
        poster="/images/home/life-at-brand-aura.png"
        title="Life at Brand Aura"
      />
    </>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3 19 5.8v5.6c0 4.4-2.7 8.1-7 10.1-4.3-2-7-5.7-7-10.1V5.8L12 3Z"
        fill="currentColor"
      />

      <path
        d="m9.1 11.8 1.9 1.9 4-4.5"
        stroke="#f4b41a"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8.4 5.5v13l10-6.5-10-6.5Z" />
    </svg>
  );
}
