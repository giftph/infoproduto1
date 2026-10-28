/**
 * CONFIGURAÇÃO CENTRAL — IA NA PRÁTICA 2.0 (MENTELABS)
 * 
 * Preencha ou altere as variáveis abaixo conforme necessário.
 */

// [LINK_CHECKOUT_CAKTO]
export const CHECKOUT_URL: string = "https://pay.cakto.com.br/btraxd4_1248176";

// [GARANTIA_7_DIAS = sim/não]
// Defina como "sim" se a garantia legal de 7 dias estiver ativa na Cakto, ou "não" para omitir.
export const GARANTIA_7_DIAS: "sim" | "não" = "sim";

// [EMAIL_CONTATO]
// E-mail de atendimento da MenteLabs exibido no rodapé e canais de apoio
export const EMAIL_CONTATO: string = "suporte@mentelabs.com.br"; // [EMAIL_CONTATO]

// [LINK_TERMOS] e [LINK_PRIVACIDADE]
// Se você possuir páginas externas, substitua os valores abaixo ou deixe como "#" para abrir o modal legal da página
export const LINK_TERMOS: string = "#"; // [LINK_TERMOS]
export const LINK_PRIVACIDADE: string = "#"; // [LINK_PRIVACIDADE]

export const PRODUCT_CONFIG = {
  name: "IA na Prática 2.0",
  tagline: "Kit de Produtividade com IA",
  author: "MenteLabs",
  price: "29,90",
  currency: "R$",
  paymentType: "Pagamento único",
  paymentProvider: "Cakto",
  guaranteeDays: 7,
  guaranteeActive: GARANTIA_7_DIAS === "sim",
};

/**
 * Helper para preservar parâmetros de rastreamento UTM (TikTok Ads, Meta Ads, Instagram, etc.)
 * ao redirecionar o usuário para o checkout da Cakto na mesma aba.
 */
export function getCheckoutUrlWithUtms(baseUrl: string = CHECKOUT_URL): string {
  if (!baseUrl || typeof window === 'undefined') {
    return baseUrl || '#';
  }

  try {
    const currentParams = new URLSearchParams(window.location.search);
    if (!currentParams.toString()) {
      return baseUrl;
    }

    const url = new URL(baseUrl);
    currentParams.forEach((value, key) => {
      // Mantém e repassa parâmetros como utm_source, utm_medium, utm_campaign, utm_content, src, etc.
      url.searchParams.set(key, value);
    });

    return url.toString();
  } catch {
    // Fallback caso a URL seja relativa ou mal formatada
    const search = window.location.search;
    if (!search) return baseUrl;
    const separator = baseUrl.includes('?') ? '&' : '?';
    return `${baseUrl}${separator}${search.replace(/^\?/, '')}`;
  }
}
