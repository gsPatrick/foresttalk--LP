// Fonte única de textos e links da landing. Troque os links das lojas aqui
// (ou pelas variáveis NEXT_PUBLIC_* do .env) quando o app for publicado.

export const SITE = {
  name: "Forest Talk",
  title: "Forest Talk — aprenda idiomas jogando",
  description:
    "9 idiomas, 5 jogos e 250 fases por idioma. Aprenda palavra por palavra, jogando, com professores 3D que conversam com você. Baixe para iPhone e Android.",
};

export const STORES = {
  // TODO: trocar pelo link real da App Store quando o app for aprovado (o id abaixo é provisório).
  apple: process.env.NEXT_PUBLIC_APP_STORE_URL || "https://apps.apple.com/br/app/forest-talk/id0000000000",
  google: process.env.NEXT_PUBLIC_PLAY_STORE_URL || "https://play.google.com/store/apps/details?id=com.foresttalk.app",
};

export const NAV_LINKS = [
  { href: "#jogos", label: "Jogos" },
  { href: "#professores", label: "Professores" },
  { href: "#baixar", label: "Baixar" },
];

export const LANGUAGES = [
  { flag: "🇺🇸", name: "English", pt: "Inglês" },
  { flag: "🇪🇸", name: "Español", pt: "Espanhol" },
  { flag: "🇫🇷", name: "Français", pt: "Francês" },
  { flag: "🇮🇹", name: "Italiano", pt: "Italiano" },
  { flag: "🇷🇺", name: "Русский", pt: "Russo" },
  { flag: "🇩🇪", name: "Deutsch", pt: "Alemão" },
  { flag: "🇹🇭", name: "ไทย", pt: "Tailandês" },
  { flag: "🇯🇵", name: "日本語", pt: "Japonês" },
  { flag: "🇨🇳", name: "中文", pt: "Chinês" },
];

export const GAMES = [
  { n: "01", icon: "✅", name: "Verdadeiro ou Falso", text: "A tradução está certa? Decida rápido e pegue o ritmo.", color: "#3fd068", dark: "#1f9d47", shot: "/images/app-jogo-vf.jpg" },
  { n: "02", icon: "🔗", name: "Pares", text: "Ligue cada palavra à sua tradução e monte o vocabulário.", color: "#ff9a3d", dark: "#d9701a", shot: "/images/app-jogo-pares.jpg" },
  { n: "03", icon: "🌐", name: "Tradução", text: "Escolha a tradução perfeita, de frases do dia a dia a provérbios.", color: "#3d8bff", dark: "#1f5fcc", shot: "/images/app-jogo-traducao.jpg" },
  { n: "04", icon: "🎤", name: "Pronúncia", text: "Fale em voz alta. O app escuta e mostra se você acertou.", color: "#e5558a", dark: "#b8336a", shot: "/images/app-jogo-pronuncia.jpg" },
  { n: "05", icon: "🖼️", name: "Imagem", text: "Veja a imagem e toque na palavra certa. Ver, reconhecer, lembrar.", color: "#14b8a6", dark: "#0b8a7c", shot: "/images/app-jogo-imagem.jpg" },
];

export const ANIMALS = ["leao_rei", "coruja", "raposa", "urso", "gata", "elefante", "girafa", "coelho", "canguru", "cavalo", "cachorro"];

export const STATS = [
  { value: "9", label: "idiomas" },
  { value: "5", label: "jogos" },
  { value: "250", label: "fases por idioma" },
  { value: "25", label: "capítulos" },
];

export const STEPS = [
  { n: "1", title: "Escolha o idioma", text: "Inglês, espanhol, francês, italiano, russo, alemão, tailandês, japonês ou chinês." },
  { n: "2", title: "Escolha o jogo", text: "Cinco jeitos de treinar. Troque quando quiser, o progresso fica salvo." },
  { n: "3", title: "Suba a torre", text: "Fase por fase, capítulo por capítulo, ganhando estrelas e coleções." },
];
