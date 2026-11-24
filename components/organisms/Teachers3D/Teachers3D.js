"use client";
import { useEffect, useState } from "react";
import ForestScene from "@/components/atoms/ForestScene/ForestScene";
import TeacherStage from "@/components/molecules/TeacherStage/TeacherStage";
import styles from "./Teachers3D.module.css";

const TEACHERS = [
  { name: "Professor", model: "/models/professor.glb", poster: "/images/professor.png", text: "Conversa por voz e corrige com paciência, no seu ritmo." },
  { name: "Professora", model: "/models/professora.glb", poster: "/images/professora.png", text: "Puxa assunto, tira dúvidas e ensina como se fala de verdade." },
];

// Conversa de cumprimentos em vários idiomas: cada fala é de um professor.
const SCRIPT = [
  { who: 0, text: "Hello! How are you?" },
  { who: 1, text: "Bonjour ! Ça va très bien." },
  { who: 0, text: "こんにちは！元気ですか？" },
  { who: 1, text: "你好！很高兴见到你。" },
  { who: 0, text: "Hallo! Wie geht's dir?" },
  { who: 1, text: "¡Hola! ¿Qué tal?" },
];
const TURN_MS = 3000;

export default function Teachers3D() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const id = setInterval(() => setStep((s) => (s + 1) % SCRIPT.length), TURN_MS);
    return () => clearInterval(id);
  }, []);
  const turn = SCRIPT[step];

  return (
    <section className={styles.section} id="professores">
      <div className={`container ${styles.head}`}>
        <p className={styles.kicker}>Professores 3D</p>
        <h2 className="chunk h2">Converse de verdade, por voz</h2>
        <p className={styles.sub}>Dois professores em 3D conversam com você, em 9 idiomas, no seu ritmo.</p>
      </div>
      <div className={`container ${styles.grid}`}>
        {TEACHERS.map((t, i) => (
          <article key={t.name} className={styles.card}>
            <TeacherStage
              model={t.model}
              poster={t.poster}
              alt={`${t.name} do Forest Talk, em 3D`}
              speaking={turn.who === i}
              listening={turn.who !== i}
              line={turn.who === i ? turn.text : null}
            />
            <h3>{t.name}</h3>
            <p>{t.text}</p>
          </article>
        ))}
      </div>
      <ForestScene className={styles.scene} tone="dusk" />
    </section>
  );
}
