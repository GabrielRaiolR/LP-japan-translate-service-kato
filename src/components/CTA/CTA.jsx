import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import { contact } from "../../data/site.js";
import styles from "./CTA.module.scss";

function CTA() {
  return (
    <section className={`${styles.section} animate-section`}>
      <Container>
        <div className={styles.box}>
          <div className={styles.copy}>
            <h3 className={styles.title}>
              Precisa resolver algo em japonês, mas não sabe por onde começar?
            </h3>
            <p className={styles.text}>
              Explique sua situação e receba uma orientação inicial sobre o
              melhor caminho. Seja para tradução, agendamento, contato com
              empresas ou suporte em processos do dia a dia, o atendimento é
              feito de forma simples, direta e em português.
            </p>
            <Button
              href={contact.whatsappLink}
              variant="dark"
              size="lg"
              external
            >
              Falar pelo WhatsApp
            </Button>
          </div>
          <div className={styles.illustration} aria-hidden="true">
            <img src="/assets/CTO-Ilustration.svg" alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CTA;
