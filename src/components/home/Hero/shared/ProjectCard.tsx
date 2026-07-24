import Image from "next/image";

import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  src: string;
  alt: string;
  mediaType?: "image" | "video";
  className?: string;
  mediaClassName?: string;
  contain?: boolean;
  priority?: boolean;
  poster?: string;
  autoPlay?: boolean;
  controls?: boolean;
}

export default function ProjectCard({
  src,
  alt,
  mediaType = "image",
  className = "",
  mediaClassName = "",
  contain = false,
  priority = false,
  poster,
  autoPlay = true,
  controls = false,
}: ProjectCardProps) {
  const cardClasses = `${styles.card} ${className}`.trim();

  const mediaClasses = `
    ${styles.media}
    ${contain ? styles.contain : styles.cover}
    ${mediaClassName}
  `.trim();

  return (
    <article className={cardClasses}>
      {mediaType === "video" ? (
        <video
          className={mediaClasses}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          muted
          loop
          playsInline
          controls={controls}
          preload="metadata"
          aria-label={alt}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="700px"
          className={mediaClasses}
        />
      )}
    </article>
  );
}