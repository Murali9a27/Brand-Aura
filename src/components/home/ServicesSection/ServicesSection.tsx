import Image from "next/image";
import Link from "next/link";

import styles from "./ServicesSection.module.css";

interface Service {
  number: string;
  category: string;
  title: string;
  icon: string;
  href: string;
  side: "left" | "right";
  position: "top" | "bottom";
}

const services: Service[] = [
  {
    number: "01",
    category: "UI/UX & Web Development",
    title: "Looks sharp. Works smarter. Feels effortless.",
    icon: "/icons/services/web-development.svg",
    href: "/services/ui-ux-web-development",
    side: "left",
    position: "top",
  },
  {
    number: "03",
    category: "Social & Paid Media",
    title: "Scroll-stopping stories backed by performance.",
    icon: "/icons/services/social-media.svg",
    href: "/services/social-paid-media",
    side: "right",
    position: "top",
  },
  {
    number: "02",
    category: "Branding & Consulting",
    title: "Big ideas. Bold identities. Zero guesswork.",
    icon: "/icons/services/branding.svg",
    href: "/services/branding-consulting",
    side: "left",
    position: "bottom",
  },
  {
    number: "04",
    category: "Shoots & Influencer Marketing",
    title: "Lights. Camera. Content people actually care about.",
    icon: "/icons/services/shoots.svg",
    href: "/services/shoots-influencer-marketing",
    side: "right",
    position: "bottom",
  },
];

export default function ServicesSection() {
  return (
    <section
      className={styles.section}
      aria-labelledby="services-heading"
    >
      <div className={styles.backgroundPattern} aria-hidden="true" />

      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Our Services</p>

          <h2
            id="services-heading"
            className={styles.heading}
          >
            How We Build Brands That Lead Their Category.
          </h2>
        </header>

        <div className={styles.servicesBoard}>
          <div className={styles.horizontalLine} aria-hidden="true" />
          <div className={styles.verticalLine} aria-hidden="true" />

          <span
            className={`${styles.lineDot} ${styles.lineDotLeft}`}
            aria-hidden="true"
          />

          <span
            className={`${styles.lineDot} ${styles.lineDotRight}`}
            aria-hidden="true"
          />

          <span
            className={`${styles.lineDot} ${styles.lineDotTop}`}
            aria-hidden="true"
          />

          <span
            className={`${styles.lineDot} ${styles.lineDotBottom}`}
            aria-hidden="true"
          />

          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className={styles.serviceCard}
              data-side={service.side}
              data-position={service.position}
              aria-label={`View ${service.category} services`}
            >
              <span
                className={styles.serviceNumber}
                aria-hidden="true"
              >
                {service.number}
              </span>

              <span className={styles.serviceContent}>
                <span className={styles.iconWrapper}>
                  <Image
                    src={service.icon}
                    alt=""
                    width={54}
                    height={54}
                    className={styles.serviceIcon}
                    aria-hidden="true"
                  />
                </span>

                <span className={styles.serviceCategory}>
                  {service.category}
                </span>

                <span className={styles.serviceTitle}>
                  {service.title}
                </span>
              </span>
            </Link>
          ))}

          <div className={styles.centreHub} aria-hidden="true">
            <span className={styles.centreHubInner}>
              <Image
                src="/logos/brand-aura-logo.png"
                alt=""
                width={100}
                height={100}
                className={styles.centreLogo}
              />
            </span>
            <span
            className={`${styles.lineDot} ${styles.lineDotLeftLogo}`}
            aria-hidden="true"
          />

          <span
            className={`${styles.lineDot} ${styles.lineDotRightLogo}`}
            aria-hidden="true"
          />

          <span
            className={`${styles.lineDot} ${styles.lineDotTopLogo}`}
            aria-hidden="true"
          />

          <span
            className={`${styles.lineDot} ${styles.lineDotBottomLogo}`}
            aria-hidden="true"
          />
          </div>
        </div>
      </div>
    </section>
  );
}