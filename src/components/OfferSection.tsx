import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { PRODUCT_CONFIG, getCheckoutUrlWithUtms } from '../config';
import { trackEvent } from '../lib/analytics';

interface OfferSectionProps {
  onCtaClick?: () => void;
}

export function OfferSection({ onCtaClick }: OfferSectionProps) {
  const handleCheckoutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent('checkout_initiated', { price: PRODUCT_CONFIG.price });
    const finalUrl = getCheckoutUrlWithUtms();
    if (!finalUrl || finalUrl === '#') {
      e.preventDefault();
      onCtaClick?.();
    }
  };

  return (
    <section id="oferta" className="py-16 sm:py-24 border-b border-white/5 relative overflow-hidden bg-[#090D16]">
      {/* Brilho radial discreto */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/15 via-transparent to-transparent opacity-70" 
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-[#101524] to-[#0A0D17] border border-violet-500/30 p-6 sm:p-10 shadow-2xl text-center">
          {/* Selo permitido */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-600/15 border border-violet-500/25 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>{PRODUCT_CONFIG.paymentType}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
            Tenha acesso completo ao kit hoje.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto mb-8">
            Os 4 materiais digitais em PDF entregues por e-mail e pela área da Cakto para ler e aplicar no seu ritmo.
          </p>

          {/* Box de Preço */}
          <div className="max-w-md mx-auto p-6 sm:p-7 rounded-2xl bg-[#080B11] border border-white/10 mb-6 text-center">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Valor
            </span>

            <div className="flex items-baseline justify-center gap-1 my-2">
              <span className="text-xl sm:text-2xl font-bold text-slate-300">
                {PRODUCT_CONFIG.currency}
              </span>
              <span className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight font-mono">
                {PRODUCT_CONFIG.price}
              </span>
            </div>

            <span className="text-xs text-slate-400 block mb-6">
              {PRODUCT_CONFIG.paymentType} · Sem assinaturas ou cobranças recorrentes
            </span>

            {/* Lista dos 4 materiais */}
            <div className="pt-5 border-t border-white/10 space-y-2.5 text-left text-xs sm:text-sm text-slate-300 mb-6">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-violet-400 shrink-0" />
                <span>Guia Prático de IA com Método CLARO (PDF)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-violet-400 shrink-0" />
                <span>Biblioteca com 100 Prompts Prontos (PDF)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-violet-400 shrink-0" />
                <span>Templates de Produtividade Preenchíveis (PDF editável)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-violet-400 shrink-0" />
                <span>Desafio de 7 Dias com 1 exercício diário (PDF)</span>
              </div>
            </div>

            {/* Botão de Compra Principal (mesma aba com UTMs) */}
            <a
              href={getCheckoutUrlWithUtms()}
              onClick={handleCheckoutClick}
              className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 text-base font-bold text-white bg-violet-600 hover:bg-violet-500 active:scale-[0.98] rounded-xl shadow-lg shadow-violet-600/30 transition-all focus-visible:outline-2 focus-visible:outline-violet-400 text-center"
            >
              <span>QUERO O KIT</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            {/* Texto de Apoio Obrigatório */}
            <p className="text-xs text-slate-400 mt-3.5">
              Pagamento processado pela Cakto. Formas de pagamento (Pix e Cartão) exibidas no checkout.
            </p>
          </div>

          {/* Garantia Condicional: só exibe se GARANTIA_7_DIAS === 'sim' */}
          {PRODUCT_CONFIG.guaranteeActive && (
            <div className="inline-flex items-center gap-2 text-xs text-slate-400 max-w-md mx-auto pt-2">
              <ShieldCheck className="w-4 h-4 text-violet-400 shrink-0" />
              <span>Garantia de 7 dias: solicite reembolso direto pelo suporte caso o material não atenda às suas expectativas.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
