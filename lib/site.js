// Fonte única de textos e links da landing. Troque os links das lojas aqui
// (ou pelas variáveis NEXT_PUBLIC_* do .env) quando o app for publicado.

export const SITE = {
  name: "Forest Talk",
  title: "Forest Talk — aprenda idiomas jogando",
  description:
    "9 idiomas, 5 jogos e 250 fases por idioma. Aprenda palavra por palavra, jogando, com professores 3D que conversam com você. Baixe para iPhone e Android.",
};

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://foresttalklp.vercel.app";

export const STORES = {
  // TODO: trocar pelo link real da App Store quando o app for aprovado (o id abaixo é provisório).
  apple: process.env.NEXT_PUBLIC_APP_STORE_URL || "https://apps.apple.com/br/app/forest-talk/id0000000000",
  google: process.env.NEXT_PUBLIC_PLAY_STORE_URL || "https://play.google.com/store/apps/details?id=com.foresttalk.app",
};

export const NAV_LINKS = [
  { href: "#jogos", label: "Jogos" },
  { href: "#professores", label: "Professores" },
  { href: "#planos", label: "Planos" },
  { href: "#duvidas", label: "Dúvidas" },
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

export const PLANS = [
  { id: "free", name: "Grátis", price: "R$ 0", period: "", tag: "Para começar", items: ["Os 5 jogos e os 9 idiomas", "250 fases por idioma", "Moedas, baús e coleção de personagens", "Com anúncios"], cta: "Baixar grátis" },
  { id: "ads", name: "Sem anúncios", price: "R$ 9,90", period: "/mês", tag: "Foco total", items: ["Tudo do plano Grátis", "Sem nenhum anúncio", "Cancele quando quiser"], cta: "Quero sem anúncios" },
  { id: "premium", name: "Premium", price: "R$ 39,90", period: "/mês", tag: "Mais completo", featured: true, items: ["Tudo do plano Sem anúncios", "Professores de IA e conversa por voz", "Simulações do dia a dia", "Vidas infinitas"], cta: "Quero o Premium" },
];

export const FAQ = [
  { q: "O Forest Talk é grátis?", a: "Você começa de graça, com os 5 jogos e todos os idiomas. Os planos Sem anúncios e Premium são opcionais e podem ser cancelados quando quiser." },
  { q: "Quais idiomas posso aprender?", a: "Inglês, espanhol, francês, italiano, russo, alemão, tailandês, japonês e chinês. Em cada um são 250 fases, nos 5 jogos." },
  { q: "Preciso saber alguma coisa antes de começar?", a: "Não. O conteúdo vai do básico (A1) ao intermediário (B2), em capítulos que sobem aos poucos, então dá para começar do zero." },
  { q: "Como funcionam os professores 3D?", a: "No plano Premium você conversa por voz com o Professor e a Professora, que puxam assunto, tiram dúvidas e corrigem com paciência." },
  { q: "Posso trocar de idioma ou de jogo quando quiser?", a: "Pode. Seu progresso fica salvo, então você alterna entre idiomas e jogos sem perder o que já conquistou." },
  { q: "Funciona no iPhone e no Android?", a: "Sim, o Forest Talk é para iPhone e Android. É só baixar na App Store ou no Google Play." },
  { q: "Como cancelo uma assinatura?", a: "Pela própria loja de aplicativos (App Store ou Google Play), nas configurações de assinaturas da sua conta." },
];
