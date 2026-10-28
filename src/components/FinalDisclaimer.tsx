import { AlertCircle } from 'lucide-react';

export function FinalDisclaimer() {
  return (
    <section className="py-8 border-b border-white/5 bg-[#07090F]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3 text-slate-400">
          <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-400">
            <strong>Aviso importante:</strong> As ferramentas de IA mudam com o tempo e podem errar. Confira sempre as respostas. Este kit é material educativo e não garante resultados específicos.
          </p>
        </div>
      </div>
    </section>
  );
}
