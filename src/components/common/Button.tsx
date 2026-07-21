import Link from "next/link";

import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  href,
  ariaLabel,
  type = "button",
  onClick,
  className = "",
}: ButtonProps) {
  const classes = `${styles.button} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        <span className={styles.label}>{children}</span>
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <span className={styles.label}>{children}</span>
    </button>
  );
}