import Container from "../ui/Container.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";
import Button from "../ui/Button.jsx";
import { ContactIconSvg } from "./ContactIcons.jsx";
import { contact, getWhatsappHref, assetsCacheQuery } from "../../data/site.js";
import styles from "./TalkToMe.module.scss";

const defaultMessage =
  "Olá! Gostaria de mais informações sobre os serviços da Kato Assessoria.";

function getContactWhatsappHref() {
  const service = new URLSearchParams(window.location.search).get("service");
  const message = service
    ? `Olá! Gostaria de informações sobre: ${service}`
    : defaultMessage;
  return getWhatsappHref(message);
}

function TalkToMe() {
  const q = assetsCacheQuery ?? "";
  const whatsappHref = getContactWhatsappHref();

  return (
    <section
      id="contato"
      className={`${styles.section} animate-section`}
      aria-labelledby="contact-title"
    >
      <Container>
        <SectionHeader
          id="contact-title"
          title="Fale comigo"
          subtitle="Chame no WhatsApp. Antes de enviar, se possível, consulte serviços e valores na seção acima."
        />

        <article className={styles.card}>
          <div className={styles.copy}>
            <header className={styles.cardHead}>
              <h3 className={styles.cardTitle}>Atendimento direto</h3>
              <p className={styles.cardSubtitle}>
                Toque no número ou no botão para abrir o WhatsApp. Resposta em
                português.
              </p>
            </header>

            <a
              href={whatsappHref}
              className={styles.phone}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.phoneIcon} aria-hidden="true">
                <ContactIconSvg name="whatsapp" />
              </span>
              {contact.whatsapp}
            </a>

            <p className={styles.note}>
              <span className={styles.noteIcon} aria-hidden="true">
                <ContactIconSvg name="globe" />
              </span>
              Atendimento online para brasileiros no Japão
            </p>

            <Button
              href={whatsappHref}
              variant="dark"
              size="lg"
              external
              className={styles.whatsappCta}
            >
              Chamar no WhatsApp
            </Button>
          </div>

          <div className={styles.visual} aria-hidden="true">
            <img src={`/assets/Contact-Us-Illustration.svg${q}`} alt="" />
          </div>
        </article>
      </Container>
    </section>
  );
}

export default TalkToMe;
