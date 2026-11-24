"use client";
import { useEffect, useState } from "react";
import { STORES } from "@/lib/site";
import styles from "./StickyStores.module.css";

export default function StickyStores() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const final = document.getElementById("baixar");
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.8;
      const atEnd = final ? final.getBoundingClientRect().top < window.innerHeight * 0.6 : false;
      setShow(past && !atEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`${styles.bar} ${show ? styles.on : ""}`} aria-hidden={!show}>
      <a href={STORES.apple} target="_blank" rel="noopener noreferrer" tabIndex={show ? 0 : -1}>App Store</a>
      <a href={STORES.google} target="_blank" rel="noopener noreferrer" tabIndex={show ? 0 : -1}>Google Play</a>
    </div>
  );
}
