import { useEffect, useState } from "react";
import Container from "../ui/Container.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";
import Icon from "../ui/Icon.jsx";
import { contact, assetsCacheQuery } from "../../data/site.js";
import styles from "./PixSection.module.scss";

function PixSection() {
  const [copied, setCopied] = useState(false);
  const q = assetsCacheQuery ?? "";

  useEffect(() => {
    if (!copied) return undefined;
    const t = setTimeout(() => setCopied(false), 2200);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(contact.pixCode);
      } else {
        const ta = document.createElement("textarea");
        ta.value = contact.pixCode;
        ta.setAttribute("readonly", "");
        ta.style.position = "absolute";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="pix"
      className={`${styles.section} animate-section`}
      aria-labelledby="pix-title"
    >
      <Container>
        <SectionHeader
          id="pix-title"
          title="Pagamento via Pix"
          subtitle="Para facilitar o pagamento, disponibilizamos QR Code Pix e código copia e cola."
        />

        <div className={styles.panel}>
          <div className={styles.qrColumn}>
            <div className={styles.qrFrame}>
              <img
                src={`${contact.pixQr}${q}`}
                alt="QR Code para pagamento via Pix"
                onError={(e) => {
                  e.currentTarget.style.opacity = 0.6;
                }}
              />
            </div>
            <p className={styles.qrCaption}>Escaneie o QR Code com seu app</p>
          </div>

          <div className={styles.divider} aria-hidden="true">
            <span>ou</span>
          </div>

          <div className={styles.copyColumn}>
            <h3 className={styles.copyTitle}>Pix copia e cola</h3>
            <p className={styles.copyDesc}>
              Clique no botão abaixo para copiar o código Pix completo para a
              área de transferência e colar no app do seu banco. O código não
              aparece nesta página.
            </p>

            <button
              type="button"
              onClick={copy}
              className={`${styles.copyBtn} ${copied ? styles.copyBtnDone : ""}`}
              aria-live="polite"
            >
              {copied ? (
                <>
                  <Icon name="check" size={18} strokeWidth={3} />
                  Código copiado!
                </>
              ) : (
                <>
                  <Icon name="copy" size={18} />
                  Copiar código Pix
                </>
              )}
            </button>

            <p className={styles.help}>
              Após o pagamento, envie o comprovante pelo WhatsApp para
              confirmação.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default PixSection;
