import React from 'react';
import { PersonalProfile } from '../types';
import { calculateAge } from '../utils/age';

interface HeroProps {
  profile: PersonalProfile;
  onOpenCvModal: () => void;
  isCvModalOpen: boolean;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenCvModal, isCvModalOpen }) => {
  const currentAge = calculateAge(profile.birthDate);

  return (
    <section className="space-y-space-lg pt-space-md">
      <div className="space-y-space-xs">
        <h1 className="font-headline-xl text-headline-xl text-[#231E18] dark:text-text-primary font-bold tracking-tight">
          {profile.name}
        </h1>
        <p className="font-code text-headline-sm text-blue-600 dark:text-primary">
          {profile.tagline}
        </p>
      </div>

      <p className="font-body-lg text-body-lg text-[#554C43] dark:text-on-surface-variant max-w-2xl leading-relaxed">
        I'm Kavan, a <span className="font-medium">{currentAge}</span> years old developer based in {profile.location} with a specialty in{' '}
        <span className="text-[#231E18] dark:text-text-primary font-medium">Python</span>,{' '}
        <span className="text-[#231E18] dark:text-text-primary font-medium">Docker</span>, and everything related to{' '}
        <span className="text-[#231E18] dark:text-text-primary font-medium">DevOps</span>.
      </p>

      <div className="flex items-center gap-space-md pt-space-sm">
        <div className="relative inline-block">
          <button
            type="button"
            onClick={onOpenCvModal}
            aria-haspopup="dialog"
            aria-expanded={isCvModalOpen}
            className="inline-flex items-center gap-space-xs px-2.5 py-1.5 rounded border border-[#E3DCD2] dark:border-surface-container bg-[#FFFDF9] hover:bg-[#F2EDE2] dark:bg-surface-panel dark:hover:bg-surface-raised text-[#231E18] dark:text-text-primary shadow-sm dark:shadow-none font-code text-body-sm transition-all duration-200 cursor-pointer group active:scale-95"
          >
            <span className="material-symbols-outlined text-[16px] text-blue-600 dark:text-primary transition-transform group-hover:-translate-y-0.5">
              description
            </span>
            <span className="font-medium">Curriculum Vitae</span>
            <span className="material-symbols-outlined text-[14px] text-[#877C6F] dark:text-text-muted transition-transform group-hover:translate-y-0.5">
              expand_more
            </span>
          </button>
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="font-code text-body-sm text-[#73685C] dark:text-text-secondary hover:text-[#231E18] dark:hover:text-text-primary transition-colors flex items-center gap-1"
        >
          <span>{profile.email}</span>
          <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
        </a>
      </div>
    </section>
  );
};
