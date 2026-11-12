import React, { useEffect } from 'react';
import { CvOption } from '../types';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  options: CvOption[];
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, options }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/40 dark:bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 transition-opacity duration-200 animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[440px] rounded-xl border border-[#E3DCD2] dark:border-surface-container bg-[#FAF7F2] dark:bg-surface-panel p-space-md shadow-lg transition-transform duration-200 scale-100 space-y-space-md"
      >
        <div className="flex items-center justify-between border-b border-[#E8E2D8] dark:border-surface-container/50 pb-space-xs">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-primary">
              description
            </span>
            <h3
              id="cv-modal-title"
              className="font-code text-body-md font-medium text-[#231E18] dark:text-text-primary"
            >
              Curriculum Vitae
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-7 h-7 rounded border border-[#E3DCD2] dark:border-surface-container/60 bg-[#F0ECE1] hover:bg-[#E7E1D4] dark:bg-surface-container dark:hover:bg-surface-raised flex items-center justify-center text-[#73685C] hover:text-[#231E18] dark:text-text-muted dark:hover:text-text-primary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>

        <p className="font-body-sm text-body-sm text-[#61564C] dark:text-text-secondary">
          Select language version / Choisissez la version&nbsp;:
        </p>

        <div className="flex flex-col gap-2 font-code text-body-sm">
          {options.map((opt) => (
            <a
              key={opt.code}
              href={opt.url}
              target="_blank"
              rel="noreferrer"
              onClick={onClose}
              className="flex items-center justify-between p-2.5 rounded-lg border border-[#E8E2D8] hover:border-[#D6CCC0] dark:border-surface-container/50 dark:hover:border-surface-container bg-[#FFFDF9] hover:bg-[#F7F2E7] dark:bg-surface-container/30 dark:hover:bg-surface-container/70 transition-all text-[#231E18] dark:text-text-primary group"
            >
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded text-[11px] font-bold tracking-wider bg-[#EDE7DB] dark:bg-surface-container/60 text-[#61564C] dark:text-text-secondary group-hover:bg-blue-600/10 dark:group-hover:bg-primary/10 group-hover:text-blue-600 dark:group-hover:text-primary transition-colors">
                  {opt.code}
                </span>
                <span className="font-medium">{opt.title}</span>
              </div>
              <span className="material-symbols-outlined text-[16px] text-[#73685C] dark:text-text-secondary group-hover:text-blue-600 dark:group-hover:text-primary transition-all group-hover:translate-x-0.5">
                arrow_outward
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
