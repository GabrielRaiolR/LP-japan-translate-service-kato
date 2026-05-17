// ===============================================================
// Dados centralizados da landing page
// ===============================================================

export const brand = {
  name: "Kato Assessoria e Traduções",
  short: "Kato Assessoria",
  tagline: "Apoio documental para brasileiros no Japão.",
  footerLogo: "/assets/Footer-Logo.svg",
  logoHeader: "/assets/Logo-header-positivus.svg",
};

export const contact = {
  whatsapp: "+81 70 9132-0458",
  whatsappLink: "https://wa.me/817091320458",
  email: "gabrielakato2203@gmail.com",
  instagram: "https://instagram.com/katoassessoria",
  pixCode:
    "00020126580014BR.GOV.BCB.PIX0136ef291161-ef32-4333-8854-c9b19e00c8c75204000053039865802BR5924Gabriela Kato das Chagas6009SAO PAULO62140510NVoUJuOGcG630459D0",
  pixQr: "/assets/qrcode-pix.svg",
};

export const assetsCacheQuery = "?v=7";

export const navItems = [
  { label: "Serviços e valores", href: "#valores" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Contato", href: "#contato" },
  { label: "Depoimentos", href: "#depoimentos" },
];

export const hero = {
  title: "Apoio documental para brasileiros no Japão",
  subtitle:
    "Vistos, elegibilidade, traduções e documentos oficiais — com atendimento em português.",
  trustLine:
    "Organizamos sua papelada. Os processos oficiais são feitos por você, presencialmente.",
  primaryCta: { label: "Ver serviços e valores", href: "#valores" },
  secondaryCta: { label: "Falar comigo", href: "#contato" },
};

export const benefits = [
  { label: "Atendimento em português", icon: "languages" },
  { label: "Vistos e elegibilidade", icon: "calendar" },
  { label: "Tradução de documentos", icon: "file-text" },
  { label: "Apoio documental", icon: "map-pin" },
  { label: "Pagamento via Pix", icon: "qr-code" },
  { label: "Atendimento online", icon: "globe" },
];

export const servicesDisclaimer =
  "Os serviços oferecidos consistem em apoio documental, organização e tradução. Os processos oficiais devem ser realizados presencialmente pelo próprio solicitante junto ao órgão competente. Este atendimento não constitui representação legal.";

export const serviceCatalog = [
  {
    id: "vistos",
    title: " Assessoria para vistos",
    items: [
      {
        id: "renovacao-visto",
        title: "Renovação de visto",
        description:
          "Assistência documental para renovação de visto de residência.",
        price: "¥30,000",
        priceNote: null,
        disclaimers: [
          "Selo à parte: ¥6,000",
          "Taxas consulares e oficiais não inclusas",
          "Atendimento não inclui representação legal",
        ],
        documents: [],
      },
      {
        id: "visto-permanente",
        title: "Visto permanente",
        description:
          "Auxílio na organização da documentação necessária para o pedido.",
        price: "¥60,000",
        priceNote: null,
        disclaimers: [
          "Selo à parte: ¥10,000",
          "Atendimento não inclui representação legal",
        ],
        documents: [],
      },
    ],
  },
  {
    id: "elegibilidade",
    title: "Elegibilidade",
    items: [
      {
        id: "elegibilidade-familia",
        title:
          "Certificado de elegibilidade — Família (marido, esposa, filho, filha)",
        description: "Esposa, marido, pais e filhos.",
        price: "¥50,000",
        priceNote: null,
        disclaimers: [
          "Taxa de henshin futou (aprox. ¥460) paga à parte, quando aplicável",
        ],
        documents: [],
      },
      {
        id: "elegibilidade-yonsei",
        title: "Certificado de elegibilidade — Yonsei",
        description:
          "Auxílio documental para filho de quarta geração (yonsei).",
        price: "¥60,000",
        priceNote: null,
        disclaimers: [],
        documents: [],
      },
      {
        id: "elegibilidade-questionario",
        title: "Questionário",
        description: "Preenchimento do questionário em português e japonês.",
        price: "¥15,000",
        priceNote: null,
        disclaimers: [],
        documents: [],
      },
    ],
  },
  {
    id: "traducoes",
    title: "Traduções",
    items: [
      {
        id: "traducao-documentos",
        title: "Tradução de documentos",
        description:
          "Nascimento, casamento, óbito, antecedentes criminais e outros.",
        price: "¥2,000",
        priceNote: "A partir de",
        disclaimers: ["Valor conforme tipo e extensão do documento"],
        documents: [],
      },
      {
        id: "traducao-jaf",
        title: "Tradução JAF",
        description: "Tradução para fins de habilitação na JAF.",
        price: "¥2,000",
        priceNote: null,
        disclaimers: [
          "Custos externos da JAF (aprox. ¥6,000) e impressão (¥40) não inclusos",
        ],
        documents: [],
      },
    ],
  },
  {
    id: "documentos-japoneses",
    title: "Passaporte",
    items: [
      {
        id: "koseki-tohon",
        title: "Pedido de Koseki Tohon",
        description:
          "Auxílio na solicitação do registro familiar (koseki tohon).",
        price: "¥5,000",
        priceNote: null,
        disclaimers: [],
        documents: [],
      },
      {
        id: "passaporte",
        title: "Renovação de passaporte",
        description:
          "Organização documental para renovação junto ao consulado.",
        price: "¥13,000",
        priceNote: null,
        disclaimers: [
          "Taxa consular (aprox. ¥21.600), taxa adicional e envio (letter pack) não inclusos — total oficial aprox. ¥23.300",
        ],
        documents: [],
      },
      {
        id: "reentry",
        title: "Formulário: Reentry Permit",
        description:
          "Auxílio no preenchimento do formulário de permissão de reentrada.",
        price: "¥10,000",
        priceNote: null,
        disclaimers: ["Selo à parte: ¥4,000"],
        documents: [],
      },
    ],
  },
];

/** Gera link do WhatsApp com serviço mencionado na mensagem inicial */
export function getServiceContactHref(serviceTitle) {
  return getWhatsappHref(`Olá! Gostaria de informações sobre: ${serviceTitle}`);
}

/** Gera link do WhatsApp com mensagem inicial */
export function getWhatsappHref(message) {
  if (!message) return contact.whatsappLink;
  return `${contact.whatsappLink}?text=${encodeURIComponent(message)}`;
}

export const situations = [
  {
    id: "visto",
    text: "Renovação de visto e visto permanente — organização da documentação em português.",
    cta: "Ver vistos",
    href: "#valores",
  },
  {
    id: "elegibilidade",
    text: "Certificado de elegibilidade e questionário — apoio documental passo a passo.",
    cta: "Ver elegibilidade",
    href: "#valores",
  },
  {
    id: "traducoes-documentos",
    text: "Tradução de certidões, koseki tohon, passaporte e reentry.",
    cta: "Ver serviços",
    href: "#valores",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Envio da solicitação",
    content:
      "Entre em contato pelo WhatsApp informando o serviço desejado (por exemplo: renovação de visto, certificado de elegibilidade ou tradução de documento).",
  },
  {
    number: "02",
    title: "Análise da demanda",
    content:
      "Analiso sua situação, confirmo o serviço adequado e informo quais documentos você precisa enviar.",
  },
  {
    number: "03",
    title: "Orçamento",
    content:
      "Para serviços com valor divulgado no site, o preço já está definido. Selos, taxas consulares e custos oficiais são pagos à parte, conforme cada processo.",
  },
  {
    number: "04",
    title: "Confirmação e pagamento",
    content:
      "Após a confirmação, o pagamento pode ser feito via Pix ou conforme combinado. Envie o comprovante pelo WhatsApp.",
  },
  {
    number: "05",
    title: "Execução do serviço",
    content:
      "Realizo a organização documental, tradução ou preenchimento combinado, com sigilo e cuidado em cada etapa.",
  },
  {
    number: "06",
    title: "Entrega e suporte final",
    content:
      "Você recebe os materiais ou orientações acordados. Se faltar algum documento, indico o que ainda precisa ser enviado.",
  },
];

export const pricingFootnoteLead =
  "*Após envio dos documentos, realize o pagamento e envie o comprovante pelo ";
export const pricingFootnoteTail = ".";

export const testimonials = [
  {
    quote:
      "Precisava renovar o visto e não sabia por onde começar. Fui orientada sobre os documentos e o processo ficou muito mais claro.",
    author: "Cliente de renovação de visto",
    role: "Apoio documental",
  },
  {
    quote:
      "O certificado de elegibilidade exigia muitos papéis. Com o apoio em português, consegui organizar tudo sem ficar perdida.",
    author: "Cliente de elegibilidade",
    role: "Organização documental",
  },
  {
    quote:
      "Traduzi certidões para o processo no Japão. Atendimento atencioso, prazo combinado e explicação em português o tempo todo.",
    author: "Cliente de tradução",
    role: "Tradução de documentos",
  },
];

export const serviceTypes = [
  ...serviceCatalog.flatMap((cat) => cat.items.map((item) => item.title)),
  "Outro",
];

export const footerColumns = {
  menu: navItems,
  services: [
    { label: "Apoio para vistos", href: "#valores" },
    { label: "Elegibilidade", href: "#valores" },
    { label: "Traduções", href: "#valores" },
    { label: "Documentos japoneses", href: "#valores" },
  ],
};
