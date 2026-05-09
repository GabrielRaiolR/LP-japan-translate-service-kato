import styles from "./Button.module.scss";

function Button({
  children,
  as = "button",
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  external = false,
  className = "",
  ...rest
}) {
  const classes = [
    styles.btn,
    styles[`btn--${variant}`],
    styles[`btn--${size}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (as === "a" || href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

export default Button;
