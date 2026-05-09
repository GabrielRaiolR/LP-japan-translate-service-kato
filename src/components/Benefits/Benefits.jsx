import Container from "../ui/Container.jsx";
import { benefits } from "../../data/site.js";
import { BenefitIconSvg } from "./BenefitIcons.jsx";
import styles from "./Benefits.module.scss";

function Benefits() {
  return (
    <section className={`${styles.section} animate-section`}>
      <Container>
        <ul className={styles.strip}>
          {benefits.map((item) => (
            <li key={item.label} className={styles.item}>
              <span className={styles.icon} aria-hidden="true">
                <BenefitIconSvg name={item.icon} />
              </span>
              {item.label}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Benefits;
