import styles from "./StoreButton.module.css";

const ICONS = {
  apple: (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" fill="currentColor">
      <path d="M16.4 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9s-1.8-.8-3-.8c-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.700 2.400 2.900 2.300 1.200 0 1.600-.7 3-.7s1.800.7 3 .7c1.300 0 2.100-1.100 2.800-2.300.9-1.300 1.300-2.600 1.300-2.700-.1 0-2.500-1-2.500-3.700zM14.200 5.800c.6-.8 1.100-1.900.9-3-.9 0-2.100.6-2.700 1.400-.6.700-1.100 1.800-1 2.900 1.100.100 2.200-.5 2.800-1.300z" />
    </svg>
  ),
  google: (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <path fill="#46d36b" d="M3.600 2.400c-.2.300-.3.700-.3 1.200v16.800c0 .5.100.9.300 1.200l9.400-9.600z" />
      <path fill="#ffd33d" d="M16.200 15.200 13 12l3.200-3.200 4 2.300c1.100.6 1.100 1.600 0 2.200z" />
      <path fill="#3d8bff" d="M13 12 3.600 21.600c.4.400 1 .4 1.700.1L16.200 15.200z" />
      <path fill="#ff5a5f" d="M16.200 8.800 5.300 2.300c-.7-.4-1.300-.3-1.700.1L13 12z" />
    </svg>
  ),
};

const COPY = {
  apple: { small: "Baixar na", big: "App Store" },
  google: { small: "Disponível no", big: "Google Play" },
};

export default function StoreButton({ store, href, light = false }) {
  const c = COPY[store];
  return (
    <a
      href={href}
      className={`${styles.btn} ${light ? styles.light : ""}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${c.small} ${c.big}`}
    >
      <span className={styles.icon}>{ICONS[store]}</span>
      <span className={styles.text}>
        <small>{c.small}</small>
        <strong>{c.big}</strong>
      </span>
    </a>
  );
}
