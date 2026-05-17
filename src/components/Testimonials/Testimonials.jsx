import { useState } from "react";
import Container from "../ui/Container.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";
import { testimonials, assetsCacheQuery } from "../../data/site.js";
import styles from "./Testimonials.module.scss";

function Testimonials() {
  const [index, setIndex] = useState(0);
  const q = assetsCacheQuery ?? "";

  const total = testimonials.length;
  const goPrev = () => setIndex((p) => (p - 1 + total) % total);
  const goNext = () => setIndex((p) => (p + 1) % total);

  return (
    <section
      id="depoimentos"
      className={`${styles.section} animate-section`}
      aria-labelledby="testimonials-title"
    >
      <Container>
        <SectionHeader
          id="testimonials-title"
          title="Depoimentos"
          subtitle="A experiência de quem já recebeu apoio com vistos, elegibilidade e tradução de documentos no Japão."
        />

        <div className={styles.stage}>
          <div className={styles.viewport}>
            <div
              className={styles.track}
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <article
                  key={i}
                  className={styles.slide}
                  aria-hidden={i !== index}
                >
                  <div className={styles.bubble}>
                    <img
                      src={`/assets/Testimonial-Bubble.svg${q}`}
                      alt=""
                      aria-hidden="true"
                      className={styles.bubbleSvg}
                    />
                    <p className={styles.quote}>“{t.quote}”</p>
                  </div>
                  <footer className={styles.author}>
                    <p className={styles.authorName}>{t.author}</p>
                    <p className={styles.authorRole}>{t.role}</p>
                  </footer>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.controls}>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Depoimento anterior"
              className={styles.navBtn}
            >
              <img
                src={`/assets/Testimonial-arrow.svg${q}`}
                alt=""
                style={{ transform: "rotate(180deg)" }}
              />
            </button>

            <div className={styles.dots} role="tablist">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  className={styles.dot}
                  onClick={() => setIndex(i)}
                >
                  <img
                    src={
                      i === index
                        ? `/assets/Testimonial-Star-dot-open.svg${q}`
                        : `/assets/Testimonial-Star-dot-next.svg${q}`
                    }
                    alt=""
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Próximo depoimento"
              className={styles.navBtn}
            >
              <img src={`/assets/Testimonial-arrow.svg${q}`} alt="" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
