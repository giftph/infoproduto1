import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { ClaroMethodSection } from './components/ClaroMethodSection';
import { IncludedItems } from './components/IncludedItems';
import { PromptExampleSection } from './components/PromptExampleSection';
import { PromptCategoriesSection } from './components/PromptCategoriesSection';
import { SevenDayChallengeSection } from './components/SevenDayChallengeSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { OfferSection } from './components/OfferSection';
import { FaqSection } from './components/FaqSection';
import { FinalDisclaimer } from './components/FinalDisclaimer';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { trackEvent } from './lib/analytics';
import { getCheckoutUrlWithUtms } from './config';

export default function App() {
  useEffect(() => {
    trackEvent('page_view', { page: 'landing_ia_na_pratica_2_mentelabs' });
  }, []);

  const handleOpenCheckout = () => {
    const targetUrl = getCheckoutUrlWithUtms();
    if (targetUrl && targetUrl !== '#') {
      window.location.href = targetUrl;
    } else {
      const offerElement = document.getElementById('oferta');
      if (offerElement) {
        offerElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#080B11] text-slate-100 flex flex-col font-sans selection:bg-violet-600 selection:text-white">
      {/* 1. Cabeçalho de Navegação */}
      <Header onCtaClick={handleOpenCheckout} />

      <main className="flex-1 overflow-hidden">
        {/* a) Hero Principal */}
        <Hero onCtaClick={handleOpenCheckout} />

        {/* b) Identificação do Problema */}
        <ProblemSection />

        {/* c) Antes e Depois (Exemplo Real do Guia) */}
        <BeforeAfterSection />

        {/* d) O Método CLARO (5 Passos) */}
        <ClaroMethodSection />

        {/* e) O que está incluso (4 Materiais com Capas Reais MenteLabs) */}
        <IncludedItems />

        {/* f) Exemplo de Prompt da Biblioteca */}
        <PromptExampleSection />

        {/* g) As 10 Categorias de Prompts em Chips */}
        <PromptCategoriesSection />

        {/* h) Desafio de 7 Dias (1 exercício/dia) */}
        <SevenDayChallengeSection />

        {/* i) Para quem é / Para quem não é */}
        <TargetAudienceSection />

        {/* j) Preço e Botão de Compra Final */}
        <OfferSection onCtaClick={handleOpenCheckout} />

        {/* k) Perguntas Frequentes (FAQ) */}
        <FaqSection />

        {/* l) Aviso Final Educativo */}
        <FinalDisclaimer />
      </main>

      {/* Rodapé e Transparência Legal */}
      <Footer />

      {/* Barra Fixa no Rodapé para Celular */}
      <StickyMobileBar />
    </div>
  );
}
