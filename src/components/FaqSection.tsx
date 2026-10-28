import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Como recebo o acesso?",
      answer: "Por e-mail e pela área de membros da Cakto imediatamente após a confirmação do pagamento."
    },
    {
      question: "Em que formato os materiais são entregues?",
      answer: "São arquivos em PDF, prontos para ler no celular ou computador. Os templates de produtividade são preenchíveis diretamente no leitor de PDF."
    },
    {
      question: "Preciso de conhecimento prévio para usar?",
      answer: "Não. O material foi desenvolvido especialmente para iniciantes, com explicações diretas e modelos prontos para copiar e preencher."
    },
    {
      question: "Funciona com qual ferramenta de IA?",
      answer: "Com assistentes de inteligência artificial como o ChatGPT. As ferramentas mudam com o tempo, então algumas telas e recursos podem variar."
    },
    {
      question: "A inteligência artificial acerta sempre?",
      answer: "Não. Ela pode errar. O kit ensina justamente como pedir melhor, definir limites claros e conferir as respostas antes de usar."
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
    <section id="perguntas-frequentes" className="py-16 sm:py-24 border-b border-white/5 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-violet-400 uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire suas Dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Respostas curtas e objetivas sobre o formato e a entrega do kit:
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/5 bg-[#0D121F] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 cursor-pointer"
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

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
