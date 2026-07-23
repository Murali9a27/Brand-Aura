import Image from "next/image";

import styles from "./Annotation.module.css";

interface AnnotationProps {
  children: React.ReactNode;
  className?: string;
  arrowDirection?: "down" | "up";
}

export default function Annotation({
  children,
  className = "",
  arrowDirection = "down",
}: AnnotationProps) {
  const classes =
    `${styles.annotation} ${className}`.trim();

  return (
    <div className={classes}>
      <p>{children}</p>

      <Image
        src="/icons/shared/arrow-loop.svg"
        alt=""
        width={90}
        height={90}
        className={`${styles.arrow} ${
          arrowDirection === "up" ? styles.arrowUp : ""
        }`}
      />
    </div>
  );
}