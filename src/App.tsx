import React, { useEffect, useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import {
  personalProfile,
  servicesData,
  experienceData,
  cvOptions,
} from './data/portfolioData';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  useEffect(() => {
    const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (favicon) {
      favicon.href = theme === 'dark' ? '/favicon-dark.svg' : '/favicon.svg';
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] dark:bg-surface font-body-md text-[#2C241E] dark:text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container">
      {/* Navigation Header */}
      <Header
        handle={personalProfile.handle}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Area */}
      <main className="w-full pt-16 bg-[#FAF7F2] dark:bg-surface min-h-[calc(100vh-140px)]">
        <div className="max-w-[960px] mx-auto px-margin md:px-gutter-desktop py-space-2xl space-y-space-2xl">
          {/* Hero Profile Introduction */}
          <Hero
            profile={personalProfile}
            onOpenCvModal={() => setIsCvModalOpen(true)}
            isCvModalOpen={isCvModalOpen}
          />

          {/* Self-hosted & Operational Services */}
          <Services services={servicesData} />

          {/* Systems & Engineering Experience Timeline */}
          <Experience experience={experienceData} />
        </div>
      </main>

      {/* Footer */}
      <Footer profile={personalProfile} />

      {/* CV Download Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        options={cvOptions}
      />
    </div>
  );
};

export default App;
