"use client";

import Link from "next/link";
import type {
  MouseEventHandler,
  ReactNode,
} from "react";

import styles from "./ContactButton.module.css";
interface ContactButtonProps {
  label?: string;
  href?: string;
  className?: string;
  ariaLabel?: string;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

export default function ContactButton({
  label = "Hello!",
  href = "/contact",
  className = "",
  ariaLabel = "Contact Brand Aura",
  icon,
  onClick,
  type = "button",
}: ContactButtonProps) {
  const buttonClasses = `
    ${styles.button}
    ${className}
  `.trim();

  const content = (
    <>
      <span className={styles.icon} aria-hidden="true">
        {icon ?? <MailIcon />}
      </span>

      <span className={styles.label}>{label}</span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        aria-label={ariaLabel ?? label}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      aria-label={ariaLabel ?? label}
      onClick={onClick}
    >
      {content}
    </button>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 48 36"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="1.5"
        y="1.5"
        width="45"
        height="33"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path
        d="M3.5 5L24 20L44.5 5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}