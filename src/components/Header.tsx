import React from 'react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  handle: string;
  theme: 'light' | 'dark';
  onToggleTheme: (targetElement: HTMLElement | null) => void;
}

export const Header: React.FC<HeaderProps> = ({ handle, theme, onToggleTheme }) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#FAF7F2]/90 dark:bg-surface/85 backdrop-blur-md shadow-[0_1px_8px_rgba(44,36,30,0.05)] dark:shadow-[0_1px_8px_rgba(0,0,0,0.25)] border-b border-[#E8E2D8] dark:border-transparent">
      <div className="h-16 max-w-[960px] mx-auto px-margin md:px-gutter-desktop flex items-center justify-between">
        <a
          href="#"
          className="font-code text-body-md text-[#231E18] dark:text-text-primary hover:text-blue-600 dark:hover:text-primary transition-colors tracking-tight flex items-center gap-1.5"
        >
          <span className="text-blue-600 dark:text-primary font-bold">&gt;</span>
          <span>{handle}</span>
        </a>
        <nav className="flex items-center gap-space-md sm:gap-space-lg font-code text-body-sm">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </nav>
      </div>
    </header>
  );
};
