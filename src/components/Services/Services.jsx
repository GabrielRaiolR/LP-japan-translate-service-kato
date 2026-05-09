import Container from "../ui/Container.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";
import { services } from "../../data/site.js";
import { ServiceIconSvg } from "./ServiceIcons.jsx";
import { ArrowUpRightIcon } from "../ui/ArrowUpRightIcon.jsx";
import styles from "./Services.module.scss";

function Services() {
  return (
    <section
      id="servicos"
      className={`${styles.section} animate-section`}
      aria-labelledby="services-title"
    >
      <Container>
        <SectionHeader
          id="services-title"
          title="Serviços"
          subtitle="Soluções práticas para estrangeiros que vivem no Japão ou precisam lidar com documentos, serviços e comunicação em japonês."
        />

        <div className={styles.grid}>
          {services.map((card) => (
            <article
              key={card.id}
              className={`${styles.card} ${styles[`card--${card.variant}`]}`}
            >
              <div className={styles.cardHead}>
                <div className={styles.titleStack}>
                  {card.title.split(" ").reduce((acc, word, idx, arr) => {
                    // Quebra o título em 2 linhas (igual ao exemplo)
                    const half = Math.ceil(arr.length / 2);
                    if (idx === 0) acc.push([word]);
                    else if (idx < half) acc[0].push(word);
                    else if (idx === half) acc.push([word]);
                    else acc[1].push(word);
                    return acc;
                  }, []).map((line, k) => (
                    <span key={k} className={styles.titlePill}>
                      {line.join(" ")}
                    </span>
                  ))}
                </div>
                <span className={styles.cardIcon} aria-hidden="true">
                  <ServiceIconSvg name={card.icon} />
                </span>
              </div>

              <div className={styles.cardBody}>
                <p className={styles.cardText}>{card.text}</p>
                {card.extra && <p className={styles.cardExtra}>{card.extra}</p>}
              </div>

              <a
                className={styles.cardLink}
                href={card.href}
                aria-label={`${card.cta} — ${card.title}`}
              >
                <span className={styles.arrow} aria-hidden="true">
                  <ArrowUpRightIcon />
                </span>
                {card.cta}
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Services;
