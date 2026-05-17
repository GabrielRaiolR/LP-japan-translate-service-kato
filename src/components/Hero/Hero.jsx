import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import { hero } from "../../data/site.js";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section id="top" className={`${styles.hero} animate-section`}>
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <h1 className={styles.title}>{hero.title}</h1>
          <p className={styles.subtitle}>{hero.subtitle}</p>
          {hero.trustLine && (
            <p className={styles.trustLine}>{hero.trustLine}</p>
          )}
          <div className={styles.actions}>
            <Button href={hero.primaryCta.href} variant="dark" size="lg">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="outline" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className={styles.visual}>
          <img
            src="/assets/Hero-Section-Ilustracao.svg"
            alt="Ilustração de apoio documental para brasileiros no Japão"
            loading="eager"
          />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
