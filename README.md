# Site Pessoal

Landing page pessoal (currículo + portfólio), feita com React + Vite.

## Rodando localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Personalizando o conteúdo

Todo o conteúdo (nome, sobre, skills, projetos, experiência e formação) fica em
`src/data.js` — edite esse arquivo para colocar suas informações reais.

Para o botão "Baixar currículo" funcionar, adicione seu PDF em `public/resume.pdf`.

O avatar do hero (`src/components/Avatar.jsx`) e as capas dos cards de projeto
são placeholders com as iniciais/inicial do nome — para usar uma foto ou
screenshot real, troque o SVG por uma tag `<img>` apontando para um arquivo em
`public/`.
