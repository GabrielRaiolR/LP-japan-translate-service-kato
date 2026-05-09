import styles from "./SectionHeader.module.scss";

function SectionHeader({ title, subtitle, align = "left", id }) {
  return (
    <header className={`${styles.header} ${styles[`align--${align}`]}`}>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  );
}

export default SectionHeader;
