import React from 'react';
import { ExperienceItem } from '../types';

interface ExperienceProps {
  experience: ExperienceItem[];
  subtitle?: string;
}

export const Experience: React.FC<ExperienceProps> = ({
  experience,
  subtitle = '4+ Years Systems & Dev',
}) => {
  return (
    <section className="space-y-space-lg" id="cv-section">
      <div className="flex items-baseline justify-between border-b border-[#E8E2D8] dark:border-surface-container/50 pb-space-sm">
        <h2 className="font-code text-headline-sm text-[#231E18] dark:text-text-primary tracking-tight">
          <span className="text-blue-600 dark:text-primary font-bold mr-1">&gt;</span>Experience
        </h2>
        <span className="font-code text-label-sm text-[#877C6F] dark:text-text-muted">
          {subtitle}
        </span>
      </div>

      <div className="space-y-space-xl">
        {experience.map((item) => (
          <div key={item.id} className="space-y-space-xs">
            <div className="flex flex-wrap items-baseline justify-between gap-space-xs">
              <h3 className="font-headline-sm text-headline-sm text-[#231E18] dark:text-text-primary font-medium">
                {item.role}
              </h3>
              <span className="font-code text-body-sm text-[#877C6F] dark:text-text-muted">
                {item.period}
              </span>
            </div>

            <p className="font-code text-body-sm text-blue-600 dark:text-primary">
              {item.organization}
            </p>

            <p className="font-body-md text-body-md text-[#554C43] dark:text-on-surface-variant leading-relaxed pt-1">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-space-xs pt-space-xs font-code text-body-sm text-[#61564C] dark:text-text-secondary">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-[#EDE7DB] dark:bg-surface-container/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
