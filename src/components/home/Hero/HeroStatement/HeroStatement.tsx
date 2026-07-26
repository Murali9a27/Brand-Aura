import styles from "./HeroStatement.module.css";

export default function HeroStatement() {
  return (
    <section
      className={styles.section}
      data-story-section="statement"
      aria-label="Brand Aura agency statement"
    >
      {/* <div className={styles.glow} aria-hidden="true" /> */}

      <p className={styles.statement}>
        <span className={styles.goldText}>Brand Aura</span>{" "}
        <span>is an</span>

        <span className={styles.statementLine}>
          independent agency
        </span>

        <span className={styles.statementLine}>
          making brands less
        </span>
      </p>

      <span
        className={styles.directionArrow}
        aria-hidden="true"
      >
        ↗
      </span>
    </section>
  );
}