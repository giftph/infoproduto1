/**
 * Camada de rastreamento de conversão e disparo de pixels de tráfego pago.
 * Otimizado para visitantes do TikTok Ads, Meta Ads (Instagram/Facebook) e Google.
 */

export type ConversionEvent = 
  | 'page_view'
  | 'click_cta_hero'
  | 'click_cta_nav'
  | 'click_cta_offer'
  | 'click_cta_final'
  | 'click_cta_sticky'
  | 'checkout_initiated'
  | 'prompt_copied'
  | 'prompt_generator_copied'
  | 'prompt_generator_interact'
  | 'category_tab_switched'
  | 'faq_expanded';

export function trackEvent(eventName: ConversionEvent, payload?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;

  const eventPayload = {
    content_name: 'IA na Prática 2.0',
    value: 29.90,
    currency: 'BRL',
    ...payload,
  };

  // =========================================================================
  // [PIXEL_META] — DISPARO DE EVENTO DE CLIQUE NO BOTÃO DE COMPRA
  // =========================================================================
  const winMeta = window as unknown as { fbq?: (...args: unknown[]) => void };
  if (typeof winMeta.fbq === 'function') {
    if (eventName === 'checkout_initiated' || eventName.startsWith('click_cta')) {
      // Disparo padrão InitiateCheckout no Meta Pixel ao clicar no botão de compra
      winMeta.fbq('track', 'InitiateCheckout', eventPayload);
    } else {
      winMeta.fbq('trackCustom', eventName, eventPayload);
    }
  }

  // =========================================================================
  // [PIXEL_TIKTOK] — DISPARO DE EVENTO DE CLIQUE NO BOTÃO DE COMPRA
  // =========================================================================
  const winTikTok = window as unknown as { ttq?: { track?: (...args: unknown[]) => void } };
  if (winTikTok.ttq && typeof winTikTok.ttq.track === 'function') {
    if (eventName === 'checkout_initiated' || eventName.startsWith('click_cta')) {
      // Disparo padrão InitiateCheckout no TikTok Pixel ao clicar no botão de compra
      winTikTok.ttq.track('InitiateCheckout', {
        content_name: 'IA na Prática 2.0',
        content_type: 'product',
        value: 29.90,
        currency: 'BRL',
      });
    } else {
      winTikTok.ttq.track('ClickButton', { button_name: eventName });
    }
  }

  // Google Analytics / GTM dataLayer
  const winDataLayer = window as unknown as { dataLayer?: unknown[] };
  if (Array.isArray(winDataLayer.dataLayer)) {
    winDataLayer.dataLayer.push({
      event: eventName,
      ...eventPayload,
      timestamp: new Date().toISOString(),
    });
  }

  if (import.meta.env.DEV) {
    console.debug(`[Event Tracked] ${eventName}:`, eventPayload);
  }
}
