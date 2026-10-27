import { useState } from 'react';
import { ArrowRight, ShieldCheck, Mail, Sparkles, FileText, Check } from 'lucide-react';
import { CHECKOUT_URL, PRODUCT_CONFIG } from '../config';
import { trackEvent } from '../lib/analytics';
import { CheckoutNoticeModal } from './CheckoutNoticeModal';
import { FadeInUp } from './FadeInUp';

export function OfferSection() {
  const [showNoticeModal, setShowNoticeModal] = useState(false);

  const handleCheckoutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent('checkout_initiated', { price: PRODUCT_CONFIG.launchPrice });
    
    const testUrl = typeof window !== 'undefined' ? sessionStorage.getItem('CHECKOUT_TEST_URL') : null;
    const finalUrl = CHECKOUT_URL || testUrl;

    if (!finalUrl || finalUrl.trim() === '') {
      e.preventDefault();
      setShowNoticeModal(true);
    }
  };

  return (
    <section id="oferta" className="py-20 md:py-28 border-b border-white/5 relative overflow-hidden">
      {/* Background radial glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent opacity-80" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <FadeInUp duration={0.6}>
          <div className="rounded-3xl bg-gradient-to-b from-[#111728] via-[#0D1220] to-[#090D16] border border-violet-500/30 p-8 sm:p-12 shadow-2xl relative">
            {/* Top highlight label */}
            <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-violet-400 uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Condição de Lançamento</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Comece a utilizar a IA de forma mais prática.
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Tenha um conjunto organizado de orientações, prompts e modelos para aplicar no seu trabalho e na sua rotina.
              </p>
            </div>

            {/* Pricing Box - Honest, without fake discounts */}
            <div className="max-w-md mx-auto p-6 rounded-2xl bg-[#080B11]/90 border border-white/10 mb-8 text-center">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Valor de Lançamento
              </span>

              <div className="flex items-baseline justify-center gap-1.5 my-3">
                <span className="text-xl sm:text-2xl font-bold text-slate-300">
                  {PRODUCT_CONFIG.currency}
                </span>
                <span className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight font-mono">
                  {PRODUCT_CONFIG.launchPrice}
                </span>
              </div>

              <span className="text-xs text-slate-400 block">
                Pagamento único · Acesso aos materiais digitais inclusos
              </span>

              <div className="mt-6 pt-5 border-t border-white/10 space-y-2 text-left">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>Guia completo IA na Prática 2.0 (PDF)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>Biblioteca de mais de 50 prompts categorizados</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>Modelos editáveis de tarefas e propostas</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>Desafio de aplicação guiada de 7 dias</span>
                </div>
              </div>

              {/* Main Action Button */}
              <div className="mt-7">
                <a
                  href={CHECKOUT_URL || '#'}
                  target={CHECKOUT_URL ? '_blank' : undefined}
                  rel={CHECKOUT_URL ? 'noopener noreferrer' : undefined}
                  onClick={handleCheckoutClick}
                  className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 text-sm sm:text-base font-bold tracking-wide text-white bg-violet-600 hover:bg-violet-500 active:scale-[0.99] rounded-xl shadow-lg shadow-violet-600/30 transition-all focus-visible:outline-2 focus-visible:outline-violet-400 text-center"
                >
                  <span>QUERO MEU KIT IA NA PRÁTICA</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 mt-2.5 flex-wrap">
                  <span className="text-violet-400 font-medium">Checkout Seguro Cakto</span>
                  <span>·</span>
                  <span>Pix (Aprovação Imediata)</span>
                  <span>·</span>
                  <span>Cartão até 12x</span>
                </div>
              </div>
            </div>

            {/* Genuine Transparency Info Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Forma de acesso</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                    Instruções e arquivos enviados ao seu e-mail após aprovação.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Formato dos materiais</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                    Documentos digitais em PDF e planilhas leves para download.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Garantia legal de 7 dias</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                    Reembolso integral conforme o Código de Defesa do Consumidor.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Canal de suporte</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                    Atendimento por e-mail para eventuais dúvidas de acesso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>

      <CheckoutNoticeModal
        isOpen={showNoticeModal}
        onClose={() => setShowNoticeModal(false)}
      />
    </section>
  );
}
