"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./TeacherStage.module.css";

/** Professor 3D em canvas. `speaking`/`listening` controlam a animação (fala, gesto, escuta). */
export default function TeacherStage({ model, poster, alt, speaking, listening, line }) {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const rig = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let alive = true;
    let io;
    (async () => {
      const { createTeacher } = await import("@/lib/teacherRig");
      if (!alive || !canvasRef.current) return;
      const t = createTeacher(canvasRef.current);
      rig.current = t;
      try { await t.load(model); } catch { return; }
      if (!alive) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) t.setRunning(false);
      setReady(true);
      io = new IntersectionObserver(([e]) => t.setVisible(e.isIntersecting), { threshold: 0.05 });
      io.observe(wrapRef.current);
    })();
    return () => { alive = false; io?.disconnect(); rig.current?.dispose(); rig.current = null; };
  }, [model]);

  useEffect(() => { rig.current?.setSpeaking(speaking); }, [speaking, ready]);
  useEffect(() => { rig.current?.setListening(listening); }, [listening, ready]);

  return (
    <div className={styles.stage} ref={wrapRef}>
      {!ready && <img src={poster} alt={alt} width={400} height={400} className={styles.poster} />}
      <canvas ref={canvasRef} className={`${styles.canvas} ${ready ? styles.on : ""}`} role="img" aria-label={alt} />
      {line && (
        <div key={line} className={styles.bubble} aria-live="polite">{line}</div>
      )}
    </div>
  );
}
