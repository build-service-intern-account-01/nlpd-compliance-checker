export interface Question {
  id: string;
  text: string;
  helpText?: string;
  options: {
    value: string;
    label: string;
    score: number;
    risk: 'low' | 'medium' | 'high';
  }[];
}

export interface Section {
  id: string;
  title: string;
  icon: string;
  description: string;
  questions: Question[];
}

export interface Answer {
  questionId: string;
  value: string;
  score: number;
  risk: 'low' | 'medium' | 'high';
}

export interface ActionItem {
  priority: 'urgent' | 'important' | 'recommended';
  section: string;
  action: string;
  details: string;
  evidence: string[];
  deadline?: string;
}

export type Verdict = 'ok' | 'warning' | 'danger';

export interface AssessmentResult {
  verdict: Verdict;
  score: number;
  maxScore: number;
  sectionScores: Record<string, { score: number; maxScore: number; verdict: Verdict }>;
  actions: ActionItem[];
}
