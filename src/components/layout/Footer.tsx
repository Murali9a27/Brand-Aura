import Image from "next/image";
import Link from "next/link";

import Button from "@/components/common/Button";
import { navigation } from "@/data/navigation";

import styles from "./Footer.module.css";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: "/icons/social/instagram.svg",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: "/icons/social/facebook.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: "/icons/social/linkedin.svg",
  },
  {
    label: "X",
    href: "https://x.com/",
    icon: "/icons/social/x.svg",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: "/icons/social/youtube.svg",
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/",
    icon: "/icons/social/pinterest.svg",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.watermark} aria-hidden="true">
        B
      </div>

      <div className={styles.inner}>
        <div className={styles.brandArea}>
          {/* Button emerges from behind the wordmark */}
          <div className={styles.ctaWrapper}>
            <Button
              href="/contact"
              ariaLabel="Get in touch with Brand Aura"
            >
              Get in Touch
            </Button>
          </div>

          <p className={styles.wordmark} aria-label="Brand Aura">
            <span>Brand</span>
            <span>Aura</span>
          </p>
        </div>

        <nav
          className={styles.primaryNavigation}
          aria-label="Footer navigation"
        >
          <ul className={styles.navigationList}>
            {navigation.map((item) => (
              <li key={item.href} className={styles.navigationItem}>
                <Link
                  href={item.href}
                  className={styles.navigationLink}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav
          className={styles.legalNavigation}
          aria-label="Legal navigation"
        >
          <Link href="/terms-and-conditions">
            Terms &amp; Conditions
          </Link>

          <span aria-hidden="true">|</span>

          <Link href="/privacy-policy">
            Privacy Policy
          </Link>
        </nav>

        <div className={styles.divider} />

        <div className={styles.bottomBar}>
          <div
            className={styles.socialLinks}
            aria-label="Brand Aura social media"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={social.label}
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={64}
                  height={64}
                  className={styles.socialIcon}
                />
              </a>
            ))}
          </div>

          <p className={styles.copyright}>
            <span>Copyright © 2026 Brand Aura.</span>
            <span className={styles.copyrightSeparator}>|</span>
            <span>All Rights Reserved.</span>
            <span className={styles.copyrightSeparator}>|</span>
            <span>Proudly created in India.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}