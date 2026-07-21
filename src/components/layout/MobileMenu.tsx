"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/data/navigation";

import styles from "./MobileMenu.module.css";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const socialLinks = [
  {
    label: "Instagram",
    shortLabel: "IG",
    href: "#",
  },
  {
    label: "Facebook",
    shortLabel: "f",
    href: "#",
  },
  {
    label: "LinkedIn",
    shortLabel: "in",
    href: "#",
  },
  {
    label: "X",
    shortLabel: "X",
    href: "#",
  },
  {
    label: "YouTube",
    shortLabel: "YT",
    href: "#",
  },
  {
    label: "Pinterest",
    shortLabel: "P",
    href: "#",
  },
];

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  const pathname = usePathname();
  const tabIndex = isOpen ? 0 : -1;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      id="site-navigation-menu"
      className={`${styles.overlay} ${
        isOpen ? styles.overlayOpen : ""
      }`}
      aria-hidden={!isOpen}
    >
      <div
        className={styles.menu}
        role="dialog"
        aria-modal="true"
        aria-label="Website navigation"
      >
        <button
          type="button"
          className={styles.closeButton}
          aria-label="Close navigation menu"
          tabIndex={tabIndex}
          onClick={onClose}
        >
          <span aria-hidden="true">×</span>
          <span>Close</span>
        </button>

        <div className={styles.content}>
          <nav
            className={styles.navigation}
            aria-label="Main navigation"
          >
            <ul className={styles.navigationList}>
              {navigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      tabIndex={tabIndex}
                      aria-current={isActive ? "page" : undefined}
                      className={`${styles.navigationLink} ${
                        isActive ? styles.activeLink : ""
                      }`}
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={styles.information}>
            <address className={styles.contactDetails}>
              <a
                href="tel:+917387970852"
                tabIndex={tabIndex}
                className={styles.contactLink}
              >
                <span>T:</span>
                <span>+91 73879 70852</span>
              </a>

              <a
                href="mailto:neha@brandaura.in"
                tabIndex={tabIndex}
                className={styles.contactLink}
              >
                <span>M:</span>
                <span>neha@brandaura.in</span>
              </a>

              <p className={styles.address}>
                Office No - 316 &amp; 317, Platinum 9,
                <br />
                Pashan-Sus Road, Pune 411021
              </p>
            </address>

            <div
              className={styles.socialLinks}
              aria-label="Social media links"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  tabIndex={tabIndex}
                  className={styles.socialLink}
                  aria-label={social.label}
                >
                  <span aria-hidden="true">{social.shortLabel}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.watermark} aria-hidden="true">
          <Image
            src="/logos/brand-aura-logo.svg"
            alt=""
            width={340}
            height={440}
            className={styles.watermarkImage}
          />
        </div>
      </div>
    </div>
  );
}