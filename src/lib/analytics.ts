/**
 * Camada de eventos de conversão e telemetria transparente.
 * Preparada para Meta Pixel, Google Analytics (GA4) ou log local sem violar privacidade.
 */

export type ConversionEvent = 
  | 'page_view'
  | 'click_cta_hero'
  | 'click_cta_nav'
  | 'click_cta_offer'
  | 'click_cta_final'
  | 'prompt_generator_interact'
  | 'prompt_generator_copied'
  | 'checkout_initiated'
  | 'faq_expanded'
  | 'category_tab_switched';

export function trackEvent(eventName: ConversionEvent, payload?: Record<string, unknown>) {
  // Disparo para dataLayer (GTM / GA4) se presente no window
  if (typeof window !== 'undefined' && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
    (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
      event: eventName,
      ...payload,
      timestamp: new Date().toISOString(),
    });
  }

  // Disparo para fbq (Meta Pixel) se instalado
  if (typeof window !== 'undefined' && (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq) {
    if (eventName === 'checkout_initiated') {
      (window as unknown as { fbq: (...args: unknown[]) => void }).fbq('track', 'InitiateCheckout', payload);
    } else {
      (window as unknown as { fbq: (...args: unknown[]) => void }).fbq('trackCustom', eventName, payload);
    }
  }

  // Log discreto em ambiente de desenvolvimento para verificação do produtor
  if (import.meta.env.DEV) {
    console.debug(`[Analytics Track] ${eventName}:`, payload);
  }
}
