import Annotation from "../shared/Annotation";
import ProjectCard from "../shared/ProjectCard";

import styles from "./HeroIdentity.module.css";

export default function HeroIdentity() {
  return (
    <div
      className={styles.section}
      data-story-section="identity"
    >
      <ProjectCard
        src="/images/home/hero/project-identity.webp"
        alt="Brand identity project"
        className={styles.identityCard}
      />

      <ProjectCard
        src="/images/home/hero/sunny-sankla-logo.svg"
        alt="Sunny Sankla Group identity"
        className={styles.logoCard}
        contain
      />

      <Annotation className={styles.ideas}>
        Ideas, brought
        <br />
        to life.
      </Annotation>

      <Annotation className={styles.vision}>
        Vision into
        <br />
        motion.
      </Annotation>
    </div>
  );
}