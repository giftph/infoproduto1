import { Layers } from 'lucide-react';

export function ClaroMethodSection() {
  const steps = [
    {
      letter: "C",
      name: "Contexto",
      phrase: "Explique quem você é, o que faz e o cenário específico da sua atividade.",
    },
    {
      letter: "L",
      name: "Limites",
      phrase: "Defina o que a IA não deve fazer, o tamanho do texto e as restrições.",
    },
    {
      letter: "A",
      name: "Ação",
      phrase: "Descreva com precisão a tarefa exata que você quer que ela execute.",
    },
    {
      letter: "R",
      name: "Resposta",
      phrase: "Especifique o formato da entrega, como tópicos, tabela, opções ou parágrafos.",
    },
    {
      letter: "O",
      name: "Objetivo",
      phrase: "Diga qual resultado final você quer alcançar com a mensagem ou tarefa.",
    },
  ];

  return (
    <section id="metodo-claro" className="py-16 sm:py-24 border-b border-white/5 relative bg-[#090D16]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-violet-400 uppercase tracking-wider mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Estrutura de 5 Passos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            O Método CLARO
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Uma fórmula simples e memorável para estruturar qualquer pedido de forma profissional.
          </p>
        </div>

        {/* 5 Cartões com 1 frase cada */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {steps.map((item) => (
            <div
              key={item.letter}
              className="p-5 rounded-2xl bg-[#0D121F] border border-white/10 hover:border-violet-500/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-xl font-extrabold font-mono text-violet-400 mb-4">
                  {item.letter}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.phrase}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-slate-500">
                Passo {item.letter}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
