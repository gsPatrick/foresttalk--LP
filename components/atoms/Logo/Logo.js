import Link from "next/link";
import styles from "./Logo.module.css";

export default function Logo({ light = false }) {
  return (
    <Link href="/" className={`${styles.logo} ${light ? styles.light : ""}`} aria-label="Forest Talk, início">
      <img src="/images/icone.png" alt="" width={34} height={34} className={styles.icon} />
      <span className={styles.name}>Forest Talk</span>
    </Link>
  );
}
