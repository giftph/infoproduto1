import { FolderKanban } from 'lucide-react';

export function PromptCategoriesSection() {
  const categories = [
    "Organização pessoal",
    "Estudos e aprendizado",
    "Trabalho e produtividade",
    "Empreendedorismo e negócios",
    "Criação de conteúdo",
    "Marketing e redes sociais",
    "Escrita e comunicação profissional",
    "Planejamento e tomada de decisões",
    "Pesquisa, análise e aprendizado de ferramentas digitais",
    "Automatização de tarefas e melhoria de processos",
  ];

  return (
    <section className="py-16 sm:py-20 border-b border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-violet-400 uppercase tracking-wider mb-2">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>100 Prompts Organizados</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            As 10 categorias de prompts
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Encontre na hora o modelo exato para a atividade que você precisa realizar hoje:
          </p>
        </div>

        {/* Chips das 10 Categorias */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-3xl mx-auto">
          {categories.map((cat, index) => (
            <div
              key={cat}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0D121F] border border-white/10 hover:border-violet-500/40 text-xs sm:text-sm text-slate-200 transition-colors shadow-sm"
            >
              <span className="w-5 h-5 rounded-full bg-violet-600/20 text-violet-400 text-[11px] font-mono font-bold flex items-center justify-center shrink-0">
                {index + 1}
              </span>
              <span className="font-medium">{cat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
