import { useState } from 'react';
import { CheckSquare, Share2, MessageSquareText, Briefcase, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackEvent } from '../lib/analytics';
import { FadeInUp, StaggerContainer, StaggerItem } from './FadeInUp';

export function SolutionSection() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const categories = [
    {
      id: "produtividade",
      name: "Produtividade",
      tagline: "Otimize rotinas e clareie suas tarefas diárias",
      icon: CheckSquare,
      items: [
        {
          title: "Organização de tarefas",
          description: "Transforme listas caóticas de afazeres em planos de ação priorizados por impacto e urgência."
        },
        {
          title: "Planejamento semanal",
          description: "Modelos estruturados para definir metas semanais, blocos de tempo e marcos de acompanhamento."
        },
        {
          title: "Resumos e organização de informações",
          description: "Extraia os pontos fundamentais de reuniões, e-mails longos, artigos e documentos extensos em segundos."
        }
      ]
    },
    {
      id: "marketing",
      name: "Marketing",
      tagline: "Produza conteúdo consistente sem travar na tela em branco",
      icon: Share2,
      items: [
        {
          title: "Ideias de conteúdo",
          description: "Prompts direcionados para levantar temas relevantes para o seu nicho e dores do seu público."
        },
        {
          title: "Legendas e roteiros",
          description: "Estruturas de copywriting prontas para posts no Instagram, LinkedIn, carrosséis e vídeos curtos."
        },
        {
          title: "Calendários editoriais",
          description: "Planejamento mensal temático para manter frequência de publicações sem sobrecarga de trabalho."
        }
      ]
    },
    {
      id: "vendas",
      name: "Vendas e comunicação",
      tagline: "Comunicação profissional mais rápida e assertiva",
      icon: MessageSquareText,
      items: [
        {
          title: "Mensagens profissionais",
          description: "Modelos de respostas a clientes, e-mails de acompanhamento e alinhamento de expectativas."
        },
        {
          title: "Estruturação de propostas",
          description: "Roteiros para descrever escopo, entregáveis e cronogramas de forma clara e convincente."
        },
        {
          title: "Preparação para negociações",
          description: "Simulação de objeções comuns de clientes e orientações para responder com segurança."
        }
      ]
    },
    {
      id: "negocios",
      name: "Pequenos negócios",
      tagline: "Simplifique processos e foque no crescimento",
      icon: Briefcase,
      items: [
        {
          title: "Mapeamento de tarefas repetitivas",
          description: "Identifique atividades manuais do seu dia que podem ser aceleradas ou delegadas com IA."
        },
        {
          title: "Organização de processos",
          description: "Documentação passo a passo para procedimentos operacionais internos (SOPs simplificados)."
        },
        {
          title: "Planejamento de testes para novas ideias",
          description: "Valide serviços, ofertas e abordagens de forma econômica e estruturada antes de investir."
        }
      ]
    }
  ];

  const handleTabSelect = (index: number) => {
    setActiveCategory(index);
    trackEvent('category_tab_switched', { category: categories[index].name });
  };

  return (
    <section id="o-que-voce-vai-aprender" className="py-16 md:py-24 border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <FadeInUp className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-violet-400 uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Conteúdo Aplicado</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Um kit de ferramentas para colocar a IA em prática.
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Mais do que teorias sobre inteligência artificial, o kit é estruturado em 4 pilares essenciais do trabalho moderno.
          </p>
        </FadeInUp>

        {/* Category Tabs (Segmented Controls) */}
        <FadeInUp delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#0F1420] border border-white/10 rounded-xl max-w-2xl mx-auto mb-10">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const isActive = activeCategory === idx;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleTabSelect(idx)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-violet-600 text-white shadow-sm shadow-violet-900/50'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </FadeInUp>

        {/* Active Category Display with AnimatePresence */}
        <FadeInUp delay={0.15}>
          <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 mb-8 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
                      {(() => {
                        const CurrentIcon = categories[activeCategory].icon;
                        return <CurrentIcon className="w-5 h-5" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Categoria {activeCategory + 1} — {categories[activeCategory].name}
                      </h3>
                      <p className="text-sm text-slate-400">
                        {categories[activeCategory].tagline}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-violet-400 self-start sm:self-center">
                    3 módulos práticos
                  </span>
                </div>

                {/* 3 items in current category */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {categories[activeCategory].items.map((subItem, index) => (
                    <div
                      key={index}
                      className="p-5 rounded-xl bg-[#090D15]/80 border border-white/5 hover:border-violet-500/30 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-mono text-violet-400 font-semibold">
                            0{index + 1}
                          </span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                          <h4 className="text-sm font-bold text-white">
                            {subItem.title}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {subItem.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeInUp>

        {/* 4 Overview Mini-Cards */}
        <FadeInUp delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const isCurrent = activeCategory === idx;
              return (
                <div
                  key={cat.id}
                  onClick={() => handleTabSelect(idx)}
                  className={`p-4 rounded-xl cursor-pointer transition-all border ${
                    isCurrent
                      ? 'border-violet-500/40 bg-violet-950/20'
                      : 'border-white/5 bg-[#0B0F19]/60 hover:bg-[#0F1420] hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isCurrent ? 'text-violet-400' : 'text-slate-400'}`} />
                    <span className="text-xs font-semibold text-white">{cat.name}</span>
                  </div>
                  <p className="mt-2 text-[11px] text-slate-400 line-clamp-2">
                    {cat.tagline}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
