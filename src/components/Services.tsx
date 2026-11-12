import React from 'react';
import { ServiceItem } from '../types';

interface ServicesProps {
  services: ServiceItem[];
}

export const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <section className="space-y-space-lg" id="services">
      <div className="flex items-baseline justify-between border-b border-[#E8E2D8] dark:border-surface-container/50 pb-space-sm">
        <h2 className="font-code text-headline-sm text-[#231E18] dark:text-text-primary tracking-tight">
          <span className="text-blue-600 dark:text-primary font-bold mr-1">&gt;</span>Services
        </h2>
        <span className="font-code text-label-sm text-[#877C6F] dark:text-text-muted">
          Self-hosted &amp; operational
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
        {services.map((service) => (
          <a
            key={service.id}
            href={service.url}
            target="_blank"
            rel="noreferrer"
            className="group p-space-md rounded-xl bg-[#FFFDF9] hover:bg-[#F7F2E7] dark:bg-surface-panel/60 dark:hover:bg-surface-panel border border-[#E8E2D8] dark:border-surface-container/40 hover:border-[#D6CCC0] dark:hover:border-surface-container transition-all flex flex-col justify-between space-y-space-sm shadow-sm dark:shadow-none hover:shadow"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="font-code text-body-md text-[#231E18] group-hover:text-blue-600 dark:text-text-primary dark:group-hover:text-primary transition-colors font-medium">
                  {service.title}
                </span>
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    service.status === 'active'
                      ? 'bg-status-active'
                      : service.status === 'degraded'
                      ? 'bg-amber-500'
                      : 'bg-status-alert'
                  }`}
                  title={`Status: ${service.status}`}
                />
              </div>
              <span className="material-symbols-outlined text-[16px] text-[#A69B8E] group-hover:text-[#231E18] dark:text-text-muted dark:group-hover:text-text-primary transition-colors">
                arrow_outward
              </span>
            </div>

            <p className="font-body-sm text-body-sm text-[#61564C] dark:text-text-secondary leading-relaxed">
              {service.description}
            </p>

            <span className="font-code text-label-sm text-[#877C6F] dark:text-text-muted">
              {service.domain}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};
