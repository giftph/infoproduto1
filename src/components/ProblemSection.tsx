import { HelpCircle, Clock, Lightbulb, ListFilter, AlertCircle } from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem } from './FadeInUp';

export function ProblemSection() {
  const problems = [
    {
      number: "01",
      icon: Clock,
      title: "Você perde tempo tentando escrever o prompt certo.",
      description: "Abre o ChatGPT, digita várias vezes a mesma pergunta, reformula, mas ainda sente que está desperdiçando tempo em vez de acelerar o dia a dia."
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Precisa criar conteúdo, mas fica sem ideias.",
      description: "Fica diante da tela em branco sem saber o que postar, como estruturar roteiros ou como transformar seus conhecimentos em publicações consistentes."
    },
    {
      number: "03",
      icon: ListFilter,
      title: "Gasta tempo organizando tarefas e informações.",
      description: "Mensagens dispersas, reuniões longas e anotações soltas demandam horas preciosas apenas para sintetizar e colocar ordem na rotina."
    },
    {
      number: "04",
      icon: AlertCircle,
      title: "Recebe respostas da IA que não atendem ao que você precisava.",
      description: "Respostas genéricas, rasas ou que não condizem com a sua realidade profissional porque faltam diretrizes claras para a ferramenta."
    }
  ];

  return (
    <section className="py-16 md:py-24 border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <FadeInUp className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-violet-400 uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Desafios reais no uso da IA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white text-balance leading-snug">
            Você sabe que a IA pode ajudar. Mas por onde começar?
          </h2>
          <p className="mt-4 text-base text-slate-400">
            A maioria dos profissionais não precisa se tornar especialista técnico em inteligência artificial. O objetivo real é ter clareza para aplicar no trabalho cotidiano.
          </p>
        </FadeInUp>

        {/* 4 Cards Grid with Stagger */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" staggerDelay={0.08}>
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem
                key={item.number}
                className="p-6 rounded-2xl glass-panel glass-panel-hover relative overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-600/15 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-violet-400 font-semibold mb-1 block">
                      Cenário {item.number}
                    </span>
                    <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Concluding Message */}
        <FadeInUp delay={0.15}>
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-violet-950/40 via-[#0F1420] to-violet-950/40 border border-violet-500/20 text-center max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
              O <strong className="text-white font-semibold">IA na Prática</strong> foi pensado para transformar essas dúvidas em um processo simples, organizado e aplicável.
            </p>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              Sem jargões desnecessários, sem promessas mirabolantes: apenas um método prático para economizar tempo real.
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
