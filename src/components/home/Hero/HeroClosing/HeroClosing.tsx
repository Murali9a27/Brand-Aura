import Link from "next/link";

import Button from "@/components/common/Button";

import styles from "./HeroClosing.module.css";

export default function HeroClosing() {
  return (
    <section
      className={styles.section}
      data-story-section="closing"
      aria-label="Brand Aura closing statement"
    >
      <div className={styles.glow} aria-hidden="true" />

      <blockquote className={styles.quote}>
        <span className={styles.quoteLine}>
          “Please notice us”
        </span>

        <span className={styles.quoteLine}>
          and more
        </span>

        <span
          className={`${styles.quoteLine} ${styles.goldLine}`}
        >
          “you can&apos;t ignore us.”
        </span>
      </blockquote>

      <div className={styles.cta}>
        <Button
          href="/contact"
          ariaLabel="Get in touch with Brand Aura"
        >
          Get in Touch
        </Button>
      </div>

      <Link
        href="/contact"
        className={styles.mobileCta}
      >
        Get in Touch
      </Link>
    </section>
  );
}