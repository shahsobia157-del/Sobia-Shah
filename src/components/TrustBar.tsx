import React from 'react';
import { HOSPITAL_STATS } from '../data/hospitalData';
import { Info } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-[#123F46] text-white py-10 border-y border-[#C6A66B]/20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-radial from-[#1A4D55]/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
          {HOSPITAL_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-3 sm:p-4 group"
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight tabular-nums transition-transform duration-200 group-hover:scale-105">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-[#C6A66B] mt-2 tracking-wide">
                {stat.label}
              </span>
              <span className="text-xs text-[#FAF8F3]/70 mt-1 max-w-[200px] leading-tight">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Clear editable sample statistics disclaimer */}
        <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-[11px] text-[#FAF8F3]/60">
          <Info className="w-3.5 h-3.5 text-[#C6A66B] shrink-0" />
          <span>
            Sample clinical indicators for Aurevia Medical Center demonstration. All statistics are configurable for institutional accreditation reporting.
          </span>
        </div>

      </div>
    </section>
  );
};
