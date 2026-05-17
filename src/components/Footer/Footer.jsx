import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import { brand, contact, navItems, assetsCacheQuery } from "../../data/site.js";
import styles from "./Footer.module.scss";

function Footer() {
  const year = new Date().getFullYear();
  const q = assetsCacheQuery ?? "";

  return (
    <footer className={styles.footer} id="footer">
      <Container className={styles.footerInner}>
        <div className={styles.top}>
          <a href="#top" className={styles.brand} aria-label={brand.name}>
            <img
              className={styles.brandLogo}
              src={`${brand.footerLogo}${q}`}
              alt={brand.name}
              width={180}
              height={29}
              decoding="async"
            />
          </a>

          <nav aria-label="Navegação do rodapé" className={styles.navWrap}>
            <ul className={styles.nav}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.social}>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src={`/assets/Footer-Logo-Instagram.svg${q}`} alt="" />
            </a>
          </div>
        </div>

        <div className={styles.middle}>
          <div className={styles.contactCol}>
            <span className={styles.tag}>Fale comigo:</span>
            <p>
              E-mail:{" "}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <p>
              WhatsApp:{" "}
              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.whatsapp}
              </a>
            </p>
            <p>Atendimento: online para estrangeiros no Japão</p>
          </div>

          <div className={styles.ctaCol}>
            <div className={styles.ctaBox}>
              <h3>Pronto para começar?</h3>
              <p>
                Veja os serviços e valores ou envie sua solicitação. Retorno em
                português por e-mail ou WhatsApp.
              </p>
              <div className={styles.ctaActions}>
                <Button href="#valores" variant="primary" size="md">
                  Ver serviços e valores
                </Button>
                <Button
                  href={`mailto:${contact.email}`}
                  variant="primary"
                  size="md"
                >
                  Escrever por e-mail
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {year} {brand.name}. Todos os direitos reservados.
          </p>
          <a href="#contato">Política de privacidade</a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
