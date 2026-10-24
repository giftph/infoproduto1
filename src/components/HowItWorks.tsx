import { ShoppingBag, KeyRound, PlayCircle } from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem } from './FadeInUp';

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Adquira o kit",
      description: "O visitante realiza a compra de forma segura por meio do checkout oficial configurado pela plataforma Kiwify.",
      icon: ShoppingBag,
    },
    {
      number: "02",
      title: "Acesse os materiais",
      description: "Após a confirmação do pagamento, você recebe os dados de acesso por e-mail conforme o processo de entrega definido.",
      icon: KeyRound,
    },
    {
      number: "03",
      title: "Coloque em prática",
      description: "Utiliza os modelos, personaliza os prompts para o seu nicho e adapta as ferramentas às suas necessidades de rotina.",
      icon: PlayCircle,
    }
  ];

  return (
    <section className="py-16 md:py-24 border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <FadeInUp className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider block mb-3">
            Fluxo Simples
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Comece em três etapas.
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Sem processos burocráticos ou configurações complexas.
          </p>
        </FadeInUp>

        {/* 3 Steps Grid with Stagger */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 relative" staggerDelay={0.1}>
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <StaggerItem
                key={step.number}
                className="p-6 sm:p-8 rounded-2xl glass-panel relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-extrabold font-mono text-violet-500/40">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-violet-600/15 border border-violet-500/20 flex items-center justify-center text-violet-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-400">
                  Etapa {idx + 1} de 3
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
