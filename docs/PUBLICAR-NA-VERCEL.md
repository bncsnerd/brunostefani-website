# Publicar brunostefani.com na Vercel

O projeto já vem configurado (`vercel.json`). São três passos, feitos uma vez só.

## 1. Criar o projeto na Vercel

1. Entre em https://vercel.com e faça login com **Continue with GitHub** (conta `bncsnerd`).
2. Clique em **Add New… → Project**.
3. Em **Import Git Repository**, escolha `bncsnerd/brunostefani-website`.
   Se ele não aparecer, clique em **Adjust GitHub App Permissions** e libere o repositório.
4. Não mude nada na tela de configuração (a Vercel detecta Astro sozinha). Clique em **Deploy**.
5. Em cerca de 1 minuto o site fica no ar num endereço provisório, tipo `brunostefani-website.vercel.app`.

## 2. Ligar o domínio na Vercel

1. No projeto, vá em **Settings → Domains**.
2. Adicione `brunostefani.com`. Aceite a sugestão de também adicionar `www.brunostefani.com`
   (redirecionando para `brunostefani.com`).
3. A Vercel vai mostrar os registros de DNS que faltam. Deixe essa tela aberta.

## 3. Apontar o DNS na GoDaddy

1. Entre em https://dcc.godaddy.com/control/portfolio, clique em `brunostefani.com` e depois em **DNS**.
2. Apague o registro **A** com nome **@** que aponta para "Parked" ou para um IP da GoDaddy.
   Se houver **Encaminhamento (Forwarding)** ativo para o domínio, desative.
3. Crie os registros que a Vercel mostrou. Normalmente são:

   | Tipo  | Nome | Valor                         |
   | ----- | ---- | ----------------------------- |
   | A     | @    | o IP que a Vercel mostrar (ex.: `76.76.21.21`) |
   | CNAME | www  | o endereço que a Vercel mostrar (ex.: `cname.vercel-dns.com`) |

   Use exatamente os valores da tela da Vercel: ela às vezes mostra valores específicos do seu projeto.
   Se já existir um CNAME `www` apontando para `@`, edite em vez de criar outro.
4. Volte à Vercel. Em alguns minutos (às vezes até algumas horas) os domínios ficam com o selo
   **Valid Configuration** e o HTTPS é ativado sozinho.

## Depois disso

Toda alteração enviada ao GitHub (branch `main`) publica o site automaticamente.

### Como trocar as fotos

No GitHub, abra a pasta `src/assets/images/`, clique em **Add file → Upload files** e envie:

- `retrato.jpg`: foto de rosto, quadrada ou próxima disso. Aparece redonda no topo do site.
- `palco.jpg`: foto horizontal, de preferência em palestra. Aparece grande na abertura da home.

Clique em **Commit changes**. A Vercel publica a nova versão em cerca de 1 minuto.
