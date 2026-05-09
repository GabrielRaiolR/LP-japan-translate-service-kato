// Ícones inline minimalistas, usados apenas onde não há SVG dedicado nos /assets.
// Para tudo que é decorativo/identidade visual usamos os SVGs em /public/assets.

const baseProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const ICONS = {
  whatsapp: (
    <>
      <path d="M3 21l1.65-4.5A8.5 8.5 0 1 1 7.5 19.35L3 21z" />
      <path d="M9 9.5c.4-.5 1.1-1 1.6-.4l.7.9c.3.4.4.7.1 1.1l-.4.5c-.2.3-.2.6 0 .9.7 1.1 1.7 2 2.8 2.6.3.2.6.1.9-.1l.5-.5c.3-.3.7-.3 1-.1l.9.7c.6.5.2 1.2-.3 1.7-.9.9-2.2.9-3.3.5-1.8-.7-3.5-2.2-4.4-4-.5-1-.6-2.4.4-3.4z" />
    </>
  ),
  copy: (
    <>
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </>
  ),
  check: <polyline points="20 6 9 17 4 12" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </>
  ),
  arrow: (
    <>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15 15 0 0 1 0 20" />
      <path d="M12 2a15 15 0 0 0 0 20" />
    </>
  ),
};

function Icon({ name, size = 22, strokeWidth, className = "", ...rest }) {
  const path = ICONS[name];
  if (!path) return null;
  return (
    <svg
      {...baseProps}
      width={size}
      height={size}
      strokeWidth={strokeWidth ?? baseProps.strokeWidth}
      className={className}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {path}
    </svg>
  );
}

export default Icon;
