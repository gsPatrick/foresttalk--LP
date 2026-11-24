import PhoneShowcase from "@/components/molecules/PhoneShowcase/PhoneShowcase";
import StoreButtons from "@/components/molecules/StoreButtons/StoreButtons";
import ForestScene from "@/components/atoms/ForestScene/ForestScene";
import Cloud from "@/components/atoms/Cloud/Cloud";
import styles from "./Hero.module.css";

const BALLOONS = [
  { flag: "🇺🇸", text: "Hello!", cls: "f1" },
  { flag: "🇯🇵", text: "こんにちは", cls: "f2" },
  { flag: "🇫🇷", text: "Bonjour !", cls: "f3" },
  { flag: "🇨🇳", text: "你好", cls: "f4" },
  { flag: "🇩🇪", text: "Hallo!", cls: "f5" },
  { flag: "🇪🇸", text: "¡Hola!", cls: "f6" },
  { flag: "🇹🇭", text: "สวัสดี", cls: "f7" },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Cloud className={`${styles.cloud} ${styles.c1}`} />
      <Cloud className={`${styles.cloud} ${styles.c2}`} />
      <Cloud className={`${styles.cloud} ${styles.c3}`} />
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.badge}>🌳 O jeito mais divertido de aprender idiomas</p>
          <h1 className={`chunk ${styles.title}`}>
            Aprenda idiomas <span className="sun">jogando.</span>
          </h1>
          <p className={styles.lead}>
            9 idiomas, 5 jogos e 250 fases em cada um. Professores 3D conversam com você, palavra por palavra, sem pressão.
          </p>
          <StoreButtons />
          <ul className={styles.proof}>
            <li>Grátis para começar</li>
            <li>iPhone e Android</li>
            <li>Sem anúncios no meio da fase</li>
          </ul>
        </div>
        <div className={styles.visual}>


          {BALLOONS.map((b) => (
            <div key={b.text} className={`${styles.chip} ${styles[b.cls]}`} aria-hidden="true">{b.flag} {b.text}</div>
          ))}
          <PhoneShowcase />
        </div>
      </div>
      <ForestScene className={styles.scene} low />
    </section>
  );
}
