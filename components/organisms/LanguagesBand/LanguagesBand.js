import { LANGUAGES } from "@/lib/site";
import styles from "./LanguagesBand.module.css";

export default function LanguagesBand() {
  const loop = [...LANGUAGES, ...LANGUAGES];
  return (
    <section className={styles.band} id="idiomas" aria-label="Idiomas disponíveis">
      <p className={styles.kicker}>9 idiomas para escolher</p>
      <div className={styles.track}>
        <ul className={styles.row}>
          {loop.map((l, i) => (
            <li key={`${l.name}-${i}`} className={styles.chip} aria-hidden={i >= LANGUAGES.length ? "true" : undefined}>
              <span className={styles.flag}>{l.flag}</span>
              <span><b>{l.name}</b><small>{l.pt}</small></span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
