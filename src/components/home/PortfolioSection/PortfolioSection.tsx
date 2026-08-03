"use client";

import PortfolioDetailsCard from "./PortfolioDetailsCard";
import PortfolioThumbnail from "./PortfolioThumbnail";
import styles from "./PortfolioSection.module.css";
import usePortfolioHorizontalScroll from "./usePortfolioHorizontalScroll";

type PortfolioRatio = "landscape" | "portrait";
type PortfolioLayout = "upper" | "lower";

type PortfolioProject = {
  name: string;
  thumbnail: string;
  ratio: PortfolioRatio;
  layout: PortfolioLayout;
  details?: {
    category: string;
    description: string;
    href: string;
  };
};

const openingProject: PortfolioProject = {
  name: "Brand Aura Campaign",
  thumbnail: "/images/home/portfolio/project-1.png",
  ratio: "portrait",
  layout: "upper",
};

const openingProject2: PortfolioProject = {
  name: "Brand Aura Campaign",
  thumbnail: "/images/home/portfolio/project-3.png",
  ratio: "portrait",
  layout: "upper",
};

const portfolioProjects: PortfolioProject[] = [
  {
    name: "DeSo",
    thumbnail: "/images/home/portfolio/project-1.png",
    ratio: "portrait",
    layout: "lower",
    details: {
      category: "Website Design",
      description:
        "A bold digital experience created for a blockchain-led social platform with immersive storytelling and a clear conversion journey.",
      href: "/portfolio/deso",
    },
  },
  {
    name: "Till It Clicks",
    thumbnail: "/images/home/portfolio/project-2.png",
    ratio: "landscape",
    layout: "upper",
    details: {
      category: "Real Estate",
      description:
        "A premium real-estate website shaped around elegant storytelling, project discovery and seamless lead generation.",
      href: "/portfolio/aqura-pride",
    },
  },
  {
    name: "Aqura Pride",
    thumbnail: "/images/home/portfolio/project-3.png",
    ratio: "portrait",
    layout: "upper",
    details: {
      category: "Real Estate",
      description:
        "A premium real-estate website shaped around elegant storytelling, project discovery and seamless lead generation.",
      href: "/portfolio/aqura-pride",
    },
  },
  {
    name: "Learnovate",
    thumbnail: "/images/home/portfolio/learnovate-mobile.webp",
    ratio: "portrait",
    layout: "lower",
  },
];

export default function PortfolioSection() {
  const viewportRef = usePortfolioHorizontalScroll();

  return (
    <section
      className={styles.portfolioSection}
      aria-labelledby="portfolio-heading"
      data-portfolio-root
    >
      {/* Fixed background */}
      <div className={styles.portfolioBackground} aria-hidden="true">
        {/* Animated GIF intentionally uses a native img element. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={styles.portfolioBackgroundGif}
          src="/images/home/portfolio-background.gif"
          alt=""
          draggable={false}
        />

        <span className={styles.portfolioBackgroundOverlay} />
      </div>

      {/* Horizontal scrolling area */}
      <div
        ref={viewportRef}
        className={styles.portfolioViewport}
        data-portfolio-viewport
        tabIndex={0}
        aria-label="Selected Brand Aura portfolio projects"
      >
        <div className={styles.portfolioRail}>
          {/* 1. Opening hardcoded project */}
          <article
            className={styles.portfolioProject}
            data-portfolio-item
            data-portfolio-layout={openingProject.layout}
            data-portfolio-mode="thumbnail-only"
            data-thumbnail-ratio={openingProject.ratio}
            data-portfolio-index="1"
            aria-label={`${openingProject.name} portfolio project`}
          >
            <PortfolioThumbnail
              src={openingProject.thumbnail}
              alt={`${openingProject.name} project preview`}
              ratio={openingProject.ratio}
              preload
              className={styles.portfolioThumbnailPosition}
            />
          </article>
          <article
            className={styles.portfolioProject}
            data-portfolio-item
            data-portfolio-layout={openingProject2.layout}
            data-portfolio-mode="thumbnail-only"
            data-thumbnail-ratio={openingProject2.ratio}
            data-portfolio-index="1"
            aria-label={`${openingProject2.name} portfolio project`}
            style={{
              position: "absolute",
              top: "-50%",
              left: "15%",
            }}
          >
            <PortfolioThumbnail
              src={openingProject2.thumbnail}
              alt={`${openingProject2.name} project preview`}
              ratio={openingProject2.ratio}
              preload
              className={styles.portfolioThumbnailPosition}
            />
          </article>
          <article
            className={styles.portfolioProject}
            data-portfolio-item
            data-portfolio-layout={openingProject.layout}
            data-portfolio-mode="thumbnail-only"
            data-thumbnail-ratio={openingProject.ratio}
            data-portfolio-index="1"
            aria-label={`${openingProject.name} portfolio project`}
            style={{
              position: "absolute",
              bottom: "-50%",
              left: "15%",
            }}
          >
            <PortfolioThumbnail
              src={openingProject.thumbnail}
              alt={`${openingProject.name} project preview`}
              ratio={openingProject.ratio}
              preload
              className={styles.portfolioThumbnailPosition}
            />
          </article>

          {/* 2. Portfolio introduction */}
          <div className={styles.portfolioIntroduction} data-portfolio-introduction>
            <span className={styles.portfolioOrb} aria-hidden="true" />

            <div className={styles.portfolioIntroductionContent}>
              <span className={styles.portfolioEyebrow}>What We Do</span>

              <h2 id="portfolio-heading" className={styles.portfolioHeading}>
                Our Portfolio
              </h2>
            </div>
          </div>

          {/* 3–6. Portfolio projects */}
          {portfolioProjects.map((project, index) => {
            const hasDetails = project.details !== undefined;

            return (
              <article
                key={project.name}
                className={styles.portfolioProject}
                data-portfolio-item
                data-portfolio-layout={project.layout}
                data-portfolio-mode={hasDetails ? "thumbnail-with-details" : "thumbnail-only"}
                data-thumbnail-ratio={project.ratio}
                data-portfolio-index={index + 2}
                aria-label={`${project.name} portfolio project`}
              >
                <PortfolioThumbnail
                  src={project.thumbnail}
                  alt={`${project.name} project preview`}
                  ratio={project.ratio}
                  className={styles.portfolioThumbnailPosition}
                />

                {project.details && (
                  <>
                    <span className={styles.portfolioConnector} aria-hidden="true">
                      <span className={styles.portfolioConnectorDot} />
                    </span>

                    <PortfolioDetailsCard
                      category={project.details.category}
                      title={project.name}
                      description={project.details.description}
                      href={project.details.href}
                      className={styles.portfolioDetailsPosition}
                    />
                  </>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
