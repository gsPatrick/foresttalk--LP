"use client";
import Logo from "@/components/atoms/Logo/Logo";
import useScrolled from "@/hooks/useScrolled";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const scrolled = useScrolled();
  return (
    <header className={`${styles.bar} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.inner} aria-label="Principal">
        <Logo />
        <a href="#baixar" className={styles.cta}>Baixar</a>
      </nav>
    </header>
  );
}
