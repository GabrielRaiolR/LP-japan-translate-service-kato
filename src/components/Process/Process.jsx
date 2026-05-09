import { useState } from "react";
import Container from "../ui/Container.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";
import { processSteps } from "../../data/site.js";
import styles from "./Process.module.scss";

function Process() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section
      id="como-funciona"
      className={`${styles.section} animate-section`}
      aria-labelledby="process-title"
    >
      <Container>
        <SectionHeader
          id="process-title"
          title="Como funciona"
          subtitle="Um processo simples para entender sua necessidade e oferecer o suporte adequado."
        />

        <div className={styles.list}>
          {processSteps.map((step, i) => {
            const isOpen = openIndex === i;
            const panelId = `process-panel-${i}`;
            const buttonId = `process-button-${i}`;
            return (
              <article
                key={step.number}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
              >
                <button
                  type="button"
                  className={styles.head}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  id={buttonId}
                >
                  <span className={styles.number}>{step.number}</span>
                  <span className={styles.title}>{step.title}</span>
                  <img
                    className={styles.toggleIcon}
                    src={
                      isOpen
                        ? "/assets/Icon-Process-Work-Close.svg"
                        : "/assets/Icon-Process-Work-Open.svg"
                    }
                    alt=""
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
                >
                  <div className={styles.panelInner}>
                    <p>{step.content}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Process;
