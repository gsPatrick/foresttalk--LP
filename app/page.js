import NavBar from "@/components/organisms/NavBar/NavBar";
import Hero from "@/components/organisms/Hero/Hero";
import LanguagesBand from "@/components/organisms/LanguagesBand/LanguagesBand";
import LionIntro from "@/components/organisms/LionIntro/LionIntro";
import GameCards from "@/components/organisms/GameCards/GameCards";
import Teachers3D from "@/components/organisms/Teachers3D/Teachers3D";
import Journey from "@/components/organisms/Journey/Journey";
import AnimalsRibbon from "@/components/organisms/AnimalsRibbon/AnimalsRibbon";
import FinalCTA from "@/components/organisms/FinalCTA/FinalCTA";
import Footer from "@/components/organisms/Footer/Footer";
import StickyStores from "@/components/organisms/StickyStores/StickyStores";

export default function Page() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <LanguagesBand />
        <LionIntro />
        <GameCards />
        <Teachers3D />
        <Journey />
        <AnimalsRibbon />
        <FinalCTA />
      </main>
      <Footer />
      <StickyStores />
    </>
  );
}
