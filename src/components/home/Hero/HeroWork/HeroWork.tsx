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
      {/* <ProjectCard
        src="/images/home/hero/project-identity.webp"
        alt="Brand identity presentation"
        className={styles.identityCard}
      /> */}

      <ProjectCard
        src="/videos/home/ba-project-card-IAPL.mp4"
        alt="Sunny Sankla founder brand film"
        mediaType="video"
        className={styles.identityCard}
        poster="/images/home/hero/sunny-sankla-poster.webp"
      />

      <ProjectCard
        src="/videos/home/ba-project-card-satym.mp4"
        alt="Sunny Sankla founder brand film"
        mediaType="video"
        className={styles.sanklaCard}
        poster="/images/home/hero/sunny-sankla-poster.webp"
      />

      {/* <ProjectCard
        src="/images/home/hero/satyam-brand.webp"
        alt="Satyam brand design"
        mediaType="image"
        className={styles.satyamCard}
      /> */}

      <ProjectCard
        src="/videos/home/ba-project-card-satym.mp4"
        alt="Satyam brand design"
        mediaType="video"
        className={styles.satyamCard}
        poster="/images/home/hero/sunny-sankla-poster.webp"
      />

      <ProjectCard
        src="/videos/home/ba-project-card-IAPL.mp4"
        alt="Industrial brand campaign"
        mediaType="video"
        className={styles.industryCard}
        poster="/images/home/hero/sunny-sankla-poster.webp"
      />

      

      <Annotation className={styles.visionAnnotation} arrowDirection="up" arrowSrc="/images/home/hero-work-an-1.png">
        Vision into
        <br />
        motion.
      </Annotation>

      <Annotation
        className={styles.ideasAnnotation}
        arrowSrc="/images/home/hero-work-an-2.png"
      >
        Ideas, brought
        <br />
        to life.
      </Annotation>

      <Annotation className={styles.brandAnnotation} arrowDirection="up" arrowSrc="/images/home/hero-work-an-3.png">
        Your brand
        <br />
        deserves more
        <br />
        than content.
      </Annotation>

      <Annotation className={styles.recallAnnotation} arrowSrc="/images/home/hero-work-an-4.png">
        Stories into
        <br />
        recall.
      </Annotation>
    </section>
  );
}
