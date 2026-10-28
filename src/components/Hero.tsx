import { CheckCircle2, ArrowRight } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import { PRODUCT_CONFIG, getCheckoutUrlWithUtms } from '../config';
import bundleCoverImg from '../assets/images/bundle_mentelabs_covers_1793150916092.jpg';

interface HeroProps {
  onCtaClick?: () => void;
}

export function Hero({ onCtaClick }: HeroProps) {
  const handleScrollToIncluded = () => {
    trackEvent('click_cta_hero', { action: 'scroll_to_included' });
    const section = document.getElementById('o-que-esta-incluso');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroBuy = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent('click_cta_hero', { action: 'buy_checkout' });
    const finalUrl = getCheckoutUrlWithUtms();
    if (!finalUrl || finalUrl === '#') {
      e.preventDefault();
      onCtaClick?.();
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-white/5">
      {/* Luz ambiente sutil de fundo */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-gradient-to-b from-violet-600/15 via-violet-900/5 to-transparent blur-3xl opacity-70" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Coluna de Texto e Ações */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Tag de identificação */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-violet-400 tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <span>Por {PRODUCT_CONFIG.author}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">Material em PDF</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-5 text-balance">
              Use a inteligência artificial para simplificar sua rotina e produzir com clareza.
            </h1>

            {/* Subtítulo de 1 linha */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              Aprenda a pedir melhor com o método CLARO e tenha 100 modelos prontos de prompts e templates em PDF para usar no celular ou computador.
            </p>

            {/* Bloco de Ação + Preço R$ 29,90 ao lado */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <a
                href={getCheckoutUrlWithUtms()}
                onClick={handleHeroBuy}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-bold text-white bg-violet-600 hover:bg-violet-500 active:scale-[0.98] rounded-xl shadow-lg shadow-violet-600/30 transition-all focus-visible:outline-2 focus-visible:outline-violet-400 text-center"
              >
                <span>QUERO O KIT</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Preço ao lado do botão */}
              <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 w-full sm:w-auto justify-center sm:justify-start">
                <span className="text-xs text-slate-400">Por apenas</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-semibold text-slate-300">{PRODUCT_CONFIG.currency}</span>
                  <span className="text-xl font-extrabold text-white font-mono">{PRODUCT_CONFIG.price}</span>
                </div>
                <span className="text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                  {PRODUCT_CONFIG.paymentType}
                </span>
              </div>
            </div>

            {/* Botão Secundário: Ver o que está incluso */}
            <div className="mb-8">
              <button
                type="button"
                onClick={handleScrollToIncluded}
                className="text-xs sm:text-sm font-medium text-slate-400 hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
              >
                Ver o que está incluso no kit ↓
              </button>
            </div>

            {/* 3 Pontos Curtos */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">
                  Para iniciantes
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">
                  100 modelos prontos
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">
                  PDF no celular ou PC
                </span>
              </div>
            </div>
          </div>

          {/* Coluna Visual: Capas Reais MenteLabs */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0F1420] shadow-2xl">
                <img
                  src={bundleCoverImg}
                  alt="Coleção de 4 materiais digitais em PDF IA na Prática 2.0 por MenteLabs"
                  className="w-full h-auto object-cover object-center"
                  loading="eager"
                  width={600}
                  height={450}
                />
                {/* Legenda simples e real */}
                <div className="p-3 bg-[#0B0F19] border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-medium text-white">4 Materiais em PDF</span>
                  <span className="font-mono text-violet-400">Entrega digital</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
