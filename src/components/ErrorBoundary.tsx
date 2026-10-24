import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#080B11] text-white flex items-center justify-center p-6">
          <div className="max-w-md w-full p-8 rounded-2xl bg-[#0F1420] border border-white/10 text-center space-y-4">
            <div className="w-12 h-12 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center mx-auto text-violet-400">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold">Ocorreu um erro ao carregar a página</h1>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tentamos inicializar a página, mas houve uma falha momentânea. Por favor, recarregue para tentar novamente.
            </p>
            {this.state.error && (
              <pre className="text-[11px] font-mono text-slate-500 bg-black/40 p-3 rounded-lg overflow-x-auto text-left">
                {this.state.error.message}
              </pre>
            )}
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-semibold transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Recarregar página</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
