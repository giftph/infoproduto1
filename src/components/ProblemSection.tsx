import { AlertCircle, ArrowDown } from 'lucide-react';

export function ProblemSection() {
  return (
    <section className="py-14 sm:py-20 border-b border-white/5 relative bg-[#090D16]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge do problema */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-5">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>O que acontece na prática</span>
        </div>

        {/* Título obrigatório da seção */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
          Sua IA só dá resposta genérica? Muitas vezes o problema não é a ferramenta. É o pedido.
        </h2>

        {/* Texto explicativo conciso */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
          Quando você digita uma frase solta no ChatGPT, ele tenta adivinhar o que você quer e devolve um texto sem graça, artificial ou longo demais. Para ter respostas úteis, você precisa dar as orientações certas na ordem certa.
        </p>

        {/* Conector visual para o exemplo real */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-violet-400">
          <span>Veja a diferença prática abaixo</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
