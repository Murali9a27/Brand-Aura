import Image from "next/image";

import styles from "./ClientLogosSection.module.css";

const clients = [
  {
    name: "British Learning",
    logo: "/images/clients/british-learning.png",
  },
  {
    name: "Aqura Pride",
    logo: "/images/clients/aqura-pride.png",
  },
  {
    name: "SKILS",
    logo: "/images/clients/skils.png",
  },
  {
    name: "SunArth",
    logo: "/images/clients/sunarth.png",
  },
  {
    name: "Learnovate",
    logo: "/images/clients/learnovate.svg",
  },
  {
    name: "Global Valley",
    logo: "/images/clients/global-valley.png",
  },
  {
    name: "Sellability",
    logo: "/images/clients/sellability.png",
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