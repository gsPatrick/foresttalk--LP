import Logo from "@/components/atoms/Logo/Logo";
import { NAV_LINKS, STORES } from "@/lib/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <Logo light />
        <ul className={styles.links}>
          {NAV_LINKS.map((l) => (<li key={l.href}><a href={l.href}>{l.label}</a></li>))}
          <li><a href={STORES.apple} target="_blank" rel="noopener noreferrer">App Store</a></li>
          <li><a href={STORES.google} target="_blank" rel="noopener noreferrer">Google Play</a></li>
        </ul>
        <p className={styles.copy}>© {new Date().getFullYear()} Forest Talk. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
