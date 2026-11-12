import React, { useRef } from 'react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: (targetElement: HTMLElement | null) => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleClick = () => {
    onToggle(buttonRef.current);
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={handleClick}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative w-9 h-9 rounded-lg border border-[#E3DCD2] dark:border-surface-container bg-[#F0ECE1] hover:bg-[#E7E1D4] dark:bg-surface-panel dark:hover:bg-surface-raised text-[#3D352E] dark:text-text-primary flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/60 transform hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer overflow-hidden shadow-xs"
    >
      <span
        className="material-symbols-outlined text-[19px] absolute text-amber-700 theme-icon-light select-none"
        aria-hidden="true"
      >
        dark_mode
      </span>
      <span
        className="material-symbols-outlined text-[19px] absolute text-primary theme-icon-dark select-none"
        aria-hidden="true"
      >
        light_mode
      </span>
    </button>
  );
};
