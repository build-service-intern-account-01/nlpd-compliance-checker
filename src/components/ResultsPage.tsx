import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  Server,
  Globe,
  Mail,
  Cloud,
  Brain,
  ClipboardList,
  UserCheck,
  ChevronDown,
  ChevronUp,
  FileText,
  RefreshCw,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { useState } from 'react';
import type { AssessmentResult, ActionItem, Verdict } from '../types/assessment';

const iconMap: Record<string, LucideIcon> = {
  Organisation: ClipboardList,
  Hébergement: Server,
  Transparence: Globe,
  Droits: UserCheck,
  Emails: Mail,
  Cloud: Cloud,
  IA: Brain,
};

const sectionNameMap: Record<string, string> = {
  governance: 'Organisation',
  hosting: 'Hébergement',
  website: 'Transparence',
  rights: 'Droits',
  emails: 'Emails',
  cloud: 'Cloud',
  ai: 'IA',
};

interface ResultsPageProps {
  results: AssessmentResult;
  onRestart: () => void;
}

function VerdictBanner({ verdict, score, maxScore }: { verdict: Verdict; score: number; maxScore: number }) {
  const percentage = Math.round((score / maxScore) * 100);

  const config = {
    ok: {
      icon: CheckCircle,
      title: 'Conformité satisfaisante',
      subtitle: 'Votre entreprise respecte les principes essentiels de la nLPD',
      bgClass: 'from-emerald-500 to-emerald-600',
      shadowClass: 'shadow-emerald-200',
    },
    warning: {
      icon: AlertTriangle,
      title: 'Points à corriger',
      subtitle: 'Des améliorations sont nécessaires pour assurer votre conformité',
      bgClass: 'from-amber-500 to-amber-600',
      shadowClass: 'shadow-amber-200',
    },
    danger: {
      icon: XCircle,
      title: 'Risque élevé',
      subtitle: 'Des actions urgentes sont requises pour protéger votre entreprise',
      bgClass: 'from-red-500 to-red-600',
      shadowClass: 'shadow-red-200',
    },
  };

  const { icon: Icon, title, subtitle, bgClass, shadowClass } = config[verdict];

  return (
    <div className={`bg-gradient-to-r ${bgClass} rounded-2xl shadow-xl ${shadowClass} p-8 text-white mb-8`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center flex-shrink-0">
          <Icon className="w-10 h-10" />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-white/90 text-lg">{subtitle}</p>
        </div>
        <div className="text-center bg-white/20 backdrop-blur rounded-xl px-6 py-4">
          <p className="text-4xl font-bold">{percentage}%</p>
          <p className="text-sm text-white/80">Score global</p>
        </div>
      </div>
    </div>
  );
}

function SectionScore({ sectionId, data }: { sectionId: string; data: { score: number; maxScore: number; verdict: Verdict } }) {
  const name = sectionNameMap[sectionId] || sectionId;
  const Icon = iconMap[name] || Server;
  const percentage = Math.round((data.score / data.maxScore) * 100);

  const verdictColors = {
    ok: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    warning: 'bg-amber-100 text-amber-700 border-amber-200',
    danger: 'bg-red-100 text-red-700 border-red-200',
  };

  const progressColors = {
    ok: 'bg-emerald-500',
    warning: 'bg-amber-500',
    danger: 'bg-red-500',
  };

  return (
    <div className={`p-4 rounded-xl border ${verdictColors[data.verdict]}`}>
      <div className="flex items-center gap-3 mb-3">
        <Icon className="w-5 h-5" />
        <span className="font-medium">{name}</span>
        <span className="ml-auto font-semibold">{percentage}%</span>
      </div>
      <div className="h-2 bg-white/50 rounded-full overflow-hidden">
        <div
          className={`h-full ${progressColors[data.verdict]} rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function ActionCard({ action, index }: { action: ActionItem; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = iconMap[action.section] || FileText;

  const priorityConfig = {
    urgent: {
      label: 'Urgent',
      bgClass: 'bg-red-100 text-red-700 border-red-200',
      iconBg: 'bg-red-500',
    },
    important: {
      label: 'Important',
      bgClass: 'bg-amber-100 text-amber-700 border-amber-200',
      iconBg: 'bg-amber-500',
    },
    recommended: {
      label: 'Recommandé',
      bgClass: 'bg-blue-100 text-blue-700 border-blue-200',
      iconBg: 'bg-blue-500',
    },
  };

  const config = priorityConfig[action.priority];

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-5 flex items-start gap-4 text-left"
      >
        <div className={`w-10 h-10 rounded-xl ${config.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm`}>
          <span className="text-white font-bold text-sm">{index + 1}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${config.bgClass}`}>
              {config.label}
            </span>
            <span className="text-slate-400 text-sm flex items-center gap-1">
              <Icon className="w-4 h-4" />
              {action.section}
            </span>
          </div>
          <h3 className="font-semibold text-slate-900 text-lg">{action.action}</h3>
        </div>
        <div className="flex-shrink-0 mt-1">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-slate-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-400" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="px-5 pb-5 pt-0 border-t border-slate-100">
          <div className="pt-4">
            <p className="text-slate-600 mb-4">{action.details}</p>
            <div className="bg-slate-50 rounded-xl p-4">
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-500" />
                Preuves à conserver
              </h4>
              <ul className="space-y-2">
                {action.evidence.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function ResultsPage({ results, onRestart }: ResultsPageProps) {
  const urgentActions = results.actions.filter((a) => a.priority === 'urgent');
  const importantActions = results.actions.filter((a) => a.priority === 'important');
  const recommendedActions = results.actions.filter((a) => a.priority === 'recommended');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <header className="py-6 px-4 border-b border-slate-100 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-slate-900">Évaluation nLPD</h1>
            <p className="text-slate-500 text-sm">Résultats de votre diagnostic</p>
          </div>
          <span className="text-slate-600 text-sm font-medium hidden sm:block">AXIORIX</span>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <VerdictBanner verdict={results.verdict} score={results.score} maxScore={results.maxScore} />

        <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-6 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Score par domaine</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(results.sectionScores).map(([sectionId, data]) => (
              <SectionScore key={sectionId} sectionId={sectionId} data={data} />
            ))}
          </div>
        </div>

        {results.actions.length > 0 ? (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Plan d'actions</h2>
            <p className="text-slate-600 mb-6">
              Actions classées par priorité. Cliquez sur chaque action pour voir les détails.
            </p>

            {urgentActions.length > 0 && (
              <div className="mb-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-red-700 mb-3">
                  <XCircle className="w-5 h-5" />
                  Actions urgentes ({urgentActions.length})
                </h3>
                <div className="space-y-3">
                  {urgentActions.map((action, i) => (
                    <ActionCard key={i} action={action} index={i} />
                  ))}
                </div>
              </div>
            )}

            {importantActions.length > 0 && (
              <div className="mb-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-amber-700 mb-3">
                  <AlertTriangle className="w-5 h-5" />
                  Actions importantes ({importantActions.length})
                </h3>
                <div className="space-y-3">
                  {importantActions.map((action, i) => (
                    <ActionCard key={i} action={action} index={urgentActions.length + i} />
                  ))}
                </div>
              </div>
            )}

            {recommendedActions.length > 0 && (
              <div className="mb-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-700 mb-3">
                  <CheckCircle className="w-5 h-5" />
                  Actions recommandées ({recommendedActions.length})
                </h3>
                <div className="space-y-3">
                  {recommendedActions.map((action, i) => (
                    <ActionCard
                      key={i}
                      action={action}
                      index={urgentActions.length + importantActions.length + i}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center mb-8">
            <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-emerald-900 mb-2">Excellent travail !</h2>
            <p className="text-emerald-700">
              Aucune action corrective n'est nécessaire. Continuez à maintenir ces bonnes pratiques.
            </p>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-6 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Prochaines étapes</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl">
              <h3 className="font-medium text-slate-900 mb-2">1. Priorisez les actions urgentes</h3>
              <p className="text-sm text-slate-600">
                Traitez d'abord les points marqués en rouge pour réduire les risques immédiats.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl">
              <h3 className="font-medium text-slate-900 mb-2">2. Documentez vos actions</h3>
              <p className="text-sm text-slate-600">
                Conservez les preuves listées pour chaque action. Elles seront utiles en cas de contrôle.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl">
              <h3 className="font-medium text-slate-900 mb-2">3. Planifiez un suivi</h3>
              <p className="text-sm text-slate-600">
                Refaites cette évaluation dans 3-6 mois pour mesurer vos progrès.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl">
              <h3 className="font-medium text-slate-900 mb-2">4. Formez vos équipes</h3>
              <p className="text-sm text-slate-600">
                Sensibilisez vos collaborateurs aux bonnes pratiques de protection des données.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <button
            onClick={onRestart}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 font-medium rounded-xl hover:bg-slate-200 transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
            Refaire l'évaluation
          </button>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 mb-12 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">
                Structurer l'IA, préserver la mémoire
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Ce diagnostic donne une base. Pour cadrer l'usage de l'IA, sécuriser vos outils (cloud, emails, site) et déployer une feuille de route claire et actionnable, découvrez AXIORIX.
              </p>
            </div>
            <a
              href="https://www.axiorix.com/strategie-ia-romande"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors whitespace-nowrap"
            >
              Découvrir la Stratégie IA
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <footer className="pt-8 border-t border-slate-200">
          <div className="flex flex-col items-center gap-4">
            <p className="text-center text-sm text-slate-500">
              Cette évaluation est indicative et ne constitue pas un avis juridique.
              <br />
              Pour une analyse approfondie, consultez un conseiller en protection des données.
            </p>
            <p className="text-center text-xs text-slate-400">
              © 2026 AXIORIX — Tous droits réservés.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
