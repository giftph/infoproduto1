import { X, ShieldCheck } from 'lucide-react';
import { PRODUCT_CONFIG } from '../config';

export type LegalModalType = 'privacy' | 'terms' | 'refund' | null;

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

export function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  const contentMap = {
    privacy: {
      title: "Política de Privacidade",
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Respeitamos a sua privacidade. Esta página de apresentação foi construída com foco em segurança, transparência e sem a coleta desnecessária de dados pessoais.
          </p>
          <h4 className="text-sm font-semibold text-white">1. Coleta de Dados</h4>
          <p>
            Esta landing page não solicita nem armazena números de cartões de crédito, senhas ou dados bancários. Quaisquer transações financeiras e dados de pagamento são operados exclusivamente através da plataforma de checkout segura e homologada da Kiwify.
          </p>
          <h4 className="text-sm font-semibold text-white">2. Uso de Cookies e Métricas</h4>
          <p>
            Utilizamos apenas métricas técnicas essenciais para avaliar a navegação, taxa de conversão e funcionamento da ferramenta interativa de demonstração, sem identificar individualmente os visitantes.
          </p>
          <h4 className="text-sm font-semibold text-white">3. Contato</h4>
          <p>
            Em caso de dúvidas sobre privacidade, você poderá entrar em contato através do canal oficial de suporte indicado na página.
          </p>
        </div>
      )
    },
    terms: {
      title: "Termos de Uso",
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Ao acessar esta página e adquirir o kit {PRODUCT_CONFIG.name}, você concorda com as seguintes condições de uso:
          </p>
          <h4 className="text-sm font-semibold text-white">1. Natureza do Conteúdo</h4>
          <p>
            O kit é composto por materiais educacionais, guias e templates digitais com o objetivo de instruir sobre o uso de inteligência artificial em rotinas de trabalho. O produto não constitui consultoria financeira, jurídica ou promessa de faturamento.
          </p>
          <h4 className="text-sm font-semibold text-white">2. Propriedade Intelectual</h4>
          <p>
            Os arquivos, guias e estruturas disponibilizadas são para uso pessoal ou profissional do comprador, sendo vedada sua revenda não autorizada, compartilhamento em massa ou distribuição pirata.
          </p>
          <h4 className="text-sm font-semibold text-white">3. Responsabilidade no Uso de IA</h4>
          <p>
            As ferramentas de IA generativa (como ChatGPT, Claude e Gemini) são sistemas probabilísticos e podem gerar imprecisões ou alucinações. É dever exclusivo do usuário revisar, checar e validar todo conteúdo antes de utilizá-lo em suas atividades profissionais.
          </p>
        </div>
      )
    },
    refund: {
      title: "Política de Reembolso",
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <div className="p-3 rounded-xl bg-violet-600/15 border border-violet-500/25 flex items-center gap-3 text-violet-200">
            <ShieldCheck className="w-5 h-5 shrink-0 text-violet-400" />
            <span className="font-semibold text-xs sm:text-sm">Garantia Legal de {PRODUCT_CONFIG.guaranteeDays} Dias</span>
          </div>
          <p>
            Conforme estabelecido pelo artigo 49 do Código de Defesa do Consumidor brasileiro (CDC) e em conformidade com as diretrizes da Kiwify, você tem o direito de solicitar o cancelamento e reembolso integral do valor pago em até 7 (sete) dias corridos a partir da data de confirmação da compra.
          </p>
          <h4 className="text-sm font-semibold text-white">Como solicitar o reembolso:</h4>
          <p>
            Basta acessar o link de suporte da Kiwify enviado em seu e-mail de confirmação da compra ou acionar o suporte ao comprador dentro do prazo estipulado. O estorno será processado pelo mesmo meio de pagamento utilizado.
          </p>
        </div>
      )
    }
  };

  const selected = contentMap[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
        className="w-full max-w-lg rounded-2xl bg-[#0C101A] border border-white/10 p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 id="legal-modal-title" className="text-xl font-bold text-white mb-6">
          {selected.title}
        </h3>

        {selected.body}

        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-xs font-semibold text-white transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
