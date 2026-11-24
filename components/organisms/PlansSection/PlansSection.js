"use client";
import useReveal from "@/hooks/useReveal";
import { PLANS } from "@/lib/site";
import styles from "./PlansSection.module.css";

export default function PlansSection() {
  const head = useReveal();
  const grid = useReveal();
  return (
    <section className={styles.section} id="planos">
      <div className="container">
        <header className={styles.head} ref={head} data-reveal>
          <p className={styles.kicker}>Planos</p>
          <h2 className={`chunk ${styles.title}`}>Comece de graça. Evolua quando quiser.</h2>
          <p className={styles.sub}>Escolha como jogar. Você pode mudar de plano a qualquer momento.</p>
        </header>
        <ul className={styles.grid} ref={grid} data-reveal>
          {PLANS.map((p) => (
            <li key={p.id} className={`${styles.card} ${p.featured ? styles.featured : ""}`}>
              {p.featured && <span className={styles.ribbon}>Mais completo</span>}
              <p className={styles.tag}>{p.tag}</p>
              <h3>{p.name}</h3>
              <p className={styles.price}><b>{p.price}</b><small>{p.period}</small></p>
              <ul className={styles.items}>
                {p.items.map((it) => (<li key={it}>{it}</li>))}
              </ul>
              <a href="#baixar" className={styles.cta}>{p.cta}</a>
            </li>
          ))}
        </ul>
        <p className={styles.note}>Valores de referência. O preço final aparece na App Store e no Google Play, no seu país.</p>
      </div>
    </section>
  );
}
