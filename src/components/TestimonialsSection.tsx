import React from 'react';
import { TESTIMONIALS } from '../data/hospitalData';
import { Quote, Info, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAF8F3] border-t border-[#123F46]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A66B] mb-3">
            <span>Patient Perspectives</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#536468]">Recovery Journeys</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#123F46] tracking-tight [text-wrap:balance]">
            Restoring Health, Renewing Dignity
          </h2>
          <p className="text-base text-[#536468] mt-3">
            Stories reflecting our patient-first ethos across specialized surgical, cardiac, and pediatric programs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-7 sm:p-8 rounded-2xl border border-[#123F46]/10 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#C6A66B]/60 mb-5" />

                <p className="text-sm sm:text-base text-[#273437] leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div>
                {/* Clinical Milestone */}
                <div className="p-3 bg-[#FAF8F3] rounded-lg border border-[#123F46]/5 flex items-start gap-2 mb-4 text-xs text-[#536468]">
                  <CheckCircle2 className="w-4 h-4 text-[#123F46] shrink-0 mt-0.5" />
                  <span className="font-medium text-[#123F46]">{t.outcome}</span>
                </div>

                <div className="pt-4 border-t border-[#123F46]/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#123F46]">
                      {t.patientName}
                    </h4>
                    <p className="text-xs text-[#536468] mt-0.5">
                      {t.condition} · {t.department}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Clear disclaimer per prompt instructions */}
        <div className="mt-10 pt-4 border-t border-[#123F46]/10 flex items-center justify-center gap-2 text-xs text-[#536468]">
          <Info className="w-4 h-4 text-[#C6A66B] shrink-0" />
          <span>
            Sample clinical testimonials and representative recovery scenarios created for the Aurevia website demonstration.
          </span>
        </div>

      </div>
    </section>
  );
};
