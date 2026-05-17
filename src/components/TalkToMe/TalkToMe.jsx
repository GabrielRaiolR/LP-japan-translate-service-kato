import { useEffect, useState } from "react";
import Container from "../ui/Container.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";
import Button from "../ui/Button.jsx";
import { ContactIconSvg } from "./ContactIcons.jsx";
import { contact, serviceTypes, assetsCacheQuery } from "../../data/site.js";
import { buildFormMailto } from "../../utils/mailto.js";
import styles from "./TalkToMe.module.scss";

const initialForm = {
  name: "",
  email: "",
  serviceType: "",
  message: "",
};

function TalkToMe() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);
  const q = assetsCacheQuery ?? "";

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");
    if (service) {
      setForm((prev) => ({ ...prev, serviceType: service }));
    }
  }, []);

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    window.location.href = buildFormMailto(form, contact.email);
    setSent(true);
  };

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
          subtitle="Escolha o serviço, envie sua mensagem e, se possível, consulte antes a lista em Serviços e valores."
        />

        <div className={styles.grid}>
          <article className={styles.card}>
            <header className={styles.cardHead}>
              <h3 className={styles.cardTitle}>Envie sua solicitação</h3>
              <p className={styles.cardSubtitle}>
                Preencha o formulário. Ao enviar, seu app de e-mail abrirá com a
                mensagem formatada para {contact.email}. Veja preços e avisos em{" "}
                <a href="#valores">Serviços e valores</a>.
              </p>
            </header>

            <form className={styles.form} onSubmit={onSubmit} noValidate>
              <label className={styles.field}>
                <span>Nome</span>
                <input
                  type="text"
                  required
                  name="name"
                  autoComplete="name"
                  placeholder="Seu nome completo"
                  value={form.name}
                  onChange={update("name")}
                />
              </label>

              <label className={styles.field}>
                <span>E-mail</span>
                <input
                  type="email"
                  required
                  name="email"
                  autoComplete="email"
                  placeholder="seuemail@exemplo.com"
                  value={form.email}
                  onChange={update("email")}
                />
              </label>

              <label className={styles.field}>
                <span>Tipo de serviço desejado</span>
                <select
                  required
                  name="serviceType"
                  value={form.serviceType}
                  onChange={update("serviceType")}
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  {serviceTypes.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>

              <label className={styles.field}>
                <span>Mensagem</span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Ex.: preciso renovar o visto; já tenho Zairyu Card e passaporte válidos."
                  value={form.message}
                  onChange={update("message")}
                />
              </label>

              <Button type="submit" variant="dark" size="lg">
                Enviar solicitação
              </Button>

              {sent && (
                <p className={styles.success} role="status">
                  Abrindo seu app de e-mail. Se não abrir, envie manualmente
                  para{" "}
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>.
                </p>
              )}
            </form>
          </article>

          <article className={styles.card}>
            <header className={styles.cardHead}>
              <h3 className={styles.cardTitle}>Atendimento direto</h3>
              <p className={styles.cardSubtitle}>
                Prefere escrever direto? Use o e-mail abaixo para enviar
                documentos ou dúvidas. Resposta em português.
              </p>
            </header>

            <ul className={styles.contactList}>
              <li>
                <span className={styles.iconWrap} aria-hidden="true">
                  <ContactIconSvg name="mail" />
                </span>
                <div>
                  <strong>E-mail</strong>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
              </li>
              <li>
                <span className={styles.iconWrap} aria-hidden="true">
                  <ContactIconSvg name="whatsapp" />
                </span>
                <div>
                  <strong>WhatsApp</strong>
                  <a
                    href={contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contact.whatsapp}
                  </a>
                </div>
              </li>
              <li>
                <span className={styles.iconWrap} aria-hidden="true">
                  <ContactIconSvg name="globe" />
                </span>
                <div>
                  <strong>Atendimento</strong>
                  <span>Online para estrangeiros no Japão</span>
                </div>
              </li>
            </ul>

            <div className={styles.directIllustration} aria-hidden="true">
              <img src={`/assets/Contact-Us-Illustration.svg${q}`} alt="" />
            </div>

            <Button
              href={`mailto:${contact.email}`}
              variant="primary"
              size="lg"
              className={styles.directCta}
            >
              Escrever por e-mail
            </Button>
          </article>
        </div>
      </Container>
    </section>
  );
}

export default TalkToMe;
