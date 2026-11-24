import StoreButton from "@/components/atoms/StoreButton/StoreButton";
import { STORES } from "@/lib/site";

export default function StoreButtons({ light = false, className = "" }) {
  return (
    <div className={className} style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
      <StoreButton store="apple" href={STORES.apple} light={light} />
      <StoreButton store="google" href={STORES.google} light={light} />
    </div>
  );
}
