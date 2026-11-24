import StoreButtons from "@/components/molecules/StoreButtons/StoreButtons";
import ForestScene from "@/components/atoms/ForestScene/ForestScene";
import Cloud from "@/components/atoms/Cloud/Cloud";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.section} id="baixar">
      <Cloud className={`${styles.cloud} ${styles.c1}`} />
      <Cloud className={`${styles.cloud} ${styles.c2}`} />
      <div className={`container ${styles.inner}`}>
        <img src="/characters/leao_rei.webp" alt="Leão Rei, mascote do Forest Talk" width={150} height={145} className={styles.lion} />
        <h2 className={`chunk h2 ${styles.title}`}>Sua floresta de <span className="sun">idiomas</span> te espera</h2>
        <p className={styles.sub}>Baixe grátis e comece a primeira fase agora.</p>
        <StoreButtons className={styles.buttons} />
      </div>
      <ForestScene className={styles.scene} />
    </section>
  );
}
