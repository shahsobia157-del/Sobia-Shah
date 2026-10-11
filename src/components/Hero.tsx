import React, { useState } from 'react';
import { IMAGES } from '../data/hospitalData';
import { Calendar, ArrowRight, ShieldCheck, HeartHandshake, Award } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-[#FAF8F3]">
      {/* Subtle organic luxury background watermark/lines (controlled opacity) */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-40">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#A9B9A7]/15 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-[#C6A66B]/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Accreditation Kicker - clean unboxed metadata with dot */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A66B] mb-5">
              <span>JCI Accredited Academic Medical Center</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#536468]">Established Excellence</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#123F46] leading-[1.12] tracking-tight mb-6 [text-wrap:balance]">
              Exceptional Care. <br className="hidden sm:inline" />
              <span className="font-light italic text-[#273437]">A Healthier Tomorrow.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg md:text-xl text-[#536468] leading-relaxed max-w-2xl mb-8 font-normal">
              Where advanced medical expertise meets compassionate care, creating a better healthcare experience for every patient.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-[#123F46] hover:bg-[#0D2D32] active:bg-[#081D20] rounded-sm shadow-md transition-all duration-150 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#123F46]"
              >
                <Calendar className="w-4 h-4 text-[#C6A66B]" />
                <span>Book an Appointment</span>
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#123F46] hover:text-[#0D2D32] bg-white hover:bg-[#F3EFE7] border border-[#123F46]/20 rounded-sm transition-all duration-150 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#123F46]"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-[#C6A66B]" />
              </button>
            </div>

            {/* Editorial Trust Badges */}
            <div className="pt-6 border-t border-[#123F46]/10 w-full flex flex-wrap items-center gap-y-3 gap-x-8 text-xs text-[#536468]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#123F46]" />
                <span className="font-medium text-[#273437]">99.4% Safety Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#123F46]" />
                <span className="font-medium text-[#273437]">Patient-First Holistic Care</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#123F46]" />
                <span className="font-medium text-[#273437]">Board-Certified Faculty</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Photograph & Floating Appointment Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Refined Image Frame with subtle champagne shadow */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#EBF1EA] border border-[#123F46]/10 aspect-4/3 sm:aspect-4/3 lg:aspect-4/3">
                {!imgLoaded && !imgError && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#123F46]/10 to-[#A9B9A7]/20 animate-pulse flex items-center justify-center">
                    <span className="text-xs text-[#536468]">Loading clinical portrait...</span>
                  </div>
                )}
                
                <img
                  src={IMAGES.hero}
                  alt="Compassionate senior doctor consulting with a patient at Aurevia Medical Center"
                  referrerPolicy="no-referrer"
                  onLoad={() => setImgLoaded(true)}
                  onError={() => setImgError(true)}
                  className={`w-full h-full object-cover transition-opacity duration-700 ${
                    imgLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {imgError && (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#123F46] text-white text-center">
                    <ShieldCheck className="w-12 h-12 text-[#C6A66B] mb-3" />
                    <h3 className="font-semibold text-lg">Aurevia Medical Center</h3>
                    <p className="text-xs text-white/80 mt-1">Exceptional Care. A Healthier Tomorrow.</p>
                  </div>
                )}

                {/* Subtle soft dark gradient scrim at bottom edge for image depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Reassurance Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-[#123F46]/10 max-w-[270px] z-20">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF8F3] border border-[#C6A66B]/30 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-[#123F46]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#123F46]">Direct Consultation</p>
                    <p className="text-[11px] text-[#536468] mt-0.5 leading-snug">
                      Priority scheduling with senior department heads
                    </p>
                    <div className="flex items-center gap-1.5 mt-2 text-[10px] text-[#C6A66B] font-semibold tracking-wider uppercase">
                      <span>Same-Day Triage Available</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Quality Indicator */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#123F46] text-white px-3.5 py-2 rounded-lg shadow-lg border border-[#C6A66B]/30 items-center gap-2 z-20">
                <Award className="w-4 h-4 text-[#C6A66B]" />
                <span className="text-xs font-medium tracking-wide">Top Rated Hospital 2026</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
