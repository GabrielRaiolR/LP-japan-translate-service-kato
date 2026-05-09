import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section id="top" className={`${styles.hero} animate-section`}>
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <h1 className={styles.title}>
            Traduções e assessoria para estrangeiros no Japão
          </h1>
          <p className={styles.subtitle}>
            Suporte em português para quem precisa traduzir documentos, resolver
            situações do dia a dia, agendar serviços, se comunicar em japonês e
            lidar com processos importantes com mais segurança e tranquilidade.
          </p>
          <div className={styles.actions}>
            <Button href="#contato" variant="dark" size="lg">
              Solicitar orçamento
            </Button>
            <Button href="#servicos" variant="outline" size="lg">
              Ver serviços
            </Button>
          </div>
        </div>

        <div className={styles.visual}>
          <img
            src="/assets/Hero-Section-Ilustracao.svg"
            alt="Ilustração de assessoria e tradução para estrangeiros no Japão"
            loading="eager"
          />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
