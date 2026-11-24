"use client";
import { useEffect, useState } from "react";
import Cloud from "@/components/atoms/Cloud/Cloud";
import useReveal from "@/hooks/useReveal";
import styles from "./LionIntro.module.css";

const LINES = [
  "Oi! Eu sou o Leão Rei, o mascote do Forest Talk! 🦁",
  "Vou te acompanhar em cada fase, do primeiro “hello” até a conversa com os professores.",
  "Errou? Tudo bem! Aqui a gente aprende jogando, sem pressão.",
  "Bora subir a torre juntos?",
];
const FRAMES = ["neutro", "fala-1", "fala-2", "pisca", "feliz"];
const TYPE_MS = 34;
const HOLD_MS = 1700;

/** Leão 2D (o mesmo desenho do app) se apresentando: digita as falas e mexe a boca enquanto "fala". */
export default function LionIntro() {
  const ref = useReveal();
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(0);
  const [mouth, setMouth] = useState(0);
  const [blink, setBlink] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => { setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches); }, []);

  // digita a fala atual e, ao terminar, espera e passa para a próxima
  useEffect(() => {
    if (reduced) return undefined;
    const text = LINES[line];
    if (chars < text.length) {
      const id = setTimeout(() => setChars((c) => c + 1), TYPE_MS);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => { setLine((l) => (l + 1) % LINES.length); setChars(0); }, HOLD_MS);
    return () => clearTimeout(id);
  }, [line, chars, reduced]);

  const talking = !reduced && chars < LINES[line].length;

  // boca abre e fecha só enquanto fala
  useEffect(() => {
    if (!talking) { setMouth(0); return undefined; }
    const id = setInterval(() => setMouth((m) => (m + 1) % 3), 130);
    return () => clearInterval(id);
  }, [talking]);

  // piscadas
  useEffect(() => {
    if (reduced) return undefined;
    let t;
    const loop = () => { t = setTimeout(() => { setBlink(true); setTimeout(() => setBlink(false), 140); loop(); }, 2200 + Math.random() * 2200); };
    loop();
    return () => clearTimeout(t);
  }, [reduced]);

  let active = "neutro";
  if (talking) active = mouth === 1 ? "fala-1" : mouth === 2 ? "fala-2" : "neutro";
  else if (blink) active = "pisca";
  else if (line === LINES.length - 1 || reduced) active = "feliz";

  return (
    <section className={styles.section} aria-labelledby="leao-titulo">
      <Cloud className={`${styles.cloud} ${styles.c1}`} />
      <Cloud className={`${styles.cloud} ${styles.c2}`} />
      <div className={`container ${styles.grid}`} ref={ref} data-reveal>
        <div className={styles.stage}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.lion}>
            {FRAMES.map((f) => (
              <img key={f} src={`/lion/${f}.png`} alt={f === "neutro" ? "Leão Rei, o mascote do Forest Talk, sorrindo" : ""} aria-hidden={f === "neutro" ? undefined : "true"}
                width={900} height={900} className={`${styles.frame} ${f === active ? styles.on : ""}`} loading="lazy" />
            ))}
          </div>
          <div className={styles.grass} aria-hidden="true" />
        </div>

        <div className={styles.copy}>
          <p className={styles.kicker}>Conheça o mascote</p>
          <h2 id="leao-titulo" className={`chunk ${styles.title}`}>Prazer, eu sou o <span className="sun">Leão Rei!</span></h2>
          <div className={styles.bubble} aria-live="off">
            <span className={styles.name}>Leão Rei</span>
            <p>{reduced ? LINES[0] : LINES[line].slice(0, chars)}<i className={styles.caret} aria-hidden="true" /></p>
          </div>
          <ul className={styles.chips}>
            <li>👑 Mascote do app</li>
            <li>🌳 Guia da floresta</li>
            <li>🎒 Sempre com você</li>
          </ul>
          <a href="#baixar" className={styles.cta}>Bora jogar</a>
        </div>
      </div>
    </section>
  );
}
