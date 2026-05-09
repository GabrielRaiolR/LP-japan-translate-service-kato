// ===============================================================
// Dados centralizados da landing page
// Troque os placeholders abaixo pelos dados reais quando disponíveis.
// ===============================================================

export const brand = {
  name: "Kato Assessoria e Traduções",
  short: "Kato Assessoria",
  tagline: "Traduções e assessoria para estrangeiros no Japão.",
  /** Logo branca para o rodapé azul (equivalente ao Footer-Logo.svg do modelo Positivus). */
  footerLogo: "/assets/Footer-Logo.svg",
  logoHeader: "/assets/Logo-header-positivus.svg",
};

// >>> Contato <<<
export const contact = {
  whatsapp: "+81 70 9132-0458",
  whatsappLink: "https://wa.me/817091320458",
  /** Destino do formulário “Enviar solicitação” e textos de contato */
  email: "gabrielakato2203@gmail.com",
  instagram: "https://instagram.com/katoassessoria",
  /** Código Pix copia e cola (não exibido na UI; só copiado pelo botão). */
  pixCode:
    "00020126580014BR.GOV.BCB.PIX0136ef291161-ef32-4333-8854-c9b19e00c8c75204000053039865802BR5924Gabriela Kato das Chagas6009SAO PAULO62140510NVoUJuOGcG630459D0",
  pixQr: "/assets/qrcode-pix.svg",
};

/** Query para forçar atualização de SVG em cache após trocar arquivos em /public/assets */
export const assetsCacheQuery = "?v=6";

export const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Valores", href: "#valores" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export const benefits = [
  { label: "Atendimento em português", icon: "languages" },
  { label: "Tradução de documentos", icon: "file-text" },
  { label: "Assessoria no Japão", icon: "map-pin" },
  { label: "Agendamentos e suporte", icon: "calendar" },
  { label: "Pagamento via Pix", icon: "qr-code" },
  { label: "Atendimento online", icon: "globe" },
];

export const services = [
  {
    id: "trad-simples",
    icon: "doc",
    title: "Tradução de documentos simples",
    text: "Tradução de documentos do dia a dia, formulários, comprovantes, declarações, informações pessoais e outros materiais com menor complexidade.",
    extra:
      "Ideal para quem precisa compreender, apresentar ou enviar informações com clareza.",
    cta: "Saiba mais",
    variant: "light",
    href: "#contato",
  },
  {
    id: "trad-complexa",
    icon: "doc-plus",
    title: "Tradução de documentos complexos",
    text: "Tradução de documentos com maior nível de detalhe, termos técnicos, informações oficiais ou conteúdos que exigem mais atenção ao contexto.",
    extra:
      "O valor é calculado por página, considerando o tipo de documento e a complexidade da tradução.",
    cta: "Solicitar orçamento",
    variant: "primary",
    href: "#contato",
  },
  {
    id: "assessoria",
    icon: "users",
    title: "Assessoria para estrangeiros",
    text: "Apoio para pessoas que não falam japonês ou sentem dificuldade em resolver situações importantes no Japão.",
    extra:
      "Auxílio em contatos, orientações, preenchimento de informações e comunicação com empresas, serviços ou instituições.",
    cta: "Entender melhor",
    variant: "dark",
    href: "#contato",
  },
  {
    id: "agendamentos",
    icon: "calendar",
    title: "Agendamentos e consultas",
    text: "Ajuda para realizar agendamentos, confirmar informações, entrar em contato com estabelecimentos e organizar atendimentos.",
    extra:
      "Indicado para consultas, serviços locais, compromissos e situações em que a comunicação em japonês seja necessária.",
    cta: "Agendar suporte",
    variant: "light",
    href: "#contato",
  },
  {
    id: "contratacao",
    icon: "handshake",
    title: "Contratação de serviços no Japão",
    text: "Suporte para entender, solicitar ou contratar serviços japoneses com mais segurança.",
    extra:
      "Ajuda na comunicação, interpretação de informações, análise de instruções e acompanhamento do processo.",
    cta: "Preciso de ajuda",
    variant: "primary",
    href: "#contato",
  },
  {
    id: "midias",
    icon: "spark",
    title: "Suporte com mídias sociais",
    text: "Apoio na organização, criação e gestão de conteúdos para redes sociais, especialmente para pessoas ou pequenos negócios que precisam se comunicar melhor.",
    cta: "Ver possibilidades",
    variant: "dark",
    href: "#contato",
  },
];

export const situations = [
  {
    id: "doc",
    text: "Para quem recebeu um documento em japonês e precisa entender ou traduzir as informações, ofereço tradução por página, com cuidado no contexto e na finalidade do documento.",
    cta: "Solicitar tradução",
  },
  {
    id: "agend",
    text: "Para quem precisa marcar uma consulta, contratar um serviço ou entrar em contato com uma empresa japonesa, faço o suporte na comunicação e no processo de agendamento.",
    cta: "Pedir assessoria",
  },
  {
    id: "diario",
    text: "Para quem vive no Japão e precisa de ajuda em diferentes situações do dia a dia, ofereço suporte personalizado conforme a necessidade, sempre com atendimento em português.",
    cta: "Falar comigo",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Envio da solicitação",
    content:
      "Você entra em contato pelo WhatsApp, formulário ou e-mail explicando o que precisa: tradução, assessoria, agendamento ou outro tipo de suporte.",
  },
  {
    number: "02",
    title: "Análise da demanda",
    content:
      "A solicitação é analisada para entender o tipo de serviço, o nível de complexidade, o prazo e as informações necessárias para realizar o atendimento.",
  },
  {
    number: "03",
    title: "Orçamento",
    content:
      "Você recebe o valor do serviço, prazo estimado e orientações sobre o envio de documentos ou informações complementares.",
  },
  {
    number: "04",
    title: "Confirmação e pagamento",
    content:
      "Após a confirmação do orçamento, o pagamento pode ser realizado conforme as opções disponíveis, incluindo Pix quando aplicável.",
  },
  {
    number: "05",
    title: "Execução do serviço",
    content:
      "O serviço é realizado com atenção, sigilo e cuidado, seja na tradução do documento, no contato com terceiros ou no suporte solicitado.",
  },
  {
    number: "06",
    title: "Entrega e suporte final",
    content:
      "Você recebe a tradução, orientação ou confirmação do serviço realizado. Caso necessário, também pode tirar dúvidas sobre o material entregue.",
  },
];

/** Nota abaixo dos cards (#valores) — primeira parte antes do link do WhatsApp. */
export const pricingFootnoteLead =
  "*Após envio dos documentos, realize o pagamento e nos envie uma mensagem no ";
export const pricingFootnoteTail = " com comprovante";

export const pricing = [
  {
    title: "Documento simples",
    description:
      "Traduação por folha para documentos curtos, formulários e comprovantes de baixa complexidade.",
    price: "1,250円",
    priceSuffix: "por folha",
    features: [
      "Valor por página (documento simples)",
      "Análise do material enviado",
      "Entrega digital",
      "Atendimento em português",
    ],
    cta: "Enviar documentos",
    variant: "light",
    href: "#contato",
  },
  {
    title: "Documento extenso",
    description:
      "Para documentos com mais volume, termos técnicos, informações oficiais ou maior detalhe.",
    price: "1,500円",
    priceSuffix: "por folha",
    features: [
      "Valor por página (documento extenso)",
      "Leitura cuidadosa do contexto",
      "Combinar prazo e formato da entrega",
      "Orientação antes e depois do envio",
    ],
    cta: "Enviar documentos",
    variant: "primary",
    featured: true,
    href: "#contato",
  },
  {
    title: "Assessoria personalizada",
    description:
      "Agendamentos, contatos, contratação de serviços, suporte em japonês e demandas do dia a dia.",
    price: "Sob consulta",
    priceSuffix: "valor conforme demanda",
    features: [
      "Atendimento individual",
      "Suporte na comunicação em japonês",
      "Orientação em português",
      "Acompanhamento conforme a necessidade",
    ],
    cta: "Falar pelo WhatsApp",
    variant: "dark",
    href: contact.whatsappLink,
    external: true,
  },
];

export const testimonials = [
  {
    quote:
      "Precisei traduzir um documento com urgência e fui atendido com muita atenção. O processo foi simples, rápido e bem explicado.",
    author: "Cliente de tradução",
    role: "Atendimento de tradução",
  },
  {
    quote:
      "Eu não sabia como entrar em contato com um serviço japonês e recebi todo o suporte necessário para resolver a situação.",
    author: "Cliente de assessoria",
    role: "Atendimento de assessoria",
  },
  {
    quote:
      "O atendimento em português fez toda a diferença. Consegui entender melhor o que precisava fazer e me senti mais segura.",
    author: "Cliente no Japão",
    role: "Atendimento personalizado",
  },
];

export const serviceTypes = [
  "Tradução de documento simples",
  "Tradução de documento complexo",
  "Assessoria para estrangeiros",
  "Agendamento ou consulta",
  "Contratação de serviços no Japão",
  "Suporte com mídias sociais",
  "Outro",
];

export const footerColumns = {
  menu: navItems,
  services: [
    { label: "Tradução de documentos", href: "#servicos" },
    { label: "Assessoria para estrangeiros", href: "#servicos" },
    { label: "Agendamentos", href: "#servicos" },
    { label: "Contratação de serviços", href: "#servicos" },
    { label: "Suporte com mídias sociais", href: "#servicos" },
  ],
};
