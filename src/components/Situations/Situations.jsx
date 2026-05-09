import Container from "../ui/Container.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";
import { situations } from "../../data/site.js";
import { ArrowUpRightIcon } from "../ui/ArrowUpRightIcon.jsx";
import styles from "./Situations.module.scss";

function Situations() {
  return (
    <section
      className={`${styles.section} animate-section`}
      aria-labelledby="situations-title"
    >
      <Container>
        <SectionHeader
          id="situations-title"
          title="O que posso ajudar?"
          subtitle="Atendimento pensado para as necessidades reais de estrangeiros que vivem ou pretendem viver no Japão."
        />

        <div className={styles.panel}>
          <div className={styles.grid}>
            {situations.map((s) => (
              <article key={s.id} className={styles.card}>
                <p className={styles.text}>{s.text}</p>
                <a className={styles.link} href="#contato">
                  <span>{s.cta}</span>
                  <ArrowUpRightIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Situations;
