import styles from "./DesignStatementSection.module.css";

export default function DesignStatementSection() {
  return (
    <section
      className={styles.section}
      aria-labelledby="design-statement-title"
    >
      <div
        className={styles.orbWrapper}
        aria-hidden="true"
        data-design-orb
      >
        <video
          className={styles.orb}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/home/particle-orb-poster.webp"
        >
          <source
            src="/videos/home/design-statement/particle-orb.webm"
            type="video/webm"
          />

          <source
            src="/videos/home/design-statement/particle-orb.mp4"
            type="video/mp4"
          />
        </video>

        <span className={styles.orbGlow} />
      </div>

      <h2
        id="design-statement-title"
        className={styles.heading}
        data-design-statement
      >
        <span className={styles.mutedLine}>
          Thoughtfully
        </span>

        <span className={styles.goldLine}>
          Designed.
        </span>

        <span className={styles.mutedLine}>
          Beautifully Built.
        </span>
      </h2>
    </section>
  );
}