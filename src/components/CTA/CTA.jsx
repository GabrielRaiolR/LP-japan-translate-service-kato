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
              Precisa renovar visto ou montar documentação de elegibilidade?
            </h3>
            <p className={styles.text}>
              Explico o que preparar, organizo a papelada e deixo claro o que
              você precisa fazer presencialmente no órgão oficial.
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
