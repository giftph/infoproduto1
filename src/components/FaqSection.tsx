import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackEvent } from '../lib/analytics';
import { FadeInUp, StaggerContainer, StaggerItem } from './FadeInUp';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Preciso ter experiência com inteligência artificial?",
      answer: "Não. O conteúdo é planejado para iniciantes, com exemplos práticos e modelos que podem ser personalizados facilmente mesmo por quem nunca usou o ChatGPT."
    },
    {
      question: "Preciso saber programar?",
      answer: "Não. O material ensina a utilizar instruções em linguagem natural (português) e ferramentas de forma prática, sem exigir nenhum conhecimento de programação ou código."
    },
    {
      question: "O kit funciona no celular?",
      answer: "Sim. Os materiais digitais foram preparados para consulta prática tanto em smartphones quanto em computadores. A compatibilidade de cada ferramenta de IA pode variar conforme o formato e o serviço utilizado."
    },
    {
      question: "Vou receber um curso em vídeo?",
      answer: "Não. O formato principal previsto é um conjunto organizado de materiais digitais, incluindo o guia explicativo, biblioteca de prompts e modelos editáveis de rotina. Não há promessa de aulas em vídeo gravadas nesta oferta."
    },
    {
      question: "A inteligência artificial garante respostas corretas?",
      answer: "Não. As respostas geradas por qualquer modelo de IA precisam ser revisadas e informações críticas devem ser verificadas antes do uso profissional. O kit ensina justamente como orientar e auditar as saídas geradas."
    },
    {
      question: "Como receberei o produto?",
      answer: "Após a aprovação do pagamento pela plataforma segura da Cakto, você receberá automaticamente um e-mail com as instruções completas de acesso e links para baixar os materiais digitais."
    },
    {
      question: "Quais são as formas de pagamento aceitas?",
      answer: "Você pode pagar via Pix com aprovação imediata ou cartão de crédito em até 12x, em ambiente 100% criptografado e seguro processado pela Cakto."
    },
    {
      question: "Como funciona o reembolso?",
      answer: "Você conta com a garantia legal de 7 dias prevista pelo Código de Defesa do Consumidor (CDC). Caso o material não atenda às suas expectativas dentro desse prazo, você poderá solicitar o reembolso integral com facilidade diretamente pelo suporte."
    }
  ];

  const toggleFaq = (index: number) => {
    const nextState = openIndex === index ? null : index;
    setOpenIndex(nextState);
    if (nextState !== null) {
      trackEvent('faq_expanded', { question: faqs[index].question });
    }
  };

  return (
    <section id="perguntas-frequentes" className="py-16 md:py-24 border-b border-white/5 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <FadeInUp className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-violet-400 uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire suas dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Respostas claras e objetivas sobre o formato, acesso e aplicação do kit.
          </p>
        </FadeInUp>

        {/* Accordion List with Stagger */}
        <StaggerContainer className="space-y-3" staggerDelay={0.06}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <StaggerItem
                key={idx}
                className="rounded-xl border border-white/5 bg-[#0A0E18] transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'transform rotate-180 text-violet-400' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
