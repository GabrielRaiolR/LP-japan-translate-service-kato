import Container from "../ui/Container.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";
import Button from "../ui/Button.jsx";
import { documentPricing, contact } from "../../data/site.js";
import styles from "./Pricing.module.scss";

function Pricing() {
  return (
    <section
      id="valores"
      className={`${styles.section} animate-section`}
      aria-labelledby="pricing-title"
    >
      <Container>
        <SectionHeader
          id="pricing-title"
          title="Valores"
          subtitle="Tradução de documentos: valores por folha em ienes (円). Outros serviços sob consulta pelo formulário ou WhatsApp."
        />

        <div className={styles.banner}>
          <p className={styles.headline}>{documentPricing.headline}</p>

          <div className={styles.prices}>
            <p className={styles.priceLine}>
              <span className={styles.priceLabel}>
                {documentPricing.simpleLabel}:
              </span>{" "}
              <strong className={styles.priceAmount}>
                {documentPricing.simplePrice}
              </strong>{" "}
              {documentPricing.perPage}
            </p>
            <p className={styles.priceLine}>
              <span className={styles.priceLabel}>
                {documentPricing.extensiveLabel}:
              </span>{" "}
              <strong className={styles.priceAmount}>
                {documentPricing.extensivePrice}
              </strong>{" "}
              {documentPricing.perPage}
            </p>
          </div>

          <Button
            href={documentPricing.ctaHref}
            variant="light"
            size="lg"
            className={styles.cta}
          >
            {documentPricing.cta}
          </Button>

          <p className={styles.footnote}>
            {documentPricing.footnoteLead}
            <a
              href={contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Whatsapp
            </a>
            {documentPricing.footnoteTail}
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Pricing;
