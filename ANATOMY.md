# Forest Talk — Anatomia

Arquétipo **editorial** com toque lúdico: papel quente, tinta verde-floresta e um único acento verde-folha.
Tipografia: Fraunces (display, só títulos) + Nunito (corpo).

```
app/
  layout.js            fontes, metadata, <html lang="pt-BR">
  page.js              monta os organismos na ordem do DOM (server component)
  globals.css          tokens: cores, espaçamento, tipografia fluida, easing
components/
  atoms/               Logo · StoreButton · PhoneFrame · SectionLabel
  molecules/           LangChip · GameRow · Stat · TeacherCard
  organisms/           NavBar · Hero · LanguagesMarquee · GamesList ·
                       ImageSpotlight · Teachers · Journey · DownloadCTA · Footer
hooks/                 useScrolled (NavBar) · useReveal (entrada ao rolar)
lib/site.js            textos, idiomas, jogos, números e links das lojas
public/images/         prints reais do app, professores 3D, ícone
```

Cada componente = pasta própria com `Nome.js` + `Nome.module.css` (export default, mesmo nome da pasta).

## Ritmo da página

1. **Hero** — promessa + celular com a tela real do jogo, cartões de emoji flutuando (Tiger, Frog, Pink).
2. **Letreiro** dos 9 idiomas (pausa no hover).
3. **Jogos** — lista editorial dos 5 jogos, com a cor de cada um.
4. **Jogo Imagem** (seção escura) — demo em HTML do 🐯 com 3 opções + print do feedback.
5. **Professores** — Professor e Professora 3D (recurso Premium).
6. **Trilha** — 9 idiomas · 5 jogos · 250 fases por idioma · 25 capítulos.
7. **Download** — botões App Store e Google Play.

## Regras

- Um acento (`--color-leaf`) por tela; canvas nunca branco puro.
- `prefers-reduced-motion` desliga flutuação, letreiro e transformações.
- Sem números ou depoimentos inventados: só dados reais do app.
