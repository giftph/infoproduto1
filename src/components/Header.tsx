import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

interface HeaderProps {
  onCtaClick: () => void;
}

export function Header({ onCtaClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string, eventName?: string) => {
    setMobileMenuOpen(false);
    if (eventName) {
      trackEvent('click_cta_nav', { target: href });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#080B11]/85 border-b border-white/5 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-lg font-bold tracking-tight text-white hover:text-violet-300 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-violet-500 inline-block" />
          <span>IA na Prática</span>
          <span className="text-xs font-mono text-violet-400 font-medium">2.0</span>
        </a>

        {/* Zone 2: 3-4 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a 
            href="#o-que-voce-vai-aprender" 
            onClick={() => handleNavClick('#o-que-voce-vai-aprender')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            O que você vai aprender
          </a>
          <a 
            href="#o-que-esta-incluso" 
            onClick={() => handleNavClick('#o-que-esta-incluso')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            O que está incluso
          </a>
          <a 
            href="#perguntas-frequentes" 
            onClick={() => handleNavClick('#perguntas-frequentes')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Perguntas frequentes
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => {
              trackEvent('click_cta_nav');
              onCtaClick();
            }}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide text-white bg-violet-600 hover:bg-violet-500 rounded-lg shadow-sm shadow-violet-900/40 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-violet-400"
          >
            <span>Quero conhecer o kit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-md"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0F19] border-b border-white/10 px-4 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm text-slate-300">
            <a 
              href="#o-que-voce-vai-aprender" 
              onClick={() => handleNavClick('#o-que-voce-vai-aprender')}
              className="py-2 hover:text-white transition-colors border-b border-white/5"
            >
              O que você vai aprender
            </a>
            <a 
              href="#o-que-esta-incluso" 
              onClick={() => handleNavClick('#o-que-esta-incluso')}
              className="py-2 hover:text-white transition-colors border-b border-white/5"
            >
              O que está incluso
            </a>
            <a 
              href="#perguntas-frequentes" 
              onClick={() => handleNavClick('#perguntas-frequentes')}
              className="py-2 hover:text-white transition-colors border-b border-white/5"
            >
              Perguntas frequentes
            </a>
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                trackEvent('click_cta_nav');
                onCtaClick();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
            >
              <span>Quero conhecer o kit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
