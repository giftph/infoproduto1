import { BookOpen, FolderArchive, FileSpreadsheet, CalendarCheck, Check } from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem } from './FadeInUp';
import digitalBundleImg from '../assets/images/digital_bundle_showcase_1792812592437.jpg';

export function IncludedItems() {
  const deliverables = [
    {
      category: "Produto principal",
      title: "Guia IA na Prática 2.0",
      description: "Explicações práticas sobre como formular instruções, utilizar modelos e revisar respostas com olhar crítico.",
      badge: "E-book & Manual",
      icon: BookOpen,
      highlights: [
        "Fundamentos de engenharia de instruções sem jargões",
        "Como contornar alucinações e respostas genéricas",
        "Método de 4 etapas para construir qualquer comando"
      ],
      isPrimary: true,
    },
    {
      category: "Bônus 1",
      title: "Biblioteca de Prompts",
      description: "Coleção organizada de prompts para produtividade, marketing, comunicação e pequenos negócios.",
      badge: "Arquivo de Consulta Rápida",
      icon: FolderArchive,
      highlights: [
        "Mais de 50 estruturas testadas e categorizadas",
        "Campos customizáveis para o seu nicho",
        "Atalhos para rotinas administrativas e criativas"
      ],
      isPrimary: false,
    },
    {
      category: "Bônus 2",
      title: "Modelos Editáveis",
      description: "Estruturas reutilizáveis para planejamento, mensagens profissionais e organização de tarefas.",
      badge: "Templates Prontos",
      icon: FileSpreadsheet,
      highlights: [
        "Matriz de priorização de rotina diária",
        "Estrutura de propostas e alinhamento de escopo",
        "Checklist de validação de saídas de IA"
      ],
      isPrimary: false,
    },
    {
      category: "Bônus 3",
      title: "Desafio de Aplicação de 7 Dias",
      description: "Um roteiro de atividades para praticar o conteúdo gradualmente sem sobrecarregar sua semana.",
      badge: "Roteiro Guiado",
      icon: CalendarCheck,
      highlights: [
        "1 atividade focada por dia (15 a 20 minutos)",
        "Passo a passo com exemplos de antes e depois",
        "Consolidação de um método pessoal de trabalho"
      ],
      isPrimary: false,
    }
  ];

  return (
    <section id="o-que-esta-incluso" className="py-16 md:py-24 border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <FadeInUp className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-violet-400 uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Materiais Inclusos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Tudo organizado para você começar.
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Arquivos digitais planejados para consulta imediata no computador ou no celular, sem enrolação.
          </p>
        </FadeInUp>

        {/* Deliverables Grid with Stagger */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" staggerDelay={0.08}>
          {deliverables.map((item, idx) => {
            const Icon = item.icon;
            return (
              <StaggerItem
                key={idx}
                className={`p-6 sm:p-7 rounded-2xl glass-panel relative flex flex-col justify-between transition-all ${
                  item.isPrimary
                    ? 'border-violet-500/40 bg-[#0E1322] shadow-lg shadow-violet-950/20'
                    : 'border-white/5 hover:border-white/15'
                }`}
              >
                <div>
                  {/* Top metadata */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-violet-400">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {item.badge}
                    </span>
                  </div>

                  {/* Header Title with Icon */}
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-300 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="mt-6 pt-5 border-t border-white/5 space-y-2.5">
                    {item.highlights.map((bullet, bulletIdx) => (
                      <div key={bulletIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-300">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span>Formato Digital</span>
                  <span className="text-slate-300">Incluso no pacote</span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Visual asset preview */}
        <FadeInUp delay={0.15}>
          <div className="rounded-2xl overflow-hidden border border-white/10 relative bg-[#0B0F19] p-6 sm:p-8 flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden bg-slate-900 border border-white/10 relative">
              <img
                src={digitalBundleImg}
                alt="Mockup do kit de ferramentas digitais e materiais de produtividade"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-4">
              <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider block">
                Acesso Centralizado
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Praticidade para abrir, copiar e aplicar onde você estiver.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Todos os materiais são disponibilizados em formatos digitais limpos, leves e legíveis em qualquer dispositivo — seja no notebook durante o expediente ou no smartphone entre compromissos.
              </p>
              <div className="pt-2 flex items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-violet-400" />
                  <span>Compatível com ChatGPT, Claude e Gemini</span>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
