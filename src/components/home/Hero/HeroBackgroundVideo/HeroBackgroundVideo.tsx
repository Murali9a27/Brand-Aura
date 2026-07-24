import styles from "./HeroBackgroundVideo.module.css";

export default function HeroBackgroundVideo() {
  return (
    <div
      className={styles.background}
      aria-hidden="true"
    >
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/home/hero/hero-background-poster.webp"
      >
        <source
          src="/videos/home/hero/hero-background.mp4"
          type="video/mp4"
        />
      </video>

      <div className={styles.darkOverlay} />
      <div className={styles.goldOverlay} />
      <div className={styles.vignette} />
    </div>
  );
}