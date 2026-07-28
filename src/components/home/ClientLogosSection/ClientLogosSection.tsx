import Image from "next/image";

import styles from "./ClientLogosSection.module.css";

const clients = [
  {
    name: "British Learning",
    logo: "/images/home/clients/british-learning.svg",
  },
  {
    name: "Aqura Pride",
    logo: "/images/home/clients/aqura-pride.svg",
  },
  {
    name: "SKILS",
    logo: "/images/home/clients/skils.svg",
  },
  {
    name: "SunArth",
    logo: "/images/home/clients/sunarth.svg",
  },
  {
    name: "Learnovate",
    logo: "/images/home/clients/learnovate.svg",
  },
  {
    name: "Global Valley",
    logo: "/images/home/clients/global-valley.svg",
  },
  {
    name: "Sellability",
    logo: "/images/home/clients/sellability.svg",
  },
];

export default function ClientLogosSection() {
  return (
    <section
      className={styles.section}
      aria-label="Brands we have worked with"
    >
      

      <div className={styles.viewport}>
        <div className={styles.track}>
          {/* Original logo group */}
          <div className={styles.logoGroup}>
            {clients.map((client) => (
              <div
                key={client.name}
                className={styles.logoCard}
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  sizes="(max-width: 767px) 42vw, 15vw"
                  className={styles.logo}
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* Duplicate group creates the seamless loop */}
          <div
            className={styles.logoGroup}
            aria-hidden="true"
          >
            {clients.map((client) => (
              <div
                key={`duplicate-${client.name}`}
                className={styles.logoCard}
              >
                <Image
                  src={client.logo}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 42vw, 15vw"
                  className={styles.logo}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}