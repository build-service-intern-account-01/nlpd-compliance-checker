import { Server, Globe, Mail, Cloud, Brain, ClipboardList, UserCheck, type LucideIcon } from 'lucide-react';
import type { Section } from '../types/assessment';

const iconMap: Record<string, LucideIcon> = {
  Server,
  Globe,
  Mail,
  Cloud,
  Brain,
  ClipboardList,
  UserCheck,
};

interface SectionHeaderProps {
  section: Section;
  currentSection: number;
  totalSections: number;
}

export function SectionHeader({ section, currentSection, totalSections }: SectionHeaderProps) {
  const Icon = iconMap[section.icon] || Server;

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        {Array.from({ length: totalSections }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-all ${
              i < currentSection
                ? 'bg-blue-500'
                : i === currentSection
                ? 'bg-blue-500'
                : 'bg-slate-200'
            }`}
          />
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-200 flex items-center justify-center">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div>
          <p className="text-sm text-blue-600 font-medium mb-0.5">
            Section {currentSection + 1} sur {totalSections}
          </p>
          <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
          <p className="text-slate-500 mt-1">{section.description}</p>
        </div>
      </div>
    </div>
  );
}
