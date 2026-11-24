import PhoneFrame from "@/components/atoms/PhoneFrame/PhoneFrame";
import { STATS, STEPS } from "@/lib/site";
import styles from "./Journey.module.css";

export default function Journey() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.visual}>
          <div className={styles.sun} aria-hidden="true" />
          <PhoneFrame src="/images/app-trilha.jpg" alt="Trilha do Forest Talk, uma torre com as fases do jogo" />
        </div>
        <div className={styles.copy}>
          <p className={styles.kicker}>Sua jornada</p>
          <h2 className={`chunk h2`}>Suba a torre, fase por fase</h2>
          <ol className={styles.steps}>
            {STEPS.map((s) => (
              <li key={s.n}><span>{s.n}</span><div><h3>{s.title}</h3><p>{s.text}</p></div></li>
            ))}
          </ol>
          <ul className={styles.stats}>
            {STATS.map((s) => (
              <li key={s.label}><b>{s.value}</b><small>{s.label}</small></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
