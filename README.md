# brunostefani.com

Site pessoal de Bruno Stefani, feito com [Astro](https://astro.build) a partir do tema
[Dante](https://github.com/JustGoodUI/dante-astro-theme), de JustGoodUI (licença GPL-3.0, veja `LICENSE`).

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Textos da home, menu, redes, clientes | `src/data/site-config.ts` |
| Palestras | `src/content/projects/*.md` |
| Artigos (Ideias) | `src/content/blog/*.md` |
| Sobre e Contato | `src/content/pages/*.md` |
| Cores e fontes | `src/styles/global.css` |

## Rodar localmente

```bash
npm install
npm run dev
```

O site abre em http://localhost:4321. Para gerar a versão final: `npm run build` (sai em `dist/`).
