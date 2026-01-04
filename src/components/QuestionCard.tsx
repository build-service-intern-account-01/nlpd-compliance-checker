import { HelpCircle } from 'lucide-react';
import { useState } from 'react';
import type { Question } from '../types/assessment';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedValue: string | undefined;
  onSelect: (value: string, score: number, risk: 'low' | 'medium' | 'high') => void;
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedValue,
  onSelect,
}: QuestionCardProps) {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden">
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full">
              {questionNumber} / {totalQuestions}
            </span>
          </div>
          {question.helpText && (
            <button
              onClick={() => setShowHelp(!showHelp)}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Aide"
            >
              <HelpCircle className="w-5 h-5 text-slate-400" />
            </button>
          )}
        </div>

        <h3 className="text-xl font-semibold text-slate-900 mb-2">
          {question.text}
        </h3>

        {showHelp && question.helpText && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-100 rounded-xl">
            <p className="text-sm text-blue-800">{question.helpText}</p>
          </div>
        )}

        <div className="space-y-3 mt-6">
          {question.options.map((option) => {
            const isSelected = selectedValue === option.value;
            return (
              <button
                key={option.value}
                onClick={() => onSelect(option.value, option.score, option.risk)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  isSelected
                    ? 'border-blue-500 bg-blue-50 shadow-md'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      isSelected ? 'border-blue-500 bg-blue-500' : 'border-slate-300'
                    }`}
                  >
                    {isSelected && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  <span
                    className={`font-medium ${
                      isSelected ? 'text-blue-900' : 'text-slate-700'
                    }`}
                  >
                    {option.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
