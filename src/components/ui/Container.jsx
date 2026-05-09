import { createElement } from "react";
import styles from "./Container.module.scss";

function Container({ children, className = "", as = "div" }) {
  return createElement(
    as,
    { className: `${styles.container} ${className}`.trim() },
    children,
  );
}

export default Container;
