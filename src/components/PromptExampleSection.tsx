import { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

export function PromptExampleSection() {
  const [copied, setCopied] = useState(false);

  const promptText = `Atue como um especialista em organização pessoal e produtividade.
[Contexto]: Eu preciso planejar o meu dia de trabalho [DIA DA SEMANA], que começa às [HORA DE INÍCIO] e termina às [HORA DE TÉRMINO].
[Limites]: Reserve 1 hora de almoço e pausas de 10 minutos a cada bloco de foco de 90 minutos. Não sobrecarregue a agenda.
[Ação]: Crie um cronograma em blocos de tempo organizando as seguintes tarefas: [PRIORIDADES DO DIA].
[Resposta]: Entregue uma tabela simples com horários, atividade principal e objetivo de cada bloco.
[Objetivo]: Manter o foco nas prioridades sem estresse e encerrar o expediente no horário planejado.`;

  const handleCopy = () => {
    trackEvent('prompt_copied', { prompt_name: 'Planejamento do dia em blocos de tempo' });
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 sm:py-24 border-b border-white/5 relative bg-[#090D16]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-violet-400 uppercase tracking-wider mb-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>Exemplo da Biblioteca de 100 Prompts</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Planejamento do dia em blocos de tempo
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Veja como um prompt pronto é estruturado para você copiar e usar no seu dia:
          </p>
        </div>

        {/* Bloco de Código com Campos em Destaque */}
        <div className="rounded-2xl bg-[#0D1220] border border-violet-500/30 overflow-hidden shadow-2xl">
          {/* Barra superior do bloco */}
          <div className="px-5 py-3 bg-[#080B11] border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="w-3 h-3 rounded-full bg-amber-500/60" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/60" />
              <span className="text-xs font-mono text-slate-400 ml-2">Categoria: Organização pessoal</span>
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-600/20 hover:bg-violet-600/40 border border-violet-500/30 text-xs font-medium text-violet-300 transition-colors focus-visible:outline-2 focus-visible:outline-violet-400 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar prompt</span>
                </>
              )}
            </button>
          </div>

          {/* Corpo do prompt com campos com destaque */}
          <div className="p-6 font-mono text-xs sm:text-sm text-slate-200 space-y-3 leading-relaxed">
            <p className="text-slate-400">
              Atue como um especialista em organização pessoal e produtividade.
            </p>
            <p>
              <strong className="text-violet-400">[Contexto]:</strong> Eu preciso planejar o meu dia de trabalho{' '}
              <span className="bg-violet-500/20 text-violet-200 border border-violet-500/40 px-1.5 py-0.5 rounded font-bold">
                [DIA DA SEMANA]
              </span>
              , que começa às{' '}
              <span className="bg-violet-500/20 text-violet-200 border border-violet-500/40 px-1.5 py-0.5 rounded font-bold">
                [HORA DE INÍCIO]
              </span>{' '}
              e termina às{' '}
              <span className="bg-violet-500/20 text-violet-200 border border-violet-500/40 px-1.5 py-0.5 rounded font-bold">
                [HORA DE TÉRMINO]
              </span>
              .
            </p>
            <p>
              <strong className="text-violet-400">[Limites]:</strong> Reserve 1 hora de almoço e pausas de 10 minutos a cada bloco de foco de 90 minutos. Não sobrecarregue a agenda.
            </p>
            <p>
              <strong className="text-violet-400">[Ação]:</strong> Crie um cronograma em blocos de tempo organizando as seguintes tarefas:{' '}
              <span className="bg-violet-500/20 text-violet-200 border border-violet-500/40 px-1.5 py-0.5 rounded font-bold">
                [PRIORIDADES DO DIA]
              </span>
              .
            </p>
            <p>
              <strong className="text-violet-400">[Resposta]:</strong> Entregue uma tabela simples com horários, atividade principal e objetivo de cada bloco.
            </p>
            <p>
              <strong className="text-violet-400">[Objetivo]:</strong> Manter o foco nas prioridades sem estresse e encerrar o expediente no horário planejado.
            </p>
          </div>

          {/* Legenda obrigatória */}
          <div className="px-6 py-3.5 bg-[#080B11]/90 border-t border-white/5 text-center text-xs text-slate-400">
            <span className="text-violet-400 font-semibold">Legenda:</span> Troque os campos pelas suas informações.
          </div>
        </div>
      </div>
    </section>
  );
}
