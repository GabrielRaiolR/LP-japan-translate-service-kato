/**
 * Monta mailto com corpo legível para solicitações pelo site.
 * @param {{ name: string; email: string; serviceType: string; message: string }} form
 * @param {string} toEmail
 */
export function buildFormMailto(form, toEmail) {
  const subject = `[Kato Assessoria] ${form.serviceType || "Nova solicitação"}`;

  const body = `Olá,

Nova mensagem enviada pelo formulário do site:

━━━━━━━━━━━━━━━━━━━━
Nome: ${form.name || "(não informado)"}
E-mail para resposta: ${form.email || "(não informado)"}
Tipo de serviço: ${form.serviceType || "(não informado)"}

Mensagem:
${form.message || "(vazio)"}
━━━━━━━━━━━━━━━━━━━━

— Formulário automático · Kato Assessoria e Traduções`;

  return `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
