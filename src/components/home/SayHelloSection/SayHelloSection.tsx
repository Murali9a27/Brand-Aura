import Image from "next/image";
import Link from "next/link";

import styles from "./SayHelloSection.module.css";
import Button from "@/components/common/Button";

export default function SayHelloSection() {
  return (
    <section className={styles.section} aria-labelledby="say-hello-heading">
      <div className={styles.backgroundTexture} aria-hidden="true" />
      <div className={styles.backgroundGlow} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.heroRow}>
          <h2 id="say-hello-heading" className={styles.heading}>
            <span className={styles.word}>Say</span>

            <span className={styles.profileCard}>
              <Image
                src="/images/home/say-hello.png"
                alt=""
                fill
                sizes="(max-width: 767px) 28vw, 14vw"
                className={styles.profileImage}
              />
            </span>

            <span className={styles.word}>Hello</span>
          </h2>

          {/* <Link href="/contact" className={styles.ctaButton}>
            Get Started
          </Link> */}
          <Button href="/contact" className={styles.ctaButton} ariaLabel="Get in touch with Brand Aura">
            Get Started
          </Button>
        </div>

        <p className={styles.subtext}>Let&apos;s find your perfect match.</p>
      </div>
    </section>
  );
}
