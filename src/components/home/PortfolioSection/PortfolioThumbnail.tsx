import Image from "next/image";

import styles from "./PortfolioThumbnail.module.css";

interface PortfolioThumbnailProps {
  src: string;
  alt: string;
  ratio?: "landscape" | "portrait";
  className?: string;
  preload?: boolean;
}

const thumbnailDimensions = {
  portrait: {
    width: 311,
    height: 475,
  },
  landscape: {
    width: 861,
    height: 488,
  },
} as const;

export default function PortfolioThumbnail({
  src,
  alt,
  ratio = "landscape",
  className = "",
  preload = false,
}: PortfolioThumbnailProps) {
  const dimensions = thumbnailDimensions[ratio];

  return (
    <div
      className={[
        styles.portfolioThumbnail,
        styles[ratio],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-portfolio-thumbnail
      data-thumbnail-ratio={ratio}
    >
      <Image
        src={src}
        alt={alt}
        width={dimensions.width}
        height={dimensions.height}
        preload={preload}
        sizes={
          ratio === "portrait"
            ? "(max-width: 480px) 48vw, (max-width: 767px) 52vw, 15rem"
            : "(max-width: 480px) 84vw, (max-width: 767px) 84vw, 36rem"
        }
        className={styles.portfolioThumbnailImage}
        draggable={false}
      />
    </div>
  );
}