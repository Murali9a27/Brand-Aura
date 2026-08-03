import Link from "next/link";

import styles from "./PortfolioDetailsCard.module.css";
import Button from "@/components/common/Button";

interface PortfolioDetailsCardProps {
  category: string;
  title: string;
  description: string;
  href: string;
  className?: string;
}

export default function PortfolioDetailsCard({
  category,
  title,
  description,
  href,
  className = "",
}: PortfolioDetailsCardProps) {
  return (
    <div className={` ${styles.portfolioDetailsCard} ${className} `} data-portfolio-details>
      <span className={styles.portfolioCategory}>{category}</span>

      <h3 className={styles.portfolioProjectTitle}>{title}</h3>

      <p className={styles.portfolioProjectDescription}>{description}</p>

      <Button href={href} ariaLabel="View case study for this project" className={styles.portfolioCaseStudyButton}  >
        Get in Touch
      </Button>
    </div>
  );
}
