import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import { PRODUCT_CONFIG, getCheckoutUrlWithUtms } from '../config';

export function StickyMobileBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparece após rolar 400px (depois da primeira dobra do hero)
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    trackEvent('click_cta_sticky', { source: 'mobile_sticky_bar' });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#0A0D16]/95 backdrop-blur-md border-t border-violet-500/30 sm:hidden shadow-2xl animate-in slide-in-from-bottom duration-200">
      <a
        href={getCheckoutUrlWithUtms()}
        onClick={handleClick}
        className="w-full flex items-center justify-between px-5 py-3.5 bg-violet-600 active:bg-violet-700 text-white font-bold rounded-xl shadow-lg shadow-violet-900/50 text-sm focus-visible:outline-2 focus-visible:outline-violet-400"
      >
        <span className="flex items-center gap-1.5">
          <span>Quero o kit</span>
          <span className="text-violet-200 font-normal">·</span>
          <span className="font-mono text-xs">{PRODUCT_CONFIG.currency} {PRODUCT_CONFIG.price}</span>
        </span>
        <div className="flex items-center gap-1 text-xs">
          <span>Acessar</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </a>
    </div>
  );
}
