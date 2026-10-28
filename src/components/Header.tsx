import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import { getCheckoutUrlWithUtms } from '../config';

interface HeaderProps {
  onCtaClick?: () => void;
}

export function Header({ onCtaClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBuyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent('click_cta_nav');
    // Navega para o checkout preservando UTMs na mesma aba
    const checkoutUrl = getCheckoutUrlWithUtms();
    if (!checkoutUrl || checkoutUrl === '#') {
      e.preventDefault();
      onCtaClick?.();
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#080B11]/90 border-b border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo Textual */}
        <a 
          href="#" 
          className="flex items-center gap-2 group text-white focus-visible:outline-2 focus-visible:outline-violet-400 rounded-lg p-1"
          aria-label="IA na Prática 2.0 por MenteLabs"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-violet-500 shadow-sm shadow-violet-500/50" />
          <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-violet-300 transition-colors">
            IA na Prática
          </span>
          <span className="text-xs font-mono text-violet-400 font-semibold px-1.5 py-0.5 rounded bg-violet-500/10 border border-violet-500/20">
            2.0
          </span>
        </a>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-7 text-xs text-slate-300">
          <button 
            type="button"
            onClick={() => handleNavClick('metodo-claro')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Método CLARO
          </button>
          <button 
            type="button"
            onClick={() => handleNavClick('o-que-esta-incluso')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            O que está incluso
          </button>
          <button 
            type="button"
            onClick={() => handleNavClick('perguntas-frequentes')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Perguntas frequentes
          </button>
        </nav>

        {/* Ação Principal */}
        <div className="flex items-center gap-2">
          <a
            href={getCheckoutUrlWithUtms()}
            onClick={handleBuyClick}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 active:scale-[0.98] rounded-lg shadow-sm shadow-violet-900/40 transition-all focus-visible:outline-2 focus-visible:outline-violet-400"
          >
            <span>Quero o kit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Botão Mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg focus-visible:outline-2 focus-visible:outline-violet-400"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Drawer Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0E18] border-b border-white/10 px-5 py-4 space-y-3 animate-in fade-in duration-150">
          <nav className="flex flex-col space-y-2 text-sm text-slate-300">
            <button 
              type="button"
              onClick={() => handleNavClick('metodo-claro')}
              className="py-2 text-left hover:text-white transition-colors border-b border-white/5"
            >
              Método CLARO
            </button>
            <button 
              type="button"
              onClick={() => handleNavClick('o-que-esta-incluso')}
              className="py-2 text-left hover:text-white transition-colors border-b border-white/5"
            >
              O que está incluso
            </button>
            <button 
              type="button"
              onClick={() => handleNavClick('perguntas-frequentes')}
              className="py-2 text-left hover:text-white transition-colors"
            >
              Perguntas frequentes
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
