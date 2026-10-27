import { useState } from 'react';
import { X, ExternalLink, Settings, CheckCircle2, AlertTriangle } from 'lucide-react';
import { CHECKOUT_URL } from '../config';

interface CheckoutNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTestUrl?: (testUrl: string) => void;
}

export function CheckoutNoticeModal({ isOpen, onClose }: CheckoutNoticeModalProps) {
  const [tempUrl, setTempUrl] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleTestRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tempUrl.trim()) return;
    
    // Save to sessionStorage for active test session
    try {
      sessionStorage.setItem('CHECKOUT_TEST_URL', tempUrl.trim());
      setSavedSuccess(true);
      setTimeout(() => {
        window.open(tempUrl.trim(), '_blank', 'noopener,noreferrer');
        onClose();
      }, 1000);
    } catch {
      window.open(tempUrl.trim(), '_blank', 'noopener,noreferrer');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-checkout-title"
        className="w-full max-w-lg rounded-2xl bg-[#0C101A] border border-violet-500/30 p-6 sm:p-8 shadow-2xl relative"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
          aria-label="Fechar aviso"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
            <Settings className="w-5 h-5" />
          </div>
          <div>
            <h3 id="modal-checkout-title" className="text-lg font-bold text-white">
              Configuração do Link de Pagamento
            </h3>
            <p className="text-xs text-slate-400">
              Instruções para o administrador ou produtor
            </p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-300 leading-relaxed mb-6">
          <div className="p-3.5 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-200 text-xs flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 shrink-0 text-violet-400 mt-0.5" />
            <span>
              A plataforma de pagamento selecionada é a <strong>Cakto</strong>, mas o link do produto ainda não foi adicionado na constante <code className="font-mono text-white bg-black/40 px-1 py-0.5 rounded">CHECKOUT_URL</code>.
            </span>
          </div>

          <p className="text-xs text-slate-300">
            Para ativar a compra direta para seus clientes:
          </p>

          <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-300 pl-1 font-mono">
            <li>Acesse seu painel na <strong className="text-white">Cakto</strong> e copie o link de checkout do produto</li>
            <li>Abra o arquivo <code className="text-violet-400">src/config.ts</code></li>
            <li>Cole a URL em <code className="text-white">CHECKOUT_URL = "https://pay.cakto.com.br/..."</code></li>
          </ol>

          {/* Test Sandbox Input */}
          <form onSubmit={handleTestRedirect} className="pt-2">
            <label htmlFor="test-checkout-url" className="text-xs font-semibold text-slate-200 block mb-1.5">
              Deseja testar uma URL de pagamento agora?
            </label>
            <div className="flex gap-2">
              <input
                id="test-checkout-url"
                type="url"
                placeholder="https://pay.cakto.com.br/..."
                value={tempUrl}
                onChange={(e) => setTempUrl(e.target.value)}
                className="flex-1 px-3.5 py-2 bg-[#080B11] border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
              />
              <button
                type="submit"
                disabled={!tempUrl.trim()}
                className="px-4 py-2 bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors whitespace-nowrap"
              >
                <span>Testar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
            {savedSuccess && (
              <p className="mt-2 text-xs text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Redirecionando para o teste...</span>
              </p>
            )}
          </form>
        </div>

        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300 transition-colors"
          >
            Entendido, fechar aviso
          </button>
        </div>
      </div>
    </div>
  );
}
