/**
 * CONFIGURAÇÃO CENTRAL DO PRODUTO & CHECKOUT KIWIFY
 * 
 * Para ativar o checkout real da Kiwify:
 * 1. Cole a URL do seu produto na Kiwify na constante KIWIFY_CHECKOUT_URL abaixo.
 *    Exemplo: "https://pay.kiwify.com.br/AbCdEfG"
 * 2. Se a constante estiver vazia (""), a página exibirá um aviso explicativo 
 *    e um modal para testar a experiência com segurança sem quebrar o link.
 */

export const KIWIFY_CHECKOUT_URL: string = "";

export const PRODUCT_CONFIG = {
  name: "IA na Prática 2.0",
  tagline: "Kit de Produtividade com Inteligência Artificial",
  launchPrice: "29,90",
  currency: "R$",
  paymentType: "pagamento único",
  guaranteeDays: 7,
  format: "Materiais digitais (PDF de alta resolução, templates editáveis e planilhas)",
  accessType: "Acesso imediato enviado por e-mail após a confirmação do pagamento",
  supportContact: "suporte@ianapratica.com.br", // Atualize com o canal oficial quando disponível
};
