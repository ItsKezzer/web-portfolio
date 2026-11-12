import { useEffect, useState, useCallback } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback((targetElement?: HTMLElement | null) => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';

    // View transition API circular ripple expansion
    // Supported in modern Chrome / Edge / Arc / Safari 18+
    const hasViewTransition =
      typeof document !== 'undefined' &&
      'startViewTransition' in document &&
      typeof (document as unknown as { startViewTransition: unknown }).startViewTransition === 'function';

    if (hasViewTransition && targetElement) {
      const rect = targetElement.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const maxRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const doc = document as unknown as {
        startViewTransition: (callback: () => void) => {
          ready: Promise<void>;
        };
      };

      const transition = doc.startViewTransition(() => {
        setTheme(nextTheme);
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${maxRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 450,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            pseudoElement: '::view-transition-new(root)',
          }
        );
      });
    } else {
      setTheme(nextTheme);
    }
  }, [theme]);

  return { theme, toggleTheme };
}
