import { Check, X } from 'lucide-react';

export function TargetAudienceSection() {
  const forWho = [
    "Iniciantes que querem começar a usar inteligência artificial sem complicação.",
    "Quem quer aprender a pedir melhor e ter modelos prontos para copiar e adaptar.",
    "Profissionais autônomos, freelancers e pequenos empreendedores que buscam economizar tempo em tarefas repetitivas.",
    "Quem prefere um material direto e prático em PDF para consultar no celular ou computador.",
  ];

  const notForWho = [
    "Quem espera promessa de dinheiro rápido, ganhos garantidos ou 'fórmulas mágicas'.",
    "Quem procura um curso técnico avançado de programação, desenvolvimento de código ou automações complexas em Python.",
    "Quem acredita que a inteligência artificial faz todo o trabalho sem necessidade de conferir as informações.",
  ];

  return (
    <section className="py-16 sm:py-24 border-b border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider block mb-2">
            Transparência e Alinhamento
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Para quem é e para quem não é
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Veja com clareza se o kit atende ao que você está procurando:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Card: É para */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0F1424] border border-emerald-500/25 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  Este kit é para você se:
                </h3>
              </div>

              <ul className="space-y-3.5">
                {forWho.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card: Não é para */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#130E14] border border-red-500/25 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/5">
                <div className="w-8 h-8 rounded-lg bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400">
                  <X className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  Não é para você se:
                </h3>
              </div>

              <ul className="space-y-3.5">
                {notForWho.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
