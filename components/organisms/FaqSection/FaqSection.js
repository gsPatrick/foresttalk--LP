"use client";
import useReveal from "@/hooks/useReveal";
import { FAQ } from "@/lib/site";
import styles from "./FaqSection.module.css";

export default function FaqSection() {
  const ref = useReveal();
  return (
    <section className={styles.section} id="duvidas">
      <div className={`container ${styles.wrap}`} ref={ref} data-reveal>
        <header className={styles.head}>
          <p className={styles.kicker}>Dúvidas</p>
          <h2 className={`chunk ${styles.title}`}>Perguntas frequentes</h2>
        </header>
        <div className={styles.list}>
          {FAQ.map((f, i) => (
            <details key={f.q} className={styles.item} name="faq" open={i === 0}>
              <summary>{f.q}<span className={styles.icon} aria-hidden="true" /></summary>
              <div className={styles.body}><p>{f.a}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
