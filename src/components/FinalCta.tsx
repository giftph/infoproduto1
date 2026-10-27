import { ArrowRight, Sparkles } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import { CHECKOUT_URL } from '../config';
import { FadeInUp } from './FadeInUp';

interface FinalCtaProps {
  onCtaClick?: () => void;
}

export function FinalCta({ onCtaClick }: FinalCtaProps) {
  const handleFinalCta = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent('click_cta_final');
    if (!CHECKOUT_URL || CHECKOUT_URL.trim() === '') {
      e.preventDefault();
      onCtaClick?.();
    }
  };

  return (
    <section className="py-20 md:py-24 border-b border-white/5 relative overflow-hidden bg-gradient-to-b from-[#080B11] via-[#0D1220] to-[#080B11]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <FadeInUp duration={0.6}>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-violet-400 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pronto para dar o próximo passo?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-2xl mx-auto text-balance">
            Transforme conhecimento em aplicação prática.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed">
            Comece com modelos simples, aprenda a orientar melhor a IA e construa um método de trabalho que faça sentido para você.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CHECKOUT_URL || '#oferta'}
              target={CHECKOUT_URL ? '_blank' : undefined}
              rel={CHECKOUT_URL ? 'noopener noreferrer' : undefined}
              onClick={handleFinalCta}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm sm:text-base font-bold tracking-wide text-white bg-violet-600 hover:bg-violet-500 active:scale-[0.99] rounded-xl shadow-xl shadow-violet-600/25 transition-all focus-visible:outline-2 focus-visible:outline-violet-400 whitespace-nowrap text-center"
            >
              <span>QUERO ACESSAR O KIT</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
