import { CheckCircle2, ArrowRight, BookOpen, Sparkles, Layers } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { trackEvent } from '../lib/analytics';
import { FadeInUp } from './FadeInUp';

interface HeroProps {
  onCtaClick: () => void;
}

export function Hero({ onCtaClick }: HeroProps) {
  const handleIncludedClick = () => {
    trackEvent('click_cta_hero', { action: 'view_included' });
    const section = document.getElementById('o-que-esta-incluso');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 border-b border-white/5">
      {/* Background ambient light */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-violet-600/15 via-violet-900/5 to-transparent blur-3xl opacity-70" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-violet-400 tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <span>Kit Digital de Produtividade</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">Versão 2.0</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.12] mb-6 max-w-2xl text-balance">
              Use a inteligência artificial para trabalhar com mais eficiência.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-8">
              Aprenda a usar o ChatGPT com modelos práticos, prompts personalizáveis e ferramentas que ajudam a organizar tarefas, criar conteúdo e simplificar seu trabalho.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                type="button"
                onClick={() => {
                  trackEvent('click_cta_hero', { action: 'access_kit' });
                  onCtaClick();
                }}
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm font-bold tracking-wide text-white bg-violet-600 hover:bg-violet-500 active:scale-[0.99] rounded-xl shadow-lg shadow-violet-600/25 transition-all focus-visible:outline-2 focus-visible:outline-violet-400 whitespace-nowrap"
              >
                <span>QUERO ACESSAR O KIT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleIncludedClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-slate-400 whitespace-nowrap"
              >
                <span>VER O QUE ESTÁ INCLUSO</span>
              </button>
            </div>

            {/* 3 Short Benefits */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">
                  Aplicação prática no dia a dia
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">
                  Modelos prontos para personalizar
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">
                  Conteúdo para iniciantes
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Mockups Composition */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Back Card: Productivity Bundle Preview */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0F1420] shadow-2xl transition-transform hover:scale-[1.01]">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                  <img
                    src="/src/assets/images/ebook_cover_ia_pratica_1792812590552.jpg"
                    alt="Capa do E-book Guia IA na Prática 2.0"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  {/* Subtle gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1420] via-transparent to-transparent opacity-80" />
                </div>

                {/* Micro preview strip at the bottom of the card */}
                <div className="p-4 bg-[#0F1420] border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-300">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Guia IA na Prática 2.0</p>
                      <p className="text-[11px] text-slate-400">PDF + Biblioteca de Prompts</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono text-violet-400">Pronto p/ usar</span>
                  </div>
                </div>
              </div>

              {/* Floating Mini Mockup Badge: Library Snapshot */}
              <div className="hidden sm:block absolute -bottom-5 -left-6 max-w-xs p-3.5 rounded-xl glass-panel shadow-xl border border-white/15 backdrop-blur-md">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-md bg-violet-600/30 flex items-center justify-center text-violet-300">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-white">Biblioteca de Prompts</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  Modelos de planejamento, criação de conteúdo e mensagens profissionais prontos para copiar e adaptar.
                </p>
              </div>

              {/* Floating Mini Mockup Badge: Tasks & Productivity */}
              <div className="hidden sm:block absolute -top-4 -right-4 p-3 rounded-xl glass-panel shadow-lg border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
                  <Layers className="w-3.5 h-3.5 text-violet-400" />
                  <span>Modelos Editáveis Inclusos</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
