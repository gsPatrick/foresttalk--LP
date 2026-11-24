"use client";
import { useEffect, useState } from "react";
import PhoneFrame from "@/components/atoms/PhoneFrame/PhoneFrame";
import styles from "./PhoneShowcase.module.css";

const SCREENS = [
  { name: "Imagem", src: "/images/app-jogo-imagem.jpg", alt: "Jogo Imagem: um emoji e três opções de palavra" },
  { name: "Verdadeiro ou Falso", src: "/images/app-jogo-vf.jpg", alt: "Jogo Verdadeiro ou Falso: a tradução está certa?" },
  { name: "Pares", src: "/images/app-jogo-pares.jpg", alt: "Jogo Pares: conecte cada palavra à sua tradução" },
  { name: "Tradução", src: "/images/app-jogo-traducao.jpg", alt: "Jogo Tradução: escolha a tradução perfeita" },
  { name: "Pronúncia", src: "/images/app-jogo-pronuncia.jpg", alt: "Jogo Pronúncia: fale em voz alta" },
];
const INTERVAL = 3200;

/** Celular que alterna os prints dos 5 jogos. */
export default function PhoneShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % SCREENS.length), INTERVAL);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div className={styles.wrap} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <PhoneFrame screens={SCREENS} activeIndex={index} priority />
      <p className={styles.name} aria-live="polite">{SCREENS[index].name}</p>
      <div className={styles.dots} role="tablist" aria-label="Jogos do app">
        {SCREENS.map((s, i) => (
          <button
            key={s.name}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={s.name}
            className={`${styles.dot} ${i === index ? styles.active : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
