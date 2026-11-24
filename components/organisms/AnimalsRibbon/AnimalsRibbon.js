import { ANIMALS } from "@/lib/site";
import styles from "./AnimalsRibbon.module.css";

export default function AnimalsRibbon() {
  const loop = [...ANIMALS, ...ANIMALS];
  return (
    <section className={styles.section}>
      <div className={`container ${styles.head}`}>
        <h2 className={`chunk h2`}>Uma turma da floresta pra te acompanhar</h2>
        <p>Escolha seu personagem e colecione novos amigos enquanto aprende.</p>
      </div>
      <div className={styles.track}>
        <ul className={styles.row}>
          {loop.map((a, i) => (
            <li key={`${a}-${i}`} className={styles.tile} style={{ "--r": `${i % 2 ? 4 : -4}deg` }} aria-hidden={i >= ANIMALS.length ? "true" : undefined}>
              <img src={`/characters/${a}.webp`} alt="" width={166} height={160} loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
