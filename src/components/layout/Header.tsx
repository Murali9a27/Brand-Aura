"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/common/Button";

import MobileMenu from "./MobileMenu";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);
  return (
    <>
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <button
            type="button"
            className={styles.menuButton}
            aria-label="Open navigation menu"
            aria-controls="site-navigation-menu"
            aria-expanded={isMenuOpen}
            onClick={openMenu}
          >
            <span className={styles.menuLines}>
              <span className={styles.menuLine} />
              <span className={styles.menuLine} />
            </span>
          </button>

          <Link href="/" className={styles.logoLink} aria-label="Brand Aura home">
            <Image
              src="/logos/brand-aura-logo.png"
              alt="Brand Aura"
              width={36}
              height={36}
              priority
              className={styles.logo}
            />
          </Link>
        </div>

        <Button href="/contact" ariaLabel="Get in touch with Brand Aura">
          Get in Touch
        </Button>
      </div>
    </header>
    <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
