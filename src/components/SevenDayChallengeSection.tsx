import { Calendar, Clock, CheckCircle2 } from 'lucide-react';

export function SevenDayChallengeSection() {
  const days = [
    { day: "Dia 1", title: "Configurar sua rotina de IA", desc: "Aprenda a preparar seu espaço de trabalho e definir seus primeiros atalhos." },
    { day: "Dia 2", title: "Escrever prompts melhores", desc: "Aplique o método CLARO para transformar um pedido vago em instrução precisa." },
    { day: "Dia 3", title: "Organizar tarefas e prioridades", desc: "Monte sua lista de foco e planeje seu tempo com modelos prontos." },
    { day: "Dia 4", title: "Aprender mais rápido com IA", desc: "Use a IA para resumir conceitos complexos e tirar dúvidas com clareza." },
    { day: "Dia 5", title: "Produzir um material profissional", desc: "Crie uma proposta, e-mail importante ou conteúdo completo passo a passo." },
    { day: "Dia 6", title: "Melhorar um processo", desc: "Identifique uma tarefa repetitiva da sua rotina e simplifique sua execução." },
    { day: "Dia 7", title: "Montar seu sistema com IA", desc: "Consolide seus prompts favoritos em um caderno prático de uso diário." },
  ];

  return (
    <section className="py-16 sm:py-24 border-b border-white/5 relative bg-[#090D16]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-violet-400 uppercase tracking-wider mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>Aplicação Prática Guiada</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Desafio de 7 Dias
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2 text-sm text-slate-300">
            <Clock className="w-4 h-4 text-violet-400 shrink-0" />
            <span>1 exercício por dia · 30 a 45 minutos por dia</span>
          </div>
        </div>

        {/* Lista Dia 1 a Dia 7 */}
        <div className="space-y-3 max-w-2xl mx-auto">
          {days.map((item) => (
            <div
              key={item.day}
              className="p-4 sm:p-5 rounded-xl bg-[#0D121F] border border-white/10 hover:border-violet-500/30 transition-all flex items-start gap-4"
            >
              <div className="w-16 sm:w-20 px-2 py-1 rounded-lg bg-violet-600/15 border border-violet-500/20 text-center shrink-0">
                <span className="text-xs sm:text-sm font-mono font-bold text-violet-300">
                  {item.day}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <h3 className="text-sm sm:text-base font-bold text-white truncate">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
