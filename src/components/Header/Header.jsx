import { useEffect, useState } from "react";
import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import { brand, navItems, assetsCacheQuery } from "../../data/site.js";
import styles from "./Header.module.scss";

function Header() {
  const [open, setOpen] = useState(false);

  // Bloqueia scroll quando menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);
  const q = assetsCacheQuery ?? "";

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <a href="#top" className={styles.brand} onClick={close} aria-label={brand.name}>
          <img
            src={`/assets/Logo-header-positivus.svg${q}`}
            alt={brand.name}
            className={styles.logo}
          />
        </a>

        <nav className={styles.nav} aria-label="Navegação principal">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button href="#valores" variant="outline" size="md">
            Ver serviços e valores
          </Button>
        </div>

        <button
          type="button"
          className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={`${styles.mobile} ${open ? styles.mobileOpen : ""}`}
      >
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={close}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <Button
          href="#contato"
          variant="outline"
          size="lg"
          className={styles.mobileCta}
          onClick={close}
        >
          Ver serviços e valores
        </Button>
      </div>
    </header>
  );
}

export default Header;
