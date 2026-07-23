import Image from "next/image";

import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  contain?: boolean;
  priority?: boolean;
}

export default function ProjectCard({
  src,
  alt,
  className = "",
  imageClassName = "",
  contain = false,
  priority = false,
}: ProjectCardProps) {
  const cardClasses =
    `${styles.card} ${className}`.trim();

  const imageClasses = `
    ${contain ? styles.contain : styles.cover}
    ${imageClassName}
  `.trim();

  return (
    <article className={cardClasses}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="700px"
        className={imageClasses}
      />
    </article>
  );
}