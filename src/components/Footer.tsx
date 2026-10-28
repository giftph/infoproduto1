import { useState } from 'react';
import { Mail } from 'lucide-react';
import { PRODUCT_CONFIG, EMAIL_CONTATO, LINK_TERMOS, LINK_PRIVACIDADE } from '../config';
import { LegalModal, LegalModalType } from './LegalModal';

export function Footer() {
  const [legalModalType, setLegalModalType] = useState<LegalModalType>(null);

  const handleTermsClick = (e: React.MouseEvent) => {
    if (!LINK_TERMOS || LINK_TERMOS === '#' || LINK_TERMOS.startsWith('[')) {
      e.preventDefault();
      setLegalModalType('terms');
    }
  };

  const handlePrivacyClick = (e: React.MouseEvent) => {
    if (!LINK_PRIVACIDADE || LINK_PRIVACIDADE === '#' || LINK_PRIVACIDADE.startsWith('[')) {
      e.preventDefault();
      setLegalModalType('privacy');
    }
  };

  return (
    <footer className="bg-[#05070B] text-slate-400 py-12 text-xs border-t border-white/5 pb-24 sm:pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 pb-8 border-b border-white/5">
          {/* Marca MenteLabs */}
          <div className="sm:col-span-6 space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-500" />
              <span className="text-base font-bold text-white tracking-tight">
                {PRODUCT_CONFIG.name}
              </span>
              <span className="text-[11px] font-mono text-violet-400">
                por {PRODUCT_CONFIG.author}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Materiais digitais em PDF com o método CLARO e modelos prontos de prompts para usar no trabalho e na rotina.
            </p>
          </div>

          {/* Links Legais [LINK_TERMOS] [LINK_PRIVACIDADE] */}
          <div className="sm:col-span-3 space-y-2">
            <span className="font-semibold text-white uppercase tracking-wider block mb-2 text-[11px]">
              Transparência
            </span>
            <ul className="space-y-1.5">
              <li>
                <a
                  href={LINK_PRIVACIDADE}
                  onClick={handlePrivacyClick}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href={LINK_TERMOS}
                  onClick={handleTermsClick}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Termos de Uso
                </a>
              </li>
              {PRODUCT_CONFIG.guaranteeActive && (
                <li>
                  <button
                    type="button"
                    onClick={() => setLegalModalType('refund')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Garantia (7 dias CDC)
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* E-mail de Contato [EMAIL_CONTATO] */}
          <div className="sm:col-span-3 space-y-2">
            <span className="font-semibold text-white uppercase tracking-wider block mb-2 text-[11px]">
              Contato
            </span>
            <div className="flex items-center gap-2 text-slate-300">
              <Mail className="w-4 h-4 text-violet-400 shrink-0" />
              <a 
                href={`mailto:${EMAIL_CONTATO}`} 
                className="hover:text-white transition-colors font-mono text-[11px]"
              >
                {EMAIL_CONTATO}
              </a>
            </div>
            <p className="text-[11px] text-slate-500 leading-snug pt-1">
              Atendimento para dúvidas de acesso aos materiais digitais.
            </p>
          </div>
        </div>

        {/* Linha final de copyright e segurança */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <span>
            © {new Date().getFullYear()} {PRODUCT_CONFIG.author} — Todos os direitos reservados.
          </span>
          <span className="font-mono text-slate-400">
            Pagamento processado pela Cakto · Ambiente seguro
          </span>
        </div>
      </div>

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </footer>
  );
}
