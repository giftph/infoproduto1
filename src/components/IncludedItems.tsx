import { FileText, Check } from 'lucide-react';
import capaGuia from '../assets/images/capa_guia_metodo_claro_1793151000813.jpg';
import capaPrompts from '../assets/images/capa_100_prompts_1793151013528.jpg';
import capaTemplates from '../assets/images/capa_templates_produtividade_1793151028919.jpg';
import capaDesafio from '../assets/images/capa_desafio_7_dias_1793151043045.jpg';

export function IncludedItems() {
  const materials = [
    {
      id: "guia",
      title: "Guia Prático de Inteligência Artificial",
      subtitle: "Com o Método CLARO",
      phrase: "O passo a passo direto para orientar assistentes de IA e obter respostas úteis sem complicação.",
      format: "PDF",
      cover: capaGuia,
      alt: "Capa do Guia Prático de IA com Método CLARO por MenteLabs",
      highlight: "Método Exclusivo",
    },
    {
      id: "prompts",
      title: "Biblioteca com 100 Prompts Prontos",
      subtitle: "Em 10 Categorias Práticas",
      phrase: "100 instruções estruturadas e testadas para copiar, preencher e usar na hora.",
      format: "PDF",
      cover: capaPrompts,
      alt: "Capa da Biblioteca com 100 Prompts Prontos por MenteLabs",
      highlight: "100 Modelos",
    },
    {
      id: "templates",
      title: "Templates de Produtividade Preenchíveis",
      subtitle: "Formatos Editáveis",
      phrase: "Modelos organizados com campos interativos para planejar semanas, tarefas e projetos.",
      format: "PDF editável",
      cover: capaTemplates,
      alt: "Capa dos Templates de Produtividade Preenchíveis por MenteLabs",
      highlight: "Interativo",
    },
    {
      id: "desafio",
      title: "Desafio de 7 Dias",
      subtitle: "1 Exercício por Dia (30 a 45 min/dia)",
      phrase: "Um plano guiado de uma semana para colocar o aprendizado em prática sem sobrecarga.",
      format: "PDF",
      cover: capaDesafio,
      alt: "Capa do Desafio de 7 Dias por MenteLabs",
      highlight: "7 Etapas",
    },
  ];

  return (
    <section id="o-que-esta-incluso" className="py-16 sm:py-24 border-b border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider block mb-2">
            Conteúdo Entregue
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            O que está incluso no kit
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            4 materiais digitais em PDF entregues imediatamente para ler e usar no celular ou computador.
          </p>
        </div>

        {/* Grade com os 4 Cartões Reais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#0D121F] border border-white/10 hover:border-violet-500/30 transition-all flex flex-col justify-between overflow-hidden shadow-lg shadow-black/40"
            >
              <div>
                {/* Capa Real com proporção correta */}
                <div className="relative aspect-[3/4] bg-[#080B11] overflow-hidden border-b border-white/5 group">
                  <img
                    src={item.cover}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    width={400}
                    height={533}
                  />
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-violet-600/90 text-white backdrop-blur-sm">
                    {item.format}
                  </div>
                </div>

                {/* Conteúdo descritivo */}
                <div className="p-5">
                  <div className="text-[11px] font-mono text-violet-400 font-medium mb-1">
                    {item.subtitle}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.phrase}
                  </p>
                </div>
              </div>

              {/* Rodapé do cartão com o formato */}
              <div className="px-5 py-3 bg-[#080B11]/60 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  Incluso no kit
                </span>
                <span className="font-mono text-slate-400">Formato: {item.format}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
