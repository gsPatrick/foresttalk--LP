"use client";
import useReveal from "@/hooks/useReveal";
import { GAMES } from "@/lib/site";
import styles from "./GameCards.module.css";

export default function GameCards() {
  const ref = useReveal();
  return (
    <section className={styles.section} id="jogos">
      <div className="container">
        <header className={styles.head}>
          <p className={styles.kicker}>5 jogos</p>
          <h2 className={`chunk h2 ${styles.title}`}>Cinco jeitos de aprender</h2>
          <p className={styles.sub}>Cada jogo treina uma habilidade. Todos com 250 fases por idioma, do básico ao avançado.</p>
        </header>
        <ul className={styles.grid} ref={ref} data-reveal>
          {GAMES.map((g, i) => (
            <li key={g.n} className={styles.card} style={{ "--c": g.color, "--d": g.dark, "--i": i }}>
              <span className={styles.num}>{g.icon}</span>
              <h3>{g.name}</h3>
              <p>{g.text}</p>
              <div className={styles.shot}>
                <img src={g.shot} alt={`Tela do jogo ${g.name}`} width={675} height={1500} loading="lazy" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
