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
| Projetos em detalhe | `src/content/cases/*.md` (copie `exemplo-modelo-de-projeto.md`) |
| Podcasts | `src/content/podcasts/*.md` (um arquivo por episódio) |
| Imprensa | `src/content/imprensa/*.md` (um arquivo por matéria) |
| Números da página Clientes | `clientsPage` em `src/data/site-config.ts` |
| Logos de clientes | `src/assets/clientes/` (o site monta a grade sozinho) |
| Fotos | `src/assets/images/retrato.jpg` e `palco.jpg` |

**Rascunhos:** qualquer item com `draft: true` aparece só no `npm run dev` e não vai para o site publicado.
O link "Projetos" do menu só aparece quando existe pelo menos um projeto publicado.
| Cores e fontes | `src/styles/global.css` |

## Rodar localmente

```bash
npm install
npm run dev
```

O site abre em http://localhost:4321. Para gerar a versão final: `npm run build` (sai em `dist/`).
