import Image from "next/image";

import styles from "./FounderSection.module.css";

export default function FounderSection() {
  return (
    <section className={styles.section} aria-labelledby="founder-heading">
      <div className={styles.backgroundPattern} aria-hidden="true" />

      <div className={styles.container}>
        <article className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/home/neha-shroff-founder.png"
              alt="Neha Shroff, Founder and CEO"
              fill
              sizes="(max-width: 767px) 100vw, 34vw"
              className={styles.image}
              priority={false}
            />
          </div>

          <div className={styles.content}>
            <p className={styles.intro} id="founder-heading">
              Over two decades of experience. Multiple industries. One philosophy:
              <br />
              build brands that build businesses.
            </p>

            <p className={styles.body}>
              From startups finding their first identity to legacy businesses reinventing
              themselves, Neha has spent her career solving business challenges through strategy,
              branding, and marketing. She believes the strongest brands aren’t the loudest: they’re
              the clearest, most consistent, and impossible to ignore.
            </p>

            <blockquote className={styles.quote}>
              “I don&apos;t build brands to fit into markets. I build them to give markets something
              new to remember.”
            </blockquote>

            <div className={styles.author}>
              <h3 className={styles.name}>Neha Shroff</h3>
              <p className={styles.designation}>Founder &amp; CEO</p>
            </div>
          </div>

          <div className={styles.quoteMarks} aria-hidden="true">
            <Image
              src="/icons/outline-quote.svg"
              alt=""
              width={140}
              height={90}
              className={styles.quoteMarkImage}
            />
          </div>
        </article>
      </div>
    </section>
  );
}
