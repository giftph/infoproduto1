/**
 * CONFIGURAÇÃO CENTRAL DO PRODUTO & CHECKOUT CAKTO
 * 
 * Insira o link do seu checkout da Cakto na constante CHECKOUT_URL abaixo.
 * Exemplo: "https://pay.cakto.com.br/SEU_CODIGO"
 */

export const CHECKOUT_URL: string = "https://pay.cakto.com.br/btraxd4_1248176";

// Aliases para facilidade de configuração
export const CAKTO_CHECKOUT_URL = CHECKOUT_URL;
export const KIWIFY_CHECKOUT_URL = CHECKOUT_URL;

export const PRODUCT_CONFIG = {
  name: "IA na Prática 2.0",
  tagline: "Kit de Produtividade com Inteligência Artificial",
  launchPrice: "29,90",
  currency: "R$",
  paymentType: "pagamento único",
  guaranteeDays: 7,
  format: "Materiais digitais (PDF de alta resolução, templates editáveis e planilhas)",
  accessType: "Acesso imediato enviado por e-mail após a confirmação do pagamento",
  supportContact: "suporte@ianapratica.com.br",
  paymentProviderName: "Cakto", // Plataforma oficial de pagamentos
};

