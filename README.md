# 🐺 CAIQUE HUB

Hub pessoal do desenvolvedor **Caique O Castaldeli** — um portal dark futurista com tema de lobo alfa, construído com React 19 + TypeScript + Tailwind CSS v4 + Framer Motion.

> 🌐 **Site:** https://site-caique-o-castald-git-d95bd7-caiquedeoliveira-devs-projects.vercel.app/

---

## ✨ Funcionalidades

- **Tela de loading** com vídeo do lobo + scratch marks animados + barra de progresso
- **Cursor customizado** — ponto vermelho com anel e rastro, em `mix-blend-difference`
- **Fumaça vermelha** animada em Canvas + camadas CSS fog-drift
- **3 colunas responsivas** (280px | 1fr | 320px) com cards dark e bordas decorativas
- **Avatar hexagonal** com foto pessoal
- **Navegação** com links para GitHub, LinkedIn, Instagram, Discord, currículo, etc.
- **Seção de projetos** com cards interativos e links externos
- **Player Spotify** incorporado com playlist do lobo alfa
- **Skills animadas** — barras de progresso com transição suave
- **Contador de visitantes** com sparkline
- **Tema escuro** preto (#050203) com acentos vermelho-sangue (#b3121c / #ff2130)
- **Favicon** estrela vermelha

---

## 🛠 Stack

| Tecnologia | Versão |
|------------|--------|
| React | 19.2.7 |
| TypeScript | 6.0.2 |
| Vite | 8.1.1 |
| Tailwind CSS | 4.3.2 |
| Framer Motion | 12.42.2 |
| Node | 20+ |

---

## 📁 Estrutura do Projeto

```
hub-caiqueocastaldeli/
├── public/
│   ├── favicon.svg          # Favicon estrela vermelha
│   └── icons.svg            # Ícones SVG (Vite default)
├── src/
│   ├── assets/
│   │   ├── Eu-Wolf.png                # Foto do avatar hexagonal
│   │   ├── wolf-page.mp4              # Vídeo central (placeholder)
│   │   ├── wolf-loading.mp4           # Vídeo da tela de loading
│   │   ├── Curriculo-Caiquedeoliveira.dev.pdf  # Currículo para download
│   │   └── ...                        # Outros assets
│   ├── components/
│   │   ├── LoadingScreen.tsx          # Tela de carregamento
│   │   ├── CustomCursor.tsx           # Cursor customizado
│   │   ├── SmokeBackground.tsx        # Fumaça vermelha animada
│   │   ├── Corners.tsx                # Bordas decorativas dos cards
│   │   ├── LeftColumn.tsx             # Coluna esquerda (nav + avatar)
│   │   ├── CenterColumn.tsx           # Coluna central (projetos)
│   │   └── RightColumn.tsx            # Coluna direita (skills + playlist)
│   ├── App.tsx                        # Componente raiz
│   ├── main.tsx                       # Entry point React
│   └── index.css                      # Tailwind v4 + temas + animações
├── index.html                         # HTML base
├── vercel.json                        # Config de deploy + headers de segurança
├── vite.config.ts                     # Config do Vite
├── tsconfig.json                      # Config do TypeScript
└── package.json                       # Dependências e scripts
```

---

## 🚀 Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/caiqueDeOliveira-dev/hub-caiqueocastaldeli.git
cd hub-caiqueocastaldeli

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

---

## 📦 Deploy

### Vercel (recomendado)

```bash
npm run build
npx vercel --prod
```

Ou conecte o repositório GitHub na [Vercel](https://vercel.com) para deploy automático.

O `vercel.json` já está configurado com:
- Content-Security-Policy (CSP)
- HSTS (HTTPS forçado)
- Cache de assets imutáveis
- Headers de segurança (X-Frame-Options, X-Content-Type-Options, etc.)

---

## 🔗 Links do Projeto

| Recurso | URL |
|---------|-----|
| Site Pessoal | https://site-caique-o-castald-git-d95bd7-caiquedeoliveira-devs-projects.vercel.app/ |
| GitHub | https://github.com/caiqueDeOliveira-dev |
| LinkedIn | https://linkedin.com/in/caique-deoliveira-dev |
| Instagram Pessoal | https://instagram.com/caique.o.castaldeli |
| Instagram Nego Caos | https://instagram.com/nego.caos |
| YouTube | https://youtube.com/@Caique.O.Castaldeli |
| X / Twitter | https://x.com/CaahCast |
| Twitch Nego Caos | https://twitch.tv/negocaos28 |
| Discord | https://discord.gg/vEqm6dVmH |
| E-mail | caiquedeoliveira.dev@gmail.com |

---

## 🎨 Personalização

### Cores do tema (definidas em `src/index.css`)

```css
--color-black: #050203;
--color-panel: #0c0708;
--color-panel-2: #100a0b;
--color-blood: #b3121c;
--color-blood-bright: #ff2130;
--color-blood-dim: #5c0d13;
--color-line: rgba(179, 18, 28, 0.28);
--color-text: #e9dede;
--color-text-dim: #8a7778;
--color-text-faint: #5c4d4e;
```

### Fontes

- **Cinzel** (títulos) — Google Fonts
- **JetBrains Mono** (código, eyebrows) — Google Fonts
- **Inter** (corpo) — Google Fonts

---

## 📄 Licença

Todos os direitos reservados © 2026 — Caique O Castaldeli
