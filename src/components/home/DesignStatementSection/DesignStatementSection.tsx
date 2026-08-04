import styles from "./DesignStatementSection.module.css";

export default function DesignStatementSection() {
  return (
    <section className={styles.section} aria-labelledby="design-statement-title">
      <div className={styles.orbWrapper} aria-hidden="true" data-design-orb>
        <img
          src="/images/home/particle-orb.gif"
          alt=""
          className={styles.orb}
          loading="eager"
          draggable={false}
        />

        <span className={styles.orbGlow} />
      </div>

      <h2 id="design-statement-title" className={styles.heading} data-design-statement>
        <span className={styles.mutedLine}>Thoughtfully</span>

        <span className={styles.goldLine}>Designed.</span>

        <span className={styles.mutedLine}>Beautifully Built.</span>
      </h2>
    </section>
  );
}
