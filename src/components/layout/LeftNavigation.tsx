"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { homeSections } from "@/data/homeSections";

import styles from "./LeftNavigation.module.css";

export default function LeftNavigation() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = homeSections
      .map((section) => document.getElementById(section.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio,
          );

        const activeEntry = visibleEntries[0];

        if (activeEntry) {
          setActiveSection(activeEntry.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <aside className={styles.sidebar}>
      <nav
        className={styles.navigation}
        aria-label="Homepage section navigation"
      >
        {homeSections.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <Link
              key={section.id}
              href={`/#${section.id}`}
              className={`${styles.navigationItem} ${
                isActive ? styles.activeItem : ""
              }`}
              aria-label={`Go to ${section.label} section`}
              aria-current={isActive ? "location" : undefined}
              onClick={() => setActiveSection(section.id)}
            >
              <span className={styles.navigationText}>
                <span className={styles.number}>
                  {section.number}
                </span>

                {isActive && (
                  <span className={styles.label}>
                    {section.label}
                  </span>
                )}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}