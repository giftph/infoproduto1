import { useState, useMemo } from 'react';
import { Copy, Check, Terminal, Sparkles, SlidersHorizontal, RefreshCw } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import { FadeInUp } from './FadeInUp';

const OBJECTIVES = [
  { id: 'conteudo', label: 'Criar conteúdo para redes sociais', iconName: 'Megaphone' },
  { id: 'comunicacao', label: 'Melhorar a comunicação com clientes', iconName: 'Message' },
  { id: 'tarefas', label: 'Organizar tarefas e rotina diária', iconName: 'Calendar' },
  { id: 'textos', label: 'Escrever textos e e-mails profissionais', iconName: 'FileText' },
  { id: 'propostas', label: 'Estruturar propostas e orçamentos', iconName: 'CheckSquare' },
];

const AUDIENCES = [
  { id: 'clientes', label: 'Clientes em potencial' },
  { id: 'audiencia', label: 'Seguidores e audiência do nicho' },
  { id: 'profissionais', label: 'Parceiros e outros profissionais' },
  { id: 'equipe', label: 'Equipe interna ou colaboradores' },
  { id: 'iniciantes', label: 'Pessoas leigas / público geral' },
];

const TONES = [
  { id: 'direto', label: 'Profissional e direto' },
  { id: 'didatico', label: 'Didático e acolhedor' },
  { id: 'persuasivo', label: 'Persuasivo e dinâmico' },
  { id: 'corporativo', label: 'Formal e estruturado' },
  { id: 'descontraido', label: 'Descontraído e autêntico' },
];

const FORMATS = [
  { id: 'topicos', label: 'Tópicos práticos acionáveis' },
  { id: 'roteiro', label: 'Roteiro passo a passo com checklist' },
  { id: 'tabela', label: 'Tabela comparativa com exemplos' },
  { id: 'pronto', label: 'Texto/mensagem pronto para copiar e enviar' },
  { id: 'estrutura', label: 'Estrutura com gancho, corpo e chamada' },
];

export function InteractivePromptGenerator() {
  const [selectedObjective, setSelectedObjective] = useState(OBJECTIVES[0].id);
  const [selectedAudience, setSelectedAudience] = useState(AUDIENCES[0].id);
  const [selectedTone, setSelectedTone] = useState(TONES[0].id);
  const [selectedFormat, setSelectedFormat] = useState(FORMATS[0].id);
  const [customContext, setCustomContext] = useState('');
  const [copied, setCopied] = useState(false);

  // Generate deterministic, structured high-converting prompt
  const generatedPrompt = useMemo(() => {
    const objectiveObj = OBJECTIVES.find(o => o.id === selectedObjective);
    const audienceObj = AUDIENCES.find(a => a.id === selectedAudience);
    const toneObj = TONES.find(t => t.id === selectedTone);
    const formatObj = FORMATS.find(f => f.id === selectedFormat);

    const contextSnippet = customContext.trim() 
      ? `\nCONTEXTO DO MEU PROJETO / NICHO:\n"${customContext.trim()}"\n` 
      : '';

    let taskInstruction = "";
    if (selectedObjective === 'conteudo') {
      taskInstruction = "Desenvolva uma sequência de 3 ideias práticas com títulos chamativos, ângulo original e aplicabilidade imediata para prender a atenção e gerar engajamento.";
    } else if (selectedObjective === 'comunicacao') {
      taskInstruction = "Elabore uma mensagem clara que responda às principais dúvidas do cliente, demonstre empatia profissional e estabeleça os próximos passos com segurança.";
    } else if (selectedObjective === 'tarefas') {
      taskInstruction = "Organize as atividades da semana em blocos de tempo com priorização por impacto (matriz urgente vs importante) e sugestão de checkpoints de foco.";
    } else if (selectedObjective === 'textos') {
      taskInstruction = "Redija um texto conciso, com abertura impactante, desenvolvimento objetivo em parágrafos curtos e um encerramento polido com ação clara.";
    } else {
      taskInstruction = "Construa a estrutura da proposta contendo contextualização do desafio, plano de entrega em etapas, valor gerado e condições de início.";
    }

    return `Atue como um especialista em produtividade e comunicação aplicada.${contextSnippet}
OBJETIVO PRINCIPAL:
${objectiveObj?.label}

PÚBLICO-ALVO:
${audienceObj?.label}

TOM DE VOZ DESEJADO:
${toneObj?.label}

INSTRUÇÃO DETALHADA:
${taskInstruction}

DIRETRIZES DE QUALIDADE:
1. Elimine termos genéricos, clichês ou frases vazias de autoajuda.
2. Seja objetivo e priorize a aplicabilidade prática no trabalho real.
3. Se houver informações incompletas, sugira 2 perguntas breves de refinamento ao final.

FORMATO DE ENTREGA:
Apresente a resposta final em formato de ${formatObj?.label.toLowerCase()}.`;
  }, [selectedObjective, selectedAudience, selectedTone, selectedFormat, customContext]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setCopied(true);
      trackEvent('prompt_generator_copied', {
        objective: selectedObjective,
        audience: selectedAudience,
      });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleOptionChange = (setter: (val: string) => void, val: string, field: string) => {
    setter(val);
    trackEvent('prompt_generator_interact', { field, value: val });
  };

  return (
    <section id="demonstracao" className="py-16 md:py-24 border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <FadeInUp className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-violet-400 uppercase tracking-wider mb-3">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Ferramenta Interativa Gratuita</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Monte seu próprio prompt de IA
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Personalize os parâmetros abaixo e veja como uma estrutura bem orientada transforma as respostas do ChatGPT ou Claude.
          </p>
        </FadeInUp>

        {/* Builder Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <FadeInUp delay={0.1} className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl glass-panel space-y-5">
              {/* 1. Objetivo */}
              <div>
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2.5">
                  1. Objetivo da tarefa
                </label>
                <div className="space-y-2">
                  {OBJECTIVES.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleOptionChange(setSelectedObjective, item.id, 'objective')}
                      className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                        selectedObjective === item.id
                          ? 'bg-violet-600/30 text-white border border-violet-500/50 shadow-sm'
                          : 'bg-[#090D15] text-slate-300 border border-white/5 hover:border-white/10 hover:text-white'
                      }`}
                    >
                      <span className="truncate">{item.label}</span>
                      {selectedObjective === item.id && (
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0 ml-2" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Público-alvo */}
              <div>
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2.5">
                  2. Público-alvo
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {AUDIENCES.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleOptionChange(setSelectedAudience, item.id, 'audience')}
                      className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-all truncate ${
                        selectedAudience === item.id
                          ? 'bg-violet-600/30 text-white border border-violet-500/50'
                          : 'bg-[#090D15] text-slate-300 border border-white/5 hover:border-white/10 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Tom de comunicação */}
              <div>
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2.5">
                  3. Tom de comunicação
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {TONES.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleOptionChange(setSelectedTone, item.id, 'tone')}
                      className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-all truncate ${
                        selectedTone === item.id
                          ? 'bg-violet-600/30 text-white border border-violet-500/50'
                          : 'bg-[#090D15] text-slate-300 border border-white/5 hover:border-white/10 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Formato da resposta */}
              <div>
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2.5">
                  4. Formato da resposta
                </label>
                <div className="space-y-2">
                  {FORMATS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleOptionChange(setSelectedFormat, item.id, 'format')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-between ${
                        selectedFormat === item.id
                          ? 'bg-violet-600/30 text-white border border-violet-500/50'
                          : 'bg-[#090D15] text-slate-300 border border-white/5 hover:border-white/10 hover:text-white'
                      }`}
                    >
                      <span className="truncate">{item.label}</span>
                      {selectedFormat === item.id && (
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0 ml-2" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional: Context */}
              <div>
                <label htmlFor="custom-context" className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                  Seu nicho ou contexto adicional (opcional)
                </label>
                <input
                  id="custom-context"
                  type="text"
                  value={customContext}
                  onChange={(e) => setCustomContext(e.target.value)}
                  placeholder="Ex: Consultoria financeira, loja de roupas, designer freelancer..."
                  className="w-full px-3.5 py-2.5 bg-[#090D15] border border-white/10 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                />
              </div>
            </div>
          </FadeInUp>

          {/* Generated Result Column */}
          <FadeInUp delay={0.2} className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-2xl glass-panel border border-violet-500/20 shadow-xl relative">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-violet-400" />
                  <span className="text-xs font-semibold text-white tracking-wide">
                    Prompt Pronto para Executar no ChatGPT
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedObjective(OBJECTIVES[0].id);
                    setSelectedAudience(AUDIENCES[0].id);
                    setSelectedTone(TONES[0].id);
                    setSelectedFormat(FORMATS[0].id);
                    setCustomContext('');
                  }}
                  title="Restaurar padrão"
                  className="p-1.5 text-slate-400 hover:text-white transition-colors rounded"
                  aria-label="Restaurar parâmetros padrão"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Code/Prompt Container */}
              <div className="relative rounded-xl bg-[#070A10] p-4 border border-white/10 mb-4 overflow-x-auto">
                <pre className="text-xs sm:text-sm font-mono text-slate-200 whitespace-pre-wrap leading-relaxed select-all">
                  {generatedPrompt}
                </pre>
              </div>

              {/* Action Button */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all ${
                    copied
                      ? 'bg-emerald-600 text-white'
                      : 'bg-violet-600 hover:bg-violet-500 text-white shadow-md shadow-violet-600/20'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>PROMPT COPIADO COM SUCESSO!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>COPIAR MEU PROMPT</span>
                    </>
                  )}
                </button>

                <span className="text-[11px] text-slate-400 text-center sm:text-right">
                  Basta colar no ChatGPT ou Claude
                </span>
              </div>
            </div>

            {/* Explanatory Callout Box */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-300 leading-relaxed">
                Esta é uma demonstração do tipo de aplicação prática que você pode aprender a utilizar. O kit completo reúne materiais e modelos adicionais.
              </p>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
