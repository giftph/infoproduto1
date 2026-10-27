import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { InteractivePromptGenerator } from './components/InteractivePromptGenerator';
import { IncludedItems } from './components/IncludedItems';
import { HowItWorks } from './components/HowItWorks';
import { OfferSection } from './components/OfferSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { trackEvent } from './lib/analytics';

import { CHECKOUT_URL, PRODUCT_CONFIG } from './config';
import type { Variants } from 'framer-motion';

export default function App() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    trackEvent('page_view', { page: 'landing_ia_na_pratica_2' });
  }, []);

  const scrollToOffer = () => {
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCheckout = () => {
    trackEvent('checkout_initiated', { price: PRODUCT_CONFIG.launchPrice });
    if (CHECKOUT_URL && CHECKOUT_URL.trim() !== '') {
      window.location.href = CHECKOUT_URL.trim();
    } else {
      scrollToOffer();
    }
  };

  // Subtle fade-in-up variants for App sections
  const sectionFadeInUp: Variants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#080B11] text-slate-100 flex flex-col font-sans selection:bg-violet-600 selection:text-white">
      {/* 1. Header (Navigation) */}
      <Header onCtaClick={scrollToOffer} />

      <main className="flex-1 overflow-hidden">
        {/* 2. Hero Principal */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionFadeInUp}
        >
          <Hero onCtaClick={handleOpenCheckout} />
        </motion.div>

        {/* 3. Identificação do Problema */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionFadeInUp}
        >
          <ProblemSection />
        </motion.div>

        {/* 4. Apresentação da Solução */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionFadeInUp}
        >
          <SolutionSection />
        </motion.div>

        {/* 5. Demonstração Interativa ("Monte seu próprio prompt de IA") */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionFadeInUp}
        >
          <InteractivePromptGenerator />
        </motion.div>

        {/* 6. O Que Você Recebe */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionFadeInUp}
        >
          <IncludedItems />
        </motion.div>

        {/* 7. Como Funciona (3 Etapas) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionFadeInUp}
        >
          <HowItWorks />
        </motion.div>

        {/* 8. Oferta & Checkout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionFadeInUp}
        >
          <OfferSection />
        </motion.div>

        {/* 9. Perguntas Frequentes (FAQ) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionFadeInUp}
        >
          <FaqSection />
        </motion.div>

        {/* 10. Chamada Final */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionFadeInUp}
        >
          <FinalCta onCtaClick={handleOpenCheckout} />
        </motion.div>
      </main>

      {/* 11. Rodapé & Avisos Legais */}
      <Footer />
    </div>
  );
}
