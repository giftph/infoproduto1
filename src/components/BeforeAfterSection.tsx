import { XCircle, CheckCircle2 } from 'lucide-react';

export function BeforeAfterSection() {
  return (
    <section className="py-16 sm:py-20 border-b border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider block mb-2">
            Exemplo Real do Guia
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            A diferença entre pedir no improviso e pedir com método
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Compare o mesmo objetivo escrito de forma vaga e estruturado com o método CLARO:
          </p>
        </div>

        {/* Bloco Visual Lado a Lado (sem resposta de IA inventada) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Lado 1: Pedido Fraco */}
          <div className="p-6 rounded-2xl bg-[#0F131D] border border-red-500/20 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                <span className="text-xs font-bold text-red-300 uppercase tracking-wider">
                  Pedido Fraco (Sem Estrutura)
                </span>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-sm text-slate-300 mb-4 leading-relaxed">
                “Crie um post para a minha padaria.”
              </div>

              <div className="space-y-2 text-xs text-slate-400">
                <p>• Não diz qual é o tipo de padaria nem qual é o produto.</p>
                <p>• Não define o tamanho nem o tom de voz da mensagem.</p>
                <p>• O resultado costuma vir genérico, clichê e longo demais.</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-slate-500 font-mono">
              Resultado: você perde tempo reescrevendo do zero.
            </div>
          </div>

          {/* Lado 2: Pedido com o Método CLARO */}
          <div className="p-6 rounded-2xl bg-[#0F1424] border border-violet-500/30 relative flex flex-col justify-between shadow-lg shadow-violet-950/30">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-violet-300 uppercase tracking-wider">
                  Pedido com o Método CLARO
                </span>
              </div>

              {/* Bloco com os 5 elementos CLARO destacados */}
              <div className="p-4 rounded-xl bg-black/50 border border-violet-500/20 font-mono text-xs sm:text-sm text-slate-200 mb-4 space-y-2.5 leading-relaxed">
                <p>
                  <strong className="text-violet-400 font-bold">[Contexto]</strong> Padaria artesanal de bairro lançando um pão integral com castanhas.
                </p>
                <p>
                  <strong className="text-violet-400 font-bold">[Limites]</strong> No máximo 80 palavras, tom acolhedor, sem exageros.
                </p>
                <p>
                  <strong className="text-violet-400 font-bold">[Ação]</strong> Escreva uma legenda de Instagram.
                </p>
                <p>
                  <strong className="text-violet-400 font-bold">[Resposta]</strong> Entregue 3 opções com chamada para ação.
                </p>
                <p>
                  <strong className="text-violet-400 font-bold">[Objetivo]</strong> Fazer as pessoas virem à loja experimentar na segunda-feira.
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300">
                <p className="text-emerald-400 font-medium">✓ A IA sabe exatamente quem fala, o que fazer e onde parar.</p>
                <p className="text-slate-400">• Você recebe 3 opções prontas para publicar em menos de 10 segundos.</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-violet-500/10 text-[11px] text-violet-300 font-mono">
              Resultado: economia real de tempo e mensagem alinhada.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
