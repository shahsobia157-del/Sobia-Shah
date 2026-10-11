import React from 'react';
import { Cpu, HeartHandshake, UserCheck, Stethoscope, Clock, ShieldCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      title: 'Advanced Medical Technology',
      description: 'Equipped with 3T wide-bore MRI, da Vinci Xi multi-quadrant surgical robotics, and hybrid catheterization suites for pinpoint clinical accuracy.',
      metric: 'Sub-millimeter Surgical Precision',
    },
    {
      icon: HeartHandshake,
      title: 'Compassionate Human Dignity',
      description: 'Care delivered with patient autonomy and emotional reassurance at its core. We maintain a 1:3 nurse-to-patient ratio in acute inpatient units.',
      metric: '1:3 Dedicated Nurse Ratio',
    },
    {
      icon: UserCheck,
      title: 'Coordinated Clinical Pathways',
      description: 'Zero fragmented communication. Every patient is guided by a dedicated Clinical Care Navigator from pre-admission to post-discharge recovery.',
      metric: '100% Care Continuity',
    },
    {
      icon: Stethoscope,
      title: 'Subspecialized Board Faculty',
      description: 'Over 48 fellowship-trained physicians leading clinical trials and pioneering medical publications in their respective therapeutic fields.',
      metric: 'Faculty-Led Treatment Teams',
    },
    {
      icon: Clock,
      title: 'Accelerated Diagnostic Turnaround',
      description: 'Same-day clinical pathology, genomic biomarker testing, and rapid imaging interpretations to start treatment without agonizing delays.',
      metric: '< 4h Comprehensive Lab Results',
    },
    {
      icon: ShieldCheck,
      title: 'Sanctuary-Grade Private Recovery',
      description: 'Private inpatient suites with biophilic views, personalized nutrition menus curated by clinical dietitians, and family guest quarters.',
      metric: '0.08% Nosocomial Infection Rate',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-t border-[#123F46]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A66B] mb-3">
            <span>The Aurevia Difference</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#536468]">Clinical Benchmarks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#123F46] tracking-tight [text-wrap:balance]">
            Why Discerning Patients Entrust Their Health to Us
          </h2>
          <p className="text-base text-[#536468] mt-3 font-normal">
            We reject assembly-line healthcare. Our practice model combines world-class medical science with the thoughtful hospitality of a premier private sanctuary.
          </p>
        </div>

        {/* 6-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-xl bg-[#FAF8F3] border border-[#123F46]/10 hover:border-[#C6A66B]/50 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-white border border-[#123F46]/10 flex items-center justify-center mb-6 group-hover:bg-[#123F46] transition-colors duration-200">
                    <Icon className="w-6 h-6 text-[#123F46] group-hover:text-[#C6A66B] transition-colors duration-200" />
                  </div>

                  <h3 className="text-lg font-bold text-[#123F46] mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#536468] leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#123F46]/10 flex items-center justify-between text-xs">
                  <span className="text-[#C6A66B] font-semibold uppercase tracking-wider text-[11px]">
                    {pillar.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
