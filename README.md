# Kato Assessoria e Traduções — Landing Page

Landing page **one-page** em React + SCSS para a marca **Kato Assessoria e Traduções**, voltada a estrangeiros que vivem no Japão e precisam de tradução de documentos, assessoria, agendamentos e suporte em japonês.

> Estilo visual fielmente inspirado no projeto de referência incluso no workspace: cards "stack" com sombra sólida, badges em pílula nos H2, sem gradientes, paleta clara da marca (`#4395fd` / `#002794` / `#f3f3f3` / `#ffffff` / `#111111`).

---

## Stack

- **React 19** + **Vite 8**
- **SCSS** (CSS Modules por componente)
- Sem dependências de UI externas
- Ícones SVG em `/public/assets` (criados pelo cliente)
- Conteúdo centralizado em `src/data/site.js`

---

## Como rodar

```bash
cd kato-assessoria
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
npm run lint
```

---

## Estrutura de pastas

```
kato-assessoria/
├── public/
│   └── assets/                # Logo, ilustrações, ícones, QR Code Pix, favicon
├── src/
│   ├── components/
│   │   ├── Benefits/          # Faixa de benefícios (substitui as logos do exemplo)
│   │   ├── CTA/               # CTO — card cinza grande + ilustração
│   │   ├── Footer/            # Estilo do exemplo: logo + nav + sociais + caixa CTA
│   │   ├── Header/            # Logo SVG real + menu mobile (sticky)
│   │   ├── Hero/              # Título grande + 2 botões + ilustração
│   │   ├── Pix/               # PixSection — QR + código copia-e-cola
│   │   ├── Pricing/           # 3 planos no estilo card stack
│   │   ├── Process/           # Accordion com Icon-Process-Work-Open/Close
│   │   ├── Services/          # 6 cards no estilo do exemplo
│   │   ├── Situations/        # Painel azul-marinho com 3 cards (estilo Case Studies)
│   │   ├── TalkToMe/          # Fale comigo — 2 cards (formulário + atendimento direto)
│   │   ├── Testimonials/      # Carousel com Bubble + arrows + star-dots
│   │   └── ui/                # Button, Container, Icon (mínimo), SectionHeader
│   ├── data/
│   │   └── site.js            # Todo o conteúdo + dados de contato
│   ├── styles/
│   │   ├── _variables.scss    # Cores, tipografia, sombras, breakpoints
│   │   ├── _mixins.scss       # Container, badge, card stack, headings
│   │   └── main.scss          # Reset + animações globais
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## Ordem das seções (conforme solicitado)

1. **Header** (logo SVG + nav âncoras + botão "Solicitar orçamento")
2. **Hero** (título + 2 CTAs + ilustração)
3. **Benefits** (faixa simples com 6 benefícios — sem logos falsas)
4. **Services** (6 cards no estilo do exemplo)
5. **CTA** (CTO — card cinza com ilustração + WhatsApp)
6. **Situações em que posso ajudar** (3 cards, painel azul escuro)
7. **Como funciona** (accordion 6 etapas, com `Icon-Process-Work-Open/Close.svg`)
8. **Fale comigo** (2 cards: formulário + atendimento direto com WhatsApp/E-mail)
9. **Valores** (3 planos)
10. **Pagamento via Pix** (QR Code + código copia e cola com botão de copiar)
11. **Depoimentos** (carousel com `Testimonial-Bubble.svg`, `Testimonial-arrow.svg`, `Testimonial-Star-dot-*.svg`)
12. **Footer** (logo + nav + sociais + caixa CTA escura — fiel ao exemplo)

> A seção **Sobre o atendimento** foi **removida**, conforme solicitado. A seção **Team** do exemplo nunca foi incluída.

---

## Assets utilizados

Todos os SVGs em `/public/assets` (originados de `/Assets`) são utilizados:

| Asset | Onde é usado |
|---|---|
| `Logo-header-positivus.svg` | Header (logo da marca) |
| `Hero-Section-Ilustracao.svg` | Hero |
| `CTO-Ilustration.svg` | Seção CTA |
| `Case-Study-Arrow.svg` | Cards de Serviços + Situações ("Saiba mais" / link) |
| `Icon-Process-Work-Open.svg` | Accordion fechado em Como funciona |
| `Icon-Process-Work-Close.svg` | Accordion aberto em Como funciona |
| `Contact-Us-Illustration.svg` | Card "Atendimento direto" da seção Fale comigo |
| `Testimonial-Bubble.svg` | Balão das citações em Depoimentos |
| `Testimonial-arrow.svg` | Setas de navegação dos Depoimentos |
| `Testimonial-Star-dot-open.svg` | Indicador ativo do carousel |
| `Testimonial-Star-dot-next.svg` | Indicadores inativos do carousel |
| `Footer-Logo.svg` | Logo no Footer |
| `Footer-Logo-Instagram.svg` | Ícone Instagram no Footer |
| `Footer-Logo-Linkedin.svg` | Ícone LinkedIn no Footer |
| `Pix-QR-Code.svg` | Placeholder do QR Code (substituir pelo real) |
| `favicon.svg` | Favicon do navegador |

---

## Onde trocar os dados reais

Tudo centralizado em **`src/data/site.js`**.

| O que | Onde |
|---|---|
| WhatsApp (texto + link `wa.me/...`) | `contact.whatsapp` / `contact.whatsappLink` |
| E-mail | `contact.email` |
| Instagram | `contact.instagram` |
| Código Pix copia-e-cola | `contact.pixCode` (atualmente `PIX_CODE_HERE`) |
| QR Code Pix | substituir o arquivo `public/assets/Pix-QR-Code.svg` (placeholder visual) |
| Valores em ¥ | array `pricing` |
| Depoimentos | array `testimonials` |

---

## Paleta de cores (em `src/styles/_variables.scss`)

| Token | Cor | Uso |
| --- | --- | --- |
| `$color-primary` | `#4395fd` | Badges H2, CTAs, ícones, accordion ativo |
| `$color-secondary` | `#002794` | Bordas, footer, painéis escuros, sombra dos cards |
| `$color-bg-light` | `#f3f3f3` | Fundo dos cards e bloco CTA |
| `$color-white` | `#ffffff` | Background base + cards primary |
| `$color-text` | `#111111` | Texto principal |

A sombra dos cards usa o estilo "stack" do exemplo: `box-shadow: 0 5px 0 0 #002794;`.

---

## Acessibilidade & responsividade

- Estrutura semântica completa (`header`, `main`, `section`, `nav`, `footer`).
- `aria-expanded`, `aria-controls`, `aria-labelledby` no accordion, menu mobile e seções.
- Suporte a `prefers-reduced-motion`.
- Mobile-first com breakpoints `sm: 640 / md: 768 / lg: 1024 / xl: 1280`.
- Smooth scroll nas âncoras (`#servicos`, `#como-funciona`, `#valores`, `#depoimentos`, `#contato`, `#pix`).

---

## Próximos passos sugeridos

- [ ] Substituir o **QR Code Pix** placeholder pelo real (`public/assets/Pix-QR-Code.svg`).
- [ ] Trocar `PIX_CODE_HERE` pelo código copia-e-cola real em `site.js`.
- [ ] Atualizar **WhatsApp**, **e-mail** e **Instagram** em `site.js`.
- [ ] Definir os **valores reais (¥)** em `pricing`.
- [ ] Conectar o formulário a um serviço de e-mail (Formspree/EmailJS) — atualmente abre `mailto:`.
- [ ] Trocar **depoimentos** pelos reais (com autorização dos clientes).
- [ ] (Opcional) Trocar o ícone LinkedIn no footer por outro canal (ex.: Telegram) caso não exista perfil no LinkedIn.
