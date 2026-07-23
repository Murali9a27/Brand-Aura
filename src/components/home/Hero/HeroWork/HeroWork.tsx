import Annotation from "../shared/Annotation";
import ProjectCard from "../shared/ProjectCard";

import styles from "./HeroWork.module.css";

export default function HeroWork() {
  return (
    <section
      className={styles.section}
      data-story-section="work"
      aria-label="Selected Brand Aura work"
    >
      <ProjectCard
        src="/images/home/hero/project-identity.webp"
        alt="Brand identity presentation"
        className={styles.identityCard}
      />

      <ProjectCard
        src="/images/home/hero/sunny-sankla-logo.svg"
        alt="Sunny Sankla Group identity"
        className={styles.logoCard}
        contain
      />

      <ProjectCard
        src="/images/home/hero/satyam-brand.webp"
        alt="Satyam brand design"
        className={styles.satyamCard}
      />

      <ProjectCard
        src="/images/home/hero/industrial-project.webp"
        alt="Industrial brand campaign"
        className={styles.industryCard}
        imageClassName={styles.grayscaleImage}
      />

      <Annotation className={styles.ideasAnnotation}>
        Ideas, brought
        <br />
        to life.
      </Annotation>

      <Annotation className={styles.visionAnnotation}>
        Vision into
        <br />
        motion.
      </Annotation>

      <Annotation className={styles.brandAnnotation}>
        Your brand
        <br />
        deserves more
        <br />
        than content.
      </Annotation>

      <Annotation className={styles.recallAnnotation}>
        Stories into
        <br />
        recall.
      </Annotation>
    </section>
  );
}