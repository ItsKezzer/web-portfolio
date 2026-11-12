import React from 'react';
import { PersonalProfile } from '../types';

interface FooterProps {
  profile: PersonalProfile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  return (
    <footer className="w-full bg-[#F3EFE6] dark:bg-surface-panel py-space-md border-t border-[#E8E2D8] dark:border-transparent shadow-[0_-1px_8px_rgba(44,36,30,0.03)] dark:shadow-[0_-1px_8px_rgba(0,0,0,0.15)]">
      <div className="max-w-[960px] mx-auto px-margin md:px-gutter-desktop grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-space-md font-code text-body-sm text-[#877C6F] dark:text-text-muted">
        <div className="text-center sm:text-left">Coded with ❤️ and ☕ by Kavan</div>
        <div className="flex justify-center" aria-hidden="true">
          <img src="/favicon.svg" alt="" className="h-8 w-8 dark:hidden" />
          <img src="/favicon-dark.svg" alt="" className="hidden h-8 w-8 dark:block" />
        </div>
        <div className="flex items-center justify-center sm:justify-self-end gap-space-md">
          <a
            href={profile.github.url}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#231E18] dark:hover:text-text-primary transition-colors flex items-center gap-1"
          >
            <span>github: {profile.github.username}</span>
            <span className="material-symbols-outlined text-[13px]">open_in_new</span>
          </a>
          <a
            href={profile.linkedin.url}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#231E18] dark:hover:text-text-primary transition-colors flex items-center gap-1"
          >
            <span>linkedin: {profile.linkedin.username}</span>
            <span className="material-symbols-outlined text-[13px]">open_in_new</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
