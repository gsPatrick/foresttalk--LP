import styles from "./PhoneFrame.module.css";

/** Celular em CSS com prints reais do app. Com várias telas, elas se alternam em fade. */
export default function PhoneFrame({ src, alt, screens, activeIndex = 0, priority = false }) {
  const list = screens && screens.length ? screens : [{ src, alt }];
  return (
    <div className={styles.phone}>
      <div className={styles.notch} aria-hidden="true" />
      {list.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={i === activeIndex ? s.alt : ""}
          aria-hidden={i === activeIndex ? undefined : "true"}
          width={675}
          height={1500}
          className={`${styles.screen} ${i === activeIndex ? styles.on : ""}`}
          loading={priority && i === 0 ? "eager" : "lazy"}
        />
      ))}
    </div>
  );
}
