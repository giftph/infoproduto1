import { useState } from 'react';
import { PRODUCT_CONFIG } from '../config';
import { LegalModal, LegalModalType } from './LegalModal';
import { Mail, AlertCircle } from 'lucide-react';

export function Footer() {
  const [legalModalType, setLegalModalType] = useState<LegalModalType>(null);

  return (
    <footer className="bg-[#05070B] text-slate-400 py-12 md:py-16 text-xs border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/5">
          {/* Brand & info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-500" />
              <span className="text-base font-bold text-white tracking-tight">
                {PRODUCT_CONFIG.name}
              </span>
              <span className="text-[11px] font-mono text-violet-400">
                {PRODUCT_CONFIG.tagline}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Materiais digitais e modelos práticos para pequenos empreendedores, autônomos e profissionais que desejam economizar tempo e trabalhar melhor com inteligência artificial.
            </p>
          </div>

          {/* Legal and Support Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-semibold text-white uppercase tracking-wider block mb-2 text-[11px]">
              Transparência Legal
            </span>
            <ul className="space-y-1.5">
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModalType('privacy')}
                  className="hover:text-white transition-colors"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModalType('terms')}
                  className="hover:text-white transition-colors"
                >
                  Termos de Uso
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModalType('refund')}
                  className="hover:text-white transition-colors"
                >
                  Política de Reembolso (7 dias)
                </button>
              </li>
            </ul>
          </div>

          {/* Support Channel */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-semibold text-white uppercase tracking-wider block mb-2 text-[11px]">
              Canal de Suporte
            </span>
            <div className="flex items-center gap-2 text-slate-300">
              <Mail className="w-4 h-4 text-violet-400 shrink-0" />
              <span>{PRODUCT_CONFIG.supportContact}</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed pt-1">
              Atendimento para dúvidas de acesso aos materiais digitais.
            </p>
          </div>
        </div>

        {/* Mandatory Transparency & Disclaimers Strip */}
        <div className="pt-8 space-y-4">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3 text-slate-400">
            <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <p className="text-[11px] leading-relaxed">
              <strong>Aviso Importante:</strong> Os resultados obtidos dependem da dedicação, prática e aplicação individual de cada usuário. As ferramentas de inteligência artificial são auxiliares no trabalho humano e suas respostas devem ser sempre revisadas e validadas por um profissional antes do uso comercial. Não garantimos ganhos financeiros ou resultados automáticos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 pt-2">
            <span>
              © {new Date().getFullYear()} {PRODUCT_CONFIG.name}. Todos os direitos reservados.
            </span>
            <span className="font-mono text-slate-500">
              Checkout Seguro via Cakto · Pix & Cartão · SSL
            </span>
          </div>
        </div>
      </div>

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </footer>
  );
}
