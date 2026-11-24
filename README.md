# Forest Talk — Landing

Landing page do app **Forest Talk** (aprender idiomas jogando), com links para App Store e Google Play.

```
npm install
npm run dev      # http://localhost:3017
npm run build && npm start
```

## Links das lojas

Ficam em `lib/site.js` (objeto `STORES`) e podem ser sobrescritos por variáveis de ambiente
(veja `.env.example`):

- `NEXT_PUBLIC_PLAY_STORE_URL` — Google Play (padrão: `com.foresttalk.app`).
- `NEXT_PUBLIC_APP_STORE_URL` — App Store. **O id padrão é provisório**: troque pelo link real quando o app
  for aprovado na Apple.

Textos, idiomas, jogos e números da página também ficam em `lib/site.js`.

## Estrutura

Segue a arquitetura dos projetos de referência (Next.js 14 App Router, JavaScript, CSS Modules, Atomic Design).
Veja `ANATOMY.md`.
