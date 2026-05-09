import Container from "../ui/Container.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";
import Button from "../ui/Button.jsx";
import {
  pricing,
  contact,
  pricingFootnoteLead,
  pricingFootnoteTail,
} from "../../data/site.js";
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
          subtitle="Investimento por tipo de solicitação. Tradução de documentos com preço fixo por folha; assessoria combinada caso a caso."
        />

        <div className={styles.grid}>
          {pricing.map((plan) => (
            <article
              key={plan.title}
              className={`${styles.plan} ${styles[`plan--${plan.variant}`]} ${
                plan.featured ? styles.featured : ""
              }`}
            >
              {plan.featured && (
                <span className={styles.badge}>Mais procurado</span>
              )}

              <header className={styles.head}>
                <h3 className={styles.title}>{plan.title}</h3>
                <p className={styles.desc}>{plan.description}</p>
              </header>

              <div className={styles.price}>
                <strong>{plan.price}</strong>
                <span>{plan.priceSuffix}</span>
              </div>

              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <Button
                href={plan.href}
                external={plan.external}
                variant={
                  plan.variant === "primary" || plan.variant === "dark"
                    ? "light"
                    : "dark"
                }
                size="lg"
                className={styles.cta}
              >
                {plan.cta}
              </Button>
            </article>
          ))}
        </div>

        <p className={styles.note}>
          {pricingFootnoteLead}
          <a
            href={contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Whatsapp
          </a>
          {pricingFootnoteTail}
        </p>
      </Container>
    </section>
  );
}

export default Pricing;
