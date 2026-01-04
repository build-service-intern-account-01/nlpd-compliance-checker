import { useState, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Introduction } from './components/Introduction';
import { QuestionCard } from './components/QuestionCard';
import { SectionHeader } from './components/SectionHeader';
import { ResultsPage } from './components/ResultsPage';
import { sections } from './data/assessmentData';
import { calculateResults } from './utils/scoring';
import type { Answer, AssessmentResult } from './types/assessment';

type AppState = 'intro' | 'assessment' | 'results';

function App() {
  const [appState, setAppState] = useState<AppState>('intro');
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [results, setResults] = useState<AssessmentResult | null>(null);

  const currentSection = sections[currentSectionIndex];
  const currentQuestion = currentSection?.questions[currentQuestionIndex];
  const totalQuestionsInSection = currentSection?.questions.length || 0;

  const currentAnswer = answers.find((a) => a.questionId === currentQuestion?.id);

  const handleStart = useCallback(() => {
    setAppState('assessment');
    setCurrentSectionIndex(0);
    setCurrentQuestionIndex(0);
    setAnswers([]);
  }, []);

  const handleAnswer = useCallback(
    (value: string, score: number, risk: 'low' | 'medium' | 'high') => {
      if (!currentQuestion) return;

      setAnswers((prev) => {
        const filtered = prev.filter((a) => a.questionId !== currentQuestion.id);
        return [...filtered, { questionId: currentQuestion.id, value, score, risk }];
      });
    },
    [currentQuestion]
  );

  const handleNext = useCallback(() => {
    if (!currentAnswer) return;

    if (currentQuestionIndex < totalQuestionsInSection - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex((prev) => prev + 1);
      setCurrentQuestionIndex(0);
    } else {
      const assessmentResults = calculateResults(answers);
      setResults(assessmentResults);
      setAppState('results');
    }
  }, [currentAnswer, currentQuestionIndex, totalQuestionsInSection, currentSectionIndex, answers]);

  const handlePrevious = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else if (currentSectionIndex > 0) {
      setCurrentSectionIndex((prev) => prev - 1);
      const prevSection = sections[currentSectionIndex - 1];
      setCurrentQuestionIndex(prevSection.questions.length - 1);
    }
  }, [currentQuestionIndex, currentSectionIndex]);

  const handleRestart = useCallback(() => {
    setAppState('intro');
    setCurrentSectionIndex(0);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResults(null);
  }, []);

  const isFirstQuestion = currentSectionIndex === 0 && currentQuestionIndex === 0;
  const isLastQuestion =
    currentSectionIndex === sections.length - 1 &&
    currentQuestionIndex === totalQuestionsInSection - 1;

  const totalQuestions = sections.reduce((acc, s) => acc + s.questions.length, 0);
  const answeredQuestions = answers.length;
  const overallProgress = Math.round((answeredQuestions / totalQuestions) * 100);

  if (appState === 'intro') {
    return <Introduction onStart={handleStart} />;
  }

  if (appState === 'results' && results) {
    return <ResultsPage results={results} onRestart={handleRestart} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-semibold text-slate-900">Évaluation nLPD</h1>
              <p className="text-sm text-slate-500">Conformité protection des données</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-slate-900">{overallProgress}%</p>
              <p className="text-xs text-slate-500">complété</p>
            </div>
          </div>
          <div className="mt-3 h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <SectionHeader
          section={currentSection}
          currentSection={currentSectionIndex}
          totalSections={sections.length}
        />

        <QuestionCard
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={totalQuestionsInSection}
          selectedValue={currentAnswer?.value}
          onSelect={handleAnswer}
        />

        <div className="flex items-center justify-between mt-8">
          <button
            onClick={handlePrevious}
            disabled={isFirstQuestion}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
              isFirstQuestion
                ? 'text-slate-300 cursor-not-allowed'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            Précédent
          </button>

          <button
            onClick={handleNext}
            disabled={!currentAnswer}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              currentAnswer
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            {isLastQuestion ? 'Voir les résultats' : 'Suivant'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </main>

      <footer className="py-6 px-4 border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-xs text-slate-400">
            © 2026 AXIORIX — Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
