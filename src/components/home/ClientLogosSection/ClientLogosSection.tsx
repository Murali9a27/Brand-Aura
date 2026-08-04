import Image from "next/image";

import styles from "./ClientLogosSection.module.css";

interface Client {
  name: string;
  defaultLogo: string;
  hoverLogo: string;
}

const clients: Client[] = [
  {
    name: "British Learning",
    defaultLogo: "/images/clients/british-learning-grey.png",
    hoverLogo: "/images/clients/british-learning.png",
  },
  {
    name: "Aqura Pride",
    defaultLogo: "/images/clients/aqura-pride-grey.png",
    hoverLogo: "/images/clients/aqura-pride.png",
  },
  {
    name: "SKILS",
    defaultLogo: "/images/clients/skils-grey.png",
    hoverLogo: "/images/clients/skils.png",
  },
  {
    name: "SunArth",
    defaultLogo: "/images/clients/sunarth-grey.png",
    hoverLogo: "/images/clients/sunarth.png",
  },
  {
    name: "Learnovate",
    defaultLogo: "/images/clients/learnovate-grey.png",
    hoverLogo: "/images/clients/learnovate.png",
  },
  {
    name: "Phonics Mantra",
    defaultLogo: "/images/clients/phonics-mantra-grey.png",
    hoverLogo: "/images/clients/phonics-mantra.png",
  },
  {
    name: "Isas",
    defaultLogo: "/images/clients/isas-grey.png",
    hoverLogo: "/images/clients/isas.png",
  },
  {
    name: "Etisalat And",
    defaultLogo: "/images/clients/etisalat-and-grey.png",
    hoverLogo: "/images/clients/etisalat-and.png",
  },
];

interface LogoGroupProps {
  duplicate?: boolean;
}

function LogoGroup({ duplicate = false }: LogoGroupProps) {
  return (
    <div
      className={styles.logoGroup}
      aria-hidden={duplicate || undefined}
    >
      {clients.map((client) => (
        <div
          key={`${duplicate ? "duplicate-" : ""}${client.name}`}
          className={styles.logoCard}
          tabIndex={duplicate ? -1 : 0}
          aria-label={duplicate ? undefined : client.name}
        >
          <span className={styles.logoLayer}>
            <Image
              src={client.defaultLogo}
              alt={duplicate ? "" : `${client.name} logo`}
              fill
              sizes="(max-width: 767px) 42vw, 15vw"
              className={`${styles.logoImage} ${styles.defaultLogo}`}
              draggable={false}
            />
          </span>

          <span
            className={styles.logoLayer}
            aria-hidden="true"
          >
            <Image
              src={client.hoverLogo}
              alt=""
              fill
              sizes="(max-width: 767px) 42vw, 15vw"
              className={`${styles.logoImage} ${styles.hoverLogo}`}
              draggable={false}
            />
          </span>
        </div>
      ))}
    </div>
  );
}

export default function ClientLogosSection() {
  return (
    <section
      className={styles.section}
      aria-label="Brands we have worked with"
    >
      <div className={styles.viewport}>
        <div className={styles.track}>
          <LogoGroup />

          {/* Duplicate group creates the seamless marquee loop */}
          <LogoGroup duplicate />
        </div>
      </div>
    </section>
  );
}