import { useState } from "react";
import Container from "../ui/Container.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";
import Button from "../ui/Button.jsx";
import {
  serviceCatalog,
  servicesDisclaimer,
  contact,
  pricingFootnoteLead,
  pricingFootnoteTail,
  getServiceContactHref,
} from "../../data/site.js";
import styles from "./Pricing.module.scss";

function CatalogItem({ item, isOpen, onToggle, panelId, buttonId }) {
  const hasDocuments = item.documents?.length > 0;

  return (
    <article
      className={`${styles.catalogItem} ${isOpen ? styles.catalogItemOpen : ""}`}
    >
      <button
        type="button"
        className={styles.catalogHead}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        id={buttonId}
      >
        <span className={styles.catalogTitle}>{item.title}</span>
        <span className={styles.catalogChevron} aria-hidden="true">
          {isOpen ? "▲" : "▼"}
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`${styles.catalogPanel} ${isOpen ? styles.catalogPanelOpen : ""}`}
      >
        <div className={styles.catalogInner}>
          <p className={styles.catalogDesc}>{item.description}</p>

          <p className={styles.catalogPrice}>
            {item.priceNote && (
              <span className={styles.priceNote}>{item.priceNote} </span>
            )}
            <strong>{item.price}</strong>
          </p>

          {item.disclaimers?.length > 0 && (
            <ul className={styles.disclaimers}>
              {item.disclaimers.map((d) => (
                <li key={d}>⚠️ {d}</li>
              ))}
            </ul>
          )}

          {hasDocuments && (
            <div className={styles.documents}>
              <h4 className={styles.documentsTitle}>Documentos necessários</h4>
              <ul>
                {item.documents.map((doc) => (
                  <li key={doc}>{doc}</li>
                ))}
              </ul>
            </div>
          )}

          {!hasDocuments && (
            <p className={styles.documentsPending}>
              A lista de documentos para este serviço será publicada em breve.
              Entre em contato para orientação inicial.
            </p>
          )}

          <Button
            href={getServiceContactHref(item.title)}
            variant="dark"
            size="md"
            external
            className={styles.catalogCta}
          >
            Solicitar atendimento
          </Button>
        </div>
      </div>
    </article>
  );
}

function Pricing() {
  const [openKey, setOpenKey] = useState(null);

  const toggle = (key) => setOpenKey((prev) => (prev === key ? null : key));

  return (
    <section
      id="valores"
      className={`${styles.section} animate-section`}
      aria-labelledby="pricing-title"
    >
      <Container>
        <SectionHeader
          id="pricing-title"
          title="Serviços e valores"
          subtitle="Apoio documental com preços transparentes. Valores da tabela vigente; selos e taxas oficiais são pagos à parte."
        />

        <aside className={styles.disclaimer} role="note">
          <p>{servicesDisclaimer}</p>
        </aside>

        <div className={styles.catalog}>
          {serviceCatalog.map((category) => (
            <div key={category.id} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.categoryItems}>
                {category.items.map((item) => {
                  const key = item.id;
                  const isOpen = openKey === key;
                  const panelId = `catalog-panel-${key}`;
                  const buttonId = `catalog-button-${key}`;
                  return (
                    <CatalogItem
                      key={key}
                      item={item}
                      isOpen={isOpen}
                      onToggle={() => toggle(key)}
                      panelId={panelId}
                      buttonId={buttonId}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          {pricingFootnoteLead}
          <a
            href={contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          {pricingFootnoteTail}
        </p>
      </Container>
    </section>
  );
}

export default Pricing;
