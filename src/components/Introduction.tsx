import { ArrowRight, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface IntroductionProps {
  onStart: () => void;
}

export function Introduction({ onStart }: IntroductionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <header className="py-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-slate-600 text-lg font-semibold tracking-wide">AXIORIX</span>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Conformité nLPD
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Évaluez la conformité de votre entreprise à la nouvelle loi suisse sur la protection des données en quelques minutes.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden mb-12">
          <div className="p-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Ce diagnostic couvre 7 domaines essentiels :
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Organisation & inventaire', desc: 'Gouvernance et registre des données' },
                { title: 'Hébergement & sécurité', desc: 'Localisation, MFA, incidents' },
                { title: 'Transparence', desc: 'Cookies, formulaires, information' },
                { title: 'Droits & conservation', desc: 'Accès, suppression, durées' },
                { title: 'Emails', desc: 'Communications et newsletters' },
                { title: 'Prestataires cloud', desc: 'Services tiers et sous-traitants' },
                { title: 'Usage de l\'IA', desc: 'Intelligence artificielle et automatisation' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-semibold text-sm">{i + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{item.title}</p>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-100 bg-slate-50/50 p-8">
            <h3 className="font-semibold text-slate-900 mb-4">À la fin, vous obtiendrez :</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  <XCircle className="w-5 h-5 text-red-500" />
                </div>
                <span className="text-slate-700">Un verdict clair</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 text-xs font-bold">!</span>
                </div>
                <span className="text-slate-700">Actions prioritaires</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded bg-slate-200 flex items-center justify-center">
                  <span className="text-slate-600 text-xs font-bold">+</span>
                </div>
                <span className="text-slate-700">Preuves à conserver</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onStart}
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-0.5"
          >
            Commencer l'évaluation
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="mt-4 text-sm text-slate-500">
            Durée estimée : 5-10 minutes
          </p>
        </div>

        <footer className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex flex-col items-center gap-4">
            <p className="text-center text-sm text-slate-500">
              Cet outil fournit une évaluation indicative et ne constitue pas un avis juridique.
              <br />
              Pour une analyse complète, consultez un spécialiste en protection des données.
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
